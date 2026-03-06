'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import StarRating from '@/components/ui/StarRating';
import Button from '@/components/ui/Button';
import Hangeuli from '@/components/character/Hangeuli';
import { useLanguage } from '@/context/LanguageContext';
import { calculateStars, cn } from '@/lib/utils';
import { QuestionResult } from './QuizGame';
import { WordResult } from './WordBuilder';
import { LightbulbIcon, CheckIcon, CloseIcon } from '@/components/icons/Icon3D';
import { useTTS } from '@/hooks/useTTS';

const SPEED_SETTINGS_KEY = 'ttsSpeedValue';

interface LevelCompleteProps {
  level: number;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  category: 'hangul' | 'history';
  categoryName?: string;
  hintsUsed?: number;
  questionResults?: QuestionResult[];
  wordResults?: WordResult[];
  onReplay: () => void;
  onNext?: () => void;
  onRetryWrong?: () => void;
  hasNextLevel: boolean;
  reviewItems?: string[];
}

export default function LevelComplete({
  level,
  score,
  correctAnswers,
  totalQuestions,
  category,
  categoryName,
  hintsUsed = 0,
  questionResults = [],
  wordResults = [],
  onReplay,
  onNext,
  onRetryWrong,
  hasNextLevel,
  reviewItems,
}: LevelCompleteProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const { speakAsync, stop: stopTTS, isSpeaking, speakingId, speedValue, setSpeedValue } = useTTS();
  const stars = calculateStars(correctAnswers, totalQuestions, hintsUsed);
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const playAllRef = useRef<boolean>(false);
  const [showReview, setShowReview] = useState(false);

  const wrongAnswers = questionResults.filter(r => !r.isCorrect);

  // Use wordResults if available, then questionResults, then fall back to reviewItems
  const displayWords = wordResults.length > 0
    ? wordResults
    : questionResults.length > 0
      ? questionResults.map(result => ({
          korean: result.questionText,
          english: result.options[result.correctIndex] || '',
          isCorrect: result.isCorrect,
          hintUsed: result.hintUsed,
        }))
      : (reviewItems || []).map(item => ({
          korean: item,
          english: '',
          isCorrect: true,
          hintUsed: false,
        }));

  // Load saved speed setting
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(SPEED_SETTINGS_KEY);
        if (saved) {
          setSpeedValue(parseFloat(saved));
        }
      } catch {
        // Use default
      }
    }
  }, [setSpeedValue]);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeedValue(newSpeed);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(SPEED_SETTINGS_KEY, newSpeed.toString());
      } catch {
        // Silently fail
      }
    }
  }, [setSpeedValue]);

  const handleSpeak = useCallback((text: string, index: number) => {
    if (isPlayingAll) return;
    speakAsync(text, `word-${index}`);
  }, [speakAsync, isPlayingAll]);

  const handlePlayAll = useCallback(async () => {
    if (displayWords.length === 0 || isPlayingAll) return;

    setIsPlayingAll(true);
    playAllRef.current = true;

    for (let i = 0; i < displayWords.length; i++) {
      if (!playAllRef.current) break;
      await speakAsync(displayWords[i].korean, `word-${i}`);
      if (i < displayWords.length - 1 && playAllRef.current) {
        await new Promise(resolve => setTimeout(resolve, 600));
      }
    }

    setIsPlayingAll(false);
    playAllRef.current = false;
  }, [displayWords, speakAsync, isPlayingAll]);

  const handleStop = useCallback(() => {
    playAllRef.current = false;
    setIsPlayingAll(false);
    stopTTS();
  }, [stopTTS]);

  // Review Screen for QuizGame
  if (showReview && questionResults.length > 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 bg-[#440687]/90 overflow-y-auto"
      >
        <div className="min-h-screen p-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex items-center justify-between shadow-lg">
              <button
                onClick={() => setShowReview(false)}
                className="flex items-center gap-2 text-[#440687] font-bold hover:text-[#350568] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                ← Back to Results
              </button>
              <h2
                className="text-xl text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                Review Answers
              </h2>
              <div
                className="text-sm text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {correctAnswers}/{totalQuestions} correct
              </div>
            </div>

            {/* Question Cards */}
            <div className="space-y-4">
              {questionResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'rounded-2xl p-5 shadow-lg',
                    result.isCorrect
                      ? 'bg-white border-3 border-[#77B602]'
                      : 'bg-white border-3 border-red-400'
                  )}
                >
                  {/* Question header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-[24px] h-[24px] flex items-center justify-center">
                      {result.isCorrect ? (
                        <Image
                          src="/images/hangul/check01.png"
                          alt="Correct"
                          width={24}
                          height={24}
                          className="object-contain"
                          unoptimized
                        />
                      ) : (
                        <CloseIcon size={24} />
                      )}
                    </span>
                    <span
                      className="text-[#440687]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                    >
                      Q{index + 1}
                    </span>
                    {result.hintUsed && (
                      <span
                        className="text-xs px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded-full"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        Hint used
                      </span>
                    )}
                  </div>

                  {/* Question text */}
                  <p
                    className="text-[#1F2937] mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    {result.questionText}
                  </p>

                  {/* Options */}
                  <div className="space-y-2 mb-4">
                    {result.options.map((option, optIndex) => {
                      const isCorrect = optIndex === result.correctIndex;
                      const isSelected = optIndex === result.selectedIndex;
                      const isWrongSelection = isSelected && !isCorrect;

                      return (
                        <div
                          key={optIndex}
                          className={cn(
                            'p-3 rounded-xl flex items-center gap-2',
                            isCorrect && 'bg-[#77B602]/20 border-2 border-[#77B602]',
                            isWrongSelection && 'bg-red-100 border-2 border-red-400',
                            !isCorrect && !isWrongSelection && 'bg-gray-50'
                          )}
                        >
                          <span className={cn(
                            'w-6 h-6 rounded-full flex items-center justify-center text-xs',
                            isCorrect ? 'bg-[#77B602] text-white' :
                            isWrongSelection ? 'bg-red-500 text-white' :
                            'bg-gray-200 text-gray-600'
                          )}
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                          >
                            {['A', 'B', 'C', 'D'][optIndex]}
                          </span>
                          <span
                            className={cn(
                              isCorrect && 'text-[#5a9902]',
                              isWrongSelection && 'text-red-700'
                            )}
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                          >
                            {option}
                          </span>
                          {isCorrect && (
                            <span
                              className="ml-auto text-[#77B602]"
                              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                            >
                              Correct
                            </span>
                          )}
                          {isWrongSelection && (
                            <span
                              className="ml-auto text-red-600"
                              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                            >
                              Your answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {result.explanation && (
                    <div className="bg-[#CEECFE] rounded-xl p-3">
                      <p
                        className="text-sm text-[#440687]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {result.explanation}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col gap-3"
            >
              <button
                onClick={() => setShowReview(false)}
                className="w-full bg-white text-[#440687] px-6 py-3 rounded-xl text-[17px] shadow-lg hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                ← Back to Results
              </button>

              {wrongAnswers.length > 0 && onRetryWrong && (
                <button
                  onClick={() => {
                    setShowReview(false);
                    onRetryWrong();
                  }}
                  className="w-full bg-[#77B602] text-white px-6 py-3 rounded-xl text-[17px] shadow-lg hover:bg-[#669a02] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  Retry Wrong Ones ({wrongAnswers.length})
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Main Results Screen - Puzzle Mode (100dvh layout)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-[#440687]"
    >
      {/* Good Image - Celebration */}
      {stars >= 2 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', damping: 10 }}
          className="absolute top-[46px] left-0 right-0 z-10 flex justify-center"
        >
          <Image
            src="/images/hangul/good.png"
            alt="Good!"
            width={52}
            height={52}
            className="object-contain"
            unoptimized
          />
        </motion.div>
      )}

      {/* Main Content - Flex layout for 100dvh */}
      <div className="h-[100dvh] flex flex-col p-4 max-w-lg md:max-w-xl mx-auto">
        {/* Header with Hangeuli and Stars */}
        <div className="flex-shrink-0 text-center pt-2 pb-3">
          {stars < 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
              className="flex justify-center mb-2"
            >
              <Hangeuli
                emotion={stars >= 1 ? 'happy' : 'sad'}
                message={stars >= 1 ? 'levelComplete' : 'keepGoing'}
                size="sm"
                position="inline"
                showMessage={false}
              />
            </motion.div>
          )}

          {stars >= 2 && <div className="h-[110px]" />}

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white mb-1"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {stars >= 2 ? t('game.congratulations') : stars >= 1 ? t('game.goodJob') : t('game.tryHarder')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-sm mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {categoryName && <span className="font-bold">{categoryName} </span>}
            {t('level.level')} {level} {t('level.completed')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <StarRating rating={stars} size="lg" animated />
          </motion.div>
        </div>

        {/* Score Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-shrink-0 bg-white rounded-2xl p-4 mb-3 shadow-lg"
        >
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p
                className="text-2xl text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {score}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {t('game.score')}
              </p>
            </div>
            <div>
              <p
                className="text-2xl text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {percentage}%
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {t('game.accuracy')}
              </p>
            </div>
            <div>
              <p
                className="text-2xl text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {correctAnswers}/{totalQuestions}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {t('game.correctAnswers')}
              </p>
            </div>
          </div>
          {hintsUsed > 0 && (
            <p
              className="text-center text-yellow-600 text-xs mt-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              {hintsUsed} hint{hintsUsed > 1 ? 's' : ''} used
            </p>
          )}
        </motion.div>

        {/* Word Results - Scrollable Area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex-1 min-h-0 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex-shrink-0 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h3
              className="text-[#440687] text-sm"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Words Learned ({displayWords.length})
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={isPlayingAll ? handleStop : handlePlayAll}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1',
                  isPlayingAll
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-[#440687]/10 text-[#440687] hover:bg-[#440687]/20'
                )}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {isPlayingAll ? '⏹ Stop' : '🔊 Play All'}
              </button>
            </div>
          </div>

          {/* Scrollable Word List */}
          <div className="flex-1 overflow-y-auto px-3 py-2">
            <div className="grid grid-cols-2 gap-2">
              {displayWords.map((word, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.03 }}
                  onClick={() => handleSpeak(word.korean, index)}
                  disabled={isPlayingAll}
                  className={cn(
                    'p-3 rounded-xl text-left transition-all relative overflow-hidden',
                    word.isCorrect
                      ? 'bg-[#77B602]/10 border-2 border-[#77B602]'
                      : 'bg-red-50 border-2 border-red-300',
                    speakingId === `word-${index}` && 'ring-2 ring-[#440687] ring-offset-1',
                    isPlayingAll && speakingId !== `word-${index}` && 'opacity-60'
                  )}
                >
                  {/* Status Icon */}
                  <div className={cn(
                    'absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs',
                    word.isCorrect ? 'bg-[#77B602]' : 'bg-red-500'
                  )}
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {word.isCorrect ? '✓' : '✗'}
                  </div>

                  {/* Korean Word */}
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={cn(
                        'text-lg',
                        word.isCorrect ? 'text-[#5a9902]' : 'text-red-700'
                      )}
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                    >
                      {word.korean}
                    </span>
                    {word.hintUsed && (
                      <span className="text-yellow-500 text-xs">💡</span>
                    )}
                  </div>

                  {/* English */}
                  {word.english && (
                    <p
                      className="text-xs text-gray-500 truncate pr-4"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                    >
                      {word.english}
                    </p>
                  )}

                  {/* Speaking indicator */}
                  {speakingId === `word-${index}` && (
                    <motion.div
                      className="absolute inset-0 bg-[#440687]/10 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="text-2xl"
                      >
                        🔊
                      </motion.span>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Speed Control */}
          <div className="flex-shrink-0 px-4 py-2 border-t border-gray-100 flex items-center gap-3">
            <span
              className="text-xs text-gray-500 whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Speed:
            </span>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.25"
              value={speedValue}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#440687]"
            />
            <span
              className="text-xs text-[#440687] w-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {speedValue}x
            </span>
          </div>
        </motion.div>

        {/* Action Buttons - Fixed at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex-shrink-0 pt-3 pb-2 flex flex-col gap-2"
        >
          {hasNextLevel && stars >= 1 && (
            <button
              onClick={onNext}
              className="w-full bg-[#77B602] text-white px-6 py-3 rounded-xl text-[17px] shadow-lg hover:bg-[#669a02] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {t('game.nextLevel')} →
            </button>
          )}

          <div className="flex gap-2">
            <button
              onClick={onReplay}
              className="flex-1 bg-white text-[#440687] px-4 py-2.5 rounded-xl text-[15px] shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              <Image
                src="/images/hangul/again01.png"
                alt="Replay"
                width={18}
                height={18}
                className="object-contain"
                unoptimized
              />
              {t('game.replay')}
            </button>

            <button
              onClick={() => router.push(`/${category}`)}
              className="flex-1 bg-white text-[#440687] px-4 py-2.5 rounded-xl text-[15px] shadow-lg hover:bg-gray-50 transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              ← {t('game.backToLevels')}
            </button>
          </div>

          {/* Review Answers for QuizGame */}
          {questionResults.length > 0 && (
            <button
              onClick={() => setShowReview(true)}
              className="w-full bg-[#CEECFE] text-[#440687] px-6 py-2.5 rounded-xl text-[15px] shadow-lg hover:bg-[#b8e0f5] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Review Answers
            </button>
          )}

          {/* Retry Wrong Ones */}
          {wrongAnswers.length > 0 && onRetryWrong && (
            <button
              onClick={onRetryWrong}
              className="w-full bg-[#FF7E00] text-white px-6 py-2.5 rounded-xl text-[15px] shadow-lg hover:bg-[#e67100] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Retry Wrong Ones ({wrongAnswers.length})
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
