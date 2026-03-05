'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TransportOption, TransportType } from '@/types/travel';

interface TransportSelectorProps {
  options: TransportOption[];
  onSelect: (type: TransportType, id: string) => void;
}

export default function TransportSelector({
  options,
  onSelect,
}: TransportSelectorProps) {
  const { t, getText } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="text-4xl mb-4">🚏</div>
        <h2 className="text-2xl font-bold mb-2 text-white">
          {t('travel.howToGo')}
        </h2>
        <p className="text-white/60">
          {t('travel.selectTransport')}
        </p>
      </motion.div>

      {/* Transport Options */}
      <div className="w-full max-w-md space-y-4">
        {options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.type, option.id)}
            className="w-full p-5 rounded-2xl text-left bg-white/10 hover:bg-white/20 transition-all border-2 border-transparent hover:border-[#3b82f6]"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center text-3xl">
                {option.icon}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">
                    {option.korean}
                  </span>
                  <span className="text-white/60 text-sm">
                    {option.romanization}
                  </span>
                </div>
                <p className="text-sm text-white/60 mt-1">
                  {getText(option.description)}
                </p>
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

      {/* Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-white/40 text-sm max-w-md"
      >
        {t('travel.transportTip')}
      </motion.div>
    </motion.div>
  );
}
