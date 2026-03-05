/**
 * Korean History Terms Translation Database
 * Complete multilingual support for all history quiz content
 */

import { MultilingualText } from '@/types';

// ============================================
// Dynasty/Period Names
// ============================================
export const dynastyTerms: Record<string, MultilingualText> = {
  '고조선': { en: 'Gojoseon', ja: '古朝鮮', es: 'Gojoseon', th: 'โคโจซ็อน', vi: 'Cổ Triều Tiên', zh: '古朝鲜' },
  '삼국시대': { en: 'Three Kingdoms', ja: '三国時代', es: 'Tres Reinos', th: 'สามอาณาจักร', vi: 'Thời Tam Quốc', zh: '三国时代' },
  '고구려': { en: 'Goguryeo', ja: '高句麗', es: 'Goguryeo', th: 'โคกูรยอ', vi: 'Cao Câu Ly', zh: '高句丽' },
  '백제': { en: 'Baekje', ja: '百済', es: 'Baekje', th: 'แพกเจ', vi: 'Bách Tế', zh: '百济' },
  '신라': { en: 'Silla', ja: '新羅', es: 'Silla', th: 'ซิลลา', vi: 'Tân La', zh: '新罗' },
  '가야': { en: 'Gaya', ja: '伽耶', es: 'Gaya', th: 'กายา', vi: 'Già Da', zh: '伽倻' },
  '통일신라': { en: 'Unified Silla', ja: '統一新羅', es: 'Silla Unificada', th: 'ซิลลาแห่งเอกภาพ', vi: 'Tân La Thống Nhất', zh: '统一新罗' },
  '발해': { en: 'Balhae', ja: '渤海', es: 'Balhae', th: 'บัลแฮ', vi: 'Bột Hải', zh: '渤海' },
  '고려': { en: 'Goryeo', ja: '高麗', es: 'Goryeo', th: 'โครยอ', vi: 'Cao Ly', zh: '高丽' },
  '조선': { en: 'Joseon', ja: '朝鮮', es: 'Joseon', th: 'โชซ็อน', vi: 'Triều Tiên', zh: '朝鲜' },
  '조선 전기': { en: 'Early Joseon', ja: '朝鮮前期', es: 'Joseon Temprano', th: 'โชซ็อนตอนต้น', vi: 'Triều Tiên Sơ Kỳ', zh: '朝鲜前期' },
  '조선 후기': { en: 'Late Joseon', ja: '朝鮮後期', es: 'Joseon Tardío', th: 'โชซ็อนตอนปลาย', vi: 'Triều Tiên Hậu Kỳ', zh: '朝鲜后期' },
  '대한제국': { en: 'Korean Empire', ja: '大韓帝国', es: 'Imperio Coreano', th: 'จักรวรรดิเกาหลี', vi: 'Đế Quốc Đại Hàn', zh: '大韩帝国' },
  '후삼국': { en: 'Later Three Kingdoms', ja: '後三国', es: 'Tres Reinos Posteriores', th: 'สามอาณาจักรตอนหลัง', vi: 'Hậu Tam Quốc', zh: '后三国' },
};

// ============================================
// Historical Figures - Kings and Founders
// ============================================
export const kingTerms: Record<string, MultilingualText> = {
  '단군왕검': { en: 'Dangun Wanggeom', ja: '檀君王倹', es: 'Dangun Wanggeom', th: 'ดันกุนวังก็อม', vi: 'Đàn Quân Vương Kiệm', zh: '檀君王俭' },
  '주몽': { en: 'Jumong', ja: '朱蒙', es: 'Jumong', th: 'จูม็อง', vi: 'Chu Mông', zh: '朱蒙' },
  '온조': { en: 'Onjo', ja: '温祚', es: 'Onjo', th: 'ออนโจ', vi: 'Ôn Tộ', zh: '温祚' },
  '박혁거세': { en: 'Bak Hyeokgeose', ja: '朴赫居世', es: 'Bak Hyeokgeose', th: 'บักฮย็อกกอเซ', vi: 'Phác Hách Cư Thế', zh: '朴赫居世' },
  '김수로왕': { en: 'King Suro', ja: '金首露王', es: 'Rey Suro', th: 'กษัตริย์ซูโร', vi: 'Vua Kim Thủ Lộ', zh: '金首露王' },
  '광개토대왕': { en: 'King Gwanggaeto the Great', ja: '広開土大王', es: 'Rey Gwanggaeto el Grande', th: 'กษัตริย์ควังแกโตมหาราช', vi: 'Quảng Khai Thổ Đại Vương', zh: '广开土大王' },
  '장수왕': { en: 'King Jangsu', ja: '長寿王', es: 'Rey Jangsu', th: 'กษัตริย์จังซู', vi: 'Vua Trường Thọ', zh: '长寿王' },
  '소수림왕': { en: 'King Sosurim', ja: '小獣林王', es: 'Rey Sosurim', th: 'กษัตริย์โซซูริม', vi: 'Vua Tiểu Thú Lâm', zh: '小兽林王' },
  '고국원왕': { en: 'King Gogugwon', ja: '故国原王', es: 'Rey Gogugwon', th: 'กษัตริย์โคกุกวอน', vi: 'Vua Cố Quốc Nguyên', zh: '故国原王' },
  '왕건': { en: 'Wang Geon (King Taejo)', ja: '王建（太祖）', es: 'Wang Geon (Rey Taejo)', th: 'วังก็อน (กษัตริย์แทโจ)', vi: 'Vương Kiến (Thái Tổ)', zh: '王建（太祖）' },
  '광종': { en: 'King Gwangjong', ja: '光宗', es: 'Rey Gwangjong', th: 'กษัตริย์ควังจง', vi: 'Vua Quang Tông', zh: '光宗' },
  '태조': { en: 'King Taejo', ja: '太祖', es: 'Rey Taejo', th: 'กษัตริย์แทโจ', vi: 'Vua Thái Tổ', zh: '太祖' },
  '태종': { en: 'King Taejong', ja: '太宗', es: 'Rey Taejong', th: 'กษัตริย์แทจง', vi: 'Vua Thái Tông', zh: '太宗' },
  '세종': { en: 'King Sejong', ja: '世宗', es: 'Rey Sejong', th: 'กษัตริย์เซจง', vi: 'Vua Thế Tông', zh: '世宗' },
  '세종대왕': { en: 'King Sejong the Great', ja: '世宗大王', es: 'Rey Sejong el Grande', th: 'กษัตริย์เซจงมหาราช', vi: 'Vua Thế Tông Đại Vương', zh: '世宗大王' },
  '성종': { en: 'King Seongjong', ja: '成宗', es: 'Rey Seongjong', th: 'กษัตริย์ซ็องจง', vi: 'Vua Thành Tông', zh: '成宗' },
  '현종': { en: 'King Hyeonjong', ja: '顕宗', es: 'Rey Hyeonjong', th: 'กษัตริย์ฮย็อนจง', vi: 'Vua Hiển Tông', zh: '显宗' },
  '이성계': { en: 'Yi Seong-gye (King Taejo)', ja: '李成桂（太祖）', es: 'Yi Seong-gye (Rey Taejo)', th: 'อีซ็องกเย (กษัตริย์แทโจ)', vi: 'Lý Thành Quế (Thái Tổ)', zh: '李成桂（太祖）' },
  '영조': { en: 'King Yeongjo', ja: '英祖', es: 'Rey Yeongjo', th: 'กษัตริย์ย็องโจ', vi: 'Vua Anh Tổ', zh: '英祖' },
  '정조': { en: 'King Jeongjo', ja: '正祖', es: 'Rey Jeongjo', th: 'กษัตริย์จ็องโจ', vi: 'Vua Chính Tổ', zh: '正祖' },
  '순조': { en: 'King Sunjo', ja: '純祖', es: 'Rey Sunjo', th: 'กษัตริย์ซุนโจ', vi: 'Vua Thuần Tổ', zh: '纯祖' },
  '헌종': { en: 'King Heonjong', ja: '憲宗', es: 'Rey Heonjong', th: 'กษัตริย์ฮ็อนจง', vi: 'Vua Hiến Tông', zh: '宪宗' },
  '철종': { en: 'King Cheoljong', ja: '哲宗', es: 'Rey Cheoljong', th: 'กษัตริย์ช็อลจง', vi: 'Vua Triết Tông', zh: '哲宗' },
  '고종': { en: 'Emperor Gojong', ja: '高宗', es: 'Emperador Gojong', th: 'จักรพรรดิโคจง', vi: 'Hoàng Đế Cao Tông', zh: '高宗' },
  '순종': { en: 'Emperor Sunjong', ja: '純宗', es: 'Emperador Sunjong', th: 'จักรพรรดิซุนจง', vi: 'Hoàng Đế Thuần Tông', zh: '纯宗' },
  '경순왕': { en: 'King Gyeongsun', ja: '敬順王', es: 'Rey Gyeongsun', th: 'กษัตริย์คย็องซุน', vi: 'Vua Kính Thuận', zh: '敬顺王' },
};

