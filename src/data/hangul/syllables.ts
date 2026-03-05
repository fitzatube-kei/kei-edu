import { QuizQuestion, MatchingPair, MultilingualMatchingPair, MultilingualText, MultilingualQuizQuestion } from '@/types';

export const syllableCombinations = [
  { syllable: '가', consonant: 'ㄱ', vowel: 'ㅏ', romanization: 'ga' },
  { syllable: '나', consonant: 'ㄴ', vowel: 'ㅏ', romanization: 'na' },
  { syllable: '다', consonant: 'ㄷ', vowel: 'ㅏ', romanization: 'da' },
  { syllable: '라', consonant: 'ㄹ', vowel: 'ㅏ', romanization: 'ra' },
  { syllable: '마', consonant: 'ㅁ', vowel: 'ㅏ', romanization: 'ma' },
  { syllable: '바', consonant: 'ㅂ', vowel: 'ㅏ', romanization: 'ba' },
  { syllable: '사', consonant: 'ㅅ', vowel: 'ㅏ', romanization: 'sa' },
  { syllable: '아', consonant: 'ㅇ', vowel: 'ㅏ', romanization: 'a' },
  { syllable: '자', consonant: 'ㅈ', vowel: 'ㅏ', romanization: 'ja' },
  { syllable: '차', consonant: 'ㅊ', vowel: 'ㅏ', romanization: 'cha' },
  { syllable: '카', consonant: 'ㅋ', vowel: 'ㅏ', romanization: 'ka' },
  { syllable: '타', consonant: 'ㅌ', vowel: 'ㅏ', romanization: 'ta' },
  { syllable: '파', consonant: 'ㅍ', vowel: 'ㅏ', romanization: 'pa' },
  { syllable: '하', consonant: 'ㅎ', vowel: 'ㅏ', romanization: 'ha' },
];

export const syllableWithBatchim = [
  { syllable: '간', initial: 'ㄱ', vowel: 'ㅏ', final: 'ㄴ', romanization: 'gan' },
  { syllable: '감', initial: 'ㄱ', vowel: 'ㅏ', final: 'ㅁ', romanization: 'gam' },
  { syllable: '강', initial: 'ㄱ', vowel: 'ㅏ', final: 'ㅇ', romanization: 'gang' },
  { syllable: '달', initial: 'ㄷ', vowel: 'ㅏ', final: 'ㄹ', romanization: 'dal' },
  { syllable: '밤', initial: 'ㅂ', vowel: 'ㅏ', final: 'ㅁ', romanization: 'bam' },
  { syllable: '산', initial: 'ㅅ', vowel: 'ㅏ', final: 'ㄴ', romanization: 'san' },
  { syllable: '말', initial: 'ㅁ', vowel: 'ㅏ', final: 'ㄹ', romanization: 'mal' },
  { syllable: '집', initial: 'ㅈ', vowel: 'ㅣ', final: 'ㅂ', romanization: 'jip' },
];

export const syllableQuizQuestions: QuizQuestion[] = [
  {
    id: 's1',
    question: '"ㄱ"과 "ㅏ"를 합치면 어떤 글자가 될까요?',
    options: ['가', '나', '다', '라'],
    correctAnswer: 0,
    explanation: 'ㄱ + ㅏ = 가 입니다.',
  },
  {
    id: 's2',
    question: '"마"를 구성하는 자음과 모음은?',
    options: ['ㅁ + ㅓ', 'ㅁ + ㅏ', 'ㅂ + ㅏ', 'ㅁ + ㅗ'],
    correctAnswer: 1,
    explanation: '"마"는 ㅁ(자음) + ㅏ(모음)으로 구성됩니다.',
  },
  {
    id: 's3',
    question: '"산"에서 받침(종성)은 무엇일까요?',
    options: ['ㅅ', 'ㅏ', 'ㄴ', '없음'],
    correctAnswer: 2,
    explanation: '"산"의 받침은 ㄴ입니다. (ㅅ + ㅏ + ㄴ)',
  },
  {
    id: 's4',
    question: '다음 중 받침이 있는 글자는?',
    options: ['가', '나', '감', '다'],
    correctAnswer: 2,
    explanation: '"감"에만 받침 ㅁ이 있습니다.',
  },
  {
    id: 's5',
    question: '"집"을 구성하는 요소는?',
    options: ['ㅈ + ㅣ', 'ㅈ + ㅣ + ㅂ', 'ㅊ + ㅣ + ㅂ', 'ㅈ + ㅏ + ㅂ'],
    correctAnswer: 1,
    explanation: '"집"은 ㅈ(초성) + ㅣ(중성) + ㅂ(종성)으로 구성됩니다.',
  },
  {
    id: 's6',
    question: '"하"의 로마자 표기는?',
    options: ['ga', 'ha', 'ka', 'na'],
    correctAnswer: 1,
    explanation: '"하"는 "ha"로 표기합니다.',
  },
  {
    id: 's7',
    question: '다음 중 "ㅇ"이 받침으로 사용된 글자는?',
    options: ['안', '강', '간', '감'],
    correctAnswer: 1,
    explanation: '"강"에서 ㅇ이 받침으로 사용되어 "ng" 소리가 납니다.',
  },
  {
    id: 's8',
    question: '"가나다라마바사"에서 4번째 글자는?',
    options: ['다', '라', '마', '바'],
    correctAnswer: 1,
    explanation: '가(1), 나(2), 다(3), 라(4)입니다.',
  },
];

