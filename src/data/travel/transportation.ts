import { TransportOption, TransportQuiz } from '@/types/travel';

// ============================================
// TRANSPORT OPTIONS
// ============================================

// Seoul & Busan transport options (with subway)
export const transportOptions: TransportOption[] = [
  {
    id: 'subway',
    type: 'subway',
    korean: '지하철',
    romanization: 'jihacheol',
    icon: '🚇',
    description: {
      en: 'Fast and convenient subway system',
      ja: '速くて便利な地下鉄',
      zh: '快速便捷的地铁',
      th: 'รถไฟใต้ดินที่รวดเร็วและสะดวก',
      vi: 'Hệ thống tàu điện ngầm nhanh và tiện lợi',
      es: 'Sistema de metro rápido y conveniente',
    },
  },
  {
    id: 'bus',
    type: 'bus',
    korean: '버스',
    romanization: 'beoseu',
    icon: '🚌',
    description: {
      en: 'City bus with scenic routes',
      ja: '景色の良いルートを走る市バス',
      zh: '风景优美的城市公交',
      th: 'รถบัสในเมืองพร้อมเส้นทางชมวิว',
      vi: 'Xe buýt thành phố với tuyến đường ngắm cảnh',
      es: 'Autobús urbano con rutas panorámicas',
    },
  },
  {
    id: 'taxi',
    type: 'taxi',
    korean: '택시',
    romanization: 'taeksi',
    icon: '🚕',
    description: {
      en: 'Quick and direct taxi service',
      ja: '早くて直接的なタクシー',
      zh: '快捷直达的出租车',
      th: 'บริการแท็กซี่รวดเร็วและตรงจุด',
      vi: 'Dịch vụ taxi nhanh và trực tiếp',
      es: 'Servicio de taxi rápido y directo',
    },
  },
  {
    id: 'tourbus',
    type: 'bus',
    korean: '시티투어버스',
    romanization: 'siti tueo beoseu',
    icon: '🚎',
    description: {
      en: 'City Tour Bus - hop-on hop-off for tourists',
      ja: 'シティツアーバス - 乗り降り自由の観光バス',
      zh: '城市观光巴士 - 随上随下',
      th: 'รถบัสทัวร์เมือง - ขึ้นลงได้ตามใจ',
      vi: 'Xe buýt tour thành phố - lên xuống tự do',
      es: 'Autobús turístico - sube y baja libre',
    },
  },
];

// Jeju transport options (no subway - island transportation)
export const jejuTransportOptions: TransportOption[] = [
  {
    id: 'rentcar',
    type: 'bus', // Using bus type for quiz compatibility
    korean: '렌터카',
    romanization: 'renteoka',
    icon: '🚗',
    description: {
      en: 'Rental car - most popular for tourists',
      ja: 'レンタカー - 観光客に最も人気',
      zh: '租车 - 游客最常用',
      th: 'รถเช่า - นิยมที่สุดสำหรับนักท่องเที่ยว',
      vi: 'Xe thuê - phổ biến nhất với du khách',
      es: 'Coche de alquiler - más popular para turistas',
    },
  },
  {
    id: 'bus',
    type: 'bus',
    korean: '시외버스',
    romanization: 'sioe beoseu',
    icon: '🚌',
    description: {
      en: 'Intercity bus connecting all of Jeju',
      ja: '済州全域を結ぶ市外バス',
      zh: '连接济州全岛的市外巴士',
      th: 'รถบัสระหว่างเมืองเชื่อมต่อทั่วเชจู',
      vi: 'Xe buýt liên tỉnh kết nối toàn Jeju',
      es: 'Autobús interurbano conectando todo Jeju',
    },
  },
  {
    id: 'taxi',
    type: 'taxi',
    korean: '택시',
    romanization: 'taeksi',
    icon: '🚕',
    description: {
      en: 'Taxi service around the island',
      ja: '島内のタクシーサービス',
      zh: '环岛出租车服务',
      th: 'บริการแท็กซี่รอบเกาะ',
      vi: 'Dịch vụ taxi quanh đảo',
      es: 'Servicio de taxi por la isla',
    },
  },
  {
    id: 'electric',
    type: 'bus', // Using bus type for quiz compatibility
    korean: '전기자전거',
    romanization: 'jeongi jajeongeo',
    icon: '🚲',
    description: {
      en: 'Electric bike rental for scenic routes',
      ja: '景色を楽しむ電動自転車レンタル',
      zh: '电动自行车租赁 - 欣赏风景',
      th: 'เช่าจักรยานไฟฟ้าชมวิว',
      vi: 'Thuê xe đạp điện ngắm cảnh',
      es: 'Alquiler de bicicleta eléctrica para rutas panorámicas',
    },
  },
  {
    id: 'tourbus',
    type: 'bus',
    korean: '관광버스',
    romanization: 'gwangwang beoseu',
    icon: '🚎',
    description: {
      en: 'Jeju Tour Bus - guided tours around the island',
      ja: '済州観光バス - 島内ガイドツアー',
      zh: '济州观光巴士 - 环岛导游游',
      th: 'รถบัสทัวร์เชจู - ทัวร์พร้อมไกด์รอบเกาะ',
      vi: 'Xe buýt tour Jeju - tour có hướng dẫn quanh đảo',
      es: 'Autobús turístico de Jeju - tours guiados por la isla',
    },
  },
];

// Get transport options by area
export const getTransportOptionsByArea = (area: string): TransportOption[] => {
  if (area === 'jeju') {
    return jejuTransportOptions;
  }
  return transportOptions; // Seoul, Busan, etc.
};

// ============================================
// SUBWAY STATION QUIZZES
// ============================================

