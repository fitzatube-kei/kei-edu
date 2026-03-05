import { PuzzleWord, PuzzleLevel, PuzzleCategory } from './types';

/**
 * Beginner Level Puzzle Words
 * 150 words total (15 levels, 10 words each)
 * Mix of 1-syllable and 2-syllable Korean words
 * Focused on practical, commonly used words for Korean learners
 */

// Extended interface to include romanization
export interface BeginnerPuzzleWord extends PuzzleWord {
  romanization: string;
}

export const beginnerWords: BeginnerPuzzleWord[] = [
  // Level 1 - 기초 자연/생활 (Basic Nature/Daily Life)
  { id: 'b-001', korean: '물', english: 'Water', romanization: 'mul', category: '자연', difficulty: 1 },
  { id: 'b-002', korean: '불', english: 'Fire', romanization: 'bul', category: '자연', difficulty: 1 },
  { id: 'b-003', korean: '눈', english: 'Eye/Snow', romanization: 'nun', category: '신체', difficulty: 1 },
  { id: 'b-004', korean: '손', english: 'Hand', romanization: 'son', category: '신체', difficulty: 1 },
  { id: 'b-005', korean: '집', english: 'House', romanization: 'jip', category: '장소', difficulty: 1 },
  { id: 'b-006', korean: '차', english: 'Car/Tea', romanization: 'cha', category: '물건', difficulty: 1 },
  { id: 'b-007', korean: '밥', english: 'Rice/Meal', romanization: 'bap', category: '음식', difficulty: 1 },
  { id: 'b-008', korean: '책', english: 'Book', romanization: 'chaek', category: '물건', difficulty: 1 },
  { id: 'b-009', korean: '산', english: 'Mountain', romanization: 'san', category: '자연', difficulty: 1 },
  { id: 'b-010', korean: '강', english: 'River', romanization: 'gang', category: '자연', difficulty: 1 },

  // Level 2 - 가족 (Family)
  { id: 'b-011', korean: '엄마', english: 'Mom', romanization: 'eomma', category: '가족', difficulty: 2 },
  { id: 'b-012', korean: '아빠', english: 'Dad', romanization: 'appa', category: '가족', difficulty: 2 },
  { id: 'b-013', korean: '누나', english: 'Older sister (for males)', romanization: 'nuna', category: '가족', difficulty: 2 },
  { id: 'b-014', korean: '동생', english: 'Younger sibling', romanization: 'dongsaeng', category: '가족', difficulty: 2 },
  { id: 'b-015', korean: '형', english: 'Older brother (for males)', romanization: 'hyeong', category: '가족', difficulty: 1 },
  { id: 'b-016', korean: '언니', english: 'Older sister (for females)', romanization: 'eonni', category: '가족', difficulty: 2 },
  { id: 'b-017', korean: '오빠', english: 'Older brother (for females)', romanization: 'oppa', category: '가족', difficulty: 2 },
  { id: 'b-018', korean: '할머니', english: 'Grandmother', romanization: 'halmeoni', category: '가족', difficulty: 3 },
  { id: 'b-019', korean: '친구', english: 'Friend', romanization: 'chingu', category: '가족', difficulty: 2 },
  { id: 'b-020', korean: '아기', english: 'Baby', romanization: 'agi', category: '가족', difficulty: 2 },

  // Level 3 - 신체 (Body Parts)
  { id: 'b-021', korean: '눈', english: 'Eye', romanization: 'nun', category: '신체', difficulty: 1 },
  { id: 'b-022', korean: '코', english: 'Nose', romanization: 'ko', category: '신체', difficulty: 1 },
  { id: 'b-023', korean: '입', english: 'Mouth', romanization: 'ip', category: '신체', difficulty: 1 },
  { id: 'b-024', korean: '귀', english: 'Ear', romanization: 'gwi', category: '신체', difficulty: 1 },
  { id: 'b-025', korean: '손', english: 'Hand', romanization: 'son', category: '신체', difficulty: 1 },
  { id: 'b-026', korean: '발', english: 'Foot', romanization: 'bal', category: '신체', difficulty: 1 },
  { id: 'b-027', korean: '머리', english: 'Head', romanization: 'meori', category: '신체', difficulty: 2 },
  { id: 'b-028', korean: '다리', english: 'Leg', romanization: 'dari', category: '신체', difficulty: 2 },
  { id: 'b-029', korean: '팔', english: 'Arm', romanization: 'pal', category: '신체', difficulty: 1 },
  { id: 'b-030', korean: '배', english: 'Belly/Stomach', romanization: 'bae', category: '신체', difficulty: 1 },

  // Level 4 - 동물 (Animals)
  { id: 'b-031', korean: '개', english: 'Dog', romanization: 'gae', category: '동물', difficulty: 1 },
  { id: 'b-032', korean: '고양이', english: 'Cat', romanization: 'goyangi', category: '동물', difficulty: 3 },
  { id: 'b-033', korean: '새', english: 'Bird', romanization: 'sae', category: '동물', difficulty: 1 },
  { id: 'b-034', korean: '물고기', english: 'Fish', romanization: 'mulgogi', category: '동물', difficulty: 3 },
  { id: 'b-035', korean: '말', english: 'Horse', romanization: 'mal', category: '동물', difficulty: 1 },
  { id: 'b-036', korean: '소', english: 'Cow', romanization: 'so', category: '동물', difficulty: 1 },
  { id: 'b-037', korean: '돼지', english: 'Pig', romanization: 'dwaeji', category: '동물', difficulty: 2 },
  { id: 'b-038', korean: '닭', english: 'Chicken', romanization: 'dak', category: '동물', difficulty: 2 },
  { id: 'b-039', korean: '토끼', english: 'Rabbit', romanization: 'tokki', category: '동물', difficulty: 2 },
  { id: 'b-040', korean: '호랑이', english: 'Tiger', romanization: 'horangi', category: '동물', difficulty: 3 },

  // Level 5 - 음식 1 (Food 1)
  { id: 'b-041', korean: '밥', english: 'Rice/Meal', romanization: 'bap', category: '음식', difficulty: 1 },
  { id: 'b-042', korean: '빵', english: 'Bread', romanization: 'ppang', category: '음식', difficulty: 2 },
  { id: 'b-043', korean: '물', english: 'Water', romanization: 'mul', category: '음식', difficulty: 1 },
  { id: 'b-044', korean: '우유', english: 'Milk', romanization: 'uyu', category: '음식', difficulty: 2 },
  { id: 'b-045', korean: '사과', english: 'Apple', romanization: 'sagwa', category: '음식', difficulty: 2 },
  { id: 'b-046', korean: '바나나', english: 'Banana', romanization: 'banana', category: '음식', difficulty: 3 },
  { id: 'b-047', korean: '김치', english: 'Kimchi', romanization: 'gimchi', category: '음식', difficulty: 2 },
  { id: 'b-048', korean: '라면', english: 'Ramen', romanization: 'ramyeon', category: '음식', difficulty: 2 },
  { id: 'b-049', korean: '고기', english: 'Meat', romanization: 'gogi', category: '음식', difficulty: 2 },
  { id: 'b-050', korean: '과일', english: 'Fruit', romanization: 'gwail', category: '음식', difficulty: 2 },

  // Level 6 - 색깔 (Colors)
  { id: 'b-051', korean: '빨강', english: 'Red', romanization: 'ppalgang', category: '색깔', difficulty: 2 },
  { id: 'b-052', korean: '파랑', english: 'Blue', romanization: 'parang', category: '색깔', difficulty: 2 },
  { id: 'b-053', korean: '노랑', english: 'Yellow', romanization: 'norang', category: '색깔', difficulty: 2 },
  { id: 'b-054', korean: '초록', english: 'Green', romanization: 'chorok', category: '색깔', difficulty: 2 },
  { id: 'b-055', korean: '하양', english: 'White', romanization: 'hayang', category: '색깔', difficulty: 2 },
  { id: 'b-056', korean: '검정', english: 'Black', romanization: 'geomjeong', category: '색깔', difficulty: 2 },
  { id: 'b-057', korean: '주황', english: 'Orange', romanization: 'juhwang', category: '색깔', difficulty: 2 },
  { id: 'b-058', korean: '분홍', english: 'Pink', romanization: 'bunhong', category: '색깔', difficulty: 2 },
  { id: 'b-059', korean: '보라', english: 'Purple', romanization: 'bora', category: '색깔', difficulty: 2 },
  { id: 'b-060', korean: '하늘', english: 'Sky blue', romanization: 'haneul', category: '색깔', difficulty: 2 },

  // Level 7 - 자연 2 (Nature 2)
  { id: 'b-061', korean: '하늘', english: 'Sky', romanization: 'haneul', category: '자연', difficulty: 2 },
  { id: 'b-062', korean: '바다', english: 'Sea/Ocean', romanization: 'bada', category: '자연', difficulty: 2 },
  { id: 'b-063', korean: '구름', english: 'Cloud', romanization: 'gureum', category: '자연', difficulty: 2 },
  { id: 'b-064', korean: '나무', english: 'Tree', romanization: 'namu', category: '자연', difficulty: 2 },
  { id: 'b-065', korean: '꽃', english: 'Flower', romanization: 'kkot', category: '자연', difficulty: 2 },
  { id: 'b-066', korean: '풀', english: 'Grass', romanization: 'pul', category: '자연', difficulty: 2 },
  { id: 'b-067', korean: '별', english: 'Star', romanization: 'byeol', category: '자연', difficulty: 1 },
  { id: 'b-068', korean: '달', english: 'Moon', romanization: 'dal', category: '자연', difficulty: 1 },
  { id: 'b-069', korean: '해', english: 'Sun', romanization: 'hae', category: '자연', difficulty: 1 },
  { id: 'b-070', korean: '비', english: 'Rain', romanization: 'bi', category: '자연', difficulty: 1 },

  // Level 8 - 장소 1 (Places 1)
  { id: 'b-071', korean: '집', english: 'House/Home', romanization: 'jip', category: '장소', difficulty: 1 },
  { id: 'b-072', korean: '학교', english: 'School', romanization: 'hakgyo', category: '장소', difficulty: 2 },
  { id: 'b-073', korean: '가게', english: 'Store/Shop', romanization: 'gage', category: '장소', difficulty: 2 },
  { id: 'b-074', korean: '공원', english: 'Park', romanization: 'gongwon', category: '장소', difficulty: 2 },
  { id: 'b-075', korean: '병원', english: 'Hospital', romanization: 'byeongwon', category: '장소', difficulty: 2 },
  { id: 'b-076', korean: '은행', english: 'Bank', romanization: 'eunhaeng', category: '장소', difficulty: 2 },
  { id: 'b-077', korean: '역', english: 'Station', romanization: 'yeok', category: '장소', difficulty: 1 },
  { id: 'b-078', korean: '길', english: 'Road/Street', romanization: 'gil', category: '장소', difficulty: 1 },
  { id: 'b-079', korean: '문', english: 'Door', romanization: 'mun', category: '장소', difficulty: 1 },
  { id: 'b-080', korean: '방', english: 'Room', romanization: 'bang', category: '장소', difficulty: 1 },

  // Level 9 - 시간 (Time/Days)
  { id: 'b-081', korean: '오늘', english: 'Today', romanization: 'oneul', category: '시간', difficulty: 2 },
  { id: 'b-082', korean: '내일', english: 'Tomorrow', romanization: 'naeil', category: '시간', difficulty: 2 },
  { id: 'b-083', korean: '어제', english: 'Yesterday', romanization: 'eoje', category: '시간', difficulty: 2 },
  { id: 'b-084', korean: '아침', english: 'Morning', romanization: 'achim', category: '시간', difficulty: 2 },
  { id: 'b-085', korean: '점심', english: 'Lunch/Noon', romanization: 'jeomsim', category: '시간', difficulty: 2 },
  { id: 'b-086', korean: '저녁', english: 'Evening', romanization: 'jeonyeok', category: '시간', difficulty: 2 },
  { id: 'b-087', korean: '밤', english: 'Night', romanization: 'bam', category: '시간', difficulty: 1 },
  { id: 'b-088', korean: '시간', english: 'Time/Hour', romanization: 'sigan', category: '시간', difficulty: 2 },
  { id: 'b-089', korean: '날', english: 'Day', romanization: 'nal', category: '시간', difficulty: 1 },
  { id: 'b-090', korean: '주', english: 'Week', romanization: 'ju', category: '시간', difficulty: 1 },

  // Level 10 - 물건 1 (Objects 1)
  { id: 'b-091', korean: '책', english: 'Book', romanization: 'chaek', category: '물건', difficulty: 1 },
  { id: 'b-092', korean: '연필', english: 'Pencil', romanization: 'yeonpil', category: '물건', difficulty: 2 },
  { id: 'b-093', korean: '가방', english: 'Bag', romanization: 'gabang', category: '물건', difficulty: 2 },
  { id: 'b-094', korean: '의자', english: 'Chair', romanization: 'uija', category: '물건', difficulty: 2 },
  { id: 'b-095', korean: '책상', english: 'Desk', romanization: 'chaeksang', category: '물건', difficulty: 2 },
  { id: 'b-096', korean: '침대', english: 'Bed', romanization: 'chimdae', category: '물건', difficulty: 2 },
  { id: 'b-097', korean: '거울', english: 'Mirror', romanization: 'geoul', category: '물건', difficulty: 2 },
  { id: 'b-098', korean: '시계', english: 'Clock/Watch', romanization: 'sigye', category: '물건', difficulty: 2 },
  { id: 'b-099', korean: '전화', english: 'Phone', romanization: 'jeonhwa', category: '물건', difficulty: 2 },
  { id: 'b-100', korean: '컴퓨터', english: 'Computer', romanization: 'keompyuteo', category: '물건', difficulty: 3 },

  // Level 11 - 음식 2 (Food 2)
  { id: 'b-101', korean: '국', english: 'Soup', romanization: 'guk', category: '음식', difficulty: 1 },
  { id: 'b-102', korean: '찌개', english: 'Stew', romanization: 'jjigae', category: '음식', difficulty: 2 },
  { id: 'b-103', korean: '떡', english: 'Rice cake', romanization: 'tteok', category: '음식', difficulty: 2 },
  { id: 'b-104', korean: '빵', english: 'Bread', romanization: 'ppang', category: '음식', difficulty: 2 },
  { id: 'b-105', korean: '케이크', english: 'Cake', romanization: 'keikeu', category: '음식', difficulty: 3 },
  { id: 'b-106', korean: '아이스', english: 'Ice', romanization: 'aiseu', category: '음식', difficulty: 3 },
  { id: 'b-107', korean: '주스', english: 'Juice', romanization: 'juseu', category: '음식', difficulty: 2 },
  { id: 'b-108', korean: '커피', english: 'Coffee', romanization: 'keopi', category: '음식', difficulty: 2 },
  { id: 'b-109', korean: '차', english: 'Tea', romanization: 'cha', category: '음식', difficulty: 1 },
  { id: 'b-110', korean: '물', english: 'Water', romanization: 'mul', category: '음식', difficulty: 1 },

  // Level 12 - 동사명사 (Verbs as Nouns)
  { id: 'b-111', korean: '잠', english: 'Sleep', romanization: 'jam', category: '추상', difficulty: 1 },
  { id: 'b-112', korean: '꿈', english: 'Dream', romanization: 'kkum', category: '추상', difficulty: 2 },
  { id: 'b-113', korean: '일', english: 'Work', romanization: 'il', category: '추상', difficulty: 1 },
  { id: 'b-114', korean: '놀이', english: 'Play/Game', romanization: 'nori', category: '추상', difficulty: 2 },
  { id: 'b-115', korean: '공부', english: 'Study', romanization: 'gongbu', category: '추상', difficulty: 2 },
  { id: 'b-116', korean: '운동', english: 'Exercise', romanization: 'undong', category: '추상', difficulty: 2 },
  { id: 'b-117', korean: '노래', english: 'Song', romanization: 'norae', category: '추상', difficulty: 2 },
  { id: 'b-118', korean: '춤', english: 'Dance', romanization: 'chum', category: '추상', difficulty: 1 },
  { id: 'b-119', korean: '그림', english: 'Picture/Drawing', romanization: 'geurim', category: '추상', difficulty: 2 },
  { id: 'b-120', korean: '사진', english: 'Photo', romanization: 'sajin', category: '추상', difficulty: 2 },

  // Level 13 - 날씨/계절 (Weather/Seasons)
  { id: 'b-121', korean: '봄', english: 'Spring', romanization: 'bom', category: '시간', difficulty: 1 },
  { id: 'b-122', korean: '여름', english: 'Summer', romanization: 'yeoreum', category: '시간', difficulty: 2 },
  { id: 'b-123', korean: '가을', english: 'Fall/Autumn', romanization: 'gaeul', category: '시간', difficulty: 2 },
  { id: 'b-124', korean: '겨울', english: 'Winter', romanization: 'gyeoul', category: '시간', difficulty: 2 },
  { id: 'b-125', korean: '날씨', english: 'Weather', romanization: 'nalssi', category: '자연', difficulty: 2 },
  { id: 'b-126', korean: '바람', english: 'Wind', romanization: 'baram', category: '자연', difficulty: 2 },
  { id: 'b-127', korean: '눈', english: 'Snow', romanization: 'nun', category: '자연', difficulty: 1 },
  { id: 'b-128', korean: '비', english: 'Rain', romanization: 'bi', category: '자연', difficulty: 1 },
  { id: 'b-129', korean: '구름', english: 'Cloud', romanization: 'gureum', category: '자연', difficulty: 2 },
  { id: 'b-130', korean: '햇빛', english: 'Sunlight', romanization: 'haetbit', category: '자연', difficulty: 2 },

  // Level 14 - 숫자 (Numbers/Counting - Pure Korean)
  { id: 'b-131', korean: '하나', english: 'One', romanization: 'hana', category: '숫자', difficulty: 2 },
  { id: 'b-132', korean: '둘', english: 'Two', romanization: 'dul', category: '숫자', difficulty: 1 },
  { id: 'b-133', korean: '셋', english: 'Three', romanization: 'set', category: '숫자', difficulty: 1 },
  { id: 'b-134', korean: '넷', english: 'Four', romanization: 'net', category: '숫자', difficulty: 1 },
  { id: 'b-135', korean: '다섯', english: 'Five', romanization: 'daseot', category: '숫자', difficulty: 2 },
  { id: 'b-136', korean: '여섯', english: 'Six', romanization: 'yeoseot', category: '숫자', difficulty: 2 },
  { id: 'b-137', korean: '일곱', english: 'Seven', romanization: 'ilgop', category: '숫자', difficulty: 2 },
  { id: 'b-138', korean: '여덟', english: 'Eight', romanization: 'yeodeol', category: '숫자', difficulty: 2 },
  { id: 'b-139', korean: '아홉', english: 'Nine', romanization: 'ahop', category: '숫자', difficulty: 2 },
  { id: 'b-140', korean: '열', english: 'Ten', romanization: 'yeol', category: '숫자', difficulty: 1 },

  // Level 15 - 교통 (Transportation - Mixed Review)
  { id: 'b-141', korean: '자동차', english: 'Car/Automobile', romanization: 'jadongcha', category: '물건', difficulty: 3 },
  { id: 'b-142', korean: '비행기', english: 'Airplane', romanization: 'bihaenggi', category: '물건', difficulty: 3 },
  { id: 'b-143', korean: '배', english: 'Boat/Ship', romanization: 'bae', category: '물건', difficulty: 1 },
  { id: 'b-144', korean: '버스', english: 'Bus', romanization: 'beoseu', category: '물건', difficulty: 2 },
  { id: 'b-145', korean: '지하철', english: 'Subway', romanization: 'jihacheol', category: '물건', difficulty: 3 },
  { id: 'b-146', korean: '택시', english: 'Taxi', romanization: 'taeksi', category: '물건', difficulty: 2 },
  { id: 'b-147', korean: '기차', english: 'Train', romanization: 'gicha', category: '물건', difficulty: 2 },
  { id: 'b-148', korean: '자전거', english: 'Bicycle', romanization: 'jajeongeo', category: '물건', difficulty: 3 },
  { id: 'b-149', korean: '오토바이', english: 'Motorcycle', romanization: 'otobai', category: '물건', difficulty: 3 },
  { id: 'b-150', korean: '트럭', english: 'Truck', romanization: 'teureok', category: '물건', difficulty: 2 },
];

