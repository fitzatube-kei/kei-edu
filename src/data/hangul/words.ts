import { HangulWord, QuizQuestion, MatchingPair, MultilingualQuizQuestion, MultilingualMatchingPair, MultilingualText } from '@/types';

export const basicWords: HangulWord[] = [
  { word: '사랑', meaning: 'love', romanization: 'sarang', category: 'emotion' },
  { word: '가족', meaning: 'family', romanization: 'gajok', category: 'family' },
  { word: '친구', meaning: 'friend', romanization: 'chingu', category: 'relationship' },
  { word: '학교', meaning: 'school', romanization: 'hakgyo', category: 'place' },
  { word: '음식', meaning: 'food', romanization: 'eumsik', category: 'food' },
  { word: '물', meaning: 'water', romanization: 'mul', category: 'nature' },
  { word: '하늘', meaning: 'sky', romanization: 'haneul', category: 'nature' },
  { word: '꽃', meaning: 'flower', romanization: 'kkot', category: 'nature' },
  { word: '책', meaning: 'book', romanization: 'chaek', category: 'object' },
  { word: '집', meaning: 'house', romanization: 'jip', category: 'place' },
];

export const familyWords: HangulWord[] = [
  { word: '아버지', meaning: 'father', romanization: 'abeoji', category: 'family' },
  { word: '어머니', meaning: 'mother', romanization: 'eomeoni', category: 'family' },
  { word: '형', meaning: 'older brother (for males)', romanization: 'hyeong', category: 'family' },
  { word: '누나', meaning: 'older sister (for males)', romanization: 'nuna', category: 'family' },
  { word: '오빠', meaning: 'older brother (for females)', romanization: 'oppa', category: 'family' },
  { word: '언니', meaning: 'older sister (for females)', romanization: 'eonni', category: 'family' },
  { word: '동생', meaning: 'younger sibling', romanization: 'dongsaeng', category: 'family' },
  { word: '할아버지', meaning: 'grandfather', romanization: 'harabeoji', category: 'family' },
  { word: '할머니', meaning: 'grandmother', romanization: 'halmeoni', category: 'family' },
];

export const numberWords: HangulWord[] = [
  { word: '하나', meaning: 'one', romanization: 'hana', category: 'number' },
  { word: '둘', meaning: 'two', romanization: 'dul', category: 'number' },
  { word: '셋', meaning: 'three', romanization: 'set', category: 'number' },
  { word: '넷', meaning: 'four', romanization: 'net', category: 'number' },
  { word: '다섯', meaning: 'five', romanization: 'daseot', category: 'number' },
  { word: '여섯', meaning: 'six', romanization: 'yeoseot', category: 'number' },
  { word: '일곱', meaning: 'seven', romanization: 'ilgop', category: 'number' },
  { word: '여덟', meaning: 'eight', romanization: 'yeodeol', category: 'number' },
  { word: '아홉', meaning: 'nine', romanization: 'ahop', category: 'number' },
  { word: '열', meaning: 'ten', romanization: 'yeol', category: 'number' },
];

export const greetingWords: HangulWord[] = [
  { word: '안녕하세요', meaning: 'hello (formal)', romanization: 'annyeonghaseyo', category: 'greeting' },
  { word: '감사합니다', meaning: 'thank you', romanization: 'gamsahamnida', category: 'greeting' },
  { word: '죄송합니다', meaning: 'sorry', romanization: 'joesonghamnida', category: 'greeting' },
  { word: '네', meaning: 'yes', romanization: 'ne', category: 'greeting' },
  { word: '아니요', meaning: 'no', romanization: 'aniyo', category: 'greeting' },
  { word: '안녕히 가세요', meaning: 'goodbye (to one leaving)', romanization: 'annyeonghi gaseyo', category: 'greeting' },
  { word: '안녕히 계세요', meaning: 'goodbye (to one staying)', romanization: 'annyeonghi gyeseyo', category: 'greeting' },
];

