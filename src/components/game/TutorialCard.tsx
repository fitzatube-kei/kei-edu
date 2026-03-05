'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TutorialCharacter } from '@/data/hangul/tutorial';
import { useTTS } from '@/hooks/useTTS';
import SpeakButton from '@/components/ui/SpeakButton';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface TutorialCardProps {
  characters: TutorialCharacter[];
  type: 'consonants' | 'vowels' | 'consonant-audio' | 'vowel-audio';
  onComplete: () => void;
  onBack?: () => void;
}

export default function TutorialCard({
  characters,
  type,
  onComplete,
  onBack,
}: TutorialCardProps) {
  const { t, language } = useLanguage();
  const { speak, isSpeaking, speakingId } = useTTS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentChar = characters[currentIndex];
  const isAudioMode = type === 'consonant-audio' || type === 'vowel-audio';
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === characters.length - 1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < characters.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, characters.length]);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  // Get translated text
  const getTranslatedText = (text: Record<string, string>) => {
    return text[language as keyof typeof text] || text.en;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          {t('common.back')}
        </Button>
        <div className="flex items-center gap-1">
          {characters.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                idx === currentIndex
                  ? 'bg-[#4C1D95] w-6'
                  : idx < currentIndex
                  ? 'bg-[#7C3AED]'
                  : 'bg-gray-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {currentIndex + 1}/{characters.length}
        </span>
      </div>

      {/* Card */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            {/* Main character display */}
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={cn(
                  'inline-flex items-center justify-center rounded-3xl mb-4',
                  'bg-gradient-to-br from-[#4C1D95] to-[#7C3AED]',
                  'text-white shadow-2xl',
                  isAudioMode ? 'w-32 h-32 text-7xl' : 'w-40 h-40 text-8xl'
                )}
              >
                {currentChar.char}
              </motion.div>

              {/* Audio button for audio mode */}
              {isAudioMode && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-4"
                >
                  <SpeakButton
                    text={currentChar.char}
                    id={`main-${currentChar.char}`}
                    size="lg"
                    isSpeaking={isSpeaking}
                    speakingId={speakingId}
                    onSpeak={speak}
                    showLabel
                    labelText={t('hangul.pronunciation')}
                  />
                </motion.div>
              )}

              {/* Title (romanization | sound) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="mb-4"
              >
                <span className="text-xl text-[#4C1D95] font-medium">
                  {getTranslatedText(currentChar.title)}
                </span>
              </motion.div>

              {/* Sound description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-6 px-4"
              >
                {getTranslatedText(currentChar.description)}
              </motion.p>

              {/* Audio player for non-audio mode */}
              {!isAudioMode && (
                <div className="flex justify-center mb-6">
                  <SpeakButton
                    text={currentChar.char}
                    id={`char-${currentChar.char}`}
                    size="md"
                    isSpeaking={isSpeaking}
                    speakingId={speakingId}
                    onSpeak={speak}
                  />
                </div>
              )}
            </div>

            {/* Examples section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-4"
            >
              {/* Syllable examples */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <h4 className="text-sm font-medium text-gray-500 mb-3">
                  {t('hangul.example')}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentChar.examples.map((example, idx) => (
                    <motion.div
                      key={example}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-center gap-1"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-white rounded-xl text-2xl font-medium text-gray-800 shadow-sm border border-gray-100">
                        {example}
                      </span>
                      <SpeakButton
                        text={example}
                        id={`example-${example}`}
                        size="sm"
                        isSpeaking={isSpeaking}
                        speakingId={speakingId}
                        onSpeak={speak}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Word examples */}
              {currentChar.words.length > 0 && (
                <div className="bg-purple-50 rounded-2xl p-4">
                  <h4 className="text-sm font-medium text-[#4C1D95] mb-3">
                    {t('hangul.words')}
                  </h4>
                  <div className="space-y-2">
                    {currentChar.words.map((wordData, idx) => (
                      <motion.div
                        key={wordData.korean}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-medium text-gray-800">
                            {wordData.korean}
                          </span>
                          <span className="text-sm text-gray-400">
                            ({wordData.romanization})
                          </span>
                          <span className="text-gray-500">
                            {getTranslatedText(wordData.translations)}
                          </span>
                        </div>
                        <SpeakButton
                          text={wordData.korean}
                          id={`word-${wordData.korean}`}
                          size="sm"
                          isSpeaking={isSpeaking}
                          speakingId={speakingId}
                          onSpeak={speak}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={isFirst}
          className={cn(isFirst && 'invisible')}
        >
          {t('common.previous')}
        </Button>

        {isLast ? (
          <Button variant="primary" onClick={handleComplete}>
            {t('common.complete')}
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            {t('common.next')}
          </Button>
        )}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-sm text-gray-400 mt-4">
        {language === 'ja' ? '← スワイプして次へ →' :
         language === 'zh' ? '← 滑动翻页 →' :
         language === 'th' ? '← ปัดเพื่อดูต่อ →' :
         language === 'vi' ? '← Vuốt để tiếp tục →' :
         language === 'es' ? '← Desliza para continuar →' :
         '← Swipe to navigate →'}
      </p>
    </div>
  );
}
