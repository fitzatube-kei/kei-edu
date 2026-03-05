'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TravelLocation } from '@/types/travel';
import confetti from 'canvas-confetti';

interface LocationArrivalProps {
  location: TravelLocation;
  xpEarned: number;
  onContinue: () => void;
}

export default function LocationArrival({
  location,
  xpEarned,
  onContinue,
}: LocationArrivalProps) {
  const { t, getText } = useLanguage();
  const [showButton, setShowButton] = useState(false);

  // Trigger confetti on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B4D700', '#440687', '#ffffff'],
        });
      }
    }, 300);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center px-4 -mt-8"
    >
      {/* Location Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 10 }}
        className="text-6xl mb-3"
      >
        {location.icon}
      </motion.div>

      {/* Arrival Message */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-4"
      >
        <h2 className="text-2xl font-bold mb-1 text-white">
          🎉 {t('travel.arrived')}
        </h2>
        <div className="text-3xl font-bold text-[#B4D700] mb-0.5">
          {location.korean}
        </div>
        <div className="text-lg text-white/80">
          {location.romanization}
        </div>
      </motion.div>

      {/* XP Earned */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="bg-white/10 rounded-xl px-6 py-3 mb-4"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <div>
            <div className="text-xl font-bold text-yellow-400">+{xpEarned} XP</div>
            <div className="text-xs text-white/60">{t('travel.earnedXp')}</div>
          </div>
        </div>
      </motion.div>

      {/* Location Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-white/70 text-sm max-w-sm mb-5"
      >
        {getText(location.description)}
      </motion.p>

      {/* Continue Button */}
      {showButton && (
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-6 py-3 bg-[#B4D700] text-[#440687] font-bold rounded-full text-base shadow-lg hover:bg-[#c5e800] transition-colors"
        >
          {t('travel.explore')} {location.korean}! 🚀
        </motion.button>
      )}
    </motion.div>
  );
}