// Level titles for beginner
const levelTitles = [
  { title: 'Basic Nature & Daily Life', titleKo: '기초 자연/생활' },
  { title: 'Family', titleKo: '가족' },
  { title: 'Body Parts', titleKo: '신체' },
  { title: 'Animals', titleKo: '동물' },
  { title: 'Food 1', titleKo: '음식 1' },
  { title: 'Colors', titleKo: '색깔' },
  { title: 'Nature 2', titleKo: '자연 2' },
  { title: 'Places 1', titleKo: '장소 1' },
  { title: 'Time & Days', titleKo: '시간' },
  { title: 'Objects 1', titleKo: '물건 1' },
  { title: 'Food 2', titleKo: '음식 2' },
  { title: 'Verbs as Nouns', titleKo: '동사명사' },
  { title: 'Weather & Seasons', titleKo: '날씨/계절' },
  { title: 'Numbers', titleKo: '숫자' },
  { title: 'Transportation', titleKo: '교통' },
];

// Generate levels (15 levels, 10 words each)
export const beginnerLevels: PuzzleLevel[] = Array.from({ length: 15 }, (_, i) => ({
  id: `beg-${String(i + 1).padStart(2, '0')}`,
  levelNumber: i + 1,
  difficultyLevel: 'beginner' as const,
  title: levelTitles[i].title,
  titleKey: `puzzle.beginner.level${i + 1}`,
  words: beginnerWords.slice(i * 10, (i + 1) * 10) as PuzzleWord[],
  xpReward: 50 + i * 10,
  isPremium: false, // All beginner levels are FREE
}));

