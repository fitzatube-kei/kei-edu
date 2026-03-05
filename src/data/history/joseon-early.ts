import { HistoricalEvent, HistoricalFigure, QuizQuestion, MatchingPair, MultilingualQuizQuestion } from '@/types';

export const joseonEarlyEvents: HistoricalEvent[] = [
  {
    year: '1392',
    event: '조선 건국',
    description: '이성계가 조선을 건국했습니다.',
    period: '조선 전기',
  },
  {
    year: '1394',
    event: '한양 천도',
    description: '수도를 한양(서울)으로 옮겼습니다.',
    period: '조선 전기',
  },
  {
    year: '1443',
    event: '훈민정음 창제',
    description: '세종대왕이 훈민정음(한글)을 창제했습니다.',
    period: '조선 전기',
  },
  {
    year: '1446',
    event: '훈민정음 반포',
    description: '훈민정음이 정식으로 반포되었습니다.',
    period: '조선 전기',
  },
  {
    year: '1441',
    event: '측우기 발명',
    description: '세계 최초의 우량계인 측우기가 발명되었습니다.',
    period: '조선 전기',
  },
  {
    year: '1592',
    event: '임진왜란 발발',
    description: '일본이 조선을 침략한 7년 전쟁이 시작되었습니다.',
    period: '조선 전기',
  },
  {
    year: '1597',
    event: '정유재란 발발',
    description: '임진왜란에 이은 일본의 2차 침략이 시작되었습니다.',
    period: '조선 전기',
  },
  {
    year: '1598',
    event: '임진왜란 종료',
    description: '7년간의 전쟁이 종료되었습니다.',
    period: '조선 전기',
  },
  {
    year: '1418',
    event: '세종 즉위',
    description: '조선의 제4대 왕 세종이 즉위했습니다.',
    period: '조선 전기',
  },
  {
    year: '1469',
    event: '경국대전 완성',
    description: '조선의 기본 법전이 완성되었습니다.',
    period: '조선 전기',
  },
];

export const joseonEarlyFigures: HistoricalFigure[] = [
  {
    name: '이성계(태조)',
    period: '조선 전기',
    title: '조선 태조',
    description: '조선을 건국한 창업군주입니다.',
    achievements: ['조선 건국', '한양 천도', '위화도 회군'],
  },
  {
    name: '세종대왕',
    period: '조선 전기',
    title: '조선 제4대 왕',
    description: '한글을 창제한 성군입니다.',
    achievements: ['훈민정음 창제', '측우기 발명', '집현전 설치', '6진 개척'],
  },
  {
    name: '장영실',
    period: '조선 전기',
    title: '과학자',
    description: '조선 최고의 과학자이자 발명가입니다.',
    achievements: ['측우기 발명', '자격루 제작', '혼천의 제작'],
  },
  {
    name: '이순신',
    period: '조선 전기',
    title: '조선의 장군',
    description: '임진왜란에서 조선을 구한 명장입니다.',
    achievements: ['한산도대첩', '명량해전', '거북선 활용', '23전 23승'],
  },
  {
    name: '신사임당',
    period: '조선 전기',
    title: '예술가',
    description: '이이(율곡)의 어머니이자 뛰어난 예술가입니다.',
    achievements: ['뛰어난 시와 그림', '율곡 이이 교육'],
  },
  {
    name: '이이(율곡)',
    period: '조선 전기',
    title: '학자',
    description: '조선 중기의 대학자이자 정치가입니다.',
    achievements: ['성학집요 저술', '10만 양병설 주장', '기호학파 창시'],
  },
];

