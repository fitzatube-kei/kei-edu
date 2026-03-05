import { HangulCharacter, QuizQuestion, MatchingPair, MultilingualQuizQuestion, MultilingualText, MultilingualMatchingPair } from '@/types';

// ============================================
// Multilingual vowel pronunciation mappings
// Used for quiz options in different languages
// ============================================
export const vowelNameTranslations: Record<string, MultilingualText> = {
  // Basic vowels - pronunciation sounds
  '아': { en: 'a', ja: 'ア', es: 'a', th: 'อา', vi: 'a', zh: 'a' },
  '야': { en: 'ya', ja: 'ヤ', es: 'ya', th: 'ยา', vi: 'ya', zh: 'ya' },
  '어': { en: 'eo', ja: 'オ', es: 'eo', th: 'ออ', vi: 'ơ', zh: 'eo' },
  '여': { en: 'yeo', ja: 'ヨ', es: 'yeo', th: 'ยอ', vi: 'yeo', zh: 'yeo' },
  '오': { en: 'o', ja: 'オ', es: 'o', th: 'โอ', vi: 'o', zh: 'o' },
  '요': { en: 'yo', ja: 'ヨ', es: 'yo', th: 'โย', vi: 'yo', zh: 'yo' },
  '우': { en: 'u', ja: 'ウ', es: 'u', th: 'อู', vi: 'u', zh: 'u' },
  '유': { en: 'yu', ja: 'ユ', es: 'yu', th: 'ยู', vi: 'yu', zh: 'yu' },
  '으': { en: 'eu', ja: 'ウ', es: 'eu', th: 'อือ', vi: 'ư', zh: 'eu' },
  '이': { en: 'i', ja: 'イ', es: 'i', th: 'อี', vi: 'i', zh: 'i' },
  // Complex vowels
  '애': { en: 'ae', ja: 'エ', es: 'ae', th: 'แอ', vi: 'ae', zh: 'ae' },
  '얘': { en: 'yae', ja: 'イェ', es: 'yae', th: 'แย', vi: 'yae', zh: 'yae' },
  '에': { en: 'e', ja: 'エ', es: 'e', th: 'เอ', vi: 'e', zh: 'e' },
  '예': { en: 'ye', ja: 'イェ', es: 'ye', th: 'เย', vi: 'ye', zh: 'ye' },
  '와': { en: 'wa', ja: 'ワ', es: 'wa', th: 'วา', vi: 'wa', zh: 'wa' },
  '왜': { en: 'wae', ja: 'ウェ', es: 'wae', th: 'แว', vi: 'wae', zh: 'wae' },
  '외': { en: 'oe', ja: 'ウェ', es: 'oe', th: 'เว', vi: 'oe', zh: 'oe' },
  '워': { en: 'wo', ja: 'ウォ', es: 'wo', th: 'วอ', vi: 'wo', zh: 'wo' },
  '웨': { en: 'we', ja: 'ウェ', es: 'we', th: 'เว', vi: 'we', zh: 'we' },
  '위': { en: 'wi', ja: 'ウィ', es: 'wi', th: 'วี', vi: 'wi', zh: 'wi' },
  '의': { en: 'ui', ja: 'ウィ', es: 'ui', th: 'อือ-อี', vi: 'ưi', zh: 'ui' },
};

// Multilingual word data for vowel quiz questions
export const vowelWordTranslations: Record<string, { korean: string; romanization: string; translations: MultilingualText }> = {
  father: {
    korean: '아버지',
    romanization: 'abeoji',
    translations: {
      en: 'Father',
      ja: '父',
      es: 'Padre',
      th: 'พ่อ',
      vi: 'Cha',
      zh: '父亲',
    },
  },
  baseball: {
    korean: '야구',
    romanization: 'yagu',
    translations: {
      en: 'Baseball',
      ja: '野球',
      es: 'Béisbol',
      th: 'เบสบอล',
      vi: 'Bóng chày',
      zh: '棒球',
    },
  },
  mother: {
    korean: '어머니',
    romanization: 'eomeoni',
    translations: {
      en: 'Mother',
      ja: '母',
      es: 'Madre',
      th: 'แม่',
      vi: 'Mẹ',
      zh: '母亲',
    },
  },
  summer: {
    korean: '여름',
    romanization: 'yeoreum',
    translations: {
      en: 'Summer',
      ja: '夏',
      es: 'Verano',
      th: 'ฤดูร้อน',
      vi: 'Mùa hè',
      zh: '夏天',
    },
  },
  duck: {
    korean: '오리',
    romanization: 'ori',
    translations: {
      en: 'Duck',
      ja: 'アヒル',
      es: 'Pato',
      th: 'เป็ด',
      vi: 'Vịt',
      zh: '鸭子',
    },
  },
  cooking: {
    korean: '요리',
    romanization: 'yori',
    translations: {
      en: 'Cooking',
      ja: '料理',
      es: 'Cocina',
      th: 'การทำอาหาร',
      vi: 'Nấu ăn',
      zh: '料理',
    },
  },
  umbrella: {
    korean: '우산',
    romanization: 'usan',
    translations: {
      en: 'Umbrella',
      ja: '傘',
      es: 'Paraguas',
      th: 'ร่ม',
      vi: 'Ô/Dù',
      zh: '雨伞',
    },
  },
  name: {
    korean: '이름',
    romanization: 'ireum',
    translations: {
      en: 'Name',
      ja: '名前',
      es: 'Nombre',
      th: 'ชื่อ',
      vi: 'Tên',
      zh: '名字',
    },
  },
};

