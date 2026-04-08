'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import WordBuilder, { WordResult } from '@/components/game/WordBuilder';
import WordPreview from '@/components/game/WordPreview';
import WritingPractice from '@/components/game/WritingPractice';
import LevelComplete from '@/components/game/LevelComplete';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { getCategoryById, getLevelById } from '@/data/puzzle';
import { calculateStars } from '@/lib/utils';
import { CrownIcon } from '@/components/icons/Icon3D';

type Phase = 'select' | 'write' | 'preview' | 'game' | 'complete';

export default function PuzzleLevelPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { progress, updatePuzzleProgress, getPuzzleLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();

  const categoryId = params.category as string;
  const levelId = params.level as string;

  const category = getCategoryById(categoryId);
  const level = getLevelById(levelId);

  const [phase, setPhase] = useState<Phase>('select');
  const [result, setResult] = useState({ score: 0, correct: 0, total: 0 });
  const [wordResults, setWordResults] = useState<WordResult[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const isPremiumUser = progress.isPremium || unlockPro;

  // Get completed games for this level
  const levelProgress = getPuzzleLevelProgress(levelId);
  const completedGames = levelProgress?.completedGames || [];
  const writeCompleted = completedGames.includes('write');

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

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
    updatePuzzleProgress(levelId, stars, score, hintsUsed, 'puzzle');
  }, [levelId, updatePuzzleProgress]);

  const handleReplay = useCallback(() => {
    setPhase('select');
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

  const handleWriteComplete = useCallback(() => {
    updatePuzzleProgress(levelId, 0, 0, 0, 'write');
    setPhase('select');
  }, [levelId, updatePuzzleProgress]);

  const handlePuzzleClick = useCallback(() => {
    if (!writeCompleted) {
      setToast('Complete Writing Practice first!');
      return;
    }
    setPhase('game');
  }, [writeCompleted]);

  // ---- PHASE RENDERING ----

  // Writing Practice phase
  if (phase === 'write') {
    return (
      <WritingPractice
        words={level.words}
        onComplete={handleWriteComplete}
        onExit={() => setPhase('select')}
      />
    );
  }

  // Complete phase
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
        onBackToLevel={() => { setPhase('select'); }}
        hasNextLevel={hasNextLevel}
        wordResults={wordResults}
      />
    );
  }

  // Preview phase (word study before game)
  if (phase === 'preview') {
    return (
      <div style={{ height: '100dvh', background: '#421785', padding: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <WordPreview
            words={level.words}
            levelNumber={level.levelNumber}
            onStartGame={handleStartGame}
            onSkip={handleStartGame}
            onExit={() => setPhase('select')}
          />
        </div>
      </div>
    );
  }

  // Game phase
  if (phase === 'game') {
    return (
      <div className="h-[100dvh] bg-[#421785] py-4 px-4 overflow-hidden flex flex-col">
        <div className="max-w-md md:max-w-lg mx-auto w-full flex-1 flex flex-col">
          <WordBuilder
            words={level.words}
            onComplete={handleGameComplete}
            onExit={() => setPhase('select')}
          />
        </div>
      </div>
    );
  }

  // Select phase (default)
  const tierName = categoryId === 'beginner' ? 'Beginner' : categoryId === 'intermediate' ? 'Intermediate' : 'Advanced';

  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1F2937] text-white px-5 py-3 rounded-xl shadow-lg text-sm"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="px-4 md:px-10 lg:px-12 pt-6 md:pt-8">
        <div className="max-w-md md:max-w-[540px] lg:max-w-xl xl:max-w-2xl mx-auto">
          {/* Back button */}
          <button
            onClick={handleExit}
            className="flex items-center gap-1 text-[#440687] text-[14px] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Level info header */}
          <div className="text-center mb-6 md:mb-8">
            {/* Tier badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full text-[12px] md:text-[13px] text-white mb-3"
              style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {tierName}
            </motion.div>

            {/* Level number badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-[16px] md:rounded-[20px] flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
              style={{ backgroundColor: '#440687' }}
            >
              <span
                className="text-[36px] md:text-[42px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {level.levelNumber}
              </span>
            </motion.div>

            <h1
              className="text-[24px] md:text-[28px] text-[#1F2937] mb-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {level.title}
            </h1>
          </div>

          {/* Words preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[16px] shadow-md p-5 md:p-6 mb-4 md:mb-5"
          >
            <h3
              className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Words to Practice
            </h3>
            <div className="flex flex-wrap gap-2">
              {level.words.slice(0, 10).map((word, idx) => (
                <motion.div
                  key={word.korean + idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 bg-[#F3E8FF] rounded-[12px] flex items-center gap-2"
                >
                  <span className="text-[15px] text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    {word.korean}
                  </span>
                  <span className="text-[12px] text-[#440687]/60" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                    {word.english}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Game mode buttons */}
          <div className="space-y-3">
            {/* Writing Practice */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPhase('write')}
              className="w-full p-4 rounded-[16px] border-2 text-left flex items-center gap-4 transition-colors"
              style={{
                borderColor: writeCompleted ? '#22C55E' : '#3B82F6',
                background: writeCompleted ? '#F0FDF4' : '#EFF6FF',
              }}
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: writeCompleted ? '#22C55E' : '#3B82F6' }}
              >
                {writeCompleted ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3
                  className="text-[16px] text-[#1F2937]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Writing Practice
                </h3>
                <p
                  className="text-[13px] text-gray-500"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {writeCompleted ? 'Completed! Tap to practice again' : 'Trace Korean characters'}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Word Puzzle */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePuzzleClick}
              className="w-full p-4 rounded-[16px] border-2 text-left flex items-center gap-4 transition-colors"
              style={{
                borderColor: !writeCompleted ? '#D1D5DB' : (completedGames.includes('puzzle') ? '#22C55E' : '#440687'),
                background: !writeCompleted ? '#F9FAFB' : (completedGames.includes('puzzle') ? '#F0FDF4' : '#FAF5FF'),
                opacity: !writeCompleted ? 0.7 : 1,
              }}
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: !writeCompleted ? '#9CA3AF' : (completedGames.includes('puzzle') ? '#22C55E' : '#440687'),
                }}
              >
                {completedGames.includes('puzzle') ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3
                  className="text-[16px] text-[#1F2937]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Word Puzzle
                </h3>
                <p
                  className="text-[13px] text-gray-500"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {!writeCompleted ? 'Complete Writing Practice to unlock' : (completedGames.includes('puzzle') ? 'Completed! Tap to play again' : 'Build words from jamo blocks')}
                </p>
              </div>
              {!writeCompleted ? (
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
