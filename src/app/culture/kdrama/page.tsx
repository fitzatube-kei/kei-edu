'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useAccessControl } from '@/hooks/useAccessControl';
import EmojiQuizGame, { QuizLevel, QuizQuestion } from '@/components/game/EmojiQuizGame';
import PremiumContentModal from '@/components/ui/PremiumContentModal';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import { kdramaQuizData } from '@/data/kdramaQuizData';

type GameState = 'level-select' | 'playing';

const QUESTIONS_PER_SET = 10; // 세트당 문제 수
const SETS_PER_LEVEL = 20; // 레벨당 세트 수

// 레벨별 문제 분리
const getLevelQuestions = (level: QuizLevel): typeof kdramaQuizData => {
  const startIndex = level === 'beginner' ? 0 : level === 'intermediate' ? 200 : 400;
  const endIndex = startIndex + 200;
  return kdramaQuizData.slice(startIndex, Math.min(endIndex, kdramaQuizData.length));
};

// 세트별 문제 가져오기
const getSetQuestions = (levelQuestions: typeof kdramaQuizData, setIndex: number): typeof kdramaQuizData => {
  const startIndex = setIndex * QUESTIONS_PER_SET;
  const endIndex = startIndex + QUESTIONS_PER_SET;
  return levelQuestions.slice(startIndex, Math.min(endIndex, levelQuestions.length));
};

