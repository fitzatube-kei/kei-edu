'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';

// Translations for main page
const mainTranslations: Record<string, {
  signUp: string;
  logIn: string;
  heroBanner: string;
  courseSubtitle: string;
  courseTitle: string;
  learnBasics: string;
  hangulLearning: string;
  wordPuzzle: string;
  wordBuilder: string;
  interactiveAdventure: string;
  storyMode: string;
  emojiGuessing: string;
  kpopDrama: string;
  start: string;
  hangulInfo: string;
  hiImKei: string;
}> = {
  en: {
    signUp: 'Sign Up',
    logIn: 'Log In',
    heroBanner: '"Begin your joyful journey into Hangul!"',
    courseSubtitle: 'The easiest way to learn Hangul.',
    courseTitle: 'Follow the courses in order!',
    learnBasics: 'LEARN THE BASICS',
    hangulLearning: 'Hangul Learning',
    wordPuzzle: 'WORD PUZZLE',
    wordBuilder: 'Word Builder',
    interactiveAdventure: 'INTERACTIVE ADVENTURE',
    storyMode: 'Story Mode',
    emojiGuessing: 'Emoji Guessing Game',
    kpopDrama: 'K Culture Emoji',
    start: 'START',
    hangulInfo: '<b>Hangul</b> is the only language in the world with a clearly documented creator and purpose. It was designed to be simple, logical, and easy to learn. <b>Start your Hangul journey now!</b>',
    hiImKei: "Hi! I'm KEI",
  },
  es: {
    signUp: 'Registrarse',
    logIn: 'Iniciar Sesión',
    heroBanner: '"Diversión que se convierte en fluidez"',
    courseSubtitle: 'La forma más fácil de aprender Hangul.',
    courseTitle: '¡Sigue los cursos en orden!',
    learnBasics: 'APRENDE LO BÁSICO',
    hangulLearning: 'Aprendizaje de Hangul',
    wordPuzzle: 'ROMPECABEZAS DE PALABRAS',
    wordBuilder: 'Constructor de Palabras',
    interactiveAdventure: 'AVENTURA INTERACTIVA',
    storyMode: 'Modo Historia',
    emojiGuessing: 'Juego de Adivinanzas Emoji',
    kpopDrama: 'K Culture Emoji',
    start: 'EMPEZAR',
    hangulInfo: '<b>Hangul</b> es el único idioma del mundo con un creador y propósito claramente documentados. Fue diseñado para ser simple, lógico y fácil de aprender. <b>¡Comienza tu viaje con Hangul ahora!</b>',
    hiImKei: "¡Hola! Soy KEI",
  },
  vi: {
    signUp: 'Đăng Ký',
    logIn: 'Đăng Nhập',
    heroBanner: '"Niềm vui biến thành sự thành thạo"',
    courseSubtitle: 'Cách dễ nhất để học Hangul.',
    courseTitle: 'Hãy theo các khóa học theo thứ tự!',
    learnBasics: 'HỌC CƠ BẢN',
    hangulLearning: 'Học Hangul',
    wordPuzzle: 'CÂU ĐỐ TỪ VỰNG',
    wordBuilder: 'Xây Dựng Từ',
    interactiveAdventure: 'PHIÊU LƯU TƯƠNG TÁC',
    storyMode: 'Chế Độ Câu Chuyện',
    emojiGuessing: 'Trò Chơi Đoán Emoji',
    kpopDrama: 'K Culture Emoji',
    start: 'BẮT ĐẦU',
    hangulInfo: '<b>Hangul</b> là ngôn ngữ duy nhất trên thế giới có người sáng tạo và mục đích được ghi chép rõ ràng. Nó được thiết kế để đơn giản, logic và dễ học. <b>Bắt đầu hành trình Hangul của bạn ngay!</b>',
    hiImKei: "Xin chào! Tôi là KEI",
  },
  th: {
    signUp: 'สมัครสมาชิก',
    logIn: 'เข้าสู่ระบบ',
    heroBanner: '"ความสนุกที่กลายเป็นความคล่องแคล่ว"',
    courseSubtitle: 'วิธีที่ง่ายที่สุดในการเรียนรู้ฮันกึล',
    courseTitle: 'เรียนตามลำดับหลักสูตร!',
    learnBasics: 'เรียนรู้พื้นฐาน',
    hangulLearning: 'เรียนรู้ฮันกึล',
    wordPuzzle: 'ปริศนาคำศัพท์',
    wordBuilder: 'สร้างคำ',
    interactiveAdventure: 'การผจญภัยโต้ตอบ',
    storyMode: 'โหมดเรื่องราว',
    emojiGuessing: 'เกมทายอิโมจิ',
    kpopDrama: 'K Culture Emoji',
    start: 'เริ่ม',
    hangulInfo: '<b>ฮันกึล</b> เป็นภาษาเดียวในโลกที่มีผู้สร้างและจุดประสงค์ที่บันทึกไว้อย่างชัดเจน ถูกออกแบบให้เรียบง่าย มีเหตุผล และเรียนรู้ได้ง่าย <b>เริ่มต้นการเดินทางฮันกึลของคุณเลย!</b>',
    hiImKei: "สวัสดี! ฉันคือ KEI",
  },
  ja: {
    signUp: '新規登録',
    logIn: 'ログイン',
    heroBanner: '「楽しさが流暢さに変わる」',
    courseSubtitle: 'ハングルを学ぶ一番簡単な方法。',
    courseTitle: 'コースを順番に進めよう！',
    learnBasics: '基礎を学ぶ',
    hangulLearning: 'ハングル学習',
    wordPuzzle: '単語パズル',
    wordBuilder: 'ワードビルダー',
    interactiveAdventure: 'インタラクティブアドベンチャー',
    storyMode: 'ストーリーモード',
    emojiGuessing: '絵文字当てゲーム',
    kpopDrama: 'K Culture Emoji',
    start: 'スタート',
    hangulInfo: '<b>ハングル</b>は、創造者と目的が明確に記録されている世界唯一の言語です。シンプルで論理的で学びやすいように設計されました。<b>今すぐハングルの旅を始めましょう！</b>',
    hiImKei: "こんにちは！KEIです",
  },
  zh: {
    signUp: '注册',
    logIn: '登录',
    heroBanner: '"乐趣变成流利"',
    courseSubtitle: '学习韩文最简单的方法。',
    courseTitle: '按顺序学习课程！',
    learnBasics: '学习基础',
    hangulLearning: '韩文学习',
    wordPuzzle: '单词拼图',
    wordBuilder: '单词构建',
    interactiveAdventure: '互动冒险',
    storyMode: '故事模式',
    emojiGuessing: '表情猜谜游戏',
    kpopDrama: 'K Culture Emoji',
    start: '开始',
    hangulInfo: '<b>韩文</b>是世界上唯一一种有明确记录的创造者和目的的语言。它被设计得简单、有逻辑且易于学习。<b>现在就开始你的韩文之旅吧！</b>',
    hiImKei: "你好！我是KEI",
  },
  'zh-TW': {
    signUp: '註冊',
    logIn: '登入',
    heroBanner: '「樂趣化為流利」',
    courseSubtitle: '學習韓文最簡單的方法。',
    courseTitle: '按順序學習課程！',
    learnBasics: '學習基礎',
    hangulLearning: '韓文學習',
    wordPuzzle: '單字拼圖',
    wordBuilder: '單字建構',
    interactiveAdventure: '互動冒險',
    storyMode: '故事模式',
    emojiGuessing: '表情猜謎遊戲',
    kpopDrama: 'K Culture Emoji',
    start: '開始',
    hangulInfo: '<b>韓文</b>是世界上唯一一種有明確記載的創造者和目的的語言。它被設計得簡單、有邏輯且易於學習。<b>現在就開始你的韓文之旅吧！</b>',
    hiImKei: "你好！我是KEI",
  },
};

