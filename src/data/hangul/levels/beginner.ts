import { HangulLevel, MultilingualQuizQuestion, MultilingualMatchingPair, HangulCharacter } from '@/types';
import {
  basicConsonants,
  doubleConsonants,
  multilingualConsonantQuizzes1,
  multilingualConsonantQuizzes2,
  multilingualConsonantMatching1,
  multilingualConsonantMatching2,
  multilingualDoubleConsonantMatching,
  multilingualDoubleConsonantQuizzes,
  consonantQuizQuestions,
  consonantMatchingPairs,
} from '../consonants';
import {
  basicVowels,
  complexVowels,
  multilingualVowelQuizzes,
  multilingualComplexVowelQuizzes,
  multilingualBasicVowelMatching,
  multilingualComplexVowelMatching,
  vowelQuizQuestions,
  vowelMatchingPairs,
} from '../vowels';

// ============================================
// PHASE 1: INDIVIDUAL LETTERS (Levels 1-4)
// ============================================

// Level 1: Basic Consonants I (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ)
const level1Consonants = basicConsonants.slice(0, 7);

// Level 2: Basic Consonants II (ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ)
const level2Consonants = basicConsonants.slice(7);

// Level 3: Basic Vowels I (ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ)
const level3Vowels = basicVowels.slice(0, 6);

// Level 4: Basic Vowels II (ㅜ, ㅠ, ㅡ, ㅣ)
const level4Vowels = basicVowels.slice(6);

// ============================================
// PHASE 2: Consonant + ㅏ Row (Levels 5-6)
// ============================================

// Level 5: 가나다라마바사 (ㄱ+ㅏ=가, ㄴ+ㅏ=나, etc.)
const level5Characters: HangulCharacter[] = [
  { character: '가', romanization: 'ga', pronunciation: '가', type: 'consonant', example: { word: 'ㄱ + ㅏ', meaning: 'g + a = ga' } },
  { character: '나', romanization: 'na', pronunciation: '나', type: 'consonant', example: { word: 'ㄴ + ㅏ', meaning: 'n + a = na' } },
  { character: '다', romanization: 'da', pronunciation: '다', type: 'consonant', example: { word: 'ㄷ + ㅏ', meaning: 'd + a = da' } },
  { character: '라', romanization: 'ra', pronunciation: '라', type: 'consonant', example: { word: 'ㄹ + ㅏ', meaning: 'r + a = ra' } },
  { character: '마', romanization: 'ma', pronunciation: '마', type: 'consonant', example: { word: 'ㅁ + ㅏ', meaning: 'm + a = ma' } },
  { character: '바', romanization: 'ba', pronunciation: '바', type: 'consonant', example: { word: 'ㅂ + ㅏ', meaning: 'b + a = ba' } },
  { character: '사', romanization: 'sa', pronunciation: '사', type: 'consonant', example: { word: 'ㅅ + ㅏ', meaning: 's + a = sa' } },
];

const level5Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l5q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅏ', options: ['가', '나', '다', '라'], correctAnswer: 0 },
  { id: 'l5q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅏ', options: ['다', '라', '나', '마'], correctAnswer: 2 },
  { id: 'l5q3', templateKey: 'combineSyllable', character: 'ㄷ', character2: 'ㅏ', options: ['가', '나', '다', '라'], correctAnswer: 2 },
  { id: 'l5q4', templateKey: 'combineSyllable', character: 'ㅁ', character2: 'ㅏ', options: ['바', '사', '라', '마'], correctAnswer: 3 },
  { id: 'l5q5', templateKey: 'syllableComponents', character: '가', options: ['ㄱ + ㅏ', 'ㄴ + ㅏ', 'ㄷ + ㅏ', 'ㄹ + ㅏ'], correctAnswer: 0 },
  { id: 'l5q6', templateKey: 'syllableRoman', character: '사', options: ['ba', 'ma', 'sa', 'da'], correctAnswer: 2 },
];

const level5Matching: MultilingualMatchingPair[] = [
  { id: 'l5m1', left: '가', right: { en: 'ga (ㄱ+ㅏ)', ja: 'ga（ガ）', es: 'ga', th: 'ga (กา)', vi: 'ga', zh: 'ga（嘎）' }, type: 'consonant-sound', romanization: 'ga' },
  { id: 'l5m2', left: '나', right: { en: 'na (ㄴ+ㅏ)', ja: 'na（ナ）', es: 'na', th: 'na (นา)', vi: 'na', zh: 'na（那）' }, type: 'consonant-sound', romanization: 'na' },
  { id: 'l5m3', left: '다', right: { en: 'da (ㄷ+ㅏ)', ja: 'da（ダ）', es: 'da', th: 'da (ดา)', vi: 'da', zh: 'da（达）' }, type: 'consonant-sound', romanization: 'da' },
  { id: 'l5m4', left: '라', right: { en: 'ra (ㄹ+ㅏ)', ja: 'ra（ラ）', es: 'ra', th: 'ra (รา)', vi: 'ra', zh: 'ra（拉）' }, type: 'consonant-sound', romanization: 'ra' },
  { id: 'l5m5', left: '마', right: { en: 'ma (ㅁ+ㅏ)', ja: 'ma（マ）', es: 'ma', th: 'ma (มา)', vi: 'ma', zh: 'ma（妈）' }, type: 'consonant-sound', romanization: 'ma' },
  { id: 'l5m6', left: '바', right: { en: 'ba (ㅂ+ㅏ)', ja: 'ba（バ）', es: 'ba', th: 'ba (บา)', vi: 'ba', zh: 'ba（八）' }, type: 'consonant-sound', romanization: 'ba' },
  { id: 'l5m7', left: '사', right: { en: 'sa (ㅅ+ㅏ)', ja: 'sa（サ）', es: 'sa', th: 'sa (ซา)', vi: 'sa', zh: 'sa（撒）' }, type: 'consonant-sound', romanization: 'sa' },
];

// Level 6: 아자차카타파하 (ㅇ+ㅏ=아, etc.)
const level6Characters: HangulCharacter[] = [
  { character: '아', romanization: 'a', pronunciation: '아', type: 'consonant', example: { word: 'ㅇ + ㅏ', meaning: '(silent) + a = a' } },
  { character: '자', romanization: 'ja', pronunciation: '자', type: 'consonant', example: { word: 'ㅈ + ㅏ', meaning: 'j + a = ja' } },
  { character: '차', romanization: 'cha', pronunciation: '차', type: 'consonant', example: { word: 'ㅊ + ㅏ', meaning: 'ch + a = cha' } },
  { character: '카', romanization: 'ka', pronunciation: '카', type: 'consonant', example: { word: 'ㅋ + ㅏ', meaning: 'k + a = ka' } },
  { character: '타', romanization: 'ta', pronunciation: '타', type: 'consonant', example: { word: 'ㅌ + ㅏ', meaning: 't + a = ta' } },
  { character: '파', romanization: 'pa', pronunciation: '파', type: 'consonant', example: { word: 'ㅍ + ㅏ', meaning: 'p + a = pa' } },
  { character: '하', romanization: 'ha', pronunciation: '하', type: 'consonant', example: { word: 'ㅎ + ㅏ', meaning: 'h + a = ha' } },
];

const level6Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l6q1', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅏ', options: ['아', '자', '차', '카'], correctAnswer: 0 },
  { id: 'l6q2', templateKey: 'combineSyllable', character: 'ㅎ', character2: 'ㅏ', options: ['파', '타', '카', '하'], correctAnswer: 3 },
  { id: 'l6q3', templateKey: 'combineSyllable', character: 'ㅊ', character2: 'ㅏ', options: ['자', '차', '카', '타'], correctAnswer: 1 },
  { id: 'l6q4', templateKey: 'syllableComponents', character: '파', options: ['ㅌ + ㅏ', 'ㅍ + ㅏ', 'ㅎ + ㅏ', 'ㅋ + ㅏ'], correctAnswer: 1 },
  { id: 'l6q5', templateKey: 'syllableRoman', character: '자', options: ['cha', 'ja', 'ka', 'ta'], correctAnswer: 1 },
  { id: 'l6q6', templateKey: 'syllableRoman', character: '하', options: ['pa', 'ta', 'ka', 'ha'], correctAnswer: 3 },
];

