import { PuzzleWord, PuzzleLevel, PuzzleCategory } from './types';

/**
 * Advanced Level Puzzle Words (5+ syllables and compound words)
 * 고급 단어 50개 (5레벨, 레벨당 10개)
 * Categories: 장소, 직업, 일상생활, 기관, 복합어
 */

// Level 1 - 복합 장소 (Complex Places/Buildings)
export const advancedLevel1Words: PuzzleWord[] = [
  { id: 'a-001', korean: '자동판매기', english: 'Vending machine', category: '물건', difficulty: 4 },
  { id: 'a-002', korean: '주민센터', english: 'Community center', category: '장소', difficulty: 4 },
  { id: 'a-003', korean: '문화센터', english: 'Cultural center', category: '장소', difficulty: 4 },
  { id: 'a-004', korean: '스포츠센터', english: 'Sports center', category: '장소', difficulty: 4 },
  { id: 'a-005', korean: '쇼핑센터', english: 'Shopping center', category: '장소', difficulty: 4 },
  { id: 'a-006', korean: '놀이공원', english: 'Amusement park', category: '장소', difficulty: 4 },
  { id: 'a-007', korean: '동물원', english: 'Zoo', category: '장소', difficulty: 4 },
  { id: 'a-008', korean: '수족관', english: 'Aquarium', category: '장소', difficulty: 4 },
  { id: 'a-009', korean: '미술관', english: 'Art museum', category: '장소', difficulty: 4 },
  { id: 'a-010', korean: '전시회장', english: 'Exhibition hall', category: '장소', difficulty: 4 },
];

// Level 2 - 음식/식당 (Long Food/Restaurant Terms)
export const advancedLevel2Words: PuzzleWord[] = [
  { id: 'a-011', korean: '패스트푸드', english: 'Fast food', category: '음식', difficulty: 4 },
  { id: 'a-012', korean: '배달음식', english: 'Delivery food', category: '음식', difficulty: 4 },
  { id: 'a-013', korean: '한식당', english: 'Korean restaurant', category: '장소', difficulty: 4 },
  { id: 'a-014', korean: '중식당', english: 'Chinese restaurant', category: '장소', difficulty: 4 },
  { id: 'a-015', korean: '일식당', english: 'Japanese restaurant', category: '장소', difficulty: 4 },
  { id: 'a-016', korean: '이탈리아', english: 'Italy / Italian', category: '지명', difficulty: 4 },
  { id: 'a-017', korean: '타코가게', english: 'Taco shop', category: '장소', difficulty: 4 },
  { id: 'a-018', korean: '편의점음식', english: 'Convenience store food', category: '음식', difficulty: 5 },
  { id: 'a-019', korean: '길거리음식', english: 'Street food', category: '음식', difficulty: 5 },
  { id: 'a-020', korean: '자판기음료', english: 'Vending machine drink', category: '음식', difficulty: 5 },
];

// Level 3 - 일상생활 (Complex Daily Life)
export const advancedLevel3Words: PuzzleWord[] = [
  { id: 'a-021', korean: '대중교통', english: 'Public transportation', category: '일상생활', difficulty: 4 },
  { id: 'a-022', korean: '교통카드', english: 'Transportation card', category: '물건', difficulty: 4 },
  { id: 'a-023', korean: '신용카드', english: 'Credit card', category: '물건', difficulty: 4 },
  { id: 'a-024', korean: '체크카드', english: 'Debit card', category: '물건', difficulty: 4 },
  { id: 'a-025', korean: '현금인출기', english: 'ATM', category: '기관', difficulty: 5 },
  { id: 'a-026', korean: '무인계산대', english: 'Self-checkout', category: '물건', difficulty: 5 },
  { id: 'a-027', korean: '온라인쇼핑', english: 'Online shopping', category: '일상생활', difficulty: 5 },
  { id: 'a-028', korean: '배달서비스', english: 'Delivery service', category: '일상생활', difficulty: 5 },
  { id: 'a-029', korean: '예약시스템', english: 'Reservation system', category: '일상생활', difficulty: 5 },
  { id: 'a-030', korean: '고객센터', english: 'Customer center', category: '기관', difficulty: 4 },
];

