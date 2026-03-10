'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';

interface LearnedItem {
  korean: string;
  romanization: string;
  meaning: string;
  category: 'transport' | 'activity' | 'attraction' | 'restaurant' | 'phrase';
}

interface LearningReviewProps {
  learnedItems: LearnedItem[];
  xpEarned: number;
  correctAnswers: number;
  totalQuestions: number;
  onComplete: () => void;
}

const categoryIcons: Record<string, string> = {
  transport: '🚇',
  activity: '☕',
  attraction: '🎭',
  restaurant: '🍽️',
  phrase: '💬',
};

const categoryLabels: Record<string, Record<string, string>> = {
  transport: { en: 'Transport', ja: '交通', zh: '交通', th: 'การขนส่ง', vi: 'Giao thông', es: 'Transporte' },
  activity: { en: 'Activity', ja: 'アクティビティ', zh: '活动', th: 'กิจกรรม', vi: 'Hoạt động', es: 'Actividad' },
  attraction: { en: 'Attraction', ja: '観光地', zh: '景点', th: 'สถานที่ท่องเที่ยว', vi: 'Điểm tham quan', es: 'Atracción' },
  restaurant: { en: 'Restaurant', ja: 'レストラン', zh: '餐厅', th: 'ร้านอาหาร', vi: 'Nhà hàng', es: 'Restaurante' },
  phrase: { en: 'Phrases', ja: 'フレーズ', zh: '短语', th: 'วลี', vi: 'Cụm từ', es: 'Frases' },
};

export default function LearningReview({
  learnedItems,
  xpEarned,
  correctAnswers,
  totalQuestions,
  onComplete,
}: LearningReviewProps) {
  const { t, language } = useLanguage();
  const { speak, isSpeaking } = useTTS();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleSpeak = async (korean: string, index: number) => {
    setPlayingIndex(index);
    await speak(korean);
    setPlayingIndex(null);
  };

  // Group items by category
  const groupedItems = learnedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, LearnedItem[]>);

  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-6"
      >
        <div className="text-5xl mb-4">📚</div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {language === 'ja' ? '今日の学習' :
           language.startsWith('zh') ? '今日学习' :
           language === 'th' ? 'การเรียนรู้วันนี้' :
           language === 'vi' ? 'Học hôm nay' :
           language === 'es' ? 'Aprendizaje de hoy' :
           "Today's Learning"}
        </h2>
        <p className="text-white/60">
          {language === 'ja' ? '学んだ単語とフレーズを復習しましょう' :
           language.startsWith('zh') ? '复习学过的单词和短语' :
           language === 'th' ? 'ทบทวนคำและวลีที่เรียนรู้' :
           language === 'vi' ? 'Ôn lại từ vựng và cụm từ đã học' :
           language === 'es' ? 'Repasa las palabras y frases aprendidas' :
           'Review the words and phrases you learned'}
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 rounded-2xl p-4 mb-6"
      >
        <div className="flex justify-around text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-400">{xpEarned}</div>
            <div className="text-xs text-white/60">XP</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-2xl font-bold text-green-400">{learnedItems.length}</div>
            <div className="text-xs text-white/60">
              {language === 'ja' ? '単語' : language.startsWith('zh') ? '单词' : 'Words'}
            </div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
            <div className="text-xs text-white/60">
              {language === 'ja' ? '正解率' : language.startsWith('zh') ? '正确率' : 'Accuracy'}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learned Items by Category */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {Object.entries(groupedItems).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            className="bg-white/5 rounded-xl p-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{categoryIcons[category] || '📝'}</span>
              <span className="text-white font-bold">
                {categoryLabels[category]?.[language] || categoryLabels[category]?.en || category}
              </span>
              <span className="text-white/40 text-sm">({items.length})</span>
            </div>

            {/* Items */}
            <div className="space-y-2">
              {items.map((item, itemIndex) => {
                const globalIndex = learnedItems.findIndex(
                  li => li.korean === item.korean && li.category === item.category
                );
                const isPlaying = playingIndex === globalIndex;

                return (
                  <motion.div
                    key={`${item.korean}-${itemIndex}`}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      isPlaying ? 'bg-[#B4D700]/20' : 'bg-white/5'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">{item.korean}</span>
                        <span className="text-white/40 text-sm">({item.romanization})</span>
                      </div>
                      <div className="text-white/60 text-sm">{item.meaning}</div>
                    </div>

                    <button
                      onClick={() => handleSpeak(item.korean, globalIndex)}
                      disabled={isSpeaking}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isPlaying
                          ? 'bg-[#B4D700] animate-pulse'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      <img src={isPlaying ? '/images/icon/sound001_g.png' : '/images/icon/sound001_w.png'} alt="sound" className="w-5 h-5" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Complete Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onComplete}
        className="w-full bg-gradient-to-r from-[#B4D700] to-[#77B602] text-white font-bold py-4 px-6 rounded-xl mt-6 shadow-lg"
      >
        {language === 'ja' ? '完了' :
         language.startsWith('zh') ? '完成' :
         language === 'th' ? 'เสร็จสิ้น' :
         language === 'vi' ? 'Hoàn thành' :
         language === 'es' ? 'Completar' :
         'Complete'} →
      </motion.button>
    </div>
  );
}
