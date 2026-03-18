'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { useAccessControl } from '@/hooks/useAccessControl';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import PaywallModal from '@/components/ui/PaywallModal';
import { grammarCategories, getGrammarCategoryById } from '@/data/grammar';
import { ContentId } from '@/types/iap';

type TierTab = 'basic' | 'intermediate' | 'advanced';

export default function SentencesPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { progress, getGrammarLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();
  const { tier, limits } = useAccessControl();
  const [activeTier, setActiveTier] = useState<TierTab>('basic');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [paywallContentId, setPaywallContentId] = useState<ContentId | null>(null);

  const isPremiumUser = progress.isPremium || unlockPro;

  const getTierName = (t: TierTab): string => {
    const names: Record<TierTab, Record<string, string>> = {
      basic: { en: 'Basic', ja: '初級', zh: '初级', 'zh-TW': '初級', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Básico' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', 'zh-TW': '中級', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', 'zh-TW': '進階', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado' },
    };
    return names[t][language] || names[t].en;
  };

  const getSubtitle = (): string => {
    const texts: Record<string, string> = {
      en: 'Learn Korean grammar and sentence patterns!',
      ja: '韓国語の文法と文型を学ぼう！',
      zh: '学习韩语语法和句型！',
      'zh-TW': '學習韓語語法和句型！',
      th: 'เรียนรู้ไวยากรณ์และรูปแบบประโยคภาษาเกาหลี!',
      vi: 'Học ngữ pháp và mẫu câu tiếng Hàn!',
      es: '¡Aprende gramática y patrones de oraciones en coreano!',
    };
    return texts[language] || texts.en;
  };

  const getTierStats = (t: TierTab) => {
    const category = getGrammarCategoryById(t);
    if (!category) return { completed: 0, stars: 0, total: 15 };

    const completed = category.lessons.filter(lesson => {
      const lp = getGrammarLevelProgress(lesson.id);
      return lp?.completed;
    }).length;

    const stars = category.lessons.reduce((sum, lesson) => {
      const lp = getGrammarLevelProgress(lesson.id);
      return sum + (lp?.stars || 0);
    }, 0);

    return { completed, stars, total: category.lessons.length };
  };

  const isTierUnlocked = (tierTab: TierTab): boolean => {
    if (unlockAllLevels) return true;
    if (tierTab === 'basic') return true;
    if (tierTab === 'intermediate') {
      return limits.sentences.intermediateAllowed;
    }
    if (tierTab === 'advanced') {
      return limits.sentences.advancedAllowed;
    }
    return false;
  };

  const isTierAccessLocked = (tierTab: TierTab): boolean => {
    if (unlockAllLevels || unlockPro) return false;
    if (tierTab === 'intermediate') return !limits.sentences.intermediateAllowed;
    if (tierTab === 'advanced') return !limits.sentences.advancedAllowed;
    return false;
  };

  const handleTierClick = (tierTab: TierTab) => {
    if (isTierAccessLocked(tierTab)) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        const contentId = tierTab === 'advanced' ? 'sentences_advanced' : 'sentences_intermediate';
        setPaywallContentId(contentId as ContentId);
      }
      return;
    }
    if (isTierUnlocked(tierTab)) {
      setActiveTier(tierTab);
    }
  };

  const currentCategory = getGrammarCategoryById(activeTier);
  const currentLessons = currentCategory?.lessons || [];

  const totalLessons = grammarCategories.reduce((sum, cat) => sum + cat.lessons.length, 0);
  const totalCompleted = grammarCategories.reduce((sum, cat) =>
    sum + cat.lessons.filter(l => getGrammarLevelProgress(l.id)?.completed).length, 0
  );
  const totalStars = grammarCategories.reduce((sum, cat) =>
    sum + cat.lessons.reduce((s, l) => s + (getGrammarLevelProgress(l.id)?.stars || 0), 0), 0
  );

  const handleLevelClick = (lessonId: string, isPremium: boolean, levelIndex: number) => {
    if (activeTier === 'basic' && !unlockAllLevels && levelIndex >= limits.sentences.beginnerMaxLevel) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        setPaywallContentId('sentences_intermediate');
      }
      return;
    }

    const isLevelFree = currentCategory ? levelIndex < currentCategory.freeLessons : false;
    if (isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels) {
      if (tier === 'guest') {
        setShowLoginModal(true);
      } else {
        const contentId = activeTier === 'advanced' ? 'sentences_advanced' : 'sentences_intermediate';
        setPaywallContentId(contentId as ContentId);
      }
      return;
    }
    router.push(`/sentences/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 pt-6 pb-6 -mt-[10px]"
          >
            {/* Character Image */}
            <div className="relative w-[104px] h-[104px] xs:w-[141px] xs:h-[141px] sm:w-[220px] sm:h-[220px] shrink-0 ml-[5px]">
              <Image
                src="/images/sentences/crt_kei01.png"
                alt="Grammar Guide"
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
                GRAMMAR & SENTENCES
              </p>
              <h1
                className="text-[18px] xs:text-[22px] sm:text-[28px] text-[#1F2937] mb-1 whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Korean Sentences
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {getSubtitle()}
              </p>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative z-10 bg-white rounded-[16px] p-3 sm:p-5 mb-4 sm:mb-6 -mt-[20px] shadow-lg border-l-4 border-l-[#B4D700]"
          >
            <p
              className="text-[#B4D700] text-[11px] uppercase tracking-wider mb-0.5 sm:mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              YOUR PROGRESS
            </p>
            <h2
              className="text-[20px] sm:text-[24px] text-[#1F2937] mb-2 sm:mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Overall Stats
            </h2>

            <div className="flex items-center justify-around">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[30px] h-[30px] xs:w-[36px] xs:h-[36px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[20px] xs:text-[24px] sm:text-[32px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    {totalCompleted}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                    / {totalLessons} Lessons
                  </p>
                </div>
              </div>

              <div className="w-px h-10 sm:h-14 bg-[#D8B4FE]" />

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-[30px] h-[30px] xs:w-[36px] xs:h-[36px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[20px] xs:text-[24px] sm:text-[32px] text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    {totalStars}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                    / {totalLessons * 3} Stars
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
            {(['basic', 'intermediate', 'advanced'] as TierTab[]).map((tierTab) => {
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
                  className={`flex-1 py-3 px-2 rounded-xl text-center transition-all ${
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
            className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 mb-6"
          >
            {currentLessons.map((lesson, index) => {
              const levelProgress = getGrammarLevelProgress(lesson.id);
              const isLevelFree = currentCategory ? index < currentCategory.freeLessons : false;
              const isTierLimited = activeTier === 'basic' && !unlockAllLevels && index >= limits.sentences.beginnerMaxLevel;
              const isPremiumLocked = (lesson.isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels) || isTierLimited;
              const isCompleted = levelProgress?.completed;
              const stars = levelProgress?.stars || 0;
              const isFirstUnlocked = !isPremiumLocked && !isCompleted && index === 0;

              return (
                <motion.button
                  key={lesson.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.015 }}
                  whileHover={!isPremiumLocked ? { scale: 1.05 } : {}}
                  whileTap={!isPremiumLocked ? { scale: 0.95 } : {}}
                  onClick={() => handleLevelClick(lesson.id, lesson.isPremium, index)}
                  className={`aspect-square rounded-[12px] xs:rounded-[16px] flex flex-col items-center justify-center relative transition-all shadow-md ${
                    isFirstUnlocked
                      ? 'bg-white border-l-4 border-l-[#B4D700]'
                      : isCompleted
                      ? 'bg-[#F6FFC7]'
                      : 'bg-white'
                  } ${isPremiumLocked ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <p
                    className={`text-[24px] xs:text-[28px] sm:text-[32px] ${
                      isCompleted ? 'text-[#440687]' : isFirstUnlocked ? 'text-[#B4D700]' : 'text-[#1F2937]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {lesson.levelNumber}
                  </p>

                  <div className="flex gap-1">
                    {[1, 2].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                          stars >= star ? 'text-[#B4D700]' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {isLevelFree && currentCategory?.isPremium && (
                    <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-[#77B602] text-white text-[8px] font-black rounded">
                      FREE
                    </span>
                  )}

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

          {/* Premium info for locked tiers */}
          {(activeTier !== 'basic' && !isPremiumUser) && (
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
                  <p className="text-white/70 text-[11px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    UPGRADE NOW
                  </p>
                  <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Unlock Premium
                  </h3>
                  <p className="text-white/80 text-[13px] mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                    {activeTier === 'intermediate' ? 'Intermediate' : 'Advanced'} lessons require Premium membership.
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

      <LoginRequiredModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <PaywallModal isOpen={!!paywallContentId} onClose={() => setPaywallContentId(null)} contentId={paywallContentId} />
    </div>
  );
}
