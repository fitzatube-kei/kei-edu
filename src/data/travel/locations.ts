import { TravelLocation } from '@/types/travel';

// Seoul Locations (Beginner - FREE)
export const seoulLocations: TravelLocation[] = [
  {
    id: 'myeongdong',
    romanization: 'Myeong-dong',
    korean: '명동',
    name: {
      en: 'Myeongdong',
      ja: '明洞',
      zh: '明洞',
      th: 'เมียงดง',
      vi: 'Myeongdong',
      es: 'Myeongdong',
    },
    description: {
      en: 'Famous shopping district with cosmetics and street food',
      ja: '化粧品とストリートフードで有名なショッピング街',
      zh: '以化妆品和街头小吃闻名的购物区',
      th: 'ย่านช้อปปิ้งชื่อดังเรื่องเครื่องสำอางและอาหารริมทาง',
      vi: 'Khu mua sắm nổi tiếng với mỹ phẩm và đồ ăn đường phố',
      es: 'Famoso distrito comercial con cosméticos y comida callejera',
    },
    icon: '🛍️',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 1,
  },
  {
    id: 'hongdae',
    romanization: 'Hong-dae',
    korean: '홍대',
    name: {
      en: 'Hongdae',
      ja: '弘大',
      zh: '弘大',
      th: 'ฮงแด',
      vi: 'Hongdae',
      es: 'Hongdae',
    },
    description: {
      en: 'Trendy area with cafes, clubs, and street performances',
      ja: 'カフェ、クラブ、ストリートパフォーマンスのトレンディエリア',
      zh: '时尚区域，有咖啡馆、俱乐部和街头表演',
      th: 'พื้นที่ทันสมัยมีคาเฟ่ คลับ และการแสดงริมถนน',
      vi: 'Khu vực thời thượng với quán cà phê, câu lạc bộ và biểu diễn đường phố',
      es: 'Zona trendy con cafés, clubes y actuaciones callejeras',
    },
    icon: '🎸',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 2,
  },
  {
    id: 'gangnam',
    romanization: 'Gang-nam',
    korean: '강남',
    name: {
      en: 'Gangnam',
      ja: '江南',
      zh: '江南',
      th: 'คังนัม',
      vi: 'Gangnam',
      es: 'Gangnam',
    },
    description: {
      en: 'Upscale district known worldwide from "Gangnam Style"',
      ja: '「江南スタイル」で世界的に有名な高級地区',
      zh: '因"江南Style"而闻名世界的高档区',
      th: 'ย่านหรูหราที่โด่งดังจาก "Gangnam Style"',
      vi: 'Quận sang trọng nổi tiếng thế giới từ "Gangnam Style"',
      es: 'Distrito exclusivo conocido mundialmente por "Gangnam Style"',
    },
    icon: '💎',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 3,
  },
  {
    id: 'itaewon',
    romanization: 'Itae-won',
    korean: '이태원',
    name: {
      en: 'Itaewon',
      ja: '梨泰院',
      zh: '梨泰院',
      th: 'อิแทวอน',
      vi: 'Itaewon',
      es: 'Itaewon',
    },
    description: {
      en: 'International neighborhood with diverse restaurants and bars',
      ja: '多様なレストランとバーのある国際的な街',
      zh: '拥有多元餐厅和酒吧的国际化社区',
      th: 'ย่านนานาชาติมีร้านอาหารและบาร์หลากหลาย',
      vi: 'Khu phố quốc tế với nhà hàng và quán bar đa dạng',
      es: 'Barrio internacional con diversos restaurantes y bares',
    },
    icon: '🌍',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 4,
  },
  {
    id: 'dongdaemun',
    romanization: 'Dong-dae-mun',
    korean: '동대문',
    name: {
      en: 'Dongdaemun',
      ja: '東大門',
      zh: '东大门',
      th: 'ทงแดมุน',
      vi: 'Dongdaemun',
      es: 'Dongdaemun',
    },
    description: {
      en: '24-hour shopping malls and traditional market',
      ja: '24時間ショッピングモールと伝統市場',
      zh: '24小时购物中心和传统市场',
      th: 'ห้างสรรพสินค้า 24 ชั่วโมงและตลาดดั้งเดิม',
      vi: 'Trung tâm mua sắm 24 giờ và chợ truyền thống',
      es: 'Centros comerciales 24 horas y mercado tradicional',
    },
    icon: '🏪',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 5,
  },
  {
    id: 'gyeongbokgung',
    romanization: 'Gyeong-bok-gung',
    korean: '경복궁',
    name: {
      en: 'Gyeongbokgung Palace',
      ja: '景福宮',
      zh: '景福宫',
      th: 'พระราชวังเคียงบกกุง',
      vi: 'Cung điện Gyeongbokgung',
      es: 'Palacio Gyeongbokgung',
    },
    description: {
      en: 'Main royal palace of Joseon dynasty',
      ja: '朝鮮王朝の主要な王宮',
      zh: '朝鲜王朝的主要宫殿',
      th: 'พระราชวังหลักของราชวงศ์โชซอน',
      vi: 'Cung điện hoàng gia chính của triều đại Joseon',
      es: 'Palacio real principal de la dinastía Joseon',
    },
    icon: '🏯',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 6,
  },
  {
    id: 'namsan',
    romanization: 'Nam-san',
    korean: '남산',
    name: {
      en: 'Namsan Tower',
      ja: '南山タワー',
      zh: '南山塔',
      th: 'หอคอยนัมซาน',
      vi: 'Tháp Namsan',
      es: 'Torre Namsan',
    },
    description: {
      en: 'Iconic tower with panoramic city views',
      ja: 'パノラマの街の景色を望む象徴的なタワー',
      zh: '可欣赏城市全景的标志性塔',
      th: 'หอคอยสัญลักษณ์ที่มองเห็นวิวเมืองแบบพาโนรามา',
      vi: 'Tháp biểu tượng với tầm nhìn toàn cảnh thành phố',
      es: 'Torre icónica con vistas panorámicas de la ciudad',
    },
    icon: '🗼',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 7,
  },
  {
    id: 'insadong',
    romanization: 'Insa-dong',
    korean: '인사동',
    name: {
      en: 'Insadong',
      ja: '仁寺洞',
      zh: '仁寺洞',
      th: 'อินซาดง',
      vi: 'Insadong',
      es: 'Insadong',
    },
    description: {
      en: 'Traditional culture street with tea houses and art galleries',
      ja: '茶屋とアートギャラリーのある伝統文化通り',
      zh: '有茶馆和艺术画廊的传统文化街',
      th: 'ถนนวัฒนธรรมดั้งเดิมมีร้านชาและแกลเลอรี่',
      vi: 'Phố văn hóa truyền thống với quán trà và phòng tranh',
      es: 'Calle de cultura tradicional con casas de té y galerías',
    },
    icon: '🍵',
    area: 'seoul',
    difficulty: 'beginner',
    isPremium: false,
    order: 8,
  },
];

