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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Purple header */}
      <div className="bg-[#440687] pt-12 pb-4 px-6 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/main/kbi01.png"
            alt="KBI Logo"
            width={40}
            height={40}
            className="object-contain"
            unoptimized
          />
          <Image
            src="/images/main/KEI-EDU01.png"
            alt="KEI-EDU"
            width={140}
            height={36}
            className="object-contain"
            unoptimized
          />
        </div>
        <p
          className="text-white/80 text-[22px] mt-1 text-center"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-6">
        {/* Title */}
        <h1
          className="text-[#1F2937] text-[36px] sm:text-[42px] text-center leading-tight mb-[3vh]"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
        >
          {t.title1}<br />{t.title2}
        </h1>

        {/* Character illustration */}
        <div className="relative w-[40vw] max-w-[312px] aspect-square sm:w-[360px] mb-[2vh] flex items-center justify-center">
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
        <div className="flex gap-3 mb-[3vh]">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleStartFree}
            className="bg-[#440687] text-white px-6 py-[9px] rounded-xl text-[21px] shadow-sm hover:bg-[#350568] transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t.startFree}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSignUp}
            className="bg-[#77B602] text-white px-6 py-[9px] rounded-xl text-[21px] shadow-sm hover:bg-[#669a02] transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t.signUp}
          </motion.button>
        </div>

        {/* Language selection */}
        <div className="w-full max-w-sm">
          <h2
            className="text-[#1F2937] text-[22px] mb-4 text-center"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t.chooseLanguage}
          </h2>

          {/* Language grid */}
          <div className="grid grid-cols-2 gap-x-[40px] gap-y-3 w-fit mx-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className="flex items-center gap-2 group"
              >
                <div className="flex items-center gap-2.5 min-w-[90px]">
                  <span className="text-[20px]">{lang.flag}</span>
                  <div className="text-left">
                    <div
                      className={`text-[14px] leading-tight ${
                        language === lang.code ? 'text-[#5B4CDB]' : 'text-[#1F2937]'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {lang.name}
                    </div>
                    <div
                      className="text-[#9CA3AF] text-[11px]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      {lang.nativeName}
                    </div>
                  </div>
                </div>

                {/* Check circle */}
                <div
                  className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    language === lang.code
                      ? 'bg-[#5B4CDB]'
                      : 'border-[2px] border-[#E5E7EB] group-hover:border-[#D1D5DB]'
                  }`}
                >
                  {language === lang.code && (
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}
