import { HistoricalEvent, HistoricalFigure, QuizQuestion, MatchingPair, MultilingualQuizQuestion } from '@/types';

export const goryeoEvents: HistoricalEvent[] = [
  {
    year: '918',
    event: '고려 건국',
    description: '왕건이 고려를 건국했습니다.',
    period: '고려',
  },
  {
    year: '935',
    event: '신라 항복',
    description: '경순왕이 고려에 항복하여 신라가 멸망했습니다.',
    period: '고려',
  },
  {
    year: '936',
    event: '후삼국 통일',
    description: '왕건이 후백제를 정벌하고 후삼국을 통일했습니다.',
    period: '고려',
  },
  {
    year: '958',
    event: '과거제 시행',
    description: '광종이 과거제를 시행했습니다.',
    period: '고려',
  },
  {
    year: '1019',
    event: '귀주대첩',
    description: '강감찬 장군이 거란군을 물리쳤습니다.',
    period: '고려',
  },
  {
    year: '1107',
    event: '별무반 설치',
    description: '윤관이 여진 정벌을 위해 별무반을 설치했습니다.',
    period: '고려',
  },
  {
    year: '1231',
    event: '몽골 침입 시작',
    description: '몽골의 1차 침입이 시작되었습니다.',
    period: '고려',
  },
  {
    year: '1234',
    event: '금속활자 발명',
    description: '세계 최초의 금속활자로 상정고금예문을 인쇄했습니다.',
    period: '고려',
  },
  {
    year: '1236',
    event: '팔만대장경 조판 시작',
    description: '몽골 침입을 불력으로 물리치기 위해 조판을 시작했습니다.',
    period: '고려',
  },
  {
    year: '1392',
    event: '고려 멸망',
    description: '이성계가 조선을 건국하며 고려가 멸망했습니다.',
    period: '고려',
  },
];

export const goryeoFigures: HistoricalFigure[] = [
  {
    name: '왕건',
    period: '고려',
    title: '고려 태조',
    description: '고려를 건국하고 후삼국을 통일한 인물입니다.',
    achievements: ['고려 건국', '후삼국 통일', '훈요 10조 제정'],
  },
  {
    name: '광종',
    period: '고려',
    title: '고려 제4대 왕',
    description: '왕권 강화를 위해 다양한 개혁을 실시한 왕입니다.',
    achievements: ['과거제 시행', '노비안검법', '호족 세력 약화'],
  },
  {
    name: '강감찬',
    period: '고려',
    title: '고려의 장군',
    description: '귀주대첩에서 거란군을 크게 물리친 명장입니다.',
    achievements: ['귀주대첩 승리', '거란군 격퇴'],
  },
  {
    name: '서희',
    period: '고려',
    title: '고려의 외교관',
    description: '담판으로 강동 6주를 획득한 외교의 달인입니다.',
    achievements: ['강동 6주 획득', '거란과의 외교 담판'],
  },
  {
    name: '윤관',
    period: '고려',
    title: '고려의 장군',
    description: '별무반을 이끌고 여진을 정벌한 장군입니다.',
    achievements: ['별무반 창설', '동북 9성 축조'],
  },
  {
    name: '최충',
    period: '고려',
    title: '고려의 학자',
    description: '해동공자로 불린 고려의 대학자입니다.',
    achievements: ['9재 학당 설립', '유학 발전'],
  },
];

export const goryeoQuizQuestions: QuizQuestion[] = [
  {
    id: 'gh1',
    question: '고려를 건국한 인물은?',
    options: ['견훤', '궁예', '왕건', '이성계'],
    correctAnswer: 2,
    explanation: '왕건이 918년에 고려를 건국했습니다.',
  },
  {
    id: 'gh2',
    question: '고려에서 과거제를 처음 시행한 왕은?',
    options: ['태조', '광종', '성종', '현종'],
    correctAnswer: 1,
    explanation: '광종이 958년에 과거제를 처음 시행했습니다.',
  },
  {
    id: 'gh3',
    question: '귀주대첩에서 승리한 장군은?',
    options: ['서희', '강감찬', '윤관', '최영'],
    correctAnswer: 1,
    explanation: '강감찬 장군이 1019년 귀주대첩에서 승리했습니다.',
  },
  {
    id: 'gh4',
    question: '담판을 통해 강동 6주를 획득한 인물은?',
    options: ['강감찬', '서희', '윤관', '왕건'],
    correctAnswer: 1,
    explanation: '서희가 거란과의 담판으로 강동 6주를 획득했습니다.',
  },
  {
    id: 'gh5',
    question: '고려 시대에 만들어진 문화재가 아닌 것은?',
    options: ['팔만대장경', '직지심체요절', '무구정광대다라니경', '금속활자'],
    correctAnswer: 2,
    explanation: '무구정광대다라니경은 통일신라 시대의 문화재입니다.',
  },
  {
    id: 'gh6',
    question: '별무반을 만든 인물은?',
    options: ['강감찬', '서희', '윤관', '최충'],
    correctAnswer: 2,
    explanation: '윤관이 여진 정벌을 위해 별무반을 창설했습니다.',
  },
  {
    id: 'gh7',
    question: '고려가 멸망한 연도는?',
    options: ['1388년', '1392년', '1398년', '1400년'],
    correctAnswer: 1,
    explanation: '고려는 1392년 이성계가 조선을 건국하며 멸망했습니다.',
  },
  {
    id: 'gh8',
    question: '해동공자로 불린 고려의 학자는?',
    options: ['최충', '정몽주', '서희', '이규보'],
    correctAnswer: 0,
    explanation: '최충은 9재 학당을 설립한 대학자로 해동공자로 불렸습니다.',
  },
];