// Busan Locations (Intermediate - PREMIUM)
export const busanLocations: TravelLocation[] = [
  {
    id: 'haeundae',
    romanization: 'Hae-un-dae',
    korean: '해운대',
    name: {
      en: 'Haeundae Beach',
      ja: '海雲台',
      zh: '海云台',
      th: 'หาดแฮอุนแด',
      vi: 'Bãi biển Haeundae',
      es: 'Playa Haeundae',
    },
    description: {
      en: 'Korea\'s most famous beach and seafood paradise',
      ja: '韓国で最も有名なビーチとシーフードの楽園',
      zh: '韩国最著名的海滩和海鲜天堂',
      th: 'ชายหาดที่มีชื่อเสียงที่สุดของเกาหลีและสวรรค์ของอาหารทะเล',
      vi: 'Bãi biển nổi tiếng nhất Hàn Quốc và thiên đường hải sản',
      es: 'La playa más famosa de Corea y paraíso de mariscos',
    },
    icon: '🏖️',
    area: 'busan',
    difficulty: 'intermediate',
    isPremium: true,
    order: 1,
  },
  {
    id: 'gwangalli',
    romanization: 'Gwang-an-li',
    korean: '광안리',
    name: {
      en: 'Gwangalli Beach',
      ja: '広安里',
      zh: '广安里',
      th: 'หาดควังอันลี',
      vi: 'Bãi biển Gwangalli',
      es: 'Playa Gwangalli',
    },
    description: {
      en: 'Beautiful night view of Gwangan Bridge',
      ja: '広安大橋の美しい夜景',
      zh: '广安大桥的美丽夜景',
      th: 'วิวยามค่ำคืนที่สวยงามของสะพานควังอัน',
      vi: 'Cảnh đêm đẹp của cầu Gwangan',
      es: 'Hermosa vista nocturna del puente Gwangan',
    },
    icon: '🌉',
    area: 'busan',
    difficulty: 'intermediate',
    isPremium: true,
    order: 2,
  },
  {
    id: 'jagalchi',
    romanization: 'Ja-gal-chi',
    korean: '자갈치',
    name: {
      en: 'Jagalchi Fish Market',
      ja: 'チャガルチ市場',
      zh: '札嘎其市场',
      th: 'ตลาดปลาจากัลชิ',
      vi: 'Chợ cá Jagalchi',
      es: 'Mercado de pescado Jagalchi',
    },
    description: {
      en: 'Korea\'s largest seafood market',
      ja: '韓国最大の海鮮市場',
      zh: '韩国最大的海鲜市场',
      th: 'ตลาดอาหารทะเลที่ใหญ่ที่สุดของเกาหลี',
      vi: 'Chợ hải sản lớn nhất Hàn Quốc',
      es: 'El mercado de mariscos más grande de Corea',
    },
    icon: '🐟',
    area: 'busan',
    difficulty: 'intermediate',
    isPremium: true,
    order: 3,
  },
  {
    id: 'gamcheon',
    romanization: 'Gam-cheon',
    korean: '감천',
    name: {
      en: 'Gamcheon Culture Village',
      ja: '甘川文化村',
      zh: '甘川文化村',
      th: 'หมู่บ้านวัฒนธรรมกัมชอน',
      vi: 'Làng văn hóa Gamcheon',
      es: 'Aldea cultural Gamcheon',
    },
    description: {
      en: 'Colorful hillside village called "Korea\'s Santorini"',
      ja: '「韓国のサントリーニ」と呼ばれるカラフルな丘の村',
      zh: '被称为"韩国圣托里尼"的多彩山村',
      th: 'หมู่บ้านสีสันบนเนินเขาที่เรียกว่า "ซานโตรินีของเกาหลี"',
      vi: 'Làng đồi đầy màu sắc được gọi là "Santorini của Hàn Quốc"',
      es: 'Colorido pueblo en la colina llamado "Santorini de Corea"',
    },
    icon: '🎨',
    area: 'busan',
    difficulty: 'intermediate',
    isPremium: true,
    order: 4,
  },
];

