// Stroke data for Korean jamo characters
// Coordinates are normalized 0-1 (top-left origin)
// Each stroke is an array of [x, y] points forming a polyline

export type StrokePoint = [number, number];
export type StrokePath = StrokePoint[];

// Correct stroke orders based on Korean writing education standards
// Rules: ① top-to-bottom ② left-to-right ③ horizontal before vertical at intersections
//
// Reference: Korean elementary education standard stroke orders
// ㄱ: 2획 ① 가로→ ② 세로↓
// ㄴ: 2획 ① 세로↓ ② 가로→
// ㄷ: 3획 ① 가로→ ② 세로↓ ③ 가로→
// ㄹ: 5획 ① 가로→ ② 세로↓ ③ 가로→ ④ 세로↓ ⑤ 가로→
// ㅁ: 4획 ① 세로↓ ② 가로→ ③ 세로↓ ④ 가로→
// ㅂ: 4획 ① 세로↓ ② 세로↓ ③ 가로→ ④ 가로→
// ㅅ: 2획 ① 왼삐침↙ ② 오른삐침↘
// ㅇ: 1획 ① 원(반시계)
// ㅈ: 3획 ① 가로→ ② 왼삐침↙ ③ 오른삐침↘
// ㅊ: 4획 ① 짧은세로↓ ② 가로→ ③ 왼삐침↙ ④ 오른삐침↘
// ㅋ: 3획 ① 가로→ ② 세로↓ ③ 가운데가로→
// ㅌ: 4획 ① 가로→ ② 세로↓ ③ 가로→ ④ 가운데가로→
// ㅍ: 4획 ① 가로→ ② 세로↓ ③ 세로↓ ④ 가로→
// ㅎ: 3획 ① 짧은세로↓ ② 가로→ ③ 원

