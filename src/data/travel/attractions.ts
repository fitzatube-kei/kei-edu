import { TouristAttraction, AttractionSituation } from '@/types/travel';

// ============================================
// TOURIST ATTRACTIONS BY AREA/DESTINATION
// ============================================

export const touristAttractions: TouristAttraction[] = [
  // ==========================================
  // SEOUL - GANGNAM AREA
  // ==========================================
  {
    id: 'coex-mall',
    locationId: 'gangnam',
    korean: '코엑스몰',
    romanization: 'COEX Mall',
    name: {
      en: 'COEX Mall & Starfield Library',
      ja: 'COEXモール＆スターフィールド図書館',
      zh: 'COEX购物中心和星空图书馆',
      th: 'COEX Mall และห้องสมุด Starfield',
      vi: 'COEX Mall & Thư viện Starfield',
      es: 'COEX Mall y Biblioteca Starfield',
    },
    description: {
      en: 'Massive underground mall with beautiful Starfield Library',
      ja: '美しいスターフィールド図書館のある巨大な地下モール',
      zh: '拥有美丽星空图书馆的巨大地下商场',
      th: 'ห้างใต้ดินขนาดใหญ่พร้อมห้องสมุด Starfield ที่สวยงาม',
      vi: 'Trung tâm mua sắm ngầm khổng lồ với Thư viện Starfield tuyệt đẹp',
      es: 'Centro comercial subterráneo enorme con hermosa Biblioteca Starfield',
    },
    icon: '📚',
    ticketPrice: '무료 (Free)',
    hours: '10:30 - 22:00',
  },
  {
    id: 'bongeunsa',
    locationId: 'gangnam',
    korean: '봉은사',
    romanization: 'Bongeunsa Temple',
    name: {
      en: 'Bongeunsa Temple',
      ja: '奉恩寺',
      zh: '奉恩寺',
      th: 'วัดบงอึนซา',
      vi: 'Chùa Bongeunsa',
      es: 'Templo Bongeunsa',
    },
    description: {
      en: 'Ancient Buddhist temple in the heart of modern Gangnam',
      ja: '現代的な江南の中心にある古代仏教寺院',
      zh: '位于现代江南中心的古老佛教寺庙',
      th: 'วัดพุทธโบราณใจกลางคังนัมสมัยใหม่',
      vi: 'Ngôi chùa Phật giáo cổ kính giữa lòng Gangnam hiện đại',
      es: 'Antiguo templo budista en el corazón del moderno Gangnam',
    },
    icon: '🛕',
    ticketPrice: '무료 (Free)',
    hours: '04:00 - 21:00',
  },

  // ==========================================
  // SEOUL - HONGDAE AREA
  // ==========================================
  {
    id: 'hongdae-street',
    locationId: 'hongdae',
    korean: '홍대 걷고싶은거리',
    romanization: 'Hongdae Walking Street',
    name: {
      en: 'Hongdae Walking Street',
      ja: '弘大歩きたい通り',
      zh: '弘大步行街',
      th: 'ถนนคนเดินฮงแด',
      vi: 'Phố đi bộ Hongdae',
      es: 'Calle peatonal de Hongdae',
    },
    description: {
      en: 'Vibrant street with live music, street art, and performers',
      ja: 'ライブ音楽、ストリートアート、パフォーマーのある活気ある通り',
      zh: '充满活力的街道，有现场音乐、街头艺术和表演者',
      th: 'ถนนที่มีชีวิตชีวาพร้อมดนตรีสด ศิลปะข้างถนน และนักแสดง',
      vi: 'Con phố sôi động với nhạc sống, nghệ thuật đường phố và nghệ sĩ biểu diễn',
      es: 'Calle vibrante con música en vivo, arte callejero y artistas',
    },
    icon: '🎤',
    ticketPrice: '무료 (Free)',
    hours: '항상 개방',
  },
  {
    id: 'trick-eye-museum',
    locationId: 'hongdae',
    korean: '트릭아이뮤지엄',
    romanization: 'Trick Eye Museum',
    name: {
      en: 'Trick Eye Museum',
      ja: 'トリックアイミュージアム',
      zh: '特丽爱3D美术馆',
      th: 'พิพิธภัณฑ์ Trick Eye',
      vi: 'Bảo tàng Trick Eye',
      es: 'Museo Trick Eye',
    },
    description: {
      en: '3D optical illusion art museum - perfect for fun photos!',
      ja: '3D錯視アート美術館 - 楽しい写真にぴったり！',
      zh: '3D错觉艺术博物馆 - 适合拍有趣的照片！',
      th: 'พิพิธภัณฑ์ภาพลวงตา 3D - สมบูรณ์แบบสำหรับรูปถ่ายสนุกๆ!',
      vi: 'Bảo tàng nghệ thuật ảo giác 3D - hoàn hảo cho ảnh vui!',
      es: 'Museo de arte de ilusión óptica 3D - ¡perfecto para fotos divertidas!',
    },
    icon: '🎨',
    ticketPrice: '18,000원',
    hours: '09:00 - 21:00',
  },

  // ==========================================
  // SEOUL - MYEONGDONG AREA
  // ==========================================
  {
    id: 'myeongdong-cathedral',
    locationId: 'myeongdong',
    korean: '명동성당',
    romanization: 'Myeongdong Cathedral',
    name: {
      en: 'Myeongdong Cathedral',
      ja: '明洞聖堂',
      zh: '明洞圣堂',
      th: 'มหาวิหารเมียงดง',
      vi: 'Nhà thờ Myeongdong',
      es: 'Catedral de Myeongdong',
    },
    description: {
      en: 'Historic Gothic cathedral, landmark of Seoul',
      ja: '歴史的なゴシック大聖堂、ソウルのランドマーク',
      zh: '历史悠久的哥特式大教堂，首尔地标',
      th: 'มหาวิหารกอธิคประวัติศาสตร์ สัญลักษณ์ของโซล',
      vi: 'Nhà thờ Gothic lịch sử, địa danh của Seoul',
      es: 'Catedral gótica histórica, punto de referencia de Seúl',
    },
    icon: '⛪',
    ticketPrice: '무료 (Free)',
    hours: '09:00 - 21:00',
  },
  {
    id: 'namsangol',
    locationId: 'myeongdong',
    korean: '남산골 한옥마을',
    romanization: 'Namsangol Hanok Village',
    name: {
      en: 'Namsangol Hanok Village',
      ja: '南山韓屋村',
      zh: '南山韩屋村',
      th: 'หมู่บ้านฮันอก นัมซานกอล',
      vi: 'Làng Hanok Namsangol',
      es: 'Aldea Hanok Namsangol',
    },
    description: {
      en: 'Traditional Korean houses near Myeongdong',
      ja: '明洞近くの伝統的な韓国家屋',
      zh: '明洞附近的传统韩屋',
      th: 'บ้านเกาหลีดั้งเดิมใกล้เมียงดง',
      vi: 'Nhà truyền thống Hàn Quốc gần Myeongdong',
      es: 'Casas tradicionales coreanas cerca de Myeongdong',
    },
    icon: '🏘️',
    ticketPrice: '무료 (Free)',
    hours: '09:00 - 21:00',
  },

  // ==========================================
  // SEOUL - INSADONG AREA
  // ==========================================
  {
    id: 'insadong-street',
    locationId: 'insadong',
    korean: '인사동길',
    romanization: 'Insadong Street',
    name: {
      en: 'Insadong Art Street',
      ja: '仁寺洞通り',
      zh: '仁寺洞街',
      th: 'ถนนอินซาดง',
      vi: 'Phố nghệ thuật Insadong',
      es: 'Calle de Arte Insadong',
    },
    description: {
      en: 'Traditional art galleries, tea houses, and craft shops',
      ja: '伝統的な画廊、茶屋、工芸品店',
      zh: '传统画廊、茶馆和工艺品店',
      th: 'แกลเลอรี่ศิลปะ ร้านชา และร้านงานฝีมือแบบดั้งเดิม',
      vi: 'Phòng tranh truyền thống, quán trà và cửa hàng thủ công',
      es: 'Galerías de arte tradicionales, casas de té y tiendas de artesanía',
    },
    icon: '🎎',
    ticketPrice: '무료 (Free)',
    hours: '10:00 - 20:00',
  },
  {
    id: 'ssamziegil',
    locationId: 'insadong',
    korean: '쌈지길',
    romanization: 'Ssamziegil',
    name: {
      en: 'Ssamziegil Shopping Complex',
      ja: 'サムジギル',
      zh: 'Ssamziegil购物中心',
      th: 'คอมเพล็กซ์ช้อปปิ้ง Ssamziegil',
      vi: 'Khu mua sắm Ssamziegil',
      es: 'Complejo comercial Ssamziegil',
    },
    description: {
      en: 'Unique spiral shopping mall with local artisan shops',
      ja: '地元の職人の店がある独特のスパイラルモール',
      zh: '独特的螺旋购物中心，有当地工匠店',
      th: 'ห้างสรรพสินค้าเกลียวเอกลักษณ์พร้อมร้านช่างฝีมือท้องถิ่น',
      vi: 'Trung tâm mua sắm xoắn ốc độc đáo với các cửa hàng nghệ nhân địa phương',
      es: 'Centro comercial en espiral único con tiendas de artesanos locales',
    },
    icon: '🛒',
    ticketPrice: '무료 (Free)',
    hours: '10:00 - 20:30',
  },

  // ==========================================
  // BUSAN - HAEUNDAE AREA
  // ==========================================
  {
    id: 'haeundae-beach',
    locationId: 'haeundae',
    korean: '해운대 해수욕장',
    romanization: 'Haeundae Beach',
    name: {
      en: 'Haeundae Beach',
      ja: '海雲台ビーチ',
      zh: '海云台海滩',
      th: 'หาดแฮอุนแด',
      vi: 'Bãi biển Haeundae',
      es: 'Playa Haeundae',
    },
    description: {
      en: 'Korea\'s most famous beach with beautiful white sand',
      ja: '美しい白い砂浜の韓国で最も有名なビーチ',
      zh: '韩国最著名的海滩，拥有美丽的白色沙滩',
      th: 'หาดที่มีชื่อเสียงที่สุดในเกาหลีพร้อมทรายขาวสวยงาม',
      vi: 'Bãi biển nổi tiếng nhất Hàn Quốc với cát trắng mịn',
      es: 'La playa más famosa de Corea con hermosa arena blanca',
    },
    icon: '🏖️',
    ticketPrice: '무료 (Free)',
    hours: '항상 개방',
  },
  {
    id: 'sea-life-busan',
    locationId: 'haeundae',
    korean: 'SEA LIFE 부산아쿠아리움',
    romanization: 'SEA LIFE Busan Aquarium',
    name: {
      en: 'SEA LIFE Busan Aquarium',
      ja: 'SEA LIFE 釜山アクアリウム',
      zh: 'SEA LIFE釜山水族馆',
      th: 'SEA LIFE พิพิธภัณฑ์สัตว์น้ำปูซาน',
      vi: 'Thủy cung SEA LIFE Busan',
      es: 'Acuario SEA LIFE Busan',
    },
    description: {
      en: 'Underwater tunnel aquarium with sharks and sea life',
      ja: 'サメや海洋生物がいる水中トンネル水族館',
      zh: '有鲨鱼和海洋生物的水下隧道水族馆',
      th: 'อุโมงค์ใต้น้ำพิพิธภัณฑ์สัตว์น้ำพร้อมฉลามและสัตว์ทะเล',
      vi: 'Thủy cung đường hầm dưới nước với cá mập và sinh vật biển',
      es: 'Acuario con túnel submarino con tiburones y vida marina',
    },
    icon: '🦈',
    ticketPrice: '29,000원',
    hours: '10:00 - 19:00',
  },

  // ==========================================
  // BUSAN - GAMCHEON AREA
  // ==========================================
  {
    id: 'gamcheon-village',
    locationId: 'gamcheon',
    korean: '감천문화마을',
    romanization: 'Gamcheon Culture Village',
    name: {
      en: 'Gamcheon Culture Village',
      ja: '甘川文化村',
      zh: '甘川文化村',
      th: 'หมู่บ้านวัฒนธรรมกัมชอน',
      vi: 'Làng văn hóa Gamcheon',
      es: 'Aldea Cultural Gamcheon',
    },
    description: {
      en: 'Colorful hillside village known as "Machu Picchu of Busan"',
      ja: '「釜山のマチュピチュ」として知られるカラフルな丘の村',
      zh: '被称为"釜山马丘比丘"的彩色山坡村庄',
      th: 'หมู่บ้านบนเนินเขาสีสันสดใส ที่รู้จักกันในชื่อ "Machu Picchu แห่งปูซาน"',
      vi: 'Ngôi làng trên đồi đầy màu sắc được gọi là "Machu Picchu của Busan"',
      es: 'Colorido pueblo en la ladera conocido como "Machu Picchu de Busan"',
    },
    icon: '🏘️',
    ticketPrice: '무료 (Free)',
    hours: '09:00 - 18:00',
  },
  {
    id: 'little-prince',
    locationId: 'gamcheon',
    korean: '어린왕자 조형물',
    romanization: 'Little Prince Statue',
    name: {
      en: 'Little Prince Photo Spot',
      ja: '星の王子さまの像',
      zh: '小王子雕像',
      th: 'จุดถ่ายรูปเจ้าชายน้อย',
      vi: 'Điểm chụp ảnh Hoàng tử bé',
      es: 'Punto de foto del Principito',
    },
    description: {
      en: 'Famous photo spot with Little Prince and Fox statues',
      ja: '星の王子さまとキツネの像がある有名な撮影スポット',
      zh: '有小王子和狐狸雕像的著名拍照地点',
      th: 'จุดถ่ายรูปที่มีชื่อเสียงกับรูปปั้นเจ้าชายน้อยและสุนัขจิ้งจอก',
      vi: 'Điểm chụp ảnh nổi tiếng với tượng Hoàng tử bé và Cáo',
      es: 'Famoso punto de fotos con estatuas del Principito y el Zorro',
    },
    icon: '👑',
    ticketPrice: '무료 (Free)',
    hours: '09:00 - 18:00',
  },

  // ==========================================
  // JEJU - SEOGWIPO AREA
  // ==========================================
  {
    id: 'cheonjiyeon-falls',
    locationId: 'seogwipo',
    korean: '천지연폭포',
    romanization: 'Cheonjiyeon Falls',
    name: {
      en: 'Cheonjiyeon Waterfall',
      ja: '天地淵瀑布',
      zh: '天地渊瀑布',
      th: 'น้ำตกชอนจียอน',
      vi: 'Thác Cheonjiyeon',
      es: 'Cascada Cheonjiyeon',
    },
    description: {
      en: 'Beautiful waterfall meaning "pond where heaven and earth meet"',
      ja: '「天と地が出会う池」を意味する美しい滝',
      zh: '意为"天地相遇之池"的美丽瀑布',
      th: 'น้ำตกสวยงามที่มีความหมายว่า "บ่อที่สวรรค์และโลกพบกัน"',
      vi: 'Thác nước tuyệt đẹp có nghĩa "ao nơi trời và đất gặp nhau"',
      es: 'Hermosa cascada que significa "estanque donde el cielo y la tierra se encuentran"',
    },
    icon: '💧',
    ticketPrice: '2,500원',
    hours: '09:00 - 22:00',
  },
  {
    id: 'jeongbang-falls',
    locationId: 'seogwipo',
    korean: '정방폭포',
    romanization: 'Jeongbang Falls',
    name: {
      en: 'Jeongbang Waterfall',
      ja: '正房瀑布',
      zh: '正房瀑布',
      th: 'น้ำตกจองบัง',
      vi: 'Thác Jeongbang',
      es: 'Cascada Jeongbang',
    },
    description: {
      en: 'Only waterfall in Asia that falls directly into the ocean',
      ja: 'アジアで唯一、海に直接落ちる滝',
      zh: '亚洲唯一直接落入大海的瀑布',
      th: 'น้ำตกแห่งเดียวในเอเชียที่ตกลงสู่ทะเลโดยตรง',
      vi: 'Thác nước duy nhất ở châu Á đổ trực tiếp xuống biển',
      es: 'La única cascada en Asia que cae directamente al océano',
    },
    icon: '🌊',
    ticketPrice: '2,000원',
    hours: '08:00 - 18:00',
  },

  // ==========================================
  // JEJU - HALLASAN AREA
  // ==========================================
  {
    id: 'hallasan',
    locationId: 'hallasan',
    korean: '한라산',
    romanization: 'Hallasan Mountain',
    name: {
      en: 'Hallasan Mountain (UNESCO)',
      ja: '漢拏山（ユネスコ）',
      zh: '汉拿山（联合国教科文组织）',
      th: 'ภูเขาฮัลลาซาน (UNESCO)',
      vi: 'Núi Hallasan (UNESCO)',
      es: 'Monte Hallasan (UNESCO)',
    },
    description: {
      en: 'Highest mountain in South Korea, UNESCO World Heritage',
      ja: '韓国最高峰、ユネスコ世界遺産',
      zh: '韩国最高峰，联合国教科文组织世界遗产',
      th: 'ภูเขาที่สูงที่สุดในเกาหลีใต้ มรดกโลกยูเนสโก',
      vi: 'Ngọn núi cao nhất Hàn Quốc, Di sản Thế giới UNESCO',
      es: 'La montaña más alta de Corea del Sur, Patrimonio Mundial UNESCO',
    },
    icon: '⛰️',
    ticketPrice: '무료 (Free)',
    hours: '05:00 - 12:00 (등반)',
  },
  {
    id: 'eorimok-trail',
    locationId: 'hallasan',
    korean: '어리목 탐방로',
    romanization: 'Eorimok Trail',
    name: {
      en: 'Eorimok Trail (Easy)',
      ja: '御里牧探訪路（初級）',
      zh: '御里牧探访路（简单）',
      th: 'เส้นทางออริมก (ง่าย)',
      vi: 'Đường mòn Eorimok (Dễ)',
      es: 'Sendero Eorimok (Fácil)',
    },
    description: {
      en: 'Beautiful hiking trail, perfect for beginners',
      ja: '初心者に最適な美しいハイキングトレイル',
      zh: '美丽的徒步路线，非常适合初学者',
      th: 'เส้นทางเดินป่าที่สวยงาม เหมาะสำหรับผู้เริ่มต้น',
      vi: 'Đường mòn đi bộ đẹp, hoàn hảo cho người mới',
      es: 'Hermoso sendero de senderismo, perfecto para principiantes',
    },
    icon: '🥾',
    ticketPrice: '무료 (Free)',
    hours: '06:00 - 14:00',
  },

  // ==========================================
  // JEJU - JEJU CITY AREA
  // ==========================================
  {
    id: 'dongmun-market',
    locationId: 'jeju-city',
    korean: '동문시장',
    romanization: 'Dongmun Market',
    name: {
      en: 'Dongmun Traditional Market',
      ja: '東門市場',
      zh: '东门市场',
      th: 'ตลาดดงมุน',
      vi: 'Chợ truyền thống Dongmun',
      es: 'Mercado tradicional Dongmun',
    },
    description: {
      en: 'Traditional market with fresh seafood and Jeju specialties',
      ja: '新鮮な海鮮と済州特産品の伝統市場',
      zh: '有新鲜海鲜和济州特产的传统市场',
      th: 'ตลาดดั้งเดิมที่มีอาหารทะเลสดและของพิเศษเชจู',
      vi: 'Chợ truyền thống với hải sản tươi và đặc sản Jeju',
      es: 'Mercado tradicional con mariscos frescos y especialidades de Jeju',
    },
    icon: '🦐',
    ticketPrice: '무료 (Free)',
    hours: '08:00 - 21:00',
  },
  {
    id: 'loveland',
    locationId: 'jeju-city',
    korean: '러브랜드',
    romanization: 'Loveland',
    name: {
      en: 'Jeju Loveland',
      ja: '済州ラブランド',
      zh: '济州性爱主题公园',
      th: 'Jeju Loveland',
      vi: 'Jeju Loveland',
      es: 'Jeju Loveland',
    },
    description: {
      en: 'Unique outdoor sculpture park (Adults only)',
      ja: 'ユニークな野外彫刻公園（成人専用）',
      zh: '独特的户外雕塑公园（仅限成人）',
      th: 'สวนประติมากรรมกลางแจ้งเอกลักษณ์ (ผู้ใหญ่เท่านั้น)',
      vi: 'Công viên điêu khắc ngoài trời độc đáo (Chỉ người lớn)',
      es: 'Parque de esculturas al aire libre único (Solo adultos)',
    },
    icon: '💑',
    ticketPrice: '12,000원',
    hours: '09:00 - 24:00',
  },
];

