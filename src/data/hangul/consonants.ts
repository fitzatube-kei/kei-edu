import { HangulCharacter, QuizQuestion, MatchingPair, MultilingualQuizQuestion, MultilingualText, MultilingualMatchingPair } from '@/types';

// ============================================
// Multilingual consonant name mappings
// Used for quiz options in different languages
// ============================================
export const consonantNameTranslations: Record<string, MultilingualText> = {
  // Basic consonants
  '기역': { en: 'giyeok', ja: 'ギヨク', es: 'giyeok', th: 'กียอก', vi: 'giyeok', zh: 'giyeok' },
  '니은': { en: 'nieun', ja: 'ニウン', es: 'nieun', th: 'นีอึน', vi: 'nieun', zh: 'nieun' },
  '디귿': { en: 'digeut', ja: 'ディグッ', es: 'digeut', th: 'ดีกึด', vi: 'digeut', zh: 'digeut' },
  '리을': { en: 'rieul', ja: 'リウル', es: 'rieul', th: 'รีอึล', vi: 'rieul', zh: 'rieul' },
  '미음': { en: 'mieum', ja: 'ミウム', es: 'mieum', th: 'มีอึม', vi: 'mieum', zh: 'mieum' },
  '비읍': { en: 'bieup', ja: 'ビウプ', es: 'bieup', th: 'บีอึบ', vi: 'bieup', zh: 'bieup' },
  '시옷': { en: 'siot', ja: 'シオッ', es: 'siot', th: 'ซีออด', vi: 'siot', zh: 'siot' },
  '이응': { en: 'ieung', ja: 'イウン', es: 'ieung', th: 'อีอึง', vi: 'ieung', zh: 'ieung' },
  '지읒': { en: 'jieut', ja: 'チウッ', es: 'jieut', th: 'จีอึด', vi: 'jieut', zh: 'jieut' },
  '치읓': { en: 'chieut', ja: 'チウッ', es: 'chieut', th: 'ชีอึด', vi: 'chieut', zh: 'chieut' },
  '키읔': { en: 'kieuk', ja: 'キウク', es: 'kieuk', th: 'คีอึก', vi: 'kieuk', zh: 'kieuk' },
  '티읕': { en: 'tieut', ja: 'ティウッ', es: 'tieut', th: 'ทีอึด', vi: 'tieut', zh: 'tieut' },
  '피읖': { en: 'pieup', ja: 'ピウプ', es: 'pieup', th: 'พีอึบ', vi: 'pieup', zh: 'pieup' },
  '히읗': { en: 'hieut', ja: 'ヒウッ', es: 'hieut', th: 'ฮีอึด', vi: 'hieut', zh: 'hieut' },
  // Double consonants
  '쌍기역': { en: 'ssang-giyeok', ja: 'サンギヨク', es: 'ssang-giyeok', th: 'ซังกียอก', vi: 'ssang-giyeok', zh: 'ssang-giyeok' },
  '쌍디귿': { en: 'ssang-digeut', ja: 'サンディグッ', es: 'ssang-digeut', th: 'ซังดีกึด', vi: 'ssang-digeut', zh: 'ssang-digeut' },
  '쌍비읍': { en: 'ssang-bieup', ja: 'サンビウプ', es: 'ssang-bieup', th: 'ซังบีอึบ', vi: 'ssang-bieup', zh: 'ssang-bieup' },
  '쌍시옷': { en: 'ssang-siot', ja: 'サンシオッ', es: 'ssang-siot', th: 'ซังซีออด', vi: 'ssang-siot', zh: 'ssang-siot' },
  '쌍지읒': { en: 'ssang-jieut', ja: 'サンチウッ', es: 'ssang-jieut', th: 'ซังจีอึด', vi: 'ssang-jieut', zh: 'ssang-jieut' },
};

