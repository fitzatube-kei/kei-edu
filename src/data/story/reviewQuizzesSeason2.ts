import { ReviewQuiz } from '@/types/story';

// s2e1: KTX quiz
export const reviewS2E1: ReviewQuiz = {
  id: 'review-s2e1',
  triggerAfterEpisode: 's2e1',
  title: { en: 'Review Quiz: KTX to Busan', ja: '復習クイズ：KTXで釜山へ', zh: '复习测验：KTX去釜山', th: 'แบบทดสอบทบทวน: KTX ไปปูซาน', vi: 'Bài ôn tập: KTX đến Busan', es: 'Quiz de repaso: KTX a Busan' },
  description: { en: 'Test what you learned about taking the KTX!', ja: 'KTXで学んだことをテスト！', zh: '测试你学到的KTX知识！', th: 'ทดสอบสิ่งที่เรียนรู้เกี่ยวกับ KTX!', vi: 'Kiểm tra những gì bạn học về KTX!', es: '¡Pon a prueba lo que aprendiste sobre el KTX!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e1-fb1', sentence: { en: '"부산 가는 _____ 주세요" (Ticket to Busan please)', ja: '「부산 가는 _____ 주세요」（釜山行きの切符ください）', zh: '"부산 가는 _____ 주세요"（请给去釜山的票）', th: '"부산 가는 _____ 주세요" (ขอตั๋วไปปูซาน)', vi: '"부산 가는 _____ 주세요" (Cho vé đi Busan)', es: '"부산 가는 _____ 주세요" (Boleto a Busan)' }, correctAnswer: '표', options: ['표', '카드', '돈', '역'], explanation: { en: "'표' = ticket. '가는 표' = ticket going to (destination).", ja: "「표」= 切符。「가는 표」= ～行きの切符。", zh: "'표' = 票。'가는 표' = 去(目的地)的票。", th: "'표' = ตั๋ว '가는 표' = ตั๋วไป(จุดหมาย)", vi: "'표' = vé. '가는 표' = vé đi (điểm đến).", es: "'표' = boleto. '가는 표' = boleto a (destino)." } },
    { type: 'fill-in-blank', id: 's2e1-fb2', sentence: { en: '"_____으로 주세요" (Round trip please)', ja: '「_____으로 주세요」（往復でお願いします）', zh: '"_____으로 주세요"（请给往返的）', th: '"_____으로 주세요" (ขอไป-กลับ)', vi: '"_____으로 주세요" (Cho khứ hồi)', es: '"_____으로 주세요" (Ida y vuelta)' }, correctAnswer: '왕복', options: ['왕복', '편도', '직행', '급행'], explanation: { en: "'왕복' = round trip. '편도' = one-way. Essential for buying train tickets!", ja: "「왕복」= 往復。「편도」= 片道。切符購入に必須！", zh: "'왕복' = 往返。'편도' = 单程。买火车票必备！", th: "'왕복' = ไป-กลับ '편도' = เที่ยวเดียว สำคัญสำหรับซื้อตั๋ว!", vi: "'왕복' = khứ hồi. '편도' = một chiều. Cần thiết khi mua vé tàu!", es: "'왕복' = ida y vuelta. '편도' = solo ida. ¡Esencial para comprar boletos!" } },
    { type: 'fill-in-blank', id: 's2e1-fb3', sentence: { en: '"이 _____ 맞아요?" (Is this the right seat?)', ja: '「이 _____ 맞아요?」（この席で合ってますか？）', zh: '"이 _____ 맞아요?"（这个座位对吗？）', th: '"이 _____ 맞아요?" (ที่นั่งนี้ถูกไหม?)', vi: '"이 _____ 맞아요?" (Chỗ này đúng không?)', es: '"이 _____ 맞아요?" (¿Es este el asiento correcto?)' }, correctAnswer: '자리', options: ['자리', '표', '역', '길'], explanation: { en: "'자리' = seat/spot. '이 자리 맞아요?' = Is this the right seat?", ja: "「자리」= 席。「이 자리 맞아요?」= この席で合ってる？", zh: "'자리' = 座位。'이 자리 맞아요?' = 这个座位对吗？", th: "'자리' = ที่นั่ง '이 자리 맞아요?' = ที่นั่งนี้ถูกไหม?", vi: "'자리' = chỗ ngồi. '이 자리 맞아요?' = Chỗ này đúng không?", es: "'자리' = asiento. '이 자리 맞아요?' = ¿Es este asiento correcto?" } },
    { type: 'multiple-choice', id: 's2e1-mc1', question: '편도', questionRomanization: 'pyeondo', options: [
      { en: 'One-way', ja: '片道', zh: '单程', th: 'เที่ยวเดียว', vi: 'Một chiều', es: 'Solo ida' },
      { en: 'Round trip', ja: '往復', zh: '往返', th: 'ไป-กลับ', vi: 'Khứ hồi', es: 'Ida y vuelta' },
      { en: 'Express', ja: '急行', zh: '快车', th: 'ด่วน', vi: 'Tốc hành', es: 'Expreso' },
      { en: 'Reserved', ja: '指定席', zh: '预定', th: 'จองแล้ว', vi: 'Đã đặt', es: 'Reservado' },
    ], correctIndex: 0, explanation: { en: "'편도' = one-way. Opposite: '왕복' (round trip).", ja: "「편도」= 片道。反対：「왕복」（往復）。", zh: "'편도' = 单程。反义词：'왕복'（往返）。", th: "'편도' = เที่ยวเดียว ตรงข้าม: '왕복' (ไป-กลับ)", vi: "'편도' = một chiều. Trái nghĩa: '왕복' (khứ hồi).", es: "'편도' = solo ida. Opuesto: '왕복' (ida y vuelta)." } },
    { type: 'multiple-choice', id: 's2e1-mc2', question: '간식', questionRomanization: 'gansik', options: [
      { en: 'Snack', ja: 'おやつ', zh: '零食', th: 'ขนม', vi: 'Đồ ăn vặt', es: 'Merienda' },
      { en: 'Meal', ja: '食事', zh: '正餐', th: 'มื้ออาหาร', vi: 'Bữa ăn', es: 'Comida' },
      { en: 'Drink', ja: '飲み物', zh: '饮料', th: 'เครื่องดื่ม', vi: 'Đồ uống', es: 'Bebida' },
      { en: 'Dessert', ja: 'デザート', zh: '甜点', th: 'ของหวาน', vi: 'Tráng miệng', es: 'Postre' },
    ], correctIndex: 0, explanation: { en: "'간식' = snack. Perfect for the KTX ride! Try Korean convenience store snacks.", ja: "「간식」= おやつ。KTXの旅にぴったり！韓国のコンビニおやつを試そう。", zh: "'간식' = 零食。KTX旅途完美伴侣！试试韩国便利店零食。", th: "'간식' = ขนม เหมาะสำหรับนั่ง KTX! ลองขนมจากร้านสะดวกซื้อเกาหลี", vi: "'간식' = đồ ăn vặt. Hoàn hảo cho chuyến KTX! Thử đồ ăn vặt cửa hàng tiện lợi Hàn.", es: "'간식' = merienda. ¡Perfecto para el viaje en KTX! Prueba snacks de tiendas coreanas." } },
    { type: 'multiple-choice', id: 's2e1-mc3', question: '기차', questionRomanization: 'gicha', options: [
      { en: 'Train', ja: '列車', zh: '火车', th: 'รถไฟ', vi: 'Tàu hỏa', es: 'Tren' },
      { en: 'Bus', ja: 'バス', zh: '公交车', th: 'รถเมล์', vi: 'Xe buýt', es: 'Autobús' },
      { en: 'Airplane', ja: '飛行機', zh: '飞机', th: 'เครื่องบิน', vi: 'Máy bay', es: 'Avión' },
      { en: 'Taxi', ja: 'タクシー', zh: '出租车', th: 'แท็กซี่', vi: 'Taxi', es: 'Taxi' },
    ], correctIndex: 0, explanation: { en: "'기차' = train. KTX is Korea's high-speed train (Korea Train eXpress)!", ja: "「기차」= 列車。KTXは韓国の高速列車！", zh: "'기차' = 火车。KTX是韩国高铁！", th: "'기차' = รถไฟ KTX คือรถไฟความเร็วสูงเกาหลี!", vi: "'기차' = tàu hỏa. KTX là tàu cao tốc Hàn Quốc!", es: "'기차' = tren. ¡KTX es el tren de alta velocidad de Corea!" } },
    { type: 'matching', id: 's2e1-match1', pairs: [
      { korean: '표', translation: { en: 'Ticket', ja: '切符', zh: '票', th: 'ตั๋ว', vi: 'Vé', es: 'Boleto' } },
      { korean: '편도', translation: { en: 'One-way', ja: '片道', zh: '单程', th: 'เที่ยวเดียว', vi: 'Một chiều', es: 'Solo ida' } },
      { korean: '왕복', translation: { en: 'Round trip', ja: '往復', zh: '往返', th: 'ไป-กลับ', vi: 'Khứ hồi', es: 'Ida y vuelta' } },
      { korean: '자리', translation: { en: 'Seat/spot', ja: '席', zh: '座位', th: 'ที่นั่ง', vi: 'Chỗ ngồi', es: 'Asiento' } },
      { korean: '기차', translation: { en: 'Train', ja: '列車', zh: '火车', th: 'รถไฟ', vi: 'Tàu hỏa', es: 'Tren' } },
      { korean: '간식', translation: { en: 'Snack', ja: 'おやつ', zh: '零食', th: 'ขนม', vi: 'Đồ ăn vặt', es: 'Merienda' } },
    ], explanation: { en: 'Train travel vocabulary mastered! You can now buy tickets and ride the KTX!', ja: '列車旅行の語彙マスター！切符を買ってKTXに乗れるよ！', zh: '火车旅行词汇掌握！现在可以买票乘KTX了！', th: 'คำศัพท์การเดินทางรถไฟครบ! ซื้อตั๋วและนั่ง KTX ได้แล้ว!', vi: 'Từ vựng đi tàu hoàn thành! Bạn có thể mua vé và đi KTX!', es: '¡Vocabulario de viaje en tren dominado! ¡Ya puedes comprar boletos y viajar en KTX!' } },
  ],
};

