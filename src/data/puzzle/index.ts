/**
 * Word Builder Puzzle Data Index
 *
 * Structure:
 * - Beginner: 1-2 syllable words (100 levels, 1000 words)
 * - Intermediate: 3-4 syllable words (100 levels, 1000 words)
 * - Advanced: 4+ syllable/compound words (100 levels, 1000 words)
 */

export * from './types';

import { beginnerCategory, beginnerWords, beginnerLevels } from './beginner';
import { intermediateCategory, intermediateWords, intermediateLevels } from './intermediate';
import { advancedCategory, advancedWords, advancedLevels } from './advanced';
import { PuzzleCategory, PuzzleLevel, PuzzleWord } from './types';

// Export all categories
export const puzzleCategories: PuzzleCategory[] = [
  beginnerCategory,
  intermediateCategory,
  advancedCategory,
];

// Export individual categories
export {
  beginnerCategory,
  intermediateCategory,
  advancedCategory,
};

// Export all words
export {
  beginnerWords,
  intermediateWords,
  advancedWords,
};

// Export all levels
export {
  beginnerLevels,
  intermediateLevels,
  advancedLevels,
};

// Helper functions
export function getCategoryById(id: string): PuzzleCategory | undefined {
  return puzzleCategories.find(cat => cat.id === id);
}

export function getCategoryByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): PuzzleCategory | undefined {
  return puzzleCategories.find(cat => cat.id === difficulty);
}

export function getLevelById(levelId: string): PuzzleLevel | undefined {
  for (const category of puzzleCategories) {
    const level = category.levels.find(l => l.id === levelId);
    if (level) return level;
  }
  return undefined;
}

export function getLevelsByCategory(categoryId: string): PuzzleLevel[] {
  const category = getCategoryById(categoryId);
  return category?.levels || [];
}

export function getWordById(wordId: string): PuzzleWord | undefined {
  const allWords = [
    ...beginnerWords,
    ...intermediateWords,
    ...advancedWords,
  ];
  return allWords.find(w => w.id === wordId);
}

// Get all words
export function getAllWords(): PuzzleWord[] {
  return [
    ...beginnerWords,
    ...intermediateWords,
    ...advancedWords,
  ];
}

// Stats
export function getTotalWords(): number {
  return beginnerWords.length + intermediateWords.length + advancedWords.length;
}

export function getTotalLevels(): number {
  return puzzleCategories.reduce((sum, cat) => sum + cat.levels.length, 0);
}

export function getFreeLevelsCount(): number {
  return puzzleCategories.reduce((sum, cat) => sum + cat.freeLevels, 0);
}

// Get statistics
export function getPuzzleStats() {
  return {
    totalWords: getTotalWords(),
    totalLevels: getTotalLevels(),
    freeLevels: getFreeLevelsCount(),
    categories: {
      beginner: {
        words: beginnerWords.length,
        levels: beginnerLevels.length,
        freeLevels: beginnerCategory.freeLevels,
      },
      intermediate: {
        words: intermediateWords.length,
        levels: intermediateLevels.length,
        freeLevels: intermediateCategory.freeLevels,
      },
      advanced: {
        words: advancedWords.length,
        levels: advancedLevels.length,
        freeLevels: advancedCategory.freeLevels,
      },
    },
  };
}