// Multilingual word data for quiz questions
export const wordTranslations: Record<string, { korean: string; romanization: string; translations: MultilingualText }> = {
  bag: {
    korean: '가방',
    romanization: 'gabang',
    translations: {
      en: 'Bag',
      ja: 'かばん',
      es: 'Bolsa',
      th: 'กระเป๋า',
      vi: 'Túi xách',
      zh: '包',
    },
  },
  tree: {
    korean: '나무',
    romanization: 'namu',
    translations: {
      en: 'Tree',
      ja: '木',
      es: 'Árbol',
      th: 'ต้นไม้',
      vi: 'Cây',
      zh: '树',
    },
  },
  leg: {
    korean: '다리',
    romanization: 'dari',
    translations: {
      en: 'Leg/Bridge',
      ja: '脚/橋',
      es: 'Pierna/Puente',
      th: 'ขา/สะพาน',
      vi: 'Chân/Cầu',
      zh: '腿/桥',
    },
  },
  ramen: {
    korean: '라면',
    romanization: 'ramyeon',
    translations: {
      en: 'Ramen',
      ja: 'ラーメン',
      es: 'Ramen',
      th: 'ราเมน',
      vi: 'Mì ramen',
      zh: '拉面',
    },
  },
  heart: {
    korean: '마음',
    romanization: 'maeum',
    translations: {
      en: 'Heart',
      ja: '心',
      es: 'Corazón',
      th: 'หัวใจ',
      vi: 'Trái tim',
      zh: '心',
    },
  },
  sea: {
    korean: '바다',
    romanization: 'bada',
    translations: {
      en: 'Sea',
      ja: '海',
      es: 'Mar',
      th: 'ทะเล',
      vi: 'Biển',
      zh: '海',
    },
  },
  apple: {
    korean: '사과',
    romanization: 'sagwa',
    translations: {
      en: 'Apple',
      ja: 'りんご',
      es: 'Manzana',
      th: 'แอปเปิล',
      vi: 'Táo',
      zh: '苹果',
    },
  },
  child: {
    korean: '아이',
    romanization: 'ai',
    translations: {
      en: 'Child',
      ja: '子供',
      es: 'Niño',
      th: 'เด็ก',
      vi: 'Trẻ em',
      zh: '孩子',
    },
  },
  car: {
    korean: '자동차',
    romanization: 'jadongcha',
    translations: {
      en: 'Car',
      ja: '車',
      es: 'Coche',
      th: 'รถยนต์',
      vi: 'Xe hơi',
      zh: '汽车',
    },
  },
  book: {
    korean: '책',
    romanization: 'chaek',
    translations: {
      en: 'Book',
      ja: '本',
      es: 'Libro',
      th: 'หนังสือ',
      vi: 'Sách',
      zh: '书',
    },
  },
  camera: {
    korean: '카메라',
    romanization: 'kamera',
    translations: {
      en: 'Camera',
      ja: 'カメラ',
      es: 'Cámara',
      th: 'กล้อง',
      vi: 'Máy ảnh',
      zh: '相机',
    },
  },
  tomato: {
    korean: '토마토',
    romanization: 'tomato',
    translations: {
      en: 'Tomato',
      ja: 'トマト',
      es: 'Tomate',
      th: 'มะเขือเทศ',
      vi: 'Cà chua',
      zh: '番茄',
    },
  },
  grape: {
    korean: '포도',
    romanization: 'podo',
    translations: {
      en: 'Grape',
      ja: 'ぶどう',
      es: 'Uva',
      th: 'องุ่น',
      vi: 'Nho',
      zh: '葡萄',
    },
  },
  sky: {
    korean: '하늘',
    romanization: 'haneul',
    translations: {
      en: 'Sky',
      ja: '空',
      es: 'Cielo',
      th: 'ท้องฟ้า',
      vi: 'Bầu trời',
      zh: '天空',
    },
  },
  flower: {
    korean: '꽃',
    romanization: 'kkot',
    translations: {
      en: 'Flower',
      ja: '花',
      es: 'Flor',
      th: 'ดอกไม้',
      vi: 'Hoa',
      zh: '花',
    },
  },
};

