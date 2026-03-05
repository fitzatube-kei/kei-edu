import { HangulLevel, FillInBlankQuestion, MultilingualQuizQuestion, MultilingualMatchingPair, HangulWord } from '@/types';

// ============================================
// Advanced Levels (41-60) - SITUATIONAL SENTENCES
// Focus: 상황별 문장 - 기본부터 고급까지
// ============================================

// ============================================
// Level 41-42: At a Restaurant (식당에서)
// ============================================

const level41Words: HangulWord[] = [
  { word: '메뉴', meaning: 'menu', romanization: 'menyu', category: 'restaurant' },
  { word: '주세요', meaning: 'please give', romanization: 'juseyo', category: 'expression' },
  { word: '이거', meaning: 'this', romanization: 'igeo', category: 'pronoun' },
  { word: '뭐예요?', meaning: 'what is it?', romanization: 'mwoyeyo', category: 'question' },
  { word: '비빔밥', meaning: 'bibimbap', romanization: 'bibimbap', category: 'food' },
];

const level41Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l31q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '메뉴 주세요',
      romanization: 'menyu juseyo',
      translations: {
        en: 'Menu, please',
        ja: 'メニューをください',
        zh: '请给我菜单',
        th: 'ขอเมนูครับ/ค่ะ',
        vi: 'Cho tôi xem thực đơn',
        es: 'El menú, por favor',
      },
    },
    options: ['Menu, please', 'Check, please', 'Water, please', 'Order, please'],
    correctAnswer: 0,
  },
  {
    id: 'l31q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '이거 뭐예요?',
      romanization: 'igeo mwoyeyo',
      translations: {
        en: 'What is this?',
        ja: 'これは何ですか？',
        zh: '这是什么？',
        th: 'นี่คืออะไร?',
        vi: 'Cái này là gì?',
        es: '¿Qué es esto?',
      },
    },
    options: ['What is this?', 'How much is this?', 'Where is this?', 'Is this good?'],
    correctAnswer: 0,
  },
  {
    id: 'l31q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '비빔밥 하나 주세요',
      romanization: 'bibimbap hana juseyo',
      translations: {
        en: 'One bibimbap, please',
        ja: 'ビビンバを一つください',
        zh: '请给我一份拌饭',
        th: 'ขอบิบิมบับหนึ่งจานครับ/ค่ะ',
        vi: 'Cho tôi một phần bibimbap',
        es: 'Un bibimbap, por favor',
      },
    },
    options: ['One bibimbap, please', 'Two bibimbap, please', 'No bibimbap', 'Bibimbap is delicious'],
    correctAnswer: 0,
  },
];

const level41Matching: MultilingualMatchingPair[] = [
  {
    id: 'l31m1',
    left: '메뉴 주세요',
    right: { en: 'Menu, please', ja: 'メニューをください', zh: '请给我菜单', th: 'ขอเมนูครับ/ค่ะ', vi: 'Cho tôi xem thực đơn', es: 'El menú, por favor' },
    type: 'word',
  },
  {
    id: 'l31m2',
    left: '이거 뭐예요?',
    right: { en: 'What is this?', ja: 'これは何ですか？', zh: '这是什么？', th: 'นี่คืออะไร?', vi: 'Cái này là gì?', es: '¿Qué es esto?' },
    type: 'word',
  },
  {
    id: 'l31m3',
    left: '주세요',
    right: { en: 'please give', ja: 'ください', zh: '请给我', th: 'ขอ/กรุณา', vi: 'xin cho', es: 'por favor' },
    type: 'word',
  },
  {
    id: 'l31m4',
    left: '하나',
    right: { en: 'one', ja: '一つ', zh: '一个', th: 'หนึ่ง', vi: 'một', es: 'uno' },
    type: 'word',
  },
];

const level41FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l31f1',
    sentence: '메뉴 ___.',
    blank: '주세요',
    options: ['주세요', '있어요', '없어요', '뭐예요'],
    correctAnswer: 0,
    hint: {
      en: 'Polite request expression',
      ja: '丁寧なお願いの表現',
      zh: '礼貌请求的表达',
      th: 'การแสดงออกการขอร้องอย่างสุภาพ',
      vi: 'Cách diễn đạt yêu cầu lịch sự',
      es: 'Expresión de solicitud cortés',
    },
    translation: {
      en: 'Menu, please.',
      ja: 'メニューをください。',
      zh: '请给我菜单。',
      th: 'ขอเมนูครับ/ค่ะ',
      vi: 'Cho tôi xem thực đơn.',
      es: 'El menú, por favor.',
    },
  },
  {
    id: 'l31f2',
    sentence: '비빔밥 ___ 주세요.',
    blank: '하나',
    options: ['하나', '둘', '메뉴', '이거'],
    correctAnswer: 0,
    hint: {
      en: 'Number "one"',
      ja: '「一つ」の数字',
      zh: '数字"一"',
      th: 'ตัวเลข "หนึ่ง"',
      vi: 'Số "một"',
      es: 'El número "uno"',
    },
    translation: {
      en: 'One bibimbap, please.',
      ja: 'ビビンバを一つください。',
      zh: '请给我一份拌饭。',
      th: 'ขอบิบิมบับหนึ่งจานครับ/ค่ะ',
      vi: 'Cho tôi một phần bibimbap.',
      es: 'Un bibimbap, por favor.',
    },
  },
];

// Level 32: More Restaurant Conversations
const level42Words: HangulWord[] = [
  { word: '맛있어요', meaning: 'delicious', romanization: 'masisseoyo', category: 'adjective' },
  { word: '계산해', meaning: 'calculate/check', romanization: 'gyesanhae', category: 'verb' },
  { word: '카드로', meaning: 'by card', romanization: 'kadeuro', category: 'payment' },
  { word: '할게요', meaning: 'I will do', romanization: 'halgeyo', category: 'verb' },
];

const level42Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l32q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '맛있어요!',
      romanization: 'masisseoyo',
      translations: {
        en: "It's delicious!",
        ja: '美味しいです！',
        zh: '好吃！',
        th: 'อร่อย!',
        vi: 'Ngon!',
        es: '¡Está delicioso!',
      },
    },
    options: ["It's delicious!", "It's expensive!", "It's hot!", "It's big!"],
    correctAnswer: 0,
  },
  {
    id: 'l32q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '계산해 주세요',
      romanization: 'gyesanhae juseyo',
      translations: {
        en: 'Check, please',
        ja: 'お会計お願いします',
        zh: '请结账',
        th: 'ขอเช็คบิลครับ/ค่ะ',
        vi: 'Tính tiền giúp tôi',
        es: 'La cuenta, por favor',
      },
    },
    options: ['Check, please', 'Menu, please', 'Water, please', 'Help, please'],
    correctAnswer: 0,
  },
  {
    id: 'l32q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '카드로 할게요',
      romanization: 'kadeuro halgeyo',
      translations: {
        en: "I'll pay by card",
        ja: 'カードで支払います',
        zh: '我用卡付款',
        th: 'จ่ายด้วยบัตรครับ/ค่ะ',
        vi: 'Tôi trả bằng thẻ',
        es: 'Pagaré con tarjeta',
      },
    },
    options: ["I'll pay by card", "I'll pay by cash", 'Do you accept card?', 'Where is the card?'],
    correctAnswer: 0,
  },
];

const level42Matching: MultilingualMatchingPair[] = [
  {
    id: 'l32m1',
    left: '맛있어요',
    right: { en: 'delicious', ja: '美味しい', zh: '好吃', th: 'อร่อย', vi: 'ngon', es: 'delicioso' },
    type: 'word',
  },
  {
    id: 'l32m2',
    left: '계산해 주세요',
    right: { en: 'Check, please', ja: 'お会計お願いします', zh: '请结账', th: 'ขอเช็คบิลครับ/ค่ะ', vi: 'Tính tiền giúp tôi', es: 'La cuenta, por favor' },
    type: 'word',
  },
  {
    id: 'l32m3',
    left: '카드로',
    right: { en: 'by card', ja: 'カードで', zh: '用卡', th: 'ด้วยบัตร', vi: 'bằng thẻ', es: 'con tarjeta' },
    type: 'word',
  },
  {
    id: 'l32m4',
    left: '현금으로',
    right: { en: 'by cash', ja: '現金で', zh: '用现金', th: 'ด้วยเงินสด', vi: 'bằng tiền mặt', es: 'en efectivo' },
    type: 'word',
  },
];

const level42FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l32f1',
    sentence: '___해 주세요.',
    blank: '계산',
    options: ['계산', '메뉴', '물', '주문'],
    correctAnswer: 0,
    hint: {
      en: 'When you want to pay',
      ja: '支払いたい時',
      zh: '想付款时',
      th: 'เมื่อคุณต้องการจ่ายเงิน',
      vi: 'Khi bạn muốn thanh toán',
      es: 'Cuando quieres pagar',
    },
    translation: {
      en: 'Check, please.',
      ja: 'お会計お願いします。',
      zh: '请结账。',
      th: 'ขอเช็คบิลครับ/ค่ะ',
      vi: 'Tính tiền giúp tôi.',
      es: 'La cuenta, por favor.',
    },
  },
  {
    id: 'l32f2',
    sentence: '카드로 ___.',
    blank: '할게요',
    options: ['할게요', '주세요', '있어요', '없어요'],
    correctAnswer: 0,
    hint: {
      en: 'Expression for "I will do"',
      ja: '「します」の表現',
      zh: '"我会做"的表达',
      th: 'การแสดงออกสำหรับ "ฉันจะทำ"',
      vi: 'Cách diễn đạt "tôi sẽ"',
      es: 'Expresión para "lo haré"',
    },
    translation: {
      en: "I'll pay by card.",
      ja: 'カードで支払います。',
      zh: '我用卡付款。',
      th: 'จ่ายด้วยบัตรครับ/ค่ะ',
      vi: 'Tôi trả bằng thẻ.',
      es: 'Pagaré con tarjeta.',
    },
  },
];

// ============================================
// Level 33-34: Shopping (쇼핑할 때)
// ============================================

const level43Words: HangulWord[] = [
  { word: '얼마예요?', meaning: 'how much?', romanization: 'eolmayeyo', category: 'question' },
  { word: '비싸요', meaning: 'expensive', romanization: 'bissayo', category: 'adjective' },
  { word: '깎아 주세요', meaning: 'give me a discount', romanization: 'kkakka juseyo', category: 'expression' },
  { word: '좀', meaning: 'a little', romanization: 'jom', category: 'adverb' },
];

const level43Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l33q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '이거 얼마예요?',
      romanization: 'igeo eolmayeyo',
      translations: {
        en: 'How much is this?',
        ja: 'これはいくらですか？',
        zh: '这个多少钱？',
        th: 'อันนี้เท่าไหร่?',
        vi: 'Cái này bao nhiêu?',
        es: '¿Cuánto cuesta esto?',
      },
    },
    options: ['How much is this?', 'What is this?', 'Where is this?', 'Is this good?'],
    correctAnswer: 0,
  },
  {
    id: 'l33q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '좀 비싸요',
      romanization: 'jom bissayo',
      translations: {
        en: "It's a bit expensive",
        ja: 'ちょっと高いです',
        zh: '有点贵',
        th: 'แพงไปหน่อย',
        vi: 'Hơi đắt',
        es: 'Es un poco caro',
      },
    },
    options: ["It's a bit expensive", "It's cheap", "It's beautiful", "It's big"],
    correctAnswer: 0,
  },
  {
    id: 'l33q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '깎아 주세요',
      romanization: 'kkakka juseyo',
      translations: {
        en: 'Please give me a discount',
        ja: '値引きしてください',
        zh: '请便宜点',
        th: 'ลดราคาหน่อยได้ไหม',
        vi: 'Giảm giá cho tôi',
        es: '¿Me puede hacer un descuento?',
      },
    },
    options: ['Please give me a discount', 'Please give me this', 'Please wrap it', 'Please return it'],
    correctAnswer: 0,
  },
];

