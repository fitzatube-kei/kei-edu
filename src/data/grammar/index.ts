export * from './types';

import { basicCategory } from './basic';
import { intermediateCategory } from './intermediate';
import { advancedCategory } from './advanced';
import { GrammarCategory, GrammarLesson } from './types';

export const grammarCategories: GrammarCategory[] = [
  basicCategory,
  intermediateCategory,
  advancedCategory,
];

export { basicCategory, intermediateCategory, advancedCategory };

export function getGrammarCategoryById(id: string): GrammarCategory | undefined {
  return grammarCategories.find(cat => cat.id === id);
}

export function getGrammarLessonById(lessonId: string): GrammarLesson | undefined {
  for (const category of grammarCategories) {
    const lesson = category.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getGrammarLessonsByTier(tier: string): GrammarLesson[] {
  const category = grammarCategories.find(cat => cat.id === tier);
  return category?.lessons || [];
}

export function getTotalGrammarLessons(): number {
  return grammarCategories.reduce((sum, cat) => sum + cat.lessons.length, 0);
}
