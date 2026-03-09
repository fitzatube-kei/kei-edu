'use client';

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTTS } from '@/hooks/useTTS';
import { useLanguage } from '@/context/LanguageContext';
import { hangulLevels, getTierForLevel, TIER_COLORS } from '@/data/hangul';
import { HangulCharacter, MultilingualQuizQuestion } from '@/types';

// Interface for vocabulary item extracted from quiz questions
interface VocabularyItem {
  korean: string;
  romanization: string;
  translation: string;
}

// Hangul syllable decomposition to check if a syllable contains a specific jamo
const CHOSEONG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNGSEONG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const JONGSEONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

function syllableContainsJamo(syllable: string, jamo: string): boolean {
  const code = syllable.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return false;
  const idx = code - 0xAC00;
  const cho = CHOSEONG[Math.floor(idx / (21 * 28))];
  const jung = JUNGSEONG[Math.floor((idx % (21 * 28)) / 28)];
  // Only match 초성 for consonants, 중성 for vowels (not 종성)
  if (CHOSEONG.includes(jamo)) return cho === jamo;
  if (JUNGSEONG.includes(jamo)) return jung === jamo;
  return false;
}

function highlightWord(word: string, targetJamo: string): React.ReactNode {
  return word.split('').map((char, i) => {
    const contains = syllableContainsJamo(char, targetJamo);
    return (
      <span key={i} style={{ color: contains ? '#440687' : '#8BB700', fontWeight: 700 }}>
        {char}
      </span>
    );
  });
}