const CONSONANT_STROKES: Record<string, StrokePath[]> = {
  // ㄱ: ① horizontal → ② vertical ↓
  'ㄱ': [
    [[0.12, 0.18], [0.88, 0.18]],
    [[0.88, 0.18], [0.88, 0.88]],
  ],
  // ㄴ: ① vertical ↓ ② horizontal →
  'ㄴ': [
    [[0.15, 0.12], [0.15, 0.88]],
    [[0.15, 0.88], [0.88, 0.88]],
  ],
  // ㄷ: ① horizontal → (top) ② vertical ↓ (left) ③ horizontal → (bottom)
  'ㄷ': [
    [[0.12, 0.15], [0.72, 0.15]],
    [[0.12, 0.15], [0.12, 0.88]],
    [[0.12, 0.88], [0.88, 0.88]],
  ],
  // ㄹ: ① horizontal → ② vertical ↓ ③ horizontal → ④ vertical ↓ ⑤ horizontal →
  // Shape: top line → right side down → middle line (LEFT to RIGHT) → left side down → bottom line
  'ㄹ': [
    [[0.10, 0.08], [0.90, 0.08]],
    [[0.90, 0.08], [0.90, 0.36]],
    [[0.10, 0.36], [0.90, 0.36]],
    [[0.10, 0.36], [0.10, 0.64]],
    [[0.10, 0.64], [0.90, 0.64]],
  ],
  // ㅁ: ① vertical ↓ (left) ② horizontal → (top) ③ vertical ↓ (right) ④ horizontal → (bottom)
  'ㅁ': [
    [[0.12, 0.12], [0.12, 0.88]],
    [[0.12, 0.12], [0.88, 0.12]],
    [[0.88, 0.12], [0.88, 0.88]],
    [[0.12, 0.88], [0.88, 0.88]],
  ],
  // ㅂ: ① vertical ↓ (left) ② vertical ↓ (right) ③ horizontal → (middle) ④ horizontal → (bottom)
  'ㅂ': [
    [[0.15, 0.10], [0.15, 0.88]],
    [[0.85, 0.10], [0.85, 0.88]],
    [[0.15, 0.50], [0.85, 0.50]],
    [[0.15, 0.88], [0.85, 0.88]],
  ],
  // ㅅ: ① left diagonal ↙ ② right diagonal ↘
  'ㅅ': [
    [[0.50, 0.10], [0.12, 0.88]],
    [[0.50, 0.10], [0.88, 0.88]],
  ],
  // ㅇ: ① circle (counterclockwise from top)
  'ㅇ': [
    [[0.50, 0.10], [0.27, 0.15], [0.12, 0.33], [0.10, 0.50],
     [0.12, 0.67], [0.27, 0.85], [0.50, 0.90], [0.73, 0.85],
     [0.88, 0.67], [0.90, 0.50], [0.88, 0.33], [0.73, 0.15], [0.50, 0.10]],
  ],
  // ㅈ: ① horizontal → ② left diagonal ↙ ③ right diagonal ↘
  'ㅈ': [
    [[0.15, 0.15], [0.85, 0.15]],
    [[0.50, 0.30], [0.12, 0.88]],
    [[0.50, 0.30], [0.88, 0.88]],
  ],
  // ㅊ: ① short vertical ↓ (top tick) ② horizontal → ③ left diagonal ↙ ④ right diagonal ↘
  'ㅊ': [
    [[0.50, 0.02], [0.50, 0.14]],
    [[0.15, 0.22], [0.85, 0.22]],
    [[0.50, 0.36], [0.12, 0.90]],
    [[0.50, 0.36], [0.88, 0.90]],
  ],
  // ㅋ: ① horizontal → (top) ② vertical ↓ (from right end) ③ horizontal → (middle)
  'ㅋ': [
    [[0.12, 0.18], [0.88, 0.18]],
    [[0.88, 0.18], [0.88, 0.88]],
    [[0.12, 0.52], [0.70, 0.52]],
  ],
  // ㅌ: ① horizontal → (top) ② vertical ↓ (left) ③ horizontal → (bottom) ④ horizontal → (middle)
  'ㅌ': [
    [[0.12, 0.12], [0.72, 0.12]],
    [[0.12, 0.12], [0.12, 0.88]],
    [[0.12, 0.88], [0.88, 0.88]],
    [[0.12, 0.48], [0.72, 0.48]],
  ],
  // ㅍ: ① horizontal → (top) ② vertical ↓ (left inner) ③ vertical ↓ (right inner) ④ horizontal → (bottom)
  'ㅍ': [
    [[0.12, 0.12], [0.88, 0.12]],
    [[0.30, 0.12], [0.30, 0.75]],
    [[0.70, 0.12], [0.70, 0.75]],
    [[0.12, 0.88], [0.88, 0.88]],
  ],
  // ㅎ: ① short vertical ↓ (top tick) ② horizontal → ③ circle (counterclockwise)
  'ㅎ': [
    [[0.50, 0.02], [0.50, 0.14]],
    [[0.12, 0.28], [0.88, 0.28]],
    [[0.50, 0.42], [0.38, 0.45], [0.32, 0.53], [0.32, 0.63],
     [0.38, 0.72], [0.50, 0.75], [0.62, 0.72], [0.68, 0.63],
     [0.68, 0.53], [0.62, 0.45], [0.50, 0.42]],
  ],
};