// s2e2: Haeundae Beach quiz
export const reviewS2E2: ReviewQuiz = {
  id: 'review-s2e2',
  triggerAfterEpisode: 's2e2',
  title: { en: 'Review Quiz: Haeundae Beach', ja: '復習クイズ：海雲台ビーチ', zh: '复习测验：海云台海滩', th: 'แบบทดสอบทบทวน: หาดแฮอุนแด', vi: 'Bài ôn tập: Bãi biển Haeundae', es: 'Quiz de repaso: Playa Haeundae' },
  description: { en: 'Test what you learned at Haeundae Beach!', ja: '海雲台ビーチで学んだことをテスト！', zh: '测试你在海云台学到的！', th: 'ทดสอบสิ่งที่เรียนรู้ที่หาดแฮอุนแด!', vi: 'Kiểm tra những gì bạn học ở Haeundae!', es: '¡Pon a prueba lo que aprendiste en Haeundae!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e2-fb1', sentence: { en: '"파라솔 _____ 주세요" (Please rent a parasol)', ja: '「파라솔 _____ 주세요」（パラソルを貸してください）', zh: '"파라솔 _____ 주세요"（请租遮阳伞）', th: '"파라솔 _____ 주세요" (ขอเช่าร่ม)', vi: '"파라솔 _____ 주세요" (Cho thuê ô)', es: '"파라솔 _____ 주세요" (Alquile sombrilla)' }, correctAnswer: '빌려', options: ['빌려', '사', '보여', '줘'], explanation: { en: "'빌려주세요' = please lend/rent to me. 빌리다(to borrow/rent) + 주세요(please).", ja: "「빌려주세요」= 貸してください。빌리다(借りる) + 주세요(ください)。", zh: "'빌려주세요' = 请借给我/租给我。빌리다(借/租) + 주세요(请)。", th: "'빌려주세요' = ให้เช่าด้วย 빌리다(ยืม/เช่า) + 주세요(กรุณา)", vi: "'빌려주세요' = cho thuê. 빌리다(thuê/mượn) + 주세요(xin).", es: "'빌려주세요' = alquíleme. 빌리다(alquilar) + 주세요(por favor)." } },
    { type: 'fill-in-blank', id: 's2e2-fb2', sentence: { en: '"_____ 음료 주세요" (Cold drink please)', ja: '「_____ 음료 주세요」（冷たい飲み物ください）', zh: '"_____ 음료 주세요"（请给冷饮）', th: '"_____ 음료 주세요" (ขอเครื่องดื่มเย็น)', vi: '"_____ 음료 주세요" (Cho đồ uống lạnh)', es: '"_____ 음료 주세요" (Bebida fría)' }, correctAnswer: '시원한', options: ['시원한', '따뜻한', '매운', '달콤한'], explanation: { en: "'시원한' = cool/refreshing. Perfect for hot beach days!", ja: "「시원한」= 涼しい。暑いビーチの日にぴったり！", zh: "'시원한' = 凉爽的。海滩热天的完美选择！", th: "'시원한' = เย็นสบาย เหมาะกับวันร้อนที่ชายหาด!", vi: "'시원한' = mát mẻ. Hoàn hảo cho ngày nóng ở biển!", es: "'시원한' = fresco/refrescante. ¡Perfecto para los días calurosos de playa!" } },
    { type: 'fill-in-blank', id: 's2e2-fb3', sentence: { en: '"___에 들어가도 돼요?" (Can I go in the sea?)', ja: '「___에 들어가도 돼요?」（海に入ってもいい？）', zh: '"___에 들어가도 돼요?"（可以下海吗？）', th: '"___에 들어가도 돼요?" (ลงทะเลได้ไหม?)', vi: '"___에 들어가도 돼요?" (Có thể xuống biển không?)', es: '"___에 들어가도 돼요?" (¿Puedo entrar al mar?)' }, correctAnswer: '바다', options: ['바다', '산', '강', '호수'], explanation: { en: "'바다' = sea/ocean. '바다에 들어가다' = to go into the sea.", ja: "「바다」= 海。「바다에 들어가다」= 海に入る。", zh: "'바다' = 海。'바다에 들어가다' = 下海。", th: "'바다' = ทะเล '바다에 들어가다' = ลงทะเล", vi: "'바다' = biển. '바다에 들어가다' = xuống biển.", es: "'바다' = mar/océano. '바다에 들어가다' = entrar al mar." } },
    { type: 'multiple-choice', id: 's2e2-mc1', question: '빌리다', questionRomanization: 'billida', options: [
      { en: 'To borrow/rent', ja: '借りる', zh: '借/租', th: 'ยืม/เช่า', vi: 'Thuê/mượn', es: 'Alquilar/prestar' },
      { en: 'To buy', ja: '買う', zh: '买', th: 'ซื้อ', vi: 'Mua', es: 'Comprar' },
      { en: 'To sell', ja: '売る', zh: '卖', th: 'ขาย', vi: 'Bán', es: 'Vender' },
      { en: 'To give', ja: 'あげる', zh: '给', th: 'ให้', vi: 'Cho', es: 'Dar' },
    ], correctIndex: 0, explanation: { en: "'빌리다' = to borrow/rent. Used for beach chairs, umbrellas, and more!", ja: "「빌리다」= 借りる。ビーチチェアやパラソルなどに！", zh: "'빌리다' = 借/租。用于沙滩椅、遮阳伞等！", th: "'빌리다' = ยืม/เช่า ใช้กับเก้าอี้ชายหาด ร่ม ฯลฯ!", vi: "'빌리다' = thuê/mượn. Dùng cho ghế bãi biển, ô, v.v.!", es: "'빌리다' = alquilar/prestar. ¡Para sillas de playa, sombrillas y más!" } },
    { type: 'multiple-choice', id: 's2e2-mc2', question: '수영', questionRomanization: 'suyeong', options: [
      { en: 'Swimming', ja: '水泳', zh: '游泳', th: 'ว่ายน้ำ', vi: 'Bơi', es: 'Natación' },
      { en: 'Running', ja: '走る', zh: '跑步', th: 'วิ่ง', vi: 'Chạy', es: 'Correr' },
      { en: 'Walking', ja: '歩く', zh: '散步', th: 'เดิน', vi: 'Đi bộ', es: 'Caminar' },
      { en: 'Surfing', ja: 'サーフィン', zh: '冲浪', th: 'เล่นเซิร์ฟ', vi: 'Lướt sóng', es: 'Surf' },
    ], correctIndex: 0, explanation: { en: "'수영' = swimming. '수영하다' = to swim.", ja: "「수영」= 水泳。「수영하다」= 泳ぐ。", zh: "'수영' = 游泳。'수영하다' = 游泳。", th: "'수영' = ว่ายน้ำ '수영하다' = ว่ายน้ำ", vi: "'수영' = bơi. '수영하다' = đi bơi.", es: "'수영' = natación. '수영하다' = nadar." } },
    { type: 'multiple-choice', id: 's2e2-mc3', question: '조심하세요', questionRomanization: 'josimhaseyo', options: [
      { en: 'Be careful', ja: '気をつけて', zh: '小心', th: 'ระวังด้วย', vi: 'Cẩn thận nhé', es: 'Ten cuidado' },
      { en: 'Hurry up', ja: '急いで', zh: '快点', th: 'รีบด้วย', vi: 'Nhanh lên', es: 'Apúrate' },
      { en: 'Have fun', ja: '楽しんで', zh: '玩得开心', th: 'สนุกนะ', vi: 'Vui nhé', es: 'Diviértete' },
      { en: 'Come here', ja: 'こっちに来て', zh: '过来', th: 'มานี่', vi: 'Lại đây', es: 'Ven aquí' },
    ], correctIndex: 0, explanation: { en: "'조심하세요' = Be careful. 조심(caution) + 하세요(please do).", ja: "「조심하세요」= 気をつけて。조심(注意) + 하세요(してください)。", zh: "'조심하세요' = 小心。조심(注意) + 하세요(请做)。", th: "'조심하세요' = ระวังด้วย 조심(ระวัง) + 하세요(กรุณาทำ)", vi: "'조심하세요' = Cẩn thận. 조심(cẩn thận) + 하세요(xin hãy).", es: "'조심하세요' = Ten cuidado. 조심(precaución) + 하세요(por favor haga)." } },
    { type: 'matching', id: 's2e2-match1', pairs: [
      { korean: '바다', translation: { en: 'Sea/ocean', ja: '海', zh: '海', th: 'ทะเล', vi: 'Biển', es: 'Mar' } },
      { korean: '파라솔', translation: { en: 'Beach umbrella', ja: 'パラソル', zh: '遮阳伞', th: 'ร่มชายหาด', vi: 'Ô che nắng', es: 'Sombrilla' } },
      { korean: '수영', translation: { en: 'Swimming', ja: '水泳', zh: '游泳', th: 'ว่ายน้ำ', vi: 'Bơi', es: 'Natación' } },
      { korean: '시원하다', translation: { en: 'Cool/refreshing', ja: '涼しい', zh: '凉爽', th: 'เย็นสบาย', vi: 'Mát mẻ', es: 'Refrescante' } },
      { korean: '음료', translation: { en: 'Drink/beverage', ja: '飲み物', zh: '饮料', th: 'เครื่องดื่ม', vi: 'Đồ uống', es: 'Bebida' } },
      { korean: '빌리다', translation: { en: 'To rent/borrow', ja: '借りる', zh: '借/租', th: 'เช่า/ยืม', vi: 'Thuê/mượn', es: 'Alquilar' } },
    ], explanation: { en: 'Beach vocabulary complete! You can enjoy any Korean beach now.', ja: 'ビーチ語彙完了！韓国のビーチを楽しもう。', zh: '海滩词汇掌握！现在可以享受韩国海滩了。', th: 'คำศัพท์ชายหาดครบ! สนุกกับชายหาดเกาหลีได้แล้ว', vi: 'Từ vựng bãi biển hoàn thành! Bạn có thể tận hưởng bãi biển Hàn Quốc.', es: '¡Vocabulario de playa completo! Ya puedes disfrutar de cualquier playa coreana.' } },
  ],
};

