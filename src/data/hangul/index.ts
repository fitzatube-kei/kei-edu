import { HangulLevel, LearningTier } from '@/types';
import { beginnerLevels, intermediateLevels, advancedLevels } from './levels';

// Combined 60 levels with all three tiers
export const hangulLevels: HangulLevel[] = [
  ...beginnerLevels,      // Levels 1-20
  ...intermediateLevels,  // Levels 21-40
  ...advancedLevels,      // Levels 41-60
];

// Helper functions for tier management
export const getTierForLevel = (level: number): LearningTier => {
  if (level <= 20) return 'beginner';
  if (level <= 40) return 'intermediate';
  return 'advanced';
};

export const getLevelsByTier = (tier: LearningTier): HangulLevel[] => {
  switch (tier) {
    case 'beginner':
      return beginnerLevels;
    case 'intermediate':
      return intermediateLevels;
    case 'advanced':
      return advancedLevels;
    default:
      return beginnerLevels;
  }
};

export const getTierRange = (tier: LearningTier): { start: number; end: number } => {
  switch (tier) {
    case 'beginner':
      return { start: 1, end: 20 };
    case 'intermediate':
      return { start: 21, end: 40 };
    case 'advanced':
      return { start: 41, end: 60 };
    default:
      return { start: 1, end: 20 };
  }
};

export const TIER_COLORS = {
  beginner: '#7C3AED',    // Purple (existing hangul color)
  intermediate: '#0D9488', // Teal
  advanced: '#D97706',    // Gold
} as const;

export const TOTAL_LEVELS = 60;
export const LEVELS_PER_TIER = 20;

// Re-export all existing data for backward compatibility
export * from './consonants';
export * from './vowels';
export * from './syllables';
export * from './words';