// Sound descriptions for consonants
const consonantSoundDescriptions: Record<string, { en: string; ja: string; zh: string; th: string; vi: string; es: string }> = {
  'ㄱ': {
    en: 'Like "g" in "go" or "k" in "kite" (softer at start)',
    ja: '「が」の「g」または「か」の「k」のような音',
    zh: '类似"go"中的"g"或"kite"中的"k"',
    th: 'เหมือน "ก" ในภาษาไทย',
    vi: 'Giong nhu "g" trong "go" hoac "k" trong "kite"',
    es: 'Como "g" en "gato" o "k" en "kilo"',
  },
  'ㄴ': {
    en: 'Like "n" in "no"',
    ja: '「な」の「n」のような音',
    zh: '类似"no"中的"n"',
    th: 'เหมือน "น" ในภาษาไทย',
    vi: 'Giong nhu "n" trong "no"',
    es: 'Como "n" en "no"',
  },
  'ㄷ': {
    en: 'Like "d" in "do" or "t" in "top"',
    ja: '「だ」の「d」または「た」の「t」のような音',
    zh: '类似"do"中的"d"或"top"中的"t"',
    th: 'เหมือน "ด" หรือ "ต" ในภาษาไทย',
    vi: 'Giong nhu "d" trong "do" hoac "t" trong "top"',
    es: 'Como "d" en "dado" o "t" en "tapa"',
  },
  'ㄹ': {
    en: 'Like "r" in "run" or "l" in "let" (flapped)',
    ja: '「ら」の「r」のような音（舌を弾く）',
    zh: '类似"r"和"l"之间的音',
    th: 'เหมือน "ร" หรือ "ล" ในภาษาไทย',
    vi: 'Giong nhu "r" trong "run" hoac "l" trong "let"',
    es: 'Como "r" suave o "l" en espanol',
  },
  'ㅁ': {
    en: 'Like "m" in "mom"',
    ja: '「ま」の「m」のような音',
    zh: '类似"mom"中的"m"',
    th: 'เหมือน "ม" ในภาษาไทย',
    vi: 'Giong nhu "m" trong "mom"',
    es: 'Como "m" en "mama"',
  },
  'ㅂ': {
    en: 'Like "b" in "boy" or "p" in "spin"',
    ja: '「ば」の「b」または「ぱ」の「p」のような音',
    zh: '类似"boy"中的"b"或"spin"中的"p"',
    th: 'เหมือน "บ" หรือ "ป" ในภาษาไทย',
    vi: 'Giong nhu "b" trong "boy" hoac "p" trong "spin"',
    es: 'Como "b" en "bien" o "p" suave',
  },
  'ㅅ': {
    en: 'Like "s" in "sun"',
    ja: '「さ」の「s」のような音',
    zh: '类似"sun"中的"s"',
    th: 'เหมือน "ซ" หรือ "ส" ในภาษาไทย',
    vi: 'Giong nhu "s" trong "sun"',
    es: 'Como "s" en "sol"',
  },
  'ㅇ': {
    en: 'Silent at start, "ng" at end (like in "sing")',
    ja: '語頭では無音、語尾では「ング」',
    zh: '开头无声，结尾像"sing"中的"ng"',
    th: 'เงียบเมื่ออยู่ต้น, เหมือน "ง" เมื่ออยู่ท้าย',
    vi: 'Im lang o dau, "ng" o cuoi',
    es: 'Silencioso al inicio, "ng" al final',
  },
  'ㅈ': {
    en: 'Like "j" in "jump"',
    ja: '「じゃ」の「j」のような音',
    zh: '类似"jump"中的"j"',
    th: 'เหมือน "จ" ในภาษาไทย',
    vi: 'Giong nhu "j" trong "jump"',
    es: 'Como "y" en "yo" o "j" inglesa',
  },
  'ㅊ': {
    en: 'Like "ch" in "cheese" (aspirated)',
    ja: '「ちゃ」の「ch」のような音（有気音）',
    zh: '类似"cheese"中的"ch"（送气音）',
    th: 'เหมือน "ช" ในภาษาไทย',
    vi: 'Giong nhu "ch" trong "cheese"',
    es: 'Como "ch" en "chocolate"',
  },
  'ㅋ': {
    en: 'Like "k" in "kite" (strongly aspirated)',
    ja: '「か」の「k」のような音（強い有気音）',
    zh: '类似"kite"中的"k"（强送气音）',
    th: 'เหมือน "ค" ในภาษาไทย',
    vi: 'Giong nhu "k" trong "kite"',
    es: 'Como "k" fuerte en "kilo"',
  },
  'ㅌ': {
    en: 'Like "t" in "top" (strongly aspirated)',
    ja: '「た」の「t」のような音（強い有気音）',
    zh: '类似"top"中的"t"（强送气音）',
    th: 'เหมือน "ท" ในภาษาไทย',
    vi: 'Giong nhu "t" trong "top"',
    es: 'Como "t" fuerte en "tapa"',
  },
  'ㅍ': {
    en: 'Like "p" in "pop" (strongly aspirated)',
    ja: '「ぱ」の「p」のような音（強い有気音）',
    zh: '类似"pop"中的"p"（强送气音）',
    th: 'เหมือน "พ" ในภาษาไทย',
    vi: 'Giong nhu "p" trong "pop"',
    es: 'Como "p" fuerte en "papa"',
  },
  'ㅎ': {
    en: 'Like "h" in "hello"',
    ja: '「は」の「h」のような音',
    zh: '类似"hello"中的"h"',
    th: 'เหมือน "ฮ" ในภาษาไทย',
    vi: 'Giong nhu "h" trong "hello"',
    es: 'Como "j" suave en "jota"',
  },
  // Double consonants
  'ㄲ': {
    en: 'Tense "kk" - like "k" with tension',
    ja: '緊張した「ック」のような音',
    zh: '紧音"kk" - 紧张的"k"音',
    th: 'เสียง "กก" เน้นเสียง',
    vi: '"kk" cang - giong "k" nhung cang hon',
    es: '"kk" tensa - como "k" con tension',
  },
  'ㄸ': {
    en: 'Tense "tt" - like "t" with tension',
    ja: '緊張した「ット」のような音',
    zh: '紧音"tt" - 紧张的"t"音',
    th: 'เสียง "ตต" เน้นเสียง',
    vi: '"tt" cang - giong "t" nhung cang hon',
    es: '"tt" tensa - como "t" con tension',
  },
  'ㅃ': {
    en: 'Tense "pp" - like "p" with tension',
    ja: '緊張した「ップ」のような音',
    zh: '紧音"pp" - 紧张的"p"音',
    th: 'เสียง "ปป" เน้นเสียง',
    vi: '"pp" cang - giong "p" nhung cang hon',
    es: '"pp" tensa - como "p" con tension',
  },
  'ㅆ': {
    en: 'Tense "ss" - like "s" with tension',
    ja: '緊張した「ッス」のような音',
    zh: '紧音"ss" - 紧张的"s"音',
    th: 'เสียง "ซซ" เน้นเสียง',
    vi: '"ss" cang - giong "s" nhung cang hon',
    es: '"ss" tensa - como "s" con tension',
  },
  'ㅉ': {
    en: 'Tense "jj" - like "j" with tension',
    ja: '緊張した「ッジ」のような音',
    zh: '紧音"jj" - 紧张的"j"音',
    th: 'เสียง "จจ" เน้นเสียง',
    vi: '"jj" cang - giong "j" nhung cang hon',
    es: '"jj" tensa - como "j" con tension',
  },
};