export const basicConsonants: HangulCharacter[] = [
  { character: 'ㄱ', romanization: 'g/k', pronunciation: '기역', type: 'consonant', example: { word: '가방', meaning: 'bag' } },
  { character: 'ㄴ', romanization: 'n', pronunciation: '니은', type: 'consonant', example: { word: '나무', meaning: 'tree' } },
  { character: 'ㄷ', romanization: 'd/t', pronunciation: '디귿', type: 'consonant', example: { word: '다리', meaning: 'leg/bridge' } },
  { character: 'ㄹ', romanization: 'r/l', pronunciation: '리을', type: 'consonant', example: { word: '라면', meaning: 'ramen' } },
  { character: 'ㅁ', romanization: 'm', pronunciation: '미음', type: 'consonant', example: { word: '마음', meaning: 'heart' } },
  { character: 'ㅂ', romanization: 'b/p', pronunciation: '비읍', type: 'consonant', example: { word: '바다', meaning: 'sea' } },
  { character: 'ㅅ', romanization: 's', pronunciation: '시옷', type: 'consonant', example: { word: '사과', meaning: 'apple' } },
  { character: 'ㅇ', romanization: 'ng/silent', pronunciation: '이응', type: 'consonant', example: { word: '아이', meaning: 'child' } },
  { character: 'ㅈ', romanization: 'j', pronunciation: '지읒', type: 'consonant', example: { word: '자동차', meaning: 'car' } },
  { character: 'ㅊ', romanization: 'ch', pronunciation: '치읓', type: 'consonant', example: { word: '책', meaning: 'book' } },
  { character: 'ㅋ', romanization: 'k', pronunciation: '키읔', type: 'consonant', example: { word: '카메라', meaning: 'camera' } },
  { character: 'ㅌ', romanization: 't', pronunciation: '티읕', type: 'consonant', example: { word: '토마토', meaning: 'tomato' } },
  { character: 'ㅍ', romanization: 'p', pronunciation: '피읖', type: 'consonant', example: { word: '포도', meaning: 'grape' } },
  { character: 'ㅎ', romanization: 'h', pronunciation: '히읗', type: 'consonant', example: { word: '하늘', meaning: 'sky' } },
];

// NEW: Multilingual Quiz Questions for Level 1 (Basic Consonants I: ㄱ~ㅅ)
export const multilingualConsonantQuizzes1: MultilingualQuizQuestion[] = [
  {
    id: 'mc1',
    templateKey: 'pronunciationName',
    character: 'ㄱ',
    options: ['기역', '니은', '디귿', '리을'],
    correctAnswer: 0,
    explanationKey: 'pronunciationName',
  },
  {
    id: 'mc2',
    templateKey: 'firstConsonant',
    word: wordTranslations.tree,
    options: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ'],
    correctAnswer: 1,
    explanationKey: 'firstConsonant',
  },
  {
    id: 'mc3',
    templateKey: 'romanization',
    word: wordTranslations.apple,
    character: 'ㅅ',
    options: ['m', 's', 'b', 'j'],
    correctAnswer: 1,
    explanationKey: 'romanization',
  },
  {
    id: 'mc4',
    templateKey: 'pronunciationName',
    character: 'ㅁ',
    options: ['비읍', '시옷', '미음', '리을'],
    correctAnswer: 2,
    explanationKey: 'pronunciationName',
  },
];

// NEW: Multilingual Quiz Questions for Level 2 (Basic Consonants II: ㅇ~ㅎ)
export const multilingualConsonantQuizzes2: MultilingualQuizQuestion[] = [
  {
    id: 'mc5',
    templateKey: 'silentConsonant',
    character: 'ㅇ',
    options: ['ng', 'silent', 'o', 'a'],
    correctAnswer: 1,
    explanationKey: 'silentConsonant',
  },
  {
    id: 'mc6',
    templateKey: 'consonantName',
    word: wordTranslations.book,
    character: 'ㅊ',
    options: ['키읔', '치읓', '티읕', '피읖'],
    correctAnswer: 1,
    explanationKey: 'consonantName',
  },
  {
    id: 'mc7',
    templateKey: 'pronunciationName',
    character: 'ㅎ',
    options: ['피읖', '티읕', '키읔', '히읗'],
    correctAnswer: 3,
    explanationKey: 'pronunciationName',
  },
  {
    id: 'mc8',
    templateKey: 'firstConsonant',
    word: wordTranslations.car,
    options: ['ㅈ', 'ㅊ', 'ㅋ', 'ㅌ'],
    correctAnswer: 0,
    explanationKey: 'firstConsonant',
  },
];

export const doubleConsonants: HangulCharacter[] = [
  { character: 'ㄲ', romanization: 'kk', pronunciation: '쌍기역', type: 'complex-consonant', example: { word: '꽃', meaning: 'flower' } },
  { character: 'ㄸ', romanization: 'tt', pronunciation: '쌍디귿', type: 'complex-consonant', example: { word: '딸', meaning: 'daughter' } },
  { character: 'ㅃ', romanization: 'pp', pronunciation: '쌍비읍', type: 'complex-consonant', example: { word: '빵', meaning: 'bread' } },
  { character: 'ㅆ', romanization: 'ss', pronunciation: '쌍시옷', type: 'complex-consonant', example: { word: '쌀', meaning: 'rice' } },
  { character: 'ㅉ', romanization: 'jj', pronunciation: '쌍지읒', type: 'complex-consonant', example: { word: '짜장면', meaning: 'jajangmyeon' } },
];