const level43Matching: MultilingualMatchingPair[] = [
  {
    id: 'l33m1',
    left: '이거 얼마예요?',
    right: { en: 'How much is this?', ja: 'これはいくらですか？', zh: '这个多少钱？', th: 'อันนี้เท่าไหร่?', vi: 'Cái này bao nhiêu?', es: '¿Cuánto cuesta esto?' },
    type: 'word',
  },
  {
    id: 'l33m2',
    left: '비싸요',
    right: { en: 'expensive', ja: '高い', zh: '贵', th: 'แพง', vi: 'đắt', es: 'caro' },
    type: 'word',
  },
  {
    id: 'l33m3',
    left: '싸요',
    right: { en: 'cheap', ja: '安い', zh: '便宜', th: 'ถูก', vi: 'rẻ', es: 'barato' },
    type: 'word',
  },
  {
    id: 'l33m4',
    left: '깎아 주세요',
    right: { en: 'Give me a discount', ja: '値引きしてください', zh: '便宜点', th: 'ลดราคาหน่อย', vi: 'Giảm giá cho tôi', es: '¿Me hace descuento?' },
    type: 'word',
  },
];

const level43FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l33f1',
    sentence: '이거 ___?',
    blank: '얼마예요',
    options: ['얼마예요', '뭐예요', '어디예요', '누구예요'],
    correctAnswer: 0,
    hint: {
      en: 'Asking about price',
      ja: '価格について尋ねる',
      zh: '询问价格',
      th: 'ถามเกี่ยวกับราคา',
      vi: 'Hỏi về giá',
      es: 'Preguntar sobre el precio',
    },
    translation: {
      en: 'How much is this?',
      ja: 'これはいくらですか？',
      zh: '这个多少钱？',
      th: 'อันนี้เท่าไหร่?',
      vi: 'Cái này bao nhiêu?',
      es: '¿Cuánto cuesta esto?',
    },
  },
  {
    id: 'l33f2',
    sentence: '좀 ___.',
    blank: '비싸요',
    options: ['비싸요', '싸요', '좋아요', '작아요'],
    correctAnswer: 0,
    hint: {
      en: 'Opposite of cheap',
      ja: '安いの反対',
      zh: '便宜的反义词',
      th: 'ตรงข้ามกับถูก',
      vi: 'Trái nghĩa với rẻ',
      es: 'Lo opuesto a barato',
    },
    translation: {
      en: "It's a bit expensive.",
      ja: 'ちょっと高いです。',
      zh: '有点贵。',
      th: 'แพงไปหน่อย',
      vi: 'Hơi đắt.',
      es: 'Es un poco caro.',
    },
  },
];

// Level 34: More Shopping
const level44Words: HangulWord[] = [
  { word: '다른 색', meaning: 'different color', romanization: 'dareun saek', category: 'shopping' },
  { word: '있어요?', meaning: 'do you have?', romanization: 'isseoyo', category: 'question' },
  { word: '살게요', meaning: 'I will buy', romanization: 'salgeyo', category: 'verb' },
  { word: '카드 돼요?', meaning: 'can I use card?', romanization: 'kadeu dwaeyo', category: 'question' },
];

const level44Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l34q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '다른 색 있어요?',
      romanization: 'dareun saek isseoyo',
      translations: {
        en: 'Do you have other colors?',
        ja: '他の色はありますか？',
        zh: '有其他颜色吗？',
        th: 'มีสีอื่นไหม?',
        vi: 'Có màu khác không?',
        es: '¿Tiene otros colores?',
      },
    },
    options: ['Do you have other colors?', 'Do you have other sizes?', 'This color is nice', 'I like this color'],
    correctAnswer: 0,
  },
  {
    id: 'l34q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '이거 살게요',
      romanization: 'igeo salgeyo',
      translations: {
        en: "I'll buy this",
        ja: 'これを買います',
        zh: '我买这个',
        th: 'ฉันจะซื้ออันนี้',
        vi: 'Tôi mua cái này',
        es: 'Me llevo esto',
      },
    },
    options: ["I'll buy this", "I'll return this", "I don't want this", 'How much is this?'],
    correctAnswer: 0,
  },
  {
    id: 'l34q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '카드 돼요?',
      romanization: 'kadeu dwaeyo',
      translations: {
        en: 'Can I use a card?',
        ja: 'カード使えますか？',
        zh: '可以刷卡吗？',
        th: 'จ่ายบัตรได้ไหม?',
        vi: 'Có dùng thẻ được không?',
        es: '¿Puedo pagar con tarjeta?',
      },
    },
    options: ['Can I use a card?', 'I will pay by card', 'Cash only', 'Where is the card?'],
    correctAnswer: 0,
  },
];

const level44Matching: MultilingualMatchingPair[] = [
  {
    id: 'l34m1',
    left: '다른 색 있어요?',
    right: { en: 'Do you have other colors?', ja: '他の色はありますか？', zh: '有其他颜色吗？', th: 'มีสีอื่นไหม?', vi: 'Có màu khác không?', es: '¿Tiene otros colores?' },
    type: 'word',
  },
  {
    id: 'l34m2',
    left: '이거 살게요',
    right: { en: "I'll buy this", ja: 'これを買います', zh: '我买这个', th: 'ฉันจะซื้ออันนี้', vi: 'Tôi mua cái này', es: 'Me llevo esto' },
    type: 'word',
  },
  {
    id: 'l34m3',
    left: '카드 돼요?',
    right: { en: 'Can I use a card?', ja: 'カード使えますか？', zh: '可以刷卡吗？', th: 'จ่ายบัตรได้ไหม?', vi: 'Có dùng thẻ được không?', es: '¿Puedo pagar con tarjeta?' },
    type: 'word',
  },
  {
    id: 'l34m4',
    left: '현금만요',
    right: { en: 'Cash only', ja: '現金のみ', zh: '只收现金', th: 'เงินสดเท่านั้น', vi: 'Chỉ nhận tiền mặt', es: 'Solo efectivo' },
    type: 'word',
  },
];

const level44FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l34f1',
    sentence: '다른 색 ___?',
    blank: '있어요',
    options: ['있어요', '없어요', '좋아요', '비싸요'],
    correctAnswer: 0,
    hint: {
      en: 'Asking if something exists',
      ja: '存在を尋ねる',
      zh: '询问是否存在',
      th: 'ถามว่ามีหรือไม่',
      vi: 'Hỏi xem có không',
      es: 'Preguntar si existe',
    },
    translation: {
      en: 'Do you have other colors?',
      ja: '他の色はありますか？',
      zh: '有其他颜色吗？',
      th: 'มีสีอื่นไหม?',
      vi: 'Có màu khác không?',
      es: '¿Tiene otros colores?',
    },
  },
  {
    id: 'l34f2',
    sentence: '이거 ___.',
    blank: '살게요',
    options: ['살게요', '볼게요', '갈게요', '먹을게요'],
    correctAnswer: 0,
    hint: {
      en: 'Action of buying',
      ja: '買う動作',
      zh: '购买的动作',
      th: 'การกระทำของการซื้อ',
      vi: 'Hành động mua',
      es: 'Acción de comprar',
    },
    translation: {
      en: "I'll buy this.",
      ja: 'これを買います。',
      zh: '我买这个。',
      th: 'ฉันจะซื้ออันนี้',
      vi: 'Tôi mua cái này.',
      es: 'Me llevo esto.',
    },
  },
];

// ============================================
// Level 35-36: Asking Directions (길 물어보기)
// ============================================

const level45Words: HangulWord[] = [
  { word: '실례합니다', meaning: 'excuse me', romanization: 'sillyehamnida', category: 'expression' },
  { word: '지하철역', meaning: 'subway station', romanization: 'jihacheol-yeok', category: 'location' },
  { word: '어디예요?', meaning: 'where is it?', romanization: 'eodiyeyo', category: 'question' },
  { word: '멀어요?', meaning: 'is it far?', romanization: 'meoreoyo', category: 'question' },
];

const level45Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l35q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '실례합니다',
      romanization: 'sillyehamnida',
      translations: {
        en: 'Excuse me',
        ja: 'すみません',
        zh: '打扰一下',
        th: 'ขอโทษครับ/ค่ะ',
        vi: 'Xin lỗi',
        es: 'Disculpe',
      },
    },
    options: ['Excuse me', 'Thank you', 'I am sorry', 'Hello'],
    correctAnswer: 0,
  },
  {
    id: 'l35q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '지하철역이 어디예요?',
      romanization: 'jihacheol-yeogi eodiyeyo',
      translations: {
        en: 'Where is the subway station?',
        ja: '地下鉄の駅はどこですか？',
        zh: '地铁站在哪里？',
        th: 'สถานีรถไฟใต้ดินอยู่ที่ไหน?',
        vi: 'Ga tàu điện ngầm ở đâu?',
        es: '¿Dónde está la estación de metro?',
      },
    },
    options: ['Where is the subway station?', 'Where is the bus stop?', 'Where is the taxi?', 'Where is the airport?'],
    correctAnswer: 0,
  },
  {
    id: 'l35q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '여기서 멀어요?',
      romanization: 'yeogiseo meoreoyo',
      translations: {
        en: 'Is it far from here?',
        ja: 'ここから遠いですか？',
        zh: '从这里远吗？',
        th: 'ไกลจากที่นี่ไหม?',
        vi: 'Có xa từ đây không?',
        es: '¿Está lejos de aquí?',
      },
    },
    options: ['Is it far from here?', 'Is it close?', 'Is it expensive?', 'Is it big?'],
    correctAnswer: 0,
  },
];

const level45Matching: MultilingualMatchingPair[] = [
  {
    id: 'l35m1',
    left: '실례합니다',
    right: { en: 'Excuse me', ja: 'すみません', zh: '打扰一下', th: 'ขอโทษครับ/ค่ะ', vi: 'Xin lỗi', es: 'Disculpe' },
    type: 'word',
  },
  {
    id: 'l35m2',
    left: '지하철역이 어디예요?',
    right: { en: 'Where is the subway station?', ja: '地下鉄の駅はどこですか？', zh: '地铁站在哪里？', th: 'สถานีรถไฟใต้ดินอยู่ที่ไหน?', vi: 'Ga tàu điện ngầm ở đâu?', es: '¿Dónde está la estación de metro?' },
    type: 'word',
  },
  {
    id: 'l35m3',
    left: '멀어요',
    right: { en: 'far', ja: '遠い', zh: '远', th: 'ไกล', vi: 'xa', es: 'lejos' },
    type: 'word',
  },
  {
    id: 'l35m4',
    left: '가까워요',
    right: { en: 'close/near', ja: '近い', zh: '近', th: 'ใกล้', vi: 'gần', es: 'cerca' },
    type: 'word',
  },
];

const level45FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l35f1',
    sentence: '지하철역이 ___?',
    blank: '어디예요',
    options: ['어디예요', '뭐예요', '얼마예요', '누구예요'],
    correctAnswer: 0,
    hint: {
      en: 'Asking about location',
      ja: '場所を尋ねる',
      zh: '询问位置',
      th: 'ถามเกี่ยวกับที่ตั้ง',
      vi: 'Hỏi về vị trí',
      es: 'Preguntar sobre la ubicación',
    },
    translation: {
      en: 'Where is the subway station?',
      ja: '地下鉄の駅はどこですか？',
      zh: '地铁站在哪里？',
      th: 'สถานีรถไฟใต้ดินอยู่ที่ไหน?',
      vi: 'Ga tàu điện ngầm ở đâu?',
      es: '¿Dónde está la estación de metro?',
    },
  },
];

// Level 36: Giving Directions
const level46Words: HangulWord[] = [
  { word: '오른쪽으로', meaning: 'to the right', romanization: 'oreunjjogeuro', category: 'direction' },
  { word: '왼쪽으로', meaning: 'to the left', romanization: 'oenjjogeuro', category: 'direction' },
  { word: '가세요', meaning: 'please go', romanization: 'gaseyo', category: 'verb' },
  { word: '직진하세요', meaning: 'go straight', romanization: 'jikjinhaseyo', category: 'verb' },
];