// ============================================
// Historical Figures - Generals and Heroes
// ============================================
export const heroTerms: Record<string, MultilingualText> = {
  '을지문덕': { en: 'General Eulji Mundeok', ja: '乙支文徳', es: 'General Eulji Mundeok', th: 'นายพลอึลจีมุนด็อก', vi: 'Tướng Ất Chi Văn Đức', zh: '乙支文德' },
  '계백': { en: 'General Gyebaek', ja: '階伯', es: 'General Gyebaek', th: 'นายพลคเยแบก', vi: 'Tướng Giai Bách', zh: '阶伯' },
  '김유신': { en: 'General Kim Yu-sin', ja: '金庾信', es: 'General Kim Yu-sin', th: 'นายพลคิมยูชิน', vi: 'Tướng Kim Dữ Tín', zh: '金庾信' },
  '강감찬': { en: 'General Gang Gam-chan', ja: '姜邯賛', es: 'General Gang Gam-chan', th: 'นายพลคังกัมชาน', vi: 'Tướng Khương Hàm Tán', zh: '姜邯赞' },
  '서희': { en: 'Seo Hui', ja: '徐熙', es: 'Seo Hui', th: 'ซอฮี', vi: 'Từ Hy', zh: '徐熙' },
  '윤관': { en: 'General Yun Gwan', ja: '尹瓘', es: 'General Yun Gwan', th: 'นายพลยุนกวาน', vi: 'Tướng Doãn Quán', zh: '尹瓘' },
  '최영': { en: 'General Choe Yeong', ja: '崔瑩', es: 'General Choe Yeong', th: 'นายพลช็อยย็อง', vi: 'Tướng Thôi Oánh', zh: '崔莹' },
  '이순신': { en: 'Admiral Yi Sun-sin', ja: '李舜臣', es: 'Almirante Yi Sun-sin', th: 'พลเรือเอกอีซุนชิน', vi: 'Đô Đốc Lý Thuấn Thần', zh: '李舜臣' },
  '권율': { en: 'General Gwon Yul', ja: '権慄', es: 'General Gwon Yul', th: 'นายพลควอนยุล', vi: 'Tướng Quyền Lật', zh: '权栗' },
  '안중근': { en: 'An Jung-geun', ja: '安重根', es: 'An Jung-geun', th: 'อันจุงกึน', vi: 'An Trọng Căn', zh: '安重根' },
};

