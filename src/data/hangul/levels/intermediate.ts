import { HangulLevel, MultilingualQuizQuestion, MultilingualMatchingPair } from '@/types';

// ============================================
// Intermediate Levels (21-40) - VOCABULARY ONLY
// Focus: Common Korean words by category (no sentences)
// ============================================

// Level 21: Numbers - Native Korean
const level21: HangulLevel = {
  level: 21,
  title: 'Numbers I - Native Korean',
  description: 'Learn native Korean counting numbers',
  characters: ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'],
  multilingualQuizQuestions: [
    { id: 'l21q1', templateKey: 'wordMeaning', word: { korean: '하나', romanization: 'hana', translations: { en: 'one', ja: '一つ', zh: '一', th: 'หนึ่ง', vi: 'một', es: 'uno' } }, options: ['one', 'two', 'three', 'four'], correctAnswer: 0 },
    { id: 'l21q2', templateKey: 'wordMeaning', word: { korean: '둘', romanization: 'dul', translations: { en: 'two', ja: '二つ', zh: '二', th: 'สอง', vi: 'hai', es: 'dos' } }, options: ['one', 'two', 'three', 'four'], correctAnswer: 1 },
    { id: 'l21q3', templateKey: 'wordMeaning', word: { korean: '셋', romanization: 'set', translations: { en: 'three', ja: '三つ', zh: '三', th: 'สาม', vi: 'ba', es: 'tres' } }, options: ['two', 'three', 'four', 'five'], correctAnswer: 1 },
    { id: 'l21q4', templateKey: 'wordMeaning', word: { korean: '넷', romanization: 'net', translations: { en: 'four', ja: '四つ', zh: '四', th: 'สี่', vi: 'bốn', es: 'cuatro' } }, options: ['three', 'four', 'five', 'six'], correctAnswer: 1 },
    { id: 'l21q5', templateKey: 'wordMeaning', word: { korean: '다섯', romanization: 'daseot', translations: { en: 'five', ja: '五つ', zh: '五', th: 'ห้า', vi: 'năm', es: 'cinco' } }, options: ['four', 'five', 'six', 'seven'], correctAnswer: 1 },
    { id: 'l21q6', templateKey: 'meaningToKorean', word: { korean: '여섯', romanization: 'yeoseot', translations: { en: 'six', ja: '六つ', zh: '六', th: 'หก', vi: 'sáu', es: 'seis' } }, options: ['여섯', '일곱', '여덟', '아홉'], correctAnswer: 0 },
    { id: 'l21q7', templateKey: 'meaningToKorean', word: { korean: '일곱', romanization: 'ilgop', translations: { en: 'seven', ja: '七つ', zh: '七', th: 'เจ็ด', vi: 'bảy', es: 'siete' } }, options: ['여섯', '일곱', '여덟', '아홉'], correctAnswer: 1 },
    { id: 'l21q8', templateKey: 'meaningToKorean', word: { korean: '여덟', romanization: 'yeodeol', translations: { en: 'eight', ja: '八つ', zh: '八', th: 'แปด', vi: 'tám', es: 'ocho' } }, options: ['여섯', '일곱', '여덟', '아홉'], correctAnswer: 2 },
    { id: 'l21q9', templateKey: 'meaningToKorean', word: { korean: '아홉', romanization: 'ahop', translations: { en: 'nine', ja: '九つ', zh: '九', th: 'เก้า', vi: 'chín', es: 'nueve' } }, options: ['일곱', '여덟', '아홉', '열'], correctAnswer: 2 },
    { id: 'l21q10', templateKey: 'meaningToKorean', word: { korean: '열', romanization: 'yeol', translations: { en: 'ten', ja: '十', zh: '十', th: 'สิบ', vi: 'mười', es: 'diez' } }, options: ['여덟', '아홉', '열', '하나'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l21m1', left: '하나', right: { en: 'one', ja: '一つ', zh: '一', th: 'หนึ่ง', vi: 'một', es: 'uno' }, type: 'word' },
    { id: 'l21m2', left: '둘', right: { en: 'two', ja: '二つ', zh: '二', th: 'สอง', vi: 'hai', es: 'dos' }, type: 'word' },
    { id: 'l21m3', left: '셋', right: { en: 'three', ja: '三つ', zh: '三', th: 'สาม', vi: 'ba', es: 'tres' }, type: 'word' },
    { id: 'l21m4', left: '넷', right: { en: 'four', ja: '四つ', zh: '四', th: 'สี่', vi: 'bốn', es: 'cuatro' }, type: 'word' },
    { id: 'l21m5', left: '다섯', right: { en: 'five', ja: '五つ', zh: '五', th: 'ห้า', vi: 'năm', es: 'cinco' }, type: 'word' },
    { id: 'l21m6', left: '여섯', right: { en: 'six', ja: '六つ', zh: '六', th: 'หก', vi: 'sáu', es: 'seis' }, type: 'word' },
    { id: 'l21m7', left: '일곱', right: { en: 'seven', ja: '七つ', zh: '七', th: 'เจ็ด', vi: 'bảy', es: 'siete' }, type: 'word' },
    { id: 'l21m8', left: '여덟', right: { en: 'eight', ja: '八つ', zh: '八', th: 'แปด', vi: 'tám', es: 'ocho' }, type: 'word' },
    { id: 'l21m9', left: '아홉', right: { en: 'nine', ja: '九つ', zh: '九', th: 'เก้า', vi: 'chín', es: 'nueve' }, type: 'word' },
    { id: 'l21m10', left: '열', right: { en: 'ten', ja: '十', zh: '十', th: 'สิบ', vi: 'mười', es: 'diez' }, type: 'word' },
  ],
  reviewItems: ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'],
};

// Level 22: Numbers - Sino Korean
const level22: HangulLevel = {
  level: 22,
  title: 'Numbers II - Sino Korean',
  description: 'Learn Sino-Korean numbers used for dates, money, phone numbers',
  characters: ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십', '백', '천'],
  multilingualQuizQuestions: [
    { id: 'l22q1', templateKey: 'wordMeaning', word: { korean: '일', romanization: 'il', translations: { en: 'one', ja: '一', zh: '一', th: 'หนึ่ง', vi: 'một', es: 'uno' } }, options: ['one', 'two', 'three', 'ten'], correctAnswer: 0 },
    { id: 'l22q2', templateKey: 'wordMeaning', word: { korean: '이', romanization: 'i', translations: { en: 'two', ja: '二', zh: '二', th: 'สอง', vi: 'hai', es: 'dos' } }, options: ['one', 'two', 'three', 'four'], correctAnswer: 1 },
    { id: 'l22q3', templateKey: 'wordMeaning', word: { korean: '삼', romanization: 'sam', translations: { en: 'three', ja: '三', zh: '三', th: 'สาม', vi: 'ba', es: 'tres' } }, options: ['two', 'three', 'four', 'five'], correctAnswer: 1 },
    { id: 'l22q4', templateKey: 'wordMeaning', word: { korean: '십', romanization: 'sip', translations: { en: 'ten', ja: '十', zh: '十', th: 'สิบ', vi: 'mười', es: 'diez' } }, options: ['five', 'six', 'seven', 'ten'], correctAnswer: 3 },
    { id: 'l22q5', templateKey: 'wordMeaning', word: { korean: '백', romanization: 'baek', translations: { en: 'hundred', ja: '百', zh: '百', th: 'ร้อย', vi: 'trăm', es: 'cien' } }, options: ['ten', 'hundred', 'thousand', 'five'], correctAnswer: 1 },
    { id: 'l22q6', templateKey: 'meaningToKorean', word: { korean: '천', romanization: 'cheon', translations: { en: 'thousand', ja: '千', zh: '千', th: 'พัน', vi: 'nghìn', es: 'mil' } }, options: ['백', '천', '십', '일'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l22m1', left: '일', right: { en: 'one', ja: '一', zh: '一', th: 'หนึ่ง', vi: 'một', es: 'uno' }, type: 'word' },
    { id: 'l22m2', left: '이', right: { en: 'two', ja: '二', zh: '二', th: 'สอง', vi: 'hai', es: 'dos' }, type: 'word' },
    { id: 'l22m3', left: '십', right: { en: 'ten', ja: '十', zh: '十', th: 'สิบ', vi: 'mười', es: 'diez' }, type: 'word' },
    { id: 'l22m4', left: '백', right: { en: 'hundred', ja: '百', zh: '百', th: 'ร้อย', vi: 'trăm', es: 'cien' }, type: 'word' },
    { id: 'l22m5', left: '천', right: { en: 'thousand', ja: '千', zh: '千', th: 'พัน', vi: 'nghìn', es: 'mil' }, type: 'word' },
  ],
  reviewItems: ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십', '백', '천'],
};

// Level 23: Family Members I
const level23: HangulLevel = {
  level: 23,
  title: 'Family Members I',
  description: 'Learn words for immediate family members',
  characters: ['엄마', '아빠', '부모님', '형', '누나', '오빠', '언니', '동생', '남동생', '여동생'],
  multilingualQuizQuestions: [
    { id: 'l23q1', templateKey: 'wordMeaning', word: { korean: '엄마', romanization: 'eomma', translations: { en: 'mom', ja: 'お母さん', zh: '妈妈', th: 'แม่', vi: 'mẹ', es: 'mamá' } }, options: ['mom', 'dad', 'brother', 'sister'], correctAnswer: 0 },
    { id: 'l23q2', templateKey: 'wordMeaning', word: { korean: '아빠', romanization: 'appa', translations: { en: 'dad', ja: 'お父さん', zh: '爸爸', th: 'พ่อ', vi: 'bố', es: 'papá' } }, options: ['mom', 'dad', 'brother', 'sister'], correctAnswer: 1 },
    { id: 'l23q3', templateKey: 'wordMeaning', word: { korean: '형', romanization: 'hyeong', translations: { en: 'older brother (male speaker)', ja: '兄', zh: '哥哥', th: 'พี่ชาย', vi: 'anh trai', es: 'hermano mayor' } }, options: ['older sister', 'older brother', 'younger sibling', 'parents'], correctAnswer: 1 },
    { id: 'l23q4', templateKey: 'wordMeaning', word: { korean: '언니', romanization: 'eonni', translations: { en: 'older sister (female speaker)', ja: '姉', zh: '姐姐', th: 'พี่สาว', vi: 'chị gái', es: 'hermana mayor' } }, options: ['older sister', 'older brother', 'mom', 'dad'], correctAnswer: 0 },
    { id: 'l23q5', templateKey: 'meaningToKorean', word: { korean: '동생', romanization: 'dongsaeng', translations: { en: 'younger sibling', ja: '弟/妹', zh: '弟弟/妹妹', th: 'น้อง', vi: 'em', es: 'hermano menor' } }, options: ['형', '언니', '동생', '부모님'], correctAnswer: 2 },
    { id: 'l23q6', templateKey: 'meaningToKorean', word: { korean: '부모님', romanization: 'bumonim', translations: { en: 'parents', ja: '両親', zh: '父母', th: 'พ่อแม่', vi: 'bố mẹ', es: 'padres' } }, options: ['형', '동생', '부모님', '엄마'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l23m1', left: '엄마', right: { en: 'mom', ja: 'お母さん', zh: '妈妈', th: 'แม่', vi: 'mẹ', es: 'mamá' }, type: 'word' },
    { id: 'l23m2', left: '아빠', right: { en: 'dad', ja: 'お父さん', zh: '爸爸', th: 'พ่อ', vi: 'bố', es: 'papá' }, type: 'word' },
    { id: 'l23m3', left: '형', right: { en: 'older brother', ja: '兄', zh: '哥哥', th: 'พี่ชาย', vi: 'anh trai', es: 'hermano mayor' }, type: 'word' },
    { id: 'l23m4', left: '언니', right: { en: 'older sister', ja: '姉', zh: '姐姐', th: 'พี่สาว', vi: 'chị gái', es: 'hermana mayor' }, type: 'word' },
    { id: 'l23m5', left: '동생', right: { en: 'younger sibling', ja: '弟/妹', zh: '弟弟/妹妹', th: 'น้อง', vi: 'em', es: 'hermano menor' }, type: 'word' },
  ],
  reviewItems: ['엄마', '아빠', '부모님', '형', '누나', '오빠', '언니', '동생'],
};

// Level 24: Family Members II
const level24: HangulLevel = {
  level: 24,
  title: 'Family Members II',
  description: 'Learn words for extended family members',
  characters: ['할머니', '할아버지', '삼촌', '이모', '고모', '사촌', '조카', '손자', '손녀', '가족'],
  multilingualQuizQuestions: [
    { id: 'l24q1', templateKey: 'wordMeaning', word: { korean: '할머니', romanization: 'halmeoni', translations: { en: 'grandmother', ja: 'おばあさん', zh: '奶奶', th: 'ยาย', vi: 'bà', es: 'abuela' } }, options: ['grandmother', 'grandfather', 'aunt', 'uncle'], correctAnswer: 0 },
    { id: 'l24q2', templateKey: 'wordMeaning', word: { korean: '할아버지', romanization: 'harabeoji', translations: { en: 'grandfather', ja: 'おじいさん', zh: '爷爷', th: 'ปู่', vi: 'ông', es: 'abuelo' } }, options: ['grandmother', 'grandfather', 'aunt', 'uncle'], correctAnswer: 1 },
    { id: 'l24q3', templateKey: 'wordMeaning', word: { korean: '삼촌', romanization: 'samchon', translations: { en: 'uncle', ja: '叔父', zh: '叔叔', th: 'ลุง', vi: 'chú', es: 'tío' } }, options: ['aunt', 'uncle', 'cousin', 'nephew'], correctAnswer: 1 },
    { id: 'l24q4', templateKey: 'wordMeaning', word: { korean: '가족', romanization: 'gajok', translations: { en: 'family', ja: '家族', zh: '家人', th: 'ครอบครัว', vi: 'gia đình', es: 'familia' } }, options: ['friend', 'family', 'cousin', 'neighbor'], correctAnswer: 1 },
    { id: 'l24q5', templateKey: 'meaningToKorean', word: { korean: '사촌', romanization: 'sachon', translations: { en: 'cousin', ja: 'いとこ', zh: '堂兄弟', th: 'ลูกพี่ลูกน้อง', vi: 'anh em họ', es: 'primo' } }, options: ['삼촌', '사촌', '조카', '가족'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l24m1', left: '할머니', right: { en: 'grandmother', ja: 'おばあさん', zh: '奶奶', th: 'ยาย', vi: 'bà', es: 'abuela' }, type: 'word' },
    { id: 'l24m2', left: '할아버지', right: { en: 'grandfather', ja: 'おじいさん', zh: '爷爷', th: 'ปู่', vi: 'ông', es: 'abuelo' }, type: 'word' },
    { id: 'l24m3', left: '삼촌', right: { en: 'uncle', ja: '叔父', zh: '叔叔', th: 'ลุง', vi: 'chú', es: 'tío' }, type: 'word' },
    { id: 'l24m4', left: '가족', right: { en: 'family', ja: '家族', zh: '家人', th: 'ครอบครัว', vi: 'gia đình', es: 'familia' }, type: 'word' },
  ],
  reviewItems: ['할머니', '할아버지', '삼촌', '이모', '사촌', '가족'],
};

// Level 25: Body Parts I
const level25: HangulLevel = {
  level: 25,
  title: 'Body Parts I',
  description: 'Learn words for face and head',
  characters: ['머리', '얼굴', '눈', '코', '입', '귀', '이', '머리카락', '이마', '볼'],
  multilingualQuizQuestions: [
    { id: 'l25q1', templateKey: 'wordMeaning', word: { korean: '머리', romanization: 'meori', translations: { en: 'head', ja: '頭', zh: '头', th: 'หัว', vi: 'đầu', es: 'cabeza' } }, options: ['head', 'face', 'eye', 'nose'], correctAnswer: 0 },
    { id: 'l25q2', templateKey: 'wordMeaning', word: { korean: '눈', romanization: 'nun', translations: { en: 'eye', ja: '目', zh: '眼睛', th: 'ตา', vi: 'mắt', es: 'ojo' } }, options: ['nose', 'mouth', 'eye', 'ear'], correctAnswer: 2 },
    { id: 'l25q3', templateKey: 'wordMeaning', word: { korean: '코', romanization: 'ko', translations: { en: 'nose', ja: '鼻', zh: '鼻子', th: 'จมูก', vi: 'mũi', es: 'nariz' } }, options: ['eye', 'nose', 'mouth', 'ear'], correctAnswer: 1 },
    { id: 'l25q4', templateKey: 'wordMeaning', word: { korean: '입', romanization: 'ip', translations: { en: 'mouth', ja: '口', zh: '嘴', th: 'ปาก', vi: 'miệng', es: 'boca' } }, options: ['eye', 'nose', 'mouth', 'ear'], correctAnswer: 2 },
    { id: 'l25q5', templateKey: 'meaningToKorean', word: { korean: '귀', romanization: 'gwi', translations: { en: 'ear', ja: '耳', zh: '耳朵', th: 'หู', vi: 'tai', es: 'oreja' } }, options: ['눈', '코', '입', '귀'], correctAnswer: 3 },
  ],
  multilingualMatchingPairs: [
    { id: 'l25m1', left: '머리', right: { en: 'head', ja: '頭', zh: '头', th: 'หัว', vi: 'đầu', es: 'cabeza' }, type: 'word' },
    { id: 'l25m2', left: '눈', right: { en: 'eye', ja: '目', zh: '眼睛', th: 'ตา', vi: 'mắt', es: 'ojo' }, type: 'word' },
    { id: 'l25m3', left: '코', right: { en: 'nose', ja: '鼻', zh: '鼻子', th: 'จมูก', vi: 'mũi', es: 'nariz' }, type: 'word' },
    { id: 'l25m4', left: '입', right: { en: 'mouth', ja: '口', zh: '嘴', th: 'ปาก', vi: 'miệng', es: 'boca' }, type: 'word' },
    { id: 'l25m5', left: '귀', right: { en: 'ear', ja: '耳', zh: '耳朵', th: 'หู', vi: 'tai', es: 'oreja' }, type: 'word' },
  ],
  reviewItems: ['머리', '얼굴', '눈', '코', '입', '귀'],
};

// Level 26: Body Parts II
const level26: HangulLevel = {
  level: 26,
  title: 'Body Parts II',
  description: 'Learn words for body',
  characters: ['손', '발', '팔', '다리', '몸', '배', '등', '목', '어깨', '손가락'],
  multilingualQuizQuestions: [
    { id: 'l26q1', templateKey: 'wordMeaning', word: { korean: '손', romanization: 'son', translations: { en: 'hand', ja: '手', zh: '手', th: 'มือ', vi: 'tay', es: 'mano' } }, options: ['hand', 'foot', 'arm', 'leg'], correctAnswer: 0 },
    { id: 'l26q2', templateKey: 'wordMeaning', word: { korean: '발', romanization: 'bal', translations: { en: 'foot', ja: '足', zh: '脚', th: 'เท้า', vi: 'chân', es: 'pie' } }, options: ['hand', 'foot', 'arm', 'leg'], correctAnswer: 1 },
    { id: 'l26q3', templateKey: 'wordMeaning', word: { korean: '팔', romanization: 'pal', translations: { en: 'arm', ja: '腕', zh: '胳膊', th: 'แขน', vi: 'cánh tay', es: 'brazo' } }, options: ['hand', 'foot', 'arm', 'leg'], correctAnswer: 2 },
    { id: 'l26q4', templateKey: 'wordMeaning', word: { korean: '다리', romanization: 'dari', translations: { en: 'leg', ja: '足', zh: '腿', th: 'ขา', vi: 'chân', es: 'pierna' } }, options: ['hand', 'foot', 'arm', 'leg'], correctAnswer: 3 },
    { id: 'l26q5', templateKey: 'meaningToKorean', word: { korean: '몸', romanization: 'mom', translations: { en: 'body', ja: '体', zh: '身体', th: 'ร่างกาย', vi: 'cơ thể', es: 'cuerpo' } }, options: ['손', '발', '몸', '배'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l26m1', left: '손', right: { en: 'hand', ja: '手', zh: '手', th: 'มือ', vi: 'tay', es: 'mano' }, type: 'word' },
    { id: 'l26m2', left: '발', right: { en: 'foot', ja: '足', zh: '脚', th: 'เท้า', vi: 'chân', es: 'pie' }, type: 'word' },
    { id: 'l26m3', left: '팔', right: { en: 'arm', ja: '腕', zh: '胳膊', th: 'แขน', vi: 'cánh tay', es: 'brazo' }, type: 'word' },
    { id: 'l26m4', left: '다리', right: { en: 'leg', ja: '足', zh: '腿', th: 'ขา', vi: 'chân', es: 'pierna' }, type: 'word' },
    { id: 'l26m5', left: '몸', right: { en: 'body', ja: '体', zh: '身体', th: 'ร่างกาย', vi: 'cơ thể', es: 'cuerpo' }, type: 'word' },
  ],
  reviewItems: ['손', '발', '팔', '다리', '몸', '배', '목'],
};

// Level 27: Colors
const level27: HangulLevel = {
  level: 27,
  title: 'Colors',
  description: 'Learn color words',
  characters: ['빨간색', '파란색', '노란색', '초록색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색'],
  multilingualQuizQuestions: [
    { id: 'l27q1', templateKey: 'wordMeaning', word: { korean: '빨간색', romanization: 'ppalgansaek', translations: { en: 'red', ja: '赤', zh: '红色', th: 'สีแดง', vi: 'màu đỏ', es: 'rojo' } }, options: ['red', 'blue', 'yellow', 'green'], correctAnswer: 0 },
    { id: 'l27q2', templateKey: 'wordMeaning', word: { korean: '파란색', romanization: 'paransaek', translations: { en: 'blue', ja: '青', zh: '蓝色', th: 'สีฟ้า', vi: 'màu xanh', es: 'azul' } }, options: ['red', 'blue', 'yellow', 'green'], correctAnswer: 1 },
    { id: 'l27q3', templateKey: 'wordMeaning', word: { korean: '노란색', romanization: 'noransaek', translations: { en: 'yellow', ja: '黄色', zh: '黄色', th: 'สีเหลือง', vi: 'màu vàng', es: 'amarillo' } }, options: ['red', 'blue', 'yellow', 'green'], correctAnswer: 2 },
    { id: 'l27q4', templateKey: 'wordMeaning', word: { korean: '검은색', romanization: 'geomeunsaek', translations: { en: 'black', ja: '黒', zh: '黑色', th: 'สีดำ', vi: 'màu đen', es: 'negro' } }, options: ['white', 'black', 'gray', 'brown'], correctAnswer: 1 },
    { id: 'l27q5', templateKey: 'meaningToKorean', word: { korean: '흰색', romanization: 'huinsaek', translations: { en: 'white', ja: '白', zh: '白色', th: 'สีขาว', vi: 'màu trắng', es: 'blanco' } }, options: ['검은색', '흰색', '갈색', '회색'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l27m1', left: '빨간색', right: { en: 'red', ja: '赤', zh: '红色', th: 'สีแดง', vi: 'màu đỏ', es: 'rojo' }, type: 'word' },
    { id: 'l27m2', left: '파란색', right: { en: 'blue', ja: '青', zh: '蓝色', th: 'สีฟ้า', vi: 'màu xanh', es: 'azul' }, type: 'word' },
    { id: 'l27m3', left: '노란색', right: { en: 'yellow', ja: '黄色', zh: '黄色', th: 'สีเหลือง', vi: 'màu vàng', es: 'amarillo' }, type: 'word' },
    { id: 'l27m4', left: '검은색', right: { en: 'black', ja: '黒', zh: '黑色', th: 'สีดำ', vi: 'màu đen', es: 'negro' }, type: 'word' },
    { id: 'l27m5', left: '흰색', right: { en: 'white', ja: '白', zh: '白色', th: 'สีขาว', vi: 'màu trắng', es: 'blanco' }, type: 'word' },
  ],
  reviewItems: ['빨간색', '파란색', '노란색', '초록색', '검은색', '흰색'],
};

// Level 28: Colors II & Adjectives
const level28: HangulLevel = {
  level: 28,
  title: 'Colors II & Descriptions',
  description: 'More colors and basic adjectives',
  characters: ['회색', '하늘색', '금색', '은색', '밝다', '어둡다', '진하다', '연하다'],
  multilingualQuizQuestions: [
    { id: 'l28q1', templateKey: 'wordMeaning', word: { korean: '회색', romanization: 'hoesaek', translations: { en: 'gray', ja: '灰色', zh: '灰色', th: 'สีเทา', vi: 'màu xám', es: 'gris' } }, options: ['gray', 'silver', 'gold', 'sky blue'], correctAnswer: 0 },
    { id: 'l28q2', templateKey: 'wordMeaning', word: { korean: '하늘색', romanization: 'haneulsaek', translations: { en: 'sky blue', ja: '空色', zh: '天蓝色', th: 'สีฟ้าอ่อน', vi: 'màu xanh da trời', es: 'celeste' } }, options: ['gray', 'silver', 'gold', 'sky blue'], correctAnswer: 3 },
    { id: 'l28q3', templateKey: 'wordMeaning', word: { korean: '밝다', romanization: 'bakda', translations: { en: 'bright', ja: '明るい', zh: '亮', th: 'สว่าง', vi: 'sáng', es: 'brillante' } }, options: ['dark', 'bright', 'light', 'deep'], correctAnswer: 1 },
    { id: 'l28q4', templateKey: 'meaningToKorean', word: { korean: '어둡다', romanization: 'eodupta', translations: { en: 'dark', ja: '暗い', zh: '暗', th: 'มืด', vi: 'tối', es: 'oscuro' } }, options: ['밝다', '어둡다', '진하다', '연하다'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l28m1', left: '회색', right: { en: 'gray', ja: '灰色', zh: '灰色', th: 'สีเทา', vi: 'màu xám', es: 'gris' }, type: 'word' },
    { id: 'l28m2', left: '하늘색', right: { en: 'sky blue', ja: '空色', zh: '天蓝色', th: 'สีฟ้าอ่อน', vi: 'màu xanh da trời', es: 'celeste' }, type: 'word' },
    { id: 'l28m3', left: '밝다', right: { en: 'bright', ja: '明るい', zh: '亮', th: 'สว่าง', vi: 'sáng', es: 'brillante' }, type: 'word' },
    { id: 'l28m4', left: '어둡다', right: { en: 'dark', ja: '暗い', zh: '暗', th: 'มืด', vi: 'tối', es: 'oscuro' }, type: 'word' },
  ],
  reviewItems: ['회색', '하늘색', '밝다', '어둡다', '진하다', '연하다'],
};

// Level 29: Food I
const level29: HangulLevel = {
  level: 29,
  title: 'Food I',
  description: 'Learn basic food words',
  characters: ['밥', '빵', '고기', '생선', '야채', '과일', '달걀', '우유', '치즈', '버터'],
  multilingualQuizQuestions: [
    { id: 'l29q1', templateKey: 'wordMeaning', word: { korean: '밥', romanization: 'bap', translations: { en: 'rice/meal', ja: 'ご飯', zh: '米饭', th: 'ข้าว', vi: 'cơm', es: 'arroz' } }, options: ['rice', 'bread', 'meat', 'fish'], correctAnswer: 0 },
    { id: 'l29q2', templateKey: 'wordMeaning', word: { korean: '고기', romanization: 'gogi', translations: { en: 'meat', ja: '肉', zh: '肉', th: 'เนื้อ', vi: 'thịt', es: 'carne' } }, options: ['rice', 'bread', 'meat', 'fish'], correctAnswer: 2 },
    { id: 'l29q3', templateKey: 'wordMeaning', word: { korean: '과일', romanization: 'gwail', translations: { en: 'fruit', ja: '果物', zh: '水果', th: 'ผลไม้', vi: 'trái cây', es: 'fruta' } }, options: ['vegetable', 'fruit', 'meat', 'fish'], correctAnswer: 1 },
    { id: 'l29q4', templateKey: 'meaningToKorean', word: { korean: '야채', romanization: 'yachae', translations: { en: 'vegetable', ja: '野菜', zh: '蔬菜', th: 'ผัก', vi: 'rau', es: 'verdura' } }, options: ['밥', '고기', '야채', '과일'], correctAnswer: 2 },
    { id: 'l29q5', templateKey: 'meaningToKorean', word: { korean: '우유', romanization: 'uyu', translations: { en: 'milk', ja: '牛乳', zh: '牛奶', th: 'นม', vi: 'sữa', es: 'leche' } }, options: ['물', '우유', '차', '커피'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l29m1', left: '밥', right: { en: 'rice', ja: 'ご飯', zh: '米饭', th: 'ข้าว', vi: 'cơm', es: 'arroz' }, type: 'word' },
    { id: 'l29m2', left: '고기', right: { en: 'meat', ja: '肉', zh: '肉', th: 'เนื้อ', vi: 'thịt', es: 'carne' }, type: 'word' },
    { id: 'l29m3', left: '과일', right: { en: 'fruit', ja: '果物', zh: '水果', th: 'ผลไม้', vi: 'trái cây', es: 'fruta' }, type: 'word' },
    { id: 'l29m4', left: '야채', right: { en: 'vegetable', ja: '野菜', zh: '蔬菜', th: 'ผัก', vi: 'rau', es: 'verdura' }, type: 'word' },
    { id: 'l29m5', left: '우유', right: { en: 'milk', ja: '牛乳', zh: '牛奶', th: 'นม', vi: 'sữa', es: 'leche' }, type: 'word' },
  ],
  reviewItems: ['밥', '빵', '고기', '생선', '야채', '과일', '우유'],
};

// Level 30: Food II & Drinks
const level30: HangulLevel = {
  level: 30,
  title: 'Food II & Drinks',
  description: 'More food and drink words',
  characters: ['물', '커피', '차', '주스', '술', '맥주', '소주', '김치', '국', '찌개'],
  multilingualQuizQuestions: [
    { id: 'l30q1', templateKey: 'wordMeaning', word: { korean: '물', romanization: 'mul', translations: { en: 'water', ja: '水', zh: '水', th: 'น้ำ', vi: 'nước', es: 'agua' } }, options: ['water', 'coffee', 'tea', 'juice'], correctAnswer: 0 },
    { id: 'l30q2', templateKey: 'wordMeaning', word: { korean: '커피', romanization: 'keopi', translations: { en: 'coffee', ja: 'コーヒー', zh: '咖啡', th: 'กาแฟ', vi: 'cà phê', es: 'café' } }, options: ['water', 'coffee', 'tea', 'juice'], correctAnswer: 1 },
    { id: 'l30q3', templateKey: 'wordMeaning', word: { korean: '김치', romanization: 'gimchi', translations: { en: 'kimchi', ja: 'キムチ', zh: '泡菜', th: 'กิมจิ', vi: 'kim chi', es: 'kimchi' } }, options: ['soup', 'stew', 'kimchi', 'rice'], correctAnswer: 2 },
    { id: 'l30q4', templateKey: 'meaningToKorean', word: { korean: '차', romanization: 'cha', translations: { en: 'tea', ja: 'お茶', zh: '茶', th: 'ชา', vi: 'trà', es: 'té' } }, options: ['물', '커피', '차', '주스'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l30m1', left: '물', right: { en: 'water', ja: '水', zh: '水', th: 'น้ำ', vi: 'nước', es: 'agua' }, type: 'word' },
    { id: 'l30m2', left: '커피', right: { en: 'coffee', ja: 'コーヒー', zh: '咖啡', th: 'กาแฟ', vi: 'cà phê', es: 'café' }, type: 'word' },
    { id: 'l30m3', left: '차', right: { en: 'tea', ja: 'お茶', zh: '茶', th: 'ชา', vi: 'trà', es: 'té' }, type: 'word' },
    { id: 'l30m4', left: '김치', right: { en: 'kimchi', ja: 'キムチ', zh: '泡菜', th: 'กิมจิ', vi: 'kim chi', es: 'kimchi' }, type: 'word' },
  ],
  reviewItems: ['물', '커피', '차', '주스', '김치', '국'],
};

// Level 31: Animals I
const level31: HangulLevel = {
  level: 31,
  title: 'Animals I',
  description: 'Learn common pet and farm animal words',
  characters: ['개', '고양이', '새', '물고기', '토끼', '햄스터', '소', '돼지', '닭', '말'],
  multilingualQuizQuestions: [
    { id: 'l31q1', templateKey: 'wordMeaning', word: { korean: '개', romanization: 'gae', translations: { en: 'dog', ja: '犬', zh: '狗', th: 'หมา', vi: 'chó', es: 'perro' } }, options: ['dog', 'cat', 'bird', 'fish'], correctAnswer: 0 },
    { id: 'l31q2', templateKey: 'wordMeaning', word: { korean: '고양이', romanization: 'goyangi', translations: { en: 'cat', ja: '猫', zh: '猫', th: 'แมว', vi: 'mèo', es: 'gato' } }, options: ['dog', 'cat', 'bird', 'fish'], correctAnswer: 1 },
    { id: 'l31q3', templateKey: 'wordMeaning', word: { korean: '새', romanization: 'sae', translations: { en: 'bird', ja: '鳥', zh: '鸟', th: 'นก', vi: 'chim', es: 'pájaro' } }, options: ['dog', 'cat', 'bird', 'fish'], correctAnswer: 2 },
    { id: 'l31q4', templateKey: 'meaningToKorean', word: { korean: '물고기', romanization: 'mulgogi', translations: { en: 'fish', ja: '魚', zh: '鱼', th: 'ปลา', vi: 'cá', es: 'pez' } }, options: ['개', '고양이', '새', '물고기'], correctAnswer: 3 },
  ],
  multilingualMatchingPairs: [
    { id: 'l31m1', left: '개', right: { en: 'dog', ja: '犬', zh: '狗', th: 'หมา', vi: 'chó', es: 'perro' }, type: 'word' },
    { id: 'l31m2', left: '고양이', right: { en: 'cat', ja: '猫', zh: '猫', th: 'แมว', vi: 'mèo', es: 'gato' }, type: 'word' },
    { id: 'l31m3', left: '새', right: { en: 'bird', ja: '鳥', zh: '鸟', th: 'นก', vi: 'chim', es: 'pájaro' }, type: 'word' },
    { id: 'l31m4', left: '물고기', right: { en: 'fish', ja: '魚', zh: '鱼', th: 'ปลา', vi: 'cá', es: 'pez' }, type: 'word' },
  ],
  reviewItems: ['개', '고양이', '새', '물고기', '토끼', '소', '돼지'],
};

// Level 32: Animals II
const level32: HangulLevel = {
  level: 32,
  title: 'Animals II',
  description: 'Learn wild animal words',
  characters: ['호랑이', '사자', '곰', '코끼리', '원숭이', '뱀', '늑대', '여우', '사슴', '기린'],
  multilingualQuizQuestions: [
    { id: 'l32q1', templateKey: 'wordMeaning', word: { korean: '호랑이', romanization: 'horangi', translations: { en: 'tiger', ja: '虎', zh: '老虎', th: 'เสือ', vi: 'hổ', es: 'tigre' } }, options: ['tiger', 'lion', 'bear', 'elephant'], correctAnswer: 0 },
    { id: 'l32q2', templateKey: 'wordMeaning', word: { korean: '사자', romanization: 'saja', translations: { en: 'lion', ja: 'ライオン', zh: '狮子', th: 'สิงโต', vi: 'sư tử', es: 'león' } }, options: ['tiger', 'lion', 'bear', 'elephant'], correctAnswer: 1 },
    { id: 'l32q3', templateKey: 'wordMeaning', word: { korean: '코끼리', romanization: 'kokkiri', translations: { en: 'elephant', ja: '象', zh: '大象', th: 'ช้าง', vi: 'voi', es: 'elefante' } }, options: ['tiger', 'lion', 'bear', 'elephant'], correctAnswer: 3 },
    { id: 'l32q4', templateKey: 'meaningToKorean', word: { korean: '곰', romanization: 'gom', translations: { en: 'bear', ja: '熊', zh: '熊', th: 'หมี', vi: 'gấu', es: 'oso' } }, options: ['호랑이', '사자', '곰', '코끼리'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l32m1', left: '호랑이', right: { en: 'tiger', ja: '虎', zh: '老虎', th: 'เสือ', vi: 'hổ', es: 'tigre' }, type: 'word' },
    { id: 'l32m2', left: '사자', right: { en: 'lion', ja: 'ライオン', zh: '狮子', th: 'สิงโต', vi: 'sư tử', es: 'león' }, type: 'word' },
    { id: 'l32m3', left: '곰', right: { en: 'bear', ja: '熊', zh: '熊', th: 'หมี', vi: 'gấu', es: 'oso' }, type: 'word' },
    { id: 'l32m4', left: '코끼리', right: { en: 'elephant', ja: '象', zh: '大象', th: 'ช้าง', vi: 'voi', es: 'elefante' }, type: 'word' },
  ],
  reviewItems: ['호랑이', '사자', '곰', '코끼리', '원숭이'],
};

// Level 33: Common Objects I
const level33: HangulLevel = {
  level: 33,
  title: 'Common Objects I',
  description: 'Learn everyday object words',
  characters: ['책', '펜', '연필', '공책', '가방', '지갑', '열쇠', '휴대폰', '컴퓨터', '시계'],
  multilingualQuizQuestions: [
    { id: 'l33q1', templateKey: 'wordMeaning', word: { korean: '책', romanization: 'chaek', translations: { en: 'book', ja: '本', zh: '书', th: 'หนังสือ', vi: 'sách', es: 'libro' } }, options: ['book', 'pen', 'pencil', 'notebook'], correctAnswer: 0 },
    { id: 'l33q2', templateKey: 'wordMeaning', word: { korean: '휴대폰', romanization: 'hyudaepon', translations: { en: 'cellphone', ja: '携帯電話', zh: '手机', th: 'โทรศัพท์มือถือ', vi: 'điện thoại', es: 'celular' } }, options: ['computer', 'phone', 'watch', 'bag'], correctAnswer: 1 },
    { id: 'l33q3', templateKey: 'wordMeaning', word: { korean: '시계', romanization: 'sigye', translations: { en: 'watch/clock', ja: '時計', zh: '手表', th: 'นาฬิกา', vi: 'đồng hồ', es: 'reloj' } }, options: ['computer', 'phone', 'watch', 'bag'], correctAnswer: 2 },
    { id: 'l33q4', templateKey: 'meaningToKorean', word: { korean: '가방', romanization: 'gabang', translations: { en: 'bag', ja: 'カバン', zh: '包', th: 'กระเป๋า', vi: 'túi', es: 'bolsa' } }, options: ['책', '펜', '가방', '시계'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l33m1', left: '책', right: { en: 'book', ja: '本', zh: '书', th: 'หนังสือ', vi: 'sách', es: 'libro' }, type: 'word' },
    { id: 'l33m2', left: '휴대폰', right: { en: 'cellphone', ja: '携帯電話', zh: '手机', th: 'โทรศัพท์มือถือ', vi: 'điện thoại', es: 'celular' }, type: 'word' },
    { id: 'l33m3', left: '시계', right: { en: 'watch', ja: '時計', zh: '手表', th: 'นาฬิกา', vi: 'đồng hồ', es: 'reloj' }, type: 'word' },
    { id: 'l33m4', left: '가방', right: { en: 'bag', ja: 'カバン', zh: '包', th: 'กระเป๋า', vi: 'túi', es: 'bolsa' }, type: 'word' },
  ],
  reviewItems: ['책', '펜', '휴대폰', '시계', '가방', '컴퓨터'],
};

// Level 34: Common Objects II
const level34: HangulLevel = {
  level: 34,
  title: 'Common Objects II',
  description: 'Learn furniture and home object words',
  characters: ['의자', '책상', '침대', '소파', '테이블', '문', '창문', '거울', '우산', '안경'],
  multilingualQuizQuestions: [
    { id: 'l34q1', templateKey: 'wordMeaning', word: { korean: '의자', romanization: 'uija', translations: { en: 'chair', ja: '椅子', zh: '椅子', th: 'เก้าอี้', vi: 'ghế', es: 'silla' } }, options: ['chair', 'desk', 'bed', 'sofa'], correctAnswer: 0 },
    { id: 'l34q2', templateKey: 'wordMeaning', word: { korean: '침대', romanization: 'chimdae', translations: { en: 'bed', ja: 'ベッド', zh: '床', th: 'เตียง', vi: 'giường', es: 'cama' } }, options: ['chair', 'desk', 'bed', 'sofa'], correctAnswer: 2 },
    { id: 'l34q3', templateKey: 'wordMeaning', word: { korean: '문', romanization: 'mun', translations: { en: 'door', ja: 'ドア', zh: '门', th: 'ประตู', vi: 'cửa', es: 'puerta' } }, options: ['door', 'window', 'mirror', 'umbrella'], correctAnswer: 0 },
    { id: 'l34q4', templateKey: 'meaningToKorean', word: { korean: '창문', romanization: 'changmun', translations: { en: 'window', ja: '窓', zh: '窗户', th: 'หน้าต่าง', vi: 'cửa sổ', es: 'ventana' } }, options: ['문', '창문', '거울', '우산'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l34m1', left: '의자', right: { en: 'chair', ja: '椅子', zh: '椅子', th: 'เก้าอี้', vi: 'ghế', es: 'silla' }, type: 'word' },
    { id: 'l34m2', left: '침대', right: { en: 'bed', ja: 'ベッド', zh: '床', th: 'เตียง', vi: 'giường', es: 'cama' }, type: 'word' },
    { id: 'l34m3', left: '문', right: { en: 'door', ja: 'ドア', zh: '门', th: 'ประตู', vi: 'cửa', es: 'puerta' }, type: 'word' },
    { id: 'l34m4', left: '창문', right: { en: 'window', ja: '窓', zh: '窗户', th: 'หน้าต่าง', vi: 'cửa sổ', es: 'ventana' }, type: 'word' },
  ],
  reviewItems: ['의자', '침대', '문', '창문', '거울', '우산'],
};

// Level 35: Places I
const level35: HangulLevel = {
  level: 35,
  title: 'Places I',
  description: 'Learn common place words',
  characters: ['집', '학교', '회사', '병원', '은행', '가게', '식당', '카페', '공원', '도서관'],
  multilingualQuizQuestions: [
    { id: 'l35q1', templateKey: 'wordMeaning', word: { korean: '집', romanization: 'jip', translations: { en: 'house/home', ja: '家', zh: '家', th: 'บ้าน', vi: 'nhà', es: 'casa' } }, options: ['house', 'school', 'office', 'hospital'], correctAnswer: 0 },
    { id: 'l35q2', templateKey: 'wordMeaning', word: { korean: '학교', romanization: 'hakgyo', translations: { en: 'school', ja: '学校', zh: '学校', th: 'โรงเรียน', vi: 'trường', es: 'escuela' } }, options: ['house', 'school', 'office', 'hospital'], correctAnswer: 1 },
    { id: 'l35q3', templateKey: 'wordMeaning', word: { korean: '병원', romanization: 'byeongwon', translations: { en: 'hospital', ja: '病院', zh: '医院', th: 'โรงพยาบาล', vi: 'bệnh viện', es: 'hospital' } }, options: ['house', 'school', 'office', 'hospital'], correctAnswer: 3 },
    { id: 'l35q4', templateKey: 'meaningToKorean', word: { korean: '식당', romanization: 'sikdang', translations: { en: 'restaurant', ja: 'レストラン', zh: '餐厅', th: 'ร้านอาหาร', vi: 'nhà hàng', es: 'restaurante' } }, options: ['집', '가게', '식당', '카페'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l35m1', left: '집', right: { en: 'house', ja: '家', zh: '家', th: 'บ้าน', vi: 'nhà', es: 'casa' }, type: 'word' },
    { id: 'l35m2', left: '학교', right: { en: 'school', ja: '学校', zh: '学校', th: 'โรงเรียน', vi: 'trường', es: 'escuela' }, type: 'word' },
    { id: 'l35m3', left: '병원', right: { en: 'hospital', ja: '病院', zh: '医院', th: 'โรงพยาบาล', vi: 'bệnh viện', es: 'hospital' }, type: 'word' },
    { id: 'l35m4', left: '식당', right: { en: 'restaurant', ja: 'レストラン', zh: '餐厅', th: 'ร้านอาหาร', vi: 'nhà hàng', es: 'restaurante' }, type: 'word' },
  ],
  reviewItems: ['집', '학교', '회사', '병원', '식당', '카페'],
};

// Level 36: Places II
const level36: HangulLevel = {
  level: 36,
  title: 'Places II',
  description: 'Learn more place words',
  characters: ['역', '공항', '호텔', '마트', '약국', '우체국', '경찰서', '시장', '백화점', '영화관'],
  multilingualQuizQuestions: [
    { id: 'l36q1', templateKey: 'wordMeaning', word: { korean: '역', romanization: 'yeok', translations: { en: 'station', ja: '駅', zh: '站', th: 'สถานี', vi: 'ga', es: 'estación' } }, options: ['station', 'airport', 'hotel', 'market'], correctAnswer: 0 },
    { id: 'l36q2', templateKey: 'wordMeaning', word: { korean: '공항', romanization: 'gonghang', translations: { en: 'airport', ja: '空港', zh: '机场', th: 'สนามบิน', vi: 'sân bay', es: 'aeropuerto' } }, options: ['station', 'airport', 'hotel', 'market'], correctAnswer: 1 },
    { id: 'l36q3', templateKey: 'wordMeaning', word: { korean: '약국', romanization: 'yakguk', translations: { en: 'pharmacy', ja: '薬局', zh: '药店', th: 'ร้านขายยา', vi: 'hiệu thuốc', es: 'farmacia' } }, options: ['hospital', 'pharmacy', 'police station', 'post office'], correctAnswer: 1 },
    { id: 'l36q4', templateKey: 'meaningToKorean', word: { korean: '영화관', romanization: 'yeonghwagwan', translations: { en: 'cinema', ja: '映画館', zh: '电影院', th: 'โรงภาพยนตร์', vi: 'rạp chiếu phim', es: 'cine' } }, options: ['역', '마트', '영화관', '시장'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l36m1', left: '역', right: { en: 'station', ja: '駅', zh: '站', th: 'สถานี', vi: 'ga', es: 'estación' }, type: 'word' },
    { id: 'l36m2', left: '공항', right: { en: 'airport', ja: '空港', zh: '机场', th: 'สนามบิน', vi: 'sân bay', es: 'aeropuerto' }, type: 'word' },
    { id: 'l36m3', left: '약국', right: { en: 'pharmacy', ja: '薬局', zh: '药店', th: 'ร้านขายยา', vi: 'hiệu thuốc', es: 'farmacia' }, type: 'word' },
    { id: 'l36m4', left: '영화관', right: { en: 'cinema', ja: '映画館', zh: '电影院', th: 'โรงภาพยนตร์', vi: 'rạp chiếu phim', es: 'cine' }, type: 'word' },
  ],
  reviewItems: ['역', '공항', '호텔', '약국', '영화관'],
};

// Level 37: Time I
const level37: HangulLevel = {
  level: 37,
  title: 'Time I',
  description: 'Learn basic time words',
  characters: ['오늘', '내일', '어제', '아침', '점심', '저녁', '밤', '지금', '나중에', '항상'],
  multilingualQuizQuestions: [
    { id: 'l37q1', templateKey: 'wordMeaning', word: { korean: '오늘', romanization: 'oneul', translations: { en: 'today', ja: '今日', zh: '今天', th: 'วันนี้', vi: 'hôm nay', es: 'hoy' } }, options: ['today', 'tomorrow', 'yesterday', 'now'], correctAnswer: 0 },
    { id: 'l37q2', templateKey: 'wordMeaning', word: { korean: '내일', romanization: 'naeil', translations: { en: 'tomorrow', ja: '明日', zh: '明天', th: 'พรุ่งนี้', vi: 'ngày mai', es: 'mañana' } }, options: ['today', 'tomorrow', 'yesterday', 'now'], correctAnswer: 1 },
    { id: 'l37q3', templateKey: 'wordMeaning', word: { korean: '아침', romanization: 'achim', translations: { en: 'morning', ja: '朝', zh: '早上', th: 'เช้า', vi: 'buổi sáng', es: 'mañana' } }, options: ['morning', 'afternoon', 'evening', 'night'], correctAnswer: 0 },
    { id: 'l37q4', templateKey: 'meaningToKorean', word: { korean: '저녁', romanization: 'jeonyeok', translations: { en: 'evening', ja: '夕方', zh: '晚上', th: 'ตอนเย็น', vi: 'buổi tối', es: 'tarde' } }, options: ['아침', '점심', '저녁', '밤'], correctAnswer: 2 },
  ],
  multilingualMatchingPairs: [
    { id: 'l37m1', left: '오늘', right: { en: 'today', ja: '今日', zh: '今天', th: 'วันนี้', vi: 'hôm nay', es: 'hoy' }, type: 'word' },
    { id: 'l37m2', left: '내일', right: { en: 'tomorrow', ja: '明日', zh: '明天', th: 'พรุ่งนี้', vi: 'ngày mai', es: 'mañana' }, type: 'word' },
    { id: 'l37m3', left: '아침', right: { en: 'morning', ja: '朝', zh: '早上', th: 'เช้า', vi: 'buổi sáng', es: 'mañana' }, type: 'word' },
    { id: 'l37m4', left: '저녁', right: { en: 'evening', ja: '夕方', zh: '晚上', th: 'ตอนเย็น', vi: 'buổi tối', es: 'tarde' }, type: 'word' },
  ],
  reviewItems: ['오늘', '내일', '어제', '아침', '점심', '저녁'],
};

// Level 38: Time II & Weather
const level38: HangulLevel = {
  level: 38,
  title: 'Time II & Weather',
  description: 'Learn days, weeks and weather',
  characters: ['월요일', '화요일', '수요일', '주말', '날씨', '비', '눈', '바람', '구름', '해'],
  multilingualQuizQuestions: [
    { id: 'l38q1', templateKey: 'wordMeaning', word: { korean: '월요일', romanization: 'woryoil', translations: { en: 'Monday', ja: '月曜日', zh: '星期一', th: 'วันจันทร์', vi: 'thứ hai', es: 'lunes' } }, options: ['Monday', 'Tuesday', 'Wednesday', 'weekend'], correctAnswer: 0 },
    { id: 'l38q2', templateKey: 'wordMeaning', word: { korean: '주말', romanization: 'jumal', translations: { en: 'weekend', ja: '週末', zh: '周末', th: 'สุดสัปดาห์', vi: 'cuối tuần', es: 'fin de semana' } }, options: ['Monday', 'Tuesday', 'Wednesday', 'weekend'], correctAnswer: 3 },
    { id: 'l38q3', templateKey: 'wordMeaning', word: { korean: '비', romanization: 'bi', translations: { en: 'rain', ja: '雨', zh: '雨', th: 'ฝน', vi: 'mưa', es: 'lluvia' } }, options: ['rain', 'snow', 'wind', 'cloud'], correctAnswer: 0 },
    { id: 'l38q4', templateKey: 'meaningToKorean', word: { korean: '눈', romanization: 'nun', translations: { en: 'snow', ja: '雪', zh: '雪', th: 'หิมะ', vi: 'tuyết', es: 'nieve' } }, options: ['비', '눈', '바람', '구름'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l38m1', left: '월요일', right: { en: 'Monday', ja: '月曜日', zh: '星期一', th: 'วันจันทร์', vi: 'thứ hai', es: 'lunes' }, type: 'word' },
    { id: 'l38m2', left: '주말', right: { en: 'weekend', ja: '週末', zh: '周末', th: 'สุดสัปดาห์', vi: 'cuối tuần', es: 'fin de semana' }, type: 'word' },
    { id: 'l38m3', left: '비', right: { en: 'rain', ja: '雨', zh: '雨', th: 'ฝน', vi: 'mưa', es: 'lluvia' }, type: 'word' },
    { id: 'l38m4', left: '눈', right: { en: 'snow', ja: '雪', zh: '雪', th: 'หิมะ', vi: 'tuyết', es: 'nieve' }, type: 'word' },
  ],
  reviewItems: ['월요일', '주말', '날씨', '비', '눈', '바람'],
};

// Level 39: Common Verbs
const level39: HangulLevel = {
  level: 39,
  title: 'Common Verbs',
  description: 'Learn basic action verbs',
  characters: ['가다', '오다', '먹다', '마시다', '자다', '일어나다', '보다', '듣다', '말하다', '읽다'],
  multilingualQuizQuestions: [
    { id: 'l39q1', templateKey: 'wordMeaning', word: { korean: '가다', romanization: 'gada', translations: { en: 'to go', ja: '行く', zh: '去', th: 'ไป', vi: 'đi', es: 'ir' } }, options: ['to go', 'to come', 'to eat', 'to sleep'], correctAnswer: 0 },
    { id: 'l39q2', templateKey: 'wordMeaning', word: { korean: '오다', romanization: 'oda', translations: { en: 'to come', ja: '来る', zh: '来', th: 'มา', vi: 'đến', es: 'venir' } }, options: ['to go', 'to come', 'to eat', 'to sleep'], correctAnswer: 1 },
    { id: 'l39q3', templateKey: 'wordMeaning', word: { korean: '먹다', romanization: 'meokda', translations: { en: 'to eat', ja: '食べる', zh: '吃', th: 'กิน', vi: 'ăn', es: 'comer' } }, options: ['to go', 'to come', 'to eat', 'to sleep'], correctAnswer: 2 },
    { id: 'l39q4', templateKey: 'meaningToKorean', word: { korean: '자다', romanization: 'jada', translations: { en: 'to sleep', ja: '寝る', zh: '睡觉', th: 'นอน', vi: 'ngủ', es: 'dormir' } }, options: ['가다', '오다', '먹다', '자다'], correctAnswer: 3 },
    { id: 'l39q5', templateKey: 'meaningToKorean', word: { korean: '보다', romanization: 'boda', translations: { en: 'to see/watch', ja: '見る', zh: '看', th: 'ดู', vi: 'xem', es: 'ver' } }, options: ['듣다', '보다', '말하다', '읽다'], correctAnswer: 1 },
  ],
  multilingualMatchingPairs: [
    { id: 'l39m1', left: '가다', right: { en: 'to go', ja: '行く', zh: '去', th: 'ไป', vi: 'đi', es: 'ir' }, type: 'word' },
    { id: 'l39m2', left: '오다', right: { en: 'to come', ja: '来る', zh: '来', th: 'มา', vi: 'đến', es: 'venir' }, type: 'word' },
    { id: 'l39m3', left: '먹다', right: { en: 'to eat', ja: '食べる', zh: '吃', th: 'กิน', vi: 'ăn', es: 'comer' }, type: 'word' },
    { id: 'l39m4', left: '자다', right: { en: 'to sleep', ja: '寝る', zh: '睡觉', th: 'นอน', vi: 'ngủ', es: 'dormir' }, type: 'word' },
    { id: 'l39m5', left: '보다', right: { en: 'to see', ja: '見る', zh: '看', th: 'ดู', vi: 'xem', es: 'ver' }, type: 'word' },
  ],
  reviewItems: ['가다', '오다', '먹다', '마시다', '자다', '보다'],
};

// Level 40: Common Adjectives
const level40: HangulLevel = {
  level: 40,
  title: 'Common Adjectives',
  description: 'Learn basic descriptive words',
  characters: ['크다', '작다', '좋다', '나쁘다', '많다', '적다', '새롭다', '오래되다', '빠르다', '느리다'],
  multilingualQuizQuestions: [
    { id: 'l40q1', templateKey: 'wordMeaning', word: { korean: '크다', romanization: 'keuda', translations: { en: 'big', ja: '大きい', zh: '大', th: 'ใหญ่', vi: 'lớn', es: 'grande' } }, options: ['big', 'small', 'good', 'bad'], correctAnswer: 0 },
    { id: 'l40q2', templateKey: 'wordMeaning', word: { korean: '작다', romanization: 'jakda', translations: { en: 'small', ja: '小さい', zh: '小', th: 'เล็ก', vi: 'nhỏ', es: 'pequeño' } }, options: ['big', 'small', 'good', 'bad'], correctAnswer: 1 },
    { id: 'l40q3', templateKey: 'wordMeaning', word: { korean: '좋다', romanization: 'jota', translations: { en: 'good', ja: '良い', zh: '好', th: 'ดี', vi: 'tốt', es: 'bueno' } }, options: ['big', 'small', 'good', 'bad'], correctAnswer: 2 },
    { id: 'l40q4', templateKey: 'meaningToKorean', word: { korean: '빠르다', romanization: 'ppareuda', translations: { en: 'fast', ja: '速い', zh: '快', th: 'เร็ว', vi: 'nhanh', es: 'rápido' } }, options: ['크다', '작다', '빠르다', '느리다'], correctAnswer: 2 },
    { id: 'l40q5', templateKey: 'meaningToKorean', word: { korean: '많다', romanization: 'manta', translations: { en: 'many/much', ja: '多い', zh: '多', th: 'มาก', vi: 'nhiều', es: 'mucho' } }, options: ['많다', '적다', '새롭다', '오래되다'], correctAnswer: 0 },
  ],
  multilingualMatchingPairs: [
    { id: 'l40m1', left: '크다', right: { en: 'big', ja: '大きい', zh: '大', th: 'ใหญ่', vi: 'lớn', es: 'grande' }, type: 'word' },
    { id: 'l40m2', left: '작다', right: { en: 'small', ja: '小さい', zh: '小', th: 'เล็ก', vi: 'nhỏ', es: 'pequeño' }, type: 'word' },
    { id: 'l40m3', left: '좋다', right: { en: 'good', ja: '良い', zh: '好', th: 'ดี', vi: 'tốt', es: 'bueno' }, type: 'word' },
    { id: 'l40m4', left: '빠르다', right: { en: 'fast', ja: '速い', zh: '快', th: 'เร็ว', vi: 'nhanh', es: 'rápido' }, type: 'word' },
    { id: 'l40m5', left: '많다', right: { en: 'many', ja: '多い', zh: '多', th: 'มาก', vi: 'nhiều', es: 'mucho' }, type: 'word' },
  ],
  reviewItems: ['크다', '작다', '좋다', '빠르다', '느리다', '많다'],
};

// Export all intermediate levels
export const intermediateLevels: HangulLevel[] = [
  level21, level22, level23, level24, level25,
  level26, level27, level28, level29, level30,
  level31, level32, level33, level34, level35,
  level36, level37, level38, level39, level40,
];