const level46Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l36q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '오른쪽으로 가세요',
      romanization: 'oreunjjogeuro gaseyo',
      translations: {
        en: 'Go to the right',
        ja: '右に行ってください',
        zh: '往右走',
        th: 'ไปทางขวา',
        vi: 'Đi bên phải',
        es: 'Vaya a la derecha',
      },
    },
    options: ['Go to the right', 'Go to the left', 'Go straight', 'Turn back'],
    correctAnswer: 0,
  },
  {
    id: 'l36q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '왼쪽으로 가세요',
      romanization: 'oenjjogeuro gaseyo',
      translations: {
        en: 'Go to the left',
        ja: '左に行ってください',
        zh: '往左走',
        th: 'ไปทางซ้าย',
        vi: 'Đi bên trái',
        es: 'Vaya a la izquierda',
      },
    },
    options: ['Go to the left', 'Go to the right', 'Go straight', 'Turn back'],
    correctAnswer: 0,
  },
  {
    id: 'l36q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '직진하세요',
      romanization: 'jikjinhaseyo',
      translations: {
        en: 'Go straight',
        ja: 'まっすぐ行ってください',
        zh: '直走',
        th: 'ไปตรงๆ',
        vi: 'Đi thẳng',
        es: 'Siga recto',
      },
    },
    options: ['Go straight', 'Turn left', 'Turn right', 'Turn back'],
    correctAnswer: 0,
  },
];

const level46Matching: MultilingualMatchingPair[] = [
  {
    id: 'l36m1',
    left: '오른쪽으로 가세요',
    right: { en: 'Go to the right', ja: '右に行ってください', zh: '往右走', th: 'ไปทางขวา', vi: 'Đi bên phải', es: 'Vaya a la derecha' },
    type: 'word',
  },
  {
    id: 'l36m2',
    left: '왼쪽으로 가세요',
    right: { en: 'Go to the left', ja: '左に行ってください', zh: '往左走', th: 'ไปทางซ้าย', vi: 'Đi bên trái', es: 'Vaya a la izquierda' },
    type: 'word',
  },
  {
    id: 'l36m3',
    left: '직진하세요',
    right: { en: 'Go straight', ja: 'まっすぐ行ってください', zh: '直走', th: 'ไปตรงๆ', vi: 'Đi thẳng', es: 'Siga recto' },
    type: 'word',
  },
  {
    id: 'l36m4',
    left: '감사합니다',
    right: { en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', th: 'ขอบคุณครับ/ค่ะ', vi: 'Cảm ơn', es: 'Gracias' },
    type: 'word',
  },
];

const level46FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l36f1',
    sentence: '오른쪽으로 ___.',
    blank: '가세요',
    options: ['가세요', '오세요', '있어요', '없어요'],
    correctAnswer: 0,
    hint: {
      en: 'Polite way to say "go"',
      ja: '「行ってください」の丁寧な言い方',
      zh: '"请走"的礼貌说法',
      th: 'วิธีพูดว่า "ไป" อย่างสุภาพ',
      vi: 'Cách lịch sự để nói "đi"',
      es: 'Forma educada de decir "ir"',
    },
    translation: {
      en: 'Go to the right.',
      ja: '右に行ってください。',
      zh: '往右走。',
      th: 'ไปทางขวา',
      vi: 'Đi bên phải.',
      es: 'Vaya a la derecha.',
    },
  },
];

// ============================================
// Level 37-38: At a Cafe (카페에서)
// ============================================

const level47Words: HangulWord[] = [
  { word: '아메리카노', meaning: 'Americano', romanization: 'amerikano', category: 'drink' },
  { word: '한 잔', meaning: 'one cup', romanization: 'han jan', category: 'counter' },
  { word: '뜨거운 거요', meaning: 'hot one', romanization: 'tteugeoun geoyo', category: 'adjective' },
  { word: '차가운 거요', meaning: 'cold one', romanization: 'chagaun geoyo', category: 'adjective' },
];

const level47Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l37q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '아메리카노 한 잔 주세요',
      romanization: 'amerikano han jan juseyo',
      translations: {
        en: 'One Americano, please',
        ja: 'アメリカーノを一杯ください',
        zh: '请给我一杯美式咖啡',
        th: 'ขออเมริกาโน่หนึ่งแก้วครับ/ค่ะ',
        vi: 'Cho tôi một ly Americano',
        es: 'Un Americano, por favor',
      },
    },
    options: ['One Americano, please', 'Two Americanos, please', 'One latte, please', 'One tea, please'],
    correctAnswer: 0,
  },
  {
    id: 'l37q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '뜨거운 거요, 차가운 거요?',
      romanization: 'tteugeoun geoyo, chagaun geoyo',
      translations: {
        en: 'Hot or cold?',
        ja: '温かいの、冷たいの？',
        zh: '热的还是冰的？',
        th: 'ร้อนหรือเย็น?',
        vi: 'Nóng hay lạnh?',
        es: '¿Caliente o frío?',
      },
    },
    options: ['Hot or cold?', 'Big or small?', 'Here or to go?', 'With milk?'],
    correctAnswer: 0,
  },
];

const level47Matching: MultilingualMatchingPair[] = [
  {
    id: 'l37m1',
    left: '아메리카노 한 잔 주세요',
    right: { en: 'One Americano, please', ja: 'アメリカーノを一杯ください', zh: '请给我一杯美式咖啡', th: 'ขออเมริกาโน่หนึ่งแก้วครับ/ค่ะ', vi: 'Cho tôi một ly Americano', es: 'Un Americano, por favor' },
    type: 'word',
  },
  {
    id: 'l37m2',
    left: '뜨거운 거요',
    right: { en: 'hot one', ja: '温かいの', zh: '热的', th: 'ร้อน', vi: 'nóng', es: 'caliente' },
    type: 'word',
  },
  {
    id: 'l37m3',
    left: '차가운 거요',
    right: { en: 'cold one', ja: '冷たいの', zh: '冰的', th: 'เย็น', vi: 'lạnh', es: 'frío' },
    type: 'word',
  },
  {
    id: 'l37m4',
    left: '한 잔',
    right: { en: 'one cup', ja: '一杯', zh: '一杯', th: 'หนึ่งแก้ว', vi: 'một ly', es: 'una taza' },
    type: 'word',
  },
];

const level47FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l37f1',
    sentence: '아메리카노 한 ___ 주세요.',
    blank: '잔',
    options: ['잔', '개', '병', '장'],
    correctAnswer: 0,
    hint: {
      en: 'Counter for cups/glasses',
      ja: 'コップの数え方',
      zh: '杯子的量词',
      th: 'ตัวนับสำหรับแก้ว',
      vi: 'Đếm ly/cốc',
      es: 'Contador de tazas',
    },
    translation: {
      en: 'One Americano, please.',
      ja: 'アメリカーノを一杯ください。',
      zh: '请给我一杯美式咖啡。',
      th: 'ขออเมริกาโน่หนึ่งแก้วครับ/ค่ะ',
      vi: 'Cho tôi một ly Americano.',
      es: 'Un Americano, por favor.',
    },
  },
];

// Level 38: More Cafe Conversations
const level48Words: HangulWord[] = [
  { word: '여기서 먹을 거예요', meaning: "I'll have it here", romanization: 'yeogiseo meogeul geoyeyo', category: 'expression' },
  { word: '포장해 주세요', meaning: 'to go, please', romanization: 'pojanghae juseyo', category: 'expression' },
  { word: '와이파이', meaning: 'wifi', romanization: 'waipai', category: 'noun' },
  { word: '비밀번호', meaning: 'password', romanization: 'bimilbeonho', category: 'noun' },
];

const level48Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l38q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '여기서 먹을 거예요',
      romanization: 'yeogiseo meogeul geoyeyo',
      translations: {
        en: "I'll have it here",
        ja: 'ここで食べます',
        zh: '在这里吃',
        th: 'ทานที่นี่',
        vi: 'Dùng tại đây',
        es: 'Para tomar aquí',
      },
    },
    options: ["I'll have it here", 'To go', 'I want coffee', 'How much is it?'],
    correctAnswer: 0,
  },
  {
    id: 'l38q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '포장해 주세요',
      romanization: 'pojanghae juseyo',
      translations: {
        en: 'To go, please',
        ja: 'テイクアウトでお願いします',
        zh: '打包',
        th: 'ห่อกลับบ้านครับ/ค่ะ',
        vi: 'Mang đi',
        es: 'Para llevar, por favor',
      },
    },
    options: ['To go, please', 'For here, please', 'One more, please', 'Check, please'],
    correctAnswer: 0,
  },
  {
    id: 'l38q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '와이파이 비밀번호가 뭐예요?',
      romanization: 'waipai bimilbeonhoga mwoyeyo',
      translations: {
        en: "What's the wifi password?",
        ja: 'Wi-Fiのパスワードは何ですか？',
        zh: 'wifi密码是什么？',
        th: 'รหัสไวไฟคืออะไร?',
        vi: 'Mật khẩu wifi là gì?',
        es: '¿Cuál es la contraseña del wifi?',
      },
    },
    options: ["What's the wifi password?", 'Do you have wifi?', 'Wifi is free', 'I need wifi'],
    correctAnswer: 0,
  },
];

const level48Matching: MultilingualMatchingPair[] = [
  {
    id: 'l38m1',
    left: '여기서 먹을 거예요',
    right: { en: "I'll have it here", ja: 'ここで食べます', zh: '在这里吃', th: 'ทานที่นี่', vi: 'Dùng tại đây', es: 'Para tomar aquí' },
    type: 'word',
  },
  {
    id: 'l38m2',
    left: '포장해 주세요',
    right: { en: 'To go, please', ja: 'テイクアウトでお願いします', zh: '打包', th: 'ห่อกลับบ้านครับ/ค่ะ', vi: 'Mang đi', es: 'Para llevar, por favor' },
    type: 'word',
  },
  {
    id: 'l38m3',
    left: '와이파이',
    right: { en: 'wifi', ja: 'Wi-Fi', zh: 'wifi', th: 'ไวไฟ', vi: 'wifi', es: 'wifi' },
    type: 'word',
  },
  {
    id: 'l38m4',
    left: '비밀번호',
    right: { en: 'password', ja: 'パスワード', zh: '密码', th: 'รหัส', vi: 'mật khẩu', es: 'contraseña' },
    type: 'word',
  },
];

const level48FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l38f1',
    sentence: '___해 주세요.',
    blank: '포장',
    options: ['포장', '주문', '계산', '배달'],
    correctAnswer: 0,
    hint: {
      en: 'When you want to take food to go',
      ja: '持ち帰りたい時',
      zh: '想打包时',
      th: 'เมื่อคุณต้องการนำอาหารกลับบ้าน',
      vi: 'Khi bạn muốn mang đi',
      es: 'Cuando quieres llevar comida',
    },
    translation: {
      en: 'To go, please.',
      ja: 'テイクアウトでお願いします。',
      zh: '打包。',
      th: 'ห่อกลับบ้านครับ/ค่ะ',
      vi: 'Mang đi.',
      es: 'Para llevar, por favor.',
    },
  },
  {
    id: 'l38f2',
    sentence: '와이파이 ___가 뭐예요?',
    blank: '비밀번호',
    options: ['비밀번호', '이름', '번호', '가격'],
    correctAnswer: 0,
    hint: {
      en: 'Secret code to access',
      ja: 'アクセスするための秘密のコード',
      zh: '访问的密码',
      th: 'รหัสลับในการเข้าถึง',
      vi: 'Mã bí mật để truy cập',
      es: 'Código secreto para acceder',
    },
    translation: {
      en: "What's the wifi password?",
      ja: 'Wi-Fiのパスワードは何ですか？',
      zh: 'wifi密码是什么？',
      th: 'รหัสไวไฟคืออะไร?',
      vi: 'Mật khẩu wifi là gì?',
      es: '¿Cuál es la contraseña del wifi?',
    },
  },
];

// ============================================
// Level 39-40: Making Plans (약속하기)
// ============================================

const level49Words: HangulWord[] = [
  { word: '시간 있어요?', meaning: 'do you have time?', romanization: 'sigan isseoyo', category: 'question' },
  { word: '어디서', meaning: 'where', romanization: 'eodiseo', category: 'question' },
  { word: '만날까요?', meaning: 'shall we meet?', romanization: 'mannalkkayo', category: 'question' },
  { word: '몇 시에', meaning: 'at what time', romanization: 'myeot sie', category: 'question' },
];

