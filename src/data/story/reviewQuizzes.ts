import { ReviewQuiz } from '@/types/story';
import { reviewS1E3, reviewS1E4, reviewS1E5, reviewS1E6, reviewS1E7, reviewS1E8 } from './reviewQuizzesSeason1';
import { reviewS2E1, reviewS2E2, reviewS2E3, reviewS2E4, reviewS2E5, reviewS2E6, reviewS2E7, reviewS2E8 } from './reviewQuizzesSeason2';

// Review quiz after completing s1e2 (Airport + Hotel episodes)
export const reviewS1E1E2: ReviewQuiz = {
  id: 'review-s1e1-e2',
  triggerAfterEpisode: 's1e2',
  title: {
    en: 'Review Quiz: Airport & Hotel',
    ja: '復習クイズ：空港＆ホテル',
    zh: '复习测验：机场和酒店',
    th: 'แบบทดสอบทบทวน: สนามบิน & โรงแรม',
    vi: 'Bài ôn tập: Sân bay & Khách sạn',
    es: 'Quiz de repaso: Aeropuerto y Hotel',
  },
  description: {
    en: 'Test what you learned from Episodes 1 & 2!',
    ja: 'エピソード1＆2で学んだことをテスト！',
    zh: '测试你从第1和第2集学到的内容！',
    th: 'ทดสอบสิ่งที่คุณเรียนรู้จากตอนที่ 1 และ 2!',
    vi: 'Kiểm tra những gì bạn đã học từ tập 1 & 2!',
    es: '¡Pon a prueba lo que aprendiste de los episodios 1 y 2!',
  },
  passingScore: 60,
  rewards: {
    xp: 150,
    badge: 'review_master_s1',
    badgeName: {
      en: 'Review Master',
      ja: '復習マスター',
      zh: '复习达人',
      th: 'เซียนทบทวน',
      vi: 'Bậc thầy ôn tập',
      es: 'Maestro del repaso',
    },
  },
  questions: [
    // Fill-in-blank 1
    {
      type: 'fill-in-blank',
      id: 'fb1',
      sentence: {
        en: '"_____ 가주세요" (Please take me to Myeongdong)',
        ja: '「_____ 가주세요」（明洞へ行ってください）',
        zh: '"_____ 가주세요"（请去明洞）',
        th: '"_____ 가주세요" (กรุณาพาไปเมียงดง)',
        vi: '"_____ 가주세요" (Làm ơn đưa đến Myeongdong)',
        es: '"_____ 가주세요" (Lléveme a Myeongdong)',
      },
      correctAnswer: '명동',
      options: ['명동', '호텔', '서울', '한국'],
      explanation: {
        en: "'명동 가주세요' means 'Please take me to Myeongdong'. Put the destination before 가주세요!",
        ja: "「명동 가주세요」は「明洞に行ってください」。目的地を가주세요の前に！",
        zh: "'명동 가주세요'是'请去明洞'。目的地放在가주세요前面！",
        th: "'명동 가주세요' แปลว่า 'กรุณาพาไปเมียงดง' ใส่จุดหมายก่อน 가주세요!",
        vi: "'명동 가주세요' nghĩa là 'Đưa đến Myeongdong'. Đặt địa điểm trước 가주세요!",
        es: "'명동 가주세요' significa 'Lléveme a Myeongdong'. ¡Pon el destino antes de 가주세요!",
      },
    },
    // Fill-in-blank 2
    {
      type: 'fill-in-blank',
      id: 'fb2',
      sentence: {
        en: '"여권 _____주세요" (Please show your passport)',
        ja: '「여권 _____주세요」（パスポートを見せてください）',
        zh: '"여권 _____주세요"（请出示护照）',
        th: '"여권 _____주세요" (ขอดูพาสปอร์ต)',
        vi: '"여권 _____주세요" (Xin cho xem hộ chiếu)',
        es: '"여권 _____주세요" (Muestre su pasaporte)',
      },
      correctAnswer: '보여',
      options: ['보여', '가', '해', '있어'],
      explanation: {
        en: "'보여주세요' means 'please show'. 보이다(to show) + 주세요(please do for me).",
        ja: "「보여주세요」は「見せてください」。보이다(見せる) + 주세요(〜してください)。",
        zh: "'보여주세요'是'请出示'。보이다(展示) + 주세요(请为我做)。",
        th: "'보여주세요' แปลว่า 'กรุณาแสดง' 보이다(แสดง) + 주세요(กรุณาทำให้)",
        vi: "'보여주세요' nghĩa là 'xin cho xem'. 보이다(cho xem) + 주세요(xin làm cho).",
        es: "'보여주세요' significa 'muestre por favor'. 보이다(mostrar) + 주세요(por favor haga).",
      },
    },
    // Fill-in-blank 3
    {
      type: 'fill-in-blank',
      id: 'fb3',
      sentence: {
        en: '"삼 _____ 예약했어요" (I reserved for three nights)',
        ja: '「삼 _____ 예약했어요」（3泊予約しました）',
        zh: '"삼 _____ 예약했어요"（预约了三晚）',
        th: '"삼 _____ 예약했어요" (จองไว้สามคืน)',
        vi: '"삼 _____ 예약했어요" (Đã đặt ba đêm)',
        es: '"삼 _____ 예약했어요" (Reservé tres noches)',
      },
      correctAnswer: '박',
      options: ['박', '잔', '개', '명'],
      explanation: {
        en: "'박' is the counter for nights at a hotel. '삼 박' = three nights.",
        ja: "「박」はホテルの宿泊数の単位。「삼 박」= 3泊。",
        zh: "'박'是酒店住宿天数的量词。'삼 박'= 三晚。",
        th: "'박' คือลักษณนามสำหรับคืนในโรงแรม '삼 박' = สามคืน",
        vi: "'박' là từ đếm đêm khách sạn. '삼 박' = ba đêm.",
        es: "'박' es el contador para noches de hotel. '삼 박' = tres noches.",
      },
    },
    // Fill-in-blank 4
    {
      type: 'fill-in-blank',
      id: 'fb4',
      sentence: {
        en: '"아메리카노 한 _____ 주세요" (One Americano please)',
        ja: '「아메리카노 한 _____ 주세요」（アメリカーノ1杯ください）',
        zh: '"아메리카노 한 _____ 주세요"（请给一杯美式）',
        th: '"아메리카노 한 _____ 주세요" (ขออเมริกาโน่หนึ่งแก้ว)',
        vi: '"아메리카노 한 _____ 주세요" (Cho một ly Americano)',
        es: '"아메리카노 한 _____ 주세요" (Un Americano por favor)',
      },
      correctAnswer: '잔',
      options: ['잔', '박', '개', '병'],
      explanation: {
        en: "'잔' is the counter for cups/glasses of drinks. '한 잔' = one cup.",
        ja: "「잔」は飲み物の杯数の単位。「한 잔」= 1杯。",
        zh: "'잔'是饮料杯数的量词。'한 잔'= 一杯。",
        th: "'잔' คือลักษณนามสำหรับแก้ว/ถ้วยเครื่องดื่ม '한 잔' = หนึ่งแก้ว",
        vi: "'잔' là từ đếm cho ly/cốc đồ uống. '한 잔' = một ly.",
        es: "'잔' es el contador para tazas de bebidas. '한 잔' = una taza.",
      },
    },
    // Multiple choice 1
    {
      type: 'multiple-choice',
      id: 'mc1',
      question: '어디로 가세요?',
      questionRomanization: 'eodiro gaseyo?',
      options: [
        { en: 'Where would you like to go?', ja: 'どこへ行きますか？', zh: '您要去哪里？', th: 'ไปไหนคะ/ครับ?', vi: 'Bạn muốn đi đâu?', es: '¿A dónde le gustaría ir?' },
        { en: 'What would you like to eat?', ja: '何を食べますか？', zh: '您想吃什么？', th: 'อยากกินอะไรคะ?', vi: 'Bạn muốn ăn gì?', es: '¿Qué le gustaría comer?' },
        { en: 'How are you?', ja: '元気ですか？', zh: '你好吗？', th: 'สบายดีไหม?', vi: 'Bạn khỏe không?', es: '¿Cómo estás?' },
        { en: 'What is your name?', ja: 'お名前は？', zh: '你叫什么？', th: 'ชื่ออะไร?', vi: 'Tên bạn là gì?', es: '¿Cómo te llamas?' },
      ],
      correctIndex: 0,
      explanation: {
        en: "'어디로 가세요?' = Where + to + are you going? The taxi driver asks this!",
        ja: "「어디로 가세요?」= どこ + へ + 行きますか？タクシー運転手がよく聞く！",
        zh: "'어디로 가세요?' = 哪里 + 向 + 去？出租车司机这样问！",
        th: "'어디로 가세요?' = ที่ไหน + ไป + ไหน? คนขับแท็กซี่ถามอย่างนี้!",
        vi: "'어디로 가세요?' = Ở đâu + hướng + đi? Tài xế taxi hay hỏi vậy!",
        es: "'어디로 가세요?' = ¿Dónde + hacia + va? ¡El taxista pregunta esto!",
      },
    },
    // Multiple choice 2
    {
      type: 'multiple-choice',
      id: 'mc2',
      question: '예약했어요',
      questionRomanization: 'yeyakhaesseoyo',
      options: [
        { en: 'I made a reservation', ja: '予約しました', zh: '我预约了', th: 'จองไว้แล้ว', vi: 'Đã đặt phòng', es: 'Hice una reserva' },
        { en: 'I want to cancel', ja: 'キャンセルしたい', zh: '我想取消', th: 'อยากยกเลิก', vi: 'Muốn hủy', es: 'Quiero cancelar' },
        { en: 'I need help', ja: '助けてください', zh: '我需要帮助', th: 'ต้องการความช่วยเหลือ', vi: 'Tôi cần giúp đỡ', es: 'Necesito ayuda' },
        { en: "I'm leaving now", ja: '今から出ます', zh: '我要走了', th: 'จะไปแล้ว', vi: 'Tôi đi đây', es: 'Me voy ahora' },
      ],
      correctIndex: 0,
      explanation: {
        en: "'예약했어요' = 예약(reservation) + 했어요(did). Past tense of 'to reserve'!",
        ja: "「예약했어요」= 예약(予約) + 했어요(しました)。「予約する」の過去形！",
        zh: "'예약했어요' = 예약(预约) + 했어요(做了)。'预约'的过去式！",
        th: "'예약했어요' = 예약(การจอง) + 했어요(ทำแล้ว) อดีตกาลของ 'จอง'!",
        vi: "'예약했어요' = 예약(đặt chỗ) + 했어요(đã làm). Quá khứ của 'đặt chỗ'!",
        es: "'예약했어요' = 예약(reserva) + 했어요(hice). ¡Pasado de 'reservar'!",
      },
    },
    // Multiple choice 3
    {
      type: 'multiple-choice',
      id: 'mc3',
      question: '갈아타세요',
      questionRomanization: 'garataseyo',
      options: [
        { en: 'Please transfer (to another line)', ja: '乗り換えてください', zh: '请换乘', th: 'กรุณาเปลี่ยนสาย', vi: 'Xin đổi tuyến', es: 'Por favor transborde' },
        { en: 'Please sit down', ja: '座ってください', zh: '请坐', th: 'กรุณานั่ง', vi: 'Xin ngồi', es: 'Por favor siéntese' },
        { en: 'Please wait', ja: '待ってください', zh: '请等待', th: 'กรุณารอ', vi: 'Xin chờ', es: 'Por favor espere' },
        { en: 'Please come back', ja: '戻ってきてください', zh: '请回来', th: 'กรุณากลับมา', vi: 'Xin quay lại', es: 'Por favor regrese' },
      ],
      correctIndex: 0,
      explanation: {
        en: "'갈아타세요' = 갈아타다(to transfer) + -세요(please). Used in subway stations!",
        ja: "「갈아타세요」= 갈아타다(乗り換える) + -세요(〜してください)。地下鉄で使う！",
        zh: "'갈아타세요' = 갈아타다(换乘) + -세요(请)。地铁里常用！",
        th: "'갈아타세요' = 갈아타다(เปลี่ยนสาย) + -세요(กรุณา) ใช้ในสถานีรถไฟ!",
        vi: "'갈아타세요' = 갈아타다(đổi tuyến) + -세요(xin). Dùng ở ga tàu!",
        es: "'갈아타세요' = 갈아타다(transbordar) + -세요(por favor). ¡Se usa en el metro!",
      },
    },
    // Multiple choice 4
    {
      type: 'multiple-choice',
      id: 'mc4',
      question: '몇 박이세요?',
      questionRomanization: 'myeot bagiseyo?',
      options: [
        { en: 'How many nights?', ja: '何泊ですか？', zh: '住几晚？', th: 'กี่คืนคะ?', vi: 'Mấy đêm?', es: '¿Cuántas noches?' },
        { en: 'How many people?', ja: '何人ですか？', zh: '几个人？', th: 'กี่คนคะ?', vi: 'Mấy người?', es: '¿Cuántas personas?' },
        { en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่คะ?', vi: 'Bao nhiêu tiền?', es: '¿Cuánto cuesta?' },
        { en: 'What time is it?', ja: '何時ですか？', zh: '几点了？', th: 'กี่โมงคะ?', vi: 'Mấy giờ?', es: '¿Qué hora es?' },
      ],
      correctIndex: 0,
      explanation: {
        en: "'몇 박이세요?' = how many + nights + are you? Hotel staff ask this at check-in!",
        ja: "「몇 박이세요?」= いくつ + 泊 + ですか？ホテルスタッフがチェックインで聞く！",
        zh: "'몇 박이세요?' = 几 + 晚 + 是？酒店前台办理入住时会这样问！",
        th: "'몇 박이세요?' = กี่ + คืน + คะ? พนักงานโรงแรมถามตอนเช็คอิน!",
        vi: "'몇 박이세요?' = mấy + đêm + ạ? Nhân viên khách sạn hỏi khi nhận phòng!",
        es: "'몇 박이세요?' = cuántas + noches + es? ¡El personal del hotel pregunta al registrarse!",
      },
    },
    // Matching 1
    {
      type: 'matching',
      id: 'match1',
      pairs: [
        { korean: '가주세요', translation: { en: 'Please take me to', ja: '行ってください', zh: '请去', th: 'กรุณาพาไป', vi: 'Đưa đến', es: 'Lléveme a' } },
        { korean: '명동', translation: { en: 'Myeongdong', ja: '明洞', zh: '明洞', th: 'เมียงดง', vi: 'Myeongdong', es: 'Myeongdong' } },
        { korean: '여권', translation: { en: 'Passport', ja: 'パスポート', zh: '护照', th: 'พาสปอร์ต', vi: 'Hộ chiếu', es: 'Pasaporte' } },
        { korean: '체크인', translation: { en: 'Check-in', ja: 'チェックイン', zh: '入住', th: 'เช็คอิน', vi: 'Nhận phòng', es: 'Registro' } },
        { korean: '박', translation: { en: 'Night (counter)', ja: '泊', zh: '晚', th: 'คืน', vi: 'Đêm', es: 'Noche' } },
        { korean: '알겠습니다', translation: { en: 'I understand', ja: 'わかりました', zh: '明白了', th: 'เข้าใจแล้ว', vi: 'Tôi hiểu rồi', es: 'Entendido' } },
      ],
      explanation: {
        en: 'These are essential words from your airport and hotel experiences!',
        ja: '空港とホテルでの必須単語！',
        zh: '这些是你在机场和酒店体验中的必备词汇！',
        th: 'คำศัพท์สำคัญจากประสบการณ์สนามบินและโรงแรม!',
        vi: 'Đây là những từ thiết yếu từ trải nghiệm sân bay và khách sạn!',
        es: '¡Estas son palabras esenciales de tus experiencias en el aeropuerto y hotel!',
      },
    },
    // Matching 2
    {
      type: 'matching',
      id: 'match2',
      pairs: [
        { korean: '감사합니다', translation: { en: 'Thank you (formal)', ja: 'ありがとうございます', zh: '谢谢(正式)', th: 'ขอบคุณค่ะ/ครับ', vi: 'Cảm ơn (trang trọng)', es: 'Gracias (formal)' } },
        { korean: '예약했어요', translation: { en: 'I made a reservation', ja: '予約しました', zh: '我预约了', th: 'จองไว้แล้ว', vi: 'Đã đặt phòng', es: 'Hice una reserva' } },
        { korean: '얼마예요', translation: { en: 'How much?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่?', vi: 'Bao nhiêu?', es: '¿Cuánto?' } },
        { korean: '여기 있어요', translation: { en: 'Here it is', ja: 'ここにあります', zh: '在这里', th: 'อยู่นี่ค่ะ/ครับ', vi: 'Đây ạ', es: 'Aquí tiene' } },
        { korean: '처음이에요', translation: { en: "It's my first time", ja: '初めてです', zh: '第一次', th: 'ครั้งแรก', vi: 'Lần đầu tiên', es: 'Es mi primera vez' } },
        { korean: '주세요', translation: { en: 'Please give me', ja: 'ください', zh: '请给我', th: 'กรุณาให้', vi: 'Cho tôi', es: 'Deme por favor' } },
      ],
      explanation: {
        en: 'Great review of key phrases! These will be useful throughout your Korea trip.',
        ja: '重要フレーズの復習！韓国旅行中ずっと使えるよ。',
        zh: '重要短语复习！在韩国旅行中会一直用到。',
        th: 'ทบทวนวลีสำคัญ! จะใช้ได้ตลอดการเดินทางในเกาหลี',
        vi: 'Ôn tập các cụm từ quan trọng! Sẽ hữu ích suốt chuyến đi Hàn Quốc.',
        es: '¡Gran repaso de frases clave! Serán útiles en todo tu viaje a Corea.',
      },
    },
  ],
};

// Map of episode IDs to their review quizzes
export const reviewQuizMap: Record<string, ReviewQuiz> = {
  's1e2': reviewS1E1E2,
  's1e3': reviewS1E3,
  's1e4': reviewS1E4,
  's1e5': reviewS1E5,
  's1e6': reviewS1E6,
  's1e7': reviewS1E7,
  's1e8': reviewS1E8,
  's2e1': reviewS2E1,
  's2e2': reviewS2E2,
  's2e3': reviewS2E3,
  's2e4': reviewS2E4,
  's2e5': reviewS2E5,
  's2e6': reviewS2E6,
  's2e7': reviewS2E7,
  's2e8': reviewS2E8,
};

// Get review quiz for an episode
export function getReviewQuizForEpisode(episodeId: string): ReviewQuiz | undefined {
  return reviewQuizMap[episodeId];
}
