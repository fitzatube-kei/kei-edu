export interface GrammarExample {
  korean: string;
  romanization: string;
  english: string;
  highlight?: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  titleKo: string;
  explanation: string;
  note?: string;
  usage: string;
  examples: GrammarExample[];
}

export interface GrammarExercise {
  id: string;
  type: 'fill-blank' | 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number;
  hint?: string;
  explanation: string;
}

export interface GrammarLesson {
  id: string;
  levelNumber: number;
  tier: 'basic' | 'intermediate' | 'advanced';
  title: string;
  titleKo: string;
  description: string;
  grammarPoints: GrammarPoint[];
  exercises: GrammarExercise[];
  xpReward: number;
  isPremium: boolean;
}

export interface GrammarCategory {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  icon: string;
  color: string;
  totalLessons: number;
  lessons: GrammarLesson[];
  isPremium: boolean;
  freeLessons: number;
}