// Sound descriptions for vowels
const vowelSoundDescriptions: Record<string, { en: string; ja: string; zh: string; th: string; vi: string; es: string }> = {
  'ㅏ': {
    en: 'Like "a" in "father"',
    ja: '「あ」の「a」のような音',
    zh: '类似"father"中的"a"',
    th: 'เหมือน "อา" ในภาษาไทย',
    vi: 'Giong nhu "a" trong "father"',
    es: 'Como "a" en "papa"',
  },
  'ㅑ': {
    en: 'Like "ya" in "yard"',
    ja: '「や」のような音',
    zh: '类似"yard"中的"ya"',
    th: 'เหมือน "ยา" ในภาษาไทย',
    vi: 'Giong nhu "ya" trong "yard"',
    es: 'Como "ya" en "yate"',
  },
  'ㅓ': {
    en: 'Like "u" in "bus" or "o" in "son"',
    ja: '「お」と「あ」の中間のような音',
    zh: '类似"bus"中的"u"',
    th: 'เหมือน "เออ" ในภาษาไทย',
    vi: 'Giong nhu "u" trong "bus"',
    es: 'Entre "o" y "a", como en "amor"',
  },
  'ㅕ': {
    en: 'Like "yo" with mouth more open',
    ja: '「よ」に近い音',
    zh: '类似"yo"但嘴巴张开更大',
    th: 'เหมือน "เยอ" ในภาษาไทย',
    vi: 'Giong nhu "yo" nhung mo mieng hon',
    es: 'Como "yo" con boca mas abierta',
  },
  'ㅗ': {
    en: 'Like "o" in "go"',
    ja: '「お」のような音',
    zh: '类似"go"中的"o"',
    th: 'เหมือน "โอ" ในภาษาไทย',
    vi: 'Giong nhu "o" trong "go"',
    es: 'Como "o" en "hola"',
  },
  'ㅛ': {
    en: 'Like "yo" in "yogurt"',
    ja: '「よ」のような音',
    zh: '类似"yogurt"中的"yo"',
    th: 'เหมือน "โย" ในภาษาไทย',
    vi: 'Giong nhu "yo" trong "yogurt"',
    es: 'Como "yo" en "yogur"',
  },
  'ㅜ': {
    en: 'Like "oo" in "moon"',
    ja: '「う」のような音',
    zh: '类似"moon"中的"oo"',
    th: 'เหมือน "อู" ในภาษาไทย',
    vi: 'Giong nhu "oo" trong "moon"',
    es: 'Como "u" en "luna"',
  },
  'ㅠ': {
    en: 'Like "you" in "you"',
    ja: '「ゆ」のような音',
    zh: '类似"you"中的"you"',
    th: 'เหมือน "ยู" ในภาษาไทย',
    vi: 'Giong nhu "you" trong "you"',
    es: 'Como "yu" en "yugo"',
  },
  'ㅡ': {
    en: 'Like "u" in "put" but with lips spread',
    ja: '「う」を発音する時に唇を横に広げた音',
    zh: '类似"put"中的"u"但嘴唇展开',
    th: 'เหมือน "อือ" ในภาษาไทย',
    vi: 'Giong "u" nhung moi dan ra',
    es: 'Entre "u" e "i", labios estirados',
  },
  'ㅣ': {
    en: 'Like "ee" in "see"',
    ja: '「い」のような音',
    zh: '类似"see"中的"ee"',
    th: 'เหมือน "อี" ในภาษาไทย',
    vi: 'Giong nhu "ee" trong "see"',
    es: 'Como "i" en "si"',
  },
  // Complex vowels
  'ㅐ': {
    en: 'Like "e" in "bed"',
    ja: '「え」のような音',
    zh: '类似"bed"中的"e"',
    th: 'เหมือน "แอ" ในภาษาไทย',
    vi: 'Giong nhu "e" trong "bed"',
    es: 'Como "e" en "mesa"',
  },
  'ㅒ': {
    en: 'Like "ye" in "yes"',
    ja: '「いぇ」のような音',
    zh: '类似"yes"中的"ye"',
    th: 'เหมือน "แย" ในภาษาไทย',
    vi: 'Giong nhu "ye" trong "yes"',
    es: 'Como "ye" en "yerba"',
  },
  'ㅔ': {
    en: 'Like "e" in "bed" (similar to ae)',
    ja: '「え」のような音',
    zh: '类似"bed"中的"e"',
    th: 'เหมือน "เอ" ในภาษาไทย',
    vi: 'Giong nhu "e" trong "bed"',
    es: 'Como "e" en "mesa"',
  },
  'ㅖ': {
    en: 'Like "ye" in "yes"',
    ja: '「いぇ」のような音',
    zh: '类似"yes"中的"ye"',
    th: 'เหมือน "เย" ในภาษาไทย',
    vi: 'Giong nhu "ye" trong "yes"',
    es: 'Como "ye" en "yerba"',
  },
  'ㅘ': {
    en: 'Like "wa" in "water"',
    ja: '「わ」のような音',
    zh: '类似"water"中的"wa"',
    th: 'เหมือน "วา" ในภาษาไทย',
    vi: 'Giong nhu "wa" trong "water"',
    es: 'Como "ua" en "agua"',
  },
  'ㅙ': {
    en: 'Like "we" in "wet"',
    ja: '「うぇ」のような音',
    zh: '类似"wet"中的"we"',
    th: 'เหมือน "แว" ในภาษาไทย',
    vi: 'Giong nhu "we" trong "wet"',
    es: 'Como "ue" en "bueno"',
  },
  'ㅚ': {
    en: 'Like "we" (rounded lips)',
    ja: '「うぇ」のような音（唇を丸める）',
    zh: '类似"we"（嘴唇圆形）',
    th: 'เหมือน "เว" ในภาษาไทย',
    vi: 'Giong nhu "we" (moi tron)',
    es: 'Como "ue" con labios redondeados',
  },
  'ㅝ': {
    en: 'Like "wo" in "won"',
    ja: '「うぉ」のような音',
    zh: '类似"won"中的"wo"',
    th: 'เหมือน "วอ" ในภาษาไทย',
    vi: 'Giong nhu "wo" trong "won"',
    es: 'Como "uo" en "cuota"',
  },
  'ㅞ': {
    en: 'Like "we" in "wet"',
    ja: '「うぇ」のような音',
    zh: '类似"wet"中的"we"',
    th: 'เหมือน "เว" ในภาษาไทย',
    vi: 'Giong nhu "we" trong "wet"',
    es: 'Como "ue" en "bueno"',
  },
  'ㅟ': {
    en: 'Like "we" with tight lips',
    ja: '「うぃ」のような音',
    zh: '类似"we"但嘴唇收紧',
    th: 'เหมือน "วี" ในภาษาไทย',
    vi: 'Giong nhu "we" nhung moi chat',
    es: 'Como "ui" en "cuidado"',
  },
  'ㅢ': {
    en: 'Like "ui" - "eu" then "i"',
    ja: '「うぃ」のような音',
    zh: '像"ui" - 先发"eu"再发"i"',
    th: 'เหมือน "อือ-อี" ในภาษาไทย',
    vi: 'Giong "ui" - "eu" roi "i"',
    es: 'Como "ui" - "eu" luego "i"',
  },
};