// Vowel stroke orders
// ㅏ: 2획 ① 세로↓ ② 짧은가로→
// ㅑ: 3획 ① 세로↓ ② 짧은가로→ ③ 짧은가로→
// ㅓ: 2획 ① 짧은가로→ ② 세로↓
// ㅕ: 3획 ① 짧은가로→ ② 짧은가로→ ③ 세로↓
// ㅗ: 2획 ① 짧은세로↓ ② 가로→ (위에 있는 세로가 먼저)
// ㅛ: 3획 ① 짧은세로↓ ② 짧은세로↓ ③ 가로→
// ㅜ: 2획 ① 가로→ ② 짧은세로↓ (가로가 위에 있으므로 먼저)
// ㅠ: 3획 ① 가로→ ② 짧은세로↓ ③ 짧은세로↓
// ㅡ: 1획 ① 가로→
// ㅣ: 1획 ① 세로↓
const VOWEL_STROKES: Record<string, StrokePath[]> = {
  // ㅏ: ① vertical ↓ ② short horizontal →
  'ㅏ': [
    [[0.35, 0.08], [0.35, 0.92]],
    [[0.35, 0.42], [0.85, 0.42]],
  ],
  // ㅐ: ① vertical ↓ ② short horizontal → ③ vertical ↓
  'ㅐ': [
    [[0.25, 0.08], [0.25, 0.92]],
    [[0.25, 0.42], [0.60, 0.42]],
    [[0.75, 0.08], [0.75, 0.92]],
  ],
  // ㅑ: ① vertical ↓ ② short horizontal → ③ short horizontal →
  'ㅑ': [
    [[0.35, 0.08], [0.35, 0.92]],
    [[0.35, 0.30], [0.85, 0.30]],
    [[0.35, 0.55], [0.85, 0.55]],
  ],
  // ㅒ: ① vertical ↓ ② short horizontal → ③ short horizontal → ④ vertical ↓
  'ㅒ': [
    [[0.20, 0.08], [0.20, 0.92]],
    [[0.20, 0.30], [0.55, 0.30]],
    [[0.20, 0.55], [0.55, 0.55]],
    [[0.75, 0.08], [0.75, 0.92]],
  ],
  // ㅓ: ① short horizontal → (toward vertical) ② vertical ↓
  'ㅓ': [
    [[0.15, 0.42], [0.65, 0.42]],
    [[0.65, 0.08], [0.65, 0.92]],
  ],
  // ㅔ: ① vertical ↓ (left) ② short horizontal → ③ vertical ↓ (right)
  'ㅔ': [
    [[0.25, 0.08], [0.25, 0.92]],
    [[0.25, 0.42], [0.75, 0.42]],
    [[0.75, 0.08], [0.75, 0.92]],
  ],
  // ㅕ: ① short horizontal → ② short horizontal → ③ vertical ↓
  'ㅕ': [
    [[0.15, 0.30], [0.65, 0.30]],
    [[0.15, 0.55], [0.65, 0.55]],
    [[0.65, 0.08], [0.65, 0.92]],
  ],
  // ㅖ: ① vertical ↓ (left) ② short horizontal → ③ short horizontal → ④ vertical ↓ (right)
  'ㅖ': [
    [[0.20, 0.08], [0.20, 0.92]],
    [[0.20, 0.30], [0.75, 0.30]],
    [[0.20, 0.55], [0.75, 0.55]],
    [[0.75, 0.08], [0.75, 0.92]],
  ],
  // ㅗ: ① short vertical ↓ (top part, drawn first because it's higher) ② horizontal →
  'ㅗ': [
    [[0.50, 0.15], [0.50, 0.60]],
    [[0.08, 0.75], [0.92, 0.75]],
  ],
  // ㅛ: ① short vertical ↓ ② short vertical ↓ ③ horizontal →
  'ㅛ': [
    [[0.35, 0.15], [0.35, 0.60]],
    [[0.65, 0.15], [0.65, 0.60]],
    [[0.08, 0.75], [0.92, 0.75]],
  ],
  // ㅜ: ① horizontal → (top, drawn first) ② short vertical ↓
  'ㅜ': [
    [[0.08, 0.25], [0.92, 0.25]],
    [[0.50, 0.25], [0.50, 0.85]],
  ],
  // ㅠ: ① horizontal → ② short vertical ↓ ③ short vertical ↓
  'ㅠ': [
    [[0.08, 0.25], [0.92, 0.25]],
    [[0.35, 0.25], [0.35, 0.85]],
    [[0.65, 0.25], [0.65, 0.85]],
  ],
  // ㅡ: ① horizontal →
  'ㅡ': [
    [[0.08, 0.50], [0.92, 0.50]],
  ],
  // ㅣ: ① vertical ↓
  'ㅣ': [
    [[0.50, 0.08], [0.50, 0.92]],
  ],
};

