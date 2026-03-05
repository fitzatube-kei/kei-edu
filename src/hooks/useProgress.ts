'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { UserProgress, LevelProgress, GameCategory, StoryEpisodeProgress, CategoryProgress, HistoryCategory, PuzzleLevelProgress } from '@/types';
import { getFromStorage, setToStorage } from '@/lib/utils';

const defaultProgress: UserProgress = {
  userId: '',
  hangulProgress: [],
  historyProgress: [],
  cultureProgress: [],
  storyProgress: [],
  puzzleProgress: [],
  totalScore: 0,
  streakDays: 0,
  lastPlayedAt: new Date(),
  isPremium: false,
};

// Premium users list (for testing) - all lowercase for comparison
const PREMIUM_EMAILS = [
  'han0726k@gmail.com',
];

// Helper function for case-insensitive email check
const isPremiumEmail = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return PREMIUM_EMAILS.includes(email.toLowerCase());
};

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const streakCheckedRef = useRef(false); // Prevent multiple streak updates

  // Fetch progress from Firestore or localStorage
  const fetchProgress = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (user) {
        // Fetch from Firestore for logged-in users
        const progressRef = doc(db, 'userProgress', user.uid);
        const progressDoc = await getDoc(progressRef);

        if (progressDoc.exists()) {
          const data = progressDoc.data() as UserProgress;
          // Check if user email is in premium list (case-insensitive)
          const isPremiumUser = isPremiumEmail(user.email);
          const finalIsPremium = data.isPremium || isPremiumUser;
          console.log('[useProgress] User:', user.email, 'isPremiumUser:', isPremiumUser, 'data.isPremium:', data.isPremium, 'final:', finalIsPremium);
          setProgress({
            ...data,
            cultureProgress: data.cultureProgress || [],
            puzzleProgress: data.puzzleProgress || [],
            isPremium: finalIsPremium,
            lastPlayedAt: data.lastPlayedAt instanceof Date
              ? data.lastPlayedAt
              : new Date((data.lastPlayedAt as { seconds: number }).seconds * 1000),
          });
        } else {
          // Initialize progress for new user
          const isPremiumUser = isPremiumEmail(user.email);
          console.log('[useProgress] New user:', user.email, 'isPremiumUser:', isPremiumUser);
          const newProgress = { ...defaultProgress, userId: user.uid, isPremium: isPremiumUser };
          await setDoc(progressRef, newProgress);
          setProgress(newProgress);
        }
      } else {
        // Use localStorage for guests
        const localProgress = getFromStorage<UserProgress>('guestProgress', defaultProgress);
        setProgress({
          ...localProgress,
          cultureProgress: localProgress.cultureProgress || [],
          puzzleProgress: localProgress.puzzleProgress || [],
        });
      }
    } catch (err) {
      console.error('Error fetching progress:', err);
      setError('진행 상황을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Update level progress (for hangul and old history levels)
  const updateLevelProgress = async (
    category: GameCategory,
    level: number,
    stars: number,
    score: number
  ) => {
    const progressKey = category === 'hangul' ? 'hangulProgress' : 'historyProgress';
    const currentProgress = progress[progressKey];

    // Find existing level progress or create new
    const existingIndex = currentProgress.findIndex(p => p.level === level);
    const existingLevel = currentProgress[existingIndex];

    const newLevelProgress: LevelProgress = {
      level,
      stars: existingLevel ? Math.max(existingLevel.stars, stars) : stars,
      score: existingLevel ? Math.max(existingLevel.score, score) : score,
      completed: stars >= 1,
      completedAt: new Date(),
    };

    let updatedProgress: LevelProgress[];
    if (existingIndex !== -1) {
      updatedProgress = [...currentProgress];
      updatedProgress[existingIndex] = newLevelProgress;
    } else {
      updatedProgress = [...currentProgress, newLevelProgress];
    }

    const newTotalScore = progress.totalScore + score - (existingLevel?.score || 0);

    const updatedUserProgress: UserProgress = {
      ...progress,
      [progressKey]: updatedProgress,
      totalScore: newTotalScore,
      lastPlayedAt: new Date(),
    };

    setProgress(updatedUserProgress);

    try {
      if (user) {
        const progressRef = doc(db, 'userProgress', user.uid);
        await updateDoc(progressRef, {
          [progressKey]: updatedProgress,
          totalScore: newTotalScore,
          lastPlayedAt: new Date(),
        });
      } else {
        setToStorage('guestProgress', updatedUserProgress);
      }
    } catch (err) {
      console.error('Error updating progress:', err);
      setError('진행 상황 저장에 실패했습니다.');
    }
  };

  // Update culture level progress (for new category-based system)
  const updateCultureProgress = async (
    levelId: string,
    stars: number,
    score: number,
    hintsUsed: number = 0
  ) => {
    const currentProgress = progress.cultureProgress || [];
    const existingIndex = currentProgress.findIndex(p => p.levelId === levelId);
    const existingLevel = currentProgress[existingIndex];

    const newCultureProgress: CategoryProgress = {
      levelId,
      stars: existingLevel ? Math.max(existingLevel.stars, stars) : stars,
      score: existingLevel ? Math.max(existingLevel.score, score) : score,
      completed: stars >= 1,
      hintsUsed: existingLevel
        ? Math.min(existingLevel.hintsUsed || 0, hintsUsed)
        : hintsUsed,
      completedAt: new Date(),
    };

    let updatedCultureProgress: CategoryProgress[];
    if (existingIndex !== -1) {
      updatedCultureProgress = [...currentProgress];
      updatedCultureProgress[existingIndex] = newCultureProgress;
    } else {
      updatedCultureProgress = [...currentProgress, newCultureProgress];
    }

    const newTotalScore = progress.totalScore + score - (existingLevel?.score || 0);

    const updatedUserProgress: UserProgress = {
      ...progress,
      cultureProgress: updatedCultureProgress,
      totalScore: newTotalScore,
      lastPlayedAt: new Date(),
    };

    setProgress(updatedUserProgress);

    try {
      if (user) {
        const progressRef = doc(db, 'userProgress', user.uid);
        await updateDoc(progressRef, {
          cultureProgress: updatedCultureProgress,
          totalScore: newTotalScore,
          lastPlayedAt: new Date(),
        });
      } else {
        setToStorage('guestProgress', updatedUserProgress);
      }
    } catch (err) {
      console.error('Error updating culture progress:', err);
      setError('문화 진행 상황 저장에 실패했습니다.');
    }
  };

  // Update story episode progress
  const updateStoryProgress = async (
    episodeId: string,
    score: number,
    choices: string[],
    earnedBadge?: string
  ) => {
    const currentProgress = progress.storyProgress || [];
    const existingIndex = currentProgress.findIndex(p => p.episodeId === episodeId);
    const existingEpisode = currentProgress[existingIndex];

    const newEpisodeProgress: StoryEpisodeProgress = {
      episodeId,
      score: existingEpisode ? Math.max(existingEpisode.score, score) : score,
      completed: true,
      choices,
      earnedBadge: earnedBadge || existingEpisode?.earnedBadge,
      completedAt: new Date(),
    };

    let updatedStoryProgress: StoryEpisodeProgress[];
    if (existingIndex !== -1) {
      updatedStoryProgress = [...currentProgress];
      updatedStoryProgress[existingIndex] = newEpisodeProgress;
    } else {
      updatedStoryProgress = [...currentProgress, newEpisodeProgress];
    }

    const newTotalScore = progress.totalScore + score - (existingEpisode?.score || 0);

    const updatedUserProgress: UserProgress = {
      ...progress,
      storyProgress: updatedStoryProgress,
      totalScore: newTotalScore,
      lastPlayedAt: new Date(),
    };

    setProgress(updatedUserProgress);

    try {
      if (user) {
        const progressRef = doc(db, 'userProgress', user.uid);
        await updateDoc(progressRef, {
          storyProgress: updatedStoryProgress,
          totalScore: newTotalScore,
          lastPlayedAt: new Date(),
        });
      } else {
        setToStorage('guestProgress', updatedUserProgress);
      }
    } catch (err) {
      console.error('Error updating story progress:', err);
      setError('스토리 진행 상황 저장에 실패했습니다.');
    }
  };

  // Get story episode progress
  const getStoryProgress = (episodeId: string): StoryEpisodeProgress | undefined => {
    return (progress.storyProgress || []).find(p => p.episodeId === episodeId);
  };

  // Update puzzle level progress
  const updatePuzzleProgress = async (
    levelId: string,
    stars: number,
    score: number,
    hintsUsed: number = 0
  ) => {
    const currentProgress = progress.puzzleProgress || [];
    const existingIndex = currentProgress.findIndex(p => p.levelId === levelId);
    const existingLevel = currentProgress[existingIndex];

    const newPuzzleProgress: PuzzleLevelProgress = {
      levelId,
      stars: existingLevel ? Math.max(existingLevel.stars, stars) : stars,
      score: existingLevel ? Math.max(existingLevel.score, score) : score,
      completed: stars >= 1,
      hintsUsed: existingLevel
        ? Math.min(existingLevel.hintsUsed || 0, hintsUsed)
        : hintsUsed,
      completedAt: new Date(),
    };

    let updatedPuzzleProgress: PuzzleLevelProgress[];
    if (existingIndex !== -1) {
      updatedPuzzleProgress = [...currentProgress];
      updatedPuzzleProgress[existingIndex] = newPuzzleProgress;
    } else {
      updatedPuzzleProgress = [...currentProgress, newPuzzleProgress];
    }

    const newTotalScore = progress.totalScore + score - (existingLevel?.score || 0);

    const updatedUserProgress: UserProgress = {
      ...progress,
      puzzleProgress: updatedPuzzleProgress,
      totalScore: newTotalScore,
      lastPlayedAt: new Date(),
    };

    setProgress(updatedUserProgress);

    try {
      if (user) {
        const progressRef = doc(db, 'userProgress', user.uid);
        await updateDoc(progressRef, {
          puzzleProgress: updatedPuzzleProgress,
          totalScore: newTotalScore,
          lastPlayedAt: new Date(),
        });
      } else {
        setToStorage('guestProgress', updatedUserProgress);
      }
    } catch (err) {
      console.error('Error updating puzzle progress:', err);
      setError('퍼즐 진행 상황 저장에 실패했습니다.');
    }
  };

  // Get puzzle level progress
  const getPuzzleLevelProgress = (levelId: string): PuzzleLevelProgress | undefined => {
    return (progress.puzzleProgress || []).find(p => p.levelId === levelId);
  };

  // Get level progress (supports both old and new systems)
  const getLevelProgress = (
    category: GameCategory,
    level: number,
    historyCategory?: HistoryCategory
  ): LevelProgress | CategoryProgress | undefined => {
    // For culture/history with category
    if (category === 'history' && historyCategory) {
      const levelId = `${historyCategory}-${level}`;
      return (progress.cultureProgress || []).find(p => p.levelId === levelId);
    }

    // For old system or hangul
    const progressKey = category === 'hangul' ? 'hangulProgress' : 'historyProgress';
    return progress[progressKey].find(p => p.level === level);
  };

  // Get culture level progress by level ID
  const getCultureLevelProgress = (levelId: string): CategoryProgress | undefined => {
    return (progress.cultureProgress || []).find(p => p.levelId === levelId);
  };

  // Check if level is unlocked (supports both old and new systems)
  const isLevelUnlocked = (
    category: GameCategory,
    level: number,
    historyCategory?: HistoryCategory
  ): boolean => {
    if (level === 1) return true;

    // For culture/history with category
    if (category === 'history' && historyCategory) {
      const previousLevelId = `${historyCategory}-${level - 1}`;
      const previousLevel = (progress.cultureProgress || []).find(
        p => p.levelId === previousLevelId
      );
      return previousLevel?.completed || false;
    }

    // For old system or hangul
    const previousLevel = getLevelProgress(category, level - 1);
    return previousLevel?.completed || false;
  };

  // Check if culture level is unlocked by level ID
  const isCultureLevelUnlocked = (levelId: string): boolean => {
    // Parse the level ID to get category and level number
    const parts = levelId.split('-');
    const levelNum = parseInt(parts[parts.length - 1], 10);

    if (levelNum === 1) return true;

    // Get the previous level ID
    const categoryParts = parts.slice(0, -1).join('-');
    const previousLevelId = `${categoryParts}-${levelNum - 1}`;
    const previousLevel = (progress.cultureProgress || []).find(
      p => p.levelId === previousLevelId
    );

    return previousLevel?.completed || false;
  };

  // Update streak - memoized to prevent infinite loops
  const updateStreak = useCallback(async () => {
    // Prevent multiple calls in the same session
    if (streakCheckedRef.current) {
      return;
    }
    streakCheckedRef.current = true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastPlayed = new Date(progress.lastPlayedAt);
    lastPlayed.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((today.getTime() - lastPlayed.getTime()) / (1000 * 60 * 60 * 24));

    let newStreak = progress.streakDays;
    if (diffDays === 0) {
      // Same day, no change
      return;
    } else if (diffDays === 1) {
      // Consecutive day
      newStreak += 1;
    } else {
      // Streak broken
      newStreak = 1;
    }

    const updatedProgress = { ...progress, streakDays: newStreak, lastPlayedAt: new Date() };
    setProgress(updatedProgress);

    try {
      if (user) {
        const progressRef = doc(db, 'userProgress', user.uid);
        await updateDoc(progressRef, { streakDays: newStreak, lastPlayedAt: new Date() });
      } else {
        setToStorage('guestProgress', updatedProgress);
      }
    } catch (err) {
      console.error('Error updating streak:', err);
    }
  }, [progress.lastPlayedAt, progress.streakDays, user, progress]);

  return {
    progress,
    loading,
    error,
    updateLevelProgress,
    updateCultureProgress,
    updatePuzzleProgress,
    getLevelProgress,
    getCultureLevelProgress,
    getPuzzleLevelProgress,
    isLevelUnlocked,
    isCultureLevelUnlocked,
    updateStreak,
    updateStoryProgress,
    getStoryProgress,
    refetch: fetchProgress,
  };
}