export const joseonEarlyQuizQuestions: QuizQuestion[] = [
  {
    id: 'je1',
    question: '조선을 건국한 인물은?',
    options: ['왕건', '이성계', '정도전', '이방원'],
    correctAnswer: 1,
    explanation: '이성계가 1392년에 조선을 건국했습니다.',
  },
  {
    id: 'je2',
    question: '한글을 창제한 왕은?',
    options: ['태조', '태종', '세종', '성종'],
    correctAnswer: 2,
    explanation: '세종대왕이 1443년에 훈민정음(한글)을 창제했습니다.',
  },
  {
    id: 'je3',
    question: '임진왜란이 일어난 연도는?',
    options: ['1592년', '1597년', '1598년', '1600년'],
    correctAnswer: 0,
    explanation: '임진왜란은 1592년에 발발했습니다.',
  },
  {
    id: 'je4',
    question: '임진왜란에서 활약한 장군은?',
    options: ['강감찬', '을지문덕', '이순신', '권율'],
    correctAnswer: 2,
    explanation: '이순신 장군이 임진왜란에서 크게 활약했습니다.',
  },
  {
    id: 'je5',
    question: '세계 최초의 우량계는?',
    options: ['혼천의', '자격루', '측우기', '앙부일구'],
    correctAnswer: 2,
    explanation: '측우기는 1441년 세종 때 발명된 세계 최초의 우량계입니다.',
  },
  {
    id: 'je6',
    question: '측우기를 발명한 과학자는?',
    options: ['정약용', '장영실', '최무선', '이천'],
    correctAnswer: 1,
    explanation: '장영실이 세종의 명으로 측우기를 발명했습니다.',
  },
  {
    id: 'je7',
    question: '조선의 수도 한양은 지금의 어디인가요?',
    options: ['평양', '개성', '서울', '부산'],
    correctAnswer: 2,
    explanation: '조선의 수도 한양은 현재의 서울입니다.',
  },
  {
    id: 'je8',
    question: '10만 양병설을 주장한 학자는?',
    options: ['이황', '이이', '정약용', '김정희'],
    correctAnswer: 1,
    explanation: '율곡 이이가 10만 양병설을 주장했습니다.',
  },
];

export const joseonEarlyMatchingPairs: MatchingPair[] = [
  { id: 'jem1', left: '이성계', right: '조선 건국' },
  { id: 'jem2', left: '세종대왕', right: '훈민정음' },
  { id: 'jem3', left: '장영실', right: '측우기' },
  { id: 'jem4', left: '이순신', right: '임진왜란' },
  { id: 'jem5', left: '이이', right: '10만 양병설' },
  { id: 'jem6', left: '신사임당', right: '예술가' },
];

// ============================================
// Multilingual Joseon Early Period Quiz Questions
// All options use terms from translations.ts for automatic translation
// ============================================

// Level 7: Foundation of Joseon
export const multilingualJoseonEarlyQuizzes1: MultilingualQuizQuestion[] = [
  {
    id: 'mje1',
    templateKey: 'historyFounder',
    character: '조선',
    options: ['왕건', '이성계', '정도전', '이방원'],
    correctAnswer: 1,
  },
  {
    id: 'mje2',
    templateKey: 'historyEventYear',
    character: '조선',
    options: ['1388년', '1392년', '1394년', '1398년'],
    correctAnswer: 1,
  },
  {
    id: 'mje3',
    templateKey: 'historyPerson',
    character: '한양 천도',
    options: ['태조', '태종', '세종', '성종'],
    correctAnswer: 0,
  },
  {
    id: 'mje4',
    templateKey: 'historyPerson',
    character: '위화도 회군',
    options: ['왕건', '이성계', '정몽주', '최영'],
    correctAnswer: 1,
  },
];

// Level 8: King Sejong and Hangeul
export const multilingualJoseonEarlyQuizzes2: MultilingualQuizQuestion[] = [
  {
    id: 'mje5',
    templateKey: 'historyAchievement',
    character: '세종대왕',
    options: ['조선 건국', '훈민정음 창제', '임진왜란 승리', '수원 화성 축조'],
    correctAnswer: 1,
  },
  {
    id: 'mje6',
    templateKey: 'historyInvention',
    character: '측우기',
    options: ['고려', '조선', '신라', '고구려'],
    correctAnswer: 1,
  },
  {
    id: 'mje7',
    templateKey: 'historyPerson',
    character: '측우기',
    options: ['정약용', '장영실', '최무선', '이천'],
    correctAnswer: 1,
  },
  {
    id: 'mje8',
    templateKey: 'historyEventYear',
    character: '훈민정음 창제',
    options: ['1418년', '1443년', '1446년', '1469년'],
    correctAnswer: 1,
  },
];

// Level 9: Imjin War
export const multilingualJoseonEarlyQuizzes3: MultilingualQuizQuestion[] = [
  {
    id: 'mje9',
    templateKey: 'historyEventYear',
    character: '임진왜란',
    options: ['1592년', '1597년', '1598년', '1600년'],
    correctAnswer: 0,
  },
  {
    id: 'mje10',
    templateKey: 'historyWar',
    character: '임진왜란',
    options: ['강감찬', '을지문덕', '이순신', '권율'],
    correctAnswer: 2,
  },
  {
    id: 'mje11',
    templateKey: 'historyBattle',
    character: '한산도대첩',
    options: ['강감찬', '을지문덕', '이순신', '김유신'],
    correctAnswer: 2,
  },
  {
    id: 'mje12',
    templateKey: 'historyPerson',
    character: '10만 양병설',
    options: ['이황', '이이', '정약용', '김정희'],
    correctAnswer: 1,
  },
];