// Example syllables for each character
const exampleSyllables: Record<string, { syllables: Array<{ consonant: string; vowel: string; result: string; romanization: string }> }> = {
  'ㄱ': {
    syllables: [
      { consonant: 'ㄱ', vowel: 'ㅏ', result: '가', romanization: 'ga' },
      { consonant: 'ㄱ', vowel: 'ㅗ', result: '고', romanization: 'go' },
      { consonant: 'ㄱ', vowel: 'ㅜ', result: '구', romanization: 'gu' },
    ],
  },
  'ㄴ': {
    syllables: [
      { consonant: 'ㄴ', vowel: 'ㅏ', result: '나', romanization: 'na' },
      { consonant: 'ㄴ', vowel: 'ㅗ', result: '노', romanization: 'no' },
      { consonant: 'ㄴ', vowel: 'ㅜ', result: '누', romanization: 'nu' },
    ],
  },
  'ㄷ': {
    syllables: [
      { consonant: 'ㄷ', vowel: 'ㅏ', result: '다', romanization: 'da' },
      { consonant: 'ㄷ', vowel: 'ㅗ', result: '도', romanization: 'do' },
      { consonant: 'ㄷ', vowel: 'ㅜ', result: '두', romanization: 'du' },
    ],
  },
  'ㄹ': {
    syllables: [
      { consonant: 'ㄹ', vowel: 'ㅏ', result: '라', romanization: 'ra' },
      { consonant: 'ㄹ', vowel: 'ㅗ', result: '로', romanization: 'ro' },
      { consonant: 'ㄹ', vowel: 'ㅜ', result: '루', romanization: 'ru' },
    ],
  },
  'ㅁ': {
    syllables: [
      { consonant: 'ㅁ', vowel: 'ㅏ', result: '마', romanization: 'ma' },
      { consonant: 'ㅁ', vowel: 'ㅗ', result: '모', romanization: 'mo' },
      { consonant: 'ㅁ', vowel: 'ㅜ', result: '무', romanization: 'mu' },
    ],
  },
  'ㅂ': {
    syllables: [
      { consonant: 'ㅂ', vowel: 'ㅏ', result: '바', romanization: 'ba' },
      { consonant: 'ㅂ', vowel: 'ㅗ', result: '보', romanization: 'bo' },
      { consonant: 'ㅂ', vowel: 'ㅜ', result: '부', romanization: 'bu' },
    ],
  },
  'ㅅ': {
    syllables: [
      { consonant: 'ㅅ', vowel: 'ㅏ', result: '사', romanization: 'sa' },
      { consonant: 'ㅅ', vowel: 'ㅗ', result: '소', romanization: 'so' },
      { consonant: 'ㅅ', vowel: 'ㅜ', result: '수', romanization: 'su' },
    ],
  },
  'ㅇ': {
    syllables: [
      { consonant: 'ㅇ', vowel: 'ㅏ', result: '아', romanization: 'a' },
      { consonant: 'ㅇ', vowel: 'ㅗ', result: '오', romanization: 'o' },
      { consonant: 'ㅇ', vowel: 'ㅜ', result: '우', romanization: 'u' },
    ],
  },
  'ㅈ': {
    syllables: [
      { consonant: 'ㅈ', vowel: 'ㅏ', result: '자', romanization: 'ja' },
      { consonant: 'ㅈ', vowel: 'ㅗ', result: '조', romanization: 'jo' },
      { consonant: 'ㅈ', vowel: 'ㅜ', result: '주', romanization: 'ju' },
    ],
  },
  'ㅊ': {
    syllables: [
      { consonant: 'ㅊ', vowel: 'ㅏ', result: '차', romanization: 'cha' },
      { consonant: 'ㅊ', vowel: 'ㅗ', result: '초', romanization: 'cho' },
      { consonant: 'ㅊ', vowel: 'ㅜ', result: '추', romanization: 'chu' },
    ],
  },
  'ㅋ': {
    syllables: [
      { consonant: 'ㅋ', vowel: 'ㅏ', result: '카', romanization: 'ka' },
      { consonant: 'ㅋ', vowel: 'ㅗ', result: '코', romanization: 'ko' },
      { consonant: 'ㅋ', vowel: 'ㅜ', result: '쿠', romanization: 'ku' },
    ],
  },
  'ㅌ': {
    syllables: [
      { consonant: 'ㅌ', vowel: 'ㅏ', result: '타', romanization: 'ta' },
      { consonant: 'ㅌ', vowel: 'ㅗ', result: '토', romanization: 'to' },
      { consonant: 'ㅌ', vowel: 'ㅜ', result: '투', romanization: 'tu' },
    ],
  },
  'ㅍ': {
    syllables: [
      { consonant: 'ㅍ', vowel: 'ㅏ', result: '파', romanization: 'pa' },
      { consonant: 'ㅍ', vowel: 'ㅗ', result: '포', romanization: 'po' },
      { consonant: 'ㅍ', vowel: 'ㅜ', result: '푸', romanization: 'pu' },
    ],
  },
  'ㅎ': {
    syllables: [
      { consonant: 'ㅎ', vowel: 'ㅏ', result: '하', romanization: 'ha' },
      { consonant: 'ㅎ', vowel: 'ㅗ', result: '호', romanization: 'ho' },
      { consonant: 'ㅎ', vowel: 'ㅜ', result: '후', romanization: 'hu' },
    ],
  },
};

