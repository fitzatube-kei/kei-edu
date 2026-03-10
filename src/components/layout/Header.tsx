'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import SettingsLayer from './SettingsLayer';
import AvatarChangeLayer from './AvatarChangeLayer';
import CurrencyBadge from '@/components/ui/CurrencyBadge';

const DEFAULT_AVATAR = '/images/avatar/avt001.png';
const GUEST_AVATAR = '/images/main/avt_none001.png'; // Default guest avatar (logged out)

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', nativeName: 'Spanish', flag: '🇪🇸' },
  { code: 'vi', name: 'Tiếng Việt', nativeName: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th', name: 'ภาษาไทย', nativeName: 'Thai', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', nativeName: 'Japanese', flag: '🇯🇵' },
  { code: 'zh', name: '中文(简体)', nativeName: 'Chinese (Simplified)', flag: '🇨🇳' },
  { code: 'zh-TW', name: '中文(繁體)', nativeName: 'Chinese (Traditional)', flag: '🇹🇼' },
];

const headerTranslations: Record<string, {
  hi: string;
  guest: string;
  letsStartLearning: string;
}> = {
  en: {
    hi: 'Hi',
    guest: 'Guest',
    letsStartLearning: "Let's start learning",
  },
  es: {
    hi: 'Hola',
    guest: 'Invitado',
    letsStartLearning: 'Empecemos a aprender',
  },
  ja: {
    hi: 'こんにちは',
    guest: 'ゲスト',
    letsStartLearning: '学習を始めましょう',
  },
  zh: {
    hi: '你好',
    guest: '访客',
    letsStartLearning: '开始学习吧',
  },
  vi: {
    hi: 'Xin chào',
    guest: 'Khách',
    letsStartLearning: 'Hãy bắt đầu học',
  },
  th: {
    hi: 'สวัสดี',
    guest: 'ผู้เยี่ยมชม',
    letsStartLearning: 'มาเริ่มเรียนกันเถอะ',
  },
  'zh-TW': {
    hi: '你好',
    guest: '訪客',
    letsStartLearning: '開始學習吧',
  },
};

export default function Header() {
  const { user } = useAuth();
  const { language, setLanguage } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [userAvatar, setUserAvatar] = useState(DEFAULT_AVATAR);
  const [showSettings, setShowSettings] = useState(false);
  const [showAvatarChange, setShowAvatarChange] = useState(false);

  // Load user's selected avatar from localStorage (only when logged in)
  useEffect(() => {
    if (user) {
      const savedAvatar = localStorage.getItem('userAvatar');
      if (savedAvatar) {
        setUserAvatar(savedAvatar);
      } else {
        setUserAvatar(DEFAULT_AVATAR);
      }
    } else {
      setUserAvatar(GUEST_AVATAR);
    }

    // Listen for avatar changes from MyPage
    const handleAvatarChange = (e: CustomEvent) => {
      if (user) {
        setUserAvatar(e.detail);
      }
    };
    window.addEventListener('avatarChanged', handleAvatarChange as EventListener);
    return () => {
      window.removeEventListener('avatarChanged', handleAvatarChange as EventListener);
    };
  }, [user]);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];
  const t = headerTranslations[language] || headerTranslations.en;

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'en' | 'es' | 'th' | 'ja' | 'vi' | 'zh');
    setShowLanguageDropdown(false);
  };

  return (
    <>
      <header className="bg-[#440687] px-2 sm:px-6 pt-[8px] sm:pt-2 pb-[6px] relative z-50">
        <div className="max-w-4xl mx-auto">
          {/* Single Row: Logo + Language + Avatar + Settings */}
          <div className="flex items-center justify-between gap-1">
            {/* Left: Logo + Language — shrinks on narrow screens */}
            <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink">
              <Link href="/main" className="flex items-center gap-1 sm:gap-1.5 relative z-10 shrink min-w-0">
                <Image
                  src="/images/main/kbi01.png"
                  alt="KEI Brand"
                  width={30}
                  height={36}
                  className="object-contain w-[24px] h-[29px] sm:w-[30px] sm:h-[36px] shrink-0"
                  unoptimized
                />
                <Image
                  src="/images/main/KEI-EDU01.png"
                  alt="KEI-EDU"
                  width={120}
                  height={36}
                  className="object-contain w-[80px] xs:w-[100px] sm:w-[120px] shrink min-w-0"
                  unoptimized
                />
              </Link>

              {/* Language Dropdown */}
              <div className="relative ml-0.5 sm:ml-2 shrink-0">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center gap-0.5 sm:gap-1.5 text-white"
                >
                  <span className="text-[26px] sm:text-[36px]">{currentLanguage.flag}</span>
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showLanguageDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[140px] z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-50 ${
                          language === lang.code ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right: Currency + Avatar + Settings — fixed sizes, never shrink */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <CurrencyBadge />
              <button
                onClick={() => setShowAvatarChange(true)}
                className="shrink-0 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={userAvatar}
                  alt="Profile"
                  width={36}
                  height={40}
                  className="object-contain w-[30px] h-[33px] sm:w-[36px] sm:h-[40px]"
                  unoptimized
                />
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown overlay */}
      {showLanguageDropdown && (
        <div className="fixed inset-0 z-40" onClick={() => setShowLanguageDropdown(false)} />
      )}

      {/* Settings Layer */}
      <SettingsLayer
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      {/* Avatar Change Layer */}
      <AvatarChangeLayer
        isOpen={showAvatarChange}
        onClose={() => setShowAvatarChange(false)}
        currentAvatar={userAvatar}
        onAvatarChange={setUserAvatar}
      />
    </>
  );
}
