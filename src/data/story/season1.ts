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
          { korean: '명동', romanization: 'myeongdong', meaning: { en: 'Myeongdong (shopping district)', ja: '明洞（ショッピング街）', zh: '明洞（购物区）', th: 'เมียงดง (ย่านช้อปปิ้ง)', vi: 'Myeongdong (khu mua sắm)', es: 'Myeongdong (distrito comercial)' } },
        ],
        grammar: { en: "'어디로 가세요?' = 어디(where) + 로(to/toward) + 가세요(please go). The '-로' particle indicates direction.", ja: "'어디로 가세요?' = 어디(どこ) + 로(へ) + 가세요(行ってください)。「-로」は方向を示す助詞。", zh: "'어디로 가세요?' = 어디(哪里) + 로(向) + 가세요(请去)。'-로'表示方向。", th: "'어디로 가세요?' = 어디(ที่ไหน) + 로(ไปทาง) + 가세요(กรุณาไป) '-로' แสดงทิศทาง", vi: "'어디로 가세요?' = 어디(ở đâu) + 로(hướng) + 가세요(xin đi). '-로' chỉ hướng.", es: "'어디로 가세요?' = 어디(dónde) + 로(hacia) + 가세요(por favor vaya). '-로' indica dirección." },
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
        { id: 's1e1-c2a', korean: '감사합니다', romanization: 'Gamsahamnida', translation: { en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', th: 'ขอบคุณครับ/ค่ะ', vi: 'Cảm ơn', es: 'Gracias' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 Always thank your driver!", ja: '完璧！🌟 運転手さんにお礼を！', zh: '完美！🌟 记得感谢司机！', th: 'สมบูรณ์แบบ! 🌟 ขอบคุณคนขับเสมอ!', vi: 'Hoàn hảo! 🌟 Luôn cảm ơn tài xế!', es: '¡Perfecto! 🌟 ¡Siempre agradece!' }, nextSceneId: 's1e1-scene5' },
        { id: 's1e1-c2b', korean: '고마워요', romanization: 'Gomawoyo', translation: { en: 'Thanks (casual)', ja: 'ありがとう', zh: '谢谢(随意)', th: 'ขอบคุณนะ', vi: 'Cảm ơn nhé', es: 'Gracias (casual)' }, correctness: 'good', feedback: { en: "Good! 👍 '감사합니다' is more formal for strangers.", ja: 'いいね！👍 知らない人には「감사합니다」がベター。', zh: '不错！👍 对陌生人用"감사합니다"更好。', th: 'ดี! 👍 "감사합니다" สุภาพกว่าสำหรับคนแปลกหน้า', vi: 'Tốt! 👍 "감사합니다" lịch sự hơn với người lạ.', es: '¡Bien! 👍 "감사합니다" es más formal.' }, nextSceneId: 's1e1-scene5' },
      ],
      teaching: {
        vocabulary: [{ korean: '감사합니다', romanization: 'gamsahamnida', meaning: { en: 'Thank you (formal)', ja: 'ありがとうございます', zh: '谢谢(正式)', th: 'ขอบคุณครับ/ค่ะ', vi: 'Cảm ơn (trang trọng)', es: 'Gracias (formal)' } }],
        grammar: { en: "'감사합니다' is the formal way. '고마워요' is casual. Use 감사합니다 with strangers and elders.", ja: "「감사합니다」はフォーマル。「고마워요」はカジュアル。知らない人や年上に使おう。", zh: "'감사합니다'是正式说法。'고마워요'较随意。对陌生人和长辈用감사합니다。", th: "'감사합니다' เป็นทางการ '고마워요' ไม่เป็นทางการ ใช้ 감사합니다 กับคนแปลกหน้าและผู้อาวุโส", vi: "'감사합니다' trang trọng. '고마워요' thân mật. Dùng 감사합니다 với người lạ và người lớn tuổi.", es: "'감사합니다' es formal. '고마워요' es casual. Usa 감사합니다 con desconocidos y mayores." },
      },
    },
    // Scene 5: Taxi ride conversation
    {
      id: 's1e1-scene5',
      background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      character: { name: '택시 기사', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' },
      dialogue: {
        en: 'The taxi driver asks: "한국 처음이에요?" (Is this your first time in Korea?)',
        ja: 'タクシー運転手：「한국 처음이에요?」（韓国は初めてですか？）',
        zh: '出租车司机问："한국 처음이에요?"（第一次来韩国吗？）',
        th: 'คนขับแท็กซี่ถาม: "한국 처음이에요?" (มาเกาหลีครั้งแรกเหรอคะ/ครับ?)',
        vi: 'Tài xế taxi hỏi: "한국 처음이에요?" (Lần đầu đến Hàn Quốc hả?)',
        es: 'El taxista pregunta: "한국 처음이에요?" (¿Es su primera vez en Corea?)',
      },
      choices: [
        { id: 's1e1-c3a', korean: '네, 처음이에요!', romanization: 'Ne, cheoeumieyo!', translation: { en: 'Yes, it\'s my first time!', ja: 'はい、初めてです！', zh: '是的，第一次！', th: 'ใช่ค่ะ/ครับ ครั้งแรก!', vi: 'Vâng, lần đầu tiên!', es: '¡Sí, es mi primera vez!' }, correctness: 'perfect', feedback: { en: "'처음' means 'first time'. Add '이에요' to make a statement!", ja: '「처음」は「初めて」の意味。「이에요」を付けて文にしよう！', zh: '"처음"是"第一次"的意思。加"이에요"造句！', th: '"처음" แปลว่า "ครั้งแรก" เติม "이에요" เพื่อสร้างประโยค!', vi: '"처음" nghĩa là "lần đầu". Thêm "이에요" để tạo câu!', es: '"처음" significa "primera vez". ¡Añade "이에요" para formar una oración!' }, nextSceneId: 's1e1-scene6' },
        { id: 's1e1-c3b', korean: '두 번째예요', romanization: 'Du beonjjaeyeyo', translation: { en: 'It\'s my second time', ja: '2回目です', zh: '第二次了', th: 'ครั้งที่สองค่ะ/ครับ', vi: 'Lần thứ hai rồi', es: 'Es mi segunda vez' }, correctness: 'good', feedback: { en: "'번째' is used to count ordinal numbers. '두 번째' = second time!", ja: '「번째」は序数を数える時に使う。「두 번째」= 2回目！', zh: '"번째"用于序数。"두 번째"= 第二次！', th: '"번째" ใช้นับลำดับ "두 번째" = ครั้งที่สอง!', vi: '"번째" dùng để đếm thứ tự. "두 번째" = lần thứ hai!', es: '"번째" se usa para números ordinales. "두 번째" = ¡segunda vez!' }, nextSceneId: 's1e1-scene6' },
      ],
      teaching: {
        vocabulary: [
          { korean: '처음', romanization: 'cheoeum', meaning: { en: 'First time', ja: '初めて', zh: '第一次', th: 'ครั้งแรก', vi: 'Lần đầu tiên', es: 'Primera vez' } },
          { korean: '번째', romanization: 'beonjjae', meaning: { en: 'Ordinal counter (-th)', ja: '番目', zh: '第~次', th: 'ลำดับที่', vi: 'Thứ (đếm)', es: 'Contador ordinal' } },
          { korean: '한국', romanization: 'hanguk', meaning: { en: 'Korea', ja: '韓国', zh: '韩国', th: 'เกาหลี', vi: 'Hàn Quốc', es: 'Corea' } },
        ],
        grammar: { en: "'처음이에요' = 처음(first) + 이에요(is/am). '-이에요/예요' is the polite copula ('to be').", ja: "「처음이에요」= 처음(初めて) + 이에요(です)。「-이에요/예요」は丁寧な「だ」。", zh: "'처음이에요' = 처음(第一次) + 이에요(是)。'-이에요/예요'是礼貌的系动词。", th: "'처음이에요' = 처음(ครั้งแรก) + 이에요(เป็น/คือ) '-이에요/예요' คือคำกริยาเชื่อมสุภาพ", vi: "'처음이에요' = 처음(lần đầu) + 이에요(là). '-이에요/예요' là trợ từ liên kết lịch sự.", es: "'처음이에요' = 처음(primera vez) + 이에요(es/soy). '-이에요/예요' es la cópula cortés." },
      },
    },
    // Scene 6: Taxi fare
    {
      id: 's1e1-scene6',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      character: { name: '택시 기사', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' },
      dialogue: {
        en: 'The taxi driver says: "다 왔어요. 사만오천 원이에요." (We\'re here. It\'s 45,000 won.)',
        ja: 'タクシー運転手：「다 왔어요. 사만오천 원이에요.」（着きましたよ。45,000ウォンです。）',
        zh: '出租车司机说："다 왔어요. 사만오천 원이에요."（到了。45,000韩元。）',
        th: 'คนขับแท็กซี่พูด: "다 왔어요. 사만오천 원이에요." (ถึงแล้วค่ะ/ครับ 45,000 วอน)',
        vi: 'Tài xế taxi nói: "다 왔어요. 사만오천 원이에요." (Đến rồi. 45,000 won.)',
        es: 'El taxista dice: "다 왔어요. 사만오천 원이에요." (Llegamos. Son 45,000 won.)',
      },
      choices: [
        { id: 's1e1-c4a', korean: '얼마예요?', romanization: 'Eolmayeyo?', translation: { en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', th: 'เท่าไหร่คะ/ครับ?', vi: 'Bao nhiêu?', es: '¿Cuánto cuesta?' }, correctness: 'good', feedback: { en: "'얼마예요?' is very useful! But the driver already said the price. Listen carefully!", ja: '「얼마예요?」はとても便利！でも運転手はもう金額を言ったよ。よく聞いて！', zh: '"얼마예요?"很实用！但司机已经说了价格，注意听！', th: '"얼마예요?" ใช้ได้ดี! แต่คนขับบอกราคาแล้ว ฟังดีๆ นะ!', vi: '"얼마예요?" rất hữu ích! Nhưng tài xế đã nói giá rồi. Lắng nghe kỹ!', es: '"얼마예요?" es muy útil! Pero el conductor ya dijo el precio. ¡Escucha bien!' }, nextSceneId: 's1e1-scene4' },
        { id: 's1e1-c4b', korean: '네, 여기 있어요', romanization: 'Ne, yeogi isseoyo', translation: { en: 'Yes, here you go', ja: 'はい、ここにあります', zh: '好的，给您', th: 'ค่ะ/ครับ นี่ค่ะ/ครับ', vi: 'Vâng, đây ạ', es: 'Sí, aquí tiene' }, correctness: 'perfect', feedback: { en: "'여기 있어요' means 'here it is' - perfect for handing over payment!", ja: '「여기 있어요」は「ここにあります」- 支払いにぴったり！', zh: '"여기 있어요"是"给您"- 付款时完美！', th: '"여기 있어요" แปลว่า "นี่ค่ะ/ครับ" - เหมาะสำหรับจ่ายเงิน!', vi: '"여기 있어요" nghĩa là "đây ạ" - hoàn hảo khi đưa tiền!', es: '"여기 있어요" significa "aquí tiene" - ¡perfecto para pagar!' }, nextSceneId: 's1e1-scene4' },
      ],
      teaching: {
        vocabulary: [
          { korean: '얼마예요', romanization: 'eolmayeyo', meaning: { en: 'How much is it?', ja: 'いくらですか', zh: '多少钱', th: 'เท่าไหร่', vi: 'Bao nhiêu', es: '¿Cuánto cuesta?' } },
          { korean: '원', romanization: 'won', meaning: { en: 'Korean won (currency)', ja: 'ウォン（通貨）', zh: '韩元（货币）', th: 'วอน (สกุลเงิน)', vi: 'Won (tiền tệ)', es: 'Won coreano (moneda)' } },
          { korean: '여기', romanization: 'yeogi', meaning: { en: 'Here', ja: 'ここ', zh: '这里', th: 'ที่นี่', vi: 'Đây', es: 'Aquí' } },
        ],
        grammar: { en: "'얼마예요?' = 얼마(how much) + 예요(is). Use this anywhere to ask prices!", ja: "「얼마예요?」= 얼마(いくら) + 예요(です)。どこでも値段を聞ける！", zh: "'얼마예요?' = 얼마(多少) + 예요(是)。到处都能用来问价格！", th: "'얼마예요?' = 얼마(เท่าไหร่) + 예요(คือ) ใช้ถามราคาได้ทุกที่!", vi: "'얼마예요?' = 얼마(bao nhiêu) + 예요(là). Dùng hỏi giá ở bất cứ đâu!", es: "'얼마예요?' = 얼마(cuánto) + 예요(es). ¡Úsalo en cualquier lugar para preguntar precios!" },
      },
    },
    {
      id: 's1e1-scene4',
      background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
      character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' },
      dialogue: {
        en: "Amazing! 🎉 You learned:\n✅ '가주세요' - Please take me to\n✅ '감사합니다' - Thank you\n✅ '처음이에요' - It's my first time\n✅ '얼마예요?' - How much?\n\nYou earned the '✈️ Airport Master' badge!",
        ja: 'すごい！🎉 学んだこと：\n✅「가주세요」- 行ってください\n✅「감사합니다」- ありがとう\n✅「처음이에요」- 初めてです\n✅「얼마예요?」- いくらですか？\n\n「✈️ 空港マスター」バッジ獲得！',
        zh: '太棒了！🎉 你学到了：\n✅ "가주세요" - 请去\n✅ "감사합니다" - 谢谢\n✅ "처음이에요" - 第一次\n✅ "얼마예요?" - 多少钱？\n\n获得"✈️ 机场达人"徽章！',
        th: 'เก่งมาก! 🎉 คุณเรียนรู้:\n✅ "가주세요" - กรุณาพาไป\n✅ "감사합니다" - ขอบคุณ\n✅ "처음이에요" - ครั้งแรก\n✅ "얼마예요?" - เท่าไหร่?\n\nได้รับเหรียญ "✈️ เซียนสนามบิน"!',
        vi: 'Tuyệt vời! 🎉 Bạn đã học:\n✅ "가주세요" - Làm ơn đưa đến\n✅ "감사합니다" - Cảm ơn\n✅ "처음이에요" - Lần đầu tiên\n✅ "얼마예요?" - Bao nhiêu?\n\nNhận huy hiệu "✈️ Bậc thầy sân bay"!',
        es: '¡Increíble! 🎉 Aprendiste:\n✅ "가주세요" - Por favor lléveme\n✅ "감사합니다" - Gracias\n✅ "처음이에요" - Es mi primera vez\n✅ "얼마예요?" - ¿Cuánto cuesta?\n\n¡Obtuviste "✈️ Maestro del aeropuerto"!',
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
    // Scene 1: Lobby arrival (narration)
    {
      id: 's1e2-scene1',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' },
      dialogue: {
        en: "You arrived at the hotel in Myeongdong! 🏨 It looks modern and cozy. Let's go to the front desk and check in!",
        ja: '明洞のホテルに着いたよ！🏨 モダンで居心地が良さそう。フロントに行ってチェックインしよう！',
        zh: '你到达了明洞的酒店！🏨 看起来很现代很舒适。去前台办理入住吧！',
        th: 'คุณมาถึงโรงแรมในเมียงดงแล้ว! 🏨 ดูทันสมัยและน่าอยู่ ไปที่เคาน์เตอร์เช็คอินกันเถอะ!',
        vi: 'Bạn đã đến khách sạn ở Myeongdong! 🏨 Trông hiện đại và ấm cúng. Hãy đến quầy lễ tân nhận phòng!',
        es: '¡Llegaste al hotel en Myeongdong! 🏨 Se ve moderno y acogedor. ¡Vamos a la recepción a registrarnos!',
      },
      nextSceneId: 's1e2-scene2',
    },
    // Scene 2: Check-in conversation
    {
      id: 's1e2-scene2',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'happy' },
      dialogue: {
        en: '"안녕하세요! 체크인하시겠어요?" (Hello! Would you like to check in?)',
        ja: '「안녕하세요! 체크인하시겠어요?」（こんにちは！チェックインですか？）',
        zh: '"안녕하세요! 체크인하시겠어요?"（您好！要办理入住吗？）',
        th: '"안녕하세요! 체크인하시겠어요?" (สวัสดีค่ะ! เช็คอินไหมคะ?)',
        vi: '"안녕하세요! 체크인하시겠어요?" (Xin chào! Bạn muốn nhận phòng?)',
        es: '"안녕하세요! 체크인하시겠어요?" (¡Hola! ¿Desea registrarse?)',
      },
      choices: [
        { id: 's1e2-c1a', korean: '네, 예약했어요', romanization: 'Ne, yeyakhaesseoyo', translation: { en: 'Yes, I have a reservation', ja: 'はい、予約しました', zh: '是的，我预约了', th: 'ใช่ค่ะ/ครับ จองไว้แล้ว', vi: 'Vâng, tôi đã đặt phòng', es: 'Sí, tengo reserva' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '예약했어요' means 'I made a reservation'.", ja: '完璧！🌟「예약했어요」は「予約しました」の意味。', zh: '完美！🌟"예약했어요"意思是"我预约了"。', th: 'สมบูรณ์แบบ! 🌟 "예약했어요" แปลว่า "จองไว้แล้ว"', vi: 'Hoàn hảo! 🌟 "예약했어요" nghĩa là "đã đặt phòng".', es: '¡Perfecto! 🌟 "예약했어요" significa "hice una reserva".' }, nextSceneId: 's1e2-scene3' },
        { id: 's1e2-c1b', korean: '체크인이요', romanization: 'Chekiniyo', translation: { en: 'Check-in please', ja: 'チェックインです', zh: '入住', th: 'เช็คอินค่ะ/ครับ', vi: 'Nhận phòng ạ', es: 'Registro por favor' }, correctness: 'good', feedback: { en: "Good! 👍 Works but mentioning reservation is clearer.", ja: 'いいね！👍 予約について言うともっと明確！', zh: '不错！👍 但提到预约更清楚。', th: 'ดี! 👍 แต่บอกว่าจองไว้ชัดเจนกว่า', vi: 'Tốt! 👍 Nhưng nói có đặt phòng rõ hơn.', es: '¡Bien! 👍 Pero mencionar la reserva es más claro.' }, nextSceneId: 's1e2-scene3' },
      ],
      teaching: {
        vocabulary: [
          { korean: '예약', romanization: 'yeyak', meaning: { en: 'Reservation', ja: '予約', zh: '预约', th: 'การจอง', vi: 'Đặt phòng', es: 'Reserva' } },
          { korean: '체크인', romanization: 'chek-in', meaning: { en: 'Check-in', ja: 'チェックイン', zh: '入住', th: 'เช็คอิน', vi: 'Nhận phòng', es: 'Registro' } },
          { korean: '하다', romanization: 'hada', meaning: { en: 'To do', ja: 'する', zh: '做', th: 'ทำ', vi: 'Làm', es: 'Hacer' } },
        ],
        grammar: {
          en: "'예약했어요' = 예약(reservation) + 하다(to do) → 했어요(did). '-했어요' is past tense polite. 하다 → 해요(present) → 했어요(past).",
          ja: "「예약했어요」= 예약(予約) + 하다(する) → 했어요(しました)。「-했어요」は丁寧な過去形。하다 → 해요(現在) → 했어요(過去)。",
          zh: "'예약했어요' = 예약(预约) + 하다(做) → 했어요(做了)。'-했어요'是礼貌过去式。하다 → 해요(现在) → 했어요(过去)。",
          th: "'예약했어요' = 예약(การจอง) + 하다(ทำ) → 했어요(ทำแล้ว) '-했어요' คืออดีตกาลสุภาพ 하다 → 해요(ปัจจุบัน) → 했어요(อดีต)",
          vi: "'예약했어요' = 예약(đặt chỗ) + 하다(làm) → 했어요(đã làm). '-했어요' là quá khứ lịch sự. 하다 → 해요(hiện tại) → 했어요(quá khứ).",
          es: "'예약했어요' = 예약(reserva) + 하다(hacer) → 했어요(hice). '-했어요' es pasado cortés. 하다 → 해요(presente) → 했어요(pasado).",
        },
      },
    },
    // Scene 3: Passport presentation
    {
      id: 's1e2-scene3',
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'happy' },
      dialogue: {
        en: '"성함이 어떻게 되세요? 여권 보여주세요." (What is your name? Please show me your passport.)',
        ja: '「성함이 어떻게 되세요? 여권 보여주세요.」（お名前は？パスポートを見せてください。）',
        zh: '"성함이 어떻게 되세요? 여권 보여주세요."（请问贵姓？请出示护照。）',
        th: '"성함이 어떻게 되세요? 여권 보여주세요." (ชื่ออะไรคะ? ขอดูพาสปอร์ตค่ะ)',
        vi: '"성함이 어떻게 되세요? 여권 보여주세요." (Quý danh là gì? Xin cho xem hộ chiếu.)',
        es: '"성함이 어떻게 되세요? 여권 보여주세요." (¿Cuál es su nombre? Muestre su pasaporte.)',
      },
      choices: [
        { id: 's1e2-c2a', korean: '여기 있어요', romanization: 'Yeogi isseoyo', translation: { en: 'Here it is', ja: 'ここにあります', zh: '在这里', th: 'อยู่นี่ค่ะ/ครับ', vi: 'Đây ạ', es: 'Aquí tiene' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '여기 있어요' is great for handing something over!", ja: '完璧！🌟「여기 있어요」は何かを渡す時にぴったり！', zh: '完美！🌟"여기 있어요"非常适合递东西时用！', th: 'สมบูรณ์แบบ! 🌟 "여기 있어요" ใช้ตอนส่งของให้คนอื่น!', vi: 'Hoàn hảo! 🌟 "여기 있어요" dùng khi đưa gì cho ai!', es: '¡Perfecto! 🌟 "여기 있어요" es genial para entregar algo!' }, nextSceneId: 's1e2-scene4' },
        { id: 's1e2-c2b', korean: '네, 잠깐만요', romanization: 'Ne, jamkkanmanyo', translation: { en: 'Yes, just a moment', ja: 'はい、ちょっと待ってください', zh: '好的，请稍等', th: 'ค่ะ/ครับ รอสักครู่', vi: 'Vâng, chờ một chút', es: 'Sí, un momento' }, correctness: 'good', feedback: { en: "Good! 👍 '잠깐만요' means 'just a moment' - useful phrase!", ja: 'いいね！👍「잠깐만요」は「ちょっと待って」- 便利！', zh: '不错！👍 "잠깐만요"是"等一下"- 很实用！', th: 'ดี! 👍 "잠깐만요" แปลว่า "รอสักครู่" - ใช้ได้บ่อย!', vi: 'Tốt! 👍 "잠깐만요" nghĩa là "chờ chút" - rất hữu ích!', es: '¡Bien! 👍 "잠깐만요" significa "un momento" - ¡muy útil!' }, nextSceneId: 's1e2-scene4' },
      ],
      teaching: {
        vocabulary: [
          { korean: '성함', romanization: 'seongham', meaning: { en: 'Name (honorific)', ja: 'お名前（尊敬語）', zh: '姓名（敬语）', th: 'ชื่อ (คำสุภาพ)', vi: 'Quý danh (kính ngữ)', es: 'Nombre (honorífico)' } },
          { korean: '여권', romanization: 'yeogwon', meaning: { en: 'Passport', ja: 'パスポート', zh: '护照', th: 'พาสปอร์ต', vi: 'Hộ chiếu', es: 'Pasaporte' } },
          { korean: '여기 있어요', romanization: 'yeogi isseoyo', meaning: { en: 'Here it is', ja: 'ここにあります', zh: '在这里', th: 'อยู่นี่ค่ะ/ครับ', vi: 'Đây ạ', es: 'Aquí tiene' } },
          { korean: '잠깐만요', romanization: 'jamkkanmanyo', meaning: { en: 'Just a moment', ja: 'ちょっと待って', zh: '请稍等', th: 'รอสักครู่', vi: 'Chờ một chút', es: 'Un momento' } },
        ],
        grammar: {
          en: "'성함' is the honorific form of '이름'(name). In formal settings like hotels, Koreans use '성함이 어떻게 되세요?' instead of '이름이 뭐예요?'",
          ja: "「성함」は「이름」（名前）の尊敬語。ホテルなどフォーマルな場面では「이름이 뭐예요?」の代わりに「성함이 어떻게 되세요?」を使う。",
          zh: "'성함'是'이름'(名字)的敬语。在酒店等正式场合，韩国人用'성함이 어떻게 되세요?'而不是'이름이 뭐예요?'",
          th: "'성함' คือคำสุภาพของ '이름'(ชื่อ) ในสถานที่เป็นทางการเช่นโรงแรม คนเกาหลีใช้ '성함이 어떻게 되세요?' แทน '이름이 뭐예요?'",
          vi: "'성함' là dạng kính ngữ của '이름'(tên). Ở nơi trang trọng như khách sạn, người Hàn dùng '성함이 어떻게 되세요?' thay vì '이름이 뭐예요?'",
          es: "'성함' es la forma honorífica de '이름'(nombre). En hoteles, los coreanos usan '성함이 어떻게 되세요?' en vez de '이름이 뭐예요?'",
        },
      },
    },
    // Scene 4: Number of nights
    {
      id: 's1e2-scene4',
      background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'happy' },
      dialogue: {
        en: '"몇 박이세요?" (How many nights?)',
        ja: '「몇 박이세요?」（何泊ですか？）',
        zh: '"몇 박이세요?"（住几晚？）',
        th: '"몇 박이세요?" (กี่คืนคะ?)',
        vi: '"몇 박이세요?" (Mấy đêm?)',
        es: '"몇 박이세요?" (¿Cuántas noches?)',
      },
      choices: [
        { id: 's1e2-c3a', korean: '삼 박이요', romanization: 'Sam bagiyo', translation: { en: 'Three nights', ja: '3泊です', zh: '三晚', th: 'สามคืนค่ะ/ครับ', vi: 'Ba đêm', es: 'Tres noches' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '삼 박' = three nights! Korean uses Sino-Korean numbers for counting nights.", ja: '完璧！🌟「삼 박」= 3泊！宿泊数には漢数字を使う。', zh: '完美！🌟"삼 박"= 三晚！韩语用汉字数词数住宿天数。', th: 'สมบูรณ์แบบ! 🌟 "삼 박" = สามคืน! ภาษาเกาหลีใช้ตัวเลขจีน-เกาหลีนับคืน', vi: 'Hoàn hảo! 🌟 "삼 박" = ba đêm! Tiếng Hàn dùng số Hán-Hàn để đếm đêm.', es: '¡Perfecto! 🌟 "삼 박" = tres noches. ¡Se usan números sino-coreanos!' }, nextSceneId: 's1e2-scene5' },
      ],
      teaching: {
        vocabulary: [
          { korean: '박', romanization: 'bak', meaning: { en: 'Night (counter)', ja: '泊', zh: '晚', th: 'คืน', vi: 'Đêm', es: 'Noche' } },
          { korean: '몇', romanization: 'myeot', meaning: { en: 'How many', ja: 'いくつ', zh: '几', th: 'กี่', vi: 'Mấy', es: 'Cuántos' } },
          { korean: '일/이/삼', romanization: 'il/i/sam', meaning: { en: 'One/Two/Three (Sino-Korean)', ja: '一/二/三（漢数字）', zh: '一/二/三（汉字数词）', th: 'หนึ่ง/สอง/สาม (จีน-เกาหลี)', vi: 'Một/Hai/Ba (Hán-Hàn)', es: 'Uno/Dos/Tres (sino-coreano)' } },
        ],
        grammar: {
          en: "Korean has TWO number systems! Sino-Korean (일,이,삼...) for dates, money, phone numbers, nights. Native Korean (하나,둘,셋...) for counting objects, age, hours.",
          ja: "韓国語には2つの数字体系がある！漢数字（일,이,삼...）は日付、お金、電話番号、泊数に。固有数字（하나,둘,셋...）は物の数、年齢、時間に使う。",
          zh: "韩语有两套数字系统！汉字数词(일,이,삼...)用于日期、金额、电话号码、住宿天数。固有数词(하나,둘,셋...)用于数物品、年龄、小时。",
          th: "ภาษาเกาหลีมีระบบตัวเลข 2 แบบ! จีน-เกาหลี (일,이,삼...) สำหรับวันที่ เงิน เบอร์โทร คืน เกาหลีแท้ (하나,둘,셋...) สำหรับนับของ อายุ ชั่วโมง",
          vi: "Tiếng Hàn có HAI hệ thống số! Hán-Hàn (일,이,삼...) cho ngày, tiền, số điện thoại, đêm. Thuần Hàn (하나,둘,셋...) cho đếm đồ, tuổi, giờ.",
          es: "¡El coreano tiene DOS sistemas numéricos! Sino-coreano (일,이,삼...) para fechas, dinero, teléfonos, noches. Nativo (하나,둘,셋...) para contar objetos, edad, horas.",
        },
        culturalNote: {
          en: "💡 Hotel stays in Korea are counted as '박' (nights). '삼 박 사 일' means '3 nights 4 days'!",
          ja: '💡 韓国のホテル滞在は「박」（泊）で数える。「삼 박 사 일」は「3泊4日」！',
          zh: '💡 韩国酒店住宿用"박"(晚)计算。"삼 박 사 일"是"3晚4天"！',
          th: '💡 การพักโรงแรมในเกาหลีนับเป็น "박" (คืน) "삼 박 사 일" แปลว่า "3 คืน 4 วัน"!',
          vi: '💡 Khách sạn Hàn Quốc tính theo "박" (đêm). "삼 박 사 일" nghĩa là "3 đêm 4 ngày"!',
          es: '💡 ¡Las estancias en Corea se cuentan por "박" (noches). "삼 박 사 일" = 3 noches 4 días!',
        },
      },
    },
    // Scene 5: Room selection
    {
      id: 's1e2-scene5',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      character: { name: '호텔 직원', avatar: '👩‍💼', emotion: 'thinking' },
      dialogue: {
        en: '"시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?" (We have city view and ocean view. Which room would you like?)',
        ja: '「시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?」（シティビューとオーシャンビューがあります。どの部屋にしますか？）',
        zh: '"시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?"（有城景和海景。您想要哪种房间？）',
        th: '"시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?" (มีวิวเมืองและวิวทะเล ต้องการห้องแบบไหนคะ?)',
        vi: '"시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?" (Có phòng view thành phố và view biển. Bạn muốn phòng nào?)',
        es: '"시티뷰와 오션뷰가 있어요. 어떤 방으로 하시겠어요?" (Tenemos vista a la ciudad y al mar. ¿Qué habitación prefiere?)',
      },
      choices: [
        { id: 's1e2-c4a', korean: '오션뷰로 주세요', romanization: 'Osyeonbyuro juseyo', translation: { en: 'Ocean view please', ja: 'オーシャンビューでお願いします', zh: '请给我海景房', th: 'ขอวิวทะเลค่ะ/ครับ', vi: 'Cho phòng view biển', es: 'Vista al mar por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '-로 주세요' means 'please give me (this option)'. Very useful pattern!", ja: '完璧！🌟「-로 주세요」は「〜でお願いします」。とても便利なパターン！', zh: '完美！🌟"-로 주세요"是"请给我（这个选择）"。非常有用！', th: 'สมบูรณ์แบบ! 🌟 "-로 주세요" แปลว่า "ขอ...ค่ะ/ครับ" รูปแบบที่ใช้บ่อยมาก!', vi: 'Hoàn hảo! 🌟 "-로 주세요" nghĩa là "cho tôi (lựa chọn này)". Mẫu câu rất hữu ích!', es: '¡Perfecto! 🌟 "-로 주세요" significa "deme (esta opción)". ¡Muy útil!' }, nextSceneId: 's1e2-scene6' },
        { id: 's1e2-c4b', korean: '시티뷰로 할게요', romanization: 'Sitibyuro halgeyo', translation: { en: "I'll take the city view", ja: 'シティビューにします', zh: '我要城景房', th: 'ขอวิวเมืองค่ะ/ครับ', vi: 'Tôi chọn view thành phố', es: 'Elijo la vista a la ciudad' }, correctness: 'perfect', feedback: { en: "Great choice! 🌟 '-로 할게요' means 'I'll go with'. Both patterns work perfectly!", ja: 'いい選択！🌟「-로 할게요」は「〜にします」。どちらのパターンも完璧！', zh: '好选择！🌟"-로 할게요"是"我选择"。两种说法都对！', th: 'เลือกดี! 🌟 "-로 할게요" แปลว่า "ขอเลือก..." ทั้งสองรูปแบบใช้ได้ดี!', vi: 'Lựa chọn tốt! 🌟 "-로 할게요" nghĩa là "tôi chọn". Cả hai mẫu câu đều đúng!', es: '¡Buena elección! 🌟 "-로 할게요" significa "elegiré". ¡Ambos patrones funcionan!' }, nextSceneId: 's1e2-scene6' },
      ],
      teaching: {
        vocabulary: [
          { korean: '방', romanization: 'bang', meaning: { en: 'Room', ja: '部屋', zh: '房间', th: 'ห้อง', vi: 'Phòng', es: 'Habitación' } },
          { korean: '오션뷰', romanization: 'osyeonbyu', meaning: { en: 'Ocean view', ja: 'オーシャンビュー', zh: '海景', th: 'วิวทะเล', vi: 'View biển', es: 'Vista al mar' } },
          { korean: '어떤', romanization: 'eotteon', meaning: { en: 'Which/What kind', ja: 'どの', zh: '哪种', th: 'แบบไหน', vi: 'Loại nào', es: 'Cuál/Qué tipo' } },
        ],
        grammar: {
          en: "'-로/으로 주세요' = please give me [choice]. Use '-로' after vowels/ㄹ, '-으로' after consonants. Examples: 커피로 주세요 (coffee please), 큰 것으로 주세요 (the big one please).",
          ja: "「-로/으로 주세요」= 〜でお願いします。母音/ㄹの後は「-로」、子音の後は「-으로」。例：커피로 주세요（コーヒーで）、큰 것으로 주세요（大きいので）。",
          zh: "'-로/으로 주세요' = 请给我（选择）。元音/ㄹ后用'-로'，辅音后用'-으로'。例：커피로 주세요（请给咖啡）、큰 것으로 주세요（请给大的）。",
          th: "'-로/으로 주세요' = ขอ...ค่ะ/ครับ ใช้ '-로' หลังสระ/ㄹ, '-으로' หลังพยัญชนะ เช่น 커피로 주세요 (ขอกาแฟ), 큰 것으로 주세요 (ขออันใหญ่)",
          vi: "'-로/으로 주세요' = cho tôi [lựa chọn]. Dùng '-로' sau nguyên âm/ㄹ, '-으로' sau phụ âm. Ví dụ: 커피로 주세요 (cho cà phê), 큰 것으로 주세요 (cho cái lớn).",
          es: "'-로/으로 주세요' = deme [opción]. Usa '-로' después de vocal/ㄹ, '-으로' después de consonante. Ej: 커피로 주세요 (café), 큰 것으로 주세요 (el grande).",
        },
      },
    },
    // Scene 6: KEI Summary
    {
      id: 's1e2-scene6',
      background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
      character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' },
      dialogue: {
        en: "Great job! 🎉 You learned:\n✅ '예약했어요' - I made a reservation\n✅ '여권' - Passport\n✅ '여기 있어요' - Here it is\n✅ '삼 박' - Three nights\n✅ '오션뷰로 주세요' - Ocean view please\n\nYou earned the '🏨 Hotel Guest' badge!",
        ja: 'よくできた！🎉 学んだこと：\n✅「예약했어요」- 予約しました\n✅「여권」- パスポート\n✅「여기 있어요」- ここにあります\n✅「삼 박」- 3泊\n✅「오션뷰로 주세요」- オーシャンビューで\n\n「🏨 ホテルゲスト」バッジ獲得！',
        zh: '做得好！🎉 你学到了：\n✅ "예약했어요" - 我预约了\n✅ "여권" - 护照\n✅ "여기 있어요" - 在这里\n✅ "삼 박" - 三晚\n✅ "오션뷰로 주세요" - 请给海景房\n\n获得"🏨 酒店客人"徽章！',
        th: 'เก่งมาก! 🎉 คุณเรียนรู้:\n✅ "예약했어요" - จองไว้แล้ว\n✅ "여권" - พาสปอร์ต\n✅ "여기 있어요" - อยู่นี่ค่ะ/ครับ\n✅ "삼 박" - สามคืน\n✅ "오션뷰로 주세요" - ขอวิวทะเล\n\nได้รับเหรียญ "🏨 แขกโรงแรม"!',
        vi: 'Giỏi lắm! 🎉 Bạn đã học:\n✅ "예약했어요" - Đã đặt phòng\n✅ "여권" - Hộ chiếu\n✅ "여기 있어요" - Đây ạ\n✅ "삼 박" - Ba đêm\n✅ "오션뷰로 주세요" - Cho view biển\n\nNhận huy hiệu "🏨 Khách khách sạn"!',
        es: '¡Bien hecho! 🎉 Aprendiste:\n✅ "예약했어요" - Hice reserva\n✅ "여권" - Pasaporte\n✅ "여기 있어요" - Aquí tiene\n✅ "삼 박" - Tres noches\n✅ "오션뷰로 주세요" - Vista al mar\n\n¡Obtuviste "🏨 Huésped"!',
      },
    },
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
    { id: 's1e3-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Time for Korean cafe culture! ☕ Korea has more cafes per capita than almost any country. Let's order your first coffee! Koreans love iced Americanos - even in winter!", ja: '韓国のカフェ文化を体験しよう！☕ 韓国は一人当たりのカフェ数が世界トップクラス。初めてのコーヒーを注文しよう！韓国人は冬でもアイスアメリカーノが大好き！', zh: '来体验韩国的咖啡文化吧！☕ 韩国的人均咖啡店数量几乎是世界最多的。来点你的第一杯咖啡！韩国人连冬天都爱喝冰美式！', th: 'มาสัมผัสวัฒนธรรมคาเฟ่เกาหลีกัน! ☕ เกาหลีมีคาเฟ่ต่อหัวมากที่สุดในโลก มาสั่งกาแฟแก้วแรกกัน! คนเกาหลีรักอเมริกาโน่เย็น แม้แต่หน้าหนาว!', vi: 'Khám phá văn hóa cà phê Hàn Quốc! ☕ Hàn Quốc có nhiều quán cà phê bình quân đầu người nhất thế giới. Gọi ly cà phê đầu tiên nào! Người Hàn thích Americano đá - ngay cả mùa đông!', es: '¡Hora de la cultura del cafe coreano! ☕ Corea tiene mas cafeterias per capita que casi cualquier pais. ¡Pidamos tu primer cafe! ¡Los coreanos aman el Americano helado, incluso en invierno!' }, nextSceneId: 's1e3-scene2' },
    { id: 's1e3-scene2', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 주문하시겠어요?" (Hello! Would you like to order?)', ja: '「안녕하세요! 주문하시겠어요?」（こんにちは！ご注文は？）', zh: '"안녕하세요! 주문하시겠어요?"（您好！要点单吗？）', th: '"안녕하세요! 주문하시겠어요?" (สวัสดีค่ะ! สั่งไหมคะ?)', vi: '"안녕하세요! 주문하시겠어요?" (Xin chào! Bạn muốn gọi gì?)', es: '"안녕하세요! 주문하시겠어요?" (¡Hola! ¿Desea ordenar?)' }, choices: [
      { id: 's1e3-c1a', korean: '아메리카노 한 잔 주세요', romanization: 'Amerikano han jan juseyo', translation: { en: 'One Americano please', ja: 'アメリカーノ1杯ください', zh: '请给我一杯美式咖啡', th: 'ขออเมริกาโน่หนึ่งแก้วค่ะ/ครับ', vi: 'Cho tôi một ly Americano', es: 'Un Americano por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '한 잔' is the counter for drinks!", ja: '完璧！🌟「한 잔」は飲み物の数え方！', zh: '完美！🌟"한 잔"是饮料的量词！', th: 'สมบูรณ์แบบ! 🌟 "한 잔" คือลักษณนามสำหรับเครื่องดื่ม!', vi: 'Hoàn hảo! 🌟 "한 잔" là từ đếm cho đồ uống!', es: '¡Perfecto! 🌟 "한 잔" es el contador para bebidas!' }, nextSceneId: 's1e3-scene3' },
      { id: 's1e3-c1b', korean: '커피요', romanization: 'Keopiyo', translation: { en: 'Coffee please', ja: 'コーヒーです', zh: '咖啡', th: 'กาแฟค่ะ/ครับ', vi: 'Cà phê', es: 'Cafe por favor' }, correctness: 'good', feedback: { en: "Good! 👍 But be specific about what kind!", ja: 'いいね！👍 でも種類を言うともっと良い！', zh: '不错！👍 但要具体说什么类型！', th: 'ดี! 👍 แต่ระบุประเภทด้วยจะดีกว่า!', vi: 'Tốt! 👍 Nhưng nên nói cụ thể loại gì!', es: '¡Bien! 👍 ¡Pero se especifico!' }, nextSceneId: 's1e3-scene3' },
    ], teaching: { vocabulary: [{ korean: '주문', romanization: 'jumun', meaning: { en: 'Order', ja: '注文', zh: '点单', th: 'สั่ง', vi: 'Gọi món', es: 'Orden' } }, { korean: '잔', romanization: 'jan', meaning: { en: 'Cup/glass (counter)', ja: '杯', zh: '杯', th: 'แก้ว', vi: 'Ly', es: 'Taza' } }] } },
    { id: 's1e3-scene3', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'thinking' }, dialogue: { en: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (Ice or hot?)', ja: '「아이스로 드릴까요, 따뜻하게 드릴까요?」（アイスですか、ホットですか？）', zh: '"아이스로 드릴까요, 따뜻하게 드릴까요?"（冰的还是热的？）', th: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (เย็นหรือร้อนคะ?)', vi: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (Đá hay nóng?)', es: '"아이스로 드릴까요, 따뜻하게 드릴까요?" (¿Frio o caliente?)' }, choices: [
      { id: 's1e3-c2a', korean: '아이스로 주세요', romanization: 'Aiseuro juseyo', translation: { en: 'Iced please', ja: 'アイスでお願いします', zh: '冰的', th: 'เย็นค่ะ/ครับ', vi: 'Đá ạ', es: 'Frio por favor' }, correctness: 'perfect', feedback: { en: "Great! 🌟 Iced coffee is super popular in Korea!", ja: '素晴らしい！🌟 アイスコーヒーは韓国で大人気！', zh: '太棒了！🌟 冰咖啡在韩国很受欢迎！', th: 'เยี่ยม! 🌟 กาแฟเย็นฮิตมากในเกาหลี!', vi: 'Tuyệt! 🌟 Cà phê đá rất phổ biến ở Hàn!', es: '¡Genial! 🌟 ¡El cafe helado es muy popular!' }, nextSceneId: 's1e3-scene4' },
      { id: 's1e3-c2b', korean: '따뜻하게 주세요', romanization: 'Ttatteuthage juseyo', translation: { en: 'Hot please', ja: 'ホットでお願いします', zh: '热的', th: 'ร้อนค่ะ/ครับ', vi: 'Nóng ạ', es: 'Caliente por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 Hot coffee for a cozy day!", ja: '完璧！🌟 寒い日にホットコーヒー！', zh: '完美！🌟 热咖啡温暖身心！', th: 'สมบูรณ์แบบ! 🌟 กาแฟร้อนในวันเย็นๆ!', vi: 'Hoàn hảo! 🌟 Cà phê nóng cho ngày se lạnh!', es: '¡Perfecto! 🌟 ¡Cafe caliente para un dia acogedor!' }, nextSceneId: 's1e3-scene4' },
    ], teaching: { vocabulary: [{ korean: '아이스', romanization: 'aiseu', meaning: { en: 'Iced', ja: 'アイス', zh: '冰', th: 'เย็น', vi: 'Đá', es: 'Helado' } }, { korean: '따뜻하게', romanization: 'ttatteuthage', meaning: { en: 'Hot/warm', ja: 'ホット', zh: '热', th: 'ร้อน', vi: 'Nóng', es: 'Caliente' } }] } },
    { id: 's1e3-scene4', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'happy' }, dialogue: { en: '"사이즈 뭐로 하시겠어요?" (What size would you like?)', ja: '「사이즈 뭐로 하시겠어요?」（サイズはどうされますか？）', zh: '"사이즈 뭐로 하시겠어요?"（要什么尺寸的？）', th: '"사이즈 뭐로 하시겠어요?" (จะเอาไซส์ไหนคะ?)', vi: '"사이즈 뭐로 하시겠어요?" (Ban muốn size gì?)', es: '"사이즈 뭐로 하시겠어요?" (¿Que tamaño desea?)' }, choices: [
      { id: 's1e3-c3a', korean: '큰 사이즈로 주세요', romanization: 'Keun saizeuro juseyo', translation: { en: 'Large size please', ja: 'ラージサイズでお願いします', zh: '请给我大杯', th: 'ไซส์ใหญ่ค่ะ/ครับ', vi: 'Size lớn ạ', es: 'Tamaño grande por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '큰' means big/large - great choice!", ja: '完璧！🌟「큰」は大きいの意味 - いい選択！', zh: '完美！🌟"큰"是大的意思 - 好选择！', th: 'สมบูรณ์แบบ! 🌟 "큰" แปลว่าใหญ่ - เลือกดี!', vi: 'Hoàn hảo! 🌟 "큰" nghĩa là lớn - lựa chọn tuyệt!', es: '¡Perfecto! 🌟 "큰" significa grande - ¡buena eleccion!' }, nextSceneId: 's1e3-scene5' },
      { id: 's1e3-c3b', korean: '톨 사이즈로 주세요', romanization: 'Tol saizeuro juseyo', translation: { en: 'Tall size please', ja: 'トールサイズでお願いします', zh: '中杯', th: 'ไซส์ทอลค่ะ/ครับ', vi: 'Size tall ạ', es: 'Tamaño tall por favor' }, correctness: 'good', feedback: { en: "Good! 👍 '톨' comes from English 'tall' - Konglish is common in cafes!", ja: 'いいね！👍「톨」は英語の「tall」から - カフェではコングリッシュが一般的！', zh: '不错！👍"톨"来自英语"tall" - 咖啡店常用韩式英语！', th: 'ดี! 👍 "톨" มาจากภาษาอังกฤษ "tall" - คองลิชพบบ่อยในคาเฟ่!', vi: 'Tốt! 👍 "톨" từ tiếng Anh "tall" - Konglish phổ biến trong quán cafe!', es: '¡Bien! 👍 "톨" viene del ingles "tall" - ¡Konglish es comun en cafeterias!' }, nextSceneId: 's1e3-scene5' },
    ], teaching: { vocabulary: [{ korean: '사이즈', romanization: 'saijeu', meaning: { en: 'Size', ja: 'サイズ', zh: '尺寸', th: 'ไซส์', vi: 'Size', es: 'Tamaño' } }, { korean: '톨', romanization: 'tol', meaning: { en: 'Tall (Konglish)', ja: 'トール', zh: '中杯', th: 'ทอล', vi: 'Tall', es: 'Tall' } }, { korean: '큰', romanization: 'keun', meaning: { en: 'Big/Large', ja: '大きい', zh: '大', th: 'ใหญ่', vi: 'Lớn', es: 'Grande' } }] } },
    { id: 's1e3-scene5', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '바리스타', avatar: '👨‍🍳', emotion: 'happy' }, dialogue: { en: '"사천오백 원이에요. 카드 되나요?" (It\'s 4,500 won. Will you pay by card?)', ja: '「사천오백 원이에요. 카드 되나요?」（4,500ウォンです。カードで大丈夫ですか？）', zh: '"사천오백 원이에요. 카드 되나요?"（4500韩元。可以刷卡吗？）', th: '"사천오백 원이에요. 카드 되나요?" (สี่พันห้าร้อยวอนค่ะ จ่ายบัตรได้ไหมคะ?)', vi: '"사천오백 원이에요. 카드 되나요?" (4,500 won. Thanh toán bằng thẻ được không?)', es: '"사천오백 원이에요. 카드 되나요?" (Son 4,500 won. ¿Paga con tarjeta?)' }, choices: [
      { id: 's1e3-c4a', korean: '카드로 할게요', romanization: 'Kadeuro halgeyo', translation: { en: "I'll pay by card", ja: 'カードで払います', zh: '刷卡', th: 'จ่ายบัตรค่ะ/ครับ', vi: 'Thanh toán bằng thẻ', es: 'Pago con tarjeta' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 Card payment is everywhere in Korea - even street vendors!", ja: '完璧！🌟 韓国ではカード払いがどこでもOK - 屋台でも！', zh: '完美！🌟 韩国到处都能刷卡 - 连路边摊都可以！', th: 'สมบูรณ์แบบ! 🌟 จ่ายบัตรได้ทุกที่ในเกาหลี แม้แต่ร้านริมทาง!', vi: 'Hoàn hảo! 🌟 Thanh toán thẻ có ở khắp nơi tại Hàn - ngay cả hàng rong!', es: '¡Perfecto! 🌟 ¡El pago con tarjeta esta en todas partes en Corea!' }, nextSceneId: 's1e3-scene6' },
      { id: 's1e3-c4b', korean: '현금으로 할게요', romanization: 'Hyeongeumuro halgeyo', translation: { en: "I'll pay with cash", ja: '現金で払います', zh: '用现金', th: 'จ่ายเงินสดค่ะ/ครับ', vi: 'Thanh toán bằng tiền mặt', es: 'Pago en efectivo' }, correctness: 'good', feedback: { en: "Good! 👍 Cash works too, but most Koreans prefer card!", ja: 'いいね！👍 現金もOKだけど、韓国人はカード派が多い！', zh: '不错！👍 现金也行，但大多数韩国人更喜欢刷卡！', th: 'ดี! 👍 เงินสดก็ได้ แต่คนเกาหลีส่วนใหญ่ชอบบัตร!', vi: 'Tốt! 👍 Tiền mặt cũng được, nhưng người Hàn thích dùng thẻ hơn!', es: '¡Bien! 👍 ¡Efectivo tambien funciona, pero los coreanos prefieren tarjeta!' }, nextSceneId: 's1e3-scene6' },
    ], teaching: { vocabulary: [{ korean: '카드', romanization: 'kadeu', meaning: { en: 'Card', ja: 'カード', zh: '卡', th: 'บัตร', vi: 'Thẻ', es: 'Tarjeta' } }, { korean: '현금', romanization: 'hyeongeum', meaning: { en: 'Cash', ja: '現金', zh: '现金', th: 'เงินสด', vi: 'Tiền mặt', es: 'Efectivo' } }, { korean: '결제', romanization: 'gyeolje', meaning: { en: 'Payment', ja: '決済', zh: '结算', th: 'การชำระเงิน', vi: 'Thanh toán', es: 'Pago' } }] } },
    { id: 's1e3-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Awesome! 🎉 You ordered like a pro!\n✅ '아메리카노 한 잔' - One Americano\n✅ '아이스/따뜻하게' - Iced/Hot\n✅ '사이즈' - Size\n✅ '카드/현금' - Card/Cash\n\n💡 Culture tip: In Korean cafes, you get a 진동벨 (jindongbel) - a buzzer that vibrates when your order is ready!\n\nYou earned the '☕ Cafe Lover' badge!", ja: '素晴らしい！🎉 プロみたいに注文できた！\n✅「아메리카노 한 잔」- アメリカーノ1杯\n✅「아이스/따뜻하게」- アイス/ホット\n✅「사이즈」- サイズ\n✅「카드/현금」- カード/現金\n\n💡 文化ポイント：韓国のカフェでは진동벨（振動ベル）がもらえる - 注文ができたら振動で教えてくれるよ！\n\n「☕ カフェ好き」バッジ獲得！', zh: '太棒了！🎉 你像高手一样点单了！\n✅ "아메리카노 한 잔" - 一杯美式\n✅ "아이스/따뜻하게" - 冰/热\n✅ "사이즈" - 尺寸\n✅ "카드/현금" - 卡/现金\n\n💡 文化提示：在韩国咖啡店，你会拿到진동벨（震动铃）- 订单准备好时会震动提醒你！\n\n获得"☕ 咖啡爱好者"徽章！', th: 'เยี่ยม! 🎉 สั่งได้เหมือนมือโปร!\n✅ "아메리카노 한 잔" - อเมริกาโน่หนึ่งแก้ว\n✅ "아이스/따뜻하게" - เย็น/ร้อน\n✅ "사이즈" - ไซส์\n✅ "카드/현금" - บัตร/เงินสด\n\n💡 วัฒนธรรม: ในคาเฟ่เกาหลี คุณจะได้ 진동벨 (จินดงเบล) - เครื่องสั่นที่จะสั่นเมื่อออเดอร์เสร็จ!\n\nได้รับเหรียญ "☕ คนรักคาเฟ่"!', vi: 'Tuyệt vời! 🎉 Bạn gọi như dân chuyên!\n✅ "아메리카노 한 잔" - Một ly Americano\n✅ "아이스/따뜻하게" - Đá/Nóng\n✅ "사이즈" - Size\n✅ "카드/현금" - Thẻ/Tiền mặt\n\n💡 Mẹo văn hóa: Trong quán cà phê Hàn, bạn sẽ nhận được 진동벨 (jindongbel) - chuông rung khi đồ uống sẵn sàng!\n\nNhận huy hiệu "☕ Người yêu cà phê"!', es: '¡Genial! 🎉 ¡Ordenaste como un profesional!\n✅ "아메리카노 한 잔" - Un Americano\n✅ "아이스/따뜻하게" - Frio/Caliente\n✅ "사이즈" - Tamaño\n✅ "카드/현금" - Tarjeta/Efectivo\n\n💡 Dato cultural: En las cafeterias coreanas, recibes un 진동벨 (jindongbel) - un timbre que vibra cuando tu pedido esta listo!\n\n¡Obtuviste "☕ Amante del cafe"!' } },
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
    { id: 's1e4-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's take the subway to Hongdae! 🚇 The Seoul subway is color-coded and easy to use. You need a T-money card - it's a rechargeable transit card that works on buses and subways. Let's get one at a convenience store!", ja: '弘大まで地下鉄で行こう！🚇 ソウルの地下鉄は色分けされてて使いやすいよ。T-moneyカードが必要 - バスと地下鉄で使えるチャージ式カードだよ。コンビニで買おう！', zh: '坐地铁去弘大吧！🚇 首尔地铁有颜色区分，很容易使用。你需要一张T-money卡 - 这是一张可充值的交通卡，公交和地铁都能用。去便利店买一张吧！', th: 'ไปฮงแดด้วยรถไฟใต้ดินกัน! 🚇 รถไฟใต้ดินโซลแบ่งสีและใช้ง่าย ต้องมีบัตร T-money - บัตรเติมเงินใช้ได้ทั้งรถเมล์และรถไฟใต้ดิน ไปซื้อที่ร้านสะดวกซื้อกัน!', vi: 'Đi tàu điện ngầm đến Hongdae! 🚇 Tàu điện Seoul phân màu và dễ sử dụng. Bạn cần thẻ T-money - thẻ giao thông nạp tiền dùng cho xe buýt và tàu điện. Mua ở cửa hàng tiện lợi nhé!', es: '¡Vamos en metro a Hongdae! 🚇 El metro de Seul esta codificado por colores. Necesitas una tarjeta T-money - una tarjeta de transito recargable. ¡Compremos una en la tienda de conveniencia!' }, nextSceneId: 's1e4-scene2' },
    { id: 's1e4-scene2', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '편의점 직원', avatar: '👨', emotion: 'happy' }, dialogue: { en: 'You enter a convenience store near the subway station. The clerk greets you: "어서오세요!" (Welcome!)', ja: '地下鉄駅近くのコンビニに入った。店員が挨拶：「어서오세요!」（いらっしゃいませ！）', zh: '你走进地铁站附近的便利店。店员打招呼："어서오세요!"（欢迎光临！）', th: 'คุณเข้าร้านสะดวกซื้อใกล้สถานีรถไฟใต้ดิน พนักงานทักทาย: "어서오세요!" (ยินดีต้อนรับค่ะ!)', vi: 'Bạn vào cửa hàng tiện lợi gần ga tàu. Nhân viên chào: "어서오세요!" (Xin chào!)', es: 'Entras a una tienda de conveniencia cerca de la estacion. El empleado saluda: "어서오세요!" (¡Bienvenido!)' }, choices: [
      { id: 's1e4-c1a', korean: '교통카드 하나 주세요. 만 원 충전해 주세요.', romanization: 'Gyotong kadeu hana juseyo. Man won chungjeonhae juseyo.', translation: { en: 'One transit card please. Please charge 10,000 won.', ja: '交通カード1枚ください。1万ウォンチャージしてください。', zh: '请给我一张交通卡。请充值一万韩元。', th: 'ขอบัตรขนส่งหนึ่งใบค่ะ/ครับ เติมเงินหมื่นวอนด้วยค่ะ/ครับ', vi: 'Cho tôi một thẻ giao thông. Nạp 10,000 won.', es: 'Una tarjeta de transporte por favor. Cargue 10,000 won.' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '충전' means to charge/recharge. T-money cards cost about 4,000 won!", ja: '完璧！🌟「충전」はチャージの意味。T-moneyカードは約4,000ウォン！', zh: '完美！🌟"충전"是充值的意思。T-money卡大约4000韩元！', th: 'สมบูรณ์แบบ! 🌟 "충전" แปลว่าเติมเงิน บัตร T-money ประมาณ 4,000 วอน!', vi: 'Hoàn hảo! 🌟 "충전" nghĩa là nạp tiền. Thẻ T-money khoảng 4,000 won!', es: '¡Perfecto! 🌟 "충전" significa recargar. ¡Las tarjetas T-money cuestan unos 4,000 won!' }, nextSceneId: 's1e4-scene3' },
      { id: 's1e4-c1b', korean: '교통카드 있어요?', romanization: 'Gyotong kadeu isseoyo?', translation: { en: 'Do you have transit cards?', ja: '交通カードありますか？', zh: '有交通卡吗？', th: 'มีบัตรขนส่งไหมคะ/ครับ?', vi: 'Có thẻ giao thông không?', es: '¿Tiene tarjetas de transporte?' }, correctness: 'good', feedback: { en: "Good! 👍 You asked if they have it. Now ask for one and charge it!", ja: 'いいね！👍 あるか聞けたね。次は1枚もらってチャージしよう！', zh: '不错！👍 你问了有没有。现在要一张并充值吧！', th: 'ดี! 👍 ถามว่ามีไหมได้แล้ว ทีนี้ขอหนึ่งใบแล้วเติมเงินเลย!', vi: 'Tốt! 👍 Bạn đã hỏi có không. Giờ xin một thẻ và nạp tiền!', es: '¡Bien! 👍 Preguntaste si tienen. ¡Ahora pide una y recargala!' }, nextSceneId: 's1e4-scene3' },
    ], teaching: { vocabulary: [{ korean: '교통카드', romanization: 'gyotong kadeu', meaning: { en: 'Transit card', ja: '交通カード', zh: '交通卡', th: 'บัตรขนส่ง', vi: 'Thẻ giao thông', es: 'Tarjeta de transporte' } }, { korean: '편의점', romanization: 'pyeonuijeom', meaning: { en: 'Convenience store', ja: 'コンビニ', zh: '便利店', th: 'ร้านสะดวกซื้อ', vi: 'Cửa hàng tiện lợi', es: 'Tienda de conveniencia' } }, { korean: '충전', romanization: 'chungjeon', meaning: { en: 'Charge/Recharge', ja: 'チャージ', zh: '充值', th: 'เติมเงิน', vi: 'Nạp tiền', es: 'Recargar' } }] } },
    { id: 's1e4-scene3', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '역무원', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' }, dialogue: { en: 'At the station, a staff member asks: "어디 가세요?" (Where are you going?)', ja: '駅で、駅員が聞く：「어디 가세요?」（どこへ行きますか？）', zh: '在车站，工作人员问："어디 가세요?"（您去哪里？）', th: 'ที่สถานี พนักงานถาม: "어디 가세요?" (ไปไหนคะ/ครับ?)', vi: 'Ở ga, nhân viên hỏi: "어디 가세요?" (Bạn đi đâu?)', es: 'En la estacion, un empleado pregunta: "어디 가세요?" (¿A donde va?)' }, choices: [
      { id: 's1e4-c2a', korean: '홍대입구역 가요', romanization: 'Hongdae-ipguryeok gayo', translation: { en: "I'm going to Hongdae Station", ja: '弘大入口駅に行きます', zh: '我去弘大入口站', th: 'ไปสถานีฮงแดค่ะ/ครับ', vi: 'Tôi đi ga Hongdae', es: 'Voy a la estacion Hongdae' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '역' means station!", ja: '完璧！🌟「역」は駅の意味！', zh: '完美！🌟"역"是车站的意思！', th: 'สมบูรณ์แบบ! 🌟 "역" แปลว่าสถานี!', vi: 'Hoàn hảo! 🌟 "역" nghĩa là ga!', es: '¡Perfecto! 🌟 "역" significa estacion!' }, nextSceneId: 's1e4-scene4' },
    ], teaching: { vocabulary: [{ korean: '역', romanization: 'yeok', meaning: { en: 'Station', ja: '駅', zh: '站', th: 'สถานี', vi: 'Ga', es: 'Estación' } }, { korean: '입구', romanization: 'ipgu', meaning: { en: 'Entrance', ja: '入口', zh: '入口', th: 'ทางเข้า', vi: 'Lối vào', es: 'Entrada' } }] } },
    { id: 's1e4-scene4', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'thinking' }, dialogue: { en: 'You\'re on the subway! The announcement says: "이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다." (This station is Hongdae. The doors will open on the right.)', ja: '地下鉄に乗った！アナウンス：「이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다.」（この駅は弘大入口です。降り口は右側です。）', zh: '你在地铁上了！广播说："이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다."（本站是弘大入口站。请从右侧下车。）', th: 'คุณอยู่บนรถไฟใต้ดิน! ประกาศ: "이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다." (สถานีนี้คือฮงแดอิปกู ประตูลงทางขวา)', vi: 'Bạn đang trên tàu! Thông báo: "이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다." (Ga này là Hongdae. Cửa mở bên phải.)', es: '¡Estas en el metro! El anuncio dice: "이번 역은 홍대입구역입니다. 내리실 문은 오른쪽입니다." (Esta estacion es Hongdae. Las puertas se abren a la derecha.)' }, nextSceneId: 's1e4-scene5', teaching: { vocabulary: [{ korean: '이번', romanization: 'ibeon', meaning: { en: 'This (time/turn)', ja: '今回/この', zh: '这次', th: 'ครั้งนี้', vi: 'Lần này', es: 'Este/Esta vez' } }, { korean: '다음', romanization: 'daeum', meaning: { en: 'Next', ja: '次', zh: '下一个', th: 'ถัดไป', vi: 'Tiếp theo', es: 'Siguiente' } }, { korean: '내리다', romanization: 'naerida', meaning: { en: 'To get off', ja: '降りる', zh: '下车', th: 'ลง', vi: 'Xuống', es: 'Bajar' } }] } },
    { id: 's1e4-scene5', background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', character: { name: '승객', avatar: '👨', emotion: 'happy' }, dialogue: { en: 'Oops! While getting off, you accidentally bump into another passenger. What do you say?', ja: 'おっと！降りる時に他の乗客にぶつかっちゃった。何て言う？', zh: '哎呀！下车时不小心碰到了另一位乘客。你该说什么？', th: 'อุ๊ย! ตอนลงรถไปชนผู้โดยสารคนอื่น จะพูดว่าอะไร?', vi: 'Ối! Khi xuống tàu, bạn vô tình va vào hành khách khác. Bạn nói gì?', es: '¡Ups! Al bajar, chocas accidentalmente con otro pasajero. ¿Que dices?' }, choices: [
      { id: 's1e4-c3a', korean: '죄송합니다!', romanization: 'Joesonghamnida!', translation: { en: "I'm very sorry! (formal)", ja: '大変申し訳ありません！', zh: '非常抱歉！', th: 'ขอโทษค่ะ/ครับ! (ทางการ)', vi: 'Xin lỗi ạ! (trang trọng)', es: '¡Lo siento mucho! (formal)' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '죄송합니다' is the formal apology - always use this with strangers!", ja: '完璧！🌟「죄송합니다」はフォーマルな謝罪 - 知らない人にはこれ！', zh: '完美！🌟"죄송합니다"是正式的道歉 - 对陌生人一定要用这个！', th: 'สมบูรณ์แบบ! 🌟 "죄송합니다" เป็นคำขอโทษทางการ - ใช้กับคนแปลกหน้าเสมอ!', vi: 'Hoàn hảo! 🌟 "죄송합니다" là lời xin lỗi trang trọng - luôn dùng với người lạ!', es: '¡Perfecto! 🌟 "죄송합니다" es la disculpa formal - ¡usala siempre con desconocidos!' }, nextSceneId: 's1e4-scene6' },
      { id: 's1e4-c3b', korean: '미안해요!', romanization: 'Mianhaeyo!', translation: { en: "I'm sorry! (casual polite)", ja: 'ごめんなさい！', zh: '对不起！', th: 'ขอโทษนะคะ/ครับ! (ไม่เป็นทางการ)', vi: 'Xin lỗi! (thân mật)', es: '¡Perdón! (casual)' }, correctness: 'good', feedback: { en: "Good! 👍 '미안해요' is casual polite. With strangers, '죄송합니다' is safer!", ja: 'いいね！👍「미안해요」はカジュアル丁寧。知らない人には「죄송합니다」が安全！', zh: '不错！👍"미안해요"是比较随意的礼貌说法。对陌生人用"죄송합니다"更安全！', th: 'ดี! 👍 "미안해요" สุภาพไม่เป็นทางการ กับคนแปลกหน้า "죄송합니다" ปลอดภัยกว่า!', vi: 'Tốt! 👍 "미안해요" lịch sự thân mật. Với người lạ, "죄송합니다" an toàn hơn!', es: '¡Bien! 👍 "미안해요" es casual cortés. ¡Con desconocidos, "죄송합니다" es mas seguro!' }, nextSceneId: 's1e4-scene6' },
    ], teaching: { vocabulary: [{ korean: '죄송합니다', romanization: 'joesonghamnida', meaning: { en: "I'm sorry (formal)", ja: '申し訳ありません', zh: '对不起（正式）', th: 'ขอโทษ (ทางการ)', vi: 'Xin lỗi (trang trọng)', es: 'Lo siento (formal)' } }, { korean: '미안해요', romanization: 'mianhaeyo', meaning: { en: "I'm sorry (casual)", ja: 'ごめんなさい', zh: '对不起（随意）', th: 'ขอโทษ (ไม่เป็นทางการ)', vi: 'Xin lỗi (thân mật)', es: 'Perdón (casual)' } }] } },
    { id: 's1e4-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You navigated the subway like a pro! 🎉 You learned:\n✅ '교통카드' - Transit card\n✅ '충전' - Recharge\n✅ '역' - Station\n✅ '이번/다음' - This/Next\n✅ '내리다' - To get off\n✅ '죄송합니다' - I'm sorry (formal)\n\n💡 Culture tip: Seoul subway has 23 color-coded lines! T-money cards also work at convenience stores.\n\nYou earned the '🚇 Subway Master' badge!", ja: 'プロみたいに地下鉄をマスター！🎉 学んだこと：\n✅「교통카드」- 交通カード\n✅「충전」- チャージ\n✅「역」- 駅\n✅「이번/다음」- 今回/次\n✅「내리다」- 降りる\n✅「죄송합니다」- 申し訳ありません\n\n💡 文化ポイント：ソウルの地下鉄は23路線！T-moneyカードはコンビニでも使えるよ。\n\n「🚇 地下鉄マスター」バッジ獲得！', zh: '地铁达人！🎉 你学到了：\n✅ "교통카드" - 交通卡\n✅ "충전" - 充值\n✅ "역" - 站\n✅ "이번/다음" - 这次/下次\n✅ "내리다" - 下车\n✅ "죄송합니다" - 对不起（正式）\n\n💡 文化提示：首尔地铁有23条彩色线路！T-money卡在便利店也能用。\n\n获得"🚇 地铁达人"徽章！', th: 'นำทางรถไฟใต้ดินเหมือนมือโปร! 🎉 คุณเรียนรู้:\n✅ "교통카드" - บัตรขนส่ง\n✅ "충전" - เติมเงิน\n✅ "역" - สถานี\n✅ "이번/다음" - ครั้งนี้/ถัดไป\n✅ "내리다" - ลง\n✅ "죄송합니다" - ขอโทษ (ทางการ)\n\n💡 วัฒนธรรม: รถไฟใต้ดินโซลมี 23 สาย! บัตร T-money ใช้ได้ที่ร้านสะดวกซื้อด้วย\n\nได้รับเหรียญ "🚇 เซียนรถไฟใต้ดิน"!', vi: 'Đi tàu như dân chuyên! 🎉 Bạn đã học:\n✅ "교통카드" - Thẻ giao thông\n✅ "충전" - Nạp tiền\n✅ "역" - Ga\n✅ "이번/다음" - Lần này/Tiếp theo\n✅ "내리다" - Xuống\n✅ "죄송합니다" - Xin lỗi (trang trọng)\n\n💡 Mẹo văn hóa: Tàu điện Seoul có 23 tuyến màu! Thẻ T-money dùng được ở cửa hàng tiện lợi.\n\nNhận huy hiệu "🚇 Bậc thầy tàu điện"!', es: '¡Navegaste el metro como un profesional! 🎉 Aprendiste:\n✅ "교통카드" - Tarjeta de transporte\n✅ "충전" - Recargar\n✅ "역" - Estacion\n✅ "이번/다음" - Este/Siguiente\n✅ "내리다" - Bajar\n✅ "죄송합니다" - Lo siento (formal)\n\n💡 Dato cultural: ¡El metro de Seul tiene 23 lineas de colores! Las tarjetas T-money tambien funcionan en tiendas.\n\n¡Obtuviste "🚇 Maestro del metro"!' } },
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
    { id: 's1e5-scene1', background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Myeongdong street food is amazing! 🍢 The streets are lined with food stalls selling tteokbokki, odeng, hotteok, and more. Let's explore and try some!", ja: '明洞の屋台料理は最高！🍢 通りにはトッポッキ、おでん、ホットクなどの屋台がずらり。探検して食べよう！', zh: '明洞的街头美食太棒了！🍢 街道两旁是卖辣炒年糕、鱼糕、糖饼等的小摊。去逛逛尝尝吧！', th: 'อาหารริมทางเมียงดงเยี่ยมมาก! 🍢 ถนนเต็มไปด้วยแผงขายต็อกปกกี โอแดง โฮตต็อก และอื่นๆ ไปสำรวจและลองกัน!', vi: 'Đồ ăn đường phố Myeongdong tuyệt vời! 🍢 Đường phố đầy quầy bán tteokbokki, odeng, hotteok và nhiều hơn nữa. Khám phá và thử nhé!', es: '¡La comida callejera de Myeongdong es increible! 🍢 Las calles estan llenas de puestos con tteokbokki, odeng, hotteok y mas. ¡Exploremos y probemos!' }, nextSceneId: 's1e5-scene2' },
    { id: 's1e5-scene2', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '상인', avatar: '👩', emotion: 'happy' }, dialogue: { en: 'You see an interesting food at a stall. You want to ask what it is.', ja: '屋台で面白そうな食べ物を見つけた。何か聞いてみよう。', zh: '你在摊位上看到一种有趣的食物。你想问问那是什么。', th: 'คุณเห็นอาหารน่าสนใจที่แผงลอย อยากถามว่าคืออะไร', vi: 'Bạn thấy một món ăn thú vị ở quầy. Bạn muốn hỏi đó là gì.', es: 'Ves una comida interesante en un puesto. Quieres preguntar que es.' }, choices: [
      { id: 's1e5-c1a', korean: '이거 뭐예요?', romanization: 'Igeo mwoyeyo?', translation: { en: 'What is this?', ja: 'これは何ですか？', zh: '这是什么？', th: 'นี่คืออะไรคะ/ครับ?', vi: 'Cái này là gì?', es: '¿Que es esto?' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '이거 뭐예요?' is one of the most useful phrases in Korea!", ja: '完璧！🌟「이거 뭐예요?」は韓国で一番便利なフレーズの1つ！', zh: '完美！🌟"이거 뭐예요?"是在韩国最实用的句子之一！', th: 'สมบูรณ์แบบ! 🌟 "이거 뭐예요?" เป็นวลีที่ใช้ได้มากในเกาหลี!', vi: 'Hoàn hảo! 🌟 "이거 뭐예요?" là cụm từ hữu ích nhất ở Hàn!', es: '¡Perfecto! 🌟 "이거 뭐예요?" es una de las frases mas utiles en Corea!' }, nextSceneId: 's1e5-scene3' },
      { id: 's1e5-c1b', korean: '저거 뭐예요?', romanization: 'Jeogeo mwoyeyo?', translation: { en: 'What is that?', ja: 'あれは何ですか？', zh: '那是什么？', th: 'นั่นคืออะไรคะ/ครับ?', vi: 'Cái kia là gì?', es: '¿Que es aquello?' }, correctness: 'good', feedback: { en: "Good! 👍 '저거' means 'that over there'. '이거' is for things nearby!", ja: 'いいね！👍「저거」は「あれ」の意味。近くの物には「이거」を使おう！', zh: '不错！👍"저거"是"那个"的意思。近处的东西用"이거"！', th: 'ดี! 👍 "저거" แปลว่า "นั่น" "이거" ใช้สำหรับสิ่งใกล้ๆ!', vi: 'Tốt! 👍 "저거" là "cái kia". "이거" dùng cho đồ gần!', es: '¡Bien! 👍 "저거" significa "aquello". "이거" es para cosas cercanas!' }, nextSceneId: 's1e5-scene3' },
    ], teaching: { vocabulary: [{ korean: '이거', romanization: 'igeo', meaning: { en: 'This (thing)', ja: 'これ', zh: '这个', th: 'นี่', vi: 'Cái này', es: 'Esto' } }, { korean: '뭐예요', romanization: 'mwoyeyo', meaning: { en: 'What is it?', ja: '何ですか', zh: '是什么', th: 'คืออะไร', vi: 'Là gì', es: '¿Que es?' } }] } },
    { id: 's1e5-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '상인', avatar: '👩', emotion: 'happy' }, dialogue: { en: 'The vendor smiles: "그건 떡볶이예요! 매운 떡이에요. 맛있어요!" (That\'s tteokbokki! It\'s spicy rice cakes. It\'s delicious!)', ja: '店主が微笑んで：「그건 떡볶이예요! 매운 떡이에요. 맛있어요!」（それはトッポッキ！辛い餅だよ。美味しいよ！）', zh: '摊主微笑着说："그건 떡볶이예요! 매운 떡이에요. 맛있어요!"（那是辣炒年糕！是辣的年糕。很好吃！）', th: 'แม่ค้ายิ้ม: "그건 떡볶이예요! 매운 떡이에요. 맛있어요!" (นั่นคือต็อกปกกี! เป็นต็อกเผ็ด อร่อยค่ะ!)', vi: 'Người bán mỉm cười: "그건 떡볶이예요! 매운 떡이에요. 맛있어요!" (Đó là tteokbokki! Bánh gạo cay. Ngon lắm!)', es: 'La vendedora sonrie: "그건 떡볶이예요! 매운 떡이에요. 맛있어요!" (¡Eso es tteokbokki! Son pasteles de arroz picantes. ¡Delicioso!)' }, choices: [
      { id: 's1e5-c2a', korean: '떡볶이 하나 주세요', romanization: 'Tteokbokki hana juseyo', translation: { en: 'One tteokbokki please', ja: 'トッポッキ1つください', zh: '请给我一份辣炒年糕', th: 'ขอต็อกปกกีหนึ่งที่ค่ะ/ครับ', vi: 'Cho một phần tteokbokki', es: 'Un tteokbokki por favor' }, correctness: 'perfect', feedback: { en: "Yum! 🌟 Tteokbokki is a must-try street food!", ja: '美味しい！🌟 トッポッキは必食！', zh: '好吃！🌟 辣炒年糕是必尝小吃！', th: 'อร่อย! 🌟 ต็อกปกกีต้องลอง!', vi: 'Ngon! 🌟 Tteokbokki là món phải thử!', es: '¡Delicioso! 🌟 ¡El tteokbokki es imprescindible!' }, nextSceneId: 's1e5-scene4' },
    ], teaching: { vocabulary: [{ korean: '떡볶이', romanization: 'tteokbokki', meaning: { en: 'Spicy rice cakes', ja: 'トッポッキ', zh: '辣炒年糕', th: 'ต็อกปกกี', vi: 'Bánh gạo cay', es: 'Pasteles de arroz picantes' } }, { korean: '하나', romanization: 'hana', meaning: { en: 'One', ja: '1つ', zh: '一个', th: 'หนึ่ง', vi: 'Một', es: 'Uno' } }] } },
    { id: 's1e5-scene4', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '상인', avatar: '👩', emotion: 'thinking' }, dialogue: { en: '"매운 거 괜찮아요?" (Is spicy food okay for you?)', ja: '「매운 거 괜찮아요?」（辛いの大丈夫？）', zh: '"매운 거 괜찮아요?"（能吃辣吗？）', th: '"매운 거 괜찮아요?" (กินเผ็ดได้ไหมคะ?)', vi: '"매운 거 괜찮아요?" (Ăn cay được không?)', es: '"매운 거 괜찮아요?" (¿La comida picante esta bien?)' }, choices: [
      { id: 's1e5-c3a', korean: '네, 괜찮아요! 매운 거 좋아해요.', romanization: 'Ne, gwaenchanayo! Maeun geo joahaeyo.', translation: { en: "Yes, it's fine! I like spicy food.", ja: 'はい、大丈夫！辛いの好きです。', zh: '没问题！我喜欢吃辣。', th: 'ค่ะ/ครับ ไม่เป็นไร! ชอบเผ็ดค่ะ/ครับ', vi: 'Vâng, được! Tôi thích ăn cay.', es: '¡Si, esta bien! Me gusta la comida picante.' }, correctness: 'perfect', feedback: { en: "Brave! 🌟 '좋아해요' means 'I like it'. Korean spicy is REALLY spicy!", ja: '勇気ある！🌟「좋아해요」は「好きです」の意味。韓国の辛さは本当に辛い！', zh: '勇敢！🌟"좋아해요"是"喜欢"的意思。韩国的辣是真的辣！', th: 'กล้า! 🌟 "좋아해요" แปลว่า "ชอบ" เผ็ดแบบเกาหลีนี่เผ็ดจริงๆ!', vi: 'Dũng cảm! 🌟 "좋아해요" nghĩa là "thích". Cay kiểu Hàn là CỰC CAY!', es: '¡Valiente! 🌟 "좋아해요" significa "me gusta". ¡El picante coreano es MUY picante!' }, nextSceneId: 's1e5-scene5' },
      { id: 's1e5-c3b', korean: '조금만 매운 거 주세요', romanization: 'Jogeumman maeun geo juseyo', translation: { en: 'Just a little spicy please', ja: '少しだけ辛くしてください', zh: '请给我微辣的', th: 'ขอเผ็ดนิดเดียวค่ะ/ครับ', vi: 'Cho tôi ít cay thôi', es: 'Solo un poco picante por favor' }, correctness: 'good', feedback: { en: "Smart! 👍 '조금만' means 'just a little'. Good way to control the spice!", ja: '賢い！👍「조금만」は「少しだけ」の意味。辛さ調整に便利！', zh: '聪明！👍"조금만"是"只要一点点"的意思。控制辣度的好方法！', th: 'ฉลาด! 👍 "조금만" แปลว่า "นิดเดียว" วิธีดีในการควบคุมความเผ็ด!', vi: 'Thông minh! 👍 "조금만" nghĩa là "chỉ một chút". Cách hay để kiểm soát độ cay!', es: '¡Inteligente! 👍 "조금만" significa "solo un poco". ¡Buena forma de controlar el picante!' }, nextSceneId: 's1e5-scene5' },
    ], teaching: { vocabulary: [{ korean: '매운', romanization: 'maeun', meaning: { en: 'Spicy', ja: '辛い', zh: '辣的', th: 'เผ็ด', vi: 'Cay', es: 'Picante' } }, { korean: '괜찮다', romanization: 'gwaenchanta', meaning: { en: "It's okay/fine", ja: '大丈夫', zh: '没关系', th: 'ไม่เป็นไร', vi: 'Không sao', es: 'Esta bien' } }, { korean: '맵다', romanization: 'maepda', meaning: { en: 'To be spicy', ja: '辛い', zh: '辣', th: 'เผ็ด', vi: 'Cay', es: 'Ser picante' } }] } },
    { id: 's1e5-scene5', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '상인', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"잘 먹겠습니다!" (I will eat well!) you say before eating. The vendor says: "오천 원이에요." (It\'s 5,000 won.)', ja: '「잘 먹겠습니다!」（いただきます！）と食べる前に言った。店主：「오천 원이에요.」（5,000ウォンです。）', zh: '吃之前你说："잘 먹겠습니다!"（我要开吃了！）摊主说："오천 원이에요."（5000韩元。）', th: '"잘 먹겠습니다!" (จะกินอย่างอร่อย!) คุณพูดก่อนกิน แม่ค้าพูด: "오천 원이에요." (ห้าพันวอนค่ะ)', vi: '"잘 먹겠습니다!" (Tôi sẽ ăn ngon!) bạn nói trước khi ăn. Người bán nói: "오천 원이에요." (5,000 won.)', es: '"잘 먹겠습니다!" (¡Voy a comer bien!) dices antes de comer. La vendedora dice: "오천 원이에요." (Son 5,000 won.)' }, choices: [
      { id: 's1e5-c4a', korean: '여기요. 잘 먹겠습니다!', romanization: 'Yeogiyo. Jal meokgesseumnida!', translation: { en: 'Here you go. Thank you for the food!', ja: 'はい。いただきます！', zh: '给您。我开动了！', th: 'นี่ค่ะ/ครับ จะกินอย่างอร่อยค่ะ/ครับ!', vi: 'Đây ạ. Tôi sẽ ăn ngon!', es: 'Aqui tiene. ¡Gracias por la comida!' }, correctness: 'perfect', feedback: { en: "Delicious! 🌟 '잘 먹겠습니다' is what Koreans say before eating - like 'bon appetit' but showing gratitude!", ja: '美味しい！🌟「잘 먹겠습니다」は食べる前に言う挨拶 - 感謝を示す「いただきます」！', zh: '美味！🌟"잘 먹겠습니다"是韩国人吃饭前说的话 - 像"我开动了"表示感谢！', th: 'อร่อย! 🌟 "잘 먹겠습니다" คือสิ่งที่คนเกาหลีพูดก่อนกิน - แสดงความขอบคุณ!', vi: 'Ngon! 🌟 "잘 먹겠습니다" là câu người Hàn nói trước khi ăn - thể hiện lòng biết ơn!', es: '¡Rico! 🌟 "잘 먹겠습니다" es lo que dicen los coreanos antes de comer - ¡muestra gratitud!' }, nextSceneId: 's1e5-scene6' },
    ], teaching: { vocabulary: [{ korean: '잘 먹겠습니다', romanization: 'jal meokgesseumnida', meaning: { en: 'I will eat well (before eating)', ja: 'いただきます', zh: '我开动了', th: 'จะกินอย่างอร่อย (ก่อนกิน)', vi: 'Tôi sẽ ăn ngon (trước khi ăn)', es: 'Voy a comer bien (antes de comer)' } }, { korean: '얼마예요', romanization: 'eolmayeyo', meaning: { en: 'How much?', ja: 'いくらですか', zh: '多少钱', th: 'เท่าไหร่', vi: 'Bao nhiêu', es: '¿Cuanto cuesta?' } }, { korean: '원', romanization: 'won', meaning: { en: 'Won (currency)', ja: 'ウォン', zh: '韩元', th: 'วอน', vi: 'Won', es: 'Won' } }] } },
    { id: 's1e5-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Street food master! 🎉 You learned:\n✅ '이거 뭐예요?' - What is this?\n✅ '떡볶이' - Tteokbokki\n✅ '매운/맵다' - Spicy\n✅ '잘 먹겠습니다' - Before eating\n✅ '얼마예요?' - How much?\n\n💡 Culture tip: Koreans say '잘 먹겠습니다' (jal meokgesseumnida) BEFORE eating to show gratitude, and '잘 먹었습니다' (jal meogeosseumnida) AFTER eating to say 'I ate well'. It shows respect to the person who prepared the food!\n\nYou earned the '🍢 Street Food Fan' badge!", ja: '屋台料理マスター！🎉 学んだこと：\n✅「이거 뭐예요?」- これは何？\n✅「떡볶이」- トッポッキ\n✅「매운/맵다」- 辛い\n✅「잘 먹겠습니다」- 食前の挨拶\n✅「얼마예요?」- いくら？\n\n💡 文化ポイント：韓国人は食べる前に「잘 먹겠습니다」、食べた後に「잘 먹었습니다」と言う。料理を作ってくれた人への敬意を表すよ！\n\n「🍢 屋台料理ファン」バッジ獲得！', zh: '街头美食大师！🎉 你学到了：\n✅ "이거 뭐예요?" - 这是什么？\n✅ "떡볶이" - 辣炒年糕\n✅ "매운/맵다" - 辣\n✅ "잘 먹겠습니다" - 吃饭前说\n✅ "얼마예요?" - 多少钱？\n\n💡 文化提示：韩国人吃饭前说"잘 먹겠습니다"表示感谢，吃完后说"잘 먹었습니다"表示"我吃好了"。这是对做饭人的尊重！\n\n获得"🍢 街头美食迷"徽章！', th: 'เซียนอาหารริมทาง! 🎉 คุณเรียนรู้:\n✅ "이거 뭐예요?" - นี่คืออะไร?\n✅ "떡볶이" - ต็อกปกกี\n✅ "매운/맵다" - เผ็ด\n✅ "잘 먹겠습니다" - ก่อนกิน\n✅ "얼마예요?" - เท่าไหร่?\n\n💡 วัฒนธรรม: คนเกาหลีพูด "잘 먹겠습니다" ก่อนกิน และ "잘 먹었습니다" หลังกิน แสดงความเคารพต่อคนทำอาหาร!\n\nได้รับเหรียญ "🍢 แฟนอาหารริมทาง"!', vi: 'Bậc thầy ẩm thực đường phố! 🎉 Bạn đã học:\n✅ "이거 뭐예요?" - Cái này là gì?\n✅ "떡볶이" - Tteokbokki\n✅ "매운/맵다" - Cay\n✅ "잘 먹겠습니다" - Trước khi ăn\n✅ "얼마예요?" - Bao nhiêu?\n\n💡 Mẹo văn hóa: Người Hàn nói "잘 먹겠습니다" TRƯỚC khi ăn để tỏ lòng biết ơn, và "잘 먹었습니다" SAU khi ăn. Thể hiện sự tôn trọng với người nấu!\n\nNhận huy hiệu "🍢 Fan đồ ăn đường phố"!', es: '¡Maestro de comida callejera! 🎉 Aprendiste:\n✅ "이거 뭐예요?" - ¿Que es esto?\n✅ "떡볶이" - Tteokbokki\n✅ "매운/맵다" - Picante\n✅ "잘 먹겠습니다" - Antes de comer\n✅ "얼마예요?" - ¿Cuanto?\n\n💡 Dato cultural: Los coreanos dicen "잘 먹겠습니다" ANTES de comer para mostrar gratitud, y "잘 먹었습니다" DESPUES de comer. ¡Muestra respeto a quien preparo la comida!\n\n¡Obtuviste "🍢 Fan de comida callejera"!' } },
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
    { id: 's1e6-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"네, 있어요! 사이즈 뭐 드릴까요?" (Yes, we have it! What size would you like?)', ja: '「네, 있어요! 사이즈 뭐 드릴까요?」（はい、ありますよ！サイズは何になさいますか？）', zh: '"네, 있어요! 사이즈 뭐 드릴까요?"（有的！要什么尺码？）', th: '"네, 있어요! 사이즈 뭐 드릴까요?" (มีค่ะ! ไซส์อะไรคะ?)', vi: '"네, 있어요! 사이즈 뭐 드릴까요?" (Có ạ! Size gì ạ?)', es: '"네, 있어요! 사이즈 뭐 드릴까요?" (¡Sí, tenemos! ¿Qué talla?)' }, choices: [
      { id: 's1e6-c2a', korean: '미디엄 사이즈 주세요', romanization: 'Midieum saijeu juseyo', translation: { en: 'Medium size please', ja: 'Mサイズをお願いします', zh: '请给我M码', th: 'ขอไซส์กลางค่ะ/ครับ', vi: 'Cho tôi size M', es: 'Talla mediana por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '사이즈' = size, '주세요' = please give me!", ja: '完璧！🌟「사이즈」= サイズ、「주세요」= ください！', zh: '完美！🌟"사이즈"= 尺码，"주세요"= 请给我！', th: 'สมบูรณ์แบบ! 🌟 "사이즈" = ไซส์, "주세요" = กรุณาให้!', vi: 'Hoàn hảo! 🌟 "사이즈" = size, "주세요" = cho tôi!', es: '¡Perfecto! 🌟 "사이즈" = talla, "주세요" = por favor deme!' }, nextSceneId: 's1e6-scene3' },
      { id: 's1e6-c2b', korean: '미디엄이요', romanization: 'Midieum-iyo', translation: { en: 'Medium please', ja: 'Mです', zh: 'M码', th: 'ไซส์กลางค่ะ/ครับ', vi: 'Size M ạ', es: 'Mediana' }, correctness: 'good', feedback: { en: "Good! 👍 Adding '주세요' makes it more polite!", ja: 'いいね！👍「주세요」を付けるともっと丁寧！', zh: '不错！👍 加上"주세요"更礼貌！', th: 'ดี! 👍 เติม "주세요" จะสุภาพกว่า!', vi: 'Tốt! 👍 Thêm "주세요" lịch sự hơn!', es: '¡Bien! 👍 Agregar "주세요" es más cortés!' }, nextSceneId: 's1e6-scene3' },
    ], teaching: { vocabulary: [{ korean: '사이즈', romanization: 'saijeu', meaning: { en: 'Size', ja: 'サイズ', zh: '尺码', th: 'ไซส์', vi: 'Size', es: 'Talla' } }, { korean: '주세요', romanization: 'juseyo', meaning: { en: 'Please give me', ja: 'ください', zh: '请给我', th: 'กรุณาให้', vi: 'Cho tôi', es: 'Por favor deme' } }] } },
    { id: 's1e6-scene3', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"여기요! 입어 보시겠어요?" (Here you go! Would you like to try it on?)', ja: '「여기요! 입어 보시겠어요?」（はい、どうぞ！試着なさいますか？）', zh: '"여기요! 입어 보시겠어요?"（给您！要试穿吗？）', th: '"여기요! 입어 보시겠어요?" (นี่ค่ะ! ลองใส่ดูไหมคะ?)', vi: '"여기요! 입어 보시겠어요?" (Đây ạ! Bạn muốn thử không?)', es: '"여기요! 입어 보시겠어요?" (¡Aquí tiene! ¿Quiere probárselo?)' }, choices: [
      { id: 's1e6-c3a', korean: '네, 입어 볼게요! 탈의실 어디예요?', romanization: 'Ne, ibeo bolgeyo! Taruisil eodiyeyo?', translation: { en: "Yes, I'll try it on! Where's the fitting room?", ja: 'はい、試着します！試着室はどこですか？', zh: '好的，我试试！试衣间在哪？', th: 'ค่ะ/ครับ ลองใส่ดูค่ะ/ครับ! ห้องลองเสื้ออยู่ไหนคะ/ครับ?', vi: 'Vâng, cho tôi thử! Phòng thay đồ ở đâu?', es: '¡Sí, me lo probaré! ¿Dónde está el probador?' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '입어 보다' means to try on clothes! '탈의실' is fitting room!", ja: '素晴らしい！🌟「입어 보다」は試着する意味！「탈의실」は試着室！', zh: '太棒了！🌟"입어 보다"是试穿的意思！"탈의실"是试衣间！', th: 'เยี่ยม! 🌟 "입어 보다" แปลว่าลองใส่! "탈의실" คือห้องลองเสื้อ!', vi: 'Tuyệt! 🌟 "입어 보다" nghĩa là thử đồ! "탈의실" là phòng thay đồ!', es: '¡Genial! 🌟 "입어 보다" significa probarse ropa! "탈의실" es probador!' }, nextSceneId: 's1e6-scene4' },
      { id: 's1e6-c3b', korean: '아니요, 괜찮아요', romanization: 'Aniyo, gwaenchanhayo', translation: { en: "No, it's okay", ja: 'いいえ、大丈夫です', zh: '不用了，没关系', th: 'ไม่ค่ะ/ครับ ไม่เป็นไร', vi: 'Không, không sao', es: 'No, está bien' }, correctness: 'good', feedback: { en: "That works too! 👍 But trying on ('입어 보다') is always a good idea!", ja: 'それもOK！👍 でも試着（입어 보다）はおすすめ！', zh: '也可以！👍 但试穿（입어 보다）总是好主意！', th: 'ได้เหมือนกัน! 👍 แต่ลองใส่ (입어 보다) เป็นความคิดที่ดี!', vi: 'Cũng được! 👍 Nhưng thử đồ (입어 보다) luôn tốt!', es: '¡También sirve! 👍 Pero probarse (입어 보다) es buena idea!' }, nextSceneId: 's1e6-scene4' },
    ], teaching: { vocabulary: [{ korean: '입다', romanization: 'ipda', meaning: { en: 'To wear', ja: '着る', zh: '穿', th: 'ใส่', vi: 'Mặc', es: 'Ponerse/Vestir' } }, { korean: '입어 보다', romanization: 'ibeo boda', meaning: { en: 'To try on', ja: '試着する', zh: '试穿', th: 'ลองใส่', vi: 'Thử mặc', es: 'Probarse' } }, { korean: '탈의실', romanization: 'taruisil', meaning: { en: 'Fitting room', ja: '試着室', zh: '试衣间', th: 'ห้องลองเสื้อ', vi: 'Phòng thay đồ', es: 'Probador' } }] } },
    { id: 's1e6-scene4', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!" (It looks great on you! What color do you like? We have white, red, and blue too!)', ja: '「잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!」（似合ってますよ！何色が好きですか？白、赤、青もありますよ！）', zh: '"잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!"（很合适！喜欢什么颜色？白色、红色、蓝色也有！）', th: '"잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!" (เข้ากันดีค่ะ! ชอบสีอะไรคะ? มีสีขาว แดง น้ำเงินด้วยค่ะ!)', vi: '"잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!" (Hợp lắm! Bạn thích màu gì? Có cả trắng, đỏ, xanh!)', es: '"잘 어울려요! 무슨 색깔 좋아하세요? 흰색, 빨간색, 파란색도 있어요!" (¡Le queda bien! ¿Qué color le gusta? ¡También hay blanco, rojo y azul!)' }, choices: [
      { id: 's1e6-c4a', korean: '검정색으로 주세요!', romanization: 'Geomjeongsaegeuro juseyo!', translation: { en: 'In black please!', ja: '黒でお願いします！', zh: '请给我黑色的！', th: 'ขอสีดำค่ะ/ครับ!', vi: 'Cho tôi màu đen!', es: '¡En negro por favor!' }, correctness: 'perfect', feedback: { en: "Nice choice! 🌟 '검정색' = black. '-으로' means 'in (that color)'!", ja: 'いい選択！🌟「검정색」= 黒。「-으로」は「〜で」の意味！', zh: '好选择！🌟"검정색"= 黑色。"-으로"表示"用（颜色）"！', th: 'เลือกดี! 🌟 "검정색" = สีดำ "-으로" แปลว่า "เป็นสี"!', vi: 'Chọn hay! 🌟 "검정색" = đen. "-으로" nghĩa là "bằng/màu"!', es: '¡Buena elección! 🌟 "검정색" = negro. "-으로" significa "en (color)"!' }, nextSceneId: 's1e6-scene5' },
      { id: 's1e6-c4b', korean: '흰색으로 주세요!', romanization: 'Huinsaegeuro juseyo!', translation: { en: 'In white please!', ja: '白でお願いします！', zh: '请给我白色的！', th: 'ขอสีขาวค่ะ/ครับ!', vi: 'Cho tôi màu trắng!', es: '¡En blanco por favor!' }, correctness: 'perfect', feedback: { en: "Great choice! 🌟 '흰색' = white!", ja: 'いい選択！🌟「흰색」= 白！', zh: '好选择！🌟"흰색"= 白色！', th: 'เลือกดี! 🌟 "흰색" = สีขาว!', vi: 'Chọn hay! 🌟 "흰색" = trắng!', es: '¡Buena elección! 🌟 "흰색" = blanco!' }, nextSceneId: 's1e6-scene5' },
    ], teaching: { vocabulary: [{ korean: '색깔', romanization: 'saekkal', meaning: { en: 'Color', ja: '色', zh: '颜色', th: 'สี', vi: 'Màu', es: 'Color' } }, { korean: '흰색', romanization: 'huinsaek', meaning: { en: 'White', ja: '白', zh: '白色', th: 'สีขาว', vi: 'Trắng', es: 'Blanco' } }, { korean: '빨간색', romanization: 'ppalgansaek', meaning: { en: 'Red', ja: '赤', zh: '红色', th: 'สีแดง', vi: 'Đỏ', es: 'Rojo' } }, { korean: '파란색', romanization: 'paransaek', meaning: { en: 'Blue', ja: '青', zh: '蓝色', th: 'สีน้ำเงิน', vi: 'Xanh', es: 'Azul' } }, { korean: '검정색', romanization: 'geomjeongsaek', meaning: { en: 'Black', ja: '黒', zh: '黑色', th: 'สีดำ', vi: 'Đen', es: 'Negro' } }] } },
    { id: 's1e6-scene5', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '점원', avatar: '👩', emotion: 'happy' }, dialogue: { en: '"이만 원이에요. 오늘 할인해서 만 오천 원이에요!" (It\'s 20,000 won. Today\'s discount makes it 15,000 won!)', ja: '「이만 원이에요. 오늘 할인해서 만 오천 원이에요!」（2万ウォンです。今日は割引で1万5千ウォン！）', zh: '"이만 원이에요. 오늘 할인해서 만 오천 원이에요!"（两万韩元。今天打折一万五千！）', th: '"이만 원이에요. 오늘 할인해서 만 오천 원이에요!" (สองหมื่นวอนค่ะ วันนี้ลดราคาเหลือหมื่นห้าพันวอน!)', vi: '"이만 원이에요. 오늘 할인해서 만 오천 원이에요!" (20,000 won. Hôm nay giảm giá còn 15,000 won!)', es: '"이만 원이에요. 오늘 할인해서 만 오천 원이에요!" (Son 20,000 won. ¡Hoy con descuento queda en 15,000 won!)' }, choices: [
      { id: 's1e6-c5a', korean: '좀 더 깎아 주세요!', romanization: 'Jom deo kkakka juseyo!', translation: { en: 'Please give me a bit more discount!', ja: 'もう少し安くしてください！', zh: '再便宜一点吧！', th: 'ลดอีกหน่อยได้ไหมคะ/ครับ!', vi: 'Giảm thêm một chút đi ạ!', es: '¡Un poco más de descuento por favor!' }, correctness: 'perfect', feedback: { en: "Bold! 🌟 '깎아 주세요' is the key phrase for haggling in Korea!", ja: '大胆！🌟「깎아 주세요」は韓国での値切りフレーズ！', zh: '大胆！🌟"깎아 주세요"是韩国砍价的关键句！', th: 'กล้ามาก! 🌟 "깎아 주세요" คือประโยคต่อราคาในเกาหลี!', vi: 'Dũng cảm! 🌟 "깎아 주세요" là câu mặc cả ở Hàn Quốc!', es: '¡Valiente! 🌟 "깎아 주세요" es la frase clave para regatear en Corea!' }, nextSceneId: 's1e6-scene6' },
      { id: 's1e6-c5b', korean: '좋아요! 살게요!', romanization: 'Joayo! Salgeyo!', translation: { en: "Great! I'll buy it!", ja: 'いいね！買います！', zh: '好的！我买了！', th: 'ดีค่ะ/ครับ! ซื้อเลย!', vi: 'Tốt! Tôi mua!', es: '¡Genial! ¡Lo compro!' }, correctness: 'good', feedback: { en: "Smart shopper! 👍 Next time try '깎아 주세요' for a discount!", ja: '賢い買い物！👍 次は「깎아 주세요」で値切ってみよう！', zh: '聪明的购物者！👍 下次试试"깎아 주세요"来砍价！', th: 'ช้อปเก่ง! 👍 คราวหน้าลอง "깎아 주세요" เพื่อต่อราคา!', vi: 'Mua sắm thông minh! 👍 Lần sau thử "깎아 주세요" để mặc cả!', es: '¡Comprador inteligente! 👍 Prueba "깎아 주세요" para regatear!' }, nextSceneId: 's1e6-scene6' },
    ], teaching: { vocabulary: [{ korean: '할인', romanization: 'halin', meaning: { en: 'Discount', ja: '割引', zh: '折扣', th: 'ลดราคา', vi: 'Giảm giá', es: 'Descuento' } }, { korean: '깎아 주세요', romanization: 'kkakka juseyo', meaning: { en: 'Please give a discount', ja: '安くしてください', zh: '请便宜一点', th: 'ลดราคาหน่อย', vi: 'Giảm giá đi', es: 'Rebaje por favor' } }, { korean: '사다', romanization: 'sada', meaning: { en: 'To buy', ja: '買う', zh: '买', th: 'ซื้อ', vi: 'Mua', es: 'Comprar' } }], culturalNote: { en: "💡 Haggling is common in Korean street markets and small shops, but not in department stores!", ja: '💡 韓国では露店や小さな店で値切るのは普通だけど、デパートではNG！', zh: '💡 在韩国的街头市场和小店可以砍价，但百货商店不行！', th: '💡 การต่อราคาเป็นเรื่องปกติในตลาดและร้านเล็กๆ แต่ไม่ทำในห้าง!', vi: '💡 Mặc cả phổ biến ở chợ và cửa hàng nhỏ, nhưng không ở trung tâm thương mại!', es: '💡 Regatear es común en mercados y tiendas pequeñas, pero no en grandes almacenes!' } } },
    { id: 's1e6-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Great shopping at Hongdae! 🎉 You learned:\n✅ '입어 보다' - To try on\n✅ '색깔' - Color (흰색/빨간색/파란색)\n✅ '할인/깎아 주세요' - Discount/Haggling\n✅ '탈의실' - Fitting room\n\nYou earned the '🛍️ Shopping Pro' badge!", ja: '弘大でナイスショッピング！🎉 学んだこと：\n✅「입어 보다」- 試着する\n✅「색깔」- 色（흰색/빨간색/파란색）\n✅「할인/깎아 주세요」- 割引/値切り\n✅「탈의실」- 試着室\n\n「🛍️ ショッピングプロ」バッジ獲得！', zh: '弘大购物愉快！🎉 你学到了：\n✅ "입어 보다" - 试穿\n✅ "색깔" - 颜色（흰색/빨간색/파란색）\n✅ "할인/깎아 주세요" - 折扣/砍价\n✅ "탈의실" - 试衣间\n\n获得"🛍️ 购物达人"徽章！', th: 'ช้อปปิ้งฮงแดเยี่ยม! 🎉 คุณเรียนรู้:\n✅ "입어 보다" - ลองใส่\n✅ "색깔" - สี (흰색/빨간색/파란색)\n✅ "할인/깎아 주세요" - ลดราคา/ต่อราคา\n✅ "탈의실" - ห้องลองเสื้อ\n\nได้รับเหรียญ "🛍️ มือโปรช้อปปิ้ง"!', vi: 'Mua sắm Hongdae tuyệt vời! 🎉 Bạn đã học:\n✅ "입어 보다" - Thử đồ\n✅ "색깔" - Màu (흰색/빨간색/파란색)\n✅ "할인/깎아 주세요" - Giảm giá/Mặc cả\n✅ "탈의실" - Phòng thay đồ\n\nNhận huy hiệu "🛍️ Chuyên gia mua sắm"!', es: '¡Gran compra en Hongdae! 🎉 Aprendiste:\n✅ "입어 보다" - Probarse\n✅ "색깔" - Color (흰색/빨간색/파란색)\n✅ "할인/깎아 주세요" - Descuento/Regatear\n✅ "탈의실" - Probador\n\n¡Obtuviste "🛍️ Experto en compras"!' } },
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
    { id: 's1e7-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '주민', avatar: '👵', emotion: 'happy' }, dialogue: { en: '"직진해서 왼쪽으로 가세요." (Go straight and turn left.)', ja: '「직진해서 왼쪽으로 가세요.」（まっすぐ行って左に曲がってね。）', zh: '"직진해서 왼쪽으로 가세요."（直走然后左转。）', th: '"직진해서 왼쪽으로 가세요." (เดินตรงไปแล้วเลี้ยวซ้ายค่ะ)', vi: '"직진해서 왼쪽으로 가세요." (Đi thẳng rồi rẽ trái.)', es: '"직진해서 왼쪽으로 가세요." (Vaya recto y gire a la izquierda.)' }, choices: [
      { id: 's1e7-c2a', korean: '왼쪽이요? 알겠습니다!', romanization: 'Oenjjog-iyo? Algesseumnida!', translation: { en: 'Left? Got it!', ja: '左ですか？わかりました！', zh: '左边？明白了！', th: 'ซ้ายใช่ไหมคะ/ครับ? เข้าใจแล้ว!', vi: 'Bên trái ạ? Hiểu rồi!', es: '¿A la izquierda? ¡Entendido!' }, correctness: 'perfect', feedback: { en: "Good listening! 🌟 '왼쪽' = left, '직진' = go straight!", ja: 'よく聞けた！🌟「왼쪽」= 左、「직진」= 直進！', zh: '听得好！🌟"왼쪽"= 左，"직진"= 直走！', th: 'ฟังดี! 🌟 "왼쪽" = ซ้าย, "직진" = ตรงไป!', vi: 'Nghe tốt! 🌟 "왼쪽" = trái, "직진" = đi thẳng!', es: '¡Bien escuchado! 🌟 "왼쪽" = izquierda, "직진" = recto!' }, nextSceneId: 's1e7-scene4' },
    ], teaching: { vocabulary: [{ korean: '직진', romanization: 'jikjin', meaning: { en: 'Go straight', ja: '直進', zh: '直走', th: 'ตรงไป', vi: 'Đi thẳng', es: 'Recto' } }, { korean: '왼쪽', romanization: 'oenjjok', meaning: { en: 'Left', ja: '左', zh: '左', th: 'ซ้าย', vi: 'Trái', es: 'Izquierda' } }, { korean: '오른쪽', romanization: 'oreunjjok', meaning: { en: 'Right', ja: '右', zh: '右', th: 'ขวา', vi: 'Phải', es: 'Derecha' } }] } },
    { id: 's1e7-scene4', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '주민', avatar: '👵', emotion: 'happy' }, dialogue: { en: '"그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요." (And you\'ll see a big building across the street. The station is next to that building.)', ja: '「그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요.」（それから向かい側に大きな建物が見えるよ。その建物の横に駅があるよ。）', zh: '"그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요."（然后对面有一栋大楼。车站就在那栋楼旁边。）', th: '"그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요." (แล้วจะเห็นตึกใหญ่ฝั่งตรงข้าม สถานีอยู่ข้างตึกนั้นค่ะ)', vi: '"그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요." (Rồi bạn sẽ thấy tòa nhà lớn bên kia đường. Ga ở cạnh tòa nhà đó.)', es: '"그리고 건너편에 큰 건물이 보여요. 그 건물 옆에 역이 있어요." (Y verá un edificio grande al otro lado. La estación está al lado de ese edificio.)' }, choices: [
      { id: 's1e7-c3a', korean: '건너편이요? 감사합니다!', romanization: 'Geonneopyeon-iyo? Gamsahamnida!', translation: { en: 'Across the street? Thank you!', ja: '向かい側ですか？ありがとうございます！', zh: '对面？谢谢！', th: 'ฝั่งตรงข้ามใช่ไหมคะ/ครับ? ขอบคุณค่ะ/ครับ!', vi: 'Bên kia đường ạ? Cảm ơn!', es: '¿Al otro lado? ¡Gracias!' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '건너편' = across/opposite side, '그리고' = and/then!", ja: '素晴らしい！🌟「건너편」= 向かい側、「그리고」= そして！', zh: '太棒了！🌟"건너편"= 对面，"그리고"= 然后！', th: 'เยี่ยม! 🌟 "건너편" = ฝั่งตรงข้าม, "그리고" = แล้วก็!', vi: 'Tuyệt! 🌟 "건너편" = bên kia, "그리고" = và/rồi!', es: '¡Genial! 🌟 "건너편" = al otro lado, "그리고" = y/luego!' }, nextSceneId: 's1e7-scene5' },
    ], teaching: { vocabulary: [{ korean: '그리고', romanization: 'geurigo', meaning: { en: 'And/Then', ja: 'そして', zh: '然后', th: 'แล้วก็', vi: 'Và/Rồi', es: 'Y/Luego' } }, { korean: '건너편', romanization: 'geonneopyeon', meaning: { en: 'Across/Opposite side', ja: '向かい側', zh: '对面', th: 'ฝั่งตรงข้าม', vi: 'Bên kia', es: 'Al otro lado' } }, { korean: '건물', romanization: 'geonmul', meaning: { en: 'Building', ja: '建物', zh: '建筑', th: 'ตึก/อาคาร', vi: 'Tòa nhà', es: 'Edificio' } }] } },
    { id: 's1e7-scene5', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '주민', avatar: '👵', emotion: 'happy' }, dialogue: { en: 'You want to ask how long it takes. The woman smiles kindly.', ja: 'どのくらいかかるか聞きたい。おばあさんは優しく微笑んでいる。', zh: '你想问需要多长时间。老奶奶和蔼地微笑着。', th: 'คุณอยากถามว่าใช้เวลานานเท่าไหร่ คุณยายยิ้มอย่างใจดี', vi: 'Bạn muốn hỏi mất bao lâu. Bà cụ mỉm cười hiền từ.', es: 'Quieres preguntar cuánto tiempo toma. La señora sonríe amablemente.' }, choices: [
      { id: 's1e7-c4a', korean: '얼마나 걸려요?', romanization: 'Eolmana geollyeoyo?', translation: { en: 'How long does it take?', ja: 'どのくらいかかりますか？', zh: '需要多长时间？', th: 'ใช้เวลานานเท่าไหร่คะ/ครับ?', vi: 'Mất bao lâu?', es: '¿Cuánto tiempo toma?' }, correctness: 'perfect', feedback: { en: "Essential phrase! 🌟 She says '오 분 걸려요' (about 5 minutes). '걸리다' = to take (time)!", ja: '必須フレーズ！🌟「오 분 걸려요」（約5分）。「걸리다」= （時間が）かかる！', zh: '必学句型！🌟 她说"오 분 걸려요"（大约5分钟）。"걸리다"= 花（时间）！', th: 'ประโยคสำคัญ! 🌟 เธอพูดว่า "오 분 걸려요" (ประมาณ 5 นาที) "걸리다" = ใช้เวลา!', vi: 'Cau quan trong! 🌟 Ba ay noi "오 분 걸려요" (khoang 5 phut). "걸리다" = mat (thoi gian)!', es: '¡Frase esencial! 🌟 Ella dice "오 분 걸려요" (unos 5 minutos). "걸리다" = tomar (tiempo)!' }, nextSceneId: 's1e7-scene6' },
      { id: 's1e7-c4b', korean: '가까워요?', romanization: 'Gakkawoyo?', translation: { en: 'Is it close?', ja: '近いですか？', zh: '近吗？', th: 'ใกล้ไหมคะ/ครับ?', vi: 'Có gần không?', es: '¿Está cerca?' }, correctness: 'good', feedback: { en: "Good question! 👍 She says '네, 가까워요! 오 분 걸려요.' (Yes, it's close! About 5 minutes.)", ja: 'いい質問！👍「네, 가까워요! 오 분 걸려요.」（はい、近いよ！約5分。）', zh: '好问题！👍 她说"네, 가까워요! 오 분 걸려요."（是的，很近！大约5分钟。）', th: 'คำถามดี! 👍 เธอพูดว่า "네, 가까워요! 오 분 걸려요." (ใช่ค่ะ ใกล้! ประมาณ 5 นาที)', vi: 'Câu hỏi hay! 👍 Bà ấy nói "네, 가까워요! 오 분 걸려요." (Vâng, gần! Khoảng 5 phút.)', es: '¡Buena pregunta! 👍 Ella dice "네, 가까워요! 오 분 걸려요." (¡Sí, está cerca! Unos 5 minutos.)' }, nextSceneId: 's1e7-scene6' },
    ], teaching: { vocabulary: [{ korean: '걸리다', romanization: 'geollida', meaning: { en: 'To take (time)', ja: '（時間が）かかる', zh: '花（时间）', th: 'ใช้เวลา', vi: 'Mất (thời gian)', es: 'Tomar (tiempo)' } }, { korean: '분', romanization: 'bun', meaning: { en: 'Minute(s)', ja: '分', zh: '分钟', th: 'นาที', vi: 'Phút', es: 'Minuto(s)' } }, { korean: '가깝다', romanization: 'gakkapda', meaning: { en: 'To be close/near', ja: '近い', zh: '近', th: 'ใกล้', vi: 'Gần', es: 'Estar cerca' } }] } },
    { id: 's1e7-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "You found your way in Bukchon! 🎉 You learned:\n✅ '어떻게 가요?' - How do I get there?\n✅ '왼쪽/오른쪽' - Left/Right\n✅ '직진' - Go straight\n✅ '건너편' - Across/Opposite\n✅ '얼마나 걸려요?' - How long does it take?\n\nYou earned the '🗺️ Direction Master' badge!", ja: '北村で道が分かった！🎉 学んだこと：\n✅「어떻게 가요?」- どう行きますか？\n✅「왼쪽/오른쪽」- 左/右\n✅「직진」- 直進\n✅「건너편」- 向かい側\n✅「얼마나 걸려요?」- どのくらいかかる？\n\n「🗺️ 方向マスター」バッジ獲得！', zh: '在北村找到路了！🎉 你学到了：\n✅ "어떻게 가요?" - 怎么走？\n✅ "왼쪽/오른쪽" - 左/右\n✅ "직진" - 直走\n✅ "건너편" - 对面\n✅ "얼마나 걸려요?" - 要多久？\n\n获得"🗺️ 方向达人"徽章！', th: 'หาทางในบุกชนเจอ! 🎉 คุณเรียนรู้:\n✅ "어떻게 가요?" - ไปยังไง?\n✅ "왼쪽/오른쪽" - ซ้าย/ขวา\n✅ "직진" - ตรงไป\n✅ "건너편" - ฝั่งตรงข้าม\n✅ "얼마나 걸려요?" - ใช้เวลานานเท่าไหร่?\n\nได้รับเหรียญ "🗺️ เซียนถามทาง"!', vi: 'Tim duoc duong o Bukchon! 🎉 Ban da hoc:\n✅ "어떻게 가요?" - Di the nao?\n✅ "왼쪽/오른쪽" - Trai/Phai\n✅ "직진" - Di thang\n✅ "건너편" - Ben kia\n✅ "얼마나 걸려요?" - Mat bao lau?\n\nNhan huy hieu "🗺️ Bac thay hoi duong"!', es: '¡Encontraste el camino en Bukchon! 🎉 Aprendiste:\n✅ "어떻게 가요?" - ¿Cómo llego?\n✅ "왼쪽/오른쪽" - Izquierda/Derecha\n✅ "직진" - Recto\n✅ "건너편" - Al otro lado\n✅ "얼마나 걸려요?" - ¿Cuánto toma?\n\n¡Obtuviste "🗺️ Maestro de direcciones"!' } },
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
    { id: 's1e8-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'sad' }, dialogue: { en: "It's your last day in Seoul! 😢 Before meeting Minji at the airport, let's check out of the hotel first!", ja: 'ソウル最後の日！😢 空港でミンジに会う前に、まずホテルをチェックアウトしよう！', zh: '在首尔的最后一天！😢 去机场见敏智之前，先退房吧！', th: 'วันสุดท้ายในโซล! 😢 ก่อนไปเจอมินจิที่สนามบิน เช็คเอาท์จากโรงแรมก่อน!', vi: 'Ngày cuối ở Seoul! 😢 Trước khi gặp Minji ở sân bay, hãy trả phòng khách sạn!', es: '¡Es tu último día en Seúl! 😢 Antes de ver a Minji en el aeropuerto, ¡hagamos el check-out del hotel!' }, nextSceneId: 's1e8-scene2' },
    { id: 's1e8-scene2', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', character: { name: '호텔 직원', avatar: '👨', emotion: 'happy' }, dialogue: { en: 'At the hotel front desk. The staff greets you: "체크아웃 하시겠어요?" (Would you like to check out?)', ja: 'ホテルのフロントで。スタッフが挨拶：「체크아웃 하시겠어요?」（チェックアウトですか？）', zh: '在酒店前台。工作人员问："체크아웃 하시겠어요?"（要退房吗？）', th: 'ที่เคาน์เตอร์โรงแรม พนักงานทักทาย: "체크아웃 하시겠어요?" (จะเช็คเอาท์ไหมคะ/ครับ?)', vi: 'Tại quầy lễ tân khách sạn. Nhân viên chào: "체크아웃 하시겠어요?" (Bạn muốn trả phòng?)', es: 'En la recepción del hotel. El personal pregunta: "체크아웃 하시겠어요?" (¿Desea hacer el check-out?)' }, choices: [
      { id: 's1e8-c1a', korean: '네, 체크아웃 하려고요. 짐 좀 맡아 주실 수 있어요?', romanization: 'Ne, chekeuaut haryeogoyo. Jim jom mata jusil su isseoyo?', translation: { en: "Yes, I'd like to check out. Can you keep my luggage for a bit?", ja: 'はい、チェックアウトです。荷物を預かってもらえますか？', zh: '是的，我要退房。可以帮我寄存行李吗？', th: 'ค่ะ/ครับ จะเช็คเอาท์ค่ะ/ครับ ฝากกระเป๋าได้ไหมคะ/ครับ?', vi: 'Vâng, tôi muốn trả phòng. Giữ hành lý giúp tôi được không?', es: 'Sí, quiero hacer el check-out. ¿Puede guardar mi equipaje?' }, correctness: 'perfect', feedback: { en: "Great! 🌟 '짐 맡기다' means to leave luggage with someone! Hotels usually offer this service.", ja: '素晴らしい！🌟「짐 맡기다」は荷物を預ける意味！ホテルではよくあるサービス。', zh: '太棒了！🌟"짐 맡기다"是寄存行李的意思！酒店通常提供这个服务。', th: 'เยี่ยม! 🌟 "짐 맡기다" แปลว่าฝากกระเป๋า! โรงแรมมักมีบริการนี้', vi: 'Tuyệt! 🌟 "짐 맡기다" nghĩa là gửi hành lý! Khách sạn thường có dịch vụ này.', es: '¡Genial! 🌟 "짐 맡기다" significa dejar el equipaje. ¡Los hoteles suelen ofrecer este servicio!' }, nextSceneId: 's1e8-scene3' },
      { id: 's1e8-c1b', korean: '네, 체크아웃이요', romanization: 'Ne, chekeuaut-iyo', translation: { en: 'Yes, check-out please', ja: 'はい、チェックアウトです', zh: '是的，退房', th: 'ค่ะ/ครับ เช็คเอาท์ค่ะ/ครับ', vi: 'Vâng, trả phòng ạ', es: 'Sí, check-out' }, correctness: 'good', feedback: { en: "Good! 👍 You can also ask '짐 맡아 주세요' to store your luggage!", ja: 'いいね！👍「짐 맡아 주세요」で荷物も預けられるよ！', zh: '不错！👍 还可以说"짐 맡아 주세요"来寄存行李！', th: 'ดี! 👍 คุณยังถามฝากกระเป๋าได้ด้วย "짐 맡아 주세요"!', vi: 'Tốt! 👍 Bạn còn có thể nói "짐 맡아 주세요" để gửi hành lý!', es: '¡Bien! 👍 También puedes pedir "짐 맡아 주세요" para guardar equipaje!' }, nextSceneId: 's1e8-scene3' },
    ], teaching: { vocabulary: [{ korean: '체크아웃', romanization: 'chekeuaut', meaning: { en: 'Check-out', ja: 'チェックアウト', zh: '退房', th: 'เช็คเอาท์', vi: 'Trả phòng', es: 'Check-out' } }, { korean: '짐', romanization: 'jim', meaning: { en: 'Luggage/Baggage', ja: '荷物', zh: '行李', th: 'กระเป๋า/สัมภาระ', vi: 'Hành lý', es: 'Equipaje' } }, { korean: '맡기다', romanization: 'matgida', meaning: { en: 'To leave with/entrust', ja: '預ける', zh: '寄存/托管', th: 'ฝาก', vi: 'Gửi/Ký gửi', es: 'Dejar/Encomendar' } }] } },
    { id: 's1e8-scene3', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '민지', avatar: '👧', emotion: 'sad' }, dialogue: { en: 'At the airport, Minji is waiting. "벌써 가야 해요? 너무 아쉬워요!" (You have to go already? I\'m so sad!)', ja: '空港でミンジが待っている。「벌써 가야 해요? 너무 아쉬워요!」（もう行かないと？寂しいよ！）', zh: '在机场，敏智在等你。"벌써 가야 해요? 너무 아쉬워요!"（你已经要走了？太遗憾了！）', th: 'ที่สนามบิน มินจิกำลังรอ "벌써 가야 해요? 너무 아쉬워요!" (ต้องไปแล้วเหรอ? เสียดายจังเลย!)', vi: 'O san bay, Minji dang doi. "벌써 가야 해요? 너무 아쉬워요!" (Phai di roi sao? Buon qua!)', es: 'En el aeropuerto, Minji espera. "벌써 가야 해요? 너무 아쉬워요!" (¿Ya te vas? ¡Qué triste!)' }, choices: [
      { id: 's1e8-c2a', korean: '다음에 또 올게요! 잊지 마세요!', romanization: 'Daeume tto olgeyo! Itji maseyo!', translation: { en: "I'll come again next time! Don't forget me!", ja: '次また来るよ！忘れないでね！', zh: '下次还会再来的！别忘了我！', th: 'คราวหน้าจะมาอีกนะ! อย่าลืมกันนะ!', vi: 'Lan sau toi se quay lai! Dung quen toi nhe!', es: '¡Vendré de nuevo! ¡No me olvides!' }, correctness: 'perfect', feedback: { en: "Beautiful! 🌟 '다음에' means next time, '또' means again!", ja: '素敵！🌟「다음에」は「次に」、「또」は「また」の意味！', zh: '太美了！🌟"다음에"是下次，"또"是再/又的意思！', th: 'สวยงาม! 🌟 "다음에" แปลว่าคราวหน้า, "또" แปลว่าอีก!', vi: 'Tuyet! 🌟 "다음에" nghia la lan sau, "또" nghia la lai!', es: '¡Hermoso! 🌟 "다음에" significa la próxima vez, "또" significa otra vez!' }, nextSceneId: 's1e8-scene4' },
    ], teaching: { vocabulary: [{ korean: '다음에', romanization: 'daeume', meaning: { en: 'Next time', ja: '次に', zh: '下次', th: 'คราวหน้า', vi: 'Lan sau', es: 'La próxima vez' } }, { korean: '또', romanization: 'tto', meaning: { en: 'Again', ja: 'また', zh: '又/再', th: 'อีก', vi: 'Lai', es: 'Otra vez' } }, { korean: '아쉽다', romanization: 'aswipda', meaning: { en: 'To feel sad/regretful', ja: '惜しい/寂しい', zh: '遗憾/可惜', th: 'เสียดาย', vi: 'Tiếc/Buồn', es: 'Sentir pena' } }] } },
    { id: 's1e8-scene4', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '민지', avatar: '👧', emotion: 'happy' }, dialogue: { en: '"카카오톡 아이디 뭐예요? 연락해요!" (What\'s your KakaoTalk ID? Let\'s stay in touch!)', ja: '「카카오톡 아이디 뭐예요? 연락해요!」（カカオトークのID何？連絡しようね！）', zh: '"카카오톡 아이디 뭐예요? 연락해요!"（你的KakaoTalk ID是什么？保持联系！）', th: '"카카오톡 아이디 뭐예요? 연락해요!" (ไอดีคาคาโอท็อกคืออะไรคะ? ติดต่อกันนะ!)', vi: '"카카오톡 아이디 뭐예요? 연락해요!" (ID KakaoTalk cua ban la gi? Lien lac nhe!)', es: '"카카오톡 아이디 뭐예요? 연락해요!" (¿Cuál es tu ID de KakaoTalk? ¡Mantengamos contacto!)' }, choices: [
      { id: 's1e8-c3a', korean: '제 아이디는 "seoul_friend"예요! 꼭 연락해요!', romanization: 'Je aidineun "seoul_friend"yeyo! Kkok yeollakhaeyo!', translation: { en: 'My ID is "seoul_friend"! Definitely stay in touch!', ja: '私のIDは「seoul_friend」！絶対連絡してね！', zh: '我的ID是"seoul_friend"！一定要联系！', th: 'ไอดีของฉันคือ "seoul_friend" ค่ะ/ครับ! ติดต่อกันแน่นอนนะ!', vi: 'ID cua toi la "seoul_friend"! Nhat dinh lien lac nhe!', es: '¡Mi ID es "seoul_friend"! ¡Definitivamente mantengamos contacto!' }, correctness: 'perfect', feedback: { en: "Wonderful! 🌟 '연락처' = contact info, '아이디' = ID, '카카오톡' = Korea's #1 messaging app!", ja: '素晴らしい！🌟「연락처」= 連絡先、「아이디」= ID、「카카오톡」= 韓国No.1メッセンジャー！', zh: '太好了！🌟"연락처"= 联系方式，"아이디"= ID，"카카오톡"= 韩国第一聊天软件！', th: 'ยอดเยี่ยม! 🌟 "연락처" = ข้อมูลติดต่อ, "아이디" = ไอดี, "카카오톡" = แอปแชทอันดับ 1 ของเกาหลี!', vi: 'Tuyet voi! 🌟 "연락처" = thong tin lien lac, "아이디" = ID, "카카오톡" = ung dung nhan tin so 1 Han Quoc!', es: '¡Maravilloso! 🌟 "연락처" = contacto, "아이디" = ID, "카카오톡" = la app de mensajería #1 de Corea!' }, nextSceneId: 's1e8-scene5' },
    ], teaching: { vocabulary: [{ korean: '연락처', romanization: 'yeollakcheo', meaning: { en: 'Contact info', ja: '連絡先', zh: '联系方式', th: 'ข้อมูลติดต่อ', vi: 'Thong tin lien lac', es: 'Información de contacto' } }, { korean: '아이디', romanization: 'aidi', meaning: { en: 'ID/Username', ja: 'ID', zh: 'ID/用户名', th: 'ไอดี', vi: 'ID', es: 'ID/Usuario' } }, { korean: '카카오톡', romanization: 'kakaoток', meaning: { en: 'KakaoTalk (messaging app)', ja: 'カカオトーク', zh: 'KakaoTalk(聊天软件)', th: 'คาคาโอท็อก', vi: 'KakaoTalk', es: 'KakaoTalk (app de mensajería)' } }], culturalNote: { en: '💡 KakaoTalk is THE messaging app in Korea - almost everyone uses it! Exchanging KakaoTalk IDs is like exchanging phone numbers.', ja: '💡 カカオトークは韓国の国民的メッセンジャー！IDの交換は電話番号の交換のようなもの。', zh: '💡 KakaoTalk是韩国的国民聊天软件！交换ID就像交换电话号码。', th: '💡 คาคาโอท็อกเป็นแอปแชทหลักของเกาหลี! การแลกไอดีเหมือนแลกเบอร์โทร', vi: '💡 KakaoTalk la ung dung nhan tin chinh o Han Quoc! Trao doi ID giong nhu trao doi so dien thoai.', es: '💡 KakaoTalk es LA app de mensajería en Corea. Intercambiar IDs es como intercambiar números.' } } },
    { id: 's1e8-scene5', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '민지', avatar: '👧', emotion: 'happy' }, dialogue: { en: 'It\'s time to say goodbye. Minji hugs you: "다음에 꼭 다시 와요!" (Definitely come back next time!)', ja: 'お別れの時間。ミンジがハグして：「다음에 꼭 다시 와요!」（次は絶対また来てね！）', zh: '该说再见了。敏智拥抱你："다음에 꼭 다시 와요!"（下次一定要再来！）', th: 'ถึงเวลาบอกลา มินจิกอดคุณ: "다음에 꼭 다시 와요!" (คราวหน้ามาอีกแน่นอนนะ!)', vi: 'Den luc tam biet. Minji om ban: "다음에 꼭 다시 와요!" (Lan sau nhat dinh quay lai nhe!)', es: 'Es hora de despedirse. Minji te abraza: "다음에 꼭 다시 와요!" (¡Definitivamente vuelve!)' }, choices: [
      { id: 's1e8-c4a', korean: '안녕히 계세요! 다음에 또 만나요!', romanization: 'Annyeonghi gyeseyo! Daeume tto mannayo!', translation: { en: "Goodbye! (to someone staying) Let's meet again next time!", ja: 'さようなら！次また会おうね！', zh: '再见！下次再见！', th: 'ลาก่อนนะคะ/ครับ! คราวหน้าเจอกันอีกนะ!', vi: 'Tam biet! Lan sau gap lai nhe!', es: '¡Adiós! ¡Nos vemos la próxima!' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '안녕히 계세요' = goodbye (when YOU leave), '안녕히 가세요' = goodbye (when THEY leave)!", ja: '完璧！🌟「안녕히 계세요」= さよなら（自分が去る時）、「안녕히 가세요」= さよなら（相手が去る時）！', zh: '完美！🌟"안녕히 계세요"= 再见（你走时），"안녕히 가세요"= 再见（他们走时）！', th: 'สมบูรณ์แบบ! 🌟 "안녕히 계세요" = ลาก่อน(คุณไป), "안녕히 가세요" = ลาก่อน(เขาไป)!', vi: 'Hoan hao! 🌟 "안녕히 계세요" = tam biet (ban di), "안녕히 가세요" = tam biet (ho di)!', es: '¡Perfecto! 🌟 "안녕히 계세요" = adiós (tú te vas), "안녕히 가세요" = adiós (ellos se van)!' }, nextSceneId: 's1e8-scene6' },
      { id: 's1e8-c4b', korean: '안녕히 가세요! 잊지 마세요!', romanization: 'Annyeonghi gaseyo! Itji maseyo!', translation: { en: "Goodbye! (to someone leaving) Don't forget me!", ja: 'さようなら！忘れないでね！', zh: '再见！别忘了我！', th: 'ลาก่อนนะคะ/ครับ! อย่าลืมกันนะ!', vi: 'Tam biet! Dung quen toi nhe!', es: '¡Adiós! ¡No me olvides!' }, correctness: 'good', feedback: { en: "Almost! 👍 '안녕히 가세요' is for when THEY leave. Since YOU are leaving, use '안녕히 계세요'!", ja: '惜しい！👍「안녕히 가세요」は相手が去る時。自分が去る時は「안녕히 계세요」！', zh: '差一点！👍 "안녕히 가세요"是他们走时说的。你走时应说"안녕히 계세요"！', th: 'เกือบแล้ว! 👍 "안녕히 가세요" ใช้เมื่อเขาไป เมื่อคุณไปใช้ "안녕히 계세요"!', vi: 'Gan dung! 👍 "안녕히 가세요" dung khi HO di. Vi BAN dang di, dung "안녕히 계세요"!', es: '¡Casi! 👍 "안녕히 가세요" es cuando ELLOS se van. Como TÚ te vas, usa "안녕히 계세요"!' }, nextSceneId: 's1e8-scene6' },
    ], teaching: { vocabulary: [{ korean: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', meaning: { en: 'Goodbye (to someone staying)', ja: 'さようなら（残る人へ）', zh: '再见(对留下的人)', th: 'ลาก่อน(คนที่อยู่)', vi: 'Tam biet (nguoi o lai)', es: 'Adiós (a quien se queda)' } }, { korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', meaning: { en: 'Goodbye (to someone leaving)', ja: 'さようなら（去る人へ）', zh: '再见(对离开的人)', th: 'ลาก่อน(คนที่ไป)', vi: 'Tam biet (nguoi di)', es: 'Adiós (a quien se va)' } }, { korean: '만나다', romanization: 'mannada', meaning: { en: 'To meet', ja: '会う', zh: '见面', th: 'พบ/เจอ', vi: 'Gap', es: 'Encontrarse' } }], culturalNote: { en: '💡 Korean has two goodbyes: 안녕히 계세요 (you leave, they stay) vs 안녕히 가세요 (they leave, you stay)!', ja: '💡 韓国語には2つのさよならがある：自分が去る時と相手が去る時！', zh: '💡 韩语有两种再见：你走时说的和他们走时说的！', th: '💡 เกาหลีมีลาก่อน 2 แบบ: 안녕히 계세요 (คุณไป) vs 안녕히 가세요 (เขาไป)!', vi: '💡 Tieng Han co 2 cach tam biet: 안녕히 계세요 (ban di) vs 안녕히 가세요 (ho di)!', es: '💡 El coreano tiene dos despedidas: cuando tú te vas vs cuando ellos se van!' } } },
    { id: 's1e8-scene6', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'celebrating' }, dialogue: { en: "🎊 SEASON 1 COMPLETE! 🎊\n\nYou finished Seoul First Steps! You learned:\n✅ Taxis & Subways\n✅ Hotels & Cafes\n✅ Shopping & Street Food\n✅ Asking Directions\n✅ Making Friends & Goodbyes\n✅ Hotel Check-out & KakaoTalk\n\nYou earned the '🌟 Seoul Explorer' badge!\n\nReady for Season 2: Busan Beach Trip? 🏖️", ja: '🎊 シーズン1完了！🎊\n\nソウル最初の一歩を終了！学んだこと：\n✅ タクシー＆地下鉄\n✅ ホテル＆カフェ\n✅ ショッピング＆屋台\n✅ 道案内\n✅ 友達作り＆お別れ\n✅ チェックアウト＆カカオトーク\n\n「🌟 ソウル探検家」バッジ獲得！\n\nシーズン2：釜山ビーチ旅行へ？🏖️', zh: '🎊 第一季完成！🎊\n\n完成首尔初体验！你学到了：\n✅ 出租车和地铁\n✅ 酒店和咖啡店\n✅ 购物和街头美食\n✅ 问路\n✅ 交朋友和告别\n✅ 退房和KakaoTalk\n\n获得"🌟 首尔探险家"徽章！\n\n准备好第二季：釜山海滩之旅了吗？🏖️', th: '🎊 ซีซั่น 1 จบแล้ว! 🎊\n\nจบก้าวแรกในโซล! คุณเรียนรู้:\n✅ แท็กซี่ & รถไฟใต้ดิน\n✅ โรงแรม & คาเฟ่\n✅ ช้อปปิ้ง & อาหารริมทาง\n✅ ถามทาง\n✅ ผูกมิตร & บอกลา\n✅ เช็คเอาท์ & คาคาโอท็อก\n\nได้รับเหรียญ "🌟 นักสำรวจโซล"!\n\nพร้อมสำหรับซีซั่น 2: ทริปหาดปูซาน? 🏖️', vi: '🎊 MUA 1 HOAN THANH! 🎊\n\nHoan thanh Buoc dau Seoul! Ban da hoc:\n✅ Taxi & Tau dien\n✅ Khach san & Cafe\n✅ Mua sam & Do an duong pho\n✅ Hoi duong\n✅ Ket ban & Tam biet\n✅ Tra phong & KakaoTalk\n\nNhan huy hieu "🌟 Nha tham hiem Seoul"!\n\nSan sang cho Mua 2: Chuyen di bien Busan? 🏖️', es: '🎊 ¡TEMPORADA 1 COMPLETA! 🎊\n\nTerminaste Primeros Pasos en Seúl! Aprendiste:\n✅ Taxis y metro\n✅ Hoteles y cafés\n✅ Compras y comida callejera\n✅ Pedir direcciones\n✅ Hacer amigos y despedidas\n✅ Check-out y KakaoTalk\n\n¡Obtuviste "🌟 Explorador de Seúl"!\n\n¿Listo para Temporada 2: Viaje a la playa de Busan? 🏖️' } },
  ],
};

// Export all episodes
season1.episodes = [s1e1, s1e2, s1e3, s1e4, s1e5, s1e6, s1e7, s1e8];

export const season1Episodes = season1.episodes;
export default season1Episodes;
