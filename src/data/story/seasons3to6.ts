import { StoryEpisode, StorySeason } from '@/types/story';

// Season 3: Jeju Adventure (FREE - Beginner)
export const season3: StorySeason = {
  id: 3,
  name: { en: 'Jeju Adventure', ja: '済州アドベンチャー', zh: '济州冒险', th: 'ผจญภัยเชจู', vi: 'Phiêu lưu Jeju', es: 'Aventura en Jeju' },
  description: { en: 'Explore the magical island of Jeju!', ja: '魔法の島、済州を探検！', zh: '探索神奇的济州岛！', th: 'สำรวจเกาะเชจูที่มหัศจรรย์!', vi: 'Khám phá hòn đảo Jeju kỳ diệu!', es: '¡Explora la mágica isla de Jeju!' },
  theme: 'Nature & Relaxation',
  location: 'Jeju Island',
  color: '#43e97b',
  icon: 'island',
  difficulty: 'beginner',
  isPremium: false,
  totalEpisodes: 8,
  episodes: [],
};

// S3E1: Arriving at Jeju
export const s3e1: StoryEpisode = {
  id: 's3e1', season: 3, episode: 1,
  title: { en: 'Arriving at Jeju', ja: '済州に到着', zh: '抵达济州', th: 'มาถึงเชจู', vi: 'Đến Jeju', es: 'Llegando a Jeju' },
  description: { en: 'Land on the beautiful island of Jeju!', ja: '美しい済州島に着陸！', zh: '降落在美丽的济州岛！', th: 'ลงจอดที่เกาะเชจูที่สวยงาม!', vi: 'Hạ cánh xuống đảo Jeju xinh đẹp!', es: '¡Aterriza en la hermosa isla de Jeju!' },
  icon: '🏝️', requiredLevel: 17, rewards: { xp: 200, badge: 'jeju_arrival', badgeName: { en: 'Jeju Arrival', ja: '済州到着', zh: '济州到达', th: 'ถึงเชจู', vi: 'Đến Jeju', es: 'Llegada a Jeju' } }, isPremium: false,
  scenes: [
    { id: 's3e1-scene1', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Welcome to Jeju Island! 🏝️ It's a UNESCO World Natural Heritage site! Let's rent a car and explore!", ja: '済州島へようこそ！🏝️ ユネスコ世界自然遺産だよ！レンタカーで探検しよう！', zh: '欢迎来到济州岛！🏝️ 这是联合国教科文组织世界自然遗产！租车探索吧！', th: 'ยินดีต้อนรับสู่เกาะเชจู! 🏝️ เป็นมรดกโลกทางธรรมชาติของยูเนสโก! เช่ารถสำรวจกัน!', vi: 'Chào mừng đến đảo Jeju! 🏝️ Là Di sản Thiên nhiên Thế giới UNESCO! Thuê xe khám phá!', es: '¡Bienvenido a la isla de Jeju! 🏝️ ¡Es Patrimonio Natural de la UNESCO! ¡Alquilemos un carro!' }, nextSceneId: 's3e1-scene2' },
    { id: 's3e1-scene2', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', character: { name: '렌트카 직원', avatar: '👨', emotion: 'happy' }, dialogue: { en: '"안녕하세요! 렌트카 예약하셨어요?" (Hello! Did you make a car rental reservation?)', ja: '「안녕하세요! 렌트카 예약하셨어요?」（こんにちは！レンタカーの予約しましたか？）', zh: '"안녕하세요! 렌트카 예약하셨어요?"（您好！预约租车了吗？）', th: '"안녕하세요! 렌트카 예약하셨어요?" (สวัสดีครับ! จองรถเช่าไว้ไหมครับ?)', vi: '"안녕하세요! 렌트카 예약하셨어요?" (Xin chào! Bạn đã đặt thuê xe chưa?)', es: '"안녕하세요! 렌트카 예약하셨어요?" (¡Hola! ¿Hizo una reserva de auto?)' }, choices: [
      { id: 's3e1-c1a', korean: '네, 예약했어요. 이 영수증이에요.', romanization: 'Ne, yeyakhaesseoyo. I yeongsujeung-ieyo.', translation: { en: 'Yes, I reserved. Here is the receipt.', ja: 'はい、予約しました。これが領収書です。', zh: '是的，我预约了。这是收据。', th: 'ครับ/ค่ะ จองไว้แล้ว นี่ใบเสร็จครับ/ค่ะ', vi: 'Vâng, tôi đã đặt. Đây là biên lai.', es: 'Sí, reservé. Aquí está el recibo.' }, correctness: 'perfect', feedback: { en: "Perfect! 🌟 '영수증' = receipt!", ja: '完璧！🌟「영수증」= 領収書！', zh: '完美！🌟"영수증"= 收据！', th: 'สมบูรณ์แบบ! 🌟 "영수증" = ใบเสร็จ!', vi: 'Hoàn hảo! 🌟 "영수증" = biên lai!', es: '¡Perfecto! 🌟 "영수증" = recibo!' }, nextSceneId: 's3e1-scene3' },
    ], teaching: { vocabulary: [{ korean: '렌트카', romanization: 'renteuka', meaning: { en: 'Rental car', ja: 'レンタカー', zh: '租车', th: 'รถเช่า', vi: 'Xe thuê', es: 'Auto de alquiler' } }, { korean: '영수증', romanization: 'yeongsujeung', meaning: { en: 'Receipt', ja: '領収書', zh: '收据', th: 'ใบเสร็จ', vi: 'Biên lai', es: 'Recibo' } }] } },
    { id: 's3e1-scene3', background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', character: { name: 'KEI', avatar: '/images/story/crt_kei01.png', emotion: 'excited' }, dialogue: { en: "Let's explore Jeju! 🎉 You learned:\n✅ '렌트카' - Rental car\n✅ '영수증' - Receipt\n\nYou earned the '🏝️ Jeju Arrival' badge!", ja: '済州を探検しよう！🎉 学んだこと：\n✅「렌트카」- レンタカー\n✅「영수증」- 領収書\n\n「🏝️ 済州到着」バッジ獲得！', zh: '探索济州吧！🎉 你学到了：\n✅ "렌트카" - 租车\n✅ "영수증" - 收据\n\n获得"🏝️ 济州到达"徽章！', th: 'สำรวจเชจูกัน! 🎉 คุณเรียนรู้:\n✅ "렌트카" - รถเช่า\n✅ "영수증" - ใบเสร็จ\n\nได้รับเหรียญ "🏝️ ถึงเชจู"!', vi: 'Khám phá Jeju! 🎉 Bạn đã học:\n✅ "렌트카" - Xe thuê\n✅ "영수증" - Biên lai\n\nNhận huy hiệu "🏝️ Đến Jeju"!', es: '¡Exploremos Jeju! 🎉 Aprendiste:\n✅ "렌트카" - Auto de alquiler\n✅ "영수증" - Recibo\n\n¡Obtuviste "🏝️ Llegada a Jeju"!' } },
  ],
};

// Placeholder episodes for Season 3 (FREE - comingSoon)
const s3Placeholders: StoryEpisode[] = [
  { id: 's3e2', season: 3, episode: 2, title: { en: 'Hallasan Mountain', ja: '漢拏山', zh: '汉拿山', th: 'ภูเขาฮัลลาซาน', vi: 'Núi Hallasan', es: 'Montaña Hallasan' }, description: { en: 'Hike Korea\'s highest peak!', ja: '韓国最高峰に登ろう！', zh: '攀登韩国最高峰！', th: 'ปีนยอดเขาสูงสุดของเกาหลี!', vi: 'Leo đỉnh núi cao nhất Hàn Quốc!', es: '¡Escala el pico más alto de Corea!' }, icon: '⛰️', requiredLevel: 18, rewards: { xp: 250 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e3', season: 3, episode: 3, title: { en: 'Black Pork BBQ', ja: '黒豚BBQ', zh: '黑猪烤肉', th: 'บาร์บีคิวหมูดำ', vi: 'BBQ Heo Đen', es: 'BBQ de Cerdo Negro' }, description: { en: 'Try Jeju\'s famous black pork!', ja: '済州の有名な黒豚を食べよう！', zh: '尝尝济州著名的黑猪肉！', th: 'ลองหมูดำเชจูที่มีชื่อเสียง!', vi: 'Thử heo đen nổi tiếng của Jeju!', es: '¡Prueba el famoso cerdo negro de Jeju!' }, icon: '🐷', requiredLevel: 19, rewards: { xp: 200 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e4', season: 3, episode: 4, title: { en: 'Manjanggul Cave', ja: '万丈窟', zh: '万丈窟', th: 'ถ้ำมันจังกูล', vi: 'Hang Manjanggul', es: 'Cueva Manjanggul' }, description: { en: 'Explore the lava tube cave!', ja: '溶岩洞窟を探検！', zh: '探索熔岩洞！', th: 'สำรวจถ้ำลาวา!', vi: 'Khám phá hang động dung nham!', es: '¡Explora la cueva de lava!' }, icon: '🕳️', requiredLevel: 20, rewards: { xp: 200 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e5', season: 3, episode: 5, title: { en: 'Seongsan Sunrise', ja: '城山日出', zh: '城山日出', th: 'พระอาทิตย์ขึ้นซองซาน', vi: 'Bình minh Seongsan', es: 'Amanecer en Seongsan' }, description: { en: 'Watch sunrise at the crater!', ja: '火山口で日の出を見よう！', zh: '在火山口看日出！', th: 'ดูพระอาทิตย์ขึ้นที่ปากปล่องภูเขาไฟ!', vi: 'Xem bình minh ở miệng núi lửa!', es: '¡Ve el amanecer en el cráter!' }, icon: '🌅', requiredLevel: 21, rewards: { xp: 250 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e6', season: 3, episode: 6, title: { en: 'Jeju Orange Farm', ja: '済州みかん農園', zh: '济州橘子农场', th: 'ฟาร์มส้มเชจู', vi: 'Nông trại cam Jeju', es: 'Granja de naranjas de Jeju' }, description: { en: 'Pick fresh Jeju oranges!', ja: '新鮮な済州みかんを収穫！', zh: '采摘新鲜的济州橘子！', th: 'เก็บส้มเชจูสดๆ!', vi: 'Hái cam Jeju tươi!', es: '¡Cosecha naranjas frescas!' }, icon: '🍊', requiredLevel: 22, rewards: { xp: 200 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e7', season: 3, episode: 7, title: { en: 'Haenyeo Divers', ja: '海女', zh: '海女', th: 'นักดำน้ำแฮนยอ', vi: 'Thợ lặn Haenyeo', es: 'Buzos Haenyeo' }, description: { en: 'Learn about Jeju\'s sea women!', ja: '済州の海女について学ぼう！', zh: '了解济州的海女！', th: 'เรียนรู้เกี่ยวกับแฮนยอของเชจู!', vi: 'Tìm hiểu về phụ nữ lặn biển Jeju!', es: '¡Conoce a las mujeres del mar de Jeju!' }, icon: '🤿', requiredLevel: 23, rewards: { xp: 250 }, isPremium: false, comingSoon: true, scenes: [] },
  { id: 's3e8', season: 3, episode: 8, title: { en: 'Goodbye Jeju', ja: 'さよなら済州', zh: '再见济州', th: 'ลาก่อนเชจู', vi: 'Tạm biệt Jeju', es: 'Adiós Jeju' }, description: { en: 'Say farewell to paradise!', ja: '楽園にさよならを！', zh: '告别天堂！', th: 'บอกลาสวรรค์!', vi: 'Tạm biệt thiên đường!', es: '¡Despídete del paraíso!' }, icon: '👋', requiredLevel: 24, rewards: { xp: 300, badge: 'jeju_explorer' }, isPremium: false, comingSoon: true, scenes: [] },
];

season3.episodes = [s3e1, ...s3Placeholders];

// Export Season 3
export const season3Episodes = season3.episodes;
