'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgress } from '@/components/ui/ProgressBar';
import StarRating from '@/components/ui/StarRating';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { FireIcon, TrophyIcon, HangulLetterIcon, TempleIcon, CheckIcon } from '@/components/icons/Icon3D';

interface GameProgressProps {
  hangulProgress: {
    completedLevels: number;
    totalLevels: number;
    totalStars: number;
    maxStars: number;
  };
  historyProgress: {
    completedLevels: number;
    totalLevels: number;
    totalStars: number;
    maxStars: number;
  };
  streakDays: number;
  totalScore: number;
}

export default function GameProgress({
  hangulProgress,
  historyProgress,
  streakDays,
  totalScore,
}: GameProgressProps) {
  const { t, language } = useLanguage();
  const hangulPercentage = (hangulProgress.completedLevels / hangulProgress.totalLevels) * 100;
  const historyPercentage = (historyProgress.completedLevels / historyProgress.totalLevels) * 100;

  // Get localized weekday abbreviations
  const getWeekDays = () => {
    const weekDays: Record<string, string[]> = {
      en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      es: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      th: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
      ja: ['月', '火', '水', '木', '金', '土', '日'],
      vi: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
      zh: ['一', '二', '三', '四', '五', '六', '日'],
      'zh-TW': ['一', '二', '三', '四', '五', '六', '日'],
    };
    return weekDays[language] || weekDays.en;
  };

  // Dynamic font size based on number length
  const getStreakFontSize = (num: number) => {
    if (num >= 10000) return 'text-sm sm:text-base';
    if (num >= 1000) return 'text-base sm:text-lg';
    if (num >= 100) return 'text-lg sm:text-xl';
    return 'text-xl sm:text-2xl';
  };

  const getScoreFontSize = (num: number) => {
    if (num >= 100000) return 'text-xs sm:text-sm';
    if (num >= 10000) return 'text-sm sm:text-base';
    if (num >= 1000) return 'text-base sm:text-lg';
    return 'text-lg sm:text-xl';
  };

  return (
    <div className="card p-3 sm:p-4 md:p-6 overflow-hidden">
      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-navy mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
        <TrophyIcon size={24} animate className="flex-shrink-0" />
        <span className="truncate">{t('main.myProgress')}</span>
      </h3>

      {/* Overall stats */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-accent-coral/20 to-accent-coral/10 border-2 border-accent-coral rounded-card flex flex-col items-center p-2 sm:p-3 gap-1 min-w-0 overflow-hidden"
        >
          <motion.div
            className={cn(getStreakFontSize(streakDays), "font-bold flex items-center gap-1 justify-center min-w-0 text-navy")}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FireIcon size={24} animate className="flex-shrink-0" />
            <span className="truncate min-w-0">{streakDays}</span>
          </motion.div>
          <div className="text-[10px] sm:text-xs font-semibold text-gray-600 truncate text-center">{t('main.streakDays')}</div>
          {streakDays >= 7 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-1 px-1.5 sm:px-2 py-0.5 bg-accent-coral text-white text-[9px] sm:text-[10px] font-bold rounded-pill truncate max-w-full"
            >
              {t('main.weekAchievement')}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-secondary-100 to-secondary-50 border-2 border-secondary-600 rounded-card flex flex-col items-center p-2 sm:p-3 gap-1 min-w-0 overflow-hidden"
        >
          <motion.div
            className={cn(getScoreFontSize(totalScore), "font-bold flex items-center gap-1 justify-center min-w-0 text-navy")}
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <TrophyIcon size={20} className="flex-shrink-0" />
            <span className="truncate min-w-0">{totalScore.toLocaleString()}</span>
          </motion.div>
          <div className="text-[10px] sm:text-xs font-semibold text-gray-600 truncate text-center">{t('main.totalScore')}</div>
        </motion.div>
      </div>

      {/* Subject progress */}
      <div className="space-y-4">
        {/* Hangul progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 sm:gap-4 bg-hangul-light p-2 sm:p-3 rounded-card border-2 border-hangul/30 min-w-0 overflow-hidden"
        >
          <div className="relative flex-shrink-0">
            <CircularProgress
              percentage={hangulPercentage}
              size={56}
              strokeWidth={5}
              variant="hangul"
              showPercentage={false}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <HangulLetterIcon size={22} />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1 sm:mb-2">
              <h4 className="font-heading font-bold text-navy text-sm sm:text-base truncate">{t('main.hangulLearning')}</h4>
              <span className="text-xs sm:text-sm font-semibold text-gray-600 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-pill border border-gray-200 flex-shrink-0">
                {hangulProgress.completedLevels}/{hangulProgress.totalLevels}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <StarRating rating={3} size="sm" />
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                {hangulProgress.totalStars}/{hangulProgress.maxStars}
              </span>
            </div>
          </div>
        </motion.div>

        {/* History progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 sm:gap-4 bg-history-light p-2 sm:p-3 rounded-card border-2 border-history/30 min-w-0 overflow-hidden"
        >
          <div className="relative flex-shrink-0">
            <CircularProgress
              percentage={historyPercentage}
              size={56}
              strokeWidth={5}
              variant="history"
              showPercentage={false}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <TempleIcon size={22} />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1 sm:mb-2">
              <h4 className="font-heading font-bold text-navy text-sm sm:text-base truncate">{t('main.historyLearning')}</h4>
              <span className="text-xs sm:text-sm font-semibold text-gray-600 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-pill border border-gray-200 flex-shrink-0">
                {historyProgress.completedLevels}/{historyProgress.totalLevels}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <StarRating rating={3} size="sm" />
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                {historyProgress.totalStars}/{historyProgress.maxStars}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weekly activity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t-2 border-gray-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-xs sm:text-sm font-semibold text-gray-600 flex-shrink-0">{t('progress.thisWeek')}</span>
          <div className="flex gap-1 justify-between sm:justify-end">
            {getWeekDays().map((day, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className={cn(
                  'w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold border-2 overflow-hidden',
                  index < streakDays % 7
                    ? 'bg-primary-500 text-navy border-primary-700'
                    : 'bg-gray-100 text-gray-400 border-gray-200'
                )}
              >
                {index < streakDays % 7 ? <CheckIcon size={12} /> : day}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