// s2e3: Jagalchi Market quiz
export const reviewS2E3: ReviewQuiz = {
  id: 'review-s2e3',
  triggerAfterEpisode: 's2e3',
  title: { en: 'Review Quiz: Jagalchi Market', ja: '復習クイズ：チャガルチ市場', zh: '复习测验：札嘎其市场', th: 'แบบทดสอบทบทวน: ตลาดจากัลชิ', vi: 'Bài ôn tập: Chợ Jagalchi', es: 'Quiz de repaso: Mercado Jagalchi' },
  description: { en: 'Test what you learned at the fish market!', ja: '魚市場で学んだことをテスト！', zh: '测试你在鱼市场学到的！', th: 'ทดสอบสิ่งที่เรียนรู้ที่ตลาดปลา!', vi: 'Kiểm tra những gì bạn học ở chợ cá!', es: '¡Pon a prueba lo que aprendiste en el mercado!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e3-fb1', sentence: { en: '"이거 _____예요?" (What is this?)', ja: '「이거 _____예요?」（これは何？）', zh: '"이거 _____예요?"（这是什么？）', th: '"이거 _____예요?" (นี่อะไร?)', vi: '"이거 _____예요?" (Cái này là gì?)', es: '"이거 _____예요?" (¿Qué es esto?)' }, correctAnswer: '뭐', options: ['뭐', '어디', '누구', '왜'], explanation: { en: "'이거 뭐예요?' = What is this? Essential at markets to ask about unfamiliar foods!", ja: "「이거 뭐예요?」= これは何？市場で見慣れない食べ物を聞く時に必須！", zh: "'이거 뭐예요?' = 这是什么？在市场问不熟悉的食物必备！", th: "'이거 뭐예요?' = นี่อะไร? จำเป็นที่ตลาดเมื่อถามเกี่ยวกับอาหารที่ไม่คุ้นเคย!", vi: "'이거 뭐예요?' = Cái này là gì? Cần thiết ở chợ để hỏi về đồ ăn lạ!", es: "'이거 뭐예요?' = ¿Qué es esto? ¡Esencial en mercados para preguntar sobre comida desconocida!" } },
    { type: 'fill-in-blank', id: 's2e3-fb2', sentence: { en: '"_____ 먹고 싶어요" (I want to eat raw fish)', ja: '「_____ 먹고 싶어요」（刺身が食べたい）', zh: '"_____ 먹고 싶어요"（想吃生鱼片）', th: '"_____ 먹고 싶어요" (อยากกินปลาดิบ)', vi: '"_____ 먹고 싶어요" (Muốn ăn cá sống)', es: '"_____ 먹고 싶어요" (Quiero comer pescado crudo)' }, correctAnswer: '회', options: ['회', '밥', '국', '빵'], explanation: { en: "'회' = raw fish/sashimi. Jagalchi is famous for the freshest 회 in Korea!", ja: "「회」= 刺身。チャガルチは韓国で最も新鮮な회で有名！", zh: "'회' = 生鱼片。札嘎其以韩国最新鲜的회闻名！", th: "'회' = ปลาดิบ/ซาชิมิ จากัลชิมีชื่อเรื่อง 회 สดที่สุดในเกาหลี!", vi: "'회' = cá sống. Jagalchi nổi tiếng có 회 tươi nhất Hàn Quốc!", es: "'회' = pescado crudo. ¡Jagalchi es famoso por el 회 más fresco de Corea!" } },
    { type: 'fill-in-blank', id: 's2e3-fb3', sentence: { en: '"진짜 _____!" (It\'s really delicious!)', ja: '「진짜 _____!」（本当に美味しい！）', zh: '"진짜 _____!"（真的很好吃！）', th: '"진짜 _____!" (อร่อยมากจริงๆ!)', vi: '"진짜 _____!" (Ngon thật!)', es: '"진짜 _____!" (¡Realmente delicioso!)' }, correctAnswer: '맛있어요', options: ['맛있어요', '맛없어요', '비싸요', '싸요'], explanation: { en: "'맛있어요' = it's delicious! '진짜 맛있어요' = it's REALLY delicious!", ja: "「맛있어요」= 美味しい！「진짜 맛있어요」= 本当に美味しい！", zh: "'맛있어요' = 好吃！'진짜 맛있어요' = 真的好吃！", th: "'맛있어요' = อร่อย! '진짜 맛있어요' = อร่อยจริงๆ!", vi: "'맛있어요' = ngon! '진짜 맛있어요' = ngon thật sự!", es: "'맛있어요' = ¡delicioso! '진짜 맛있어요' = ¡REALMENTE delicioso!" } },
    { type: 'multiple-choice', id: 's2e3-mc1', question: '싱싱하다', questionRomanization: 'singsinghada', options: [
      { en: 'Fresh', ja: '新鮮', zh: '新鲜', th: 'สด', vi: 'Tươi', es: 'Fresco' },
      { en: 'Expensive', ja: '高い', zh: '贵', th: 'แพง', vi: 'Đắt', es: 'Caro' },
      { en: 'Big', ja: '大きい', zh: '大', th: 'ใหญ่', vi: 'Lớn', es: 'Grande' },
      { en: 'Cooked', ja: '調理済み', zh: '煮熟的', th: 'ปรุงสุกแล้ว', vi: 'Đã nấu', es: 'Cocido' },
    ], correctIndex: 0, explanation: { en: "'싱싱하다' = fresh. Used especially for seafood and vegetables!", ja: "「싱싱하다」= 新鮮。特に海鮮や野菜に使う！", zh: "'싱싱하다' = 新鲜。特别用于海鲜和蔬菜！", th: "'싱싱하다' = สด ใช้โดยเฉพาะกับอาหารทะเลและผัก!", vi: "'싱싱하다' = tươi. Đặc biệt dùng cho hải sản và rau!", es: "'싱싱하다' = fresco. ¡Se usa especialmente para mariscos y vegetales!" } },
    { type: 'multiple-choice', id: 's2e3-mc2', question: '서비스', questionRomanization: 'seobiseu', options: [
      { en: 'Free extra/bonus (Konglish)', ja: 'サービス（おまけ）', zh: '赠品/服务', th: 'ของแถม', vi: 'Tặng thêm miễn phí', es: 'Extra gratis/bonus' },
      { en: 'Menu', ja: 'メニュー', zh: '菜单', th: 'เมนู', vi: 'Thực đơn', es: 'Menú' },
      { en: 'Receipt', ja: 'レシート', zh: '收据', th: 'ใบเสร็จ', vi: 'Hóa đơn', es: 'Recibo' },
      { en: 'Tip', ja: 'チップ', zh: '小费', th: 'ทิป', vi: 'Tiền tip', es: 'Propina' },
    ], correctIndex: 0, explanation: { en: "'서비스' in Korea means a free extra/bonus. Vendors give '서비스' to regular or friendly customers!", ja: "韓国での「서비스」はおまけの意味。常連や親しい客に提供！", zh: "'서비스'在韩国是赠品/免费附加的意思。商家给熟客或友好顾客！", th: "'서비스' ในเกาหลีแปลว่าของแถม ผู้ขายให้ '서비스' กับลูกค้าประจำ!", vi: "'서비스' ở Hàn Quốc nghĩa là tặng thêm miễn phí. Người bán cho '서비스' với khách quen!", es: "'서비스' en Corea significa un extra gratis. ¡Los vendedores dan '서비스' a clientes habituales!" } },
    { type: 'multiple-choice', id: 's2e3-mc3', question: '사장님', questionRomanization: 'sajangnim', options: [
      { en: 'Boss/shop owner (respectful)', ja: '社長さん', zh: '老板(尊称)', th: 'เจ้าของร้าน(สุภาพ)', vi: 'Ông chủ (tôn trọng)', es: 'Jefe/dueño (respetuoso)' },
      { en: 'Waiter', ja: 'ウェイター', zh: '服务员', th: 'พนักงานเสิร์ฟ', vi: 'Phục vụ', es: 'Mesero' },
      { en: 'Chef', ja: 'シェフ', zh: '厨师', th: 'เชฟ', vi: 'Đầu bếp', es: 'Chef' },
      { en: 'Customer', ja: 'お客さん', zh: '顾客', th: 'ลูกค้า', vi: 'Khách hàng', es: 'Cliente' },
    ], correctIndex: 0, explanation: { en: "'사장님' = boss/owner. Calling vendors '사장님' is polite and shows respect!", ja: "「사장님」= 社長さん。お店の人を「사장님」と呼ぶのは丁寧で敬意を示す！", zh: "'사장님' = 老板。称呼商贩为'사장님'很有礼貌且表示尊重！", th: "'사장님' = เจ้าของร้าน เรียกผู้ขายว่า '사장님' สุภาพและแสดงความเคารพ!", vi: "'사장님' = ông/bà chủ. Gọi người bán là '사장님' lịch sự và tôn trọng!", es: "'사장님' = jefe/dueño. ¡Llamar '사장님' a los vendedores es cortés y respetuoso!" } },
    { type: 'matching', id: 's2e3-match1', pairs: [
      { korean: '회', translation: { en: 'Raw fish', ja: '刺身', zh: '生鱼片', th: 'ปลาดิบ', vi: 'Cá sống', es: 'Pescado crudo' } },
      { korean: '싱싱하다', translation: { en: 'Fresh', ja: '新鮮', zh: '新鲜', th: 'สด', vi: 'Tươi', es: 'Fresco' } },
      { korean: '서비스', translation: { en: 'Free bonus', ja: 'おまけ', zh: '赠品', th: 'ของแถม', vi: 'Tặng thêm', es: 'Extra gratis' } },
      { korean: '맛있다', translation: { en: 'Delicious', ja: '美味しい', zh: '好吃', th: 'อร่อย', vi: 'Ngon', es: 'Delicioso' } },
      { korean: '진짜', translation: { en: 'Really/truly', ja: '本当に', zh: '真的', th: 'จริงๆ', vi: 'Thật sự', es: 'Realmente' } },
      { korean: '사장님', translation: { en: 'Boss/owner', ja: '社長さん', zh: '老板', th: 'เจ้าของร้าน', vi: 'Ông chủ', es: 'Jefe/dueño' } },
    ], explanation: { en: 'Seafood market vocabulary mastered! You can navigate any Korean fish market.', ja: '海鮮市場の語彙マスター！韓国の魚市場を楽しめるよ。', zh: '海鲜市场词汇掌握！可以逛韩国任何鱼市场了。', th: 'คำศัพท์ตลาดอาหารทะเลครบ! เดินตลาดปลาเกาหลีได้แล้ว', vi: 'Từ vựng chợ hải sản hoàn thành! Bạn có thể đi chợ cá Hàn Quốc.', es: '¡Vocabulario del mercado de mariscos dominado! Ya puedes navegar cualquier mercado de pescado.' } },
  ],
};

