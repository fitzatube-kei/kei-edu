'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { UserProgress } from '@/types';
import AvatarChangeLayer from './AvatarChangeLayer';

// Total levels per module (based on data files)
const TOTAL_HANGUL = 20; // beginner levels
const TOTAL_PUZZLE = 300; // 100 per tier
const TOTAL_GRAMMAR = 30; // grammar lessons
const TOTAL_CULTURE = 50; // culture quiz levels
const TOTAL_STORY = 60; // story episodes across 15 seasons

const MODULE_CONFIG = [
  { key: 'hangulProgress' as const, label: 'Hangul', icon: '/images/mypage/icon_hangul_1.png', color: '#B4D700', total: TOTAL_HANGUL, completedKey: 'completed' },
  { key: 'puzzleProgress' as const, label: 'Words', icon: '/images/mypage/icon_words_1.png', color: '#38B6FF', total: TOTAL_PUZZLE, completedKey: 'completed' },
  { key: 'grammarProgress' as const, label: 'Sentences', icon: '/images/mypage/icon_sen_1.png', color: '#C9A0DC', total: TOTAL_GRAMMAR, completedKey: 'completed' },
  { key: 'cultureProgress' as const, label: 'Quiz', icon: '/images/mypage/icon_quiz_1.png', color: '#F5A623', total: TOTAL_CULTURE, completedKey: 'completed' },
  { key: 'storyProgress' as const, label: 'Story', icon: '/images/mypage/icon_story_1.png', color: '#FF7E7E', total: TOTAL_STORY, completedKey: 'completed' },
];

function getCompletedCount(arr: { completed?: boolean }[] | undefined): number {
  if (!arr || !Array.isArray(arr)) return 0;
  return arr.filter(item => item.completed).length;
}

