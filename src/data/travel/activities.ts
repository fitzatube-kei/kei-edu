import { DayActivity, ActivitySituation } from '@/types/travel';

// ============================================
// DAY ACTIVITIES
// ============================================

export const dayActivities: DayActivity[] = [
  // Cafe
  {
    id: 'cafe',
    type: 'cafe',
    korean: '카페',
    romanization: 'kape',
    icon: '☕',
    name: {
      en: 'Cafe',
      ja: 'カフェ',
      zh: '咖啡厅',
      th: 'คาเฟ่',
      vi: 'Quán cà phê',
      es: 'Cafetería',
    },
    description: {
      en: 'Grab a coffee and relax',
      ja: 'コーヒーを飲んでリラックス',
      zh: '喝杯咖啡放松一下',
      th: 'จิบกาแฟและผ่อนคลาย',
      vi: 'Uống cà phê và thư giãn',
      es: 'Toma un café y relájate',
    },
  },
  // Restaurant
  {
    id: 'restaurant',
    type: 'restaurant',
    korean: '식당',
    romanization: 'sikdang',
    icon: '🍜',
    name: {
      en: 'Restaurant',
      ja: 'レストラン',
      zh: '餐厅',
      th: 'ร้านอาหาร',
      vi: 'Nhà hàng',
      es: 'Restaurante',
    },
    description: {
      en: 'Try delicious Korean food',
      ja: '美味しい韓国料理を食べる',
      zh: '品尝美味的韩国料理',
      th: 'ลองอาหารเกาหลีอร่อย',
      vi: 'Thử món ăn Hàn Quốc ngon',
      es: 'Prueba la deliciosa comida coreana',
    },
  },
  // Hotel
  {
    id: 'hotel',
    type: 'hotel',
    korean: '호텔',
    romanization: 'hotel',
    icon: '🏨',
    name: {
      en: 'Hotel',
      ja: 'ホテル',
      zh: '酒店',
      th: 'โรงแรม',
      vi: 'Khách sạn',
      es: 'Hotel',
    },
    description: {
      en: 'Check in and rest',
      ja: 'チェックインして休憩',
      zh: '办理入住并休息',
      th: 'เช็คอินและพักผ่อน',
      vi: 'Nhận phòng và nghỉ ngơi',
      es: 'Regístrate y descansa',
    },
  },
];

// ============================================
// CAFE SITUATIONS
// ============================================

