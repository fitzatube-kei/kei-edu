'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TravelLocation } from '@/types/travel';

interface DestinationSelectorProps {
  destinations: TravelLocation[];
  visitedIds: string[];
  onSelect: (location: TravelLocation) => void;
  userIsPremium?: boolean;
}

export default function DestinationSelector({
  destinations,
  visitedIds,
  onSelect,
  userIsPremium = false,
}: DestinationSelectorProps) {
  const { t, getText } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8"
    >
      {/* Question */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="text-4xl mb-4">🗺️</div>
        <h2 className="text-2xl font-bold mb-2 text-white">
          {t('travel.whereToGo')}
        </h2>
        <p className="text-white/60">
          {t('travel.selectDestination')}
        </p>
      </motion.div>

      {/* Destination Cards */}
      <div className="w-full max-w-md space-y-4">
        {destinations.map((location, index) => {
          const isVisited = visitedIds.includes(location.id);
          // Only lock premium locations if user is not premium
          const isLocked = location.isPremium && !userIsPremium;

          return (
            <motion.button
              key={location.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: isLocked ? 1 : 1.02 }}
              whileTap={{ scale: isLocked ? 1 : 0.98 }}
              onClick={() => !isLocked && onSelect(location)}
              disabled={isLocked}
              className={`w-full p-4 rounded-2xl text-left transition-all relative ${
                isLocked
                  ? 'bg-white/5 opacity-60 cursor-not-allowed'
                  : isVisited
                    ? 'bg-green-500/20 border-2 border-green-500/50'
                    : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {/* Studied Badge */}
              {isVisited && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <span>✓</span>
                  <span>Studied</span>
                </div>
              )}

              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${
                  isVisited ? 'bg-green-500/30' : 'bg-white/10'
                }`}>
                  {isLocked ? '🔒' : isVisited ? '✅' : location.icon}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {/* Romanization (what user sees) */}
                    <span className={`text-xl font-bold ${isVisited ? 'text-green-300' : 'text-white'}`}>
                      {location.romanization}
                    </span>
                    {isLocked && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mt-1 ${isVisited ? 'text-green-300/70' : 'text-white/60'}`}>
                    {isVisited ? '🎓 Already studied - Review again!' : getText(location.description)}
                  </p>
                </div>

                {/* Arrow */}
                {!isLocked && (
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
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Helper Text */}
      {destinations.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/60 mt-8"
        >
          <span className="text-4xl mb-4 block">🎉</span>
          <p>{t('travel.allVisited')}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