export const wordQuizQuestions: QuizQuestion[] = [
  {
    id: 'w1',
    question: '"사랑"의 뜻은?',
    options: ['family', 'love', 'friend', 'school'],
    correctAnswer: 1,
    explanation: '"사랑"은 영어로 "love"입니다.',
  },
  {
    id: 'w2',
    question: '"가족"을 로마자로 표기하면?',
    options: ['gajok', 'chingu', 'hakgyo', 'sarang'],
    correctAnswer: 0,
    explanation: '"가족"은 "gajok"으로 표기합니다.',
  },
  {
    id: 'w3',
    question: '"friend"를 한국어로 하면?',
    options: ['학교', '가족', '친구', '사랑'],
    correctAnswer: 2,
    explanation: '"friend"는 한국어로 "친구"입니다.',
  },
  {
    id: 'w4',
    question: '"하나"는 무슨 뜻일까요?',
    options: ['sky', 'one', 'water', 'flower'],
    correctAnswer: 1,
    explanation: '"하나"는 숫자 "1(one)"을 의미합니다.',
  },
  {
    id: 'w5',
    question: '"안녕하세요"는 언제 사용할까요?',
    options: ['감사할 때', '사과할 때', '인사할 때', '작별할 때'],
    correctAnswer: 2,
    explanation: '"안녕하세요"는 인사할 때 사용하는 표현입니다.',
  },
  {
    id: 'w6',
    question: '남자가 손위 여자 형제를 부르는 말은?',
    options: ['언니', '누나', '오빠', '형'],
    correctAnswer: 1,
    explanation: '남자가 손위 여자 형제를 부를 때는 "누나"라고 합니다.',
  },
  {
    id: 'w7',
    question: '"책"의 영어 뜻은?',
    options: ['house', 'water', 'book', 'sky'],
    correctAnswer: 2,
    explanation: '"책"은 영어로 "book"입니다.',
  },
  {
    id: 'w8',
    question: '숫자 "5"를 한국어로 하면?',
    options: ['셋', '넷', '다섯', '여섯'],
    correctAnswer: 2,
    explanation: '"5"는 한국어로 "다섯"입니다.',
  },
];

export const wordMatchingPairs: MatchingPair[] = [
  { id: 'wm1', left: '사랑', right: 'love' },
  { id: 'wm2', left: '가족', right: 'family' },
  { id: 'wm3', left: '친구', right: 'friend' },
  { id: 'wm4', left: '학교', right: 'school' },
  { id: 'wm5', left: '책', right: 'book' },
  { id: 'wm6', left: '물', right: 'water' },
];

// ============================================
// Multilingual Word Translations
// ============================================

