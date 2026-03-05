import { StoryEpisode, StorySeason } from '@/types/story';

// Season 1: Seoul First Steps (서울 첫걸음) - FREE, Beginner
export const season1: StorySeason = {
  id: 1,
  name: {
    en: 'Seoul First Steps',
    ja: 'ソウル最初の一歩',
    zh: '首尔初体验',
    th: 'ก้าวแรกในโซล',
    vi: 'Những bước đầu ở Seoul',
    es: 'Primeros pasos en Seúl',
  },
  description: {
    en: 'Your first trip to Korea! Navigate everyday situations in Seoul.',
    ja: '初めての韓国旅行！ソウルでの日常シーンを体験しよう。',
    zh: '你的第一次韩国之旅！体验首尔的日常情景。',
    th: 'การเดินทางครั้งแรกของคุณไปเกาหลี! สัมผัสชีวิตประจำวันในโซล',
    vi: 'Chuyến đi Hàn Quốc đầu tiên! Trải nghiệm cuộc sống hàng ngày ở Seoul.',
    es: '¡Tu primer viaje a Corea! Navega situaciones cotidianas en Seúl.',
  },
  theme: 'Basic Survival Korean',
  location: 'Seoul',
  color: '#667eea',
  icon: 'plane',
  difficulty: 'beginner',
  isPremium: false,
  totalEpisodes: 8,
  episodes: [],
};