// s2e4: Gamcheon Village quiz
export const reviewS2E4: ReviewQuiz = {
  id: 'review-s2e4',
  triggerAfterEpisode: 's2e4',
  title: { en: 'Review Quiz: Gamcheon Village', ja: '復習クイズ：甘川文化村', zh: '复习测验：甘川文化村', th: 'แบบทดสอบทบทวน: กัมชอน', vi: 'Bài ôn tập: Làng Gamcheon', es: 'Quiz de repaso: Gamcheon' },
  description: { en: 'Test what you learned at Gamcheon Culture Village!', ja: '甘川文化村で学んだことをテスト！', zh: '测试你在甘川文化村学到的！', th: 'ทดสอบสิ่งที่เรียนรู้ที่กัมชอน!', vi: 'Kiểm tra những gì bạn học ở Gamcheon!', es: '¡Pon a prueba lo que aprendiste en Gamcheon!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e4-fb1', sentence: { en: '"_____ 찍어 주실 수 있어요?" (Can you take a photo?)', ja: '「_____ 찍어 주실 수 있어요?」（写真を撮ってもらえますか？）', zh: '"_____ 찍어 주실 수 있어요?"（能帮我拍照吗？）', th: '"_____ 찍어 주실 수 있어요?" (ช่วยถ่ายรูปได้ไหม?)', vi: '"_____ 찍어 주실 수 있어요?" (Chụp ảnh giúp được không?)', es: '"_____ 찍어 주실 수 있어요?" (¿Puede tomar una foto?)' }, correctAnswer: '사진', options: ['사진', '영상', '그림', '노래'], explanation: { en: "'사진' = photo. '사진 찍다' = to take a photo.", ja: "「사진」= 写真。「사진 찍다」= 写真を撮る。", zh: "'사진' = 照片。'사진 찍다' = 拍照。", th: "'사진' = รูปถ่าย '사진 찍다' = ถ่ายรูป", vi: "'사진' = ảnh. '사진 찍다' = chụp ảnh.", es: "'사진' = foto. '사진 찍다' = tomar foto." } },
    { type: 'fill-in-blank', id: 's2e4-fb2', sentence: { en: '"_____ 하나 주세요" (One map please)', ja: '「_____ 하나 주세요」（地図を1枚ください）', zh: '"_____ 하나 주세요"（请给一张地图）', th: '"_____ 하나 주세요" (ขอแผนที่หนึ่งแผ่น)', vi: '"_____ 하나 주세요" (Cho một tấm bản đồ)', es: '"_____ 하나 주세요" (Un mapa por favor)' }, correctAnswer: '지도', options: ['지도', '표', '사진', '카드'], explanation: { en: "'지도' = map. Gamcheon village gives out free maps to explore!", ja: "「지도」= 地図。甘川村では探検用の無料地図を配布！", zh: "'지도' = 地图。甘川村提供免费探索地图！", th: "'지도' = แผนที่ กัมชอนแจกแผนที่ฟรีสำหรับเดินเที่ยว!", vi: "'지도' = bản đồ. Làng Gamcheon phát bản đồ miễn phí để khám phá!", es: "'지도' = mapa. ¡Gamcheon da mapas gratis para explorar!" } },
    { type: 'fill-in-blank', id: 's2e4-fb3', sentence: { en: '"_____ 사고 싶어요" (I want to buy a souvenir)', ja: '「_____ 사고 싶어요」（お土産を買いたい）', zh: '"_____ 사고 싶어요"（想买纪念品）', th: '"_____ 사고 싶어요" (อยากซื้อของที่ระลึก)', vi: '"_____ 사고 싶어요" (Muốn mua quà lưu niệm)', es: '"_____ 사고 싶어요" (Quiero comprar un recuerdo)' }, correctAnswer: '기념품', options: ['기념품', '음식', '옷', '신발'], explanation: { en: "'기념품' = souvenir. '사고 싶어요' = I want to buy.", ja: "「기념품」= お土産。「사고 싶어요」= 買いたい。", zh: "'기념품' = 纪念品。'사고 싶어요' = 想买。", th: "'기념품' = ของที่ระลึก '사고 싶어요' = อยากซื้อ", vi: "'기념품' = quà lưu niệm. '사고 싶어요' = muốn mua.", es: "'기념품' = recuerdo/suvenir. '사고 싶어요' = quiero comprar." } },
    { type: 'multiple-choice', id: 's2e4-mc1', question: '물론이죠', questionRomanization: 'mullon-ijyo', options: [
      { en: 'Of course!', ja: 'もちろん！', zh: '当然！', th: 'แน่นอน!', vi: 'Tất nhiên!', es: '¡Por supuesto!' },
      { en: "I don't know", ja: 'わかりません', zh: '不知道', th: 'ไม่รู้', vi: 'Không biết', es: 'No sé' },
      { en: 'Maybe', ja: 'たぶん', zh: '也许', th: 'บางที', vi: 'Có thể', es: 'Quizás' },
      { en: "I can't", ja: 'できません', zh: '不行', th: 'ไม่ได้', vi: 'Không được', es: 'No puedo' },
    ], correctIndex: 0, explanation: { en: "'물론이죠' = Of course! A cheerful, helpful response.", ja: "「물론이죠」= もちろん！明るく親切な返答。", zh: "'물론이죠' = 当然！积极友好的回答。", th: "'물론이죠' = แน่นอน! ตอบอย่างร่าเริงและเป็นมิตร", vi: "'물론이죠' = Tất nhiên! Câu trả lời vui vẻ, thân thiện.", es: "'물론이죠' = ¡Por supuesto! Una respuesta alegre y amable." } },
    { type: 'multiple-choice', id: 's2e4-mc2', question: '경치가 좋다', questionRomanization: 'gyeongchiga jota', options: [
      { en: 'The scenery is beautiful', ja: '景色が良い', zh: '景色好', th: 'วิวสวย', vi: 'Cảnh đẹp', es: 'El paisaje es hermoso' },
      { en: 'The food is good', ja: '料理が美味しい', zh: '食物好', th: 'อาหารดี', vi: 'Đồ ăn ngon', es: 'La comida es buena' },
      { en: 'The weather is nice', ja: '天気が良い', zh: '天气好', th: 'อากาศดี', vi: 'Thời tiết tốt', es: 'El clima es agradable' },
      { en: 'The price is good', ja: '値段が良い', zh: '价格好', th: 'ราคาดี', vi: 'Giá tốt', es: 'El precio es bueno' },
    ], correctIndex: 0, explanation: { en: "'경치' = scenery/view. '경치가 좋다' = the scenery is beautiful.", ja: "「경치」= 景色。「경치가 좋다」= 景色が良い。", zh: "'경치' = 景色。'경치가 좋다' = 景色好。", th: "'경치' = ทิวทัศน์ '경치가 좋다' = วิวสวย", vi: "'경치' = cảnh. '경치가 좋다' = cảnh đẹp.", es: "'경치' = paisaje. '경치가 좋다' = el paisaje es hermoso." } },
    { type: 'multiple-choice', id: 's2e4-mc3', question: '엽서', questionRomanization: 'yeopseo', options: [
      { en: 'Postcard', ja: 'ポストカード', zh: '明信片', th: 'โปสการ์ด', vi: 'Bưu thiếp', es: 'Postal' },
      { en: 'Stamp', ja: '切手', zh: '邮票', th: 'แสตมป์', vi: 'Tem', es: 'Sello' },
      { en: 'Letter', ja: '手紙', zh: '信', th: 'จดหมาย', vi: 'Thư', es: 'Carta' },
      { en: 'Notebook', ja: 'ノート', zh: '笔记本', th: 'สมุด', vi: 'Sổ', es: 'Cuaderno' },
    ], correctIndex: 0, explanation: { en: "'엽서' = postcard. Great souvenir to send home from Gamcheon!", ja: "「엽서」= ポストカード。甘川からのお土産にぴったり！", zh: "'엽서' = 明信片。从甘川寄回家的好礼物！", th: "'엽서' = โปสการ์ด ของที่ระลึกดีๆ ส่งกลับบ้านจากกัมชอน!", vi: "'엽서' = bưu thiếp. Quà lưu niệm tuyệt vời gửi về nhà từ Gamcheon!", es: "'엽서' = postal. ¡Gran recuerdo para enviar a casa desde Gamcheon!" } },
    { type: 'matching', id: 's2e4-match1', pairs: [
      { korean: '사진', translation: { en: 'Photo', ja: '写真', zh: '照片', th: 'รูปถ่าย', vi: 'Ảnh', es: 'Foto' } },
      { korean: '지도', translation: { en: 'Map', ja: '地図', zh: '地图', th: 'แผนที่', vi: 'Bản đồ', es: 'Mapa' } },
      { korean: '기념품', translation: { en: 'Souvenir', ja: 'お土産', zh: '纪念品', th: 'ของที่ระลึก', vi: 'Quà lưu niệm', es: 'Recuerdo' } },
      { korean: '경치', translation: { en: 'Scenery', ja: '景色', zh: '景色', th: 'ทิวทัศน์', vi: 'Cảnh', es: 'Paisaje' } },
      { korean: '예쁘다', translation: { en: 'Pretty', ja: 'きれい', zh: '漂亮', th: 'สวย', vi: 'Đẹp', es: 'Bonito' } },
      { korean: '멋지다', translation: { en: 'Cool/awesome', ja: 'かっこいい', zh: '帅/酷', th: 'เท่', vi: 'Tuyệt', es: 'Genial' } },
    ], explanation: { en: 'Sightseeing vocabulary mastered! You can explore any tourist spot in Korea.', ja: '観光語彙マスター！韓国の観光スポットを楽しめるよ。', zh: '观光词汇掌握！可以探索韩国任何旅游景点了。', th: 'คำศัพท์ท่องเที่ยวครบ! สำรวจสถานที่ท่องเที่ยวในเกาหลีได้แล้ว', vi: 'Từ vựng tham quan hoàn thành! Bạn có thể khám phá mọi địa điểm ở Hàn Quốc.', es: '¡Vocabulario turístico dominado! Ya puedes explorar cualquier atracción coreana.' } },
  ],
};