// ============================================
// Historical Figures - Scholars and Others
// ============================================
export const scholarTerms: Record<string, MultilingualText> = {
  '최충': { en: 'Choe Chung', ja: '崔沖', es: 'Choe Chung', th: 'ช็อยชุง', vi: 'Thôi Xung', zh: '崔冲' },
  '정몽주': { en: 'Jeong Mong-ju', ja: '鄭夢周', es: 'Jeong Mong-ju', th: 'จ็องมงจู', vi: 'Trịnh Mộng Chu', zh: '郑梦周' },
  '정도전': { en: 'Jeong Do-jeon', ja: '鄭道伝', es: 'Jeong Do-jeon', th: 'จ็องโดจ็อน', vi: 'Trịnh Đạo Truyền', zh: '郑道传' },
  '이방원': { en: 'Yi Bang-won', ja: '李芳遠', es: 'Yi Bang-won', th: 'อีบังวอน', vi: 'Lý Phương Viễn', zh: '李芳远' },
  '장영실': { en: 'Jang Yeong-sil', ja: '蒋英実', es: 'Jang Yeong-sil', th: 'จังย็องชิล', vi: 'Tưởng Anh Thực', zh: '蒋英实' },
  '신사임당': { en: 'Shin Saimdang', ja: '申師任堂', es: 'Shin Saimdang', th: 'ชินไซอิมดัง', vi: 'Thân Sư Nhậm Đường', zh: '申师任堂' },
  '이이': { en: 'Yi I (Yulgok)', ja: '李珥（栗谷）', es: 'Yi I (Yulgok)', th: 'อีอี (ยุลกก)', vi: 'Lý Nhĩ (Lật Cốc)', zh: '李珥（栗谷）' },
  '이황': { en: 'Yi Hwang (Toegye)', ja: '李滉（退渓）', es: 'Yi Hwang (Toegye)', th: 'อีฮวัง (โทเกย)', vi: 'Lý Hoảng (Thoái Khê)', zh: '李滉（退溪）' },
  '정약용': { en: 'Jeong Yak-yong (Dasan)', ja: '丁若鏞（茶山）', es: 'Jeong Yak-yong (Dasan)', th: 'จ็องยักยง (ดาซาน)', vi: 'Đinh Nhược Dung (Trà Sơn)', zh: '丁若镛（茶山）' },
  '김정희': { en: 'Kim Jeong-hui (Chusa)', ja: '金正喜（秋史）', es: 'Kim Jeong-hui (Chusa)', th: 'คิมจ็องฮี (ชูซา)', vi: 'Kim Chính Hỷ (Thu Sử)', zh: '金正喜（秋史）' },
  '이익': { en: 'Yi Ik', ja: '李瀷', es: 'Yi Ik', th: 'อีอิก', vi: 'Lý Ích', zh: '李瀷' },
  '박지원': { en: 'Pak Chi-won', ja: '朴趾源', es: 'Pak Chi-won', th: 'บักจีวอน', vi: 'Phác Chỉ Nguyên', zh: '朴趾源' },
  '박제가': { en: 'Pak Je-ga', ja: '朴斉家', es: 'Pak Je-ga', th: 'บักเจกา', vi: 'Phác Tề Gia', zh: '朴齐家' },
  '홍대용': { en: 'Hong Dae-yong', ja: '洪大容', es: 'Hong Dae-yong', th: 'ฮงแดยง', vi: 'Hồng Đại Dung', zh: '洪大容' },
  '이규보': { en: 'Yi Gyu-bo', ja: '李奎報', es: 'Yi Gyu-bo', th: 'อีกยูโบ', vi: 'Lý Khuê Báo', zh: '李奎报' },
  '최제우': { en: 'Choe Je-u', ja: '崔済愚', es: 'Choe Je-u', th: 'ช็อยเจอู', vi: 'Thôi Tế Ngu', zh: '崔济愚' },
  '전봉준': { en: 'Jeon Bong-jun', ja: '全琫準', es: 'Jeon Bong-jun', th: 'จ็อนบงจุน', vi: 'Toàn Phụng Chuẩn', zh: '全琫准' },
  '손병희': { en: 'Son Byeong-hui', ja: '孫秉熙', es: 'Son Byeong-hui', th: 'ซนบย็องฮี', vi: 'Tôn Bỉnh Hy', zh: '孙秉熙' },
  '김옥균': { en: 'Kim Ok-gyun', ja: '金玉均', es: 'Kim Ok-gyun', th: 'คิมอกกยุน', vi: 'Kim Ngọc Quân', zh: '金玉均' },
  '이토 히로부미': { en: 'Ito Hirobumi', ja: '伊藤博文', es: 'Ito Hirobumi', th: 'อิโตะ ฮิโระบูมิ', vi: 'Itō Hirobumi', zh: '伊藤博文' },
  '견훤': { en: 'Gyeon Hwon', ja: '甄萱', es: 'Gyeon Hwon', th: 'คย็อนฮวอน', vi: 'Kiến Huyên', zh: '甄萱' },
  '궁예': { en: 'Gung Ye', ja: '弓裔', es: 'Gung Ye', th: 'คุงเย', vi: 'Cung Duệ', zh: '弓裔' },
  '김구': { en: 'Kim Gu', ja: '金九', es: 'Kim Gu', th: 'คิมกู', vi: 'Kim Cửu', zh: '金九' },
  '윤봉길': { en: 'Yun Bong-gil', ja: '尹奉吉', es: 'Yun Bong-gil', th: 'ยุนบงกิล', vi: 'Doãn Phụng Cát', zh: '尹奉吉' },
  '이봉창': { en: 'Yi Bong-chang', ja: '李奉昌', es: 'Yi Bong-chang', th: 'อีบงชัง', vi: 'Lý Phụng Xương', zh: '李奉昌' },
  '최무선': { en: 'Choe Mu-seon', ja: '崔茂宣', es: 'Choe Mu-seon', th: 'ช็อยมูซ็อน', vi: 'Thôi Mậu Tuyên', zh: '崔茂宣' },
  '이천': { en: 'Yi Cheon', ja: '李蕆', es: 'Yi Cheon', th: 'อีช็อน', vi: 'Lý Thiên', zh: '李蕆' },
};

// ============================================
// Historical Events
// ============================================
export const eventTerms: Record<string, MultilingualText> = {
  '고조선 건국': { en: 'Foundation of Gojoseon', ja: '古朝鮮建国', es: 'Fundación de Gojoseon', th: 'ก่อตั้งโคโจซ็อน', vi: 'Thành lập Cổ Triều Tiên', zh: '古朝鲜建国' },
  '삼국통일': { en: 'Unification of Three Kingdoms', ja: '三国統一', es: 'Unificación de los Tres Reinos', th: 'รวมสามอาณาจักร', vi: 'Thống nhất Tam Quốc', zh: '三国统一' },
  '고려 건국': { en: 'Foundation of Goryeo', ja: '高麗建国', es: 'Fundación de Goryeo', th: 'ก่อตั้งโครยอ', vi: 'Thành lập Cao Ly', zh: '高丽建国' },
  '후삼국 통일': { en: 'Unification of Later Three Kingdoms', ja: '後三国統一', es: 'Unificación de los Tres Reinos Posteriores', th: 'รวมสามอาณาจักรตอนหลัง', vi: 'Thống nhất Hậu Tam Quốc', zh: '后三国统一' },
  '조선 건국': { en: 'Foundation of Joseon', ja: '朝鮮建国', es: 'Fundación de Joseon', th: 'ก่อตั้งโชซ็อน', vi: 'Thành lập Triều Tiên', zh: '朝鲜建国' },
  '한양 천도': { en: 'Moving capital to Hanyang', ja: '漢陽遷都', es: 'Traslado de capital a Hanyang', th: 'ย้ายเมืองหลวงไปฮันยาง', vi: 'Dời đô đến Hán Dương', zh: '迁都汉阳' },
  '훈민정음 창제': { en: 'Creation of Hunminjeongeum (Hangeul)', ja: '訓民正音創製', es: 'Creación de Hunminjeongeum (Hangeul)', th: 'สร้างฮุนมินจ็องอึม (ฮันกึล)', vi: 'Sáng tạo Huấn Dân Chính Âm (Hangeul)', zh: '创制训民正音（韩文）' },
  '훈민정음 반포': { en: 'Promulgation of Hunminjeongeum', ja: '訓民正音頒布', es: 'Promulgación de Hunminjeongeum', th: 'ประกาศใช้ฮุนมินจ็องอึม', vi: 'Ban bố Huấn Dân Chính Âm', zh: '颁布训民正音' },
  '임진왜란': { en: 'Imjin War (Japanese Invasion of 1592)', ja: '壬辰倭乱（文禄の役）', es: 'Guerra Imjin (Invasión Japonesa de 1592)', th: 'สงครามอิมจิน (ญี่ปุ่นรุกราน 1592)', vi: 'Chiến tranh Nhâm Thìn (Nhật xâm lược 1592)', zh: '壬辰倭乱（1592年日本入侵）' },
  '정유재란': { en: 'Jeongyu War (Second Japanese Invasion)', ja: '丁酉再乱（慶長の役）', es: 'Guerra Jeongyu (Segunda Invasión Japonesa)', th: 'สงครามจ็องยู (ญี่ปุ่นรุกรานครั้งที่ 2)', vi: 'Chiến tranh Đinh Dậu (Nhật xâm lược lần 2)', zh: '丁酉再乱（第二次日本入侵）' },
  '정묘호란': { en: 'Jeongmyo War (Later Jin Invasion)', ja: '丁卯胡乱', es: 'Guerra Jeongmyo (Invasión de los Jin Posteriores)', th: 'สงครามจ็องมโย (ชินรุกราน)', vi: 'Chiến tranh Đinh Mão (Hậu Kim xâm lược)', zh: '丁卯胡乱（后金入侵）' },
  '병자호란': { en: 'Byeongja War (Qing Invasion of 1636)', ja: '丙子胡乱', es: 'Guerra Byeongja (Invasión Qing de 1636)', th: 'สงครามบย็องจา (ชิงรุกราน 1636)', vi: 'Chiến tranh Bính Tý (Thanh xâm lược 1636)', zh: '丙子胡乱（1636年清朝入侵）' },
  '병인양요': { en: 'French Campaign against Korea (1866)', ja: '丙寅洋擾', es: 'Campaña Francesa contra Corea (1866)', th: 'ฝรั่งเศสโจมตีเกาหลี (1866)', vi: 'Pháp tấn công Triều Tiên (1866)', zh: '丙寅洋扰（1866年法国入侵）' },
  '신미양요': { en: 'United States Expedition to Korea (1871)', ja: '辛未洋擾', es: 'Expedición de EE.UU. a Corea (1871)', th: 'สหรัฐโจมตีเกาหลี (1871)', vi: 'Mỹ tấn công Triều Tiên (1871)', zh: '辛未洋扰（1871年美国入侵）' },
  '동학농민운동': { en: 'Donghak Peasant Revolution', ja: '東学農民運動', es: 'Revolución Campesina Donghak', th: 'การปฏิวัติชาวนาดงฮัก', vi: 'Cách mạng Nông dân Đông Học', zh: '东学农民运动' },
  '대한제국 선포': { en: 'Proclamation of the Korean Empire', ja: '大韓帝国宣布', es: 'Proclamación del Imperio Coreano', th: 'ประกาศจักรวรรดิเกาหลี', vi: 'Tuyên bố Đế quốc Đại Hàn', zh: '宣布大韩帝国' },
  '과거제 시행': { en: 'Implementation of Civil Service Exam', ja: '科挙制施行', es: 'Implementación del Examen de Servicio Civil', th: 'ระบบสอบราชการ', vi: 'Thực hiện Khoa cử', zh: '实行科举制' },
  '살수대첩': { en: 'Battle of Salsu', ja: '薩水大捷', es: 'Batalla de Salsu', th: 'ยุทธการซัลซู', vi: 'Đại thắng Tát Thủy', zh: '萨水大捷' },
  '귀주대첩': { en: 'Battle of Gwiju', ja: '亀州大捷', es: 'Batalla de Gwiju', th: 'ยุทธการกวีจู', vi: 'Đại thắng Quý Châu', zh: '龟州大捷' },
  '황산벌 전투': { en: 'Battle of Hwangsanbeol', ja: '黄山伐の戦い', es: 'Batalla de Hwangsanbeol', th: 'ยุทธการฮวังซันบ็อล', vi: 'Trận Hoàng Sơn Phạt', zh: '黄山伐战斗' },
  '한산도대첩': { en: 'Battle of Hansan Island', ja: '閑山島大捷', es: 'Batalla de la Isla Hansan', th: 'ยุทธการเกาะฮันซัน', vi: 'Đại thắng đảo Hàn Sơn', zh: '闲山岛大捷' },
  '명량해전': { en: 'Battle of Myeongnyang', ja: '鳴梁海戦', es: 'Batalla de Myeongnyang', th: 'ยุทธนาวีมย็องนยาง', vi: 'Hải chiến Minh Lương', zh: '鸣梁海战' },
  '불교 전래': { en: 'Introduction of Buddhism', ja: '仏教伝来', es: 'Introducción del Budismo', th: 'พุทธศาสนาเข้ามา', vi: 'Phật giáo truyền vào', zh: '佛教传入' },
  '동학 창시': { en: 'Foundation of Donghak', ja: '東学創始', es: 'Fundación de Donghak', th: 'ก่อตั้งดงฮัก', vi: 'Sáng lập Đông Học', zh: '创立东学' },
};