export const basicVowels: HangulCharacter[] = [
  { character: 'ㅏ', romanization: 'a', pronunciation: '아', type: 'vowel', example: { word: '아버지', meaning: 'father' } },
  { character: 'ㅑ', romanization: 'ya', pronunciation: '야', type: 'vowel', example: { word: '야구', meaning: 'baseball' } },
  { character: 'ㅓ', romanization: 'eo', pronunciation: '어', type: 'vowel', example: { word: '어머니', meaning: 'mother' } },
  { character: 'ㅕ', romanization: 'yeo', pronunciation: '여', type: 'vowel', example: { word: '여름', meaning: 'summer' } },
  { character: 'ㅗ', romanization: 'o', pronunciation: '오', type: 'vowel', example: { word: '오리', meaning: 'duck' } },
  { character: 'ㅛ', romanization: 'yo', pronunciation: '요', type: 'vowel', example: { word: '요리', meaning: 'cooking' } },
  { character: 'ㅜ', romanization: 'u', pronunciation: '우', type: 'vowel', example: { word: '우산', meaning: 'umbrella' } },
  { character: 'ㅠ', romanization: 'yu', pronunciation: '유', type: 'vowel', example: { word: '유리', meaning: 'glass' } },
  { character: 'ㅡ', romanization: 'eu', pronunciation: '으', type: 'vowel', example: { word: '으뜸', meaning: 'the best' } },
  { character: 'ㅣ', romanization: 'i', pronunciation: '이', type: 'vowel', example: { word: '이름', meaning: 'name' } },
];

export const complexVowels: HangulCharacter[] = [
  { character: 'ㅐ', romanization: 'ae', pronunciation: '애', type: 'complex-vowel', example: { word: '애기', meaning: 'baby' } },
  { character: 'ㅒ', romanization: 'yae', pronunciation: '얘', type: 'complex-vowel', example: { word: '얘기', meaning: 'story' } },
  { character: 'ㅔ', romanization: 'e', pronunciation: '에', type: 'complex-vowel', example: { word: '에너지', meaning: 'energy' } },
  { character: 'ㅖ', romanization: 'ye', pronunciation: '예', type: 'complex-vowel', example: { word: '예술', meaning: 'art' } },
  { character: 'ㅘ', romanization: 'wa', pronunciation: '와', type: 'complex-vowel', example: { word: '과일', meaning: 'fruit' } },
  { character: 'ㅙ', romanization: 'wae', pronunciation: '왜', type: 'complex-vowel', example: { word: '왜', meaning: 'why' } },
  { character: 'ㅚ', romanization: 'oe', pronunciation: '외', type: 'complex-vowel', example: { word: '외국', meaning: 'foreign country' } },
  { character: 'ㅝ', romanization: 'wo', pronunciation: '워', type: 'complex-vowel', example: { word: '원', meaning: 'won (currency)' } },
  { character: 'ㅞ', romanization: 'we', pronunciation: '웨', type: 'complex-vowel', example: { word: '웨이터', meaning: 'waiter' } },
  { character: 'ㅟ', romanization: 'wi', pronunciation: '위', type: 'complex-vowel', example: { word: '위험', meaning: 'danger' } },
  { character: 'ㅢ', romanization: 'ui', pronunciation: '의', type: 'complex-vowel', example: { word: '의사', meaning: 'doctor' } },
];

