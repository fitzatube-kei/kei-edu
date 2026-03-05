import { HistoricalEvent, HistoricalFigure, QuizQuestion, MatchingPair, MultilingualQuizQuestion } from '@/types';

export const ancientEvents: HistoricalEvent[] = [
  {
    year: 'BC 2333',
    event: '고조선 건국',
    description: '단군왕검이 고조선을 건국했습니다.',
    period: '고조선',
  },
  {
    year: 'BC 108',
    event: '고조선 멸망',
    description: '한나라의 침략으로 고조선이 멸망했습니다.',
    period: '고조선',
  },
  {
    year: 'BC 37',
    event: '고구려 건국',
    description: '주몽이 고구려를 건국했습니다.',
    period: '삼국시대',
  },
  {
    year: 'BC 18',
    event: '백제 건국',
    description: '온조가 백제를 건국했습니다.',
    period: '삼국시대',
  },
  {
    year: 'BC 57',
    event: '신라 건국',
    description: '박혁거세가 신라를 건국했습니다.',
    period: '삼국시대',
  },
  {
    year: '42',
    event: '가야 건국',
    description: '김수로왕이 금관가야를 건국했습니다.',
    period: '삼국시대',
  },
  {
    year: '372',
    event: '고구려 불교 전래',
    description: '소수림왕 때 전진에서 불교가 전래되었습니다.',
    period: '삼국시대',
  },
  {
    year: '660',
    event: '백제 멸망',
    description: '나당연합군에 의해 백제가 멸망했습니다.',
    period: '삼국시대',
  },
  {
    year: '668',
    event: '고구려 멸망',
    description: '나당연합군에 의해 고구려가 멸망했습니다.',
    period: '삼국시대',
  },
  {
    year: '676',
    event: '삼국 통일',
    description: '신라가 당나라 세력을 몰아내고 삼국을 통일했습니다.',
    period: '통일신라',
  },
];

export const ancientFigures: HistoricalFigure[] = [
  {
    name: '단군왕검',
    period: '고조선',
    title: '고조선의 건국자',
    description: '환웅의 아들로, 고조선을 세운 전설적인 인물입니다.',
    achievements: ['고조선 건국', '홍익인간 이념 제시'],
  },
  {
    name: '주몽',
    period: '고구려',
    title: '고구려의 건국자',
    description: '부여에서 남하하여 고구려를 건국한 인물입니다.',
    achievements: ['고구려 건국', '부여로부터 독립'],
  },
  {
    name: '광개토대왕',
    period: '고구려',
    title: '고구려 제19대 왕',
    description: '고구려의 영토를 크게 확장한 정복군주입니다.',
    achievements: ['만주 일대 정복', '신라 구원', '광개토대왕릉비'],
  },
  {
    name: '을지문덕',
    period: '고구려',
    title: '고구려의 장군',
    description: '수나라 대군을 살수에서 물리친 명장입니다.',
    achievements: ['살수대첩 승리', '수나라 격퇴'],
  },
  {
    name: '계백',
    period: '백제',
    title: '백제의 장군',
    description: '황산벌 전투에서 최후까지 싸운 충신입니다.',
    achievements: ['황산벌 전투', '백제 수호'],
  },
  {
    name: '김유신',
    period: '신라',
    title: '신라의 장군',
    description: '삼국통일의 주역인 신라의 명장입니다.',
    achievements: ['삼국통일 주도', '백제 고구려 정벌'],
  },
];

