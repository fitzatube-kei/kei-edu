'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import AuthForm from '@/components/auth/AuthForm';
import { useLanguage } from '@/context/LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function LoginPage() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#440687] h-[120px] px-4 flex justify-between items-center">
        <Link href="/main" className="flex items-center gap-1.5">
          <Image
            src="/images/main/kbi01.png"
            alt="KEI Brand"
            width={30}
            height={36}
            className="object-contain"
            unoptimized
          />
          <Image
            src="/images/main/KEI-EDU01.png"
            alt="KEI-EDU"
            width={120}
            height={36}
            className="object-contain"
            unoptimized
          />
        </Link>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-1.5 text-white"
          >
            <span className="text-[36px]">{currentLanguage.flag}</span>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showLanguageDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[140px] z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as 'en' | 'es' | 'th' | 'ja' | 'vi' | 'zh');
                    setShowLanguageDropdown(false);
                  }}
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
      </header>

      {/* Language dropdown overlay */}
      {showLanguageDropdown && (
        <div className="fixed inset-0 z-40" onClick={() => setShowLanguageDropdown(false)} />
      )}

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-gray-700 text-[14px] px-4 mt-[20px]"
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthForm mode="login" />
      </main>
    </div>
  );
}
