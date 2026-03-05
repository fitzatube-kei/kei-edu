import { StoryEpisode, StorySeason } from '@/types/story';

// Season 3: Daily Life Basics (일상생활 기초) - FREE, Beginner
export const season3: StorySeason = {
  id: 3,
  name: {
    en: 'Daily Life Basics',
    ja: '日常生活の基礎',
    zh: '日常生活基础',
    th: 'พื้นฐานชีวิตประจำวัน',
    vi: 'Cơ bản cuộc sống hàng ngày',
    es: 'Conceptos básicos de la vida diaria',
  },
  description: {
    en: 'Master everyday errands and tasks in Korea!',
    ja: '韓国での日常の用事やタスクをマスター！',
    zh: '掌握在韩国的日常事务和任务！',
    th: 'เชี่ยวชาญธุระประจำวันในเกาหลี!',
    vi: 'Thành thạo các công việc hàng ngày ở Hàn Quốc!',
    es: '¡Domina los recados y tareas cotidianas en Corea!',
  },
  theme: 'Daily Life Korean',
  location: 'Seoul Neighborhoods',
  color: '#43e97b',
  icon: 'daily',
  difficulty: 'beginner',
  isPremium: false,
  totalEpisodes: 8,
  episodes: [],
};

// Episode 1: Convenience Store Run
export const s3e1: StoryEpisode = {
  id: 's3e1',
  season: 3,
  episode: 1,
  title: {
    en: 'Convenience Store Run',
    ja: 'コンビニへ行こう',
    zh: '便利店购物',
    th: 'ไปร้านสะดวกซื้อ',
    vi: 'Đi cửa hàng tiện lợi',
    es: 'Visita a la tienda de conveniencia',
  },
  description: {
    en: 'Buy snacks and learn convenience store vocabulary!',
    ja: 'お菓子を買ってコンビニの語彙を学ぼう！',
    zh: '买零食，学习便利店词汇！',
    th: 'ซื้อขนมและเรียนคำศัพท์ร้านสะดวกซื้อ!',
    vi: 'Mua đồ ăn vặt và học từ vựng cửa hàng tiện lợi!',
    es: '¡Compra bocadillos y aprende vocabulario de tiendas!',
  },
  icon: '🏪',
  location: 'CU Convenience Store',
  requiredLevel: 1,
  rewards: { xp: 200, badge: 'convenience_pro', badgeName: { en: 'Convenience Pro', ja: 'コンビニ達人', zh: '便利店达人', th: 'เซียนร้านสะดวกซื้อ', vi: 'Chuyên gia tiện lợi', es: 'Experto en tiendas' } },
  isPremium: false,
  scenes: [
    { id: 's3e1-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Time for a convenience store run! 🏪 Korean convenience stores (편의점) are amazing - they have everything from snacks to hot meals!", ja: 'コンビニへ行こう！🏪 韓国のコンビニ（편의점）は最高！お菓子から温かい食事まで何でもある！', zh: '去便利店吧！🏪 韩国便利店（편의점）超棒，从零食到热饭应有尽有！', th: 'ไปร้านสะดวกซื้อกัน! 🏪 ร้านสะดวกซื้อเกาหลี (편의점) ยอดเยี่ยม มีทุกอย่างตั้งแต่ขนมถึงอาหารร้อน!', vi: 'Đến cửa hàng tiện lợi thôi! 🏪 Cửa hàng tiện lợi Hàn Quốc (편의점) tuyệt vời - có mọi thứ từ đồ ăn vặt đến bữa ăn nóng!', es: '¡Vamos a la tienda! 🏪 Las tiendas coreanas (편의점) son increíbles - ¡tienen de todo!' }, nextSceneId: 's3e1-scene2' },
    { id: 's3e1-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '점원', avatar: '👨‍💼', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 봉투 필요하세요?" (Hello! Do you need a bag?)', ja: '「안녕하세요! 봉투 필요하세요?」（いらっしゃいませ！袋は必要ですか？）', zh: '"안녕하세요! 봉투 필요하세요?"（您好！需要袋子吗？）', th: '"안녕하세요! 봉투 필요하세요?" (สวัสดีค่ะ/ครับ! ต้องการถุงไหมคะ/ครับ?)', vi: '"안녕하세요! 봉투 필요하세요?" (Xin chào! Bạn cần túi không?)', es: '"안녕하세요! 봉투 필요하세요?" (¡Hola! ¿Necesita una bolsa?)' }, choices: [
      { id: 's3e1-c1a', korean: '네, 봉투 주세요', romanization: 'Ne, bongtu juseyo', translation: { en: 'Yes, please give me a bag', ja: 'はい、袋をください', zh: '是的，请给我袋子', th: 'ค่ะ/ครับ ขอถุงด้วยค่ะ/ครับ', vi: 'Vâng, cho tôi túi', es: 'Sí, deme una bolsa por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '봉투' means plastic bag. Bags cost extra in Korea!", ja: '完璧！🌟「봉투」はビニール袋の意味。韓国では袋は有料！', zh: '完美！🌟"봉투"是塑料袋的意思。韩国袋子要付费！', th: 'สมบูรณ์แบบ! 🌟 "봉투" แปลว่าถุงพลาสติก ถุงในเกาหลีต้องจ่ายเพิ่ม!', vi: 'Hoàn hảo! 🌟 "봉투" nghĩa là túi nhựa. Túi ở Hàn tính phí thêm!', es: '¡Perfecto! 🌟 "봉투" significa bolsa. ¡Las bolsas cuestan extra!' }, nextSceneId: 's3e1-scene3' },
      { id: 's3e1-c1b', korean: '아니요, 괜찮아요', romanization: 'Aniyo, gwaenchanayo', translation: { en: "No, I'm okay", ja: 'いいえ、大丈夫です', zh: '不用，没关系', th: 'ไม่ค่ะ/ครับ ไม่เป็นไร', vi: 'Không, không sao', es: 'No, está bien' }, correctness: 'good', feedback: { en: "Good choice! 👍 Being eco-friendly! '괜찮아요' means 'it's okay'.", ja: 'いい選択！👍 エコだね！「괜찮아요」は「大丈夫」の意味。', zh: '好选择！👍 环保！"괜찮아요"是"没关系"的意思。', th: 'เลือกดี! 👍 รักษ์โลก! "괜찮아요" แปลว่า "ไม่เป็นไร"', vi: 'Lựa chọn tốt! 👍 Bảo vệ môi trường! "괜찮아요" nghĩa là "không sao".', es: '¡Buena elección! 👍 ¡Ecológico! "괜찮아요" significa "está bien".' }, nextSceneId: 's3e1-scene3' },
    ], teaching: { vocabulary: [{ korean: '봉투', romanization: 'bongtu', meaning: { en: 'Plastic bag', ja: 'ビニール袋', zh: '塑料袋', th: 'ถุงพลาสติก', vi: 'Túi nhựa', es: 'Bolsa de plástico' } }, { korean: '필요하다', romanization: 'piryohada', meaning: { en: 'To need', ja: '必要とする', zh: '需要', th: 'ต้องการ', vi: 'Cần', es: 'Necesitar' } }], culturalNote: { en: '💡 Plastic bags cost around 100-500 won in Korea. Many people bring their own bags!', ja: '💡 韓国ではビニール袋は100～500ウォン。マイバッグを持参する人が多い！', zh: '💡 韩国塑料袋约100-500韩元。很多人自带袋子！', th: '💡 ถุงพลาสติกราคาประมาณ 100-500 วอน คนเกาหลีส่วนใหญ่พกถุงเอง!', vi: '💡 Túi nhựa khoảng 100-500 won. Nhiều người tự mang túi!', es: '💡 Las bolsas cuestan 100-500 won. ¡Muchos traen sus propias bolsas!' } } },
    { id: 's3e1-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '점원', avatar: '👨‍💼', emotion: 'happy' }, dialogue: { en: '"계산 도와드릴게요. 포인트 카드 있으세요?" (I\'ll help you check out. Do you have a point card?)', ja: '「계산 도와드릴게요. 포인트 카드 있으세요?」（お会計しますね。ポイントカードはありますか？）', zh: '"계산 도와드릴게요. 포인트 카드 있으세요?"（我帮您结账。有积分卡吗？）', th: '"계산 도와드릴게요. 포인트 카드 있으세요?" (คิดเงินให้นะคะ/ครับ มีบัตรสะสมแต้มไหมคะ/ครับ?)', vi: '"계산 도와드릴게요. 포인트 카드 있으세요?" (Để tôi tính tiền. Bạn có thẻ tích điểm không?)', es: '"계산 도와드릴게요. 포인트 카드 있으세요?" (Le ayudo a pagar. ¿Tiene tarjeta de puntos?)' }, choices: [
      { id: 's3e1-c2a', korean: '네, 여기 있어요', romanization: 'Ne, yeogi isseoyo', translation: { en: 'Yes, here it is', ja: 'はい、ここにあります', zh: '有，在这里', th: 'ค่ะ/ครับ อยู่นี่ค่ะ/ครับ', vi: 'Vâng, đây ạ', es: 'Sí, aquí está' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '계산' means calculation/checkout!", ja: '素晴らしい！🌟「계산」はお会計の意味！', zh: '太棒了！🌟"계산"是结账的意思！', th: 'เยี่ยม! 🌟 "계산" แปลว่าคิดเงิน!', vi: 'Tuyệt! 🌟 "계산" nghĩa là tính tiền!', es: '¡Genial! 🌟 "계산" significa pagar!' }, nextSceneId: 's3e1-scene4' },
      { id: 's3e1-c2b', korean: '아니요, 없어요', romanization: 'Aniyo, eopseoyo', translation: { en: "No, I don't have one", ja: 'いいえ、ありません', zh: '没有', th: 'ไม่มีค่ะ/ครับ', vi: 'Không, tôi không có', es: 'No, no tengo' }, correctness: 'good', feedback: { en: "No problem! 👍 '포인트' is a common Konglish word!", ja: '問題なし！👍「포인트」はよく使うコングリッシュ！', zh: '没问题！👍"포인트"是常见的韩式英语！', th: 'ไม่เป็นไร! 👍 "포인트" เป็นคำคองลิชที่ใช้บ่อย!', vi: 'Không sao! 👍 "포인트" là từ Konglish phổ biến!', es: '¡No hay problema! 👍 "포인트" es Konglish común!' }, nextSceneId: 's3e1-scene4' },
    ], teaching: { vocabulary: [{ korean: '계산', romanization: 'gyesan', meaning: { en: 'Checkout/Payment', ja: 'お会計', zh: '结账', th: 'คิดเงิน', vi: 'Thanh toán', es: 'Pago' } }, { korean: '포인트', romanization: 'pointeu', meaning: { en: 'Points', ja: 'ポイント', zh: '积分', th: 'แต้ม', vi: 'Điểm', es: 'Puntos' } }] } },
    { id: 's3e1-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Great job! 🎉 You learned:\n✅ '봉투' - Plastic bag\n✅ '계산' - Checkout\n✅ '포인트' - Points\n\nYou earned the '🏪 Convenience Pro' badge!", ja: 'よくできた！🎉 学んだこと：\n✅「봉투」- ビニール袋\n✅「계산」- お会計\n✅「포인트」- ポイント\n\n「🏪 コンビニ達人」バッジ獲得！', zh: '做得好！🎉 你学到了：\n✅ "봉투" - 塑料袋\n✅ "계산" - 结账\n✅ "포인트" - 积分\n\n获得"🏪 便利店达人"徽章！', th: 'เก่งมาก! 🎉 คุณเรียนรู้:\n✅ "봉투" - ถุงพลาสติก\n✅ "계산" - คิดเงิน\n✅ "포인트" - แต้ม\n\nได้รับเหรียญ "🏪 เซียนร้านสะดวกซื้อ"!', vi: 'Giỏi lắm! 🎉 Bạn đã học:\n✅ "봉투" - Túi nhựa\n✅ "계산" - Thanh toán\n✅ "포인트" - Điểm\n\nNhận huy hiệu "🏪 Chuyên gia tiện lợi"!', es: '¡Bien hecho! 🎉 Aprendiste:\n✅ "봉투" - Bolsa\n✅ "계산" - Pago\n✅ "포인트" - Puntos\n\n¡Obtuviste "🏪 Experto en tiendas"!' } },
  ],
};

// Episode 2: At the Pharmacy
export const s3e2: StoryEpisode = {
  id: 's3e2',
  season: 3,
  episode: 2,
  title: {
    en: 'At the Pharmacy',
    ja: '薬局で',
    zh: '在药店',
    th: 'ที่ร้านขายยา',
    vi: 'Tại nhà thuốc',
    es: 'En la farmacia',
  },
  description: {
    en: 'Learn to describe symptoms and buy medicine!',
    ja: '症状を説明して薬を買おう！',
    zh: '学会描述症状和买药！',
    th: 'เรียนอธิบายอาการและซื้อยา!',
    vi: 'Học cách mô tả triệu chứng và mua thuốc!',
    es: '¡Aprende a describir síntomas y comprar medicina!',
  },
  icon: '💊',
  location: 'Local Pharmacy',
  requiredLevel: 1,
  rewards: { xp: 220, badge: 'health_helper', badgeName: { en: 'Health Helper', ja: '健康ヘルパー', zh: '健康助手', th: 'ผู้ช่วยสุขภาพ', vi: 'Trợ thủ sức khỏe', es: 'Ayudante de salud' } },
  isPremium: false,
  scenes: [
    { id: 's3e2-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'sad' }, dialogue: { en: "Oh no, you're not feeling well! 😷 Let's go to the pharmacy (약국) to get some medicine. Korean pharmacists are very helpful!", ja: '大変、体調が悪いの！😷 薬局（약국）に行って薬をもらおう。韓国の薬剤師さんはとても親切！', zh: '糟糕，你不舒服！😷 去药店（약국）买药吧。韩国药剂师很热心！', th: 'ไม่ดีเลย คุณไม่สบาย! 😷 ไปร้านขายยา (약국) ซื้อยากัน เภสัชกรเกาหลีช่วยเหลือดีมาก!', vi: 'Ôi không, bạn không khỏe! 😷 Đến nhà thuốc (약국) mua thuốc thôi. Dược sĩ Hàn Quốc rất nhiệt tình!', es: '¡Oh no, no te sientes bien! 😷 Vamos a la farmacia (약국). ¡Los farmacéuticos coreanos son muy serviciales!' }, nextSceneId: 's3e2-scene2' },
    { id: 's3e2-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '약사', avatar: '👩‍⚕️', emotion: 'thinking' }, dialogue: { en: '"어디가 아프세요?" (Where does it hurt?)', ja: '「어디가 아프세요?」（どこが痛いですか？）', zh: '"어디가 아프세요?"（哪里不舒服？）', th: '"어디가 아프세요?" (ปวดตรงไหนคะ/ครับ?)', vi: '"어디가 아프세요?" (Đau ở đâu?)', es: '"어디가 아프세요?" (¿Dónde le duele?)' }, choices: [
      { id: 's3e2-c1a', korean: '머리가 아파요', romanization: 'Meoriga apayo', translation: { en: 'My head hurts', ja: '頭が痛いです', zh: '我头疼', th: 'ปวดหัวค่ะ/ครับ', vi: 'Tôi đau đầu', es: 'Me duele la cabeza' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '아프다' is the verb 'to hurt/to be sick'!", ja: '完璧！🌟「아프다」は「痛い」という動詞！', zh: '完美！🌟"아프다"是"疼/不舒服"的动词！', th: 'สมบูรณ์แบบ! 🌟 "아프다" คือคำกริยา "เจ็บ/ป่วย"!', vi: 'Hoàn hảo! 🌟 "아프다" là động từ "đau/ốm"!', es: '¡Perfecto! 🌟 "아프다" es el verbo "doler"!' }, nextSceneId: 's3e2-scene3' },
      { id: 's3e2-c1b', korean: '배가 아파요', romanization: 'Baega apayo', translation: { en: 'My stomach hurts', ja: 'お腹が痛いです', zh: '我肚子疼', th: 'ปวดท้องค่ะ/ครับ', vi: 'Tôi đau bụng', es: 'Me duele el estómago' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '배' means stomach!", ja: '完璧！🌟「배」はお腹の意味！', zh: '完美！🌟"배"是肚子的意思！', th: 'สมบูรณ์แบบ! 🌟 "배" แปลว่าท้อง!', vi: 'Hoàn hảo! 🌟 "배" nghĩa là bụng!', es: '¡Perfecto! 🌟 "배" significa estómago!' }, nextSceneId: 's3e2-scene3' },
    ], teaching: { vocabulary: [{ korean: '아프다', romanization: 'apeuda', meaning: { en: 'To hurt/be sick', ja: '痛い', zh: '疼/不舒服', th: 'เจ็บ/ป่วย', vi: 'Đau/ốm', es: 'Doler' } }, { korean: '머리', romanization: 'meori', meaning: { en: 'Head', ja: '頭', zh: '头', th: 'หัว', vi: 'Đầu', es: 'Cabeza' } }] } },
    { id: 's3e2-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '약사', avatar: '👩‍⚕️', emotion: 'happy' }, dialogue: { en: '"증상이 언제부터예요? 다른 증상도 있어요?" (Since when? Any other symptoms?)', ja: '「증상이 언제부터예요? 다른 증상도 있어요?」（いつからですか？他の症状は？）', zh: '"증상이 언제부터예요? 다른 증상도 있어요?"（什么时候开始的？有其他症状吗？）', th: '"증상이 언제부터예요? 다른 증상도 있어요?" (อาการเริ่มตั้งแต่เมื่อไหร่คะ/ครับ? มีอาการอื่นไหม?)', vi: '"증상이 언제부터예요? 다른 증상도 있어요?" (Từ khi nào? Có triệu chứng khác không?)', es: '"증상이 언제부터예요? 다른 증상도 있어요?" (¿Desde cuándo? ¿Otros síntomas?)' }, choices: [
      { id: 's3e2-c2a', korean: '어제부터요. 열도 있어요', romanization: 'Eojebuteoyo. Yeoldo isseoyo', translation: { en: 'Since yesterday. I also have a fever', ja: '昨日からです。熱もあります', zh: '从昨天开始。还发烧', th: 'ตั้งแต่เมื่อวานค่ะ/ครับ มีไข้ด้วย', vi: 'Từ hôm qua. Tôi cũng sốt', es: 'Desde ayer. También tengo fiebre' }, correctness: 'perfect', feedback: { en: "Well explained! 🌟 '증상' means symptoms!", ja: '上手に説明できた！🌟「증상」は症状の意味！', zh: '解释得好！🌟"증상"是症状的意思！', th: 'อธิบายดี! 🌟 "증상" แปลว่าอาการ!', vi: 'Giải thích tốt! 🌟 "증상" nghĩa là triệu chứng!', es: '¡Bien explicado! 🌟 "증상" significa síntomas!' }, nextSceneId: 's3e2-scene4' },
    ], teaching: { vocabulary: [{ korean: '증상', romanization: 'jeungsang', meaning: { en: 'Symptoms', ja: '症状', zh: '症状', th: 'อาการ', vi: 'Triệu chứng', es: 'Síntomas' } }, { korean: '약', romanization: 'yak', meaning: { en: 'Medicine', ja: '薬', zh: '药', th: 'ยา', vi: 'Thuốc', es: 'Medicina' } }], culturalNote: { en: '💡 Korean pharmacies can prescribe some medicines directly without a doctor!', ja: '💡 韓国の薬局では医者なしで処方できる薬もある！', zh: '💡 韩国药店可以直接配一些药，不需要医生处方！', th: '💡 ร้านขายยาเกาหลีจ่ายยาบางชนิดได้โดยไม่ต้องมีใบสั่งแพทย์!', vi: '💡 Nhà thuốc Hàn Quốc có thể kê một số thuốc mà không cần bác sĩ!', es: '💡 ¡Las farmacias coreanas pueden recetar algunas medicinas sin médico!' } } },
    { id: 's3e2-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You got your medicine! 🎉 You learned:\n✅ '아프다' - To hurt\n✅ '증상' - Symptoms\n✅ '약' - Medicine\n\nYou earned the '💊 Health Helper' badge!", ja: '薬をゲット！🎉 学んだこと：\n✅「아프다」- 痛い\n✅「증상」- 症状\n✅「약」- 薬\n\n「💊 健康ヘルパー」バッジ獲得！', zh: '买到药了！🎉 你学到了：\n✅ "아프다" - 疼\n✅ "증상" - 症状\n✅ "약" - 药\n\n获得"💊 健康助手"徽章！', th: 'ได้ยาแล้ว! 🎉 คุณเรียนรู้:\n✅ "아프다" - เจ็บ\n✅ "증상" - อาการ\n✅ "약" - ยา\n\nได้รับเหรียญ "💊 ผู้ช่วยสุขภาพ"!', vi: 'Đã có thuốc! 🎉 Bạn đã học:\n✅ "아프다" - Đau\n✅ "증상" - Triệu chứng\n✅ "약" - Thuốc\n\nNhận huy hiệu "💊 Trợ thủ sức khỏe"!', es: '¡Tienes tu medicina! 🎉 Aprendiste:\n✅ "아프다" - Doler\n✅ "증상" - Síntomas\n✅ "약" - Medicina\n\n¡Obtuviste "💊 Ayudante de salud"!' } },
  ],
};

// Episode 3: Getting a Haircut
export const s3e3: StoryEpisode = {
  id: 's3e3',
  season: 3,
  episode: 3,
  title: {
    en: 'Getting a Haircut',
    ja: '美容室へ',
    zh: '理发',
    th: 'ไปตัดผม',
    vi: 'Cắt tóc',
    es: 'Cortarse el pelo',
  },
  description: {
    en: 'Visit a Korean hair salon and get a new style!',
    ja: '韓国の美容室で新しいヘアスタイルに！',
    zh: '去韩国美发店换个新发型！',
    th: 'ไปร้านทำผมเกาหลีทำทรงใหม่!',
    vi: 'Đến tiệm tóc Hàn Quốc và có kiểu tóc mới!',
    es: '¡Visita un salón coreano y consigue un nuevo estilo!',
  },
  icon: '💇',
  location: 'Hair Salon',
  requiredLevel: 1,
  rewards: { xp: 220, badge: 'style_star', badgeName: { en: 'Style Star', ja: 'スタイルスター', zh: '造型之星', th: 'ดาวสไตล์', vi: 'Ngôi sao phong cách', es: 'Estrella del estilo' } },
  isPremium: false,
  scenes: [
    { id: 's3e3-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Time for a new look! 💇 Korean hair salons (미용실) are famous for their skills. Let's get a haircut!", ja: '新しい髪型にしよう！💇 韓国の美容室（미용실）は技術で有名！カットしよう！', zh: '换个新形象！💇 韩国美发店（미용실）以技术闻名。去剪头发吧！', th: 'เปลี่ยนลุคใหม่! 💇 ร้านทำผมเกาหลี (미용실) มีชื่อเรื่องฝีมือ ไปตัดผมกัน!', vi: 'Thay đổi diện mạo! 💇 Tiệm tóc Hàn Quốc (미용실) nổi tiếng về tay nghề. Đi cắt tóc thôi!', es: '¡Hora de un nuevo look! 💇 Los salones coreanos (미용실) son famosos. ¡Vamos a cortarnos el pelo!' }, nextSceneId: 's3e3-scene2' },
    { id: 's3e3-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '미용사', avatar: '💇‍♀️', emotion: 'happy' }, dialogue: { en: '"어떤 스타일 원하세요?" (What style would you like?)', ja: '「어떤 스타일 원하세요?」（どんなスタイルがいいですか？）', zh: '"어떤 스타일 원하세요?"（想要什么发型？）', th: '"어떤 스타일 원하세요?" (ต้องการทรงแบบไหนคะ/ครับ?)', vi: '"어떤 스타일 원하세요?" (Bạn muốn kiểu gì?)', es: '"어떤 스타일 원하세요?" (¿Qué estilo desea?)' }, choices: [
      { id: 's3e3-c1a', korean: '짧게 잘라주세요', romanization: 'Jjalpge jallajuseyo', translation: { en: 'Please cut it short', ja: '短く切ってください', zh: '请剪短', th: 'ตัดสั้นค่ะ/ครับ', vi: 'Cắt ngắn giùm', es: 'Córtelo corto por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '짧게' means short, '머리' means hair!", ja: '完璧！🌟「짧게」は短く、「머리」は髪の意味！', zh: '完美！🌟"짧게"是短，"머리"是头发！', th: 'สมบูรณ์แบบ! 🌟 "짧게" แปลว่าสั้น, "머리" แปลว่าผม!', vi: 'Hoàn hảo! 🌟 "짧게" nghĩa là ngắn, "머리" nghĩa là tóc!', es: '¡Perfecto! 🌟 "짧게" significa corto, "머리" significa cabello!' }, nextSceneId: 's3e3-scene3' },
      { id: 's3e3-c1b', korean: '조금만 다듬어주세요', romanization: 'Jogeumman dadeumeo juseyo', translation: { en: 'Just a little trim please', ja: '少しだけ整えてください', zh: '请稍微修剪一下', th: 'เล็มนิดหน่อยค่ะ/ครับ', vi: 'Tỉa một chút thôi', es: 'Solo un pequeño recorte' }, correctness: 'good', feedback: { en: "Good choice! 👍 '다듬다' means to trim!", ja: 'いい選択！👍「다듬다」は整えるの意味！', zh: '好选择！👍"다듬다"是修剪的意思！', th: 'เลือกดี! 👍 "다듬다" แปลว่าเล็ม!', vi: 'Lựa chọn tốt! 👍 "다듬다" nghĩa là tỉa!', es: '¡Buena elección! 👍 "다듬다" significa recortar!' }, nextSceneId: 's3e3-scene3' },
    ], teaching: { vocabulary: [{ korean: '머리', romanization: 'meori', meaning: { en: 'Hair/Head', ja: '髪/頭', zh: '头发/头', th: 'ผม/หัว', vi: 'Tóc/Đầu', es: 'Cabello/Cabeza' } }, { korean: '스타일', romanization: 'seutail', meaning: { en: 'Style', ja: 'スタイル', zh: '风格', th: 'สไตล์', vi: 'Kiểu', es: 'Estilo' } }] } },
    { id: 's3e3-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '미용사', avatar: '💇‍♀️', emotion: 'thinking' }, dialogue: { en: '"얼마나 자를까요? 2센티? 3센티?" (How much should I cut? 2cm? 3cm?)', ja: '「얼마나 자를까요? 2센티? 3센티?」（どれくらい切りますか？2センチ？3センチ？）', zh: '"얼마나 자를까요? 2센티? 3센티?"（剪多少？2厘米？3厘米？）', th: '"얼마나 자를까요? 2센티? 3센티?" (ตัดเท่าไหร่ดีคะ/ครับ? 2 ซม.? 3 ซม.?)', vi: '"얼마나 자를까요? 2센티? 3센티?" (Cắt bao nhiêu? 2cm? 3cm?)', es: '"얼마나 자를까요? 2센티? 3센티?" (¿Cuánto corto? ¿2cm? ¿3cm?)' }, choices: [
      { id: 's3e3-c2a', korean: '3센티 정도요', romanization: 'Sam senti jeongdoyo', translation: { en: 'About 3 centimeters', ja: '3センチくらい', zh: '大约3厘米', th: 'ประมาณ 3 ซม.ค่ะ/ครับ', vi: 'Khoảng 3cm', es: 'Unos 3 centímetros' }, correctness: 'perfect', feedback: { en: "Clear! 🌟 '얼마나' means 'how much'!", ja: '明確！🌟「얼마나」は「どれくらい」の意味！', zh: '清楚！🌟"얼마나"是"多少"的意思！', th: 'ชัดเจน! 🌟 "얼마나" แปลว่า "เท่าไหร่"!', vi: 'Rõ ràng! 🌟 "얼마나" nghĩa là "bao nhiêu"!', es: '¡Claro! 🌟 "얼마나" significa "cuánto"!' }, nextSceneId: 's3e3-scene4' },
    ], teaching: { vocabulary: [{ korean: '얼마나', romanization: 'eolmana', meaning: { en: 'How much/many', ja: 'どれくらい', zh: '多少', th: 'เท่าไหร่', vi: 'Bao nhiêu', es: 'Cuánto' } }, { korean: '자르다', romanization: 'jareuda', meaning: { en: 'To cut', ja: '切る', zh: '剪', th: 'ตัด', vi: 'Cắt', es: 'Cortar' } }], culturalNote: { en: '💡 Korean salons often include free head massages and drinks!', ja: '💡 韓国の美容室では無料のヘッドマッサージやドリンクが付くことも！', zh: '💡 韩国美发店经常提供免费头部按摩和饮料！', th: '💡 ร้านทำผมเกาหลีมักมีนวดศีรษะและเครื่องดื่มฟรี!', vi: '💡 Tiệm tóc Hàn Quốc thường có massage đầu và đồ uống miễn phí!', es: '💡 ¡Los salones coreanos suelen incluir masajes y bebidas gratis!' } } },
    { id: 's3e3-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Looking great! 🎉 You learned:\n✅ '머리' - Hair\n✅ '스타일' - Style\n✅ '얼마나' - How much\n\nYou earned the '💇 Style Star' badge!", ja: 'かっこいい！🎉 学んだこと：\n✅「머리」- 髪\n✅「스타일」- スタイル\n✅「얼마나」- どれくらい\n\n「💇 スタイルスター」バッジ獲得！', zh: '真好看！🎉 你学到了：\n✅ "머리" - 头发\n✅ "스타일" - 风格\n✅ "얼마나" - 多少\n\n获得"💇 造型之星"徽章！', th: 'ดูดีมาก! 🎉 คุณเรียนรู้:\n✅ "머리" - ผม\n✅ "스타일" - สไตล์\n✅ "얼마나" - เท่าไหร่\n\nได้รับเหรียญ "💇 ดาวสไตล์"!', vi: 'Trông tuyệt! 🎉 Bạn đã học:\n✅ "머리" - Tóc\n✅ "스타일" - Kiểu\n✅ "얼마나" - Bao nhiêu\n\nNhận huy hiệu "💇 Ngôi sao phong cách"!', es: '¡Te ves genial! 🎉 Aprendiste:\n✅ "머리" - Cabello\n✅ "스타일" - Estilo\n✅ "얼마나" - Cuánto\n\n¡Obtuviste "💇 Estrella del estilo"!' } },
  ],
};

// Episode 4: Using a Korean Phone
export const s3e4: StoryEpisode = {
  id: 's3e4',
  season: 3,
  episode: 4,
  title: {
    en: 'Using a Korean Phone',
    ja: '韓国の携帯電話',
    zh: '使用韩国手机',
    th: 'ใช้โทรศัพท์เกาหลี',
    vi: 'Sử dụng điện thoại Hàn Quốc',
    es: 'Usando un teléfono coreano',
  },
  description: {
    en: 'Get a Korean phone plan and SIM card!',
    ja: '韓国の携帯プランとSIMカードを手に入れよう！',
    zh: '办理韩国手机套餐和SIM卡！',
    th: 'สมัครแพ็คเกจโทรศัพท์และซิมการ์ดเกาหลี!',
    vi: 'Đăng ký gói cước và SIM Hàn Quốc!',
    es: '¡Consigue un plan de teléfono y SIM coreano!',
  },
  icon: '📱',
  location: 'Phone Store',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'tech_savvy', badgeName: { en: 'Tech Savvy', ja: 'テック達人', zh: '科技达人', th: 'เซียนเทคโนโลยี', vi: 'Am hiểu công nghệ', es: 'Experto en tecnología' } },
  isPremium: false,
  scenes: [
    { id: 's3e4-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's get you connected! 📱 You need a Korean phone number to use many apps. Let's visit a phone store (통신사)!", ja: '携帯を契約しよう！📱 韓国の電話番号があると便利。通信会社（통신사）に行こう！', zh: '让你连接网络！📱 很多应用需要韩国手机号。去通信社（통신사）看看！', th: 'เชื่อมต่อกันเถอะ! 📱 ต้องมีเบอร์เกาหลีใช้แอพหลายอย่าง ไปร้านโทรศัพท์ (통신사) กัน!', vi: 'Kết nối thôi! 📱 Bạn cần số điện thoại Hàn để dùng nhiều ứng dụng. Đến cửa hàng điện thoại (통신사)!', es: '¡Vamos a conectarte! 📱 Necesitas un número coreano para muchas apps. ¡Visitemos una tienda (통신사)!' }, nextSceneId: 's3e4-scene2' },
    { id: 's3e4-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '직원', avatar: '👨‍💼', emotion: 'happy' }, dialogue: { en: '"어떤 요금제 찾으세요?" (What kind of plan are you looking for?)', ja: '「어떤 요금제 찾으세요?」（どんなプランをお探しですか？）', zh: '"어떤 요금제 찾으세요?"（您找什么样的套餐？）', th: '"어떤 요금제 찾으세요?" (มองหาแพ็คเกจแบบไหนคะ/ครับ?)', vi: '"어떤 요금제 찾으세요?" (Bạn tìm gói cước nào?)', es: '"어떤 요금제 찾으세요?" (¿Qué tipo de plan busca?)' }, choices: [
      { id: 's3e4-c1a', korean: '데이터 무제한 요금제요', romanization: 'Deiteo mujaehan yoGeumjeyo', translation: { en: 'Unlimited data plan', ja: 'データ無制限プラン', zh: '无限流量套餐', th: 'แพ็คเกจเน็ตไม่อั้นค่ะ/ครับ', vi: 'Gói dữ liệu không giới hạn', es: 'Plan de datos ilimitado' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '요금제' means rate plan!", ja: '完璧！🌟「요금제」は料金プランの意味！', zh: '完美！🌟"요금제"是套餐的意思！', th: 'สมบูรณ์แบบ! 🌟 "요금제" แปลว่าแพ็คเกจ!', vi: 'Hoàn hảo! 🌟 "요금제" nghĩa là gói cước!', es: '¡Perfecto! 🌟 "요금제" significa plan de tarifas!' }, nextSceneId: 's3e4-scene3' },
      { id: 's3e4-c1b', korean: '선불 SIM 카드요', romanization: 'Seonbul SIM kadeulyo', translation: { en: 'Prepaid SIM card', ja: 'プリペイドSIMカード', zh: '预付费SIM卡', th: 'ซิมเติมเงินค่ะ/ครับ', vi: 'SIM trả trước', es: 'Tarjeta SIM prepago' }, correctness: 'good', feedback: { en: "Good choice! 👍 '선불' means prepaid!", ja: 'いい選択！👍「선불」はプリペイドの意味！', zh: '好选择！👍"선불"是预付费的意思！', th: 'เลือกดี! 👍 "선불" แปลว่าเติมเงิน!', vi: 'Lựa chọn tốt! 👍 "선불" nghĩa là trả trước!', es: '¡Buena elección! 👍 "선불" significa prepago!' }, nextSceneId: 's3e4-scene3' },
    ], teaching: { vocabulary: [{ korean: '통신사', romanization: 'tongsinsa', meaning: { en: 'Telecom carrier', ja: '通信会社', zh: '通信公司', th: 'บริษัทโทรคมนาคม', vi: 'Nhà mạng', es: 'Operadora' } }, { korean: '요금제', romanization: 'yogeumje', meaning: { en: 'Rate plan', ja: '料金プラン', zh: '套餐', th: 'แพ็คเกจ', vi: 'Gói cước', es: 'Plan de tarifas' } }] } },
    { id: 's3e4-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '직원', avatar: '👨‍💼', emotion: 'happy' }, dialogue: { en: '"여권과 신분증 보여주세요. 번호 선택하시겠어요?" (Please show your passport and ID. Would you like to choose your number?)', ja: '「여권과 신분증 보여주세요. 번호 선택하시겠어요?」（パスポートと身分証をお願いします。番号を選びますか？）', zh: '"여권과 신분증 보여주세요. 번호 선택하시겠어요?"（请出示护照和身份证。要选号码吗？）', th: '"여권과 신분증 보여주세요. 번호 선택하시겠어요?" (ขอดูพาสปอร์ตและบัตรประชาชนค่ะ/ครับ เลือกเบอร์เองไหมคะ/ครับ?)', vi: '"여권과 신분증 보여주세요. 번호 선택하시겠어요?" (Cho xem hộ chiếu và CMND. Bạn muốn chọn số không?)', es: '"여권과 신분증 보여주세요. 번호 선택하시겠어요?" (Muestre su pasaporte. ¿Quiere elegir su número?)' }, choices: [
      { id: 's3e4-c2a', korean: '네, 좋은 번호로 주세요', romanization: 'Ne, joeun beonhoro juseyo', translation: { en: 'Yes, please give me a good number', ja: 'はい、いい番号をください', zh: '好，请给我一个好号码', th: 'ค่ะ/ครับ ขอเบอร์ดีๆ นะคะ/ครับ', vi: 'Vâng, cho tôi số đẹp', es: 'Sí, deme un buen número' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '번호' means number!", ja: '素晴らしい！🌟「번호」は番号の意味！', zh: '太棒了！🌟"번호"是号码的意思！', th: 'เยี่ยม! 🌟 "번호" แปลว่าหมายเลข!', vi: 'Tuyệt! 🌟 "번호" nghĩa là số!', es: '¡Genial! 🌟 "번호" significa número!' }, nextSceneId: 's3e4-scene4' },
    ], teaching: { vocabulary: [{ korean: '번호', romanization: 'beonho', meaning: { en: 'Number', ja: '番号', zh: '号码', th: 'หมายเลข', vi: 'Số', es: 'Número' } }, { korean: '선택', romanization: 'seontaek', meaning: { en: 'Selection/Choice', ja: '選択', zh: '选择', th: 'การเลือก', vi: 'Lựa chọn', es: 'Selección' } }], culturalNote: { en: '💡 In Korea, lucky numbers (like those with 8) are popular for phone numbers!', ja: '💡 韓国では8などのラッキーナンバーが電話番号で人気！', zh: '💡 在韩国，8等吉利数字的手机号很受欢迎！', th: '💡 ในเกาหลี เลขมงคล (เช่น 8) เป็นที่นิยมสำหรับเบอร์โทรศัพท์!', vi: '💡 Ở Hàn Quốc, số may mắn (như số 8) được ưa chuộng cho số điện thoại!', es: '💡 ¡En Corea, los números de suerte (como el 8) son populares para teléfonos!' } } },
    { id: 's3e4-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You're connected! 🎉 You learned:\n✅ '통신사' - Telecom carrier\n✅ '요금제' - Rate plan\n✅ '번호' - Number\n\nYou earned the '📱 Tech Savvy' badge!", ja: '接続完了！🎉 学んだこと：\n✅「통신사」- 通信会社\n✅「요금제」- 料金プラン\n✅「번호」- 番号\n\n「📱 テック達人」バッジ獲得！', zh: '连接成功！🎉 你学到了：\n✅ "통신사" - 通信公司\n✅ "요금제" - 套餐\n✅ "번호" - 号码\n\n获得"📱 科技达人"徽章！', th: 'เชื่อมต่อแล้ว! 🎉 คุณเรียนรู้:\n✅ "통신사" - บริษัทโทรคมนาคม\n✅ "요금제" - แพ็คเกจ\n✅ "번호" - หมายเลข\n\nได้รับเหรียญ "📱 เซียนเทคโนโลยี"!', vi: 'Đã kết nối! 🎉 Bạn đã học:\n✅ "통신사" - Nhà mạng\n✅ "요금제" - Gói cước\n✅ "번호" - Số\n\nNhận huy hiệu "📱 Am hiểu công nghệ"!', es: '¡Estás conectado! 🎉 Aprendiste:\n✅ "통신사" - Operadora\n✅ "요금제" - Plan\n✅ "번호" - Número\n\n¡Obtuviste "📱 Experto en tecnología"!' } },
  ],
};

// Episode 5: Laundromat Day
export const s3e5: StoryEpisode = {
  id: 's3e5',
  season: 3,
  episode: 5,
  title: {
    en: 'Laundromat Day',
    ja: 'コインランドリーの日',
    zh: '自助洗衣日',
    th: 'วันซักผ้าที่ร้าน',
    vi: 'Ngày giặt đồ',
    es: 'Día de lavandería',
  },
  description: {
    en: 'Do your laundry at a Korean laundromat!',
    ja: '韓国のコインランドリーで洗濯しよう！',
    zh: '在韩国自助洗衣店洗衣服！',
    th: 'ซักผ้าที่ร้านซักผ้าเกาหลี!',
    vi: 'Giặt đồ ở tiệm giặt Hàn Quốc!',
    es: '¡Lava tu ropa en una lavandería coreana!',
  },
  icon: '🧺',
  location: 'Laundromat',
  requiredLevel: 1,
  rewards: { xp: 200, badge: 'laundry_master', badgeName: { en: 'Laundry Master', ja: '洗濯マスター', zh: '洗衣达人', th: 'เซียนซักผ้า', vi: 'Bậc thầy giặt đồ', es: 'Maestro de lavandería' } },
  isPremium: false,
  scenes: [
    { id: 's3e5-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Time to do laundry! 🧺 Korean laundromats (빨래방) are modern and easy to use. Let's get your clothes clean!", ja: '洗濯の時間！🧺 韓国のコインランドリー（빨래방）は最新で使いやすい！服をきれいにしよう！', zh: '洗衣服时间！🧺 韩国自助洗衣店（빨래방）现代又好用。把衣服洗干净！', th: 'ถึงเวลาซักผ้า! 🧺 ร้านซักผ้าเกาหลี (빨래방) ทันสมัยและใช้ง่าย ซักผ้าให้สะอาดกัน!', vi: 'Giờ giặt đồ! 🧺 Tiệm giặt Hàn Quốc (빨래방) hiện đại và dễ dùng. Giặt sạch quần áo thôi!', es: '¡Hora de lavar! 🧺 Las lavanderías coreanas (빨래방) son modernas. ¡Limpiemos tu ropa!' }, nextSceneId: 's3e5-scene2' },
    { id: 's3e5-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '직원', avatar: '👩‍💼', emotion: 'happy' }, dialogue: { en: '"세탁만 하시겠어요, 건조도 하시겠어요?" (Just washing, or drying too?)', ja: '「세탁만 하시겠어요, 건조도 하시겠어요?」（洗濯だけですか、乾燥もしますか？）', zh: '"세탁만 하시겠어요, 건조도 하시겠어요?"（只洗还是也烘干？）', th: '"세탁만 하시겠어요, 건조도 하시겠어요?" (ซักอย่างเดียวหรืออบแห้งด้วยคะ/ครับ?)', vi: '"세탁만 하시겠어요, 건조도 하시겠어요?" (Chỉ giặt hay sấy luôn?)', es: '"세탁만 하시겠어요, 건조도 하시겠어요?" (¿Solo lavado o también secado?)' }, choices: [
      { id: 's3e5-c1a', korean: '세탁하고 건조도 해주세요', romanization: 'Setakhago geonjodo haejuseyo', translation: { en: 'Please wash and dry', ja: '洗濯と乾燥をお願いします', zh: '请洗和烘干', th: 'ซักและอบแห้งด้วยค่ะ/ครับ', vi: 'Giặt và sấy luôn', es: 'Lave y seque por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '세탁' is washing, '건조' is drying!", ja: '完璧！🌟「세탁」は洗濯、「건조」は乾燥！', zh: '完美！🌟"세탁"是洗，"건조"是烘干！', th: 'สมบูรณ์แบบ! 🌟 "세탁" คือซัก, "건조" คืออบแห้ง!', vi: 'Hoàn hảo! 🌟 "세탁" là giặt, "건조" là sấy!', es: '¡Perfecto! 🌟 "세탁" es lavar, "건조" es secar!' }, nextSceneId: 's3e5-scene3' },
      { id: 's3e5-c1b', korean: '세탁만요', romanization: 'Setakmanyo', translation: { en: 'Just washing', ja: '洗濯だけです', zh: '只洗', th: 'ซักอย่างเดียวค่ะ/ครับ', vi: 'Chỉ giặt thôi', es: 'Solo lavado' }, correctness: 'good', feedback: { en: "Got it! 👍 You can air dry back home!", ja: '了解！👍 家で干せるね！', zh: '明白！👍 可以回家晾干！', th: 'รับทราบ! 👍 ตากที่บ้านได้!', vi: 'Được! 👍 Có thể phơi ở nhà!', es: '¡Entendido! 👍 ¡Puedes secar al aire en casa!' }, nextSceneId: 's3e5-scene3' },
    ], teaching: { vocabulary: [{ korean: '세탁', romanization: 'setak', meaning: { en: 'Washing/Laundry', ja: '洗濯', zh: '洗衣', th: 'ซักผ้า', vi: 'Giặt', es: 'Lavado' } }, { korean: '건조', romanization: 'geonjo', meaning: { en: 'Drying', ja: '乾燥', zh: '烘干', th: 'อบแห้ง', vi: 'Sấy', es: 'Secado' } }] } },
    { id: 's3e5-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '직원', avatar: '👩‍💼', emotion: 'thinking' }, dialogue: { en: '"시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요." (How long? Washing 30 min, drying 20 min.)', ja: '「시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요.」（時間は？洗濯30分、乾燥20分です。）', zh: '"시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요."（要多久？洗30分钟，烘干20分钟。）', th: '"시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요." (ใช้เวลาเท่าไหร่คะ/ครับ? ซัก 30 นาที อบแห้ง 20 นาที)', vi: '"시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요." (Mất bao lâu? Giặt 30 phút, sấy 20 phút.)', es: '"시간은 얼마나 걸려요? 세탁 30분, 건조 20분이요." (¿Cuánto tiempo? Lavado 30 min, secado 20 min.)' }, choices: [
      { id: 's3e5-c2a', korean: '알겠습니다. 근처에서 기다릴게요', romanization: 'Algesseumnida. Geuncheoeseogidailgeyo', translation: { en: "I understand. I'll wait nearby", ja: 'わかりました。近くで待ちます', zh: '明白了。我在附近等', th: 'เข้าใจค่ะ/ครับ จะรอใกล้ๆ นะคะ/ครับ', vi: 'Tôi hiểu. Tôi sẽ đợi gần đây', es: 'Entiendo. Esperaré cerca' }, correctness: 'perfect', feedback: { en: "Good! 🌟 '시간' means time!", ja: 'いいね！🌟「시간」は時間の意味！', zh: '好！🌟"시간"是时间的意思！', th: 'ดี! 🌟 "시간" แปลว่าเวลา!', vi: 'Tốt! 🌟 "시간" nghĩa là thời gian!', es: '¡Bien! 🌟 "시간" significa tiempo!' }, nextSceneId: 's3e5-scene4' },
    ], teaching: { vocabulary: [{ korean: '시간', romanization: 'sigan', meaning: { en: 'Time', ja: '時間', zh: '时间', th: 'เวลา', vi: 'Thời gian', es: 'Tiempo' } }, { korean: '분', romanization: 'bun', meaning: { en: 'Minute', ja: '分', zh: '分钟', th: 'นาที', vi: 'Phút', es: 'Minuto' } }], culturalNote: { en: '💡 Many Korean laundromats are 24-hour and unmanned, using apps for payment!', ja: '💡 韓国の多くのコインランドリーは24時間無人でアプリ決済！', zh: '💡 韩国很多自助洗衣店24小时无人，用APP支付！', th: '💡 ร้านซักผ้าเกาหลีหลายแห่งเปิด 24 ชม. ไม่มีคน ใช้แอพจ่ายเงิน!', vi: '💡 Nhiều tiệm giặt Hàn Quốc hoạt động 24 giờ không người, thanh toán qua app!', es: '💡 ¡Muchas lavanderías coreanas son 24h y sin personal, usan apps para pagar!' } } },
    { id: 's3e5-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Clean clothes! 🎉 You learned:\n✅ '세탁' - Washing\n✅ '건조' - Drying\n✅ '시간' - Time\n\nYou earned the '🧺 Laundry Master' badge!", ja: '服がきれい！🎉 学んだこと：\n✅「세탁」- 洗濯\n✅「건조」- 乾燥\n✅「시간」- 時間\n\n「🧺 洗濯マスター」バッジ獲得！', zh: '衣服干净了！🎉 你学到了：\n✅ "세탁" - 洗衣\n✅ "건조" - 烘干\n✅ "시간" - 时间\n\n获得"🧺 洗衣达人"徽章！', th: 'เสื้อผ้าสะอาด! 🎉 คุณเรียนรู้:\n✅ "세탁" - ซักผ้า\n✅ "건조" - อบแห้ง\n✅ "시간" - เวลา\n\nได้รับเหรียญ "🧺 เซียนซักผ้า"!', vi: 'Quần áo sạch! 🎉 Bạn đã học:\n✅ "세탁" - Giặt\n✅ "건조" - Sấy\n✅ "시간" - Thời gian\n\nNhận huy hiệu "🧺 Bậc thầy giặt đồ"!', es: '¡Ropa limpia! 🎉 Aprendiste:\n✅ "세탁" - Lavado\n✅ "건조" - Secado\n✅ "시간" - Tiempo\n\n¡Obtuviste "🧺 Maestro de lavandería"!' } },
  ],
};

// Episode 6: Korean Bank Visit
export const s3e6: StoryEpisode = {
  id: 's3e6',
  season: 3,
  episode: 6,
  title: {
    en: 'Korean Bank Visit',
    ja: '韓国の銀行へ',
    zh: '去韩国银行',
    th: 'ไปธนาคารเกาหลี',
    vi: 'Đến ngân hàng Hàn Quốc',
    es: 'Visita al banco coreano',
  },
  description: {
    en: 'Open a bank account and exchange money!',
    ja: '銀行口座を開設して両替しよう！',
    zh: '开银行账户和换钱！',
    th: 'เปิดบัญชีและแลกเงิน!',
    vi: 'Mở tài khoản và đổi tiền!',
    es: '¡Abre una cuenta y cambia dinero!',
  },
  icon: '🏦',
  location: 'Korean Bank',
  requiredLevel: 1,
  rewards: { xp: 250, badge: 'money_master', badgeName: { en: 'Money Master', ja: 'マネーマスター', zh: '金融达人', th: 'เซียนการเงิน', vi: 'Bậc thầy tài chính', es: 'Maestro del dinero' } },
  isPremium: false,
  scenes: [
    { id: 's3e6-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's go to the bank! 🏦 You need a Korean bank account (계좌) for many things. Time to set one up!", ja: '銀行へ行こう！🏦 韓国の銀行口座（계좌）は色々な場面で必要。開設しよう！', zh: '去银行！🏦 很多事情需要韩国银行账户（계좌）。开一个吧！', th: 'ไปธนาคารกัน! 🏦 ต้องมีบัญชีธนาคารเกาหลี (계좌) สำหรับหลายอย่าง เปิดบัญชีกัน!', vi: 'Đến ngân hàng! 🏦 Bạn cần tài khoản ngân hàng Hàn Quốc (계좌) cho nhiều việc. Mở tài khoản thôi!', es: '¡Vamos al banco! 🏦 Necesitas una cuenta coreana (계좌) para muchas cosas. ¡Vamos a abrirla!' }, nextSceneId: 's3e6-scene2' },
    { id: 's3e6-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '은행원', avatar: '👩‍💼', emotion: 'happy' }, dialogue: { en: '"무엇을 도와드릴까요? 계좌 개설이요, 환전이요?" (How may I help you? Open an account, or currency exchange?)', ja: '「무엇을 도와드릴까요? 계좌 개설이요, 환전이요?」（何をお手伝いしましょうか？口座開設？両替？）', zh: '"무엇을 도와드릴까요? 계좌 개설이요, 환전이요?"（需要什么帮助？开户还是换汇？）', th: '"무엇을 도와드릴까요? 계좌 개설이요, 환전이요?" (ต้องการอะไรคะ/ครับ? เปิดบัญชีหรือแลกเงินคะ/ครับ?)', vi: '"무엇을 도와드릴까요? 계좌 개설이요, 환전이요?" (Tôi giúp gì được? Mở tài khoản hay đổi tiền?)', es: '"무엇을 도와드릴까요? 계좌 개설이요, 환전이요?" (¿En qué le ayudo? ¿Abrir cuenta o cambio de divisas?)' }, choices: [
      { id: 's3e6-c1a', korean: '계좌 개설하고 싶어요', romanization: 'Gyejwa gaeseolhago sipeoyo', translation: { en: 'I want to open an account', ja: '口座を開設したいです', zh: '我想开户', th: 'อยากเปิดบัญชีค่ะ/ครับ', vi: 'Tôi muốn mở tài khoản', es: 'Quiero abrir una cuenta' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '계좌' means bank account!", ja: '完璧！🌟「계좌」は銀行口座の意味！', zh: '完美！🌟"계좌"是银行账户的意思！', th: 'สมบูรณ์แบบ! 🌟 "계좌" แปลว่าบัญชีธนาคาร!', vi: 'Hoàn hảo! 🌟 "계좌" nghĩa là tài khoản ngân hàng!', es: '¡Perfecto! 🌟 "계좌" significa cuenta bancaria!' }, nextSceneId: 's3e6-scene3' },
      { id: 's3e6-c1b', korean: '환전하고 싶어요', romanization: 'Hwanjeonhago sipeoyo', translation: { en: 'I want to exchange money', ja: '両替したいです', zh: '我想换钱', th: 'อยากแลกเงินค่ะ/ครับ', vi: 'Tôi muốn đổi tiền', es: 'Quiero cambiar dinero' }, correctness: 'good', feedback: { en: "Good! 👍 '환전' means currency exchange!", ja: 'いいね！👍「환전」は両替の意味！', zh: '好！👍"환전"是换汇的意思！', th: 'ดี! 👍 "환전" แปลว่าแลกเงิน!', vi: 'Tốt! 👍 "환전" nghĩa là đổi tiền!', es: '¡Bien! 👍 "환전" significa cambio de divisas!' }, nextSceneId: 's3e6-scene3' },
    ], teaching: { vocabulary: [{ korean: '계좌', romanization: 'gyejwa', meaning: { en: 'Bank account', ja: '銀行口座', zh: '银行账户', th: 'บัญชีธนาคาร', vi: 'Tài khoản ngân hàng', es: 'Cuenta bancaria' } }, { korean: '환전', romanization: 'hwanjeon', meaning: { en: 'Currency exchange', ja: '両替', zh: '换汇', th: 'แลกเงิน', vi: 'Đổi tiền', es: 'Cambio de divisas' } }] } },
    { id: 's3e6-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '은행원', avatar: '👩‍💼', emotion: 'thinking' }, dialogue: { en: '"서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요." (Did you bring the documents? We need your passport and ARC.)', ja: '「서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요.」（書類は持ってきましたか？パスポートと外国人登録証が必要です。）', zh: '"서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요."（准备好文件了吗？需要护照和外国人登录证。）', th: '"서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요." (เตรียมเอกสารมาหรือยังคะ/ครับ? ต้องใช้พาสปอร์ตและบัตรต่างด้าวค่ะ/ครับ)', vi: '"서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요." (Bạn mang giấy tờ chưa? Cần hộ chiếu và thẻ ngoại kiều.)', es: '"서류 준비해 오셨어요? 여권이랑 외국인등록증 필요해요." (¿Trajo los documentos? Necesitamos pasaporte y ARC.)' }, choices: [
      { id: 's3e6-c2a', korean: '네, 여기 있어요. 서류 다 가져왔어요', romanization: 'Ne, yeogi isseoyo. Seoryu da gajeowasseoyo', translation: { en: "Yes, here they are. I brought all the documents", ja: 'はい、ここにあります。書類は全部持ってきました', zh: '有，在这里。文件都带来了', th: 'ค่ะ/ครับ อยู่นี่ค่ะ/ครับ เอกสารครบแล้ว', vi: 'Vâng, đây ạ. Tôi mang đầy đủ giấy tờ', es: 'Sí, aquí están. Traje todos los documentos' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '서류' means documents!", ja: '素晴らしい！🌟「서류」は書類の意味！', zh: '太棒了！🌟"서류"是文件的意思！', th: 'เยี่ยม! 🌟 "서류" แปลว่าเอกสาร!', vi: 'Tuyệt! 🌟 "서류" nghĩa là giấy tờ!', es: '¡Genial! 🌟 "서류" significa documentos!' }, nextSceneId: 's3e6-scene4' },
    ], teaching: { vocabulary: [{ korean: '서류', romanization: 'seoryu', meaning: { en: 'Documents', ja: '書類', zh: '文件', th: 'เอกสาร', vi: 'Giấy tờ', es: 'Documentos' } }, { korean: '외국인등록증', romanization: 'oegugin-deungnokjeung', meaning: { en: 'Alien Registration Card', ja: '外国人登録証', zh: '外国人登录证', th: 'บัตรต่างด้าว', vi: 'Thẻ ngoại kiều', es: 'Tarjeta de registro de extranjero' } }], culturalNote: { en: '💡 Korean banks offer special accounts for foreigners with English support!', ja: '💡 韓国の銀行は外国人向けの英語サポート付き口座がある！', zh: '💡 韩国银行为外国人提供有英语服务的特别账户！', th: '💡 ธนาคารเกาหลีมีบัญชีพิเศษสำหรับต่างชาติพร้อมบริการภาษาอังกฤษ!', vi: '💡 Ngân hàng Hàn Quốc có tài khoản đặc biệt cho người nước ngoài với hỗ trợ tiếng Anh!', es: '💡 ¡Los bancos coreanos ofrecen cuentas especiales para extranjeros con soporte en inglés!' } } },
    { id: 's3e6-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Account opened! 🎉 You learned:\n✅ '계좌' - Bank account\n✅ '환전' - Currency exchange\n✅ '서류' - Documents\n\nYou earned the '🏦 Money Master' badge!", ja: '口座開設完了！🎉 学んだこと：\n✅「계좌」- 銀行口座\n✅「환전」- 両替\n✅「서류」- 書類\n\n「🏦 マネーマスター」バッジ獲得！', zh: '开户成功！🎉 你学到了：\n✅ "계좌" - 银行账户\n✅ "환전" - 换汇\n✅ "서류" - 文件\n\n获得"🏦 金融达人"徽章！', th: 'เปิดบัญชีสำเร็จ! 🎉 คุณเรียนรู้:\n✅ "계좌" - บัญชีธนาคาร\n✅ "환전" - แลกเงิน\n✅ "서류" - เอกสาร\n\nได้รับเหรียญ "🏦 เซียนการเงิน"!', vi: 'Mở tài khoản xong! 🎉 Bạn đã học:\n✅ "계좌" - Tài khoản ngân hàng\n✅ "환전" - Đổi tiền\n✅ "서류" - Giấy tờ\n\nNhận huy hiệu "🏦 Bậc thầy tài chính"!', es: '¡Cuenta abierta! 🎉 Aprendiste:\n✅ "계좌" - Cuenta\n✅ "환전" - Cambio\n✅ "서류" - Documentos\n\n¡Obtuviste "🏦 Maestro del dinero"!' } },
  ],
};

// Episode 7: Post Office
export const s3e7: StoryEpisode = {
  id: 's3e7',
  season: 3,
  episode: 7,
  title: {
    en: 'Post Office',
    ja: '郵便局',
    zh: '邮局',
    th: 'ที่ทำการไปรษณีย์',
    vi: 'Bưu điện',
    es: 'Oficina de correos',
  },
  description: {
    en: 'Send a package to your family back home!',
    ja: '家族に小包を送ろう！',
    zh: '给家人寄包裹！',
    th: 'ส่งพัสดุกลับบ้าน!',
    vi: 'Gửi bưu kiện về cho gia đình!',
    es: '¡Envía un paquete a tu familia!',
  },
  icon: '📮',
  location: 'Post Office',
  requiredLevel: 1,
  rewards: { xp: 220, badge: 'postal_pro', badgeName: { en: 'Postal Pro', ja: '郵便のプロ', zh: '邮寄达人', th: 'เซียนไปรษณีย์', vi: 'Chuyên gia bưu điện', es: 'Experto postal' } },
  isPremium: false,
  scenes: [
    { id: 's3e7-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's send a package home! 📮 Korean post offices (우체국) are efficient and affordable. Time to ship some gifts!", ja: '家に荷物を送ろう！📮 韓国の郵便局（우체국）は効率的で手頃。プレゼントを送ろう！', zh: '寄包裹回家！📮 韩国邮局（우체국）高效实惠。寄些礼物吧！', th: 'ส่งพัสดุกลับบ้านกัน! 📮 ไปรษณีย์เกาหลี (우체국) มีประสิทธิภาพและราคาถูก ส่งของขวัญกัน!', vi: 'Gửi bưu kiện về nhà! 📮 Bưu điện Hàn Quốc (우체국) hiệu quả và giá rẻ. Gửi quà thôi!', es: '¡Enviemos un paquete a casa! 📮 El correo coreano (우체국) es eficiente. ¡Hora de enviar regalos!' }, nextSceneId: 's3e7-scene2' },
    { id: 's3e7-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '직원', avatar: '👨‍💼', emotion: 'happy' }, dialogue: { en: '"택배 보내시려고요? 어디로 보내세요?" (Sending a package? Where are you sending it?)', ja: '「택배 보내시려고요? 어디로 보내세요?」（宅配便を送りますか？どこへ？）', zh: '"택배 보내시려고요? 어디로 보내세요?"（寄快递吗？寄到哪里？）', th: '"택배 보내시려고요? 어디로 보내세요?" (จะส่งพัสดุใช่ไหมคะ/ครับ? ส่งไปไหนคะ/ครับ?)', vi: '"택배 보내시려고요? 어디로 보내세요?" (Gửi bưu kiện hả? Gửi đi đâu?)', es: '"택배 보내시려고요? 어디로 보내세요?" (¿Envía un paquete? ¿A dónde lo envía?)' }, choices: [
      { id: 's3e7-c1a', korean: '미국으로 보내고 싶어요', romanization: 'Migugeuro bonaego sipeoyo', translation: { en: 'I want to send it to the USA', ja: 'アメリカに送りたいです', zh: '我想寄到美国', th: 'อยากส่งไปอเมริกาค่ะ/ครับ', vi: 'Tôi muốn gửi đi Mỹ', es: 'Quiero enviarlo a EE.UU.' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '보내다' means to send!", ja: '完璧！🌟「보내다」は送るの意味！', zh: '完美！🌟"보내다"是寄的意思！', th: 'สมบูรณ์แบบ! 🌟 "보내다" แปลว่าส่ง!', vi: 'Hoàn hảo! 🌟 "보내다" nghĩa là gửi!', es: '¡Perfecto! 🌟 "보내다" significa enviar!' }, nextSceneId: 's3e7-scene3' },
      { id: 's3e7-c1b', korean: '일본으로요', romanization: 'Ilboneuroyo', translation: { en: 'To Japan', ja: '日本へ', zh: '到日本', th: 'ไปญี่ปุ่นค่ะ/ครับ', vi: 'Đến Nhật Bản', es: 'A Japón' }, correctness: 'good', feedback: { en: "Good! 👍 '택배' means delivery package!", ja: 'いいね！👍「택배」は宅配便の意味！', zh: '好！👍"택배"是快递的意思！', th: 'ดี! 👍 "택배" แปลว่าพัสดุ!', vi: 'Tốt! 👍 "택배" nghĩa là bưu kiện!', es: '¡Bien! 👍 "택배" significa paquete!' }, nextSceneId: 's3e7-scene3' },
    ], teaching: { vocabulary: [{ korean: '택배', romanization: 'taekbae', meaning: { en: 'Delivery package', ja: '宅配便', zh: '快递', th: 'พัสดุ', vi: 'Bưu kiện', es: 'Paquete' } }, { korean: '보내다', romanization: 'bonaeda', meaning: { en: 'To send', ja: '送る', zh: '寄', th: 'ส่ง', vi: 'Gửi', es: 'Enviar' } }] } },
    { id: 's3e7-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '직원', avatar: '👨‍💼', emotion: 'thinking' }, dialogue: { en: '"주소 적어주세요. 받는 분 성함도요." (Please write the address. And the recipient\'s name too.)', ja: '「주소 적어주세요. 받는 분 성함도요.」（住所を書いてください。受取人のお名前も。）', zh: '"주소 적어주세요. 받는 분 성함도요."（请写下地址。收件人姓名也要。）', th: '"주소 적어주세요. 받는 분 성함도요." (กรุณาเขียนที่อยู่ และชื่อผู้รับด้วยค่ะ/ครับ)', vi: '"주소 적어주세요. 받는 분 성함도요." (Xin viết địa chỉ. Và tên người nhận nữa.)', es: '"주소 적어주세요. 받는 분 성함도요." (Escriba la dirección. Y el nombre del destinatario.)' }, choices: [
      { id: 's3e7-c2a', korean: '네, 여기 주소예요', romanization: 'Ne, yeogi jusoyeyo', translation: { en: 'Yes, here is the address', ja: 'はい、ここに住所があります', zh: '好，这是地址', th: 'ค่ะ/ครับ นี่ที่อยู่ค่ะ/ครับ', vi: 'Vâng, đây là địa chỉ', es: 'Sí, aquí está la dirección' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '주소' means address!", ja: '素晴らしい！🌟「주소」は住所の意味！', zh: '太棒了！🌟"주소"是地址的意思！', th: 'เยี่ยม! 🌟 "주소" แปลว่าที่อยู่!', vi: 'Tuyệt! 🌟 "주소" nghĩa là địa chỉ!', es: '¡Genial! 🌟 "주소" significa dirección!' }, nextSceneId: 's3e7-scene4' },
    ], teaching: { vocabulary: [{ korean: '주소', romanization: 'juso', meaning: { en: 'Address', ja: '住所', zh: '地址', th: 'ที่อยู่', vi: 'Địa chỉ', es: 'Dirección' } }, { korean: '받는 분', romanization: 'banneun bun', meaning: { en: 'Recipient', ja: '受取人', zh: '收件人', th: 'ผู้รับ', vi: 'Người nhận', es: 'Destinatario' } }], culturalNote: { en: '💡 Korean post offices also offer banking services and sell cute stationery!', ja: '💡 韓国の郵便局は銀行サービスもあり、可愛い文房具も売っている！', zh: '💡 韩国邮局还提供银行服务，卖可爱的文具！', th: '💡 ไปรษณีย์เกาหลีมีบริการธนาคารด้วย และขายเครื่องเขียนน่ารักๆ!', vi: '💡 Bưu điện Hàn Quốc còn có dịch vụ ngân hàng và bán văn phòng phẩm dễ thương!', es: '💡 ¡El correo coreano también ofrece servicios bancarios y vende papelería linda!' } } },
    { id: 's3e7-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Package sent! 🎉 You learned:\n✅ '택배' - Package\n✅ '보내다' - To send\n✅ '주소' - Address\n\nYou earned the '📮 Postal Pro' badge!", ja: '荷物発送完了！🎉 学んだこと：\n✅「택배」- 宅配便\n✅「보내다」- 送る\n✅「주소」- 住所\n\n「📮 郵便のプロ」バッジ獲得！', zh: '包裹寄出！🎉 你学到了：\n✅ "택배" - 快递\n✅ "보내다" - 寄\n✅ "주소" - 地址\n\n获得"📮 邮寄达人"徽章！', th: 'ส่งพัสดุแล้ว! 🎉 คุณเรียนรู้:\n✅ "택배" - พัสดุ\n✅ "보내다" - ส่ง\n✅ "주소" - ที่อยู่\n\nได้รับเหรียญ "📮 เซียนไปรษณีย์"!', vi: 'Đã gửi bưu kiện! 🎉 Bạn đã học:\n✅ "택배" - Bưu kiện\n✅ "보내다" - Gửi\n✅ "주소" - Địa chỉ\n\nNhận huy hiệu "📮 Chuyên gia bưu điện"!', es: '¡Paquete enviado! 🎉 Aprendiste:\n✅ "택배" - Paquete\n✅ "보내다" - Enviar\n✅ "주소" - Dirección\n\n¡Obtuviste "📮 Experto postal"!' } },
  ],
};

// Episode 8: Emergency! Lost Wallet
export const s3e8: StoryEpisode = {
  id: 's3e8',
  season: 3,
  episode: 8,
  title: {
    en: 'Emergency! Lost Wallet',
    ja: '緊急事態！財布を失くした',
    zh: '紧急情况！钱包丢了',
    th: 'ฉุกเฉิน! ทำกระเป๋าสตางค์หาย',
    vi: 'Khẩn cấp! Mất ví',
    es: '¡Emergencia! Cartera perdida',
  },
  description: {
    en: 'Learn to handle emergencies and get help!',
    ja: '緊急事態に対処して助けを求めよう！',
    zh: '学会处理紧急情况和寻求帮助！',
    th: 'เรียนรู้การรับมือกับเหตุฉุกเฉินและขอความช่วยเหลือ!',
    vi: 'Học cách xử lý tình huống khẩn cấp và tìm sự giúp đỡ!',
    es: '¡Aprende a manejar emergencias y pedir ayuda!',
  },
  icon: '🆘',
  location: 'Police Station',
  requiredLevel: 1,
  rewards: { xp: 300, badge: 'daily_life_master', badgeName: { en: 'Daily Life Master', ja: '日常生活マスター', zh: '日常生活达人', th: 'เซียนชีวิตประจำวัน', vi: 'Bậc thầy đời sống', es: 'Maestro de la vida diaria' } },
  isPremium: false,
  scenes: [
    { id: 's3e8-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'surprised' }, dialogue: { en: "Oh no! 😰 You lost your wallet! Don't panic - Korea is very safe and honest. Let's go to the police station (경찰서) for help!", ja: '大変！😰 財布を失くした！慌てないで。韓国はとても安全で正直。警察署（경찰서）に行って助けを求めよう！', zh: '糟糕！😰 你丢了钱包！别慌，韩国很安全诚实。去警察局（경찰서）求助吧！', th: 'ไม่ดีเลย! 😰 ทำกระเป๋าสตางค์หาย! อย่าตกใจ เกาหลีปลอดภัยและซื่อสัตย์มาก ไปสถานีตำรวจ (경찰서) ขอความช่วยเหลือกัน!', vi: 'Ôi không! 😰 Bạn mất ví! Đừng hoảng - Hàn Quốc rất an toàn và trung thực. Đến đồn cảnh sát (경찰서) nhờ giúp đỡ!', es: '¡Oh no! 😰 ¡Perdiste tu cartera! No te asustes - Corea es muy segura. ¡Vamos a la comisaría (경찰서)!' }, nextSceneId: 's3e8-scene2' },
    { id: 's3e8-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '경찰관', avatar: '👮', emotion: 'thinking' }, dialogue: { en: '"무엇을 도와드릴까요? 무슨 일이에요?" (How may I help you? What happened?)', ja: '「무엇을 도와드릴까요? 무슨 일이에요?」（何かお困りですか？どうしました？）', zh: '"무엇을 도와드릴까요? 무슨 일이에요?"（需要什么帮助？发生什么事了？）', th: '"무엇을 도와드릴까요? 무슨 일이에요?" (ต้องการความช่วยเหลืออะไรคะ/ครับ? เกิดอะไรขึ้นคะ/ครับ?)', vi: '"무엇을 도와드릴까요? 무슨 일이에요?" (Tôi giúp gì được? Có chuyện gì?)', es: '"무엇을 도와드릴까요? 무슨 일이에요?" (¿En qué le ayudo? ¿Qué pasó?)' }, choices: [
      { id: 's3e8-c1a', korean: '지갑을 잃어버렸어요. 도움이 필요해요', romanization: 'Jigabeul ireobeoryeosseoyo. Doumi piryohaeyo', translation: { en: 'I lost my wallet. I need help', ja: '財布を失くしました。助けが必要です', zh: '我丢了钱包。我需要帮助', th: 'ทำกระเป๋าสตางค์หายค่ะ/ครับ ต้องการความช่วยเหลือค่ะ/ครับ', vi: 'Tôi mất ví. Tôi cần giúp đỡ', es: 'Perdí mi cartera. Necesito ayuda' }, correctness: 'perfect', feedback: { en: "Stay calm! 🌟 '잃어버리다' means to lose something!", ja: '落ち着いて！🌟「잃어버리다」は何かを失くすの意味！', zh: '冷静！🌟"잃어버리다"是丢失的意思！', th: 'ใจเย็นๆ! 🌟 "잃어버리다" แปลว่าทำหาย!', vi: 'Bình tĩnh! 🌟 "잃어버리다" nghĩa là làm mất!', es: '¡Tranquilo! 🌟 "잃어버리다" significa perder algo!' }, nextSceneId: 's3e8-scene3' },
    ], teaching: { vocabulary: [{ korean: '잃어버리다', romanization: 'ireobeorida', meaning: { en: 'To lose (something)', ja: '失くす', zh: '丢失', th: 'ทำหาย', vi: 'Làm mất', es: 'Perder' } }, { korean: '경찰서', romanization: 'gyeongchalseo', meaning: { en: 'Police station', ja: '警察署', zh: '警察局', th: 'สถานีตำรวจ', vi: 'Đồn cảnh sát', es: 'Comisaría' } }] } },
    { id: 's3e8-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '경찰관', avatar: '👮', emotion: 'happy' }, dialogue: { en: '"걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?" (Don\'t worry. I\'ll contact the lost and found. Where did you lose it?)', ja: '「걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?」（心配しないで。遺失物センターに連絡します。どこで失くしましたか？）', zh: '"걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?"（别担心。我联系失物招领中心。在哪里丢的？）', th: '"걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?" (ไม่ต้องห่วงค่ะ/ครับ จะติดต่อศูนย์ของหายให้ ทำหายที่ไหนคะ/ครับ?)', vi: '"걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?" (Đừng lo. Tôi sẽ liên hệ trung tâm đồ thất lạc. Mất ở đâu?)', es: '"걱정 마세요. 분실물 센터에 연락해볼게요. 어디서 잃어버렸어요?" (No se preocupe. Contactaré objetos perdidos. ¿Dónde lo perdió?)' }, choices: [
      { id: 's3e8-c2a', korean: '감사합니다! 정말 도움이 됐어요', romanization: 'Gamsahamnida! Jeongmal doumi dwaesseoyo', translation: { en: 'Thank you! You really helped me', ja: 'ありがとうございます！本当に助かりました', zh: '谢谢！真的帮了大忙', th: 'ขอบคุณค่ะ/ครับ! ช่วยได้มากเลยค่ะ/ครับ', vi: 'Cảm ơn! Bạn thật sự giúp tôi rất nhiều', es: '¡Gracias! Me ayudó mucho' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '도움' means help!", ja: '素晴らしい！🌟「도움」は助けの意味！', zh: '太棒了！🌟"도움"是帮助的意思！', th: 'เยี่ยม! 🌟 "도움" แปลว่าความช่วยเหลือ!', vi: 'Tuyệt! 🌟 "도움" nghĩa là sự giúp đỡ!', es: '¡Genial! 🌟 "도움" significa ayuda!' }, nextSceneId: 's3e8-scene4' },
    ], teaching: { vocabulary: [{ korean: '도움', romanization: 'doum', meaning: { en: 'Help', ja: '助け', zh: '帮助', th: 'ความช่วยเหลือ', vi: 'Sự giúp đỡ', es: 'Ayuda' } }, { korean: '분실물', romanization: 'bunsilmul', meaning: { en: 'Lost item', ja: '遺失物', zh: '失物', th: 'ของหาย', vi: 'Đồ thất lạc', es: 'Objeto perdido' } }], culturalNote: { en: '💡 Korea has a high rate of returning lost items! Many wallets get returned with cash intact!', ja: '💡 韓国は遺失物の返還率が高い！現金入りの財布もそのまま戻ってくることが多い！', zh: '💡 韩国失物归还率很高！很多钱包连现金都原封不动地还回来！', th: '💡 เกาหลีมีอัตราคืนของหายสูงมาก! กระเป๋าสตางค์หลายใบถูกส่งคืนพร้อมเงินครบ!', vi: '💡 Hàn Quốc có tỷ lệ trả đồ thất lạc rất cao! Nhiều ví được trả lại nguyên vẹn cả tiền!', es: '¡Corea tiene alta tasa de devolución de objetos perdidos! ¡Muchas carteras vuelven con el dinero intacto!' } } },
    { id: 's3e8-scene4', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "🎊 SEASON 3 COMPLETE! 🎊\n\nYou mastered Daily Life Basics! You learned:\n✅ Convenience stores & Pharmacies\n✅ Hair salons & Phone plans\n✅ Laundromats & Banks\n✅ Post offices & Emergencies\n\nYou earned the '🌟 Daily Life Master' badge!\n\nReady for more adventures? 🚀", ja: '🎊 シーズン3完了！🎊\n\n日常生活の基礎をマスター！学んだこと：\n✅ コンビニ＆薬局\n✅ 美容室＆携帯プラン\n✅ コインランドリー＆銀行\n✅ 郵便局＆緊急事態\n\n「🌟 日常生活マスター」バッジ獲得！\n\n次の冒険の準備はできた？🚀', zh: '🎊 第三季完成！🎊\n\n掌握了日常生活基础！你学到了：\n✅ 便利店和药店\n✅ 美发店和手机套餐\n✅ 自助洗衣店和银行\n✅ 邮局和紧急情况\n\n获得"🌟 日常生活达人"徽章！\n\n准备好更多冒险了吗？🚀', th: '🎊 ซีซั่น 3 จบแล้ว! 🎊\n\nเชี่ยวชาญพื้นฐานชีวิตประจำวัน! คุณเรียนรู้:\n✅ ร้านสะดวกซื้อ & ร้านขายยา\n✅ ร้านทำผม & แพ็คเกจโทรศัพท์\n✅ ร้านซักผ้า & ธนาคาร\n✅ ไปรษณีย์ & เหตุฉุกเฉิน\n\nได้รับเหรียญ "🌟 เซียนชีวิตประจำวัน"!\n\nพร้อมสำหรับการผจญภัยเพิ่มเติม? 🚀', vi: '🎊 MÙA 3 HOÀN THÀNH! 🎊\n\nBạn đã thành thạo Cơ bản đời sống! Bạn đã học:\n✅ Cửa hàng tiện lợi & Nhà thuốc\n✅ Tiệm tóc & Gói cước điện thoại\n✅ Tiệm giặt & Ngân hàng\n✅ Bưu điện & Tình huống khẩn cấp\n\nNhận huy hiệu "🌟 Bậc thầy đời sống"!\n\nSẵn sàng cho nhiều cuộc phiêu lưu hơn? 🚀', es: '🎊 ¡TEMPORADA 3 COMPLETA! 🎊\n\n¡Dominaste los básicos de la vida diaria! Aprendiste:\n✅ Tiendas y farmacias\n✅ Salones y planes de teléfono\n✅ Lavanderías y bancos\n✅ Correos y emergencias\n\n¡Obtuviste "🌟 Maestro de la vida diaria"!\n\n¿Listo para más aventuras? 🚀' } },
  ],
};

// Export all episodes
season3.episodes = [s3e1, s3e2, s3e3, s3e4, s3e5, s3e6, s3e7, s3e8];

export const season3Episodes = season3.episodes;
export default season3Episodes;
