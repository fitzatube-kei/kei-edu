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
      bgColor: '#87ABFF',
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
      id: 'story',
      href: '/story',
      label: t.interactiveAdventure,
      title: t.storyMode,
      bgColor: '#B4D700',
      buttonColor: '#FF7E00',
      image: '/images/main/illustration4.png',
    },
    {
      id: 'culture',
      href: '/culture',
      label: t.emojiGuessing,
      title: t.kpopDrama,
      bgColor: '#F5A623',
      buttonColor: '#9038EF',
      image: '/images/main/illustration5.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div className="px-4 sm:px-6 pt-[30px] xs:pt-[38px] md:pt-[50px] lg:pt-[58px] xl:pt-[66px] pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#AACFFF] rounded-full flex items-center relative overflow-visible h-[110px] xs:h-[130px] sm:h-[151px]">
            {/* Character */}
            <div className="absolute left-[10px] xs:left-[14px] -bottom-[14px] xs:-bottom-[18px] sm:-bottom-[21px] w-[110px] h-[128px] xs:w-[140px] xs:h-[162px] sm:w-[198px] sm:h-[220px]">
              <Image
                src="/images/main/illustration1.png"
                alt="Sejong"
                fill
                className="object-contain object-bottom"
                unoptimized
              />
            </div>

            {/* Text and Buttons */}
            <div className="flex-1 flex flex-col items-end justify-center pr-[20px] xs:pr-[32px] sm:pr-[57px] ml-[100px] xs:ml-[130px] sm:ml-[170px]">
              <p
                className="text-[#2F3596] text-right leading-[1.1] -mt-[1px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(11px, 3.5vw, 26px)' }}
              >
                {language === 'en' ? (
                  <>&ldquo;Begin your joyful journey<br className="sm:hidden" /> into Hangul!&rdquo;</>
                ) : (
                  t.heroBanner.replace(/["""]/g, '')
                )}
              </p>
              {!user && (
                <div className="flex gap-1.5 xs:gap-1.5 sm:gap-2 mt-2 xs:mt-2 sm:mt-3 mr-0 xs:mr-[4px] sm:mr-[12px]">
                  <Link
                    href="/signup"
                    className="bg-white text-[#2F3596] px-[6px] xs:px-[10px] sm:px-[18px] py-[2px] xs:py-[4px] sm:py-[7px] rounded-md text-[11px] xs:text-[11px] sm:text-[16px] transition-colors duration-200 hover:text-[#B4D700]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {t.signUp}
                  </Link>
                  <Link
                    href="/login"
                    className="bg-[#3261B8] text-white px-[6px] xs:px-[10px] sm:px-[18px] py-[2px] xs:py-[4px] sm:py-[7px] rounded-md text-[11px] xs:text-[11px] sm:text-[16px]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {t.logIn}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 pt-[14px] pb-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <p
            className="text-[#6B7280] text-[11px] xs:text-[12px] sm:text-[14px] mb-0"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {t.courseSubtitle}
          </p>
          <h2
            className="text-[#1F2937] text-[16px] xs:text-[18px] sm:text-[24px] mb-2 xs:mb-3"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t.courseTitle}
          </h2>

          {/* Course Cards - 2x2 Grid on mobile, vertical list on tablet/PC */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-[12px] sm:gap-[24px]">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={course.href}>
                  {/* Mobile: square cards */}
                  <div
                    className="sm:hidden rounded-[12px] pl-[10px] pt-[10px] pr-2 pb-2 xs:pl-[14px] xs:pt-[14px] xs:pr-3 xs:pb-3 relative overflow-hidden flex flex-col justify-between"
                    style={{ backgroundColor: course.bgColor, aspectRatio: '1 / 1.05' }}
                  >
                    <div className="z-10">
                      <p
                        className="uppercase tracking-wider mb-0 opacity-70 text-[8px] xs:text-[10px] leading-tight"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {course.label}
                      </p>
                      <h3
                        className="leading-tight mt-[1px] text-[15px] xs:text-[20px]"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        {course.title}
                      </h3>
                    </div>
                    <div className={`absolute ${
                      index % 2 === 0
                        ? 'right-[-4px] bottom-[-4px]'
                        : 'left-[-4px] bottom-[-4px]'
                    } ${course.id === 'puzzle' || course.id === 'story' || course.id === 'culture' ? 'w-[95%] h-[95%]' : 'w-[110%] h-[110%]'}`}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className={`object-contain object-bottom ${course.id === 'culture' ? '-scale-x-100' : ''}`}
                        unoptimized
                      />
                    </div>
                    <div className="z-10">
                      <button
                        className="flex items-center justify-center px-[10px] xs:px-[16px] py-[4px] xs:py-[6px] rounded-full text-[11px] xs:text-[14px] gap-1 xs:gap-1.5 text-white"
                        style={{ backgroundColor: course.buttonColor, fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        <span className="leading-none relative top-[1px]">{t.start}</span>
                        <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Tablet/PC: horizontal banner */}
                  <div
                    className="hidden sm:flex rounded-[12px] py-[12px] px-5 relative items-center h-[140px] overflow-visible"
                    style={{ backgroundColor: course.bgColor }}
                  >
                    <div className="flex-1 z-10">
                      <p
                        className="uppercase tracking-wider mb-0 opacity-70 text-[13px]"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {course.label}
                      </p>
                      <h3
                        className="text-[28px] leading-tight mt-[2px] mb-3"
                        style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        {course.title}
                      </h3>
                      <button
                        className="flex items-center justify-center px-[20px] py-[8px] rounded-full text-[14px] gap-1.5 text-white"
                        style={{ backgroundColor: course.buttonColor, fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        <span className="leading-none relative top-[1px]">{t.start}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className={`absolute -top-[10px] ${course.id === 'hangul' ? 'right-[34px] -top-[142px] w-[246px] h-[282px]' : course.id === 'puzzle' ? 'right-[14px] -top-[50px] w-[168px] h-[192px]' : course.id === 'story' ? 'right-[14px] -top-[33px] w-[153px] h-[175px]' : 'right-[14px] w-[140px] h-[160px]'}`}>
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
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative w-[60px] h-[68px] xs:w-[80px] xs:h-[90px] sm:w-[108px] sm:h-[120px]">
                <Image
                  src="/images/main/illustration6.png"
                  alt="KEI character"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p
                className="text-[#4B5563] text-[9px] xs:text-[10px] sm:text-[11px] mt-1 whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {t.hiImKei}
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