export const syllableMatchingPairs: MatchingPair[] = [
  { id: 'sm1', left: 'ㄱ + ㅏ', right: '가' },
  { id: 'sm2', left: 'ㄴ + ㅏ', right: '나' },
  { id: 'sm3', left: 'ㅁ + ㅏ', right: '마' },
  { id: 'sm4', left: 'ㅅ + ㅏ', right: '사' },
  { id: 'sm5', left: 'ㅎ + ㅏ', right: '하' },
  { id: 'sm6', left: 'ㅈ + ㅏ', right: '자' },
];

// ============================================
// Multilingual Quiz Questions for Level 6 (Syllable Basics)
// ============================================
export const multilingualSyllableQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'ms1',
    templateKey: 'combineSyllable',
    character: 'ㄱ',
    character2: 'ㅏ',
    options: ['가', '나', '다', '라'],
    correctAnswer: 0,
  },
  {
    id: 'ms2',
    templateKey: 'syllableComponents',
    character: '마', // syllable
    options: ['ㅁ + ㅓ', 'ㅁ + ㅏ', 'ㅂ + ㅏ', 'ㅁ + ㅗ'],
    correctAnswer: 1,
  },
  {
    id: 'ms3',
    templateKey: 'syllableRoman',
    character: '하', // syllable
    options: ['ga', 'ha', 'ka', 'na'],
    correctAnswer: 1,
  },
  {
    id: 'ms4',
    templateKey: 'combineSyllable',
    character: 'ㅅ',
    character2: 'ㅏ',
    options: ['자', '차', '사', '아'],
    correctAnswer: 2,
  },
];

// ============================================
// Multilingual Quiz Questions for Level 7 (Batchim/Final Consonants)
// ============================================
export const multilingualBatchimQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mb1',
    templateKey: 'findBatchim',
    character: '산', // syllable
    options: ['ㅅ', 'ㅏ', 'ㄴ', 'none'],
    correctAnswer: 2,
  },
  {
    id: 'mb2',
    templateKey: 'hasBatchim',
    options: ['가', '나', '감', '다'],
    correctAnswer: 2,
  },
  {
    id: 'mb3',
    templateKey: 'syllableStructure',
    character: '집', // syllable
    options: ['ㅈ + ㅣ', 'ㅈ + ㅣ + ㅂ', 'ㅊ + ㅣ + ㅂ', 'ㅈ + ㅏ + ㅂ'],
    correctAnswer: 1,
  },
  {
    id: 'mb4',
    templateKey: 'batchimNg',
    options: ['안', '강', '간', '감'],
    correctAnswer: 1,
  },
];