// ============================================
// Achievements and Inventions
// ============================================
export const achievementTerms: Record<string, MultilingualText> = {
  '훈민정음': { en: 'Hunminjeongeum (Hangeul)', ja: '訓民正音（ハングル）', es: 'Hunminjeongeum (Hangeul)', th: 'ฮุนมินจ็องอึม (ฮันกึล)', vi: 'Huấn Dân Chính Âm (Hangeul)', zh: '训民正音（韩文）' },
  '측우기': { en: 'Cheugugi (Rain Gauge)', ja: '測雨器', es: 'Cheugugi (Pluviómetro)', th: 'เครื่องวัดฝน', vi: 'Trắc vũ khí (Máy đo mưa)', zh: '测雨器' },
  '자격루': { en: 'Jagyeongnu (Water Clock)', ja: '自撃漏（水時計）', es: 'Jagyeongnu (Reloj de Agua)', th: 'นาฬิกาน้ำ', vi: 'Tự Kích Lậu (Đồng hồ nước)', zh: '自击漏（水钟）' },
  '혼천의': { en: 'Honcheonui (Armillary Sphere)', ja: '渾天儀', es: 'Honcheonui (Esfera Armilar)', th: 'ทรงกลมท้องฟ้า', vi: 'Hỗn Thiên Nghi', zh: '浑天仪' },
  '앙부일구': { en: 'Angbuilgu (Sundial)', ja: '仰釜日晷（日時計）', es: 'Angbuilgu (Reloj de Sol)', th: 'นาฬิกาแดด', vi: 'Ngưỡng Phủ Nhật Quỹ (Đồng hồ mặt trời)', zh: '仰釜日晷（日晷）' },
  '금속활자': { en: 'Metal Movable Type', ja: '金属活字', es: 'Tipo Móvil Metálico', th: 'แท่นพิมพ์โลหะ', vi: 'Hoạt tự kim loại', zh: '金属活字' },
  '팔만대장경': { en: 'Tripitaka Koreana', ja: '八万大蔵経', es: 'Tripitaka Koreana', th: 'พระไตรปิฎกเกาหลี', vi: 'Bát Vạn Đại Tạng Kinh', zh: '八万大藏经' },
  '직지심체요절': { en: 'Jikji (Oldest Metal Print Book)', ja: '直指心体要節', es: 'Jikji (Libro Impreso en Metal más Antiguo)', th: 'จิกจี (หนังสือพิมพ์โลหะเก่าแก่ที่สุด)', vi: 'Trực Chỉ Tâm Thể Yếu Tiết', zh: '直指心体要节' },
  '수원 화성': { en: 'Hwaseong Fortress', ja: '水原華城', es: 'Fortaleza Hwaseong', th: 'ป้อมฮวาซ็อง', vi: 'Pháo đài Hoa Thành', zh: '水原华城' },
  '거북선': { en: 'Geobukseon (Turtle Ship)', ja: '亀甲船', es: 'Geobukseon (Barco Tortuga)', th: 'เรือเต่า', vi: 'Thuyền rùa', zh: '龟船' },
  '별무반': { en: 'Byeolmuban (Special Military Unit)', ja: '別武班', es: 'Byeolmuban (Unidad Militar Especial)', th: 'กองทัพพิเศษ', vi: 'Biệt Vũ Ban', zh: '别武班' },
  '동북 9성': { en: 'Nine Fortresses in Northeast', ja: '東北九城', es: 'Nueve Fortalezas del Noreste', th: 'ป้อม 9 แห่งทางตะวันออกเฉียงเหนือ', vi: '9 pháo đài Đông Bắc', zh: '东北九城' },
  '강동 6주': { en: 'Six Provinces of Gangdong', ja: '江東六州', es: 'Seis Provincias de Gangdong', th: '6 จังหวัดคังดง', vi: '6 châu Giang Đông', zh: '江东六州' },
  '규장각': { en: 'Kyujanggak (Royal Library)', ja: '奎章閣', es: 'Kyujanggak (Biblioteca Real)', th: 'หอสมุดหลวง', vi: 'Khuê Chương Các', zh: '奎章阁' },
  '장용영': { en: 'Jangyongyeong (Royal Guard)', ja: '壮勇営', es: 'Jangyongyeong (Guardia Real)', th: 'กองทหารราชวัง', vi: 'Tráng Dũng Dinh', zh: '壮勇营' },
  '목민심서': { en: 'Mongmin Simseo (Book on Governance)', ja: '牧民心書', es: 'Mongmin Simseo (Libro sobre Gobernanza)', th: 'หนังสือการปกครอง', vi: 'Mục Dân Tâm Thư', zh: '牧民心书' },
  '경세유표': { en: 'Gyeongse Yupyo (Essays on Statecraft)', ja: '経世遺表', es: 'Gyeongse Yupyo (Ensayos sobre Gobierno)', th: 'บทความการปกครอง', vi: 'Kinh Thế Di Biểu', zh: '经世遗表' },
  '추사체': { en: 'Chusa Calligraphy Style', ja: '秋史体', es: 'Estilo Caligráfico Chusa', th: 'รูปแบบอักษรชูซา', vi: 'Thể Thu Sử', zh: '秋史体' },
  '세한도': { en: 'Sehandō (Painting)', ja: '歳寒図', es: 'Sehandō (Pintura)', th: 'ภาพวาดเซฮันโด', vi: 'Tranh Tuế Hàn Đồ', zh: '岁寒图' },
  '9재 학당': { en: '9 Jae Academy', ja: '九斎学堂', es: 'Academia 9 Jae', th: 'สถาบัน 9 แจ', vi: 'Cửu Trai Học Đường', zh: '九斋学堂' },
  '10만 양병설': { en: 'Proposal for 100,000 Troops', ja: '十万養兵説', es: 'Propuesta de 100,000 Tropas', th: 'ข้อเสนอทหาร 100,000 คน', vi: 'Thuyết Dưỡng binh 10 vạn', zh: '十万养兵说' },
  '경국대전': { en: 'Gyeongguk Daejeon (National Code)', ja: '経国大典', es: 'Gyeongguk Daejeon (Código Nacional)', th: 'ประมวลกฎหมายแห่งชาติ', vi: 'Kinh Quốc Đại Điển', zh: '经国大典' },
  '집현전': { en: 'Jiphyeonjeon (Hall of Worthies)', ja: '集賢殿', es: 'Jiphyeonjeon (Sala de los Dignos)', th: 'หอนักปราชญ์', vi: 'Tập Hiền Điện', zh: '集贤殿' },
  '6진 개척': { en: 'Establishment of Six Garrisons', ja: '六鎮開拓', es: 'Establecimiento de Seis Guarniciones', th: 'ตั้งกองทหาร 6 แห่ง', vi: 'Khai thác Lục Trấn', zh: '开拓六镇' },
  '영토 확장': { en: 'Territorial Expansion', ja: '領土拡張', es: 'Expansión Territorial', th: 'ขยายดินแดน', vi: 'Mở rộng lãnh thổ', zh: '领土扩张' },
  '노비안검법': { en: 'Slave Investigation Act', ja: '奴婢按検法', es: 'Ley de Investigación de Esclavos', th: 'กฎหมายตรวจสอบทาส', vi: 'Luật Tra nô tỳ', zh: '奴婢按检法' },
  '훈요 10조': { en: 'Ten Injunctions', ja: '訓要十条', es: 'Diez Mandamientos', th: '10 คำสอน', vi: 'Huấn yếu Thập điều', zh: '训要十条' },
  '탕평책': { en: 'Tangpyeong Policy (Impartiality)', ja: '蕩平策', es: 'Política Tangpyeong (Imparcialidad)', th: 'นโยบายความเป็นกลาง', vi: 'Chính sách Thang Bình', zh: '荡平策' },
  '동양평화론': { en: 'Essay on Eastern Peace', ja: '東洋平和論', es: 'Ensayo sobre la Paz Oriental', th: 'เรียงความสันติภาพตะวันออก', vi: 'Luận Đông Dương Hòa Bình', zh: '东洋和平论' },
  '폐정개혁안': { en: 'Reform Proposals', ja: '弊政改革案', es: 'Propuestas de Reforma', th: 'ข้อเสนอการปฏิรูป', vi: 'Phương án Cải cách', zh: '弊政改革案' },
  '황토현 전투': { en: 'Battle of Hwangto-hyeon', ja: '黄土峴の戦い', es: 'Batalla de Hwangto-hyeon', th: 'ยุทธการฮวังโทฮย็อน', vi: 'Trận Hoàng Thổ Hiện', zh: '黄土岘战斗' },
  '이토 히로부미 처단': { en: 'Assassination of Ito Hirobumi', ja: '伊藤博文処断', es: 'Asesinato de Ito Hirobumi', th: 'สังหารอิโตะ ฮิโระบูมิ', vi: 'Ám sát Itō Hirobumi', zh: '处决伊藤博文' },
  '위화도 회군': { en: 'Wihwado Retreat', ja: '威化島回軍', es: 'Retirada de Wihwado', th: 'การถอยทัพวีฮวาโด', vi: 'Hồi quân Uy Hóa Đảo', zh: '威化岛回军' },
};