export const vowelQuizQuestions: QuizQuestion[] = [
  {
    id: 'v1',
    question: '다음 중 "ㅏ"의 발음은?',
    options: ['아', '어', '오', '우'],
    correctAnswer: 0,
    explanation: 'ㅏ는 "아"로 발음합니다.',
  },
  {
    id: 'v2',
    question: '"여름"에서 사용된 모음은?',
    options: ['ㅓ', 'ㅕ', 'ㅗ', 'ㅛ'],
    correctAnswer: 1,
    explanation: '"여름"의 "여"에서 모음은 ㅕ입니다.',
  },
  {
    id: 'v3',
    question: '다음 중 복합 모음이 아닌 것은?',
    options: ['ㅐ', 'ㅔ', 'ㅏ', 'ㅘ'],
    correctAnswer: 2,
    explanation: 'ㅏ는 기본 모음입니다. ㅐ, ㅔ, ㅘ는 복합 모음입니다.',
  },
  {
    id: 'v4',
    question: '"우산"의 모음 "ㅜ"의 로마자 표기는?',
    options: ['o', 'u', 'eu', 'i'],
    correctAnswer: 1,
    explanation: 'ㅜ는 "u"로 표기합니다.',
  },
  {
    id: 'v5',
    question: '"ㅡ"가 포함된 단어는?',
    options: ['바다', '으뜸', '아이', '우유'],
    correctAnswer: 1,
    explanation: '"으뜸"에 모음 ㅡ가 포함되어 있습니다.',
  },
  {
    id: 'v6',
    question: '"야"와 "여"의 공통점은?',
    options: ['둘 다 기본 모음', '둘 다 "ㅣ"가 결합됨', '둘 다 "y" 소리가 있음', '둘 다 복합 모음'],
    correctAnswer: 2,
    explanation: 'ㅑ(ya)와 ㅕ(yeo) 모두 "y" 소리가 포함되어 있습니다.',
  },
  {
    id: 'v7',
    question: '"의사"의 "의"에 사용된 모음은?',
    options: ['ㅢ', 'ㅟ', 'ㅚ', 'ㅙ'],
    correctAnswer: 0,
    explanation: '"의"에는 복합모음 ㅢ가 사용됩니다.',
  },
  {
    id: 'v8',
    question: '다음 중 "ㅗ"와 "ㅏ"가 합쳐진 복합 모음은?',
    options: ['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ'],
    correctAnswer: 0,
    explanation: 'ㅗ + ㅏ = ㅘ (와) 입니다.',
  },
];

export const vowelMatchingPairs: MatchingPair[] = [
  { id: 'vm1', left: 'ㅏ', right: '아' },
  { id: 'vm2', left: 'ㅓ', right: '어' },
  { id: 'vm3', left: 'ㅗ', right: '오' },
  { id: 'vm4', left: 'ㅜ', right: '우' },
  { id: 'vm5', left: 'ㅡ', right: '으' },
  { id: 'vm6', left: 'ㅣ', right: '이' },
];

// NEW: Multilingual Quiz Questions for Level 3 (Basic Vowels)
export const multilingualVowelQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mv1',
    templateKey: 'vowelPronunciation',
    character: 'ㅏ',
    options: ['아', '어', '오', '우'],
    correctAnswer: 0,
  },
  {
    id: 'mv2',
    templateKey: 'vowelInWord',
    word: vowelWordTranslations.summer,
    options: ['ㅓ', 'ㅕ', 'ㅗ', 'ㅛ'],
    correctAnswer: 1,
  },
  {
    id: 'mv3',
    templateKey: 'vowelRoman',
    character: 'ㅜ',
    options: ['o', 'u', 'eu', 'i'],
    correctAnswer: 1,
  },
  {
    id: 'mv4',
    templateKey: 'vowelInWord',
    word: vowelWordTranslations.name,
    options: ['ㅏ', 'ㅓ', 'ㅡ', 'ㅣ'],
    correctAnswer: 3,
  },
];

// NEW: Multilingual Quiz Questions for Level 4 (Complex Vowels)
export const multilingualComplexVowelQuizzes: MultilingualQuizQuestion[] = [
  {
    id: 'mcv1',
    templateKey: 'notComplexVowel',
    options: ['ㅐ', 'ㅔ', 'ㅏ', 'ㅘ'],
    correctAnswer: 2,
  },
  {
    id: 'mcv2',
    templateKey: 'compoundVowel',
    character: 'ㅗ',
    character2: 'ㅏ',
    options: ['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ'],
    correctAnswer: 0,
  },
  {
    id: 'mcv3',
    templateKey: 'vowelCommon',
    character: 'ㅑ',
    character2: 'ㅕ',
    options: ['both-basic', 'both-i-combined', 'both-y-sound', 'both-complex'],
    correctAnswer: 2,
  },
  {
    id: 'mcv4',
    templateKey: 'compoundVowel',
    character: 'ㅜ',
    character2: 'ㅓ',
    options: ['ㅘ', 'ㅙ', 'ㅝ', 'ㅟ'],
    correctAnswer: 2,
  },
];