function LearningProgressCard({ progress }: { progress: UserProgress }) {
  const moduleStats = MODULE_CONFIG.map(mod => {
    const arr = progress[mod.key] as { completed?: boolean }[];
    const completed = getCompletedCount(arr);
    const total = Math.max(mod.total, arr?.length || 0);
    return { ...mod, completed, total };
  });

  const totalCompleted = moduleStats.reduce((sum, m) => sum + m.completed, 0);
  const totalAll = moduleStats.reduce((sum, m) => sum + m.total, 0);
  const overallPercent = totalAll > 0 ? Math.round((totalCompleted / totalAll) * 100) : 0;

  // Circular progress SVG params
  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (overallPercent / 100) * circumference;

  return (
    <div className="bg-gradient-to-br from-[#F8F0FF] to-[#E8F5E9] rounded-xl p-4">
      {/* Overall circular progress */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-[72px] h-[72px]">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32" cy="32" r={circleRadius}
              fill="none" stroke="#e5e7eb" strokeWidth="6"
            />
            <motion.circle
              cx="32" cy="32" r={circleRadius}
              fill="none" stroke="#440687" strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {overallPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Module progress bars */}
      <div className="space-y-2.5">
        {moduleStats.map((mod) => {
          const percent = mod.total > 0 ? (mod.completed / mod.total) * 100 : 0;
          return (
            <div key={mod.key} className="flex items-center gap-2">
              <Image src={mod.icon} alt={mod.label} width={20} height={20} className="w-5 h-5 flex-shrink-0 object-contain" unoptimized />
              <span
                className="text-xs font-semibold text-gray-700 w-[68px] flex-shrink-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {mod.label}
              </span>
              <div className="flex-1 h-2 bg-white/60 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: mod.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
              <span
                className="text-xs text-gray-500 w-10 text-right flex-shrink-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {mod.completed}/{mod.total}
              </span>
            </div>
          );
        })}
      </div>

      {/* Score & streak */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-white/40">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">🔥</span>
          <span
            className="text-xs font-semibold text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {progress.streakDays || 0} days
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm">🏆</span>
          <span
            className="text-xs font-semibold text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {(progress.totalScore || 0).toLocaleString()} pts
          </span>
        </div>
      </div>
    </div>
  );
}

interface SettingsLayerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsLayer({ isOpen, onClose }: SettingsLayerProps) {
  const { t, language } = useLanguage();
  const { user, signOut } = useAuth();
  const { progress } = useProgress();
  const DEFAULT_AVATAR = '/images/avatar/avt001.png';
  const GUEST_AVATAR = '/images/main/avt_none001.png';
  const [userAvatar, setUserAvatar] = useState(DEFAULT_AVATAR);
  const [showAvatarChange, setShowAvatarChange] = useState(false);

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

  const isPremium = progress.isPremium;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Settings Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#440687] text-white px-4 py-4 flex items-center gap-3 z-10">
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h1
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t('settings.title')}
              </h1>
            </div>

            <div className="p-4 space-y-6">
              {/* My Info Section */}
              <section>
                <h2
                  className="text-sm font-bold text-[#440687] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {t('settings.myInfo')}
                </h2>
                <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                  {/* Avatar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#440687] to-[#6B21A8] flex items-center justify-center overflow-hidden relative">
                        <Image
                          src={userAvatar}
                          alt="Avatar"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-gray-700 font-medium">{t('settings.changeAvatar')}</span>
                    </div>
                    {user && (
                      <button
                        onClick={() => setShowAvatarChange(true)}
                        className="text-[#440687] text-sm font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Logged out - Sign Up / Login buttons */}
                  {!user && (
                    <div className="flex gap-3 border-t pt-4">
                      <Link
                        href="/signup"
                        onClick={onClose}
                        className="flex-1 py-2.5 bg-[#440687] text-white rounded-lg text-center font-bold text-sm"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Sign Up
                      </Link>
                      <Link
                        href="/login"
                        onClick={onClose}
                        className="flex-1 py-2.5 bg-[#B4D700] text-[#440687] rounded-lg text-center font-bold text-sm"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Log In
                      </Link>
                    </div>
                  )}

                  {/* Email - only show when logged in */}
                  {user && (
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <span className="text-gray-500 text-sm">Email</span>
                        <p className="text-gray-800 font-medium">{user.email}</p>
                      </div>
                    </div>
                  )}

                  {/* Membership Status - only show when logged in */}
                  {user && (
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="text-gray-700 font-medium">{t('settings.membershipStatus')}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          isPremium
                            ? 'bg-[#FF7E00] text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {isPremium ? 'Premium' : 'Basic'}
                      </span>
                    </div>
                  )}
                </div>
              </section>

              {/* Learning Progress Section */}
              <section>
                <h2
                  className="text-sm font-bold text-[#440687] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Learning Progress
                </h2>
                <LearningProgressCard progress={progress} />
              </section>

              {/* Premium Section */}
              <section>
                <h2
                  className="text-sm font-bold text-[#440687] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {t('settings.appPurchase')}
                </h2>
                <div className="bg-gradient-to-r from-[#440687] to-[#6B21A8] rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">👑</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {isPremium ? 'Premium Member' : 'Upgrade to Premium'}
                      </h3>
                      <p className="text-white text-sm">{t('settings.premiumBenefits')}</p>
                    </div>
                  </div>
                  {!isPremium && (
                    <Link
                      href="/premium"
                      className="block w-full py-2 bg-[#B4D700] text-[#440687] rounded-lg text-center font-bold text-sm"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {t('premium.subscribe')}
                    </Link>
                  )}
                </div>
              </section>

              {/* App Info Section */}
              <section>
                <h2
                  className="text-sm font-bold text-[#440687] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {t('settings.appInfo')}
                </h2>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <Link
                    href="/about"
                    className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700">{t('settings.appIntro')}</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/privacy"
                    className="flex items-center justify-between p-4 border-t hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700">{t('settings.privacyPolicy')}</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center justify-between p-4 border-t hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700">{t('settings.termsOfService')}</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* Customer Service Section */}
              <section>
                <h2
                  className="text-sm font-bold text-[#440687] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {t('settings.customerService')}
                </h2>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <a
                    href="mailto:keiedu.official@gmail.com"
                    className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#440687]/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-700">{t('settings.contactEmail')}</span>
                        <p className="text-sm text-gray-500">keiedu.official@gmail.com</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    href="/faq"
                    className="flex items-center justify-between p-4 border-t hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#440687]/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">FAQ</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* Logout Button - only show when logged in */}
              {user && (
                <section className="pt-2">
                  <button
                    onClick={async () => {
                      await signOut();
                      onClose();
                    }}
                    className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {language === 'ja' ? 'ログアウト' :
                     language.startsWith('zh') ? '退出登录' :
                     language === 'th' ? 'ออกจากระบบ' :
                     language === 'vi' ? 'Đăng xuất' :
                     language === 'es' ? 'Cerrar sesión' :
                     'Log Out'}
                  </button>
                </section>
              )}

              {/* Version */}
              <div className="text-center text-gray-400 text-sm pb-8">
                Version 1.0.0
              </div>
            </div>
          </motion.div>

          {/* Avatar Change Layer */}
          <AvatarChangeLayer
            isOpen={showAvatarChange}
            onClose={() => setShowAvatarChange(false)}
            currentAvatar={userAvatar}
            onAvatarChange={setUserAvatar}
          />
        </>
      )}
    </AnimatePresence>
  );
}
