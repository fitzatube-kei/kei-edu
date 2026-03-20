'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WritingCanvas from './WritingCanvas';
import { useTTS } from '@/hooks/useTTS';

function useCanvasSize() {
  const [size, setSize] = useState(260);
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Canvas should fit comfortably: use smaller of width/height, leave room for header/info
      const available = Math.min(vw - 48, vh - 280);
      setSize(Math.max(200, Math.min(available, 480)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
}

interface PracticeWord {
  korean: string;
  english: string;
  romanization?: string;
}

interface WritingPracticeProps {
  words: PracticeWord[];
  onComplete: () => void;
  onExit: () => void;
}

export default function WritingPractice({ words, onComplete, onExit }: WritingPracticeProps) {
  const { speak } = useTTS();
  const canvasSize = useCanvasSize();

  // Build practice sequence: for each word, individual chars then full word (if >1 char)
  const sequence = useMemo(() => {
    const steps: { char: string; word: PracticeWord; isFullWord: boolean }[] = [];
    for (const word of words) {
      const chars = Array.from(word.korean);
      for (const ch of chars) {
        steps.push({ char: ch, word, isFullWord: false });
      }
      if (chars.length > 1) {
        steps.push({ char: word.korean, word, isFullWord: true });
      }
    }
    return steps;
  }, [words]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = sequence.length;
  const current = sequence[currentIndex];
  const progressPct = total > 0 ? ((currentIndex) / total) * 100 : 0;

  const handleCharComplete = useCallback(() => {
    const step = sequence[currentIndex];
    if (step) {
      // Speak the traced character (or full word)
      speak(step.char);
    }

    // Advance after pronunciation delay
    setTimeout(() => {
      if (currentIndex + 1 >= total) {
        onComplete();
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 800);
  }, [currentIndex, total, onComplete, sequence, speak]);

  if (!current) return null;

  return (
    <div className="h-[100dvh] bg-[#421785] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
        <div className="max-w-lg mx-auto">
          {/* Top bar: exit + title */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <button
              onClick={onExit}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 text-white"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span
              className="text-white/90 text-sm sm:text-base lg:text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Writing Practice
            </span>
            <span
              className="text-white/70 text-sm sm:text-base lg:text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              {currentIndex + 1}/{total}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#B4D700] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-4 sm:pb-6 min-h-0">
        <div className="max-w-lg w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center w-full"
            >
              {/* Word info */}
              <div className="text-center mb-3 sm:mb-5">
                {current.isFullWord ? (
                  <span
                    className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#B4D700] text-[#421785] rounded-full text-xs sm:text-sm mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Full Word
                  </span>
                ) : (
                  <p
                    className="text-white/60 text-xs sm:text-sm mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {current.word.korean}
                  </p>
                )}
                <h2
                  className="text-white text-lg sm:text-xl lg:text-2xl"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {current.word.english}
                </h2>
                {current.word.romanization && (
                  <p className="text-white/50 text-sm sm:text-base mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {current.word.romanization}
                  </p>
                )}
              </div>

              {/* Canvas — responsive size */}
              <WritingCanvas
                character={current.char}
                onComplete={handleCharComplete}
                size={canvasSize}
              />

              {/* Hint text */}
              <p
                className="text-white/40 text-xs sm:text-sm mt-3 sm:mt-4 text-center"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                Trace the character above
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