// Additional word translations for double consonant examples
export const doubleConsonantWords: Record<string, { korean: string; romanization: string; translations: MultilingualText }> = {
  flower: {
    korean: '꽃',
    romanization: 'kkot',
    translations: {
      en: 'Flower',
      ja: '花',
      es: 'Flor',
      th: 'ดอกไม้',
      vi: 'Hoa',
      zh: '花',
    },
  },
  daughter: {
    korean: '딸',
    romanization: 'ttal',
    translations: {
      en: 'Daughter',
      ja: '娘',
      es: 'Hija',
      th: 'ลูกสาว',
      vi: 'Con gái',
      zh: '女儿',
    },
  },
  bread: {
    korean: '빵',
    romanization: 'ppang',
    translations: {
      en: 'Bread',
      ja: 'パン',
      es: 'Pan',
      th: 'ขนมปัง',
      vi: 'Bánh mì',
      zh: '面包',
    },
  },
  rice: {
    korean: '쌀',
    romanization: 'ssal',
    translations: {
      en: 'Rice',
      ja: '米',
      es: 'Arroz',
      th: 'ข้าวสาร',
      vi: 'Gạo',
      zh: '大米',
    },
  },
  jajangmyeon: {
    korean: '짜장면',
    romanization: 'jjajangmyeon',
    translations: {
      en: 'Jajangmyeon (black bean noodles)',
      ja: 'ジャージャー麺',
      es: 'Jajangmyeon (fideos con frijol negro)',
      th: 'จาจังมยอน',
      vi: 'Mì tương đen',
      zh: '炸酱面',
    },
  },
};

// NEW: Multilingual Quiz Questions for Level 5 (Double Consonants: ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)
export const multilingualDoubleConsonantQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mdc1',
    templateKey: 'notDoubleConsonant',
    options: ['ㄲ', 'ㄸ', 'ㅎ', 'ㅃ'],
    correctAnswer: 2,
  },
  {
    id: 'mdc2',
    templateKey: 'doubleConsonantInWord',
    word: doubleConsonantWords.flower,
    options: ['ㄱ', 'ㄲ', 'ㅋ', 'ㄸ'],
    correctAnswer: 1,
  },
  {
    id: 'mdc3',
    templateKey: 'pronunciationName',
    character: 'ㅆ',
    options: ['쌍기역', '쌍디귿', '쌍비읍', '쌍시옷'],
    correctAnswer: 3,
  },
  {
    id: 'mdc4',
    templateKey: 'romanization',
    character: 'ㅃ',
    options: ['bb', 'pp', 'tt', 'kk'],
    correctAnswer: 1,
  },
];

export const consonantQuizQuestions: QuizQuestion[] = [
  {
    id: 'c1',
    question: '다음 중 "ㄱ"의 발음 이름은?',
    options: ['기역', '니은', '디귿', '리을'],
    correctAnswer: 0,
    explanation: 'ㄱ은 "기역"이라고 읽습니다.',
  },
  {
    id: 'c2',
    question: '"나무"에서 첫 번째 자음은?',
    options: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ'],
    correctAnswer: 1,
    explanation: '나무의 첫 글자 "나"의 자음은 ㄴ입니다.',
  },
  {
    id: 'c3',
    question: '다음 중 쌍자음이 아닌 것은?',
    options: ['ㄲ', 'ㄸ', 'ㅎ', 'ㅃ'],
    correctAnswer: 2,
    explanation: 'ㅎ은 기본 자음입니다. ㄲ, ㄸ, ㅃ은 쌍자음입니다.',
  },
  {
    id: 'c4',
    question: '"사과"의 첫 번째 자음의 로마자 표기는?',
    options: ['m', 's', 'b', 'j'],
    correctAnswer: 1,
    explanation: '사과의 "사"에서 ㅅ은 "s"로 표기합니다.',
  },
  {
    id: 'c5',
    question: '"책"에서 사용된 자음 "ㅊ"의 이름은?',
    options: ['키읔', '치읓', '티읕', '피읖'],
    correctAnswer: 1,
    explanation: 'ㅊ은 "치읓"이라고 읽습니다.',
  },
  {
    id: 'c6',
    question: '다음 중 "ㅇ"이 첫소리일 때 발음은?',
    options: ['ng', '묵음(소리 없음)', 'o', 'a'],
    correctAnswer: 1,
    explanation: 'ㅇ이 첫소리에 오면 소리가 나지 않습니다.',
  },
  {
    id: 'c7',
    question: '"꽃"에서 사용된 자음은?',
    options: ['ㄱ', 'ㄲ', 'ㅋ', 'ㄸ'],
    correctAnswer: 1,
    explanation: '"꽃"의 첫소리는 쌍기역 ㄲ입니다.',
  },
  {
    id: 'c8',
    question: '"하늘"의 첫 번째 자음의 발음 이름은?',
    options: ['피읖', '티읕', '키읔', '히읗'],
    correctAnswer: 3,
    explanation: 'ㅎ은 "히읗"이라고 읽습니다.',
  },
];