// ============================================
// Multilingual Matching Pairs for Basic Vowels (Level 3)
// ============================================
export const multilingualBasicVowelMatching: MultilingualMatchingPair[] = [
  {
    id: 'mvm1',
    left: 'ㅏ',
    right: {
      en: 'a (as in "father")',
      ja: 'a（「あ」のように）',
      es: 'a (como en "padre")',
      th: 'a (เหมือน "อา")',
      vi: 'a (như trong "cha")',
      zh: 'a（如"啊"）',
    },
    type: 'vowel-name',
    romanization: 'a',
  },
  {
    id: 'mvm2',
    left: 'ㅑ',
    right: {
      en: 'ya (as in "yard")',
      ja: 'ya（「や」のように）',
      es: 'ya (como en "yate")',
      th: 'ya (เหมือน "ยา")',
      vi: 'ya (như trong "da")',
      zh: 'ya（如"呀"）',
    },
    type: 'vowel-name',
    romanization: 'ya',
  },
  {
    id: 'mvm3',
    left: 'ㅓ',
    right: {
      en: 'eo (as in "cup")',
      ja: 'eo（「オ」に近い）',
      es: 'eo (entre "o" y "a")',
      th: 'eo (เหมือน "เออ")',
      vi: 'eo (như "ơ")',
      zh: 'eo（如"呃"）',
    },
    type: 'vowel-name',
    romanization: 'eo',
  },
  {
    id: 'mvm4',
    left: 'ㅕ',
    right: {
      en: 'yeo (y + eo)',
      ja: 'yeo（「ヨ」に近い）',
      es: 'yeo (y + eo)',
      th: 'yeo (เหมือน "ยอ")',
      vi: 'yeo (như "dơ")',
      zh: 'yeo（如"哟"）',
    },
    type: 'vowel-name',
    romanization: 'yeo',
  },
  {
    id: 'mvm5',
    left: 'ㅗ',
    right: {
      en: 'o (as in "go")',
      ja: 'o（「オ」のように）',
      es: 'o (como en "sol")',
      th: 'o (เหมือน "โอ")',
      vi: 'o (như "ô")',
      zh: 'o（如"哦"）',
    },
    type: 'vowel-name',
    romanization: 'o',
  },
  {
    id: 'mvm6',
    left: 'ㅛ',
    right: {
      en: 'yo (as in "yo-yo")',
      ja: 'yo（「ヨ」のように）',
      es: 'yo (como en "yo")',
      th: 'yo (เหมือน "โย")',
      vi: 'yo (như "giô")',
      zh: 'yo（如"哟"）',
    },
    type: 'vowel-name',
    romanization: 'yo',
  },
  {
    id: 'mvm7',
    left: 'ㅜ',
    right: {
      en: 'u (as in "food")',
      ja: 'u（「ウ」のように）',
      es: 'u (como en "uno")',
      th: 'u (เหมือน "อู")',
      vi: 'u (như "u")',
      zh: 'u（如"乌"）',
    },
    type: 'vowel-name',
    romanization: 'u',
  },
  {
    id: 'mvm8',
    left: 'ㅠ',
    right: {
      en: 'yu (as in "you")',
      ja: 'yu（「ユ」のように）',
      es: 'yu (como en "yuca")',
      th: 'yu (เหมือน "ยู")',
      vi: 'yu (như "du")',
      zh: 'yu（如"于"）',
    },
    type: 'vowel-name',
    romanization: 'yu',
  },
  {
    id: 'mvm9',
    left: 'ㅡ',
    right: {
      en: 'eu (no English equivalent)',
      ja: 'eu（口を横に広げて）',
      es: 'eu (sin equivalente)',
      th: 'eu (เหมือน "อือ")',
      vi: 'eu (như "ư")',
      zh: 'eu（扁嘴发"呃"）',
    },
    type: 'vowel-name',
    romanization: 'eu',
  },
  {
    id: 'mvm10',
    left: 'ㅣ',
    right: {
      en: 'i (as in "see")',
      ja: 'i（「イ」のように）',
      es: 'i (como en "sí")',
      th: 'i (เหมือน "อี")',
      vi: 'i (như "i")',
      zh: 'i（如"衣"）',
    },
    type: 'vowel-name',
    romanization: 'i',
  },
];