// All basic jamo strokes combined
export const JAMO_STROKES: Record<string, StrokePath[]> = {
  ...CONSONANT_STROKES,
  ...VOWEL_STROKES,
};

// Double consonant decomposition
const DOUBLE_CONSONANTS: Record<string, string> = {
  'ㄲ': 'ㄱ', 'ㄸ': 'ㄷ', 'ㅃ': 'ㅂ', 'ㅆ': 'ㅅ', 'ㅉ': 'ㅈ',
};

// Compound vowel decomposition
const COMPOUND_VOWELS: Record<string, [string, string]> = {
  'ㅘ': ['ㅗ', 'ㅏ'],
  'ㅙ': ['ㅗ', 'ㅐ'],
  'ㅚ': ['ㅗ', 'ㅣ'],
  'ㅝ': ['ㅜ', 'ㅓ'],
  'ㅞ': ['ㅜ', 'ㅔ'],
  'ㅟ': ['ㅜ', 'ㅣ'],
  'ㅢ': ['ㅡ', 'ㅣ'],
};

// Compound final consonant decomposition
const COMPOUND_FINALS: Record<string, [string, string]> = {
  'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'],
  'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'],
  'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'],
  'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'],
};

// Hangul Unicode decomposition
const INITIALS = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const MEDIALS = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const FINALS = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

// Vertical vowels (rendered to the right of initial consonant)
const VERTICAL_VOWELS = new Set(['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅣ']);
// Horizontal vowels (rendered below initial consonant)
const HORIZONTAL_VOWELS = new Set(['ㅗ','ㅛ','ㅜ','ㅠ','ㅡ']);

export interface SyllableDecomposition {
  initial: string;
  medial: string;
  final: string | null;
}

export function decomposeHangul(char: string): SyllableDecomposition | null {
  const code = char.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return null;

  const offset = code - 0xAC00;
  const initialIdx = Math.floor(offset / (21 * 28));
  const medialIdx = Math.floor((offset % (21 * 28)) / 28);
  const finalIdx = offset % 28;

  return {
    initial: INITIALS[initialIdx],
    medial: MEDIALS[medialIdx],
    final: finalIdx === 0 ? null : FINALS[finalIdx],
  };
}

// Bounding box for positioning jamo within syllable block
interface BBox { x: number; y: number; w: number; h: number; }

function getLayout(medial: string, hasFinal: boolean): { initial: BBox; medial: BBox; final?: BBox } {
  const isVertical = VERTICAL_VOWELS.has(medial);
  const isHorizontal = HORIZONTAL_VOWELS.has(medial);
  const isCompound = medial in COMPOUND_VOWELS;

  if (isVertical || (isCompound && VERTICAL_VOWELS.has(COMPOUND_VOWELS[medial]?.[1]))) {
    if (hasFinal) {
      return {
        initial: { x: 0.02, y: 0.02, w: 0.52, h: 0.55 },
        medial:  { x: 0.54, y: 0.02, w: 0.44, h: 0.55 },
        final:   { x: 0.08, y: 0.60, w: 0.84, h: 0.38 },
      };
    }
    return {
      initial: { x: 0.02, y: 0.05, w: 0.52, h: 0.90 },
      medial:  { x: 0.54, y: 0.05, w: 0.44, h: 0.90 },
    };
  }

  if (isHorizontal) {
    if (hasFinal) {
      return {
        initial: { x: 0.10, y: 0.02, w: 0.80, h: 0.38 },
        medial:  { x: 0.05, y: 0.40, w: 0.90, h: 0.25 },
        final:   { x: 0.10, y: 0.68, w: 0.80, h: 0.30 },
      };
    }
    return {
      initial: { x: 0.10, y: 0.02, w: 0.80, h: 0.48 },
      medial:  { x: 0.05, y: 0.52, w: 0.90, h: 0.44 },
    };
  }

  // Compound vowels (ㅘ, ㅝ, etc.) - treat as vertical + horizontal mix
  if (isCompound) {
    if (hasFinal) {
      return {
        initial: { x: 0.02, y: 0.02, w: 0.48, h: 0.55 },
        medial:  { x: 0.02, y: 0.02, w: 0.96, h: 0.55 },
        final:   { x: 0.08, y: 0.60, w: 0.84, h: 0.38 },
      };
    }
    return {
      initial: { x: 0.02, y: 0.05, w: 0.48, h: 0.90 },
      medial:  { x: 0.02, y: 0.05, w: 0.96, h: 0.90 },
    };
  }

  // Fallback (treat as vertical)
  if (hasFinal) {
    return {
      initial: { x: 0.02, y: 0.02, w: 0.52, h: 0.55 },
      medial:  { x: 0.54, y: 0.02, w: 0.44, h: 0.55 },
      final:   { x: 0.08, y: 0.60, w: 0.84, h: 0.38 },
    };
  }
  return {
    initial: { x: 0.02, y: 0.05, w: 0.52, h: 0.90 },
    medial:  { x: 0.54, y: 0.05, w: 0.44, h: 0.90 },
  };
}

