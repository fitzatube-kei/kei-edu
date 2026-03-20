'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';

// Translations
const translations: Record<string, {
  subtitle: string;
  title1: string;
  title2: string;
  startFree: string;
  signUp: string;
  chooseLanguage: string;
}> = {
  en: {
    subtitle: 'Korean Education International',
    title1: 'Learn Korean!',
    title2: 'The Fun Way',
    startFree: 'Start Free',
    signUp: 'Sign Up',
    chooseLanguage: 'Choose your language',
  },
  es: {
    subtitle: 'Educación Coreana Internacional',
    title1: '¡Aprende Coreano!',
    title2: 'De Forma Divertida',
    startFree: 'Empezar Gratis',
    signUp: 'Registrarse',
    chooseLanguage: 'Elige tu idioma',
  },
  vi: {
    subtitle: 'Giáo Dục Hàn Quốc Quốc Tế',
    title1: 'Học Tiếng Hàn!',
    title2: 'Theo Cách Thú Vị',
    startFree: 'Bắt Đầu Miễn Phí',
    signUp: 'Đăng Ký',
    chooseLanguage: 'Chọn ngôn ngữ của bạn',
  },
  th: {
    subtitle: 'การศึกษาเกาหลีนานาชาติ',
    title1: 'เรียนภาษาเกาหลี!',
    title2: 'อย่างสนุกสนาน',
    startFree: 'เริ่มฟรี',
    signUp: 'สมัครสมาชิก',
    chooseLanguage: 'เลือกภาษาของคุณ',
  },
  ja: {
    subtitle: '韓国教育インターナショナル',
    title1: '韓国語を学ぼう！',
    title2: '楽しく学べる',
    startFree: '無料で始める',
    signUp: '新規登録',
    chooseLanguage: '言語を選択',
  },
  zh: {
    subtitle: '韩国教育国际',
    title1: '学习韩语！',
    title2: '有趣的方式',
    startFree: '免费开始',
    signUp: '注册',
    chooseLanguage: '选择你的语言',
  },
  'zh-TW': {
    subtitle: '韓國教育國際',
    title1: '學習韓語！',
    title2: '有趣的方式',
    startFree: '免費開始',
    signUp: '註冊',
    chooseLanguage: '選擇你的語言',
  },
};

// Language data
const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', nativeName: 'Spanish', flag: '🇪🇸' },
  { code: 'vi', name: 'Tiếng Việt', nativeName: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th', name: 'ภาษาไทย', nativeName: 'Thai', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', nativeName: 'Japanese', flag: '🇯🇵' },
  { code: 'zh', name: '中文', nativeName: 'Chinese', flag: '🇨🇳' },
];

