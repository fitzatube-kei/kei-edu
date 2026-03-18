// Learning tier types
export type LearningTier = 'beginner' | 'intermediate' | 'advanced';

// History/Culture category types
export type HistoryCategory =
  | 'korean-history'
  | 'famous-places'
  | 'museums-art'
  | 'historical-figures'
  | 'cultural-heritage';

// User types
export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
}

// Category-specific progress for culture/history levels
export interface CategoryProgress {
  levelId: string; // e.g., 'korean-history-1'
  stars: number; // 0-3
  score: number;
  completed: boolean;
  hintsUsed?: number;
  unlockedAt?: Date;
  completedAt?: Date;
}

// Puzzle level progress
export interface PuzzleLevelProgress {
  levelId: string; // e.g., '1s-01', '2s-05'
  stars: number; // 0-3
  score: number;
  completed: boolean;
  hintsUsed?: number;
  completedAt?: Date;
  completedGames?: string[]; // ['write', 'puzzle']
}

// Grammar level progress
export interface GrammarLevelProgress {
  levelId: string; // e.g., 'basic-01', 'inter-05'
  stars: number; // 0-3
  score: number;
  completed: boolean;
  completedAt?: Date;
}

export interface UserProgress {
  userId: string;
  hangulProgress: LevelProgress[];
  historyProgress: LevelProgress[];
  cultureProgress: CategoryProgress[]; // New: category-based progress
  storyProgress: StoryEpisodeProgress[];
  puzzleProgress: PuzzleLevelProgress[]; // Puzzle game progress
  grammarProgress: GrammarLevelProgress[]; // Grammar/Sentences progress
  totalScore: number;
  streakDays: number;
  lastPlayedAt: Date;
  isPremium: boolean;
}

export interface StoryEpisodeProgress {
  episodeId: string;
  score: number;
  completed: boolean;
  choices: string[];
  earnedBadge?: string;
  completedAt?: Date;
}

export interface LevelProgress {
  level: number;
  stars: number; // 0-3
  score: number;
  completed: boolean;
  completedGames?: string[]; // e.g. ['quiz', 'matching']
  unlockedAt?: Date;
  completedAt?: Date;
}

// Game types
export type GameType = 'quiz' | 'matching' | 'fill-in-blank';
export type GameCategory = 'hangul' | 'history';

export interface GameState {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeSpent: number;
  isComplete: boolean;
}

// Multilingual text type
export type MultilingualText = {
  en: string;
  ja: string;
  es: string;
  th: string;
  vi: string;
  zh: string;
  'zh-TW'?: string;
};

// Question types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  imageUrl?: string;
}

// Culture/History Quiz Question with bilingual support and hints
export interface CultureQuizQuestion {
  id: string;
  question: string;
  questionKo: string;
  options: string[];
  optionsKo: string[];
  correctIndex: number;
  hint: string;
  hintKo: string;
  explanation: string;
  explanationKo: string;
}

// Multilingual Quiz Question (new format)
export interface MultilingualQuizQuestion {
  id: string;
  templateKey: string; // e.g., 'firstConsonant', 'pronunciationName', 'combineSyllable'
  word?: {
    korean: string;
    romanization?: string;
    translations: MultilingualText;
  };
  character?: string;  // For character-based questions (ㄱ, ㅏ, 가, etc.)
  character2?: string; // For compound questions (ㄱ + ㅏ = ?)
  options: string[];
  correctAnswer: number;
  explanationKey?: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

// Multilingual matching pair for international learners
export type MatchingPairType = 'consonant-name' | 'consonant-sound' | 'vowel-name' | 'vowel-sound' | 'word';

export interface MultilingualMatchingPair {
  id: string;
  left: string; // Korean character or word
  right: MultilingualText | string; // Translated content or simple string
  type: MatchingPairType;
  romanization?: string; // For pronunciation
}

export interface MatchingGame {
  pairs: MatchingPair[];
}

// Fill-in-the-blank question type
export interface FillInBlankQuestion {
  id: string;
  sentence: string; // Sentence with ___ for blank
  sentenceKey?: string; // Translation key for sentence
  blank: string; // Correct answer for the blank
  options: string[]; // Multiple choice options
  correctAnswer: number; // Index of correct option
  hint?: MultilingualText; // Optional hint
  explanation?: string;
  explanationKey?: string;
  translation?: MultilingualText; // Translation of the full sentence
}

// Hangul data types
export interface HangulCharacter {
  character: string;
  romanization: string;
  pronunciation: string;
  type: 'consonant' | 'vowel' | 'complex-consonant' | 'complex-vowel';
  example?: {
    word: string;
    meaning: string;
  };
}

export interface HangulWord {
  word: string;
  meaning: string;
  romanization: string;
  category: string;
}

export interface HangulLevel {
  level: number;
  title: string;
  titleKey?: string; // Translation key for title
  description: string;
  descriptionKey?: string; // Translation key for description
  tier?: LearningTier; // Beginner (1-20), Intermediate (21-40), Advanced (41-60)
  characters?: HangulCharacter[] | string[];
  words?: HangulWord[];
  quizQuestions?: QuizQuestion[];
  multilingualQuizQuestions?: MultilingualQuizQuestion[];
  matchingPairs?: MatchingPair[];
  multilingualMatchingPairs?: MultilingualMatchingPair[]; // For international learners
  fillInBlankQuestions?: FillInBlankQuestion[]; // Fill-in-the-blank game
  reviewItems?: string[]; // Items to review with pronunciation after level completion
  requiredScore?: number;
  isPremium?: boolean;
}

// History data types
export interface HistoricalEvent {
  year: string;
  event: string;
  description: string;
  period: string;
}

export interface HistoricalFigure {
  name: string;
  period: string;
  title: string;
  description: string;
  achievements: string[];
}

export interface HistoryLevel {
  level: number;
  title: string;
  period: string;
  description: string;
  events: HistoricalEvent[];
  figures: HistoricalFigure[];
  quizQuestions: QuizQuestion[];
  multilingualQuizQuestions?: MultilingualQuizQuestion[];
  matchingPairs?: MatchingPair[];
  requiredScore: number;
  isPremium: boolean;
}

// Key event for culture/history levels
export interface KeyEvent {
  year: string;
  event: string;
  eventKo: string;
}

// Key figure for culture/history levels
export interface KeyFigure {
  name: string;
  nameKo: string;
  role?: string;
  roleKo?: string;
}

// Culture Level (expanded history/culture curriculum)
export interface CultureLevel {
  id: string; // e.g., 'korean-history-1', 'famous-places-3'
  category: HistoryCategory;
  level: number; // 1-12 within category
  title: string;
  titleKo: string;
  description: string;
  descriptionKo?: string;
  era?: string;
  region?: string;
  isPremium: boolean;
  keyEvents?: KeyEvent[];
  keyFigures?: KeyFigure[];
  quizQuestions: CultureQuizQuestion[];
}

// Level selection
export interface LevelCardData {
  level: number;
  title: string;
  description: string;
  stars: number;
  isLocked: boolean;
  isPremium: boolean;
  isCompleted: boolean;
}

// Animation states
export type AnimationState = 'idle' | 'correct' | 'wrong' | 'complete';

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// Auth types
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}