// Example words for each character
const exampleWords: Record<string, Array<{ word: string; meaning: string; romanization: string }>> = {
  'ㄱ': [
    { word: '가방', meaning: 'bag', romanization: 'gabang' },
    { word: '고양이', meaning: 'cat', romanization: 'goyangi' },
    { word: '구름', meaning: 'cloud', romanization: 'gureum' },
  ],
  'ㄴ': [
    { word: '나무', meaning: 'tree', romanization: 'namu' },
    { word: '노래', meaning: 'song', romanization: 'norae' },
    { word: '눈', meaning: 'eye/snow', romanization: 'nun' },
  ],
  'ㄷ': [
    { word: '다리', meaning: 'leg/bridge', romanization: 'dari' },
    { word: '도시', meaning: 'city', romanization: 'dosi' },
    { word: '두부', meaning: 'tofu', romanization: 'dubu' },
  ],
  'ㄹ': [
    { word: '라면', meaning: 'ramen', romanization: 'ramyeon' },
    { word: '로봇', meaning: 'robot', romanization: 'robot' },
    { word: '루비', meaning: 'ruby', romanization: 'rubi' },
  ],
  'ㅁ': [
    { word: '마음', meaning: 'heart', romanization: 'maeum' },
    { word: '모자', meaning: 'hat', romanization: 'moja' },
    { word: '무지개', meaning: 'rainbow', romanization: 'mujigae' },
  ],
  'ㅂ': [
    { word: '바다', meaning: 'sea', romanization: 'bada' },
    { word: '보석', meaning: 'jewel', romanization: 'boseok' },
    { word: '부엌', meaning: 'kitchen', romanization: 'bueok' },
  ],
  'ㅅ': [
    { word: '사과', meaning: 'apple', romanization: 'sagwa' },
    { word: '소리', meaning: 'sound', romanization: 'sori' },
    { word: '수박', meaning: 'watermelon', romanization: 'subak' },
  ],
  'ㅇ': [
    { word: '아이', meaning: 'child', romanization: 'ai' },
    { word: '오리', meaning: 'duck', romanization: 'ori' },
    { word: '우유', meaning: 'milk', romanization: 'uyu' },
  ],
  'ㅈ': [
    { word: '자동차', meaning: 'car', romanization: 'jadongcha' },
    { word: '조개', meaning: 'shellfish', romanization: 'jogae' },
    { word: '주스', meaning: 'juice', romanization: 'juseu' },
  ],
  'ㅊ': [
    { word: '책', meaning: 'book', romanization: 'chaek' },
    { word: '초코', meaning: 'chocolate', romanization: 'choko' },
    { word: '추억', meaning: 'memory', romanization: 'chueok' },
  ],
  'ㅋ': [
    { word: '카메라', meaning: 'camera', romanization: 'kamera' },
    { word: '코끼리', meaning: 'elephant', romanization: 'kokkiri' },
    { word: '쿠키', meaning: 'cookie', romanization: 'kuki' },
  ],
  'ㅌ': [
    { word: '토마토', meaning: 'tomato', romanization: 'tomato' },
    { word: '태양', meaning: 'sun', romanization: 'taeyang' },
    { word: '투명', meaning: 'transparent', romanization: 'tumyeong' },
  ],
  'ㅍ': [
    { word: '포도', meaning: 'grape', romanization: 'podo' },
    { word: '피아노', meaning: 'piano', romanization: 'piano' },
    { word: '푸른', meaning: 'blue/green', romanization: 'pureun' },
  ],
  'ㅎ': [
    { word: '하늘', meaning: 'sky', romanization: 'haneul' },
    { word: '호수', meaning: 'lake', romanization: 'hosu' },
    { word: '후추', meaning: 'pepper', romanization: 'huchu' },
  ],
  // Vowels
  'ㅏ': [
    { word: '아버지', meaning: 'father', romanization: 'abeoji' },
    { word: '바다', meaning: 'sea', romanization: 'bada' },
  ],
  'ㅑ': [
    { word: '야구', meaning: 'baseball', romanization: 'yagu' },
    { word: '야채', meaning: 'vegetable', romanization: 'yachae' },
  ],
  'ㅓ': [
    { word: '어머니', meaning: 'mother', romanization: 'eomeoni' },
    { word: '버스', meaning: 'bus', romanization: 'beoseu' },
  ],
  'ㅕ': [
    { word: '여름', meaning: 'summer', romanization: 'yeoreum' },
    { word: '여행', meaning: 'travel', romanization: 'yeohaeng' },
  ],
  'ㅗ': [
    { word: '오리', meaning: 'duck', romanization: 'ori' },
    { word: '고양이', meaning: 'cat', romanization: 'goyangi' },
  ],
  'ㅛ': [
    { word: '요리', meaning: 'cooking', romanization: 'yori' },
    { word: '교실', meaning: 'classroom', romanization: 'gyosil' },
  ],
  'ㅜ': [
    { word: '우산', meaning: 'umbrella', romanization: 'usan' },
    { word: '구름', meaning: 'cloud', romanization: 'gureum' },
  ],
  'ㅠ': [
    { word: '유리', meaning: 'glass', romanization: 'yuri' },
    { word: '우유', meaning: 'milk', romanization: 'uyu' },
  ],
  'ㅡ': [
    { word: '으뜸', meaning: 'the best', romanization: 'eutteum' },
    { word: '크다', meaning: 'big', romanization: 'keuda' },
  ],
  'ㅣ': [
    { word: '이름', meaning: 'name', romanization: 'ireum' },
    { word: '기차', meaning: 'train', romanization: 'gicha' },
  ],
};