const level49Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l39q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '내일 시간 있어요?',
      romanization: 'naeil sigan isseoyo',
      translations: {
        en: 'Are you free tomorrow?',
        ja: '明日、時間ありますか？',
        zh: '明天有空吗？',
        th: 'พรุ่งนี้ว่างไหม?',
        vi: 'Ngày mai bạn rảnh không?',
        es: '¿Estás libre mañana?',
      },
    },
    options: ['Are you free tomorrow?', 'What time is it?', 'Where is it?', "What's your name?"],
    correctAnswer: 0,
  },
  {
    id: 'l39q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '어디서 만날까요?',
      romanization: 'eodiseo mannalkkayo',
      translations: {
        en: 'Where should we meet?',
        ja: 'どこで会いましょうか？',
        zh: '在哪里见面？',
        th: 'เราจะเจอกันที่ไหน?',
        vi: 'Mình gặp nhau ở đâu?',
        es: '¿Dónde nos encontramos?',
      },
    },
    options: ['Where should we meet?', 'When should we meet?', 'Why should we meet?', 'Who should we meet?'],
    correctAnswer: 0,
  },
  {
    id: 'l39q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '몇 시에 만날까요?',
      romanization: 'myeot sie mannalkkayo',
      translations: {
        en: 'What time should we meet?',
        ja: '何時に会いましょうか？',
        zh: '几点见面？',
        th: 'เราจะเจอกันกี่โมง?',
        vi: 'Mấy giờ mình gặp nhau?',
        es: '¿A qué hora nos encontramos?',
      },
    },
    options: ['What time should we meet?', 'Where should we meet?', 'Who should we meet?', 'How should we meet?'],
    correctAnswer: 0,
  },
];

const level49Matching: MultilingualMatchingPair[] = [
  {
    id: 'l39m1',
    left: '내일 시간 있어요?',
    right: { en: 'Are you free tomorrow?', ja: '明日、時間ありますか？', zh: '明天有空吗？', th: 'พรุ่งนี้ว่างไหม?', vi: 'Ngày mai bạn rảnh không?', es: '¿Estás libre mañana?' },
    type: 'word',
  },
  {
    id: 'l39m2',
    left: '어디서 만날까요?',
    right: { en: 'Where should we meet?', ja: 'どこで会いましょうか？', zh: '在哪里见面？', th: 'เราจะเจอกันที่ไหน?', vi: 'Mình gặp nhau ở đâu?', es: '¿Dónde nos encontramos?' },
    type: 'word',
  },
  {
    id: 'l39m3',
    left: '몇 시에 만날까요?',
    right: { en: 'What time should we meet?', ja: '何時に会いましょうか？', zh: '几点见面？', th: 'เราจะเจอกันกี่โมง?', vi: 'Mấy giờ mình gặp nhau?', es: '¿A qué hora nos encontramos?' },
    type: 'word',
  },
  {
    id: 'l39m4',
    left: '시간 있어요?',
    right: { en: 'Do you have time?', ja: '時間ありますか？', zh: '有空吗？', th: 'มีเวลาไหม?', vi: 'Bạn có thời gian không?', es: '¿Tienes tiempo?' },
    type: 'word',
  },
];

const level49FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l39f1',
    sentence: '내일 시간 ___?',
    blank: '있어요',
    options: ['있어요', '없어요', '좋아요', '싫어요'],
    correctAnswer: 0,
    hint: {
      en: 'Asking if someone has something',
      ja: '持っているか尋ねる',
      zh: '问某人是否有',
      th: 'ถามว่ามีหรือไม่',
      vi: 'Hỏi ai đó có không',
      es: 'Preguntar si alguien tiene',
    },
    translation: {
      en: 'Are you free tomorrow?',
      ja: '明日、時間ありますか？',
      zh: '明天有空吗？',
      th: 'พรุ่งนี้ว่างไหม?',
      vi: 'Ngày mai bạn rảnh không?',
      es: '¿Estás libre mañana?',
    },
  },
  {
    id: 'l39f2',
    sentence: '어디서 ___?',
    blank: '만날까요',
    options: ['만날까요', '갈까요', '먹을까요', '볼까요'],
    correctAnswer: 0,
    hint: {
      en: 'Suggesting to meet',
      ja: '会うことを提案する',
      zh: '建议见面',
      th: 'เสนอให้พบกัน',
      vi: 'Đề nghị gặp mặt',
      es: 'Sugerir quedar',
    },
    translation: {
      en: 'Where should we meet?',
      ja: 'どこで会いましょうか？',
      zh: '在哪里见面？',
      th: 'เราจะเจอกันที่ไหน?',
      vi: 'Mình gặp nhau ở đâu?',
      es: '¿Dónde nos encontramos?',
    },
  },
];

// Level 40: Phone Calls & Apologies
const level50Words: HangulWord[] = [
  { word: '여보세요', meaning: 'hello (on phone)', romanization: 'yeoboseyo', category: 'expression' },
  { word: '늦어서', meaning: 'because I am late', romanization: 'neujeoseo', category: 'expression' },
  { word: '죄송해요', meaning: 'I am sorry', romanization: 'joesonghaeyo', category: 'expression' },
  { word: '다음에 또 만나요', meaning: 'see you again next time', romanization: 'daeume tto mannayo', category: 'expression' },
];

const level50Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l40q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '여보세요?',
      romanization: 'yeoboseyo',
      translations: {
        en: 'Hello? (on phone)',
        ja: 'もしもし',
        zh: '喂？',
        th: 'ฮัลโหล?',
        vi: 'A lô?',
        es: '¿Hola? (teléfono)',
      },
    },
    options: ['Hello? (on phone)', 'Hello (in person)', 'Goodbye', 'Thank you'],
    correctAnswer: 0,
  },
  {
    id: 'l40q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '늦어서 죄송해요',
      romanization: 'neujeoseo joesonghaeyo',
      translations: {
        en: "Sorry I'm late",
        ja: '遅れてすみません',
        zh: '抱歉我迟到了',
        th: 'ขอโทษที่มาสาย',
        vi: 'Xin lỗi tôi đến muộn',
        es: 'Perdón por llegar tarde',
      },
    },
    options: ["Sorry I'm late", "I'm not late", 'You are late', 'Why are you late?'],
    correctAnswer: 0,
  },
  {
    id: 'l40q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '다음에 또 만나요',
      romanization: 'daeume tto mannayo',
      translations: {
        en: "Let's meet again",
        ja: 'また会いましょう',
        zh: '下次再见',
        th: 'ไว้เจอกันใหม่นะ',
        vi: 'Hẹn gặp lại lần sau',
        es: 'Nos vemos otra vez',
      },
    },
    options: ["Let's meet again", 'Nice to meet you', 'See you tomorrow', 'Goodbye forever'],
    correctAnswer: 0,
  },
];

const level50Matching: MultilingualMatchingPair[] = [
  {
    id: 'l40m1',
    left: '여보세요?',
    right: { en: 'Hello? (on phone)', ja: 'もしもし', zh: '喂？', th: 'ฮัลโหล?', vi: 'A lô?', es: '¿Hola? (teléfono)' },
    type: 'word',
  },
  {
    id: 'l40m2',
    left: '늦어서 죄송해요',
    right: { en: "Sorry I'm late", ja: '遅れてすみません', zh: '抱歉我迟到了', th: 'ขอโทษที่มาสาย', vi: 'Xin lỗi tôi đến muộn', es: 'Perdón por llegar tarde' },
    type: 'word',
  },
  {
    id: 'l40m3',
    left: '다음에 또 만나요',
    right: { en: "Let's meet again", ja: 'また会いましょう', zh: '下次再见', th: 'ไว้เจอกันใหม่นะ', vi: 'Hẹn gặp lại lần sau', es: 'Nos vemos otra vez' },
    type: 'word',
  },
  {
    id: 'l40m4',
    left: '죄송해요',
    right: { en: 'I am sorry', ja: 'すみません', zh: '对不起', th: 'ขอโทษ', vi: 'Xin lỗi', es: 'Lo siento' },
    type: 'word',
  },
];

const level50FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l40f1',
    sentence: '늦어서 ___.',
    blank: '죄송해요',
    options: ['죄송해요', '감사해요', '좋아요', '괜찮아요'],
    correctAnswer: 0,
    hint: {
      en: 'Expression of apology',
      ja: '謝罪の表現',
      zh: '道歉的表达',
      th: 'การแสดงออกของการขอโทษ',
      vi: 'Cách diễn đạt xin lỗi',
      es: 'Expresión de disculpa',
    },
    translation: {
      en: "Sorry I'm late.",
      ja: '遅れてすみません。',
      zh: '抱歉我迟到了。',
      th: 'ขอโทษที่มาสาย',
      vi: 'Xin lỗi tôi đến muộn.',
      es: 'Perdón por llegar tarde.',
    },
  },
  {
    id: 'l40f2',
    sentence: '다음에 또 ___.',
    blank: '만나요',
    options: ['만나요', '가요', '해요', '봐요'],
    correctAnswer: 0,
    hint: {
      en: 'Action of meeting',
      ja: '会う動作',
      zh: '见面的动作',
      th: 'การกระทำของการพบ',
      vi: 'Hành động gặp gỡ',
      es: 'Acción de encontrarse',
    },
    translation: {
      en: "Let's meet again.",
      ja: 'また会いましょう。',
      zh: '下次再见。',
      th: 'ไว้เจอกันใหม่นะ',
      vi: 'Hẹn gặp lại lần sau.',
      es: 'Nos vemos otra vez.',
    },
  },
];

// ============================================
// Level 51-52: At a Hotel (호텔에서)
// ============================================

const level51Words: HangulWord[] = [
  { word: '예약했어요', meaning: 'I made a reservation', romanization: 'yeyakhaesseoyo', category: 'verb' },
  { word: '체크인', meaning: 'check-in', romanization: 'chekeu-in', category: 'noun' },
  { word: '며칠', meaning: 'how many days', romanization: 'myeochil', category: 'question' },
  { word: '열쇠', meaning: 'key', romanization: 'yeolsoe', category: 'noun' },
];

const level51Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l51q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '예약했어요',
      romanization: 'yeyakhaesseoyo',
      translations: { en: 'I made a reservation', ja: '予約しました', zh: '我预约了', th: 'จองแล้ว', vi: 'Tôi đã đặt trước', es: 'Tengo una reserva' },
    },
    options: ['I made a reservation', 'I want to reserve', 'Do you have a room?', 'How much is a room?'],
    correctAnswer: 0,
  },
  {
    id: 'l51q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '체크인 하고 싶어요',
      romanization: 'chekeu-in hago sipeoyo',
      translations: { en: 'I want to check in', ja: 'チェックインしたいです', zh: '我想办理入住', th: 'อยากเช็คอิน', vi: 'Tôi muốn nhận phòng', es: 'Quiero hacer el check-in' },
    },
    options: ['I want to check in', 'I want to check out', 'I want a room', 'I want breakfast'],
    correctAnswer: 0,
  },
  {
    id: 'l51q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '며칠 묵을 거예요?',
      romanization: 'myeochil mugeul geoyeyo',
      translations: { en: 'How many nights will you stay?', ja: '何泊されますか？', zh: '住几天？', th: 'จะพักกี่คืน?', vi: 'Bạn ở mấy đêm?', es: '¿Cuántas noches se quedará?' },
    },
    options: ['How many nights will you stay?', 'When will you arrive?', 'What room do you want?', 'How much is it?'],
    correctAnswer: 0,
  },
];

const level51Matching: MultilingualMatchingPair[] = [
  { id: 'l51m1', left: '예약했어요', right: { en: 'I made a reservation', ja: '予約しました', zh: '我预约了', th: 'จองแล้ว', vi: 'Tôi đã đặt trước', es: 'Tengo una reserva' }, type: 'word' },
  { id: 'l51m2', left: '체크인', right: { en: 'check-in', ja: 'チェックイン', zh: '入住', th: 'เช็คอิน', vi: 'nhận phòng', es: 'check-in' }, type: 'word' },
  { id: 'l51m3', left: '체크아웃', right: { en: 'check-out', ja: 'チェックアウト', zh: '退房', th: 'เช็คเอาท์', vi: 'trả phòng', es: 'check-out' }, type: 'word' },
  { id: 'l51m4', left: '열쇠', right: { en: 'key', ja: '鍵', zh: '钥匙', th: 'กุญแจ', vi: 'chìa khóa', es: 'llave' }, type: 'word' },
];

const level51FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l51f1',
    sentence: '체크인 하고 ___.',
    blank: '싶어요',
    options: ['싶어요', '있어요', '없어요', '좋아요'],
    correctAnswer: 0,
    hint: { en: 'Expression of wanting', ja: '望みの表現', zh: '想要的表达', th: 'การแสดงออกของความต้องการ', vi: 'Diễn đạt muốn', es: 'Expresión de deseo' },
    translation: { en: 'I want to check in.', ja: 'チェックインしたいです。', zh: '我想办理入住。', th: 'อยากเช็คอิน', vi: 'Tôi muốn nhận phòng.', es: 'Quiero hacer el check-in.' },
  },
];