// Episode 1: Arriving at Incheon Airport
export const s1e1: StoryEpisode = {
  id: 's1e1',
  season: 1,
  episode: 1,
  title: {
    en: 'Arriving at Incheon Airport',
    ja: '仁川空港に到着',
    zh: '抵达仁川机场',
    th: 'มาถึงสนามบินอินชอน',
    vi: 'Đến sân bay Incheon',
    es: 'Llegando al aeropuerto de Incheon',
  },
  description: {
    en: 'Your adventure begins! Take a taxi to your hotel.',
    ja: '冒険の始まり！タクシーでホテルへ',
    zh: '冒险开始！乘出租车去酒店',
    th: 'การผจญภัยเริ่มต้น! นั่งแท็กซี่ไปโรงแรม',
    vi: 'Cuộc phiêu lưu bắt đầu! Bắt taxi đến khách sạn',
    es: '¡Tu aventura comienza! Toma un taxi al hotel',
  },
  icon: '✈️',
  location: 'Incheon Airport',
  requiredLevel: 1,
  rewards: { xp: 200, badge: 'airport_master', badgeName: { en: 'Airport Master', ja: '空港マスター', zh: '机场达人', th: 'เซียนสนามบิน', vi: 'Bậc thầy sân bay', es: 'Maestro del aeropuerto' } },
  isPremium: false,
  scenes: [
    {
      id: 's1e1-scene1',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' },
      dialogue: {
        en: "Welcome to Korea! 🎉 I'm KEI, your Korean learning buddy! You just arrived at Incheon Airport. Let's take a taxi to your hotel in Myeongdong!",
        ja: '韓国へようこそ！🎉 私はハングリ、韓国語学習のパートナーだよ！仁川空港に着いたね。明洞のホテルまでタクシーで行こう！',
        zh: '欢迎来到韩国！🎉 我是韩文利，你的韩语学习伙伴！你刚到达仁川机场。我们坐出租车去明洞的酒店吧！',
        th: 'ยินดีต้อนรับสู่เกาหลี! 🎉 ฉันคือฮันกึลลี เพื่อนเรียนภาษาเกาหลีของคุณ! คุณเพิ่งมาถึงสนามบินอินชอน ไปขึ้นแท็กซี่ไปโรงแรมที่เมียงดงกันเถอะ!',
        vi: 'Chào mừng đến Hàn Quốc! 🎉 Mình là KEI, người bạn học tiếng Hàn của bạn! Bạn vừa đến sân bay Incheon. Hãy bắt taxi đến khách sạn ở Myeongdong!',
        es: '¡Bienvenido a Corea! 🎉 Soy KEI, tu compañero de aprendizaje. ¡Tomemos un taxi al hotel en Myeongdong!',
      },
      nextSceneId: 's1e1-scene2',
    },
    {
      id: 's1e1-scene2',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      character: { name: '택시 기사', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' },
      dialogue: {
        en: 'The taxi driver asks: "어디로 가세요?" (Where would you like to go?)',
        ja: 'タクシー運転手：「어디로 가세요?」（どこへ行きますか？）',
        zh: '出租车司机问："어디로 가세요?"（您要去哪里？）',
        th: 'คนขับแท็กซี่ถาม: "어디로 가세요?" (ไปไหนคะ/ครับ?)',
        vi: 'Tài xế taxi hỏi: "어디로 가세요?" (Bạn muốn đi đâu?)',
        es: 'El taxista pregunta: "어디로 가세요?" (¿A dónde le gustaría ir?)',
      },
      choices: [
        { id: 's1e1-c1a', korean: '명동 가주세요', romanization: 'Myeongdong gajuseyo', translation: { en: 'Please take me to Myeongdong', ja: '明洞へ行ってください', zh: '请去明洞', th: 'ไปเมียงดงค่ะ/ครับ', vi: 'Làm ơn đưa tôi đến Myeongdong', es: 'Por favor lléveme a Myeongdong' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '가주세요' is the polite way to say 'please take me to'.", ja: '完璧！🌟「가주세요」は丁寧な言い方だよ。', zh: '完美！🌟"가주세요"是礼貌的说法。', th: 'สมบูรณ์แบบ! 🌟 "가주세요" เป็นวิธีพูดอย่างสุภาพ', vi: 'Hoàn hảo! 🌟 "가주세요" là cách nói lịch sự.', es: '¡Perfecto! 🌟 "가주세요" es la forma educada.' }, nextSceneId: 's1e1-scene3' },
        { id: 's1e1-c1b', korean: '명동이요', romanization: 'Myeongdong-iyo', translation: { en: 'Myeongdong, please', ja: '明洞です', zh: '明洞', th: 'เมียงดงค่ะ/ครับ', vi: 'Myeongdong ạ', es: 'Myeongdong, por favor' }, correctness: 'good', feedback: { en: "Good! 👍 Adding '이요' is polite but '가주세요' is more complete!", ja: 'いいね！👍「가주세요」の方がより完璧！', zh: '不错！👍 但"가주세요"更完整！', th: 'ดี! 👍 แต่ "가주세요" สมบูรณ์กว่า!', vi: 'Tốt! 👍 Nhưng "가주세요" hoàn chỉnh hơn!', es: '¡Bien! 👍 Pero "가주세요" es más completo.' }, nextSceneId: 's1e1-scene3' },
      ],
      teaching: {
        vocabulary: [
          { korean: '가주세요', romanization: 'gajuseyo', meaning: { en: 'Please take me to', ja: '行ってください', zh: '请去', th: 'กรุณาไป', vi: 'Làm ơn đi đến', es: 'Por favor vaya a' } },
          { korean: '어디', romanization: 'eodi', meaning: { en: 'Where', ja: 'どこ', zh: '哪里', th: 'ที่ไหน', vi: 'Ở đâu', es: 'Dónde' } },
        ],
        culturalNote: { en: "💡 In Korea, you don't need to tip taxi drivers!", ja: '💡 韓国ではタクシー運転手にチップは不要！', zh: '💡 在韩国不需要给出租车司机小费！', th: '💡 ในเกาหลีไม่ต้องให้ทิปคนขับแท็กซี่!', vi: '💡 Ở Hàn Quốc không cần tip tài xế taxi!', es: '💡 ¡En Corea no necesitas dar propina!' },
      },
    },
    {
      id: 's1e1-scene3',
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      character: { name: '택시 기사', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' },
      dialogue: {
        en: '"네, 알겠습니다!" (Yes, understood!) You made it to Myeongdong! The fare is 45,000원.',
        ja: '「네, 알겠습니다!」（はい、わかりました！）明洞に着いた！料金は45,000ウォン。',
        zh: '"네, 알겠습니다!"（好的！）你到明洞了！费用是45,000韩元。',
        th: '"네, 알겠습니다!" (ครับ/ค่ะ!) คุณมาถึงเมียงดงแล้ว! ค่าโดยสาร 45,000 วอน',
        vi: '"네, 알겠습니다!" (Vâng!) Bạn đã đến Myeongdong! Tiền taxi 45,000 won.',
        es: '"네, 알겠습니다!" (¡Sí!) ¡Llegaste a Myeongdong! La tarifa es 45,000 won.',
      },
      choices: [
        { id: 's1e1-c2a', korean: '감사합니다', romanization: 'Gamsahamnida', translation: { en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', th: 'ขอบคุณครับ/ค่ะ', vi: 'Cảm ơn', es: 'Gracias' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 Always thank your driver!", ja: '完璧！🌟 運転手さんにお礼を！', zh: '完美！🌟 记得感谢司机！', th: 'สมบูรณ์แบบ! 🌟 ขอบคุณคนขับเสมอ!', vi: 'Hoàn hảo! 🌟 Luôn cảm ơn tài xế!', es: '¡Perfecto! 🌟 ¡Siempre agradece!' }, nextSceneId: 's1e1-scene4' },
        { id: 's1e1-c2b', korean: '고마워요', romanization: 'Gomawoyo', translation: { en: 'Thanks (casual)', ja: 'ありがとう', zh: '谢谢(随意)', th: 'ขอบคุณนะ', vi: 'Cảm ơn nhé', es: 'Gracias (casual)' }, correctness: 'good', feedback: { en: "Good! 👍 '감사합니다' is more formal for strangers.", ja: 'いいね！👍 知らない人には「감사합니다」がベター。', zh: '不错！👍 对陌生人用"감사합니다"更好。', th: 'ดี! 👍 "감사합니다" สุภาพกว่าสำหรับคนแปลกหน้า', vi: 'Tốt! 👍 "감사합니다" lịch sự hơn với người lạ.', es: '¡Bien! 👍 "감사합니다" es más formal.' }, nextSceneId: 's1e1-scene4' },
      ],
      teaching: { vocabulary: [{ korean: '감사합니다', romanization: 'gamsahamnida', meaning: { en: 'Thank you (formal)', ja: 'ありがとうございます', zh: '谢谢(正式)', th: 'ขอบคุณครับ/ค่ะ', vi: 'Cảm ơn (trang trọng)', es: 'Gracias (formal)' } }] },
    },
    {
      id: 's1e1-scene4',
      background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
      character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' },
      dialogue: {
        en: "Amazing! 🎉 You learned:\n✅ '가주세요' - Please take me to\n✅ '감사합니다' - Thank you\n\nYou earned the '✈️ Airport Master' badge!",
        ja: 'すごい！🎉 学んだこと：\n✅「가주세요」- 行ってください\n✅「감사합니다」- ありがとう\n\n「✈️ 空港マスター」バッジ獲得！',
        zh: '太棒了！🎉 你学到了：\n✅ "가주세요" - 请去\n✅ "감사합니다" - 谢谢\n\n获得"✈️ 机场达人"徽章！',
        th: 'เก่งมาก! 🎉 คุณเรียนรู้:\n✅ "가주세요" - กรุณาพาไป\n✅ "감사합니다" - ขอบคุณ\n\nได้รับเหรียญ "✈️ เซียนสนามบิน"!',
        vi: 'Tuyệt vời! 🎉 Bạn đã học:\n✅ "가주세요" - Làm ơn đưa đến\n✅ "감사합니다" - Cảm ơn\n\nNhận huy hiệu "✈️ Bậc thầy sân bay"!',
        es: '¡Increíble! 🎉 Aprendiste:\n✅ "가주세요" - Por favor lléveme\n✅ "감사합니다" - Gracias\n\n¡Obtuviste "✈️ Maestro del aeropuerto"!',
      },
    },
  ],
};

// Episode 2: Hotel Check-in
export const s1e2: StoryEpisode = {
  id: 's1e2',
  season: 1,
  episode: 2,
  title: { en: 'Hotel Check-in', ja: 'ホテルチェックイン', zh: '酒店入住', th: 'เช็คอินโรงแรม', vi: 'Nhận phòng khách sạn', es: 'Registro en el hotel' },
  description: { en: 'Check into your hotel and learn room-related vocabulary.', ja: 'ホテルにチェックインして部屋の語彙を学ぼう。', zh: '办理酒店入住，学习房间相关词汇。', th: 'เช็คอินโรงแรมและเรียนรู้คำศัพท์เกี่ยวกับห้อง', vi: 'Nhận phòng và học từ vựng về phòng.', es: 'Regístrate y aprende vocabulario de habitaciones.' },
  icon: '🏨',
  location: 'Myeongdong Hotel',
  requiredLevel: 1,
  rewards: { xp: 200, badge: 'hotel_guest', badgeName: { en: 'Hotel Guest', ja: 'ホテルゲスト', zh: '酒店客人', th: 'แขกโรงแรม', vi: 'Khách khách sạn', es: 'Huésped' } },
  isPremium: false,
  scenes: [
    { id: 's1e2-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 체크인하시겠어요?" (Hello! Would you like to check in?)', ja: '「안녕하세요! 체크인하시겠어요?」（こんにちは！チェックインですか？）', zh: '"안녕하세요! 체크인하시겠어요?"（您好！要办理入住吗？）', th: '"안녕하세요! 체크인하시겠어요?" (สวัสดีค่ะ! เช็คอินไหมคะ?)', vi: '"안녕하세요! 체크인하시겠어요?" (Xin chào! Bạn muốn nhận phòng?)', es: '"안녕하세요! 체크인하시겠어요?" (¡Hola! ¿Desea registrarse?)' }, choices: [
      { id: 's1e2-c1a', korean: '네, 예약했어요', romanization: 'Ne, yeyakhaesseoyo', translation: { en: 'Yes, I have a reservation', ja: 'はい、予約しました', zh: '是的，我预约了', th: 'ใช่ค่ะ/ครับ จองไว้แล้ว', vi: 'Vâng, tôi đã đặt phòng', es: 'Sí, tengo reserva' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '예약했어요' means 'I made a reservation'.", ja: '完璧！🌟「예약했어요」は「予約しました」の意味。', zh: '完美！🌟"예약했어요"意思是"我预约了"。', th: 'สมบูรณ์แบบ! 🌟 "예약했어요" แปลว่า "จองไว้แล้ว"', vi: 'Hoàn hảo! 🌟 "예약했어요" nghĩa là "đã đặt phòng".', es: '¡Perfecto! 🌟 "예약했어요" significa "hice una reserva".' }, nextSceneId: 's1e2-scene2' },
      { id: 's1e2-c1b', korean: '체크인이요', romanization: 'Chekiniyo', translation: { en: 'Check-in please', ja: 'チェックインです', zh: '入住', th: 'เช็คอินค่ะ/ครับ', vi: 'Nhận phòng ạ', es: 'Registro por favor' }, correctness: 'good', feedback: { en: "Good! 👍 Works but mentioning reservation is clearer.", ja: 'いいね！👍 予約について言うともっと明確！', zh: '不错！👍 但提到预约更清楚。', th: 'ดี! 👍 แต่บอกว่าจองไว้ชัดเจนกว่า', vi: 'Tốt! 👍 Nhưng nói có đặt phòng rõ hơn.', es: '¡Bien! 👍 Pero mencionar la reserva es más claro.' }, nextSceneId: 's1e2-scene2' },
    ], teaching: { vocabulary: [{ korean: '예약', romanization: 'yeyak', meaning: { en: 'Reservation', ja: '予約', zh: '预约', th: 'การจอง', vi: 'Đặt phòng', es: 'Reserva' } }, { korean: '체크인', romanization: 'chek-in', meaning: { en: 'Check-in', ja: 'チェックイン', zh: '入住', th: 'เช็คอิน', vi: 'Nhận phòng', es: 'Registro' } }] } },
    { id: 's1e2-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'happy' }, dialogue: { en: '"여권 보여주세요." (Please show me your passport.) "몇 박이세요?" (How many nights?)', ja: '「여권 보여주세요.」（パスポートを見せてください。）「몇 박이세요?」（何泊ですか？）', zh: '"여권 보여주세요."（请出示护照。）"몇 박이세요?"（住几晚？）', th: '"여권 보여주세요." (ขอดูพาสปอร์ตค่ะ) "몇 박이세요?" (กี่คืนคะ?)', vi: '"여권 보여주세요." (Xin cho xem hộ chiếu.) "몇 박이세요?" (Mấy đêm?)', es: '"여권 보여주세요." (Muestre su pasaporte.) "몇 박이세요?" (¿Cuántas noches?)' }, choices: [
      { id: 's1e2-c2a', korean: '삼 박이요', romanization: 'Sam bagiyo', translation: { en: 'Three nights', ja: '3泊です', zh: '三晚', th: 'สามคืนค่ะ/ครับ', vi: 'Ba đêm', es: 'Tres noches' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '삼 박' = three nights!", ja: '完璧！🌟「삼 박」= 3泊！', zh: '完美！🌟"삼 박"= 三晚！', th: 'สมบูรณ์แบบ! 🌟 "삼 박" = สามคืน!', vi: 'Hoàn hảo! 🌟 "삼 박" = ba đêm!', es: '¡Perfecto! 🌟 "삼 박" = tres noches!' }, nextSceneId: 's1e2-scene3' },
    ], teaching: { vocabulary: [{ korean: '여권', romanization: 'yeogwon', meaning: { en: 'Passport', ja: 'パスポート', zh: '护照', th: 'พาสปอร์ต', vi: 'Hộ chiếu', es: 'Pasaporte' } }, { korean: '박', romanization: 'bak', meaning: { en: 'Night (counter)', ja: '泊', zh: '晚', th: 'คืน', vi: 'Đêm', es: 'Noche' } }] } },
    { id: 's1e2-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Great job! 🎉 You learned:\n✅ '예약했어요' - I made a reservation\n✅ '여권' - Passport\n✅ '삼 박' - Three nights\n\nYou earned the '🏨 Hotel Guest' badge!", ja: 'よくできた！🎉 学んだこと：\n✅「예약했어요」- 予約しました\n✅「여권」- パスポート\n✅「삼 박」- 3泊\n\n「🏨 ホテルゲスト」バッジ獲得！', zh: '做得好！🎉 你学到了：\n✅ "예약했어요" - 我预约了\n✅ "여권" - 护照\n✅ "삼 박" - 三晚\n\n获得"🏨 酒店客人"徽章！', th: 'เก่งมาก! 🎉 คุณเรียนรู้:\n✅ "예약했어요" - จองไว้แล้ว\n✅ "여권" - พาสปอร์ต\n✅ "삼 박" - สามคืน\n\nได้รับเหรียญ "🏨 แขกโรงแรม"!', vi: 'Giỏi lắm! 🎉 Bạn đã học:\n✅ "예약했어요" - Đã đặt phòng\n✅ "여권" - Hộ chiếu\n✅ "삼 박" - Ba đêm\n\nNhận huy hiệu "🏨 Khách khách sạn"!', es: '¡Bien hecho! 🎉 Aprendiste:\n✅ "예약했어요" - Hice reserva\n✅ "여권" - Pasaporte\n✅ "삼 박" - Tres noches\n\n¡Obtuviste "🏨 Huésped"!' } },
  ],
};

// Episode 3: Ordering at a Cafe
export const s1e3: StoryEpisode = {
  id: 's1e3',
  season: 1,
  episode: 3,
  title: { en: 'Ordering at a Cafe', ja: 'カフェで注文', zh: '在咖啡店点单', th: 'สั่งที่คาเฟ่', vi: 'Gọi đồ ở quán cà phê', es: 'Pidiendo en una cafetería' },
  description: { en: 'Order your first Korean coffee!', ja: '初めての韓国コーヒーを注文！', zh: '点你的第一杯韩国咖啡！', th: 'สั่งกาแฟเกาหลีครั้งแรก!', vi: 'Gọi cà phê Hàn đầu tiên!', es: '¡Pide tu primer café coreano!' },
  icon: '☕',
  location: 'Myeongdong Cafe',
  requiredLevel: 1,
  rewards: { xp: 200, badge: 'cafe_lover', badgeName: { en: 'Cafe Lover', ja: 'カフェ好き', zh: '咖啡爱好者', th: 'คนรักคาเฟ่', vi: 'Người yêu cà phê', es: 'Amante del café' } },
  isPremium: false,
  scenes: [
    { id: 's1e3-scene1', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 주문하시겠어요?" (Hello! Would you like to order?)', ja: '「안녕하세요! 주문하시겠어요?」（こんにちは！ご注文は？）', zh: '"안녕하세요! 주문하시겠어요?"（您好！要点单吗？）', th: '"안녕하세요! 주문하시겠어요?" (สวัสดีค่ะ! สั่งไหมคะ?)', vi: '"안녕하세요! 주문하시겠어요?" (Xin chào! Bạn muốn gọi gì?)', es: '"안녕하세요! 주문하시겠어요?" (¡Hola! ¿Desea ordenar?)' }, choices: [
      { id: 's1e3-c1a', korean: '아메리카노 한 잔 주세요', romanization: 'Amerikano han jan juseyo', translation: { en: 'One Americano please', ja: 'アメリカーノ1杯ください', zh: '请给我一杯美式咖啡', th: 'ขออเมริกาโน่หนึ่งแก้วค่ะ/ครับ', vi: 'Cho tôi một ly Americano', es: 'Un Americano por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '한 잔' is the counter for drinks!", ja: '完璧！🌟「한 잔」は飲み物の数え方！', zh: '完美！🌟"한 잔"是饮料的量词！', th: 'สมบูรณ์แบบ! 🌟 "한 잔" คือลักษณนามสำหรับเครื่องดื่ม!', vi: 'Hoàn hảo! 🌟 "한 잔" là từ đếm cho đồ uống!', es: '¡Perfecto! 🌟 "한 잔" es el contador para bebidas!' }, nextSceneId: 's1e3-scene2' },
      { id: 's1e3-c1b', korean: '커피요', romanization: 'Keopiyo', translation: { en: 'Coffee please', ja: 'コーヒーです', zh: '咖啡', th: 'กาแฟค่ะ/ครับ', vi: 'Cà phê', es: 'Café por favor' }, correctness: 'good', feedback: { en: "Good! 👍 But be specific about what kind!", ja: 'いいね！👍 でも種類を言うともっと良い！', zh: '不错！👍 但要具体说什么类型！', th: 'ดี! 👍 แต่ระบุประเภทด้วยจะดีกว่า!', vi: 'Tốt! 👍 Nhưng nên nói cụ thể loại gì!', es: '¡Bien! 👍 ¡Pero sé específico!' }, nextSceneId: 's1e3-scene2' },
    ], teaching: { vocabulary: [{ korean: '주문', romanization: 'jumun', meaning: { en: 'Order', ja: '注文', zh: '点单', th: 'สั่ง', vi: 'Gọi món', es: 'Orden' } }, { korean: '잔', romanization: 'jan', meaning: { en: 'Cup/glass (counter)', ja: '杯', zh: '杯', th: 'แก้ว', vi: 'Ly', es: 'Taza' } }] } },
    { id: 's1e3-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'thinking' }, dialogue: { en: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (Ice or hot?)', ja: '「아이스로 드릴까요, 따뜻하게 드릴까요?」（アイスですか、ホットですか？）', zh: '"아이스로 드릴까요, 따뜻하게 드릴까요?"（冰的还是热的？）', th: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (เย็นหรือร้อนคะ?)', vi: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (Đá hay nóng?)', es: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (¿Frío o caliente?)' }, choices: [
      { id: 's1e3-c2a', korean: '아이스로 주세요', romanization: 'Aiseuro juseyo', translation: { en: 'Iced please', ja: 'アイスでお願いします', zh: '冰的', th: 'เย็นค่ะ/ครับ', vi: 'Đá ạ', es: 'Frío por favor' }, correctness: 'perfect', feedback: { en: "Great! 🌟 Iced coffee is super popular in Korea!", ja: '素晴らしい！🌟 アイスコーヒーは韓国で大人気！', zh: '太棒了！🌟 冰咖啡在韩国很受欢迎！', th: 'เยี่ยม! 🌟 กาแฟเย็นฮิตมากในเกาหลี!', vi: 'Tuyệt! 🌟 Cà phê đá rất phổ biến ở Hàn!', es: '¡Genial! 🌟 ¡El café helado es muy popular!' }, nextSceneId: 's1e3-scene3' },
      { id: 's1e3-c2b', korean: '따뜻하게 주세요', romanization: 'Ttatteuthage juseyo', translation: { en: 'Hot please', ja: 'ホットでお願いします', zh: '热的', th: 'ร้อนค่ะ/ครับ', vi: 'Nóng ạ', es: 'Caliente por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 Hot coffee for a cozy day!", ja: '完璧！🌟 寒い日にホットコーヒー！', zh: '完美！🌟 热咖啡温暖身心！', th: 'สมบูรณ์แบบ! 🌟 กาแฟร้อนในวันเย็นๆ!', vi: 'Hoàn hảo! 🌟 Cà phê nóng cho ngày se lạnh!', es: '¡Perfecto! 🌟 ¡Café caliente para un día acogedor!' }, nextSceneId: 's1e3-scene3' },
    ], teaching: { vocabulary: [{ korean: '아이스', romanization: 'aiseu', meaning: { en: 'Iced', ja: 'アイス', zh: '冰', th: 'เย็น', vi: 'Đá', es: 'Helado' } }, { korean: '따뜻하게', romanization: 'ttatteuthage', meaning: { en: 'Hot/warm', ja: 'ホット', zh: '热', th: 'ร้อน', vi: 'Nóng', es: 'Caliente' } }] } },
    { id: 's1e3-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Awesome! 🎉 You learned:\n✅ '아메리카노 한 잔' - One Americano\n✅ '아이스/따뜻하게' - Iced/Hot\n\nYou earned the '☕ Cafe Lover' badge!", ja: '素晴らしい！🎉 学んだこと：\n✅「아메리카노 한 잔」- アメリカーノ1杯\n✅「아이스/따뜻하게」- アイス/ホット\n\n「☕ カフェ好き」バッジ獲得！', zh: '太棒了！🎉 你学到了：\n✅ "아메리카노 한 잔" - 一杯美式\n✅ "아이스/따뜻하게" - 冰/热\n\n获得"☕ 咖啡爱好者"徽章！', th: 'เยี่ยม! 🎉 คุณเรียนรู้:\n✅ "아메리카노 한 잔" - อเมริกาโน่หนึ่งแก้ว\n✅ "아이스/따뜻하게" - เย็น/ร้อน\n\nได้รับเหรียญ "☕ คนรักคาเฟ่"!', vi: 'Tuyệt vời! 🎉 Bạn đã học:\n✅ "아메리카노 한 잔" - Một ly Americano\n✅ "아이스/따뜻하게" - Đá/Nóng\n\nNhận huy hiệu "☕ Người yêu cà phê"!', es: '¡Genial! 🎉 Aprendiste:\n✅ "아메리카노 한 잔" - Un Americano\n✅ "아이스/따뜻하게" - Frío/Caliente\n\n¡Obtuviste "☕ Amante del café"!' } },
  ],
};

// Episode 4: Riding the Subway
export const s1e4: StoryEpisode = {
  id: 's1e4',
  season: 1,
  episode: 4,
  title: { en: 'Riding the Subway', ja: '地下鉄に乗る', zh: '乘坐地铁', th: 'นั่งรถไฟใต้ดิน', vi: 'Đi tàu điện ngầm', es: 'Viajando en metro' },
  description: { en: 'Navigate the Seoul subway system!', ja: 'ソウルの地下鉄を使いこなそう！', zh: '学会使用首尔地铁！', th: 'เรียนรู้ระบบรถไฟใต้ดินโซล!', vi: 'Sử dụng hệ thống tàu điện ngầm Seoul!', es: '¡Navega por el sistema de metro de Seúl!' },
  icon: '🚇',
  location: 'Seoul Subway',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'subway_master', badgeName: { en: 'Subway Master', ja: '地下鉄マスター', zh: '地铁达人', th: 'เซียนรถไฟใต้ดิน', vi: 'Bậc thầy tàu điện', es: 'Maestro del metro' } },
  isPremium: false,
  scenes: [
    { id: 's1e4-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's take the subway to Hongdae! 🚇 The Seoul subway is color-coded and easy to use. You need to buy a T-money card first!", ja: '弘大まで地下鉄で行こう！🚇 ソウルの地下鉄は色分けされてて使いやすいよ。まずT-moneyカードを買おう！', zh: '坐地铁去弘大吧！🚇 首尔地铁有颜色区分，很容易使用。先买一张T-money卡！', th: 'ไปฮงแดด้วยรถไฟใต้ดินกัน! 🚇 รถไฟใต้ดินโซลแบ่งสีและใช้ง่าย ต้องซื้อบัตร T-money ก่อน!', vi: 'Đi tàu điện ngầm đến Hongdae! 🚇 Tàu điện Seoul phân màu và dễ sử dụng. Bạn cần mua thẻ T-money trước!', es: '¡Vamos en metro a Hongdae! 🚇 El metro de Seúl está codificado por colores. ¡Primero compra una tarjeta T-money!' }, nextSceneId: 's1e4-scene2' },
    { id: 's1e4-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '역무원', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' }, dialogue: { en: '"어디 가세요?" (Where are you going?)', ja: '「어디 가세요?」（どこへ行きますか？）', zh: '"어디 가세요?"（您去哪里？）', th: '"어디 가세요?" (ไปไหนคะ/ครับ?)', vi: '"어디 가세요?" (Bạn đi đâu?)', es: '"어디 가세요?" (¿A dónde va?)' }, choices: [
      { id: 's1e4-c1a', korean: '홍대입구역 가요', romanization: 'Hongdae-ipguryeok gayo', translation: { en: "I'm going to Hongdae Station", ja: '弘大入口駅に行きます', zh: '我去弘大入口站', th: 'ไปสถานีฮงแดค่ะ/ครับ', vi: 'Tôi đi ga Hongdae', es: 'Voy a la estación Hongdae' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '역' means station!", ja: '完璧！🌟「역」は駅の意味！', zh: '完美！🌟"역"是车站的意思！', th: 'สมบูรณ์แบบ! 🌟 "역" แปลว่าสถานี!', vi: 'Hoàn hảo! 🌟 "역" nghĩa là ga!', es: '¡Perfecto! 🌟 "역" significa estación!' }, nextSceneId: 's1e4-scene3' },
    ], teaching: { vocabulary: [{ korean: '역', romanization: 'yeok', meaning: { en: 'Station', ja: '駅', zh: '站', th: 'สถานี', vi: 'Ga', es: 'Estación' } }, { korean: '입구', romanization: 'ipgu', meaning: { en: 'Entrance', ja: '入口', zh: '入口', th: 'ทางเข้า', vi: 'Lối vào', es: 'Entrada' } }] } },
    { id: 's1e4-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '역무원', avatar: '/images/story/str_crt_taxi01.png', emotion: 'thinking' }, dialogue: { en: '"2호선으로 갈아타세요." (Transfer to Line 2.)', ja: '「2호선으로 갈아타세요.」（2号線に乗り換えてください。）', zh: '"2호선으로 갈아타세요."（请换乘2号线。）', th: '"2호선으로 갈아타세요." (เปลี่ยนไปสาย 2 ค่ะ/ครับ)', vi: '"2호선으로 갈아타세요." (Chuyển sang tuyến 2.)', es: '"2호선으로 갈아타세요." (Transborde a la línea 2.)' }, choices: [
      { id: 's1e4-c2a', korean: '알겠습니다. 감사합니다!', romanization: 'Algesseumnida. Gamsahamnida!', translation: { en: 'I understand. Thank you!', ja: 'わかりました。ありがとうございます！', zh: '明白了。谢谢！', th: 'เข้าใจค่ะ/ครับ ขอบคุณค่ะ/ครับ!', vi: 'Tôi hiểu rồi. Cảm ơn!', es: 'Entiendo. ¡Gracias!' }, correctness: 'perfect', feedback: { en: "Polite! 🌟 '갈아타다' means to transfer!", ja: '丁寧！🌟「갈아타다」は乗り換えるの意味！', zh: '有礼貌！🌟"갈아타다"是换乘的意思！', th: 'สุภาพ! 🌟 "갈아타다" แปลว่าเปลี่ยนสาย!', vi: 'Lịch sự! 🌟 "갈아타다" nghĩa là đổi tuyến!', es: '¡Cortés! 🌟 "갈아타다" significa transbordar!' }, nextSceneId: 's1e4-scene4' },
    ], teaching: { vocabulary: [{ korean: '호선', romanization: 'hoseon', meaning: { en: 'Line (subway)', ja: '号線', zh: '号线', th: 'สาย', vi: 'Tuyến', es: 'Línea' } }, { korean: '갈아타다', romanization: 'garatada', meaning: { en: 'To transfer', ja: '乗り換える', zh: '换乘', th: 'เปลี่ยนสาย', vi: 'Đổi tuyến', es: 'Transbordar' } }], culturalNote: { en: '💡 Seoul subway has 23 lines! Use the color codes to navigate.', ja: '💡 ソウルの地下鉄は23路線！色で区別しよう。', zh: '💡 首尔地铁有23条线路！用颜色来区分。', th: '💡 รถไฟใต้ดินโซลมี 23 สาย! ใช้สีเพื่อนำทาง', vi: '💡 Tàu điện Seoul có 23 tuyến! Dùng màu để định hướng.', es: '💡 ¡El metro de Seúl tiene 23 líneas! Usa los colores para orientarte.' } } },
    { id: 's1e4-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You navigated the subway! 🎉 You learned:\n✅ '역' - Station\n✅ '호선' - Line\n✅ '갈아타다' - Transfer\n\nYou earned the '🚇 Subway Master' badge!", ja: '地下鉄をマスター！🎉 学んだこと：\n✅「역」- 駅\n✅「호선」- 号線\n✅「갈아타다」- 乗り換える\n\n「🚇 地下鉄マスター」バッジ獲得！', zh: '地铁导航成功！🎉 你学到了：\n✅ "역" - 站\n✅ "호선" - 号线\n✅ "갈아타다" - 换乘\n\n获得"🚇 地铁达人"徽章！', th: 'นำทางรถไฟใต้ดินสำเร็จ! 🎉 คุณเรียนรู้:\n✅ "역" - สถานี\n✅ "호선" - สาย\n✅ "갈아타다" - เปลี่ยนสาย\n\nได้รับเหรียญ "🚇 เซียนรถไฟใต้ดิน"!', vi: 'Đi tàu thành công! 🎉 Bạn đã học:\n✅ "역" - Ga\n✅ "호선" - Tuyến\n✅ "갈아타다" - Đổi tuyến\n\nNhận huy hiệu "🚇 Bậc thầy tàu điện"!', es: '¡Navegaste el metro! 🎉 Aprendiste:\n✅ "역" - Estación\n✅ "호선" - Línea\n✅ "갈아타다" - Transbordar\n\n¡Obtuviste "🚇 Maestro del metro"!' } },
  ],
};

// Episode 5: Street Food at Myeongdong
export const s1e5: StoryEpisode = {
  id: 's1e5',
  season: 1,
  episode: 5,
  title: { en: 'Street Food at Myeongdong', ja: '明洞の屋台料理', zh: '明洞街头美食', th: 'อาหารริมทางที่เมียงดง', vi: 'Đồ ăn đường phố Myeongdong', es: 'Comida callejera en Myeongdong' },
  description: { en: 'Try delicious Korean street food!', ja: '美味しい韓国の屋台料理を食べよう！', zh: '尝尝美味的韩国街头小吃！', th: 'ลองอาหารริมทางเกาหลีอร่อยๆ!', vi: 'Thử đồ ăn đường phố Hàn Quốc ngon!', es: '¡Prueba deliciosa comida callejera coreana!' },
  icon: '🍢',
  location: 'Myeongdong Street',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'street_food_fan', badgeName: { en: 'Street Food Fan', ja: '屋台料理ファン', zh: '街头美食迷', th: 'แฟนอาหารริมทาง', vi: 'Fan đồ ăn đường phố', es: 'Fan de comida callejera' } },
  isPremium: false,
  scenes: [
    { id: 's1e5-scene1', background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Myeongdong street food is amazing! 🍢 Let's try some tteokbokki (spicy rice cakes) and odeng (fish cake soup)!", ja: '明洞の屋台料理は最高！🍢 トッポッキとおでんを食べよう！', zh: '明洞的街头美食太棒了！🍢 来尝尝辣炒年糕和鱼糕汤！', th: 'อาหารริมทางเมียงดงเยี่ยมมาก! 🍢 มาลองต็อกปกกีและโอแดงกัน!', vi: 'Đồ ăn đường phố Myeongdong tuyệt vời! 🍢 Thử tteokbokki và odeng!', es: '¡La comida callejera de Myeongdong es increíble! 🍢 ¡Probemos tteokbokki y odeng!' }, nextSceneId: 's1e5-scene2' },
    { id: 's1e5-scene2', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '상인', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"어서오세요! 뭐 드릴까요?" (Welcome! What can I get you?)', ja: '「어서오세요! 뭐 드릴까요?」（いらっしゃい！何にしましょう？）', zh: '"어서오세요! 뭐 드릴까요?"（欢迎！要什么？）', th: '"어서오세요! 뭐 드릴까요?" (ยินดีต้อนรับค่ะ! จะเอาอะไรคะ?)', vi: '"어서오세요! 뭐 드릴까요?" (Xin chào! Bạn muốn gì?)', es: '"어서오세요! 뭐 드릴까요?" (¡Bienvenido! ¿Qué le sirvo?)' }, choices: [
      { id: 's1e5-c1a', korean: '떡볶이 하나 주세요', romanization: 'Tteokbokki hana juseyo', translation: { en: 'One tteokbokki please', ja: 'トッポッキ1つください', zh: '请给我一份辣炒年糕', th: 'ขอต็อกปกกีหนึ่งที่ค่ะ/ครับ', vi: 'Cho một phần tteokbokki', es: 'Un tteokbokki por favor' }, correctness: 'perfect', feedback: { en: "Yum! 🌟 Tteokbokki is a must-try street food!", ja: '美味しい！🌟 トッポッキは必食！', zh: '好吃！🌟 辣炒年糕是必尝小吃！', th: 'อร่อย! 🌟 ต็อกปกกีต้องลอง!', vi: 'Ngon! 🌟 Tteokbokki là món phải thử!', es: '¡Delicioso! 🌟 ¡El tteokbokki es imprescindible!' }, nextSceneId: 's1e5-scene3' },
    ], teaching: { vocabulary: [{ korean: '떡볶이', romanization: 'tteokbokki', meaning: { en: 'Spicy rice cakes', ja: 'トッポッキ', zh: '辣炒年糕', th: 'ต็อกปกกี', vi: 'Bánh gạo cay', es: 'Pasteles de arroz picantes' } }, { korean: '하나', romanization: 'hana', meaning: { en: 'One', ja: '1つ', zh: '一个', th: 'หนึ่ง', vi: 'Một', es: 'Uno' } }] } },
    { id: 's1e5-scene3', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '상인', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"오천 원이에요." (It\'s 5,000 won.) So affordable!', ja: '「오천 원이에요.」（5,000ウォンです。）お手頃！', zh: '"오천 원이에요."（5000韩元。）很便宜！', th: '"오천 원이에요." (ห้าพันวอนค่ะ) ราคาถูกมาก!', vi: '"오천 원이에요." (5,000 won.) Rẻ quá!', es: '"오천 원이에요." (Son 5,000 won.) ¡Muy económico!' }, choices: [
      { id: 's1e5-c2a', korean: '여기요. 맛있게 먹을게요!', romanization: 'Yeogiyo. Masitge meogeulgeyo!', translation: { en: 'Here you go. I will enjoy it!', ja: 'はい。美味しくいただきます！', zh: '给您。我会好好享用！', th: 'นี่ค่ะ/ครับ จะกินอย่างอร่อยค่ะ/ครับ!', vi: 'Đây ạ. Tôi sẽ ăn ngon!', es: 'Aquí tiene. ¡Lo disfrutaré!' }, correctness: 'perfect', feedback: { en: "Delicious! 🌟 '맛있게 먹을게요' shows appreciation!", ja: '美味しい！🌟「맛있게 먹을게요」は感謝を示す表現！', zh: '美味！🌟"맛있게 먹을게요"表示感谢！', th: 'อร่อย! 🌟 "맛있게 먹을게요" แสดงความขอบคุณ!', vi: 'Ngon! 🌟 "맛있게 먹을게요" thể hiện lòng biết ơn!', es: '¡Rico! 🌟 "맛있게 먹을게요" muestra agradecimiento!' }, nextSceneId: 's1e5-scene4' },
    ], teaching: { vocabulary: [{ korean: '얼마예요', romanization: 'eolmayeyo', meaning: { en: 'How much?', ja: 'いくらですか', zh: '多少钱', th: 'เท่าไหร่', vi: 'Bao nhiêu', es: '¿Cuánto cuesta?' } }, { korean: '원', romanization: 'won', meaning: { en: 'Won (currency)', ja: 'ウォン', zh: '韩元', th: 'วอน', vi: 'Won', es: 'Won' } }] } },
    { id: 's1e5-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Street food success! 🎉 You learned:\n✅ '떡볶이' - Tteokbokki\n✅ '얼마예요?' - How much?\n✅ '원' - Won\n\nYou earned the '🍢 Street Food Fan' badge!", ja: '屋台料理制覇！🎉 学んだこと：\n✅「떡볶이」- トッポッキ\n✅「얼마예요?」- いくら？\n✅「원」- ウォン\n\n「🍢 屋台料理ファン」バッジ獲得！', zh: '街头美食成功！🎉 你学到了：\n✅ "떡볶이" - 辣炒年糕\n✅ "얼마예요?" - 多少钱？\n✅ "원" - 韩元\n\n获得"🍢 街头美食迷"徽章！', th: 'สำเร็จอาหารริมทาง! 🎉 คุณเรียนรู้:\n✅ "떡볶이" - ต็อกปกกี\n✅ "얼마예요?" - เท่าไหร่?\n✅ "원" - วอน\n\nได้รับเหรียญ "🍢 แฟนอาหารริมทาง"!', vi: 'Thành công đồ ăn đường phố! 🎉 Bạn đã học:\n✅ "떡볶이" - Tteokbokki\n✅ "얼마예요?" - Bao nhiêu?\n✅ "원" - Won\n\nNhận huy hiệu "🍢 Fan đồ ăn đường phố"!', es: '¡Éxito con comida callejera! 🎉 Aprendiste:\n✅ "떡볶이" - Tteokbokki\n✅ "얼마예요?" - ¿Cuánto?\n✅ "원" - Won\n\n¡Obtuviste "🍢 Fan de comida callejera"!' } },
  ],
};

// Episode 6: Shopping at Hongdae
export const s1e6: StoryEpisode = {
  id: 's1e6',
  season: 1,
  episode: 6,
  title: { en: 'Shopping at Hongdae', ja: '弘大でショッピング', zh: '弘大购物', th: 'ช้อปปิ้งที่ฮงแด', vi: 'Mua sắm ở Hongdae', es: 'Compras en Hongdae' },
  description: { en: 'Shop for clothes and learn size/color vocabulary!', ja: '服を買いながらサイズと色の語彙を学ぼう！', zh: '买衣服，学习尺码和颜色词汇！', th: 'ซื้อเสื้อผ้าและเรียนคำศัพท์ไซส์/สี!', vi: 'Mua quần áo và học từ vựng kích cỡ/màu sắc!', es: '¡Compra ropa y aprende vocabulario de tallas/colores!' },
  icon: '🛍️',
  location: 'Hongdae Shopping Street',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'shopping_pro', badgeName: { en: 'Shopping Pro', ja: 'ショッピングプロ', zh: '购物达人', th: 'มือโปรช้อปปิ้ง', vi: 'Chuyên gia mua sắm', es: 'Experto en compras' } },
  isPremium: false,
  scenes: [
    { id: 's1e6-scene1', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"어서오세요! 뭐 찾으세요?" (Welcome! What are you looking for?)', ja: '「어서오세요! 뭐 찾으세요?」（いらっしゃい！何をお探しですか？）', zh: '"어서오세요! 뭐 찾으세요?"（欢迎！您在找什么？）', th: '"어서오세요! 뭐 찾으세요?" (ยินดีต้อนรับค่ะ! หาอะไรคะ?)', vi: '"어서오세요! 뭐 찾으세요?" (Xin chào! Bạn tìm gì?)', es: '"어서오세요! 뭐 찾으세요?" (¡Bienvenido! ¿Qué busca?)' }, choices: [
      { id: 's1e6-c1a', korean: '이 티셔츠 있어요?', romanization: 'I tisyeocheu isseoyo?', translation: { en: 'Do you have this t-shirt?', ja: 'このTシャツありますか？', zh: '有这件T恤吗？', th: 'มีเสื้อยืดตัวนี้ไหมคะ/ครับ?', vi: 'Có áo phông này không?', es: '¿Tiene esta camiseta?' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '있어요' is key for asking about availability!", ja: '素晴らしい！🌟「있어요」は在庫確認に便利！', zh: '太棒了！🌟"있어요"是询问是否有货的关键词！', th: 'เยี่ยม! 🌟 "있어요" สำคัญสำหรับถามว่ามีไหม!', vi: 'Tuyệt! 🌟 "있어요" quan trọng để hỏi có hàng không!', es: '¡Genial! 🌟 "있어요" es clave para preguntar disponibilidad!' }, nextSceneId: 's1e6-scene2' },
    ], teaching: { vocabulary: [{ korean: '티셔츠', romanization: 'tisyeocheu', meaning: { en: 'T-shirt', ja: 'Tシャツ', zh: 'T恤', th: 'เสื้อยืด', vi: 'Áo phông', es: 'Camiseta' } }, { korean: '있어요', romanization: 'isseoyo', meaning: { en: 'Have/exist', ja: 'ある/いる', zh: '有', th: 'มี', vi: 'Có', es: 'Tener/Hay' } }] } },
    { id: 's1e6-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"네! 사이즈 뭐 드릴까요? 색깔은요?" (Yes! What size? What color?)', ja: '「네! 사이즈 뭐 드릴까요? 색깔은요?」（はい！サイズは？色は？）', zh: '"네! 사이즈 뭐 드릴까요? 색깔은요?"（有！要什么尺码？颜色呢？）', th: '"네! 사이즈 뭐 드릴까요? 색깔은요?" (มีค่ะ! ไซส์อะไรคะ? สีอะไรคะ?)', vi: '"네! 사이즈 뭐 드릴까요? 색깔은요?" (Có! Size gì? Màu gì?)', es: '"네! 사이즈 뭐 드릴까요? 색깔은요?" (¡Sí! ¿Qué talla? ¿Qué color?)' }, choices: [
      { id: 's1e6-c2a', korean: '미디엄 사이즈, 검정색으로 주세요', romanization: 'Midieum saijeu, geomjeongsaegeuro juseyo', translation: { en: 'Medium size, in black please', ja: 'Mサイズ、黒でお願いします', zh: 'M码，黑色的', th: 'ไซส์กลาง สีดำค่ะ/ครับ', vi: 'Size M, màu đen', es: 'Talla mediana, en negro por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '검정색' = black, '사이즈' = size!", ja: '完璧！🌟「검정색」= 黒、「사이즈」= サイズ！', zh: '完美！🌟"검정색"= 黑色，"사이즈"= 尺码！', th: 'สมบูรณ์แบบ! 🌟 "검정색" = สีดำ, "사이즈" = ไซส์!', vi: 'Hoàn hảo! 🌟 "검정색" = đen, "사이즈" = size!', es: '¡Perfecto! 🌟 "검정색" = negro, "사이즈" = talla!' }, nextSceneId: 's1e6-scene3' },
    ], teaching: { vocabulary: [{ korean: '사이즈', romanization: 'saijeu', meaning: { en: 'Size', ja: 'サイズ', zh: '尺码', th: 'ไซส์', vi: 'Size', es: 'Talla' } }, { korean: '색깔', romanization: 'saekkal', meaning: { en: 'Color', ja: '色', zh: '颜色', th: 'สี', vi: 'Màu', es: 'Color' } }, { korean: '검정색', romanization: 'geomjeongsaek', meaning: { en: 'Black', ja: '黒', zh: '黑色', th: 'สีดำ', vi: 'Đen', es: 'Negro' } }] } },
    { id: 's1e6-scene3', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"이만 원이에요. 할인하면 만 오천 원이에요!" (20,000 won. With discount, 15,000 won!)', ja: '「이만 원이에요. 할인하면 만 오천 원이에요!」（2万ウォン。割引で1万5千ウォン！）', zh: '"이만 원이에요. 할인하면 만 오천 원이에요!"（两万韩元。打折后一万五！）', th: '"이만 원이에요. 할인하면 만 오천 원이에요!" (สองหมื่นวอนค่ะ ลดราคาเหลือหมื่นห้า!)', vi: '"이만 원이에요. 할인하면 만 오천 원이에요!" (20,000 won. Giảm giá còn 15,000 won!)', es: '"이만 원이에요. 할인하면 만 오천 원이에요!" (20,000 won. ¡Con descuento, 15,000 won!)' }, choices: [
      { id: 's1e6-c3a', korean: '좋아요! 살게요!', romanization: 'Joayo! Salgeyo!', translation: { en: "Great! I'll buy it!", ja: 'いいね！買います！', zh: '好的！我买了！', th: 'ดีค่ะ/ครับ! ซื้อเลย!', vi: 'Tốt! Tôi mua!', es: '¡Genial! ¡Lo compro!' }, correctness: 'perfect', feedback: { en: "Shopping success! 🌟 '할인' means discount!", ja: 'ショッピング成功！🌟「할인」は割引の意味！', zh: '购物成功！🌟"할인"是打折的意思！', th: 'ช้อปปิ้งสำเร็จ! 🌟 "할인" แปลว่าลดราคา!', vi: 'Mua sắm thành công! 🌟 "할인" nghĩa là giảm giá!', es: '¡Compra exitosa! 🌟 "할인" significa descuento!' }, nextSceneId: 's1e6-scene4' },
    ], teaching: { vocabulary: [{ korean: '할인', romanization: 'halin', meaning: { en: 'Discount', ja: '割引', zh: '折扣', th: 'ลดราคา', vi: 'Giảm giá', es: 'Descuento' } }, { korean: '사다', romanization: 'sada', meaning: { en: 'To buy', ja: '買う', zh: '买', th: 'ซื้อ', vi: 'Mua', es: 'Comprar' } }] } },
    { id: 's1e6-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Great shopping! 🎉 You learned:\n✅ '사이즈' - Size\n✅ '색깔/검정색' - Color/Black\n✅ '할인' - Discount\n\nYou earned the '🛍️ Shopping Pro' badge!", ja: 'ナイスショッピング！🎉 学んだこと：\n✅「사이즈」- サイズ\n✅「색깔/검정색」- 色/黒\n✅「할인」- 割引\n\n「🛍️ ショッピングプロ」バッジ獲得！', zh: '购物愉快！🎉 你学到了：\n✅ "사이즈" - 尺码\n✅ "색깔/검정색" - 颜色/黑色\n✅ "할인" - 折扣\n\n获得"🛍️ 购物达人"徽章！', th: 'ช้อปปิ้งเยี่ยม! 🎉 คุณเรียนรู้:\n✅ "사이즈" - ไซส์\n✅ "색깔/검정색" - สี/สีดำ\n✅ "할인" - ลดราคา\n\nได้รับเหรียญ "🛍️ มือโปรช้อปปิ้ง"!', vi: 'Mua sắm tuyệt vời! 🎉 Bạn đã học:\n✅ "사이즈" - Size\n✅ "색깔/검정색" - Màu/Đen\n✅ "할인" - Giảm giá\n\nNhận huy hiệu "🛍️ Chuyên gia mua sắm"!', es: '¡Gran compra! 🎉 Aprendiste:\n✅ "사이즈" - Talla\n✅ "색깔/검정색" - Color/Negro\n✅ "할인" - Descuento\n\n¡Obtuviste "🛍️ Experto en compras"!' } },
  ],
};

// Episode 7: Getting Lost in Bukchon
export const s1e7: StoryEpisode = {
  id: 's1e7',
  season: 1,
  episode: 7,
  title: { en: 'Getting Lost in Bukchon', ja: '北村で迷子', zh: '在北村迷路', th: 'หลงทางที่บุกชน', vi: 'Lạc đường ở Bukchon', es: 'Perdido en Bukchon' },
  description: { en: 'Learn to ask for directions!', ja: '道を聞く方法を学ぼう！', zh: '学习问路！', th: 'เรียนถามทาง!', vi: 'Học cách hỏi đường!', es: '¡Aprende a pedir direcciones!' },
  icon: '🗺️',
  location: 'Bukchon Hanok Village',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'direction_master', badgeName: { en: 'Direction Master', ja: '方向マスター', zh: '方向达人', th: 'เซียนถามทาง', vi: 'Bậc thầy hỏi đường', es: 'Maestro de direcciones' } },
  isPremium: false,
  scenes: [
    { id: 's1e7-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'thinking' }, dialogue: { en: "Bukchon Hanok Village is beautiful but maze-like! 🏘️ We're lost. Let's ask someone for directions!", ja: '北村韓屋村は美しいけど迷路みたい！🏘️ 迷子になった。誰かに道を聞こう！', zh: '北村韩屋村很美但像迷宫！🏘️ 我们迷路了。问问路吧！', th: 'หมู่บ้านฮานกบุกชนสวยแต่เหมือนเขาวงกต! 🏘️ หลงทางแล้ว ไปถามทางกัน!', vi: 'Làng Hanok Bukchon đẹp nhưng như mê cung! 🏘️ Chúng ta lạc đường rồi. Hỏi đường thôi!', es: '¡El pueblo Hanok de Bukchon es hermoso pero como un laberinto! 🏘️ Estamos perdidos. ¡Preguntemos direcciones!' }, nextSceneId: 's1e7-scene2' },
    { id: 's1e7-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '주민', avatar: '👵', emotion: 'happy' }, dialogue: { en: 'A kind elderly woman approaches. Ask her for directions!', ja: '親切なおばあさんが近づいてきた。道を聞こう！', zh: '一位和蔼的老奶奶走过来。问她路吧！', th: 'คุณยายใจดีเดินเข้ามา ถามทางเธอสิ!', vi: 'Một bà cụ tốt bụng đến gần. Hỏi đường bà ấy!', es: 'Una señora amable se acerca. ¡Pregúntale direcciones!' }, choices: [
      { id: 's1e7-c1a', korean: '실례합니다, 안국역 어떻게 가요?', romanization: 'Sillyehamnida, Anguk-yeok eotteoke gayo?', translation: { en: 'Excuse me, how do I get to Anguk Station?', ja: 'すみません、安国駅はどう行きますか？', zh: '打扰一下，安国站怎么走？', th: 'ขอโทษค่ะ/ครับ สถานีอันกุกไปยังไงคะ/ครับ?', vi: 'Xin lỗi, đi ga Anguk thế nào?', es: 'Disculpe, ¿cómo llego a la estación Anguk?' }, correctness: 'perfect', feedback: { en: "Polite! 🌟 '실례합니다' is very respectful!", ja: '丁寧！🌟「실례합니다」はとても敬意を示す表現！', zh: '有礼貌！🌟"실례합니다"很尊重！', th: 'สุภาพ! 🌟 "실례합니다" แสดงความเคารพมาก!', vi: 'Lịch sự! 🌟 "실례합니다" rất tôn trọng!', es: '¡Cortés! 🌟 "실례합니다" es muy respetuoso!' }, nextSceneId: 's1e7-scene3' },
    ], teaching: { vocabulary: [{ korean: '실례합니다', romanization: 'sillyehamnida', meaning: { en: 'Excuse me', ja: 'すみません', zh: '打扰一下', th: 'ขอโทษค่ะ/ครับ', vi: 'Xin lỗi', es: 'Disculpe' } }, { korean: '어떻게', romanization: 'eotteoke', meaning: { en: 'How', ja: 'どう', zh: '怎么', th: 'อย่างไร', vi: 'Thế nào', es: 'Cómo' } }] } },
    { id: 's1e7-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '주민', avatar: '👵', emotion: 'happy' }, dialogue: { en: '"직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요." (Go straight, turn left. The station is on the right.)', ja: '「직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요.」（まっすぐ行って左に曲がってね。右側に駅があるよ。）', zh: '"직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요."（直走然后左转。车站在右边。）', th: '"직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요." (เดินตรงไปแล้วเลี้ยวซ้าย สถานีอยู่ทางขวาค่ะ)', vi: '"직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요." (Đi thẳng rồi rẽ trái. Ga ở bên phải.)', es: '"직진해서 왼쪽으로 가세요. 그러면 오른쪽에 역이 있어요." (Vaya recto, gire a la izquierda. La estación está a la derecha.)' }, choices: [
      { id: 's1e7-c2a', korean: '감사합니다! 왼쪽, 오른쪽 알겠습니다!', romanization: 'Gamsahamnida! Oenjjok, oreunjjok algesseumnida!', translation: { en: 'Thank you! Left, right, got it!', ja: 'ありがとうございます！左、右、わかりました！', zh: '谢谢！左、右，明白了！', th: 'ขอบคุณค่ะ/ครับ! ซ้าย ขวา เข้าใจแล้ว!', vi: 'Cảm ơn! Trái, phải, hiểu rồi!', es: '¡Gracias! Izquierda, derecha, ¡entendido!' }, correctness: 'perfect', feedback: { en: "You found your way! 🌟 '왼쪽' = left, '오른쪽' = right!", ja: '道が分かった！🌟「왼쪽」= 左、「오른쪽」= 右！', zh: '找到路了！🌟"왼쪽"= 左，"오른쪽"= 右！', th: 'หาทางเจอแล้ว! 🌟 "왼쪽" = ซ้าย, "오른쪽" = ขวา!', vi: 'Tìm được đường! 🌟 "왼쪽" = trái, "오른쪽" = phải!', es: '¡Encontraste el camino! 🌟 "왼쪽" = izquierda, "오른쪽" = derecha!' }, nextSceneId: 's1e7-scene4' },
    ], teaching: { vocabulary: [{ korean: '직진', romanization: 'jikjin', meaning: { en: 'Go straight', ja: '直進', zh: '直走', th: 'ตรงไป', vi: 'Đi thẳng', es: 'Recto' } }, { korean: '왼쪽', romanization: 'oenjjok', meaning: { en: 'Left', ja: '左', zh: '左', th: 'ซ้าย', vi: 'Trái', es: 'Izquierda' } }, { korean: '오른쪽', romanization: 'oreunjjok', meaning: { en: 'Right', ja: '右', zh: '右', th: 'ขวา', vi: 'Phải', es: 'Derecha' } }] } },
    { id: 's1e7-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You found your way! 🎉 You learned:\n✅ '어떻게 가요?' - How do I get there?\n✅ '왼쪽/오른쪽' - Left/Right\n✅ '직진' - Go straight\n\nYou earned the '🗺️ Direction Master' badge!", ja: '道が分かった！🎉 学んだこと：\n✅「어떻게 가요?」- どう行きますか？\n✅「왼쪽/오른쪽」- 左/右\n✅「직진」- 直進\n\n「🗺️ 方向マスター」バッジ獲得！', zh: '找到路了！🎉 你学到了：\n✅ "어떻게 가요?" - 怎么走？\n✅ "왼쪽/오른쪽" - 左/右\n✅ "직진" - 直走\n\n获得"🗺️ 方向达人"徽章！', th: 'หาทางเจอ! 🎉 คุณเรียนรู้:\n✅ "어떻게 가요?" - ไปยังไง?\n✅ "왼쪽/오른쪽" - ซ้าย/ขวา\n✅ "직진" - ตรงไป\n\nได้รับเหรียญ "🗺️ เซียนถามทาง"!', vi: 'Tìm được đường! 🎉 Bạn đã học:\n✅ "어떻게 가요?" - Đi thế nào?\n✅ "왼쪽/오른쪽" - Trái/Phải\n✅ "직진" - Đi thẳng\n\nNhận huy hiệu "🗺️ Bậc thầy hỏi đường"!', es: '¡Encontraste el camino! 🎉 Aprendiste:\n✅ "어떻게 가요?" - ¿Cómo llego?\n✅ "왼쪽/오른쪽" - Izquierda/Derecha\n✅ "직진" - Recto\n\n¡Obtuviste "🗺️ Maestro de direcciones"!' } },
  ],
};

// Episode 8: Goodbye Seoul!
export const s1e8: StoryEpisode = {
  id: 's1e8',
  season: 1,
  episode: 8,
  title: { en: 'Goodbye Seoul!', ja: 'さよならソウル！', zh: '再见首尔！', th: 'ลาก่อนโซล!', vi: 'Tạm biệt Seoul!', es: '¡Adiós Seúl!' },
  description: { en: 'Your last day in Seoul. Say goodbye and promise to return!', ja: 'ソウル最後の日。さよならと再会の約束を！', zh: '在首尔的最后一天。告别并承诺再来！', th: 'วันสุดท้ายในโซล บอกลาและสัญญาว่าจะกลับมา!', vi: 'Ngày cuối ở Seoul. Tạm biệt và hứa sẽ quay lại!', es: 'Tu último día en Seúl. ¡Despídete y promete volver!' },
  icon: '🛫',
  location: 'Incheon Airport',
  requiredLevel: 1,
  rewards: { xp: 300, badge: 'seoul_explorer', badgeName: { en: 'Seoul Explorer', ja: 'ソウル探検家', zh: '首尔探险家', th: 'นักสำรวจโซล', vi: 'Nhà thám hiểm Seoul', es: 'Explorador de Seúl' } },
  isPremium: false,
  scenes: [
    { id: 's1e8-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'sad' }, dialogue: { en: "It's your last day in Seoul! 😢 You made a Korean friend, Minji. Let's say goodbye at the airport!", ja: 'ソウル最後の日！😢 韓国人の友達ミンジができたね。空港でお別れしよう！', zh: '在首尔的最后一天！😢 你交到了韩国朋友敏智。在机场告别吧！', th: 'วันสุดท้ายในโซล! 😢 คุณมีเพื่อนเกาหลีชื่อมินจิ ไปบอกลาที่สนามบินกัน!', vi: 'Ngày cuối ở Seoul! 😢 Bạn có bạn Hàn Quốc tên Minji. Tạm biệt ở sân bay!', es: '¡Es tu último día en Seúl! 😢 Hiciste una amiga coreana, Minji. ¡Despidámonos en el aeropuerto!' }, nextSceneId: 's1e8-scene2' },
    { id: 's1e8-scene2', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '민지', avatar: '👧', emotion: 'sad' }, dialogue: { en: '"벌써 가야 해요? 너무 아쉬워요!" (You have to go already? I\'m so sad!)', ja: '「벌써 가야 해요? 너무 아쉬워요!」（もう行かないといけない？寂しいよ！）', zh: '"벌써 가야 해요? 너무 아쉬워요!"（你已经要走了？太遗憾了！）', th: '"벌써 가야 해요? 너무 아쉬워요!" (ต้องไปแล้วเหรอ? เสียดายจังเลย!)', vi: '"벌써 가야 해요? 너무 아쉬워요!" (Phải đi rồi sao? Buồn quá!)', es: '"벌써 가야 해요? 너무 아쉬워요!" (¿Ya te vas? ¡Qué triste!)' }, choices: [
      { id: 's1e8-c1a', korean: '다음에 또 올게요! 잊지 마세요!', romanization: 'Daeume tto olgeyo! Itji maseyo!', translation: { en: "I'll come again next time! Don't forget me!", ja: '次また来るよ！忘れないでね！', zh: '下次还会再来的！别忘了我！', th: 'คราวหน้าจะมาอีกนะ! อย่าลืมกันนะ!', vi: 'Lần sau tôi sẽ quay lại! Đừng quên tôi nhé!', es: '¡Vendré de nuevo! ¡No me olvides!' }, correctness: 'perfect', feedback: { en: "Beautiful! 🌟 '다음에' means next time!", ja: '素敵！🌟「다음에」は「次に」の意味！', zh: '太美了！🌟"다음에"是下次的意思！', th: 'สวยงาม! 🌟 "다음에" แปลว่าคราวหน้า!', vi: 'Tuyệt! 🌟 "다음에" nghĩa là lần sau!', es: '¡Hermoso! 🌟 "다음에" significa la próxima vez!' }, nextSceneId: 's1e8-scene3' },
    ], teaching: { vocabulary: [{ korean: '다음에', romanization: 'daeume', meaning: { en: 'Next time', ja: '次に', zh: '下次', th: 'คราวหน้า', vi: 'Lần sau', es: 'La próxima vez' } }, { korean: '또', romanization: 'tto', meaning: { en: 'Again', ja: 'また', zh: '又/再', th: 'อีก', vi: 'Lại', es: 'Otra vez' } }] } },
    { id: 's1e8-scene3', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '민지', avatar: '👧', emotion: 'happy' }, dialogue: { en: '"꼭 다시 와요! 카카오톡 해요!" (Definitely come back! Let\'s KakaoTalk!)', ja: '「꼭 다시 와요! 카카오톡 해요!」（絶対また来てね！カカオトークしよう！）', zh: '"꼭 다시 와요! 카카오톡 해요!"（一定要再来！用KakaoTalk联系！）', th: '"꼭 다시 와요! 카카오톡 해요!" (มาอีกแน่นอนนะ! ส่งคาคาโอท็อกกัน!)', vi: '"꼭 다시 와요! 카카오톡 해요!" (Nhất định quay lại nhé! KakaoTalk nhé!)', es: '"꼭 다시 와요! 카카오톡 해요!" (¡Definitivamente vuelve! ¡Hablemos por KakaoTalk!)' }, choices: [
      { id: 's1e8-c2a', korean: '네! 연락할게요! 안녕히 계세요!', romanization: 'Ne! Yeollakhalgeyo! Annyeonghi gyeseyo!', translation: { en: "Yes! I'll contact you! Goodbye! (to someone staying)", ja: 'うん！連絡するね！さようなら！', zh: '好！我会联系你的！再见！', th: 'ค่ะ/ครับ! จะติดต่อนะ! ลาก่อนนะคะ/ครับ!', vi: 'Vâng! Tôi sẽ liên lạc! Tạm biệt!', es: '¡Sí! ¡Te contactaré! ¡Adiós!' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '안녕히 계세요' is for when YOU are leaving!", ja: '完璧！🌟「안녕히 계세요」は自分が去る時の挨拶！', zh: '完美！🌟"안녕히 계세요"是你离开时说的！', th: 'สมบูรณ์แบบ! 🌟 "안녕히 계세요" ใช้เมื่อคุณจากไป!', vi: 'Hoàn hảo! 🌟 "안녕히 계세요" dùng khi BẠN đi!', es: '¡Perfecto! 🌟 "안녕히 계세요" es cuando TÚ te vas!' }, nextSceneId: 's1e8-scene4' },
    ], teaching: { vocabulary: [{ korean: '연락', romanization: 'yeollak', meaning: { en: 'Contact', ja: '連絡', zh: '联系', th: 'ติดต่อ', vi: 'Liên lạc', es: 'Contacto' } }, { korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', meaning: { en: 'Goodbye (to someone staying)', ja: 'さようなら（残る人へ）', zh: '再见(对留下的人)', th: 'ลาก่อน(คนที่อยู่)', vi: 'Tạm biệt (người ở lại)', es: 'Adiós (a quien se queda)' } }], culturalNote: { en: '💡 Korean has two goodbyes: 안녕히 계세요 (you leave) vs 안녕히 가세요 (they leave)!', ja: '💡 韓国語には2つのさよならがある：自分が去る時と相手が去る時！', zh: '💡 韩语有两种再见：你走时说的和他们走时说的！', th: '💡 เกาหลีมีลาก่อน 2 แบบ: 안녕히 계세요 (คุณไป) vs 안녕히 가세요 (เขาไป)!', vi: '💡 Tiếng Hàn có 2 cách tạm biệt: 안녕히 계세요 (bạn đi) vs 안녕히 가세요 (họ đi)!', es: '💡 ¡El coreano tiene dos despedidas: cuando tú te vas vs cuando ellos se van!' } } },
    { id: 's1e8-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'celebrating' }, dialogue: { en: "🎊 SEASON 1 COMPLETE! 🎊\n\nYou finished Seoul First Steps! You learned:\n✅ Taxis & Subways\n✅ Hotels & Cafes\n✅ Shopping & Street Food\n✅ Asking Directions\n✅ Making Friends & Goodbyes\n\nYou earned the '🌟 Seoul Explorer' badge!\n\nReady for Season 2: Busan Beach Trip? 🏖️", ja: '🎊 シーズン1完了！🎊\n\nソウル最初の一歩を終了！学んだこと：\n✅ タクシー＆地下鉄\n✅ ホテル＆カフェ\n✅ ショッピング＆屋台\n✅ 道案内\n✅ 友達作り＆お別れ\n\n「🌟 ソウル探検家」バッジ獲得！\n\nシーズン2：釜山ビーチ旅行へ？🏖️', zh: '🎊 第一季完成！🎊\n\n完成首尔初体验！你学到了：\n✅ 出租车和地铁\n✅ 酒店和咖啡店\n✅ 购物和街头美食\n✅ 问路\n✅ 交朋友和告别\n\n获得"🌟 首尔探险家"徽章！\n\n准备好第二季：釜山海滩之旅了吗？🏖️', th: '🎊 ซีซั่น 1 จบแล้ว! 🎊\n\nจบก้าวแรกในโซล! คุณเรียนรู้:\n✅ แท็กซี่ & รถไฟใต้ดิน\n✅ โรงแรม & คาเฟ่\n✅ ช้อปปิ้ง & อาหารริมทาง\n✅ ถามทาง\n✅ ผูกมิตร & บอกลา\n\nได้รับเหรียญ "🌟 นักสำรวจโซล"!\n\nพร้อมสำหรับซีซั่น 2: ทริปหาดปูซาน? 🏖️', vi: '🎊 MÙA 1 HOÀN THÀNH! 🎊\n\nHoàn thành Bước đầu Seoul! Bạn đã học:\n✅ Taxi & Tàu điện\n✅ Khách sạn & Cafe\n✅ Mua sắm & Đồ ăn đường phố\n✅ Hỏi đường\n✅ Kết bạn & Tạm biệt\n\nNhận huy hiệu "🌟 Nhà thám hiểm Seoul"!\n\nSẵn sàng cho Mùa 2: Chuyến đi biển Busan? 🏖️', es: '🎊 ¡TEMPORADA 1 COMPLETA! 🎊\n\nTerminaste Primeros Pasos en Seúl! Aprendiste:\n✅ Taxis y metro\n✅ Hoteles y cafés\n✅ Compras y comida callejera\n✅ Pedir direcciones\n✅ Hacer amigos y despedidas\n\n¡Obtuviste "🌟 Explorador de Seúl"!\n\n¿Listo para Temporada 2: Viaje a la playa de Busan? 🏖️' } },
  ],
};

// Export all episodes
season1.episodes = [s1e1, s1e2, s1e3, s1e4, s1e5, s1e6, s1e7, s1e8];

export const season1Episodes = season1.episodes;
export default season1Episodes;