// Jeju Locations (Advanced - PREMIUM)
export const jejuLocations: TravelLocation[] = [
  {
    id: 'seogwipo',
    romanization: 'Seo-gwi-po',
    korean: '서귀포',
    name: {
      en: 'Seogwipo',
      ja: '西帰浦',
      zh: '西归浦',
      th: 'ซอกวิโป',
      vi: 'Seogwipo',
      es: 'Seogwipo',
    },
    description: {
      en: 'Scenic southern city with waterfalls and diving spots',
      ja: '滝とダイビングスポットのある風光明媚な南部の街',
      zh: '有瀑布和潜水点的风景秀丽的南部城市',
      th: 'เมืองทางใต้ที่สวยงามมีน้ำตกและจุดดำน้ำ',
      vi: 'Thành phố phía nam đẹp với thác nước và điểm lặn',
      es: 'Ciudad pintoresca del sur con cascadas y puntos de buceo',
    },
    icon: '🏊',
    area: 'jeju',
    difficulty: 'advanced',
    isPremium: true,
    order: 1,
  },
  {
    id: 'hallasan',
    romanization: 'Hal-la-san',
    korean: '한라산',
    name: {
      en: 'Hallasan Mountain',
      ja: '漢拏山',
      zh: '汉拿山',
      th: 'ภูเขาฮัลลาซาน',
      vi: 'Núi Hallasan',
      es: 'Monte Hallasan',
    },
    description: {
      en: 'Korea\'s highest peak and UNESCO World Heritage site',
      ja: '韓国最高峰でユネスコ世界遺産',
      zh: '韩国最高峰，联合国教科文组织世界遗产',
      th: 'ยอดเขาสูงสุดของเกาหลีและมรดกโลกยูเนสโก',
      vi: 'Đỉnh cao nhất Hàn Quốc và Di sản Thế giới UNESCO',
      es: 'Pico más alto de Corea y Patrimonio de la UNESCO',
    },
    icon: '⛰️',
    area: 'jeju',
    difficulty: 'advanced',
    isPremium: true,
    order: 2,
  },
  {
    id: 'udo',
    romanization: 'U-do',
    korean: '우도',
    name: {
      en: 'Udo Island',
      ja: '牛島',
      zh: '牛岛',
      th: 'เกาะอูโด',
      vi: 'Đảo Udo',
      es: 'Isla Udo',
    },
    description: {
      en: 'Small island famous for peanut ice cream and beaches',
      ja: 'ピーナッツアイスクリームとビーチで有名な小さな島',
      zh: '以花生冰淇淋和海滩闻名的小岛',
      th: 'เกาะเล็กๆ ที่มีชื่อเสียงเรื่องไอศกรีมถั่วลิสงและชายหาด',
      vi: 'Đảo nhỏ nổi tiếng với kem đậu phộng và bãi biển',
      es: 'Pequeña isla famosa por helado de maní y playas',
    },
    icon: '🐄',
    area: 'jeju',
    difficulty: 'advanced',
    isPremium: true,
    order: 3,
  },
];

