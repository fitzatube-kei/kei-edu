/**
 * Korean Hangul Decomposition and Composition Utilities
 * 한글 자모 분해 및 합성 유틸리티
 */

// 초성 19자
const CHOSEONG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 중성 21자
const JUNGSEONG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

// 종성 28자 (없음 포함)
const JONGSEONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const HANGUL_START = 0xAC00;
const HANGUL_END = 0xD7A3;

/**
 * Check if a character is a complete Hangul syllable
 */
export function isHangulSyllable(char: string): boolean {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0);
  return code >= HANGUL_START && code <= HANGUL_END;
}

/**
 * Check if a character is a Hangul jamo (consonant or vowel)
 */
export function isHangulJamo(char: string): boolean {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0);
  // Hangul Jamo: U+1100–U+11FF
  // Hangul Compatibility Jamo: U+3130–U+318F
  return (code >= 0x1100 && code <= 0x11FF) || (code >= 0x3130 && code <= 0x318F);
}

/**
 * Decompose a single Hangul syllable into jamos
 * "집" → ['ㅈ', 'ㅣ', 'ㅂ']
 * "과" → ['ㄱ', 'ㅘ'] (복합모음은 분리하지 않음)
 */
export function decomposeSyllable(syllable: string): string[] {
  if (!isHangulSyllable(syllable)) {
    return [syllable];
  }

  const code = syllable.charCodeAt(0) - HANGUL_START;
  const jongIndex = code % 28;
  const jungIndex = ((code - jongIndex) / 28) % 21;
  const choIndex = Math.floor((code - jongIndex) / 28 / 21);

  const result: string[] = [];
  result.push(CHOSEONG[choIndex]);
  result.push(JUNGSEONG[jungIndex]);
  if (JONGSEONG[jongIndex]) {
    result.push(JONGSEONG[jongIndex]);
  }

  return result;
}

/**
 * Decompose a Korean word into jamos
 * "집" → ['ㅈ', 'ㅣ', 'ㅂ']
 * "사과" → ['ㅅ', 'ㅏ', 'ㄱ', 'ㅘ']
 * "한글" → ['ㅎ', 'ㅏ', 'ㄴ', 'ㄱ', 'ㅡ', 'ㄹ']
 */
export function decomposeHangul(word: string): string[] {
  const result: string[] = [];
  for (const char of word) {
    result.push(...decomposeSyllable(char));
  }
  return result;
}

/**
 * Compose jamos into a single Hangul syllable
 * ['ㅈ', 'ㅣ', 'ㅂ'] → "집"
 * ['ㄱ', 'ㅘ'] → "과"
 */
export function composeSyllable(jamos: string[]): string | null {
  if (jamos.length < 2 || jamos.length > 3) {
    return null;
  }

  const choIndex = CHOSEONG.indexOf(jamos[0]);
  const jungIndex = JUNGSEONG.indexOf(jamos[1]);
  const jongIndex = jamos.length === 3 ? JONGSEONG.indexOf(jamos[2]) : 0;

  if (choIndex === -1 || jungIndex === -1 || jongIndex === -1) {
    return null;
  }

  const code = HANGUL_START + (choIndex * 21 + jungIndex) * 28 + jongIndex;
  return String.fromCharCode(code);
}

/**
 * Compose a full word from syllable-grouped jamos
 * [['ㅅ', 'ㅏ'], ['ㄱ', 'ㅘ']] → "사과"
 */
export function composeWord(syllableJamos: string[][]): string {
  return syllableJamos.map(jamos => composeSyllable(jamos) || '').join('');
}

/**
 * Get the structure of a word (jamos per syllable)
 * "사과" → [['ㅅ', 'ㅏ'], ['ㄱ', 'ㅘ']]
 */
export function getWordStructure(word: string): string[][] {
  return Array.from(word).map(char => decomposeSyllable(char));
}

/**
 * Count syllables in a Korean word
 */
export function countSyllables(word: string): number {
  return Array.from(word).filter(char => isHangulSyllable(char)).length;
}

/**
 * Generate random distractor jamos (not in the answer)
 */
export function generateDistractors(answerJamos: string[], count: number): string[] {
  const allJamos = [...CHOSEONG, ...JUNGSEONG.filter(j => !['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ'].includes(j))];
  const distractors: string[] = [];
  const usedJamos = new Set(answerJamos);

  while (distractors.length < count) {
    const randomJamo = allJamos[Math.floor(Math.random() * allJamos.length)];
    if (!usedJamos.has(randomJamo) && !distractors.includes(randomJamo)) {
      distractors.push(randomJamo);
    }
  }

  return distractors;
}

/**
 * Shuffle an array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Check if user input matches the answer
 */
export function checkAnswer(userJamos: string[], correctJamos: string[]): boolean {
  if (userJamos.length !== correctJamos.length) return false;
  return userJamos.every((jamo, index) => jamo === correctJamos[index]);
}

export { CHOSEONG, JUNGSEONG, JONGSEONG };
