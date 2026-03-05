'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const sentenceExamples = [
  {
    words: ['나', '는', '학교', '에', '가다'],
    result: '나는 학교에 가다',
    romanization: 'na-neun hakgyo-e gada',
    meaning: 'I go to school',
    breakdown: [
      { word: '나', type: 'noun', meaning: 'I/me' },
      { word: '는', type: 'particle', meaning: 'topic marker' },
      { word: '학교', type: 'noun', meaning: 'school' },
      { word: '에', type: 'particle', meaning: 'to/at' },
      { word: '가다', type: 'verb', meaning: 'to go' },
    ],
  },
  {
    words: ['그녀', '가', '예쁜', '꽃', '을', '보다'],
    result: '그녀가 예쁜 꽃을 보다',
    romanization: 'geunyeo-ga yeppeun kkoch-eul boda',
    meaning: 'She sees a pretty flower',
    breakdown: [
      { word: '그녀', type: 'noun', meaning: 'she' },
      { word: '가', type: 'particle', meaning: 'subject marker' },
      { word: '예쁜', type: 'adjective', meaning: 'pretty' },
      { word: '꽃', type: 'noun', meaning: 'flower' },
      { word: '을', type: 'particle', meaning: 'object marker' },
      { word: '보다', type: 'verb', meaning: 'to see' },
    ],
  },
];

const particles = [
  { particle: '은/는', usage: 'Topic marker', example: '나는 (I am...)' },
  { particle: '이/가', usage: 'Subject marker', example: '꽃이 (The flower...)' },
  { particle: '을/를', usage: 'Object marker', example: '밥을 (rice [object])' },
  { particle: '에', usage: 'Location/Time', example: '학교에 (to school)' },
  { particle: '에서', usage: 'Action location', example: '집에서 (at home)' },
  { particle: '와/과', usage: 'And/With', example: '친구와 (with friend)' },
];

export default function StoryTutorial({ isOpen, onClose }: StoryTutorialProps) {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  if (!isOpen) return null;

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl text-[#440687] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                Korean Particles (조사)
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Particles connect words and show their roles in sentences
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {particles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#B4D700]/30"
                >
                  <div className="text-xl text-[#440687] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {p.particle}
                  </div>
                  <div className="text-sm text-[#77B602] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    {p.usage}
                  </div>
                  <div className="text-xs text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                    {p.example}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl text-[#440687] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                Building Sentences
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Combine words and particles to make sentences
              </p>
            </div>
            <div className="space-y-4">
              {sentenceExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#CEECFE]"
                >
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {ex.words.map((word, wi) => (
                      <span key={wi} className="flex items-center">
                        <span
                          className={`px-3 py-1.5 rounded-lg text-lg ${
                            ex.breakdown[wi]?.type === 'particle'
                              ? 'bg-[#FF7E00]/20 text-[#FF7E00]'
                              : ex.breakdown[wi]?.type === 'verb'
                                ? 'bg-[#77B602]/20 text-[#5a9902]'
                                : 'bg-[#440687]/10 text-[#440687]'
                          }`}
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                        >
                          {word}
                        </span>
                        {wi < ex.words.length - 1 && (
                          <span className="mx-1 text-gray-400">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-xl text-[#440687] bg-[#CEECFE] inline-block px-4 py-2 rounded-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {ex.result}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                      "{ex.meaning}"
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl text-[#440687] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                Word Types
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Understanding different parts of speech
              </p>
            </div>
            <div className="space-y-4">
              {sentenceExamples[0].breakdown.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl p-4 flex items-center gap-4 ${
                    item.type === 'particle'
                      ? 'bg-[#FF7E00]/10 border-2 border-[#FF7E00]/30'
                      : item.type === 'verb'
                        ? 'bg-[#77B602]/10 border-2 border-[#77B602]/30'
                        : item.type === 'adjective'
                          ? 'bg-[#38B6FF]/10 border-2 border-[#38B6FF]/30'
                          : 'bg-[#440687]/5 border-2 border-[#440687]/20'
                  }`}
                >
                  <span
                    className="text-2xl w-16 text-center"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {item.word}
                  </span>
                  <div className="flex-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.type === 'particle'
                          ? 'bg-[#FF7E00] text-white'
                          : item.type === 'verb'
                            ? 'bg-[#77B602] text-white'
                            : item.type === 'adjective'
                              ? 'bg-[#38B6FF] text-white'
                              : 'bg-[#440687] text-white'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {item.type.toUpperCase()}
                    </span>
                    <p className="text-gray-700 mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                      {item.meaning}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#B4D700] p-4 flex items-center justify-between">
          <h2 className="text-xl text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
            Sentence Building Tutorial
          </h2>
          <button
            onClick={onClose}
            className="text-[#440687]/80 hover:text-[#440687] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 pt-4">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-[#B4D700]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
            Step {step + 1} of {totalSteps}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className={`px-6 py-2.5 rounded-xl text-[15px] transition-colors ${
              step === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-[#440687] hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            ← Previous
          </button>

          {step < totalSteps - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl text-[15px] bg-[#B4D700] text-[#440687] hover:bg-[#a3c200] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-[15px] bg-[#440687] text-white hover:bg-[#350568] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Got it!
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