// ============================================
// Ideologies and Concepts
// ============================================
export const conceptTerms: Record<string, MultilingualText> = {
  '홍익인간': { en: 'Hongik Ingan (Benefit Humanity)', ja: '弘益人間', es: 'Hongik Ingan (Beneficiar a la Humanidad)', th: 'ฮงอิกอินกัน (เพื่อมนุษยชาติ)', vi: 'Hoằng Ích Nhân Gian (Lợi ích nhân loại)', zh: '弘益人间（造福人类）' },
  '인내천': { en: 'Innaecheon (Human is Heaven)', ja: '人乃天', es: 'Innaecheon (El Humano es el Cielo)', th: 'อินแนช็อน (มนุษย์คือสวรรค์)', vi: 'Nhân Nãi Thiên (Con người là Trời)', zh: '人乃天（人即天）' },
  '충효': { en: 'Loyalty and Filial Piety', ja: '忠孝', es: 'Lealtad y Piedad Filial', th: 'ความจงรักและกตัญญู', vi: 'Trung Hiếu', zh: '忠孝' },
  '경천애인': { en: 'Reverence for Heaven, Love for People', ja: '敬天愛人', es: 'Reverencia al Cielo, Amor por la Gente', th: 'เคารพสวรรค์ รักมนุษย์', vi: 'Kính Thiên Ái Nhân', zh: '敬天爱人' },
  '실학': { en: 'Silhak (Practical Learning)', ja: '実学', es: 'Silhak (Aprendizaje Práctico)', th: 'ซิลฮัก (การเรียนรู้เชิงปฏิบัติ)', vi: 'Thực Học', zh: '实学' },
  '동학': { en: 'Donghak (Eastern Learning)', ja: '東学', es: 'Donghak (Aprendizaje Oriental)', th: 'ดงฮัก (การเรียนรู้ตะวันออก)', vi: 'Đông Học', zh: '东学' },
  '성학집요': { en: 'Seonghak Jibyo (Essentials of Sagely Learning)', ja: '聖学輯要', es: 'Seonghak Jibyo (Esenciales del Aprendizaje Sabio)', th: 'ซ็องฮักจิบโย', vi: 'Thánh Học Tập Yếu', zh: '圣学辑要' },
  '기호학파': { en: 'Giho School', ja: '畿湖学派', es: 'Escuela Giho', th: 'สำนักกิโฮ', vi: 'Trường phái Kỳ Hồ', zh: '畿湖学派' },
  '해동공자': { en: 'Confucius of the East', ja: '海東孔子', es: 'Confucio del Este', th: 'ขงจื๊อตะวันออก', vi: 'Khổng Tử phương Đông', zh: '海东孔子' },
};