export const wordTranslationsData: Record<string, { korean: string; romanization: string; translations: MultilingualText }> = {
  // Basic words
  love: {
    korean: '사랑',
    romanization: 'sarang',
    translations: { en: 'Love', ja: '愛', es: 'Amor', th: 'ความรัก', vi: 'Tình yêu', zh: '爱' },
  },
  family: {
    korean: '가족',
    romanization: 'gajok',
    translations: { en: 'Family', ja: '家族', es: 'Familia', th: 'ครอบครัว', vi: 'Gia đình', zh: '家庭' },
  },
  friend: {
    korean: '친구',
    romanization: 'chingu',
    translations: { en: 'Friend', ja: '友達', es: 'Amigo', th: 'เพื่อน', vi: 'Bạn bè', zh: '朋友' },
  },
  school: {
    korean: '학교',
    romanization: 'hakgyo',
    translations: { en: 'School', ja: '学校', es: 'Escuela', th: 'โรงเรียน', vi: 'Trường học', zh: '学校' },
  },
  book: {
    korean: '책',
    romanization: 'chaek',
    translations: { en: 'Book', ja: '本', es: 'Libro', th: 'หนังสือ', vi: 'Sách', zh: '书' },
  },
  water: {
    korean: '물',
    romanization: 'mul',
    translations: { en: 'Water', ja: '水', es: 'Agua', th: 'น้ำ', vi: 'Nước', zh: '水' },
  },
  sky: {
    korean: '하늘',
    romanization: 'haneul',
    translations: { en: 'Sky', ja: '空', es: 'Cielo', th: 'ท้องฟ้า', vi: 'Bầu trời', zh: '天空' },
  },
  flower: {
    korean: '꽃',
    romanization: 'kkot',
    translations: { en: 'Flower', ja: '花', es: 'Flor', th: 'ดอกไม้', vi: 'Hoa', zh: '花' },
  },
  house: {
    korean: '집',
    romanization: 'jip',
    translations: { en: 'House', ja: '家', es: 'Casa', th: 'บ้าน', vi: 'Nhà', zh: '房子' },
  },
  // Family words
  father: {
    korean: '아버지',
    romanization: 'abeoji',
    translations: { en: 'Father', ja: '父', es: 'Padre', th: 'พ่อ', vi: 'Bố', zh: '父亲' },
  },
  mother: {
    korean: '어머니',
    romanization: 'eomeoni',
    translations: { en: 'Mother', ja: '母', es: 'Madre', th: 'แม่', vi: 'Mẹ', zh: '母亲' },
  },
  olderBrotherM: {
    korean: '형',
    romanization: 'hyeong',
    translations: { en: 'Older brother (for males)', ja: '兄（男性から）', es: 'Hermano mayor (para hombres)', th: 'พี่ชาย (สำหรับผู้ชาย)', vi: 'Anh trai (nam gọi)', zh: '哥哥（男性用）' },
  },
  olderSisterM: {
    korean: '누나',
    romanization: 'nuna',
    translations: { en: 'Older sister (for males)', ja: '姉（男性から）', es: 'Hermana mayor (para hombres)', th: 'พี่สาว (สำหรับผู้ชาย)', vi: 'Chị gái (nam gọi)', zh: '姐姐（男性用）' },
  },
  olderBrotherF: {
    korean: '오빠',
    romanization: 'oppa',
    translations: { en: 'Older brother (for females)', ja: '兄（女性から）', es: 'Hermano mayor (para mujeres)', th: 'พี่ชาย (สำหรับผู้หญิง)', vi: 'Anh trai (nữ gọi)', zh: '哥哥（女性用）' },
  },
  olderSisterF: {
    korean: '언니',
    romanization: 'eonni',
    translations: { en: 'Older sister (for females)', ja: '姉（女性から）', es: 'Hermana mayor (para mujeres)', th: 'พี่สาว (สำหรับผู้หญิง)', vi: 'Chị gái (nữ gọi)', zh: '姐姐（女性用）' },
  },
  youngerSibling: {
    korean: '동생',
    romanization: 'dongsaeng',
    translations: { en: 'Younger sibling', ja: '弟/妹', es: 'Hermano/a menor', th: 'น้อง', vi: 'Em', zh: '弟弟/妹妹' },
  },
  grandfather: {
    korean: '할아버지',
    romanization: 'harabeoji',
    translations: { en: 'Grandfather', ja: '祖父', es: 'Abuelo', th: 'ปู่/ตา', vi: 'Ông', zh: '爷爷' },
  },
  grandmother: {
    korean: '할머니',
    romanization: 'halmeoni',
    translations: { en: 'Grandmother', ja: '祖母', es: 'Abuela', th: 'ย่า/ยาย', vi: 'Bà', zh: '奶奶' },
  },
  // Number words
  one: {
    korean: '하나',
    romanization: 'hana',
    translations: { en: 'One', ja: '一つ', es: 'Uno', th: 'หนึ่ง', vi: 'Một', zh: '一' },
  },
  two: {
    korean: '둘',
    romanization: 'dul',
    translations: { en: 'Two', ja: '二つ', es: 'Dos', th: 'สอง', vi: 'Hai', zh: '二' },
  },
  three: {
    korean: '셋',
    romanization: 'set',
    translations: { en: 'Three', ja: '三つ', es: 'Tres', th: 'สาม', vi: 'Ba', zh: '三' },
  },
  four: {
    korean: '넷',
    romanization: 'net',
    translations: { en: 'Four', ja: '四つ', es: 'Cuatro', th: 'สี่', vi: 'Bốn', zh: '四' },
  },
  five: {
    korean: '다섯',
    romanization: 'daseot',
    translations: { en: 'Five', ja: '五つ', es: 'Cinco', th: 'ห้า', vi: 'Năm', zh: '五' },
  },
  // Greeting words
  hello: {
    korean: '안녕하세요',
    romanization: 'annyeonghaseyo',
    translations: { en: 'Hello (formal)', ja: 'こんにちは', es: 'Hola (formal)', th: 'สวัสดี (ทางการ)', vi: 'Xin chào (trang trọng)', zh: '您好' },
  },
  thankYou: {
    korean: '감사합니다',
    romanization: 'gamsahamnida',
    translations: { en: 'Thank you', ja: 'ありがとうございます', es: 'Gracias', th: 'ขอบคุณ', vi: 'Cảm ơn', zh: '谢谢' },
  },
  sorry: {
    korean: '죄송합니다',
    romanization: 'joesonghamnida',
    translations: { en: 'Sorry', ja: 'すみません', es: 'Lo siento', th: 'ขอโทษ', vi: 'Xin lỗi', zh: '对不起' },
  },
  yes: {
    korean: '네',
    romanization: 'ne',
    translations: { en: 'Yes', ja: 'はい', es: 'Sí', th: 'ใช่', vi: 'Vâng', zh: '是' },
  },
  no: {
    korean: '아니요',
    romanization: 'aniyo',
    translations: { en: 'No', ja: 'いいえ', es: 'No', th: 'ไม่', vi: 'Không', zh: '不是' },
  },
};