export default function MainPage() {
  const { user } = useAuth();
  const { language } = useLanguage();

  const t = mainTranslations[language] || mainTranslations.en;

  // Course card data with translations
  const courses = [
    {
      id: 'hangul',
      href: '/hangul',
      label: t.learnBasics,
      title: t.hangulLearning,
      bgColor: '#B4D700',
      buttonColor: '#440687',
      image: '/images/word/crt002_4.png',
    },
    {
      id: 'puzzle',
      href: '/puzzle',
      label: t.wordPuzzle,
      title: t.wordBuilder,
      bgColor: '#38B6FF',
      buttonColor: '#B4D700',
      image: '/images/main/illustration3.png',
    },
    {
      id: 'sentences',
      href: '/sentences',
      label: t.learnBasics,
      title: 'Sentences',
      bgColor: '#C9A0DC',
      buttonColor: '#440687',
      image: '/images/main/illustration6.png',
    },
    {
      id: 'culture',
      href: '/culture',
      label: t.emojiGuessing,
      title: 'K Emoji Quiz',
      bgColor: '#F5A623',
      buttonColor: '#9038EF',
      image: '/images/main/illustration5.png',
    },
    {
      id: 'story',
      href: '/story',
      label: t.interactiveAdventure,
      title: t.storyMode,
      bgColor: '#FF7E7E',
      buttonColor: '#FF3B30',
      image: '/images/main/illustration4.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div className="px-4 sm:px-6 pt-0 sm:pt-[6px] pb-0">
        <div className="max-w-4xl mx-auto flex items-center relative overflow-visible">
          {/* Character */}
          <div className="relative shrink-0 w-[100px] h-[116px] xs:w-[130px] xs:h-[150px] sm:w-[200px] sm:h-[260px]">
            <Image
              src="/images/main/illustration1.png"
              alt="Sejong"
              fill
              className="object-contain object-bottom"
              unoptimized
            />
          </div>

          {/* Text and Buttons */}
          <div className="flex-1 flex flex-col items-end justify-center pr-[10px] xs:pr-[16px] sm:pr-[24px]">
            <p
              className="text-[#440687] text-right leading-[1.15]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(18px, 5.5vw, 36px)' }}
            >
              {language === 'en' ? (
                <>&ldquo;Begin your joyful<br /> journey into Hangul!&rdquo;</>
              ) : (
                t.heroBanner.replace(/["""]/g, '')
              )}
            </p>
            {!user && (
              <div className="flex gap-1.5 xs:gap-1.5 sm:gap-2 mt-2 xs:mt-3 sm:mt-3">
                <Link
                  href="/signup"
                  className="bg-[#B4D700] text-[#2F3596] px-[8px] xs:px-[12px] sm:px-[18px] py-[3px] xs:py-[5px] sm:py-[7px] rounded-md text-[11px] xs:text-[12px] sm:text-[16px] transition-opacity duration-200 hover:opacity-80"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {t.signUp}
                </Link>
                <Link
                  href="/login"
                  className="bg-[#440687] text-white px-[8px] xs:px-[12px] sm:px-[18px] py-[3px] xs:py-[5px] sm:py-[7px] rounded-md text-[11px] xs:text-[12px] sm:text-[16px]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {t.logIn}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 -mt-[12px] xs:-mt-[16px] sm:-mt-[50px] relative z-10 pb-4">
        <div className="max-w-4xl mx-auto">
          {/* Course Cards - Vertical stack horizontal banners */}
          <div className="flex flex-col gap-[10px] sm:gap-[16px]">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={course.href}>
                  <div
                    className="rounded-[16px] px-[14px] xs:px-[18px] sm:px-5 py-[10px] xs:py-[12px] sm:py-[16px] relative overflow-hidden flex items-center h-[86px] xs:h-[100px] sm:h-[140px]"
                    style={{ backgroundColor: course.bgColor }}
                  >
                    <div className="flex-1 z-10">
                      <p
                        className="uppercase tracking-wider mb-0 opacity-70 text-[8px] xs:text-[10px] sm:text-[13px] leading-tight"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {course.label}
                      </p>
                      <h3
                        className="leading-tight mt-[2px] mb-2 xs:mb-3 text-[16px] xs:text-[20px] sm:text-[28px]"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        {course.title}
                      </h3>
                      <button
                        className="flex items-center justify-center px-[12px] xs:px-[16px] sm:px-[20px] py-[4px] xs:py-[6px] sm:py-[8px] rounded-full text-[11px] xs:text-[13px] sm:text-[14px] gap-1 xs:gap-1.5 text-white"
                        style={{ backgroundColor: course.buttonColor, fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        <span className="leading-none relative top-[1px]">{t.start}</span>
                        <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className={`absolute bottom-[0px] w-[38%] h-[100%] sm:w-[35%] sm:h-[110%] ${course.id === 'hangul' ? 'right-[10px] xs:right-[14px] sm:right-[20px]' : 'right-[0px]'}`}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className={`object-contain object-bottom ${course.id === 'culture' ? '-scale-x-100' : ''}`}
                        unoptimized
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hangul Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 xs:mt-5 bg-[#F3F4F6] rounded-[12px] p-3 xs:p-4 sm:p-5 flex items-center gap-2 xs:gap-3"
          >
            <div className="flex-1">
              <p
                className="text-[#4B5563] text-[11px] xs:text-[13px] sm:text-[17px] leading-[1.6]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                dangerouslySetInnerHTML={{ __html: t.hangulInfo }}
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
