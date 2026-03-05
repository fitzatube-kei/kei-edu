import { PuzzleWord, PuzzleLevel, PuzzleCategory } from './types';

/**
 * Intermediate Level - 3~4 Syllable Korean Words
 * 100 words total (10 levels, 10 words each)
 * Difficulty: 3-4
 * Categories: Places, Food, Electronics, Transportation, Occupations, Animals, School, Hobbies, Daily Life
 */
export const intermediateWords: PuzzleWord[] = [
  // Level 1 - Places 1 (장소 1)
  { id: 'i-001', korean: '도서관', english: 'Library', category: '장소', difficulty: 3 },
  { id: 'i-002', korean: '미용실', english: 'Hair salon', category: '장소', difficulty: 3 },
  { id: 'i-003', korean: '편의점', english: 'Convenience store', category: '장소', difficulty: 3 },
  { id: 'i-004', korean: '우체국', english: 'Post office', category: '장소', difficulty: 3 },
  { id: 'i-005', korean: '놀이터', english: 'Playground', category: '장소', difficulty: 3 },
  { id: 'i-006', korean: '수영장', english: 'Swimming pool', category: '장소', difficulty: 3 },
  { id: 'i-007', korean: '운동장', english: 'Sports field', category: '장소', difficulty: 3 },
  { id: 'i-008', korean: '백화점', english: 'Department store', category: '장소', difficulty: 3 },
  { id: 'i-009', korean: '주차장', english: 'Parking lot', category: '장소', difficulty: 3 },
  { id: 'i-010', korean: '화장실', english: 'Restroom', category: '장소', difficulty: 3 },

  // Level 2 - Places 2 (장소 2)
  { id: 'i-011', korean: '지하철', english: 'Subway', category: '장소', difficulty: 3 },
  { id: 'i-012', korean: '경찰서', english: 'Police station', category: '장소', difficulty: 3 },
  { id: 'i-013', korean: '소방서', english: 'Fire station', category: '장소', difficulty: 3 },
  { id: 'i-014', korean: '영화관', english: 'Movie theater', category: '장소', difficulty: 3 },
  { id: 'i-015', korean: '박물관', english: 'Museum', category: '장소', difficulty: 3 },
  { id: 'i-016', korean: '대학교', english: 'University', category: '장소', difficulty: 3 },
  { id: 'i-017', korean: '초등학교', english: 'Elementary school', category: '장소', difficulty: 4 },
  { id: 'i-018', korean: '중학교', english: 'Middle school', category: '장소', difficulty: 3 },
  { id: 'i-019', korean: '고등학교', english: 'High school', category: '장소', difficulty: 4 },
  { id: 'i-020', korean: '유치원', english: 'Kindergarten', category: '장소', difficulty: 3 },

  // Level 3 - Food/Restaurants (음식/식당)
  { id: 'i-021', korean: '냉장고', english: 'Refrigerator', category: '음식', difficulty: 3 },
  { id: 'i-022', korean: '전자레인지', english: 'Microwave', category: '음식', difficulty: 4 },
  { id: 'i-023', korean: '식당', english: 'Restaurant', category: '음식', difficulty: 3 },
  { id: 'i-024', korean: '음식점', english: 'Eatery', category: '음식', difficulty: 3 },
  { id: 'i-025', korean: '커피숍', english: 'Coffee shop', category: '음식', difficulty: 3 },
  { id: 'i-026', korean: '빵집', english: 'Bakery', category: '음식', difficulty: 3 },
  { id: 'i-027', korean: '고깃집', english: 'Meat restaurant', category: '음식', difficulty: 3 },
  { id: 'i-028', korean: '분식집', english: 'Snack bar', category: '음식', difficulty: 3 },
  { id: 'i-029', korean: '치킨집', english: 'Chicken restaurant', category: '음식', difficulty: 3 },
  { id: 'i-030', korean: '피자집', english: 'Pizza restaurant', category: '음식', difficulty: 3 },

  // Level 4 - Electronics/Appliances (가전제품)
  { id: 'i-031', korean: '텔레비전', english: 'Television', category: '물건', difficulty: 4 },
  { id: 'i-032', korean: '냉장고', english: 'Refrigerator', category: '물건', difficulty: 3 },
  { id: 'i-033', korean: '세탁기', english: 'Washing machine', category: '물건', difficulty: 3 },
  { id: 'i-034', korean: '에어컨', english: 'Air conditioner', category: '물건', difficulty: 3 },
  { id: 'i-035', korean: '선풍기', english: 'Electric fan', category: '물건', difficulty: 3 },
  { id: 'i-036', korean: '전자레인지', english: 'Microwave oven', category: '물건', difficulty: 4 },
  { id: 'i-037', korean: '청소기', english: 'Vacuum cleaner', category: '물건', difficulty: 3 },
  { id: 'i-038', korean: '컴퓨터', english: 'Computer', category: '물건', difficulty: 3 },
  { id: 'i-039', korean: '노트북', english: 'Laptop', category: '물건', difficulty: 3 },
  { id: 'i-040', korean: '스마트폰', english: 'Smartphone', category: '물건', difficulty: 4 },

  // Level 5 - Transportation (교통)
  { id: 'i-041', korean: '자동차', english: 'Car', category: '교통', difficulty: 3 },
  { id: 'i-042', korean: '비행기', english: 'Airplane', category: '교통', difficulty: 3 },
  { id: 'i-043', korean: '자전거', english: 'Bicycle', category: '교통', difficulty: 3 },
  { id: 'i-044', korean: '오토바이', english: 'Motorcycle', category: '교통', difficulty: 4 },
  { id: 'i-045', korean: '고속버스', english: 'Express bus', category: '교통', difficulty: 4 },
  { id: 'i-046', korean: '택시', english: 'Taxi', category: '교통', difficulty: 3 },
  { id: 'i-047', korean: '기차', english: 'Train', category: '교통', difficulty: 3 },
  { id: 'i-048', korean: '지하철역', english: 'Subway station', category: '교통', difficulty: 4 },
  { id: 'i-049', korean: '버스정류장', english: 'Bus stop', category: '교통', difficulty: 4 },
  { id: 'i-050', korean: '공항', english: 'Airport', category: '교통', difficulty: 3 },

  // Level 6 - Occupations (직업)
  { id: 'i-051', korean: '의사', english: 'Doctor', category: '직업', difficulty: 3 },
  { id: 'i-052', korean: '간호사', english: 'Nurse', category: '직업', difficulty: 3 },
  { id: 'i-053', korean: '선생님', english: 'Teacher', category: '직업', difficulty: 3 },
  { id: 'i-054', korean: '경찰관', english: 'Police officer', category: '직업', difficulty: 3 },
  { id: 'i-055', korean: '소방관', english: 'Firefighter', category: '직업', difficulty: 3 },
  { id: 'i-056', korean: '요리사', english: 'Chef', category: '직업', difficulty: 3 },
  { id: 'i-057', korean: '운전사', english: 'Driver', category: '직업', difficulty: 3 },
  { id: 'i-058', korean: '회사원', english: 'Office worker', category: '직업', difficulty: 3 },
  { id: 'i-059', korean: '학생', english: 'Student', category: '직업', difficulty: 3 },
  { id: 'i-060', korean: '가수', english: 'Singer', category: '직업', difficulty: 3 },

  // Level 7 - Animals/Nature (동물/자연)
  { id: 'i-061', korean: '강아지', english: 'Puppy', category: '동물', difficulty: 3 },
  { id: 'i-062', korean: '고양이', english: 'Cat', category: '동물', difficulty: 3 },
  { id: 'i-063', korean: '햄스터', english: 'Hamster', category: '동물', difficulty: 3 },
  { id: 'i-064', korean: '앵무새', english: 'Parrot', category: '동물', difficulty: 3 },
  { id: 'i-065', korean: '금붕어', english: 'Goldfish', category: '동물', difficulty: 3 },
  { id: 'i-066', korean: '거북이', english: 'Turtle', category: '동물', difficulty: 3 },
  { id: 'i-067', korean: '코끼리', english: 'Elephant', category: '동물', difficulty: 3 },
  { id: 'i-068', korean: '기린', english: 'Giraffe', category: '동물', difficulty: 3 },
  { id: 'i-069', korean: '사자', english: 'Lion', category: '동물', difficulty: 3 },
  { id: 'i-070', korean: '원숭이', english: 'Monkey', category: '동물', difficulty: 3 },

  // Level 8 - School/Study (학교/공부)
  { id: 'i-071', korean: '교실', english: 'Classroom', category: '학교', difficulty: 3 },
  { id: 'i-072', korean: '운동장', english: 'Playground', category: '학교', difficulty: 3 },
  { id: 'i-073', korean: '급식실', english: 'Cafeteria', category: '학교', difficulty: 3 },
  { id: 'i-074', korean: '도서실', english: 'Library room', category: '학교', difficulty: 3 },
  { id: 'i-075', korean: '음악실', english: 'Music room', category: '학교', difficulty: 3 },
  { id: 'i-076', korean: '미술실', english: 'Art room', category: '학교', difficulty: 3 },
  { id: 'i-077', korean: '과학실', english: 'Science lab', category: '학교', difficulty: 3 },
  { id: 'i-078', korean: '컴퓨터실', english: 'Computer room', category: '학교', difficulty: 4 },
  { id: 'i-079', korean: '체육관', english: 'Gymnasium', category: '학교', difficulty: 3 },
  { id: 'i-080', korean: '강당', english: 'Auditorium', category: '학교', difficulty: 3 },

  // Level 9 - Hobbies/Activities (취미/활동)
  { id: 'i-081', korean: '수영하기', english: 'Swimming', category: '취미', difficulty: 4 },
  { id: 'i-082', korean: '축구하기', english: 'Playing soccer', category: '취미', difficulty: 4 },
  { id: 'i-083', korean: '야구하기', english: 'Playing baseball', category: '취미', difficulty: 4 },
  { id: 'i-084', korean: '농구하기', english: 'Playing basketball', category: '취미', difficulty: 4 },
  { id: 'i-085', korean: '배드민턴', english: 'Badminton', category: '취미', difficulty: 4 },
  { id: 'i-086', korean: '탁구치기', english: 'Playing table tennis', category: '취미', difficulty: 4 },
  { id: 'i-087', korean: '골프치기', english: 'Playing golf', category: '취미', difficulty: 4 },
  { id: 'i-088', korean: '스키타기', english: 'Skiing', category: '취미', difficulty: 4 },
  { id: 'i-089', korean: '등산하기', english: 'Hiking', category: '취미', difficulty: 4 },
  { id: 'i-090', korean: '낚시하기', english: 'Fishing', category: '취미', difficulty: 4 },

  // Level 10 - Daily Life (일상생활)
  { id: 'i-091', korean: '아파트', english: 'Apartment', category: '일상', difficulty: 3 },
  { id: 'i-092', korean: '엘리베이터', english: 'Elevator', category: '일상', difficulty: 4 },
  { id: 'i-093', korean: '에스컬레이터', english: 'Escalator', category: '일상', difficulty: 4 },
  { id: 'i-094', korean: '계단', english: 'Stairs', category: '일상', difficulty: 3 },
  { id: 'i-095', korean: '주방', english: 'Kitchen', category: '일상', difficulty: 3 },
  { id: 'i-096', korean: '거실', english: 'Living room', category: '일상', difficulty: 3 },
  { id: 'i-097', korean: '침실', english: 'Bedroom', category: '일상', difficulty: 3 },
  { id: 'i-098', korean: '욕실', english: 'Bathroom', category: '일상', difficulty: 3 },
  { id: 'i-099', korean: '화장실', english: 'Toilet', category: '일상', difficulty: 3 },
  { id: 'i-100', korean: '베란다', english: 'Balcony', category: '일상', difficulty: 3 },
];

// Generate levels (10 levels, 10 words each)
export const intermediateLevels: PuzzleLevel[] = Array.from({ length: 10 }, (_, i) => ({
  id: `int-${String(i + 1).padStart(2, '0')}`,
  levelNumber: i + 1,
  difficultyLevel: 'intermediate' as const,
  title: `Level ${i + 1}`,
  words: intermediateWords.slice(i * 10, (i + 1) * 10),
  xpReward: 200 + i * 20,
  isPremium: i >= 3, // First 3 levels are free
}));

export const intermediateCategory: PuzzleCategory = {
  id: 'intermediate',
  name: 'Intermediate',
  nameKey: 'puzzle.category.intermediate',
  description: 'Build 3-4 syllable Korean words for intermediate learners',
  descriptionKey: 'puzzle.category.intermediateDesc',
  icon: '📚',
  color: 'from-blue-400 to-indigo-500',
  totalWords: 100,
  totalLevels: 10,
  levels: intermediateLevels,
  isPremium: false,
  freeLevels: 3,
  syllableRange: '3-4',
};
