'use client';

import React, { useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import QuizGame, { QuestionResult } from '@/components/game/QuizGame';
import MatchingGame from '@/components/game/MatchingGame';
import FillInBlankGame from '@/components/game/FillInBlankGame';
import LevelComplete from '@/components/game/LevelComplete';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { hangulLevels, TIER_COLORS, getTierForLevel } from '@/data/hangul';
import { calculateStars } from '@/lib/utils';
import { MultilingualQuizQuestion } from '@/types';

type GameMode = 'select' | 'quiz' | 'matching' | 'fill-in-blank' | 'retry-wrong';

export default function HangulLevelPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const levelNumber = parseInt(params.level as string, 10);
  const { updateLevelProgress, isLevelUnlocked, progress } = useProgress();

  // Check if user has seen the tutorial prompt for level 1
  const [showTutorialPrompt, setShowTutorialPrompt] = useState(() => {
    if (levelNumber === 1 && typeof window !== 'undefined') {
      const hasSeenPrompt = localStorage.getItem('hangulTutorialPromptSeen');
      return !hasSeenPrompt;
    }
    return false;
  });
  const [gameMode, setGameMode] = useState<GameMode>('select');
  const [showComplete, setShowComplete] = useState(false);
  const [result, setResult] = useState({ score: 0, correct: 0, total: 0 });
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [wrongQuestions, setWrongQuestions] = useState<MultilingualQuizQuestion[]>([]);

  const { unlockPro, unlockAllLevels } = useDevMode();

  const level = hangulLevels.find((l) => l.level === levelNumber);
  const hasNextLevel = levelNumber < hangulLevels.length;
  const tier = getTierForLevel(levelNumber);
  const tierColor = TIER_COLORS[tier];

  // Check if level is accessible
  const isUnlocked = isLevelUnlocked('hangul', levelNumber) || unlockAllLevels;
  const isPremiumLocked = level?.isPremium && !progress.isPremium && !unlockPro;

  // All hooks must be called before any conditional returns
  const handleGameComplete = useCallback(async (
    score: number,
    correct: number,
    total: number,
    _hintsUsed?: number,
    results?: QuestionResult[]
  ) => {
    const stars = calculateStars(correct, total);
    setResult({ score, correct, total });
    if (results) {
      setQuestionResults(results);
      // Extract wrong questions for retry
      const wrong = results
        .filter(r => !r.isCorrect && r.originalQuestion)
        .map(r => r.originalQuestion as MultilingualQuizQuestion);
      setWrongQuestions(wrong);
    }
    setShowComplete(true);
    await updateLevelProgress('hangul', levelNumber, stars, score);
  }, [levelNumber, updateLevelProgress]);

  const handleReplay = useCallback(() => {
    setShowComplete(false);
    setQuestionResults([]);
    setWrongQuestions([]);
    setGameMode('select');
  }, []);

  const handleRetryWrong = useCallback(() => {
    if (wrongQuestions.length > 0) {
      setShowComplete(false);
      setGameMode('retry-wrong');
    }
  }, [wrongQuestions]);

  const handleNextLevel = useCallback(() => {
    if (hasNextLevel) {
      router.push(`/hangul/${levelNumber + 1}`);
    }
  }, [hasNextLevel, levelNumber, router]);

  const handleExit = useCallback(() => {
    router.push('/hangul');
  }, [router]);

  // Get tier name in current language
  const getTierName = (): string => {
    const names: Record<string, Record<string, string>> = {
      beginner: { en: 'Beginner', ja: '初級', zh: '初级', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Principiante' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado' },
    };
    return names[tier][language] || names[tier].en;
  };

  // Not found
  if (!level) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[16px] shadow-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">❓</span>
          </div>
          <h1
            className="text-[24px] text-[#1F2937] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t('errors.notFound')}
          </h1>
          <button
            onClick={() => router.push('/hangul')}
            className="bg-[#440687] text-white px-6 py-3 rounded-full text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {t('game.backToLevels')}
          </button>
        </motion.div>
      </div>
    );
  }

  // Locked screen
  if (!isUnlocked || isPremiumLocked) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[16px] shadow-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">{isPremiumLocked ? '👑' : '🔒'}</span>
          </div>
          <h1
            className="text-[20px] text-[#1F2937] mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {isPremiumLocked ? t('level.premiumInfo') : t('level.locked')}
          </h1>
          <p
            className="text-gray-500 mb-6 text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {isPremiumLocked ? t('level.premiumRequired') : t('level.previousRequired')}
          </p>
          <button
            onClick={() => router.push('/hangul')}
            className="bg-[#440687] text-white px-6 py-3 rounded-full text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {t('game.backToLevels')}
          </button>
        </motion.div>
      </div>
    );
  }

  // Tutorial prompt for Level 1
  if (showTutorialPrompt && levelNumber === 1) {
    const handleWatchTutorial = () => {
      localStorage.setItem('hangulTutorialPromptSeen', 'true');
      router.push('/hangul/tutorial/1');
    };

    const handleSkipTutorial = () => {
      localStorage.setItem('hangulTutorialPromptSeen', 'true');
      setShowTutorialPrompt(false);
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#440687] to-[#6B21A8] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[24px] shadow-2xl p-8 max-w-md w-full text-center"
        >
          {/* Hangul icon */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 10 }}
            className="w-24 h-24 bg-gradient-to-br from-[#B4D700] to-[#9ABA00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <span className="text-5xl text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
              ㄱ
            </span>
          </motion.div>

          <h1
            className="text-[28px] text-[#440687] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {language === 'ja' ? 'ハングルを学ぼう!' :
             language.startsWith('zh') ? '学习韩文!' :
             language === 'th' ? 'เรียนรู้ฮันกึล!' :
             language === 'vi' ? 'Học Hangul!' :
             language === 'es' ? '¡Aprende Hangul!' :
             'Learn Hangul!'}
          </h1>

          <p
            className="text-gray-600 text-[16px] mb-8 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {language === 'ja' ? 'ゲームを始める前に、ハングルの基礎を学ぶチュートリアルを見ますか？' :
             language.startsWith('zh') ? '在开始游戏之前，要不要先看看韩文基础教程？' :
             language === 'th' ? 'ก่อนเริ่มเกม คุณต้องการดูบทเรียนพื้นฐานฮันกึลไหม?' :
             language === 'vi' ? 'Trước khi bắt đầu trò chơi, bạn có muốn xem hướng dẫn cơ bản về Hangul không?' :
             language === 'es' ? '¿Quieres ver el tutorial básico de Hangul antes de empezar el juego?' :
             'Would you like to see the Hangul basics tutorial before starting the game?'}
          </p>

          <div className="space-y-3">
            {/* Watch Tutorial Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWatchTutorial}
              className="w-full py-4 bg-[#440687] text-white rounded-[12px] text-[16px] shadow-lg flex items-center justify-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {language === 'ja' ? 'チュートリアルを見る' :
               language.startsWith('zh') ? '观看教程' :
               language === 'th' ? 'ดูบทเรียน' :
               language === 'vi' ? 'Xem hướng dẫn' :
               language === 'es' ? 'Ver tutorial' :
               'Watch Tutorial'}
            </motion.button>

            {/* Skip Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSkipTutorial}
              className="w-full py-4 bg-[#B4D700] text-[#440687] rounded-[12px] text-[16px] shadow-md flex items-center justify-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {language === 'ja' ? 'スキップしてゲーム開始' :
               language.startsWith('zh') ? '跳过，直接开始游戏' :
               language === 'th' ? 'ข้าม ไปเล่นเกมเลย' :
               language === 'vi' ? 'Bỏ qua, bắt đầu chơi' :
               language === 'es' ? 'Saltar, empezar juego' :
               'Skip, Start Game'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Info text */}
          <p
            className="text-gray-400 text-[12px] mt-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            {language === 'ja' ? 'チュートリアルはいつでも見ることができます' :
             language.startsWith('zh') ? '教程可以随时观看' :
             language === 'th' ? 'คุณสามารถดูบทเรียนได้ทุกเมื่อ' :
             language === 'vi' ? 'Bạn có thể xem hướng dẫn bất cứ lúc nào' :
             language === 'es' ? 'Puedes ver el tutorial en cualquier momento' :
             'You can watch the tutorial anytime'}
          </p>
        </motion.div>
      </div>
    );
  }

  // Show complete modal
  if (showComplete) {
    return (
      <LevelComplete
        level={levelNumber}
        score={result.score}
        correctAnswers={result.correct}
        totalQuestions={result.total}
        category="hangul"
        questionResults={questionResults}
        onReplay={handleReplay}
        onNext={handleNextLevel}
        onRetryWrong={wrongQuestions.length > 0 ? handleRetryWrong : undefined}
        hasNextLevel={hasNextLevel}
        reviewItems={level.reviewItems}
      />
    );
  }

  // Check if game modes are available
  const hasQuiz = (level.quizQuestions && level.quizQuestions.length > 0) ||
                   (level.multilingualQuizQuestions && level.multilingualQuizQuestions.length > 0);
  const hasMatching = (level.matchingPairs && level.matchingPairs.length >= 4) ||
                       (level.multilingualMatchingPairs && level.multilingualMatchingPairs.length >= 4);
  const hasFillInBlank = level.fillInBlankQuestions && level.fillInBlankQuestions.length > 0;

  // Games render outside the white wrapper for full-screen experience
  if (gameMode === 'quiz') {
    return (
      <QuizGame
        questions={level.quizQuestions}
        multilingualQuestions={level.multilingualQuizQuestions}
        variant="hangul"
        onComplete={handleGameComplete}
        onExit={handleExit}
      />
    );
  }

  if (gameMode === 'retry-wrong' && wrongQuestions.length > 0) {
    return (
      <QuizGame
        multilingualQuestions={wrongQuestions}
        variant="hangul"
        onComplete={handleGameComplete}
        onExit={handleExit}
      />
    );
  }

  if (gameMode === 'matching' && (level.matchingPairs || level.multilingualMatchingPairs)) {
    return (
      <MatchingGame
        pairs={level.matchingPairs}
        multilingualPairs={level.multilingualMatchingPairs}
        variant="hangul"
        onComplete={handleGameComplete}
        onExit={handleExit}
      />
    );
  }

  if (gameMode === 'fill-in-blank' && level.fillInBlankQuestions) {
    return (
      <FillInBlankGame
        questions={level.fillInBlankQuestions}
        variant="hangul"
        onComplete={handleGameComplete}
        onExit={handleExit}
      />
    );
  }

  // Select mode - white background with header
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <Header />

      {/* Game mode select */}
      {gameMode === 'select' && (
        <main className="px-4 md:px-8 pt-6">
          <div className="max-w-md mx-auto">
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
            <div className="text-center mb-6">
              {/* Tier badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full text-[12px] text-white mb-3"
                style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {getTierName()}
              </motion.div>

              {/* Level number badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 rounded-[16px] flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
                style={{ backgroundColor: '#440687' }}
              >
                <span
                  className="text-[36px]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  {levelNumber}
                </span>
              </motion.div>

              <h1
                className="text-[24px] text-[#1F2937] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {level.titleKey ? t(level.titleKey) : level.title}
              </h1>
              <p
                className="text-gray-500 text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {level.descriptionKey ? t(level.descriptionKey) : level.description}
              </p>
            </div>

            {/* Characters preview */}
            {level.characters && level.characters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[16px] shadow-md p-5 mb-4"
              >
                <h3
                  className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {/* Show different labels based on content type */}
                  {typeof level.characters[0] === 'object'
                    ? t('hangul.learnCharacters')
                    : (language === 'ja' ? '学ぶ単語' :
                       language.startsWith('zh') ? '学习词汇' :
                       language === 'th' ? 'คำศัพท์ที่จะเรียน' :
                       language === 'vi' ? 'Từ vựng sẽ học' :
                       language === 'es' ? 'Vocabulario' :
                       'Words to Learn')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {level.characters.slice(0, 8).map((char, idx) => {
                    // Handle both object (beginner) and string (intermediate) types
                    const displayText = typeof char === 'object' && 'character' in char
                      ? (char as { character: string }).character
                      : String(char);
                    return (
                      <motion.div
                        key={displayText + idx}
                        whileHover={{ scale: 1.1 }}
                        className={`${typeof char === 'string' ? 'px-3 py-2' : 'w-12 h-12'} bg-[#F3E8FF] rounded-[12px] flex items-center justify-center`}
                      >
                        <span
                          className={`${typeof char === 'string' ? 'text-[14px]' : 'text-[20px]'} text-[#440687]`}
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                        >
                          {displayText}
                        </span>
                      </motion.div>
                    );
                  })}
                  {level.characters.length > 8 && (
                    <div className="px-3 py-2 bg-gray-100 rounded-[12px] flex items-center justify-center">
                      <span
                        className="text-[14px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        +{level.characters.length - 8}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Words preview */}
            {level.words && level.words.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-[16px] shadow-md p-5 mb-4"
              >
                <h3
                  className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {language === 'ja' ? '学ぶ単語' :
                   language.startsWith('zh') ? '学习词汇' :
                   language === 'th' ? 'คำศัพท์ที่จะเรียน' :
                   language === 'vi' ? 'Từ vựng sẽ học' :
                   language === 'es' ? 'Vocabulario' :
                   'Words to Learn'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {level.words.slice(0, 6).map((word) => (
                    <motion.div
                      key={word.word}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-[#F6FFC7] rounded-[8px]"
                    >
                      <span
                        className="text-[14px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        {word.word}
                      </span>
                    </motion.div>
                  ))}
                  {level.words.length > 6 && (
                    <div className="px-3 py-2 bg-gray-100 rounded-[8px]">
                      <span
                        className="text-[14px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        +{level.words.length - 6}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Game mode selection */}
            <div className="space-y-3">
              {/* Learn First Banner */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/hangul/${levelNumber}/learn`)}
                className="w-full bg-white rounded-[16px] shadow-md p-5 text-left border-2 border-[#3B82F6]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3B82F6] rounded-[12px] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[16px] text-[#1F2937]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {language === 'ja' ? 'まず学習' :
                       language.startsWith('zh') ? '先学习' :
                       language === 'th' ? 'เรียนก่อน' :
                       language === 'vi' ? 'Học trước' :
                       language === 'es' ? 'Aprende primero' :
                       'Learn First'}
                    </h3>
                    <p
                      className="text-[13px] text-gray-500"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      {language === 'ja' ? 'ゲームを始める前に文字を学ぼう' :
                       language.startsWith('zh') ? '在游戏前先学习字符' :
                       language === 'th' ? 'เรียนรู้ตัวอักษรก่อนเล่นเกม' :
                       language === 'vi' ? 'Học chữ cái trước khi chơi' :
                       language === 'es' ? 'Estudia los caracteres antes de jugar' :
                       'Study the characters before playing'}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>

              {hasQuiz && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGameMode('quiz')}
                  className="w-full bg-white rounded-[16px] shadow-md p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#9038EF] rounded-[12px] flex items-center justify-center">
                      <span className="text-[31px] text-white" style={{ fontWeight: 900 }}>?</span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[16px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {t('game.quiz')}
                      </h3>
                      <p
                        className="text-[13px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {t('game.quizDesc')}
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              )}

              {hasMatching && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGameMode('matching')}
                  className="w-full bg-white rounded-[16px] shadow-md p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#B4D700] rounded-[12px] flex items-center justify-center">
                      <span className="text-[18px] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                        {language === 'ja' ? 'あいう' :
                         language.startsWith('zh') ? '甲乙丙' :
                         language === 'th' ? 'กขค' :
                         'ABC'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[16px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {t('game.matching')}
                      </h3>
                      <p
                        className="text-[13px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {t('game.matchingDesc')}
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              )}

              {hasFillInBlank && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGameMode('fill-in-blank')}
                  className="w-full bg-white rounded-[16px] shadow-md p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#F59E0B] rounded-[12px] flex items-center justify-center">
                      <span className="text-[18px] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                        {language === 'ja' ? 'あいう' :
                         language.startsWith('zh') ? '甲乙丙' :
                         language === 'th' ? 'กขค' :
                         'ABC'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[16px] text-[#1F2937]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {language === 'ja' ? '空欄を埋めよう' :
                         language.startsWith('zh') ? '填空题' :
                         language === 'th' ? 'เติมคำในช่องว่าง' :
                         language === 'vi' ? 'Điền vào chỗ trống' :
                         language === 'es' ? 'Completa el espacio' :
                         'Fill in the Blank'}
                      </h3>
                      <p
                        className="text-[13px] text-gray-500"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {language === 'ja' ? '文章の空欄に適切な単語を選ぼう' :
                         language.startsWith('zh') ? '选择正确的词填入句子空白处' :
                         language === 'th' ? 'เลือกคำที่เหมาะสมเติมในช่องว่าง' :
                         language === 'vi' ? 'Chọn từ phù hợp điền vào chỗ trống' :
                         language === 'es' ? 'Elige la palabra correcta' :
                         'Choose the right word for the blank'}
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              )}
            </div>
          </div>
        </main>
      )}

      {gameMode === 'select' && <Navigation />}
    </div>
  );
}
