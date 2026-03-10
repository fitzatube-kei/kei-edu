'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface QuizIntroProps {
  destinationName: string;
  onComplete: () => void;
}

const quizIntroText: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Surprise Word Quiz!!', subtitle: 'Do you know what these signs mean?' },
  ja: { title: 'びっくり単語クイズ!!', subtitle: 'この標識の意味がわかりますか？' },
  zh: { title: '惊喜单词测验!!', subtitle: '你知道这些标志的意思吗？' },
  th: { title: 'แบบทดสอบคำศัพท์เซอร์ไพรส์!!', subtitle: 'คุณรู้ความหมายของป้ายเหล่านี้ไหม?' },
  vi: { title: 'Bài kiểm tra từ vựng bất ngờ!!', subtitle: 'Bạn có biết những biển báo này nghĩa là gì không?' },
  es: { title: '¡¡Quiz sorpresa de palabras!!', subtitle: '¿Sabes qué significan estos letreros?' },
};

export default function QuizIntro({ destinationName, onComplete }: QuizIntroProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = quizIntroText[language] || quizIntroText.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-7xl mb-6"
        >
          🎯
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-black text-yellow-400 mb-3"
        >
          {text.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/80 mb-4"
        >
          {text.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 rounded-2xl px-6 py-3 inline-block"
        >
          <span className="text-xl text-white font-bold">📍 {destinationName}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
          className="mt-8 text-white/50 text-sm"
        >
          ···
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