export const consonantMatchingPairs: MatchingPair[] = [
  { id: 'm1', left: 'ㄱ', right: '기역' },
  { id: 'm2', left: 'ㄴ', right: '니은' },
  { id: 'm3', left: 'ㅁ', right: '미음' },
  { id: 'm4', left: 'ㅅ', right: '시옷' },
  { id: 'm5', left: 'ㅎ', right: '히읗' },
  { id: 'm6', left: 'ㅈ', right: '지읒' },
];

// Multilingual Matching Pairs for Level 1 (Basic Consonants I: ㄱ~ㅅ)
// Format: Korean character ↔ Name with romanization + sound
export const multilingualConsonantMatching1: MultilingualMatchingPair[] = [
  {
    id: 'mcm1',
    left: 'ㄱ',
    right: {
      en: 'giyeok (g/k)',
      ja: 'キヨク (g/k)',
      es: 'giyeok (g/k)',
      th: 'กียอก (g/k)',
      vi: 'giyeok (g/k)',
      zh: 'giyeok (g/k)',
    },
    type: 'consonant-name',
    romanization: 'g/k',
  },
  {
    id: 'mcm2',
    left: 'ㄴ',
    right: {
      en: 'nieun (n)',
      ja: 'ニウン (n)',
      es: 'nieun (n)',
      th: 'นีอึน (n)',
      vi: 'nieun (n)',
      zh: 'nieun (n)',
    },
    type: 'consonant-name',
    romanization: 'n',
  },
  {
    id: 'mcm3',
    left: 'ㄷ',
    right: {
      en: 'digeut (d/t)',
      ja: 'ティグッ (d/t)',
      es: 'digeut (d/t)',
      th: 'ดีกึด (d/t)',
      vi: 'digeut (d/t)',
      zh: 'digeut (d/t)',
    },
    type: 'consonant-name',
    romanization: 'd/t',
  },
  {
    id: 'mcm4',
    left: 'ㄹ',
    right: {
      en: 'rieul (r/l)',
      ja: 'リウル (r/l)',
      es: 'rieul (r/l)',
      th: 'รีอึล (r/l)',
      vi: 'rieul (r/l)',
      zh: 'rieul (r/l)',
    },
    type: 'consonant-name',
    romanization: 'r/l',
  },
  {
    id: 'mcm5',
    left: 'ㅁ',
    right: {
      en: 'mieum (m)',
      ja: 'ミウム (m)',
      es: 'mieum (m)',
      th: 'มีอึม (m)',
      vi: 'mieum (m)',
      zh: 'mieum (m)',
    },
    type: 'consonant-name',
    romanization: 'm',
  },
  {
    id: 'mcm6',
    left: 'ㅂ',
    right: {
      en: 'bieup (b/p)',
      ja: 'ピウプ (b/p)',
      es: 'bieup (b/p)',
      th: 'บีอึบ (b/p)',
      vi: 'bieup (b/p)',
      zh: 'bieup (b/p)',
    },
    type: 'consonant-name',
    romanization: 'b/p',
  },
  {
    id: 'mcm7',
    left: 'ㅅ',
    right: {
      en: 'siot (s)',
      ja: 'シオッ (s)',
      es: 'siot (s)',
      th: 'ซีออด (s)',
      vi: 'siot (s)',
      zh: 'siot (s)',
    },
    type: 'consonant-name',
    romanization: 's',
  },
];

