import { MultilingualText } from './index';

// Season configuration
export interface StorySeason {
  id: number; // 1-15
  name: MultilingualText;
  description: MultilingualText;
  theme: string; // Theme description
  location: string; // Main location
  color: string; // Season color (hex)
  icon: string; // Icon name for the season
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPremium: boolean;
  totalEpisodes: number; // Always 8
  episodes: StoryEpisode[];
}

// Story Episode Types
export interface StoryEpisode {
  id: string; // "s1e1"
  season: number;
  episode: number;
  title: MultilingualText;
  description: MultilingualText;
  icon: string; // emoji
  location?: string; // Episode location

  scenes: StoryScene[];

  requiredLevel: number; // unlock condition (hangul level)
  rewards: {
    xp: number;
    badge?: string;
    badgeName?: MultilingualText;
  };
  isPremium: boolean;
  comingSoon?: boolean; // If true, episode has no dialogue yet
}

export interface StoryScene {
  id: string;
  background: string; // gradient or image path
  character: {
    name: string;
    avatar: string; // emoji or image
    emotion: 'happy' | 'sad' | 'thinking' | 'excited' | 'surprised' | 'celebrating';
  };

  dialogue: MultilingualText;

  choices?: StoryChoice[]; // 2-3 choices (optional for narration scenes)

  teaching?: {
    vocabulary: VocabularyItem[];
    grammar?: MultilingualText;
    culturalNote?: MultilingualText;
  };

  nextSceneId?: string; // for linear scenes without choices
}

export interface VocabularyItem {
  korean: string;
  romanization: string;
  meaning: MultilingualText;
}

export interface StoryChoice {
  id: string;
  korean: string; // "명동 가주세요"
  romanization: string; // "myeongdong gajuseyo"
  translation: MultilingualText;

  correctness: 'perfect' | 'good' | 'awkward';

  feedback: MultilingualText;
  nextSceneId: string; // branching
}

// Review Quiz Types
export type ReviewQuizType = 'fill-in-blank' | 'matching' | 'multiple-choice';

export interface FillBlankQuestion {
  type: 'fill-in-blank';
  id: string;
  sentence: MultilingualText; // sentence with _____ blank
  correctAnswer: string; // Korean word
  options: string[]; // 4 Korean options
  explanation: MultilingualText;
}

export interface MatchingQuestion {
  type: 'matching';
  id: string;
  pairs: { korean: string; translation: MultilingualText }[]; // 6 pairs
  explanation: MultilingualText;
}

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  id: string;
  question: string; // Korean sentence
  questionRomanization: string;
  options: MultilingualText[]; // 4 translation options
  correctIndex: number;
  explanation: MultilingualText;
}

export type ReviewQuestion = FillBlankQuestion | MatchingQuestion | MultipleChoiceQuestion;

export interface ReviewQuiz {
  id: string;
  triggerAfterEpisode: string; // e.g. "s1e2"
  title: MultilingualText;
  description: MultilingualText;
  questions: ReviewQuestion[];
  passingScore: number; // percentage 0-100
  rewards: {
    xp: number;
    badge?: string;
    badgeName?: MultilingualText;
  };
}

// Progress tracking
export interface StoryProgress {
  odessaId: string;
  completed: boolean;
  choicesMade: string[]; // choice IDs
  score: number;
  completedAt?: Date;
}

export interface UserStoryProgress {
  episodeProgress: Record<string, StoryProgress>;
  totalXp: number;
  badges: string[];
}