// Level 4 - 복합어/기술 (Compound Words/Technology)
export const advancedLevel4Words: PuzzleWord[] = [
  { id: 'a-031', korean: '인터넷뱅킹', english: 'Internet banking', category: '복합어', difficulty: 5 },
  { id: 'a-032', korean: '모바일뱅킹', english: 'Mobile banking', category: '복합어', difficulty: 5 },
  { id: 'a-033', korean: '무선인터넷', english: 'Wireless internet / WiFi', category: '복합어', difficulty: 5 },
  { id: 'a-034', korean: '충전케이블', english: 'Charging cable', category: '물건', difficulty: 5 },
  { id: 'a-035', korean: '보조배터리', english: 'Portable charger', category: '물건', difficulty: 5 },
  { id: 'a-036', korean: '블루투스', english: 'Bluetooth', category: '복합어', difficulty: 4 },
  { id: 'a-037', korean: '내비게이션', english: 'Navigation / GPS', category: '물건', difficulty: 5 },
  { id: 'a-038', korean: '전기자동차', english: 'Electric car', category: '복합어', difficulty: 5 },
  { id: 'a-039', korean: '하이브리드', english: 'Hybrid', category: '복합어', difficulty: 5 },
  { id: 'a-040', korean: '인공지능', english: 'Artificial intelligence', category: '복합어', difficulty: 4 },
];

// Level 5 - 고급 일상 표현 (Advanced Daily Expressions)
export const advancedLevel5Words: PuzzleWord[] = [
  { id: 'a-041', korean: '주말여행', english: 'Weekend trip', category: '일상생활', difficulty: 4 },
  { id: 'a-042', korean: '해외여행', english: 'Overseas travel', category: '일상생활', difficulty: 4 },
  { id: 'a-043', korean: '국내여행', english: 'Domestic travel', category: '일상생활', difficulty: 4 },
  { id: 'a-044', korean: '단체여행', english: 'Group tour', category: '일상생활', difficulty: 4 },
  { id: 'a-045', korean: '배낭여행', english: 'Backpacking', category: '일상생활', difficulty: 4 },
  { id: 'a-046', korean: '해외출장', english: 'Business trip abroad', category: '직업', difficulty: 4 },
  { id: 'a-047', korean: '휴가신청', english: 'Vacation request', category: '직업', difficulty: 4 },
  { id: 'a-048', korean: '연차휴가', english: 'Annual leave', category: '직업', difficulty: 4 },
  { id: 'a-049', korean: '야근수당', english: 'Overtime pay', category: '직업', difficulty: 4 },
  { id: 'a-050', korean: '월급날', english: 'Payday', category: '직업', difficulty: 4 },
];

// Combine all advanced words
export const advancedWords: PuzzleWord[] = [
  ...advancedLevel1Words,
  ...advancedLevel2Words,
  ...advancedLevel3Words,
  ...advancedLevel4Words,
  ...advancedLevel5Words,
];

// Define levels
export const advancedLevels: PuzzleLevel[] = [
  {
    id: 'adv-01',
    levelNumber: 1,
    difficultyLevel: 'advanced' as const,
    title: 'Level 1 - Complex Places',
    titleKey: 'puzzle.advanced.level1',
    words: advancedLevel1Words,
    xpReward: 350,
    isPremium: false, // First level is free
  },
  {
    id: 'adv-02',
    levelNumber: 2,
    difficultyLevel: 'advanced' as const,
    title: 'Level 2 - Food & Restaurants',
    titleKey: 'puzzle.advanced.level2',
    words: advancedLevel2Words,
    xpReward: 400,
    isPremium: true,
  },
  {
    id: 'adv-03',
    levelNumber: 3,
    difficultyLevel: 'advanced' as const,
    title: 'Level 3 - Daily Life',
    titleKey: 'puzzle.advanced.level3',
    words: advancedLevel3Words,
    xpReward: 450,
    isPremium: true,
  },
  {
    id: 'adv-04',
    levelNumber: 4,
    difficultyLevel: 'advanced' as const,
    title: 'Level 4 - Technology',
    titleKey: 'puzzle.advanced.level4',
    words: advancedLevel4Words,
    xpReward: 500,
    isPremium: true,
  },
  {
    id: 'adv-05',
    levelNumber: 5,
    difficultyLevel: 'advanced' as const,
    title: 'Level 5 - Work & Travel',
    titleKey: 'puzzle.advanced.level5',
    words: advancedLevel5Words,
    xpReward: 550,
    isPremium: true,
  },
];

// Define advanced category
export const advancedCategory: PuzzleCategory = {
  id: 'advanced',
  name: 'Advanced',
  nameKey: 'puzzle.category.advanced',
  description: 'Master complex Korean words and compound expressions',
  descriptionKey: 'puzzle.category.advancedDesc',
  icon: '🎓',
  color: 'from-purple-400 to-pink-500',
  totalWords: 50,
  totalLevels: 5,
  levels: advancedLevels,
  isPremium: true,
  freeLevels: 1,
  syllableRange: '5+',
};