const level6Matching: MultilingualMatchingPair[] = [
  { id: 'l6m1', left: '아', right: { en: 'a (ㅇ+ㅏ)', ja: 'a（ア）', es: 'a', th: 'a (อา)', vi: 'a', zh: 'a（阿）' }, type: 'consonant-sound', romanization: 'a' },
  { id: 'l6m2', left: '자', right: { en: 'ja (ㅈ+ㅏ)', ja: 'ja（ジャ）', es: 'ja', th: 'ja (จา)', vi: 'ja', zh: 'ja（家）' }, type: 'consonant-sound', romanization: 'ja' },
  { id: 'l6m3', left: '차', right: { en: 'cha (ㅊ+ㅏ)', ja: 'cha（チャ）', es: 'cha', th: 'cha (ชา)', vi: 'cha', zh: 'cha（茶）' }, type: 'consonant-sound', romanization: 'cha' },
  { id: 'l6m4', left: '카', right: { en: 'ka (ㅋ+ㅏ)', ja: 'ka（カ）', es: 'ka', th: 'ka (คา)', vi: 'ka', zh: 'ka（卡）' }, type: 'consonant-sound', romanization: 'ka' },
  { id: 'l6m5', left: '타', right: { en: 'ta (ㅌ+ㅏ)', ja: 'ta（タ）', es: 'ta', th: 'ta (ทา)', vi: 'ta', zh: 'ta（他）' }, type: 'consonant-sound', romanization: 'ta' },
  { id: 'l6m6', left: '파', right: { en: 'pa (ㅍ+ㅏ)', ja: 'pa（パ）', es: 'pa', th: 'pa (พา)', vi: 'pa', zh: 'pa（帕）' }, type: 'consonant-sound', romanization: 'pa' },
  { id: 'l6m7', left: '하', right: { en: 'ha (ㅎ+ㅏ)', ja: 'ha（ハ）', es: 'ha', th: 'ha (ฮา)', vi: 'ha', zh: 'ha（哈）' }, type: 'consonant-sound', romanization: 'ha' },
];

// ============================================
// PHASE 3: Consonant + Other Basic Vowels (Levels 7-15)
// ============================================

// Level 7: ㅑ row (갸, 냐, 댜...)
const level7Characters: HangulCharacter[] = [
  { character: '갸', romanization: 'gya', pronunciation: '갸', type: 'consonant', example: { word: 'ㄱ + ㅑ', meaning: 'g + ya = gya' } },
  { character: '냐', romanization: 'nya', pronunciation: '냐', type: 'consonant', example: { word: 'ㄴ + ㅑ', meaning: 'n + ya = nya' } },
  { character: '댜', romanization: 'dya', pronunciation: '댜', type: 'consonant', example: { word: 'ㄷ + ㅑ', meaning: 'd + ya = dya' } },
  { character: '랴', romanization: 'rya', pronunciation: '랴', type: 'consonant', example: { word: 'ㄹ + ㅑ', meaning: 'r + ya = rya' } },
  { character: '먀', romanization: 'mya', pronunciation: '먀', type: 'consonant', example: { word: 'ㅁ + ㅑ', meaning: 'm + ya = mya' } },
  { character: '뱌', romanization: 'bya', pronunciation: '뱌', type: 'consonant', example: { word: 'ㅂ + ㅑ', meaning: 'b + ya = bya' } },
  { character: '샤', romanization: 'sya', pronunciation: '샤', type: 'consonant', example: { word: 'ㅅ + ㅑ', meaning: 's + ya = sya' } },
  { character: '야', romanization: 'ya', pronunciation: '야', type: 'consonant', example: { word: 'ㅇ + ㅑ', meaning: '(silent) + ya = ya' } },
];

const level7Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l7q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅑ', options: ['가', '갸', '거', '겨'], correctAnswer: 1 },
  { id: 'l7q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅑ', options: ['나', '냐', '너', '녀'], correctAnswer: 1 },
  { id: 'l7q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅑ', options: ['아', '야', '어', '여'], correctAnswer: 1 },
  { id: 'l7q4', templateKey: 'syllableComponents', character: '샤', options: ['ㅅ + ㅏ', 'ㅅ + ㅑ', 'ㅅ + ㅓ', 'ㅅ + ㅕ'], correctAnswer: 1 },
  { id: 'l7q5', templateKey: 'syllableRoman', character: '냐', options: ['na', 'nya', 'neo', 'nyeo'], correctAnswer: 1 },
];

const level7Matching: MultilingualMatchingPair[] = [
  { id: 'l7m1', left: '갸', right: { en: 'gya (ㄱ+ㅑ)', ja: 'gya（ギャ）', es: 'gya', th: 'gya', vi: 'gya', zh: 'gya' }, type: 'consonant-sound', romanization: 'gya' },
  { id: 'l7m2', left: '냐', right: { en: 'nya (ㄴ+ㅑ)', ja: 'nya（ニャ）', es: 'nya', th: 'nya', vi: 'nya', zh: 'nya' }, type: 'consonant-sound', romanization: 'nya' },
  { id: 'l7m3', left: '랴', right: { en: 'rya (ㄹ+ㅑ)', ja: 'rya（リャ）', es: 'rya', th: 'rya', vi: 'rya', zh: 'rya' }, type: 'consonant-sound', romanization: 'rya' },
  { id: 'l7m4', left: '샤', right: { en: 'sya (ㅅ+ㅑ)', ja: 'sya（シャ）', es: 'sya', th: 'sya', vi: 'sya', zh: 'sya' }, type: 'consonant-sound', romanization: 'sya' },
  { id: 'l7m5', left: '야', right: { en: 'ya (ㅇ+ㅑ)', ja: 'ya（ヤ）', es: 'ya', th: 'ya', vi: 'ya', zh: 'ya' }, type: 'consonant-sound', romanization: 'ya' },
];

// Level 8: ㅓ row (거, 너, 더...)
const level8Characters: HangulCharacter[] = [
  { character: '거', romanization: 'geo', pronunciation: '거', type: 'consonant', example: { word: 'ㄱ + ㅓ', meaning: 'g + eo = geo' } },
  { character: '너', romanization: 'neo', pronunciation: '너', type: 'consonant', example: { word: 'ㄴ + ㅓ', meaning: 'n + eo = neo' } },
  { character: '더', romanization: 'deo', pronunciation: '더', type: 'consonant', example: { word: 'ㄷ + ㅓ', meaning: 'd + eo = deo' } },
  { character: '러', romanization: 'reo', pronunciation: '러', type: 'consonant', example: { word: 'ㄹ + ㅓ', meaning: 'r + eo = reo' } },
  { character: '머', romanization: 'meo', pronunciation: '머', type: 'consonant', example: { word: 'ㅁ + ㅓ', meaning: 'm + eo = meo' } },
  { character: '버', romanization: 'beo', pronunciation: '버', type: 'consonant', example: { word: 'ㅂ + ㅓ', meaning: 'b + eo = beo' } },
  { character: '서', romanization: 'seo', pronunciation: '서', type: 'consonant', example: { word: 'ㅅ + ㅓ', meaning: 's + eo = seo' } },
  { character: '어', romanization: 'eo', pronunciation: '어', type: 'consonant', example: { word: 'ㅇ + ㅓ', meaning: '(silent) + eo = eo' } },
];

const level8Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l8q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅓ', options: ['가', '거', '고', '구'], correctAnswer: 1 },
  { id: 'l8q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅓ', options: ['나', '너', '노', '누'], correctAnswer: 1 },
  { id: 'l8q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅓ', options: ['아', '어', '오', '우'], correctAnswer: 1 },
  { id: 'l8q4', templateKey: 'syllableComponents', character: '서', options: ['ㅅ + ㅏ', 'ㅅ + ㅓ', 'ㅅ + ㅗ', 'ㅅ + ㅜ'], correctAnswer: 1 },
  { id: 'l8q5', templateKey: 'syllableRoman', character: '머', options: ['ma', 'meo', 'mo', 'mu'], correctAnswer: 1 },
];

const level8Matching: MultilingualMatchingPair[] = [
  { id: 'l8m1', left: '거', right: { en: 'geo (ㄱ+ㅓ)', ja: 'geo（ゴ）', es: 'geo', th: 'geo', vi: 'geo', zh: 'geo' }, type: 'consonant-sound', romanization: 'geo' },
  { id: 'l8m2', left: '너', right: { en: 'neo (ㄴ+ㅓ)', ja: 'neo（ノ）', es: 'neo', th: 'neo', vi: 'neo', zh: 'neo' }, type: 'consonant-sound', romanization: 'neo' },
  { id: 'l8m3', left: '더', right: { en: 'deo (ㄷ+ㅓ)', ja: 'deo（ド）', es: 'deo', th: 'deo', vi: 'deo', zh: 'deo' }, type: 'consonant-sound', romanization: 'deo' },
  { id: 'l8m4', left: '서', right: { en: 'seo (ㅅ+ㅓ)', ja: 'seo（ソ）', es: 'seo', th: 'seo', vi: 'seo', zh: 'seo' }, type: 'consonant-sound', romanization: 'seo' },
  { id: 'l8m5', left: '어', right: { en: 'eo (ㅇ+ㅓ)', ja: 'eo（オ）', es: 'eo', th: 'eo', vi: 'eo', zh: 'eo' }, type: 'consonant-sound', romanization: 'eo' },
];