export const ancientQuizQuestions: QuizQuestion[] = [
  {
    id: 'ah1',
    question: '고조선을 건국한 인물은?',
    options: ['주몽', '온조', '단군왕검', '박혁거세'],
    correctAnswer: 2,
    explanation: '단군왕검이 BC 2333년에 고조선을 건국했습니다.',
  },
  {
    id: 'ah2',
    question: '삼국 중 가장 먼저 건국된 나라는?',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
    explanation: '신라가 BC 57년으로 가장 먼저 건국되었습니다.',
  },
  {
    id: 'ah3',
    question: '고구려를 건국한 인물은?',
    options: ['광개토대왕', '주몽', '을지문덕', '김유신'],
    correctAnswer: 1,
    explanation: '주몽이 BC 37년에 고구려를 건국했습니다.',
  },
  {
    id: 'ah4',
    question: '삼국을 통일한 나라는?',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
    explanation: '신라가 676년에 삼국을 통일했습니다.',
  },
  {
    id: 'ah5',
    question: '살수대첩을 승리로 이끈 장군은?',
    options: ['김유신', '계백', '을지문덕', '광개토대왕'],
    correctAnswer: 2,
    explanation: '을지문덕이 수나라 군대를 살수에서 물리쳤습니다.',
  },
  {
    id: 'ah6',
    question: '고구려에 불교가 전래된 시기의 왕은?',
    options: ['광개토대왕', '소수림왕', '장수왕', '고국원왕'],
    correctAnswer: 1,
    explanation: '소수림왕 때인 372년에 불교가 전래되었습니다.',
  },
  {
    id: 'ah7',
    question: '황산벌 전투와 관련된 인물은?',
    options: ['을지문덕', '김유신', '계백', '광개토대왕'],
    correctAnswer: 2,
    explanation: '계백 장군이 황산벌에서 최후까지 싸웠습니다.',
  },
  {
    id: 'ah8',
    question: '다음 중 고조선의 건국 이념은?',
    options: ['충효', '홍익인간', '인내천', '경천애인'],
    correctAnswer: 1,
    explanation: '고조선의 건국 이념은 "널리 인간을 이롭게 한다"는 홍익인간입니다.',
  },
];

export const ancientMatchingPairs: MatchingPair[] = [
  { id: 'am1', left: '단군왕검', right: '고조선 건국' },
  { id: 'am2', left: '주몽', right: '고구려 건국' },
  { id: 'am3', left: '광개토대왕', right: '영토 확장' },
  { id: 'am4', left: '을지문덕', right: '살수대첩' },
  { id: 'am5', left: '계백', right: '황산벌 전투' },
  { id: 'am6', left: '김유신', right: '삼국통일' },
];

// ============================================
// Multilingual History Quiz Questions (Ancient Period)
// All options use terms from translations.ts for automatic translation
// ============================================

// Level 1: Gojoseon and Foundation Myth
export const multilingualAncientQuizzes1: MultilingualQuizQuestion[] = [
  {
    id: 'mah1',
    templateKey: 'historyFounder',
    character: '고조선', // Will be translated via getHistoryTerm
    options: ['주몽', '온조', '단군왕검', '박혁거세'],
    correctAnswer: 2,
  },
  {
    id: 'mah2',
    templateKey: 'historyIdeology',
    character: '고조선',
    options: ['충효', '홍익인간', '인내천', '경천애인'],
    correctAnswer: 1,
  },
  {
    id: 'mah3',
    templateKey: 'historyFirst',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
  },
  {
    id: 'mah4',
    templateKey: 'historyUnifier',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
  },
];

// Level 2: Foundation of Three Kingdoms
export const multilingualAncientQuizzes2: MultilingualQuizQuestion[] = [
  {
    id: 'mah5',
    templateKey: 'historyFounder',
    character: '고구려',
    options: ['광개토대왕', '주몽', '을지문덕', '김유신'],
    correctAnswer: 1,
  },
  {
    id: 'mah6',
    templateKey: 'historyKing',
    character: '불교 전래',
    options: ['광개토대왕', '소수림왕', '장수왕', '고국원왕'],
    correctAnswer: 1,
  },
  {
    id: 'mah7',
    templateKey: 'historyFirst',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
  },
  {
    id: 'mah8',
    templateKey: 'historyUnifier',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: 2,
  },
];

// Level 3: Heroes of Three Kingdoms
export const multilingualAncientQuizzes3: MultilingualQuizQuestion[] = [
  {
    id: 'mah9',
    templateKey: 'historyBattle',
    character: '살수대첩',
    options: ['김유신', '계백', '을지문덕', '광개토대왕'],
    correctAnswer: 2,
  },
  {
    id: 'mah10',
    templateKey: 'historyPerson',
    character: '황산벌 전투',
    options: ['을지문덕', '김유신', '계백', '광개토대왕'],
    correctAnswer: 2,
  },
  {
    id: 'mah11',
    templateKey: 'historyAchievement',
    character: '광개토대왕',
    options: ['삼국통일', '영토 확장', '불교 전래', '훈민정음 창제'],
    correctAnswer: 1,
  },
  {
    id: 'mah12',
    templateKey: 'historyPerson',
    character: '삼국통일',
    options: ['을지문덕', '계백', '광개토대왕', '김유신'],
    correctAnswer: 3,
  },
];