export const goryeoMatchingPairs: MatchingPair[] = [
  { id: 'gm1', left: '왕건', right: '고려 건국' },
  { id: 'gm2', left: '광종', right: '과거제 시행' },
  { id: 'gm3', left: '강감찬', right: '귀주대첩' },
  { id: 'gm4', left: '서희', right: '강동 6주' },
  { id: 'gm5', left: '윤관', right: '별무반' },
  { id: 'gm6', left: '최충', right: '해동공자' },
];

// ============================================
// Multilingual Goryeo Quiz Questions
// All options use terms from translations.ts for automatic translation
// ============================================

// Level 4: Foundation and Unification of Goryeo
export const multilingualGoryeoQuizzes1: MultilingualQuizQuestion[] = [
  {
    id: 'mgh1',
    templateKey: 'historyFounder',
    character: '고려',
    options: ['견훤', '궁예', '왕건', '이성계'],
    correctAnswer: 2,
  },
  {
    id: 'mgh2',
    templateKey: 'historyKing',
    character: '과거제 시행',
    options: ['태조', '광종', '성종', '현종'],
    correctAnswer: 1,
  },
  {
    id: 'mgh3',
    templateKey: 'historyPerson',
    character: '강동 6주',
    options: ['강감찬', '서희', '윤관', '왕건'],
    correctAnswer: 1,
  },
  {
    id: 'mgh4',
    templateKey: 'historyEventYear',
    character: '고려',
    options: ['918년', '935년', '936년', '958년'],
    correctAnswer: 0,
  },
];

// Level 5: Foreign Invasions and Overcoming
export const multilingualGoryeoQuizzes2: MultilingualQuizQuestion[] = [
  {
    id: 'mgh5',
    templateKey: 'historyBattle',
    character: '귀주대첩',
    options: ['서희', '강감찬', '윤관', '최영'],
    correctAnswer: 1,
  },
  {
    id: 'mgh6',
    templateKey: 'historyPerson',
    character: '별무반',
    options: ['강감찬', '서희', '윤관', '최충'],
    correctAnswer: 2,
  },
  {
    id: 'mgh7',
    templateKey: 'historyPerson',
    character: '거란',
    options: ['강감찬', '서희', '윤관', '왕건'],
    correctAnswer: 1,
  },
  {
    id: 'mgh8',
    templateKey: 'historyBattle',
    character: '귀주대첩',
    options: ['서희', '강감찬', '윤관', '왕건'],
    correctAnswer: 1,
  },
];

// Level 6: Culture and Fall of Goryeo
export const multilingualGoryeoQuizzes3: MultilingualQuizQuestion[] = [
  {
    id: 'mgh9',
    templateKey: 'historyInvention',
    character: '금속활자',
    options: ['신라', '고려', '조선', '백제'],
    correctAnswer: 1,
  },
  {
    id: 'mgh10',
    templateKey: 'historyEventYear',
    character: '고려',
    options: ['1388년', '1392년', '1398년', '1400년'],
    correctAnswer: 1,
  },
  {
    id: 'mgh11',
    templateKey: 'historyPerson',
    character: '9재 학당',
    options: ['최충', '정몽주', '서희', '이규보'],
    correctAnswer: 0,
  },
  {
    id: 'mgh12',
    templateKey: 'historyAchievement',
    character: '최충',
    options: ['귀주대첩', '팔만대장경', '9재 학당', '강동 6주'],
    correctAnswer: 2,
  },
];