// Level 52: More Hotel Conversations
const level52Words: HangulWord[] = [
  { word: '방이 있어요?', meaning: 'do you have a room?', romanization: 'bangi isseoyo', category: 'question' },
  { word: '에어컨', meaning: 'air conditioner', romanization: 'eeokeon', category: 'noun' },
  { word: '안 돼요', meaning: "it doesn't work", romanization: 'an dwaeyo', category: 'expression' },
  { word: '고쳐 주세요', meaning: 'please fix it', romanization: 'gochyeo juseyo', category: 'expression' },
];

const level52Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l52q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '오늘 방이 있어요?',
      romanization: 'oneul bangi isseoyo',
      translations: { en: 'Do you have a room for today?', ja: '今日、部屋はありますか？', zh: '今天有房间吗？', th: 'วันนี้มีห้องว่างไหม?', vi: 'Hôm nay có phòng không?', es: '¿Tiene habitación para hoy?' },
    },
    options: ['Do you have a room for today?', 'How much is a room?', 'I want a big room', 'Where is my room?'],
    correctAnswer: 0,
  },
  {
    id: 'l52q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '에어컨이 안 돼요',
      romanization: 'eeokeon-i an dwaeyo',
      translations: { en: "The air conditioner doesn't work", ja: 'エアコンが動きません', zh: '空调不工作', th: 'แอร์เสีย', vi: 'Điều hòa không hoạt động', es: 'El aire acondicionado no funciona' },
    },
    options: ["The air conditioner doesn't work", 'Turn on the air conditioner', 'The room is cold', 'I need air'],
    correctAnswer: 0,
  },
  {
    id: 'l52q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '고쳐 주세요',
      romanization: 'gochyeo juseyo',
      translations: { en: 'Please fix it', ja: '直してください', zh: '请修理', th: 'ช่วยซ่อมให้หน่อย', vi: 'Làm ơn sửa giúp tôi', es: 'Por favor arréglelo' },
    },
    options: ['Please fix it', 'Please clean it', 'Please bring it', 'Please take it'],
    correctAnswer: 0,
  },
];

const level52Matching: MultilingualMatchingPair[] = [
  { id: 'l52m1', left: '방이 있어요?', right: { en: 'Do you have a room?', ja: '部屋はありますか？', zh: '有房间吗？', th: 'มีห้องว่างไหม?', vi: 'Có phòng không?', es: '¿Tiene habitación?' }, type: 'word' },
  { id: 'l52m2', left: '에어컨이 안 돼요', right: { en: "AC doesn't work", ja: 'エアコンが動かない', zh: '空调坏了', th: 'แอร์เสีย', vi: 'Điều hòa hỏng', es: 'El AC no funciona' }, type: 'word' },
  { id: 'l52m3', left: '고쳐 주세요', right: { en: 'Please fix it', ja: '直してください', zh: '请修理', th: 'ช่วยซ่อมให้หน่อย', vi: 'Sửa giúp tôi', es: 'Por favor arréglelo' }, type: 'word' },
  { id: 'l52m4', left: '와이파이', right: { en: 'wifi', ja: 'Wi-Fi', zh: 'wifi', th: 'ไวไฟ', vi: 'wifi', es: 'wifi' }, type: 'word' },
];

const level52FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l52f1',
    sentence: '에어컨이 ___ 돼요.',
    blank: '안',
    options: ['안', '잘', '좀', '더'],
    correctAnswer: 0,
    hint: { en: 'Negation', ja: '否定', zh: '否定', th: 'ปฏิเสธ', vi: 'Phủ định', es: 'Negación' },
    translation: { en: "The air conditioner doesn't work.", ja: 'エアコンが動きません。', zh: '空调不工作。', th: 'แอร์เสีย', vi: 'Điều hòa không hoạt động.', es: 'El aire acondicionado no funciona.' },
  },
];

// ============================================
// Level 53-54: Hospital/Pharmacy (병원/약국)
// ============================================

const level53Words: HangulWord[] = [
  { word: '아파요', meaning: "it hurts / I'm sick", romanization: 'apayo', category: 'adjective' },
  { word: '머리', meaning: 'head', romanization: 'meori', category: 'body' },
  { word: '배', meaning: 'stomach', romanization: 'bae', category: 'body' },
  { word: '약', meaning: 'medicine', romanization: 'yak', category: 'noun' },
];

const level53Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l53q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '머리가 아파요',
      romanization: 'meoriga apayo',
      translations: { en: 'I have a headache', ja: '頭が痛いです', zh: '头疼', th: 'ปวดหัว', vi: 'Tôi đau đầu', es: 'Me duele la cabeza' },
    },
    options: ['I have a headache', 'I have a stomachache', 'My leg hurts', 'I feel dizzy'],
    correctAnswer: 0,
  },
  {
    id: 'l53q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '배가 아파요',
      romanization: 'baega apayo',
      translations: { en: 'I have a stomachache', ja: 'お腹が痛いです', zh: '肚子疼', th: 'ปวดท้อง', vi: 'Tôi đau bụng', es: 'Me duele el estómago' },
    },
    options: ['I have a stomachache', 'I have a headache', "I'm hungry", "I'm full"],
    correctAnswer: 0,
  },
  {
    id: 'l53q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '약 주세요',
      romanization: 'yak juseyo',
      translations: { en: 'Please give me medicine', ja: '薬をください', zh: '请给我药', th: 'ขอยาหน่อย', vi: 'Cho tôi thuốc', es: 'Deme medicina, por favor' },
    },
    options: ['Please give me medicine', 'Where is the pharmacy?', 'I need a doctor', 'Is this medicine?'],
    correctAnswer: 0,
  },
];

const level53Matching: MultilingualMatchingPair[] = [
  { id: 'l53m1', left: '머리가 아파요', right: { en: 'I have a headache', ja: '頭が痛いです', zh: '头疼', th: 'ปวดหัว', vi: 'Tôi đau đầu', es: 'Me duele la cabeza' }, type: 'word' },
  { id: 'l53m2', left: '배가 아파요', right: { en: 'I have a stomachache', ja: 'お腹が痛いです', zh: '肚子疼', th: 'ปวดท้อง', vi: 'Tôi đau bụng', es: 'Me duele el estómago' }, type: 'word' },
  { id: 'l53m3', left: '약', right: { en: 'medicine', ja: '薬', zh: '药', th: 'ยา', vi: 'thuốc', es: 'medicina' }, type: 'word' },
  { id: 'l53m4', left: '병원', right: { en: 'hospital', ja: '病院', zh: '医院', th: 'โรงพยาบาล', vi: 'bệnh viện', es: 'hospital' }, type: 'word' },
];

const level53FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l53f1',
    sentence: '머리가 ___.',
    blank: '아파요',
    options: ['아파요', '좋아요', '커요', '작아요'],
    correctAnswer: 0,
    hint: { en: 'Expression of pain', ja: '痛みの表現', zh: '疼痛的表达', th: 'การแสดงออกของความเจ็บปวด', vi: 'Diễn đạt đau', es: 'Expresión de dolor' },
    translation: { en: 'I have a headache.', ja: '頭が痛いです。', zh: '头疼。', th: 'ปวดหัว', vi: 'Tôi đau đầu.', es: 'Me duele la cabeza.' },
  },
];

// Level 54: More Medical Expressions
const level54Words: HangulWord[] = [
  { word: '감기', meaning: 'cold (illness)', romanization: 'gamgi', category: 'illness' },
  { word: '열이 나요', meaning: 'I have a fever', romanization: 'yeori nayo', category: 'symptom' },
  { word: '하루에 세 번', meaning: 'three times a day', romanization: 'harue se beon', category: 'instruction' },
  { word: '식후에', meaning: 'after meals', romanization: 'siku-e', category: 'instruction' },
];

const level54Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l54q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '감기에 걸렸어요',
      romanization: 'gamgie geollyeosseoyo',
      translations: { en: 'I caught a cold', ja: '風邪をひきました', zh: '我感冒了', th: 'เป็นหวัด', vi: 'Tôi bị cảm', es: 'Tengo un resfriado' },
    },
    options: ['I caught a cold', 'I have a fever', 'I feel dizzy', "I'm tired"],
    correctAnswer: 0,
  },
  {
    id: 'l54q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '열이 나요',
      romanization: 'yeori nayo',
      translations: { en: 'I have a fever', ja: '熱があります', zh: '我发烧了', th: 'มีไข้', vi: 'Tôi bị sốt', es: 'Tengo fiebre' },
    },
    options: ['I have a fever', 'I feel cold', "I'm sweating", 'I feel better'],
    correctAnswer: 0,
  },
  {
    id: 'l54q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '하루에 세 번 드세요',
      romanization: 'harue se beon deuseyo',
      translations: { en: 'Take it three times a day', ja: '1日3回飲んでください', zh: '每天三次', th: 'วันละสามครั้ง', vi: 'Uống ba lần một ngày', es: 'Tómelo tres veces al día' },
    },
    options: ['Take it three times a day', 'Take it once a day', 'Take it before meals', 'Take it with water'],
    correctAnswer: 0,
  },
];

const level54Matching: MultilingualMatchingPair[] = [
  { id: 'l54m1', left: '감기에 걸렸어요', right: { en: 'I caught a cold', ja: '風邪をひきました', zh: '我感冒了', th: 'เป็นหวัด', vi: 'Tôi bị cảm', es: 'Tengo un resfriado' }, type: 'word' },
  { id: 'l54m2', left: '열이 나요', right: { en: 'I have a fever', ja: '熱があります', zh: '我发烧了', th: 'มีไข้', vi: 'Tôi bị sốt', es: 'Tengo fiebre' }, type: 'word' },
  { id: 'l54m3', left: '하루에 세 번', right: { en: 'three times a day', ja: '1日3回', zh: '每天三次', th: 'วันละสามครั้ง', vi: 'ba lần một ngày', es: 'tres veces al día' }, type: 'word' },
  { id: 'l54m4', left: '식후에', right: { en: 'after meals', ja: '食後に', zh: '饭后', th: 'หลังอาหาร', vi: 'sau bữa ăn', es: 'después de comer' }, type: 'word' },
];

const level54FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l54f1',
    sentence: '하루에 세 ___ 드세요.',
    blank: '번',
    options: ['번', '개', '잔', '명'],
    correctAnswer: 0,
    hint: { en: 'Counter for times/frequency', ja: '回数の数え方', zh: '次数的量词', th: 'ตัวนับสำหรับครั้ง', vi: 'Đếm số lần', es: 'Contador de veces' },
    translation: { en: 'Take it three times a day.', ja: '1日3回飲んでください。', zh: '每天三次。', th: 'วันละสามครั้ง', vi: 'Uống ba lần một ngày.', es: 'Tómelo tres veces al día.' },
  },
];

// ============================================
// Level 55-56: Transportation (교통수단)
// ============================================

const level55Words: HangulWord[] = [
  { word: '버스', meaning: 'bus', romanization: 'beoseu', category: 'transportation' },
  { word: '어디서 타요?', meaning: 'where do I get on?', romanization: 'eodiseo tayo', category: 'question' },
  { word: '내려 주세요', meaning: 'please let me off', romanization: 'naeryeo juseyo', category: 'expression' },
  { word: '다음 정류장', meaning: 'next stop', romanization: 'daeum jeongnyujang', category: 'noun' },
];