// Level 9: ㅕ row (겨, 녀, 뎌...)
const level9Characters: HangulCharacter[] = [
  { character: '겨', romanization: 'gyeo', pronunciation: '겨', type: 'consonant', example: { word: 'ㄱ + ㅕ', meaning: 'g + yeo = gyeo' } },
  { character: '녀', romanization: 'nyeo', pronunciation: '녀', type: 'consonant', example: { word: 'ㄴ + ㅕ', meaning: 'n + yeo = nyeo' } },
  { character: '뎌', romanization: 'dyeo', pronunciation: '뎌', type: 'consonant', example: { word: 'ㄷ + ㅕ', meaning: 'd + yeo = dyeo' } },
  { character: '려', romanization: 'ryeo', pronunciation: '려', type: 'consonant', example: { word: 'ㄹ + ㅕ', meaning: 'r + yeo = ryeo' } },
  { character: '며', romanization: 'myeo', pronunciation: '며', type: 'consonant', example: { word: 'ㅁ + ㅕ', meaning: 'm + yeo = myeo' } },
  { character: '벼', romanization: 'byeo', pronunciation: '벼', type: 'consonant', example: { word: 'ㅂ + ㅕ', meaning: 'b + yeo = byeo' } },
  { character: '셔', romanization: 'syeo', pronunciation: '셔', type: 'consonant', example: { word: 'ㅅ + ㅕ', meaning: 's + yeo = syeo' } },
  { character: '여', romanization: 'yeo', pronunciation: '여', type: 'consonant', example: { word: 'ㅇ + ㅕ', meaning: '(silent) + yeo = yeo' } },
];

const level9Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l9q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅕ', options: ['갸', '겨', '교', '규'], correctAnswer: 1 },
  { id: 'l9q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅕ', options: ['냐', '녀', '뇨', '뉴'], correctAnswer: 1 },
  { id: 'l9q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅕ', options: ['야', '여', '요', '유'], correctAnswer: 1 },
  { id: 'l9q4', templateKey: 'syllableComponents', character: '셔', options: ['ㅅ + ㅑ', 'ㅅ + ㅕ', 'ㅅ + ㅛ', 'ㅅ + ㅠ'], correctAnswer: 1 },
  { id: 'l9q5', templateKey: 'syllableRoman', character: '려', options: ['rya', 'ryeo', 'ryo', 'ryu'], correctAnswer: 1 },
];

const level9Matching: MultilingualMatchingPair[] = [
  { id: 'l9m1', left: '겨', right: { en: 'gyeo (ㄱ+ㅕ)', ja: 'gyeo（ギョ）', es: 'gyeo', th: 'gyeo', vi: 'gyeo', zh: 'gyeo' }, type: 'consonant-sound', romanization: 'gyeo' },
  { id: 'l9m2', left: '녀', right: { en: 'nyeo (ㄴ+ㅕ)', ja: 'nyeo（ニョ）', es: 'nyeo', th: 'nyeo', vi: 'nyeo', zh: 'nyeo' }, type: 'consonant-sound', romanization: 'nyeo' },
  { id: 'l9m3', left: '려', right: { en: 'ryeo (ㄹ+ㅕ)', ja: 'ryeo（リョ）', es: 'ryeo', th: 'ryeo', vi: 'ryeo', zh: 'ryeo' }, type: 'consonant-sound', romanization: 'ryeo' },
  { id: 'l9m4', left: '셔', right: { en: 'syeo (ㅅ+ㅕ)', ja: 'syeo（ショ）', es: 'syeo', th: 'syeo', vi: 'syeo', zh: 'syeo' }, type: 'consonant-sound', romanization: 'syeo' },
  { id: 'l9m5', left: '여', right: { en: 'yeo (ㅇ+ㅕ)', ja: 'yeo（ヨ）', es: 'yeo', th: 'yeo', vi: 'yeo', zh: 'yeo' }, type: 'consonant-sound', romanization: 'yeo' },
];

// Level 10: ㅗ row (고, 노, 도...)
const level10Characters: HangulCharacter[] = [
  { character: '고', romanization: 'go', pronunciation: '고', type: 'consonant', example: { word: 'ㄱ + ㅗ', meaning: 'g + o = go' } },
  { character: '노', romanization: 'no', pronunciation: '노', type: 'consonant', example: { word: 'ㄴ + ㅗ', meaning: 'n + o = no' } },
  { character: '도', romanization: 'do', pronunciation: '도', type: 'consonant', example: { word: 'ㄷ + ㅗ', meaning: 'd + o = do' } },
  { character: '로', romanization: 'ro', pronunciation: '로', type: 'consonant', example: { word: 'ㄹ + ㅗ', meaning: 'r + o = ro' } },
  { character: '모', romanization: 'mo', pronunciation: '모', type: 'consonant', example: { word: 'ㅁ + ㅗ', meaning: 'm + o = mo' } },
  { character: '보', romanization: 'bo', pronunciation: '보', type: 'consonant', example: { word: 'ㅂ + ㅗ', meaning: 'b + o = bo' } },
  { character: '소', romanization: 'so', pronunciation: '소', type: 'consonant', example: { word: 'ㅅ + ㅗ', meaning: 's + o = so' } },
  { character: '오', romanization: 'o', pronunciation: '오', type: 'consonant', example: { word: 'ㅇ + ㅗ', meaning: '(silent) + o = o' } },
];

const level10Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l10q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅗ', options: ['가', '거', '고', '구'], correctAnswer: 2 },
  { id: 'l10q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅗ', options: ['나', '너', '노', '누'], correctAnswer: 2 },
  { id: 'l10q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅗ', options: ['아', '어', '오', '우'], correctAnswer: 2 },
  { id: 'l10q4', templateKey: 'syllableComponents', character: '모', options: ['ㅁ + ㅏ', 'ㅁ + ㅓ', 'ㅁ + ㅗ', 'ㅁ + ㅜ'], correctAnswer: 2 },
  { id: 'l10q5', templateKey: 'syllableRoman', character: '소', options: ['sa', 'seo', 'so', 'su'], correctAnswer: 2 },
];

const level10Matching: MultilingualMatchingPair[] = [
  { id: 'l10m1', left: '고', right: { en: 'go (ㄱ+ㅗ)', ja: 'go（ゴ）', es: 'go', th: 'go', vi: 'go', zh: 'go' }, type: 'consonant-sound', romanization: 'go' },
  { id: 'l10m2', left: '노', right: { en: 'no (ㄴ+ㅗ)', ja: 'no（ノ）', es: 'no', th: 'no', vi: 'no', zh: 'no' }, type: 'consonant-sound', romanization: 'no' },
  { id: 'l10m3', left: '도', right: { en: 'do (ㄷ+ㅗ)', ja: 'do（ド）', es: 'do', th: 'do', vi: 'do', zh: 'do' }, type: 'consonant-sound', romanization: 'do' },
  { id: 'l10m4', left: '소', right: { en: 'so (ㅅ+ㅗ)', ja: 'so（ソ）', es: 'so', th: 'so', vi: 'so', zh: 'so' }, type: 'consonant-sound', romanization: 'so' },
  { id: 'l10m5', left: '오', right: { en: 'o (ㅇ+ㅗ)', ja: 'o（オ）', es: 'o', th: 'o', vi: 'o', zh: 'o' }, type: 'consonant-sound', romanization: 'o' },
];

// Level 11: ㅛ row (교, 뇨, 됴...)
const level11Characters: HangulCharacter[] = [
  { character: '교', romanization: 'gyo', pronunciation: '교', type: 'consonant', example: { word: 'ㄱ + ㅛ', meaning: 'g + yo = gyo' } },
  { character: '뇨', romanization: 'nyo', pronunciation: '뇨', type: 'consonant', example: { word: 'ㄴ + ㅛ', meaning: 'n + yo = nyo' } },
  { character: '됴', romanization: 'dyo', pronunciation: '됴', type: 'consonant', example: { word: 'ㄷ + ㅛ', meaning: 'd + yo = dyo' } },
  { character: '료', romanization: 'ryo', pronunciation: '료', type: 'consonant', example: { word: 'ㄹ + ㅛ', meaning: 'r + yo = ryo' } },
  { character: '묘', romanization: 'myo', pronunciation: '묘', type: 'consonant', example: { word: 'ㅁ + ㅛ', meaning: 'm + yo = myo' } },
  { character: '뵤', romanization: 'byo', pronunciation: '뵤', type: 'consonant', example: { word: 'ㅂ + ㅛ', meaning: 'b + yo = byo' } },
  { character: '쇼', romanization: 'syo', pronunciation: '쇼', type: 'consonant', example: { word: 'ㅅ + ㅛ', meaning: 's + yo = syo' } },
  { character: '요', romanization: 'yo', pronunciation: '요', type: 'consonant', example: { word: 'ㅇ + ㅛ', meaning: '(silent) + yo = yo' } },
];

const level11Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l11q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅛ', options: ['고', '교', '구', '규'], correctAnswer: 1 },
  { id: 'l11q2', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅛ', options: ['오', '요', '우', '유'], correctAnswer: 1 },
  { id: 'l11q3', templateKey: 'syllableComponents', character: '료', options: ['ㄹ + ㅗ', 'ㄹ + ㅛ', 'ㄹ + ㅜ', 'ㄹ + ㅠ'], correctAnswer: 1 },
  { id: 'l11q4', templateKey: 'syllableRoman', character: '쇼', options: ['so', 'syo', 'su', 'syu'], correctAnswer: 1 },
];

