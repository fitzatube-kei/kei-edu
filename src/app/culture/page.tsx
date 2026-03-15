'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { useLanguage } from '@/context/LanguageContext';


const translations: Record<string, {
  pageTitle: string;
  pageSubtitle: string;
  kpopTitle: string;
  kpopDesc: string;
  kpopQuestions: string;
  kdramaTitle: string;
  kdramaDesc: string;
  kdramaQuestions: string;
  tipTitle: string;
  tipDesc: string;
  tutorial: string;
  yourProgress: string;
  overallStats: string;
  quizPlayed: string;
  bestScore: string;
  selectMode: string;
  chooseQuiz: string;
}> = {
  en: {
    pageTitle: 'K EMOJI QUIZ',
    pageSubtitle: 'Guess K-POP songs and K-Drama titles from emojis!',
    kpopTitle: 'K-POP Title Quiz',
    kpopDesc: 'Guess K-POP song titles from emojis! 3 difficulty levels available.',
    kpopQuestions: '150 songs',
    kdramaTitle: 'K-Drama Title Quiz',
    kdramaDesc: 'Guess K-Drama titles from emojis! From classics to latest hits.',
    kdramaQuestions: '150 dramas',
    tipTitle: 'Learn Korean titles!',
    tipDesc: 'All titles are written in Korean - even English titles like "Hype Boy" become "하입보이"!',
    tutorial: 'Tutorial',
    yourProgress: 'YOUR PROGRESS',
    overallStats: 'Overall Stats',
    quizPlayed: 'Quiz Played',
    bestScore: 'Best Score',
    selectMode: 'SELECT QUIZ',
    chooseQuiz: 'Choose Your Quiz',
  },
  es: {
    pageTitle: 'Quiz K-Culture',
    pageSubtitle: '¡Adivina canciones K-POP y títulos K-Drama por emojis!',
    kpopTitle: 'Quiz de Títulos K-POP',
    kpopDesc: '¡Adivina títulos de canciones K-POP por emojis! 3 niveles de dificultad.',
    kpopQuestions: '150 canciones',
    kdramaTitle: 'Quiz de Títulos K-Drama',
    kdramaDesc: '¡Adivina títulos de K-Drama por emojis! Desde clásicos hasta éxitos recientes.',
    kdramaQuestions: '150 dramas',
    tipTitle: '¡Aprende títulos en coreano!',
    tipDesc: 'Todos los títulos están en coreano - incluso títulos en inglés como "Hype Boy" se escriben "하입보이"!',
    tutorial: 'Tutorial',
    yourProgress: 'TU PROGRESO',
    overallStats: 'Estadísticas',
    quizPlayed: 'Quiz Jugados',
    bestScore: 'Mejor Puntuación',
    selectMode: 'SELECCIONAR QUIZ',
    chooseQuiz: 'Elige tu Quiz',
  },
  ja: {
    pageTitle: 'K-Cultureクイズ',
    pageSubtitle: '絵文字からK-POPの曲名とK-Dramaのタイトルを当てよう！',
    kpopTitle: 'K-POPタイトルクイズ',
    kpopDesc: '絵文字からK-POPの曲名を当てよう！3つの難易度レベル。',
    kpopQuestions: '150曲',
    kdramaTitle: 'K-Dramaタイトルクイズ',
    kdramaDesc: '絵文字からK-Dramaのタイトルを当てよう！名作から最新作まで。',
    kdramaQuestions: '150作品',
    tipTitle: '韓国語のタイトルを学ぼう！',
    tipDesc: 'すべてのタイトルは韓国語で書かれています - "Hype Boy"も"하입보이"になります！',
    tutorial: 'チュートリアル',
    yourProgress: '進捗状況',
    overallStats: '統計',
    quizPlayed: 'プレイ回数',
    bestScore: 'ベストスコア',
    selectMode: 'クイズ選択',
    chooseQuiz: 'クイズを選ぶ',
  },
  zh: {
    pageTitle: 'K-Culture问答',
    pageSubtitle: '通过表情猜K-POP歌曲和K-Drama的名称！',
    kpopTitle: 'K-POP歌名问答',
    kpopDesc: '通过表情猜K-POP歌曲名！3个难度等级。',
    kpopQuestions: '150首歌曲',
    kdramaTitle: 'K-Drama剧名问答',
    kdramaDesc: '通过表情猜韩剧名！从经典到最新热门。',
    kdramaQuestions: '150部剧',
    tipTitle: '学习韩语标题！',
    tipDesc: '所有标题都用韩语书写 - 即使是英语标题如"Hype Boy"也写成"하입보이"！',
    tutorial: '教程',
    yourProgress: '你的进度',
    overallStats: '总体统计',
    quizPlayed: '答题次数',
    bestScore: '最佳成绩',
    selectMode: '选择问答',
    chooseQuiz: '选择你的问答',
  },
  vi: {
    pageTitle: 'Quiz K-Culture',
    pageSubtitle: 'Đoán tên bài hát K-POP và phim K-Drama qua emoji!',
    kpopTitle: 'Quiz Tên Bài Hát K-POP',
    kpopDesc: 'Đoán tên bài hát K-POP qua emoji! 3 cấp độ khó.',
    kpopQuestions: '150 bài hát',
    kdramaTitle: 'Quiz Tên Phim K-Drama',
    kdramaDesc: 'Đoán tên phim K-Drama qua emoji! Từ kinh điển đến mới nhất.',
    kdramaQuestions: '150 phim',
    tipTitle: 'Học tên tiếng Hàn!',
    tipDesc: 'Tất cả tên đều viết bằng tiếng Hàn - ngay cả "Hype Boy" cũng thành "하입보이"!',
    tutorial: 'Hướng dẫn',
    yourProgress: 'TIẾN ĐỘ CỦA BẠN',
    overallStats: 'Thống Kê',
    quizPlayed: 'Số lần chơi',
    bestScore: 'Điểm cao nhất',
    selectMode: 'CHỌN QUIZ',
    chooseQuiz: 'Chọn Quiz',
  },
  th: {
    pageTitle: 'ทดสอบ K-Culture',
    pageSubtitle: 'ทายชื่อเพลง K-POP และซีรี่ส์ K-Drama จากอิโมจิ!',
    kpopTitle: 'ทดสอบชื่อเพลง K-POP',
    kpopDesc: 'ทายชื่อเพลง K-POP จากอิโมจิ! 3 ระดับความยาก',
    kpopQuestions: '150 เพลง',
    kdramaTitle: 'ทดสอบชื่อซีรี่ส์ K-Drama',
    kdramaDesc: 'ทายชื่อซีรี่ส์ K-Drama จากอิโมจิ! จากคลาสสิกถึงล่าสุด',
    kdramaQuestions: '150 เรื่อง',
    tipTitle: 'เรียนรู้ชื่อภาษาเกาหลี!',
    tipDesc: 'ชื่อทั้งหมดเขียนเป็นภาษาเกาหลี - แม้แต่ "Hype Boy" ก็เขียนเป็น "하입보이"!',
    tutorial: 'บทเรียน',
    yourProgress: 'ความคืบหน้าของคุณ',
    overallStats: 'สถิติ',
    quizPlayed: 'จำนวนครั้งที่เล่น',
    bestScore: 'คะแนนสูงสุด',
    selectMode: 'เลือกแบบทดสอบ',
    chooseQuiz: 'เลือกแบบทดสอบ',
  },
};

