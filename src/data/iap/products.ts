import { ContentId, ConsumableId, IAPProduct, SubscriptionPlan } from '@/types/iap';

// Content unlock costs (in 한글조각/片)
export const CONTENT_COSTS: Record<ContentId, number> = {
  hangul_intermediate: 200,
  hangul_advanced: 300,
  puzzle_intermediate: 150,
  puzzle_advanced: 200,
  sentences_intermediate: 150,
  sentences_advanced: 200,
  culture_kpop_hard: 100,
  culture_kdrama_hard: 100,
  story_busan: 250,
  story_jeju: 350,
};

// Consumable costs
export const CONSUMABLE_COSTS: Record<ConsumableId, number> = {
  hint: 10,
  wrong_answer_pass: 50,
  level_skip: 30,
};

// Currency packs available for purchase
export const CURRENCY_PACKS: IAPProduct[] = [
  {
    id: 'pack_120',
    type: 'currency_pack',
    name: {
      en: '120 Hangul Pieces',
      ko: '한글조각 120개',
      ja: 'ハングルピース 120個',
      es: '120 Piezas Hangul',
      vi: '120 Mảnh Hangul',
      th: '120 ชิ้นฮันกึล',
      zh: '120 韩文碎片',
      'zh-TW': '120 韓文碎片',
    },
    priceUSD: 0.99,
    currencyAmount: 120,
  },
  {
    id: 'pack_650',
    type: 'currency_pack',
    name: {
      en: '650 Hangul Pieces',
      ko: '한글조각 650개',
      ja: 'ハングルピース 650個',
      es: '650 Piezas Hangul',
      vi: '650 Mảnh Hangul',
      th: '650 ชิ้นฮันกึล',
      zh: '650 韩文碎片',
      'zh-TW': '650 韓文碎片',
    },
    priceUSD: 4.99,
    currencyAmount: 650,
    featured: true,
  },
  {
    id: 'pack_1450',
    type: 'currency_pack',
    name: {
      en: '1,450 Hangul Pieces',
      ko: '한글조각 1,450개',
      ja: 'ハングルピース 1,450個',
      es: '1,450 Piezas Hangul',
      vi: '1.450 Mảnh Hangul',
      th: '1,450 ชิ้นฮันกึล',
      zh: '1,450 韩文碎片',
      'zh-TW': '1,450 韓文碎片',
    },
    priceUSD: 9.99,
    currencyAmount: 1450,
  },
  {
    id: 'pack_3200',
    type: 'currency_pack',
    name: {
      en: '3,200 Hangul Pieces',
      ko: '한글조각 3,200개',
      ja: 'ハングルピース 3,200個',
      es: '3,200 Piezas Hangul',
      vi: '3.200 Mảnh Hangul',
      th: '3,200 ชิ้นฮันกึล',
      zh: '3,200 韩文碎片',
      'zh-TW': '3,200 韓文碎片',
    },
    priceUSD: 19.99,
    currencyAmount: 3200,
  },
];

// Subscription plans
export const SUBSCRIPTION_PLANS: Record<SubscriptionPlan, {
  name: Record<string, string>;
  priceUSD: number;
  features: string[];
}> = {
  free: {
    name: {
      en: 'Free',
      ko: '무료',
      ja: '無料',
      es: 'Gratis',
      vi: 'Miễn phí',
      th: 'ฟรี',
      zh: '免费',
      'zh-TW': '免費',
    },
    priceUSD: 0,
    features: ['beginner_content', 'limited_levels'],
  },
  monthly: {
    name: {
      en: 'Monthly Premium',
      ko: '월간 프리미엄',
      ja: '月額プレミアム',
      es: 'Premium Mensual',
      vi: 'Premium Hàng tháng',
      th: 'พรีเมียมรายเดือน',
      zh: '月度高级版',
      'zh-TW': '月度高級版',
    },
    priceUSD: 4.99,
    features: ['all_content', 'no_ads', 'priority_support'],
  },
  annual: {
    name: {
      en: 'Annual Premium',
      ko: '연간 프리미엄',
      ja: '年間プレミアム',
      es: 'Premium Anual',
      vi: 'Premium Hàng năm',
      th: 'พรีเมียมรายปี',
      zh: '年度高级版',
      'zh-TW': '年度高級版',
    },
    priceUSD: 39.99,
    features: ['all_content', 'no_ads', 'priority_support', 'bonus_currency'],
  },
};