const level11Matching: MultilingualMatchingPair[] = [
  { id: 'l11m1', left: '교', right: { en: 'gyo (ㄱ+ㅛ)', ja: 'gyo（ギョ）', es: 'gyo', th: 'gyo', vi: 'gyo', zh: 'gyo' }, type: 'consonant-sound', romanization: 'gyo' },
  { id: 'l11m2', left: '료', right: { en: 'ryo (ㄹ+ㅛ)', ja: 'ryo（リョ）', es: 'ryo', th: 'ryo', vi: 'ryo', zh: 'ryo' }, type: 'consonant-sound', romanization: 'ryo' },
  { id: 'l11m3', left: '쇼', right: { en: 'syo (ㅅ+ㅛ)', ja: 'syo（ショ）', es: 'syo', th: 'syo', vi: 'syo', zh: 'syo' }, type: 'consonant-sound', romanization: 'syo' },
  { id: 'l11m4', left: '요', right: { en: 'yo (ㅇ+ㅛ)', ja: 'yo（ヨ）', es: 'yo', th: 'yo', vi: 'yo', zh: 'yo' }, type: 'consonant-sound', romanization: 'yo' },
];

// Level 12: ㅜ row (구, 누, 두...)
const level12Characters: HangulCharacter[] = [
  { character: '구', romanization: 'gu', pronunciation: '구', type: 'consonant', example: { word: 'ㄱ + ㅜ', meaning: 'g + u = gu' } },
  { character: '누', romanization: 'nu', pronunciation: '누', type: 'consonant', example: { word: 'ㄴ + ㅜ', meaning: 'n + u = nu' } },
  { character: '두', romanization: 'du', pronunciation: '두', type: 'consonant', example: { word: 'ㄷ + ㅜ', meaning: 'd + u = du' } },
  { character: '루', romanization: 'ru', pronunciation: '루', type: 'consonant', example: { word: 'ㄹ + ㅜ', meaning: 'r + u = ru' } },
  { character: '무', romanization: 'mu', pronunciation: '무', type: 'consonant', example: { word: 'ㅁ + ㅜ', meaning: 'm + u = mu' } },
  { character: '부', romanization: 'bu', pronunciation: '부', type: 'consonant', example: { word: 'ㅂ + ㅜ', meaning: 'b + u = bu' } },
  { character: '수', romanization: 'su', pronunciation: '수', type: 'consonant', example: { word: 'ㅅ + ㅜ', meaning: 's + u = su' } },
  { character: '우', romanization: 'u', pronunciation: '우', type: 'consonant', example: { word: 'ㅇ + ㅜ', meaning: '(silent) + u = u' } },
];

const level12Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l12q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅜ', options: ['가', '거', '고', '구'], correctAnswer: 3 },
  { id: 'l12q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅜ', options: ['나', '너', '노', '누'], correctAnswer: 3 },
  { id: 'l12q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅜ', options: ['아', '어', '오', '우'], correctAnswer: 3 },
  { id: 'l12q4', templateKey: 'syllableComponents', character: '수', options: ['ㅅ + ㅏ', 'ㅅ + ㅓ', 'ㅅ + ㅗ', 'ㅅ + ㅜ'], correctAnswer: 3 },
  { id: 'l12q5', templateKey: 'syllableRoman', character: '무', options: ['ma', 'meo', 'mo', 'mu'], correctAnswer: 3 },
];

const level12Matching: MultilingualMatchingPair[] = [
  { id: 'l12m1', left: '구', right: { en: 'gu (ㄱ+ㅜ)', ja: 'gu（グ）', es: 'gu', th: 'gu', vi: 'gu', zh: 'gu' }, type: 'consonant-sound', romanization: 'gu' },
  { id: 'l12m2', left: '누', right: { en: 'nu (ㄴ+ㅜ)', ja: 'nu（ヌ）', es: 'nu', th: 'nu', vi: 'nu', zh: 'nu' }, type: 'consonant-sound', romanization: 'nu' },
  { id: 'l12m3', left: '두', right: { en: 'du (ㄷ+ㅜ)', ja: 'du（ドゥ）', es: 'du', th: 'du', vi: 'du', zh: 'du' }, type: 'consonant-sound', romanization: 'du' },
  { id: 'l12m4', left: '수', right: { en: 'su (ㅅ+ㅜ)', ja: 'su（ス）', es: 'su', th: 'su', vi: 'su', zh: 'su' }, type: 'consonant-sound', romanization: 'su' },
  { id: 'l12m5', left: '우', right: { en: 'u (ㅇ+ㅜ)', ja: 'u（ウ）', es: 'u', th: 'u', vi: 'u', zh: 'u' }, type: 'consonant-sound', romanization: 'u' },
];

// Level 13: ㅠ row (규, 뉴, 듀...)
const level13Characters: HangulCharacter[] = [
  { character: '규', romanization: 'gyu', pronunciation: '규', type: 'consonant', example: { word: 'ㄱ + ㅠ', meaning: 'g + yu = gyu' } },
  { character: '뉴', romanization: 'nyu', pronunciation: '뉴', type: 'consonant', example: { word: 'ㄴ + ㅠ', meaning: 'n + yu = nyu' } },
  { character: '듀', romanization: 'dyu', pronunciation: '듀', type: 'consonant', example: { word: 'ㄷ + ㅠ', meaning: 'd + yu = dyu' } },
  { character: '류', romanization: 'ryu', pronunciation: '류', type: 'consonant', example: { word: 'ㄹ + ㅠ', meaning: 'r + yu = ryu' } },
  { character: '뮤', romanization: 'myu', pronunciation: '뮤', type: 'consonant', example: { word: 'ㅁ + ㅠ', meaning: 'm + yu = myu' } },
  { character: '뷰', romanization: 'byu', pronunciation: '뷰', type: 'consonant', example: { word: 'ㅂ + ㅠ', meaning: 'b + yu = byu' } },
  { character: '슈', romanization: 'syu', pronunciation: '슈', type: 'consonant', example: { word: 'ㅅ + ㅠ', meaning: 's + yu = syu' } },
  { character: '유', romanization: 'yu', pronunciation: '유', type: 'consonant', example: { word: 'ㅇ + ㅠ', meaning: '(silent) + yu = yu' } },
];

const level13Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l13q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅠ', options: ['구', '규', '그', '기'], correctAnswer: 1 },
  { id: 'l13q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅠ', options: ['누', '뉴', '느', '니'], correctAnswer: 1 },
  { id: 'l13q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅠ', options: ['우', '유', '으', '이'], correctAnswer: 1 },
  { id: 'l13q4', templateKey: 'syllableComponents', character: '슈', options: ['ㅅ + ㅜ', 'ㅅ + ㅠ', 'ㅅ + ㅡ', 'ㅅ + ㅣ'], correctAnswer: 1 },
  { id: 'l13q5', templateKey: 'syllableRoman', character: '류', options: ['ru', 'ryu', 'reu', 'ri'], correctAnswer: 1 },
];

const level13Matching: MultilingualMatchingPair[] = [
  { id: 'l13m1', left: '규', right: { en: 'gyu (ㄱ+ㅠ)', ja: 'gyu（ギュ）', es: 'gyu', th: 'gyu', vi: 'gyu', zh: 'gyu' }, type: 'consonant-sound', romanization: 'gyu' },
  { id: 'l13m2', left: '뉴', right: { en: 'nyu (ㄴ+ㅠ)', ja: 'nyu（ニュ）', es: 'nyu', th: 'nyu', vi: 'nyu', zh: 'nyu' }, type: 'consonant-sound', romanization: 'nyu' },
  { id: 'l13m3', left: '류', right: { en: 'ryu (ㄹ+ㅠ)', ja: 'ryu（リュ）', es: 'ryu', th: 'ryu', vi: 'ryu', zh: 'ryu' }, type: 'consonant-sound', romanization: 'ryu' },
  { id: 'l13m4', left: '슈', right: { en: 'syu (ㅅ+ㅠ)', ja: 'syu（シュ）', es: 'syu', th: 'syu', vi: 'syu', zh: 'syu' }, type: 'consonant-sound', romanization: 'syu' },
  { id: 'l13m5', left: '유', right: { en: 'yu (ㅇ+ㅠ)', ja: 'yu（ユ）', es: 'yu', th: 'yu', vi: 'yu', zh: 'yu' }, type: 'consonant-sound', romanization: 'yu' },
];