// All locations combined
export const allLocations: TravelLocation[] = [
  ...seoulLocations,
  ...busanLocations,
  ...jejuLocations,
];

// Helper functions
export const getLocationById = (id: string): TravelLocation | undefined => {
  return allLocations.find(loc => loc.id === id);
};

export const getLocationsByArea = (area: 'seoul' | 'busan' | 'jeju'): TravelLocation[] => {
  return allLocations.filter(loc => loc.area === area).sort((a, b) => a.order - b.order);
};

export const getFreeLocations = (): TravelLocation[] => {
  return allLocations.filter(loc => !loc.isPremium);
};

export const getPremiumLocations = (): TravelLocation[] => {
  return allLocations.filter(loc => loc.isPremium);
};

// Get all destinations for selection (excluding already visited)
export const getDestinationOptions = (
  area: 'seoul' | 'busan' | 'jeju',
  visitedIds: string[]
): TravelLocation[] => {
  const areaLocations = getLocationsByArea(area);
  const available = areaLocations.filter(loc => !visitedIds.includes(loc.id));

  // Return all available destinations sorted by order
  return available.sort((a, b) => a.order - b.order);
};

// Get wrong options for Korean match quiz
export const getKoreanQuizOptions = (
  correctLocation: TravelLocation,
  area: 'seoul' | 'busan' | 'jeju'
): TravelLocation[] => {
  const areaLocations = getLocationsByArea(area);
  const others = areaLocations.filter(loc => loc.id !== correctLocation.id);

  // Shuffle and pick 2 wrong answers
  const shuffled = [...others].sort(() => Math.random() - 0.5);
  const wrongOptions = shuffled.slice(0, 2);

  // Combine with correct answer and shuffle
  const allOptions = [correctLocation, ...wrongOptions].sort(() => Math.random() - 0.5);

  return allOptions;
};
