import { HistoricalEvent, HistoricalFigure, QuizQuestion, MatchingPair, MultilingualQuizQuestion } from '@/types';

export const joseonLateEvents: HistoricalEvent[] = [
  {
    year: '1627',
    event: '정묘호란',
    description: '후금이 조선을 침략했습니다.',
    period: '조선 후기',
  },
  {
    year: '1636',
    event: '병자호란',
    description: '청나라가 조선을 침략했습니다.',
    period: '조선 후기',
  },
  {
    year: '1776',
    event: '정조 즉위',
    description: '조선의 제22대 왕 정조가 즉위했습니다.',
    period: '조선 후기',
  },
  {
    year: '1796',
    event: '수원 화성 완공',
    description: '정조의 명으로 수원 화성이 완공되었습니다.',
    period: '조선 후기',
  },
  {
    year: '1801',
    event: '신유박해',
    description: '천주교 박해가 일어났습니다.',
    period: '조선 후기',
  },
  {
    year: '1860',
    event: '동학 창시',
    description: '최제우가 동학을 창시했습니다.',
    period: '조선 후기',
  },
  {
    year: '1866',
    event: '병인양요',
    description: '프랑스 함대가 강화도를 침략했습니다.',
    period: '조선 후기',
  },
  {
    year: '1871',
    event: '신미양요',
    description: '미국 함대가 강화도를 침략했습니다.',
    period: '조선 후기',
  },
  {
    year: '1894',
    event: '동학농민운동',
    description: '전봉준이 이끄는 농민 봉기가 일어났습니다.',
    period: '조선 후기',
  },
  {
    year: '1897',
    event: '대한제국 선포',
    description: '고종이 대한제국을 선포하고 황제에 즉위했습니다.',
    period: '조선 후기',
  },
];

export const joseonLateFigures: HistoricalFigure[] = [
  {
    name: '정조',
    period: '조선 후기',
    title: '조선 제22대 왕',
    description: '개혁 군주로 규장각을 설치하고 문화를 발전시켰습니다.',
    achievements: ['규장각 설치', '수원 화성 축조', '탕평책 실시', '장용영 설치'],
  },
  {
    name: '정약용',
    period: '조선 후기',
    title: '실학자',
    description: '실학을 집대성한 조선 후기의 대학자입니다.',
    achievements: ['목민심서 저술', '경세유표 저술', '거중기 설계'],
  },
  {
    name: '김정희',
    period: '조선 후기',
    title: '서예가/학자',
    description: '추사체를 창안한 서예의 대가입니다.',
    achievements: ['추사체 창안', '세한도 제작', '금석학 연구'],
  },
  {
    name: '최제우',
    period: '조선 후기',
    title: '동학의 창시자',
    description: '동학을 창시하여 민중에게 새로운 희망을 주었습니다.',
    achievements: ['동학 창시', '인내천 사상 전파'],
  },
  {
    name: '전봉준',
    period: '조선 후기',
    title: '동학농민운동 지도자',
    description: '동학농민운동을 이끈 농민군 지도자입니다.',
    achievements: ['동학농민운동 주도', '폐정개혁안 제시', '황토현 전투 승리'],
  },
  {
    name: '안중근',
    period: '대한제국',
    title: '독립운동가',
    description: '이토 히로부미를 처단한 독립운동가입니다.',
    achievements: ['이토 히로부미 처단', '동양평화론 저술'],
  },
];

export const joseonLateQuizQuestions: QuizQuestion[] = [
  {
    id: 'jl1',
    question: '병자호란이 일어난 연도는?',
    options: ['1627년', '1636년', '1644년', '1650년'],
    correctAnswer: 1,
    explanation: '병자호란은 1636년에 청나라가 침략하며 일어났습니다.',
  },
  {
    id: 'jl2',
    question: '수원 화성을 축조한 왕은?',
    options: ['영조', '정조', '순조', '헌종'],
    correctAnswer: 1,
    explanation: '정조가 1796년에 수원 화성을 완공했습니다.',
  },
  {
    id: 'jl3',
    question: '목민심서를 저술한 실학자는?',
    options: ['이익', '박지원', '정약용', '박제가'],
    correctAnswer: 2,
    explanation: '정약용이 목민심서를 저술했습니다.',
  },
  {
    id: 'jl4',
    question: '동학을 창시한 인물은?',
    options: ['전봉준', '최제우', '손병희', '김옥균'],
    correctAnswer: 1,
    explanation: '최제우가 1860년에 동학을 창시했습니다.',
  },
  {
    id: 'jl5',
    question: '동학농민운동을 이끈 지도자는?',
    options: ['최제우', '손병희', '전봉준', '안중근'],
    correctAnswer: 2,
    explanation: '전봉준이 1894년 동학농민운동을 이끌었습니다.',
  },
  {
    id: 'jl6',
    question: '대한제국이 선포된 연도는?',
    options: ['1894년', '1895년', '1896년', '1897년'],
    correctAnswer: 3,
    explanation: '고종이 1897년에 대한제국을 선포했습니다.',
  },
  {
    id: 'jl7',
    question: '추사체를 창안한 인물은?',
    options: ['정약용', '김정희', '박지원', '홍대용'],
    correctAnswer: 1,
    explanation: '김정희가 독창적인 추사체를 창안했습니다.',
  },
  {
    id: 'jl8',
    question: '병인양요를 일으킨 나라는?',
    options: ['미국', '영국', '프랑스', '러시아'],
    correctAnswer: 2,
    explanation: '1866년 프랑스가 병인양요를 일으켰습니다.',
  },
];