// Transform stroke coordinates from jamo-local (0-1) to syllable-block space
function transformStrokes(strokes: StrokePath[], bbox: BBox): StrokePath[] {
  return strokes.map(stroke =>
    stroke.map(([x, y]) => [
      bbox.x + x * bbox.w,
      bbox.y + y * bbox.h,
    ] as StrokePoint)
  );
}

// Get strokes for a jamo (handles doubles/compounds)
function getJamoStrokes(jamo: string): StrokePath[] {
  // Direct lookup
  if (JAMO_STROKES[jamo]) return JAMO_STROKES[jamo];

  // Double consonant: two copies side by side
  if (DOUBLE_CONSONANTS[jamo]) {
    const base = JAMO_STROKES[DOUBLE_CONSONANTS[jamo]];
    if (!base) return [];
    const left = base.map(s => s.map(([x, y]) => [x * 0.5, y] as StrokePoint));
    const right = base.map(s => s.map(([x, y]) => [0.5 + x * 0.5, y] as StrokePoint));
    return [...left, ...right];
  }

  // Compound vowel: combine two vowels
  if (COMPOUND_VOWELS[jamo]) {
    const [v1, v2] = COMPOUND_VOWELS[jamo];
    const s1 = JAMO_STROKES[v1] || [];
    const s2 = JAMO_STROKES[v2] || [];

    // ㅗ/ㅛ + vertical vowel: horizontal part on left/bottom, vertical part on right
    if (HORIZONTAL_VOWELS.has(v1)) {
      const left = s1.map(s => s.map(([x, y]) => [x * 0.6, y] as StrokePoint));
      const right = s2.map(s => s.map(([x, y]) => [0.55 + x * 0.45, y] as StrokePoint));
      return [...left, ...right];
    }
    // ㅜ/ㅠ + vertical vowel
    if (HORIZONTAL_VOWELS.has(v1)) {
      const top = s1.map(s => s.map(([x, y]) => [x, y * 0.55] as StrokePoint));
      const bottom = s2.map(s => s.map(([x, y]) => [x, 0.5 + y * 0.5] as StrokePoint));
      return [...top, ...bottom];
    }
    // ㅡ + ㅣ
    return [...s1, ...s2];
  }

  // Compound final
  if (COMPOUND_FINALS[jamo]) {
    const [c1, c2] = COMPOUND_FINALS[jamo];
    const s1 = JAMO_STROKES[c1] || [];
    const s2 = JAMO_STROKES[c2] || [];
    const left = s1.map(s => s.map(([x, y]) => [x * 0.48, y] as StrokePoint));
    const right = s2.map(s => s.map(([x, y]) => [0.52 + x * 0.48, y] as StrokePoint));
    return [...left, ...right];
  }

  return [];
}

