'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import { useProgress } from '@/hooks/useProgress';
import { useLanguage } from '@/context/LanguageContext';
import { useDevMode } from '@/context/DevModeContext';
import { getLevelsByTier, TIER_COLORS, LEVELS_PER_TIER, TOTAL_LEVELS } from '@/data/hangul';
import { LearningTier } from '@/types';

type TierTab = LearningTier;

export default function HangulPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, isLevelUnlocked, getLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();
  const [activeTier, setActiveTier] = useState<TierTab>('beginner');

  const handleLevelClick = (level: number, isPremium: boolean) => {
    if (isPremium && !progress.isPremium && !unlockPro) {
      alert(t('level.premiumRequired'));
      return;
    }
    router.push(`/hangul/${level}`);
  };

  // Get tier-specific stats
  const getTierStats = (tier: TierTab) => {
    const tierLevels = getLevelsByTier(tier);
    const completed = tierLevels.filter(level => {
      const levelProgress = getLevelProgress('hangul', level.level);
      return levelProgress?.completed;
    }).length;
    const stars = tierLevels.reduce((sum, level) => {
      const levelProgress = getLevelProgress('hangul', level.level);
      return sum + (levelProgress?.stars || 0);
    }, 0);
    return { completed, stars, total: LEVELS_PER_TIER };
  };

  // Get tier name in current language
  const getTierName = (tier: TierTab): string => {
    const names: Record<TierTab, Record<string, string>> = {
      beginner: { en: 'Beginner', ja: '初級', zh: '初级', 'zh-TW': '初級', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Principiante' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', 'zh-TW': '中級', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', 'zh-TW': '進階', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado' },
    };
    return names[tier][language] || names[tier].en;
  };

  // Check if tier is unlocked
  const isTierUnlocked = (tier: TierTab): boolean => {
    if (unlockAllLevels) return true;
    if (tier === 'beginner') return true;
    if (tier === 'intermediate') {
      const level15Progress = getLevelProgress('hangul', 15);
      return level15Progress?.completed || false;
    }
    if (tier === 'advanced') {
      if (unlockPro) return true;
      const level35Progress = getLevelProgress('hangul', 35);
      return (level35Progress?.completed && progress.isPremium) || false;
    }
    return false;
  };

  const currentTierLevels = getLevelsByTier(activeTier);
  const totalCompleted = progress.hangulProgress.filter(p => p.completed).length;
  const totalStars = progress.hangulProgress.reduce((sum, p) => sum + p.stars, 0);

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      {/* Header */}
      <Header />

      <main className="px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 pt-6 pb-0 -mt-[60px]"
          >
            {/* Character Image */}
            <div className="relative w-[187px] h-[187px] sm:w-[234px] sm:h-[234px] shrink-0 ml-[5px]">
              <Image
                src="/images/hangul/crt001.png"
                alt="Hangul Character"
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
                LEARN THE BASICS
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Hangul Learning
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                Learn step by step from consonants to words
              </p>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[16px] p-5 mb-6 -mt-[18px] shadow-lg border-l-4 border-l-[#B4D700]"
          >
            <p
              className="text-[#B4D700] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              YOUR PROGRESS
            </p>
            <h2
              className="text-[24px] text-[#1F2937] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Overall Stats
            </h2>

            <div className="flex items-center justify-around">
              {/* Levels */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[28px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalCompleted}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    / {TOTAL_LEVELS} Levels
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-[#D8B4FE]" />

              {/* Stars */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[28px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalStars}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    / {TOTAL_LEVELS * 3} Stars
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Level Selection Header */}
          <div className="mb-4">
            <p
              className="text-[#440687] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              SELECT DIFFICULTY
            </p>
            <h2
              className="text-[20px] text-[#1F2937]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Choose Your Level
            </h2>
          </div>

          {/* Tier Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex gap-2 mb-6"
          >
            {(['beginner', 'intermediate', 'advanced'] as TierTab[]).map((tier) => {
              const stats = getTierStats(tier);
              const isActive = activeTier === tier;
              const unlocked = isTierUnlocked(tier);
              const isPremiumLocked = tier === 'advanced' && !progress.isPremium && !unlockPro;

              return (
                <button
                  key={tier}
                  onClick={() => unlocked && setActiveTier(tier)}
                  disabled={!unlocked}
                  className={`flex-1 py-3 px-2 rounded-full text-center transition-all ${
                    isActive
                      ? 'bg-[#440687] text-white'
                      : unlocked
                      ? 'bg-[#9038EF] text-white'
                      : 'bg-gray-300 text-white cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <p className="text-[16px] sm:text-[17px] text-white font-bold">{getTierName(tier)}</p>
                  <div className="flex items-center justify-center gap-1 text-[13px] sm:text-[14px] text-white">
                    {!unlocked || isPremiumLocked ? (
                      <svg className="w-4 h-4 text-[#B4D700]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#B4D700]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                    <span className="font-semibold text-white">{stats.stars}/{stats.total * 3}</span>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Level Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-4 gap-3 mb-6"
          >
            {currentTierLevels.map((level, index) => {
              const levelProgress = getLevelProgress('hangul', level.level);
              const unlocked = isLevelUnlocked('hangul', level.level) || unlockAllLevels;
              const isPremiumLocked = level.isPremium && !progress.isPremium && !unlockPro;
              const isCompleted = levelProgress?.completed;
              const isFirstUnlocked = unlocked && !isCompleted && index === 0;

              return (
                <motion.button
                  key={level.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.015 }}
                  whileHover={unlocked && !isPremiumLocked ? { scale: 1.05 } : {}}
                  whileTap={unlocked && !isPremiumLocked ? { scale: 0.95 } : {}}
                  onClick={() => handleLevelClick(level.level, level.isPremium)}
                  disabled={!unlocked || isPremiumLocked}
                  className={`aspect-square rounded-[16px] flex flex-col items-center justify-center relative transition-all shadow-md ${
                    isFirstUnlocked
                      ? 'bg-white border-l-4 border-l-[#B4D700]'
                      : isCompleted
                      ? 'bg-[#F6FFC7]'
                      : 'bg-white'
                  } ${(!unlocked || isPremiumLocked) ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  {/* Level number */}
                  <p
                    className={`text-[28px] sm:text-[32px] ${
                      isCompleted ? 'text-[#440687]' : isFirstUnlocked ? 'text-[#B4D700]' : 'text-[#1F2937]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {level.level}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          (levelProgress?.stars || 0) >= star ? 'text-[#B4D700]' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Lock overlay */}
                  {(!unlocked || isPremiumLocked) && (
                    <div className="absolute inset-0 bg-white/70 rounded-[16px] flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Premium info for Advanced tier */}
          {(activeTier === 'advanced' && !progress.isPremium && !unlockPro) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#440687] rounded-[16px] p-5 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B4D700] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p
                    className="text-white/70 text-[11px] uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    UPGRADE NOW
                  </p>
                  <h3
                    className="text-[18px] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Unlock Premium
                  </h3>
                  <p
                    className="text-white/80 text-[13px] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    Advanced levels (41-60) require Premium membership.
                  </p>
                  <button
                    className="bg-[#B4D700] text-[#440687] px-4 py-2 rounded-full text-[13px]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
