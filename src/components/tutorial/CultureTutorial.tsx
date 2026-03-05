'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CultureTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const kpopExpressions = [
  { korean: '사랑해', romanization: 'saranghae', meaning: 'I love you', usage: 'Expressing love' },
  { korean: '보고 싶어', romanization: 'bogo sipeo', meaning: 'I miss you', usage: 'Missing someone' },
  { korean: '우리 함께', romanization: 'uri hamkke', meaning: 'Together with us', usage: 'Unity/togetherness' },
  { korean: '영원히', romanization: 'yeongwonhi', meaning: 'Forever', usage: 'Eternal promises' },
  { korean: '꿈을 꿔', romanization: 'kkum-eul kkwo', meaning: 'Dream a dream', usage: 'Aspirations' },
  { korean: '빛나는', romanization: 'bitnaneun', meaning: 'Shining', usage: 'Describing beauty' },
];

const dramaExpressions = [
  { korean: '안녕하세요', romanization: 'annyeonghaseyo', meaning: 'Hello (formal)', scene: 'First meeting' },
  { korean: '괜찮아요?', romanization: 'gwaenchanayo?', meaning: 'Are you okay?', scene: 'Concern' },
  { korean: '기다려 주세요', romanization: 'gidaryeo juseyo', meaning: 'Please wait', scene: 'Requesting patience' },
  { korean: '미안해요', romanization: 'mianhaeyo', meaning: "I'm sorry", scene: 'Apologizing' },
  { korean: '정말요?', romanization: 'jeongmallyo?', meaning: 'Really?', scene: 'Surprise' },
  { korean: '좋아해요', romanization: 'joahaeyo', meaning: 'I like you', scene: 'Confession' },
];

const lyricsStructure = [
  { part: 'Verse (절)', korean: '절', description: 'Sets up the story or emotion' },
  { part: 'Pre-Chorus (프리코러스)', korean: '프리코러스', description: 'Builds tension before chorus' },
  { part: 'Chorus (후렴)', korean: '후렴', description: 'Main hook, most memorable part' },
  { part: 'Bridge (브릿지)', korean: '브릿지', description: 'Contrasting section for variety' },
];

export default function CultureTutorial({ isOpen, onClose }: CultureTutorialProps) {
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
                K-POP Expressions
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Common phrases found in K-POP lyrics
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {kpopExpressions.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-3 border-2 border-[#FF7E00]/30"
                >
                  <div className="text-lg text-[#440687] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    {exp.korean}
                  </div>
                  <div className="text-xs text-[#FF7E00] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {exp.romanization}
                  </div>
                  <div className="text-sm text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {exp.meaning}
                  </div>
                  <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                    📍 {exp.usage}
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
                K-Drama Phrases
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Essential expressions for drama scripts
              </p>
            </div>
            <div className="space-y-3">
              {dramaExpressions.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#38B6FF]/30 flex items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="text-lg text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                      {exp.korean}
                    </div>
                    <div className="text-xs text-[#38B6FF]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                      {exp.romanization}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                      {exp.meaning}
                    </div>
                    <div className="text-xs text-[#77B602] mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                      🎬 {exp.scene}
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
                Song Structure
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Understanding K-POP song parts
              </p>
            </div>
            <div className="space-y-3">
              {lyricsStructure.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-xl p-4 border-2 border-[#B4D700]/40"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full bg-[#440687] flex items-center justify-center text-white text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                        {part.part}
                      </div>
                      <div className="text-xs text-[#77B602]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        {part.korean}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-13" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                    {part.description}
                  </p>
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
                Tips & Tricks
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Create authentic K-content
              </p>
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#FF7E00]/10 rounded-xl p-4 border-2 border-[#FF7E00]/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎤</span>
                  <span className="text-[#FF7E00]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    K-POP Tips
                  </span>
                </div>
                <ul className="text-sm text-gray-700 space-y-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                  <li>• Use repetition for catchy hooks</li>
                  <li>• Mix Korean & English phrases</li>
                  <li>• Express emotions directly</li>
                  <li>• Add rhyming endings (-아/어, -요)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#38B6FF]/10 rounded-xl p-4 border-2 border-[#38B6FF]/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎬</span>
                  <span className="text-[#38B6FF]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                    K-Drama Tips
                  </span>
                </div>
                <ul className="text-sm text-gray-700 space-y-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                  <li>• Use formal speech (합니다체) for respect</li>
                  <li>• Add dramatic pauses in dialogue</li>
                  <li>• Include emotional reactions</li>
                  <li>• Use honorifics appropriately</li>
                </ul>
              </motion.div>
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
        <div className="bg-[#FF7E00] p-4 flex items-center justify-between">
          <h2 className="text-xl text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
            K-Culture Creation Guide
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
                  i <= step ? 'bg-[#FF7E00]' : 'bg-gray-200'
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
              className="px-6 py-2.5 rounded-xl text-[15px] bg-[#FF7E00] text-white hover:bg-[#e67200] transition-colors"
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
              Start Creating!
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
