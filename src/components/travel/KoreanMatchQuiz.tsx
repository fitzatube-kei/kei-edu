'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TravelLocation } from '@/types/travel';
import { speakKorean } from '@/hooks/useTTS';

interface KoreanMatchQuizProps {
  targetLocation: TravelLocation;
  options: TravelLocation[];
  onComplete: (correct: boolean) => void;
}

export default function KoreanMatchQuiz({
  targetLocation,
  options,
  onComplete,
}: KoreanMatchQuizProps) {
  const { t, getText } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Shuffle options once
  const shuffledOptions = useMemo(() => {
    return [...options].sort(() => Math.random() - 0.5);
  }, [options]);

  const handleSelect = (location: TravelLocation) => {
    if (selectedId) return; // Already answered

    setSelectedId(location.id);
    setShowResult(true);

    const isCorrect = location.id === targetLocation.id;

    // Play TTS for correct answer
    if (isCorrect) {
      speakKorean(targetLocation.korean, 0.7);
    }

    setTimeout(() => {
      onComplete(isCorrect);
    }, 1500);
  };

  const getOptionState = (location: TravelLocation) => {
    if (!showResult) return 'default';
    if (location.id === targetLocation.id) return 'correct';
    if (location.id === selectedId) return 'wrong';
    return 'default';
  };

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
        <div className="text-4xl mb-4">🔤</div>
        <h2 className="text-xl font-bold mb-2 text-white">
          {t('travel.findKorean')}
        </h2>
        <div className="text-3xl font-bold text-[#B4D700] mb-2">
          "{targetLocation.romanization}"
        </div>
        <p className="text-white/60 text-sm">
          {getText(targetLocation.description)}
        </p>
      </motion.div>

      {/* Options */}
      <div className="w-full max-w-md space-y-4">
        {shuffledOptions.map((location, index) => {
          const state = getOptionState(location);

          return (
            <motion.button
              key={location.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: selectedId ? 1 : 1.02 }}
              whileTap={{ scale: selectedId ? 1 : 0.98 }}
              onClick={() => handleSelect(location)}
              disabled={!!selectedId}
              className={`w-full p-5 rounded-2xl text-left transition-all border-2 ${
                state === 'correct'
                  ? 'bg-green-500/20 border-green-500'
                  : state === 'wrong'
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-white/10 border-transparent hover:bg-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                      state === 'correct'
                        ? 'bg-green-500 text-white'
                        : state === 'wrong'
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Korean Name Only */}
                  <div className="text-2xl font-bold text-white">{location.korean}</div>
                </div>

                {/* Result Icon */}
                <AnimatePresence>
                  {state === 'correct' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-3xl"
                    >
                      ✅
                    </motion.div>
                  )}
                  {state === 'wrong' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-3xl"
                    >
                      ❌
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-8 text-center"
          >
            {selectedId === targetLocation.id ? (
              <div className="text-green-400 font-bold text-xl">
                {t('travel.correct')} 🎉
              </div>
            ) : (
              <div className="text-red-400 font-bold text-xl">
                {t('travel.tryAgain')} 😅
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
