'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HangulTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const vowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
const finalConsonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const consonantNames: Record<string, { name: string; sound: string }> = {
  'ㄱ': { name: 'giyeok', sound: 'g/k' },
  'ㄴ': { name: 'nieun', sound: 'n' },
  'ㄷ': { name: 'digeut', sound: 'd/t' },
  'ㄹ': { name: 'rieul', sound: 'r/l' },
  'ㅁ': { name: 'mieum', sound: 'm' },
  'ㅂ': { name: 'bieup', sound: 'b/p' },
  'ㅅ': { name: 'siot', sound: 's' },
  'ㅇ': { name: 'ieung', sound: 'ng (silent at start)' },
  'ㅈ': { name: 'jieut', sound: 'j' },
  'ㅊ': { name: 'chieut', sound: 'ch' },
  'ㅋ': { name: 'kieuk', sound: 'k' },
  'ㅌ': { name: 'tieut', sound: 't' },
  'ㅍ': { name: 'pieup', sound: 'p' },
  'ㅎ': { name: 'hieut', sound: 'h' },
};

const vowelNames: Record<string, { name: string; sound: string }> = {
  'ㅏ': { name: 'a', sound: 'ah' },
  'ㅑ': { name: 'ya', sound: 'yah' },
  'ㅓ': { name: 'eo', sound: 'uh' },
  'ㅕ': { name: 'yeo', sound: 'yuh' },
  'ㅗ': { name: 'o', sound: 'oh' },
  'ㅛ': { name: 'yo', sound: 'yoh' },
  'ㅜ': { name: 'u', sound: 'oo' },
  'ㅠ': { name: 'yu', sound: 'yoo' },
  'ㅡ': { name: 'eu', sound: 'eu' },
  'ㅣ': { name: 'i', sound: 'ee' },
};

const combinationExamples = [
  { consonant: 'ㄱ', vowel: 'ㅏ', result: '가', romanization: 'ga' },
  { consonant: 'ㄴ', vowel: 'ㅏ', result: '나', romanization: 'na' },
  { consonant: 'ㄷ', vowel: 'ㅏ', result: '다', romanization: 'da' },
  { consonant: 'ㅁ', vowel: 'ㅏ', result: '마', romanization: 'ma' },
  { consonant: 'ㅂ', vowel: 'ㅏ', result: '바', romanization: 'ba' },
  { consonant: 'ㅅ', vowel: 'ㅏ', result: '사', romanization: 'sa' },
];

const batchimExamples = [
  { consonant: 'ㄱ', vowel: 'ㅏ', batchim: 'ㅇ', result: '강', romanization: 'gang', meaning: 'river' },
  { consonant: 'ㅅ', vowel: 'ㅏ', batchim: 'ㄴ', result: '산', romanization: 'san', meaning: 'mountain' },
  { consonant: 'ㅎ', vowel: 'ㅏ', batchim: 'ㄴ', result: '한', romanization: 'han', meaning: 'one/Korean' },
  { consonant: 'ㄱ', vowel: 'ㅜ', batchim: 'ㄱ', result: '국', romanization: 'guk', meaning: 'country' },
  { consonant: 'ㅁ', vowel: 'ㅜ', batchim: 'ㄹ', result: '물', romanization: 'mul', meaning: 'water' },
];

export default function HangulTutorial({ isOpen, onClose }: HangulTutorialProps) {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

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
                Korean Consonants (자음)
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                14 basic consonants form the foundation of Hangul
              </p>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {consonants.map((c) => (
                <motion.div
                  key={c}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#440687]/10 rounded-xl p-3 text-center"
                >
                  <div className="text-2xl text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {c}
                  </div>
                  <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {consonantNames[c]?.sound}
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
                Korean Vowels (모음)
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                10 basic vowels to combine with consonants
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {vowels.map((v) => (
                <motion.div
                  key={v}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#77B602]/10 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl text-[#5a9902]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {v}
                  </div>
                  <div className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {vowelNames[v]?.sound}
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
                Consonant + Vowel = Syllable
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Combine consonant and vowel to make a syllable
              </p>
            </div>
            <div className="space-y-3">
              {combinationExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#CEECFE] flex items-center justify-center gap-4"
                >
                  <span className="text-2xl text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {ex.consonant}
                  </span>
                  <span className="text-xl text-gray-400">+</span>
                  <span className="text-2xl text-[#5a9902]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {ex.vowel}
                  </span>
                  <span className="text-xl text-gray-400">=</span>
                  <span className="text-3xl text-[#440687] bg-[#CEECFE] px-4 py-2 rounded-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {ex.result}
                  </span>
                  <span className="text-lg text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    ({ex.romanization})
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl text-[#440687] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                Adding Final Consonant (받침)
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Add a final consonant to complete syllables
              </p>
            </div>
            <div className="space-y-3">
              {batchimExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#77B602]/30"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {ex.consonant}
                    </span>
                    <span className="text-lg text-gray-400">+</span>
                    <span className="text-xl text-[#5a9902]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {ex.vowel}
                    </span>
                    <span className="text-lg text-gray-400">+</span>
                    <span className="text-xl text-[#FF7E00]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {ex.batchim}
                    </span>
                    <span className="text-lg text-gray-400">=</span>
                    <span className="text-3xl text-white bg-[#440687] px-4 py-2 rounded-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {ex.result}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                      {ex.romanization}
                    </span>
                    <span className="text-gray-400 mx-2">-</span>
                    <span className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                      "{ex.meaning}"
                    </span>
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
        <div className="bg-[#440687] p-4 flex items-center justify-between">
          <h2 className="text-xl text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
            Hangul Tutorial
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
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
                  i <= step ? 'bg-[#440687]' : 'bg-gray-200'
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
              className="px-6 py-2.5 rounded-xl text-[15px] bg-[#440687] text-white hover:bg-[#350568] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-[15px] bg-[#77B602] text-white hover:bg-[#669a02] transition-colors"
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