// Vocabulary Card Component for Intermediate/Advanced levels
function VocabularyCard({
  item,
  index,
  isExpanded,
  onToggle,
  speak,
  speakingId,
}: {
  item: VocabularyItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  speak: (text: string, id?: string) => void;
  speakingId: string | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-[20px] shadow-lg overflow-hidden"
    >
      <motion.div
        onClick={onToggle}
        className="p-5 cursor-pointer"
        whileHover={{ backgroundColor: 'rgba(68, 6, 135, 0.02)' }}
      >
        <div className="flex items-center gap-4">
          {/* Korean Word Display */}
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-[#440687] to-[#6B21A8] rounded-[16px] flex items-center justify-center shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-2xl text-white text-center leading-tight px-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {item.korean}
            </span>
          </motion.div>

          {/* Word Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[18px] text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {item.romanization}
              </span>
            </div>
            <p
              className="text-[15px] text-gray-600 leading-relaxed truncate"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {item.translation}
            </p>
          </div>

          {/* TTS Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              speak(item.korean, `vocab-${index}`);
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all flex-shrink-0 ${
              speakingId === `vocab-${index}`
                ? 'bg-[#B4D700] text-white'
                : 'bg-[#F3E8FF] text-[#440687]'
            }`}
          >
            {speakingId === `vocab-${index}` ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </motion.div>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Character Card Component
function CharacterCard({
  character,
  index,
  isExpanded,
  onToggle,
  speak,
  isSpeaking,
  speakingId,
  language,
}: {
  character: HangulCharacter;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  speak: (text: string, id?: string) => void;
  isSpeaking: boolean;
  speakingId: string | null;
  language: string;
}) {
  const isConsonant = character.type === 'consonant' || character.type === 'complex-consonant';
  const soundDescriptions = isConsonant ? consonantSoundDescriptions : vowelSoundDescriptions;
  const soundDesc = soundDescriptions[character.character];
  const syllableExamples = exampleSyllables[character.character];
  const wordExamples = exampleWords[character.character];

  const getSoundDescription = () => {
    if (!soundDesc) return '';
    const lang = language as keyof typeof soundDesc;
    return soundDesc[lang] || soundDesc.en;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[20px] shadow-lg overflow-hidden"
    >
      {/* Main card - always visible */}
      <motion.div
        onClick={onToggle}
        className="p-6 cursor-pointer"
        whileHover={{ backgroundColor: 'rgba(68, 6, 135, 0.02)' }}
      >
        <div className="flex items-center gap-6">
          {/* Large Character Display */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-[#440687] to-[#6B21A8] rounded-[16px] flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-5xl text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {character.character}
            </span>
          </motion.div>

          {/* Character Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-[20px] text-[#440687]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {character.romanization}
              </span>
              <span
                className="text-[16px] text-gray-500"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                ({character.pronunciation})
              </span>
            </div>
            <p
              className="text-[14px] text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {getSoundDescription()}
            </p>
          </div>

          {/* TTS Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              speak(character.pronunciation, `char-${index}`);
            }}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all ${
              speakingId === `char-${index}`
                ? 'bg-[#B4D700] text-white'
                : 'bg-[#F3E8FF] text-[#440687]'
            }`}
          >
            {speakingId === `char-${index}` ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </motion.div>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </motion.button>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-[#440687]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
              {/* Example Syllables - Only for consonants */}
              {isConsonant && syllableExamples && (
                <div className="mb-6">
                  <h4
                    className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {language === 'ja' ? '音節の例' :
                     language.startsWith('zh') ? '音节示例' :
                     language === 'th' ? 'ตัวอย่างพยางค์' :
                     language === 'vi' ? 'Vi du am tiet' :
                     language === 'es' ? 'Ejemplos de silabas' :
                     'Example Syllables'}
                  </h4>
                  <div className="space-y-2">
                    {syllableExamples.syllables.map((syllable, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-[#F6FFC7] rounded-[12px]"
                      >
                        <span className="text-[18px] text-[#440687] font-bold">
                          {syllable.consonant}
                        </span>
                        <span className="text-gray-400 text-[16px]">+</span>
                        <span className="text-[18px] text-[#440687] font-bold">
                          {syllable.vowel}
                        </span>
                        <span className="text-gray-400 text-[16px]">=</span>
                        <span
                          className="text-[20px] text-[#440687] min-w-[40px]"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                        >
                          {syllable.result}
                        </span>
                        <span className="text-[14px] text-gray-500 flex-1">
                          {syllable.romanization}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(syllable.result, `syllable-${index}-${idx}`);
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            speakingId === `syllable-${index}-${idx}`
                              ? 'bg-[#440687] text-white'
                              : 'bg-white text-[#440687]'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Example Words */}
              {wordExamples && wordExamples.length > 0 && (
                <div>
                  <h4
                    className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {language === 'ja' ? '単語の例' :
                     language.startsWith('zh') ? '词汇示例' :
                     language === 'th' ? 'ตัวอย่างคำ' :
                     language === 'vi' ? 'Vi du tu' :
                     language === 'es' ? 'Ejemplos de palabras' :
                     'Example Words'}
                  </h4>
                  <div className="space-y-2">
                    {wordExamples.map((word, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-[12px]"
                      >
                        <span
                          className="text-[20px] min-w-[80px]"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {highlightWord(word.word, character.character)}
                        </span>
                        <span className="text-[14px] text-gray-500">
                          {word.romanization}
                        </span>
                        <span className="text-[14px] text-gray-600 flex-1">
                          {word.meaning}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(word.word, `word-${index}-${idx}`);
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            speakingId === `word-${index}-${idx}`
                              ? 'bg-[#440687] text-white'
                              : 'bg-[#F3E8FF] text-[#440687]'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Original example from data if available */}
              {character.example && !wordExamples && (
                <div className="mt-4 p-4 bg-[#F6FFC7] rounded-[12px]">
                  <div className="flex items-center gap-4">
                    <span className="text-[24px] text-[#440687] font-bold">
                      {character.example.word}
                    </span>
                    <span className="text-gray-600">
                      = {character.example.meaning}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(character.pronunciation || character.character, `example-${index}`);
                      }}
                      className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center ${
                        speakingId === `example-${index}`
                          ? 'bg-[#440687] text-white'
                          : 'bg-white text-[#440687]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HangulLearnPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const levelNumber = parseInt(params.level as string, 10);
  const { speak, isSpeaking, speakingId, stop } = useTTS();

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const level = hangulLevels.find((l) => l.level === levelNumber);
  const tier = getTierForLevel(levelNumber);
  const tierColor = TIER_COLORS[tier];

  // Extract vocabulary items for intermediate/advanced levels
  const vocabularyItems = useMemo((): VocabularyItem[] => {
    if (!level) return [];

    const uniqueWords = new Map<string, VocabularyItem>();

    // Extract from multilingualQuizQuestions
    if (level.multilingualQuizQuestions) {
      level.multilingualQuizQuestions.forEach((q) => {
        if (q.word && q.word.korean && !uniqueWords.has(q.word.korean)) {
          const translation = q.word.translations
            ? (q.word.translations[language as keyof typeof q.word.translations] || q.word.translations.en || '')
            : '';
          uniqueWords.set(q.word.korean, {
            korean: q.word.korean,
            romanization: q.word.romanization || '',
            translation: translation,
          });
        }
      });
    }

    // Also extract from multilingualMatchingPairs for more complete vocabulary list
    if (level.multilingualMatchingPairs) {
      level.multilingualMatchingPairs.forEach((pair) => {
        if (pair.type === 'word' && pair.left && !uniqueWords.has(pair.left)) {
          let translation = '';
          if (typeof pair.right === 'object') {
            translation = pair.right[language as keyof typeof pair.right] || pair.right.en || '';
          } else {
            translation = pair.right || '';
          }
          uniqueWords.set(pair.left, {
            korean: pair.left,
            romanization: pair.romanization || '',
            translation: translation,
          });
        }
      });
    }

    return Array.from(uniqueWords.values());
  }, [level, language]);

  // Check if this is a beginner level with character objects
  const hasCharacterObjects = level?.characters &&
    level.characters.length > 0 &&
    typeof level.characters[0] === 'object' &&
    'character' in (level.characters[0] as object);

  // Get tier name in current language
  const getTierName = (): string => {
    const names: Record<string, Record<string, string>> = {
      beginner: { en: 'Beginner', ja: '初級', zh: '初级', th: 'เริ่มต้น', vi: 'Co ban', es: 'Principiante' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', th: 'กลาง', vi: 'Trung cap', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', th: 'ขั้นสูง', vi: 'Nang cao', es: 'Avanzado' },
    };
    return names[tier][language] || names[tier].en;
  };

  // Not found
  if (!level) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#440687] to-[#6B21A8] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[16px] shadow-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">?</span>
          </div>
          <h1
            className="text-[24px] text-[#1F2937] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {t('errors.notFound')}
          </h1>
          <button
            onClick={() => router.push('/hangul')}
            className="bg-[#440687] text-white px-6 py-3 rounded-full text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {t('game.backToLevels')}
          </button>
        </motion.div>
      </div>
    );
  }

  // No content to learn - check both character objects and vocabulary
  const hasLearningContent = hasCharacterObjects || vocabularyItems.length > 0;

  if (!hasLearningContent) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#440687] to-[#6B21A8] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[16px] shadow-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-[#F6FFC7] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">!</span>
          </div>
          <h1
            className="text-[24px] text-[#1F2937] mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
          >
            {language === 'ja' ? 'この レベルには学習コンテンツがありません' :
             language.startsWith('zh') ? '此关卡没有学习内容' :
             language === 'th' ? 'ระดับนี้ไม่มีเนื้อหาการเรียนรู้' :
             language === 'vi' ? 'Cap do nay khong co noi dung hoc tap' :
             language === 'es' ? 'Este nivel no tiene contenido de aprendizaje' :
             'No learning content for this level'}
          </h1>
          <p
            className="text-gray-500 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {language === 'ja' ? 'クイズに進んでください' :
             language.startsWith('zh') ? '请进入测验' :
             language === 'th' ? 'กรุณาไปทำแบบทดสอบ' :
             language === 'vi' ? 'Vui long tien hanh lam bai kiem tra' :
             language === 'es' ? 'Por favor, proceda al cuestionario' :
             'Please proceed to the quiz'}
          </p>
          <button
            onClick={() => router.push(`/hangul/${levelNumber}?mode=quiz`)}
            className="bg-[#440687] text-white px-6 py-3 rounded-full text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {language === 'ja' ? 'クイズを始める' :
             language.startsWith('zh') ? '开始测验' :
             language === 'th' ? 'เริ่มแบบทดสอบ' :
             language === 'vi' ? 'Bat dau bai kiem tra' :
             language === 'es' ? 'Iniciar cuestionario' :
             'Start Quiz'}
          </button>
        </motion.div>
      </div>
    );
  }

  // Determine item count for display
  const itemCount = hasCharacterObjects
    ? (level.characters as HangulCharacter[]).length
    : vocabularyItems.length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#440687] via-[#5B1A9A] to-[#6B21A8] pb-32">
      {/* Back Navigation */}
      <div className="px-4 pt-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push(`/hangul/${levelNumber}?mode=quiz`)}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'ja' ? '戻る' :
           language.startsWith('zh') ? '返回' :
           language === 'th' ? 'ย้อนกลับ' :
           language === 'vi' ? 'Quay lai' :
           language === 'es' ? 'Volver' :
           'Back'}
        </motion.button>
      </div>

      {/* Level Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-6 text-center"
      >
        {/* Tier badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="inline-block px-4 py-1 rounded-full text-[12px] text-[#440687] mb-3"
          style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          {getTierName()}
        </motion.div>

        <h1
          className="text-[28px] text-white mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
        >
          {language === 'ja' ? `レベル ${levelNumber} - 学習` :
           language.startsWith('zh') ? `第 ${levelNumber} 关 - 学习` :
           language === 'th' ? `ระดับ ${levelNumber} - เรียนรู้` :
           language === 'vi' ? `Cap ${levelNumber} - Hoc` :
           language === 'es' ? `Nivel ${levelNumber} - Aprender` :
           `Level ${levelNumber} - Learn`}
        </h1>
        <p
          className="text-white/80 text-[14px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {level.descriptionKey ? t(level.descriptionKey) : level.description}
        </p>

        {/* Item count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
        >
          <svg className="w-5 h-5 text-[#B4D700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span
            className="text-white text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            {itemCount} {hasCharacterObjects
              ? (language === 'ja' ? '文字' :
                 language.startsWith('zh') ? '个字符' :
                 language === 'th' ? 'ตัวอักษร' :
                 language === 'vi' ? 'chu cai' :
                 language === 'es' ? 'caracteres' :
                 'characters')
              : (language === 'ja' ? '単語' :
                 language.startsWith('zh') ? '个单词' :
                 language === 'th' ? 'คำศัพท์' :
                 language === 'vi' ? 'tu vung' :
                 language === 'es' ? 'palabras' :
                 'words')}
          </span>
        </motion.div>
      </motion.div>

      {/* Content List - Characters for Beginner, Vocabulary for Intermediate/Advanced */}
      <div className="px-4 space-y-4 max-w-2xl mx-auto">
        {hasCharacterObjects ? (
          // Beginner: Character cards
          (level.characters as HangulCharacter[]).map((char, index) => (
            <CharacterCard
              key={char.character}
              character={char}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              speak={speak}
              isSpeaking={isSpeaking}
              speakingId={speakingId}
              language={language}
            />
          ))
        ) : (
          // Intermediate/Advanced: Vocabulary cards
          vocabularyItems.map((item, index) => (
            <VocabularyCard
              key={item.korean}
              item={item}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              speak={speak}
              speakingId={speakingId}
            />
          ))
        )}
      </div>

      {/* Start Quiz Button - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#440687] via-[#440687] to-transparent pt-12 pb-6"
      >
        {/* Scroll indicator arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ delay: 0.8, y: { repeat: Infinity, duration: 1.5 } }}
          className="flex justify-center mb-3"
        >
          <svg className="w-8 h-8 text-[#440687]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/hangul/${levelNumber}?mode=quiz`)}
            className="w-full py-4 bg-[#B4D700] text-[#440687] rounded-[16px] shadow-lg flex items-center justify-center gap-3"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {language === 'ja' ? 'クイズを始める' :
             language.startsWith('zh') ? '开始测验' :
             language === 'th' ? 'เริ่มแบบทดสอบ' :
             language === 'vi' ? 'Bat dau bai kiem tra' :
             language === 'es' ? 'Iniciar cuestionario' :
             'Start Quiz'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
