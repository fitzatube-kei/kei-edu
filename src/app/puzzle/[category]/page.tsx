'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { getCategoryById } from '@/data/puzzle';
import { CrownIcon, LockIcon, StarIcon, CheckIcon } from '@/components/icons/Icon3D';
import { cn } from '@/lib/utils';

export default function PuzzleCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, getPuzzleLevelProgress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();

  const categoryId = params.category as string;
  const category = getCategoryById(categoryId);

  const isPremiumUser = progress.isPremium || unlockPro;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="card-3d p-8 text-center">
          <h1 className="text-2xl font-black text-gray-800 mb-4">Category not found</h1>
          <Button variant="primary" onClick={() => router.push('/puzzle')}>
            Back to Puzzle
          </Button>
        </div>
      </div>
    );
  }

  // Get category name in current language
  const getCategoryName = (): string => {
    const names: Record<string, Record<string, string>> = {
      beginner: { en: 'Beginner', ja: '初級', zh: '初级', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Principiante', ko: '초급' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio', ko: '중급' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado', ko: '고급' },
    };
    return names[category.id]?.[language] || names[category.id]?.en || category.name;
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Back button and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/puzzle')}
              className="mb-4"
            >
              ← Back
            </Button>

            <div className="flex items-center gap-4">
              <motion.div
                className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436]',
                  `bg-gradient-to-br ${category.color}`
                )}
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {category.icon}
              </motion.div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-white text-shadow-3d">
                  {getCategoryName()}
                </h1>
                <p className="text-white/80 font-semibold">
                  {category.totalWords} words • {category.levels.length} levels
                </p>
              </div>
            </div>
          </motion.div>

          {/* Levels grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {category.levels.map((level, index) => {
              const isLevelFree = index < category.freeLevels;
              const isLocked = level.isPremium && !isPremiumUser && !isLevelFree && !unlockAllLevels;
              const levelProgress = getPuzzleLevelProgress(level.id);
              const isCompleted = levelProgress?.completed || false;
              const stars = levelProgress?.stars || 0;

              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    href={isLocked ? '#' : `/puzzle/${categoryId}/${level.id}`}
                    onClick={(e) => isLocked && e.preventDefault()}
                  >
                    <motion.div
                      whileHover={!isLocked ? { scale: 1.1, rotate: 3 } : {}}
                      whileTap={!isLocked ? { scale: 0.95 } : {}}
                      className={cn(
                        'aspect-square rounded-2xl flex flex-col items-center justify-center border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436] transition-all cursor-pointer relative overflow-hidden',
                        isLocked
                          ? 'bg-gray-200 text-gray-400'
                          : isCompleted
                          ? `bg-gradient-to-br ${category.color} text-white`
                          : 'bg-white text-gray-800 hover:bg-purple-50'
                      )}
                    >
                      {isLocked ? (
                        <LockIcon size={24} />
                      ) : (
                        <>
                          <span className="text-lg font-black">{level.levelNumber}</span>
                          {isCompleted && stars > 0 && (
                            <div className="flex gap-0.5 mt-1">
                              {Array.from({ length: 3 }).map((_, i) => (
                                <span key={i} className={cn('text-xs', i < stars ? 'text-yellow-300' : 'text-white/30')}>
                                  ★
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {/* Free badge */}
                      {isLevelFree && category.isPremium && (
                        <span className="absolute top-0.5 right-0.5 px-1 py-0.5 bg-green-500 text-white text-[8px] font-black rounded">
                          FREE
                        </span>
                      )}

                      {/* Premium badge */}
                      {level.isPremium && !isLevelFree && !isLocked && (
                        <span className="absolute top-0.5 right-0.5">
                          <CrownIcon size={12} />
                        </span>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Coming soon placeholders */}
            {category.levels.length < category.totalLevels && (
              Array.from({ length: Math.min(8, category.totalLevels - category.levels.length) }).map((_, i) => (
                <motion.div
                  key={`coming-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (category.levels.length + i) * 0.02 }}
                  className="aspect-square rounded-2xl flex items-center justify-center border-3 border-dashed border-gray-300 bg-gray-50 text-gray-400"
                >
                  <span className="text-xs font-bold text-center px-1">Coming Soon</span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