export const cafeSituations: ActivitySituation[] = [
  {
    id: 'cafe-order-americano',
    activityId: 'cafe',
    activityType: 'cafe',
    scenario: {
      en: 'You enter a trendy cafe. The barista smiles and waits for your order.',
      ja: 'おしゃれなカフェに入りました。バリスタが笑顔で注文を待っています。',
      zh: '你走进一家时尚的咖啡厅。咖啡师微笑着等待你点单。',
      th: 'คุณเข้าไปในคาเฟ่ที่ทันสมัย บาริสต้ายิ้มและรอคำสั่งของคุณ',
      vi: 'Bạn bước vào một quán cà phê thời thượng. Barista mỉm cười và chờ order của bạn.',
      es: 'Entras en una cafetería de moda. El barista sonríe y espera tu pedido.',
    },
    question: {
      en: 'How do you order an iced Americano?',
      ja: 'アイスアメリカーノをどう注文しますか？',
      zh: '你怎么点一杯冰美式咖啡？',
      th: 'คุณจะสั่งอเมริกาโน่เย็นอย่างไร?',
      vi: 'Bạn gọi một ly Americano đá thế nào?',
      es: '¿Cómo pides un Americano helado?',
    },
    choices: [
      {
        id: 'a',
        korean: '아이스 아메리카노 한 잔 주세요',
        romanization: 'aiseu amerikano han jan juseyo',
        translation: { en: 'One iced Americano, please', ja: 'アイスアメリカーノ一杯ください', zh: '请给我一杯冰美式', th: 'ขออเมริกาโน่เย็นหนึ่งแก้ว', vi: 'Cho tôi một ly Americano đá', es: 'Un Americano helado, por favor' },
        isCorrect: true,
        hint: { en: '한 잔 = one cup, 주세요 = please give', ja: '한 잔 = 一杯、주세요 = ください', zh: '한 잔 = 一杯, 주세요 = 请给', th: '한 잔 = หนึ่งแก้ว, 주세요 = ขอ', vi: '한 잔 = một ly, 주세요 = xin cho', es: '한 잔 = una taza, 주세요 = por favor deme' },
        feedback: { en: 'Perfect! This is the standard way to order coffee in Korea.', ja: '完璧！これは韓国でコーヒーを注文する標準的な方法です。', zh: '完美！这是在韩国点咖啡的标准方式。', th: 'สมบูรณ์แบบ! นี่คือวิธีมาตรฐานในการสั่งกาแฟในเกาหลี', vi: 'Hoàn hảo! Đây là cách chuẩn để gọi cà phê ở Hàn Quốc.', es: '¡Perfecto! Esta es la forma estándar de pedir café en Corea.' },
      },
      {
        id: 'b',
        korean: '메뉴판 주세요',
        romanization: 'menyupan juseyo',
        translation: { en: 'Please give me the menu', ja: 'メニューをください', zh: '请给我菜单', th: 'ขอเมนูด้วย', vi: 'Cho tôi xem menu', es: 'El menú, por favor' },
        isCorrect: false,
        hint: { en: '메뉴판 = menu', ja: '메뉴판 = メニュー', zh: '메뉴판 = 菜单', th: '메뉴판 = เมนู', vi: '메뉴판 = menu', es: '메뉴판 = menú' },
        feedback: { en: 'This asks for the menu, not orders a drink. Try: 아이스 아메리카노 주세요', ja: 'これはメニューを頼んでいます。飲み物は：아이스 아메리카노 주세요', zh: '这是要菜单，不是点饮料。试试：아이스 아메리카노 주세요', th: 'นี่คือการขอเมนู ไม่ใช่สั่งเครื่องดื่ม ลอง: 아이스 아메리카노 주세요', vi: 'Đây là xin menu, không phải gọi đồ uống. Thử: 아이스 아메리카노 주세요', es: 'Esto pide el menú, no un pedido. Intenta: 아이스 아메리카노 주세요' },
      },
      {
        id: 'c',
        korean: '화장실 어디예요?',
        romanization: 'hwajangsil eodiyeyo?',
        translation: { en: 'Where is the restroom?', ja: 'トイレはどこですか？', zh: '洗手间在哪里？', th: 'ห้องน้ำอยู่ที่ไหน?', vi: 'Nhà vệ sinh ở đâu?', es: '¿Dónde está el baño?' },
        isCorrect: false,
        hint: { en: '화장실 = restroom, 어디 = where', ja: '화장실 = トイレ、어디 = どこ', zh: '화장실 = 洗手间, 어디 = 哪里', th: '화장실 = ห้องน้ำ, 어디 = ที่ไหน', vi: '화장실 = nhà vệ sinh, 어디 = ở đâu', es: '화장실 = baño, 어디 = dónde' },
        feedback: { en: 'Useful phrase, but this asks for the restroom! Order first: 아이스 아메리카노 주세요', ja: '便利なフレーズですが、トイレを聞いています！まず注文を：아이스 아메리카노 주세요', zh: '有用的短语，但这是问洗手间！先点单：아이스 아메리카노 주세요', th: 'วลีที่มีประโยชน์ แต่นี่ถามห้องน้ำ! สั่งก่อน: 아이스 아메리카노 주세요', vi: 'Cụm từ hữu ích, nhưng đây là hỏi nhà vệ sinh! Gọi đồ trước: 아이스 아메리카노 주세요', es: 'Frase útil, pero esto pregunta por el baño. Pide primero: 아이스 아메리카노 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '아이스', romanization: 'aiseu', meaning: { en: 'Iced', ja: 'アイス', zh: '冰', th: 'เย็น', vi: 'Đá', es: 'Helado' } },
        { korean: '한 잔', romanization: 'han jan', meaning: { en: 'One cup', ja: '一杯', zh: '一杯', th: 'หนึ่งแก้ว', vi: 'Một ly', es: 'Una taza' } },
        { korean: '주세요', romanization: 'juseyo', meaning: { en: 'Please give', ja: 'ください', zh: '请给', th: 'ขอ', vi: 'Xin cho', es: 'Por favor dé' } },
      ],
      tip: {
        en: 'In Korean cafes, "아이스" (ice) comes before the drink name, and you count drinks with "잔" (cup/glass).',
        ja: '韓国のカフェでは、「아이스」（アイス）は飲み物の名前の前に来て、「잔」（杯）で数えます。',
        zh: '在韩国咖啡厅，"아이스"（冰）放在饮料名称前面，用"잔"（杯）来计数。',
        th: 'ในคาเฟ่เกาหลี "아이스" (น้ำแข็ง) มาก่อนชื่อเครื่องดื่ม และนับเครื่องดื่มด้วย "잔" (แก้ว)',
        vi: 'Trong quán cà phê Hàn Quốc, "아이스" (đá) đứng trước tên đồ uống, và đếm đồ uống bằng "잔" (ly).',
        es: 'En las cafeterías coreanas, "아이스" (hielo) va antes del nombre de la bebida, y se cuentan con "잔" (taza/vaso).',
      },
    },
    xpReward: 75,
  },
  {
    id: 'cafe-size',
    activityId: 'cafe',
    activityType: 'cafe',
    scenario: {
      en: 'The barista asks what size you want.',
      ja: 'バリスタがサイズを聞いています。',
      zh: '咖啡师问你要什么尺寸。',
      th: 'บาริสต้าถามว่าคุณต้องการขนาดไหน',
      vi: 'Barista hỏi bạn muốn size nào.',
      es: 'El barista pregunta qué tamaño quieres.',
    },
    question: {
      en: 'How do you ask for a large size?',
      ja: 'ラージサイズをどう頼みますか？',
      zh: '你怎么要大杯？',
      th: 'คุณจะขอขนาดใหญ่อย่างไร?',
      vi: 'Bạn yêu cầu size lớn thế nào?',
      es: '¿Cómo pides un tamaño grande?',
    },
    choices: [
      {
        id: 'a',
        korean: '큰 걸로 주세요',
        romanization: 'keun geollo juseyo',
        translation: { en: 'The large one, please', ja: '大きいのでお願いします', zh: '请给我大的', th: 'ขอขนาดใหญ่', vi: 'Cho tôi cái lớn', es: 'El grande, por favor' },
        isCorrect: true,
        hint: { en: '큰 = big/large, 걸로 = that one', ja: '큰 = 大きい、걸로 = それで', zh: '큰 = 大, 걸로 = 那个', th: '큰 = ใหญ่, 걸로 = อันนั้น', vi: '큰 = lớn, 걸로 = cái đó', es: '큰 = grande, 걸로 = ese' },
        feedback: { en: 'Correct! "큰 걸로" is a natural way to ask for the larger option.', ja: '正解！「큰 걸로」は大きいものを頼む自然な言い方です。', zh: '正确！"큰 걸로"是要大的一个自然说法。', th: 'ถูกต้อง! "큰 걸로" เป็นวิธีธรรมชาติในการขอตัวเลือกที่ใหญ่กว่า', vi: 'Đúng rồi! "큰 걸로" là cách tự nhiên để yêu cầu cái lớn hơn.', es: '¡Correcto! "큰 걸로" es una forma natural de pedir la opción más grande.' },
      },
      {
        id: 'b',
        korean: '작은 걸로 주세요',
        romanization: 'jageun geollo juseyo',
        translation: { en: 'The small one, please', ja: '小さいのでお願いします', zh: '请给我小的', th: 'ขอขนาดเล็ก', vi: 'Cho tôi cái nhỏ', es: 'El pequeño, por favor' },
        isCorrect: false,
        hint: { en: '작은 = small', ja: '작은 = 小さい', zh: '작은 = 小', th: '작은 = เล็ก', vi: '작은 = nhỏ', es: '작은 = pequeño' },
        feedback: { en: 'This asks for small. For large, say: 큰 걸로 주세요', ja: 'これは小さいものを頼んでいます。大きいものは：큰 걸로 주세요', zh: '这是要小的。要大的说：큰 걸로 주세요', th: 'นี่คือขอขนาดเล็ก สำหรับใหญ่พูด: 큰 걸로 주세요', vi: 'Đây là yêu cầu nhỏ. Để lớn, nói: 큰 걸로 주세요', es: 'Esto pide pequeño. Para grande, di: 큰 걸로 주세요' },
      },
      {
        id: 'c',
        korean: '뜨거운 걸로 주세요',
        romanization: 'tteugeoun geollo juseyo',
        translation: { en: 'The hot one, please', ja: '熱いのでお願いします', zh: '请给我热的', th: 'ขอร้อน', vi: 'Cho tôi cái nóng', es: 'El caliente, por favor' },
        isCorrect: false,
        hint: { en: '뜨거운 = hot', ja: '뜨거운 = 熱い', zh: '뜨거운 = 热', th: '뜨거운 = ร้อน', vi: '뜨거운 = nóng', es: '뜨거운 = caliente' },
        feedback: { en: 'This asks for hot temperature, not size. For large: 큰 걸로 주세요', ja: 'これは温度を頼んでいます。サイズは：큰 걸로 주세요', zh: '这是要热的温度，不是尺寸。要大的说：큰 걸로 주세요', th: 'นี่คือขออุณหภูมิร้อน ไม่ใช่ขนาด สำหรับใหญ่: 큰 걸로 주세요', vi: 'Đây là yêu cầu nhiệt độ nóng, không phải size. Để lớn: 큰 걸로 주세요', es: 'Esto pide temperatura caliente, no tamaño. Para grande: 큰 걸로 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '큰', romanization: 'keun', meaning: { en: 'Big/Large', ja: '大きい', zh: '大', th: 'ใหญ่', vi: 'Lớn', es: 'Grande' } },
        { korean: '작은', romanization: 'jageun', meaning: { en: 'Small', ja: '小さい', zh: '小', th: 'เล็ก', vi: 'Nhỏ', es: 'Pequeño' } },
        { korean: '~걸로', romanization: '-geollo', meaning: { en: 'That one (choice)', ja: 'それで', zh: '那个', th: 'อันนั้น', vi: 'Cái đó', es: 'Ese' } },
      ],
    },
    xpReward: 75,
  },
];

// ============================================
// RESTAURANT SITUATIONS
// ============================================

export const restaurantSituations: ActivitySituation[] = [
  {
    id: 'restaurant-order-bibimbap',
    activityId: 'restaurant',
    activityType: 'restaurant',
    scenario: {
      en: 'You are at a Korean restaurant. The server is ready to take your order.',
      ja: '韓国料理店にいます。店員が注文を取る準備ができています。',
      zh: '你在一家韩国餐厅。服务员准备好接受你的点单了。',
      th: 'คุณอยู่ที่ร้านอาหารเกาหลี พนักงานพร้อมรับออเดอร์ของคุณ',
      vi: 'Bạn đang ở nhà hàng Hàn Quốc. Nhân viên sẵn sàng nhận order.',
      es: 'Estás en un restaurante coreano. El mesero está listo para tomar tu pedido.',
    },
    question: {
      en: 'How do you order one bibimbap?',
      ja: 'ビビンバを一つどう注文しますか？',
      zh: '你怎么点一份拌饭？',
      th: 'คุณจะสั่งบิบิมบับหนึ่งจานอย่างไร?',
      vi: 'Bạn gọi một phần bibimbap thế nào?',
      es: '¿Cómo pides un bibimbap?',
    },
    choices: [
      {
        id: 'a',
        korean: '비빔밥 하나 주세요',
        romanization: 'bibimbap hana juseyo',
        translation: { en: 'One bibimbap, please', ja: 'ビビンバ一つください', zh: '请给我一份拌饭', th: 'ขอบิบิมบับหนึ่งจาน', vi: 'Cho tôi một phần bibimbap', es: 'Un bibimbap, por favor' },
        isCorrect: true,
        hint: { en: '하나 = one (native Korean number)', ja: '하나 = 一つ（固有数詞）', zh: '하나 = 一（韩语数词）', th: '하나 = หนึ่ง (ตัวเลขเกาหลี)', vi: '하나 = một (số đếm Hàn)', es: '하나 = uno (número coreano nativo)' },
        feedback: { en: 'Perfect! Use 하나, 둘, 셋 for counting dishes.', ja: '完璧！料理を数える時は하나、둘、셋を使います。', zh: '完美！点菜时用하나、둘、셋来计数。', th: 'สมบูรณ์แบบ! ใช้ 하나, 둘, 셋 สำหรับนับอาหาร', vi: 'Hoàn hảo! Dùng 하나, 둘, 셋 để đếm món.', es: '¡Perfecto! Usa 하나, 둘, 셋 para contar platos.' },
      },
      {
        id: 'b',
        korean: '뭐가 맛있어요?',
        romanization: 'mwoga masisseoyo?',
        translation: { en: "What's delicious?", ja: '何がおいしいですか？', zh: '什么好吃？', th: 'อะไรอร่อย?', vi: 'Cái gì ngon?', es: '¿Qué está rico?' },
        isCorrect: false,
        hint: { en: '맛있다 = to be delicious', ja: '맛있다 = おいしい', zh: '맛있다 = 好吃', th: '맛있다 = อร่อย', vi: '맛있다 = ngon', es: '맛있다 = ser delicioso' },
        feedback: { en: 'Good question to ask, but this asks for recommendations! To order: 비빔밥 하나 주세요', ja: '良い質問ですが、おすすめを聞いています！注文は：비빔밥 하나 주세요', zh: '好问题，但这是在问推荐！点单说：비빔밥 하나 주세요', th: 'คำถามดี แต่นี่คือถามแนะนำ! สั่งพูด: 비빔밥 하나 주세요', vi: 'Câu hỏi hay, nhưng đây là hỏi gợi ý! Để gọi món: 비빔밥 하나 주세요', es: 'Buena pregunta, pero esto pide recomendaciones. Para pedir: 비빔밥 하나 주세요' },
      },
      {
        id: 'c',
        korean: '계산해 주세요',
        romanization: 'gyesanhae juseyo',
        translation: { en: 'Check, please', ja: 'お会計お願いします', zh: '请结账', th: 'เช็คบิลด้วย', vi: 'Tính tiền', es: 'La cuenta, por favor' },
        isCorrect: false,
        hint: { en: '계산 = calculation/bill', ja: '계산 = 会計', zh: '계산 = 结账', th: '계산 = บิล', vi: '계산 = tính tiền', es: '계산 = cuenta' },
        feedback: { en: 'This asks for the bill! Order first: 비빔밥 하나 주세요', ja: 'これはお会計を頼んでいます！まず注文を：비빔밥 하나 주세요', zh: '这是要结账！先点单：비빔밥 하나 주세요', th: 'นี่คือขอบิล! สั่งก่อน: 비빔밥 하나 주세요', vi: 'Đây là xin hóa đơn! Gọi món trước: 비빔밥 하나 주세요', es: 'Esto pide la cuenta. Pide primero: 비빔밥 하나 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '비빔밥', romanization: 'bibimbap', meaning: { en: 'Mixed rice bowl', ja: 'ビビンバ', zh: '拌饭', th: 'บิบิมบับ', vi: 'Cơm trộn', es: 'Bibimbap' } },
        { korean: '하나', romanization: 'hana', meaning: { en: 'One', ja: '一つ', zh: '一', th: 'หนึ่ง', vi: 'Một', es: 'Uno' } },
        { korean: '둘', romanization: 'dul', meaning: { en: 'Two', ja: '二つ', zh: '二', th: 'สอง', vi: 'Hai', es: 'Dos' } },
      ],
    },
    xpReward: 75,
  },
  {
    id: 'restaurant-water',
    activityId: 'restaurant',
    activityType: 'restaurant',
    scenario: {
      en: 'You are thirsty and want to ask for water.',
      ja: '喉が渇いて、水が欲しいです。',
      zh: '你渴了，想要水。',
      th: 'คุณกระหายน้ำและอยากขอน้ำ',
      vi: 'Bạn khát và muốn xin nước.',
      es: 'Tienes sed y quieres pedir agua.',
    },
    question: {
      en: 'How do you ask for water?',
      ja: '水をどう頼みますか？',
      zh: '你怎么要水？',
      th: 'คุณจะขอน้ำอย่างไร?',
      vi: 'Bạn xin nước thế nào?',
      es: '¿Cómo pides agua?',
    },
    choices: [
      {
        id: 'a',
        korean: '물 주세요',
        romanization: 'mul juseyo',
        translation: { en: 'Water, please', ja: '水をください', zh: '请给我水', th: 'ขอน้ำด้วย', vi: 'Cho tôi nước', es: 'Agua, por favor' },
        isCorrect: true,
        hint: { en: '물 = water', ja: '물 = 水', zh: '물 = 水', th: '물 = น้ำ', vi: '물 = nước', es: '물 = agua' },
        feedback: { en: 'Correct! In Korea, water is usually free at restaurants.', ja: '正解！韓国ではレストランで水は通常無料です。', zh: '正确！在韩国，餐厅的水通常是免费的。', th: 'ถูกต้อง! ในเกาหลี น้ำมักจะฟรีที่ร้านอาหาร', vi: 'Đúng rồi! Ở Hàn Quốc, nước thường miễn phí tại nhà hàng.', es: '¡Correcto! En Corea, el agua suele ser gratis en los restaurantes.' },
      },
      {
        id: 'b',
        korean: '커피 주세요',
        romanization: 'keopi juseyo',
        translation: { en: 'Coffee, please', ja: 'コーヒーをください', zh: '请给我咖啡', th: 'ขอกาแฟด้วย', vi: 'Cho tôi cà phê', es: 'Café, por favor' },
        isCorrect: false,
        hint: { en: '커피 = coffee', ja: '커피 = コーヒー', zh: '커피 = 咖啡', th: '커피 = กาแฟ', vi: '커피 = cà phê', es: '커피 = café' },
        feedback: { en: 'This asks for coffee. For water: 물 주세요', ja: 'これはコーヒーを頼んでいます。水は：물 주세요', zh: '这是要咖啡。要水说：물 주세요', th: 'นี่คือขอกาแฟ สำหรับน้ำ: 물 주세요', vi: 'Đây là xin cà phê. Để xin nước: 물 주세요', es: 'Esto pide café. Para agua: 물 주세요' },
      },
      {
        id: 'c',
        korean: '맥주 주세요',
        romanization: 'maekju juseyo',
        translation: { en: 'Beer, please', ja: 'ビールをください', zh: '请给我啤酒', th: 'ขอเบียร์ด้วย', vi: 'Cho tôi bia', es: 'Cerveza, por favor' },
        isCorrect: false,
        hint: { en: '맥주 = beer', ja: '맥주 = ビール', zh: '맥주 = 啤酒', th: '맥주 = เบียร์', vi: '맥주 = bia', es: '맥주 = cerveza' },
        feedback: { en: 'This asks for beer! For water: 물 주세요', ja: 'これはビールを頼んでいます！水は：물 주세요', zh: '这是要啤酒！要水说：물 주세요', th: 'นี่คือขอเบียร์! สำหรับน้ำ: 물 주세요', vi: 'Đây là xin bia! Để xin nước: 물 주세요', es: 'Esto pide cerveza. Para agua: 물 주세요' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '물', romanization: 'mul', meaning: { en: 'Water', ja: '水', zh: '水', th: 'น้ำ', vi: 'Nước', es: 'Agua' } },
        { korean: '맥주', romanization: 'maekju', meaning: { en: 'Beer', ja: 'ビール', zh: '啤酒', th: 'เบียร์', vi: 'Bia', es: 'Cerveza' } },
        { korean: '소주', romanization: 'soju', meaning: { en: 'Soju', ja: '焼酎', zh: '烧酒', th: 'โซจู', vi: 'Soju', es: 'Soju' } },
      ],
    },
    xpReward: 50,
  },
];

// ============================================
// HOTEL SITUATIONS
// ============================================

export const hotelSituations: ActivitySituation[] = [
  {
    id: 'hotel-checkin',
    activityId: 'hotel',
    activityType: 'hotel',
    scenario: {
      en: 'You arrive at the hotel front desk to check in.',
      ja: 'ホテルのフロントでチェックインします。',
      zh: '你到达酒店前台办理入住。',
      th: 'คุณมาถึงแผนกต้อนรับของโรงแรมเพื่อเช็คอิน',
      vi: 'Bạn đến quầy lễ tân khách sạn để nhận phòng.',
      es: 'Llegas a la recepción del hotel para registrarte.',
    },
    question: {
      en: 'How do you tell them you have a reservation?',
      ja: '予約があることをどう伝えますか？',
      zh: '你怎么告诉他们你有预订？',
      th: 'คุณจะบอกพวกเขาว่าคุณมีการจองอย่างไร?',
      vi: 'Bạn nói với họ rằng bạn có đặt phòng thế nào?',
      es: '¿Cómo les dices que tienes una reservación?',
    },
    choices: [
      {
        id: 'a',
        korean: '예약했습니다',
        romanization: 'yeyak haesseumnida',
        translation: { en: 'I have a reservation', ja: '予約しました', zh: '我预订了', th: 'ฉันจองไว้แล้ว', vi: 'Tôi đã đặt phòng', es: 'Tengo una reservación' },
        isCorrect: true,
        hint: { en: '예약 = reservation, ~했습니다 = did (polite past)', ja: '예약 = 予約、~했습니다 = しました', zh: '예약 = 预订, ~했습니다 = 做了（敬语）', th: '예약 = การจอง, ~했습니다 = ทำแล้ว (สุภาพ)', vi: '예약 = đặt phòng, ~했습니다 = đã làm (lịch sự)', es: '예약 = reservación, ~했습니다 = hice (cortés)' },
        feedback: { en: 'Perfect! This is the standard phrase for hotel check-in.', ja: '完璧！これはホテルチェックインの標準フレーズです。', zh: '完美！这是酒店入住的标准用语。', th: 'สมบูรณ์แบบ! นี่คือวลีมาตรฐานสำหรับเช็คอินโรงแรม', vi: 'Hoàn hảo! Đây là cụm từ chuẩn khi nhận phòng khách sạn.', es: '¡Perfecto! Esta es la frase estándar para el registro en el hotel.' },
      },
      {
        id: 'b',
        korean: '방 있어요?',
        romanization: 'bang isseoyo?',
        translation: { en: 'Do you have a room?', ja: '部屋はありますか？', zh: '有房间吗？', th: 'มีห้องไหม?', vi: 'Có phòng không?', es: '¿Tienen habitación?' },
        isCorrect: false,
        hint: { en: '방 = room, 있어요 = is there / do you have', ja: '방 = 部屋、있어요 = ありますか', zh: '방 = 房间, 있어요 = 有吗', th: '방 = ห้อง, 있어요 = มีไหม', vi: '방 = phòng, 있어요 = có không', es: '방 = habitación, 있어요 = hay/tienen' },
        feedback: { en: 'This asks if rooms are available. You already have a reservation: 예약했습니다', ja: 'これは部屋があるか聞いています。予約済みなら：예약했습니다', zh: '这是问有没有房间。你已经预订了：예약했습니다', th: 'นี่ถามว่ามีห้องไหม คุณจองไว้แล้ว: 예약했습니다', vi: 'Đây là hỏi có phòng không. Bạn đã đặt rồi: 예약했습니다', es: 'Esto pregunta si hay habitaciones. Ya tienes reservación: 예약했습니다' },
      },
      {
        id: 'c',
        korean: '얼마예요?',
        romanization: 'eolmayeyo?',
        translation: { en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่?', vi: 'Bao nhiêu tiền?', es: '¿Cuánto cuesta?' },
        isCorrect: false,
        hint: { en: '얼마 = how much', ja: '얼마 = いくら', zh: '얼마 = 多少', th: '얼마 = เท่าไหร่', vi: '얼마 = bao nhiêu', es: '얼마 = cuánto' },
        feedback: { en: 'Good phrase, but first check in: 예약했습니다', ja: '良いフレーズですが、まずチェックイン：예약했습니다', zh: '好短语，但先办理入住：예약했습니다', th: 'วลีดี แต่เช็คอินก่อน: 예약했습니다', vi: 'Cụm từ hay, nhưng nhận phòng trước: 예약했습니다', es: 'Buena frase, pero primero regístrate: 예약했습니다' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '예약', romanization: 'yeyak', meaning: { en: 'Reservation', ja: '予約', zh: '预订', th: 'การจอง', vi: 'Đặt phòng', es: 'Reservación' } },
        { korean: '체크인', romanization: 'chekein', meaning: { en: 'Check-in', ja: 'チェックイン', zh: '入住', th: 'เช็คอิน', vi: 'Nhận phòng', es: 'Registro' } },
        { korean: '체크아웃', romanization: 'chekaut', meaning: { en: 'Check-out', ja: 'チェックアウト', zh: '退房', th: 'เช็คเอาท์', vi: 'Trả phòng', es: 'Salida' } },
      ],
    },
    xpReward: 75,
  },
  {
    id: 'hotel-wifi',
    activityId: 'hotel',
    activityType: 'hotel',
    scenario: {
      en: 'You need to connect to the internet in your room.',
      ja: '部屋でインターネットに接続したいです。',
      zh: '你需要在房间里连接网络。',
      th: 'คุณต้องเชื่อมต่ออินเทอร์เน็ตในห้องพัก',
      vi: 'Bạn cần kết nối internet trong phòng.',
      es: 'Necesitas conectarte a internet en tu habitación.',
    },
    question: {
      en: 'How do you ask for the WiFi password?',
      ja: 'WiFiのパスワードをどう聞きますか？',
      zh: '你怎么问WiFi密码？',
      th: 'คุณจะถามรหัส WiFi อย่างไร?',
      vi: 'Bạn hỏi mật khẩu WiFi thế nào?',
      es: '¿Cómo preguntas por la contraseña del WiFi?',
    },
    choices: [
      {
        id: 'a',
        korean: '와이파이 비밀번호가 뭐예요?',
        romanization: 'waipai bimilbeonhoga mwoyeyo?',
        translation: { en: "What's the WiFi password?", ja: 'WiFiのパスワードは何ですか？', zh: 'WiFi密码是什么？', th: 'รหัส WiFi คืออะไร?', vi: 'Mật khẩu WiFi là gì?', es: '¿Cuál es la contraseña del WiFi?' },
        isCorrect: true,
        hint: { en: '비밀번호 = password, 뭐 = what', ja: '비밀번호 = パスワード、뭐 = 何', zh: '비밀번호 = 密码, 뭐 = 什么', th: '비밀번호 = รหัส, 뭐 = อะไร', vi: '비밀번호 = mật khẩu, 뭐 = gì', es: '비밀번호 = contraseña, 뭐 = qué' },
        feedback: { en: 'Perfect! WiFi is essential for travelers.', ja: '完璧！旅行者にとってWiFiは必須です。', zh: '完美！WiFi对旅行者来说很重要。', th: 'สมบูรณ์แบบ! WiFi จำเป็นสำหรับนักท่องเที่ยว', vi: 'Hoàn hảo! WiFi rất cần thiết cho du khách.', es: '¡Perfecto! El WiFi es esencial para los viajeros.' },
      },
      {
        id: 'b',
        korean: '전화번호가 뭐예요?',
        romanization: 'jeonhwabeonhoga mwoyeyo?',
        translation: { en: "What's the phone number?", ja: '電話番号は何ですか？', zh: '电话号码是什么？', th: 'หมายเลขโทรศัพท์คืออะไร?', vi: 'Số điện thoại là gì?', es: '¿Cuál es el número de teléfono?' },
        isCorrect: false,
        hint: { en: '전화번호 = phone number', ja: '전화번호 = 電話番号', zh: '전화번호 = 电话号码', th: '전화번호 = หมายเลขโทรศัพท์', vi: '전화번호 = số điện thoại', es: '전화번호 = número de teléfono' },
        feedback: { en: 'This asks for phone number. For WiFi: 와이파이 비밀번호가 뭐예요?', ja: 'これは電話番号を聞いています。WiFiは：와이파이 비밀번호가 뭐예요?', zh: '这是问电话号码。WiFi密码说：와이파이 비밀번호가 뭐예요?', th: 'นี่ถามหมายเลขโทรศัพท์ สำหรับ WiFi: 와이파이 비밀번호가 뭐예요?', vi: 'Đây là hỏi số điện thoại. Để hỏi WiFi: 와이파이 비밀번호가 뭐예요?', es: 'Esto pregunta el número de teléfono. Para WiFi: 와이파이 비밀번호가 뭐예요?' },
      },
      {
        id: 'c',
        korean: '방 번호가 뭐예요?',
        romanization: 'bang beonhoga mwoyeyo?',
        translation: { en: "What's the room number?", ja: '部屋番号は何ですか？', zh: '房间号是什么？', th: 'หมายเลขห้องคืออะไร?', vi: 'Số phòng là gì?', es: '¿Cuál es el número de habitación?' },
        isCorrect: false,
        hint: { en: '방 번호 = room number', ja: '방 번호 = 部屋番号', zh: '방 번호 = 房间号', th: '방 번호 = หมายเลขห้อง', vi: '방 번호 = số phòng', es: '방 번호 = número de habitación' },
        feedback: { en: 'This asks for room number. For WiFi: 와이파이 비밀번호가 뭐예요?', ja: 'これは部屋番号を聞いています。WiFiは：와이파이 비밀번호가 뭐예요?', zh: '这是问房间号。WiFi密码说：와이파이 비밀번호가 뭐예요?', th: 'นี่ถามหมายเลขห้อง สำหรับ WiFi: 와이파이 비밀번호가 뭐예요?', vi: 'Đây là hỏi số phòng. Để hỏi WiFi: 와이파이 비밀번호가 뭐예요?', es: 'Esto pregunta el número de habitación. Para WiFi: 와이파이 비밀번호가 뭐예요?' },
      },
    ],
    teaching: {
      vocabulary: [
        { korean: '와이파이', romanization: 'waipai', meaning: { en: 'WiFi', ja: 'WiFi', zh: 'WiFi', th: 'WiFi', vi: 'WiFi', es: 'WiFi' } },
        { korean: '비밀번호', romanization: 'bimilbeonho', meaning: { en: 'Password', ja: 'パスワード', zh: '密码', th: 'รหัส', vi: 'Mật khẩu', es: 'Contraseña' } },
        { korean: '인터넷', romanization: 'inteonet', meaning: { en: 'Internet', ja: 'インターネット', zh: '网络', th: 'อินเทอร์เน็ต', vi: 'Internet', es: 'Internet' } },
      ],
    },
    xpReward: 50,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getActivityById = (id: string): DayActivity | undefined => {
  return dayActivities.find(a => a.id === id);
};

export const getActivityByType = (type: string): DayActivity | undefined => {
  return dayActivities.find(a => a.type === type);
};

export const getSituationsByActivity = (activityType: string): ActivitySituation[] => {
  switch (activityType) {
    case 'cafe':
      return cafeSituations;
    case 'restaurant':
      return restaurantSituations;
    case 'hotel':
      return hotelSituations;
    default:
      return [];
  }
};

export const getRandomActivitySituation = (
  activityType: string,
  excludeIds: string[] = []
): ActivitySituation | undefined => {
  const situations = getSituationsByActivity(activityType);
  const available = situations.filter(s => !excludeIds.includes(s.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
};
