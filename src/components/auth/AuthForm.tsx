'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';

// All available avatars for random selection
const allAvatars = [
  '/images/avatar/avt001.png',
  '/images/avatar/avt002.png',
  '/images/avatar/avt003.png',
  '/images/avatar/avt004.png',
  '/images/avatar/avt005.png',
  '/images/avatar/avt006.png',
  '/images/avatar/avt007.png',
  '/images/avatar/avt008.png',
  '/images/avatar/avt009.png',
  '/images/avatar/avt010.png',
  '/images/avatar/avt011.png',
  '/images/avatar/avt012.png',
  '/images/avatar/avt001m.png',
  '/images/avatar/avt002m.png',
  '/images/avatar/avt003m.png',
  '/images/avatar/avt004m.png',
  '/images/avatar/avt005m.png',
  '/images/avatar/avt006m.png',
  '/images/avatar/avt007m.png',
  '/images/avatar/avt008m.png',
  '/images/avatar/avt009m.png',
  '/images/avatar/avt010m.png',
  '/images/avatar/avt011m.png',
  '/images/avatar/avt012m.png',
];

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const { signIn, signUp, loading, error } = useAuth();
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const isLogin = mode === 'login';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!isLogin && password !== confirmPassword) {
      setLocalError(t('auth.passwordMismatch'));
      return;
    }

    if (password.length < 6) {
      setLocalError(t('auth.passwordTooShort'));
      return;
    }

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password, displayName);
        // Set random avatar for new user
        const randomAvatar = allAvatars[Math.floor(Math.random() * allAvatars.length)];
        localStorage.setItem('userAvatar', randomAvatar);
        window.dispatchEvent(new CustomEvent('avatarChanged', { detail: randomAvatar }));
      }
      router.push('/main');
    } catch {
      // Error is handled by context
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h2 className="text-[28px] text-center text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
          {isLogin ? t('auth.loginTitle') : t('auth.signupTitle')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.name')}
              </label>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                maxLength={12}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t('auth.email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              placeholder={t('auth.emailPlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              {t('auth.password')}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.confirmPassword')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                placeholder="••••••••"
              />
            </div>
          )}

          {(error || localError) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
            >
              {localError || error}
            </motion.div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            className="!bg-[#440687] !text-white !border-0"
          >
            {isLogin ? t('common.login') : t('common.signup')}
          </Button>
        </form>

        <div className={`mt-6 text-center ${!isLogin ? 'mb-[30px]' : ''}`}>
          <p className="text-gray-600">
            {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
            <Link
              href={isLogin ? '/signup' : '/login'}
              className="ml-2 text-[#4C1D95] hover:text-[#6B21A8] font-medium"
            >
              {isLogin ? t('common.signup') : t('common.login')}
            </Link>
          </p>
        </div>

        {isLogin && (
          <div className="mt-4 mb-[30px] text-center">
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-gray-700"
              onClick={() => {
                // TODO: Implement password reset modal
                alert(t('auth.forgotPassword'));
              }}
            >
              {t('auth.forgotPassword')}
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <Link
          href="/main"
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          {t('landing.browseWithoutLogin')}
        </Link>
      </div>
    </motion.div>
  );
}