// Level 14: ㅡ row (그, 느, 드...)
const level14Characters: HangulCharacter[] = [
  { character: '그', romanization: 'geu', pronunciation: '그', type: 'consonant', example: { word: 'ㄱ + ㅡ', meaning: 'g + eu = geu' } },
  { character: '느', romanization: 'neu', pronunciation: '느', type: 'consonant', example: { word: 'ㄴ + ㅡ', meaning: 'n + eu = neu' } },
  { character: '드', romanization: 'deu', pronunciation: '드', type: 'consonant', example: { word: 'ㄷ + ㅡ', meaning: 'd + eu = deu' } },
  { character: '르', romanization: 'reu', pronunciation: '르', type: 'consonant', example: { word: 'ㄹ + ㅡ', meaning: 'r + eu = reu' } },
  { character: '므', romanization: 'meu', pronunciation: '므', type: 'consonant', example: { word: 'ㅁ + ㅡ', meaning: 'm + eu = meu' } },
  { character: '브', romanization: 'beu', pronunciation: '브', type: 'consonant', example: { word: 'ㅂ + ㅡ', meaning: 'b + eu = beu' } },
  { character: '스', romanization: 'seu', pronunciation: '스', type: 'consonant', example: { word: 'ㅅ + ㅡ', meaning: 's + eu = seu' } },
  { character: '으', romanization: 'eu', pronunciation: '으', type: 'consonant', example: { word: 'ㅇ + ㅡ', meaning: '(silent) + eu = eu' } },
];

const level14Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l14q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅡ', options: ['구', '규', '그', '기'], correctAnswer: 2 },
  { id: 'l14q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅡ', options: ['누', '뉴', '느', '니'], correctAnswer: 2 },
  { id: 'l14q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅡ', options: ['우', '유', '으', '이'], correctAnswer: 2 },
  { id: 'l14q4', templateKey: 'syllableComponents', character: '스', options: ['ㅅ + ㅜ', 'ㅅ + ㅠ', 'ㅅ + ㅡ', 'ㅅ + ㅣ'], correctAnswer: 2 },
  { id: 'l14q5', templateKey: 'syllableRoman', character: '르', options: ['ru', 'ryu', 'reu', 'ri'], correctAnswer: 2 },
];

const level14Matching: MultilingualMatchingPair[] = [
  { id: 'l14m1', left: '그', right: { en: 'geu (ㄱ+ㅡ)', ja: 'geu（グ）', es: 'geu', th: 'geu', vi: 'geu', zh: 'geu' }, type: 'consonant-sound', romanization: 'geu' },
  { id: 'l14m2', left: '느', right: { en: 'neu (ㄴ+ㅡ)', ja: 'neu（ヌ）', es: 'neu', th: 'neu', vi: 'neu', zh: 'neu' }, type: 'consonant-sound', romanization: 'neu' },
  { id: 'l14m3', left: '드', right: { en: 'deu (ㄷ+ㅡ)', ja: 'deu（ドゥ）', es: 'deu', th: 'deu', vi: 'deu', zh: 'deu' }, type: 'consonant-sound', romanization: 'deu' },
  { id: 'l14m4', left: '스', right: { en: 'seu (ㅅ+ㅡ)', ja: 'seu（ス）', es: 'seu', th: 'seu', vi: 'seu', zh: 'seu' }, type: 'consonant-sound', romanization: 'seu' },
  { id: 'l14m5', left: '으', right: { en: 'eu (ㅇ+ㅡ)', ja: 'eu（ウ）', es: 'eu', th: 'eu', vi: 'eu', zh: 'eu' }, type: 'consonant-sound', romanization: 'eu' },
];

// Level 15: ㅣ row (기, 니, 디...)
const level15Characters: HangulCharacter[] = [
  { character: '기', romanization: 'gi', pronunciation: '기', type: 'consonant', example: { word: 'ㄱ + ㅣ', meaning: 'g + i = gi' } },
  { character: '니', romanization: 'ni', pronunciation: '니', type: 'consonant', example: { word: 'ㄴ + ㅣ', meaning: 'n + i = ni' } },
  { character: '디', romanization: 'di', pronunciation: '디', type: 'consonant', example: { word: 'ㄷ + ㅣ', meaning: 'd + i = di' } },
  { character: '리', romanization: 'ri', pronunciation: '리', type: 'consonant', example: { word: 'ㄹ + ㅣ', meaning: 'r + i = ri' } },
  { character: '미', romanization: 'mi', pronunciation: '미', type: 'consonant', example: { word: 'ㅁ + ㅣ', meaning: 'm + i = mi' } },
  { character: '비', romanization: 'bi', pronunciation: '비', type: 'consonant', example: { word: 'ㅂ + ㅣ', meaning: 'b + i = bi' } },
  { character: '시', romanization: 'si', pronunciation: '시', type: 'consonant', example: { word: 'ㅅ + ㅣ', meaning: 's + i = si' } },
  { character: '이', romanization: 'i', pronunciation: '이', type: 'consonant', example: { word: 'ㅇ + ㅣ', meaning: '(silent) + i = i' } },
];

const level15Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l15q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅣ', options: ['구', '규', '그', '기'], correctAnswer: 3 },
  { id: 'l15q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅣ', options: ['누', '뉴', '느', '니'], correctAnswer: 3 },
  { id: 'l15q3', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅣ', options: ['우', '유', '으', '이'], correctAnswer: 3 },
  { id: 'l15q4', templateKey: 'syllableComponents', character: '시', options: ['ㅅ + ㅜ', 'ㅅ + ㅠ', 'ㅅ + ㅡ', 'ㅅ + ㅣ'], correctAnswer: 3 },
  { id: 'l15q5', templateKey: 'syllableRoman', character: '리', options: ['ru', 'ryu', 'reu', 'ri'], correctAnswer: 3 },
];

const level15Matching: MultilingualMatchingPair[] = [
  { id: 'l15m1', left: '기', right: { en: 'gi (ㄱ+ㅣ)', ja: 'gi（ギ）', es: 'gi', th: 'gi', vi: 'gi', zh: 'gi' }, type: 'consonant-sound', romanization: 'gi' },
  { id: 'l15m2', left: '니', right: { en: 'ni (ㄴ+ㅣ)', ja: 'ni（ニ）', es: 'ni', th: 'ni', vi: 'ni', zh: 'ni' }, type: 'consonant-sound', romanization: 'ni' },
  { id: 'l15m3', left: '리', right: { en: 'ri (ㄹ+ㅣ)', ja: 'ri（リ）', es: 'ri', th: 'ri', vi: 'ri', zh: 'ri' }, type: 'consonant-sound', romanization: 'ri' },
  { id: 'l15m4', left: '시', right: { en: 'si (ㅅ+ㅣ)', ja: 'si（シ）', es: 'si', th: 'si', vi: 'si', zh: 'si' }, type: 'consonant-sound', romanization: 'si' },
  { id: 'l15m5', left: '이', right: { en: 'i (ㅇ+ㅣ)', ja: 'i（イ）', es: 'i', th: 'i', vi: 'i', zh: 'i' }, type: 'consonant-sound', romanization: 'i' },
];

// ============================================
// PHASE 4: Double Consonants (Levels 16-17)
// ============================================

// Level 16: Double Consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)
// Uses existing doubleConsonants from consonants.ts

// Level 17: Double consonant + vowel combinations
const level17Characters: HangulCharacter[] = [
  { character: '까', romanization: 'kka', pronunciation: '까', type: 'complex-consonant', example: { word: 'ㄲ + ㅏ', meaning: 'kk + a = kka' } },
  { character: '따', romanization: 'tta', pronunciation: '따', type: 'complex-consonant', example: { word: 'ㄸ + ㅏ', meaning: 'tt + a = tta' } },
  { character: '빠', romanization: 'ppa', pronunciation: '빠', type: 'complex-consonant', example: { word: 'ㅃ + ㅏ', meaning: 'pp + a = ppa' } },
  { character: '싸', romanization: 'ssa', pronunciation: '싸', type: 'complex-consonant', example: { word: 'ㅆ + ㅏ', meaning: 'ss + a = ssa' } },
  { character: '짜', romanization: 'jja', pronunciation: '짜', type: 'complex-consonant', example: { word: 'ㅉ + ㅏ', meaning: 'jj + a = jja' } },
  { character: '꺼', romanization: 'kkeo', pronunciation: '꺼', type: 'complex-consonant', example: { word: 'ㄲ + ㅓ', meaning: 'kk + eo = kkeo' } },
  { character: '쏘', romanization: 'sso', pronunciation: '쏘', type: 'complex-consonant', example: { word: 'ㅆ + ㅗ', meaning: 'ss + o = sso' } },
  { character: '뿌', romanization: 'ppu', pronunciation: '뿌', type: 'complex-consonant', example: { word: 'ㅃ + ㅜ', meaning: 'pp + u = ppu' } },
];