export const beginnerCategory: PuzzleCategory = {
  id: 'beginner',
  name: 'Beginner',
  nameKey: 'puzzle.category.beginner',
  description: 'Start your Korean journey with essential 1-2 syllable words',
  descriptionKey: 'puzzle.category.beginnerDesc',
  icon: '🌱',
  color: 'from-emerald-400 to-teal-500',
  totalWords: beginnerWords.length,
  totalLevels: beginnerLevels.length,
  levels: beginnerLevels,
  isPremium: false,
  freeLevels: 15, // All free for beginners
  syllableRange: '1-2',
};

// Helper function to get words by category
export function getBeginnerWordsByCategory(category: string): BeginnerPuzzleWord[] {
  return beginnerWords.filter(word => word.category === category);
}

// Get all unique categories in beginner words
export function getBeginnerCategories(): string[] {
  const categories = new Set(beginnerWords.map(word => word.category));
  return Array.from(categories);
}

// Get words by difficulty
export function getBeginnerWordsByDifficulty(difficulty: 1 | 2 | 3): BeginnerPuzzleWord[] {
  return beginnerWords.filter(word => word.difficulty === difficulty);
}

// Statistics
export const beginnerStats = {
  totalWords: beginnerWords.length,
  totalLevels: beginnerLevels.length,
  oneSyllableWords: beginnerWords.filter(w => w.korean.length === 1).length,
  twoSyllableWords: beginnerWords.filter(w => w.korean.length === 2).length,
  threePlusSyllableWords: beginnerWords.filter(w => w.korean.length >= 3).length,
  categories: getBeginnerCategories(),
  difficultyDistribution: {
    easy: beginnerWords.filter(w => w.difficulty === 1).length,
    medium: beginnerWords.filter(w => w.difficulty === 2).length,
    hard: beginnerWords.filter(w => w.difficulty === 3).length,
  },
};