// ============================================
// Multilingual Matching Pairs for Complex Vowels (Level 4)
// ============================================
export const multilingualComplexVowelMatching: MultilingualMatchingPair[] = [
  {
    id: 'mcvm1',
    left: 'ㅐ',
    right: {
      en: 'ae (as in "bed")',
      ja: 'ae（「エ」のように）',
      es: 'ae (como "e" en "el")',
      th: 'ae (เหมือน "แอ")',
      vi: 'ae (như "e")',
      zh: 'ae（如"哎"）',
    },
    type: 'vowel-name',
    romanization: 'ae',
  },
  {
    id: 'mcvm2',
    left: 'ㅒ',
    right: {
      en: 'yae (y + ae)',
      ja: 'yae（「イェ」のように）',
      es: 'yae (y + ae)',
      th: 'yae (เหมือน "แย")',
      vi: 'yae (như "de")',
      zh: 'yae（如"耶"）',
    },
    type: 'vowel-name',
    romanization: 'yae',
  },
  {
    id: 'mcvm3',
    left: 'ㅔ',
    right: {
      en: 'e (as in "pet")',
      ja: 'e（「エ」のように）',
      es: 'e (como en "ese")',
      th: 'e (เหมือน "เอ")',
      vi: 'e (như "ê")',
      zh: 'e（如"诶"）',
    },
    type: 'vowel-name',
    romanization: 'e',
  },
  {
    id: 'mcvm4',
    left: 'ㅖ',
    right: {
      en: 'ye (as in "yes")',
      ja: 'ye（「イェ」のように）',
      es: 'ye (como en "yerba")',
      th: 'ye (เหมือน "เย")',
      vi: 'ye (như "giê")',
      zh: 'ye（如"耶"）',
    },
    type: 'vowel-name',
    romanization: 'ye',
  },
  {
    id: 'mcvm5',
    left: 'ㅘ',
    right: {
      en: 'wa (as in "water")',
      ja: 'wa（「ワ」のように）',
      es: 'wa (como en "guante")',
      th: 'wa (เหมือน "วา")',
      vi: 'wa (như "oà")',
      zh: 'wa（如"哇"）',
    },
    type: 'vowel-name',
    romanization: 'wa',
  },
  {
    id: 'mcvm6',
    left: 'ㅙ',
    right: {
      en: 'wae (w + ae)',
      ja: 'wae（「ウェ」のように）',
      es: 'wae (w + ae)',
      th: 'wae (เหมือน "แว")',
      vi: 'wae (như "oẻ")',
      zh: 'wae（如"崴"）',
    },
    type: 'vowel-name',
    romanization: 'wae',
  },
  {
    id: 'mcvm7',
    left: 'ㅚ',
    right: {
      en: 'oe (similar to "we")',
      ja: 'oe（「ウェ」のように）',
      es: 'oe (parecido a "we")',
      th: 'oe (เหมือน "เว")',
      vi: 'oe (như "uê")',
      zh: 'oe（如"喂"）',
    },
    type: 'vowel-name',
    romanization: 'oe',
  },
  {
    id: 'mcvm8',
    left: 'ㅝ',
    right: {
      en: 'wo (as in "wonder")',
      ja: 'wo（「ウォ」のように）',
      es: 'wo (como en "wonder")',
      th: 'wo (เหมือน "วอ")',
      vi: 'wo (như "uơ")',
      zh: 'wo（如"窝"）',
    },
    type: 'vowel-name',
    romanization: 'wo',
  },
  {
    id: 'mcvm9',
    left: 'ㅞ',
    right: {
      en: 'we (as in "wet")',
      ja: 'we（「ウェ」のように）',
      es: 'we (como en "web")',
      th: 'we (เหมือน "เว")',
      vi: 'we (như "uê")',
      zh: 'we（如"威"）',
    },
    type: 'vowel-name',
    romanization: 'we',
  },
  {
    id: 'mcvm10',
    left: 'ㅟ',
    right: {
      en: 'wi (as in "we")',
      ja: 'wi（「ウィ」のように）',
      es: 'wi (como en "wifi")',
      th: 'wi (เหมือน "วี")',
      vi: 'wi (như "uy")',
      zh: 'wi（如"威"）',
    },
    type: 'vowel-name',
    romanization: 'wi',
  },
  {
    id: 'mcvm11',
    left: 'ㅢ',
    right: {
      en: 'ui (eu + i)',
      ja: 'ui（「ウィ」のように）',
      es: 'ui (eu + i)',
      th: 'ui (เหมือน "อือ-อี")',
      vi: 'ui (như "ưi")',
      zh: 'ui（"으"+"이"）',
    },
    type: 'vowel-name',
    romanization: 'ui',
  },
];
