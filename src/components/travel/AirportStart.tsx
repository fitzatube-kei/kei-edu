'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface AirportStartProps {
  onStart: () => void;
}

export default function AirportStart({ onStart }: AirportStartProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4"
    >
      {/* Airplane Animation */}
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, duration: 1 }}
        className="relative mb-8"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-8xl"
        >
          ✈️
        </motion.div>

        {/* Cloud decorations */}
        <motion.div
          className="absolute -left-20 top-0 text-4xl opacity-60"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ☁️
        </motion.div>
        <motion.div
          className="absolute -right-16 bottom-0 text-3xl opacity-40"
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ☁️
        </motion.div>
      </motion.div>

      {/* Welcome Text */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          🇰🇷 {t('travel.welcome')}
        </h1>
        <p className="text-white/80 text-lg mb-2">
          {t('travel.airportComplete')}
        </p>
        <p className="text-white/60">
          {t('travel.startJourney')}
        </p>
      </motion.div>

      {/* Airport Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="bg-white/10 rounded-2xl p-6 mb-8"
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">🛃</span>
          <div>
            <div className="font-bold text-white">{t('travel.incheonAirport')}</div>
            <div className="text-sm text-white/60">{t('travel.immigration')} ✓</div>
          </div>
        </div>
      </motion.div>

      {/* Start Button */}
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-8 py-4 bg-[#B4D700] text-[#440687] font-bold rounded-full text-lg shadow-lg hover:bg-[#c5e800] transition-colors"
      >
        {t('travel.startTravel')} 🚀
      </motion.button>
    </motion.div>
  );
}