// s2e5: Temple quiz
export const reviewS2E5: ReviewQuiz = {
  id: 'review-s2e5',
  triggerAfterEpisode: 's2e5',
  title: { en: 'Review Quiz: Seaside Temple', ja: '復習クイズ：海辺の寺院', zh: '复习测验：海边寺庙', th: 'แบบทดสอบทบทวน: วัดริมทะเล', vi: 'Bài ôn tập: Chùa ven biển', es: 'Quiz de repaso: Templo junto al mar' },
  description: { en: 'Test what you learned at the temple!', ja: 'お寺で学んだことをテスト！', zh: '测试你在寺庙学到的！', th: 'ทดสอบสิ่งที่เรียนรู้ที่วัด!', vi: 'Kiểm tra những gì bạn học ở chùa!', es: '¡Pon a prueba lo que aprendiste en el templo!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e5-fb1', sentence: { en: '"건강과 _____을 빌어요" (I wish for health and happiness)', ja: '「건강과 _____을 빌어요」（健康と幸せを祈る）', zh: '"건강과 _____을 빌어요"（祈求健康和幸福）', th: '"건강과 _____을 빌어요" (ขอสุขภาพและความสุข)', vi: '"건강과 _____을 빌어요" (Cầu sức khỏe và hạnh phúc)', es: '"건강과 _____을 빌어요" (Deseo salud y felicidad)' }, correctAnswer: '행복', options: ['행복', '사랑', '돈', '성공'], explanation: { en: "'행복' = happiness. '건강과 행복' = health and happiness - a common wish!", ja: "「행복」= 幸せ。「건강과 행복」= 健康と幸せ - よくある願い事！", zh: "'행복' = 幸福。'건강과 행복' = 健康与幸福 - 常见的祈愿！", th: "'행복' = ความสุข '건강과 행복' = สุขภาพและความสุข - คำอวยพรทั่วไป!", vi: "'행복' = hạnh phúc. '건강과 행복' = sức khỏe và hạnh phúc - lời cầu nguyện phổ biến!", es: "'행복' = felicidad. '건강과 행복' = salud y felicidad - ¡un deseo común!" } },
    { type: 'fill-in-blank', id: 's2e5-fb2', sentence: { en: '"_____을 빌어요" (I make a wish)', ja: '「_____을 빌어요」（願い事をする）', zh: '"_____을 빌어요"（许愿）', th: '"_____을 빌어요" (อธิษฐาน)', vi: '"_____을 빌어요" (Ước nguyện)', es: '"_____을 빌어요" (Pido un deseo)' }, correctAnswer: '소원', options: ['소원', '기도', '인사', '약속'], explanation: { en: "'소원' = wish. '소원을 빌다' = to make a wish.", ja: "「소원」= 願い。「소원을 빌다」= 願い事をする。", zh: "'소원' = 愿望。'소원을 빌다' = 许愿。", th: "'소원' = คำอธิษฐาน '소원을 빌다' = อธิษฐาน", vi: "'소원' = điều ước. '소원을 빌다' = ước nguyện.", es: "'소원' = deseo. '소원을 빌다' = pedir un deseo." } },
    { type: 'fill-in-blank', id: 's2e5-fb3', sentence: { en: '"바다가 정말 _____!" (The sea is really awesome!)', ja: '「바다가 정말 _____!」（海が本当にすごい！）', zh: '"바다가 정말 _____!"（海真壮观！）', th: '"바다가 정말 _____!" (ทะเลสวยมาก!)', vi: '"바다가 정말 _____!" (Biển thật tuyệt!)', es: '"바다가 정말 _____!" (¡El mar es realmente increíble!)' }, correctAnswer: '멋져요', options: ['멋져요', '맛있어요', '비싸요', '작아요'], explanation: { en: "'멋져요' = awesome/cool. From '멋지다'. Used for scenery, people, and things!", ja: "「멋져요」= すごい。「멋지다」から。景色、人、物に使える！", zh: "'멋져요' = 很棒。来自'멋지다'。用于景色、人和事物！", th: "'멋져요' = เท่/สุดยอด จาก '멋지다' ใช้กับวิว คน และสิ่งต่างๆ!", vi: "'멋져요' = tuyệt vời. Từ '멋지다'. Dùng cho cảnh, người và đồ vật!", es: "'멋져요' = genial/increíble. De '멋지다'. ¡Para paisajes, personas y cosas!" } },
    { type: 'multiple-choice', id: 's2e5-mc1', question: '기도', questionRomanization: 'gido', options: [
      { en: 'Prayer', ja: '祈り', zh: '祈祷', th: 'คำอธิษฐาน', vi: 'Cầu nguyện', es: 'Oración' },
      { en: 'Gift', ja: 'プレゼント', zh: '礼物', th: 'ของขวัญ', vi: 'Quà tặng', es: 'Regalo' },
      { en: 'Dance', ja: 'ダンス', zh: '舞蹈', th: 'การเต้น', vi: 'Nhảy', es: 'Baile' },
      { en: 'Song', ja: '歌', zh: '歌', th: 'เพลง', vi: 'Bài hát', es: 'Canción' },
    ], correctIndex: 0, explanation: { en: "'기도' = prayer. '기도하다' = to pray.", ja: "「기도」= 祈り。「기도하다」= 祈る。", zh: "'기도' = 祈祷。'기도하다' = 祈祷。", th: "'기도' = คำอธิษฐาน '기도하다' = สวดมนต์", vi: "'기도' = cầu nguyện. '기도하다' = cầu nguyện.", es: "'기도' = oración. '기도하다' = rezar." } },
    { type: 'multiple-choice', id: 's2e5-mc2', question: '건강', questionRomanization: 'geongang', options: [
      { en: 'Health', ja: '健康', zh: '健康', th: 'สุขภาพ', vi: 'Sức khỏe', es: 'Salud' },
      { en: 'Wealth', ja: '富', zh: '财富', th: 'ความร่ำรวย', vi: 'Giàu có', es: 'Riqueza' },
      { en: 'Beauty', ja: '美', zh: '美丽', th: 'ความงาม', vi: 'Vẻ đẹp', es: 'Belleza' },
      { en: 'Strength', ja: '力', zh: '力量', th: 'ความแข็งแรง', vi: 'Sức mạnh', es: 'Fuerza' },
    ], correctIndex: 0, explanation: { en: "'건강' = health. '건강하세요!' = Stay healthy! (common wish).", ja: "「건강」= 健康。「건강하세요!」= 健康でいてね！（よくある挨拶）", zh: "'건강' = 健康。'건강하세요!' = 保持健康！（常见祝福）", th: "'건강' = สุขภาพ '건강하세요!' = สุขภาพดีนะ! (คำอวยพรทั่วไป)", vi: "'건강' = sức khỏe. '건강하세요!' = Khỏe mạnh nhé! (lời chúc phổ biến)", es: "'건강' = salud. '건강하세요!' = ¡Manténgase sano! (deseo común)" } },
    { type: 'multiple-choice', id: 's2e5-mc3', question: '절', questionRomanization: 'jeol', options: [
      { en: 'Temple', ja: '寺', zh: '寺庙', th: 'วัด', vi: 'Chùa', es: 'Templo' },
      { en: 'Church', ja: '教会', zh: '教堂', th: 'โบสถ์', vi: 'Nhà thờ', es: 'Iglesia' },
      { en: 'School', ja: '学校', zh: '学校', th: 'โรงเรียน', vi: 'Trường', es: 'Escuela' },
      { en: 'Hospital', ja: '病院', zh: '医院', th: 'โรงพยาบาล', vi: 'Bệnh viện', es: 'Hospital' },
    ], correctIndex: 0, explanation: { en: "'절' = Buddhist temple. Korea has many beautiful 절 in mountains and by the sea!", ja: "「절」= 仏教寺院。韓国には山や海辺に美しい절がたくさん！", zh: "'절' = 佛教寺庙。韩国山上和海边有很多美丽的절！", th: "'절' = วัดพุทธ เกาหลีมีวัดสวยๆ มากมายบนภูเขาและริมทะเล!", vi: "'절' = chùa Phật giáo. Hàn Quốc có nhiều 절 đẹp trên núi và ven biển!", es: "'절' = templo budista. ¡Corea tiene muchos 절 hermosos en montañas y junto al mar!" } },
    { type: 'matching', id: 's2e5-match1', pairs: [
      { korean: '기도', translation: { en: 'Prayer', ja: '祈り', zh: '祈祷', th: 'คำอธิษฐาน', vi: 'Cầu nguyện', es: 'Oración' } },
      { korean: '건강', translation: { en: 'Health', ja: '健康', zh: '健康', th: 'สุขภาพ', vi: 'Sức khỏe', es: 'Salud' } },
      { korean: '행복', translation: { en: 'Happiness', ja: '幸せ', zh: '幸福', th: 'ความสุข', vi: 'Hạnh phúc', es: 'Felicidad' } },
      { korean: '소원', translation: { en: 'Wish', ja: '願い', zh: '愿望', th: 'คำอธิษฐาน', vi: 'Điều ước', es: 'Deseo' } },
      { korean: '절', translation: { en: 'Temple', ja: '寺', zh: '寺庙', th: 'วัด', vi: 'Chùa', es: 'Templo' } },
      { korean: '바다', translation: { en: 'Sea', ja: '海', zh: '海', th: 'ทะเล', vi: 'Biển', es: 'Mar' } },
    ], explanation: { en: 'Temple vocabulary mastered! You can visit any Korean temple with confidence.', ja: 'お寺の語彙マスター！韓国の寺院を自信を持って訪問できるよ。', zh: '寺庙词汇掌握！可以自信参观韩国任何寺庙了。', th: 'คำศัพท์วัดครบ! เยี่ยมชมวัดเกาหลีได้อย่างมั่นใจ', vi: 'Từ vựng chùa hoàn thành! Bạn có thể tham quan chùa Hàn Quốc tự tin.', es: '¡Vocabulario de templos dominado! Ya puedes visitar cualquier templo coreano con confianza.' } },
  ],
};