// ============================================
// ATTRACTION SITUATIONS (GENERIC - WORK WITH ANY ATTRACTION)
// ============================================

export const attractionSituations: AttractionSituation[] = [
  // Generic ticket purchase
  {
    id: 'generic-ticket',
    attractionId: 'generic',
    type: 'ticket',
    scenario: {
      en: 'You are at the ticket booth.',
      ja: 'チケット売り場にいます。',
      zh: '你在售票处。',
      th: 'คุณอยู่ที่จุดขายตั๋ว',
      vi: 'Bạn đang ở quầy vé.',
      es: 'Estás en la taquilla.',
    },
    question: {
      en: 'How do you buy one adult ticket?',
      ja: '大人のチケットを一枚どう買いますか？',
      zh: '你怎么买一张成人票？',
      th: 'คุณจะซื้อตั๋วผู้ใหญ่หนึ่งใบอย่างไร?',
      vi: 'Bạn mua một vé người lớn thế nào?',
      es: '¿Cómo compras un boleto de adulto?',
    },
    choices: [
      {
        id: 'a',
        korean: '어른 한 장 주세요',
        romanization: 'eoreun han jang juseyo',
        translation: { en: 'One adult ticket, please', ja: '大人一枚ください', zh: '请给我一张成人票', th: 'ขอตั๋วผู้ใหญ่หนึ่งใบ', vi: 'Cho tôi một vé người lớn', es: 'Un boleto de adulto, por favor' },
        isCorrect: true,
        hint: { en: '어른 = adult, 한 장 = one ticket', ja: '어른 = 大人、한 장 = 一枚', zh: '어른 = 成人, 한 장 = 一张', th: '어른 = ผู้ใหญ่, 한 장 = หนึ่งใบ', vi: '어른 = người lớn, 한 장 = một tờ', es: '어른 = adulto, 한 장 = un boleto' },
        feedback: { en: 'Perfect! Tickets are counted with 장 (sheets).', ja: '完璧！チケットは장（枚）で数えます。', zh: '完美！用장（张）数票。', th: 'สมบูรณ์แบบ! ตั๋วนับด้วย 장 (ใบ)', vi: 'Hoàn hảo! Vé đếm bằng 장 (tờ).', es: '¡Perfecto! Los boletos se cuentan con 장.' },
      },
      {
        id: 'b',
        korean: '학생 할인 있어요?',
        romanization: 'haksaeng halin isseoyo?',
        translation: { en: 'Is there a student discount?', ja: '学生割引はありますか？', zh: '有学生优惠吗？', th: 'มีส่วนลดนักเรียนไหม?', vi: 'Có giảm giá cho sinh viên không?', es: '¿Hay descuento para estudiantes?' },
        isCorrect: false,
        hint: { en: '학생 = student, 할인 = discount', ja: '학생 = 学生', zh: '학생 = 学生', th: '학생 = นักเรียน', vi: '학생 = sinh viên', es: '학생 = estudiante' },
        feedback: { en: 'Good question, but to buy: 어른 한 장 주세요', ja: '良い質問ですが、買うには：어른 한 장 주세요', zh: '好问题，但买票说：어른 한 장 주세요', th: 'คำถามดี แต่ซื้อพูด: 어른 한 장 주세요', vi: 'Câu hỏi hay, nhưng để mua: 어른 한 장 주세요', es: 'Buena pregunta, pero para comprar: 어른 한 장 주세요' },
      },
      {
        id: 'c',
        korean: '무료예요?',
        romanization: 'muryoyeyo?',
        translation: { en: 'Is it free?', ja: '無料ですか？', zh: '免费吗？', th: 'ฟรีไหม?', vi: 'Miễn phí không?', es: '¿Es gratis?' },
        isCorrect: false,
        hint: { en: '무료 = free', ja: '무료 = 無料', zh: '무료 = 免费', th: '무료 = ฟรี', vi: '무료 = miễn phí', es: '무료 = gratis' },
        feedback: { en: 'This asks if it\'s free. To buy: 어른 한 장 주세요', ja: '無料か聞いています。買うには：어른 한 장 주세요', zh: '这是问免费。买票：어른 한 장 주세요', th: 'ถามว่าฟรีไหม ซื้อ: 어른 한 장 주세요', vi: 'Hỏi miễn phí không. Mua: 어른 한 장 주세요', es: 'Pregunta si es gratis. Comprar: 어른 한 장 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '어른', romanization: 'eoreun', meaning: { en: 'Adult', ja: '大人', zh: '成人', th: 'ผู้ใหญ่', vi: 'Người lớn', es: 'Adulto' } },
        { korean: '한 장', romanization: 'han jang', meaning: { en: 'One ticket', ja: '一枚', zh: '一张', th: 'หนึ่งใบ', vi: 'Một tờ', es: 'Un boleto' } },
        { korean: '두 장', romanization: 'du jang', meaning: { en: 'Two tickets', ja: '二枚', zh: '两张', th: 'สองใบ', vi: 'Hai tờ', es: 'Dos boletos' } },
      ],
    },
    xpReward: 75,
  },
  // Asking hours
  {
    id: 'generic-hours',
    attractionId: 'generic',
    type: 'hours',
    scenario: {
      en: 'You want to know the closing time.',
      ja: '閉館時間を知りたいです。',
      zh: '你想知道关门时间。',
      th: 'คุณต้องการทราบเวลาปิด',
      vi: 'Bạn muốn biết giờ đóng cửa.',
      es: 'Quieres saber la hora de cierre.',
    },
    question: {
      en: 'How do you ask "What time do you close?"',
      ja: '「何時に閉まりますか？」をどう聞きますか？',
      zh: '你怎么问"几点关门？"',
      th: 'คุณจะถาม "ปิดกี่โมง?" อย่างไร?',
      vi: 'Bạn hỏi "Mấy giờ đóng cửa?" thế nào?',
      es: '¿Cómo preguntas "¿A qué hora cierran?"',
    },
    choices: [
      {
        id: 'a',
        korean: '몇 시까지 해요?',
        romanization: 'myeot sikkaji haeyo?',
        translation: { en: 'Until what time are you open?', ja: '何時までですか？', zh: '营业到几点？', th: 'เปิดถึงกี่โมง?', vi: 'Mở đến mấy giờ?', es: '¿Hasta qué hora abren?' },
        isCorrect: true,
        hint: { en: '몇 시 = what time, 까지 = until', ja: '몇 시 = 何時、까지 = まで', zh: '몇 시 = 几点, 까지 = 到', th: '몇 시 = กี่โมง, 까지 = ถึง', vi: '몇 시 = mấy giờ, 까지 = đến', es: '몇 시 = qué hora, 까지 = hasta' },
        feedback: { en: 'Perfect! This is the natural way to ask about closing time.', ja: '完璧！これは閉館時間を聞く自然な言い方です。', zh: '完美！这是问关门时间的自然说法。', th: 'สมบูรณ์แบบ! นี่คือวิธีถามเวลาปิดอย่างเป็นธรรมชาติ', vi: 'Hoàn hảo! Đây là cách tự nhiên để hỏi giờ đóng cửa.', es: '¡Perfecto! Esta es la forma natural de preguntar sobre el horario.' },
      },
      {
        id: 'b',
        korean: '지금 몇 시예요?',
        romanization: 'jigeum myeot siyeyo?',
        translation: { en: 'What time is it now?', ja: '今何時ですか？', zh: '现在几点？', th: 'ตอนนี้กี่โมง?', vi: 'Bây giờ mấy giờ?', es: '¿Qué hora es ahora?' },
        isCorrect: false,
        hint: { en: '지금 = now', ja: '지금 = 今', zh: '지금 = 现在', th: '지금 = ตอนนี้', vi: '지금 = bây giờ', es: '지금 = ahora' },
        feedback: { en: 'This asks for current time. For closing: 몇 시까지 해요?', ja: '現在時刻です。閉館：몇 시까지 해요?', zh: '问现在几点。关门：몇 시까지 해요?', th: 'ถามเวลาปัจจุบัน ปิด: 몇 시까지 해요?', vi: 'Hỏi giờ hiện tại. Đóng cửa: 몇 시까지 해요?', es: 'Pregunta hora actual. Cierre: 몇 시까지 해요?' },
      },
      {
        id: 'c',
        korean: '어디예요?',
        romanization: 'eodiyeyo?',
        translation: { en: 'Where is it?', ja: 'どこですか？', zh: '在哪里？', th: 'อยู่ที่ไหน?', vi: 'Ở đâu?', es: '¿Dónde está?' },
        isCorrect: false,
        hint: { en: '어디 = where', ja: '어디 = どこ', zh: '어디 = 哪里', th: '어디 = ที่ไหน', vi: '어디 = ở đâu', es: '어디 = dónde' },
        feedback: { en: 'This asks for location. For closing: 몇 시까지 해요?', ja: '場所です。閉館：몇 시까지 해요?', zh: '问地点。关门：몇 시까지 해요?', th: 'ถามสถานที่ ปิด: 몇 시까지 해요?', vi: 'Hỏi địa điểm. Đóng cửa: 몇 시까지 해요?', es: 'Pregunta ubicación. Cierre: 몇 시까지 해요?' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '몇 시', romanization: 'myeot si', meaning: { en: 'What time', ja: '何時', zh: '几点', th: 'กี่โมง', vi: 'Mấy giờ', es: 'Qué hora' } },
        { korean: '까지', romanization: 'kkaji', meaning: { en: 'Until', ja: 'まで', zh: '到', th: 'ถึง', vi: 'Đến', es: 'Hasta' } },
      ],
    },
    xpReward: 50,
  },
  // Photo request
  {
    id: 'generic-photo',
    attractionId: 'generic',
    type: 'photo',
    scenario: {
      en: 'You want someone to take your photo.',
      ja: '写真を撮ってもらいたいです。',
      zh: '你想让人给你拍照。',
      th: 'คุณต้องการให้คนถ่ายรูปให้',
      vi: 'Bạn muốn ai đó chụp ảnh cho bạn.',
      es: 'Quieres que alguien te tome una foto.',
    },
    question: {
      en: 'How do you ask someone to take your photo?',
      ja: '写真を撮ってもらうようにどう頼みますか？',
      zh: '你怎么请人帮你拍照？',
      th: 'คุณจะขอให้คนถ่ายรูปให้อย่างไร?',
      vi: 'Bạn nhờ ai đó chụp ảnh thế nào?',
      es: '¿Cómo le pides a alguien que te tome una foto?',
    },
    choices: [
      {
        id: 'a',
        korean: '사진 찍어 주세요',
        romanization: 'sajin jjigeo juseyo',
        translation: { en: 'Please take a photo', ja: '写真を撮ってください', zh: '请拍照', th: 'กรุณาถ่ายรูปให้', vi: 'Làm ơn chụp ảnh', es: 'Por favor tome una foto' },
        isCorrect: true,
        hint: { en: '사진 = photo, 찍다 = to take (photo)', ja: '사진 = 写真、찍다 = 撮る', zh: '사진 = 照片, 찍다 = 拍', th: '사진 = รูป, 찍다 = ถ่าย', vi: '사진 = ảnh, 찍다 = chụp', es: '사진 = foto, 찍다 = tomar' },
        feedback: { en: 'Perfect! Hand them your camera/phone after saying this.', ja: '完璧！カメラ/スマホを渡しましょう。', zh: '完美！说完递相机/手机。', th: 'สมบูรณ์แบบ! ส่งกล้อง/โทรศัพท์ให้เขา', vi: 'Hoàn hảo! Đưa máy ảnh/điện thoại cho họ.', es: '¡Perfecto! Entrégales tu cámara/teléfono.' },
      },
      {
        id: 'b',
        korean: '사진 있어요?',
        romanization: 'sajin isseoyo?',
        translation: { en: 'Do you have a photo?', ja: '写真はありますか？', zh: '有照片吗？', th: 'มีรูปไหม?', vi: 'Có ảnh không?', es: '¿Tienes una foto?' },
        isCorrect: false,
        hint: { en: '있어요 = is there / do you have', ja: '있어요 = ありますか', zh: '있어요 = 有吗', th: '있어요 = มีไหม', vi: '있어요 = có không', es: '있어요 = hay/tienes' },
        feedback: { en: 'This asks if they have a photo. Request: 사진 찍어 주세요', ja: '写真があるか聞いています。頼む：사진 찍어 주세요', zh: '问有没有照片。请求：사진 찍어 주세요', th: 'ถามว่ามีรูปไหม ขอ: 사진 찍어 주세요', vi: 'Hỏi có ảnh không. Nhờ: 사진 찍어 주세요', es: 'Pregunta si tienen foto. Pedir: 사진 찍어 주세요' },
      },
      {
        id: 'c',
        korean: '감사합니다',
        romanization: 'gamsahamnida',
        translation: { en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', th: 'ขอบคุณ', vi: 'Cảm ơn', es: 'Gracias' },
        isCorrect: false,
        hint: { en: 'This means "thank you"', ja: '「ありがとう」の意味', zh: '"谢谢"的意思', th: 'หมายถึง "ขอบคุณ"', vi: 'Có nghĩa "cảm ơn"', es: 'Significa "gracias"' },
        feedback: { en: 'Say this after the photo! To request: 사진 찍어 주세요', ja: '写真後に！頼む：사진 찍어 주세요', zh: '拍完后说！请求：사진 찍어 주세요', th: 'พูดหลังถ่ายรูป! ขอ: 사진 찍어 주세요', vi: 'Nói sau khi chụp! Nhờ: 사진 찍어 주세요', es: 'Di esto después. Pedir: 사진 찍어 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '사진', romanization: 'sajin', meaning: { en: 'Photo', ja: '写真', zh: '照片', th: 'รูป', vi: 'Ảnh', es: 'Foto' } },
        { korean: '찍다', romanization: 'jjikda', meaning: { en: 'To take (photo)', ja: '撮る', zh: '拍', th: 'ถ่าย', vi: 'Chụp', es: 'Tomar' } },
      ],
    },
    xpReward: 50,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getAttractionById = (id: string): TouristAttraction | undefined => {
  return touristAttractions.find(a => a.id === id);
};

export const getAttractionsByLocation = (locationId: string): TouristAttraction[] => {
  return touristAttractions.filter(a => a.locationId === locationId);
};

export const getAttractionsByArea = (area: string): TouristAttraction[] => {
  // Map area to location IDs
  const areaLocationMap: Record<string, string[]> = {
    'seoul': ['gangnam', 'hongdae', 'myeongdong', 'insadong', 'itaewon'],
    'busan': ['haeundae', 'gamcheon', 'gwangalli', 'nampo'],
    'jeju': ['seogwipo', 'hallasan', 'jeju-city', 'udo'],
  };

  const locationIds = areaLocationMap[area] || [];
  return touristAttractions.filter(a => locationIds.includes(a.locationId));
};

export const getSituationsByAttraction = (attractionId: string): AttractionSituation[] => {
  // Return generic situations for any attraction
  return attractionSituations.filter(s => s.attractionId === 'generic');
};

export const getSituationByType = (
  attractionId: string,
  type: 'ticket' | 'hours' | 'photo' | 'direction'
): AttractionSituation | undefined => {
  return attractionSituations.find(
    s => s.attractionId === 'generic' && s.type === type
  );
};

export const getRandomAttractionByDestination = (
  destinationId: string,
  excludeIds: string[] = []
): TouristAttraction | undefined => {
  const available = touristAttractions.filter(
    a => a.locationId === destinationId && !excludeIds.includes(a.id)
  );
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
};

export const getRandomAttraction = (
  locationId?: string,
  excludeIds: string[] = []
): TouristAttraction | undefined => {
  let available = touristAttractions;
  if (locationId) {
    available = available.filter(a => a.locationId === locationId);
  }
  available = available.filter(a => !excludeIds.includes(a.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
};
