'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { DayActivity, ActivityType } from '@/types/travel';

interface ActivitySelectorProps {
  activities: DayActivity[];
  onSelect: (type: ActivityType) => void;
  title?: string;
  arrivalMessage?: string; // destination name for arrival context
}

const arrivedText: Record<string, (name: string) => string> = {
  en: (name) => `You have arrived at ${name}!`,
  ja: (name) => `${name}に到着しました！`,
  zh: (name) => `您已到达${name}！`,
  th: (name) => `คุณมาถึง${name}แล้ว!`,
  vi: (name) => `Bạn đã đến ${name}!`,
  es: (name) => `¡Has llegado a ${name}!`,
};

export default function ActivitySelector({
  activities,
  onSelect,
  title,
  arrivalMessage,
}: ActivitySelectorProps) {
  const { t, getText, language } = useLanguage();

  const getArrivedText = (name: string) => {
    const fn = arrivedText[language] || arrivedText.en;
    return fn(name);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8"
    >
      {/* Arrival announcement */}
      {arrivalMessage && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#B4D700]/20 border border-[#B4D700]/30 rounded-2xl px-5 py-3 mb-4 text-center w-full max-w-md"
        >
          <span className="text-[#B4D700] text-sm font-medium">
            📍 {getArrivedText(arrivalMessage)}
          </span>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="text-4xl mb-4">🎯</div>
        <h2 className="text-2xl font-bold mb-2 text-white">
          {title || t('travel.whatToDo')}
        </h2>
        <p className="text-white/60">
          {t('travel.selectActivity')}
        </p>
      </motion.div>

      {/* Activity Options */}
      <div className="w-full max-w-md space-y-4">
        {activities.map((activity, index) => (
          <motion.button
            key={activity.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(activity.type)}
            className="w-full p-5 rounded-2xl text-left bg-white/10 hover:bg-white/20 transition-all border-2 border-transparent hover:border-[#B4D700]"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#B4D700]/20 rounded-xl flex items-center justify-center text-3xl">
                {activity.icon}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">
                    {activity.korean}
                  </span>
                  <span className="text-white/60 text-sm">
                    {activity.romanization}
                  </span>
                </div>
                <p className="text-sm text-white/60 mt-1">
                  {getText(activity.name)}
                </p>
                {activity.description && (
                  <p className="text-xs text-white/40 mt-1">
                    {getText(activity.description)}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <svg
                className="w-6 h-6 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