export const stationQuizzes: TransportQuiz[] = [
  // Hongdae
  {
    id: 'hongdae-station',
    transportType: 'subway',
    destinationId: 'hongdae',
    type: 'station-name',
    scenario: {
      en: 'You need to find "Hongdae Station" on the subway map.',
      ja: '地下鉄の路線図で「弘大駅」を探す必要があります。',
      zh: '您需要在地铁图上找到"弘大站"。',
      th: 'คุณต้องหา "สถานีฮงแด" บนแผนที่รถไฟใต้ดิน',
      vi: 'Bạn cần tìm "Ga Hongdae" trên bản đồ tàu điện ngầm.',
      es: 'Necesitas encontrar "Estación Hongdae" en el mapa del metro.',
    },
    question: {
      en: 'Which one is "Hongdae Station"?',
      ja: '「弘大駅」はどれですか？',
      zh: '哪个是"弘大站"？',
      th: 'อันไหนคือ "สถานีฮงแด"?',
      vi: 'Đâu là "Ga Hongdae"?',
      es: '¿Cuál es "Estación Hongdae"?',
    },
    targetKorean: '홍대입구역',
    choices: [
      {
        id: 'a',
        korean: '신촌역',
        romanization: 'Sinchon-yeok',
        translation: { en: 'Sinchon Station', ja: '新村駅', zh: '新村站', th: 'สถานีซินชน', vi: 'Ga Sinchon', es: 'Estación Sinchon' },
        isCorrect: false,
        hint: { en: 'Sinchon = New Village', ja: '新村 = 新しい村', zh: '新村 = 新的村庄', th: 'ซินชน = หมู่บ้านใหม่', vi: 'Sinchon = Làng mới', es: 'Sinchon = Pueblo Nuevo' },
        feedback: { en: 'This is Sinchon Station, not Hongdae.', ja: 'これは新村駅で、弘大ではありません。', zh: '这是新村站，不是弘大站。', th: 'นี่คือสถานีซินชน ไม่ใช่ฮงแด', vi: 'Đây là ga Sinchon, không phải Hongdae.', es: 'Esta es la estación Sinchon, no Hongdae.' },
      },
      {
        id: 'b',
        korean: '홍대입구역',
        romanization: 'Hongdae-ipgu-yeok',
        translation: { en: 'Hongdae Station', ja: '弘大入口駅', zh: '弘大入口站', th: 'สถานีฮงแดอิปกู', vi: 'Ga Hongdae-ipgu', es: 'Estación Hongdae-ipgu' },
        isCorrect: true,
        hint: { en: '홍대 = Hongdae, 입구 = entrance', ja: '홍대 = 弘大, 입구 = 入口', zh: '홍대 = 弘大, 입구 = 入口', th: '홍대 = ฮงแด, 입구 = ทางเข้า', vi: '홍대 = Hongdae, 입구 = lối vào', es: '홍대 = Hongdae, 입구 = entrada' },
        feedback: { en: 'Correct! 홍대입구역 means Hongdae Entrance Station.', ja: '正解！홍대입구역は弘大入口駅という意味です。', zh: '正确！홍대입구역是弘大入口站的意思。', th: 'ถูกต้อง! 홍대입구역 หมายถึง สถานีทางเข้าฮงแด', vi: 'Đúng rồi! 홍대입구역 có nghĩa là Ga lối vào Hongdae.', es: '¡Correcto! 홍대입구역 significa Estación Entrada Hongdae.' },
      },
      {
        id: 'c',
        korean: '합정역',
        romanization: 'Hapjeong-yeok',
        translation: { en: 'Hapjeong Station', ja: '合井駅', zh: '合井站', th: 'สถานีฮับจอง', vi: 'Ga Hapjeong', es: 'Estación Hapjeong' },
        isCorrect: false,
        hint: { en: 'Hapjeong = Combined Well', ja: '合井 = 合わせた井戸', zh: '合井 = 合井', th: 'ฮับจอง = บ่อน้ำรวม', vi: 'Hapjeong = Giếng kết hợp', es: 'Hapjeong = Pozo Combinado' },
        feedback: { en: 'This is Hapjeong Station, the next stop.', ja: 'これは合井駅、次の停車駅です。', zh: '这是合井站，下一站。', th: 'นี่คือสถานีฮับจอง ป้ายถัดไป', vi: 'Đây là ga Hapjeong, trạm tiếp theo.', es: 'Esta es la estación Hapjeong, la siguiente parada.' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '역', romanization: 'yeok', meaning: { en: 'Station', ja: '駅', zh: '站', th: 'สถานี', vi: 'Ga', es: 'Estación' } },
        { korean: '입구', romanization: 'ipgu', meaning: { en: 'Entrance', ja: '入口', zh: '入口', th: 'ทางเข้า', vi: 'Lối vào', es: 'Entrada' } },
      ],
    },
    xpReward: 50,
  },
  // Myeongdong
  {
    id: 'myeongdong-station',
    transportType: 'subway',
    destinationId: 'myeongdong',
    type: 'station-name',
    scenario: {
      en: 'You need to find "Myeongdong Station" on the subway map.',
      ja: '地下鉄の路線図で「明洞駅」を探す必要があります。',
      zh: '您需要在地铁图上找到"明洞站"。',
      th: 'คุณต้องหา "สถานีเมียงดง" บนแผนที่รถไฟใต้ดิน',
      vi: 'Bạn cần tìm "Ga Myeongdong" trên bản đồ tàu điện ngầm.',
      es: 'Necesitas encontrar "Estación Myeongdong" en el mapa del metro.',
    },
    question: {
      en: 'Which one is "Myeongdong Station"?',
      ja: '「明洞駅」はどれですか？',
      zh: '哪个是"明洞站"？',
      th: 'อันไหนคือ "สถานีเมียงดง"?',
      vi: 'Đâu là "Ga Myeongdong"?',
      es: '¿Cuál es "Estación Myeongdong"?',
    },
    targetKorean: '명동역',
    choices: [
      {
        id: 'a',
        korean: '명동역',
        romanization: 'Myeongdong-yeok',
        translation: { en: 'Myeongdong Station', ja: '明洞駅', zh: '明洞站', th: 'สถานีเมียงดง', vi: 'Ga Myeongdong', es: 'Estación Myeongdong' },
        isCorrect: true,
        hint: { en: '명동 = Bright Cave (shopping district)', ja: '명동 = 明洞（ショッピング街）', zh: '명동 = 明洞（购物区）', th: '명동 = ถ้ำสว่าง (ย่านช้อปปิ้ง)', vi: '명동 = Hang sáng (khu mua sắm)', es: '명동 = Cueva Brillante (distrito comercial)' },
        feedback: { en: 'Correct! 명동역 is the station in the famous shopping district.', ja: '正解！명동역は有名なショッピング街の駅です。', zh: '正确！명동역是著名购物区的车站。', th: 'ถูกต้อง! 명동역 คือสถานีในย่านช้อปปิ้งชื่อดัง', vi: 'Đúng rồi! 명동역 là ga tại khu mua sắm nổi tiếng.', es: '¡Correcto! 명동역 es la estación en el famoso distrito comercial.' },
      },
      {
        id: 'b',
        korean: '을지로입구역',
        romanization: 'Euljiro-ipgu-yeok',
        translation: { en: 'Euljiro Entrance Station', ja: '乙支路入口駅', zh: '乙支路入口站', th: 'สถานีอึลจิโรอิปกู', vi: 'Ga Euljiro-ipgu', es: 'Estación Euljiro Entrada' },
        isCorrect: false,
        hint: { en: 'Euljiro is a nearby street', ja: '乙支路は近くの通りです', zh: '乙支路是附近的街道', th: 'อึลจิโรคือถนนใกล้เคียง', vi: 'Euljiro là con phố gần đó', es: 'Euljiro es una calle cercana' },
        feedback: { en: 'This is Euljiro Entrance Station, one stop away.', ja: 'これは乙支路入口駅、一駅隣です。', zh: '这是乙支路入口站，差一站。', th: 'นี่คือสถานีอึลจิโรอิปกู ห่างไปหนึ่งป้าย', vi: 'Đây là ga Euljiro-ipgu, cách một trạm.', es: 'Esta es la estación Euljiro Entrada, a una parada.' },
      },
      {
        id: 'c',
        korean: '충무로역',
        romanization: 'Chungmuro-yeok',
        translation: { en: 'Chungmuro Station', ja: '忠武路駅', zh: '忠武路站', th: 'สถานีชุงมูโร', vi: 'Ga Chungmuro', es: 'Estación Chungmuro' },
        isCorrect: false,
        hint: { en: 'Chungmuro is the film district', ja: '忠武路は映画の街です', zh: '忠武路是电影区', th: 'ชุงมูโรคือย่านภาพยนตร์', vi: 'Chungmuro là khu điện ảnh', es: 'Chungmuro es el distrito del cine' },
        feedback: { en: 'This is Chungmuro Station, known for cinema.', ja: 'これは映画で有名な忠武路駅です。', zh: '这是以电影闻名的忠武路站。', th: 'นี่คือสถานีชุงมูโร มีชื่อเสียงด้านภาพยนตร์', vi: 'Đây là ga Chungmuro, nổi tiếng về điện ảnh.', es: 'Esta es la estación Chungmuro, conocida por el cine.' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '명동', romanization: 'myeongdong', meaning: { en: 'Myeongdong (shopping area)', ja: '明洞（ショッピングエリア）', zh: '明洞（购物区）', th: 'เมียงดง (ย่านช้อปปิ้ง)', vi: 'Myeongdong (khu mua sắm)', es: 'Myeongdong (zona comercial)' } },
      ],
    },
    xpReward: 50,
  },
  // Gangnam
  {
    id: 'gangnam-station',
    transportType: 'subway',
    destinationId: 'gangnam',
    type: 'station-name',
    scenario: {
      en: 'You need to find "Gangnam Station" on the subway map.',
      ja: '地下鉄の路線図で「江南駅」を探す必要があります。',
      zh: '您需要在地铁图上找到"江南站"。',
      th: 'คุณต้องหา "สถานีคังนัม" บนแผนที่รถไฟใต้ดิน',
      vi: 'Bạn cần tìm "Ga Gangnam" trên bản đồ tàu điện ngầm.',
      es: 'Necesitas encontrar "Estación Gangnam" en el mapa del metro.',
    },
    question: {
      en: 'Which one is "Gangnam Station"?',
      ja: '「江南駅」はどれですか？',
      zh: '哪个是"江南站"？',
      th: 'อันไหนคือ "สถานีคังนัม"?',
      vi: 'Đâu là "Ga Gangnam"?',
      es: '¿Cuál es "Estación Gangnam"?',
    },
    targetKorean: '강남역',
    choices: [
      {
        id: 'a',
        korean: '역삼역',
        romanization: 'Yeoksam-yeok',
        translation: { en: 'Yeoksam Station', ja: '駅三駅', zh: '驿三站', th: 'สถานียอกซัม', vi: 'Ga Yeoksam', es: 'Estación Yeoksam' },
        isCorrect: false,
        hint: { en: 'Yeoksam is the next station', ja: '駅三は次の駅です', zh: '驿三是下一站', th: 'ยอกซัมคือสถานีถัดไป', vi: 'Yeoksam là ga tiếp theo', es: 'Yeoksam es la siguiente estación' },
        feedback: { en: 'This is Yeoksam Station, not Gangnam.', ja: 'これは駅三駅で、江南ではありません。', zh: '这是驿三站，不是江南站。', th: 'นี่คือสถานียอกซัม ไม่ใช่คังนัม', vi: 'Đây là ga Yeoksam, không phải Gangnam.', es: 'Esta es la estación Yeoksam, no Gangnam.' },
      },
      {
        id: 'b',
        korean: '강남역',
        romanization: 'Gangnam-yeok',
        translation: { en: 'Gangnam Station', ja: '江南駅', zh: '江南站', th: 'สถานีคังนัม', vi: 'Ga Gangnam', es: 'Estación Gangnam' },
        isCorrect: true,
        hint: { en: '강남 = South of the river (wealthy area)', ja: '강남 = 川の南（富裕エリア）', zh: '강남 = 江南（富裕区）', th: '강남 = ใต้แม่น้ำ (ย่านร่ำรวย)', vi: '강남 = Phía nam sông (khu giàu có)', es: '강남 = Sur del río (zona rica)' },
        feedback: { en: 'Correct! 강남역 is the famous Gangnam Station!', ja: '正解！강남역は有名な江南駅です！', zh: '正确！강남역是著名的江南站！', th: 'ถูกต้อง! 강남역 คือสถานีคังนัมที่มีชื่อเสียง!', vi: 'Đúng rồi! 강남역 là ga Gangnam nổi tiếng!', es: '¡Correcto! 강남역 es la famosa estación Gangnam!' },
      },
      {
        id: 'c',
        korean: '선릉역',
        romanization: 'Seolleung-yeok',
        translation: { en: 'Seolleung Station', ja: '宣陵駅', zh: '宣陵站', th: 'สถานีซอลลึง', vi: 'Ga Seolleung', es: 'Estación Seolleung' },
        isCorrect: false,
        hint: { en: 'Seolleung has royal tombs nearby', ja: '宣陵には王陵があります', zh: '宣陵附近有王陵', th: 'ซอลลึงมีสุสานหลวงใกล้ๆ', vi: 'Seolleung có lăng mộ hoàng gia gần đó', es: 'Seolleung tiene tumbas reales cerca' },
        feedback: { en: 'This is Seolleung Station, known for royal tombs.', ja: 'これは王陵で有名な宣陵駅です。', zh: '这是以王陵闻名的宣陵站。', th: 'นี่คือสถานีซอลลึง มีชื่อเสียงเรื่องสุสานหลวง', vi: 'Đây là ga Seolleung, nổi tiếng với lăng mộ hoàng gia.', es: 'Esta es la estación Seolleung, conocida por las tumbas reales.' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '강남', romanization: 'gangnam', meaning: { en: 'South of the river', ja: '江南', zh: '江南', th: 'ใต้แม่น้ำ', vi: 'Phía nam sông', es: 'Sur del río' } },
        { korean: '강', romanization: 'gang', meaning: { en: 'River', ja: '川', zh: '江', th: 'แม่น้ำ', vi: 'Sông', es: 'Río' } },
      ],
    },
    xpReward: 50,
  },
];

