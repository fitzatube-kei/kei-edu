import { KoreanSign, SignReadingQuiz, SignChoice } from '@/types/travel';

// ============================================
// KOREAN SIGNS DATABASE
// ============================================

export const koreanSigns: KoreanSign[] = [
  // Direction signs
  {
    id: 'exit',
    korean: '출구',
    romanization: 'chulgu',
    type: 'exit',
    translation: {
      en: 'Exit',
      ja: '出口',
      zh: '出口',
      th: 'ทางออก',
      vi: 'Lối ra',
      es: 'Salida',
    },
    hint: {
      en: '출 (chul) = go out, 구 (gu) = opening/mouth',
      ja: '출 = 出る、구 = 口',
      zh: '출 = 出, 구 = 口',
      th: '출 = ออก, 구 = ช่อง',
      vi: '출 = ra, 구 = cửa',
      es: '출 = salir, 구 = abertura',
    },
  },
  {
    id: 'entrance',
    korean: '입구',
    romanization: 'ipgu',
    type: 'direction',
    translation: {
      en: 'Entrance',
      ja: '入口',
      zh: '入口',
      th: 'ทางเข้า',
      vi: 'Lối vào',
      es: 'Entrada',
    },
    hint: {
      en: '입 (ip) = enter, 구 (gu) = opening/mouth',
      ja: '입 = 入る、구 = 口',
      zh: '입 = 入, 구 = 口',
      th: '입 = เข้า, 구 = ช่อง',
      vi: '입 = vào, 구 = cửa',
      es: '입 = entrar, 구 = abertura',
    },
  },
  {
    id: 'restroom',
    korean: '화장실',
    romanization: 'hwajangsil',
    type: 'restroom',
    translation: {
      en: 'Restroom',
      ja: 'トイレ',
      zh: '洗手间',
      th: 'ห้องน้ำ',
      vi: 'Nhà vệ sinh',
      es: 'Baño',
    },
    hint: {
      en: '화장 (hwajang) = makeup, 실 (sil) = room',
      ja: '화장 = 化粧、실 = 室',
      zh: '화장 = 化妆, 실 = 室',
      th: '화장 = แต่งหน้า, 실 = ห้อง',
      vi: '화장 = trang điểm, 실 = phòng',
      es: '화장 = maquillaje, 실 = habitación',
    },
  },

  // Store signs
  {
    id: 'cafe',
    korean: '카페',
    romanization: 'kape',
    type: 'store',
    translation: {
      en: 'Cafe',
      ja: 'カフェ',
      zh: '咖啡厅',
      th: 'คาเฟ่',
      vi: 'Quán cà phê',
      es: 'Cafetería',
    },
  },
  {
    id: 'pharmacy',
    korean: '약국',
    romanization: 'yakguk',
    type: 'store',
    translation: {
      en: 'Pharmacy',
      ja: '薬局',
      zh: '药店',
      th: 'ร้านขายยา',
      vi: 'Nhà thuốc',
      es: 'Farmacia',
    },
    hint: {
      en: '약 (yak) = medicine, 국 (guk) = shop/office',
      ja: '약 = 薬、국 = 局',
      zh: '약 = 药, 국 = 店',
      th: '약 = ยา, 국 = ร้าน',
      vi: '약 = thuốc, 국 = cửa hàng',
      es: '약 = medicina, 국 = tienda',
    },
  },
  {
    id: 'convenience-store',
    korean: '편의점',
    romanization: 'pyeonuijeom',
    type: 'store',
    translation: {
      en: 'Convenience Store',
      ja: 'コンビニ',
      zh: '便利店',
      th: 'ร้านสะดวกซื้อ',
      vi: 'Cửa hàng tiện lợi',
      es: 'Tienda de conveniencia',
    },
    hint: {
      en: '편의 (pyeonui) = convenience, 점 (jeom) = store',
      ja: '편의 = 便利、점 = 店',
      zh: '편의 = 便利, 점 = 店',
      th: '편의 = สะดวก, 점 = ร้าน',
      vi: '편의 = tiện lợi, 점 = cửa hàng',
      es: '편의 = conveniencia, 점 = tienda',
    },
  },

  // Menu items
  {
    id: 'bibimbap',
    korean: '비빔밥',
    romanization: 'bibimbap',
    type: 'menu',
    translation: {
      en: 'Bibimbap (mixed rice)',
      ja: 'ビビンバ',
      zh: '拌饭',
      th: 'บิบิมบับ',
      vi: 'Cơm trộn',
      es: 'Bibimbap (arroz mezclado)',
    },
    hint: {
      en: '비빔 (bibim) = mixing, 밥 (bap) = rice',
      ja: '비빔 = 混ぜる、밥 = ご飯',
      zh: '비빔 = 拌, 밥 = 饭',
      th: '비빔 = ผสม, 밥 = ข้าว',
      vi: '비빔 = trộn, 밥 = cơm',
      es: '비빔 = mezclar, 밥 = arroz',
    },
  },
  {
    id: 'americano',
    korean: '아메리카노',
    romanization: 'amerikano',
    type: 'menu',
    translation: {
      en: 'Americano',
      ja: 'アメリカーノ',
      zh: '美式咖啡',
      th: 'อเมริกาโน',
      vi: 'Americano',
      es: 'Americano',
    },
  },
  {
    id: 'kimchi-jjigae',
    korean: '김치찌개',
    romanization: 'kimchi-jjigae',
    type: 'menu',
    translation: {
      en: 'Kimchi Stew',
      ja: 'キムチチゲ',
      zh: '泡菜汤',
      th: 'ซุปกิมจิ',
      vi: 'Canh kim chi',
      es: 'Estofado de kimchi',
    },
    hint: {
      en: '김치 (gimchi) = kimchi, 찌개 (jjigae) = stew',
      ja: '김치 = キムチ、찌개 = チゲ',
      zh: '김치 = 泡菜, 찌개 = 汤',
      th: '김치 = กิมจิ, 찌개 = ซุป',
      vi: '김치 = kim chi, 찌개 = canh',
      es: '김치 = kimchi, 찌개 = estofado',
    },
  },

  // Warning/Info signs
  {
    id: 'no-smoking',
    korean: '금연',
    romanization: 'geumyeon',
    type: 'warning',
    translation: {
      en: 'No Smoking',
      ja: '禁煙',
      zh: '禁止吸烟',
      th: 'ห้ามสูบบุหรี่',
      vi: 'Cấm hút thuốc',
      es: 'Prohibido fumar',
    },
    hint: {
      en: '금 (geum) = prohibit, 연 (yeon) = smoke',
      ja: '금 = 禁止、연 = 煙',
      zh: '금 = 禁, 연 = 烟',
      th: '금 = ห้าม, 연 = บุหรี่',
      vi: '금 = cấm, 연 = thuốc',
      es: '금 = prohibir, 연 = fumar',
    },
  },
  {
    id: 'ticket-office',
    korean: '매표소',
    romanization: 'maepyoso',
    type: 'info',
    translation: {
      en: 'Ticket Office',
      ja: '切符売り場',
      zh: '售票处',
      th: 'จุดขายตั๋ว',
      vi: 'Phòng vé',
      es: 'Taquilla',
    },
    hint: {
      en: '매표 (maepyo) = sell ticket, 소 (so) = place',
      ja: '매표 = 切符販売、소 = 所',
      zh: '매표 = 售票, 소 = 处',
      th: '매표 = ขายตั๋ว, 소 = ที่',
      vi: '매표 = bán vé, 소 = chỗ',
      es: '매표 = vender boletos, 소 = lugar',
    },
  },
  {
    id: 'information',
    korean: '안내',
    romanization: 'annae',
    type: 'info',
    translation: {
      en: 'Information',
      ja: '案内',
      zh: '咨询',
      th: 'ข้อมูล',
      vi: 'Thông tin',
      es: 'Información',
    },
  },

  // Numbers/Prices
  {
    id: 'price-3000',
    korean: '3,000원',
    romanization: 'samcheon won',
    type: 'menu',
    translation: {
      en: '3,000 won',
      ja: '3,000ウォン',
      zh: '3,000韩元',
      th: '3,000 วอน',
      vi: '3,000 won',
      es: '3,000 won',
    },
    hint: {
      en: '삼천 (samcheon) = three thousand, 원 (won) = won (currency)',
      ja: '삼천 = 三千、원 = ウォン',
      zh: '삼천 = 三千, 원 = 韩元',
      th: '삼천 = สามพัน, 원 = วอน',
      vi: '삼천 = ba ngàn, 원 = won',
      es: '삼천 = tres mil, 원 = won',
    },
  },
];