// ============================================
// Places
// ============================================
export const placeTerms: Record<string, MultilingualText> = {
  '한양': { en: 'Hanyang (Seoul)', ja: '漢陽（ソウル）', es: 'Hanyang (Seúl)', th: 'ฮันยาง (โซล)', vi: 'Hán Dương (Seoul)', zh: '汉阳（首尔）' },
  '개성': { en: 'Gaeseong', ja: '開城', es: 'Gaeseong', th: 'แคซ็อง', vi: 'Khai Thành', zh: '开城' },
  '평양': { en: 'Pyongyang', ja: '平壌', es: 'Pyongyang', th: 'พย็องยาง', vi: 'Bình Nhưỡng', zh: '平壤' },
  '서울': { en: 'Seoul', ja: 'ソウル', es: 'Seúl', th: 'โซล', vi: 'Seoul', zh: '首尔' },
  '부산': { en: 'Busan', ja: '釜山', es: 'Busan', th: 'ปูซาน', vi: 'Busan', zh: '釜山' },
  '강화도': { en: 'Ganghwa Island', ja: '江華島', es: 'Isla Ganghwa', th: 'เกาะคังฮวา', vi: 'Đảo Giang Hoa', zh: '江华岛' },
};

// ============================================
// Misc Terms
// ============================================
export const miscTerms: Record<string, MultilingualText> = {
  '23전 23승': { en: '23 battles, 23 victories', ja: '23戦23勝', es: '23 batallas, 23 victorias', th: '23 รบ 23 ชนะ', vi: '23 trận 23 thắng', zh: '23战23胜' },
  '무구정광대다라니경': { en: 'Pure Light Dharani Sutra', ja: '無垢浄光大陀羅尼経', es: 'Sutra Dharani de la Luz Pura', th: 'พระสูตรแห่งแสงบริสุทธิ์', vi: 'Vô Cấu Tịnh Quang Đại Đà La Ni Kinh', zh: '无垢净光大陀罗尼经' },
  '거중기': { en: 'Geojunggi (Crane)', ja: '挙重機', es: 'Geojunggi (Grúa)', th: 'เครื่องยกของหนัก', vi: 'Cử trọng cơ (Cần cẩu)', zh: '举重机' },
  '묵음(소리 없음)': { en: 'Silent (no sound)', ja: '無音', es: 'Silencioso', th: 'เงียบ (ไม่มีเสียง)', vi: 'Im lặng', zh: '无声' },
  '미국': { en: 'United States', ja: 'アメリカ', es: 'Estados Unidos', th: 'สหรัฐอเมริกา', vi: 'Hoa Kỳ', zh: '美国' },
  '영국': { en: 'United Kingdom', ja: 'イギリス', es: 'Reino Unido', th: 'สหราชอาณาจักร', vi: 'Anh Quốc', zh: '英国' },
  '프랑스': { en: 'France', ja: 'フランス', es: 'Francia', th: 'ฝรั่งเศส', vi: 'Pháp', zh: '法国' },
  '러시아': { en: 'Russia', ja: 'ロシア', es: 'Rusia', th: 'รัสเซีย', vi: 'Nga', zh: '俄罗斯' },
  '일본': { en: 'Japan', ja: '日本', es: 'Japón', th: 'ญี่ปุ่น', vi: 'Nhật Bản', zh: '日本' },
  '청나라': { en: 'Qing Dynasty', ja: '清朝', es: 'Dinastía Qing', th: 'ราชวงศ์ชิง', vi: 'Nhà Thanh', zh: '清朝' },
  '후금': { en: 'Later Jin', ja: '後金', es: 'Jin Posterior', th: 'ฮูจิน', vi: 'Hậu Kim', zh: '后金' },
  '거란': { en: 'Khitan (Liao)', ja: '契丹', es: 'Khitan (Liao)', th: 'คีตัน', vi: 'Khiết Đan', zh: '契丹' },
  '여진': { en: 'Jurchen', ja: '女真', es: 'Jurchen', th: 'จูร์เชน', vi: 'Nữ Chân', zh: '女真' },
  '수나라': { en: 'Sui Dynasty', ja: '隋朝', es: 'Dinastía Sui', th: 'ราชวงศ์สุย', vi: 'Nhà Tùy', zh: '隋朝' },
  '당나라': { en: 'Tang Dynasty', ja: '唐朝', es: 'Dinastía Tang', th: 'ราชวงศ์ถัง', vi: 'Nhà Đường', zh: '唐朝' },
  '한나라': { en: 'Han Dynasty', ja: '漢朝', es: 'Dinastía Han', th: 'ราชวงศ์ฮั่น', vi: 'Nhà Hán', zh: '汉朝' },
  '전진': { en: 'Former Qin', ja: '前秦', es: 'Qin Anterior', th: 'ฉินก่อน', vi: 'Tiền Tần', zh: '前秦' },
  '나당연합군': { en: 'Silla-Tang Allied Forces', ja: '羅唐連合軍', es: 'Fuerzas Aliadas Silla-Tang', th: 'กองกำลังพันธมิตรซิลลา-ถัง', vi: 'Liên quân La Đường', zh: '罗唐联军' },
  '몽골': { en: 'Mongolia', ja: 'モンゴル', es: 'Mongolia', th: 'มองโกเลีย', vi: 'Mông Cổ', zh: '蒙古' },
  '천주교': { en: 'Catholicism', ja: 'カトリック', es: 'Catolicismo', th: 'คาทอลิก', vi: 'Công Giáo', zh: '天主教' },
  '신유박해': { en: 'Sinyu Persecution', ja: '辛酉迫害', es: 'Persecución Sinyu', th: 'การข่มเหงชินยู', vi: 'Sự Bách hại Tân Dậu', zh: '辛酉迫害' },
};