// Usage context translations
export const usageContextTranslations: Record<string, MultilingualText> = {
  'greeting': { en: 'When greeting', ja: '挨拶する時', es: 'Al saludar', th: 'เมื่อทักทาย', vi: 'Khi chào hỏi', zh: '打招呼时' },
  'thanking': { en: 'When thanking', ja: '感謝する時', es: 'Al agradecer', th: 'เมื่อขอบคุณ', vi: 'Khi cảm ơn', zh: '感谢时' },
  'apologizing': { en: 'When apologizing', ja: '謝る時', es: 'Al disculparse', th: 'เมื่อขอโทษ', vi: 'Khi xin lỗi', zh: '道歉时' },
  'farewell': { en: 'When saying goodbye', ja: '別れる時', es: 'Al despedirse', th: 'เมื่อบอกลา', vi: 'Khi tạm biệt', zh: '告别时' },
};

// ============================================
// Multilingual Quiz Questions for Level 8 (Basic Words)
// ============================================
export const multilingualBasicWordQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mbw1',
    templateKey: 'wordMeaning',
    word: wordTranslationsData.love,
    options: ['family', 'love', 'friend', 'school'],
    correctAnswer: 1,
  },
  {
    id: 'mbw2',
    templateKey: 'wordRoman',
    word: wordTranslationsData.family,
    options: ['gajok', 'chingu', 'hakgyo', 'sarang'],
    correctAnswer: 0,
  },
  {
    id: 'mbw3',
    templateKey: 'meaningToKorean',
    word: wordTranslationsData.friend,
    options: ['학교', '가족', '친구', '사랑'],
    correctAnswer: 2,
  },
  {
    id: 'mbw4',
    templateKey: 'wordMeaning',
    word: wordTranslationsData.book,
    options: ['house', 'water', 'book', 'sky'],
    correctAnswer: 2,
  },
];

// ============================================
// Multilingual Quiz Questions for Level 9 (Family & Numbers)
// ============================================
export const multilingualFamilyNumberQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mfn1',
    templateKey: 'numberMeaning',
    word: wordTranslationsData.one,
    options: ['sky', 'one', 'water', 'flower'],
    correctAnswer: 1,
  },
  {
    id: 'mfn2',
    templateKey: 'familyTerm',
    word: wordTranslationsData.olderSisterM,
    options: ['언니', '누나', '오빠', '형'],
    correctAnswer: 1,
  },
  {
    id: 'mfn3',
    templateKey: 'meaningToKorean',
    word: wordTranslationsData.five,
    options: ['셋', '넷', '다섯', '여섯'],
    correctAnswer: 2,
  },
  {
    id: 'mfn4',
    templateKey: 'wordMeaning',
    word: wordTranslationsData.father,
    options: ['mother', 'father', 'grandfather', 'grandmother'],
    correctAnswer: 1,
  },
];

// ============================================
// Multilingual Quiz Questions for Level 10 (Greetings)
// ============================================
export const multilingualGreetingQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mgr1',
    templateKey: 'whenToUse',
    word: wordTranslationsData.hello,
    options: ['thanking', 'apologizing', 'greeting', 'farewell'],
    correctAnswer: 2,
  },
  {
    id: 'mgr2',
    templateKey: 'wordMeaning',
    word: wordTranslationsData.thankYou,
    options: ['hello', 'thank you', 'sorry', 'goodbye'],
    correctAnswer: 1,
  },
  {
    id: 'mgr3',
    templateKey: 'meaningToKorean',
    word: wordTranslationsData.sorry,
    options: ['안녕하세요', '감사합니다', '죄송합니다', '네'],
    correctAnswer: 2,
  },
  {
    id: 'mgr4',
    templateKey: 'wordMeaning',
    word: wordTranslationsData.yes,
    options: ['yes', 'no', 'hello', 'sorry'],
    correctAnswer: 0,
  },
];

