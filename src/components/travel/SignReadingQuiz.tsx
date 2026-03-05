'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SignReadingQuiz as SignReadingQuizType, SignChoice } from '@/types/travel';
import { useTTS } from '@/hooks/useTTS';

interface SignReadingQuizProps {
  quiz: SignReadingQuizType;
  onComplete: (correct: boolean, xpEarned: number) => void;
  signNumber?: number;
  totalSigns?: number;
}

export default function SignReadingQuiz({
  quiz,
  onComplete,
  signNumber = 1,
  totalSigns = 1,
}: SignReadingQuizProps) {
  const { getText } = useLanguage();
  const { speak, isSpeaking } = useTTS();
  const [selectedChoice, setSelectedChoice] = useState<SignChoice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (choice: SignChoice) => {
    if (selectedChoice) return;

    setSelectedChoice(choice);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (selectedChoice) {
      onComplete(selectedChoice.isCorrect, selectedChoice.isCorrect ? quiz.xpReward : 0);
    }
  };

  const handleSpeak = () => {
    speak(quiz.sign.korean);
  };

  const getChoiceState = (choice: SignChoice) => {
    if (!showFeedback) return 'default';
    if (choice.isCorrect) return 'correct';
    if (choice.id === selectedChoice?.id && !choice.isCorrect) return 'wrong';
    return 'default';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-6"
    >
      {/* Progress indicator */}
      {totalSigns > 1 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-4"
        >
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm text-white/60">
            {signNumber} / {totalSigns}
          </span>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-6"
      >
        <div className="text-3xl mb-2">📍</div>
        <h2 className="text-lg font-bold text-white/80">
          {getText(quiz.question)}
        </h2>
      </motion.div>

      {/* Sign Display */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-6 text-center shadow-lg"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold text-white mb-4"
        >
          {quiz.sign.korean}
        </motion.div>

        {/* TTS Button */}
        <button
          onClick={handleSpeak}
          className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white flex items-center gap-2 mx-auto"
        >
          <span className={`text-xl ${isSpeaking ? 'animate-pulse' : ''}`}>🔊</span>
          <span className="text-sm">{quiz.sign.romanization}</span>
        </button>
      </motion.div>

      {/* Choices */}
      <div className="flex-1 space-y-3">
        {quiz.choices.map((choice, index) => {
          const state = getChoiceState(choice);

          return (
            <motion.button
              key={choice.id}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: selectedChoice ? 1 : 1.01 }}
              whileTap={{ scale: selectedChoice ? 1 : 0.99 }}
              onClick={() => handleSelect(choice)}
              disabled={!!selectedChoice}
              className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
                state === 'correct'
                  ? 'bg-green-500/20 border-green-500'
                  : state === 'wrong'
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-white/10 border-transparent hover:bg-white/15'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Number */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      state === 'correct'
                        ? 'bg-green-500'
                        : state === 'wrong'
                          ? 'bg-red-500'
                          : 'bg-white/20'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Text */}
                  <span className="text-lg font-medium text-white">
                    {getText(choice.text)}
                  </span>
                </div>

                {/* Result Icon */}
                <AnimatePresence>
                  {state === 'correct' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-2xl"
                    >
                      ✅
                    </motion.div>
                  )}
                  {state === 'wrong' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-2xl"
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

      {/* Feedback Panel */}
      <AnimatePresence>
        {showFeedback && selectedChoice && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`fixed bottom-0 left-0 right-0 p-6 ${
              selectedChoice.isCorrect ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            <div className="max-w-lg mx-auto">
              {/* Feedback Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {selectedChoice.isCorrect ? '🎉' : '😅'}
                  </span>
                  <span className="text-xl font-bold text-white">
                    {selectedChoice.isCorrect ? 'Correct!' : 'Not quite!'}
                  </span>
                </div>
                {selectedChoice.isCorrect && (
                  <div className="bg-white/20 px-3 py-1 rounded-full text-white">
                    +{quiz.xpReward} XP
                  </div>
                )}
              </div>

              {/* Feedback Text */}
              <p className="text-white/90 mb-4">
                {getText(selectedChoice.feedback)}
              </p>

              {/* Hint breakdown if available */}
              {quiz.sign.hint && (
                <div className="bg-white/10 rounded-xl p-3 mb-4">
                  <div className="text-sm text-white/60 mb-1">Character breakdown:</div>
                  <div className="text-white">
                    {getText(quiz.sign.hint)}
                  </div>
                </div>
              )}

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full py-4 bg-white text-black font-bold rounded-xl text-lg"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