const level17Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l17q1', templateKey: 'combineSyllable', character: 'ㄲ', character2: 'ㅏ', options: ['가', '까', '카', '갸'], correctAnswer: 1 },
  { id: 'l17q2', templateKey: 'combineSyllable', character: 'ㄸ', character2: 'ㅏ', options: ['다', '따', '타', '댜'], correctAnswer: 1 },
  { id: 'l17q3', templateKey: 'combineSyllable', character: 'ㅃ', character2: 'ㅏ', options: ['바', '빠', '파', '뱌'], correctAnswer: 1 },
  { id: 'l17q4', templateKey: 'combineSyllable', character: 'ㅆ', character2: 'ㅏ', options: ['사', '싸', '샤', '써'], correctAnswer: 1 },
  { id: 'l17q5', templateKey: 'combineSyllable', character: 'ㅉ', character2: 'ㅏ', options: ['자', '짜', '차', '쟈'], correctAnswer: 1 },
  { id: 'l17q6', templateKey: 'syllableComponents', character: '꺼', options: ['ㄲ + ㅏ', 'ㄲ + ㅓ', 'ㄲ + ㅗ', 'ㄲ + ㅜ'], correctAnswer: 1 },
];

const level17Matching: MultilingualMatchingPair[] = [
  { id: 'l17m1', left: '까', right: { en: 'kka (ㄲ+ㅏ)', ja: 'kka（ッカ）', es: 'kka', th: 'kka', vi: 'kka', zh: 'kka' }, type: 'consonant-sound', romanization: 'kka' },
  { id: 'l17m2', left: '따', right: { en: 'tta (ㄸ+ㅏ)', ja: 'tta（ッタ）', es: 'tta', th: 'tta', vi: 'tta', zh: 'tta' }, type: 'consonant-sound', romanization: 'tta' },
  { id: 'l17m3', left: '빠', right: { en: 'ppa (ㅃ+ㅏ)', ja: 'ppa（ッパ）', es: 'ppa', th: 'ppa', vi: 'ppa', zh: 'ppa' }, type: 'consonant-sound', romanization: 'ppa' },
  { id: 'l17m4', left: '싸', right: { en: 'ssa (ㅆ+ㅏ)', ja: 'ssa（ッサ）', es: 'ssa', th: 'ssa', vi: 'ssa', zh: 'ssa' }, type: 'consonant-sound', romanization: 'ssa' },
  { id: 'l17m5', left: '짜', right: { en: 'jja (ㅉ+ㅏ)', ja: 'jja（ッチャ）', es: 'jja', th: 'jja', vi: 'jja', zh: 'jja' }, type: 'consonant-sound', romanization: 'jja' },
];

// ============================================
// PHASE 5: Complex Vowels (Levels 18-20)
// ============================================

// Level 18: Complex Vowels I (ㅐ, ㅔ, ㅘ, ㅝ)
const level18Characters: HangulCharacter[] = [
  { character: '개', romanization: 'gae', pronunciation: '개', type: 'complex-vowel', example: { word: 'ㄱ + ㅐ', meaning: 'g + ae = gae' } },
  { character: '네', romanization: 'ne', pronunciation: '네', type: 'complex-vowel', example: { word: 'ㄴ + ㅔ', meaning: 'n + e = ne' } },
  { character: '과', romanization: 'gwa', pronunciation: '과', type: 'complex-vowel', example: { word: 'ㄱ + ㅘ', meaning: 'g + wa = gwa' } },
  { character: '궈', romanization: 'gwo', pronunciation: '궈', type: 'complex-vowel', example: { word: 'ㄱ + ㅝ', meaning: 'g + wo = gwo' } },
  { character: '대', romanization: 'dae', pronunciation: '대', type: 'complex-vowel', example: { word: 'ㄷ + ㅐ', meaning: 'd + ae = dae' } },
  { character: '세', romanization: 'se', pronunciation: '세', type: 'complex-vowel', example: { word: 'ㅅ + ㅔ', meaning: 's + e = se' } },
  { character: '화', romanization: 'hwa', pronunciation: '화', type: 'complex-vowel', example: { word: 'ㅎ + ㅘ', meaning: 'h + wa = hwa' } },
  { character: '워', romanization: 'wo', pronunciation: '워', type: 'complex-vowel', example: { word: 'ㅇ + ㅝ', meaning: '(silent) + wo = wo' } },
];

const level18Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l18q1', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅐ', options: ['가', '개', '과', '궤'], correctAnswer: 1 },
  { id: 'l18q2', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅔ', options: ['나', '내', '네', '뉘'], correctAnswer: 2 },
  { id: 'l18q3', templateKey: 'combineSyllable', character: 'ㅎ', character2: 'ㅘ', options: ['하', '화', '훠', '휘'], correctAnswer: 1 },
  { id: 'l18q4', templateKey: 'syllableComponents', character: '워', options: ['ㅇ + ㅘ', 'ㅇ + ㅝ', 'ㅇ + ㅟ', 'ㅇ + ㅢ'], correctAnswer: 1 },
  { id: 'l18q5', templateKey: 'syllableRoman', character: '세', options: ['sae', 'se', 'swa', 'swo'], correctAnswer: 1 },
];

const level18Matching: MultilingualMatchingPair[] = [
  { id: 'l18m1', left: '개', right: { en: 'gae (ㄱ+ㅐ)', ja: 'gae（ゲ）', es: 'gae', th: 'gae', vi: 'gae', zh: 'gae' }, type: 'vowel-sound', romanization: 'gae' },
  { id: 'l18m2', left: '네', right: { en: 'ne (ㄴ+ㅔ)', ja: 'ne（ネ）', es: 'ne', th: 'ne', vi: 'ne', zh: 'ne' }, type: 'vowel-sound', romanization: 'ne' },
  { id: 'l18m3', left: '과', right: { en: 'gwa (ㄱ+ㅘ)', ja: 'gwa（グァ）', es: 'gwa', th: 'gwa', vi: 'gwa', zh: 'gwa' }, type: 'vowel-sound', romanization: 'gwa' },
  { id: 'l18m4', left: '화', right: { en: 'hwa (ㅎ+ㅘ)', ja: 'hwa（ファ）', es: 'hwa', th: 'hwa', vi: 'hwa', zh: 'hwa' }, type: 'vowel-sound', romanization: 'hwa' },
  { id: 'l18m5', left: '워', right: { en: 'wo (ㅇ+ㅝ)', ja: 'wo（ウォ）', es: 'wo', th: 'wo', vi: 'wo', zh: 'wo' }, type: 'vowel-sound', romanization: 'wo' },
];

// Level 19: Complex Vowels II (ㅙ, ㅞ, ㅚ, ㅟ, ㅢ)
const level19Characters: HangulCharacter[] = [
  { character: '왜', romanization: 'wae', pronunciation: '왜', type: 'complex-vowel', example: { word: 'ㅇ + ㅙ', meaning: '(silent) + wae = wae' } },
  { character: '웨', romanization: 'we', pronunciation: '웨', type: 'complex-vowel', example: { word: 'ㅇ + ㅞ', meaning: '(silent) + we = we' } },
  { character: '외', romanization: 'oe', pronunciation: '외', type: 'complex-vowel', example: { word: 'ㅇ + ㅚ', meaning: '(silent) + oe = oe' } },
  { character: '위', romanization: 'wi', pronunciation: '위', type: 'complex-vowel', example: { word: 'ㅇ + ㅟ', meaning: '(silent) + wi = wi' } },
  { character: '의', romanization: 'ui', pronunciation: '의', type: 'complex-vowel', example: { word: 'ㅇ + ㅢ', meaning: '(silent) + ui = ui' } },
  { character: '괴', romanization: 'goe', pronunciation: '괴', type: 'complex-vowel', example: { word: 'ㄱ + ㅚ', meaning: 'g + oe = goe' } },
  { character: '귀', romanization: 'gwi', pronunciation: '귀', type: 'complex-vowel', example: { word: 'ㄱ + ㅟ', meaning: 'g + wi = gwi' } },
  { character: '희', romanization: 'hui', pronunciation: '희', type: 'complex-vowel', example: { word: 'ㅎ + ㅢ', meaning: 'h + ui = hui' } },
];