const level55Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l55q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '이 버스 서울역 가요?',
      romanization: 'i beoseu seoul-yeok gayo',
      translations: { en: 'Does this bus go to Seoul Station?', ja: 'このバスはソウル駅に行きますか？', zh: '这辆公交去首尔站吗？', th: 'รถบัสนี้ไปโซลสเตชั่นไหม?', vi: 'Xe buýt này có đến ga Seoul không?', es: '¿Este autobús va a la estación de Seúl?' },
    },
    options: ['Does this bus go to Seoul Station?', 'Where is the bus stop?', 'When does the bus come?', 'How much is the bus fare?'],
    correctAnswer: 0,
  },
  {
    id: 'l55q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '버스 어디서 타요?',
      romanization: 'beoseu eodiseo tayo',
      translations: { en: 'Where do I take the bus?', ja: 'バスはどこで乗りますか？', zh: '在哪里乘公交？', th: 'ขึ้นรถบัสที่ไหน?', vi: 'Tôi bắt xe buýt ở đâu?', es: '¿Dónde tomo el autobús?' },
    },
    options: ['Where do I take the bus?', 'When does the bus come?', 'How much is the bus?', 'Is there a bus?'],
    correctAnswer: 0,
  },
  {
    id: 'l55q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '다음 정류장에서 내려 주세요',
      romanization: 'daeum jeongnyujang-eseo naeryeo juseyo',
      translations: { en: 'Please let me off at the next stop', ja: '次の停留所で降ろしてください', zh: '请在下一站让我下车', th: 'กรุณาจอดที่ป้ายต่อไป', vi: 'Cho tôi xuống ở trạm tiếp theo', es: 'Déjeme en la próxima parada, por favor' },
    },
    options: ['Please let me off at the next stop', 'Where is the next stop?', 'How many stops?', 'Is this the last stop?'],
    correctAnswer: 0,
  },
];

const level55Matching: MultilingualMatchingPair[] = [
  { id: 'l55m1', left: '버스 어디서 타요?', right: { en: 'Where do I take the bus?', ja: 'バスはどこで乗りますか？', zh: '在哪里乘公交？', th: 'ขึ้นรถบัสที่ไหน?', vi: 'Bắt xe buýt ở đâu?', es: '¿Dónde tomo el autobús?' }, type: 'word' },
  { id: 'l55m2', left: '내려 주세요', right: { en: 'Please let me off', ja: '降ろしてください', zh: '请让我下车', th: 'ขอลงหน่อย', vi: 'Cho tôi xuống', es: 'Déjeme bajar' }, type: 'word' },
  { id: 'l55m3', left: '다음 정류장', right: { en: 'next stop', ja: '次の停留所', zh: '下一站', th: 'ป้ายต่อไป', vi: 'trạm tiếp theo', es: 'próxima parada' }, type: 'word' },
  { id: 'l55m4', left: '버스 정류장', right: { en: 'bus stop', ja: 'バス停', zh: '公交站', th: 'ป้ายรถบัส', vi: 'trạm xe buýt', es: 'parada de autobús' }, type: 'word' },
];

const level55FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l55f1',
    sentence: '다음 정류장에서 ___ 주세요.',
    blank: '내려',
    options: ['내려', '올려', '타', '가'],
    correctAnswer: 0,
    hint: { en: 'Action of getting off', ja: '降りる動作', zh: '下车的动作', th: 'การกระทำของการลง', vi: 'Hành động xuống xe', es: 'Acción de bajar' },
    translation: { en: 'Please let me off at the next stop.', ja: '次の停留所で降ろしてください。', zh: '请在下一站让我下车。', th: 'กรุณาจอดที่ป้ายต่อไป', vi: 'Cho tôi xuống ở trạm tiếp theo.', es: 'Déjeme en la próxima parada, por favor.' },
  },
];

// Level 56: Taxi
const level56Words: HangulWord[] = [
  { word: '택시', meaning: 'taxi', romanization: 'taeksi', category: 'transportation' },
  { word: '여기서 세워 주세요', meaning: 'please stop here', romanization: 'yeogiseo sewo juseyo', category: 'expression' },
  { word: '얼마나 걸려요?', meaning: 'how long does it take?', romanization: 'eolmana geollyeoyo', category: 'question' },
  { word: '빨리', meaning: 'quickly', romanization: 'ppalli', category: 'adverb' },
];

const level56Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l56q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '여기서 세워 주세요',
      romanization: 'yeogiseo sewo juseyo',
      translations: { en: 'Please stop here', ja: 'ここで止めてください', zh: '请在这里停车', th: 'กรุณาจอดที่นี่', vi: 'Làm ơn dừng ở đây', es: 'Por favor pare aquí' },
    },
    options: ['Please stop here', 'Please go faster', 'Please turn right', 'Please turn left'],
    correctAnswer: 0,
  },
  {
    id: 'l56q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '공항까지 얼마나 걸려요?',
      romanization: 'gonghang-kkaji eolmana geollyeoyo',
      translations: { en: 'How long does it take to the airport?', ja: '空港までどのくらいかかりますか？', zh: '到机场要多久？', th: 'ไปสนามบินใช้เวลานานเท่าไหร่?', vi: 'Đến sân bay mất bao lâu?', es: '¿Cuánto tiempo se tarda al aeropuerto?' },
    },
    options: ['How long does it take to the airport?', 'How much to the airport?', 'Where is the airport?', 'Is the airport far?'],
    correctAnswer: 0,
  },
  {
    id: 'l56q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '빨리 가 주세요',
      romanization: 'ppalli ga juseyo',
      translations: { en: 'Please go quickly', ja: '急いでください', zh: '请快点走', th: 'กรุณาไปเร็วๆ', vi: 'Làm ơn đi nhanh', es: 'Por favor vaya rápido' },
    },
    options: ['Please go quickly', 'Please go slowly', 'Please stop', 'Please wait'],
    correctAnswer: 0,
  },
];

const level56Matching: MultilingualMatchingPair[] = [
  { id: 'l56m1', left: '여기서 세워 주세요', right: { en: 'Please stop here', ja: 'ここで止めてください', zh: '请在这里停车', th: 'กรุณาจอดที่นี่', vi: 'Dừng ở đây', es: 'Por favor pare aquí' }, type: 'word' },
  { id: 'l56m2', left: '얼마나 걸려요?', right: { en: 'How long does it take?', ja: 'どのくらいかかりますか？', zh: '要多久？', th: 'ใช้เวลานานเท่าไหร่?', vi: 'Mất bao lâu?', es: '¿Cuánto tiempo tarda?' }, type: 'word' },
  { id: 'l56m3', left: '빨리 가 주세요', right: { en: 'Please go quickly', ja: '急いでください', zh: '请快点走', th: 'กรุณาไปเร็วๆ', vi: 'Đi nhanh', es: 'Por favor vaya rápido' }, type: 'word' },
  { id: 'l56m4', left: '천천히', right: { en: 'slowly', ja: 'ゆっくり', zh: '慢慢地', th: 'ช้าๆ', vi: 'chậm', es: 'despacio' }, type: 'word' },
];

const level56FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l56f1',
    sentence: '___서 세워 주세요.',
    blank: '여기',
    options: ['여기', '거기', '저기', '어디'],
    correctAnswer: 0,
    hint: { en: 'Here (close to speaker)', ja: 'ここ（話し手に近い）', zh: '这里（靠近说话者）', th: 'ที่นี่ (ใกล้ผู้พูด)', vi: 'Ở đây (gần người nói)', es: 'Aquí (cerca del hablante)' },
    translation: { en: 'Please stop here.', ja: 'ここで止めてください。', zh: '请在这里停车。', th: 'กรุณาจอดที่นี่', vi: 'Làm ơn dừng ở đây.', es: 'Por favor pare aquí.' },
  },
];

// ============================================
// Level 57-58: Emergency Situations (긴급 상황)
// ============================================

const level57Words: HangulWord[] = [
  { word: '도와주세요!', meaning: 'Help!', romanization: 'dowajuseyo', category: 'emergency' },
  { word: '경찰', meaning: 'police', romanization: 'gyeongchal', category: 'noun' },
  { word: '불러 주세요', meaning: 'please call', romanization: 'bulleo juseyo', category: 'expression' },
  { word: '위험해요', meaning: "it's dangerous", romanization: 'wiheomhaeyo', category: 'warning' },
];

const level57Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l57q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '도와주세요!',
      romanization: 'dowajuseyo',
      translations: { en: 'Help!', ja: '助けて！', zh: '救命！', th: 'ช่วยด้วย!', vi: 'Cứu tôi!', es: '¡Ayuda!' },
    },
    options: ['Help!', 'Thank you!', 'Goodbye!', 'Hello!'],
    correctAnswer: 0,
  },
  {
    id: 'l57q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '경찰 불러 주세요',
      romanization: 'gyeongchal bulleo juseyo',
      translations: { en: 'Please call the police', ja: '警察を呼んでください', zh: '请叫警察', th: 'กรุณาเรียกตำรวจ', vi: 'Làm ơn gọi cảnh sát', es: 'Por favor llame a la policía' },
    },
    options: ['Please call the police', 'Please call an ambulance', 'Please call a taxi', 'Please call my friend'],
    correctAnswer: 0,
  },
  {
    id: 'l57q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '위험해요! 조심하세요!',
      romanization: 'wiheomhaeyo! josimhaseyo',
      translations: { en: "It's dangerous! Be careful!", ja: '危険です！気をつけて！', zh: '危险！小心！', th: 'อันตราย! ระวัง!', vi: 'Nguy hiểm! Cẩn thận!', es: '¡Es peligroso! ¡Tenga cuidado!' },
    },
    options: ["It's dangerous! Be careful!", "It's safe here", 'Come here', 'Go away'],
    correctAnswer: 0,
  },
];

const level57Matching: MultilingualMatchingPair[] = [
  { id: 'l57m1', left: '도와주세요!', right: { en: 'Help!', ja: '助けて！', zh: '救命！', th: 'ช่วยด้วย!', vi: 'Cứu tôi!', es: '¡Ayuda!' }, type: 'word' },
  { id: 'l57m2', left: '경찰 불러 주세요', right: { en: 'Please call the police', ja: '警察を呼んでください', zh: '请叫警察', th: 'เรียกตำรวจ', vi: 'Gọi cảnh sát', es: 'Llame a la policía' }, type: 'word' },
  { id: 'l57m3', left: '위험해요', right: { en: "It's dangerous", ja: '危険です', zh: '危险', th: 'อันตราย', vi: 'Nguy hiểm', es: 'Es peligroso' }, type: 'word' },
  { id: 'l57m4', left: '조심하세요', right: { en: 'Be careful', ja: '気をつけて', zh: '小心', th: 'ระวัง', vi: 'Cẩn thận', es: 'Tenga cuidado' }, type: 'word' },
];

const level57FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l57f1',
    sentence: '경찰 ___ 주세요.',
    blank: '불러',
    options: ['불러', '가', '와', '봐'],
    correctAnswer: 0,
    hint: { en: 'Action of calling someone', ja: '誰かを呼ぶ動作', zh: '呼叫某人的动作', th: 'การกระทำของการเรียก', vi: 'Hành động gọi ai đó', es: 'Acción de llamar a alguien' },
    translation: { en: 'Please call the police.', ja: '警察を呼んでください。', zh: '请叫警察。', th: 'กรุณาเรียกตำรวจ', vi: 'Làm ơn gọi cảnh sát.', es: 'Por favor llame a la policía.' },
  },
];

// Level 58: Lost Items
const level58Words: HangulWord[] = [
  { word: '잃어버렸어요', meaning: 'I lost (something)', romanization: 'ireobeoryeosseoyo', category: 'verb' },
  { word: '지갑', meaning: 'wallet', romanization: 'jigap', category: 'noun' },
  { word: '핸드폰', meaning: 'cellphone', romanization: 'haendeupon', category: 'noun' },
  { word: '찾아 주세요', meaning: 'please find it', romanization: 'chaja juseyo', category: 'expression' },
];

const level58Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l58q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '지갑을 잃어버렸어요',
      romanization: 'jigabeul ireobeoryeosseoyo',
      translations: { en: 'I lost my wallet', ja: '財布をなくしました', zh: '我丢了钱包', th: 'ฉันทำกระเป๋าสตางค์หาย', vi: 'Tôi mất ví', es: 'Perdí mi cartera' },
    },
    options: ['I lost my wallet', 'I found my wallet', 'Where is my wallet?', 'This is my wallet'],
    correctAnswer: 0,
  },
  {
    id: 'l58q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '핸드폰을 잃어버렸어요',
      romanization: 'haendeupon-eul ireobeoryeosseoyo',
      translations: { en: 'I lost my phone', ja: '携帯電話をなくしました', zh: '我丢了手机', th: 'ฉันทำโทรศัพท์หาย', vi: 'Tôi mất điện thoại', es: 'Perdí mi teléfono' },
    },
    options: ['I lost my phone', 'I found my phone', 'Can I use your phone?', 'My phone is broken'],
    correctAnswer: 0,
  },
  {
    id: 'l58q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '찾아 주세요',
      romanization: 'chaja juseyo',
      translations: { en: 'Please find it', ja: '探してください', zh: '请帮我找', th: 'กรุณาช่วยหาให้หน่อย', vi: 'Làm ơn tìm giúp', es: 'Por favor encuéntrelo' },
    },
    options: ['Please find it', 'Please give it', 'Please keep it', 'Please throw it'],
    correctAnswer: 0,
  },
];

