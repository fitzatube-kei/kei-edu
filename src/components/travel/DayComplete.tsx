'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';

interface DayCompleteProps {
  locationName: string;
  xpEarned: number;
  phrasesLearned: number;
  signsRead: number;
  correctAnswers: number;
  totalQuestions: number;
  onContinue: () => void;
}

export default function DayComplete({
  locationName,
  xpEarned,
  phrasesLearned,
  signsRead,
  correctAnswers,
  totalQuestions,
  onContinue,
}: DayCompleteProps) {
  const { t } = useLanguage();

  // Trigger confetti on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#B4D700', '#440687', '#ffffff', '#FFD700'],
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Trophy */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 10, delay: 0.2 }}
        className="text-8xl mb-6"
      >
        🏆
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          {t('travel.dayComplete')}
        </h1>
        <p className="text-xl text-[#B4D700]">
          {locationName}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md grid grid-cols-2 gap-4 mb-8"
      >
        {/* XP Earned */}
        <div className="bg-yellow-500/20 rounded-2xl p-4 text-center">
          <span className="text-3xl">⭐</span>
          <div className="text-2xl font-bold text-yellow-400 mt-2">
            {xpEarned}
          </div>
          <div className="text-sm text-white/60">XP Earned</div>
        </div>

        {/* Accuracy */}
        <div className="bg-green-500/20 rounded-2xl p-4 text-center">
          <span className="text-3xl">🎯</span>
          <div className="text-2xl font-bold text-green-400 mt-2">
            {accuracy}%
          </div>
          <div className="text-sm text-white/60">Accuracy</div>
        </div>

        {/* Phrases Learned */}
        <div className="bg-blue-500/20 rounded-2xl p-4 text-center">
          <span className="text-3xl">📚</span>
          <div className="text-2xl font-bold text-blue-400 mt-2">
            {phrasesLearned}
          </div>
          <div className="text-sm text-white/60">Phrases</div>
        </div>

        {/* Signs Read */}
        <div className="bg-purple-500/20 rounded-2xl p-4 text-center">
          <span className="text-3xl">📍</span>
          <div className="text-2xl font-bold text-purple-400 mt-2">
            {signsRead}
          </div>
          <div className="text-sm text-white/60">Signs Read</div>
        </div>
      </motion.div>

      {/* Score Breakdown */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-md bg-white/5 rounded-2xl p-4 mb-8"
      >
        <div className="text-white/60 text-sm mb-2">Questions</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${accuracy}%` }}
              transition={{ delay: 1, duration: 0.5 }}
              className="h-full bg-green-500 rounded-full"
            />
          </div>
          <span className="text-white/60 text-sm">
            {correctAnswers}/{totalQuestions}
          </span>
        </div>
      </motion.div>

      {/* Continue Button */}
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="px-8 py-4 bg-[#B4D700] text-[#440687] font-bold rounded-full text-lg shadow-lg hover:bg-[#c5e800] transition-colors"
      >
        {t('travel.continueTraveling')} 🚀
      </motion.button>
    </motion.div>
  );
}
