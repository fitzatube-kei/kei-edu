'use client';

import React, { useCallback, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTutorialStep, tutorialSteps } from '@/data/hangul/tutorial';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import { useAudioPlayer } from '@/components/game/AudioPlayer';


export default function TutorialPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const { play: playAudio } = useAudioPlayer();

  const stepNumber = parseInt(params.step as string, 10);
  const currentStep = getTutorialStep(stepNumber);
  const totalSteps = tutorialSteps.length;

  // Get current character data
  const currentCharacter = currentStep?.characters?.[currentCharIndex];

  // Get translated text helper
  const getTranslatedText = (text: Record<string, string>) => {
    return text[language as keyof typeof text] || text.en;
  };

  const handleBack = useCallback(() => {
    if (stepNumber === 1) {
      router.push('/hangul');
    } else {
      router.push(`/hangul/tutorial/${stepNumber - 1}`);
    }
  }, [stepNumber, router]);

  const handleNext = useCallback(() => {
    if (currentStep?.characters && currentCharIndex < currentStep.characters.length - 1) {
      setCurrentCharIndex(currentCharIndex + 1);
    } else if (stepNumber < totalSteps) {
      setCurrentCharIndex(0);
      router.push(`/hangul/tutorial/${stepNumber + 1}`);
    } else {
      // Tutorial complete - go to Level 1 game
      if (typeof window !== 'undefined') {
        localStorage.setItem('hangulTutorialComplete', 'true');
        localStorage.setItem('hangulTutorialPromptSeen', 'true');
      }
      router.push('/hangul/1');
    }
  }, [currentCharIndex, currentStep?.characters, stepNumber, totalSteps, router]);

  const handleSkipTutorial = useCallback(() => {
    // Skip tutorial - go to Level 1 game
    if (typeof window !== 'undefined') {
      localStorage.setItem('hangulTutorialComplete', 'true');
      localStorage.setItem('hangulTutorialPromptSeen', 'true');
    }
    router.push('/hangul/1');
  }, [router]);

  if (!currentStep) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Not Found</h1>
          <button onClick={() => router.push('/hangul')} className="text-purple-600">
            Back to Hangul
          </button>
        </div>
      </div>
    );
  }

  const totalChars = currentStep.characters?.length || 1;

  return (
    <div className="min-h-screen bg-[#F7F7F7] pb-24">
      {/* Header */}
      <Header />

      {/* Sub Header - Minimal */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-[14px] text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            ← Back
          </button>

          <span
            className="text-[13px] text-gray-500"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            {stepNumber} / {totalSteps}
          </span>

          <button
            onClick={handleSkipTutorial}
            className="text-[14px] text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Skip →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4">
        <div className="max-w-md mx-auto">

          {/* Character Display */}
          <AnimatePresence mode="wait">
            {currentCharacter && (
              <motion.div
                key={currentCharacter.char}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Main Card */}
                <div className="bg-white rounded-2xl p-5 mb-4">
                  {/* Title */}
                  <p
                    className="text-[12px] text-gray-600 text-center mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {getTranslatedText(currentStep.description)}
                  </p>
                  <h1
                    className="text-[22px] text-[#1F2937] text-center mb-5"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                  >
                    {getTranslatedText(currentStep.title)}
                  </h1>

                  {/* Character */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => playAudio(currentCharacter.char)}
                      className="relative w-[100px] h-[100px] bg-[#22C55E] rounded-full flex items-center justify-center mb-3 active:scale-95 transition-transform"
                    >
                      <span
                        className="text-[52px] text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                      >
                        {currentCharacter.char}
                      </span>
                      {/* Bell Icon */}
                      <div className="absolute -top-1 -right-1 w-8 h-8">
                        <Image
                          src="/images/main/Bell.png"
                          alt="Listen"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </button>
                    <h2
                      className="text-[17px] text-[#1F2937] text-center"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {getTranslatedText(currentCharacter.title)}
                    </h2>
                    <p
                      className="text-[13px] text-gray-600 text-center"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      {getTranslatedText(currentCharacter.description)}
                    </p>
                  </div>
                </div>

                {/* Examples */}
                <div className="bg-white rounded-2xl p-4 mb-4">
                  <p
                    className="text-[11px] text-gray-600 uppercase tracking-wide mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Examples
                  </p>
                  <div className="flex justify-center gap-4">
                    {currentCharacter.examples.map((ex, idx) => (
                      <button
                        key={idx}
                        onClick={() => playAudio(ex)}
                        className="relative bg-[#F0F0F0] rounded-xl px-5 py-3 active:bg-gray-200 transition-colors"
                      >
                        <span
                          className="text-[26px] text-[#1F2937]"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                        >
                          {ex}
                        </span>
                        {/* Bell Icon */}
                        <div className="absolute -top-2 -right-2 w-6 h-6">
                          <Image
                            src="/images/main/Bell.png"
                            alt="Listen"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Words */}
                <div className="bg-white rounded-2xl p-4 mb-4">
                  <p
                    className="text-[11px] text-gray-600 uppercase tracking-wide mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Words
                  </p>
                  <div className="space-y-2">
                    {currentCharacter.words.map((word, idx) => (
                      <button
                        key={idx}
                        onClick={() => playAudio(word.korean)}
                        className="w-full flex items-center gap-3 bg-[#F0F0F0] rounded-xl px-4 py-2.5 active:bg-gray-200 transition-colors text-left"
                      >
                        <span
                          className="text-[20px] text-[#1F2937]"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                        >
                          {word.korean}
                        </span>
                        <span
                          className="text-[13px] text-gray-600 flex-1"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {word.romanization} · {getTranslatedText(word.translations)}
                        </span>
                        {/* Bell Icon */}
                        <div className="relative w-6 h-6 shrink-0">
                          <Image
                            src="/images/main/Bell.png"
                            alt="Listen"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  {/* Dots */}
                  {totalChars > 1 && (
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalChars }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCharIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentCharIndex
                              ? 'bg-[#22C55E] w-5'
                              : 'bg-gray-300 w-2'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-[#22C55E] text-white py-3.5 rounded-xl flex items-center justify-center gap-1 active:scale-[0.98] transition-transform"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    <span className="text-[15px]">
                      {currentCharIndex < totalChars - 1
                        ? 'Next'
                        : stepNumber < totalSteps
                          ? 'Next Step'
                          : 'Start!'}
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fallback for syllable builder */}
          {!currentCharacter && currentStep.type === 'syllable-builder' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-white rounded-2xl p-6 mb-4 text-center">
                <h3
                  className="text-[20px] text-[#1F2937] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                >
                  Build Syllables!
                </h3>
                <p
                  className="text-gray-600 text-[13px] mb-5"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Combine consonants and vowels
                </p>
                <div className="flex items-center justify-center gap-2 text-[28px]">
                  <span className="bg-[#22C55E] text-white w-12 h-12 rounded-lg flex items-center justify-center">ㄱ</span>
                  <span className="text-gray-300">+</span>
                  <span className="bg-[#3B82F6] text-white w-12 h-12 rounded-lg flex items-center justify-center">ㅏ</span>
                  <span className="text-gray-300">=</span>
                  <span className="bg-[#8B5CF6] text-white w-12 h-12 rounded-lg flex items-center justify-center">가</span>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-[#22C55E] text-white py-3.5 rounded-xl flex items-center justify-center gap-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <span className="text-[15px]">Start!</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Navigation />
    </div>
  );
}