const level58Matching: MultilingualMatchingPair[] = [
  { id: 'l58m1', left: '지갑을 잃어버렸어요', right: { en: 'I lost my wallet', ja: '財布をなくしました', zh: '我丢了钱包', th: 'ทำกระเป๋าสตางค์หาย', vi: 'Tôi mất ví', es: 'Perdí mi cartera' }, type: 'word' },
  { id: 'l58m2', left: '핸드폰', right: { en: 'cellphone', ja: '携帯電話', zh: '手机', th: 'โทรศัพท์มือถือ', vi: 'điện thoại', es: 'teléfono móvil' }, type: 'word' },
  { id: 'l58m3', left: '찾아 주세요', right: { en: 'Please find it', ja: '探してください', zh: '请帮我找', th: 'ช่วยหาให้หน่อย', vi: 'Tìm giúp tôi', es: 'Encuéntrelo' }, type: 'word' },
  { id: 'l58m4', left: '분실물 센터', right: { en: 'lost and found', ja: '遺失物センター', zh: '失物招领处', th: 'ศูนย์ของหาย', vi: 'trung tâm đồ thất lạc', es: 'objetos perdidos' }, type: 'word' },
];

const level58FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l58f1',
    sentence: '지갑을 ___.',
    blank: '잃어버렸어요',
    options: ['잃어버렸어요', '찾았어요', '샀어요', '봤어요'],
    correctAnswer: 0,
    hint: { en: 'Action of losing something', ja: '何かをなくす動作', zh: '丢失东西的动作', th: 'การกระทำของการทำหาย', vi: 'Hành động mất đồ', es: 'Acción de perder algo' },
    translation: { en: 'I lost my wallet.', ja: '財布をなくしました。', zh: '我丢了钱包。', th: 'ฉันทำกระเป๋าสตางค์หาย', vi: 'Tôi mất ví.', es: 'Perdí mi cartera.' },
  },
];

// ============================================
// Level 59-60: Formal Korean & Complex Conversations
// ============================================

const level59Words: HangulWord[] = [
  { word: '처음 뵙겠습니다', meaning: 'nice to meet you (formal)', romanization: 'cheoeum boepgesseumnida', category: 'formal' },
  { word: '말씀하세요', meaning: 'please speak (formal)', romanization: 'malsseumhaseyo', category: 'formal' },
  { word: '감사드립니다', meaning: 'thank you (formal)', romanization: 'gamsadeurimnida', category: 'formal' },
  { word: '실례지만', meaning: 'excuse me but', romanization: 'sillyejiman', category: 'formal' },
];

const level59Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l59q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '처음 뵙겠습니다',
      romanization: 'cheoeum boepgesseumnida',
      translations: { en: 'Nice to meet you (formal)', ja: 'はじめまして（丁寧）', zh: '初次见面（正式）', th: 'ยินดีที่ได้รู้จัก (เป็นทางการ)', vi: 'Hân hạnh được gặp (trang trọng)', es: 'Mucho gusto (formal)' },
    },
    options: ['Nice to meet you (formal)', 'See you again', 'Long time no see', 'Goodbye'],
    correctAnswer: 0,
  },
  {
    id: 'l59q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '말씀해 주시겠어요?',
      romanization: 'malsseumhae jusigesseoyo',
      translations: { en: 'Could you please tell me?', ja: 'おっしゃっていただけますか？', zh: '您能告诉我吗？', th: 'คุณช่วยบอกได้ไหม?', vi: 'Bạn có thể cho tôi biết được không?', es: '¿Podría decirme?' },
    },
    options: ['Could you please tell me?', 'Please listen', 'Please wait', 'Please come'],
    correctAnswer: 0,
  },
  {
    id: 'l59q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '도와주셔서 감사드립니다',
      romanization: 'dowajusyeoseo gamsadeurimnida',
      translations: { en: 'Thank you for helping me', ja: '助けていただきありがとうございます', zh: '感谢您的帮助', th: 'ขอบคุณที่ช่วยเหลือ', vi: 'Cảm ơn bạn đã giúp đỡ', es: 'Gracias por ayudarme' },
    },
    options: ['Thank you for helping me', "I'm sorry for the trouble", 'Please help me', 'I will help you'],
    correctAnswer: 0,
  },
];

const level59Matching: MultilingualMatchingPair[] = [
  { id: 'l59m1', left: '처음 뵙겠습니다', right: { en: 'Nice to meet you (formal)', ja: 'はじめまして（丁寧）', zh: '初次见面（正式）', th: 'ยินดีที่ได้รู้จัก', vi: 'Hân hạnh được gặp', es: 'Mucho gusto (formal)' }, type: 'word' },
  { id: 'l59m2', left: '감사드립니다', right: { en: 'Thank you (formal)', ja: 'ありがとうございます', zh: '非常感谢', th: 'ขอบคุณครับ/ค่ะ', vi: 'Xin cảm ơn', es: 'Muchas gracias' }, type: 'word' },
  { id: 'l59m3', left: '실례지만', right: { en: 'Excuse me but', ja: '失礼ですが', zh: '不好意思', th: 'ขอโทษนะครับ/ค่ะ', vi: 'Xin lỗi nhưng', es: 'Disculpe pero' }, type: 'word' },
  { id: 'l59m4', left: '말씀하세요', right: { en: 'Please speak (formal)', ja: 'おっしゃってください', zh: '请说', th: 'เชิญพูดครับ/ค่ะ', vi: 'Xin mời nói', es: 'Por favor diga' }, type: 'word' },
];

const level59FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l59f1',
    sentence: '처음 ___.',
    blank: '뵙겠습니다',
    options: ['뵙겠습니다', '만나요', '봐요', '가요'],
    correctAnswer: 0,
    hint: { en: 'Formal greeting when meeting for the first time', ja: '初対面のフォーマルな挨拶', zh: '初次见面的正式问候', th: 'คำทักทายอย่างเป็นทางการเมื่อพบครั้งแรก', vi: 'Lời chào trang trọng khi gặp lần đầu', es: 'Saludo formal al conocerse' },
    translation: { en: 'Nice to meet you (formal).', ja: 'はじめまして（丁寧）。', zh: '初次见面（正式）。', th: 'ยินดีที่ได้รู้จัก', vi: 'Hân hạnh được gặp.', es: 'Mucho gusto (formal).' },
  },
];

// Level 60: Complex Conversations
const level60Words: HangulWord[] = [
  { word: '죄송하지만', meaning: "I'm sorry but", romanization: 'joesonghajiman', category: 'expression' },
  { word: '괜찮으시면', meaning: 'if it is okay with you', romanization: 'gwaenchaneuseumyeon', category: 'conditional' },
  { word: '부탁드립니다', meaning: 'I request (formal)', romanization: 'butakdeurimnida', category: 'formal' },
  { word: '연락 주세요', meaning: 'please contact me', romanization: 'yeollak juseyo', category: 'expression' },
];

const level60Quizzes: MultilingualQuizQuestion[] = [
  {
    id: 'l60q1',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '죄송하지만 다시 한번 말씀해 주시겠어요?',
      romanization: 'joesonghajiman dasi hanbeon malsseumhae jusigesseoyo',
      translations: { en: "I'm sorry, but could you say that again?", ja: 'すみませんが、もう一度おっしゃっていただけますか？', zh: '抱歉，您能再说一遍吗？', th: 'ขอโทษครับ/ค่ะ พูดอีกครั้งได้ไหม?', vi: 'Xin lỗi, bạn có thể nói lại được không?', es: '¿Lo siento, podría repetir eso?' },
    },
    options: ["I'm sorry, but could you say that again?", 'I understand', 'Please speak slowly', 'Please write it down'],
    correctAnswer: 0,
  },
  {
    id: 'l60q2',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '괜찮으시면 연락 주세요',
      romanization: 'gwaenchaneuseumyeon yeollak juseyo',
      translations: { en: 'Please contact me if you can', ja: 'よろしければご連絡ください', zh: '方便的话请联系我', th: 'ถ้าสะดวกกรุณาติดต่อ', vi: 'Nếu tiện xin hãy liên lạc', es: 'Por favor contácteme si puede' },
    },
    options: ['Please contact me if you can', 'I will contact you', 'Do not contact me', 'I lost your contact'],
    correctAnswer: 0,
  },
  {
    id: 'l60q3',
    templateKey: 'sentenceMeaning',
    word: {
      korean: '도움을 부탁드립니다',
      romanization: 'doumeul butakdeurimnida',
      translations: { en: 'I request your help (formal)', ja: 'お力添えをお願いいたします', zh: '请您帮忙', th: 'ขอความช่วยเหลือครับ/ค่ะ', vi: 'Tôi xin nhờ giúp đỡ', es: 'Le pido su ayuda' },
    },
    options: ['I request your help (formal)', 'I can help you', 'I helped you', 'No help needed'],
    correctAnswer: 0,
  },
];

const level60Matching: MultilingualMatchingPair[] = [
  { id: 'l60m1', left: '죄송하지만', right: { en: "I'm sorry but", ja: 'すみませんが', zh: '抱歉但是', th: 'ขอโทษครับ/ค่ะ แต่', vi: 'Xin lỗi nhưng', es: 'Lo siento pero' }, type: 'word' },
  { id: 'l60m2', left: '괜찮으시면', right: { en: 'If it is okay with you', ja: 'よろしければ', zh: '如果方便的话', th: 'ถ้าสะดวก', vi: 'Nếu tiện', es: 'Si le parece bien' }, type: 'word' },
  { id: 'l60m3', left: '부탁드립니다', right: { en: 'I request (formal)', ja: 'お願いいたします', zh: '拜托了', th: 'รบกวนด้วยครับ/ค่ะ', vi: 'Tôi xin nhờ', es: 'Se lo pido' }, type: 'word' },
  { id: 'l60m4', left: '연락 주세요', right: { en: 'Please contact me', ja: 'ご連絡ください', zh: '请联系我', th: 'กรุณาติดต่อ', vi: 'Xin hãy liên lạc', es: 'Por favor contácteme' }, type: 'word' },
];

const level60FillInBlanks: FillInBlankQuestion[] = [
  {
    id: 'l60f1',
    sentence: '괜찮으시면 ___ 주세요.',
    blank: '연락',
    options: ['연락', '전화', '메일', '문자'],
    correctAnswer: 0,
    hint: { en: 'General term for contact', ja: '連絡の一般的な言葉', zh: '联系的一般术语', th: 'คำทั่วไปสำหรับการติดต่อ', vi: 'Từ chung cho liên lạc', es: 'Término general para contacto' },
    translation: { en: 'Please contact me if you can.', ja: 'よろしければご連絡ください。', zh: '方便的话请联系我。', th: 'ถ้าสะดวกกรุณาติดต่อ', vi: 'Nếu tiện xin hãy liên lạc.', es: 'Por favor contácteme si puede.' },
  },
];

// ============================================
// Export Advanced Levels (41-60)
// ============================================

