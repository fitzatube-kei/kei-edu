import { CultureLevel, HistoryCategory } from '@/types';
import { koreanHistoryLevels } from './koreanHistory';
import { famousPlacesLevels } from './famousPlaces';
import { museumsArtLevels } from './museumsArt';
import { historicalFiguresLevels } from './historicalFigures';
import { culturalHeritageLevels } from './culturalHeritage';

// All culture levels combined
export const allCultureLevels: CultureLevel[] = [
  ...koreanHistoryLevels,
  ...famousPlacesLevels,
  ...museumsArtLevels,
  ...historicalFiguresLevels,
  ...culturalHeritageLevels,
];

// Get levels by category
export function getLevelsByCategory(category: HistoryCategory): CultureLevel[] {
  return allCultureLevels.filter(level => level.category === category);
}

// Get a specific level by ID
export function getCultureLevel(levelId: string): CultureLevel | undefined {
  return allCultureLevels.find(level => level.id === levelId);
}

// Get level by category and level number
export function getLevelByCategoryAndNumber(category: HistoryCategory, levelNumber: number): CultureLevel | undefined {
  return allCultureLevels.find(level => level.category === category && level.level === levelNumber);
}

// Category configuration
export interface CategoryConfig {
  id: HistoryCategory;
  name: string;
  nameKo: string;
  icon: string;
  color: string;
  bgGradient: string;
  description: string;
  descriptionKo: string;
}

export const categoryConfigs: CategoryConfig[] = [
  {
    id: 'korean-history',
    name: 'Korean History',
    nameKo: '한국사',
    icon: 'scroll',
    color: '#43e97b',
    bgGradient: 'from-[#43e97b] to-[#38f9d7]',
    description: 'From Gojoseon to modern Korea',
    descriptionKo: '고조선부터 현대 한국까지',
  },
  {
    id: 'famous-places',
    name: 'Famous Places',
    nameKo: '명소/관광지',
    icon: 'mapPin',
    color: '#667eea',
    bgGradient: 'from-[#667eea] to-[#764ba2]',
    description: 'Palaces, temples, and scenic spots',
    descriptionKo: '궁궐, 사찰, 명승지',
  },
  {
    id: 'museums-art',
    name: 'Museums & Art',
    nameKo: '박물관/미술',
    icon: 'palette',
    color: '#fa709a',
    bgGradient: 'from-[#fa709a] to-[#fee140]',
    description: 'Korean art from ancient to modern',
    descriptionKo: '고대부터 현대까지 한국 미술',
  },
  {
    id: 'historical-figures',
    name: 'Historical Figures',
    nameKo: '역사 인물',
    icon: 'crown',
    color: '#f39c12',
    bgGradient: 'from-[#f39c12] to-[#e74c3c]',
    description: 'Great leaders and heroes of Korea',
    descriptionKo: '한국의 위대한 지도자와 영웅',
  },
  {
    id: 'cultural-heritage',
    name: 'Cultural Heritage',
    nameKo: '문화유산',
    icon: 'temple',
    color: '#e74c3c',
    bgGradient: 'from-[#e74c3c] to-[#c0392b]',
    description: 'Traditions, food, and customs',
    descriptionKo: '전통, 음식, 풍습',
  },
];

// Get category config by ID
export function getCategoryConfig(categoryId: HistoryCategory): CategoryConfig | undefined {
  return categoryConfigs.find(config => config.id === categoryId);
}

// Get category statistics
export interface CategoryStats {
  total: number;
  free: number;
  premium: number;
}

export function getCategoryStats(category: HistoryCategory): CategoryStats {
  const levels = getLevelsByCategory(category);
  return {
    total: levels.length,
    free: levels.filter(l => !l.isPremium).length,
    premium: levels.filter(l => l.isPremium).length,
  };
}

// Export individual category levels
export { koreanHistoryLevels } from './koreanHistory';
export { famousPlacesLevels } from './famousPlaces';
export { museumsArtLevels } from './museumsArt';
export { historicalFiguresLevels } from './historicalFigures';
export { culturalHeritageLevels } from './culturalHeritage';
