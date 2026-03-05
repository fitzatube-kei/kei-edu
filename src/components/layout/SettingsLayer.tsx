'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import AvatarChangeLayer from './AvatarChangeLayer';

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
            <div className="sticky top-0 bg-[#440687] text-white px-4 py-4 flex items-center gap-3">
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
                     language === 'zh' ? '退出登录' :
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