const level19Quizzes: MultilingualQuizQuestion[] = [
  { id: 'l19q1', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅙ', options: ['와', '왜', '외', '워'], correctAnswer: 1 },
  { id: 'l19q2', templateKey: 'combineSyllable', character: 'ㅇ', character2: 'ㅚ', options: ['와', '왜', '외', '워'], correctAnswer: 2 },
  { id: 'l19q3', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅟ', options: ['과', '궤', '괴', '귀'], correctAnswer: 3 },
  { id: 'l19q4', templateKey: 'syllableComponents', character: '의', options: ['ㅇ + ㅙ', 'ㅇ + ㅞ', 'ㅇ + ㅟ', 'ㅇ + ㅢ'], correctAnswer: 3 },
  { id: 'l19q5', templateKey: 'syllableRoman', character: '위', options: ['wae', 'we', 'oe', 'wi'], correctAnswer: 3 },
];

const level19Matching: MultilingualMatchingPair[] = [
  { id: 'l19m1', left: '왜', right: { en: 'wae (ㅇ+ㅙ)', ja: 'wae（ウェ）', es: 'wae', th: 'wae', vi: 'wae', zh: 'wae' }, type: 'vowel-sound', romanization: 'wae' },
  { id: 'l19m2', left: '웨', right: { en: 'we (ㅇ+ㅞ)', ja: 'we（ウェ）', es: 'we', th: 'we', vi: 'we', zh: 'we' }, type: 'vowel-sound', romanization: 'we' },
  { id: 'l19m3', left: '외', right: { en: 'oe (ㅇ+ㅚ)', ja: 'oe（ウェ）', es: 'oe', th: 'oe', vi: 'oe', zh: 'oe' }, type: 'vowel-sound', romanization: 'oe' },
  { id: 'l19m4', left: '위', right: { en: 'wi (ㅇ+ㅟ)', ja: 'wi（ウィ）', es: 'wi', th: 'wi', vi: 'wi', zh: 'wi' }, type: 'vowel-sound', romanization: 'wi' },
  { id: 'l19m5', left: '의', right: { en: 'ui (ㅇ+ㅢ)', ja: 'ui（ウィ）', es: 'ui', th: 'ui', vi: 'ui', zh: 'ui' }, type: 'vowel-sound', romanization: 'ui' },
];

// Level 20: Final Review - All combinations
const level20Quizzes: MultilingualQuizQuestion[] = [
  // Consonant review
  { id: 'l20q1', templateKey: 'pronunciationName', character: 'ㄱ', options: ['기역', '니은', '디귿', '리을'], correctAnswer: 0 },
  { id: 'l20q2', templateKey: 'pronunciationName', character: 'ㅎ', options: ['피읖', '티읕', '키읔', '히읗'], correctAnswer: 3 },
  // Vowel review
  { id: 'l20q3', templateKey: 'vowelPronunciation', character: 'ㅗ', options: ['아', '어', '오', '우'], correctAnswer: 2 },
  { id: 'l20q4', templateKey: 'vowelPronunciation', character: 'ㅣ', options: ['우', '유', '으', '이'], correctAnswer: 3 },
  // Syllable combination review
  { id: 'l20q5', templateKey: 'combineSyllable', character: 'ㅎ', character2: 'ㅏ', options: ['가', '나', '다', '하'], correctAnswer: 3 },
  { id: 'l20q6', templateKey: 'combineSyllable', character: 'ㄱ', character2: 'ㅗ', options: ['가', '거', '고', '구'], correctAnswer: 2 },
  { id: 'l20q7', templateKey: 'combineSyllable', character: 'ㄴ', character2: 'ㅣ', options: ['나', '너', '노', '니'], correctAnswer: 3 },
  // Double consonant review
  { id: 'l20q8', templateKey: 'combineSyllable', character: 'ㄲ', character2: 'ㅏ', options: ['가', '까', '카', '갸'], correctAnswer: 1 },
  // Complex vowel review
  { id: 'l20q9', templateKey: 'combineSyllable', character: 'ㅎ', character2: 'ㅘ', options: ['하', '화', '훠', '휘'], correctAnswer: 1 },
  { id: 'l20q10', templateKey: 'syllableComponents', character: '위', options: ['ㅇ + ㅙ', 'ㅇ + ㅞ', 'ㅇ + ㅟ', 'ㅇ + ㅢ'], correctAnswer: 2 },
];

const level20Matching: MultilingualMatchingPair[] = [
  // Consonants
  { id: 'l20m1', left: 'ㄱ', right: { en: 'giyeok (g/k)', ja: 'キヨク (g/k)', es: 'giyeok', th: 'giyeok', vi: 'giyeok', zh: 'giyeok' }, type: 'consonant-name', romanization: 'g/k' },
  // Vowels
  { id: 'l20m2', left: 'ㅏ', right: { en: 'a (ah)', ja: 'a（ア）', es: 'a', th: 'a', vi: 'a', zh: 'a' }, type: 'vowel-name', romanization: 'a' },
  // Basic syllables
  { id: 'l20m3', left: '가', right: { en: 'ga (ㄱ+ㅏ)', ja: 'ga（ガ）', es: 'ga', th: 'ga', vi: 'ga', zh: 'ga' }, type: 'consonant-sound', romanization: 'ga' },
  { id: 'l20m4', left: '하', right: { en: 'ha (ㅎ+ㅏ)', ja: 'ha（ハ）', es: 'ha', th: 'ha', vi: 'ha', zh: 'ha' }, type: 'consonant-sound', romanization: 'ha' },
  // Double consonant syllables
  { id: 'l20m5', left: '까', right: { en: 'kka (ㄲ+ㅏ)', ja: 'kka（ッカ）', es: 'kka', th: 'kka', vi: 'kka', zh: 'kka' }, type: 'consonant-sound', romanization: 'kka' },
  // Complex vowel syllables
  { id: 'l20m6', left: '화', right: { en: 'hwa (ㅎ+ㅘ)', ja: 'hwa（ファ）', es: 'hwa', th: 'hwa', vi: 'hwa', zh: 'hwa' }, type: 'vowel-sound', romanization: 'hwa' },
];

// ============================================
// Beginner Levels Export (1-20)
// ============================================

export const beginnerLevels: HangulLevel[] = [
  // ==============================
  // PHASE 1: INDIVIDUAL LETTERS (Levels 1-4)
  // ==============================

  // Level 1: Basic Consonants I (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ)
  {
    level: 1,
    title: '기본 자음 I',
    titleKey: 'hangul.levels.level1Title',
    description: '한글의 기본 자음 ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ을 배워봅니다.',
    descriptionKey: 'hangul.levels.level1Desc',
    tier: 'beginner',
    characters: level1Consonants,
    quizQuestions: consonantQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: multilingualConsonantQuizzes1,
    matchingPairs: consonantMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: multilingualConsonantMatching1,
    reviewItems: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ'],
    requiredScore: 60,
    isPremium: false,
  },

  // Level 2: Basic Consonants II (ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ)
  {
    level: 2,
    title: '기본 자음 II',
    titleKey: 'hangul.levels.level2Title',
    description: '한글의 기본 자음 ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ을 배워봅니다.',
    descriptionKey: 'hangul.levels.level2Desc',
    tier: 'beginner',
    characters: level2Consonants,
    quizQuestions: consonantQuizQuestions.slice(4),
    multilingualQuizQuestions: multilingualConsonantQuizzes2,
    matchingPairs: consonantMatchingPairs.slice(4),
    multilingualMatchingPairs: multilingualConsonantMatching2,
    reviewItems: ['ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
    requiredScore: 60,
    isPremium: false,
  },

  // Level 3: Basic Vowels I (ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ)
  {
    level: 3,
    title: '기본 모음 I',
    titleKey: 'hangul.levels.level3Title',
    description: '한글의 기본 모음 ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ를 배워봅니다.',
    descriptionKey: 'hangul.levels.level3Desc',
    tier: 'beginner',
    characters: level3Vowels,
    quizQuestions: vowelQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: multilingualVowelQuizzes.slice(0, 2),
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: multilingualBasicVowelMatching.slice(0, 6),
    reviewItems: ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ'],
    requiredScore: 60,
    isPremium: false,
  },

  // Level 4: Basic Vowels II (ㅜ, ㅠ, ㅡ, ㅣ)
  {
    level: 4,
    title: '기본 모음 II',
    titleKey: 'hangul.levels.level4Title',
    description: '한글의 기본 모음 ㅜ, ㅠ, ㅡ, ㅣ를 배워봅니다.',
    descriptionKey: 'hangul.levels.level4Desc',
    tier: 'beginner',
    characters: level4Vowels,
    quizQuestions: vowelQuizQuestions.slice(4),
    multilingualQuizQuestions: multilingualVowelQuizzes.slice(2),
    matchingPairs: vowelMatchingPairs.slice(4),
    multilingualMatchingPairs: multilingualBasicVowelMatching.slice(6),
    reviewItems: ['ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
    requiredScore: 60,
    isPremium: false,
  },

  // ==============================
  // PHASE 2: Consonant + ㅏ Row (Levels 5-6)
  // ==============================

  // Level 5: 가나다라마바사 (ㄱ+ㅏ=가, ㄴ+ㅏ=나, etc.)
  {
    level: 5,
    title: '가나다라마바사',
    titleKey: 'hangul.levels.level5Title',
    description: '자음 ㄱ~ㅅ과 모음 ㅏ를 합쳐 가, 나, 다, 라, 마, 바, 사를 배워봅니다.',
    descriptionKey: 'hangul.levels.level5Desc',
    tier: 'beginner',
    characters: level5Characters,
    quizQuestions: consonantQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level5Quizzes,
    matchingPairs: consonantMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level5Matching,
    reviewItems: ['가', '나', '다', '라', '마', '바', '사'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 6: 아자차카타파하 (ㅇ+ㅏ=아, etc.)
  {
    level: 6,
    title: '아자차카타파하',
    titleKey: 'hangul.levels.level6Title',
    description: '자음 ㅇ~ㅎ과 모음 ㅏ를 합쳐 아, 자, 차, 카, 타, 파, 하를 배워봅니다.',
    descriptionKey: 'hangul.levels.level6Desc',
    tier: 'beginner',
    characters: level6Characters,
    quizQuestions: consonantQuizQuestions.slice(4, 6),
    multilingualQuizQuestions: level6Quizzes,
    matchingPairs: consonantMatchingPairs.slice(4),
    multilingualMatchingPairs: level6Matching,
    reviewItems: ['아', '자', '차', '카', '타', '파', '하'],
    requiredScore: 70,
    isPremium: false,
  },

  // ==============================
  // PHASE 3: Consonant + Other Basic Vowels (Levels 7-15)
  // ==============================

  // Level 7: ㅑ row (갸, 냐, 댜...)
  {
    level: 7,
    title: 'ㅑ 모음 조합',
    titleKey: 'hangul.levels.level7Title',
    description: '자음과 모음 ㅑ를 합쳐 갸, 냐, 댜, 랴, 먀, 뱌, 샤, 야를 배워봅니다.',
    descriptionKey: 'hangul.levels.level7Desc',
    tier: 'beginner',
    characters: level7Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level7Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level7Matching,
    reviewItems: ['갸', '냐', '랴', '샤', '야'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 8: ㅓ row (거, 너, 더...)
  {
    level: 8,
    title: 'ㅓ 모음 조합',
    titleKey: 'hangul.levels.level8Title',
    description: '자음과 모음 ㅓ를 합쳐 거, 너, 더, 러, 머, 버, 서, 어를 배워봅니다.',
    descriptionKey: 'hangul.levels.level8Desc',
    tier: 'beginner',
    characters: level8Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level8Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level8Matching,
    reviewItems: ['거', '너', '더', '서', '어'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 9: ㅕ row (겨, 녀, 뎌...)
  {
    level: 9,
    title: 'ㅕ 모음 조합',
    titleKey: 'hangul.levels.level9Title',
    description: '자음과 모음 ㅕ를 합쳐 겨, 녀, 뎌, 려, 며, 벼, 셔, 여를 배워봅니다.',
    descriptionKey: 'hangul.levels.level9Desc',
    tier: 'beginner',
    characters: level9Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level9Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level9Matching,
    reviewItems: ['겨', '녀', '려', '셔', '여'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 10: ㅗ row (고, 노, 도...)
  {
    level: 10,
    title: 'ㅗ 모음 조합',
    titleKey: 'hangul.levels.level10Title',
    description: '자음과 모음 ㅗ를 합쳐 고, 노, 도, 로, 모, 보, 소, 오를 배워봅니다.',
    descriptionKey: 'hangul.levels.level10Desc',
    tier: 'beginner',
    characters: level10Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level10Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level10Matching,
    reviewItems: ['고', '노', '도', '소', '오'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 11: ㅛ row (교, 뇨, 됴...)
  {
    level: 11,
    title: 'ㅛ 모음 조합',
    titleKey: 'hangul.levels.level11Title',
    description: '자음과 모음 ㅛ를 합쳐 교, 뇨, 됴, 료, 묘, 뵤, 쇼, 요를 배워봅니다.',
    descriptionKey: 'hangul.levels.level11Desc',
    tier: 'beginner',
    characters: level11Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level11Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level11Matching,
    reviewItems: ['교', '료', '쇼', '요'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 12: ㅜ row (구, 누, 두...)
  {
    level: 12,
    title: 'ㅜ 모음 조합',
    titleKey: 'hangul.levels.level12Title',
    description: '자음과 모음 ㅜ를 합쳐 구, 누, 두, 루, 무, 부, 수, 우를 배워봅니다.',
    descriptionKey: 'hangul.levels.level12Desc',
    tier: 'beginner',
    characters: level12Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level12Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level12Matching,
    reviewItems: ['구', '누', '두', '수', '우'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 13: ㅠ row (규, 뉴, 듀...)
  {
    level: 13,
    title: 'ㅠ 모음 조합',
    titleKey: 'hangul.levels.level13Title',
    description: '자음과 모음 ㅠ를 합쳐 규, 뉴, 듀, 류, 뮤, 뷰, 슈, 유를 배워봅니다.',
    descriptionKey: 'hangul.levels.level13Desc',
    tier: 'beginner',
    characters: level13Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level13Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level13Matching,
    reviewItems: ['규', '뉴', '류', '슈', '유'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 14: ㅡ row (그, 느, 드...)
  {
    level: 14,
    title: 'ㅡ 모음 조합',
    titleKey: 'hangul.levels.level14Title',
    description: '자음과 모음 ㅡ를 합쳐 그, 느, 드, 르, 므, 브, 스, 으를 배워봅니다.',
    descriptionKey: 'hangul.levels.level14Desc',
    tier: 'beginner',
    characters: level14Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level14Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level14Matching,
    reviewItems: ['그', '느', '드', '스', '으'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 15: ㅣ row (기, 니, 디...)
  {
    level: 15,
    title: 'ㅣ 모음 조합',
    titleKey: 'hangul.levels.level15Title',
    description: '자음과 모음 ㅣ를 합쳐 기, 니, 디, 리, 미, 비, 시, 이를 배워봅니다.',
    descriptionKey: 'hangul.levels.level15Desc',
    tier: 'beginner',
    characters: level15Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 2),
    multilingualQuizQuestions: level15Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level15Matching,
    reviewItems: ['기', '니', '리', '시', '이'],
    requiredScore: 70,
    isPremium: false,
  },

  // ==============================
  // PHASE 4: Double Consonants (Levels 16-17)
  // ==============================

  // Level 16: Double Consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)
  {
    level: 16,
    title: '쌍자음',
    titleKey: 'hangul.levels.level16Title',
    description: '쌍자음 ㄲ, ㄸ, ㅃ, ㅆ, ㅉ를 배워봅니다.',
    descriptionKey: 'hangul.levels.level16Desc',
    tier: 'beginner',
    characters: doubleConsonants,
    quizQuestions: consonantQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: multilingualDoubleConsonantQuizzes,
    matchingPairs: consonantMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: multilingualDoubleConsonantMatching,
    reviewItems: ['ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 17: Double consonant + vowel combinations
  {
    level: 17,
    title: '쌍자음 + 모음 조합',
    titleKey: 'hangul.levels.level17Title',
    description: '쌍자음과 모음을 합쳐 까, 따, 빠, 싸, 짜 등을 배워봅니다.',
    descriptionKey: 'hangul.levels.level17Desc',
    tier: 'beginner',
    characters: level17Characters,
    quizQuestions: consonantQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: level17Quizzes,
    matchingPairs: consonantMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level17Matching,
    reviewItems: ['까', '따', '빠', '싸', '짜'],
    requiredScore: 70,
    isPremium: false,
  },

  // ==============================
  // PHASE 5: Complex Vowels (Levels 18-20)
  // ==============================

  // Level 18: Complex Vowels I (ㅐ, ㅔ, ㅘ, ㅝ)
  {
    level: 18,
    title: '복합 모음 I',
    titleKey: 'hangul.levels.level18Title',
    description: '복합 모음 ㅐ, ㅔ, ㅘ, ㅝ와 자음을 합쳐 음절을 배워봅니다.',
    descriptionKey: 'hangul.levels.level18Desc',
    tier: 'beginner',
    characters: level18Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: level18Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level18Matching,
    reviewItems: ['개', '네', '과', '화', '워'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 19: Complex Vowels II (ㅙ, ㅞ, ㅚ, ㅟ, ㅢ)
  {
    level: 19,
    title: '복합 모음 II',
    titleKey: 'hangul.levels.level19Title',
    description: '복합 모음 ㅙ, ㅞ, ㅚ, ㅟ, ㅢ와 자음을 합쳐 음절을 배워봅니다.',
    descriptionKey: 'hangul.levels.level19Desc',
    tier: 'beginner',
    characters: level19Characters,
    quizQuestions: vowelQuizQuestions.slice(0, 4),
    multilingualQuizQuestions: level19Quizzes,
    matchingPairs: vowelMatchingPairs.slice(0, 4),
    multilingualMatchingPairs: level19Matching,
    reviewItems: ['왜', '웨', '외', '위', '의'],
    requiredScore: 70,
    isPremium: false,
  },

  // Level 20: Final Review - All combinations
  {
    level: 20,
    title: '종합 복습',
    titleKey: 'hangul.levels.level20Title',
    description: '지금까지 배운 모든 자음+모음 조합을 복습합니다.',
    descriptionKey: 'hangul.levels.level20Desc',
    tier: 'beginner',
    characters: [...level5Characters.slice(0, 3), ...level17Characters.slice(0, 2), ...level18Characters.slice(0, 2)],
    quizQuestions: consonantQuizQuestions,
    multilingualQuizQuestions: level20Quizzes,
    matchingPairs: consonantMatchingPairs,
    multilingualMatchingPairs: level20Matching,
    reviewItems: ['가', '나', '다', '하', '까', '싸', '개', '화', '위'],
    requiredScore: 80,
    isPremium: false,
  },
];