export const joseonLateMatchingPairs: MatchingPair[] = [
  { id: 'jlm1', left: '정조', right: '수원 화성' },
  { id: 'jlm2', left: '정약용', right: '목민심서' },
  { id: 'jlm3', left: '김정희', right: '추사체' },
  { id: 'jlm4', left: '최제우', right: '동학 창시' },
  { id: 'jlm5', left: '전봉준', right: '동학농민운동' },
  { id: 'jlm6', left: '안중근', right: '이토 히로부미 처단' },
];

// ============================================
// Multilingual Joseon Late Period Quiz Questions
// All options use terms from translations.ts for automatic translation
// ============================================

// Level 10: Late Joseon and Silhak
export const multilingualJoseonLateQuizzes1: MultilingualQuizQuestion[] = [
  {
    id: 'mjl1',
    templateKey: 'historyAchievement',
    character: '정조',
    options: ['훈민정음 창제', '동학 창시', '수원 화성 축조', '조선 건국'],
    correctAnswer: 2,
  },
  {
    id: 'mjl2',
    templateKey: 'historyPerson',
    character: '목민심서',
    options: ['이익', '박지원', '정약용', '박제가'],
    correctAnswer: 2,
  },
  {
    id: 'mjl3',
    templateKey: 'historyPerson',
    character: '추사체',
    options: ['정약용', '김정희', '박지원', '홍대용'],
    correctAnswer: 1,
  },
  {
    id: 'mjl4',
    templateKey: 'historyEventYear',
    character: '병자호란',
    options: ['1627년', '1636년', '1644년', '1650년'],
    correctAnswer: 1,
  },
];

// Level 11: Donghak and Modernization
export const multilingualJoseonLateQuizzes2: MultilingualQuizQuestion[] = [
  {
    id: 'mjl5',
    templateKey: 'historyFounder',
    character: '동학',
    options: ['전봉준', '최제우', '손병희', '김옥균'],
    correctAnswer: 1,
  },
  {
    id: 'mjl6',
    templateKey: 'historyPerson',
    character: '동학농민운동',
    options: ['최제우', '손병희', '전봉준', '안중근'],
    correctAnswer: 2,
  },
  {
    id: 'mjl7',
    templateKey: 'historyEventYear',
    character: '동학농민운동',
    options: ['1860년', '1876년', '1894년', '1897년'],
    correctAnswer: 2,
  },
  {
    id: 'mjl8',
    templateKey: 'historyPerson',
    character: '병인양요',
    options: ['미국', '영국', '프랑스', '러시아'],
    correctAnswer: 2,
  },
];

// Level 12: Korean Empire
export const multilingualJoseonLateQuizzes3: MultilingualQuizQuestion[] = [
  {
    id: 'mjl9',
    templateKey: 'historyEventYear',
    character: '대한제국',
    options: ['1894년', '1895년', '1896년', '1897년'],
    correctAnswer: 3,
  },
  {
    id: 'mjl10',
    templateKey: 'historyPerson',
    character: '이토 히로부미 처단',
    options: ['김구', '안중근', '윤봉길', '이봉창'],
    correctAnswer: 1,
  },
  {
    id: 'mjl11',
    templateKey: 'historyAchievement',
    character: '안중근',
    options: ['동학 창시', '이토 히로부미 처단', '동학농민운동 주도', '대한제국 선포'],
    correctAnswer: 1,
  },
  {
    id: 'mjl12',
    templateKey: 'historyKing',
    character: '대한제국 선포',
    options: ['철종', '헌종', '순종', '고종'],
    correctAnswer: 3,
  },
];