// ============================================
// Multilingual Matching Pairs for Basic Syllables (Level 6)
// Format: Korean syllable ↔ Romanization with pronunciation
// ============================================
export const multilingualSyllableMatching: MultilingualMatchingPair[] = [
  {
    id: 'msm1',
    left: '가',
    right: {
      en: 'ga (g + a)',
      ja: 'ga（ガ）',
      es: 'ga (g + a)',
      th: 'ga (กา)',
      vi: 'ga (g + a)',
      zh: 'ga（嘎）',
    },
    type: 'consonant-sound',
    romanization: 'ga',
  },
  {
    id: 'msm2',
    left: '나',
    right: {
      en: 'na (n + a)',
      ja: 'na（ナ）',
      es: 'na (n + a)',
      th: 'na (นา)',
      vi: 'na (n + a)',
      zh: 'na（那）',
    },
    type: 'consonant-sound',
    romanization: 'na',
  },
  {
    id: 'msm3',
    left: '다',
    right: {
      en: 'da (d + a)',
      ja: 'da（ダ）',
      es: 'da (d + a)',
      th: 'da (ดา)',
      vi: 'da (d + a)',
      zh: 'da（达）',
    },
    type: 'consonant-sound',
    romanization: 'da',
  },
  {
    id: 'msm4',
    left: '라',
    right: {
      en: 'ra/la (r/l + a)',
      ja: 'ra（ラ）',
      es: 'ra (r + a)',
      th: 'ra (รา)',
      vi: 'ra (r + a)',
      zh: 'ra（拉）',
    },
    type: 'consonant-sound',
    romanization: 'ra',
  },
  {
    id: 'msm5',
    left: '마',
    right: {
      en: 'ma (m + a)',
      ja: 'ma（マ）',
      es: 'ma (m + a)',
      th: 'ma (มา)',
      vi: 'ma (m + a)',
      zh: 'ma（妈）',
    },
    type: 'consonant-sound',
    romanization: 'ma',
  },
  {
    id: 'msm6',
    left: '바',
    right: {
      en: 'ba (b + a)',
      ja: 'ba（バ）',
      es: 'ba (b + a)',
      th: 'ba (บา)',
      vi: 'ba (b + a)',
      zh: 'ba（八）',
    },
    type: 'consonant-sound',
    romanization: 'ba',
  },
  {
    id: 'msm7',
    left: '사',
    right: {
      en: 'sa (s + a)',
      ja: 'sa（サ）',
      es: 'sa (s + a)',
      th: 'sa (ซา)',
      vi: 'sa (s + a)',
      zh: 'sa（撒）',
    },
    type: 'consonant-sound',
    romanization: 'sa',
  },
  {
    id: 'msm8',
    left: '하',
    right: {
      en: 'ha (h + a)',
      ja: 'ha（ハ）',
      es: 'ha (h + a)',
      th: 'ha (ฮา)',
      vi: 'ha (h + a)',
      zh: 'ha（哈）',
    },
    type: 'consonant-sound',
    romanization: 'ha',
  },
];

// ============================================
// Multilingual Matching Pairs for Syllables with Batchim (Level 7)
// Format: Korean word with batchim ↔ Romanization + meaning
// ============================================
export const multilingualBatchimMatching: MultilingualMatchingPair[] = [
  {
    id: 'mbm1',
    left: '밥',
    right: {
      en: 'bap (rice/meal)',
      ja: 'bap（ご飯）',
      es: 'bap (arroz/comida)',
      th: 'bap (ข้าว)',
      vi: 'bap (cơm)',
      zh: 'bap（饭）',
    },
    type: 'word',
    romanization: 'bap',
  },
  {
    id: 'mbm2',
    left: '국',
    right: {
      en: 'guk (soup)',
      ja: 'guk（スープ）',
      es: 'guk (sopa)',
      th: 'guk (ซุป)',
      vi: 'guk (canh)',
      zh: 'guk（汤）',
    },
    type: 'word',
    romanization: 'guk',
  },
  {
    id: 'mbm3',
    left: '산',
    right: {
      en: 'san (mountain)',
      ja: 'san（山）',
      es: 'san (montaña)',
      th: 'san (ภูเขา)',
      vi: 'san (núi)',
      zh: 'san（山）',
    },
    type: 'word',
    romanization: 'san',
  },
  {
    id: 'mbm4',
    left: '강',
    right: {
      en: 'gang (river)',
      ja: 'gang（川）',
      es: 'gang (río)',
      th: 'gang (แม่น้ำ)',
      vi: 'gang (sông)',
      zh: 'gang（江）',
    },
    type: 'word',
    romanization: 'gang',
  },
  {
    id: 'mbm5',
    left: '물',
    right: {
      en: 'mul (water)',
      ja: 'mul（水）',
      es: 'mul (agua)',
      th: 'mul (น้ำ)',
      vi: 'mul (nước)',
      zh: 'mul（水）',
    },
    type: 'word',
    romanization: 'mul',
  },
  {
    id: 'mbm6',
    left: '불',
    right: {
      en: 'bul (fire)',
      ja: 'bul（火）',
      es: 'bul (fuego)',
      th: 'bul (ไฟ)',
      vi: 'bul (lửa)',
      zh: 'bul（火）',
    },
    type: 'word',
    romanization: 'bul',
  },
  {
    id: 'mbm7',
    left: '달',
    right: {
      en: 'dal (moon)',
      ja: 'dal（月）',
      es: 'dal (luna)',
      th: 'dal (พระจันทร์)',
      vi: 'dal (trăng)',
      zh: 'dal（月亮）',
    },
    type: 'word',
    romanization: 'dal',
  },
  {
    id: 'mbm8',
    left: '집',
    right: {
      en: 'jip (house)',
      ja: 'jip（家）',
      es: 'jip (casa)',
      th: 'jip (บ้าน)',
      vi: 'jip (nhà)',
      zh: 'jip（家）',
    },
    type: 'word',
    romanization: 'jip',
  },
];