const cultureFeatures = [
  {
    id: 'kpop',
    icon: '🎤',
    color: '#FF7E00',
    bgColor: 'bg-[#FF7E00]/10',
    borderColor: 'border-[#FF7E00]/40',
    label: 'EMOJI QUIZ',
  },
  {
    id: 'kdrama',
    icon: '🎬',
    color: '#38B6FF',
    bgColor: 'bg-[#38B6FF]/10',
    borderColor: 'border-[#38B6FF]/40',
    label: 'EMOJI QUIZ',
  },
];

export default function CulturePage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const getFeatureContent = (id: string) => {
    switch (id) {
      case 'kpop':
        return { title: t.kpopTitle, desc: t.kpopDesc, badge: t.kpopQuestions };
      case 'kdrama':
        return { title: t.kdramaTitle, desc: t.kdramaDesc, badge: t.kdramaQuestions };
      default:
        return { title: '', desc: '', badge: null };
    }
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 pt-6 pb-0"
          >
            {/* Character Image */}
            <div className="relative w-[120px] h-[120px] xs:w-[150px] xs:h-[150px] sm:w-[187px] sm:h-[187px] md:w-[220px] md:h-[220px] shrink-0 ml-[5px]">
              <Image
                src="/images/culture/ct_crt001.png"
                alt="K-Culture Character"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p
                className="text-[#440687] text-[11px] sm:text-[12px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                K-POP & K-DRAMA
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {t.pageTitle}
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t.pageSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[16px] p-3 sm:p-5 mb-4 sm:mb-6 mt-0 shadow-lg border-l-4 border-l-[#FF7E00]"
          >
            <p
              className="text-[#FF7E00] text-[11px] uppercase tracking-wider mb-0.5 sm:mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {t.yourProgress}
            </p>
            <h2
              className="text-[20px] sm:text-[24px] text-[#1F2937] mb-2 sm:mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {t.overallStats}
            </h2>

            <div className="flex items-center justify-around">
              {/* Quiz Played */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[30px] h-[30px] xs:w-[36px] xs:h-[36px] sm:w-[48px] sm:h-[48px] bg-[#FF7E00] rounded-lg flex items-center justify-center">
                  <span className="text-base sm:text-xl">🎯</span>
                </div>
                <div>
                  <p
                    className="text-[20px] xs:text-[24px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    0
                  </p>
                  <p
                    className="text-[11px] sm:text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {t.quizPlayed}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 sm:h-14 bg-[#FF7E00]/30" />

              {/* Best Score */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[30px] h-[30px] xs:w-[36px] xs:h-[36px] sm:w-[48px] sm:h-[48px] bg-[#FF7E00] rounded-lg flex items-center justify-center">
                  <span className="text-base sm:text-xl">🏆</span>
                </div>
                <div>
                  <p
                    className="text-[20px] xs:text-[24px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    -
                  </p>
                  <p
                    className="text-[11px] sm:text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {t.bestScore}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Header */}
          <div className="mb-4">
            <p
              className="text-[#FF7E00] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {t.selectMode}
            </p>
            <h2
              className="text-[20px] text-[#1F2937]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {t.chooseQuiz}
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {cultureFeatures.map((feature, index) => {
              const content = getFeatureContent(feature.id);
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={`/culture/${feature.id}`}>
                    <div
                      className="bg-white rounded-2xl p-5 shadow-md text-left w-full border-l-4 transition-all hover:shadow-lg"
                      style={{ borderLeftColor: feature.color }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <motion.div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0"
                          style={{ backgroundColor: feature.color }}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                        >
                          <span>{feature.icon}</span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 whitespace-nowrap">
                            <p
                              className="text-[10px] xs:text-xs uppercase tracking-wider"
                              style={{ color: feature.color, fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                            >
                              {feature.label}
                            </p>
                            {content.badge && (
                              <span
                                className="text-[9px] xs:text-[10px] px-1.5 xs:px-2 py-0.5 rounded-full text-white"
                                style={{ backgroundColor: feature.color, fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                              >
                                {content.badge}
                              </span>
                            )}
                          </div>
                          <h3
                            className="text-lg text-[#1F2937] mb-1"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                          >
                            {content.title}
                          </h3>
                          <p
                            className="text-sm text-gray-600"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                          >
                            {content.desc}
                          </p>
                        </div>

                        {/* Start Button */}
                        <div className="flex-shrink-0">
                          <span
                            className="px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap"
                            style={{ backgroundColor: feature.color, fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                          >
                            Start →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 bg-[#440687] rounded-2xl p-5 text-white shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/culture/icon_s_001.png"
                  alt="Tip"
                  width={48}
                  height={48}
                  unoptimized
                />
              </div>
              <div>
                <h4
                  className="text-lg mb-1 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  {t.tipTitle}
                </h4>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  {t.tipDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
