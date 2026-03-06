'use client';

import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';

export type MembershipTier = 'guest' | 'free' | 'premium';

export interface AccessLimits {
  hangul: {
    beginnerMaxLevel: number;
    intermediateAllowed: boolean;
    advancedAllowed: boolean;
  };
  puzzle: {
    beginnerMaxLevel: number;
    intermediateAllowed: boolean;
    advancedAllowed: boolean;
  };
  culture: {
    beginnerMaxSet: number;
    intermediateAllowed: boolean;
    advancedAllowed: boolean;
  };
  story: {
    allowed: boolean;
    allowedLocations: string[]; // empty = all allowed
  };
}

const GUEST_LIMITS: AccessLimits = {
  hangul: { beginnerMaxLevel: 5, intermediateAllowed: false, advancedAllowed: false },
  puzzle: { beginnerMaxLevel: 5, intermediateAllowed: false, advancedAllowed: false },
  culture: { beginnerMaxSet: 5, intermediateAllowed: false, advancedAllowed: false },
  story: { allowed: false, allowedLocations: [] },
};

const FREE_LIMITS: AccessLimits = {
  hangul: { beginnerMaxLevel: 10, intermediateAllowed: false, advancedAllowed: false },
  puzzle: { beginnerMaxLevel: 10, intermediateAllowed: false, advancedAllowed: false },
  culture: { beginnerMaxSet: 10, intermediateAllowed: false, advancedAllowed: false },
  story: { allowed: true, allowedLocations: ['myeongdong'] },
};

const PREMIUM_LIMITS: AccessLimits = {
  hangul: { beginnerMaxLevel: Infinity, intermediateAllowed: true, advancedAllowed: true },
  puzzle: { beginnerMaxLevel: Infinity, intermediateAllowed: true, advancedAllowed: true },
  culture: { beginnerMaxSet: Infinity, intermediateAllowed: true, advancedAllowed: true },
  story: { allowed: true, allowedLocations: [] }, // empty = all
};

export function useAccessControl() {
  const { user } = useAuth();
  const { progress } = useProgress();
  const { unlockPro, unlockAllLevels } = useDevMode();

  // Determine tier
  let tier: MembershipTier;
  if (progress.isPremium || unlockPro) {
    tier = 'premium';
  } else if (user) {
    tier = 'free';
  } else {
    tier = 'guest';
  }

  // Get limits based on tier
  const limits: AccessLimits = tier === 'premium'
    ? PREMIUM_LIMITS
    : tier === 'free'
    ? FREE_LIMITS
    : GUEST_LIMITS;

  // Helper: check if a beginner level is accessible (1-indexed level number)
  const isBeginnerLevelAccessible = (section: 'hangul' | 'puzzle', levelIndex: number): boolean => {
    if (unlockAllLevels) return true;
    return levelIndex < limits[section].beginnerMaxLevel;
  };

  // Helper: check if a culture set is accessible (0-indexed)
  const isCultureSetAccessible = (setIndex: number): boolean => {
    return setIndex < limits.culture.beginnerMaxSet;
  };

  // Helper: check if a story location is accessible
  const isStoryLocationAccessible = (locationId: string): boolean => {
    if (!limits.story.allowed) return false;
    if (limits.story.allowedLocations.length === 0) return true; // premium: all allowed
    return limits.story.allowedLocations.includes(locationId);
  };

  return {
    tier,
    limits,
    isBeginnerLevelAccessible,
    isCultureSetAccessible,
    isStoryLocationAccessible,
  };
}