// s2e6: Night Market quiz
export const reviewS2E6: ReviewQuiz = {
  id: 'review-s2e6',
  triggerAfterEpisode: 's2e6',
  title: { en: 'Review Quiz: Night Market', ja: '復習クイズ：ナイトマーケット', zh: '复习测验：夜市', th: 'แบบทดสอบทบทวน: ตลาดกลางคืน', vi: 'Bài ôn tập: Chợ đêm', es: 'Quiz de repaso: Mercado nocturno' },
  description: { en: 'Test what you learned at the night market!', ja: 'ナイトマーケットで学んだことをテスト！', zh: '测试你在夜市学到的！', th: 'ทดสอบสิ่งที่เรียนรู้ที่ตลาดกลางคืน!', vi: 'Kiểm tra những gì bạn học ở chợ đêm!', es: '¡Pon a prueba lo que aprendiste en el mercado nocturno!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e6-fb1', sentence: { en: '"호떡 _____ 주세요" (Two hotteok please)', ja: '「호떡 _____ 주세요」（ホットク2つください）', zh: '"호떡 _____ 주세요"（请给两个糖饼）', th: '"호떡 _____ 주세요" (ขอโฮตต็อกสองอัน)', vi: '"호떡 _____ 주세요" (Cho hai cái hotteok)', es: '"호떡 _____ 주세요" (Dos hotteok por favor)' }, correctAnswer: '두 개', options: ['두 개', '두 잔', '두 병', '두 박'], explanation: { en: "'두 개' = two (things). '개' is the general counter for items.", ja: "「두 개」= 2つ。「개」は一般的な物の数え方。", zh: "'두 개' = 两个。'개'是物品的通用量词。", th: "'두 개' = สองอัน '개' คือลักษณนามทั่วไปสำหรับสิ่งของ", vi: "'두 개' = hai cái. '개' là từ đếm chung cho đồ vật.", es: "'두 개' = dos (cosas). '개' es el contador general para objetos." } },
    { type: 'fill-in-blank', id: 's2e6-fb2', sentence: { en: '"따뜻하고 _____해요!" (It\'s warm and sweet!)', ja: '「따뜻하고 _____해요!」（温かくて甘い！）', zh: '"따뜻하고 _____해요!"（又暖又甜！）', th: '"따뜻하고 _____해요!" (อุ่นและหวาน!)', vi: '"따뜻하고 _____해요!" (Nóng và ngọt!)', es: '"따뜻하고 _____해요!" (¡Caliente y dulce!)' }, correctAnswer: '달콤', options: ['달콤', '매운', '짠', '쓴'], explanation: { en: "'달콤하다' = sweet. Hotteok is filled with brown sugar, making it 달콤해요!", ja: "「달콤하다」= 甘い。ホットクは黒砂糖入りで달콤해요！", zh: "'달콤하다' = 甜。糖饼里有红糖，所以달콤해요！", th: "'달콤하다' = หวาน โฮตต็อกใส่น้ำตาลทรายแดง ทำให้ 달콤해요!", vi: "'달콤하다' = ngọt. Hotteok có đường nâu bên trong, nên 달콤해요!", es: "'달콤하다' = dulce. ¡El hotteok está relleno de azúcar morena, haciéndolo 달콤해요!" } },
    { type: 'fill-in-blank', id: 's2e6-fb3', sentence: { en: '"다 _____ 얼마예요?" (How much is everything together?)', ja: '「다 _____ 얼마예요?」（全部でいくら？）', zh: '"다 _____ 얼마예요?"（一共多少钱？）', th: '"다 _____ 얼마예요?" (รวมทั้งหมดเท่าไหร่?)', vi: '"다 _____ 얼마예요?" (Tất cả bao nhiêu?)', es: '"다 _____ 얼마예요?" (¿Cuánto es en total?)' }, correctAnswer: '합쳐서', options: ['합쳐서', '빼서', '나눠서', '더해서'], explanation: { en: "'합쳐서' = combined/together. '다 합쳐서' = all combined.", ja: "「합쳐서」= 合わせて。「다 합쳐서」= 全部合わせて。", zh: "'합쳐서' = 合计。'다 합쳐서' = 全部合计。", th: "'합쳐서' = รวมกัน '다 합쳐서' = รวมทั้งหมด", vi: "'합쳐서' = cộng lại. '다 합쳐서' = tất cả cộng lại.", es: "'합쳐서' = combinado. '다 합쳐서' = todo combinado." } },
    { type: 'multiple-choice', id: 's2e6-mc1', question: '호떡', questionRomanization: 'hotteok', options: [
      { en: 'Sweet filled pancake', ja: 'ホットク（甘い焼き菓子）', zh: '糖饼', th: 'โฮตต็อก (แพนเค้กหวาน)', vi: 'Hotteok (bánh pancake nhân ngọt)', es: 'Panqueque dulce relleno' },
      { en: 'Rice cake', ja: '餅', zh: '年糕', th: 'ต็อก', vi: 'Bánh gạo', es: 'Pastel de arroz' },
      { en: 'Fried chicken', ja: 'フライドチキン', zh: '炸鸡', th: 'ไก่ทอด', vi: 'Gà rán', es: 'Pollo frito' },
      { en: 'Dumpling', ja: '餃子', zh: '饺子', th: 'เกี๊ยว', vi: 'Sủi cảo', es: 'Empanadilla' },
    ], correctIndex: 0, explanation: { en: "'호떡' = sweet Korean pancake filled with brown sugar, nuts, and cinnamon!", ja: "「호떡」= 黒砂糖、ナッツ、シナモン入りの韓国の甘い焼き菓子！", zh: "'호떡' = 韩国糖饼，里面有红糖、坚果和肉桂！", th: "'호떡' = แพนเค้กเกาหลีใส่น้ำตาลทรายแดง ถั่ว และอบเชย!", vi: "'호떡' = bánh Hàn Quốc nhân đường nâu, hạt, và quế!", es: "'호떡' = ¡panqueque coreano relleno de azúcar morena, nueces y canela!" } },
    { type: 'multiple-choice', id: 's2e6-mc2', question: '개', questionRomanization: 'gae', options: [
      { en: 'General counter for items', ja: '個（物の数え方）', zh: '个（物品量词）', th: 'ลักษณนามทั่วไป', vi: 'Từ đếm chung', es: 'Contador general' },
      { en: 'Counter for cups', ja: '杯', zh: '杯', th: 'แก้ว', vi: 'Ly', es: 'Tazas' },
      { en: 'Counter for people', ja: '人', zh: '人', th: 'คน', vi: 'Người', es: 'Personas' },
      { en: 'Counter for animals', ja: '匹', zh: '只', th: 'ตัว', vi: 'Con', es: 'Animales' },
    ], correctIndex: 0, explanation: { en: "'개' = general counter for things. 하나/한 개, 두/두 개, 세/세 개...", ja: "「개」= 物の一般的な数え方。하나/한 개、두/두 개、세/세 개...", zh: "'개' = 物品通用量词。하나/한 개、두/두 개、세/세 개...", th: "'개' = ลักษณนามทั่วไปสำหรับสิ่งของ 하나/한 개, 두/두 개, 세/세 개...", vi: "'개' = từ đếm chung. 하나/한 개, 두/두 개, 세/세 개...", es: "'개' = contador general. 하나/한 개, 두/두 개, 세/세 개..." } },
    { type: 'multiple-choice', id: 's2e6-mc3', question: '순대', questionRomanization: 'sundae', options: [
      { en: 'Korean blood sausage', ja: 'スンデ（韓国式ソーセージ）', zh: '韩国血肠', th: 'ซุนแด (ไส้กรอกเลือดเกาหลี)', vi: 'Sundae (dồi Hàn Quốc)', es: 'Morcilla coreana' },
      { en: 'Ice cream', ja: 'アイスクリーム', zh: '冰淇淋', th: 'ไอศกรีม', vi: 'Kem', es: 'Helado' },
      { en: 'Noodles', ja: '麺', zh: '面条', th: 'เส้นก๋วยเตี๋ยว', vi: 'Mì', es: 'Fideos' },
      { en: 'Soup', ja: 'スープ', zh: '汤', th: 'ซุป', vi: 'Súp', es: 'Sopa' },
    ], correctIndex: 0, explanation: { en: "'순대' = Korean blood sausage with glass noodles. A popular street food! (Not ice cream!)", ja: "「순대」= 春雨入り韓国式ソーセージ。人気の屋台フード！（アイスじゃないよ！）", zh: "'순대' = 韩国血肠，里面有粉条。人气街头美食！（不是冰淇淋！）", th: "'순대' = ไส้กรอกเลือดเกาหลีใส่วุ้นเส้น อาหารริมทางยอดนิยม! (ไม่ใช่ไอศกรีม!)", vi: "'순대' = dồi Hàn Quốc với miến. Đồ ăn đường phố phổ biến! (Không phải kem!)", es: "'순대' = morcilla coreana con fideos de cristal. ¡Comida callejera popular! (¡No es helado!)" } },
    { type: 'matching', id: 's2e6-match1', pairs: [
      { korean: '호떡', translation: { en: 'Sweet pancake', ja: 'ホットク', zh: '糖饼', th: 'โฮตต็อก', vi: 'Hotteok', es: 'Panqueque dulce' } },
      { korean: '달콤하다', translation: { en: 'Sweet', ja: '甘い', zh: '甜', th: 'หวาน', vi: 'Ngọt', es: 'Dulce' } },
      { korean: '순대', translation: { en: 'Blood sausage', ja: 'スンデ', zh: '血肠', th: 'ซุนแด', vi: 'Dồi', es: 'Morcilla' } },
      { korean: '개', translation: { en: 'Counter (items)', ja: '個', zh: '个', th: 'อัน/ชิ้น', vi: 'Cái', es: 'Contador' } },
      { korean: '합치다', translation: { en: 'To combine', ja: '合わせる', zh: '合计', th: 'รวมกัน', vi: 'Cộng lại', es: 'Combinar' } },
      { korean: '하나', translation: { en: 'One', ja: '1つ', zh: '一个', th: 'หนึ่ง', vi: 'Một', es: 'Uno' } },
    ], explanation: { en: 'Night market vocabulary complete! You can now enjoy Korean night markets like a local.', ja: 'ナイトマーケット語彙完了！地元の人のように韓国の夜市を楽しもう。', zh: '夜市词汇掌握！现在可以像当地人一样逛韩国夜市了。', th: 'คำศัพท์ตลาดกลางคืนครบ! เดินตลาดกลางคืนเกาหลีแบบคนท้องถิ่น', vi: 'Từ vựng chợ đêm hoàn thành! Bạn có thể tận hưởng chợ đêm Hàn Quốc như người địa phương.', es: '¡Vocabulario de mercado nocturno completo! Ya puedes disfrutar de los mercados nocturnos coreanos como un local.' } },
  ],
};