export default function KdramaQuizPage() {
  const { t } = useLanguage();
  const { progress } = useProgress();
  const { tier, limits } = useAccessControl();
  const [gameState, setGameState] = useState<GameState>('level-select');
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel>('beginner');
  const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null);
  const [completedSets, setCompletedSets] = useState<Record<string, number>>({});
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const isPremium = progress.isPremium;
  const levelQuestions = getLevelQuestions(selectedLevel);
  const availableSets = Math.min(SETS_PER_LEVEL, Math.ceil(levelQuestions.length / QUESTIONS_PER_SET));

  const isSetLocked = (setIndex: number) => {
    if (selectedLevel !== 'beginner') return !limits.culture.intermediateAllowed && !isPremium;
    return !isPremium && setIndex >= limits.culture.beginnerMaxSet;
  };

  const isLevelTabLocked = (level: QuizLevel) => {
    if (level === 'beginner') return false;
    return !limits.culture.intermediateAllowed && !isPremium;
  };

  const startGame = (setIndex: number) => {
    if (isSetLocked(setIndex)) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setShowPremiumModal(true);
      }
      return;
    }
    setSelectedSetIndex(setIndex);
    setGameState('playing');
  };

  const handleComplete = (score: number, total: number) => {
    if (selectedSetIndex !== null) {
      const key = `${selectedLevel}-${selectedSetIndex}`;
      setCompletedSets(prev => ({
        ...prev,
        [key]: Math.max(prev[key] || 0, score)
      }));
    }
    // Don't reset state here - let handleContinueToNextSet or handleBack do it
  };

  const handleContinueToNextSet = () => {
    if (selectedSetIndex === null) return;

    const nextSetIndex = selectedSetIndex + 1;

    // Check if next set is locked
    if (isSetLocked(nextSetIndex)) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setShowPremiumModal(true);
      }
      return;
    }

    // Continue to next set
    setSelectedSetIndex(nextSetIndex);
    // Game state stays as 'playing'
  };

  const handlePremiumModalClose = () => {
    setShowPremiumModal(false);
    // Return to level select
    setGameState('level-select');
    setSelectedSetIndex(null);
  };

  const handleBack = () => {
    setGameState('level-select');
    setSelectedSetIndex(null);
  };

  const getQuestionsForGame = (): QuizQuestion[] => {
    if (selectedSetIndex === null) return [];
    const setQuestions = getSetQuestions(levelQuestions, selectedSetIndex);
    return setQuestions.map(question => ({
      id: question.id,
      emoji: question.emoji,
      answer: question.answer,
      options: question.options,
      syllables: question.syllables,
      year: question.year,
    }));
  };

  const levelTabs = [
    { level: 'beginner' as QuizLevel, label: t('quiz.beginner'), color: 'from-green-400 to-green-600' },
    { level: 'intermediate' as QuizLevel, label: t('quiz.intermediate'), color: 'from-yellow-400 to-orange-500' },
    { level: 'advanced' as QuizLevel, label: t('quiz.advanced'), color: 'from-red-400 to-pink-600' },
  ];

  const getLevelStats = (level: QuizLevel) => {
    const questions = getLevelQuestions(level);
    const totalSets = Math.min(SETS_PER_LEVEL, Math.ceil(questions.length / QUESTIONS_PER_SET));
    let completed = 0;
    let totalScore = 0;
    for (let i = 0; i < totalSets; i++) {
      const key = `${level}-${i}`;
      if (completedSets[key]) {
        completed++;
        totalScore += completedSets[key];
      }
    }
    return { completed, total: totalSets, score: totalScore };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 pb-8">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-blue-50 to-transparent pt-4 pb-2 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/culture"
            className="inline-flex items-center gap-2 bg-white text-[#440687] font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('common.back')}
          </Link>
        </div>
      </div>

      <main className="px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 py-4 mb-4"
          >
            <motion.div
              className="w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] rounded-2xl bg-gradient-to-br from-[#38B6FF] to-[#6366F1] flex items-center justify-center shadow-lg shrink-0"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-5xl sm:text-6xl">🎬</span>
            </motion.div>

            <div className="flex-1">
              <p
                className="text-[#38B6FF] text-[11px] sm:text-[12px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                EMOJI QUIZ
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {t('kdrama.title')}
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('kdrama.subtitle')}
              </p>
            </div>
          </motion.div>

          {gameState === 'level-select' && (
            <>
              {/* Progress Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-5 mb-6 shadow-lg border-l-4 border-l-[#38B6FF]"
              >
                <p className="text-[#38B6FF] text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                  YOUR PROGRESS
                </p>
                <h2 className="text-[24px] text-[#1F2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                  Overall Stats
                </h2>
                <div className="flex items-center justify-around">
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] bg-[#38B6FF] rounded-lg flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-[28px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                        {Object.keys(completedSets).length}
                      </p>
                      <p className="text-[12px] text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                        / {SETS_PER_LEVEL * 3} Sets
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-14 bg-[#38B6FF]/30" />
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] bg-[#38B6FF] rounded-lg flex items-center justify-center">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <p className="text-[28px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                        {Object.values(completedSets).reduce((a, b) => a + b, 0)}
                      </p>
                      <p className="text-[12px] text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                        Points
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Level Selection Header */}
              <div className="mb-4">
                <p className="text-[#440687] text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                  SELECT DIFFICULTY
                </p>
                <h2 className="text-[20px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                  Choose Your Level
                </h2>
              </div>

              {/* Level Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex gap-2 mb-6"
              >
                {levelTabs.map((tab) => {
                  const stats = getLevelStats(tab.level);
                  const isActive = selectedLevel === tab.level;
                  const tabLocked = isLevelTabLocked(tab.level);

                  return (
                    <button
                      key={tab.level}
                      onClick={() => {
                        if (tabLocked) {
                          if (tier === 'guest') setShowLoginModal(true);
                          else setShowPremiumModal(true);
                          return;
                        }
                        setSelectedLevel(tab.level);
                      }}
                      className={`flex-1 py-3 px-2 rounded-full text-center transition-all ${
                        tabLocked
                          ? 'bg-gray-300 text-white cursor-not-allowed'
                          : isActive
                          ? 'bg-[#440687] text-white'
                          : 'bg-[#6366F1] text-white'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <p className="text-[16px] sm:text-[17px] text-white font-bold">{tab.label}</p>
                      <div className="flex items-center justify-center gap-1 text-[13px] sm:text-[14px] text-white">
                        {tabLocked ? (
                          <svg className="w-4 h-4 text-[#B4D700]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-[#B4D700]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        )}
                        <span className="font-semibold text-white">{stats.completed}/{stats.total}</span>
                      </div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Set Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 mb-6"
              >
                {Array.from({ length: availableSets }, (_, index) => {
                  const key = `${selectedLevel}-${index}`;
                  const isCompleted = completedSets[key] !== undefined;
                  const score = completedSets[key] || 0;
                  const setQuestions = getSetQuestions(levelQuestions, index);
                  const isLocked = isSetLocked(index);

                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ scale: isLocked ? 1 : 1.05 }}
                      whileTap={{ scale: isLocked ? 1 : 0.95 }}
                      onClick={() => startGame(index)}
                      disabled={isLocked}
                      className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all shadow-md ${
                        isLocked
                          ? 'bg-gray-100 cursor-not-allowed'
                          : isCompleted
                            ? 'bg-[#E3F2FD] border-2 border-[#38B6FF]'
                            : 'bg-white hover:shadow-lg'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          {/* Lock icon */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center mb-1">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                            </svg>
                          </div>
                          <p
                            className="text-[11px] sm:text-[12px] text-gray-400"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                          >
                            Premium
                          </p>
                        </>
                      ) : (
                        <>
                          {/* Set number */}
                          <p
                            className={`text-[18px] sm:text-[22px] font-bold ${
                              isCompleted ? 'text-[#38B6FF]' : 'text-[#440687]'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            #{index + 1}
                          </p>

                          {/* Question count */}
                          <p
                            className="text-[11px] sm:text-[12px] text-gray-500"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {setQuestions.length} {t('quiz.questionsCount')}
                          </p>

                          {/* Score if completed */}
                          {isCompleted && (
                            <div className="absolute top-1 right-1 flex items-center gap-0.5 bg-[#38B6FF] text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              {score}
                            </div>
                          )}
                        </>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Premium Banner (무료 사용자에게만 표시) */}
              {!isPremium && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gradient-to-r from-[#38B6FF] to-[#6366F1] rounded-2xl p-4 mb-6 text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👑</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[16px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('quiz.unlockAllSets')}
                      </h3>
                      <p className="text-white/80 text-[12px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('quiz.premiumBenefits')}
                      </p>
                    </div>
                    <Link
                      href="/premium"
                      className="bg-white text-[#6366F1] px-4 py-2 rounded-full text-[12px] font-bold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Upgrade
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Level Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#440687] rounded-2xl p-5 text-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">
                    {selectedLevel === 'beginner' ? '🌱' : selectedLevel === 'intermediate' ? '🌿' : '🌳'}
                  </span>
                  <h3 className="text-lg font-bold">
                    {selectedLevel === 'beginner' ? t('quiz.beginnerDesc') :
                     selectedLevel === 'intermediate' ? t('quiz.intermediateDesc') :
                     t('quiz.advancedDesc')}
                  </h3>
                </div>
                <p className="text-white/80 text-sm">
                  {selectedLevel === 'beginner' && 'Select the correct answer from 4 options.'}
                  {selectedLevel === 'intermediate' && 'Combine syllables to build the title.'}
                  {selectedLevel === 'advanced' && 'Type the answer using your keyboard.'}
                </p>
              </motion.div>
            </>
          )}

          {gameState === 'playing' && selectedSetIndex !== null && (
            <EmojiQuizGame
              key={`${selectedLevel}-${selectedSetIndex}`}
              questions={getQuestionsForGame()}
              level={selectedLevel}
              type="kdrama"
              onComplete={handleComplete}
              onBack={handleBack}
              currentSetIndex={selectedSetIndex}
              totalSets={availableSets}
              isNextSetLocked={isSetLocked(selectedSetIndex + 1)}
              onContinueToNextSet={handleContinueToNextSet}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      <PremiumContentModal
        isOpen={showPremiumModal}
        onClose={handlePremiumModalClose}
      />
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setGameState('level-select');
          setSelectedSetIndex(null);
        }}
      />
    </div>
  );
}
