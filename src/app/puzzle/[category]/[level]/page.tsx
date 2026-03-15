'use client';

import React, { useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import WordBuilder, { WordResult } from '@/components/game/WordBuilder';
import WordPreview from '@/components/game/WordPreview';
import LevelComplete from '@/components/game/LevelComplete';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { getCategoryById, getLevelById } from '@/data/puzzle';
import { calculateStars } from '@/lib/utils';
import { CrownIcon } from '@/components/icons/Icon3D';

export default function PuzzleLevelPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { progress, updatePuzzleProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();

  const categoryId = params.category as string;
  const levelId = params.level as string;

  const category = getCategoryById(categoryId);
  const level = getLevelById(levelId);

  const [phase, setPhase] = useState<'preview' | 'game' | 'complete'>('preview');
  const [result, setResult] = useState({ score: 0, correct: 0, total: 0 });
  const [wordResults, setWordResults] = useState<WordResult[]>([]);

  const isPremiumUser = progress.isPremium || unlockPro;

  // Check if level exists
  if (!category || !level) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8F9FF] to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg max-w-sm w-full">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-xl font-bold text-[#1F2937] mb-2">Level not found</h1>
          <p className="text-gray-500 text-sm mb-6">This level doesn&apos;t exist or has been removed.</p>
          <button
            onClick={() => router.push('/puzzle')}
            className="bg-[#440687] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#350568] transition-colors"
          >
            Back to Puzzle
          </button>
        </div>
      </div>
    );
  }

  // Check if level is locked
  const levelIndex = category.levels.findIndex(l => l.id === levelId);
  const isLevelFree = levelIndex < category.freeLevels;
  const isLocked = level.isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels;

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8F9FF] to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-lg"
        >
          <div className="mb-4 flex justify-center">
            <CrownIcon size={64} animate />
          </div>
          <h1 className="text-xl font-bold text-[#1F2937] mb-2">
            Premium Level
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Upgrade to PRO to unlock this level and access all content.
          </p>
          <button
            onClick={() => router.push('/puzzle')}
            className="bg-[#440687] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#350568] transition-colors"
          >
            Back to Levels
          </button>
        </motion.div>
      </div>
    );
  }

  const handleGameComplete = useCallback((score: number, correct: number, total: number, hintsUsed: number, results: WordResult[]) => {
    setResult({ score, correct, total });
    setWordResults(results);
    setPhase('complete');

    // Calculate stars and save progress
    const stars = calculateStars(correct, total);
    updatePuzzleProgress(levelId, stars, score, hintsUsed);
  }, [levelId, updatePuzzleProgress]);

  const handleReplay = useCallback(() => {
    setPhase('preview');
  }, []);

  const handleStartGame = useCallback(() => {
    setPhase('game');
  }, []);

  const handleNextLevel = useCallback(() => {
    const currentIndex = category.levels.findIndex(l => l.id === levelId);
    if (currentIndex < category.levels.length - 1) {
      const nextLevel = category.levels[currentIndex + 1];
      router.push(`/puzzle/${categoryId}/${nextLevel.id}`);
    } else {
      router.push('/puzzle');
    }
  }, [category, categoryId, levelId, router]);

  const handleExit = useCallback(() => {
    router.push('/puzzle');
  }, [router]);

  // Show complete screen
  if (phase === 'complete') {
    const hasNextLevel = levelIndex < category.levels.length - 1;

    return (
      <LevelComplete
        level={level.levelNumber}
        score={result.score}
        correctAnswers={result.correct}
        totalQuestions={result.total}
        category="hangul"
        categoryName={`${category.icon} ${category.name}`}
        onReplay={handleReplay}
        onNext={handleNextLevel}
        onBackToLevel={() => { setPhase('preview'); }}
        hasNextLevel={hasNextLevel}
        wordResults={wordResults}
      />
    );
  }

  // Show word preview (study) screen
  if (phase === 'preview') {
    return (
      <div style={{ height: '100dvh', background: '#421785', padding: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <WordPreview
            words={level.words}
            levelNumber={level.levelNumber}
            onStartGame={handleStartGame}
            onSkip={handleStartGame}
            onExit={handleExit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] bg-[#421785] py-4 px-4 overflow-hidden flex flex-col">
      <div className="max-w-md md:max-w-lg mx-auto w-full flex-1 flex flex-col">
        <WordBuilder
          words={level.words}
          onComplete={handleGameComplete}
          onExit={handleExit}
        />
      </div>
    </div>
  );
}