// s2e7: Fireworks quiz
export const reviewS2E7: ReviewQuiz = {
  id: 'review-s2e7',
  triggerAfterEpisode: 's2e7',
  title: { en: 'Review Quiz: Gwangalli Fireworks', ja: '復習クイズ：広安里花火', zh: '复习测验：广安里烟火', th: 'แบบทดสอบทบทวน: ดอกไม้ไฟ', vi: 'Bài ôn tập: Pháo hoa Gwangalli', es: 'Quiz de repaso: Fuegos artificiales' },
  description: { en: 'Test what you learned at the fireworks show!', ja: '花火大会で学んだことをテスト！', zh: '测试你在烟火表演学到的！', th: 'ทดสอบสิ่งที่เรียนรู้จากดอกไม้ไฟ!', vi: 'Kiểm tra những gì bạn học ở lễ pháo hoa!', es: '¡Pon a prueba lo que aprendiste en el show de fuegos artificiales!' },
  passingScore: 60,
  rewards: { xp: 100 },
  questions: [
    { type: 'fill-in-blank', id: 's2e7-fb1', sentence: { en: '"여기 _____ 있어요?" (Is this spot taken?)', ja: '「여기 _____ 있어요?」（ここ空いてますか？）', zh: '"여기 _____ 있어요?"（这里有位子吗？）', th: '"여기 _____ 있어요?" (ที่นี่ว่างไหม?)', vi: '"여기 _____ 있어요?" (Chỗ này còn trống không?)', es: '"여기 _____ 있어요?" (¿Este lugar está libre?)' }, correctAnswer: '자리', options: ['자리', '사람', '음식', '돈'], explanation: { en: "'자리 있어요?' = Is there a seat/spot? Essential for claiming a spot!", ja: "「자리 있어요?」= 席ありますか？場所取りに必須！", zh: "'자리 있어요?' = 有位子吗？占位必备！", th: "'자리 있어요?' = มีที่ไหม? สำคัญสำหรับจองที่!", vi: "'자리 있어요?' = Có chỗ không? Cần thiết để tìm chỗ ngồi!", es: "'자리 있어요?' = ¿Hay lugar? ¡Esencial para conseguir un puesto!" } },
    { type: 'fill-in-blank', id: 's2e7-fb2', sentence: { en: '"_____ 너무 예뻐요!" (The fireworks are so beautiful!)', ja: '「_____ 너무 예뻐요!」（花火がとても綺麗！）', zh: '"_____ 너무 예뻐요!"（烟火太美了！）', th: '"_____ 너무 예뻐요!" (ดอกไม้ไฟสวยมาก!)', vi: '"_____ 너무 예뻐요!" (Pháo hoa đẹp quá!)', es: '"_____ 너무 예뻐요!" (¡Los fuegos artificiales son hermosos!)' }, correctAnswer: '불꽃놀이', options: ['불꽃놀이', '꽃', '별', '불'], explanation: { en: "'불꽃놀이' = fireworks. 불꽃(flame/spark) + 놀이(play/game).", ja: "「불꽃놀이」= 花火。불꽃(炎/火花) + 놀이(遊び)。", zh: "'불꽃놀이' = 烟火。불꽃(火花) + 놀이(游戏)。", th: "'불꽃놀이' = ดอกไม้ไฟ 불꽃(ประกายไฟ) + 놀이(การเล่น)", vi: "'불꽃놀이' = pháo hoa. 불꽃(tia lửa) + 놀이(trò chơi).", es: "'불꽃놀이' = fuegos artificiales. 불꽃(chispa) + 놀이(juego)." } },
    { type: 'fill-in-blank', id: 's2e7-fb3', sentence: { en: '"정말 _____!" (It\'s really beautiful!)', ja: '「정말 _____!」（本当に美しい！）', zh: '"정말 _____!"（真的很美！）', th: '"정말 _____!" (สวยจริงๆ!)', vi: '"정말 _____!" (Đẹp thật!)', es: '"정말 _____!" (¡Realmente hermoso!)' }, correctAnswer: '아름다워요', options: ['아름다워요', '맛있어요', '비싸요', '무서워요'], explanation: { en: "'아름다워요' = beautiful. From '아름답다'. A stronger word than '예쁘다'.", ja: "「아름다워요」= 美しい。「아름답다」から。「예쁘다」より強い表現。", zh: "'아름다워요' = 美丽。来自'아름답다'。比'예쁘다'更强烈。", th: "'아름다워요' = สวยงาม จาก '아름답다' แข็งแรงกว่า '예쁘다'", vi: "'아름다워요' = đẹp. Từ '아름답다'. Mạnh hơn '예쁘다'.", es: "'아름다워요' = hermoso. De '아름답다'. Más fuerte que '예쁘다'." } },
    { type: 'multiple-choice', id: 's2e7-mc1', question: '대박', questionRomanization: 'daebak', options: [
      { en: 'Amazing!/Awesome! (slang)', ja: 'すごい！（スラング）', zh: '太棒了！（俚语）', th: 'เจ๋งมาก! (ภาษาพูด)', vi: 'Tuyệt vời! (tiếng lóng)', es: '¡Increíble! (jerga)' },
      { en: 'Terrible!', ja: 'ひどい！', zh: '糟糕！', th: 'แย่มาก!', vi: 'Tệ quá!', es: '¡Terrible!' },
      { en: 'Maybe', ja: 'たぶん', zh: '也许', th: 'บางที', vi: 'Có thể', es: 'Quizás' },
      { en: 'Hello', ja: 'こんにちは', zh: '你好', th: 'สวัสดี', vi: 'Xin chào', es: 'Hola' },
    ], correctIndex: 0, explanation: { en: "'대박' = amazing/awesome! Very popular Korean slang. Used when impressed!", ja: "「대박」= すごい！韓国の人気スラング。感動した時に使う！", zh: "'대박' = 太棒了！非常流行的韩语俚语。感到惊叹时使用！", th: "'대박' = เจ๋งมาก! ภาษาพูดเกาหลียอดนิยม ใช้เมื่อประทับใจ!", vi: "'대박' = tuyệt vời! Tiếng lóng Hàn rất phổ biến. Dùng khi ấn tượng!", es: "'대박' = ¡increíble! Jerga coreana muy popular. ¡Se usa cuando estás impresionado!" } },
    { type: 'multiple-choice', id: 's2e7-mc2', question: '최고', questionRomanization: 'choego', options: [
      { en: 'The best', ja: '最高', zh: '最好的', th: 'ดีที่สุด', vi: 'Tốt nhất', es: 'Lo mejor' },
      { en: 'The worst', ja: '最悪', zh: '最差的', th: 'แย่ที่สุด', vi: 'Tệ nhất', es: 'Lo peor' },
      { en: 'Average', ja: '普通', zh: '一般', th: 'ปานกลาง', vi: 'Bình thường', es: 'Promedio' },
      { en: 'First', ja: '最初', zh: '第一', th: 'แรก', vi: 'Đầu tiên', es: 'Primero' },
    ], correctIndex: 0, explanation: { en: "'최고' = the best! '최고예요!' = It's the best! Perfect for expressing admiration.", ja: "「최고」= 最高！「최고예요!」= 最高だ！感動を表すのにぴったり。", zh: "'최고' = 最好！'최고예요!' = 最棒了！完美表达赞叹。", th: "'최고' = ดีที่สุด! '최고예요!' = ดีที่สุดเลย! สำหรับแสดงความชื่นชม", vi: "'최고' = tốt nhất! '최고예요!' = Tuyệt nhất! Hoàn hảo để bày tỏ sự ngưỡng mộ.", es: "'최고' = ¡lo mejor! '최고예요!' = ¡Es lo mejor! Perfecto para expresar admiración." } },
    { type: 'multiple-choice', id: 's2e7-mc3', question: '맥주', questionRomanization: 'maekju', options: [
      { en: 'Beer', ja: 'ビール', zh: '啤酒', th: 'เบียร์', vi: 'Bia', es: 'Cerveza' },
      { en: 'Wine', ja: 'ワイン', zh: '葡萄酒', th: 'ไวน์', vi: 'Rượu vang', es: 'Vino' },
      { en: 'Juice', ja: 'ジュース', zh: '果汁', th: 'น้ำผลไม้', vi: 'Nước trái cây', es: 'Jugo' },
      { en: 'Water', ja: '水', zh: '水', th: 'น้ำ', vi: 'Nước', es: 'Agua' },
    ], correctIndex: 0, explanation: { en: "'맥주' = beer. '맥주 한 잔 주세요' = One beer please!", ja: "「맥주」= ビール。「맥주 한 잔 주세요」= ビール1杯ください！", zh: "'맥주' = 啤酒。'맥주 한 잔 주세요' = 请给一杯啤酒！", th: "'맥주' = เบียร์ '맥주 한 잔 주세요' = ขอเบียร์หนึ่งแก้ว!", vi: "'맥주' = bia. '맥주 한 잔 주세요' = Cho một ly bia!", es: "'맥주' = cerveza. '맥주 한 잔 주세요' = ¡Una cerveza por favor!" } },
    { type: 'matching', id: 's2e7-match1', pairs: [
      { korean: '불꽃놀이', translation: { en: 'Fireworks', ja: '花火', zh: '烟火', th: 'ดอกไม้ไฟ', vi: 'Pháo hoa', es: 'Fuegos artificiales' } },
      { korean: '아름답다', translation: { en: 'Beautiful', ja: '美しい', zh: '美丽', th: 'สวยงาม', vi: 'Đẹp', es: 'Hermoso' } },
      { korean: '대박', translation: { en: 'Amazing!', ja: 'すごい！', zh: '太棒了！', th: 'เจ๋งมาก!', vi: 'Tuyệt vời!', es: '¡Increíble!' } },
      { korean: '최고', translation: { en: 'The best', ja: '最高', zh: '最好', th: 'ดีที่สุด', vi: 'Tốt nhất', es: 'Lo mejor' } },
      { korean: '맥주', translation: { en: 'Beer', ja: 'ビール', zh: '啤酒', th: 'เบียร์', vi: 'Bia', es: 'Cerveza' } },
      { korean: '자리', translation: { en: 'Seat/spot', ja: '席', zh: '座位', th: 'ที่นั่ง', vi: 'Chỗ ngồi', es: 'Asiento' } },
    ], explanation: { en: 'Entertainment vocabulary mastered! You can enjoy Korean festivals and events.', ja: 'エンターテインメント語彙マスター！韓国のフェスティバルやイベントを楽しもう。', zh: '娱乐词汇掌握！可以享受韩国的节日和活动了。', th: 'คำศัพท์ความบันเทิงครบ! สนุกกับเทศกาลและกิจกรรมเกาหลีได้แล้ว', vi: 'Từ vựng giải trí hoàn thành! Bạn có thể tận hưởng lễ hội và sự kiện Hàn Quốc.', es: '¡Vocabulario de entretenimiento dominado! Ya puedes disfrutar de festivales y eventos coreanos.' } },
  ],
};