// Get all strokes for a single syllable character, positioned within the block
export function getSyllableStrokes(char: string): StrokePath[] {
  const decomp = decomposeHangul(char);
  if (!decomp) {
    // Not a syllable - check if it's a standalone jamo
    const strokes = getJamoStrokes(char);
    return strokes.length > 0 ? strokes : [];
  }

  const { initial, medial, final: finalJamo } = decomp;
  const layout = getLayout(medial, !!finalJamo);

  const allStrokes: StrokePath[] = [];

  // Initial consonant strokes
  const initStrokes = getJamoStrokes(initial);
  allStrokes.push(...transformStrokes(initStrokes, layout.initial));

  // Medial vowel strokes
  const isCompound = medial in COMPOUND_VOWELS;
  if (isCompound) {
    const [v1, v2] = COMPOUND_VOWELS[medial];
    // For compound vowels, we need special layout within the medial bbox
    const medBbox = layout.medial;
    if (HORIZONTAL_VOWELS.has(v1)) {
      // e.g., ㅘ = ㅗ + ㅏ: ㅗ takes more horizontal space, ㅏ on right
      const s1 = JAMO_STROKES[v1] || [];
      const s2 = JAMO_STROKES[v2] || [];
      allStrokes.push(...transformStrokes(s1, { x: medBbox.x, y: medBbox.y, w: medBbox.w * 0.65, h: medBbox.h }));
      allStrokes.push(...transformStrokes(s2, { x: medBbox.x + medBbox.w * 0.60, y: medBbox.y, w: medBbox.w * 0.40, h: medBbox.h }));
    } else {
      const s1 = JAMO_STROKES[v1] || [];
      const s2 = JAMO_STROKES[v2] || [];
      allStrokes.push(...transformStrokes(s1, { x: medBbox.x, y: medBbox.y, w: medBbox.w, h: medBbox.h * 0.55 }));
      allStrokes.push(...transformStrokes(s2, { x: medBbox.x, y: medBbox.y + medBbox.h * 0.5, w: medBbox.w, h: medBbox.h * 0.50 }));
    }
  } else {
    const medStrokes = getJamoStrokes(medial);
    allStrokes.push(...transformStrokes(medStrokes, layout.medial));
  }

  // Final consonant strokes
  if (finalJamo && layout.final) {
    const isCompoundFinal = finalJamo in COMPOUND_FINALS;
    if (isCompoundFinal) {
      const [c1, c2] = COMPOUND_FINALS[finalJamo];
      const s1 = JAMO_STROKES[c1] || [];
      const s2 = JAMO_STROKES[c2] || [];
      const fb = layout.final;
      allStrokes.push(...transformStrokes(s1, { x: fb.x, y: fb.y, w: fb.w * 0.48, h: fb.h }));
      allStrokes.push(...transformStrokes(s2, { x: fb.x + fb.w * 0.52, y: fb.y, w: fb.w * 0.48, h: fb.h }));
    } else {
      const finStrokes = getJamoStrokes(finalJamo);
      allStrokes.push(...transformStrokes(finStrokes, layout.final));
    }
  }

  return allStrokes;
}

// Get all strokes for a string (handles multi-character words)
export function getCharacterStrokes(text: string): StrokePath[] {
  const chars = Array.from(text);
  if (chars.length === 1) {
    return getSyllableStrokes(chars[0]);
  }

  // Multiple characters: position side by side
  const charWidth = 1 / chars.length;
  const allStrokes: StrokePath[] = [];

  for (let i = 0; i < chars.length; i++) {
    const charStrokes = getSyllableStrokes(chars[i]);
    const offset = i * charWidth;
    const transformed = charStrokes.map(stroke =>
      stroke.map(([x, y]) => [offset + x * charWidth, y] as StrokePoint)
    );
    allStrokes.push(...transformed);
  }

  return allStrokes;
}
