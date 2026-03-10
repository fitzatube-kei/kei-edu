'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TravelLocation, TravelSituation, SituationChoice } from '@/types/travel';
import { useTTS } from '@/hooks/useTTS';

interface SituationQuizProps {
  situation: TravelSituation;
  location: TravelLocation;
  onComplete: (correct: boolean, xpEarned: number) => void;
}

export default function SituationQuiz({
  situation,
  location,
  onComplete,
}: SituationQuizProps) {
  const { t, getText } = useLanguage();
  const { speak, isSpeaking } = useTTS();
  const [selectedChoice, setSelectedChoice] = useState<SituationChoice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (choice: SituationChoice) => {
    if (selectedChoice) return;

    setSelectedChoice(choice);
    setShowFeedback(true);

    // Speak the Korean phrase
    speak(choice.korean);
  };

  const handleContinue = () => {
    if (selectedChoice) {
      onComplete(selectedChoice.isCorrect, selectedChoice.isCorrect ? situation.xpReward : 0);
    }
  };

  const handleSpeak = (text: string) => {
    speak(text);
  };

  const getChoiceState = (choice: SituationChoice) => {
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
      {/* Location Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 mb-6 bg-white/10 rounded-xl p-3"
      >
        <span className="text-3xl">{location.icon}</span>
        <div>
          <div className="font-bold text-white">{location.korean}</div>
          <div className="text-sm text-white/60">{location.romanization}</div>
        </div>
      </motion.div>

      {/* Scenario */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 rounded-2xl p-4 mb-6"
      >
        <div className="text-sm text-white/60 mb-2">
          {t('travel.situation')}
        </div>
        <p className="text-lg text-white">{getText(situation.scenario)}</p>
      </motion.div>

      {/* Question */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        {(() => {
          const questionText = getText(situation.question);
          // Extract Korean text in quotes (e.g., "어디로 가세요?")
          const koreanMatch = questionText.match(/"([^"]*[가-힣]+[^"]*)"/);
          const koreanPhrase = koreanMatch ? koreanMatch[1] : null;

          if (koreanPhrase) {
            // Split the question around the Korean phrase
            const parts = questionText.split(`"${koreanPhrase}"`);
            return (
              <h2 className="text-xl font-bold text-center text-white">
                {parts[0]}
                <span className="inline-flex items-center gap-1">
                  &quot;{koreanPhrase}&quot;
                  <button
                    onClick={() => handleSpeak(koreanPhrase)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                    aria-label="Listen to pronunciation"
                  >
                    <img src="/images/icon/sound001_w.png" alt="sound" className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                  </button>
                </span>
                {parts[1]}
              </h2>
            );
          }

          return (
            <h2 className="text-xl font-bold text-center text-white">
              {questionText}
            </h2>
          );
        })()}
      </motion.div>

      {/* Choices */}
      <div className="flex-1 space-y-3">
        {situation.choices.map((choice, index) => {
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
              <div className="flex items-start gap-3">
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

                <div className="flex-1 min-w-0">
                  {/* Korean */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">{choice.korean}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(choice.korean);
                      }}
                      className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <img src="/images/icon/sound001_w.png" alt="sound" className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>

                  {/* Romanization */}
                  <div className="text-sm text-white/60 mb-1">
                    {choice.romanization}
                  </div>

                  {/* Hint (shown by default) */}
                  {choice.hint && (
                    <div className="text-xs text-[#B4D700]/80 bg-[#B4D700]/10 px-2 py-1 rounded inline-block">
                      💡 {getText(choice.hint)}
                    </div>
                  )}
                </div>

                {/* Result Icon */}
                <AnimatePresence>
                  {state === 'correct' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-2xl shrink-0"
                    >
                      ✅
                    </motion.div>
                  )}
                  {state === 'wrong' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-2xl shrink-0"
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
                  <span className="text-xl font-bold">
                    {selectedChoice.isCorrect
                      ? t('travel.correct')
                      : t('travel.notQuite')}
                  </span>
                </div>
                {selectedChoice.isCorrect && (
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    +{situation.xpReward} XP
                  </div>
                )}
              </div>

              {/* Feedback Text */}
              <p className="text-white/90 mb-4">
                {getText(selectedChoice.feedback)}
              </p>

              {/* Vocabulary learned */}
              {selectedChoice.isCorrect && situation.teaching.vocabulary.length > 0 && (
                <div className="bg-white/10 rounded-xl p-3 mb-4">
                  <div className="text-sm text-white/60 mb-2">
                    {t('travel.youLearned')}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {situation.teaching.vocabulary.map((vocab, i) => (
                      <div
                        key={i}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        <span className="font-bold">{vocab.korean}</span>
                        <span className="text-white/60">= {getText(vocab.meaning)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full py-4 bg-white text-black font-bold rounded-xl text-lg"
              >
                {t('travel.continue')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
