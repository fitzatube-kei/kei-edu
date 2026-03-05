/**
 * Word Builder Puzzle Game Types
 */

export interface PuzzleWord {
  id: string;           // "b-001" (b=beginner, i=intermediate, a=advanced)
  korean: string;       // "집"
  english: string;      // "House"
  category: string;     // "동물", "음식", "장소", etc.
  difficulty: 1 | 2 | 3 | 4 | 5;
  romanization?: string; // Optional romanization
}

export interface PuzzleLevel {
  id: string;           // "beginner-01"
  levelNumber: number;  // 1, 2, 3...
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  title: string;        // "Level 1"
  titleKey?: string;    // i18n key
  words: PuzzleWord[];  // 10 words per level
  xpReward: number;
  isPremium: boolean;
}

export interface PuzzleCategory {
  id: string;           // "beginner"
  name: string;         // "Beginner"
  nameKey?: string;
  description: string;
  descriptionKey?: string;
  icon: string;         // emoji
  color: string;        // gradient colors
  totalWords: number;
  totalLevels: number;
  levels: PuzzleLevel[];
  isPremium: boolean;
  freeLevels: number;   // How many levels are free
  syllableRange?: string; // "1-2", "3-4", "5+"
}

export interface PuzzleProgress {
  levelId: string;
  completed: boolean;
  stars: number;        // 0-3
  bestScore: number;
  wordsLearned: string[]; // korean words
}

export interface PuzzleGameState {
  currentWordIndex: number;
  totalWords: number;
  score: number;
  correctCount: number;
  hintsUsed: number;
  selectedJamos: string[];
  isComplete: boolean;
}