// ============================================
// SIGN READING QUIZZES
// ============================================

export const signReadingQuizzes: SignReadingQuiz[] = [
  // Exit sign
  {
    id: 'quiz-exit',
    sign: koreanSigns.find(s => s.id === 'exit')!,
    question: {
      en: 'You see this sign in the subway. What does it mean?',
      ja: '地下鉄でこの標識を見ました。どういう意味ですか？',
      zh: '你在地铁里看到这个标志。它是什么意思？',
      th: 'คุณเห็นป้ายนี้ในรถไฟใต้ดิน มันหมายความว่าอะไร?',
      vi: 'Bạn thấy biển này trong tàu điện ngầm. Nó có nghĩa gì?',
      es: 'Ves este letrero en el metro. ¿Qué significa?',
    },
    choices: [
      {
        id: 'a',
        text: { en: 'Exit', ja: '出口', zh: '出口', th: 'ทางออก', vi: 'Lối ra', es: 'Salida' },
        isCorrect: true,
        feedback: {
          en: 'Correct! 출구 (chulgu) = Exit. 출 means "go out" and 구 means "opening".',
          ja: '正解！출구 = 出口。출は「出る」、구は「口」という意味です。',
          zh: '正确！출구 = 出口。출是"出"，구是"口"的意思。',
          th: 'ถูกต้อง! 출구 = ทางออก 출 หมายถึง "ออก" และ 구 หมายถึง "ช่อง"',
          vi: 'Đúng rồi! 출구 = Lối ra. 출 nghĩa là "ra" và 구 nghĩa là "cửa".',
          es: '¡Correcto! 출구 = Salida. 출 significa "salir" y 구 significa "abertura".',
        },
      },
      {
        id: 'b',
        text: { en: 'Entrance', ja: '入口', zh: '入口', th: 'ทางเข้า', vi: 'Lối vào', es: 'Entrada' },
        isCorrect: false,
        feedback: {
          en: 'Not quite. Entrance would be 입구 (ipgu). This is 출구 (chulgu) = Exit.',
          ja: '惜しい。入口は입구です。これは출구 = 出口です。',
          zh: '不太对。入口是입구。这是출구 = 出口。',
          th: 'ไม่ใช่ ทางเข้าคือ 입구 นี่คือ 출구 = ทางออก',
          vi: 'Không đúng. Lối vào là 입구. Đây là 출구 = Lối ra.',
          es: 'No exactamente. Entrada sería 입구. Esto es 출구 = Salida.',
        },
      },
      {
        id: 'c',
        text: { en: 'Restroom', ja: 'トイレ', zh: '洗手间', th: 'ห้องน้ำ', vi: 'Nhà vệ sinh', es: 'Baño' },
        isCorrect: false,
        feedback: {
          en: 'No, restroom is 화장실 (hwajangsil). This is 출구 = Exit.',
          ja: 'いいえ、トイレは화장실です。これは출구 = 出口です。',
          zh: '不对，洗手间是화장실。这是출구 = 出口。',
          th: 'ไม่ใช่ ห้องน้ำคือ 화장실 นี่คือ 출구 = ทางออก',
          vi: 'Không, nhà vệ sinh là 화장실. Đây là 출구 = Lối ra.',
          es: 'No, baño es 화장실. Esto es 출구 = Salida.',
        },
      },
    ],
    xpReward: 30,
  },
  // Restroom sign
  {
    id: 'quiz-restroom',
    sign: koreanSigns.find(s => s.id === 'restroom')!,
    question: {
      en: 'You need to find the restroom. Which sign should you look for?',
      ja: 'トイレを探しています。どの標識を探すべきですか？',
      zh: '你需要找洗手间。你应该找哪个标志？',
      th: 'คุณต้องหาห้องน้ำ คุณควรมองหาป้ายไหน?',
      vi: 'Bạn cần tìm nhà vệ sinh. Bạn nên tìm biển nào?',
      es: 'Necesitas encontrar el baño. ¿Qué letrero deberías buscar?',
    },
    choices: [
      {
        id: 'a',
        text: { en: 'Restroom', ja: 'トイレ', zh: '洗手间', th: 'ห้องน้ำ', vi: 'Nhà vệ sinh', es: 'Baño' },
        isCorrect: true,
        feedback: {
          en: 'Correct! 화장실 (hwajangsil) = Restroom. Literally "makeup room"!',
          ja: '正解！화장실 = トイレ。文字通り「化粧室」です！',
          zh: '正确！화장실 = 洗手间。字面意思是"化妆室"！',
          th: 'ถูกต้อง! 화장실 = ห้องน้ำ แปลตรงตัวว่า "ห้องแต่งหน้า"!',
          vi: 'Đúng rồi! 화장실 = Nhà vệ sinh. Nghĩa đen là "phòng trang điểm"!',
          es: '¡Correcto! 화장실 = Baño. ¡Literalmente "sala de maquillaje"!',
        },
      },
      {
        id: 'b',
        text: { en: 'Exit', ja: '出口', zh: '出口', th: 'ทางออก', vi: 'Lối ra', es: 'Salida' },
        isCorrect: false,
        feedback: {
          en: 'No, that\'s 출구 (Exit). Look for 화장실 for restroom.',
          ja: 'いいえ、それは출구（出口）です。トイレは화장실を探してください。',
          zh: '不对，那是출구（出口）。找화장실是洗手间。',
          th: 'ไม่ นั่นคือ 출구 (ทางออก) มองหา 화장실 สำหรับห้องน้ำ',
          vi: 'Không, đó là 출구 (Lối ra). Tìm 화장실 cho nhà vệ sinh.',
          es: 'No, eso es 출구 (Salida). Busca 화장실 para baño.',
        },
      },
      {
        id: 'c',
        text: { en: 'Information', ja: '案内', zh: '咨询', th: 'ข้อมูล', vi: 'Thông tin', es: 'Información' },
        isCorrect: false,
        feedback: {
          en: 'No, that\'s 안내 (Information). Restroom is 화장실.',
          ja: 'いいえ、それは안내（案内）です。トイレは화장실です。',
          zh: '不对，那是안내（咨询）。洗手间是화장실。',
          th: 'ไม่ นั่นคือ 안내 (ข้อมูล) ห้องน้ำคือ 화장실',
          vi: 'Không, đó là 안내 (Thông tin). Nhà vệ sinh là 화장실.',
          es: 'No, eso es 안내 (Información). Baño es 화장실.',
        },
      },
    ],
    xpReward: 30,
  },
  // Pharmacy sign
  {
    id: 'quiz-pharmacy',
    sign: koreanSigns.find(s => s.id === 'pharmacy')!,
    question: {
      en: 'You need medicine. What store sign should you look for?',
      ja: '薬が必要です。どの店の標識を探すべきですか？',
      zh: '你需要药。你应该找什么店的标志？',
      th: 'คุณต้องการยา คุณควรมองหาป้ายร้านอะไร?',
      vi: 'Bạn cần thuốc. Bạn nên tìm biển hiệu cửa hàng nào?',
      es: 'Necesitas medicina. ¿Qué letrero de tienda deberías buscar?',
    },
    choices: [
      {
        id: 'a',
        text: { en: 'Convenience Store', ja: 'コンビニ', zh: '便利店', th: 'ร้านสะดวกซื้อ', vi: 'Cửa hàng tiện lợi', es: 'Tienda de conveniencia' },
        isCorrect: false,
        feedback: {
          en: 'That\'s 편의점. For medicine, look for 약국 (pharmacy).',
          ja: 'それは편의점です。薬は약국（薬局）を探してください。',
          zh: '那是편의점。要买药，找약국（药店）。',
          th: 'นั่นคือ 편의점 สำหรับยา มองหา 약국 (ร้านขายยา)',
          vi: 'Đó là 편의점. Để mua thuốc, tìm 약국 (nhà thuốc).',
          es: 'Eso es 편의점. Para medicina, busca 약국 (farmacia).',
        },
      },
      {
        id: 'b',
        text: { en: 'Pharmacy', ja: '薬局', zh: '药店', th: 'ร้านขายยา', vi: 'Nhà thuốc', es: 'Farmacia' },
        isCorrect: true,
        feedback: {
          en: 'Correct! 약국 (yakguk) = Pharmacy. 약 means medicine, 국 means shop.',
          ja: '正解！약국 = 薬局。약は薬、국は局という意味です。',
          zh: '正确！약국 = 药店。약是药，국是店。',
          th: 'ถูกต้อง! 약국 = ร้านขายยา 약 หมายถึง ยา, 국 หมายถึง ร้าน',
          vi: 'Đúng rồi! 약국 = Nhà thuốc. 약 nghĩa là thuốc, 국 nghĩa là cửa hàng.',
          es: '¡Correcto! 약국 = Farmacia. 약 significa medicina, 국 significa tienda.',
        },
      },
      {
        id: 'c',
        text: { en: 'Cafe', ja: 'カフェ', zh: '咖啡厅', th: 'คาเฟ่', vi: 'Quán cà phê', es: 'Cafetería' },
        isCorrect: false,
        feedback: {
          en: 'No, that\'s 카페 (cafe). Pharmacy is 약국.',
          ja: 'いいえ、それは카페（カフェ）です。薬局は약국です。',
          zh: '不对，那是카페（咖啡厅）。药店是약국。',
          th: 'ไม่ นั่นคือ 카페 (คาเฟ่) ร้านขายยาคือ 약국',
          vi: 'Không, đó là 카페 (quán cà phê). Nhà thuốc là 약국.',
          es: 'No, eso es 카페 (cafetería). Farmacia es 약국.',
        },
      },
    ],
    xpReward: 30,
  },
  // Menu: Bibimbap
  {
    id: 'quiz-bibimbap',
    sign: koreanSigns.find(s => s.id === 'bibimbap')!,
    question: {
      en: 'You see this on a restaurant menu. What dish is it?',
      ja: 'レストランのメニューでこれを見ました。何の料理ですか？',
      zh: '你在餐厅菜单上看到这个。这是什么菜？',
      th: 'คุณเห็นสิ่งนี้บนเมนูร้านอาหาร นี่คืออาหารอะไร?',
      vi: 'Bạn thấy điều này trên menu nhà hàng. Đây là món gì?',
      es: 'Ves esto en el menú del restaurante. ¿Qué plato es?',
    },
    choices: [
      {
        id: 'a',
        text: { en: 'Bibimbap (mixed rice)', ja: 'ビビンバ', zh: '拌饭', th: 'บิบิมบับ', vi: 'Cơm trộn', es: 'Bibimbap' },
        isCorrect: true,
        feedback: {
          en: 'Correct! 비빔밥 = Bibimbap. 비빔 means "mixing" and 밥 means "rice".',
          ja: '正解！비빔밥 = ビビンバ。비빔は「混ぜる」、밥は「ご飯」という意味です。',
          zh: '正确！비빔밥 = 拌饭。비빔是"拌"，밥是"饭"。',
          th: 'ถูกต้อง! 비빔밥 = บิบิมบับ 비빔 หมายถึง "ผสม" และ 밥 หมายถึง "ข้าว"',
          vi: 'Đúng rồi! 비빔밥 = Cơm trộn. 비빔 nghĩa là "trộn" và 밥 nghĩa là "cơm".',
          es: '¡Correcto! 비빔밥 = Bibimbap. 비빔 significa "mezclar" y 밥 significa "arroz".',
        },
      },
      {
        id: 'b',
        text: { en: 'Kimchi Stew', ja: 'キムチチゲ', zh: '泡菜汤', th: 'ซุปกิมจิ', vi: 'Canh kim chi', es: 'Estofado de kimchi' },
        isCorrect: false,
        feedback: {
          en: 'No, Kimchi Stew is 김치찌개. This is 비빔밥 (Bibimbap).',
          ja: 'いいえ、キムチチゲは김치찌개です。これは비빔밥（ビビンバ）です。',
          zh: '不对，泡菜汤是김치찌개。这是비빔밥（拌饭）。',
          th: 'ไม่ ซุปกิมจิคือ 김치찌개 นี่คือ 비빔밥 (บิบิมบับ)',
          vi: 'Không, Canh kim chi là 김치찌개. Đây là 비빔밥 (Cơm trộn).',
          es: 'No, Estofado de kimchi es 김치찌개. Esto es 비빔밥 (Bibimbap).',
        },
      },
      {
        id: 'c',
        text: { en: 'Fried Rice', ja: 'チャーハン', zh: '炒饭', th: 'ข้าวผัด', vi: 'Cơm chiên', es: 'Arroz frito' },
        isCorrect: false,
        feedback: {
          en: 'No, Fried Rice is 볶음밥. This is 비빔밥 (mixed, not fried).',
          ja: 'いいえ、チャーハンは볶음밥です。これは비빔밥（混ぜる、炒めない）です。',
          zh: '不对，炒饭是볶음밥。这是비빔밥（拌，不是炒）。',
          th: 'ไม่ ข้าวผัดคือ 볶음밥 นี่คือ 비빔밥 (ผสม ไม่ใช่ผัด)',
          vi: 'Không, Cơm chiên là 볶음밥. Đây là 비빔밥 (trộn, không chiên).',
          es: 'No, Arroz frito es 볶음밥. Esto es 비빔밥 (mezclado, no frito).',
        },
      },
    ],
    xpReward: 30,
  },
  // No Smoking
  {
    id: 'quiz-no-smoking',
    sign: koreanSigns.find(s => s.id === 'no-smoking')!,
    question: {
      en: 'You see this warning sign. What does it mean?',
      ja: 'この警告標識を見ました。どういう意味ですか？',
      zh: '你看到这个警告标志。它是什么意思？',
      th: 'คุณเห็นป้ายเตือนนี้ มันหมายความว่าอะไร?',
      vi: 'Bạn thấy biển cảnh báo này. Nó có nghĩa gì?',
      es: 'Ves este letrero de advertencia. ¿Qué significa?',
    },
    choices: [
      {
        id: 'a',
        text: { en: 'No Entry', ja: '立入禁止', zh: '禁止入内', th: 'ห้ามเข้า', vi: 'Cấm vào', es: 'Prohibido el paso' },
        isCorrect: false,
        feedback: {
          en: 'No, No Entry is 출입금지. This is 금연 (No Smoking).',
          ja: 'いいえ、立入禁止は출입금지です。これは금연（禁煙）です。',
          zh: '不对，禁止入内是출입금지。这是금연（禁止吸烟）。',
          th: 'ไม่ ห้ามเข้าคือ 출입금지 นี่คือ 금연 (ห้ามสูบบุหรี่)',
          vi: 'Không, Cấm vào là 출입금지. Đây là 금연 (Cấm hút thuốc).',
          es: 'No, Prohibido el paso es 출입금지. Esto es 금연 (Prohibido fumar).',
        },
      },
      {
        id: 'b',
        text: { en: 'No Photos', ja: '撮影禁止', zh: '禁止拍照', th: 'ห้ามถ่ายรูป', vi: 'Cấm chụp hình', es: 'Prohibido tomar fotos' },
        isCorrect: false,
        feedback: {
          en: 'No, No Photos is 촬영금지. This is 금연 (No Smoking).',
          ja: 'いいえ、撮影禁止は촬영금지です。これは금연（禁煙）です。',
          zh: '不对，禁止拍照是촬영금지。这是금연（禁止吸烟）。',
          th: 'ไม่ ห้ามถ่ายรูปคือ 촬영금지 นี่คือ 금연 (ห้ามสูบบุหรี่)',
          vi: 'Không, Cấm chụp hình là 촬영금지. Đây là 금연 (Cấm hút thuốc).',
          es: 'No, Prohibido tomar fotos es 촬영금지. Esto es 금연 (Prohibido fumar).',
        },
      },
      {
        id: 'c',
        text: { en: 'No Smoking', ja: '禁煙', zh: '禁止吸烟', th: 'ห้ามสูบบุหรี่', vi: 'Cấm hút thuốc', es: 'Prohibido fumar' },
        isCorrect: true,
        feedback: {
          en: 'Correct! 금연 (geumyeon) = No Smoking. 금 means "prohibit", 연 means "smoke".',
          ja: '正解！금연 = 禁煙。금は「禁止」、연は「煙」という意味です。',
          zh: '正确！금연 = 禁止吸烟。금是"禁"，연是"烟"。',
          th: 'ถูกต้อง! 금연 = ห้ามสูบบุหรี่ 금 หมายถึง "ห้าม", 연 หมายถึง "บุหรี่"',
          vi: 'Đúng rồi! 금연 = Cấm hút thuốc. 금 nghĩa là "cấm", 연 nghĩa là "thuốc".',
          es: '¡Correcto! 금연 = Prohibido fumar. 금 significa "prohibir", 연 significa "fumar".',
        },
      },
    ],
    xpReward: 30,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getSignById = (id: string): KoreanSign | undefined => {
  return koreanSigns.find(s => s.id === id);
};

export const getSignsByType = (type: string): KoreanSign[] => {
  return koreanSigns.filter(s => s.type === type);
};

export const getRandomSignQuiz = (excludeIds: string[] = []): SignReadingQuiz | undefined => {
  const available = signReadingQuizzes.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
};

export const getSignQuizzes = (count: number = 3, excludeIds: string[] = []): SignReadingQuiz[] => {
  const available = signReadingQuizzes.filter(q => !excludeIds.includes(q.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// ============================================
// CATEGORY-BASED SIGN QUIZZES
// ============================================

export type SignCategory = 'transport' | 'activity' | 'attraction' | 'restaurant';

// Transport-related signs (after transport phase)
export const transportSigns: KoreanSign[] = [
  {
    id: 'bus-stop',
    korean: '버스 정류장',
    romanization: 'beoseu jeongryujang',
    type: 'transport',
    translation: { en: 'Bus Stop', ja: 'バス停', zh: '公交站', th: 'ป้ายรถบัส', vi: 'Trạm xe buýt', es: 'Parada de autobús' },
    hint: { en: '버스 = bus, 정류장 = stop', ja: '버스 = バス、정류장 = 停留所', zh: '버스 = 公交, 정류장 = 站', th: '버스 = รถบัส, 정류장 = ป้ายหยุด', vi: '버스 = xe buýt, 정류장 = trạm', es: '버스 = autobús, 정류장 = parada' },
  },
  {
    id: 'subway',
    korean: '지하철',
    romanization: 'jihacheol',
    type: 'transport',
    translation: { en: 'Subway', ja: '地下鉄', zh: '地铁', th: 'รถไฟใต้ดิน', vi: 'Tàu điện ngầm', es: 'Metro' },
    hint: { en: '지하 = underground, 철 = iron/railway', ja: '지하 = 地下、철 = 鉄道', zh: '지하 = 地下, 철 = 铁', th: '지하 = ใต้ดิน, 철 = รถไฟ', vi: '지하 = dưới đất, 철 = sắt', es: '지하 = subterráneo, 철 = ferrocarril' },
  },
  {
    id: 'transfer',
    korean: '환승',
    romanization: 'hwanseung',
    type: 'transport',
    translation: { en: 'Transfer', ja: '乗り換え', zh: '换乘', th: 'เปลี่ยนสาย', vi: 'Chuyển tuyến', es: 'Transbordo' },
    hint: { en: '환 = change, 승 = ride', ja: '환 = 換える、승 = 乗る', zh: '환 = 换, 승 = 乘', th: '환 = เปลี่ยน, 승 = ขึ้น', vi: '환 = đổi, 승 = lên xe', es: '환 = cambiar, 승 = subir' },
  },
  {
    id: 'platform',
    korean: '승강장',
    romanization: 'seungganggang',
    type: 'transport',
    translation: { en: 'Platform', ja: 'ホーム', zh: '站台', th: 'ชานชาลา', vi: 'Sân ga', es: 'Andén' },
    hint: { en: '승강 = getting on/off, 장 = place', ja: '승강 = 乗降、장 = 場', zh: '승강 = 上下, 장 = 场', th: '승강 = ขึ้นลง, 장 = ที่', vi: '승강 = lên xuống, 장 = chỗ', es: '승강 = subir/bajar, 장 = lugar' },
  },
];

// Activity-related signs (after activity phase)
export const activitySigns: KoreanSign[] = [
  {
    id: 'order-here',
    korean: '주문',
    romanization: 'jumun',
    type: 'activity',
    translation: { en: 'Order', ja: '注文', zh: '点单', th: 'สั่งอาหาร', vi: 'Đặt hàng', es: 'Pedido' },
    hint: { en: '주 = main, 문 = ask/writing', ja: '주 = 主、문 = 文', zh: '주 = 主, 문 = 文', th: '주 = หลัก, 문 = ถาม', vi: '주 = chủ, 문 = đơn', es: '주 = principal, 문 = pedir' },
  },
  {
    id: 'wifi',
    korean: '와이파이',
    romanization: 'waipai',
    type: 'activity',
    translation: { en: 'WiFi', ja: 'Wi-Fi', zh: 'WiFi', th: 'ไวไฟ', vi: 'WiFi', es: 'WiFi' },
  },
  {
    id: 'takeout',
    korean: '포장',
    romanization: 'pojang',
    type: 'activity',
    translation: { en: 'Takeout', ja: 'テイクアウト', zh: '打包', th: 'ซื้อกลับบ้าน', vi: 'Mang đi', es: 'Para llevar' },
    hint: { en: '포 = wrap, 장 = packaging', ja: '포 = 包む、장 = 装', zh: '포 = 包, 장 = 装', th: '포 = ห่อ, 장 = บรรจุ', vi: '포 = gói, 장 = đóng', es: '포 = envolver, 장 = empaquetar' },
  },
  {
    id: 'hot-cold',
    korean: '핫/아이스',
    romanization: 'hat/aiseu',
    type: 'activity',
    translation: { en: 'Hot/Iced', ja: 'ホット/アイス', zh: '热/冰', th: 'ร้อน/เย็น', vi: 'Nóng/Đá', es: 'Caliente/Frío' },
  },
];

// Attraction-related signs (after attraction phase)
export const attractionSigns: KoreanSign[] = [
  {
    id: 'admission',
    korean: '입장료',
    romanization: 'ipjangnyo',
    type: 'attraction',
    translation: { en: 'Admission Fee', ja: '入場料', zh: '入场费', th: 'ค่าเข้าชม', vi: 'Phí vào cửa', es: 'Entrada' },
    hint: { en: '입장 = entrance, 료 = fee', ja: '입장 = 入場、료 = 料', zh: '입장 = 入场, 료 = 费', th: '입장 = เข้า, 료 = ค่า', vi: '입장 = vào, 료 = phí', es: '입장 = entrada, 료 = tarifa' },
  },
  {
    id: 'photo-zone',
    korean: '포토존',
    romanization: 'potojon',
    type: 'attraction',
    translation: { en: 'Photo Zone', ja: 'フォトゾーン', zh: '拍照区', th: 'จุดถ่ายรูป', vi: 'Khu chụp ảnh', es: 'Zona de fotos' },
  },
  {
    id: 'opening-hours',
    korean: '운영시간',
    romanization: 'unyeongsigan',
    type: 'attraction',
    translation: { en: 'Opening Hours', ja: '営業時間', zh: '营业时间', th: 'เวลาเปิดทำการ', vi: 'Giờ mở cửa', es: 'Horario' },
    hint: { en: '운영 = operation, 시간 = time', ja: '운영 = 運営、시간 = 時間', zh: '운영 = 运营, 시간 = 时间', th: '운영 = ดำเนินการ, 시간 = เวลา', vi: '운영 = vận hành, 시간 = thời gian', es: '운영 = operación, 시간 = hora' },
  },
  {
    id: 'gift-shop',
    korean: '기념품점',
    romanization: 'ginyeompumjeom',
    type: 'attraction',
    translation: { en: 'Gift Shop', ja: 'お土産屋', zh: '纪念品店', th: 'ร้านของที่ระลึก', vi: 'Cửa hàng quà lưu niệm', es: 'Tienda de regalos' },
    hint: { en: '기념품 = souvenir, 점 = shop', ja: '기념품 = 記念品、점 = 店', zh: '기념품 = 纪念品, 점 = 店', th: '기념품 = ของที่ระลึก, 점 = ร้าน', vi: '기념품 = quà lưu niệm, 점 = cửa hàng', es: '기념품 = recuerdo, 점 = tienda' },
  },
];

// Restaurant-related signs (after dinner phase)
export const restaurantSigns: KoreanSign[] = [
  {
    id: 'menu',
    korean: '메뉴',
    romanization: 'menyu',
    type: 'restaurant',
    translation: { en: 'Menu', ja: 'メニュー', zh: '菜单', th: 'เมนู', vi: 'Thực đơn', es: 'Menú' },
  },
  {
    id: 'payment',
    korean: '계산',
    romanization: 'gyesan',
    type: 'restaurant',
    translation: { en: 'Payment/Check', ja: 'お会計', zh: '结账', th: 'ชำระเงิน', vi: 'Thanh toán', es: 'Cuenta' },
    hint: { en: '계 = calculate, 산 = counting', ja: '계 = 計算、산 = 算', zh: '계 = 计, 산 = 算', th: '계 = คำนวณ, 산 = นับ', vi: '계 = tính, 산 = toán', es: '계 = calcular, 산 = contar' },
  },
  {
    id: 'receipt',
    korean: '영수증',
    romanization: 'yeongsujeung',
    type: 'restaurant',
    translation: { en: 'Receipt', ja: 'レシート', zh: '收据', th: 'ใบเสร็จ', vi: 'Biên lai', es: 'Recibo' },
    hint: { en: '영수 = receive, 증 = certificate', ja: '영수 = 領収、증 = 証', zh: '영수 = 领收, 증 = 证', th: '영수 = รับ, 증 = ใบ', vi: '영수 = nhận, 증 = chứng', es: '영수 = recibir, 증 = certificado' },
  },
  {
    id: 'self-service',
    korean: '셀프',
    romanization: 'selpeu',
    type: 'restaurant',
    translation: { en: 'Self-Service', ja: 'セルフ', zh: '自助', th: 'บริการตัวเอง', vi: 'Tự phục vụ', es: 'Autoservicio' },
  },
];

// Get quizzes by category
export const getSignQuizzesByCategory = (category: SignCategory, count: number = 2): SignReadingQuiz[] => {
  let signs: KoreanSign[];
  switch (category) {
    case 'transport':
      signs = transportSigns;
      break;
    case 'activity':
      signs = activitySigns;
      break;
    case 'attraction':
      signs = attractionSigns;
      break;
    case 'restaurant':
      signs = restaurantSigns;
      break;
    default:
      signs = [];
  }

  // Create quizzes from signs
  const quizzes: SignReadingQuiz[] = signs.map(sign => ({
    id: `quiz-${sign.id}`,
    sign,
    question: {
      en: `What does "${sign.korean}" mean?`,
      ja: `「${sign.korean}」はどういう意味ですか？`,
      zh: `"${sign.korean}"是什么意思？`,
      th: `"${sign.korean}" หมายความว่าอะไร?`,
      vi: `"${sign.korean}" có nghĩa gì?`,
      es: `¿Qué significa "${sign.korean}"?`,
    },
    choices: generateChoicesForSign(sign, category),
    xpReward: 25,
  }));

  const shuffled = [...quizzes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Generate wrong choices for a sign quiz
function generateChoicesForSign(correctSign: KoreanSign, category: SignCategory): SignChoice[] {
  let allSigns: KoreanSign[];
  switch (category) {
    case 'transport':
      allSigns = transportSigns;
      break;
    case 'activity':
      allSigns = activitySigns;
      break;
    case 'attraction':
      allSigns = attractionSigns;
      break;
    case 'restaurant':
      allSigns = restaurantSigns;
      break;
    default:
      allSigns = [];
  }

  const wrongSigns = allSigns.filter(s => s.id !== correctSign.id);
  const shuffledWrong = wrongSigns.sort(() => Math.random() - 0.5).slice(0, 2);

  const choices: SignChoice[] = [
    {
      id: 'correct',
      text: correctSign.translation,
      isCorrect: true,
      feedback: {
        en: `Correct! ${correctSign.korean} (${correctSign.romanization}) = ${correctSign.translation.en}`,
        ja: `正解！${correctSign.korean}（${correctSign.romanization}）= ${correctSign.translation.ja}`,
        zh: `正确！${correctSign.korean}（${correctSign.romanization}）= ${correctSign.translation.zh}`,
        th: `ถูกต้อง! ${correctSign.korean} (${correctSign.romanization}) = ${correctSign.translation.th}`,
        vi: `Đúng rồi! ${correctSign.korean} (${correctSign.romanization}) = ${correctSign.translation.vi}`,
        es: `¡Correcto! ${correctSign.korean} (${correctSign.romanization}) = ${correctSign.translation.es}`,
      },
    },
    ...shuffledWrong.map((sign, index) => ({
      id: `wrong${index + 1}`,
      text: sign.translation,
      isCorrect: false,
      feedback: {
        en: `Not quite. That would be ${sign.korean}. The correct answer is ${correctSign.translation.en}.`,
        ja: `惜しい。それは${sign.korean}です。正解は${correctSign.translation.ja}です。`,
        zh: `不对。那是${sign.korean}。正确答案是${correctSign.translation.zh}。`,
        th: `ไม่ใช่ นั่นคือ ${sign.korean} คำตอบที่ถูกต้องคือ ${correctSign.translation.th}`,
        vi: `Không đúng. Đó là ${sign.korean}. Đáp án đúng là ${correctSign.translation.vi}.`,
        es: `No exactamente. Eso sería ${sign.korean}. La respuesta correcta es ${correctSign.translation.es}.`,
      },
    })),
  ];

  return choices.sort(() => Math.random() - 0.5);
}