// Content names for display in PaywallModal
export const CONTENT_NAMES: Record<ContentId, Record<string, string>> = {
  hangul_intermediate: {
    en: 'Hangul Intermediate',
    ko: '한글 중급',
    ja: 'ハングル中級',
    es: 'Hangul Intermedio',
    vi: 'Hangul Trung cấp',
    th: 'ฮันกึลระดับกลาง',
    zh: '韩文中级',
    'zh-TW': '韓文中級',
  },
  hangul_advanced: {
    en: 'Hangul Advanced',
    ko: '한글 고급',
    ja: 'ハングル上級',
    es: 'Hangul Avanzado',
    vi: 'Hangul Nâng cao',
    th: 'ฮันกึลระดับสูง',
    zh: '韩文高级',
    'zh-TW': '韓文高級',
  },
  puzzle_intermediate: {
    en: 'Puzzle Intermediate',
    ko: '퍼즐 중급',
    ja: 'パズル中級',
    es: 'Puzzle Intermedio',
    vi: 'Puzzle Trung cấp',
    th: 'ปริศนาระดับกลาง',
    zh: '拼图中级',
    'zh-TW': '拼圖中級',
  },
  puzzle_advanced: {
    en: 'Puzzle Advanced',
    ko: '퍼즐 고급',
    ja: 'パズル上級',
    es: 'Puzzle Avanzado',
    vi: 'Puzzle Nâng cao',
    th: 'ปริศนาระดับสูง',
    zh: '拼图高级',
    'zh-TW': '拼圖高級',
  },
  sentences_intermediate: {
    en: 'Sentences Intermediate',
    ko: '문장 중급',
    ja: '文法中級',
    es: 'Oraciones Intermedio',
    vi: 'Câu Trung cấp',
    th: 'ประโยคระดับกลาง',
    zh: '句子中级',
    'zh-TW': '句子中級',
  },
  sentences_advanced: {
    en: 'Sentences Advanced',
    ko: '문장 고급',
    ja: '文法上級',
    es: 'Oraciones Avanzado',
    vi: 'Câu Nâng cao',
    th: 'ประโยคระดับสูง',
    zh: '句子高级',
    'zh-TW': '句子高級',
  },
  culture_kpop_hard: {
    en: 'K-Pop Hard Mode',
    ko: 'K-Pop 하드 모드',
    ja: 'K-Pop ハードモード',
    es: 'K-Pop Modo Difícil',
    vi: 'K-Pop Chế độ khó',
    th: 'K-Pop โหมดยาก',
    zh: 'K-Pop 困难模式',
    'zh-TW': 'K-Pop 困難模式',
  },
  culture_kdrama_hard: {
    en: 'K-Drama Hard Mode',
    ko: 'K-Drama 하드 모드',
    ja: 'K-Drama ハードモード',
    es: 'K-Drama Modo Difícil',
    vi: 'K-Drama Chế độ khó',
    th: 'K-Drama โหมดยาก',
    zh: 'K-Drama 困难模式',
    'zh-TW': 'K-Drama 困難模式',
  },
  story_busan: {
    en: 'Busan Travel Story',
    ko: '부산 여행 스토리',
    ja: '釜山旅行ストーリー',
    es: 'Historia de Viaje a Busan',
    vi: 'Câu chuyện du lịch Busan',
    th: 'เรื่องราวท่องเที่ยวปูซาน',
    zh: '釜山旅行故事',
    'zh-TW': '釜山旅行故事',
  },
  story_jeju: {
    en: 'Jeju Travel Story',
    ko: '제주 여행 스토리',
    ja: '済州旅行ストーリー',
    es: 'Historia de Viaje a Jeju',
    vi: 'Câu chuyện du lịch Jeju',
    th: 'เรื่องราวท่องเที่ยวเชจู',
    zh: '济州旅行故事',
    'zh-TW': '濟州旅行故事',
  },
};
