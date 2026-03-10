// Korean to Romanization converter (Revised Romanization of Korean)
// Converts Korean Hangul text to its romanized pronunciation

const INITIALS = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
const MEDIALS = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
const FINALS = ['', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't'];

export function romanize(text: string): string {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    // Korean syllable block (가-힣)
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const offset = code - 0xAC00;
      const initialIdx = Math.floor(offset / 588);
      const medialIdx = Math.floor((offset % 588) / 28);
      const finalIdx = offset % 28;

      result += INITIALS[initialIdx] + MEDIALS[medialIdx] + FINALS[finalIdx];
    }
    // Korean Jamo (ㄱ-ㅎ, ㅏ-ㅣ)
    else if (code >= 0x3131 && code <= 0x3163) {
      result += text[i];
    }
    // Space or other
    else {
      result += text[i];
    }
  }

  // Capitalize first letter of each word
  return result
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
