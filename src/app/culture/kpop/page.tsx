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
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { kpopQuizData } from '@/data/kpopQuizData';

type GameState = 'level-select' | 'playing';

const QUESTIONS_PER_SET = 10; // 세트당 문제 수
const SETS_PER_LEVEL = 20; // 레벨당 세트 수

// 레벨별 문제 분리
const getLevelQuestions = (level: QuizLevel): typeof kpopQuizData => {
  const startIndex = level === 'beginner' ? 0 : level === 'intermediate' ? 200 : 400;
  const endIndex = startIndex + 200;
  return kpopQuizData.slice(startIndex, Math.min(endIndex, kpopQuizData.length));
};

// 세트별 문제 가져오기
const getSetQuestions = (levelQuestions: typeof kpopQuizData, setIndex: number): typeof kpopQuizData => {
  const startIndex = setIndex * QUESTIONS_PER_SET;
  const endIndex = startIndex + QUESTIONS_PER_SET;
  return levelQuestions.slice(startIndex, Math.min(endIndex, levelQuestions.length));
};

export default function KpopQuizPage() {
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
      artist: question.artist,
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

  // 게임 플레이 중에는 EmojiQuizGame이 풀스크린으로 렌더링
  if (gameState === 'playing' && selectedSetIndex !== null) {
    return (
      <>
        <EmojiQuizGame
          key={`${selectedLevel}-${selectedSetIndex}`}
          questions={getQuestionsForGame()}
          level={selectedLevel}
          type="kpop"
          onComplete={handleComplete}
          onBack={handleBack}
          currentSetIndex={selectedSetIndex}
          totalSets={availableSets}
          isNextSetLocked={isSetLocked(selectedSetIndex + 1)}
          onContinueToNextSet={handleContinueToNextSet}
        />
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
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white pt-4 pb-2 px-4 md:px-10">
        <div className="max-w-2xl md:max-w-3xl mx-auto">
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

      <main className="px-4 md:px-10">
        <div className="max-w-2xl md:max-w-3xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 md:gap-5 py-4 md:py-6 mb-4 md:mb-6"
          >
            <motion.div
              className="w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#B4D700] to-[#8CAA00] flex items-center justify-center shadow-lg shrink-0"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-5xl sm:text-6xl md:text-7xl">🎤</span>
            </motion.div>

            <div className="flex-1">
              <p
                className="text-[#440687] text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                EMOJI QUIZ
              </p>
              <h1
                className="text-[22px] sm:text-[28px] md:text-[32px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {t('kpop.title')}
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px] md:text-[15px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('kpop.subtitle')}
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
                className="bg-white rounded-[16px] p-5 md:p-6 mb-6 md:mb-8 shadow-lg border-l-4 border-l-[#B4D700]"
              >
                <p
                  className="text-[#B4D700] text-[11px] uppercase tracking-wider mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  YOUR PROGRESS
                </p>
                <h2
                  className="text-[24px] text-[#1F2937] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  Overall Stats
                </h2>
                <div className="flex items-center justify-around">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {Object.keys(completedSets).length}
                      </p>
                      <p
                        className="text-[12px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        / {SETS_PER_LEVEL * 3} Sets
                      </p>
                    </div>
                  </div>

                  <div className="w-px h-14 bg-[#D8B4FE]" />

                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {Object.values(completedSets).reduce((a, b) => a + b, 0)}
                      </p>
                      <p
                        className="text-[12px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        Points
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Level Selection Header */}
              <div className="mb-4 md:mb-5">
                <p className="text-[#440687] text-[11px] md:text-[12px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                  SELECT DIFFICULTY
                </p>
                <h2 className="text-[20px] md:text-[22px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                  Choose Your Level
                </h2>
              </div>

              {/* Level Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex gap-2 md:gap-3 mb-6 md:mb-8"
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
                      className={`flex-1 py-3 md:py-4 px-2 rounded-full text-center transition-all ${
                        tabLocked
                          ? 'bg-gray-300 text-white cursor-not-allowed'
                          : isActive
                          ? 'bg-[#440687] text-white'
                          : 'bg-[#9038EF] text-white'
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
                className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-4 mb-6 md:mb-8"
              >
                {Array.from({ length: availableSets }, (_, index) => {
                  const key = `${selectedLevel}-${index}`;
                  const isCompleted = completedSets[key] !== undefined;
                  const score = completedSets[key] || 0;
                  const isLocked = isSetLocked(index);
                  const isFirstUnlocked = !isLocked && !isCompleted && index === 0;

                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.015 }}
                      whileHover={!isLocked ? { scale: 1.05 } : {}}
                      whileTap={!isLocked ? { scale: 0.95 } : {}}
                      onClick={() => startGame(index)}
                      disabled={isLocked}
                      className={`aspect-square rounded-[12px] xs:rounded-[16px] flex flex-col items-center justify-center relative transition-all shadow-md ${
                        isFirstUnlocked
                          ? 'bg-white border-l-4 border-l-[#B4D700]'
                          : isCompleted
                          ? 'bg-[#F6FFC7]'
                          : 'bg-white'
                      } ${isLocked ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      {/* Set number */}
                      <p
                        className={`text-[24px] xs:text-[28px] sm:text-[32px] ${
                          isCompleted ? 'text-[#440687]' : isFirstUnlocked ? 'text-[#B4D700]' : 'text-[#1F2937]'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        {index + 1}
                      </p>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[1, 2].map((star) => (
                          <svg
                            key={star}
                            className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                              isCompleted && score >= star * 5 ? 'text-[#B4D700]' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Lock overlay */}
                      {isLocked && (
                        <div className="absolute inset-0 bg-white/70 rounded-[16px] flex items-center justify-center">
                          <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Premium Banner (무료 사용자에게만 표시) */}
              {!isPremium && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="bg-[#440687] rounded-[16px] md:rounded-[20px] p-5 md:p-6 mb-6 md:mb-8 text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#B4D700] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-white/70 text-[11px] uppercase tracking-wider mb-1"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        UPGRADE NOW
                      </p>
                      <h3
                        className="text-[18px] mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        Unlock Premium
                      </h3>
                      <p
                        className="text-white/80 text-[13px] mb-3"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {t('quiz.premiumBenefits')}
                      </p>
                      <Link
                        href="/premium"
                        className="bg-[#B4D700] text-[#440687] px-4 py-2 rounded-full text-[13px] inline-block"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Level Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#440687] rounded-[16px] md:rounded-[20px] p-5 md:p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">
                    {selectedLevel === 'beginner' ? '🌱' : selectedLevel === 'intermediate' ? '🌿' : '🌳'}
                  </span>
                  <h3 className="text-lg font-bold text-lime-400">
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

      <Navigation />
    </div>
  );
}
