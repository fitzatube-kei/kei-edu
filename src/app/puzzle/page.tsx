'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import HangulTutorial from '@/components/tutorial/HangulTutorial';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { useAccessControl } from '@/hooks/useAccessControl';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import PremiumContentModal from '@/components/ui/PremiumContentModal';
import { puzzleCategories, getCategoryById } from '@/data/puzzle';

type TierTab = 'beginner' | 'intermediate' | 'advanced';

// Constants for levels per tier
const LEVELS_PER_TIER: Record<TierTab, number> = {
  beginner: 15,
  intermediate: 10,
  advanced: 5,
};

export default function PuzzlePage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, getPuzzleLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();
  const { tier, limits } = useAccessControl();
  const [activeTier, setActiveTier] = useState<TierTab>('beginner');
  const [showTutorial, setShowTutorial] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const isPremiumUser = progress.isPremium || unlockPro;

  // Get category name in current language
  const getTierName = (tier: TierTab): string => {
    const names: Record<TierTab, Record<string, string>> = {
      beginner: { en: 'Beginner', ja: '初級', zh: '初级', 'zh-TW': '初級', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Principiante' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', 'zh-TW': '中級', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', 'zh-TW': '進階', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado' },
    };
    return names[tier][language] || names[tier].en;
  };

  // Get tier stats
  const getTierStats = (tier: TierTab) => {
    const category = getCategoryById(tier);
    if (!category) return { completed: 0, stars: 0, total: LEVELS_PER_TIER[tier] };

    const completed = category.levels.filter(level => {
      const levelProgress = getPuzzleLevelProgress(level.id);
      return levelProgress?.completed;
    }).length;

    const stars = category.levels.reduce((sum, level) => {
      const levelProgress = getPuzzleLevelProgress(level.id);
      return sum + (levelProgress?.stars || 0);
    }, 0);

    return { completed, stars, total: category.levels.length };
  };

  // Check if tier is unlocked
  const isTierUnlocked = (tierTab: TierTab): boolean => {
    if (unlockAllLevels) return true;
    if (tierTab === 'beginner') return true;

    const beginnerCategory = getCategoryById('beginner');
    const intermediateCategory = getCategoryById('intermediate');

    if (tierTab === 'intermediate') {
      if (!limits.puzzle.intermediateAllowed) return false;
      const beginnerCompleted = beginnerCategory?.levels.filter(l => getPuzzleLevelProgress(l.id)?.completed).length || 0;
      return beginnerCompleted >= 10;
    }
    if (tierTab === 'advanced') {
      if (!limits.puzzle.advancedAllowed) return false;
      if (unlockPro) return true;
      const intermediateCompleted = intermediateCategory?.levels.filter(l => getPuzzleLevelProgress(l.id)?.completed).length || 0;
      return intermediateCompleted >= (intermediateCategory?.levels.length || 10) && isPremiumUser;
    }
    return false;
  };

  const isTierAccessLocked = (tierTab: TierTab): boolean => {
    if (unlockAllLevels || unlockPro) return false;
    if (tierTab === 'intermediate') return !limits.puzzle.intermediateAllowed;
    if (tierTab === 'advanced') return !limits.puzzle.advancedAllowed;
    return false;
  };

  const handleTierClick = (tierTab: TierTab) => {
    if (isTierAccessLocked(tierTab)) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setShowPremiumModal(true);
      }
      return;
    }
    if (isTierUnlocked(tierTab)) {
      setActiveTier(tierTab);
    }
  };

  // Get current tier's levels
  const currentCategory = getCategoryById(activeTier);
  const currentTierLevels = currentCategory?.levels || [];

  // Get overall stats
  const totalLevels = puzzleCategories.reduce((sum, cat) => sum + cat.levels.length, 0);
  const totalCompleted = puzzleCategories.reduce((sum, cat) =>
    sum + cat.levels.filter(l => getPuzzleLevelProgress(l.id)?.completed).length, 0
  );
  const totalStars = puzzleCategories.reduce((sum, cat) =>
    sum + cat.levels.reduce((s, l) => s + (getPuzzleLevelProgress(l.id)?.stars || 0), 0), 0
  );
  const totalWords = puzzleCategories.reduce((sum, cat) => sum + cat.totalWords, 0);

  const handleLevelClick = (levelId: string, isPremium: boolean, levelIndex: number) => {
    const category = getCategoryById(activeTier);
    if (!category) return;

    // Beginner tier level limit check
    if (activeTier === 'beginner' && !unlockAllLevels && levelIndex >= limits.puzzle.beginnerMaxLevel) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setShowPremiumModal(true);
      }
      return;
    }

    const isLevelFree = levelIndex < category.freeLevels;
    if (isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setShowPremiumModal(true);
      }
      return;
    }
    router.push(`/puzzle/${activeTier}/${levelId}`);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      {/* Header */}
      <Header />

      {/* Tutorial Button - below header on white background */}
      <div className="px-4 sm:px-6 pt-3 relative z-20">
        <div className="max-w-4xl mx-auto flex justify-end">
          <button
            onClick={() => setShowTutorial(true)}
            className="bg-[#9038EF] text-white px-5 py-[6px] rounded-full text-[14px] flex items-center gap-1"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Tutorial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <main className="px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 pt-6 pb-0 -mt-[60px]"
          >
            {/* Character Image */}
            <div className="relative w-[140px] h-[140px] xs:w-[187px] xs:h-[187px] sm:w-[234px] sm:h-[234px] shrink-0 ml-[5px]">
              <Image
                src="/images/word/wb_crt001.png"
                alt="Word Builder Character"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p
                className="text-[#38B6FF] text-[11px] sm:text-[12px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                WORD PUZZLE
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Word Builder
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {language === 'ja' ? 'ジャモを組み合わせて韓国語を作ろう！' :
                 language.startsWith('zh') ? '组合字母构建韩语单词！' :
                 language === 'th' ? 'รวมตัวอักษรเพื่อสร้างคำเกาหลี!' :
                 language === 'vi' ? 'Kết hợp các jamo để tạo từ tiếng Hàn!' :
                 language === 'es' ? '¡Combina jamos para construir palabras!' :
                 'Combine jamos to build Korean words!'}
              </p>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[16px] p-5 mb-6 -mt-[18px] shadow-lg border-l-4 border-l-[#38B6FF]"
          >
            <p
              className="text-[#38B6FF] text-[11px] uppercase tracking-wider mb-1"
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
                <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#38B6FF] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalCompleted}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    / {totalLevels} Levels
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-[#38B6FF]/30" />

              {/* Stars */}
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#38B6FF] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalStars}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    / {totalLevels * 3} Stars
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
            {(['beginner', 'intermediate', 'advanced'] as TierTab[]).map((tierTab) => {
              const stats = getTierStats(tierTab);
              const isActive = activeTier === tierTab;
              const unlocked = isTierUnlocked(tierTab);
              const accessLocked = isTierAccessLocked(tierTab);
              const isPremiumLocked = (tierTab === 'advanced' && !isPremiumUser) || accessLocked;

              return (
                <button
                  key={tierTab}
                  onClick={() => handleTierClick(tierTab)}
                  disabled={!unlocked && !accessLocked}
                  className={`flex-1 py-3 px-2 rounded-full text-center transition-all ${
                    isActive
                      ? 'bg-[#440687] text-white'
                      : unlocked
                      ? 'bg-[#9038EF] text-white'
                      : 'bg-gray-300 text-white cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <p className="text-[16px] sm:text-[17px] text-white font-bold">{getTierName(tierTab)}</p>
                  <div className="flex items-center justify-center gap-1 text-[13px] sm:text-[14px] text-white">
                    {!unlocked || isPremiumLocked ? (
                      <svg className="w-4 h-4 text-[#38B6FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#38B6FF]" fill="currentColor" viewBox="0 0 24 24">
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
            className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 mb-6"
          >
            {currentTierLevels.map((level, index) => {
              const levelProgress = getPuzzleLevelProgress(level.id);
              const isLevelFree = currentCategory ? index < currentCategory.freeLevels : false;
              const isTierLimited = activeTier === 'beginner' && !unlockAllLevels && index >= limits.puzzle.beginnerMaxLevel;
              const isPremiumLocked = (level.isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels) || isTierLimited;
              const isCompleted = levelProgress?.completed;
              const stars = levelProgress?.stars || 0;
              const isFirstUnlocked = !isPremiumLocked && !isCompleted && index === 0;

              return (
                <motion.button
                  key={level.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.015 }}
                  whileHover={!isPremiumLocked ? { scale: 1.05 } : {}}
                  whileTap={!isPremiumLocked ? { scale: 0.95 } : {}}
                  onClick={() => handleLevelClick(level.id, level.isPremium, index)}
                  disabled={isPremiumLocked}
                  className={`aspect-square rounded-[12px] xs:rounded-[16px] flex flex-col items-center justify-center relative transition-all shadow-md ${
                    isFirstUnlocked
                      ? 'bg-white border-l-4 border-l-[#38B6FF]'
                      : isCompleted
                      ? 'bg-[#E0F7FF]'
                      : 'bg-white'
                  } ${isPremiumLocked ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  {/* Level number */}
                  <p
                    className={`text-[24px] xs:text-[28px] sm:text-[32px] ${
                      isCompleted ? 'text-[#440687]' : isFirstUnlocked ? 'text-[#38B6FF]' : 'text-[#1F2937]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {level.levelNumber}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                          stars >= star ? 'text-[#38B6FF]' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Free badge */}
                  {isLevelFree && currentCategory?.isPremium && (
                    <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-[#77B602] text-white text-[8px] font-black rounded">
                      FREE
                    </span>
                  )}

                  {/* Lock overlay */}
                  {isPremiumLocked && (
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
          {(activeTier === 'advanced' && !isPremiumUser) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#440687] rounded-[16px] p-5 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#38B6FF] rounded-full flex items-center justify-center shrink-0">
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
                    Advanced levels require Premium membership.
                  </p>
                  <button
                    className="bg-[#38B6FF] text-white px-4 py-2 rounded-full text-[13px]"
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

      {/* Hangul Tutorial */}
      <HangulTutorial isOpen={showTutorial} onClose={() => setShowTutorial(false)} />

      <Navigation />

      {/* Modals */}
      <LoginRequiredModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <PremiumContentModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} />
    </div>
  );
}
