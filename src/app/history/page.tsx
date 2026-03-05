'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { useProgress } from '@/hooks/useProgress';
import { useLanguage } from '@/context/LanguageContext';
import { useDevMode } from '@/context/DevModeContext';
import {
  getLevelsByCategory,
  categoryConfigs,
  getCategoryStats,
  type CategoryConfig
} from '@/data/culture';
import { HistoryCategory } from '@/types';
import Button from '@/components/ui/Button';
import {
  TempleIcon,
  CrownIcon,
  StarIcon,
  CheckIcon,
  LockIcon,
  ScrollIcon,
  MapPinIcon,
  PaletteIcon,
  SwordIcon,
  HanbokIcon,
} from '@/components/icons/Icon3D';

// Category icon mapping
const CategoryIcons: Record<string, React.FC<{ size?: number; animate?: boolean }>> = {
  'scroll': ScrollIcon,
  'mapPin': MapPinIcon,
  'palette': PaletteIcon,
  'crown': CrownIcon,
  'temple': TempleIcon,
};

export default function HistoryPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, isLevelUnlocked, getLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();
  const [activeCategory, setActiveCategory] = useState<HistoryCategory>('korean-history');

  // Get current category config
  const currentCategoryConfig = categoryConfigs.find(c => c.id === activeCategory);

  // Get levels for current category
  const currentLevels = getLevelsByCategory(activeCategory);

  // Get category stats
  const getCategoryProgress = (categoryId: HistoryCategory) => {
    const levels = getLevelsByCategory(categoryId);
    let completedCount = 0;
    let starsCount = 0;

    levels.forEach(level => {
      const levelProgress = getLevelProgress('history', level.level, categoryId);
      if (levelProgress?.completed) completedCount++;
      starsCount += levelProgress?.stars || 0;
    });

    return { completed: completedCount, stars: starsCount, total: levels.length };
  };

  // Overall stats across all categories
  const overallStats = categoryConfigs.reduce(
    (acc, config) => {
      const stats = getCategoryProgress(config.id);
      return {
        completed: acc.completed + stats.completed,
        stars: acc.stars + stats.stars,
        total: acc.total + stats.total,
      };
    },
    { completed: 0, stars: 0, total: 0 }
  );

  const handleLevelClick = (levelId: string, isPremium: boolean) => {
    if (isPremium && !progress.isPremium && !unlockPro) {
      alert(t('level.premiumRequired'));
      return;
    }
    router.push(`/history/${levelId}`);
  };

  // Get display name based on language
  // For now, we show English content as the default since the app targets foreign learners
  const getCategoryName = (config: CategoryConfig) => {
    return config.name;
  };

  const getCategoryDescription = (config: CategoryConfig) => {
    return config.description;
  };

  const getLevelTitle = (level: { title: string; titleKo: string }) => {
    return level.title;
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 relative z-10 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <motion.div
              className="w-20 h-20 rounded-card bg-purple-100 flex items-center justify-center mx-auto mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <TempleIcon size={64} />
            </motion.div>
            <p className="subtitle-purple mb-2">EXPLORE CULTURE</p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2">
              Korean Culture
            </h1>
            <p className="text-gray-600 font-semibold max-w-md mx-auto">
              Explore history, places, art, figures, and heritage
            </p>
          </motion.div>

          {/* Overall Progress - Purple Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-purple relative p-6 mb-6"
          >
            <span className="badge-label badge-label-new absolute top-4 right-4">NEW!</span>

            <div className="flex items-start gap-4 mb-4">
              <motion.div
                className="w-14 h-14 rounded-card bg-white/20 flex items-center justify-center flex-shrink-0"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <TempleIcon size={40} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">YOUR PROGRESS</p>
                <h3 className="text-xl font-heading font-bold text-white mb-1">Culture Explorer</h3>
                <p className="text-white/80 text-sm">
                  {language === 'ja' ? '韓国の文化と歴史を探検' :
                   language === 'zh' ? '探索韩国文化与历史' :
                   'Discover Korean culture and heritage'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-around text-center bg-white/10 rounded-card p-4">
              <div>
                <div className="text-3xl font-bold text-white flex items-center justify-center gap-1">
                  <CheckIcon size={28} /> {overallStats.completed}
                </div>
                <div className="text-xs font-bold text-white/70">/ {overallStats.total} {t('main.levels')}</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white flex items-center justify-center gap-1">
                  <StarIcon size={32} animate /> {overallStats.stars}
                </div>
                <div className="text-xs font-bold text-white/70">/ {overallStats.total * 3} {t('main.stars')}</div>
              </div>
            </div>
          </motion.div>

          {/* Category Section Header */}
          <div className="mb-4">
            <p className="subtitle-purple mb-1">SELECT CATEGORY</p>
            <h2 className="text-xl font-heading font-bold text-navy">Choose Your Topic</h2>
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categoryConfigs.map((config) => {
              const stats = getCategoryProgress(config.id);
              const isActive = activeCategory === config.id;
              const IconComponent = CategoryIcons[config.icon] || ScrollIcon;

              return (
                <motion.button
                  key={config.id}
                  onClick={() => setActiveCategory(config.id)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 px-4 py-3 rounded-pill font-bold transition-all border-2 ${
                    isActive
                      ? 'text-navy shadow-btn'
                      : 'bg-white text-gray-700 border-gray-200 shadow-btn hover:shadow-card'
                  }`}
                  style={{
                    backgroundColor: isActive ? config.color : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <IconComponent size={24} />
                    <span className="text-sm">{getCategoryName(config)}</span>
                  </div>
                  <div className={`text-xs flex items-center justify-center gap-1 ${isActive ? 'text-navy/70' : 'text-gray-500'}`}>
                    <StarIcon size={12} /> {stats.stars}/{stats.total * 3}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Category Description - White Card with border */}
          {currentCategoryConfig && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="card relative p-6 mb-6 border-l-4"
              style={{ borderLeftColor: currentCategoryConfig.color }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-card flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${currentCategoryConfig.color}20` }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {(() => {
                    const IconComponent = CategoryIcons[currentCategoryConfig.icon] || ScrollIcon;
                    return <IconComponent size={40} />;
                  })()}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: currentCategoryConfig.color }}>
                    CATEGORY
                  </p>
                  <h2 className="text-lg font-heading font-bold text-navy mb-1">
                    {getCategoryName(currentCategoryConfig)}
                  </h2>
                  <p className="text-sm text-gray-600 font-semibold mb-3">
                    {getCategoryDescription(currentCategoryConfig)}
                  </p>
                  <div className="flex gap-3 text-xs font-bold">
                    <span className="badge badge-mint flex items-center gap-1">
                      <CheckIcon size={12} /> FREE: {getCategoryStats(activeCategory).free}
                    </span>
                    <span className="badge badge-yellow flex items-center gap-1">
                      <CrownIcon size={12} /> PRO: {getCategoryStats(activeCategory).premium}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Level Grid - White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {currentLevels.map((level, index) => {
                const levelProgress = getLevelProgress('history', level.level, activeCategory);
                const unlocked = isLevelUnlocked('history', level.level, activeCategory) || unlockAllLevels;
                const isPremiumLocked = level.isPremium && !progress.isPremium && !unlockPro;
                const isCompleted = levelProgress?.completed;

                return (
                  <motion.button
                    key={level.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={unlocked && !isPremiumLocked ? { scale: 1.05, y: -6, rotate: -2 } : {}}
                    whileTap={unlocked && !isPremiumLocked ? { scale: 0.95 } : {}}
                    onClick={() => handleLevelClick(level.id, level.isPremium)}
                    disabled={!unlocked || isPremiumLocked}
                    className={`relative p-4 flex flex-col items-center justify-center min-h-[140px] rounded-card border-2 transition-all ${
                      isCompleted
                        ? 'bg-purple-50 border-purple-300 hover:shadow-card-hover'
                        : 'bg-white border-gray-200 hover:shadow-card-hover hover:border-purple-300'
                    } ${(!unlocked || isPremiumLocked) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {/* Level number badge */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 border-2 text-white`}
                      style={{
                        background: `linear-gradient(135deg, ${currentCategoryConfig?.color || '#B197FC'}, ${currentCategoryConfig?.color || '#B197FC'}cc)`,
                        borderColor: currentCategoryConfig?.color || '#B197FC',
                      }}
                    >
                      {level.level}
                    </div>

                    {/* Level title */}
                    <div className="text-sm font-bold text-navy text-center mb-2 line-clamp-2">
                      {getLevelTitle(level)}
                    </div>

                    {/* Era/Region tag */}
                    {(level.era || level.region) && (
                      <div className="text-xs text-gray-500 font-semibold mb-1">
                        {level.era || level.region}
                      </div>
                    )}

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map((star) => (
                        <StarIcon
                          key={star}
                          size={16}
                          filled={(levelProgress?.stars || 0) >= star}
                        />
                      ))}
                    </div>

                    {/* Premium badge */}
                    {level.isPremium && (
                      <div className="absolute top-2 right-2">
                        <span className="badge-label badge-label-premium text-[10px] px-2 py-0.5">
                          PRO
                        </span>
                      </div>
                    )}

                    {/* Check badge for completed */}
                    {isCompleted && (
                      <div className="absolute top-2 left-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckIcon size={12} />
                      </div>
                    )}

                    {/* Lock overlay */}
                    {(!unlocked || isPremiumLocked) && (
                      <div className="absolute inset-0 bg-gray-100/80 rounded-card flex items-center justify-center">
                        {isPremiumLocked ? <CrownIcon size={32} /> : <LockIcon size={32} />}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Premium info - Purple Card */}
          {!progress.isPremium && !unlockPro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="card-purple mt-8 p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-card bg-white/20 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <CrownIcon size={48} animate />
                </motion.div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">UPGRADE NOW</p>
                  <h3 className="font-heading font-bold text-white mb-1 text-lg">{t('level.premiumInfo')}</h3>
                  <p className="text-sm text-white/80 font-semibold mb-3">
                    {language === 'ja'
                      ? 'プレミアム会員になると全ての文化レベルにアクセスできます。'
                      : language === 'zh'
                      ? '成为高级会员解锁所有文化关卡。'
                      : 'Unlock all culture levels with Premium membership.'}
                  </p>
                  <span className="btn-yellow btn-sm cursor-pointer">
                    {t('level.learnMore')} →
                  </span>
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
