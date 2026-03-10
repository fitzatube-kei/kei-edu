'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';
import { PhraseCategoryData } from '@/data/travel/usefulPhrases';

interface PhraseLearningProps {
  categoryData: PhraseCategoryData;
  onComplete: () => void;
}

const startQuizText: Record<string, string> = {
  en: 'Start Quiz',
  ja: 'クイズ開始',
  zh: '开始测验',
  th: 'เริ่มทำแบบทดสอบ',
  vi: 'Bắt đầu',
  es: 'Comenzar Quiz',
};

const learnPhrasesText: Record<string, string> = {
  en: 'Learn these phrases first!',
  ja: 'まずこのフレーズを覚えよう！',
  zh: '先学习这些句子！',
  th: 'เรียนรู้ประโยคเหล่านี้ก่อน!',
  vi: 'Học các câu này trước!',
  es: '¡Aprende estas frases primero!',
};

export default function PhraseLearning({ categoryData, onComplete }: PhraseLearningProps) {
  const { language, getText } = useLanguage();
  const { speak, isSpeaking, speakingId } = useTTS();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const title = getText(categoryData.title);
  const btnText = startQuizText[language] || startQuizText.en;
  const learnText = learnPhrasesText[language] || learnPhrasesText.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-6"
      >
        <div className="text-4xl mb-3">{categoryData.titleIcon}</div>
        <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
        <p className="text-white/60 text-sm">{learnText}</p>
      </motion.div>

      {/* Phrase Cards */}
      <div className="w-full max-w-md space-y-3">
        {categoryData.phrases.map((phrase, index) => {
          const meaning = phrase.meaning[language as keyof typeof phrase.meaning] || phrase.meaning.en;
          const isExpanded = expandedIndex === index;
          const phraseId = `phrase-${index}`;

          return (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full p-4 text-left flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-[#B4D700]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#B4D700] flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-base truncate">{phrase.korean}</div>
                  <div className="text-white/50 text-xs">{phrase.romanization}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(phrase.korean, phraseId);
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSpeaking && speakingId === phraseId
                      ? 'bg-[#B4D700] text-[#440687]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <img src={isSpeaking && speakingId === phraseId ? '/images/icon/sound001_g.png' : '/images/icon/sound001_w.png'} alt="sound" className="w-5 h-5" />
                </button>
                <svg
                  className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      <div className="bg-white/5 rounded-xl p-3">
                        <div className="text-white/80 text-sm">{meaning}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Start Quiz Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 w-full max-w-md"
      >
        <button
          onClick={onComplete}
          className="w-full py-4 bg-[#B4D700] text-[#440687] font-bold text-lg rounded-2xl hover:bg-[#c5e820] transition-colors active:scale-[0.98]"
        >
          {btnText} →
        </button>
      </motion.div>
    </motion.div>
  );
}