export const advancedLevels: HangulLevel[] = [
  // Level 41: At a Restaurant I
  {
    level: 41,
    title: '식당에서 I',
    titleKey: 'hangul.levels.level41Title',
    description: '식당에서 주문하기: 메뉴 주세요, 이거 뭐예요?, 비빔밥 하나 주세요.',
    descriptionKey: 'hangul.levels.level41Desc',
    tier: 'advanced',
    words: level41Words,
    quizQuestions: [],
    multilingualQuizQuestions: level41Quizzes,
    multilingualMatchingPairs: level41Matching,
    fillInBlankQuestions: level41FillInBlanks,
    reviewItems: ['메뉴 주세요', '이거 뭐예요?', '비빔밥 하나 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 42: At a Restaurant II
  {
    level: 42,
    title: '식당에서 II',
    titleKey: 'hangul.levels.level42Title',
    description: '식당에서 계산하기: 맛있어요!, 계산해 주세요, 카드로 할게요.',
    descriptionKey: 'hangul.levels.level42Desc',
    tier: 'advanced',
    words: level42Words,
    quizQuestions: [],
    multilingualQuizQuestions: level42Quizzes,
    multilingualMatchingPairs: level42Matching,
    fillInBlankQuestions: level42FillInBlanks,
    reviewItems: ['맛있어요!', '계산해 주세요', '카드로 할게요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 43: Shopping I
  {
    level: 43,
    title: '쇼핑하기 I',
    titleKey: 'hangul.levels.level43Title',
    description: '쇼핑할 때: 이거 얼마예요?, 좀 비싸요, 깎아 주세요.',
    descriptionKey: 'hangul.levels.level43Desc',
    tier: 'advanced',
    words: level43Words,
    quizQuestions: [],
    multilingualQuizQuestions: level43Quizzes,
    multilingualMatchingPairs: level43Matching,
    fillInBlankQuestions: level43FillInBlanks,
    reviewItems: ['이거 얼마예요?', '좀 비싸요', '깎아 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 44: Shopping II
  {
    level: 44,
    title: '쇼핑하기 II',
    titleKey: 'hangul.levels.level44Title',
    description: '쇼핑할 때: 다른 색 있어요?, 이거 살게요, 카드 돼요?',
    descriptionKey: 'hangul.levels.level44Desc',
    tier: 'advanced',
    words: level44Words,
    quizQuestions: [],
    multilingualQuizQuestions: level44Quizzes,
    multilingualMatchingPairs: level44Matching,
    fillInBlankQuestions: level44FillInBlanks,
    reviewItems: ['다른 색 있어요?', '이거 살게요', '카드 돼요?'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 45: Asking Directions I
  {
    level: 45,
    title: '길 물어보기 I',
    titleKey: 'hangul.levels.level45Title',
    description: '길 물어보기: 실례합니다, 지하철역이 어디예요?, 여기서 멀어요?',
    descriptionKey: 'hangul.levels.level45Desc',
    tier: 'advanced',
    words: level45Words,
    quizQuestions: [],
    multilingualQuizQuestions: level45Quizzes,
    multilingualMatchingPairs: level45Matching,
    fillInBlankQuestions: level45FillInBlanks,
    reviewItems: ['실례합니다', '지하철역이 어디예요?', '여기서 멀어요?'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 46: Giving Directions
  {
    level: 46,
    title: '길 안내하기',
    titleKey: 'hangul.levels.level46Title',
    description: '방향 알려주기: 오른쪽으로 가세요, 왼쪽으로 가세요, 직진하세요.',
    descriptionKey: 'hangul.levels.level46Desc',
    tier: 'advanced',
    words: level46Words,
    quizQuestions: [],
    multilingualQuizQuestions: level46Quizzes,
    multilingualMatchingPairs: level46Matching,
    fillInBlankQuestions: level46FillInBlanks,
    reviewItems: ['오른쪽으로 가세요', '왼쪽으로 가세요', '직진하세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 47: At a Cafe I
  {
    level: 47,
    title: '카페에서 I',
    titleKey: 'hangul.levels.level47Title',
    description: '카페에서 주문하기: 아메리카노 한 잔 주세요, 뜨거운 거요/차가운 거요?',
    descriptionKey: 'hangul.levels.level47Desc',
    tier: 'advanced',
    words: level47Words,
    quizQuestions: [],
    multilingualQuizQuestions: level47Quizzes,
    multilingualMatchingPairs: level47Matching,
    fillInBlankQuestions: level47FillInBlanks,
    reviewItems: ['아메리카노 한 잔 주세요', '뜨거운 거요', '차가운 거요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 48: At a Cafe II
  {
    level: 48,
    title: '카페에서 II',
    titleKey: 'hangul.levels.level48Title',
    description: '카페에서 더 많은 표현: 여기서 먹을 거예요, 포장해 주세요, 와이파이 비밀번호가 뭐예요?',
    descriptionKey: 'hangul.levels.level48Desc',
    tier: 'advanced',
    words: level48Words,
    quizQuestions: [],
    multilingualQuizQuestions: level48Quizzes,
    multilingualMatchingPairs: level48Matching,
    fillInBlankQuestions: level48FillInBlanks,
    reviewItems: ['여기서 먹을 거예요', '포장해 주세요', '와이파이 비밀번호가 뭐예요?'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 49: Making Plans
  {
    level: 49,
    title: '약속하기',
    titleKey: 'hangul.levels.level49Title',
    description: '약속 정하기: 내일 시간 있어요?, 어디서 만날까요?, 몇 시에 만날까요?',
    descriptionKey: 'hangul.levels.level49Desc',
    tier: 'advanced',
    words: level49Words,
    quizQuestions: [],
    multilingualQuizQuestions: level49Quizzes,
    multilingualMatchingPairs: level49Matching,
    fillInBlankQuestions: level49FillInBlanks,
    reviewItems: ['내일 시간 있어요?', '어디서 만날까요?', '몇 시에 만날까요?'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 50: Phone Calls & Apologies
  {
    level: 50,
    title: '전화 & 사과하기',
    titleKey: 'hangul.levels.level50Title',
    description: '전화와 사과 표현: 여보세요?, 늦어서 죄송해요, 다음에 또 만나요.',
    descriptionKey: 'hangul.levels.level50Desc',
    tier: 'advanced',
    words: level50Words,
    quizQuestions: [],
    multilingualQuizQuestions: level50Quizzes,
    multilingualMatchingPairs: level50Matching,
    fillInBlankQuestions: level50FillInBlanks,
    reviewItems: ['여보세요?', '늦어서 죄송해요', '다음에 또 만나요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 51: At a Hotel I
  {
    level: 51,
    title: '호텔에서 I',
    titleKey: 'hangul.levels.level51Title',
    description: '호텔 체크인: 예약했어요, 체크인 하고 싶어요, 며칠 묵을 거예요?',
    descriptionKey: 'hangul.levels.level51Desc',
    tier: 'advanced',
    words: level51Words,
    quizQuestions: [],
    multilingualQuizQuestions: level51Quizzes,
    multilingualMatchingPairs: level51Matching,
    fillInBlankQuestions: level51FillInBlanks,
    reviewItems: ['예약했어요', '체크인 하고 싶어요', '며칠 묵을 거예요?'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 52: At a Hotel II
  {
    level: 52,
    title: '호텔에서 II',
    titleKey: 'hangul.levels.level52Title',
    description: '호텔 문제 해결: 방이 있어요?, 에어컨이 안 돼요, 고쳐 주세요.',
    descriptionKey: 'hangul.levels.level52Desc',
    tier: 'advanced',
    words: level52Words,
    quizQuestions: [],
    multilingualQuizQuestions: level52Quizzes,
    multilingualMatchingPairs: level52Matching,
    fillInBlankQuestions: level52FillInBlanks,
    reviewItems: ['오늘 방이 있어요?', '에어컨이 안 돼요', '고쳐 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 53: Hospital/Pharmacy I
  {
    level: 53,
    title: '병원/약국 I',
    titleKey: 'hangul.levels.level53Title',
    description: '아플 때 표현: 머리가 아파요, 배가 아파요, 약 주세요.',
    descriptionKey: 'hangul.levels.level53Desc',
    tier: 'advanced',
    words: level53Words,
    quizQuestions: [],
    multilingualQuizQuestions: level53Quizzes,
    multilingualMatchingPairs: level53Matching,
    fillInBlankQuestions: level53FillInBlanks,
    reviewItems: ['머리가 아파요', '배가 아파요', '약 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 54: Hospital/Pharmacy II
  {
    level: 54,
    title: '병원/약국 II',
    titleKey: 'hangul.levels.level54Title',
    description: '증상 표현: 감기에 걸렸어요, 열이 나요, 하루에 세 번 드세요.',
    descriptionKey: 'hangul.levels.level54Desc',
    tier: 'advanced',
    words: level54Words,
    quizQuestions: [],
    multilingualQuizQuestions: level54Quizzes,
    multilingualMatchingPairs: level54Matching,
    fillInBlankQuestions: level54FillInBlanks,
    reviewItems: ['감기에 걸렸어요', '열이 나요', '하루에 세 번 드세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 55: Transportation I - Bus
  {
    level: 55,
    title: '교통수단 I (버스)',
    titleKey: 'hangul.levels.level55Title',
    description: '버스 이용: 이 버스 서울역 가요?, 버스 어디서 타요?, 다음 정류장에서 내려 주세요.',
    descriptionKey: 'hangul.levels.level55Desc',
    tier: 'advanced',
    words: level55Words,
    quizQuestions: [],
    multilingualQuizQuestions: level55Quizzes,
    multilingualMatchingPairs: level55Matching,
    fillInBlankQuestions: level55FillInBlanks,
    reviewItems: ['이 버스 서울역 가요?', '버스 어디서 타요?', '다음 정류장에서 내려 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 56: Transportation II - Taxi
  {
    level: 56,
    title: '교통수단 II (택시)',
    titleKey: 'hangul.levels.level56Title',
    description: '택시 이용: 여기서 세워 주세요, 얼마나 걸려요?, 빨리 가 주세요.',
    descriptionKey: 'hangul.levels.level56Desc',
    tier: 'advanced',
    words: level56Words,
    quizQuestions: [],
    multilingualQuizQuestions: level56Quizzes,
    multilingualMatchingPairs: level56Matching,
    fillInBlankQuestions: level56FillInBlanks,
    reviewItems: ['여기서 세워 주세요', '공항까지 얼마나 걸려요?', '빨리 가 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 57: Emergency I
  {
    level: 57,
    title: '긴급 상황 I',
    titleKey: 'hangul.levels.level57Title',
    description: '긴급 표현: 도와주세요!, 경찰 불러 주세요, 위험해요!',
    descriptionKey: 'hangul.levels.level57Desc',
    tier: 'advanced',
    words: level57Words,
    quizQuestions: [],
    multilingualQuizQuestions: level57Quizzes,
    multilingualMatchingPairs: level57Matching,
    fillInBlankQuestions: level57FillInBlanks,
    reviewItems: ['도와주세요!', '경찰 불러 주세요', '위험해요!'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 58: Emergency II - Lost Items
  {
    level: 58,
    title: '긴급 상황 II (분실)',
    titleKey: 'hangul.levels.level58Title',
    description: '분실물: 지갑을 잃어버렸어요, 핸드폰을 잃어버렸어요, 찾아 주세요.',
    descriptionKey: 'hangul.levels.level58Desc',
    tier: 'advanced',
    words: level58Words,
    quizQuestions: [],
    multilingualQuizQuestions: level58Quizzes,
    multilingualMatchingPairs: level58Matching,
    fillInBlankQuestions: level58FillInBlanks,
    reviewItems: ['지갑을 잃어버렸어요', '핸드폰을 잃어버렸어요', '찾아 주세요'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 59: Formal Korean
  {
    level: 59,
    title: '격식체 표현',
    titleKey: 'hangul.levels.level59Title',
    description: '격식체: 처음 뵙겠습니다, 말씀해 주시겠어요?, 감사드립니다.',
    descriptionKey: 'hangul.levels.level59Desc',
    tier: 'advanced',
    words: level59Words,
    quizQuestions: [],
    multilingualQuizQuestions: level59Quizzes,
    multilingualMatchingPairs: level59Matching,
    fillInBlankQuestions: level59FillInBlanks,
    reviewItems: ['처음 뵙겠습니다', '말씀해 주시겠어요?', '감사드립니다'],
    requiredScore: 80,
    isPremium: false,
  },
  // Level 60: Complex Conversations
  {
    level: 60,
    title: '복잡한 대화',
    titleKey: 'hangul.levels.level60Title',
    description: '고급 표현: 죄송하지만 다시 말씀해 주시겠어요?, 괜찮으시면 연락 주세요, 부탁드립니다.',
    descriptionKey: 'hangul.levels.level60Desc',
    tier: 'advanced',
    words: level60Words,
    quizQuestions: [],
    multilingualQuizQuestions: level60Quizzes,
    multilingualMatchingPairs: level60Matching,
    fillInBlankQuestions: level60FillInBlanks,
    reviewItems: ['죄송하지만 다시 말씀해 주시겠어요?', '괜찮으시면 연락 주세요', '부탁드립니다'],
    requiredScore: 80,
    isPremium: false,
  },
];
