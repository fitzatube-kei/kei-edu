import { StoryEpisode, StorySeason } from '@/types/story';

// Season 2: Busan Trip - 8 Episodes
export const season2: StorySeason = {
  id: 2,
  name: {
    en: 'Busan Trip',
    ja: '釜山の旅',
    zh: '釜山之旅',
    th: 'ทริปปูซาน',
    vi: 'Chuyến đi Busan',
    es: 'Viaje a Busan',
  },
  description: {
    en: 'Explore the beautiful coastal city of Busan!',
    ja: '美しい港町、釜山を探検しよう！',
    zh: '探索美丽的海滨城市釜山！',
    th: 'สำรวจเมืองชายฝั่งที่สวยงามปูซาน!',
    vi: 'Khám phá thành phố biển xinh đẹp Busan!',
    es: '¡Explora la hermosa ciudad costera de Busan!',
  },
  theme: 'Beach & Seafood',
  location: 'Busan',
  color: '#4FACFE',
  icon: 'beach',
  difficulty: 'beginner',
  isPremium: false,
  totalEpisodes: 8,
  episodes: [],
};

// Episode 1: KTX to Busan
export const s2e1: StoryEpisode = {
  id: 's2e1',
  season: 2,
  episode: 1,
  title: { en: 'KTX to Busan', ja: 'KTXで釜山へ', zh: 'KTX去釜山', th: 'นั่ง KTX ไปปูซาน', vi: 'KTX đến Busan', es: 'KTX a Busan' },
  description: { en: 'Take the high-speed train to Busan!', ja: '高速列車で釜山へ行こう！', zh: '乘高铁去釜山！', th: 'นั่งรถไฟความเร็วสูงไปปูซาน!', vi: 'Đi tàu cao tốc đến Busan!', es: '¡Toma el tren de alta velocidad a Busan!' },
  icon: '🚄',
  requiredLevel: 9,
  rewards: { xp: 200, badge: 'ktx_rider', badgeName: { en: 'KTX Rider', ja: 'KTXライダー', zh: 'KTX乘客', th: 'ผู้โดยสาร KTX', vi: 'Người đi KTX', es: 'Viajero KTX' } },
  isPremium: false,
  scenes: [
    { id: 's2e1-scene1', background: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's take the KTX to Busan! 🚄 It's only 2.5 hours from Seoul. First, let's buy tickets at Seoul Station!", ja: 'KTXで釜山に行こう！🚄 ソウルからたった2.5時間！まずソウル駅で切符を買おう！', zh: '坐KTX去釜山吧！🚄 从首尔只要2.5小时！先在首尔站买票！', th: 'ไปนั่ง KTX ไปปูซานกัน! 🚄 จากโซลแค่ 2.5 ชั่วโมง! ซื้อตั๋วที่สถานีโซลก่อน!', vi: 'Đi KTX đến Busan! 🚄 Chỉ 2.5 giờ từ Seoul! Mua vé ở ga Seoul trước!', es: '¡Vamos en KTX a Busan! 🚄 ¡Solo 2.5 horas desde Seúl! ¡Compremos boletos en la estación!' }, nextSceneId: 's2e1-scene2' },
    { id: 's2e1-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '역무원', avatar: '/images/story/str_crt_taxi01.png', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 어디로 가세요?" (Hello! Where are you going?)', ja: '「안녕하세요! 어디로 가세요?」（こんにちは！どちらへ？）', zh: '"안녕하세요! 어디로 가세요?"（您好！去哪里？）', th: '"안녕하세요! 어디로 가세요?" (สวัสดีครับ! ไปไหนครับ?)', vi: '"안녕하세요! 어디로 가세요?" (Xin chào! Đi đâu ạ?)', es: '"안녕하세요! 어디로 가세요?" (¡Hola! ¿A dónde va?)' }, choices: [
      { id: 's2e1-c1a', korean: '부산 가는 표 주세요', romanization: 'Busan ganeun pyo juseyo', translation: { en: 'Ticket to Busan please', ja: '釜山行きの切符をください', zh: '请给我去釜山的票', th: 'ขอตั๋วไปปูซานค่ะ/ครับ', vi: 'Cho tôi vé đi Busan', es: 'Un boleto a Busan por favor' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '가는 표' = ticket going to...!", ja: '完璧！🌟「가는 표」= ～行きの切符！', zh: '完美！🌟"가는 표"= 去…的票！', th: 'สมบูรณ์แบบ! 🌟 "가는 표" = ตั๋วไป...!', vi: 'Hoàn hảo! 🌟 "가는 표" = vé đi...!', es: '¡Perfecto! 🌟 "가는 표" = boleto a...!' }, nextSceneId: 's2e1-scene3' },
    ], teaching: { vocabulary: [{ korean: '표', romanization: 'pyo', meaning: { en: 'Ticket', ja: '切符', zh: '票', th: 'ตั๋ว', vi: 'Vé', es: 'Boleto' } }, { korean: 'KTX', romanization: 'KTX', meaning: { en: "Korea's high-speed train", ja: '韓国の高速列車', zh: '韩国高铁', th: 'รถไฟความเร็วสูงเกาหลี', vi: 'Tàu cao tốc Hàn Quốc', es: 'Tren de alta velocidad coreano' } }] } },
    { id: 's2e1-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "All aboard! 🎉 You learned:\n✅ '부산 가는 표' - Ticket to Busan\n✅ KTX = Korea's high-speed train\n\nYou earned the '🚄 KTX Rider' badge!", ja: '出発！🎉 学んだこと：\n✅「부산 가는 표」- 釜山行きの切符\n✅ KTX = 韓国の高速列車\n\n「🚄 KTXライダー」バッジ獲得！', zh: '出发！🎉 你学到了：\n✅ "부산 가는 표" - 去釜山的票\n✅ KTX = 韩国高铁\n\n获得"🚄 KTX乘客"徽章！', th: 'ออกเดินทาง! 🎉 คุณเรียนรู้:\n✅ "부산 가는 표" - ตั๋วไปปูซาน\n✅ KTX = รถไฟความเร็วสูงเกาหลี\n\nได้รับเหรียญ "🚄 ผู้โดยสาร KTX"!', vi: 'Lên tàu! 🎉 Bạn đã học:\n✅ "부산 가는 표" - Vé đi Busan\n✅ KTX = Tàu cao tốc Hàn Quốc\n\nNhận huy hiệu "🚄 Người đi KTX"!', es: '¡A bordo! 🎉 Aprendiste:\n✅ "부산 가는 표" - Boleto a Busan\n✅ KTX = Tren de alta velocidad\n\n¡Obtuviste "🚄 Viajero KTX"!' } },
  ],
};

// Episode 2: Haeundae Beach
export const s2e2: StoryEpisode = {
  id: 's2e2',
  season: 2,
  episode: 2,
  title: { en: 'Haeundae Beach', ja: '海雲台ビーチ', zh: '海云台海滩', th: 'หาดแฮอุนแด', vi: 'Bãi biển Haeundae', es: 'Playa Haeundae' },
  description: { en: "Visit Korea's most famous beach!", ja: '韓国で最も有名なビーチへ！', zh: '去韩国最有名的海滩！', th: 'ไปหาดที่มีชื่อเสียงที่สุดในเกาหลี!', vi: 'Đến bãi biển nổi tiếng nhất Hàn Quốc!', es: '¡Visita la playa más famosa de Corea!' },
  icon: '🏖️',
  requiredLevel: 10,
  rewards: { xp: 200, badge: 'beach_lover', badgeName: { en: 'Beach Lover', ja: 'ビーチ好き', zh: '海滩爱好者', th: 'คนรักชายหาด', vi: 'Người yêu biển', es: 'Amante de la playa' } },
  isPremium: false,
  scenes: [
    { id: 's2e2-scene1', background: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "We're at Haeundae Beach! 🏖️ It's hot! Let's get some drinks and rent beach chairs!", ja: '海雲台ビーチだ！🏖️ 暑い！飲み物を買ってビーチチェアを借りよう！', zh: '到海云台了！🏖️ 好热！买点饮料租沙滩椅吧！', th: 'มาถึงหาดแฮอุนแดแล้ว! 🏖️ ร้อนจัง! ไปซื้อเครื่องดื่มและเช่าเก้าอี้ชายหาดกัน!', vi: 'Đến Haeundae rồi! 🏖️ Nóng quá! Mua đồ uống và thuê ghế bãi biển!', es: '¡Estamos en Haeundae! 🏖️ ¡Hace calor! ¡Compremos bebidas y alquilemos sillas!' }, nextSceneId: 's2e2-scene2' },
    { id: 's2e2-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '상인', avatar: '👨', emotion: 'happy' }, dialogue: { en: '"뭐 필요하세요?" (What do you need?)', ja: '「뭐 필요하세요?」（何が必要ですか？）', zh: '"뭐 필요하세요?"（您需要什么？）', th: '"뭐 필요하세요?" (ต้องการอะไรคะ/ครับ?)', vi: '"뭐 필요하세요?" (Bạn cần gì?)', es: '"뭐 필요하세요?" (¿Qué necesita?)' }, choices: [
      { id: 's2e2-c1a', korean: '파라솔이랑 의자 빌려주세요', romanization: 'Parasol-irang uija billyeojuseyo', translation: { en: 'Can I rent a parasol and chairs please', ja: 'パラソルと椅子を貸してください', zh: '请租给我遮阳伞和椅子', th: 'ขอเช่าร่มและเก้าอี้ค่ะ/ครับ', vi: 'Cho thuê ô và ghế', es: 'Quisiera alquilar sombrilla y sillas' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '빌려주세요' = please lend/rent to me!", ja: '完璧！🌟「빌려주세요」= 貸してください！', zh: '完美！🌟"빌려주세요"= 请借给我！', th: 'สมบูรณ์แบบ! 🌟 "빌려주세요" = ให้เช่าด้วย!', vi: 'Hoàn hảo! 🌟 "빌려주세요" = cho thuê!', es: '¡Perfecto! 🌟 "빌려주세요" = présteme/alquíleme!' }, nextSceneId: 's2e2-scene3' },
    ], teaching: { vocabulary: [{ korean: '빌리다', romanization: 'billida', meaning: { en: 'To borrow/rent', ja: '借りる', zh: '借/租', th: 'ยืม/เช่า', vi: 'Thuê/mượn', es: 'Alquilar/prestar' } }, { korean: '파라솔', romanization: 'parasol', meaning: { en: 'Beach umbrella', ja: 'パラソル', zh: '遮阳伞', th: 'ร่มชายหาด', vi: 'Ô che nắng', es: 'Sombrilla' } }] } },
    { id: 's2e2-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Beach day! 🎉 You learned:\n✅ '빌려주세요' - Please rent to me\n✅ '파라솔' - Beach umbrella\n\nYou earned the '🏖️ Beach Lover' badge!", ja: 'ビーチ日和！🎉 学んだこと：\n✅「빌려주세요」- 貸してください\n✅「파라솔」- パラソル\n\n「🏖️ ビーチ好き」バッジ獲得！', zh: '海滩日！🎉 你学到了：\n✅ "빌려주세요" - 请租给我\n✅ "파라솔" - 遮阳伞\n\n获得"🏖️ 海滩爱好者"徽章！', th: 'วันพักผ่อนชายหาด! 🎉 คุณเรียนรู้:\n✅ "빌려주세요" - ให้เช่าด้วย\n✅ "파라솔" - ร่มชายหาด\n\nได้รับเหรียญ "🏖️ คนรักชายหาด"!', vi: 'Ngày ở biển! 🎉 Bạn đã học:\n✅ "빌려주세요" - Cho thuê\n✅ "파라솔" - Ô che nắng\n\nNhận huy hiệu "🏖️ Người yêu biển"!', es: '¡Día de playa! 🎉 Aprendiste:\n✅ "빌려주세요" - Alquíleme\n✅ "파라솔" - Sombrilla\n\n¡Obtuviste "🏖️ Amante de la playa"!' } },
  ],
};

// Episode 3: Jagalchi Fish Market
export const s2e3: StoryEpisode = {
  id: 's2e3',
  season: 2,
  episode: 3,
  title: { en: 'Jagalchi Fish Market', ja: 'チャガルチ市場', zh: '札嘎其鱼市场', th: 'ตลาดปลาจากัลชิ', vi: 'Chợ cá Jagalchi', es: 'Mercado de pescado Jagalchi' },
  description: { en: 'Try fresh seafood at the famous market!', ja: '有名な市場で新鮮なシーフードを！', zh: '在著名市场吃新鲜海鲜！', th: 'ลองอาหารทะเลสดที่ตลาดดัง!', vi: 'Thử hải sản tươi ở chợ nổi tiếng!', es: '¡Prueba mariscos frescos en el famoso mercado!' },
  icon: '🦐',
  requiredLevel: 11,
  rewards: { xp: 250, badge: 'seafood_fan', badgeName: { en: 'Seafood Fan', ja: 'シーフードファン', zh: '海鲜爱好者', th: 'แฟนอาหารทะเล', vi: 'Fan hải sản', es: 'Fan de mariscos' } },
  isPremium: false,
  scenes: [
    { id: 's2e3-scene1', background: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', character: { name: '아주머니', avatar: '👵', emotion: 'happy' }, dialogue: { en: '"어서와요! 싱싱한 해산물 있어요!" (Welcome! We have fresh seafood!)', ja: '「어서와요! 싱싱한 해산물 있어요!」（いらっしゃい！新鮮な海産物あるよ！）', zh: '"어서와요! 싱싱한 해산물 있어요!"（欢迎！有新鲜海鲜！）', th: '"어서와요! 싱싱한 해산물 있어요!" (ยินดีต้อนรับ! มีอาหารทะเลสดๆ!)', vi: '"어서와요! 싱싱한 해산물 있어요!" (Chào mừng! Có hải sản tươi!)', es: '"어서와요! 싱싱한 해산물 있어요!" (¡Bienvenido! ¡Tenemos mariscos frescos!)' }, choices: [
      { id: 's2e3-c1a', korean: '회 먹고 싶어요', romanization: 'Hoe meokgo sipeoyo', translation: { en: 'I want to eat raw fish', ja: '刺身が食べたいです', zh: '我想吃生鱼片', th: 'อยากกินปลาดิบค่ะ/ครับ', vi: 'Tôi muốn ăn cá sống', es: 'Quiero comer pescado crudo' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '회' = Korean raw fish (sashimi)!", ja: '完璧！🌟「회」= 韓国の刺身！', zh: '完美！🌟"회"= 韩国生鱼片！', th: 'สมบูรณ์แบบ! 🌟 "회" = ปลาดิบเกาหลี!', vi: 'Hoàn hảo! 🌟 "회" = cá sống Hàn Quốc!', es: '¡Perfecto! 🌟 "회" = pescado crudo coreano!' }, nextSceneId: 's2e3-scene2' },
    ], teaching: { vocabulary: [{ korean: '회', romanization: 'hoe', meaning: { en: 'Raw fish (sashimi)', ja: '刺身', zh: '生鱼片', th: 'ปลาดิบ', vi: 'Cá sống', es: 'Pescado crudo' } }, { korean: '싱싱하다', romanization: 'singsinghada', meaning: { en: 'Fresh', ja: '新鮮', zh: '新鲜', th: 'สด', vi: 'Tươi', es: 'Fresco' } }] } },
    { id: 's2e3-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '아주머니', avatar: '👵', emotion: 'excited' }, dialogue: { en: '"이거 드셔봐요! 아주 맛있어요!" (Try this! It\'s very delicious!)', ja: '「이거 드셔봐요! 아주 맛있어요!」（これ食べてみて！とても美味しいよ！）', zh: '"이거 드셔봐요! 아주 맛있어요!"（试试这个！非常好吃！）', th: '"이거 드셔봐요! 아주 맛있어요!" (ลองอันนี้สิ! อร่อยมาก!)', vi: '"이거 드셔봐요! 아주 맛있어요!" (Thử cái này! Rất ngon!)', es: '"이거 드셔봐요! 아주 맛있어요!" (¡Pruebe esto! ¡Está muy delicioso!)' }, choices: [
      { id: 's2e3-c2a', korean: '와! 진짜 맛있어요!', romanization: 'Wa! Jinjja masisseoyo!', translation: { en: 'Wow! It\'s really delicious!', ja: 'わあ！本当に美味しい！', zh: '哇！真的很好吃！', th: 'ว้าว! อร่อยมากจริงๆ!', vi: 'Wow! Ngon thật!', es: '¡Guau! ¡Está muy rico!' }, correctness: 'perfect', feedback: { en: "Delicious! 🌟 '진짜' = really/truly!", ja: '美味しい！🌟「진짜」= 本当に！', zh: '好吃！🌟"진짜"= 真的！', th: 'อร่อย! 🌟 "진짜" = จริงๆ!', vi: 'Ngon! 🌟 "진짜" = thật sự!', es: '¡Delicioso! 🌟 "진짜" = realmente!' }, nextSceneId: 's2e3-scene3' },
    ], teaching: { vocabulary: [{ korean: '맛있다', romanization: 'masitda', meaning: { en: 'Delicious', ja: '美味しい', zh: '好吃', th: 'อร่อย', vi: 'Ngon', es: 'Delicioso' } }, { korean: '진짜', romanization: 'jinjja', meaning: { en: 'Really/truly', ja: '本当に', zh: '真的', th: 'จริงๆ', vi: 'Thật sự', es: 'Realmente' } }] } },
    { id: 's2e3-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Seafood feast! 🎉 You learned:\n✅ '회' - Raw fish\n✅ '싱싱하다' - Fresh\n✅ '맛있어요' - It's delicious\n\nYou earned the '🦐 Seafood Fan' badge!", ja: 'シーフードの宴！🎉 学んだこと：\n✅「회」- 刺身\n✅「싱싱하다」- 新鮮\n✅「맛있어요」- 美味しい\n\n「🦐 シーフードファン」バッジ獲得！', zh: '海鲜盛宴！🎉 你学到了：\n✅ "회" - 生鱼片\n✅ "싱싱하다" - 新鲜\n✅ "맛있어요" - 好吃\n\n获得"🦐 海鲜爱好者"徽章！', th: 'เลี้ยงอาหารทะเล! 🎉 คุณเรียนรู้:\n✅ "회" - ปลาดิบ\n✅ "싱싱하다" - สด\n✅ "맛있어요" - อร่อย\n\nได้รับเหรียญ "🦐 แฟนอาหารทะเล"!', vi: 'Tiệc hải sản! 🎉 Bạn đã học:\n✅ "회" - Cá sống\n✅ "싱싱하다" - Tươi\n✅ "맛있어요" - Ngon\n\nNhận huy hiệu "🦐 Fan hải sản"!', es: '¡Festín de mariscos! 🎉 Aprendiste:\n✅ "회" - Pescado crudo\n✅ "싱싱하다" - Fresco\n✅ "맛있어요" - Delicioso\n\n¡Obtuviste "🦐 Fan de mariscos"!' } },
  ],
};

// Episode 4: Gamcheon Culture Village
export const s2e4: StoryEpisode = {
  id: 's2e4',
  season: 2,
  episode: 4,
  title: { en: 'Gamcheon Culture Village', ja: '甘川文化村', zh: '甘川文化村', th: 'หมู่บ้านวัฒนธรรมกัมชอน', vi: 'Làng văn hóa Gamcheon', es: 'Aldea Cultural Gamcheon' },
  description: { en: 'Explore the colorful hillside village!', ja: 'カラフルな丘の村を探検！', zh: '探索五彩斑斓的山村！', th: 'สำรวจหมู่บ้านบนเนินเขาหลากสี!', vi: 'Khám phá ngôi làng đầy màu sắc!', es: '¡Explora el colorido pueblo en la colina!' },
  icon: '🎨',
  requiredLevel: 12,
  rewards: { xp: 200, badge: 'art_explorer', badgeName: { en: 'Art Explorer', ja: 'アート探検家', zh: '艺术探险家', th: 'นักสำรวจศิลปะ', vi: 'Nhà thám hiểm nghệ thuật', es: 'Explorador de arte' } },
  isPremium: false,
  scenes: [
    { id: 's2e4-scene1', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Welcome to Gamcheon Culture Village! 🎨 It's called Korea's Santorini! Let's take photos and explore the art!", ja: '甘川文化村へようこそ！🎨 韓国のサントリーニと呼ばれてるよ！写真を撮ってアートを見よう！', zh: '欢迎来到甘川文化村！🎨 被称为韩国的圣托里尼！拍照看艺术吧！', th: 'ยินดีต้อนรับสู่หมู่บ้านวัฒนธรรมกัมชอน! 🎨 เรียกว่าซานโตรินีของเกาหลี! ถ่ายรูปและดูงานศิลปะกัน!', vi: 'Chào mừng đến làng Gamcheon! 🎨 Được gọi là Santorini của Hàn Quốc! Chụp ảnh và xem nghệ thuật!', es: '¡Bienvenido a Gamcheon! 🎨 ¡Lo llaman el Santorini coreano! ¡Tomemos fotos y exploremos el arte!' }, nextSceneId: 's2e4-scene2' },
    { id: 's2e4-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '관광객', avatar: '👩', emotion: 'happy' }, dialogue: { en: 'A tourist asks: "사진 찍어 주실 수 있어요?" (Can you take a photo for me?)', ja: '観光客が聞く：「사진 찍어 주실 수 있어요?」（写真を撮ってもらえますか？）', zh: '游客问："사진 찍어 주실 수 있어요?"（能帮我拍照吗？）', th: 'นักท่องเที่ยวถาม: "사진 찍어 주실 수 있어요?" (ช่วยถ่ายรูปได้ไหมคะ?)', vi: 'Du khách hỏi: "사진 찍어 주실 수 있어요?" (Bạn có thể chụp ảnh giúp tôi?)', es: 'Un turista pregunta: "사진 찍어 주실 수 있어요?" (¿Puede tomarme una foto?)' }, choices: [
      { id: 's2e4-c1a', korean: '네, 물론이죠!', romanization: 'Ne, mullon-ijyo!', translation: { en: 'Yes, of course!', ja: 'はい、もちろん！', zh: '当然可以！', th: 'ได้สิคะ/ครับ!', vi: 'Vâng, tất nhiên!', es: '¡Sí, por supuesto!' }, correctness: 'perfect', feedback: { en: "So helpful! 🌟 '물론이죠' = of course!", ja: '親切！🌟「물론이죠」= もちろん！', zh: '真热心！🌟"물론이죠"= 当然！', th: 'ช่วยเหลือดี! 🌟 "물론이죠" = แน่นอน!', vi: 'Thật tốt bụng! 🌟 "물론이죠" = tất nhiên!', es: '¡Qué amable! 🌟 "물론이죠" = ¡por supuesto!' }, nextSceneId: 's2e4-scene3' },
    ], teaching: { vocabulary: [{ korean: '사진', romanization: 'sajin', meaning: { en: 'Photo', ja: '写真', zh: '照片', th: 'รูปถ่าย', vi: 'Ảnh', es: 'Foto' } }, { korean: '찍다', romanization: 'jjikda', meaning: { en: 'To take (photo)', ja: '撮る', zh: '拍', th: 'ถ่าย', vi: 'Chụp', es: 'Tomar' } }] } },
    { id: 's2e4-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Beautiful views! 🎉 You learned:\n✅ '사진 찍다' - Take a photo\n✅ '물론이죠' - Of course\n\nYou earned the '🎨 Art Explorer' badge!", ja: '素敵な景色！🎉 学んだこと：\n✅「사진 찍다」- 写真を撮る\n✅「물론이죠」- もちろん\n\n「🎨 アート探検家」バッジ獲得！', zh: '美丽的风景！🎉 你学到了：\n✅ "사진 찍다" - 拍照\n✅ "물론이죠" - 当然\n\n获得"🎨 艺术探险家"徽章！', th: 'วิวสวย! 🎉 คุณเรียนรู้:\n✅ "사진 찍다" - ถ่ายรูป\n✅ "물론이죠" - แน่นอน\n\nได้รับเหรียญ "🎨 นักสำรวจศิลปะ"!', vi: 'Cảnh đẹp! 🎉 Bạn đã học:\n✅ "사진 찍다" - Chụp ảnh\n✅ "물론이죠" - Tất nhiên\n\nNhận huy hiệu "🎨 Nhà thám hiểm nghệ thuật"!', es: '¡Hermosas vistas! 🎉 Aprendiste:\n✅ "사진 찍다" - Tomar foto\n✅ "물론이죠" - Por supuesto\n\n¡Obtuviste "🎨 Explorador de arte"!' } },
  ],
};

// Episode 5: Busan Temple (Haedong Yonggungsa)
export const s2e5: StoryEpisode = {
  id: 's2e5',
  season: 2,
  episode: 5,
  title: { en: 'Seaside Temple', ja: '海辺の寺院', zh: '海边寺庙', th: 'วัดริมทะเล', vi: 'Chùa ven biển', es: 'Templo junto al mar' },
  description: { en: 'Visit the beautiful Haedong Yonggungsa Temple!', ja: '美しい海東龍宮寺を訪問！', zh: '参观美丽的海东龙宫寺！', th: 'เยี่ยมชมวัดแฮดงยงกุงซาที่สวยงาม!', vi: 'Thăm chùa Haedong Yonggungsa!', es: '¡Visita el hermoso templo Haedong Yonggungsa!' },
  icon: '🛕',
  requiredLevel: 13,
  rewards: { xp: 200, badge: 'temple_visitor', badgeName: { en: 'Temple Visitor', ja: 'お寺訪問者', zh: '寺庙游客', th: 'ผู้เยี่ยมชมวัด', vi: 'Khách thăm chùa', es: 'Visitante de templos' } },
  isPremium: false,
  scenes: [
    { id: 's2e5-scene1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "This is Haedong Yonggungsa! 🛕 One of Korea's most beautiful temples by the sea. Let's make a wish!", ja: 'ここは海東龍宮寺！🛕 韓国で最も美しい海辺の寺院の一つ。お願い事をしよう！', zh: '这是海东龙宫寺！🛕 韩国最美的海边寺庙之一。许个愿吧！', th: 'นี่คือวัดแฮดงยงกุงซา! 🛕 วัดริมทะเลที่สวยที่สุดในเกาหลี มาอธิษฐานกัน!', vi: 'Đây là Haedong Yonggungsa! 🛕 Một trong những chùa đẹp nhất Hàn Quốc bên biển. Hãy ước nguyện!', es: '¡Este es Haedong Yonggungsa! 🛕 Uno de los templos más hermosos junto al mar. ¡Pidamos un deseo!' }, nextSceneId: 's2e5-scene2' },
    { id: 's2e5-scene2', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', character: { name: '스님', avatar: '👨‍🦲', emotion: 'happy' }, dialogue: { en: '"부처님께 기도하세요." (Please pray to Buddha.)', ja: '「부처님께 기도하세요.」（仏様に祈ってください。）', zh: '"부처님께 기도하세요."（请向佛祖祈祷。）', th: '"부처님께 기도하세요." (กรุณาอธิษฐานต่อพระพุทธเจ้า)', vi: '"부처님께 기도하세요." (Hãy cầu nguyện với Phật.)', es: '"부처님께 기도하세요." (Por favor rece a Buda.)' }, choices: [
      { id: 's2e5-c1a', korean: '건강과 행복을 빌어요', romanization: 'Geongang-gwa haengbogeul bileoyo', translation: { en: 'I wish for health and happiness', ja: '健康と幸せを願います', zh: '祈求健康和幸福', th: 'ขอสุขภาพและความสุข', vi: 'Tôi cầu sức khỏe và hạnh phúc', es: 'Deseo salud y felicidad' }, correctness: 'perfect', feedback: { en: "Beautiful wish! 🌟 '빌다' = to wish/pray!", ja: '素敵な願い！🌟「빌다」= 願う！', zh: '美好的愿望！🌟"빌다"= 祈愿！', th: 'คำอวยพรสวยงาม! 🌟 "빌다" = อธิษฐาน!', vi: 'Điều ước đẹp! 🌟 "빌다" = cầu nguyện!', es: '¡Hermoso deseo! 🌟 "빌다" = desear/rezar!' }, nextSceneId: 's2e5-scene3' },
    ], teaching: { vocabulary: [{ korean: '기도', romanization: 'gido', meaning: { en: 'Prayer', ja: '祈り', zh: '祈祷', th: 'คำอธิษฐาน', vi: 'Cầu nguyện', es: 'Oración' } }, { korean: '건강', romanization: 'geongang', meaning: { en: 'Health', ja: '健康', zh: '健康', th: 'สุขภาพ', vi: 'Sức khỏe', es: 'Salud' } }, { korean: '행복', romanization: 'haengbok', meaning: { en: 'Happiness', ja: '幸せ', zh: '幸福', th: 'ความสุข', vi: 'Hạnh phúc', es: 'Felicidad' } }], culturalNote: { en: '💡 Haedong Yonggungsa is the only major temple in Korea built on the oceanside!', ja: '💡 海東龍宮寺は韓国で唯一海辺に建てられた主要な寺院！', zh: '💡 海东龙宫寺是韩国唯一建在海边的主要寺庙！', th: '💡 แฮดงยงกุงซาเป็นวัดใหญ่แห่งเดียวในเกาหลีที่สร้างริมทะเล!', vi: '💡 Haedong Yonggungsa là ngôi chùa lớn duy nhất ở Hàn Quốc được xây bên biển!', es: '💡 ¡Haedong Yonggungsa es el único templo importante en Corea construido junto al mar!' } } },
    { id: 's2e5-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Peaceful vibes! 🎉 You learned:\n✅ '기도' - Prayer\n✅ '건강' - Health\n✅ '행복' - Happiness\n\nYou earned the '🛕 Temple Visitor' badge!", ja: '平和な気持ち！🎉 学んだこと：\n✅「기도」- 祈り\n✅「건강」- 健康\n✅「행복」- 幸せ\n\n「🛕 お寺訪問者」バッジ獲得！', zh: '平静的氛围！🎉 你学到了：\n✅ "기도" - 祈祷\n✅ "건강" - 健康\n✅ "행복" - 幸福\n\n获得"🛕 寺庙游客"徽章！', th: 'บรรยากาศสงบ! 🎉 คุณเรียนรู้:\n✅ "기도" - คำอธิษฐาน\n✅ "건강" - สุขภาพ\n✅ "행복" - ความสุข\n\nได้รับเหรียญ "🛕 ผู้เยี่ยมชมวัด"!', vi: 'Không khí bình yên! 🎉 Bạn đã học:\n✅ "기도" - Cầu nguyện\n✅ "건강" - Sức khỏe\n✅ "행복" - Hạnh phúc\n\nNhận huy hiệu "🛕 Khách thăm chùa"!', es: '¡Vibraciones pacíficas! 🎉 Aprendiste:\n✅ "기도" - Oración\n✅ "건강" - Salud\n✅ "행복" - Felicidad\n\n¡Obtuviste "🛕 Visitante de templos"!' } },
  ],
};

// Episode 6: Busan Night Market
export const s2e6: StoryEpisode = {
  id: 's2e6',
  season: 2,
  episode: 6,
  title: { en: 'Busan Night Market', ja: '釜山ナイトマーケット', zh: '釜山夜市', th: 'ตลาดกลางคืนปูซาน', vi: 'Chợ đêm Busan', es: 'Mercado nocturno de Busan' },
  description: { en: 'Experience the vibrant BIFF Square night market!', ja: '活気あるBIFF広場のナイトマーケットを体験！', zh: '体验热闹的BIFF广场夜市！', th: 'สัมผัสตลาดกลางคืน BIFF Square ที่มีชีวิตชีวา!', vi: 'Trải nghiệm chợ đêm BIFF Square sôi động!', es: '¡Experimenta el vibrante mercado nocturno de BIFF Square!' },
  icon: '🌙',
  requiredLevel: 14,
  rewards: { xp: 250, badge: 'night_owl', badgeName: { en: 'Night Owl', ja: 'ナイトオウル', zh: '夜猫子', th: 'นกฮูกกลางคืน', vi: 'Cú đêm', es: 'Búho nocturno' } },
  isPremium: false,
  scenes: [
    { id: 's2e6-scene1', background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Welcome to BIFF Square at night! 🌙 Famous for street food and the Busan Film Festival. Let's try some hotteok!", ja: '夜のBIFF広場へようこそ！🌙 屋台フードと釜山映画祭で有名。ホットクを食べよう！', zh: '欢迎来到夜晚的BIFF广场！🌙 以街头美食和釜山电影节闻名。吃个糖饼吧！', th: 'ยินดีต้อนรับสู่ BIFF Square ยามค่ำ! 🌙 มีชื่อเรื่องอาหารริมทางและเทศกาลหนังปูซาน มากินโฮตต็อกกัน!', vi: 'Chào mừng đến BIFF Square về đêm! 🌙 Nổi tiếng với đồ ăn đường phố và Liên hoan phim Busan. Thử hotteok!', es: '¡Bienvenido a BIFF Square de noche! 🌙 Famoso por comida callejera y el Festival de Cine. ¡Probemos hotteok!' }, nextSceneId: 's2e6-scene2' },
    { id: 's2e6-scene2', background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)', character: { name: '상인', avatar: '👨', emotion: 'happy' }, dialogue: { en: '"호떡 드세요! 따뜻하고 달콤해요!" (Have some hotteok! It\'s warm and sweet!)', ja: '「호떡 드세요! 따뜻하고 달콤해요!」（ホットク食べて！温かくて甘いよ！）', zh: '"호떡 드세요! 따뜻하고 달콤해요!"（吃糖饼！又暖又甜！）', th: '"호떡 드세요! 따뜻하고 달콤해요!" (กินโฮตต็อกสิ! อุ่นและหวาน!)', vi: '"호떡 드세요! 따뜻하고 달콤해요!" (Ăn hotteok đi! Nóng và ngọt!)', es: '"호떡 드세요! 따뜻하고 달콤해요!" (¡Pruebe hotteok! ¡Está caliente y dulce!)' }, choices: [
      { id: 's2e6-c1a', korean: '하나 주세요!', romanization: 'Hana juseyo!', translation: { en: 'One please!', ja: '一つください！', zh: '给我一个！', th: 'ขอหนึ่งอันค่ะ/ครับ!', vi: 'Cho một cái!', es: '¡Uno por favor!' }, correctness: 'perfect', feedback: { en: "Yummy! 🌟 '하나' = one!", ja: '美味しい！🌟「하나」= 一つ！', zh: '好吃！🌟"하나"= 一个！', th: 'อร่อย! 🌟 "하나" = หนึ่ง!', vi: 'Ngon! 🌟 "하나" = một!', es: '¡Rico! 🌟 "하나" = uno!' }, nextSceneId: 's2e6-scene3' },
    ], teaching: { vocabulary: [{ korean: '호떡', romanization: 'hotteok', meaning: { en: 'Sweet filled pancake', ja: 'ホットク', zh: '糖饼', th: 'โฮตต็อก', vi: 'Hotteok', es: 'Panqueque dulce relleno' } }, { korean: '달콤하다', romanization: 'dalkomhada', meaning: { en: 'Sweet', ja: '甘い', zh: '甜', th: 'หวาน', vi: 'Ngọt', es: 'Dulce' } }] } },
    { id: 's2e6-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Night market fun! 🎉 You learned:\n✅ '호떡' - Sweet pancake\n✅ '달콤하다' - Sweet\n✅ '하나' - One\n\nYou earned the '🌙 Night Owl' badge!", ja: 'ナイトマーケットを満喫！🎉 学んだこと：\n✅「호떡」- ホットク\n✅「달콤하다」- 甘い\n✅「하나」- 一つ\n\n「🌙 ナイトオウル」バッジ獲得！', zh: '夜市乐趣！🎉 你学到了：\n✅ "호떡" - 糖饼\n✅ "달콤하다" - 甜\n✅ "하나" - 一个\n\n获得"🌙 夜猫子"徽章！', th: 'สนุกกับตลาดกลางคืน! 🎉 คุณเรียนรู้:\n✅ "호떡" - โฮตต็อก\n✅ "달콤하다" - หวาน\n✅ "하나" - หนึ่ง\n\nได้รับเหรียญ "🌙 นกฮูกกลางคืน"!', vi: 'Vui chợ đêm! 🎉 Bạn đã học:\n✅ "호떡" - Hotteok\n✅ "달콤하다" - Ngọt\n✅ "하나" - Một\n\nNhận huy hiệu "🌙 Cú đêm"!', es: '¡Diversión nocturna! 🎉 Aprendiste:\n✅ "호떡" - Panqueque dulce\n✅ "달콤하다" - Dulce\n✅ "하나" - Uno\n\n¡Obtuviste "🌙 Búho nocturno"!' } },
  ],
};

// Episode 7: Gwangalli Beach Fireworks
export const s2e7: StoryEpisode = {
  id: 's2e7',
  season: 2,
  episode: 7,
  title: { en: 'Gwangalli Fireworks', ja: '広安里の花火', zh: '广安里烟火', th: 'ดอกไม้ไฟกวางอัลลี', vi: 'Pháo hoa Gwangalli', es: 'Fuegos artificiales de Gwangalli' },
  description: { en: 'Watch beautiful fireworks at Gwangalli Beach!', ja: '広安里ビーチで美しい花火を見よう！', zh: '在广安里海滩看美丽的烟火！', th: 'ดูดอกไม้ไฟสวยๆ ที่หาดกวางอัลลี!', vi: 'Xem pháo hoa đẹp ở bãi biển Gwangalli!', es: '¡Mira hermosos fuegos artificiales en la playa Gwangalli!' },
  icon: '🎆',
  requiredLevel: 15,
  rewards: { xp: 250, badge: 'fireworks_fan', badgeName: { en: 'Fireworks Fan', ja: '花火ファン', zh: '烟火爱好者', th: 'แฟนดอกไม้ไฟ', vi: 'Fan pháo hoa', es: 'Fan de fuegos artificiales' } },
  isPremium: false,
  scenes: [
    { id: 's2e7-scene1', background: 'linear-gradient(135deg, #2d3436 0%, #0984e3 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "We're at Gwangalli Beach! 🎆 The Diamond Bridge is lit up and fireworks are about to start!", ja: '広安里ビーチだ！🎆 ダイヤモンドブリッジがライトアップされて花火が始まるよ！', zh: '到广安里海滩了！🎆 钻石大桥亮灯了，烟火马上开始！', th: 'มาถึงหาดกวางอัลลีแล้ว! 🎆 สะพานไดมอนด์สว่างไสวและดอกไม้ไฟกำลังจะเริ่ม!', vi: 'Đến Gwangalli rồi! 🎆 Cầu Diamond được thắp sáng và pháo hoa sắp bắt đầu!', es: '¡Estamos en Gwangalli! 🎆 ¡El Puente Diamond está iluminado y los fuegos artificiales van a empezar!' }, nextSceneId: 's2e7-scene2' },
    { id: 's2e7-scene2', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', character: { name: '친구', avatar: '👩', emotion: 'excited' }, dialogue: { en: '"와! 불꽃놀이 너무 예뻐요!" (Wow! The fireworks are so beautiful!)', ja: '「와! 불꽃놀이 너무 예뻐요!」（わあ！花火がとても綺麗！）', zh: '"와! 불꽃놀이 너무 예뻐요!"（哇！烟火太美了！）', th: '"와! 불꽃놀이 너무 예뻐요!" (ว้าว! ดอกไม้ไฟสวยมาก!)', vi: '"와! 불꽃놀이 너무 예뻐요!" (Wow! Pháo hoa đẹp quá!)', es: '"와! 불꽃놀이 너무 예뻐요!" (¡Guau! ¡Los fuegos artificiales son hermosos!)' }, choices: [
      { id: 's2e7-c1a', korean: '정말 아름다워요!', romanization: 'Jeongmal areumdawoyo!', translation: { en: "It's really beautiful!", ja: '本当に綺麗！', zh: '真的很美！', th: 'สวยจริงๆ!', vi: 'Đẹp thật!', es: '¡Es realmente hermoso!' }, correctness: 'perfect', feedback: { en: "Amazing! 🌟 '아름답다' = beautiful!", ja: '素晴らしい！🌟「아름답다」= 美しい！', zh: '太棒了！🌟"아름답다"= 美丽！', th: 'สุดยอด! 🌟 "아름답다" = สวยงาม!', vi: 'Tuyệt! 🌟 "아름답다" = đẹp!', es: '¡Increíble! 🌟 "아름답다" = hermoso!' }, nextSceneId: 's2e7-scene3' },
    ], teaching: { vocabulary: [{ korean: '불꽃놀이', romanization: 'bulkkotnori', meaning: { en: 'Fireworks', ja: '花火', zh: '烟火', th: 'ดอกไม้ไฟ', vi: 'Pháo hoa', es: 'Fuegos artificiales' } }, { korean: '아름답다', romanization: 'areumdapda', meaning: { en: 'Beautiful', ja: '美しい', zh: '美丽', th: 'สวยงาม', vi: 'Đẹp', es: 'Hermoso' } }] } },
    { id: 's2e7-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Spectacular show! 🎉 You learned:\n✅ '불꽃놀이' - Fireworks\n✅ '아름답다' - Beautiful\n\nYou earned the '🎆 Fireworks Fan' badge!", ja: 'スペクタクルなショー！🎉 学んだこと：\n✅「불꽃놀이」- 花火\n✅「아름답다」- 美しい\n\n「🎆 花火ファン」バッジ獲得！', zh: '精彩表演！🎉 你学到了：\n✅ "불꽃놀이" - 烟火\n✅ "아름답다" - 美丽\n\n获得"🎆 烟火爱好者"徽章！', th: 'การแสดงสุดอลังการ! 🎉 คุณเรียนรู้:\n✅ "불꽃놀이" - ดอกไม้ไฟ\n✅ "아름답다" - สวยงาม\n\nได้รับเหรียญ "🎆 แฟนดอกไม้ไฟ"!', vi: 'Màn trình diễn ngoạn mục! 🎉 Bạn đã học:\n✅ "불꽃놀이" - Pháo hoa\n✅ "아름답다" - Đẹp\n\nNhận huy hiệu "🎆 Fan pháo hoa"!', es: '¡Espectáculo increíble! 🎉 Aprendiste:\n✅ "불꽃놀이" - Fuegos artificiales\n✅ "아름답다" - Hermoso\n\n¡Obtuviste "🎆 Fan de fuegos artificiales"!' } },
  ],
};

// Episode 8: Goodbye Busan
export const s2e8: StoryEpisode = {
  id: 's2e8',
  season: 2,
  episode: 8,
  title: { en: 'Goodbye Busan', ja: 'さよなら釜山', zh: '再见釜山', th: 'ลาก่อนปูซาน', vi: 'Tạm biệt Busan', es: 'Adiós Busan' },
  description: { en: 'Say farewell to Busan and head to Jeju!', ja: '釜山に別れを告げて済州島へ！', zh: '告别釜山前往济州岛！', th: 'บอกลาปูซานและมุ่งหน้าไปเชจู!', vi: 'Tạm biệt Busan và đi Jeju!', es: '¡Despídete de Busan y ve a Jeju!' },
  icon: '👋',
  requiredLevel: 16,
  rewards: { xp: 300, badge: 'busan_explorer', badgeName: { en: 'Busan Explorer', ja: '釜山探検家', zh: '釜山探险家', th: 'นักสำรวจปูซาน', vi: 'Nhà thám hiểm Busan', es: 'Explorador de Busan' } },
  isPremium: false,
  scenes: [
    { id: 's2e8-scene1', background: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'sad' }, dialogue: { en: "Our Busan trip is ending! 😢 We had such a great time. Let's promise to come back!", ja: '釜山の旅が終わり！😢 とても楽しかった。また来ると約束しよう！', zh: '釜山之旅结束了！😢 玩得很开心。约定再来吧！', th: 'ทริปปูซานจบแล้ว! 😢 สนุกมาก สัญญาว่าจะกลับมานะ!', vi: 'Chuyến đi Busan kết thúc rồi! 😢 Vui quá. Hứa sẽ quay lại!', es: '¡Nuestro viaje a Busan termina! 😢 Lo pasamos genial. ¡Prometamos volver!' }, nextSceneId: 's2e8-scene2' },
    { id: 's2e8-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '부산 친구', avatar: '👨', emotion: 'sad' }, dialogue: { en: '"다음에 또 와요! 제주도도 좋아요!" (Come again next time! Jeju Island is great too!)', ja: '「다음에 또 와요! 제주도도 좋아요!」（次も来てね！済州島もいいよ！）', zh: '"다음에 또 와요! 제주도도 좋아요!"（下次再来！济州岛也很好！）', th: '"다음에 또 와요! 제주도도 좋아요!" (มาอีกนะ! เกาะเชจูก็ดี!)', vi: '"다음에 또 와요! 제주도도 좋아요!" (Lần sau đến nhé! Đảo Jeju cũng tuyệt!)', es: '"다음에 또 와요! 제주도도 좋아요!" (¡Vuelve pronto! ¡La isla de Jeju también es genial!)' }, choices: [
      { id: 's2e8-c1a', korean: '꼭 다시 올게요! 제주도에서 만나요!', romanization: 'Kkok dasi olgeyo! Jejudo-eseo mannayo!', translation: { en: "I'll definitely come back! See you in Jeju!", ja: '必ずまた来る！済州で会おう！', zh: '一定会再来的！济州岛见！', th: 'จะกลับมาแน่นอน! เจอกันที่เชจู!', vi: 'Chắc chắn sẽ quay lại! Gặp nhau ở Jeju!', es: '¡Definitivamente volveré! ¡Nos vemos en Jeju!' }, correctness: 'perfect', feedback: { en: "See you soon! 🌟 '꼭' = definitely!", ja: 'またね！🌟「꼭」= 必ず！', zh: '再见！🌟"꼭"= 一定！', th: 'แล้วเจอกัน! 🌟 "꼭" = แน่นอน!', vi: 'Hẹn gặp lại! 🌟 "꼭" = chắc chắn!', es: '¡Hasta pronto! 🌟 "꼭" = definitivamente!' }, nextSceneId: 's2e8-scene3' },
    ], teaching: { vocabulary: [{ korean: '꼭', romanization: 'kkok', meaning: { en: 'Definitely/must', ja: '必ず', zh: '一定', th: 'แน่นอน', vi: 'Chắc chắn', es: 'Definitivamente' } }, { korean: '제주도', romanization: 'Jejudo', meaning: { en: 'Jeju Island', ja: '済州島', zh: '济州岛', th: 'เกาะเชจู', vi: 'Đảo Jeju', es: 'Isla Jeju' } }] } },
    { id: 's2e8-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "🎊 SEASON 2 COMPLETE! 🎊\n\nYou finished your Busan trip! You learned:\n✅ KTX travel\n✅ Beach & seafood vocabulary\n✅ Temple visits\n✅ Night markets\n\nYou earned the '🌊 Busan Explorer' badge!\n\nSee you in Season 3: Jeju Adventure!", ja: '🎊 シーズン2完了！🎊\n\n釜山の旅終了！学んだこと：\n✅ KTX移動\n✅ ビーチ&海鮮の語彙\n✅ 寺院訪問\n✅ ナイトマーケット\n\n「🌊 釜山探検家」バッジ獲得！\n\nシーズン3：済州アドベンチャーで！', zh: '🎊 第二季完成！🎊\n\n完成釜山之旅！你学到了：\n✅ KTX出行\n✅ 海滩&海鲜词汇\n✅ 寺庙参观\n✅ 夜市\n\n获得"🌊 釜山探险家"徽章！\n\n第三季：济州冒险见！', th: '🎊 ซีซั่น 2 จบแล้ว! 🎊\n\nจบทริปปูซาน! คุณเรียนรู้:\n✅ เดินทางด้วย KTX\n✅ คำศัพท์ชายหาด & อาหารทะเล\n✅ เยี่ยมชมวัด\n✅ ตลาดกลางคืน\n\nได้รับเหรียญ "🌊 นักสำรวจปูซาน"!\n\nพบกันในซีซั่น 3: ผจญภัยเชจู!', vi: '🎊 MÙA 2 HOÀN THÀNH! 🎊\n\nHoàn thành chuyến đi Busan! Bạn đã học:\n✅ Đi KTX\n✅ Từ vựng biển & hải sản\n✅ Thăm chùa\n✅ Chợ đêm\n\nNhận huy hiệu "🌊 Nhà thám hiểm Busan"!\n\nHẹn gặp ở Mùa 3: Phiêu lưu Jeju!', es: '🎊 ¡TEMPORADA 2 COMPLETA! 🎊\n\n¡Terminaste tu viaje a Busan! Aprendiste:\n✅ Viaje en KTX\n✅ Vocabulario de playa y mariscos\n✅ Visitas a templos\n✅ Mercados nocturnos\n\n¡Obtuviste "🌊 Explorador de Busan"!\n\n¡Nos vemos en Temporada 3: Aventura en Jeju!' } },
  ],
};

// Export all episodes
season2.episodes = [s2e1, s2e2, s2e3, s2e4, s2e5, s2e6, s2e7, s2e8];

export const season2Episodes = season2.episodes;
export default season2Episodes;