// ============================================
// TRANSPORT DIALOGUE QUIZZES
// ============================================

export const dialogueQuizzes: TransportQuiz[] = [
  // General "Where are you going?" dialogue
  {
    id: 'where-going-subway',
    transportType: 'subway',
    destinationId: 'general',
    type: 'dialogue',
    scenario: {
      en: 'A friendly local on the subway asks where you are going.',
      ja: '地下鉄で親切な地元の人があなたに行き先を尋ねます。',
      zh: '地铁上一位友善的当地人问你要去哪里。',
      th: 'คนท้องถิ่นที่เป็นมิตรบนรถไฟใต้ดินถามว่าคุณจะไปไหน',
      vi: 'Một người địa phương thân thiện trên tàu điện ngầm hỏi bạn đi đâu.',
      es: 'Un local amable en el metro te pregunta a dónde vas.',
    },
    question: {
      en: '"어디로 가세요?" - How do you respond that you\'re going to Hongdae?',
      ja: '「어디로 가세요?」- 弘大に行くとどう答えますか？',
      zh: '"어디로 가세요?" - 你要如何回答说你要去弘大？',
      th: '"어디로 가세요?" - คุณจะตอบว่าจะไปฮงแดอย่างไร?',
      vi: '"어디로 가세요?" - Bạn trả lời thế nào rằng bạn đang đi Hongdae?',
      es: '"어디로 가세요?" - ¿Cómo respondes que vas a Hongdae?',
    },
    choices: [
      {
        id: 'a',
        korean: '홍대입구역 가요',
        romanization: 'Hongdae-ipgu-yeok gayo',
        translation: { en: "I'm going to Hongdae Station", ja: '弘大入口駅に行きます', zh: '我去弘大入口站', th: 'ฉันไปสถานีฮงแดอิปกู', vi: 'Tôi đi ga Hongdae-ipgu', es: 'Voy a la estación Hongdae' },
        isCorrect: true,
        hint: { en: '가요 = I go / am going', ja: '가요 = 行きます', zh: '가요 = 我去', th: '가요 = ฉันไป', vi: '가요 = Tôi đi', es: '가요 = Voy' },
        feedback: { en: 'Perfect! 가요 is a polite way to say "I\'m going".', ja: '完璧！가요は「行きます」の丁寧な表現です。', zh: '完美！가요是"我去"的礼貌说法。', th: 'สมบูรณ์แบบ! 가요 เป็นวิธีสุภาพในการพูดว่า "ฉันไป"', vi: 'Hoàn hảo! 가요 là cách lịch sự nói "Tôi đang đi".', es: '¡Perfecto! 가요 es una forma cortés de decir "Voy".' },
      },
      {
        id: 'b',
        korean: '어디예요?',
        romanization: 'eodi-yeyo?',
        translation: { en: 'Where is it?', ja: 'どこですか？', zh: '在哪里？', th: 'มันอยู่ที่ไหน?', vi: 'Nó ở đâu?', es: '¿Dónde está?' },
        isCorrect: false,
        hint: { en: 'This is asking "where", not answering', ja: 'これは「どこ」を聞いています', zh: '这是在问"哪里"，不是回答', th: 'นี่คือการถาม "ที่ไหน" ไม่ใช่คำตอบ', vi: 'Đây là hỏi "ở đâu", không phải trả lời', es: 'Esto es preguntar "dónde", no responder' },
        feedback: { en: 'This asks "Where is it?" - you need to answer where you\'re going!', ja: 'これは「どこですか？」と聞いています - 行き先を答える必要があります！', zh: '这是在问"在哪里？" - 你需要回答你要去哪里！', th: 'นี่ถามว่า "มันอยู่ที่ไหน?" - คุณต้องตอบว่าจะไปไหน!', vi: 'Đây hỏi "Nó ở đâu?" - bạn cần trả lời bạn đi đâu!', es: 'Esto pregunta "¿Dónde está?" - ¡necesitas responder a dónde vas!' },
      },
      {
        id: 'c',
        korean: '감사합니다',
        romanization: 'gamsahamnida',
        translation: { en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', th: 'ขอบคุณ', vi: 'Cảm ơn', es: 'Gracias' },
        isCorrect: false,
        hint: { en: 'This means "thank you"', ja: 'これは「ありがとう」の意味です', zh: '这是"谢谢"的意思', th: 'นี่หมายถึง "ขอบคุณ"', vi: 'Đây có nghĩa là "cảm ơn"', es: 'Esto significa "gracias"' },
        feedback: { en: 'Polite, but this means "thank you", not your destination!', ja: '丁寧ですが、これは「ありがとう」で、行き先ではありません！', zh: '很礼貌，但这是"谢谢"，不是你的目的地！', th: 'สุภาพ แต่นี่หมายถึง "ขอบคุณ" ไม่ใช่จุดหมายของคุณ!', vi: 'Lịch sự, nhưng đây có nghĩa "cảm ơn", không phải điểm đến của bạn!', es: '¡Educado, pero esto significa "gracias", no tu destino!' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '어디', romanization: 'eodi', meaning: { en: 'Where', ja: 'どこ', zh: '哪里', th: 'ที่ไหน', vi: 'Ở đâu', es: 'Dónde' } },
        { korean: '가요', romanization: 'gayo', meaning: { en: 'Go (polite)', ja: '行きます', zh: '去', th: 'ไป (สุภาพ)', vi: 'Đi (lịch sự)', es: 'Ir (cortés)' } },
        { korean: '~로', romanization: '-ro', meaning: { en: 'To (direction)', ja: '~へ', zh: '往~', th: 'ไปยัง', vi: 'Đến', es: 'Hacia' } },
      ],
      tip: {
        en: '"어디로 가세요?" literally means "Where to are you going?" - a common question from helpful locals!',
        ja: '「어디로 가세요?」は文字通り「どこへ行きますか？」- 親切な地元の人からよくある質問です！',
        zh: '"어디로 가세요?"字面意思是"你要去哪里？" - 热心当地人常问的问题！',
        th: '"어디로 가세요?" แปลตรงตัวว่า "คุณจะไปไหน?" - คำถามทั่วไปจากคนท้องถิ่นที่ช่วยเหลือดี!',
        vi: '"어디로 가세요?" nghĩa đen là "Bạn đi đâu?" - câu hỏi phổ biến từ người địa phương tốt bụng!',
        es: '"어디로 가세요?" significa literalmente "¿A dónde vas?" - ¡una pregunta común de locales amables!',
      },
    },
    xpReward: 75,
  },
  // Taxi destination dialogue
  {
    id: 'taxi-destination',
    transportType: 'taxi',
    destinationId: 'general',
    type: 'dialogue',
    scenario: {
      en: 'You get in a taxi. The driver asks where you want to go.',
      ja: 'タクシーに乗りました。運転手が行き先を聞きます。',
      zh: '你上了出租车。司机问你要去哪里。',
      th: 'คุณขึ้นแท็กซี่ คนขับถามว่าคุณอยากไปไหน',
      vi: 'Bạn lên taxi. Tài xế hỏi bạn muốn đi đâu.',
      es: 'Subes a un taxi. El conductor pregunta a dónde quieres ir.',
    },
    question: {
      en: 'How do you tell the taxi driver to go to Myeongdong?',
      ja: '明洞に行くようにタクシー運転手にどう伝えますか？',
      zh: '你如何告诉出租车司机去明洞？',
      th: 'คุณจะบอกคนขับแท็กซี่ให้ไปเมียงดงอย่างไร?',
      vi: 'Bạn nói với tài xế taxi đi Myeongdong thế nào?',
      es: '¿Cómo le dices al taxista que vaya a Myeongdong?',
    },
    choices: [
      {
        id: 'a',
        korean: '명동 가주세요',
        romanization: 'Myeongdong gajuseyo',
        translation: { en: 'Please go to Myeongdong', ja: '明洞に行ってください', zh: '请去明洞', th: 'กรุณาไปเมียงดง', vi: 'Làm ơn đi Myeongdong', es: 'Por favor vaya a Myeongdong' },
        isCorrect: true,
        hint: { en: '가주세요 = please go', ja: '가주세요 = 行ってください', zh: '가주세요 = 请去', th: '가주세요 = กรุณาไป', vi: '가주세요 = làm ơn đi', es: '가주세요 = por favor vaya' },
        feedback: { en: 'Perfect! "가주세요" is the polite way to ask someone to go somewhere.', ja: '完璧！「가주세요」は誰かにどこかに行くよう頼む丁寧な表現です。', zh: '完美！"가주세요"是请别人去某处的礼貌说法。', th: 'สมบูรณ์แบบ! "가주세요" เป็นวิธีสุภาพในการขอให้ใครไปที่ไหนสักแห่ง', vi: 'Hoàn hảo! "가주세요" là cách lịch sự yêu cầu ai đó đi đâu đó.', es: '¡Perfecto! "가주세요" es la forma cortés de pedir a alguien que vaya a algún lugar.' },
      },
      {
        id: 'b',
        korean: '명동 어디예요?',
        romanization: 'Myeongdong eodiyeyo?',
        translation: { en: 'Where is Myeongdong?', ja: '明洞はどこですか？', zh: '明洞在哪里？', th: 'เมียงดงอยู่ที่ไหน?', vi: 'Myeongdong ở đâu?', es: '¿Dónde está Myeongdong?' },
        isCorrect: false,
        hint: { en: 'This asks for location, not direction', ja: 'これは場所を聞いています', zh: '这是问地点，不是方向', th: 'นี่ถามตำแหน่ง ไม่ใช่ทิศทาง', vi: 'Đây hỏi vị trí, không phải hướng', es: 'Esto pregunta por ubicación, no dirección' },
        feedback: { en: 'This asks "Where is Myeongdong?" - the driver already knows!', ja: 'これは「明洞はどこですか？」と聞いています - 運転手は知っています！', zh: '这是在问"明洞在哪里？" - 司机已经知道了！', th: 'นี่ถามว่า "เมียงดงอยู่ที่ไหน?" - คนขับรู้อยู่แล้ว!', vi: 'Đây hỏi "Myeongdong ở đâu?" - tài xế đã biết rồi!', es: 'Esto pregunta "¿Dónde está Myeongdong?" - ¡el conductor ya lo sabe!' },
      },
      {
        id: 'c',
        korean: '얼마예요?',
        romanization: 'eolmayeyo?',
        translation: { en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่?', vi: 'Bao nhiêu tiền?', es: '¿Cuánto cuesta?' },
        isCorrect: false,
        hint: { en: 'This asks about price', ja: 'これは値段を聞いています', zh: '这是问价格', th: 'นี่ถามเรื่องราคา', vi: 'Đây hỏi về giá', es: 'Esto pregunta sobre el precio' },
        feedback: { en: 'This asks "How much?" - ask this after arriving!', ja: 'これは「いくら？」と聞いています - 到着後に聞きましょう！', zh: '这是问"多少钱？" - 到达后再问！', th: 'นี่ถามว่า "เท่าไหร่?" - ถามหลังจากถึงแล้ว!', vi: 'Đây hỏi "Bao nhiêu?" - hỏi sau khi đến!', es: 'Esto pregunta "¿Cuánto?" - ¡pregunta esto después de llegar!' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '가주세요', romanization: 'gajuseyo', meaning: { en: 'Please go', ja: '行ってください', zh: '请去', th: 'กรุณาไป', vi: 'Làm ơn đi', es: 'Por favor vaya' } },
        { korean: '~주세요', romanization: '-juseyo', meaning: { en: 'Please (do something)', ja: '~ください', zh: '请~', th: 'กรุณา~', vi: 'Làm ơn~', es: 'Por favor~' } },
      ],
    },
    xpReward: 75,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getTransportOptions = (): TransportOption[] => {
  return transportOptions;
};

export const getStationQuiz = (destinationId: string): TransportQuiz | undefined => {
  return stationQuizzes.find(q => q.destinationId === destinationId);
};

export const getDialogueQuiz = (transportType: string): TransportQuiz | undefined => {
  return dialogueQuizzes.find(q =>
    q.transportType === transportType || q.destinationId === 'general'
  );
};

// Generate dynamic dialogue quiz based on selected transport and destination
export const getDynamicDialogueQuiz = (
  transportType: string,
  destination: { korean: string; romanization: string; id: string }
): TransportQuiz => {

  // TAXI - Tell the driver where to go
  if (transportType === 'taxi') {
    return {
      id: `taxi-dialogue-${destination.id}`,
      transportType: 'taxi',
      destinationId: destination.id,
      type: 'dialogue',
      scenario: {
        en: 'You get in a taxi. The driver asks where you want to go.',
        ja: 'タクシーに乗りました。運転手が行き先を聞きます。',
        zh: '你上了出租车。司机问你要去哪里。',
        th: 'คุณขึ้นแท็กซี่ คนขับถามว่าคุณอยากไปไหน',
        vi: 'Bạn lên taxi. Tài xế hỏi bạn muốn đi đâu.',
        es: 'Subes a un taxi. El conductor pregunta a dónde quieres ir.',
      },
      question: {
        en: `How do you tell the taxi driver to go to ${destination.romanization}?`,
        ja: `${destination.romanization}に行くようにタクシー運転手にどう伝えますか？`,
        zh: `你如何告诉出租车司机去${destination.romanization}？`,
        th: `คุณจะบอกคนขับแท็กซี่ให้ไป${destination.romanization}อย่างไร?`,
        vi: `Bạn nói với tài xế taxi đi ${destination.romanization} thế nào?`,
        es: `¿Cómo le dices al taxista que vaya a ${destination.romanization}?`,
      },
      choices: [
        {
          id: 'a',
          korean: `${destination.korean} 가주세요`,
          romanization: `${destination.romanization} gajuseyo`,
          translation: { en: `Please go to ${destination.romanization}`, ja: `${destination.romanization}に行ってください`, zh: `请去${destination.romanization}`, th: `กรุณาไป${destination.romanization}`, vi: `Làm ơn đi ${destination.romanization}`, es: `Por favor vaya a ${destination.romanization}` },
          isCorrect: true,
          hint: { en: '가주세요 = please go', ja: '가주세요 = 行ってください', zh: '가주세요 = 请去', th: '가주세요 = กรุณาไป', vi: '가주세요 = làm ơn đi', es: '가주세요 = por favor vaya' },
          feedback: { en: 'Perfect! "가주세요" is the polite way to ask someone to go somewhere.', ja: '完璧！「가주세요」は誰かにどこかに行くよう頼む丁寧な表現です。', zh: '完美！"가주세요"是请别人去某处的礼貌说法。', th: 'สมบูรณ์แบบ! "가주세요" เป็นวิธีสุภาพในการขอให้ใครไปที่ไหนสักแห่ง', vi: 'Hoàn hảo! "가주세요" là cách lịch sự yêu cầu ai đó đi đâu đó.', es: '¡Perfecto! "가주세요" es la forma cortés de pedir a alguien que vaya a algún lugar.' },
        },
        {
          id: 'b',
          korean: `${destination.korean} 어디예요?`,
          romanization: `${destination.romanization} eodiyeyo?`,
          translation: { en: `Where is ${destination.romanization}?`, ja: `${destination.romanization}はどこですか？`, zh: `${destination.romanization}在哪里？`, th: `${destination.romanization}อยู่ที่ไหน?`, vi: `${destination.romanization} ở đâu?`, es: `¿Dónde está ${destination.romanization}?` },
          isCorrect: false,
          hint: { en: 'This is asking WHERE, not telling where to GO', ja: 'これは「どこ」を聞いていて、「行く」ではありません', zh: '这是在问在哪里，不是告诉要去哪里', th: 'นี่คือการถาม ที่ไหน ไม่ใช่บอกให้ไป', vi: 'Đây là hỏi Ở ĐÂU, không phải nói đi đâu', es: 'Esto es preguntar DÓNDE, no decir a dónde IR' },
          feedback: { en: 'This asks "Where is it?" - you need to tell them where to go!', ja: 'これは「どこですか？」と聞いています - 行き先を伝える必要があります！', zh: '这是在问"在哪里？" - 你需要告诉他们去哪里！', th: 'นี่ถามว่า "อยู่ที่ไหน?" - คุณต้องบอกพวกเขาว่าจะไปไหน!', vi: 'Đây hỏi "Ở đâu?" - bạn cần nói cho họ biết đi đâu!', es: 'Esto pregunta "¿Dónde está?" - ¡necesitas decirles a dónde ir!' },
        },
        {
          id: 'c',
          korean: '얼마예요?',
          romanization: 'eolmayeyo?',
          translation: { en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่?', vi: 'Bao nhiêu tiền?', es: '¿Cuánto cuesta?' },
          isCorrect: false,
          hint: { en: 'This asks about price - ask after arriving', ja: 'これは料金を聞いています - 到着後に聞きましょう', zh: '这是问价格 - 到达后再问', th: 'นี่ถามเรื่องราคา - ถามหลังถึงแล้ว', vi: 'Đây hỏi về giá - hỏi sau khi đến', es: 'Esto pregunta el precio - pregunta después de llegar' },
          feedback: { en: 'Good question for later! But first tell the driver where to go.', ja: '後で聞くといい質問です！でもまず運転手に行き先を伝えましょう。', zh: '这个问题以后问好！但首先告诉司机去哪里。', th: 'คำถามดีไว้ทีหลัง! แต่ก่อนอื่นบอกคนขับว่าจะไปไหน', vi: 'Câu hỏi hay để sau! Nhưng trước hết hãy nói tài xế đi đâu.', es: '¡Buena pregunta para después! Pero primero dile al conductor a dónde ir.' },
        },
      ],
      teaching: {
        vocabulary: [
          { korean: '가주세요', romanization: 'gajuseyo', meaning: { en: 'Please go (to)', ja: '行ってください', zh: '请去', th: 'กรุณาไป', vi: 'Làm ơn đi', es: 'Por favor vaya' } },
          { korean: '얼마예요', romanization: 'eolmayeyo', meaning: { en: 'How much is it?', ja: 'いくらですか', zh: '多少钱', th: 'เท่าไหร่', vi: 'Bao nhiêu', es: 'Cuánto cuesta' } },
        ],
        tip: {
          en: 'Tip: Korean taxis use meters. You can pay by card (카드) or cash (현금).',
          ja: 'ヒント：韓国のタクシーはメーター制です。カード（카드）か現金（현금）で払えます。',
          zh: '提示：韩国出租车使用计价器。可以用卡（카드）或现金（현금）支付。',
          th: 'เคล็ดลับ: แท็กซี่เกาหลีใช้มิเตอร์ จ่ายด้วยบัตร (카드) หรือเงินสด (현금) ได้',
          vi: 'Mẹo: Taxi Hàn Quốc dùng đồng hồ. Bạn có thể trả bằng thẻ (카드) hoặc tiền mặt (현금).',
          es: 'Consejo: Los taxis coreanos usan taxímetro. Puedes pagar con tarjeta (카드) o efectivo (현금).',
        },
      },
      xpReward: 75,
    };
  }

  // RENTAL CAR - Ask about navigation/directions
  if (transportType === 'rentcar') {
    return {
      id: `rentcar-dialogue-${destination.id}`,
      transportType: 'bus', // type for quiz compatibility
      destinationId: destination.id,
      type: 'dialogue',
      scenario: {
        en: `You picked up your rental car. You need to set the navigation to ${destination.romanization}.`,
        ja: `レンタカーを借りました。${destination.romanization}へのナビを設定する必要があります。`,
        zh: `你取了租的车。你需要设置导航去${destination.romanization}。`,
        th: `คุณรับรถเช่าแล้ว คุณต้องตั้งค่าการนำทางไป${destination.romanization}`,
        vi: `Bạn đã lấy xe thuê. Bạn cần cài đặt điều hướng đến ${destination.romanization}.`,
        es: `Recogiste tu coche de alquiler. Necesitas configurar la navegación a ${destination.romanization}.`,
      },
      question: {
        en: 'How do you ask "Where is the parking lot?"',
        ja: '「駐車場はどこですか？」とどう聞きますか？',
        zh: '你如何问"停车场在哪里？"',
        th: 'คุณจะถามว่า "ที่จอดรถอยู่ที่ไหน?" อย่างไร?',
        vi: 'Bạn hỏi "Bãi đỗ xe ở đâu?" thế nào?',
        es: '¿Cómo preguntas "Dónde está el estacionamiento?"',
      },
      choices: [
        {
          id: 'a',
          korean: '주차장 어디예요?',
          romanization: 'juchajang eodiyeyo?',
          translation: { en: 'Where is the parking lot?', ja: '駐車場はどこですか？', zh: '停车场在哪里？', th: 'ที่จอดรถอยู่ที่ไหน?', vi: 'Bãi đỗ xe ở đâu?', es: '¿Dónde está el estacionamiento?' },
          isCorrect: true,
          hint: { en: '주차장 = parking lot, 어디예요 = where is', ja: '주차장 = 駐車場、어디예요 = どこですか', zh: '주차장 = 停车场，어디예요 = 在哪里', th: '주차장 = ที่จอดรถ, 어디예요 = อยู่ที่ไหน', vi: '주차장 = bãi đỗ xe, 어디예요 = ở đâu', es: '주차장 = estacionamiento, 어디예요 = dónde está' },
          feedback: { en: 'Perfect! "주차장 어디예요?" is essential for driving in Korea.', ja: '完璧！「주차장 어디예요?」は韓国でのドライブに必須の表現です。', zh: '完美！"주차장 어디예요?"是在韩国开车必会的表达。', th: 'สมบูรณ์แบบ! "주차장 어디예요?" จำเป็นสำหรับการขับรถในเกาหลี', vi: 'Hoàn hảo! "주차장 어디예요?" rất cần thiết khi lái xe ở Hàn Quốc.', es: '¡Perfecto! "주차장 어디예요?" es esencial para conducir en Corea.' },
        },
        {
          id: 'b',
          korean: '주유소 어디예요?',
          romanization: 'juyuso eodiyeyo?',
          translation: { en: 'Where is the gas station?', ja: 'ガソリンスタンドはどこですか？', zh: '加油站在哪里？', th: 'ปั๊มน้ำมันอยู่ที่ไหน?', vi: 'Trạm xăng ở đâu?', es: '¿Dónde está la gasolinera?' },
          isCorrect: false,
          hint: { en: '주유소 = gas station - also useful!', ja: '주유소 = ガソリンスタンド - これも便利！', zh: '주유소 = 加油站 - 也很有用！', th: '주유소 = ปั๊มน้ำมัน - มีประโยชน์เช่นกัน!', vi: '주유소 = trạm xăng - cũng hữu ích!', es: '주유소 = gasolinera - ¡también útil!' },
          feedback: { en: 'Great phrase to know! But right now you need parking.', ja: '覚えておくと便利な表現です！でも今は駐車場が必要です。', zh: '这个短语很有用！但现在你需要找停车场。', th: 'วลีที่ดีที่ควรรู้! แต่ตอนนี้คุณต้องหาที่จอดรถ', vi: 'Cụm từ hay cần biết! Nhưng bây giờ bạn cần tìm bãi đỗ xe.', es: '¡Buena frase para saber! Pero ahora necesitas estacionamiento.' },
        },
        {
          id: 'c',
          korean: '렌터카 반납 어디예요?',
          romanization: 'renteoka bannap eodiyeyo?',
          translation: { en: 'Where is the car return?', ja: 'レンタカー返却はどこですか？', zh: '还车点在哪里？', th: 'ที่คืนรถเช่าอยู่ที่ไหน?', vi: 'Trả xe thuê ở đâu?', es: '¿Dónde devuelvo el coche?' },
          isCorrect: false,
          hint: { en: '반납 = return - you just started!', ja: '반납 = 返却 - まだ始めたばかりです！', zh: '반납 = 还车 - 你才刚开始！', th: '반납 = คืน - คุณเพิ่งเริ่มต้น!', vi: '반납 = trả - bạn mới bắt đầu!', es: '반납 = devolución - ¡acabas de empezar!' },
          feedback: { en: 'You\'ll need this later! For now, find parking at your destination.', ja: 'これは後で必要になります！今は目的地の駐車場を探しましょう。', zh: '这个以后会用到！现在先找目的地的停车场。', th: 'คุณจะต้องใช้ทีหลัง! ตอนนี้หาที่จอดรถที่จุดหมายก่อน', vi: 'Bạn sẽ cần điều này sau! Bây giờ hãy tìm bãi đỗ xe tại điểm đến.', es: '¡Necesitarás esto después! Por ahora, encuentra estacionamiento en tu destino.' },
        },
      ],
      teaching: {
        vocabulary: [
          { korean: '주차장', romanization: 'juchajang', meaning: { en: 'Parking lot', ja: '駐車場', zh: '停车场', th: 'ที่จอดรถ', vi: 'Bãi đỗ xe', es: 'Estacionamiento' } },
          { korean: '주유소', romanization: 'juyuso', meaning: { en: 'Gas station', ja: 'ガソリンスタンド', zh: '加油站', th: 'ปั๊มน้ำมัน', vi: 'Trạm xăng', es: 'Gasolinera' } },
          { korean: '반납', romanization: 'bannap', meaning: { en: 'Return', ja: '返却', zh: '归还', th: 'คืน', vi: 'Trả lại', es: 'Devolución' } },
        ],
        tip: {
          en: 'Tip: Most Korean parking lots are underground (지하주차장). Look for "P" signs!',
          ja: 'ヒント：韓国の駐車場のほとんどは地下（지하주차장）にあります。「P」サインを探しましょう！',
          zh: '提示：大多数韩国停车场是地下的（지하주차장）。找"P"标志！',
          th: 'เคล็ดลับ: ที่จอดรถส่วนใหญ่ในเกาหลีอยู่ใต้ดิน (지하주차장) มองหาป้าย "P"!',
          vi: 'Mẹo: Hầu hết bãi đỗ xe Hàn Quốc là ngầm (지하주차장). Tìm biển "P"!',
          es: 'Consejo: La mayoría de los estacionamientos coreanos son subterráneos (지하주차장). ¡Busca el signo "P"!',
        },
      },
      xpReward: 75,
    };
  }

  // TOUR BUS - Buy ticket and ask about schedule
  if (transportType === 'tourbus') {
    return {
      id: `tourbus-dialogue-${destination.id}`,
      transportType: 'bus',
      destinationId: destination.id,
      type: 'dialogue',
      scenario: {
        en: 'You want to take the City Tour Bus. You need to buy a ticket first.',
        ja: 'シティツアーバスに乗りたいです。まずチケットを買う必要があります。',
        zh: '你想乘坐城市观光巴士。你需要先买票。',
        th: 'คุณอยากนั่งรถบัสทัวร์เมือง คุณต้องซื้อตั๋วก่อน',
        vi: 'Bạn muốn đi xe buýt tour thành phố. Bạn cần mua vé trước.',
        es: 'Quieres tomar el autobús turístico. Necesitas comprar un boleto primero.',
      },
      question: {
        en: 'How do you ask "Where can I buy a ticket?"',
        ja: '「チケットはどこで買えますか？」とどう聞きますか？',
        zh: '你如何问"在哪里可以买票？"',
        th: 'คุณจะถามว่า "ซื้อตั๋วได้ที่ไหน?" อย่างไร?',
        vi: 'Bạn hỏi "Mua vé ở đâu?" thế nào?',
        es: '¿Cómo preguntas "Dónde puedo comprar un boleto?"',
      },
      choices: [
        {
          id: 'a',
          korean: '표 어디서 사요?',
          romanization: 'pyo eodiseo sayo?',
          translation: { en: 'Where can I buy a ticket?', ja: 'チケットはどこで買えますか？', zh: '在哪里买票？', th: 'ซื้อตั๋วได้ที่ไหน?', vi: 'Mua vé ở đâu?', es: '¿Dónde puedo comprar un boleto?' },
          isCorrect: true,
          hint: { en: '표 = ticket, 어디서 = where, 사요 = buy', ja: '표 = チケット、어디서 = どこで、사요 = 買います', zh: '표 = 票，어디서 = 哪里，사요 = 买', th: '표 = ตั๋ว, 어디서 = ที่ไหน, 사요 = ซื้อ', vi: '표 = vé, 어디서 = ở đâu, 사요 = mua', es: '표 = boleto, 어디서 = dónde, 사요 = comprar' },
          feedback: { en: 'Perfect! This is exactly how tourists ask to buy tickets in Korea.', ja: '完璧！これは韓国で観光客がチケットを買う時の正確な表現です。', zh: '完美！这正是游客在韩国买票时问的方式。', th: 'สมบูรณ์แบบ! นี่คือวิธีที่นักท่องเที่ยวถามซื้อตั๋วในเกาหลี', vi: 'Hoàn hảo! Đây chính xác là cách du khách hỏi mua vé ở Hàn Quốc.', es: '¡Perfecto! Así es exactamente como los turistas preguntan para comprar boletos en Corea.' },
        },
        {
          id: 'b',
          korean: '표 얼마예요?',
          romanization: 'pyo eolmayeyo?',
          translation: { en: 'How much is the ticket?', ja: 'チケットはいくらですか？', zh: '票多少钱？', th: 'ตั๋วเท่าไหร่?', vi: 'Vé bao nhiêu tiền?', es: '¿Cuánto cuesta el boleto?' },
          isCorrect: false,
          hint: { en: 'This asks the price, not the location', ja: 'これは値段を聞いていて、場所ではありません', zh: '这是问价格，不是问地点', th: 'นี่ถามราคา ไม่ใช่สถานที่', vi: 'Đây hỏi giá, không phải địa điểm', es: 'Esto pregunta el precio, no el lugar' },
          feedback: { en: 'Good question! But first find out WHERE to buy tickets.', ja: '良い質問です！でもまずチケットをどこで買えるか確認しましょう。', zh: '好问题！但先要知道在哪里买票。', th: 'คำถามดี! แต่ก่อนอื่นหาว่าซื้อตั๋วได้ที่ไหน', vi: 'Câu hỏi hay! Nhưng trước hết hãy tìm xem mua vé Ở ĐÂU.', es: '¡Buena pregunta! Pero primero averigua DÓNDE comprar boletos.' },
        },
        {
          id: 'c',
          korean: '몇 시에 출발해요?',
          romanization: 'myeot sie chulbalhaeyo?',
          translation: { en: 'What time does it depart?', ja: '何時に出発しますか？', zh: '几点出发？', th: 'ออกกี่โมง?', vi: 'Mấy giờ khởi hành?', es: '¿A qué hora sale?' },
          isCorrect: false,
          hint: { en: 'This asks about departure time', ja: 'これは出発時間を聞いています', zh: '这是问出发时间', th: 'นี่ถามเวลาออกเดินทาง', vi: 'Đây hỏi về giờ khởi hành', es: 'Esto pregunta la hora de salida' },
          feedback: { en: 'Useful phrase! Ask this after getting your ticket.', ja: '便利な表現です！チケットを買った後に聞きましょう。', zh: '有用的短语！买票后再问。', th: 'วลีที่มีประโยชน์! ถามหลังจากได้ตั๋วแล้ว', vi: 'Cụm từ hữu ích! Hỏi sau khi có vé.', es: '¡Frase útil! Pregunta esto después de obtener tu boleto.' },
        },
      ],
      teaching: {
        vocabulary: [
          { korean: '표', romanization: 'pyo', meaning: { en: 'Ticket', ja: 'チケット', zh: '票', th: 'ตั๋ว', vi: 'Vé', es: 'Boleto' } },
          { korean: '사요', romanization: 'sayo', meaning: { en: 'Buy', ja: '買います', zh: '买', th: 'ซื้อ', vi: 'Mua', es: 'Comprar' } },
          { korean: '어디서', romanization: 'eodiseo', meaning: { en: 'Where (action)', ja: 'どこで', zh: '在哪里', th: 'ที่ไหน', vi: 'Ở đâu', es: 'Dónde' } },
        ],
        tip: {
          en: 'Tip: City Tour Buses often have multilingual audio guides. Ask "영어 안내 있어요?" (Is there English guidance?)',
          ja: 'ヒント：シティツアーバスには多言語音声ガイドがあることが多いです。「영어 안내 있어요?」（英語のガイドはありますか？）と聞いてみましょう。',
          zh: '提示：城市观光巴士通常有多语言语音导览。问"영어 안내 있어요?"（有英语导览吗？）',
          th: 'เคล็ดลับ: รถบัสทัวร์เมืองมักมีไกด์เสียงหลายภาษา ถามว่า "영어 안내 있어요?" (มีคำแนะนำภาษาอังกฤษไหม?)',
          vi: 'Mẹo: Xe buýt tour thành phố thường có hướng dẫn âm thanh đa ngôn ngữ. Hỏi "영어 안내 있어요?" (Có hướng dẫn tiếng Anh không?)',
          es: 'Consejo: Los autobuses turísticos a menudo tienen audioguías multilingües. Pregunta "영어 안내 있어요?" (¿Hay guía en inglés?)',
        },
      },
      xpReward: 75,
    };
  }

  // ELECTRIC BIKE - Ask about rental
  if (transportType === 'electric') {
    return {
      id: `electric-dialogue-${destination.id}`,
      transportType: 'bus',
      destinationId: destination.id,
      type: 'dialogue',
      scenario: {
        en: `You want to rent an electric bike to explore ${destination.romanization}.`,
        ja: `${destination.romanization}を探索するために電動自転車を借りたいです。`,
        zh: `你想租一辆电动自行车去探索${destination.romanization}。`,
        th: `คุณอยากเช่าจักรยานไฟฟ้าเพื่อสำรวจ${destination.romanization}`,
        vi: `Bạn muốn thuê xe đạp điện để khám phá ${destination.romanization}.`,
        es: `Quieres alquilar una bicicleta eléctrica para explorar ${destination.romanization}.`,
      },
      question: {
        en: 'How do you ask "I want to rent a bike"?',
        ja: '「自転車を借りたいです」とどう言いますか？',
        zh: '你如何说"我想租自行车"？',
        th: 'คุณจะพูดว่า "อยากเช่าจักรยาน" อย่างไร?',
        vi: 'Bạn nói "Tôi muốn thuê xe đạp" thế nào?',
        es: '¿Cómo dices "Quiero alquilar una bicicleta"?',
      },
      choices: [
        {
          id: 'a',
          korean: '자전거 빌리고 싶어요',
          romanization: 'jajeongeo billigo sipeoyo',
          translation: { en: 'I want to rent a bike', ja: '自転車を借りたいです', zh: '我想租自行车', th: 'อยากเช่าจักรยาน', vi: 'Tôi muốn thuê xe đạp', es: 'Quiero alquilar una bicicleta' },
          isCorrect: true,
          hint: { en: '빌리다 = to rent/borrow, ~고 싶어요 = want to', ja: '빌리다 = 借りる、~고 싶어요 = ~したい', zh: '빌리다 = 租/借，~고 싶어요 = 想要', th: '빌리다 = เช่า/ยืม, ~고 싶어요 = อยาก', vi: '빌리다 = thuê/mượn, ~고 싶어요 = muốn', es: '빌리다 = alquilar, ~고 싶어요 = quiero' },
          feedback: { en: 'Perfect! "~고 싶어요" expresses what you want to do.', ja: '完璧！「~고 싶어요」は自分がしたいことを表現します。', zh: '完美！"~고 싶어요"表达你想做的事。', th: 'สมบูรณ์แบบ! "~고 싶어요" แสดงสิ่งที่คุณอยากทำ', vi: 'Hoàn hảo! "~고 싶어요" diễn đạt điều bạn muốn làm.', es: '¡Perfecto! "~고 싶어요" expresa lo que quieres hacer.' },
        },
        {
          id: 'b',
          korean: '자전거 얼마예요?',
          romanization: 'jajeongeo eolmayeyo?',
          translation: { en: 'How much is the bike?', ja: '自転車はいくらですか？', zh: '自行车多少钱？', th: 'จักรยานเท่าไหร่?', vi: 'Xe đạp bao nhiêu tiền?', es: '¿Cuánto cuesta la bicicleta?' },
          isCorrect: false,
          hint: { en: 'This asks about price, not rental', ja: 'これは値段を聞いていて、レンタルではありません', zh: '这是问价格，不是租', th: 'นี่ถามราคา ไม่ใช่การเช่า', vi: 'Đây hỏi giá, không phải thuê', es: 'Esto pregunta el precio, no el alquiler' },
          feedback: { en: 'Good for asking price! But first say you want to rent.', ja: '値段を聞くのにいいです！でもまず借りたいと言いましょう。', zh: '问价格时很好！但先说你想租。', th: 'ดีสำหรับถามราคา! แต่ก่อนอื่นพูดว่าอยากเช่า', vi: 'Tốt để hỏi giá! Nhưng trước hết hãy nói bạn muốn thuê.', es: '¡Bueno para preguntar el precio! Pero primero di que quieres alquilar.' },
        },
        {
          id: 'c',
          korean: '헬멧 있어요?',
          romanization: 'helmet isseoyo?',
          translation: { en: 'Do you have a helmet?', ja: 'ヘルメットありますか？', zh: '有头盔吗？', th: 'มีหมวกกันน็อคไหม?', vi: 'Có mũ bảo hiểm không?', es: '¿Tienen casco?' },
          isCorrect: false,
          hint: { en: 'Good safety question for later!', ja: '後で聞くといい安全の質問です！', zh: '好的安全问题，待会儿问！', th: 'คำถามด้านความปลอดภัยที่ดีไว้ทีหลัง!', vi: 'Câu hỏi an toàn hay để sau!', es: '¡Buena pregunta de seguridad para después!' },
          feedback: { en: 'Great safety awareness! Ask this after renting.', ja: '安全意識が素晴らしい！レンタル後に聞きましょう。', zh: '很有安全意识！租车后再问。', th: 'ตระหนักเรื่องความปลอดภัยดีมาก! ถามหลังจากเช่า', vi: 'Ý thức an toàn tuyệt vời! Hỏi sau khi thuê.', es: '¡Gran conciencia de seguridad! Pregunta esto después de alquilar.' },
        },
      ],
      teaching: {
        vocabulary: [
          { korean: '자전거', romanization: 'jajeongeo', meaning: { en: 'Bicycle', ja: '自転車', zh: '自行车', th: 'จักรยาน', vi: 'Xe đạp', es: 'Bicicleta' } },
          { korean: '빌리다', romanization: 'billida', meaning: { en: 'To rent/borrow', ja: '借りる', zh: '租/借', th: 'เช่า/ยืม', vi: 'Thuê/mượn', es: 'Alquilar' } },
          { korean: '전기', romanization: 'jeongi', meaning: { en: 'Electric', ja: '電気', zh: '电', th: 'ไฟฟ้า', vi: 'Điện', es: 'Eléctrico' } },
        ],
        tip: {
          en: 'Tip: In Jeju, electric bikes (전기자전거) are perfect for coastal roads. Rental usually includes a helmet!',
          ja: 'ヒント：済州では、電動自転車（전기자전거）は海岸道路に最適です。レンタルには通常ヘルメットが含まれます！',
          zh: '提示：在济州，电动自行车（전기자전거）非常适合沿海公路。租车通常包含头盔！',
          th: 'เคล็ดลับ: ในเชจู จักรยานไฟฟ้า (전기자전거) เหมาะกับถนนริมชายฝั่ง การเช่ามักรวมหมวกกันน็อค!',
          vi: 'Mẹo: Ở Jeju, xe đạp điện (전기자전거) rất phù hợp với đường ven biển. Thuê xe thường bao gồm mũ bảo hiểm!',
          es: 'Consejo: En Jeju, las bicicletas eléctricas (전기자전거) son perfectas para las carreteras costeras. ¡El alquiler generalmente incluye casco!',
        },
      },
      xpReward: 75,
    };
  }

  // CITY BUS - Buy T-money card or ask about ticket
  if (transportType === 'bus') {
    return {
      id: `bus-dialogue-${destination.id}`,
      transportType: 'bus',
      destinationId: destination.id,
      type: 'dialogue',
      scenario: {
        en: `You want to take a bus to ${destination.romanization}. You need a T-money card or ticket.`,
        ja: `${destination.romanization}へバスで行きたいです。T-moneyカードか切符が必要です。`,
        zh: `你想乘公交车去${destination.romanization}。你需要T-money卡或车票。`,
        th: `คุณอยากนั่งรถบัสไป${destination.romanization} คุณต้องมีบัตร T-money หรือตั๋ว`,
        vi: `Bạn muốn đi xe buýt đến ${destination.romanization}. Bạn cần thẻ T-money hoặc vé.`,
        es: `Quieres tomar un autobús a ${destination.romanization}. Necesitas una tarjeta T-money o boleto.`,
      },
      question: {
        en: 'How do you ask "Where can I buy a T-money card?"',
        ja: '「T-moneyカードはどこで買えますか？」とどう聞きますか？',
        zh: '你如何问"在哪里可以买T-money卡？"',
        th: 'คุณจะถามว่า "ซื้อบัตร T-money ได้ที่ไหน?" อย่างไร?',
        vi: 'Bạn hỏi "Mua thẻ T-money ở đâu?" thế nào?',
        es: '¿Cómo preguntas "Dónde puedo comprar una tarjeta T-money?"',
      },
      choices: [
        {
          id: 'a',
          korean: '티머니 카드 어디서 사요?',
          romanization: 'timoni kadeu eodiseo sayo?',
          translation: { en: 'Where can I buy a T-money card?', ja: 'T-moneyカードはどこで買えますか？', zh: '在哪里买T-money卡？', th: 'ซื้อบัตร T-money ได้ที่ไหน?', vi: 'Mua thẻ T-money ở đâu?', es: '¿Dónde puedo comprar una tarjeta T-money?' },
          isCorrect: true,
          hint: { en: '어디서 사요 = where can I buy', ja: '어디서 사요 = どこで買えますか', zh: '어디서 사요 = 在哪里买', th: '어디서 사요 = ซื้อได้ที่ไหน', vi: '어디서 사요 = mua ở đâu', es: '어디서 사요 = dónde puedo comprar' },
          feedback: { en: 'Perfect! T-money cards are sold at convenience stores (편의점) and subway stations.', ja: '完璧！T-moneyカードはコンビニ（편의점）や地下鉄駅で売っています。', zh: '完美！T-money卡在便利店（편의점）和地铁站有售。', th: 'สมบูรณ์แบบ! บัตร T-money ขายที่ร้านสะดวกซื้อ (편의점) และสถานีรถไฟใต้ดิน', vi: 'Hoàn hảo! Thẻ T-money được bán tại cửa hàng tiện lợi (편의점) và ga tàu điện ngầm.', es: '¡Perfecto! Las tarjetas T-money se venden en tiendas de conveniencia (편의점) y estaciones de metro.' },
        },
        {
          id: 'b',
          korean: '버스 정류장 어디예요?',
          romanization: 'beoseu jeongryujang eodiyeyo?',
          translation: { en: 'Where is the bus stop?', ja: 'バス停はどこですか？', zh: '公交站在哪里？', th: 'ป้ายรถบัสอยู่ที่ไหน?', vi: 'Trạm xe buýt ở đâu?', es: '¿Dónde está la parada de autobús?' },
          isCorrect: false,
          hint: { en: 'This asks for bus stop location', ja: 'これはバス停の場所を聞いています', zh: '这是问公交站位置', th: 'นี่ถามตำแหน่งป้ายรถบัส', vi: 'Đây hỏi vị trí trạm xe buýt', es: 'Esto pregunta la ubicación de la parada' },
          feedback: { en: 'Good question! But first get a T-money card to pay for the bus.', ja: '良い質問です！でもまずバス代を払うためのT-moneyカードを手に入れましょう。', zh: '好问题！但先买张T-money卡来支付车费。', th: 'คำถามดี! แต่ก่อนอื่นหาบัตร T-money มาจ่ายค่ารถบัส', vi: 'Câu hỏi hay! Nhưng trước hết hãy mua thẻ T-money để trả tiền xe buýt.', es: '¡Buena pregunta! Pero primero consigue una tarjeta T-money para pagar el autobús.' },
        },
        {
          id: 'c',
          korean: '이 버스 어디 가요?',
          romanization: 'i beoseu eodi gayo?',
          translation: { en: 'Where does this bus go?', ja: 'このバスはどこに行きますか？', zh: '这辆公交车去哪里？', th: 'รถบัสคันนี้ไปไหน?', vi: 'Xe buýt này đi đâu?', es: '¿A dónde va este autobús?' },
          isCorrect: false,
          hint: { en: 'This asks the bus destination', ja: 'これはバスの行き先を聞いています', zh: '这是问公交车去哪里', th: 'นี่ถามจุดหมายของรถบัส', vi: 'Đây hỏi điểm đến của xe buýt', es: 'Esto pregunta el destino del autobús' },
          feedback: { en: 'Useful phrase! But first you need a way to pay.', ja: '便利な表現です！でもまず支払い方法が必要です。', zh: '有用的短语！但首先你需要付款方式。', th: 'วลีที่มีประโยชน์! แต่ก่อนอื่นคุณต้องมีวิธีจ่ายเงิน', vi: 'Cụm từ hữu ích! Nhưng trước hết bạn cần cách thanh toán.', es: '¡Frase útil! Pero primero necesitas una forma de pagar.' },
        },
      ],
      teaching: {
        vocabulary: [
          { korean: '티머니', romanization: 'timoni', meaning: { en: 'T-money (transit card)', ja: 'T-money（交通カード）', zh: 'T-money（交通卡）', th: 'T-money (บัตรขนส่ง)', vi: 'T-money (thẻ giao thông)', es: 'T-money (tarjeta de transporte)' } },
          { korean: '카드', romanization: 'kadeu', meaning: { en: 'Card', ja: 'カード', zh: '卡', th: 'บัตร', vi: 'Thẻ', es: 'Tarjeta' } },
          { korean: '충전', romanization: 'chungjeon', meaning: { en: 'Recharge/Top-up', ja: 'チャージ', zh: '充值', th: 'เติมเงิน', vi: 'Nạp tiền', es: 'Recargar' } },
        ],
        tip: {
          en: 'Tip: T-money works on buses, subways, and taxis! Recharge (충전) at convenience stores or subway machines.',
          ja: 'ヒント：T-moneyはバス、地下鉄、タクシーで使えます！コンビニや地下鉄の機械でチャージ（충전）できます。',
          zh: '提示：T-money可用于公交车、地铁和出租车！在便利店或地铁机器上充值（충전）。',
          th: 'เคล็ดลับ: T-money ใช้ได้กับรถบัส รถไฟใต้ดิน และแท็กซี่! เติมเงิน (충전) ที่ร้านสะดวกซื้อหรือเครื่องในสถานีรถไฟใต้ดิน',
          vi: 'Mẹo: T-money dùng được cho xe buýt, tàu điện ngầm và taxi! Nạp tiền (충전) tại cửa hàng tiện lợi hoặc máy bán vé tàu điện ngầm.',
          es: 'Consejo: ¡T-money funciona en autobuses, metro y taxis! Recarga (충전) en tiendas de conveniencia o máquinas del metro.',
        },
      },
      xpReward: 75,
    };
  }

  // SUBWAY - Ask about ticket/card and how to use
  return {
    id: `subway-dialogue-${destination.id}`,
    transportType: 'subway',
    destinationId: destination.id,
    type: 'dialogue',
    scenario: {
      en: `You want to take the subway to ${destination.romanization}. You're at the ticket machine.`,
      ja: `${destination.romanization}へ地下鉄で行きたいです。券売機の前にいます。`,
      zh: `你想乘地铁去${destination.romanization}。你在售票机前。`,
      th: `คุณอยากนั่งรถไฟใต้ดินไป${destination.romanization} คุณอยู่ที่เครื่องขายตั๋ว`,
      vi: `Bạn muốn đi tàu điện ngầm đến ${destination.romanization}. Bạn đang ở máy bán vé.`,
      es: `Quieres tomar el metro a ${destination.romanization}. Estás en la máquina de boletos.`,
    },
    question: {
      en: 'How do you ask "How do I buy a ticket?"',
      ja: '「切符はどうやって買いますか？」とどう聞きますか？',
      zh: '你如何问"怎么买票？"',
      th: 'คุณจะถามว่า "ซื้อตั๋วยังไง?" อย่างไร?',
      vi: 'Bạn hỏi "Mua vé như thế nào?" thế nào?',
      es: '¿Cómo preguntas "Cómo compro un boleto?"',
    },
    choices: [
      {
        id: 'a',
        korean: '표 어떻게 사요?',
        romanization: 'pyo eotteoke sayo?',
        translation: { en: 'How do I buy a ticket?', ja: '切符はどうやって買いますか？', zh: '怎么买票？', th: 'ซื้อตั๋วยังไง?', vi: 'Mua vé như thế nào?', es: '¿Cómo compro un boleto?' },
        isCorrect: true,
        hint: { en: '어떻게 = how, 사요 = buy', ja: '어떻게 = どうやって、사요 = 買います', zh: '어떻게 = 怎么，사요 = 买', th: '어떻게 = อย่างไร, 사요 = ซื้อ', vi: '어떻게 = như thế nào, 사요 = mua', es: '어떻게 = cómo, 사요 = comprar' },
        feedback: { en: 'Perfect! Staff will help you use the ticket machine.', ja: '完璧！スタッフが券売機の使い方を教えてくれます。', zh: '完美！工作人员会帮你使用售票机。', th: 'สมบูรณ์แบบ! พนักงานจะช่วยคุณใช้เครื่องขายตั๋ว', vi: 'Hoàn hảo! Nhân viên sẽ giúp bạn sử dụng máy bán vé.', es: '¡Perfecto! El personal te ayudará a usar la máquina de boletos.' },
      },
      {
        id: 'b',
        korean: '지하철역 어디예요?',
        romanization: 'jihacheolyeok eodiyeyo?',
        translation: { en: 'Where is the subway station?', ja: '地下鉄駅はどこですか？', zh: '地铁站在哪里？', th: 'สถานีรถไฟใต้ดินอยู่ที่ไหน?', vi: 'Ga tàu điện ngầm ở đâu?', es: '¿Dónde está la estación de metro?' },
        isCorrect: false,
        hint: { en: 'You\'re already at the station!', ja: 'もう駅にいます！', zh: '你已经在车站了！', th: 'คุณอยู่ที่สถานีแล้ว!', vi: 'Bạn đã ở ga rồi!', es: '¡Ya estás en la estación!' },
        feedback: { en: 'You\'re already here! Now you need to buy a ticket.', ja: 'もうここにいます！次は切符を買いましょう。', zh: '你已经到了！现在需要买票。', th: 'คุณอยู่ที่นี่แล้ว! ตอนนี้ต้องซื้อตั๋ว', vi: 'Bạn đã ở đây rồi! Bây giờ cần mua vé.', es: '¡Ya estás aquí! Ahora necesitas comprar un boleto.' },
      },
      {
        id: 'c',
        korean: '몇 호선이에요?',
        romanization: 'myeot hoseonieyo?',
        translation: { en: 'Which line is it?', ja: '何号線ですか？', zh: '是几号线？', th: 'สายไหน?', vi: 'Tuyến số mấy?', es: '¿Qué línea es?' },
        isCorrect: false,
        hint: { en: '호선 = subway line number', ja: '호선 = 地下鉄の路線番号', zh: '호선 = 地铁线路号', th: '호선 = หมายเลขสายรถไฟใต้ดิน', vi: '호선 = số tuyến tàu điện ngầm', es: '호선 = número de línea de metro' },
        feedback: { en: 'Good question for navigation! But first, get your ticket.', ja: '移動に便利な質問です！でもまず切符を買いましょう。', zh: '导航的好问题！但先买票。', th: 'คำถามดีสำหรับการเดินทาง! แต่ก่อนอื่นซื้อตั๋วก่อน', vi: 'Câu hỏi hay để tìm đường! Nhưng trước hết hãy mua vé.', es: '¡Buena pregunta para navegación! Pero primero, consigue tu boleto.' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '표', romanization: 'pyo', meaning: { en: 'Ticket', ja: '切符', zh: '票', th: 'ตั๋ว', vi: 'Vé', es: 'Boleto' } },
        { korean: '어떻게', romanization: 'eotteoke', meaning: { en: 'How', ja: 'どうやって', zh: '怎么', th: 'อย่างไร', vi: 'Như thế nào', es: 'Cómo' } },
        { korean: '호선', romanization: 'hoseon', meaning: { en: 'Line (subway)', ja: '号線', zh: '号线', th: 'สาย', vi: 'Tuyến', es: 'Línea' } },
      ],
      tip: {
        en: 'Tip: You can use T-money or buy a single-journey ticket (일회용 교통카드). The deposit (보증금) is refundable!',
        ja: 'ヒント：T-moneyか1回用乗車券（일회용 교통카드）が使えます。保証金（보증금）は返金されます！',
        zh: '提示：可以使用T-money或购买单程票（일회용 교통카드）。押金（보증금）可退还！',
        th: 'เคล็ดลับ: ใช้ T-money หรือซื้อตั๋วเที่ยวเดียว (일회용 교통카드) ได้ เงินมัดจำ (보증금) คืนได้!',
        vi: 'Mẹo: Bạn có thể dùng T-money hoặc mua vé lượt (일회용 교통카드). Tiền đặt cọc (보증금) được hoàn lại!',
        es: 'Consejo: Puedes usar T-money o comprar un boleto de viaje único (일회용 교통카드). ¡El depósito (보증금) es reembolsable!',
      },
    },
    xpReward: 75,
  };
};

export const getRandomStationQuiz = (excludeIds: string[] = []): TransportQuiz | undefined => {
  const available = stationQuizzes.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
};
