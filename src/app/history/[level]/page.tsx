'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import QuizGame, { QuestionResult } from '@/components/game/QuizGame';
import LevelComplete from '@/components/game/LevelComplete';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { getCultureLevel, getCategoryConfig, getLevelsByCategory } from '@/data/culture';
import { calculateStars } from '@/lib/utils';
import { CultureQuizQuestion } from '@/types';
import {
  LockIcon,
  CrownIcon,
  ScrollIcon,
  QuestionIcon,
  ArrowRightIcon,
  MapPinIcon,
  PaletteIcon,
} from '@/components/icons/Icon3D';

type GameMode = 'select' | 'quiz' | 'retryWrong';

const CategoryIcons: Record<string, React.FC<{ size?: number; animate?: boolean }>> = {
  'scroll': ScrollIcon,
  'mapPin': MapPinIcon,
  'palette': PaletteIcon,
  'crown': CrownIcon,
  'temple': ScrollIcon,
};

interface GameResult {
  score: number;
  correct: number;
  total: number;
  hintsUsed: number;
  questionResults: QuestionResult[];
}

export default function HistoryLevelPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const levelId = params.level as string;
  const { updateCultureProgress, isCultureLevelUnlocked, progress } = useProgress();

  const [gameMode, setGameMode] = useState<GameMode>('select');
  const [showComplete, setShowComplete] = useState(false);
  const [result, setResult] = useState<GameResult>({
    score: 0,
    correct: 0,
    total: 0,
    hintsUsed: 0,
    questionResults: [],
  });
  const [retryBonus, setRetryBonus] = useState(0);

  const { unlockPro, unlockAllLevels } = useDevMode();

  const level = getCultureLevel(levelId);
  const categoryConfig = level ? getCategoryConfig(level.category) : undefined;
  const categoryLevels = level ? getLevelsByCategory(level.category) : [];
  const hasNextLevel = level ? level.level < categoryLevels.length : false;
  const nextLevelId = level && hasNextLevel ? `${level.category}-${level.level + 1}` : null;

  const isUnlocked = isCultureLevelUnlocked(levelId) || unlockAllLevels;
  const isPremiumLocked = level?.isPremium && !progress.isPremium && !unlockPro;

  const getTitle = () => level?.title;
  const getDescription = () => level?.description || level?.descriptionKo;
  const getCategoryName = () => categoryConfig?.name;

  // Get wrong questions for retry mode
  const wrongQuestions: CultureQuizQuestion[] = useMemo(() => {
    if (!level) return [];
    const wrongIndices = result.questionResults
      .map((r, i) => (!r.isCorrect ? i : -1))
      .filter(i => i >= 0);

    // Find matching questions from original quiz
    return level.quizQuestions.filter((_, index) => {
      // Since questions are shuffled, we need to match by question text
      return result.questionResults.some(
        (r, rIdx) => !r.isCorrect && wrongIndices.includes(rIdx)
      );
    });
  }, [level, result.questionResults]);

  // Actually filter wrong questions by matching question text
  const wrongQuestionsFiltered: CultureQuizQuestion[] = useMemo(() => {
    if (!level) return [];
    const wrongQuestionTexts = result.questionResults
      .filter(r => !r.isCorrect)
      .map(r => r.questionText);

    return level.quizQuestions.filter(q =>
      wrongQuestionTexts.includes(q.question)
    );
  }, [level, result.questionResults]);

  const handleGameComplete = useCallback(async (
    score: number,
    correct: number,
    total: number,
    hintsUsed: number,
    questionResults: QuestionResult[]
  ) => {
    const stars = calculateStars(correct, total, hintsUsed);

    // Add retry bonus if in retry mode
    const finalScore = gameMode === 'retryWrong' && correct === total
      ? score + 50
      : score;

    if (gameMode === 'retryWrong' && correct === total) {
      setRetryBonus(50);
    }

    setResult({ score: finalScore, correct, total, hintsUsed, questionResults });
    setShowComplete(true);
    await updateCultureProgress(levelId, stars, finalScore, hintsUsed);
  }, [levelId, updateCultureProgress, gameMode]);

  const handleReplay = useCallback(() => {
    setShowComplete(false);
    setGameMode('select');
    setRetryBonus(0);
    setResult({ score: 0, correct: 0, total: 0, hintsUsed: 0, questionResults: [] });
  }, []);

  const handleNextLevel = useCallback(() => {
    if (nextLevelId) {
      router.push(`/history/${nextLevelId}`);
    }
  }, [nextLevelId, router]);

  const handleExit = useCallback(() => {
    router.push('/history');
  }, [router]);

  const handleRetryWrong = useCallback(() => {
    setShowComplete(false);
    setGameMode('retryWrong');
    setRetryBonus(0);
  }, []);

  // Not found
  if (!level || !categoryConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="modal-3d p-8 max-w-md w-full text-center"
        >
          <QuestionIcon size={64} className="mx-auto mb-4" />
          <h1 className="text-2xl font-black text-gray-800 mb-4">{t('errors.notFound')}</h1>
          <Button variant="primary" onClick={() => router.push('/history')}>
            {t('game.backToLevels')}
          </Button>
        </motion.div>
      </div>
    );
  }

  // Locked screen
  if (!isUnlocked || isPremiumLocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="modal-3d p-8 max-w-md w-full text-center"
        >
          <div className="mb-4 flex justify-center">
            {isPremiumLocked ? <CrownIcon size={64} animate /> : <LockIcon size={64} />}
          </div>
          <h1 className="text-xl font-black text-gray-800 mb-2">
            {isPremiumLocked ? t('level.premiumInfo') : t('level.locked')}
          </h1>
          <p className="text-gray-600 font-semibold mb-6">
            {isPremiumLocked ? t('level.premiumRequired') : t('level.previousRequired')}
          </p>
          <Button variant="primary" onClick={() => router.push('/history')}>
            {t('game.backToLevels')}
          </Button>
        </motion.div>
      </div>
    );
  }

  // Show complete modal
  if (showComplete) {
    return (
      <>
        <LevelComplete
          level={level.level}
          score={result.score}
          correctAnswers={result.correct}
          totalQuestions={result.total}
          hintsUsed={result.hintsUsed}
          category="history"
          categoryName={getCategoryName()}
          questionResults={result.questionResults}
          onReplay={handleReplay}
          onNext={handleNextLevel}
          onRetryWrong={wrongQuestionsFiltered.length > 0 ? handleRetryWrong : undefined}
          hasNextLevel={hasNextLevel && !categoryLevels[level.level]?.isPremium}
        />
        {/* Retry bonus notification */}
        {retryBonus > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-60 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-black shadow-lg border-2 border-yellow-600"
          >
            🎉 Bonus +{retryBonus} XP for perfect retry!
          </motion.div>
        )}
      </>
    );
  }

  const IconComponent = CategoryIcons[categoryConfig.icon] || ScrollIcon;

  return (
    <div className="min-h-screen pb-8">
      {/* Game mode select */}
      {gameMode === 'select' && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            {/* Level info header */}
            <div className="text-center mb-8">
              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black mb-4 border-2 border-[#2d3436] shadow-[2px_2px_0_#2d3436] text-white"
                style={{ backgroundColor: categoryConfig.color }}
              >
                <IconComponent size={20} />
                {getCategoryName()}
              </motion.div>

              {/* Level number badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-4 border-4 border-[#2d3436] shadow-[4px_4px_0_#2d3436]"
                style={{
                  background: `linear-gradient(135deg, ${categoryConfig.color}, ${categoryConfig.color}cc)`,
                }}
              >
                {level.level}
              </motion.div>

              <h1 className="text-2xl font-black text-white mb-2 text-shadow-3d">
                {getTitle()}
              </h1>
              <p className="text-white/80 font-semibold">
                {getDescription() || level.description}
              </p>

              {(level.era || level.region) && (
                <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-bold bg-white/20 text-white">
                  {level.era || level.region}
                </div>
              )}
            </div>

            {/* Key events preview */}
            {level.keyEvents && level.keyEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-3d p-5 mb-4"
              >
                <h3 className="text-sm font-black text-gray-700 mb-3 flex items-center gap-2">
                  <ScrollIcon size={24} />
                  Key Events
                </h3>
                <div className="space-y-2">
                  {level.keyEvents.slice(0, 3).map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                      className="flex items-center gap-3 text-sm p-2 rounded-lg"
                      style={{ backgroundColor: `${categoryConfig.color}10` }}
                    >
                      <span
                        className="font-black px-2 py-1 rounded-lg border-2 border-[#2d3436]/20 bg-white"
                        style={{ color: categoryConfig.color }}
                      >
                        {event.year}
                      </span>
                      <span className="text-gray-700 font-semibold">
                        {event.event}
                      </span>
                    </motion.div>
                  ))}
                  {level.keyEvents.length > 3 && (
                    <p className="text-xs text-gray-400 font-bold pl-2">
                      +{level.keyEvents.length - 3} more
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Key figures preview */}
            {level.keyFigures && level.keyFigures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="card-3d p-5 mb-4"
              >
                <h3 className="text-sm font-black text-gray-700 mb-3 flex items-center gap-2">
                  <CrownIcon size={24} />
                  Key Figures
                </h3>
                <div className="flex flex-wrap gap-2">
                  {level.keyFigures.slice(0, 4).map((figure, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 rounded-xl text-sm font-black text-gray-800 border-2 border-[#2d3436]/30"
                      style={{ backgroundColor: `${categoryConfig.color}20` }}
                    >
                      <div>{figure.name}</div>
                      {figure.role && (
                        <div className="text-xs text-gray-500 font-semibold">
                          {figure.role}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {level.keyFigures.length > 4 && (
                    <span className="px-3 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-500">
                      +{level.keyFigures.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            )}

            {/* Game mode selection */}
            <div className="space-y-3">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setGameMode('quiz')}
                className="w-full card-3d p-5 text-left hover:shadow-[6px_6px_0_#2d3436] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center border-3 border-[#2d3436] shadow-[2px_2px_0_#2d3436]"
                    style={{
                      background: `linear-gradient(135deg, ${categoryConfig.color}, ${categoryConfig.color}cc)`,
                    }}
                  >
                    <QuestionIcon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-gray-800">{t('game.quiz')}</h3>
                    <p className="text-sm text-gray-500 font-semibold">
                      {level.quizQuestions.length} questions
                    </p>
                  </div>
                  <ArrowRightIcon size={24} />
                </div>
              </motion.button>
            </div>

            {/* Back button */}
            <div className="mt-6 text-center">
              <Button variant="ghost" onClick={handleExit}>
                {t('game.backToLevels')}
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quiz game */}
      {gameMode === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <QuizGame
            cultureQuestions={level.quizQuestions}
            variant="history"
            categoryColor={categoryConfig.color}
            onComplete={handleGameComplete}
            onExit={handleExit}
          />
        </div>
      )}

      {/* Retry Wrong mode */}
      {gameMode === 'retryWrong' && wrongQuestionsFiltered.length > 0 && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            {/* Retry header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-yellow-900 font-black border-2 border-yellow-600 shadow-[2px_2px_0_#2d3436]">
                🔄 Retry Mode - {wrongQuestionsFiltered.length} question{wrongQuestionsFiltered.length > 1 ? 's' : ''}
              </div>
              <p className="text-white/80 mt-2 font-semibold">
                Get them all right for +50 bonus XP!
              </p>
            </motion.div>

            <QuizGame
              cultureQuestions={wrongQuestionsFiltered}
              variant="history"
              categoryColor={categoryConfig.color}
              onComplete={handleGameComplete}
              onExit={handleReplay}
            />
          </div>
        </div>
      )}
    </div>
  );
}