// ============================================
// Multilingual Matching Pairs for Words
// ============================================
export const multilingualWordMatching: MultilingualMatchingPair[] = [
  {
    id: 'mwm1',
    left: '사랑',
    right: { en: 'love', ja: '愛', es: 'amor', th: 'ความรัก', vi: 'tình yêu', zh: '爱' },
    type: 'word',
    romanization: 'sarang',
  },
  {
    id: 'mwm2',
    left: '가족',
    right: { en: 'family', ja: '家族', es: 'familia', th: 'ครอบครัว', vi: 'gia đình', zh: '家庭' },
    type: 'word',
    romanization: 'gajok',
  },
  {
    id: 'mwm3',
    left: '친구',
    right: { en: 'friend', ja: '友達', es: 'amigo', th: 'เพื่อน', vi: 'bạn bè', zh: '朋友' },
    type: 'word',
    romanization: 'chingu',
  },
  {
    id: 'mwm4',
    left: '학교',
    right: { en: 'school', ja: '学校', es: 'escuela', th: 'โรงเรียน', vi: 'trường học', zh: '学校' },
    type: 'word',
    romanization: 'hakgyo',
  },
  {
    id: 'mwm5',
    left: '책',
    right: { en: 'book', ja: '本', es: 'libro', th: 'หนังสือ', vi: 'sách', zh: '书' },
    type: 'word',
    romanization: 'chaek',
  },
  {
    id: 'mwm6',
    left: '물',
    right: { en: 'water', ja: '水', es: 'agua', th: 'น้ำ', vi: 'nước', zh: '水' },
    type: 'word',
    romanization: 'mul',
  },
];

export const multilingualFamilyMatching: MultilingualMatchingPair[] = [
  {
    id: 'mfm1',
    left: '아버지',
    right: { en: 'father', ja: '父', es: 'padre', th: 'พ่อ', vi: 'bố', zh: '父亲' },
    type: 'word',
    romanization: 'abeoji',
  },
  {
    id: 'mfm2',
    left: '어머니',
    right: { en: 'mother', ja: '母', es: 'madre', th: 'แม่', vi: 'mẹ', zh: '母亲' },
    type: 'word',
    romanization: 'eomeoni',
  },
  {
    id: 'mfm3',
    left: '형',
    right: { en: 'older brother (m)', ja: '兄（男性から）', es: 'hermano mayor (m)', th: 'พี่ชาย (ช)', vi: 'anh (nam)', zh: '哥哥（男用）' },
    type: 'word',
    romanization: 'hyeong',
  },
  {
    id: 'mfm4',
    left: '누나',
    right: { en: 'older sister (m)', ja: '姉（男性から）', es: 'hermana mayor (m)', th: 'พี่สาว (ช)', vi: 'chị (nam)', zh: '姐姐（男用）' },
    type: 'word',
    romanization: 'nuna',
  },
  {
    id: 'mfm5',
    left: '하나',
    right: { en: 'one (1)', ja: '一つ', es: 'uno', th: 'หนึ่ง', vi: 'một', zh: '一' },
    type: 'word',
    romanization: 'hana',
  },
  {
    id: 'mfm6',
    left: '둘',
    right: { en: 'two (2)', ja: '二つ', es: 'dos', th: 'สอง', vi: 'hai', zh: '二' },
    type: 'word',
    romanization: 'dul',
  },
];

export const multilingualGreetingMatching: MultilingualMatchingPair[] = [
  {
    id: 'mgm1',
    left: '안녕하세요',
    right: { en: 'hello', ja: 'こんにちは', es: 'hola', th: 'สวัสดี', vi: 'xin chào', zh: '你好' },
    type: 'word',
    romanization: 'annyeonghaseyo',
  },
  {
    id: 'mgm2',
    left: '감사합니다',
    right: { en: 'thank you', ja: 'ありがとう', es: 'gracias', th: 'ขอบคุณ', vi: 'cảm ơn', zh: '谢谢' },
    type: 'word',
    romanization: 'gamsahamnida',
  },
  {
    id: 'mgm3',
    left: '죄송합니다',
    right: { en: 'sorry', ja: 'すみません', es: 'lo siento', th: 'ขอโทษ', vi: 'xin lỗi', zh: '对不起' },
    type: 'word',
    romanization: 'joesonghamnida',
  },
  {
    id: 'mgm4',
    left: '네',
    right: { en: 'yes', ja: 'はい', es: 'sí', th: 'ใช่', vi: 'vâng', zh: '是' },
    type: 'word',
    romanization: 'ne',
  },
  {
    id: 'mgm5',
    left: '아니요',
    right: { en: 'no', ja: 'いいえ', es: 'no', th: 'ไม่', vi: 'không', zh: '不是' },
    type: 'word',
    romanization: 'aniyo',
  },
];
