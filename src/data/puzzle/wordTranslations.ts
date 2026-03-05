/**
 * Word Translations for Puzzle Game
 * Maps Korean words to translations in different languages
 */

export type SupportedLanguage = 'en' | 'ja' | 'zh' | 'es' | 'th' | 'vi';

export interface WordTranslation {
  en: string;
  ja: string;
  zh: string;
  es: string;
  th: string;
  vi: string;
}

// Word translations mapped by Korean word
export const wordTranslations: Record<string, WordTranslation> = {
  // === BEGINNER LEVEL WORDS ===

  // Nature
  '물': { en: 'Water', ja: '水', zh: '水', es: 'Agua', th: 'น้ำ', vi: 'Nước' },
  '불': { en: 'Fire', ja: '火', zh: '火', es: 'Fuego', th: 'ไฟ', vi: 'Lửa' },
  '산': { en: 'Mountain', ja: '山', zh: '山', es: 'Montaña', th: 'ภูเขา', vi: 'Núi' },
  '강': { en: 'River', ja: '川', zh: '河', es: 'Río', th: 'แม่น้ำ', vi: 'Sông' },
  '하늘': { en: 'Sky', ja: '空', zh: '天空', es: 'Cielo', th: 'ท้องฟ้า', vi: 'Bầu trời' },
  '바다': { en: 'Sea', ja: '海', zh: '海', es: 'Mar', th: 'ทะเล', vi: 'Biển' },
  '구름': { en: 'Cloud', ja: '雲', zh: '云', es: 'Nube', th: 'เมฆ', vi: 'Mây' },
  '나무': { en: 'Tree', ja: '木', zh: '树', es: 'Árbol', th: 'ต้นไม้', vi: 'Cây' },
  '꽃': { en: 'Flower', ja: '花', zh: '花', es: 'Flor', th: 'ดอกไม้', vi: 'Hoa' },
  '풀': { en: 'Grass', ja: '草', zh: '草', es: 'Hierba', th: 'หญ้า', vi: 'Cỏ' },
  '별': { en: 'Star', ja: '星', zh: '星星', es: 'Estrella', th: 'ดาว', vi: 'Ngôi sao' },
  '달': { en: 'Moon', ja: '月', zh: '月亮', es: 'Luna', th: 'พระจันทร์', vi: 'Mặt trăng' },
  '해': { en: 'Sun', ja: '太陽', zh: '太阳', es: 'Sol', th: 'ดวงอาทิตย์', vi: 'Mặt trời' },
  '비': { en: 'Rain', ja: '雨', zh: '雨', es: 'Lluvia', th: 'ฝน', vi: 'Mưa' },
  '눈': { en: 'Eye/Snow', ja: '目/雪', zh: '眼睛/雪', es: 'Ojo/Nieve', th: 'ตา/หิมะ', vi: 'Mắt/Tuyết' },
  '날씨': { en: 'Weather', ja: '天気', zh: '天气', es: 'Clima', th: 'สภาพอากาศ', vi: 'Thời tiết' },
  '바람': { en: 'Wind', ja: '風', zh: '风', es: 'Viento', th: 'ลม', vi: 'Gió' },
  '햇빛': { en: 'Sunlight', ja: '日光', zh: '阳光', es: 'Luz solar', th: 'แสงแดด', vi: 'Ánh nắng' },

  // Body parts
  '손': { en: 'Hand', ja: '手', zh: '手', es: 'Mano', th: 'มือ', vi: 'Tay' },
  '코': { en: 'Nose', ja: '鼻', zh: '鼻子', es: 'Nariz', th: 'จมูก', vi: 'Mũi' },
  '입': { en: 'Mouth', ja: '口', zh: '嘴', es: 'Boca', th: 'ปาก', vi: 'Miệng' },
  '귀': { en: 'Ear', ja: '耳', zh: '耳朵', es: 'Oreja', th: 'หู', vi: 'Tai' },
  '발': { en: 'Foot', ja: '足', zh: '脚', es: 'Pie', th: 'เท้า', vi: 'Chân' },
  '머리': { en: 'Head', ja: '頭', zh: '头', es: 'Cabeza', th: 'หัว', vi: 'Đầu' },
  '다리': { en: 'Leg', ja: '脚', zh: '腿', es: 'Pierna', th: 'ขา', vi: 'Chân' },
  '팔': { en: 'Arm', ja: '腕', zh: '手臂', es: 'Brazo', th: 'แขน', vi: 'Cánh tay' },
  '배': { en: 'Belly', ja: 'お腹', zh: '肚子', es: 'Barriga', th: 'ท้อง', vi: 'Bụng' },

  // Family
  '엄마': { en: 'Mom', ja: 'お母さん', zh: '妈妈', es: 'Mamá', th: 'แม่', vi: 'Mẹ' },
  '아빠': { en: 'Dad', ja: 'お父さん', zh: '爸爸', es: 'Papá', th: 'พ่อ', vi: 'Bố' },
  '누나': { en: 'Older sister (for males)', ja: '姉', zh: '姐姐', es: 'Hermana mayor', th: 'พี่สาว', vi: 'Chị gái' },
  '동생': { en: 'Younger sibling', ja: '弟妹', zh: '弟弟妹妹', es: 'Hermano menor', th: 'น้อง', vi: 'Em' },
  '형': { en: 'Older brother (for males)', ja: '兄', zh: '哥哥', es: 'Hermano mayor', th: 'พี่ชาย', vi: 'Anh trai' },
  '언니': { en: 'Older sister (for females)', ja: 'お姉さん', zh: '姐姐', es: 'Hermana mayor', th: 'พี่สาว', vi: 'Chị gái' },
  '오빠': { en: 'Older brother (for females)', ja: 'お兄さん', zh: '哥哥', es: 'Hermano mayor', th: 'พี่ชาย', vi: 'Anh trai' },
  '할머니': { en: 'Grandmother', ja: 'おばあさん', zh: '奶奶', es: 'Abuela', th: 'ยาย', vi: 'Bà' },
  '친구': { en: 'Friend', ja: '友達', zh: '朋友', es: 'Amigo', th: 'เพื่อน', vi: 'Bạn' },
  '아기': { en: 'Baby', ja: '赤ちゃん', zh: '宝宝', es: 'Bebé', th: 'ทารก', vi: 'Em bé' },

  // Animals
  '개': { en: 'Dog', ja: '犬', zh: '狗', es: 'Perro', th: 'สุนัข', vi: 'Chó' },
  '고양이': { en: 'Cat', ja: '猫', zh: '猫', es: 'Gato', th: 'แมว', vi: 'Mèo' },
  '새': { en: 'Bird', ja: '鳥', zh: '鸟', es: 'Pájaro', th: 'นก', vi: 'Chim' },
  '물고기': { en: 'Fish', ja: '魚', zh: '鱼', es: 'Pez', th: 'ปลา', vi: 'Cá' },
  '말': { en: 'Horse', ja: '馬', zh: '马', es: 'Caballo', th: 'ม้า', vi: 'Ngựa' },
  '소': { en: 'Cow', ja: '牛', zh: '牛', es: 'Vaca', th: 'วัว', vi: 'Bò' },
  '돼지': { en: 'Pig', ja: '豚', zh: '猪', es: 'Cerdo', th: 'หมู', vi: 'Lợn' },
  '닭': { en: 'Chicken', ja: '鶏', zh: '鸡', es: 'Pollo', th: 'ไก่', vi: 'Gà' },
  '토끼': { en: 'Rabbit', ja: 'うさぎ', zh: '兔子', es: 'Conejo', th: 'กระต่าย', vi: 'Thỏ' },
  '호랑이': { en: 'Tiger', ja: '虎', zh: '老虎', es: 'Tigre', th: 'เสือ', vi: 'Hổ' },
  '강아지': { en: 'Puppy', ja: '子犬', zh: '小狗', es: 'Cachorro', th: 'ลูกสุนัข', vi: 'Chó con' },
  '햄스터': { en: 'Hamster', ja: 'ハムスター', zh: '仓鼠', es: 'Hámster', th: 'แฮมสเตอร์', vi: 'Chuột hamster' },
  '앵무새': { en: 'Parrot', ja: 'オウム', zh: '鹦鹉', es: 'Loro', th: 'นกแก้ว', vi: 'Vẹt' },
  '금붕어': { en: 'Goldfish', ja: '金魚', zh: '金鱼', es: 'Pez dorado', th: 'ปลาทอง', vi: 'Cá vàng' },
  '거북이': { en: 'Turtle', ja: 'カメ', zh: '乌龟', es: 'Tortuga', th: 'เต่า', vi: 'Rùa' },
  '코끼리': { en: 'Elephant', ja: 'ゾウ', zh: '大象', es: 'Elefante', th: 'ช้าง', vi: 'Voi' },
  '기린': { en: 'Giraffe', ja: 'キリン', zh: '长颈鹿', es: 'Jirafa', th: 'ยีราฟ', vi: 'Hươu cao cổ' },
  '사자': { en: 'Lion', ja: 'ライオン', zh: '狮子', es: 'León', th: 'สิงโต', vi: 'Sư tử' },
  '원숭이': { en: 'Monkey', ja: '猿', zh: '猴子', es: 'Mono', th: 'ลิง', vi: 'Khỉ' },

  // Food
  '밥': { en: 'Rice/Meal', ja: 'ご飯', zh: '饭', es: 'Arroz', th: 'ข้าว', vi: 'Cơm' },
  '빵': { en: 'Bread', ja: 'パン', zh: '面包', es: 'Pan', th: 'ขนมปัง', vi: 'Bánh mì' },
  '우유': { en: 'Milk', ja: '牛乳', zh: '牛奶', es: 'Leche', th: 'นม', vi: 'Sữa' },
  '사과': { en: 'Apple', ja: 'りんご', zh: '苹果', es: 'Manzana', th: 'แอปเปิ้ล', vi: 'Táo' },
  '바나나': { en: 'Banana', ja: 'バナナ', zh: '香蕉', es: 'Plátano', th: 'กล้วย', vi: 'Chuối' },
  '김치': { en: 'Kimchi', ja: 'キムチ', zh: '泡菜', es: 'Kimchi', th: 'กิมจิ', vi: 'Kim chi' },
  '라면': { en: 'Ramen', ja: 'ラーメン', zh: '拉面', es: 'Ramen', th: 'ราเมน', vi: 'Mì ramen' },
  '고기': { en: 'Meat', ja: '肉', zh: '肉', es: 'Carne', th: 'เนื้อ', vi: 'Thịt' },
  '과일': { en: 'Fruit', ja: '果物', zh: '水果', es: 'Fruta', th: 'ผลไม้', vi: 'Trái cây' },
  '국': { en: 'Soup', ja: 'スープ', zh: '汤', es: 'Sopa', th: 'ซุป', vi: 'Canh' },
  '찌개': { en: 'Stew', ja: 'チゲ', zh: '炖菜', es: 'Guiso', th: 'จิเก', vi: 'Canh hầm' },
  '떡': { en: 'Rice cake', ja: '餅', zh: '年糕', es: 'Pastel de arroz', th: 'ต๊อก', vi: 'Bánh gạo' },
  '케이크': { en: 'Cake', ja: 'ケーキ', zh: '蛋糕', es: 'Pastel', th: 'เค้ก', vi: 'Bánh kem' },
  '아이스': { en: 'Ice', ja: 'アイス', zh: '冰', es: 'Hielo', th: 'น้ำแข็ง', vi: 'Đá' },
  '주스': { en: 'Juice', ja: 'ジュース', zh: '果汁', es: 'Jugo', th: 'น้ำผลไม้', vi: 'Nước ép' },
  '커피': { en: 'Coffee', ja: 'コーヒー', zh: '咖啡', es: 'Café', th: 'กาแฟ', vi: 'Cà phê' },
  '차': { en: 'Tea/Car', ja: 'お茶/車', zh: '茶/车', es: 'Té/Carro', th: 'ชา/รถ', vi: 'Trà/Xe' },

  // Colors
  '빨강': { en: 'Red', ja: '赤', zh: '红色', es: 'Rojo', th: 'แดง', vi: 'Đỏ' },
  '파랑': { en: 'Blue', ja: '青', zh: '蓝色', es: 'Azul', th: 'น้ำเงิน', vi: 'Xanh dương' },
  '노랑': { en: 'Yellow', ja: '黄色', zh: '黄色', es: 'Amarillo', th: 'เหลือง', vi: 'Vàng' },
  '초록': { en: 'Green', ja: '緑', zh: '绿色', es: 'Verde', th: 'เขียว', vi: 'Xanh lá' },
  '하양': { en: 'White', ja: '白', zh: '白色', es: 'Blanco', th: 'ขาว', vi: 'Trắng' },
  '검정': { en: 'Black', ja: '黒', zh: '黑色', es: 'Negro', th: 'ดำ', vi: 'Đen' },
  '주황': { en: 'Orange', ja: 'オレンジ', zh: '橙色', es: 'Naranja', th: 'ส้ม', vi: 'Cam' },
  '분홍': { en: 'Pink', ja: 'ピンク', zh: '粉色', es: 'Rosa', th: 'ชมพู', vi: 'Hồng' },
  '보라': { en: 'Purple', ja: '紫', zh: '紫色', es: 'Morado', th: 'ม่วง', vi: 'Tím' },

  // Places
  '집': { en: 'House', ja: '家', zh: '家', es: 'Casa', th: 'บ้าน', vi: 'Nhà' },
  '학교': { en: 'School', ja: '学校', zh: '学校', es: 'Escuela', th: 'โรงเรียน', vi: 'Trường' },
  '가게': { en: 'Store', ja: '店', zh: '商店', es: 'Tienda', th: 'ร้านค้า', vi: 'Cửa hàng' },
  '공원': { en: 'Park', ja: '公園', zh: '公园', es: 'Parque', th: 'สวนสาธารณะ', vi: 'Công viên' },
  '병원': { en: 'Hospital', ja: '病院', zh: '医院', es: 'Hospital', th: 'โรงพยาบาล', vi: 'Bệnh viện' },
  '은행': { en: 'Bank', ja: '銀行', zh: '银行', es: 'Banco', th: 'ธนาคาร', vi: 'Ngân hàng' },
  '역': { en: 'Station', ja: '駅', zh: '车站', es: 'Estación', th: 'สถานี', vi: 'Ga' },
  '길': { en: 'Road', ja: '道', zh: '路', es: 'Camino', th: 'ถนน', vi: 'Đường' },
  '문': { en: 'Door', ja: 'ドア', zh: '门', es: 'Puerta', th: 'ประตู', vi: 'Cửa' },
  '방': { en: 'Room', ja: '部屋', zh: '房间', es: 'Habitación', th: 'ห้อง', vi: 'Phòng' },
  '도서관': { en: 'Library', ja: '図書館', zh: '图书馆', es: 'Biblioteca', th: 'ห้องสมุด', vi: 'Thư viện' },
  '미용실': { en: 'Hair salon', ja: '美容室', zh: '美发店', es: 'Peluquería', th: 'ร้านทำผม', vi: 'Tiệm làm tóc' },
  '편의점': { en: 'Convenience store', ja: 'コンビニ', zh: '便利店', es: 'Tienda', th: 'ร้านสะดวกซื้อ', vi: 'Cửa hàng tiện lợi' },
  '우체국': { en: 'Post office', ja: '郵便局', zh: '邮局', es: 'Oficina postal', th: 'ที่ทำการไปรษณีย์', vi: 'Bưu điện' },
  '놀이터': { en: 'Playground', ja: '遊び場', zh: '游乐场', es: 'Patio de juegos', th: 'สนามเด็กเล่น', vi: 'Sân chơi' },
  '수영장': { en: 'Swimming pool', ja: 'プール', zh: '游泳池', es: 'Piscina', th: 'สระว่ายน้ำ', vi: 'Hồ bơi' },
  '운동장': { en: 'Sports field', ja: '運動場', zh: '操场', es: 'Campo deportivo', th: 'สนามกีฬา', vi: 'Sân vận động' },
  '백화점': { en: 'Department store', ja: 'デパート', zh: '百货商店', es: 'Grandes almacenes', th: 'ห้างสรรพสินค้า', vi: 'Trung tâm thương mại' },
  '주차장': { en: 'Parking lot', ja: '駐車場', zh: '停车场', es: 'Estacionamiento', th: 'ที่จอดรถ', vi: 'Bãi đậu xe' },
  '화장실': { en: 'Restroom', ja: 'トイレ', zh: '洗手间', es: 'Baño', th: 'ห้องน้ำ', vi: 'Nhà vệ sinh' },
  '지하철': { en: 'Subway', ja: '地下鉄', zh: '地铁', es: 'Metro', th: 'รถไฟใต้ดิน', vi: 'Tàu điện ngầm' },
  '경찰서': { en: 'Police station', ja: '警察署', zh: '警察局', es: 'Comisaría', th: 'สถานีตำรวจ', vi: 'Đồn cảnh sát' },
  '소방서': { en: 'Fire station', ja: '消防署', zh: '消防局', es: 'Estación de bomberos', th: 'สถานีดับเพลิง', vi: 'Trạm cứu hỏa' },
  '영화관': { en: 'Movie theater', ja: '映画館', zh: '电影院', es: 'Cine', th: 'โรงภาพยนตร์', vi: 'Rạp chiếu phim' },
  '박물관': { en: 'Museum', ja: '博物館', zh: '博物馆', es: 'Museo', th: 'พิพิธภัณฑ์', vi: 'Bảo tàng' },
  '대학교': { en: 'University', ja: '大学', zh: '大学', es: 'Universidad', th: 'มหาวิทยาลัย', vi: 'Đại học' },
  '초등학교': { en: 'Elementary school', ja: '小学校', zh: '小学', es: 'Escuela primaria', th: 'โรงเรียนประถม', vi: 'Trường tiểu học' },
  '중학교': { en: 'Middle school', ja: '中学校', zh: '初中', es: 'Secundaria', th: 'โรงเรียนมัธยมต้น', vi: 'Trường trung học cơ sở' },
  '고등학교': { en: 'High school', ja: '高校', zh: '高中', es: 'Preparatoria', th: 'โรงเรียนมัธยมปลาย', vi: 'Trường trung học phổ thông' },
  '유치원': { en: 'Kindergarten', ja: '幼稚園', zh: '幼儿园', es: 'Jardín de infancia', th: 'อนุบาล', vi: 'Mẫu giáo' },

  // Time
  '오늘': { en: 'Today', ja: '今日', zh: '今天', es: 'Hoy', th: 'วันนี้', vi: 'Hôm nay' },
  '내일': { en: 'Tomorrow', ja: '明日', zh: '明天', es: 'Mañana', th: 'พรุ่งนี้', vi: 'Ngày mai' },
  '어제': { en: 'Yesterday', ja: '昨日', zh: '昨天', es: 'Ayer', th: 'เมื่อวาน', vi: 'Hôm qua' },
  '아침': { en: 'Morning', ja: '朝', zh: '早上', es: 'Mañana', th: 'เช้า', vi: 'Buổi sáng' },
  '점심': { en: 'Lunch', ja: '昼', zh: '中午', es: 'Almuerzo', th: 'กลางวัน', vi: 'Buổi trưa' },
  '저녁': { en: 'Evening', ja: '夕方', zh: '晚上', es: 'Noche', th: 'เย็น', vi: 'Buổi tối' },
  '밤': { en: 'Night', ja: '夜', zh: '晚上', es: 'Noche', th: 'กลางคืน', vi: 'Đêm' },
  '시간': { en: 'Time', ja: '時間', zh: '时间', es: 'Tiempo', th: 'เวลา', vi: 'Thời gian' },
  '날': { en: 'Day', ja: '日', zh: '天', es: 'Día', th: 'วัน', vi: 'Ngày' },
  '주': { en: 'Week', ja: '週', zh: '周', es: 'Semana', th: 'สัปดาห์', vi: 'Tuần' },
  '봄': { en: 'Spring', ja: '春', zh: '春天', es: 'Primavera', th: 'ฤดูใบไม้ผลิ', vi: 'Mùa xuân' },
  '여름': { en: 'Summer', ja: '夏', zh: '夏天', es: 'Verano', th: 'ฤดูร้อน', vi: 'Mùa hè' },
  '가을': { en: 'Fall', ja: '秋', zh: '秋天', es: 'Otoño', th: 'ฤดูใบไม้ร่วง', vi: 'Mùa thu' },
  '겨울': { en: 'Winter', ja: '冬', zh: '冬天', es: 'Invierno', th: 'ฤดูหนาว', vi: 'Mùa đông' },

  // Objects
  '책': { en: 'Book', ja: '本', zh: '书', es: 'Libro', th: 'หนังสือ', vi: 'Sách' },
  '연필': { en: 'Pencil', ja: '鉛筆', zh: '铅笔', es: 'Lápiz', th: 'ดินสอ', vi: 'Bút chì' },
  '가방': { en: 'Bag', ja: 'かばん', zh: '包', es: 'Bolsa', th: 'กระเป๋า', vi: 'Túi' },
  '의자': { en: 'Chair', ja: '椅子', zh: '椅子', es: 'Silla', th: 'เก้าอี้', vi: 'Ghế' },
  '책상': { en: 'Desk', ja: '机', zh: '桌子', es: 'Escritorio', th: 'โต๊ะ', vi: 'Bàn' },
  '침대': { en: 'Bed', ja: 'ベッド', zh: '床', es: 'Cama', th: 'เตียง', vi: 'Giường' },
  '거울': { en: 'Mirror', ja: '鏡', zh: '镜子', es: 'Espejo', th: 'กระจก', vi: 'Gương' },
  '시계': { en: 'Clock', ja: '時計', zh: '钟', es: 'Reloj', th: 'นาฬิกา', vi: 'Đồng hồ' },
  '전화': { en: 'Phone', ja: '電話', zh: '电话', es: 'Teléfono', th: 'โทรศัพท์', vi: 'Điện thoại' },
  '컴퓨터': { en: 'Computer', ja: 'コンピュータ', zh: '电脑', es: 'Computadora', th: 'คอมพิวเตอร์', vi: 'Máy tính' },
  '텔레비전': { en: 'Television', ja: 'テレビ', zh: '电视', es: 'Televisión', th: 'โทรทัศน์', vi: 'Tivi' },
  '냉장고': { en: 'Refrigerator', ja: '冷蔵庫', zh: '冰箱', es: 'Refrigerador', th: 'ตู้เย็น', vi: 'Tủ lạnh' },
  '세탁기': { en: 'Washing machine', ja: '洗濯機', zh: '洗衣机', es: 'Lavadora', th: 'เครื่องซักผ้า', vi: 'Máy giặt' },
  '에어컨': { en: 'Air conditioner', ja: 'エアコン', zh: '空调', es: 'Aire acondicionado', th: 'แอร์', vi: 'Điều hòa' },
  '선풍기': { en: 'Electric fan', ja: '扇風機', zh: '电风扇', es: 'Ventilador', th: 'พัดลม', vi: 'Quạt điện' },
  '전자레인지': { en: 'Microwave', ja: '電子レンジ', zh: '微波炉', es: 'Microondas', th: 'ไมโครเวฟ', vi: 'Lò vi sóng' },
  '청소기': { en: 'Vacuum cleaner', ja: '掃除機', zh: '吸尘器', es: 'Aspiradora', th: 'เครื่องดูดฝุ่น', vi: 'Máy hút bụi' },
  '노트북': { en: 'Laptop', ja: 'ノートパソコン', zh: '笔记本电脑', es: 'Portátil', th: 'แล็ปท็อป', vi: 'Laptop' },
  '스마트폰': { en: 'Smartphone', ja: 'スマートフォン', zh: '智能手机', es: 'Teléfono inteligente', th: 'สมาร์ทโฟน', vi: 'Điện thoại thông minh' },

  // Numbers
  '하나': { en: 'One', ja: '一', zh: '一', es: 'Uno', th: 'หนึ่ง', vi: 'Một' },
  '둘': { en: 'Two', ja: '二', zh: '二', es: 'Dos', th: 'สอง', vi: 'Hai' },
  '셋': { en: 'Three', ja: '三', zh: '三', es: 'Tres', th: 'สาม', vi: 'Ba' },
  '넷': { en: 'Four', ja: '四', zh: '四', es: 'Cuatro', th: 'สี่', vi: 'Bốn' },
  '다섯': { en: 'Five', ja: '五', zh: '五', es: 'Cinco', th: 'ห้า', vi: 'Năm' },
  '여섯': { en: 'Six', ja: '六', zh: '六', es: 'Seis', th: 'หก', vi: 'Sáu' },
  '일곱': { en: 'Seven', ja: '七', zh: '七', es: 'Siete', th: 'เจ็ด', vi: 'Bảy' },
  '여덟': { en: 'Eight', ja: '八', zh: '八', es: 'Ocho', th: 'แปด', vi: 'Tám' },
  '아홉': { en: 'Nine', ja: '九', zh: '九', es: 'Nueve', th: 'เก้า', vi: 'Chín' },
  '열': { en: 'Ten', ja: '十', zh: '十', es: 'Diez', th: 'สิบ', vi: 'Mười' },

  // Transportation
  '자동차': { en: 'Car', ja: '車', zh: '汽车', es: 'Coche', th: 'รถยนต์', vi: 'Ô tô' },
  '비행기': { en: 'Airplane', ja: '飛行機', zh: '飞机', es: 'Avión', th: 'เครื่องบิน', vi: 'Máy bay' },
  '버스': { en: 'Bus', ja: 'バス', zh: '公交车', es: 'Autobús', th: 'รถบัส', vi: 'Xe buýt' },
  '택시': { en: 'Taxi', ja: 'タクシー', zh: '出租车', es: 'Taxi', th: 'แท็กซี่', vi: 'Taxi' },
  '기차': { en: 'Train', ja: '電車', zh: '火车', es: 'Tren', th: 'รถไฟ', vi: 'Tàu hỏa' },
  '자전거': { en: 'Bicycle', ja: '自転車', zh: '自行车', es: 'Bicicleta', th: 'จักรยาน', vi: 'Xe đạp' },
  '오토바이': { en: 'Motorcycle', ja: 'オートバイ', zh: '摩托车', es: 'Motocicleta', th: 'มอเตอร์ไซค์', vi: 'Xe máy' },
  '트럭': { en: 'Truck', ja: 'トラック', zh: '卡车', es: 'Camión', th: 'รถบรรทุก', vi: 'Xe tải' },
  '고속버스': { en: 'Express bus', ja: '高速バス', zh: '高速大巴', es: 'Autobús expreso', th: 'รถบัสด่วน', vi: 'Xe buýt tốc hành' },
  '지하철역': { en: 'Subway station', ja: '地下鉄駅', zh: '地铁站', es: 'Estación de metro', th: 'สถานีรถไฟใต้ดิน', vi: 'Ga tàu điện ngầm' },
  '버스정류장': { en: 'Bus stop', ja: 'バス停', zh: '公交站', es: 'Parada de autobús', th: 'ป้ายรถเมล์', vi: 'Trạm xe buýt' },
  '공항': { en: 'Airport', ja: '空港', zh: '机场', es: 'Aeropuerto', th: 'สนามบิน', vi: 'Sân bay' },

  // Occupations
  '의사': { en: 'Doctor', ja: '医者', zh: '医生', es: 'Doctor', th: 'หมอ', vi: 'Bác sĩ' },
  '간호사': { en: 'Nurse', ja: '看護師', zh: '护士', es: 'Enfermera', th: 'พยาบาล', vi: 'Y tá' },
  '선생님': { en: 'Teacher', ja: '先生', zh: '老师', es: 'Maestro', th: 'ครู', vi: 'Giáo viên' },
  '경찰관': { en: 'Police officer', ja: '警察官', zh: '警察', es: 'Policía', th: 'ตำรวจ', vi: 'Cảnh sát' },
  '소방관': { en: 'Firefighter', ja: '消防士', zh: '消防员', es: 'Bombero', th: 'นักดับเพลิง', vi: 'Lính cứu hỏa' },
  '요리사': { en: 'Chef', ja: 'シェフ', zh: '厨师', es: 'Chef', th: 'เชฟ', vi: 'Đầu bếp' },
  '운전사': { en: 'Driver', ja: '運転手', zh: '司机', es: 'Conductor', th: 'คนขับรถ', vi: 'Tài xế' },
  '회사원': { en: 'Office worker', ja: '会社員', zh: '上班族', es: 'Empleado', th: 'พนักงานออฟฟิศ', vi: 'Nhân viên văn phòng' },
  '학생': { en: 'Student', ja: '学生', zh: '学生', es: 'Estudiante', th: 'นักเรียน', vi: 'Học sinh' },
  '가수': { en: 'Singer', ja: '歌手', zh: '歌手', es: 'Cantante', th: 'นักร้อง', vi: 'Ca sĩ' },

  // Abstract/Actions
  '잠': { en: 'Sleep', ja: '眠り', zh: '睡眠', es: 'Sueño', th: 'นอน', vi: 'Giấc ngủ' },
  '꿈': { en: 'Dream', ja: '夢', zh: '梦', es: 'Sueño', th: 'ความฝัน', vi: 'Giấc mơ' },
  '일': { en: 'Work', ja: '仕事', zh: '工作', es: 'Trabajo', th: 'งาน', vi: 'Công việc' },
  '놀이': { en: 'Play', ja: '遊び', zh: '游戏', es: 'Juego', th: 'เล่น', vi: 'Chơi' },
  '공부': { en: 'Study', ja: '勉強', zh: '学习', es: 'Estudio', th: 'เรียน', vi: 'Học' },
  '운동': { en: 'Exercise', ja: '運動', zh: '运动', es: 'Ejercicio', th: 'ออกกำลังกาย', vi: 'Tập thể dục' },
  '노래': { en: 'Song', ja: '歌', zh: '歌', es: 'Canción', th: 'เพลง', vi: 'Bài hát' },
  '춤': { en: 'Dance', ja: 'ダンス', zh: '舞蹈', es: 'Baile', th: 'เต้นรำ', vi: 'Nhảy' },
  '그림': { en: 'Picture', ja: '絵', zh: '画', es: 'Dibujo', th: 'รูปภาพ', vi: 'Tranh' },
  '사진': { en: 'Photo', ja: '写真', zh: '照片', es: 'Foto', th: 'ภาพถ่าย', vi: 'Ảnh' },

  // === INTERMEDIATE/ADVANCED WORDS ===

  // Food/Restaurant
  '식당': { en: 'Restaurant', ja: 'レストラン', zh: '餐厅', es: 'Restaurante', th: 'ร้านอาหาร', vi: 'Nhà hàng' },
  '음식점': { en: 'Eatery', ja: '飲食店', zh: '餐馆', es: 'Restaurante', th: 'ร้านอาหาร', vi: 'Quán ăn' },
  '커피숍': { en: 'Coffee shop', ja: 'カフェ', zh: '咖啡店', es: 'Cafetería', th: 'ร้านกาแฟ', vi: 'Quán cà phê' },
  '빵집': { en: 'Bakery', ja: 'パン屋', zh: '面包店', es: 'Panadería', th: 'ร้านขนมปัง', vi: 'Tiệm bánh mì' },
  '고깃집': { en: 'Meat restaurant', ja: '焼肉屋', zh: '烤肉店', es: 'Restaurante de carne', th: 'ร้านเนื้อย่าง', vi: 'Quán thịt nướng' },
  '분식집': { en: 'Snack bar', ja: '軽食店', zh: '小吃店', es: 'Snack bar', th: 'ร้านของว่าง', vi: 'Quán ăn vặt' },
  '치킨집': { en: 'Chicken restaurant', ja: 'チキン店', zh: '炸鸡店', es: 'Restaurante de pollo', th: 'ร้านไก่ทอด', vi: 'Quán gà rán' },
  '피자집': { en: 'Pizza restaurant', ja: 'ピザ屋', zh: '披萨店', es: 'Pizzería', th: 'ร้านพิซซ่า', vi: 'Tiệm pizza' },
  '패스트푸드': { en: 'Fast food', ja: 'ファストフード', zh: '快餐', es: 'Comida rápida', th: 'ฟาสต์ฟู้ด', vi: 'Đồ ăn nhanh' },
  '배달음식': { en: 'Delivery food', ja: 'デリバリー', zh: '外卖', es: 'Comida a domicilio', th: 'อาหารเดลิเวอรี่', vi: 'Đồ ăn giao hàng' },
  '한식당': { en: 'Korean restaurant', ja: '韓国料理店', zh: '韩餐厅', es: 'Restaurante coreano', th: 'ร้านอาหารเกาหลี', vi: 'Nhà hàng Hàn Quốc' },
  '중식당': { en: 'Chinese restaurant', ja: '中華料理店', zh: '中餐厅', es: 'Restaurante chino', th: 'ร้านอาหารจีน', vi: 'Nhà hàng Trung Quốc' },
  '일식당': { en: 'Japanese restaurant', ja: '日本料理店', zh: '日餐厅', es: 'Restaurante japonés', th: 'ร้านอาหารญี่ปุ่น', vi: 'Nhà hàng Nhật Bản' },

  // School
  '교실': { en: 'Classroom', ja: '教室', zh: '教室', es: 'Aula', th: 'ห้องเรียน', vi: 'Lớp học' },
  '급식실': { en: 'Cafeteria', ja: '給食室', zh: '食堂', es: 'Cafetería', th: 'โรงอาหาร', vi: 'Nhà ăn' },
  '도서실': { en: 'Library room', ja: '図書室', zh: '图书室', es: 'Sala de lectura', th: 'ห้องสมุด', vi: 'Phòng đọc sách' },
  '음악실': { en: 'Music room', ja: '音楽室', zh: '音乐室', es: 'Sala de música', th: 'ห้องดนตรี', vi: 'Phòng âm nhạc' },
  '미술실': { en: 'Art room', ja: '美術室', zh: '美术室', es: 'Sala de arte', th: 'ห้องศิลปะ', vi: 'Phòng mỹ thuật' },

  // Advanced - Places
  '자동판매기': { en: 'Vending machine', ja: '自動販売機', zh: '自动售货机', es: 'Máquina expendedora', th: 'ตู้ขายของอัตโนมัติ', vi: 'Máy bán hàng tự động' },
  '주민센터': { en: 'Community center', ja: '住民センター', zh: '社区中心', es: 'Centro comunitario', th: 'ศูนย์ชุมชน', vi: 'Trung tâm cộng đồng' },
  '문화센터': { en: 'Cultural center', ja: '文化センター', zh: '文化中心', es: 'Centro cultural', th: 'ศูนย์วัฒนธรรม', vi: 'Trung tâm văn hóa' },
  '스포츠센터': { en: 'Sports center', ja: 'スポーツセンター', zh: '体育中心', es: 'Centro deportivo', th: 'ศูนย์กีฬา', vi: 'Trung tâm thể thao' },
  '쇼핑센터': { en: 'Shopping center', ja: 'ショッピングセンター', zh: '购物中心', es: 'Centro comercial', th: 'ศูนย์การค้า', vi: 'Trung tâm mua sắm' },
  '놀이공원': { en: 'Amusement park', ja: '遊園地', zh: '游乐园', es: 'Parque de diversiones', th: 'สวนสนุก', vi: 'Công viên giải trí' },
  '동물원': { en: 'Zoo', ja: '動物園', zh: '动物园', es: 'Zoológico', th: 'สวนสัตว์', vi: 'Sở thú' },
  '수족관': { en: 'Aquarium', ja: '水族館', zh: '水族馆', es: 'Acuario', th: 'พิพิธภัณฑ์สัตว์น้ำ', vi: 'Thủy cung' },
  '미술관': { en: 'Art museum', ja: '美術館', zh: '美术馆', es: 'Museo de arte', th: 'พิพิธภัณฑ์ศิลปะ', vi: 'Bảo tàng mỹ thuật' },
  '전시회장': { en: 'Exhibition hall', ja: '展示会場', zh: '展览馆', es: 'Sala de exposiciones', th: 'ห้องนิทรรศการ', vi: 'Phòng triển lãm' },

  // Technology
  '대중교통': { en: 'Public transportation', ja: '公共交通', zh: '公共交通', es: 'Transporte público', th: 'ขนส่งสาธารณะ', vi: 'Giao thông công cộng' },
  '교통카드': { en: 'Transportation card', ja: '交通カード', zh: '交通卡', es: 'Tarjeta de transporte', th: 'บัตรโดยสาร', vi: 'Thẻ giao thông' },
  '신용카드': { en: 'Credit card', ja: 'クレジットカード', zh: '信用卡', es: 'Tarjeta de crédito', th: 'บัตรเครดิต', vi: 'Thẻ tín dụng' },
  '체크카드': { en: 'Debit card', ja: 'デビットカード', zh: '借记卡', es: 'Tarjeta de débito', th: 'บัตรเดบิต', vi: 'Thẻ ghi nợ' },
  '현금인출기': { en: 'ATM', ja: 'ATM', zh: 'ATM', es: 'Cajero automático', th: 'ตู้เอทีเอ็ม', vi: 'Máy ATM' },
  '무인계산대': { en: 'Self-checkout', ja: 'セルフレジ', zh: '自助结账', es: 'Caja automática', th: 'เครื่องชำระเงินอัตโนมัติ', vi: 'Quầy tự thanh toán' },
  '온라인쇼핑': { en: 'Online shopping', ja: 'オンラインショッピング', zh: '网上购物', es: 'Compras en línea', th: 'ช้อปปิ้งออนไลน์', vi: 'Mua sắm trực tuyến' },
  '배달서비스': { en: 'Delivery service', ja: '配達サービス', zh: '配送服务', es: 'Servicio de entrega', th: 'บริการจัดส่ง', vi: 'Dịch vụ giao hàng' },
  '인터넷뱅킹': { en: 'Internet banking', ja: 'インターネットバンキング', zh: '网上银行', es: 'Banca en línea', th: 'ธนาคารออนไลน์', vi: 'Ngân hàng trực tuyến' },
  '모바일뱅킹': { en: 'Mobile banking', ja: 'モバイルバンキング', zh: '手机银行', es: 'Banca móvil', th: 'โมบายแบงค์กิ้ง', vi: 'Ngân hàng di động' },
  '무선인터넷': { en: 'WiFi', ja: 'WiFi', zh: '无线网络', es: 'WiFi', th: 'ไวไฟ', vi: 'WiFi' },
  '충전케이블': { en: 'Charging cable', ja: '充電ケーブル', zh: '充电线', es: 'Cable de carga', th: 'สายชาร์จ', vi: 'Dây sạc' },
  '보조배터리': { en: 'Portable charger', ja: 'モバイルバッテリー', zh: '充电宝', es: 'Cargador portátil', th: 'แบตสำรอง', vi: 'Sạc dự phòng' },
  '블루투스': { en: 'Bluetooth', ja: 'ブルートゥース', zh: '蓝牙', es: 'Bluetooth', th: 'บลูทูธ', vi: 'Bluetooth' },
  '내비게이션': { en: 'Navigation', ja: 'ナビ', zh: '导航', es: 'Navegación', th: 'ระบบนำทาง', vi: 'Điều hướng' },
  '전기자동차': { en: 'Electric car', ja: '電気自動車', zh: '电动汽车', es: 'Coche eléctrico', th: 'รถยนต์ไฟฟ้า', vi: 'Xe điện' },
  '하이브리드': { en: 'Hybrid', ja: 'ハイブリッド', zh: '混合动力', es: 'Híbrido', th: 'ไฮบริด', vi: 'Xe hybrid' },
  '인공지능': { en: 'AI', ja: '人工知能', zh: '人工智能', es: 'Inteligencia artificial', th: 'ปัญญาประดิษฐ์', vi: 'Trí tuệ nhân tạo' },

  // Travel
  '주말여행': { en: 'Weekend trip', ja: '週末旅行', zh: '周末旅行', es: 'Viaje de fin de semana', th: 'ทริปสุดสัปดาห์', vi: 'Du lịch cuối tuần' },
  '해외여행': { en: 'Overseas travel', ja: '海外旅行', zh: '海外旅行', es: 'Viaje al extranjero', th: 'ท่องเที่ยวต่างประเทศ', vi: 'Du lịch nước ngoài' },
  '국내여행': { en: 'Domestic travel', ja: '国内旅行', zh: '国内旅行', es: 'Viaje nacional', th: 'ท่องเที่ยวในประเทศ', vi: 'Du lịch trong nước' },
  '단체여행': { en: 'Group tour', ja: '団体旅行', zh: '团体旅游', es: 'Viaje en grupo', th: 'ทัวร์กรุ๊ป', vi: 'Du lịch theo đoàn' },
  '배낭여행': { en: 'Backpacking', ja: 'バックパッカー', zh: '背包旅行', es: 'Mochilero', th: 'แบ็คแพ็ค', vi: 'Du lịch bụi' },
  '해외출장': { en: 'Business trip abroad', ja: '海外出張', zh: '海外出差', es: 'Viaje de negocios', th: 'เดินทางไปต่างประเทศ', vi: 'Công tác nước ngoài' },
  '휴가신청': { en: 'Vacation request', ja: '休暇申請', zh: '请假申请', es: 'Solicitud de vacaciones', th: 'ขอลาพักร้อน', vi: 'Xin nghỉ phép' },
  '연차휴가': { en: 'Annual leave', ja: '年次休暇', zh: '年假', es: 'Vacaciones anuales', th: 'ลาพักร้อนประจำปี', vi: 'Nghỉ phép năm' },
  '야근수당': { en: 'Overtime pay', ja: '残業手当', zh: '加班费', es: 'Pago de horas extras', th: 'ค่าล่วงเวลา', vi: 'Tiền làm thêm giờ' },
  '월급날': { en: 'Payday', ja: '給料日', zh: '发薪日', es: 'Día de pago', th: 'วันเงินเดือนออก', vi: 'Ngày lĩnh lương' },

  // More places (continued)
  '이탈리아': { en: 'Italy', ja: 'イタリア', zh: '意大利', es: 'Italia', th: 'อิตาลี', vi: 'Ý' },
  '고객센터': { en: 'Customer center', ja: 'カスタマーセンター', zh: '客服中心', es: 'Centro de atención', th: 'ศูนย์ลูกค้า', vi: 'Trung tâm khách hàng' },
  '예약시스템': { en: 'Reservation system', ja: '予約システム', zh: '预约系统', es: 'Sistema de reservas', th: 'ระบบจอง', vi: 'Hệ thống đặt chỗ' },
  '타코가게': { en: 'Taco shop', ja: 'タコス屋', zh: '墨西哥卷饼店', es: 'Taquería', th: 'ร้านทาโก้', vi: 'Quán taco' },
  '편의점음식': { en: 'Convenience store food', ja: 'コンビニ食品', zh: '便利店食品', es: 'Comida de tienda', th: 'อาหารร้านสะดวกซื้อ', vi: 'Đồ ăn cửa hàng tiện lợi' },
  '길거리음식': { en: 'Street food', ja: '屋台料理', zh: '街头小吃', es: 'Comida callejera', th: 'อาหารริมทาง', vi: 'Đồ ăn đường phố' },
  '자판기음료': { en: 'Vending machine drink', ja: '自販機飲料', zh: '自动售货机饮料', es: 'Bebida de máquina', th: 'เครื่องดื่มจากตู้', vi: 'Đồ uống máy bán hàng' },
};

/**
 * Get translated word meaning
 * @param korean - Korean word
 * @param language - Target language code
 * @returns Translated meaning or English fallback
 */
export function getWordTranslation(korean: string, language: SupportedLanguage): string {
  const translation = wordTranslations[korean];
  if (translation) {
    return translation[language] || translation.en;
  }
  // Return empty string if not found - will use english from word data
  return '';
}

/**
 * Check if a word has translations
 */
export function hasTranslation(korean: string): boolean {
  return korean in wordTranslations;
}