// Multilingual Matching Pairs for Level 2 (Basic Consonants II: ㅇ~ㅎ)
export const multilingualConsonantMatching2: MultilingualMatchingPair[] = [
  {
    id: 'mcm8',
    left: 'ㅇ',
    right: {
      en: 'ieung (silent/ng)',
      ja: 'イウン (無音/ng)',
      es: 'ieung (mudo/ng)',
      th: 'อีอึง (เงียบ/ng)',
      vi: 'ieung (im lặng/ng)',
      zh: 'ieung (无声/ng)',
    },
    type: 'consonant-name',
    romanization: 'ng/silent',
  },
  {
    id: 'mcm9',
    left: 'ㅈ',
    right: {
      en: 'jieut (j)',
      ja: 'チウッ (j)',
      es: 'jieut (j)',
      th: 'จีอึด (j)',
      vi: 'jieut (j)',
      zh: 'jieut (j)',
    },
    type: 'consonant-name',
    romanization: 'j',
  },
  {
    id: 'mcm10',
    left: 'ㅊ',
    right: {
      en: 'chieut (ch)',
      ja: 'チウッ (ch)',
      es: 'chieut (ch)',
      th: 'ชีอึด (ch)',
      vi: 'chieut (ch)',
      zh: 'chieut (ch)',
    },
    type: 'consonant-name',
    romanization: 'ch',
  },
  {
    id: 'mcm11',
    left: 'ㅋ',
    right: {
      en: 'kieuk (k)',
      ja: 'キウク (k)',
      es: 'kieuk (k)',
      th: 'คีอึก (k)',
      vi: 'kieuk (k)',
      zh: 'kieuk (k)',
    },
    type: 'consonant-name',
    romanization: 'k',
  },
  {
    id: 'mcm12',
    left: 'ㅌ',
    right: {
      en: 'tieut (t)',
      ja: 'ティウッ (t)',
      es: 'tieut (t)',
      th: 'ทีอึด (t)',
      vi: 'tieut (t)',
      zh: 'tieut (t)',
    },
    type: 'consonant-name',
    romanization: 't',
  },
  {
    id: 'mcm13',
    left: 'ㅍ',
    right: {
      en: 'pieup (p)',
      ja: 'ピウプ (p)',
      es: 'pieup (p)',
      th: 'พีอึบ (p)',
      vi: 'pieup (p)',
      zh: 'pieup (p)',
    },
    type: 'consonant-name',
    romanization: 'p',
  },
  {
    id: 'mcm14',
    left: 'ㅎ',
    right: {
      en: 'hieut (h)',
      ja: 'ヒウッ (h)',
      es: 'hieut (h)',
      th: 'ฮีอึด (h)',
      vi: 'hieut (h)',
      zh: 'hieut (h)',
    },
    type: 'consonant-name',
    romanization: 'h',
  },
];

// Double consonants matching pairs
export const multilingualDoubleConsonantMatching: MultilingualMatchingPair[] = [
  {
    id: 'mcdm1',
    left: 'ㄲ',
    right: {
      en: 'ssang-giyeok (kk)',
      ja: 'サンキヨク (kk)',
      es: 'ssang-giyeok (kk)',
      th: 'ซังกียอก (kk)',
      vi: 'ssang-giyeok (kk)',
      zh: 'ssang-giyeok (kk)',
    },
    type: 'consonant-name',
    romanization: 'kk',
  },
  {
    id: 'mcdm2',
    left: 'ㄸ',
    right: {
      en: 'ssang-digeut (tt)',
      ja: 'サンティグッ (tt)',
      es: 'ssang-digeut (tt)',
      th: 'ซังดีกึด (tt)',
      vi: 'ssang-digeut (tt)',
      zh: 'ssang-digeut (tt)',
    },
    type: 'consonant-name',
    romanization: 'tt',
  },
  {
    id: 'mcdm3',
    left: 'ㅃ',
    right: {
      en: 'ssang-bieup (pp)',
      ja: 'サンピウプ (pp)',
      es: 'ssang-bieup (pp)',
      th: 'ซังบีอึบ (pp)',
      vi: 'ssang-bieup (pp)',
      zh: 'ssang-bieup (pp)',
    },
    type: 'consonant-name',
    romanization: 'pp',
  },
  {
    id: 'mcdm4',
    left: 'ㅆ',
    right: {
      en: 'ssang-siot (ss)',
      ja: 'サンシオッ (ss)',
      es: 'ssang-siot (ss)',
      th: 'ซังซีออด (ss)',
      vi: 'ssang-siot (ss)',
      zh: 'ssang-siot (ss)',
    },
    type: 'consonant-name',
    romanization: 'ss',
  },
  {
    id: 'mcdm5',
    left: 'ㅉ',
    right: {
      en: 'ssang-jieut (jj)',
      ja: 'サンチウッ (jj)',
      es: 'ssang-jieut (jj)',
      th: 'ซังจีอึด (jj)',
      vi: 'ssang-jieut (jj)',
      zh: 'ssang-jieut (jj)',
    },
    type: 'consonant-name',
    romanization: 'jj',
  },
];
