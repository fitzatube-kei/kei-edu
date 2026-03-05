import { MultilingualText } from '@/types';

export interface TutorialCharacter {
  char: string;
  romanization: string; // e.g., "giyeok"
  sound: string; // e.g., "g/k"
  title: MultilingualText;
  description: MultilingualText;
  examples: string[];
  words: {
    korean: string;
    romanization: string;
    translations: MultilingualText;
  }[];
}

export interface TutorialStep {
  id: string;
  step: number;
  title: MultilingualText;
  description: MultilingualText;
  type: 'consonants' | 'vowels' | 'consonant-audio' | 'vowel-audio' | 'syllable-builder';
  characters?: TutorialCharacter[];
}

// Consonant tutorial data - Step 1: Basic shapes (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ)
export const consonantsTutorial: TutorialCharacter[] = [
  {
    char: 'ㄱ',
    romanization: 'giyeok',
    sound: 'g/k',
    title: {
      en: 'giyeok | g/k sound',
      ja: 'ギヨク | g/k の音',
      es: 'giyeok | sonido g/k',
      th: 'กิยก | เสียง g/k',
      vi: 'giyeok | âm g/k',
      zh: 'giyeok | g/k 音',
    },
    description: {
      en: "Like 'g' in 'go' at the start, 'k' in 'book' at the end",
      ja: "語頭では「が」、語末では「く」のような音",
      es: "Como 'g' en 'gato' al inicio, 'k' en 'look' al final",
      th: "เสียง 'ก' คล้าย 'g' ที่ต้นคำ, 'k' ที่ท้ายคำ",
      vi: "Giống 'g' trong 'go' ở đầu, 'k' trong 'book' ở cuối",
      zh: "开头像 'g'，结尾像 'k'",
    },
    examples: ['가', '고', '구', '기'],
    words: [
      {
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
      {
        korean: '고기',
        romanization: 'gogi',
        translations: {
          en: 'Meat',
          ja: '肉',
          es: 'Carne',
          th: 'เนื้อ',
          vi: 'Thịt',
          zh: '肉',
        },
      },
    ],
  },
  {
    char: 'ㄴ',
    romanization: 'nieun',
    sound: 'n',
    title: {
      en: 'nieun | n sound',
      ja: 'ニウン | n の音',
      es: 'nieun | sonido n',
      th: 'นีอึน | เสียง n',
      vi: 'nieun | âm n',
      zh: 'nieun | n 音',
    },
    description: {
      en: "Like 'n' in 'no'",
      ja: "「な」の子音と同じ",
      es: "Como 'n' en 'no'",
      th: "เสียง 'น' เหมือน 'n' ในภาษาอังกฤษ",
      vi: "Giống 'n' trong 'no'",
      zh: "像 'n' 的发音",
    },
    examples: ['나', '노', '누', '니'],
    words: [
      {
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
      {
        korean: '누나',
        romanization: 'nuna',
        translations: {
          en: 'Older sister (for males)',
          ja: '姉（男性から）',
          es: 'Hermana mayor',
          th: 'พี่สาว',
          vi: 'Chị gái',
          zh: '姐姐',
        },
      },
    ],
  },
  {
    char: 'ㄷ',
    romanization: 'digeut',
    sound: 'd/t',
    title: {
      en: 'digeut | d/t sound',
      ja: 'ディグッ | d/t の音',
      es: 'digeut | sonido d/t',
      th: 'ดีกึด | เสียง d/t',
      vi: 'digeut | âm d/t',
      zh: 'digeut | d/t 音',
    },
    description: {
      en: "Like 'd' in 'do' at the start, 't' in 'cat' at the end",
      ja: "語頭では「だ」、語末では「っと」のような音",
      es: "Como 'd' en 'do' al inicio, 't' en 'cat' al final",
      th: "เสียง 'ด' ที่ต้นคำ, 'ต' ที่ท้ายคำ",
      vi: "Giống 'd' trong 'do' ở đầu, 't' trong 'cat' ở cuối",
      zh: "开头像 'd'，结尾像 't'",
    },
    examples: ['다', '도', '두', '디'],
    words: [
      {
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
      {
        korean: '도시',
        romanization: 'dosi',
        translations: {
          en: 'City',
          ja: '都市',
          es: 'Ciudad',
          th: 'เมือง',
          vi: 'Thành phố',
          zh: '城市',
        },
      },
    ],
  },
  {
    char: 'ㄹ',
    romanization: 'rieul',
    sound: 'r/l',
    title: {
      en: 'rieul | r/l sound',
      ja: 'リウル | r/l の音',
      es: 'rieul | sonido r/l',
      th: 'รีอึล | เสียง r/l',
      vi: 'rieul | âm r/l',
      zh: 'rieul | r/l 音',
    },
    description: {
      en: "Between 'r' and 'l' - tap your tongue lightly on the roof of your mouth",
      ja: "「ら」と「ら」の中間、舌先を軽く口蓋につける",
      es: "Entre 'r' y 'l' - toca ligeramente el paladar con la lengua",
      th: "ระหว่าง 'ร' และ 'ล' - แตะลิ้นเบาๆ ที่เพดานปาก",
      vi: "Giữa 'r' và 'l' - chạm nhẹ lưỡi vào vòm miệng",
      zh: "介于 'r' 和 'l' 之间 - 舌尖轻触上颚",
    },
    examples: ['라', '로', '루', '리'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅁ',
    romanization: 'mieum',
    sound: 'm',
    title: {
      en: 'mieum | m sound',
      ja: 'ミウム | m の音',
      es: 'mieum | sonido m',
      th: 'มีอึม | เสียง m',
      vi: 'mieum | âm m',
      zh: 'mieum | m 音',
    },
    description: {
      en: "Like 'm' in 'mom'",
      ja: "「ま」の子音と同じ",
      es: "Como 'm' en 'mamá'",
      th: "เสียง 'ม' เหมือน 'm' ในภาษาอังกฤษ",
      vi: "Giống 'm' trong 'mom'",
      zh: "像 'm' 的发音",
    },
    examples: ['마', '모', '무', '미'],
    words: [
      {
        korean: '물',
        romanization: 'mul',
        translations: {
          en: 'Water',
          ja: '水',
          es: 'Agua',
          th: 'น้ำ',
          vi: 'Nước',
          zh: '水',
        },
      },
    ],
  },
];

// Consonant tutorial data - Step 2: More consonants (ㅂ, ㅅ, ㅇ, ㅈ, ㅎ)
export const consonantsTutorial2: TutorialCharacter[] = [
  {
    char: 'ㅂ',
    romanization: 'bieup',
    sound: 'b/p',
    title: {
      en: 'bieup | b/p sound',
      ja: 'ビウプ | b/p の音',
      es: 'bieup | sonido b/p',
      th: 'บีอึบ | เสียง b/p',
      vi: 'bieup | âm b/p',
      zh: 'bieup | b/p 音',
    },
    description: {
      en: "Like 'b' in 'boy' at the start, 'p' in 'cup' at the end",
      ja: "語頭では「ば」、語末では「っぷ」のような音",
      es: "Como 'b' en 'bola' al inicio, 'p' en 'cap' al final",
      th: "เสียง 'บ' ที่ต้นคำ, 'ป' ที่ท้ายคำ",
      vi: "Giống 'b' trong 'boy' ở đầu, 'p' trong 'cup' ở cuối",
      zh: "开头像 'b'，结尾像 'p'",
    },
    examples: ['바', '보', '부', '비'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅅ',
    romanization: 'siot',
    sound: 's',
    title: {
      en: 'siot | s sound',
      ja: 'シオッ | s の音',
      es: 'siot | sonido s',
      th: 'ซีออด | เสียง s',
      vi: 'siot | âm s',
      zh: 'siot | s 音',
    },
    description: {
      en: "Like 's' in 'sun'",
      ja: "「さ」の子音と同じ",
      es: "Como 's' en 'sol'",
      th: "เสียง 'ซ' เหมือน 's' ในภาษาอังกฤษ",
      vi: "Giống 's' trong 'sun'",
      zh: "像 's' 的发音",
    },
    examples: ['사', '소', '수', '시'],
    words: [
      {
        korean: '사랑',
        romanization: 'sarang',
        translations: {
          en: 'Love',
          ja: '愛',
          es: 'Amor',
          th: 'ความรัก',
          vi: 'Tình yêu',
          zh: '爱',
        },
      },
    ],
  },
  {
    char: 'ㅇ',
    romanization: 'ieung',
    sound: 'silent/ng',
    title: {
      en: 'ieung | silent or ng sound',
      ja: 'イウン | 無音 または ng の音',
      es: 'ieung | silencioso o sonido ng',
      th: 'อีอึง | เงียบ หรือ เสียง ng',
      vi: 'ieung | im lặng hoặc âm ng',
      zh: 'ieung | 无声或 ng 音',
    },
    description: {
      en: "Silent at the start of syllables, 'ng' sound at the end (like in 'sing')",
      ja: "音節の先頭では無音、末尾では「ん」のような ng の音",
      es: "Silencioso al inicio, sonido 'ng' al final (como en 'sing')",
      th: "เงียบที่ต้นพยางค์ เสียง 'ng' ที่ท้ายพยางค์ (เหมือน 'ง')",
      vi: "Im lặng ở đầu âm tiết, âm 'ng' ở cuối (như trong 'sing')",
      zh: "在音节开头无声，在结尾发 'ng' 音",
    },
    examples: ['아', '오', '우', '이'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅈ',
    romanization: 'jieut',
    sound: 'j',
    title: {
      en: 'jieut | j sound',
      ja: 'ジウッ | j の音',
      es: 'jieut | sonido j',
      th: 'จีอึด | เสียง j',
      vi: 'jieut | âm j',
      zh: 'jieut | j 音',
    },
    description: {
      en: "Like 'j' in 'jam'",
      ja: "「じゃ」の子音と同じ",
      es: "Como 'j' en 'jam' (inglés)",
      th: "เสียง 'จ' เหมือน 'j' ในภาษาอังกฤษ",
      vi: "Giống 'j' trong 'jam'",
      zh: "像 'j' 的发音",
    },
    examples: ['자', '조', '주', '지'],
    words: [
      {
        korean: '집',
        romanization: 'jip',
        translations: {
          en: 'House',
          ja: '家',
          es: 'Casa',
          th: 'บ้าน',
          vi: 'Nhà',
          zh: '房子',
        },
      },
    ],
  },
  {
    char: 'ㅎ',
    romanization: 'hieut',
    sound: 'h',
    title: {
      en: 'hieut | h sound',
      ja: 'ヒウッ | h の音',
      es: 'hieut | sonido h',
      th: 'ฮีอึด | เสียง h',
      vi: 'hieut | âm h',
      zh: 'hieut | h 音',
    },
    description: {
      en: "Like 'h' in 'hello'",
      ja: "「は」の子音と同じ",
      es: "Como 'h' en 'hello' (inglés)",
      th: "เสียง 'ฮ' เหมือน 'h' ในภาษาอังกฤษ",
      vi: "Giống 'h' trong 'hello'",
      zh: "像 'h' 的发音",
    },
    examples: ['하', '호', '후', '히'],
    words: [
      {
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
    ],
  },
];

// Vowel tutorial data - Step 3: Basic vowels (ㅏ, ㅑ, ㅓ, ㅕ, ㅗ)
export const vowelsTutorial: TutorialCharacter[] = [
  {
    char: 'ㅏ',
    romanization: 'a',
    sound: 'a',
    title: {
      en: 'a | ah sound',
      ja: 'ア | あ の音',
      es: 'a | sonido a',
      th: 'อา | เสียง a',
      vi: 'a | âm a',
      zh: 'a | a 音',
    },
    description: {
      en: "Like 'a' in 'father'",
      ja: "「あ」と同じ音",
      es: "Como 'a' en 'padre'",
      th: "เสียง 'อา' เหมือน 'a' ใน 'father'",
      vi: "Giống 'a' trong 'father'",
      zh: "像 'a' 在 'father' 中的发音",
    },
    examples: ['가', '나', '다', '라'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅑ',
    romanization: 'ya',
    sound: 'ya',
    title: {
      en: 'ya | ya sound',
      ja: 'ヤ | や の音',
      es: 'ya | sonido ya',
      th: 'ยา | เสียง ya',
      vi: 'ya | âm ya',
      zh: 'ya | ya 音',
    },
    description: {
      en: "Like 'ya' in 'yard'",
      ja: "「や」と同じ音",
      es: "Como 'ya' en 'yard' (inglés)",
      th: "เสียง 'ยา'",
      vi: "Giống 'ya' trong 'yard'",
      zh: "像 'ya' 的发音",
    },
    examples: ['갸', '냐', '댜', '랴'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅓ',
    romanization: 'eo',
    sound: 'eo',
    title: {
      en: 'eo | uh sound',
      ja: 'オ | お の音',
      es: 'eo | sonido eo',
      th: 'ออ | เสียง eo',
      vi: 'eo | âm ơ',
      zh: 'eo | eo 音',
    },
    description: {
      en: "Like 'u' in 'cup' or 'o' in 'son'",
      ja: "「お」と「あ」の中間、口を開けて",
      es: "Como 'o' en 'son' (inglés)",
      th: "เสียงระหว่าง 'เออ' และ 'ออ'",
      vi: "Giống 'ơ' trong tiếng Việt",
      zh: "像 'u' 在 'cup' 中，嘴张开",
    },
    examples: ['거', '너', '더', '러'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅕ',
    romanization: 'yeo',
    sound: 'yeo',
    title: {
      en: 'yeo | yuh sound',
      ja: 'ヨ | よ の音',
      es: 'yeo | sonido yeo',
      th: 'เยอ | เสียง yeo',
      vi: 'yeo | âm yeo',
      zh: 'yeo | yeo 音',
    },
    description: {
      en: "Like 'yo' in 'young' but more open",
      ja: "「よ」に近いが口を開ける",
      es: "Como 'yo' en 'young' pero más abierto",
      th: "เสียง 'เยอ'",
      vi: "Giống 'yeo' - miệng mở",
      zh: "像 'yo' 但嘴张开",
    },
    examples: ['겨', '녀', '뎌', '려'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅗ',
    romanization: 'o',
    sound: 'o',
    title: {
      en: 'o | oh sound',
      ja: 'オ | お の音',
      es: 'o | sonido o',
      th: 'โอ | เสียง o',
      vi: 'o | âm o',
      zh: 'o | o 音',
    },
    description: {
      en: "Like 'o' in 'go'",
      ja: "「お」と同じ音",
      es: "Como 'o' en 'no'",
      th: "เสียง 'โอ'",
      vi: "Giống 'o' trong 'go'",
      zh: "像 'o' 在 'go' 中的发音",
    },
    examples: ['고', '노', '도', '로'],
    words: [
      {
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
    ],
  },
];

// Vowel tutorial data - Step 4: More vowels (ㅛ, ㅜ, ㅠ, ㅡ, ㅣ)
export const vowelsTutorial2: TutorialCharacter[] = [
  {
    char: 'ㅛ',
    romanization: 'yo',
    sound: 'yo',
    title: {
      en: 'yo | yo sound',
      ja: 'ヨ | よ の音',
      es: 'yo | sonido yo',
      th: 'โย | เสียง yo',
      vi: 'yo | âm yo',
      zh: 'yo | yo 音',
    },
    description: {
      en: "Like 'yo' in 'yo-yo'",
      ja: "「よ」と同じ音",
      es: "Como 'yo' en 'yo-yo'",
      th: "เสียง 'โย'",
      vi: "Giống 'yo' trong 'yo-yo'",
      zh: "像 'yo' 的发音",
    },
    examples: ['교', '뇨', '됴', '료'],
    words: [
      {
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
    ],
  },
  {
    char: 'ㅜ',
    romanization: 'u',
    sound: 'u',
    title: {
      en: 'u | oo sound',
      ja: 'ウ | う の音',
      es: 'u | sonido u',
      th: 'อู | เสียง u',
      vi: 'u | âm u',
      zh: 'u | u 音',
    },
    description: {
      en: "Like 'oo' in 'moon'",
      ja: "「う」と同じ音",
      es: "Como 'u' en 'luna'",
      th: "เสียง 'อู'",
      vi: "Giống 'u' trong 'moon'",
      zh: "像 'oo' 在 'moon' 中的发音",
    },
    examples: ['구', '누', '두', '루'],
    words: [
      {
        korean: '우산',
        romanization: 'usan',
        translations: {
          en: 'Umbrella',
          ja: '傘',
          es: 'Paraguas',
          th: 'ร่ม',
          vi: 'Ô',
          zh: '雨伞',
        },
      },
    ],
  },
  {
    char: 'ㅠ',
    romanization: 'yu',
    sound: 'yu',
    title: {
      en: 'yu | you sound',
      ja: 'ユ | ゆ の音',
      es: 'yu | sonido yu',
      th: 'ยู | เสียง yu',
      vi: 'yu | âm yu',
      zh: 'yu | yu 音',
    },
    description: {
      en: "Like 'you' in 'you'",
      ja: "「ゆ」と同じ音",
      es: "Como 'you' en inglés",
      th: "เสียง 'ยู'",
      vi: "Giống 'yu' trong 'you'",
      zh: "像 'you' 的发音",
    },
    examples: ['규', '뉴', '듀', '류'],
    words: [
      {
        korean: '유리',
        romanization: 'yuri',
        translations: {
          en: 'Glass',
          ja: 'ガラス',
          es: 'Vidrio',
          th: 'กระจก',
          vi: 'Kính',
          zh: '玻璃',
        },
      },
    ],
  },
  {
    char: 'ㅡ',
    romanization: 'eu',
    sound: 'eu',
    title: {
      en: 'eu | eu sound',
      ja: 'ウ | う の音',
      es: 'eu | sonido eu',
      th: 'อือ | เสียง eu',
      vi: 'eu | âm ư',
      zh: 'eu | eu 音',
    },
    description: {
      en: "No English equivalent - say 'ee' but spread your lips wide",
      ja: "「う」に近いが唇を横に広げる",
      es: "Sin equivalente - diga 'i' con labios extendidos",
      th: "เสียงคล้าย 'อือ' ปากเป็นเส้นตรง",
      vi: "Không có tương đương - nói 'ư' miệng rộng",
      zh: "没有英语对应 - 说 'ee' 但嘴唇展开",
    },
    examples: ['그', '느', '드', '르'],
    words: [
      {
        korean: '으뜸',
        romanization: 'eutteum',
        translations: {
          en: 'The best',
          ja: '一番',
          es: 'El mejor',
          th: 'ดีที่สุด',
          vi: 'Tốt nhất',
          zh: '最好',
        },
      },
    ],
  },
  {
    char: 'ㅣ',
    romanization: 'i',
    sound: 'i',
    title: {
      en: 'i | ee sound',
      ja: 'イ | い の音',
      es: 'i | sonido i',
      th: 'อี | เสียง i',
      vi: 'i | âm i',
      zh: 'i | i 音',
    },
    description: {
      en: "Like 'ee' in 'see'",
      ja: "「い」と同じ音",
      es: "Como 'i' en 'sí'",
      th: "เสียง 'อี'",
      vi: "Giống 'i' trong 'see'",
      zh: "像 'ee' 在 'see' 中的发音",
    },
    examples: ['기', '니', '디', '리'],
    words: [
      {
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
    ],
  },
];

// Tutorial steps definition
export const tutorialSteps: TutorialStep[] = [
  {
    id: 'tutorial-0-1',
    step: 1,
    title: {
      en: 'Basic Consonants (Part 1)',
      ja: '基本子音（パート1）',
      es: 'Consonantes Básicas (Parte 1)',
      th: 'พยัญชนะพื้นฐาน (ตอนที่ 1)',
      vi: 'Phụ âm Cơ bản (Phần 1)',
      zh: '基本辅音（第1部分）',
    },
    description: {
      en: 'Learn the first 5 Korean consonants: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ. Swipe through to learn each one with pronunciation and examples.',
      ja: '最初の5つの韓国語子音を学びましょう：ㄱ, ㄴ, ㄷ, ㄹ, ㅁ。スワイプして発音と例を学びましょう。',
      es: 'Aprende las primeras 5 consonantes coreanas: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ. Desliza para aprender cada una.',
      th: 'เรียนพยัญชนะเกาหลี 5 ตัวแรก: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ ปัดเพื่อเรียนรู้แต่ละตัว',
      vi: 'Học 5 phụ âm Hàn đầu tiên: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ. Vuốt để học từng chữ.',
      zh: '学习前5个韩语辅音：ㄱ, ㄴ, ㄷ, ㄹ, ㅁ。滑动学习每个辅音。',
    },
    type: 'consonants',
    characters: consonantsTutorial,
  },
  {
    id: 'tutorial-0-2',
    step: 2,
    title: {
      en: 'More Consonants (Part 2)',
      ja: 'もっと子音（パート2）',
      es: 'Más Consonantes (Parte 2)',
      th: 'พยัญชนะเพิ่มเติม (ตอนที่ 2)',
      vi: 'Thêm Phụ âm (Phần 2)',
      zh: '更多辅音（第2部分）',
    },
    description: {
      en: 'Learn 5 more consonants: ㅂ, ㅅ, ㅇ, ㅈ, ㅎ. Tap the speaker icon to hear the pronunciation.',
      ja: 'さらに5つの子音を学びましょう：ㅂ, ㅅ, ㅇ, ㅈ, ㅎ。スピーカーアイコンをタップして発音を聞いてください。',
      es: 'Aprende 5 consonantes más: ㅂ, ㅅ, ㅇ, ㅈ, ㅎ. Toca el icono del altavoz para escuchar.',
      th: 'เรียนพยัญชนะอีก 5 ตัว: ㅂ, ㅅ, ㅇ, ㅈ, ㅎ แตะไอคอนลำโพงเพื่อฟังเสียง',
      vi: 'Học thêm 5 phụ âm: ㅂ, ㅅ, ㅇ, ㅈ, ㅎ. Nhấn biểu tượng loa để nghe.',
      zh: '学习另外5个辅音：ㅂ, ㅅ, ㅇ, ㅈ, ㅎ。点击扬声器图标听发音。',
    },
    type: 'consonant-audio',
    characters: consonantsTutorial2,
  },
  {
    id: 'tutorial-0-3',
    step: 3,
    title: {
      en: 'Basic Vowels (Part 1)',
      ja: '基本母音（パート1）',
      es: 'Vocales Básicas (Parte 1)',
      th: 'สระพื้นฐาน (ตอนที่ 1)',
      vi: 'Nguyên âm Cơ bản (Phần 1)',
      zh: '基本元音（第1部分）',
    },
    description: {
      en: 'Learn the first 5 Korean vowels: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ. Each vowel has its unique sound.',
      ja: '最初の5つの韓国語母音を学びましょう：ㅏ, ㅑ, ㅓ, ㅕ, ㅗ。各母音には独自の音があります。',
      es: 'Aprende las primeras 5 vocales coreanas: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ. Cada vocal tiene su sonido único.',
      th: 'เรียนสระเกาหลี 5 ตัวแรก: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ แต่ละสระมีเสียงเฉพาะ',
      vi: 'Học 5 nguyên âm Hàn đầu tiên: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ. Mỗi nguyên âm có âm thanh riêng.',
      zh: '学习前5个韩语元音：ㅏ, ㅑ, ㅓ, ㅕ, ㅗ。每个元音有独特的发音。',
    },
    type: 'vowels',
    characters: vowelsTutorial,
  },
  {
    id: 'tutorial-0-4',
    step: 4,
    title: {
      en: 'More Vowels (Part 2)',
      ja: 'もっと母音（パート2）',
      es: 'Más Vocales (Parte 2)',
      th: 'สระเพิ่มเติม (ตอนที่ 2)',
      vi: 'Thêm Nguyên âm (Phần 2)',
      zh: '更多元音（第2部分）',
    },
    description: {
      en: 'Learn 5 more vowels: ㅛ, ㅜ, ㅠ, ㅡ, ㅣ. Pay attention to the mouth shape for each sound.',
      ja: 'さらに5つの母音を学びましょう：ㅛ, ㅜ, ㅠ, ㅡ, ㅣ。各音の口の形に注意してください。',
      es: 'Aprende 5 vocales más: ㅛ, ㅜ, ㅠ, ㅡ, ㅣ. Presta atención a la forma de la boca.',
      th: 'เรียนสระอีก 5 ตัว: ㅛ, ㅜ, ㅠ, ㅡ, ㅣ สังเกตรูปปากสำหรับแต่ละเสียง',
      vi: 'Học thêm 5 nguyên âm: ㅛ, ㅜ, ㅠ, ㅡ, ㅣ. Chú ý hình dạng miệng cho mỗi âm.',
      zh: '学习另外5个元音：ㅛ, ㅜ, ㅠ, ㅡ, ㅣ。注意每个音的嘴形。',
    },
    type: 'vowel-audio',
    characters: vowelsTutorial2,
  },
  {
    id: 'tutorial-0-5',
    step: 5,
    title: {
      en: 'Building Syllables',
      ja: '音節を作る',
      es: 'Construyendo Sílabas',
      th: 'สร้างพยางค์',
      vi: 'Xây dựng Âm tiết',
      zh: '构建音节',
    },
    description: {
      en: 'Combine consonants and vowels to create Korean syllables. Drag and drop to build characters!',
      ja: '子音と母音を組み合わせて韓国語の音節を作りましょう。ドラッグ＆ドロップで文字を作ってみよう！',
      es: 'Combina consonantes y vocales para crear sílabas coreanas. ¡Arrastra y suelta para construir caracteres!',
      th: 'รวมพยัญชนะและสระเพื่อสร้างพยางค์เกาหลี ลากและวางเพื่อสร้างตัวอักษร!',
      vi: 'Kết hợp phụ âm và nguyên âm để tạo âm tiết Hàn. Kéo thả để tạo chữ!',
      zh: '组合辅音和元音来创建韩语音节。拖放来构建字符！',
    },
    type: 'syllable-builder',
  },
];

export const getTutorialStep = (step: number): TutorialStep | undefined => {
  return tutorialSteps.find(s => s.step === step);
};