// s2e8: Goodbye Busan quiz
export const reviewS2E8: ReviewQuiz = {
  id: 'review-s2e8',
  triggerAfterEpisode: 's2e8',
  title: { en: 'Review Quiz: Goodbye Busan', ja: '復習クイズ：さよなら釜山', zh: '复习测验：再见釜山', th: 'แบบทดสอบทบทวน: ลาก่อนปูซาน', vi: 'Bài ôn tập: Tạm biệt Busan', es: 'Quiz de repaso: Adiós Busan' },
  description: { en: 'Final quiz for Season 2! Test everything you learned in Busan!', ja: 'シーズン2最終クイズ！釜山で学んだ全てをテスト！', zh: '第二季最终测验！测试你在釜山学到的一切！', th: 'แบบทดสอบสุดท้ายซีซั่น 2! ทดสอบทุกอย่างที่เรียนรู้ในปูซาน!', vi: 'Bài kiểm tra cuối mùa 2! Kiểm tra tất cả những gì bạn học ở Busan!', es: '¡Quiz final de Temporada 2! ¡Pon a prueba todo lo que aprendiste en Busan!' },
  passingScore: 60,
  rewards: { xp: 150, badge: 'season2_quiz_complete', badgeName: { en: 'Season 2 Scholar', ja: 'シーズン2学者', zh: '第二季学者', th: 'นักเรียนซีซั่น 2', vi: 'Học giả mùa 2', es: 'Erudito Temporada 2' } },
  questions: [
    { type: 'fill-in-blank', id: 's2e8-fb1', sentence: { en: '"_____ 사 왔어요!" (I brought a gift!)', ja: '「_____ 사 왔어요!」（プレゼントを持ってきた！）', zh: '"_____ 사 왔어요!"（我带了礼物！）', th: '"_____ 사 왔어요!" (ซื้อของขวัญมาให้!)', vi: '"_____ 사 왔어요!" (Tôi mua quà mang đến!)', es: '"_____ 사 왔어요!" (¡Traje un regalo!)' }, correctAnswer: '선물', options: ['선물', '음식', '옷', '사진'], explanation: { en: "'선물' = gift/present. '선물 사 왔어요' = I bought and brought a gift!", ja: "「선물」= プレゼント。「선물 사 왔어요」= プレゼントを買って持ってきた！", zh: "'선물' = 礼物。'선물 사 왔어요' = 我买了礼物带来了！", th: "'선물' = ของขวัญ '선물 사 왔어요' = ซื้อของขวัญมาให้!", vi: "'선물' = quà tặng. '선물 사 왔어요' = Tôi mua quà mang đến!", es: "'선물' = regalo. '선물 사 왔어요' = ¡Compré y traje un regalo!" } },
    { type: 'fill-in-blank', id: 's2e8-fb2', sentence: { en: '"_____ 마세요!" (Don\'t forget!)', ja: '「_____ 마세요!」（忘れないで！）', zh: '"_____ 마세요!"（别忘了！）', th: '"_____ 마세요!" (อย่าลืมนะ!)', vi: '"_____ 마세요!" (Đừng quên nhé!)', es: '"_____ 마세요!" (¡No olvides!)' }, correctAnswer: '잊지', options: ['잊지', '가지', '오지', '먹지'], explanation: { en: "'잊지 마세요' = Don't forget! 잊다(to forget) + -지 마세요(please don't).", ja: "「잊지 마세요」= 忘れないで！ 잊다(忘れる) + -지 마세요(〜しないで)。", zh: "'잊지 마세요' = 别忘了！잊다(忘记) + -지 마세요(请不要)。", th: "'잊지 마세요' = อย่าลืมนะ! 잊다(ลืม) + -지 마세요(กรุณาอย่า)", vi: "'잊지 마세요' = Đừng quên! 잊다(quên) + -지 마세요(xin đừng).", es: "'잊지 마세요' = ¡No olvides! 잊다(olvidar) + -지 마세요(por favor no)." } },
    { type: 'fill-in-blank', id: 's2e8-fb3', sentence: { en: '"_____이요" (I\'d like to check out)', ja: '「_____이요」（チェックアウトです）', zh: '"_____이요"（退房）', th: '"_____이요" (เช็คเอาท์ค่ะ/ครับ)', vi: '"_____이요" (Trả phòng ạ)', es: '"_____이요" (Check-out por favor)' }, correctAnswer: '체크아웃', options: ['체크아웃', '체크인', '예약', '취소'], explanation: { en: "'체크아웃' = checkout. Simple Konglish from 'check out'!", ja: "「체크아웃」= チェックアウト。英語の'check out'から！", zh: "'체크아웃' = 退房。韩式英语，来自'check out'！", th: "'체크아웃' = เช็คเอาท์ คำภาษาอังกฤษที่ใช้ในเกาหลี!", vi: "'체크아웃' = trả phòng. Konglish từ 'check out'!", es: "'체크아웃' = check-out. ¡Konglish de 'check out'!" } },
    { type: 'multiple-choice', id: 's2e8-mc1', question: '즐거웠어요', questionRomanization: 'jeulgeowosseoyo', options: [
      { en: 'It was fun/enjoyable', ja: '楽しかった', zh: '很开心', th: 'สนุกมาก', vi: 'Vui lắm', es: 'Fue divertido' },
      { en: 'It was boring', ja: 'つまらなかった', zh: '很无聊', th: 'น่าเบื่อ', vi: 'Chán', es: 'Fue aburrido' },
      { en: 'It was scary', ja: '怖かった', zh: '很可怕', th: 'น่ากลัว', vi: 'Sợ', es: 'Fue aterrador' },
      { en: 'It was difficult', ja: '大変だった', zh: '很难', th: 'ยากมาก', vi: 'Khó', es: 'Fue difícil' },
    ], correctIndex: 0, explanation: { en: "'즐거웠어요' = It was fun! Past tense of 즐겁다(enjoyable).", ja: "「즐거웠어요」= 楽しかった！즐겁다(楽しい)の過去形。", zh: "'즐거웠어요' = 很开心！즐겁다(快乐)的过去式。", th: "'즐거웠어요' = สนุกมาก! อดีตกาลของ 즐겁다(สนุก)", vi: "'즐거웠어요' = Vui lắm! Quá khứ của 즐겁다(vui).", es: "'즐거웠어요' = ¡Fue divertido! Pasado de 즐겁다(divertido)." } },
    { type: 'multiple-choice', id: 's2e8-mc2', question: '또 만나요', questionRomanization: 'tto mannayo', options: [
      { en: 'See you again', ja: 'また会おう', zh: '再见面', th: 'เจอกันอีกนะ', vi: 'Gặp lại nhé', es: 'Nos vemos de nuevo' },
      { en: 'Nice to meet you', ja: '初めまして', zh: '很高兴认识你', th: 'ยินดีที่ได้รู้จัก', vi: 'Rất vui được gặp', es: 'Mucho gusto' },
      { en: 'Goodbye forever', ja: '永遠にさよなら', zh: '永远再见', th: 'ลาก่อนตลอดไป', vi: 'Tạm biệt mãi mãi', es: 'Adiós para siempre' },
      { en: "I don't know you", ja: '知りません', zh: '不认识你', th: 'ไม่รู้จัก', vi: 'Không biết bạn', es: 'No te conozco' },
    ], correctIndex: 0, explanation: { en: "'또 만나요' = See you again! 또(again) + 만나다(to meet) + 요(polite).", ja: "「또 만나요」= また会おう！또(また) + 만나다(会う) + 요(丁寧)。", zh: "'또 만나요' = 再见面！또(又) + 만나다(见面) + 요(礼貌)。", th: "'또 만나요' = เจอกันอีกนะ! 또(อีก) + 만나다(พบ) + 요(สุภาพ)", vi: "'또 만나요' = Gặp lại nhé! 또(lại) + 만나다(gặp) + 요(lịch sự).", es: "'또 만나요' = ¡Nos vemos! 또(otra vez) + 만나다(encontrar) + 요(cortés)." } },
    { type: 'multiple-choice', id: 's2e8-mc3', question: '고맙다', questionRomanization: 'gomapda', options: [
      { en: 'Thankful/grateful', ja: 'ありがたい', zh: '感谢', th: 'ขอบคุณ', vi: 'Cảm ơn', es: 'Agradecido' },
      { en: 'Sorry', ja: 'ごめん', zh: '对不起', th: 'ขอโทษ', vi: 'Xin lỗi', es: 'Lo siento' },
      { en: 'Happy', ja: '嬉しい', zh: '高兴', th: 'ดีใจ', vi: 'Vui', es: 'Feliz' },
      { en: 'Sad', ja: '悲しい', zh: '伤心', th: 'เศร้า', vi: 'Buồn', es: 'Triste' },
    ], correctIndex: 0, explanation: { en: "'고맙다' = thankful (casual form). '고마워요' = thank you (polite casual).", ja: "「고맙다」= ありがたい（カジュアル）。「고마워요」= ありがとう（丁寧カジュアル）。", zh: "'고맙다' = 感谢（随意形式）。'고마워요' = 谢谢（礼貌随意）。", th: "'고맙다' = ขอบคุณ (ไม่เป็นทางการ) '고마워요' = ขอบคุณ (สุภาพไม่เป็นทางการ)", vi: "'고맙다' = cảm ơn (thân mật). '고마워요' = cảm ơn (lịch sự thân mật).", es: "'고맙다' = agradecido (casual). '고마워요' = gracias (cortés casual)." } },
    { type: 'matching', id: 's2e8-match1', pairs: [
      { korean: '선물', translation: { en: 'Gift', ja: 'プレゼント', zh: '礼物', th: 'ของขวัญ', vi: 'Quà tặng', es: 'Regalo' } },
      { korean: '또 만나요', translation: { en: 'See you again', ja: 'また会おう', zh: '再见面', th: 'เจอกันอีก', vi: 'Gặp lại', es: 'Nos vemos' } },
      { korean: '잊지 마세요', translation: { en: "Don't forget", ja: '忘れないで', zh: '别忘了', th: 'อย่าลืม', vi: 'Đừng quên', es: 'No olvides' } },
      { korean: '즐겁다', translation: { en: 'Enjoyable/fun', ja: '楽しい', zh: '快乐', th: 'สนุก', vi: 'Vui', es: 'Divertido' } },
      { korean: '꼭', translation: { en: 'Definitely/must', ja: '必ず', zh: '一定', th: 'แน่นอน', vi: 'Chắc chắn', es: 'Definitivamente' } },
      { korean: '보고 싶다', translation: { en: 'To miss (someone)', ja: '会いたい', zh: '想念', th: 'คิดถึง', vi: 'Nhớ', es: 'Extrañar' } },
    ], explanation: { en: 'Season 2 farewell vocabulary complete! You can express feelings and say proper goodbyes in Korean.', ja: 'シーズン2のお別れ語彙完了！韓国語で気持ちを伝えて正しくお別れできるよ。', zh: '第二季告别词汇掌握！你可以用韩语表达感情和告别了。', th: 'คำศัพท์บอกลาซีซั่น 2 ครบ! แสดงความรู้สึกและบอกลาเป็นภาษาเกาหลีได้แล้ว', vi: 'Từ vựng chia tay mùa 2 hoàn thành! Bạn có thể bày tỏ cảm xúc và nói lời tạm biệt bằng tiếng Hàn.', es: '¡Vocabulario de despedida de Temporada 2 completo! Ya puedes expresar sentimientos y despedirte correctamente en coreano.' } },
  ],
};