export default function IntroPage() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const { user, loading } = useAuth();

  // Redirect logged-in users to main page
  useEffect(() => {
    if (!loading && user) {
      router.replace('/main');
    }
  }, [user, loading, router]);

  const t = translations[language] || translations.en;

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#440687] flex items-center justify-center">
        <div className="text-center">
          <Image
            src="/images/main/kbi01.png"
            alt="KBI Logo"
            width={60}
            height={60}
            className="object-contain mx-auto mb-4"
            unoptimized
          />
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    );
  }

  // Don't render intro page if user is logged in (will redirect)
  if (user) {
    return (
      <div className="min-h-screen bg-[#440687] flex items-center justify-center">
        <div className="text-center">
          <Image
            src="/images/main/kbi01.png"
            alt="KBI Logo"
            width={60}
            height={60}
            className="object-contain mx-auto mb-4"
            unoptimized
          />
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    );
  }

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'en' | 'es' | 'th' | 'ja' | 'vi' | 'zh');
  };

  const handleStartFree = () => {
    router.push('/main');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">
      {/* Purple header */}
      <div className="bg-[#440687] pt-[max(env(safe-area-inset-top),24px)] pb-2 px-6 flex flex-col items-center shrink-0">
        <div className="flex items-center gap-3">
          <Image
            src="/images/main/kbi01.png"
            alt="KBI Logo"
            width={40}
            height={40}
            className="object-contain w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            unoptimized
          />
          <Image
            src="/images/main/KEI-EDU01.png"
            alt="KEI-EDU"
            width={140}
            height={36}
            className="object-contain w-[100px] sm:w-[140px]"
            unoptimized
          />
        </div>
        <p
          className="text-white/80 text-[13px] sm:text-[18px] lg:text-[22px] mt-0.5 text-center"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-2 sm:py-4 overflow-hidden">
        <div className="flex flex-col landscape:flex-row items-center justify-center gap-[1.5vh] landscape:gap-[6vw] w-full max-w-5xl">

          {/* Left: Character (landscape only, hidden in portrait) */}
          <div className="hidden landscape:flex items-center justify-center shrink-0">
            <div className="relative aspect-square flex items-center justify-center" style={{ width: 'clamp(180px, 40vh, 340px)' }}>
              <div className="absolute w-[88%] h-[88%] bg-[#CEECFE] rounded-full" />
              <Image
                src="/images/main/king.png?v=2"
                alt="Korean King Character"
                fill
                className="object-contain z-10"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Center/Right: Title + Character(portrait) + Buttons + Language */}
          <div className="flex flex-col items-center landscape:items-start">
            {/* Title */}
            <h1
              className="text-[#1F2937] text-center landscape:text-left leading-tight mb-[1vh] sm:mb-[1.5vh]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(24px, 5vh, 48px)' }}
            >
              {t.title1}<br />{t.title2}
            </h1>

            {/* Character illustration — portrait only */}
            <div className="landscape:hidden relative aspect-square mb-[1vh] sm:mb-[1.5vh] flex items-center justify-center" style={{ width: 'clamp(100px, 25vh, 280px)' }}>
              <div className="absolute w-[88%] h-[88%] bg-[#CEECFE] rounded-full" />
              <Image
                src="/images/main/king.png?v=2"
                alt="Korean King Character"
                fill
                className="object-contain z-10"
                unoptimized
                priority
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-[1.5vh] sm:mb-[2.5vh]">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleStartFree}
                className="bg-[#440687] text-white rounded-xl shadow-sm hover:bg-[#350568] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(14px, 2.5vh, 22px)', padding: 'clamp(6px, 1.2vh, 12px) clamp(18px, 3vw, 32px)' }}
              >
                {t.startFree}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSignUp}
                className="bg-[#77B602] text-white rounded-xl shadow-sm hover:bg-[#669a02] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(14px, 2.5vh, 22px)', padding: 'clamp(6px, 1.2vh, 12px) clamp(18px, 3vw, 32px)' }}
              >
                {t.signUp}
              </motion.button>
            </div>

            {/* Language selection */}
            <div>
              <h2
                className="text-[#1F2937] text-center landscape:text-left mb-[0.8vh] sm:mb-[1.5vh]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(14px, 2.5vh, 24px)' }}
              >
                {t.chooseLanguage}
              </h2>

              {/* Language grid — 2 cols mobile, 3 cols landscape */}
              <div className="grid grid-cols-2 landscape:grid-cols-3 w-fit mx-auto landscape:mx-0" style={{ columnGap: 'clamp(24px, 3vw, 48px)', rowGap: 'clamp(6px, 1.2vh, 16px)' }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className="flex items-center gap-2 group"
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 'clamp(20px, 3.5vh, 32px)' }}>{lang.flag}</span>
                      <div className="text-left">
                        <div
                          className={`leading-tight ${
                            language === lang.code ? 'text-[#5B4CDB]' : 'text-[#1F2937]'
                          }`}
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 'clamp(13px, 2vh, 18px)' }}
                        >
                          {lang.name}
                        </div>
                        <div
                          className="text-[#9CA3AF]"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 'clamp(10px, 1.4vh, 14px)' }}
                        >
                          {lang.nativeName}
                        </div>
                      </div>
                    </div>

                    {/* Check circle */}
                    <div
                      className="rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                      style={{ width: 'clamp(14px, 2.2vh, 22px)', height: 'clamp(14px, 2.2vh, 22px)', border: language === lang.code ? 'none' : '2px solid #E5E7EB', backgroundColor: language === lang.code ? '#5B4CDB' : 'transparent' }}
                    >
                      {language === lang.code && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