// ============================================
// Level Titles and Descriptions
// ============================================
export const levelTerms: Record<string, MultilingualText> = {
  // Level 1
  '고조선과 건국 신화': { en: 'Gojoseon and Foundation Myths', ja: '古朝鮮と建国神話', es: 'Gojoseon y Mitos de Fundación', th: 'โคโจซ็อนและตำนานการสถาปนา', vi: 'Cổ Triều Tiên và Thần thoại Lập quốc', zh: '古朝鲜与建国神话' },
  '단군왕검과 고조선의 건국에 대해 배워봅니다.': { en: 'Learn about Dangun Wanggeom and the foundation of Gojoseon.', ja: '檀君王倹と古朝鮮の建国について学びます。', es: 'Aprende sobre Dangun Wanggeom y la fundación de Gojoseon.', th: 'เรียนรู้เกี่ยวกับดันกุนวังก็อมและการก่อตั้งโคโจซ็อน', vi: 'Tìm hiểu về Đàn Quân Vương Kiệm và sự thành lập Cổ Triều Tiên.', zh: '学习檀君王俭与古朝鲜的建国。' },

  // Level 2
  '삼국의 성립': { en: 'Establishment of Three Kingdoms', ja: '三国の成立', es: 'Establecimiento de los Tres Reinos', th: 'การก่อตั้งสามอาณาจักร', vi: 'Sự thành lập Tam Quốc', zh: '三国的成立' },
  '고구려, 백제, 신라의 건국에 대해 배워봅니다.': { en: 'Learn about the foundation of Goguryeo, Baekje, and Silla.', ja: '高句麗、百済、新羅の建国について学びます。', es: 'Aprende sobre la fundación de Goguryeo, Baekje y Silla.', th: 'เรียนรู้เกี่ยวกับการก่อตั้งโคกูรยอ แพกเจ และซิลลา', vi: 'Tìm hiểu về sự thành lập Cao Câu Ly, Bách Tế và Tân La.', zh: '学习高句丽、百济、新罗的建国。' },

  // Level 3
  '삼국시대의 영웅들': { en: 'Heroes of the Three Kingdoms', ja: '三国時代の英雄たち', es: 'Héroes de los Tres Reinos', th: 'วีรบุรุษแห่งสามอาณาจักร', vi: 'Anh hùng thời Tam Quốc', zh: '三国时代的英雄们' },
  '삼국시대를 빛낸 영웅들을 배워봅니다.': { en: 'Learn about the heroes who shined in the Three Kingdoms era.', ja: '三国時代を輝かせた英雄たちについて学びます。', es: 'Aprende sobre los héroes que brillaron en la era de los Tres Reinos.', th: 'เรียนรู้เกี่ยวกับวีรบุรุษที่โดดเด่นในยุคสามอาณาจักร', vi: 'Tìm hiểu về các anh hùng nổi bật thời Tam Quốc.', zh: '学习三国时代的杰出英雄。' },

  // Level 4
  '고려의 건국과 통일': { en: 'Foundation and Unification of Goryeo', ja: '高麗の建国と統一', es: 'Fundación y Unificación de Goryeo', th: 'การก่อตั้งและรวมเป็นหนึ่งของโครยอ', vi: 'Sự thành lập và Thống nhất của Cao Ly', zh: '高丽的建国与统一' },
  '왕건의 고려 건국과 후삼국 통일을 배워봅니다.': { en: 'Learn about Wang Geon\'s foundation of Goryeo and unification of Later Three Kingdoms.', ja: '王建の高麗建国と後三国統一について学びます。', es: 'Aprende sobre la fundación de Goryeo por Wang Geon y la unificación de los Tres Reinos Posteriores.', th: 'เรียนรู้เกี่ยวกับการก่อตั้งโครยอของวังก็อนและการรวมสามอาณาจักรหลัง', vi: 'Tìm hiểu về việc Vương Kiến lập quốc Cao Ly và thống nhất Hậu Tam Quốc.', zh: '学习王建建立高丽和后三国统一。' },

  // Level 5
  '고려의 외침과 극복': { en: 'Goryeo\'s Foreign Invasions and Resistance', ja: '高麗の外敵侵入と克服', es: 'Invasiones Extranjeras y Resistencia de Goryeo', th: 'การรุกรานจากต่างชาติและการต่อต้านของโครยอ', vi: 'Ngoại xâm và Kháng chiến của Cao Ly', zh: '高丽的外敌入侵与克服' },
  '거란, 여진과의 전쟁과 고려의 영웅들을 배워봅니다.': { en: 'Learn about wars with Khitan and Jurchen, and heroes of Goryeo.', ja: '契丹、女真との戦争と高麗の英雄たちについて学びます。', es: 'Aprende sobre las guerras con Khitan y Jurchen, y los héroes de Goryeo.', th: 'เรียนรู้เกี่ยวกับสงครามกับคีตันและจูร์เชน และวีรบุรุษแห่งโครยอ', vi: 'Tìm hiểu về các cuộc chiến với Khiết Đan, Nữ Chân và anh hùng của Cao Ly.', zh: '学习与契丹、女真的战争及高丽英雄。' },

  // Level 6
  '고려의 문화와 멸망': { en: 'Goryeo\'s Culture and Fall', ja: '高麗の文化と滅亡', es: 'Cultura y Caída de Goryeo', th: 'วัฒนธรรมและการล่มสลายของโครยอ', vi: 'Văn hóa và Sự sụp đổ của Cao Ly', zh: '高丽的文化与灭亡' },
  '팔만대장경, 금속활자 등 고려의 문화를 배워봅니다.': { en: 'Learn about Goryeo\'s culture including Tripitaka Koreana and metal movable type.', ja: '八万大蔵経、金属活字など高麗の文化について学びます。', es: 'Aprende sobre la cultura de Goryeo, incluyendo Tripitaka Koreana y tipo móvil metálico.', th: 'เรียนรู้เกี่ยวกับวัฒนธรรมโครยอ รวมถึงพระไตรปิฎกเกาหลีและแท่นพิมพ์โลหะ', vi: 'Tìm hiểu về văn hóa Cao Ly bao gồm Bát Vạn Đại Tạng Kinh và hoạt tự kim loại.', zh: '学习高丽文化，包括八万大藏经和金属活字。' },

  // Level 7
  '조선의 건국': { en: 'Foundation of Joseon', ja: '朝鮮の建国', es: 'Fundación de Joseon', th: 'การก่อตั้งโชซ็อน', vi: 'Sự thành lập Triều Tiên', zh: '朝鲜的建国' },
  '이성계의 조선 건국과 한양 천도를 배워봅니다.': { en: 'Learn about Yi Seong-gye\'s foundation of Joseon and moving capital to Hanyang.', ja: '李成桂の朝鮮建国と漢陽遷都について学びます。', es: 'Aprende sobre la fundación de Joseon por Yi Seong-gye y el traslado de capital a Hanyang.', th: 'เรียนรู้เกี่ยวกับการก่อตั้งโชซ็อนของอีซ็องกเยและการย้ายเมืองหลวงไปฮันยาง', vi: 'Tìm hiểu về việc Lý Thành Quế lập quốc Triều Tiên và dời đô đến Hán Dương.', zh: '学习李成桂建立朝鲜和迁都汉阳。' },

  // Level 8
  '세종대왕과 한글': { en: 'King Sejong and Hangeul', ja: '世宗大王とハングル', es: 'Rey Sejong y Hangeul', th: 'กษัตริย์เซจงและฮันกึล', vi: 'Vua Thế Tông và Hangeul', zh: '世宗大王与韩文' },
  '세종대왕의 업적과 훈민정음 창제를 배워봅니다.': { en: 'Learn about King Sejong\'s achievements and the creation of Hunminjeongeum.', ja: '世宗大王の業績と訓民正音創製について学びます。', es: 'Aprende sobre los logros del Rey Sejong y la creación de Hunminjeongeum.', th: 'เรียนรู้เกี่ยวกับพระราชกรณียกิจของกษัตริย์เซจงและการสร้างฮุนมินจ็องอึม', vi: 'Tìm hiểu về thành tựu của Vua Thế Tông và sáng tạo Huấn Dân Chính Âm.', zh: '学习世宗大王的功绩和训民正音的创制。' },

  // Level 9
  '임진왜란': { en: 'Imjin War', ja: '壬辰倭乱', es: 'Guerra Imjin', th: 'สงครามอิมจิน', vi: 'Chiến tranh Nhâm Thìn', zh: '壬辰倭乱' },
  '임진왜란과 이순신 장군의 활약을 배워봅니다.': { en: 'Learn about the Imjin War and Admiral Yi Sun-sin\'s achievements.', ja: '壬辰倭乱と李舜臣将軍の活躍について学びます。', es: 'Aprende sobre la Guerra Imjin y los logros del Almirante Yi Sun-sin.', th: 'เรียนรู้เกี่ยวกับสงครามอิมจินและความสำเร็จของพลเรือเอกอีซุนชิน', vi: 'Tìm hiểu về Chiến tranh Nhâm Thìn và chiến công của Đô đốc Lý Thuấn Thần.', zh: '学习壬辰倭乱和李舜臣将军的功绩。' },

  // Level 10
  '조선 후기와 실학': { en: 'Late Joseon and Silhak', ja: '朝鮮後期と実学', es: 'Joseon Tardío y Silhak', th: 'โชซ็อนตอนปลายและซิลฮัก', vi: 'Triều Tiên Hậu Kỳ và Thực Học', zh: '朝鲜后期与实学' },
  '정조의 개혁과 실학의 발전을 배워봅니다.': { en: 'Learn about King Jeongjo\'s reforms and the development of Silhak.', ja: '正祖の改革と実学の発展について学びます。', es: 'Aprende sobre las reformas del Rey Jeongjo y el desarrollo de Silhak.', th: 'เรียนรู้เกี่ยวกับการปฏิรูปของกษัตริย์จ็องโจและการพัฒนาซิลฮัก', vi: 'Tìm hiểu về cải cách của Vua Chính Tổ và sự phát triển của Thực Học.', zh: '学习正祖的改革和实学的发展。' },

  // Level 11
  '동학과 근대화': { en: 'Donghak and Modernization', ja: '東学と近代化', es: 'Donghak y Modernización', th: 'ดงฮักและการปรับปรุงให้ทันสมัย', vi: 'Đông Học và Hiện đại hóa', zh: '东学与近代化' },
  '동학의 탄생과 동학농민운동을 배워봅니다.': { en: 'Learn about the birth of Donghak and the Donghak Peasant Revolution.', ja: '東学の誕生と東学農民運動について学びます。', es: 'Aprende sobre el nacimiento de Donghak y la Revolución Campesina Donghak.', th: 'เรียนรู้เกี่ยวกับการเกิดดงฮักและการปฏิวัติชาวนาดงฮัก', vi: 'Tìm hiểu về sự ra đời của Đông Học và Cách mạng Nông dân Đông Học.', zh: '学习东学的诞生和东学农民运动。' },

  // Level 12
  '대한제국의 성립과 독립운동의 시작을 배워봅니다.': { en: 'Learn about the establishment of the Korean Empire and the beginning of independence movements.', ja: '大韓帝国の成立と独立運動の始まりについて学びます。', es: 'Aprende sobre el establecimiento del Imperio Coreano y el inicio de los movimientos de independencia.', th: 'เรียนรู้เกี่ยวกับการก่อตั้งจักรวรรดิเกาหลีและจุดเริ่มต้นของขบวนการเอกราช', vi: 'Tìm hiểu về sự thành lập Đế quốc Đại Hàn và sự khởi đầu của phong trào độc lập.', zh: '学习大韩帝国的成立和独立运动的开始。' },

  // Figure names with titles
  '이성계(태조)': { en: 'Yi Seong-gye (King Taejo)', ja: '李成桂（太祖）', es: 'Yi Seong-gye (Rey Taejo)', th: 'อีซ็องกเย (กษัตริย์แทโจ)', vi: 'Lý Thành Quế (Vua Thái Tổ)', zh: '李成桂（太祖）' },
  '이이(율곡)': { en: 'Yi I (Yulgok)', ja: '李珥（栗谷）', es: 'Yi I (Yulgok)', th: 'อีอี (ยุลกก)', vi: 'Lý Nhĩ (Lật Cốc)', zh: '李珥（栗谷）' },

  // Period group names for UI
  '고대': { en: 'Ancient Era', ja: '古代', es: 'Era Antigua', th: 'ยุคโบราณ', vi: 'Thời Cổ Đại', zh: '古代' },
  '고려시대': { en: 'Goryeo Dynasty', ja: '高麗時代', es: 'Dinastía Goryeo', th: 'ราชวงศ์โครยอ', vi: 'Thời Cao Ly', zh: '高丽时代' },
  '조선시대': { en: 'Joseon Dynasty', ja: '朝鮮時代', es: 'Dinastía Joseon', th: 'ราชวงศ์โชซ็อน', vi: 'Thời Triều Tiên', zh: '朝鲜时代' },

  // UI text
  '한국사 학습': { en: 'Korean History', ja: '韓国史学習', es: 'Historia Coreana', th: 'ประวัติศาสตร์เกาหลี', vi: 'Lịch sử Hàn Quốc', zh: '韩国历史学习' },
  '고조선부터 대한제국까지 역사를 배워보세요': { en: 'Learn history from Gojoseon to the Korean Empire', ja: '古朝鮮から大韓帝国までの歴史を学びましょう', es: 'Aprende la historia desde Gojoseon hasta el Imperio Coreano', th: 'เรียนรู้ประวัติศาสตร์ตั้งแต่โคโจซ็อนถึงจักรวรรดิเกาหลี', vi: 'Học lịch sử từ Cổ Triều Tiên đến Đế quốc Đại Hàn', zh: '学习从古朝鲜到大韩帝国的历史' },
};

// ============================================
// Combined lookup function
// ============================================
export function getHistoryTerm(term: string, language: string): string {
  const allTerms = {
    ...dynastyTerms,
    ...kingTerms,
    ...heroTerms,
    ...scholarTerms,
    ...eventTerms,
    ...achievementTerms,
    ...conceptTerms,
    ...placeTerms,
    ...miscTerms,
    ...levelTerms,
  };

  const translation = allTerms[term];
  if (translation) {
    return translation[language as keyof MultilingualText] || translation.en || term;
  }
  return term;
}

// ============================================
// Get all terms as a combined object
// ============================================
export const allHistoryTerms = {
  ...dynastyTerms,
  ...kingTerms,
  ...heroTerms,
  ...scholarTerms,
  ...eventTerms,
  ...achievementTerms,
  ...conceptTerms,
  ...placeTerms,
  ...miscTerms,
  ...levelTerms,
};
