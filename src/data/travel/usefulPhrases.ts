// ============================================
// USEFUL PHRASES BY SITUATION CATEGORY
// ============================================

export type PhraseCategory =
  | 'transport-subway'
  | 'transport-bus'
  | 'transport-taxi'
  | 'transport-rentcar'
  | 'transport-tourbus'
  | 'transport-electric'
  | 'activity-cafe'
  | 'activity-shopping'
  | 'activity-park'
  | 'attraction-sightseeing'
  | 'attraction-ticket'
  | 'restaurant-dinner'
  | 'hotel-checkin';

export interface UsefulPhrase {
  korean: string;
  romanization: string;
  meaning: {
    en: string;
    ja: string;
    zh: string;
    th: string;
    vi: string;
    es: string;
  };
}

export interface PhraseCategoryData {
  id: PhraseCategory;
  titleIcon: string;
  title: {
    en: string;
    ja: string;
    zh: string;
    th: string;
    vi: string;
    es: string;
  };
  phrases: UsefulPhrase[];
}

export const usefulPhraseData: PhraseCategoryData[] = [
  // ---- TRANSPORT ----
  {
    id: 'transport-subway',
    titleIcon: '🚇',
    title: {
      en: 'Phrases for riding the subway',
      ja: '地下鉄に乗る時によく使うフレーズ',
      zh: '乘坐地铁时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อนั่งรถไฟใต้ดิน',
      vi: 'Câu thường dùng khi đi tàu điện ngầm',
      es: 'Frases para viajar en metro',
    },
    phrases: [
      {
        korean: '이 역에서 내려야 해요.',
        romanization: 'i yeog-eseo naeryeoya haeyo.',
        meaning: {
          en: 'I need to get off at this station.',
          ja: 'この駅で降りなければなりません。',
          zh: '我需要在这站下车。',
          th: 'ฉันต้องลงที่สถานีนี้',
          vi: 'Tôi cần xuống ở ga này.',
          es: 'Necesito bajar en esta estación.',
        },
      },
      {
        korean: '몇 호선을 타야 해요?',
        romanization: 'myeot hoson-eul taya haeyo?',
        meaning: {
          en: 'Which line should I take?',
          ja: '何号線に乗ればいいですか？',
          zh: '我应该坐几号线？',
          th: 'ฉันต้องขึ้นสายไหน?',
          vi: 'Tôi nên đi tuyến nào?',
          es: '¿Qué línea debo tomar?',
        },
      },
      {
        korean: '환승하려면 어디서 갈아타요?',
        romanization: 'hwanseungharyeomyeon eodiseo garatayo?',
        meaning: {
          en: 'Where do I transfer?',
          ja: '乗り換えはどこですか？',
          zh: '在哪里换乘？',
          th: 'ต่อรถที่ไหน?',
          vi: 'Chuyển tàu ở đâu?',
          es: '¿Dónde hago trasbordo?',
        },
      },
      {
        korean: '다음 역은 어디예요?',
        romanization: 'da-eum yeog-eun eodiyeyo?',
        meaning: {
          en: 'What is the next station?',
          ja: '次の駅はどこですか？',
          zh: '下一站是哪里？',
          th: 'สถานีถัดไปคือที่ไหน?',
          vi: 'Ga tiếp theo là gì?',
          es: '¿Cuál es la siguiente estación?',
        },
      },
      {
        korean: '출구가 어디예요?',
        romanization: 'chulgu-ga eodiyeyo?',
        meaning: {
          en: 'Where is the exit?',
          ja: '出口はどこですか？',
          zh: '出口在哪里？',
          th: 'ทางออกอยู่ที่ไหน?',
          vi: 'Lối ra ở đâu?',
          es: '¿Dónde está la salida?',
        },
      },
    ],
  },
  {
    id: 'transport-bus',
    titleIcon: '🚌',
    title: {
      en: 'Phrases for riding the bus',
      ja: 'バスに乗る時によく使うフレーズ',
      zh: '乘坐公交车时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อนั่งรถบัส',
      vi: 'Câu thường dùng khi đi xe buýt',
      es: 'Frases para viajar en autobús',
    },
    phrases: [
      {
        korean: '이 버스가 어디로 가요?',
        romanization: 'i beoseu-ga eodiro gayo?',
        meaning: {
          en: 'Where does this bus go?',
          ja: 'このバスはどこに行きますか？',
          zh: '这辆公交车去哪里？',
          th: 'รถบัสคันนี้ไปไหน?',
          vi: 'Xe buýt này đi đâu?',
          es: '¿A dónde va este autobús?',
        },
      },
      {
        korean: '여기서 내려 주세요.',
        romanization: 'yeogiseo naeryeo juseyo.',
        meaning: {
          en: 'Please let me off here.',
          ja: 'ここで降ろしてください。',
          zh: '请在这里让我下车。',
          th: 'กรุณาจอดให้ฉันที่นี่',
          vi: 'Xin cho tôi xuống ở đây.',
          es: 'Por favor, déjeme aquí.',
        },
      },
      {
        korean: '정류장이 어디예요?',
        romanization: 'jeongnyujang-i eodiyeyo?',
        meaning: {
          en: 'Where is the bus stop?',
          ja: 'バス停はどこですか？',
          zh: '公交站在哪里？',
          th: 'ป้ายรถบัสอยู่ที่ไหน?',
          vi: 'Trạm xe buýt ở đâu?',
          es: '¿Dónde está la parada de autobús?',
        },
      },
      {
        korean: '카드를 찍어 주세요.',
        romanization: 'kadeu-reul jjigeo juseyo.',
        meaning: {
          en: 'Please tap your card.',
          ja: 'カードをタッチしてください。',
          zh: '请刷卡。',
          th: 'กรุณาแตะบัตร',
          vi: 'Xin quẹt thẻ.',
          es: 'Por favor, pase la tarjeta.',
        },
      },
      {
        korean: '얼마나 걸려요?',
        romanization: 'eolmana geollyeoyo?',
        meaning: {
          en: 'How long does it take?',
          ja: 'どのくらいかかりますか？',
          zh: '需要多长时间？',
          th: 'ใช้เวลานานแค่ไหน?',
          vi: 'Mất bao lâu?',
          es: '¿Cuánto tiempo tarda?',
        },
      },
    ],
  },
  {
    id: 'transport-taxi',
    titleIcon: '🚕',
    title: {
      en: 'Phrases for taking a taxi',
      ja: 'タクシーに乗る時によく使うフレーズ',
      zh: '乘坐出租车时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อนั่งแท็กซี่',
      vi: 'Câu thường dùng khi đi taxi',
      es: 'Frases para tomar un taxi',
    },
    phrases: [
      {
        korean: '여기로 가 주세요.',
        romanization: 'yeogiro ga juseyo.',
        meaning: {
          en: 'Please take me here.',
          ja: 'ここに行ってください。',
          zh: '请带我去这里。',
          th: 'กรุณาพาฉันไปที่นี่',
          vi: 'Xin đưa tôi đến đây.',
          es: 'Lléveme aquí, por favor.',
        },
      },
      {
        korean: '얼마예요?',
        romanization: 'eolmayeyo?',
        meaning: {
          en: 'How much is it?',
          ja: 'いくらですか？',
          zh: '多少钱？',
          th: 'เท่าไหร่?',
          vi: 'Bao nhiêu tiền?',
          es: '¿Cuánto cuesta?',
        },
      },
      {
        korean: '카드로 결제할 수 있어요?',
        romanization: 'kadeuro gyeoljehhal su isseoyo?',
        meaning: {
          en: 'Can I pay by card?',
          ja: 'カードで支払えますか？',
          zh: '可以刷卡吗？',
          th: 'จ่ายด้วยบัตรได้ไหม?',
          vi: 'Tôi có thể trả bằng thẻ không?',
          es: '¿Puedo pagar con tarjeta?',
        },
      },
      {
        korean: '여기서 세워 주세요.',
        romanization: 'yeogiseo sewo juseyo.',
        meaning: {
          en: 'Please stop here.',
          ja: 'ここで止めてください。',
          zh: '请在这里停车。',
          th: 'กรุณาจอดที่นี่',
          vi: 'Xin dừng ở đây.',
          es: 'Pare aquí, por favor.',
        },
      },
      {
        korean: '빨리 가 주세요.',
        romanization: 'ppalli ga juseyo.',
        meaning: {
          en: 'Please hurry.',
          ja: '急いでください。',
          zh: '请快一点。',
          th: 'กรุณารีบหน่อย',
          vi: 'Xin đi nhanh.',
          es: 'Rápido, por favor.',
        },
      },
    ],
  },
  {
    id: 'transport-rentcar',
    titleIcon: '🚗',
    title: {
      en: 'Phrases for renting a car',
      ja: 'レンタカーを借りる時によく使うフレーズ',
      zh: '租车时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อเช่ารถ',
      vi: 'Câu thường dùng khi thuê xe',
      es: 'Frases para alquilar un coche',
    },
    phrases: [
      {
        korean: '차를 빌리고 싶어요.',
        romanization: 'chareul billigo sipeoyo.',
        meaning: {
          en: 'I want to rent a car.',
          ja: '車を借りたいです。',
          zh: '我想租车。',
          th: 'ฉันอยากเช่ารถ',
          vi: 'Tôi muốn thuê xe.',
          es: 'Quiero alquilar un coche.',
        },
      },
      {
        korean: '네비게이션이 있어요?',
        romanization: 'nebigeisyeon-i isseoyo?',
        meaning: {
          en: 'Is there a GPS navigation?',
          ja: 'ナビゲーションはありますか？',
          zh: '有导航吗？',
          th: 'มี GPS ไหม?',
          vi: 'Có GPS không?',
          es: '¿Tiene navegación GPS?',
        },
      },
      {
        korean: '주유소가 어디예요?',
        romanization: 'juyuso-ga eodiyeyo?',
        meaning: {
          en: 'Where is the gas station?',
          ja: 'ガソリンスタンドはどこですか？',
          zh: '加油站在哪里？',
          th: 'ปั๊มน้ำมันอยู่ที่ไหน?',
          vi: 'Trạm xăng ở đâu?',
          es: '¿Dónde está la gasolinera?',
        },
      },
      {
        korean: '주차장이 어디예요?',
        romanization: 'juchajang-i eodiyeyo?',
        meaning: {
          en: 'Where is the parking lot?',
          ja: '駐車場はどこですか？',
          zh: '停车场在哪里？',
          th: 'ที่จอดรถอยู่ที่ไหน?',
          vi: 'Bãi đỗ xe ở đâu?',
          es: '¿Dónde está el estacionamiento?',
        },
      },
      {
        korean: '반납은 어디서 해요?',
        romanization: 'bannab-eun eodiseo haeyo?',
        meaning: {
          en: 'Where do I return the car?',
          ja: '返却はどこでしますか？',
          zh: '在哪里还车？',
          th: 'คืนรถที่ไหน?',
          vi: 'Trả xe ở đâu?',
          es: '¿Dónde devuelvo el coche?',
        },
      },
    ],
  },
  {
    id: 'transport-tourbus',
    titleIcon: '🚎',
    title: {
      en: 'Phrases for the tour bus',
      ja: 'ツアーバスでよく使うフレーズ',
      zh: '观光巴士常用的句子',
      th: 'ประโยคที่ใช้บ่อยบนรถบัสทัวร์',
      vi: 'Câu thường dùng trên xe buýt du lịch',
      es: 'Frases para el autobús turístico',
    },
    phrases: [
      {
        korean: '투어 버스 정류장이 어디예요?',
        romanization: 'tueo beoseu jeongnyujang-i eodiyeyo?',
        meaning: {
          en: 'Where is the tour bus stop?',
          ja: 'ツアーバスの乗り場はどこですか？',
          zh: '观光巴士站在哪里？',
          th: 'ป้ายรถบัสทัวร์อยู่ที่ไหน?',
          vi: 'Trạm xe buýt du lịch ở đâu?',
          es: '¿Dónde está la parada del autobús turístico?',
        },
      },
      {
        korean: '하루 이용권 주세요.',
        romanization: 'haru iyonggwon juseyo.',
        meaning: {
          en: 'One day pass, please.',
          ja: '1日券をください。',
          zh: '请给我一日券。',
          th: 'ขอตั๋ววันเดียว',
          vi: 'Cho tôi vé một ngày.',
          es: 'Un pase de un día, por favor.',
        },
      },
      {
        korean: '다음 정류장은 어디예요?',
        romanization: 'da-eum jeongnyujang-eun eodiyeyo?',
        meaning: {
          en: 'What is the next stop?',
          ja: '次の停留所はどこですか？',
          zh: '下一站是哪里？',
          th: 'ป้ายถัดไปคือที่ไหน?',
          vi: 'Trạm tiếp theo là gì?',
          es: '¿Cuál es la siguiente parada?',
        },
      },
      {
        korean: '이 버스는 몇 시에 출발해요?',
        romanization: 'i beoseu-neun myeot si-e chulbalhaeyo?',
        meaning: {
          en: 'What time does this bus depart?',
          ja: 'このバスは何時に出発しますか？',
          zh: '这辆巴士几点出发？',
          th: 'รถบัสคันนี้ออกกี่โมง?',
          vi: 'Xe buýt này khởi hành lúc mấy giờ?',
          es: '¿A qué hora sale este autobús?',
        },
      },
      {
        korean: '사진 찍어도 돼요?',
        romanization: 'sajin jjigeodo dwaeyo?',
        meaning: {
          en: 'Can I take photos?',
          ja: '写真を撮ってもいいですか？',
          zh: '可以拍照吗？',
          th: 'ถ่ายรูปได้ไหม?',
          vi: 'Tôi có thể chụp ảnh không?',
          es: '¿Puedo tomar fotos?',
        },
      },
    ],
  },
  {
    id: 'transport-electric',
    titleIcon: '🛵',
    title: {
      en: 'Phrases for electric scooter',
      ja: '電動スクーターでよく使うフレーズ',
      zh: '电动滑板车常用的句子',
      th: 'ประโยคที่ใช้บ่อยกับสกู๊ตเตอร์ไฟฟ้า',
      vi: 'Câu thường dùng với xe scooter điện',
      es: 'Frases para scooter eléctrico',
    },
    phrases: [
      {
        korean: '어떻게 타요?',
        romanization: 'eotteoke tayo?',
        meaning: {
          en: 'How do I ride it?',
          ja: 'どうやって乗りますか？',
          zh: '怎么骑？',
          th: 'ขี่ยังไง?',
          vi: 'Làm sao để đi?',
          es: '¿Cómo se monta?',
        },
      },
      {
        korean: '헬멧 있어요?',
        romanization: 'helmet isseoyo?',
        meaning: {
          en: 'Do you have a helmet?',
          ja: 'ヘルメットはありますか？',
          zh: '有头盔吗？',
          th: 'มีหมวกกันน็อคไหม?',
          vi: 'Có mũ bảo hiểm không?',
          es: '¿Tienen casco?',
        },
      },
      {
        korean: '배터리가 얼마나 남았어요?',
        romanization: 'baeteori-ga eolmana namasseoyo?',
        meaning: {
          en: 'How much battery is left?',
          ja: 'バッテリーはどれくらい残っていますか？',
          zh: '电池还剩多少？',
          th: 'แบตเตอรี่เหลือเท่าไหร่?',
          vi: 'Pin còn bao nhiêu?',
          es: '¿Cuánta batería queda?',
        },
      },
      {
        korean: '여기 주차해도 돼요?',
        romanization: 'yeogi juchahae-do dwaeyo?',
        meaning: {
          en: 'Can I park here?',
          ja: 'ここに駐車してもいいですか？',
          zh: '可以停在这里吗？',
          th: 'จอดที่นี่ได้ไหม?',
          vi: 'Tôi có thể đỗ ở đây không?',
          es: '¿Puedo estacionar aquí?',
        },
      },
      {
        korean: '반납 장소가 어디예요?',
        romanization: 'bannab jangso-ga eodiyeyo?',
        meaning: {
          en: 'Where is the return location?',
          ja: '返却場所はどこですか？',
          zh: '归还地点在哪里？',
          th: 'จุดคืนอยู่ที่ไหน?',
          vi: 'Địa điểm trả xe ở đâu?',
          es: '¿Dónde es el punto de devolución?',
        },
      },
    ],
  },

  // ---- ACTIVITY ----
  {
    id: 'activity-cafe',
    titleIcon: '☕',
    title: {
      en: 'Phrases for the cafe',
      ja: 'カフェでよく使うフレーズ',
      zh: '在咖啡厅常用的句子',
      th: 'ประโยคที่ใช้บ่อยในคาเฟ่',
      vi: 'Câu thường dùng ở quán cà phê',
      es: 'Frases para la cafetería',
    },
    phrases: [
      {
        korean: '아메리카노 한 잔 주세요.',
        romanization: 'amerikano han jan juseyo.',
        meaning: {
          en: 'One Americano, please.',
          ja: 'アメリカーノを一杯ください。',
          zh: '请给我一杯美式咖啡。',
          th: 'ขออเมริกาโน่หนึ่งแก้ว',
          vi: 'Cho tôi một ly Americano.',
          es: 'Un Americano, por favor.',
        },
      },
      {
        korean: '아이스로 주세요.',
        romanization: 'aiseuro juseyo.',
        meaning: {
          en: 'Iced, please.',
          ja: 'アイスでお願いします。',
          zh: '请给冰的。',
          th: 'ขอเย็น',
          vi: 'Cho đá.',
          es: 'Con hielo, por favor.',
        },
      },
      {
        korean: '와이파이 비밀번호가 뭐예요?',
        romanization: 'waipai bimilbeonho-ga mwoyeyo?',
        meaning: {
          en: 'What is the Wi-Fi password?',
          ja: 'Wi-Fiのパスワードは何ですか？',
          zh: 'Wi-Fi密码是什么？',
          th: 'รหัส Wi-Fi คืออะไร?',
          vi: 'Mật khẩu Wi-Fi là gì?',
          es: '¿Cuál es la contraseña del Wi-Fi?',
        },
      },
      {
        korean: '여기서 먹을게요.',
        romanization: 'yeogiseo meogeulgeyo.',
        meaning: {
          en: 'I will eat here. (For here)',
          ja: 'ここで食べます。',
          zh: '在这里吃。',
          th: 'ทานที่นี่',
          vi: 'Tôi ăn ở đây.',
          es: 'Para tomar aquí.',
        },
      },
      {
        korean: '포장해 주세요.',
        romanization: 'pojanghae juseyo.',
        meaning: {
          en: 'To go, please.',
          ja: 'テイクアウトでお願いします。',
          zh: '请打包。',
          th: 'ห่อกลับบ้าน',
          vi: 'Cho mang đi.',
          es: 'Para llevar, por favor.',
        },
      },
    ],
  },
  {
    id: 'activity-shopping',
    titleIcon: '🛍️',
    title: {
      en: 'Phrases for shopping',
      ja: 'ショッピングでよく使うフレーズ',
      zh: '购物时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อช้อปปิ้ง',
      vi: 'Câu thường dùng khi mua sắm',
      es: 'Frases para ir de compras',
    },
    phrases: [
      {
        korean: '이거 얼마예요?',
        romanization: 'igeo eolmayeyo?',
        meaning: {
          en: 'How much is this?',
          ja: 'これはいくらですか？',
          zh: '这个多少钱？',
          th: 'อันนี้เท่าไหร่?',
          vi: 'Cái này bao nhiêu?',
          es: '¿Cuánto cuesta esto?',
        },
      },
      {
        korean: '다른 색깔 있어요?',
        romanization: 'dareun saekgal isseoyo?',
        meaning: {
          en: 'Do you have other colors?',
          ja: '他の色はありますか？',
          zh: '有其他颜色吗？',
          th: 'มีสีอื่นไหม?',
          vi: 'Có màu khác không?',
          es: '¿Tienen otros colores?',
        },
      },
      {
        korean: '깎아 주세요.',
        romanization: 'kkakka juseyo.',
        meaning: {
          en: 'Please give me a discount.',
          ja: '値引きしてください。',
          zh: '请打折。',
          th: 'ลดราคาได้ไหม?',
          vi: 'Giảm giá được không?',
          es: 'Descuento, por favor.',
        },
      },
      {
        korean: '입어 봐도 돼요?',
        romanization: 'ibeo bwado dwaeyo?',
        meaning: {
          en: 'Can I try it on?',
          ja: '試着してもいいですか？',
          zh: '可以试穿吗？',
          th: 'ลองได้ไหม?',
          vi: 'Tôi có thể thử không?',
          es: '¿Puedo probármelo?',
        },
      },
      {
        korean: '세금 환급 돼요?',
        romanization: 'segeum hwangeub dwaeyo?',
        meaning: {
          en: 'Is tax refund available?',
          ja: '免税はできますか？',
          zh: '可以退税吗？',
          th: 'ขอคืนภาษีได้ไหม?',
          vi: 'Có hoàn thuế không?',
          es: '¿Hay devolución de impuestos?',
        },
      },
    ],
  },
  {
    id: 'activity-park',
    titleIcon: '🌳',
    title: {
      en: 'Phrases for the park',
      ja: '公園でよく使うフレーズ',
      zh: '在公园常用的句子',
      th: 'ประโยคที่ใช้บ่อยในสวนสาธารณะ',
      vi: 'Câu thường dùng ở công viên',
      es: 'Frases para el parque',
    },
    phrases: [
      {
        korean: '화장실이 어디예요?',
        romanization: 'hwajangsil-i eodiyeyo?',
        meaning: {
          en: 'Where is the restroom?',
          ja: 'トイレはどこですか？',
          zh: '洗手间在哪里？',
          th: 'ห้องน้ำอยู่ที่ไหน?',
          vi: 'Nhà vệ sinh ở đâu?',
          es: '¿Dónde está el baño?',
        },
      },
      {
        korean: '사진 찍어 주세요.',
        romanization: 'sajin jjigeo juseyo.',
        meaning: {
          en: 'Please take a photo for me.',
          ja: '写真を撮ってください。',
          zh: '请帮我拍照。',
          th: 'ช่วยถ่ายรูปให้หน่อย',
          vi: 'Chụp ảnh giùm tôi.',
          es: 'Tome una foto, por favor.',
        },
      },
      {
        korean: '여기가 어디예요?',
        romanization: 'yeogi-ga eodiyeyo?',
        meaning: {
          en: 'Where am I?',
          ja: 'ここはどこですか？',
          zh: '这里是哪里？',
          th: 'ที่นี่คือที่ไหน?',
          vi: 'Đây là đâu?',
          es: '¿Dónde estoy?',
        },
      },
      {
        korean: '산책하기 좋은 곳이에요.',
        romanization: 'sanchaekagi joeun gosieyo.',
        meaning: {
          en: 'It is a nice place for a walk.',
          ja: '散歩に良い場所です。',
          zh: '这是个适合散步的好地方。',
          th: 'เป็นที่ดีสำหรับเดินเล่น',
          vi: 'Đây là nơi tốt để đi dạo.',
          es: 'Es un buen lugar para pasear.',
        },
      },
      {
        korean: '경치가 너무 아름다워요!',
        romanization: 'gyeongchi-ga neomu areumdawoyo!',
        meaning: {
          en: 'The view is so beautiful!',
          ja: '景色がとても美しいです！',
          zh: '风景太美了！',
          th: 'วิวสวยมาก!',
          vi: 'Phong cảnh đẹp quá!',
          es: '¡La vista es tan hermosa!',
        },
      },
    ],
  },

  // ---- ATTRACTION ----
  {
    id: 'attraction-sightseeing',
    titleIcon: '🏛️',
    title: {
      en: 'Phrases for sightseeing',
      ja: '観光でよく使うフレーズ',
      zh: '观光时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อเที่ยวชม',
      vi: 'Câu thường dùng khi tham quan',
      es: 'Frases para turismo',
    },
    phrases: [
      {
        korean: '입장료가 얼마예요?',
        romanization: 'ipjangyo-ga eolmayeyo?',
        meaning: {
          en: 'How much is the admission fee?',
          ja: '入場料はいくらですか？',
          zh: '门票多少钱？',
          th: 'ค่าเข้าชมเท่าไหร่?',
          vi: 'Phí vào cửa bao nhiêu?',
          es: '¿Cuánto cuesta la entrada?',
        },
      },
      {
        korean: '몇 시에 문을 닫아요?',
        romanization: 'myeot si-e muneul dadayo?',
        meaning: {
          en: 'What time do you close?',
          ja: '何時に閉まりますか？',
          zh: '几点关门？',
          th: 'ปิดกี่โมง?',
          vi: 'Mấy giờ đóng cửa?',
          es: '¿A qué hora cierran?',
        },
      },
      {
        korean: '가이드 투어가 있어요?',
        romanization: 'gaideu tueo-ga isseoyo?',
        meaning: {
          en: 'Is there a guided tour?',
          ja: 'ガイドツアーはありますか？',
          zh: '有导游吗？',
          th: 'มีทัวร์พร้อมไกด์ไหม?',
          vi: 'Có tour hướng dẫn không?',
          es: '¿Hay visita guiada?',
        },
      },
      {
        korean: '이것은 뭐예요?',
        romanization: 'igeoseun mwoyeyo?',
        meaning: {
          en: 'What is this?',
          ja: 'これは何ですか？',
          zh: '这是什么？',
          th: 'นี่คืออะไร?',
          vi: 'Cái này là gì?',
          es: '¿Qué es esto?',
        },
      },
      {
        korean: '기념품 가게가 어디예요?',
        romanization: 'ginyeompum gage-ga eodiyeyo?',
        meaning: {
          en: 'Where is the souvenir shop?',
          ja: 'お土産屋さんはどこですか？',
          zh: '纪念品店在哪里？',
          th: 'ร้านของที่ระลึกอยู่ที่ไหน?',
          vi: 'Cửa hàng quà lưu niệm ở đâu?',
          es: '¿Dónde está la tienda de recuerdos?',
        },
      },
    ],
  },
  {
    id: 'attraction-ticket',
    titleIcon: '🎫',
    title: {
      en: 'Phrases for buying tickets',
      ja: 'チケットを買う時によく使うフレーズ',
      zh: '买票时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อซื้อตั๋ว',
      vi: 'Câu thường dùng khi mua vé',
      es: 'Frases para comprar boletos',
    },
    phrases: [
      {
        korean: '어른 한 장 주세요.',
        romanization: 'eoreun han jang juseyo.',
        meaning: {
          en: 'One adult ticket, please.',
          ja: '大人1枚ください。',
          zh: '请给我一张成人票。',
          th: 'ตั๋วผู้ใหญ่หนึ่งใบ',
          vi: 'Cho tôi một vé người lớn.',
          es: 'Un boleto de adulto, por favor.',
        },
      },
      {
        korean: '학생 할인 있어요?',
        romanization: 'haksaeng halin isseoyo?',
        meaning: {
          en: 'Is there a student discount?',
          ja: '学生割引はありますか？',
          zh: '有学生折扣吗？',
          th: 'มีส่วนลดนักเรียนไหม?',
          vi: 'Có giảm giá cho sinh viên không?',
          es: '¿Hay descuento para estudiantes?',
        },
      },
      {
        korean: '예매할 수 있어요?',
        romanization: 'yemaehal su isseoyo?',
        meaning: {
          en: 'Can I book in advance?',
          ja: '事前予約できますか？',
          zh: '可以预订吗？',
          th: 'จองล่วงหน้าได้ไหม?',
          vi: 'Có thể đặt trước không?',
          es: '¿Puedo reservar con anticipación?',
        },
      },
      {
        korean: '무료 입장이에요?',
        romanization: 'muryo ipjang-ieyo?',
        meaning: {
          en: 'Is admission free?',
          ja: '入場無料ですか？',
          zh: '免费入场吗？',
          th: 'เข้าชมฟรีไหม?',
          vi: 'Vào cửa miễn phí không?',
          es: '¿La entrada es gratis?',
        },
      },
      {
        korean: '단체 할인 돼요?',
        romanization: 'danche halin dwaeyo?',
        meaning: {
          en: 'Is there a group discount?',
          ja: '団体割引はありますか？',
          zh: '有团体优惠吗？',
          th: 'มีส่วนลดหมู่คณะไหม?',
          vi: 'Có giảm giá cho đoàn không?',
          es: '¿Hay descuento para grupos?',
        },
      },
    ],
  },

  // ---- RESTAURANT ----
  {
    id: 'restaurant-dinner',
    titleIcon: '🍽️',
    title: {
      en: 'Phrases for dining',
      ja: '食事の時によく使うフレーズ',
      zh: '用餐时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อทานอาหาร',
      vi: 'Câu thường dùng khi ăn uống',
      es: 'Frases para cenar',
    },
    phrases: [
      {
        korean: '메뉴판 주세요.',
        romanization: 'menyu-pan juseyo.',
        meaning: {
          en: 'Menu, please.',
          ja: 'メニューをください。',
          zh: '请给我菜单。',
          th: 'ขอเมนูหน่อย',
          vi: 'Cho tôi xem thực đơn.',
          es: 'El menú, por favor.',
        },
      },
      {
        korean: '추천 메뉴가 뭐예요?',
        romanization: 'chucheon menyu-ga mwoyeyo?',
        meaning: {
          en: 'What do you recommend?',
          ja: 'おすすめは何ですか？',
          zh: '推荐什么菜？',
          th: 'แนะนำเมนูอะไร?',
          vi: 'Bạn giới thiệu món gì?',
          es: '¿Qué me recomienda?',
        },
      },
      {
        korean: '이거 하나 주세요.',
        romanization: 'igeo hana juseyo.',
        meaning: {
          en: 'One of this, please.',
          ja: 'これを一つください。',
          zh: '请给我一个这个。',
          th: 'ขออันนี้หนึ่งที',
          vi: 'Cho tôi một cái này.',
          es: 'Uno de esto, por favor.',
        },
      },
      {
        korean: '맵지 않게 해 주세요.',
        romanization: 'maepji anke hae juseyo.',
        meaning: {
          en: 'Not too spicy, please.',
          ja: '辛くないようにしてください。',
          zh: '请做不辣的。',
          th: 'ทำไม่เผ็ดได้ไหม',
          vi: 'Xin đừng cay quá.',
          es: 'No muy picante, por favor.',
        },
      },
      {
        korean: '계산서 주세요.',
        romanization: 'gyesanseo juseyo.',
        meaning: {
          en: 'Check, please.',
          ja: 'お会計をお願いします。',
          zh: '请给我账单。',
          th: 'ขอบิลหน่อย',
          vi: 'Cho tôi hóa đơn.',
          es: 'La cuenta, por favor.',
        },
      },
    ],
  },

  // ---- HOTEL ----
  {
    id: 'hotel-checkin',
    titleIcon: '🏨',
    title: {
      en: 'Phrases for hotel check-in',
      ja: 'ホテルチェックインでよく使うフレーズ',
      zh: '酒店入住时常用的句子',
      th: 'ประโยคที่ใช้บ่อยเมื่อเช็คอินโรงแรม',
      vi: 'Câu thường dùng khi nhận phòng khách sạn',
      es: 'Frases para el check-in del hotel',
    },
    phrases: [
      {
        korean: '체크인하고 싶어요.',
        romanization: 'chekeu-inhago sipeoyo.',
        meaning: {
          en: 'I would like to check in.',
          ja: 'チェックインしたいです。',
          zh: '我想办理入住。',
          th: 'ฉันต้องการเช็คอิน',
          vi: 'Tôi muốn nhận phòng.',
          es: 'Quisiera hacer el check-in.',
        },
      },
      {
        korean: '예약했어요.',
        romanization: 'yeyakhaesseoyo.',
        meaning: {
          en: 'I have a reservation.',
          ja: '予約しています。',
          zh: '我有预订。',
          th: 'ฉันจองไว้แล้ว',
          vi: 'Tôi đã đặt phòng.',
          es: 'Tengo una reservación.',
        },
      },
      {
        korean: '방 열쇠를 주세요.',
        romanization: 'bang yeolsoe-reul juseyo.',
        meaning: {
          en: 'Room key, please.',
          ja: '部屋の鍵をください。',
          zh: '请给我房间钥匙。',
          th: 'ขอกุญแจห้องหน่อย',
          vi: 'Cho tôi chìa khóa phòng.',
          es: 'La llave de la habitación, por favor.',
        },
      },
      {
        korean: '아침 식사 포함이에요?',
        romanization: 'achim siksa poham-ieyo?',
        meaning: {
          en: 'Is breakfast included?',
          ja: '朝食は含まれていますか？',
          zh: '包含早餐吗？',
          th: 'รวมอาหารเช้าไหม?',
          vi: 'Có bao gồm bữa sáng không?',
          es: '¿El desayuno está incluido?',
        },
      },
      {
        korean: '체크아웃은 몇 시예요?',
        romanization: 'chekeu-aus-eun myeot siyeyo?',
        meaning: {
          en: 'What time is checkout?',
          ja: 'チェックアウトは何時ですか？',
          zh: '几点退房？',
          th: 'เช็คเอาท์กี่โมง?',
          vi: 'Mấy giờ trả phòng?',
          es: '¿A qué hora es el check-out?',
        },
      },
    ],
  },
];

// Helper to get phrases by category
export function getPhrasesByCategory(category: PhraseCategory): PhraseCategoryData | undefined {
  return usefulPhraseData.find(d => d.id === category);
}

// Helper to map transport ID to phrase category
export function getTransportPhraseCategory(transportId: string): PhraseCategory {
  const map: Record<string, PhraseCategory> = {
    subway: 'transport-subway',
    bus: 'transport-bus',
    taxi: 'transport-taxi',
    rentcar: 'transport-rentcar',
    tourbus: 'transport-tourbus',
    electric: 'transport-electric',
  };
  return map[transportId] || 'transport-bus';
}

// Helper to map activity type to phrase category
export function getActivityPhraseCategory(activityType: string): PhraseCategory {
  const map: Record<string, PhraseCategory> = {
    cafe: 'activity-cafe',
    shopping: 'activity-shopping',
    park: 'activity-park',
    restaurant: 'restaurant-dinner',
    hotel: 'hotel-checkin',
  };
  return map[activityType] || 'activity-cafe';
}
