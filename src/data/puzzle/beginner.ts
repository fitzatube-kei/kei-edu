import { PuzzleWord, PuzzleLevel, PuzzleCategory } from './types';

/**
 * Beginner Level Puzzle Words
 * 1000 words total (100 levels, 10 words each)
 * Mix of 1-3 syllable Korean words (mostly 1-2)
 * Focused on practical, commonly used words for Korean learners
 */

// Compact tuple format: [korean, english, romanization, category, difficulty]
type WordTuple = [string, string, string, string, 1 | 2 | 3];

const rawWords: WordTuple[] = [
  // Level 1 - Basic Nature/Daily Life (기초 자연/생활)
  ['물', 'Water', 'mul', '자연', 1],
  ['불', 'Fire', 'bul', '자연', 1],
  ['눈', 'Eye/Snow', 'nun', '신체', 1],
  ['손', 'Hand', 'son', '신체', 1],
  ['집', 'House', 'jip', '장소', 1],
  ['차', 'Car/Tea', 'cha', '물건', 1],
  ['밥', 'Rice/Meal', 'bap', '음식', 1],
  ['책', 'Book', 'chaek', '물건', 1],
  ['산', 'Mountain', 'san', '자연', 1],
  ['강', 'River', 'gang', '자연', 1],

  // Level 2 - Family (가족)
  ['엄마', 'Mom', 'eomma', '가족', 2],
  ['아빠', 'Dad', 'appa', '가족', 2],
  ['누나', 'Older sister (for males)', 'nuna', '가족', 2],
  ['동생', 'Younger sibling', 'dongsaeng', '가족', 2],
  ['형', 'Older brother (for males)', 'hyeong', '가족', 1],
  ['언니', 'Older sister (for females)', 'eonni', '가족', 2],
  ['오빠', 'Older brother (for females)', 'oppa', '가족', 2],
  ['할머니', 'Grandmother', 'halmeoni', '가족', 3],
  ['친구', 'Friend', 'chingu', '가족', 2],
  ['아기', 'Baby', 'agi', '가족', 2],

  // Level 3 - Body Parts (신체)
  ['눈', 'Eye', 'nun', '신체', 1],
  ['코', 'Nose', 'ko', '신체', 1],
  ['입', 'Mouth', 'ip', '신체', 1],
  ['귀', 'Ear', 'gwi', '신체', 1],
  ['손', 'Hand', 'son', '신체', 1],
  ['발', 'Foot', 'bal', '신체', 1],
  ['머리', 'Head', 'meori', '신체', 2],
  ['다리', 'Leg', 'dari', '신체', 2],
  ['팔', 'Arm', 'pal', '신체', 1],
  ['배', 'Belly/Stomach', 'bae', '신체', 1],

  // Level 4 - Animals (동물)
  ['개', 'Dog', 'gae', '동물', 1],
  ['고양이', 'Cat', 'goyangi', '동물', 3],
  ['새', 'Bird', 'sae', '동물', 1],
  ['물고기', 'Fish', 'mulgogi', '동물', 3],
  ['말', 'Horse', 'mal', '동물', 1],
  ['소', 'Cow', 'so', '동물', 1],
  ['돼지', 'Pig', 'dwaeji', '동물', 2],
  ['닭', 'Chicken', 'dak', '동물', 1],
  ['토끼', 'Rabbit', 'tokki', '동물', 2],
  ['호랑이', 'Tiger', 'horangi', '동물', 3],

  // Level 5 - Food 1 (음식1)
  ['밥', 'Rice/Meal', 'bap', '음식', 1],
  ['빵', 'Bread', 'ppang', '음식', 1],
  ['물', 'Water', 'mul', '음식', 1],
  ['우유', 'Milk', 'uyu', '음식', 2],
  ['사과', 'Apple', 'sagwa', '음식', 2],
  ['바나나', 'Banana', 'banana', '음식', 3],
  ['김치', 'Kimchi', 'gimchi', '음식', 2],
  ['라면', 'Ramen', 'ramyeon', '음식', 2],
  ['고기', 'Meat', 'gogi', '음식', 2],
  ['과일', 'Fruit', 'gwail', '음식', 2],

  // Level 6 - Colors (색깔)
  ['빨강', 'Red', 'ppalgang', '색깔', 2],
  ['파랑', 'Blue', 'parang', '색깔', 2],
  ['노랑', 'Yellow', 'norang', '색깔', 2],
  ['초록', 'Green', 'chorok', '색깔', 2],
  ['하양', 'White', 'hayang', '색깔', 2],
  ['검정', 'Black', 'geomjeong', '색깔', 2],
  ['주황', 'Orange', 'juhwang', '색깔', 2],
  ['분홍', 'Pink', 'bunhong', '색깔', 2],
  ['보라', 'Purple', 'bora', '색깔', 2],
  ['금색', 'Gold', 'geumsaek', '색깔', 2],

  // Level 7 - Nature 2 (자연2)
  ['하늘', 'Sky', 'haneul', '자연', 2],
  ['바다', 'Sea/Ocean', 'bada', '자연', 2],
  ['별', 'Star', 'byeol', '자연', 1],
  ['달', 'Moon', 'dal', '자연', 1],
  ['해', 'Sun', 'hae', '자연', 1],
  ['꽃', 'Flower', 'kkot', '자연', 1],
  ['풀', 'Grass', 'pul', '자연', 1],
  ['나무', 'Tree', 'namu', '자연', 2],
  ['돌', 'Stone', 'dol', '자연', 1],
  ['땅', 'Ground', 'ttang', '자연', 1],

  // Level 8 - Places 1 (장소1)
  ['학교', 'School', 'hakgyo', '장소', 2],
  ['가게', 'Store/Shop', 'gage', '장소', 2],
  ['공원', 'Park', 'gongwon', '장소', 2],
  ['병원', 'Hospital', 'byeongwon', '장소', 2],
  ['은행', 'Bank', 'eunhaeng', '장소', 2],
  ['역', 'Station', 'yeok', '장소', 1],
  ['길', 'Road/Street', 'gil', '장소', 1],
  ['문', 'Door', 'mun', '장소', 1],
  ['방', 'Room', 'bang', '장소', 1],
  ['층', 'Floor/Story', 'cheung', '장소', 1],

  // Level 9 - Time (시간)
  ['오늘', 'Today', 'oneul', '시간', 2],
  ['내일', 'Tomorrow', 'naeil', '시간', 2],
  ['어제', 'Yesterday', 'eoje', '시간', 2],
  ['아침', 'Morning', 'achim', '시간', 2],
  ['점심', 'Lunch/Noon', 'jeomsim', '시간', 2],
  ['저녁', 'Evening', 'jeonyeok', '시간', 2],
  ['밤', 'Night', 'bam', '시간', 1],
  ['시간', 'Time/Hour', 'sigan', '시간', 2],
  ['날', 'Day', 'nal', '시간', 1],
  ['주', 'Week', 'ju', '시간', 1],

  // Level 10 - Objects 1 (물건1)
  ['연필', 'Pencil', 'yeonpil', '물건', 2],
  ['가방', 'Bag', 'gabang', '물건', 2],
  ['의자', 'Chair', 'uija', '물건', 2],
  ['책상', 'Desk', 'chaeksang', '물건', 2],
  ['침대', 'Bed', 'chimdae', '물건', 2],
  ['거울', 'Mirror', 'geoul', '물건', 2],
  ['시계', 'Clock/Watch', 'sigye', '물건', 2],
  ['전화', 'Phone', 'jeonhwa', '물건', 2],
  ['신발', 'Shoes', 'sinbal', '물건', 2],
  ['모자', 'Hat', 'moja', '물건', 2],

  // Level 11 - Food 2 (음식2)
  ['국', 'Soup', 'guk', '음식', 1],
  ['찌개', 'Stew', 'jjigae', '음식', 2],
  ['떡', 'Rice cake', 'tteok', '음식', 1],
  ['빵', 'Bread', 'ppang', '음식', 1],
  ['케이크', 'Cake', 'keikeu', '음식', 3],
  ['아이스', 'Ice', 'aiseu', '음식', 3],
  ['주스', 'Juice', 'juseu', '음식', 2],
  ['커피', 'Coffee', 'keopi', '음식', 2],
  ['차', 'Tea', 'cha', '음식', 1],
  ['물', 'Water', 'mul', '음식', 1],

  // Level 12 - Verbs as Nouns (동사명사)
  ['잠', 'Sleep', 'jam', '활동', 1],
  ['꿈', 'Dream', 'kkum', '활동', 1],
  ['일', 'Work', 'il', '활동', 1],
  ['놀이', 'Play/Game', 'nori', '활동', 2],
  ['공부', 'Study', 'gongbu', '활동', 2],
  ['운동', 'Exercise', 'undong', '활동', 2],
  ['노래', 'Song', 'norae', '활동', 2],
  ['춤', 'Dance', 'chum', '활동', 1],
  ['그림', 'Picture/Drawing', 'geurim', '활동', 2],
  ['사진', 'Photo', 'sajin', '활동', 2],

  // Level 13 - Weather/Seasons (날씨/계절)
  ['봄', 'Spring', 'bom', '계절', 1],
  ['여름', 'Summer', 'yeoreum', '계절', 2],
  ['가을', 'Fall/Autumn', 'gaeul', '계절', 2],
  ['겨울', 'Winter', 'gyeoul', '계절', 2],
  ['날씨', 'Weather', 'nalssi', '자연', 2],
  ['바람', 'Wind', 'baram', '자연', 2],
  ['눈', 'Snow', 'nun', '자연', 1],
  ['비', 'Rain', 'bi', '자연', 1],
  ['구름', 'Cloud', 'gureum', '자연', 2],
  ['햇빛', 'Sunlight', 'haetbit', '자연', 2],

  // Level 14 - Numbers (숫자)
  ['하나', 'One', 'hana', '숫자', 2],
  ['둘', 'Two', 'dul', '숫자', 1],
  ['셋', 'Three', 'set', '숫자', 1],
  ['넷', 'Four', 'net', '숫자', 1],
  ['다섯', 'Five', 'daseot', '숫자', 2],
  ['여섯', 'Six', 'yeoseot', '숫자', 2],
  ['일곱', 'Seven', 'ilgop', '숫자', 2],
  ['여덟', 'Eight', 'yeodeol', '숫자', 2],
  ['아홉', 'Nine', 'ahop', '숫자', 2],
  ['열', 'Ten', 'yeol', '숫자', 1],

  // Level 15 - Transportation (교통)
  ['자동차', 'Car/Automobile', 'jadongcha', '교통', 3],
  ['비행기', 'Airplane', 'bihaenggi', '교통', 3],
  ['배', 'Boat/Ship', 'bae', '교통', 1],
  ['버스', 'Bus', 'beoseu', '교통', 2],
  ['지하철', 'Subway', 'jihacheol', '교통', 3],
  ['택시', 'Taxi', 'taeksi', '교통', 2],
  ['기차', 'Train', 'gicha', '교통', 2],
  ['자전거', 'Bicycle', 'jajeongeo', '교통', 3],
  ['오토바이', 'Motorcycle', 'otobai', '교통', 3],
  ['트럭', 'Truck', 'teureok', '교통', 2],

  // Level 16 - Clothing (옷)
  ['옷', 'Clothes', 'ot', '옷', 1],
  ['바지', 'Pants', 'baji', '옷', 2],
  ['치마', 'Skirt', 'chima', '옷', 2],
  ['양말', 'Socks', 'yangmal', '옷', 2],
  ['장갑', 'Gloves', 'janggap', '옷', 2],
  ['목도리', 'Scarf', 'mokdori', '옷', 3],
  ['외투', 'Coat', 'oetu', '옷', 2],
  ['셔츠', 'Shirt', 'syeocheu', '옷', 2],
  ['원피스', 'Dress', 'wonpiseu', '옷', 3],
  ['잠바', 'Jacket', 'jamba', '옷', 2],

  // Level 17 - Feelings/Emotions (감정)
  ['기쁨', 'Joy', 'gippeum', '감정', 2],
  ['슬픔', 'Sadness', 'seulpeum', '감정', 2],
  ['화', 'Anger', 'hwa', '감정', 1],
  ['사랑', 'Love', 'sarang', '감정', 2],
  ['걱정', 'Worry', 'geokjeong', '감정', 2],
  ['두려움', 'Fear', 'duryeoum', '감정', 3],
  ['행복', 'Happiness', 'haengbok', '감정', 2],
  ['외로움', 'Loneliness', 'oeroum', '감정', 3],
  ['짜증', 'Irritation', 'jjajeung', '감정', 2],
  ['설렘', 'Excitement', 'seollem', '감정', 2],

  // Level 18 - Greetings/Expressions (인사)
  ['안녕', 'Hello', 'annyeong', '인사', 2],
  ['감사', 'Thanks', 'gamsa', '인사', 2],
  ['미안', 'Sorry', 'mian', '인사', 2],
  ['축하', 'Congratulations', 'chukha', '인사', 2],
  ['환영', 'Welcome', 'hwanyeong', '인사', 2],
  ['부탁', 'Request/Please', 'butak', '인사', 2],
  ['실례', 'Excuse me', 'sillye', '인사', 2],
  ['천만', 'You\'re welcome', 'cheonman', '인사', 2],
  ['수고', 'Good work', 'sugo', '인사', 2],
  ['만남', 'Meeting', 'mannam', '인사', 2],

  // Level 19 - Fruits (과일)
  ['딸기', 'Strawberry', 'ttalgi', '과일', 2],
  ['포도', 'Grape', 'podo', '과일', 2],
  ['수박', 'Watermelon', 'subak', '과일', 2],
  ['참외', 'Korean melon', 'chamoe', '과일', 2],
  ['복숭아', 'Peach', 'boksunga', '과일', 3],
  ['귤', 'Tangerine', 'gyul', '과일', 1],
  ['배', 'Pear', 'bae', '과일', 1],
  ['감', 'Persimmon', 'gam', '과일', 1],
  ['레몬', 'Lemon', 'remon', '과일', 2],
  ['망고', 'Mango', 'manggo', '과일', 2],

  // Level 20 - Vegetables (채소)
  ['배추', 'Napa cabbage', 'baechu', '채소', 2],
  ['무', 'Radish', 'mu', '채소', 1],
  ['당근', 'Carrot', 'danggeun', '채소', 2],
  ['양파', 'Onion', 'yangpa', '채소', 2],
  ['마늘', 'Garlic', 'maneul', '채소', 2],
  ['고추', 'Chili pepper', 'gochu', '채소', 2],
  ['감자', 'Potato', 'gamja', '채소', 2],
  ['고구마', 'Sweet potato', 'goguma', '채소', 3],
  ['오이', 'Cucumber', 'oi', '채소', 2],
  ['콩', 'Bean', 'kong', '채소', 1],

  // Level 21 - Drinks (음료)
  ['맥주', 'Beer', 'maekju', '음료', 2],
  ['소주', 'Soju', 'soju', '음료', 2],
  ['콜라', 'Cola', 'kolla', '음료', 2],
  ['녹차', 'Green tea', 'nokcha', '음료', 2],
  ['홍차', 'Black tea', 'hongcha', '음료', 2],
  ['우유', 'Milk', 'uyu', '음료', 2],
  ['탄산', 'Soda', 'tansan', '음료', 2],
  ['식혜', 'Sweet rice drink', 'sikhye', '음료', 2],
  ['술', 'Alcohol', 'sul', '음료', 1],
  ['약수', 'Mineral water', 'yaksu', '음료', 2],

  // Level 22 - Cooking (요리)
  ['요리', 'Cooking', 'yori', '요리', 2],
  ['볶음', 'Stir-fry', 'bokkeum', '요리', 2],
  ['튀김', 'Frying/Fried food', 'twigim', '요리', 2],
  ['구이', 'Grilled', 'gui', '요리', 2],
  ['찜', 'Steamed', 'jjim', '요리', 1],
  ['조림', 'Braised', 'jorim', '요리', 2],
  ['무침', 'Seasoned dish', 'muchim', '요리', 2],
  ['전', 'Pancake', 'jeon', '요리', 1],
  ['양념', 'Seasoning', 'yangnyeom', '요리', 2],
  ['반찬', 'Side dish', 'banchan', '요리', 2],

  // Level 23 - House Items/Furniture (가구)
  ['소파', 'Sofa', 'sopa', '가구', 2],
  ['탁자', 'Table', 'takja', '가구', 2],
  ['서랍', 'Drawer', 'seorap', '가구', 2],
  ['장롱', 'Wardrobe', 'jangnong', '가구', 2],
  ['이불', 'Blanket', 'ibul', '가구', 2],
  ['베개', 'Pillow', 'begae', '가구', 2],
  ['커튼', 'Curtain', 'keoteun', '가구', 2],
  ['카펫', 'Carpet', 'kapet', '가구', 2],
  ['선반', 'Shelf', 'seonban', '가구', 2],
  ['쿠션', 'Cushion', 'kusyeon', '가구', 2],

  // Level 24 - Tools (도구)
  ['망치', 'Hammer', 'mangchi', '도구', 2],
  ['가위', 'Scissors', 'gawi', '도구', 2],
  ['칼', 'Knife', 'kal', '도구', 1],
  ['줄', 'Rope/Line', 'jul', '도구', 1],
  ['못', 'Nail', 'mot', '도구', 1],
  ['삽', 'Shovel', 'sap', '도구', 1],
  ['톱', 'Saw', 'top', '도구', 1],
  ['풀', 'Glue', 'pul', '도구', 1],
  ['테이프', 'Tape', 'teipeu', '도구', 3],
  ['드릴', 'Drill', 'deuril', '도구', 2],

  // Level 25 - Musical Instruments (악기)
  ['피아노', 'Piano', 'piano', '악기', 3],
  ['기타', 'Guitar', 'gita', '악기', 2],
  ['북', 'Drum', 'buk', '악기', 1],
  ['피리', 'Flute', 'piri', '악기', 2],
  ['거문고', 'Korean zither', 'geomungo', '악기', 3],
  ['가야금', 'Gayageum', 'gayageum', '악기', 3],
  ['바이올린', 'Violin', 'baiollin', '악기', 3],
  ['첼로', 'Cello', 'chello', '악기', 2],
  ['하프', 'Harp', 'hapeu', '악기', 2],
  ['종', 'Bell', 'jong', '악기', 1],

  // Level 26 - Sports (운동)
  ['축구', 'Soccer', 'chukgu', '운동', 2],
  ['야구', 'Baseball', 'yagu', '운동', 2],
  ['농구', 'Basketball', 'nonggu', '운동', 2],
  ['수영', 'Swimming', 'suyeong', '운동', 2],
  ['달리기', 'Running', 'dalligi', '운동', 3],
  ['태권도', 'Taekwondo', 'taegwondo', '운동', 3],
  ['탁구', 'Table tennis', 'takgu', '운동', 2],
  ['배구', 'Volleyball', 'baegu', '운동', 2],
  ['골프', 'Golf', 'golpeu', '운동', 2],
  ['스키', 'Skiing', 'seuki', '운동', 2],

  // Level 27 - Hobbies (취미)
  ['독서', 'Reading', 'dokseo', '취미', 2],
  ['등산', 'Hiking', 'deungsan', '취미', 2],
  ['낚시', 'Fishing', 'naksi', '취미', 2],
  ['요가', 'Yoga', 'yoga', '취미', 2],
  ['뜨개질', 'Knitting', 'tteugaejil', '취미', 3],
  ['여행', 'Travel', 'yeohaeng', '취미', 2],
  ['캠핑', 'Camping', 'kaemping', '취미', 2],
  ['산책', 'Walk/Stroll', 'sanchaek', '취미', 2],
  ['요리', 'Cooking', 'yori', '취미', 2],
  ['영화', 'Movie', 'yeonghwa', '취미', 2],

  // Level 28 - Jobs 1 (직업1)
  ['의사', 'Doctor', 'uisa', '직업', 2],
  ['선생님', 'Teacher', 'seonsaengnim', '직업', 3],
  ['경찰', 'Police', 'gyeongchal', '직업', 2],
  ['간호사', 'Nurse', 'ganhosa', '직업', 3],
  ['요리사', 'Chef', 'yorisa', '직업', 3],
  ['군인', 'Soldier', 'gunin', '직업', 2],
  ['가수', 'Singer', 'gasu', '직업', 2],
  ['배우', 'Actor', 'baeu', '직업', 2],
  ['화가', 'Painter', 'hwaga', '직업', 2],
  ['농부', 'Farmer', 'nongbu', '직업', 2],

  // Level 29 - Weather 2 (날씨2)
  ['안개', 'Fog', 'angae', '날씨', 2],
  ['천둥', 'Thunder', 'cheondung', '날씨', 2],
  ['번개', 'Lightning', 'beongae', '날씨', 2],
  ['소나기', 'Rain shower', 'sonagi', '날씨', 3],
  ['태풍', 'Typhoon', 'taepung', '날씨', 2],
  ['서리', 'Frost', 'seori', '날씨', 2],
  ['이슬', 'Dew', 'iseul', '날씨', 2],
  ['무지개', 'Rainbow', 'mujigae', '날씨', 3],
  ['우박', 'Hail', 'ubak', '날씨', 2],
  ['장마', 'Monsoon', 'jangma', '날씨', 2],

  // Level 30 - Geography (지리)
  ['섬', 'Island', 'seom', '지리', 1],
  ['호수', 'Lake', 'hosu', '지리', 2],
  ['사막', 'Desert', 'samak', '지리', 2],
  ['동굴', 'Cave', 'donggul', '지리', 2],
  ['폭포', 'Waterfall', 'pokpo', '지리', 2],
  ['절벽', 'Cliff', 'jeolbyeok', '지리', 2],
  ['언덕', 'Hill', 'eondeok', '지리', 2],
  ['계곡', 'Valley', 'gyegok', '지리', 2],
  ['평야', 'Plain', 'pyeongya', '지리', 2],
  ['해안', 'Coast', 'haean', '지리', 2],

  // Level 31 - Insects (곤충)
  ['나비', 'Butterfly', 'nabi', '곤충', 2],
  ['개미', 'Ant', 'gaemi', '곤충', 2],
  ['벌', 'Bee', 'beol', '곤충', 1],
  ['모기', 'Mosquito', 'mogi', '곤충', 2],
  ['파리', 'Fly', 'pari', '곤충', 2],
  ['거미', 'Spider', 'geomi', '곤충', 2],
  ['잠자리', 'Dragonfly', 'jamjari', '곤충', 3],
  ['매미', 'Cicada', 'maemi', '곤충', 2],
  ['딱정벌레', 'Beetle', 'ttakjeongbeolle', '곤충', 3],
  ['무당벌레', 'Ladybug', 'mudangbeolle', '곤충', 3],

  // Level 32 - Sea Creatures (바다동물)
  ['고래', 'Whale', 'gorae', '동물', 2],
  ['상어', 'Shark', 'sangeo', '동물', 2],
  ['거북이', 'Turtle', 'geobugi', '동물', 3],
  ['돌고래', 'Dolphin', 'dolgorae', '동물', 3],
  ['문어', 'Octopus', 'muneo', '동물', 2],
  ['오징어', 'Squid', 'ojingeo', '동물', 3],
  ['새우', 'Shrimp', 'saeu', '동물', 2],
  ['조개', 'Clam/Shell', 'jogae', '동물', 2],
  ['해파리', 'Jellyfish', 'haepari', '동물', 3],
  ['게', 'Crab', 'ge', '동물', 1],

  // Level 33 - Farm Animals (농장)
  ['양', 'Sheep', 'yang', '동물', 1],
  ['염소', 'Goat', 'yeomso', '동물', 2],
  ['오리', 'Duck', 'ori', '동물', 2],
  ['거위', 'Goose', 'geowi', '동물', 2],
  ['당나귀', 'Donkey', 'dangnagwi', '동물', 3],
  ['병아리', 'Chick', 'byeongari', '동물', 3],
  ['송아지', 'Calf', 'songaji', '동물', 3],
  ['망아지', 'Foal', 'mangaji', '동물', 3],
  ['암탉', 'Hen', 'amtak', '동물', 2],
  ['수탉', 'Rooster', 'sutak', '동물', 2],

  // Level 34 - Birds (새)
  ['독수리', 'Eagle', 'doksuri', '동물', 3],
  ['까마귀', 'Crow', 'kkamagwi', '동물', 3],
  ['참새', 'Sparrow', 'chamsae', '동물', 2],
  ['비둘기', 'Pigeon', 'bidulgi', '동물', 3],
  ['백조', 'Swan', 'baekjo', '동물', 2],
  ['앵무새', 'Parrot', 'aengmusae', '동물', 3],
  ['부엉이', 'Owl', 'bueongi', '동물', 3],
  ['펭귄', 'Penguin', 'penggwin', '동물', 2],
  ['학', 'Crane', 'hak', '동물', 1],
  ['까치', 'Magpie', 'kkachi', '동물', 2],

  // Level 35 - Plants (식물)
  ['장미', 'Rose', 'jangmi', '식물', 2],
  ['해바라기', 'Sunflower', 'haebaragi', '식물', 3],
  ['국화', 'Chrysanthemum', 'gukhwa', '식물', 2],
  ['튤립', 'Tulip', 'tyullip', '식물', 2],
  ['선인장', 'Cactus', 'seoninjang', '식물', 3],
  ['소나무', 'Pine tree', 'sonamu', '식물', 3],
  ['대나무', 'Bamboo', 'daenamu', '식물', 3],
  ['잔디', 'Lawn', 'jandi', '식물', 2],
  ['이끼', 'Moss', 'ikki', '식물', 2],
  ['씨앗', 'Seed', 'ssiat', '식물', 2],

  // Level 36 - Shapes (모양)
  ['원', 'Circle', 'won', '모양', 1],
  ['네모', 'Square', 'nemo', '모양', 2],
  ['세모', 'Triangle', 'semo', '모양', 2],
  ['별', 'Star shape', 'byeol', '모양', 1],
  ['선', 'Line', 'seon', '모양', 1],
  ['점', 'Dot/Point', 'jeom', '모양', 1],
  ['타원', 'Oval', 'tawon', '모양', 2],
  ['마름모', 'Diamond', 'mareumo', '모양', 3],
  ['반원', 'Semicircle', 'banwon', '모양', 2],
  ['십자', 'Cross', 'sipja', '모양', 2],

  // Level 37 - Materials (재료)
  ['나무', 'Wood', 'namu', '재료', 2],
  ['쇠', 'Metal/Iron', 'soe', '재료', 1],
  ['돌', 'Stone', 'dol', '재료', 1],
  ['유리', 'Glass', 'yuri', '재료', 2],
  ['종이', 'Paper', 'jongi', '재료', 2],
  ['천', 'Fabric/Cloth', 'cheon', '재료', 1],
  ['가죽', 'Leather', 'gajuk', '재료', 2],
  ['플라스틱', 'Plastic', 'peullaseutik', '재료', 3],
  ['고무', 'Rubber', 'gomu', '재료', 2],
  ['흙', 'Soil/Clay', 'heuk', '재료', 1],

  // Level 38 - Actions 1 (동작1)
  ['걷다', 'To walk', 'geotda', '동작', 2],
  ['뛰다', 'To run', 'ttwida', '동작', 2],
  ['먹다', 'To eat', 'meokda', '동작', 2],
  ['마시다', 'To drink', 'masida', '동작', 3],
  ['자다', 'To sleep', 'jada', '동작', 2],
  ['쓰다', 'To write', 'sseuda', '동작', 2],
  ['읽다', 'To read', 'ikda', '동작', 2],
  ['보다', 'To see', 'boda', '동작', 2],
  ['듣다', 'To listen', 'deutda', '동작', 2],
  ['말하다', 'To speak', 'malhada', '동작', 3],

  // Level 39 - Actions 2 (동작2)
  ['앉다', 'To sit', 'anda', '동작', 2],
  ['서다', 'To stand', 'seoda', '동작', 2],
  ['눕다', 'To lie down', 'nupda', '동작', 2],
  ['울다', 'To cry', 'ulda', '동작', 2],
  ['웃다', 'To laugh', 'utda', '동작', 2],
  ['놀다', 'To play', 'nolda', '동작', 2],
  ['주다', 'To give', 'juda', '동작', 2],
  ['받다', 'To receive', 'batda', '동작', 2],
  ['열다', 'To open', 'yeolda', '동작', 2],
  ['닫다', 'To close', 'datda', '동작', 2],

  // Level 40 - States (상태)
  ['크다', 'Big', 'keuda', '상태', 2],
  ['작다', 'Small', 'jakda', '상태', 2],
  ['길다', 'Long', 'gilda', '상태', 2],
  ['짧다', 'Short', 'jjalda', '상태', 2],
  ['높다', 'High', 'nopda', '상태', 2],
  ['낮다', 'Low', 'natda', '상태', 2],
  ['빠르다', 'Fast', 'ppareuda', '상태', 3],
  ['느리다', 'Slow', 'neurida', '상태', 3],
  ['무겁다', 'Heavy', 'mugeopda', '상태', 3],
  ['가볍다', 'Light (weight)', 'gabyeopda', '상태', 3],

  // Level 41 - School Subjects (과목)
  ['국어', 'Korean language', 'gugeo', '과목', 2],
  ['수학', 'Math', 'suhak', '과목', 2],
  ['영어', 'English', 'yeongeo', '과목', 2],
  ['과학', 'Science', 'gwahak', '과목', 2],
  ['역사', 'History', 'yeoksa', '과목', 2],
  ['미술', 'Art', 'misul', '과목', 2],
  ['음악', 'Music', 'eumak', '과목', 2],
  ['체육', 'Physical education', 'cheyuk', '과목', 2],
  ['사회', 'Social studies', 'sahoe', '과목', 2],
  ['도덕', 'Ethics', 'dodeok', '과목', 2],

  // Level 42 - Stationery (문구)
  ['지우개', 'Eraser', 'jiugae', '문구', 3],
  ['자', 'Ruler', 'ja', '문구', 1],
  ['볼펜', 'Ballpoint pen', 'bolpen', '문구', 2],
  ['크레파스', 'Crayon', 'keurepaseu', '문구', 3],
  ['색연필', 'Colored pencil', 'saegyeonpil', '문구', 3],
  ['풀', 'Glue', 'pul', '문구', 1],
  ['가위', 'Scissors', 'gawi', '문구', 2],
  ['공책', 'Notebook', 'gongchaek', '문구', 2],
  ['스티커', 'Sticker', 'seutikeo', '문구', 3],
  ['파일', 'File/Folder', 'pail', '문구', 2],

  // Level 43 - Playground (놀이터)
  ['그네', 'Swing', 'geune', '놀이', 2],
  ['미끄럼틀', 'Slide', 'mikkeureumteul', '놀이', 3],
  ['시소', 'Seesaw', 'siso', '놀이', 2],
  ['모래', 'Sand', 'morae', '놀이', 2],
  ['공', 'Ball', 'gong', '놀이', 1],
  ['줄넘기', 'Jump rope', 'julneomgi', '놀이', 3],
  ['팽이', 'Spinning top', 'paengi', '놀이', 2],
  ['연', 'Kite', 'yeon', '놀이', 1],
  ['풍선', 'Balloon', 'pungseon', '놀이', 2],
  ['비눗방울', 'Bubble', 'binutbanggul', '놀이', 3],

  // Level 44 - Toys (장난감)
  ['인형', 'Doll', 'inhyeong', '장난감', 2],
  ['로봇', 'Robot', 'robot', '장난감', 2],
  ['레고', 'Lego', 'rego', '장난감', 2],
  ['퍼즐', 'Puzzle', 'peojeul', '장난감', 2],
  ['딱지', 'Card (game)', 'ttakji', '장난감', 2],
  ['구슬', 'Marble', 'guseul', '장난감', 2],
  ['총', 'Gun (toy)', 'chong', '장난감', 1],
  ['블록', 'Block', 'beullok', '장난감', 2],
  ['모형', 'Model', 'mohyeong', '장난감', 2],
  ['색종이', 'Colored paper', 'saekjongi', '장난감', 3],

  // Level 45 - Games (놀이2)
  ['숨바꼭질', 'Hide and seek', 'sumbakkokjil', '놀이', 3],
  ['술래잡기', 'Tag', 'sullaejapgi', '놀이', 3],
  ['윷놀이', 'Yut game', 'yunnori', '놀이', 3],
  ['바둑', 'Go (board game)', 'baduk', '놀이', 2],
  ['장기', 'Korean chess', 'janggi', '놀이', 2],
  ['카드', 'Card', 'kadeu', '놀이', 2],
  ['주사위', 'Dice', 'jusawi', '놀이', 3],
  ['보드게임', 'Board game', 'bodeugoim', '놀이', 3],
  ['체스', 'Chess', 'cheseu', '놀이', 2],
  ['게임', 'Game', 'geim', '놀이', 2],

  // Level 46 - Body 2 (신체2)
  ['이마', 'Forehead', 'ima', '신체', 2],
  ['볼', 'Cheek', 'bol', '신체', 1],
  ['턱', 'Chin', 'teok', '신체', 1],
  ['목', 'Neck', 'mok', '신체', 1],
  ['어깨', 'Shoulder', 'eokkae', '신체', 2],
  ['가슴', 'Chest', 'gaseum', '신체', 2],
  ['등', 'Back', 'deung', '신체', 1],
  ['허리', 'Waist', 'heori', '신체', 2],
  ['무릎', 'Knee', 'mureup', '신체', 2],
  ['발목', 'Ankle', 'balmok', '신체', 2],

  // Level 47 - Health (건강)
  ['건강', 'Health', 'geongang', '건강', 2],
  ['병', 'Disease/Illness', 'byeong', '건강', 1],
  ['감기', 'Cold (illness)', 'gamgi', '건강', 2],
  ['열', 'Fever', 'yeol', '건강', 1],
  ['기침', 'Cough', 'gichim', '건강', 2],
  ['두통', 'Headache', 'dutong', '건강', 2],
  ['상처', 'Wound', 'sangcheo', '건강', 2],
  ['약', 'Medicine', 'yak', '건강', 1],
  ['주사', 'Injection', 'jusa', '건강', 2],
  ['붕대', 'Bandage', 'bungdae', '건강', 2],

  // Level 48 - Medicine (의학)
  ['병원', 'Hospital', 'byeongwon', '의학', 2],
  ['약국', 'Pharmacy', 'yakguk', '의학', 2],
  ['진찰', 'Examination', 'jinchal', '의학', 2],
  ['치료', 'Treatment', 'chiryo', '의학', 2],
  ['수술', 'Surgery', 'susul', '의학', 2],
  ['체온', 'Body temperature', 'cheon', '의학', 2],
  ['혈압', 'Blood pressure', 'hyeorap', '의학', 2],
  ['검사', 'Test/Checkup', 'geomsa', '의학', 2],
  ['입원', 'Hospitalization', 'ibwon', '의학', 2],
  ['퇴원', 'Discharge', 'toewon', '의학', 2],

  // Level 49 - Hygiene (위생)
  ['비누', 'Soap', 'binu', '위생', 2],
  ['수건', 'Towel', 'sugeon', '위생', 2],
  ['칫솔', 'Toothbrush', 'chitsol', '위생', 2],
  ['치약', 'Toothpaste', 'chiyak', '위생', 2],
  ['샴푸', 'Shampoo', 'syampu', '위생', 2],
  ['목욕', 'Bath', 'mogyok', '위생', 2],
  ['세수', 'Face wash', 'sesu', '위생', 2],
  ['빗', 'Comb', 'bit', '위생', 1],
  ['거품', 'Foam/Lather', 'geopum', '위생', 2],
  ['휴지', 'Tissue', 'hyuji', '위생', 2],

  // Level 50 - Exercise 2 (운동2)
  ['스트레칭', 'Stretching', 'seuteureching', '운동', 3],
  ['윗몸일으키기', 'Sit-up', 'winmomireukkigi', '운동', 3],
  ['팔굽혀펴기', 'Push-up', 'palgupyeopyeogi', '운동', 3],
  ['줄넘기', 'Jump rope', 'julneomgi', '운동', 3],
  ['조깅', 'Jogging', 'joging', '운동', 2],
  ['역도', 'Weightlifting', 'yeokdo', '운동', 2],
  ['체조', 'Gymnastics', 'chejo', '운동', 2],
  ['복싱', 'Boxing', 'boksing', '운동', 2],
  ['유도', 'Judo', 'yudo', '운동', 2],
  ['검도', 'Kendo', 'geomdo', '운동', 2],

  // Level 51 - City (도시)
  ['도시', 'City', 'dosi', '장소', 2],
  ['건물', 'Building', 'geonmul', '장소', 2],
  ['도로', 'Road', 'doro', '장소', 2],
  ['다리', 'Bridge', 'dari', '장소', 2],
  ['공장', 'Factory', 'gongjang', '장소', 2],
  ['아파트', 'Apartment', 'apateu', '장소', 3],
  ['시청', 'City hall', 'sicheong', '장소', 2],
  ['광장', 'Square/Plaza', 'gwangjang', '장소', 2],
  ['지도', 'Map', 'jido', '장소', 2],
  ['주소', 'Address', 'juso', '장소', 2],

  // Level 52 - Country (시골)
  ['시골', 'Countryside', 'sigol', '장소', 2],
  ['마을', 'Village', 'maeul', '장소', 2],
  ['논', 'Rice paddy', 'non', '장소', 1],
  ['밭', 'Field', 'bat', '장소', 1],
  ['창고', 'Warehouse', 'changgo', '장소', 2],
  ['우물', 'Well', 'umul', '장소', 2],
  ['울타리', 'Fence', 'ultari', '장소', 3],
  ['헛간', 'Barn', 'heotgan', '장소', 2],
  ['농장', 'Farm', 'nongjang', '장소', 2],
  ['과수원', 'Orchard', 'gwasuwon', '장소', 3],

  // Level 53 - Mountain (산)
  ['봉우리', 'Peak', 'bonguri', '자연', 3],
  ['고개', 'Pass/Ridge', 'gogae', '자연', 2],
  ['바위', 'Rock', 'bawi', '자연', 2],
  ['계곡', 'Valley', 'gyegok', '자연', 2],
  ['숲', 'Forest', 'sup', '자연', 1],
  ['오솔길', 'Trail', 'osolgil', '자연', 3],
  ['약수터', 'Spring water', 'yaksuteo', '자연', 3],
  ['정상', 'Summit', 'jeongsang', '자연', 2],
  ['등산로', 'Hiking trail', 'deungsanro', '자연', 3],
  ['능선', 'Ridge', 'neungseon', '자연', 2],

  // Level 54 - Sea (바다)
  ['파도', 'Wave', 'pado', '자연', 2],
  ['모래', 'Sand', 'morae', '자연', 2],
  ['갯벌', 'Tidal flat', 'gaetbeol', '자연', 2],
  ['등대', 'Lighthouse', 'deungdae', '자연', 2],
  ['항구', 'Harbor', 'hanggu', '자연', 2],
  ['배', 'Boat', 'bae', '자연', 1],
  ['닻', 'Anchor', 'dat', '자연', 1],
  ['조개', 'Seashell', 'jogae', '자연', 2],
  ['해변', 'Beach', 'haebyeon', '자연', 2],
  ['밀물', 'Tide', 'milmul', '자연', 2],

  // Level 55 - Travel (여행)
  ['여권', 'Passport', 'yeogwon', '여행', 2],
  ['비자', 'Visa', 'bija', '여행', 2],
  ['표', 'Ticket', 'pyo', '여행', 1],
  ['짐', 'Luggage', 'jim', '여행', 1],
  ['호텔', 'Hotel', 'hotel', '여행', 2],
  ['관광', 'Sightseeing', 'gwangwang', '여행', 2],
  ['안내', 'Guidance', 'annae', '여행', 2],
  ['예약', 'Reservation', 'yeyak', '여행', 2],
  ['출발', 'Departure', 'chulbal', '여행', 2],
  ['도착', 'Arrival', 'dochak', '여행', 2],

  // Level 56 - Money (돈)
  ['돈', 'Money', 'don', '돈', 1],
  ['동전', 'Coin', 'dongjeon', '돈', 2],
  ['지폐', 'Bill/Banknote', 'jipye', '돈', 2],
  ['값', 'Price', 'gap', '돈', 1],
  ['할인', 'Discount', 'halin', '돈', 2],
  ['세금', 'Tax', 'segeum', '돈', 2],
  ['저금', 'Saving', 'jeogeum', '돈', 2],
  ['통장', 'Bankbook', 'tongjang', '돈', 2],
  ['카드', 'Card', 'kadeu', '돈', 2],
  ['현금', 'Cash', 'hyeongeum', '돈', 2],

  // Level 57 - Shopping (쇼핑)
  ['쇼핑', 'Shopping', 'syoping', '쇼핑', 2],
  ['계산', 'Payment', 'gyesan', '쇼핑', 2],
  ['영수증', 'Receipt', 'yeongsujeung', '쇼핑', 3],
  ['봉투', 'Bag (plastic)', 'bongtu', '쇼핑', 2],
  ['교환', 'Exchange', 'gyohwan', '쇼핑', 2],
  ['환불', 'Refund', 'hwanbul', '쇼핑', 2],
  ['포장', 'Wrapping', 'pojang', '쇼핑', 2],
  ['선물', 'Gift', 'seonmul', '쇼핑', 2],
  ['바코드', 'Barcode', 'bakodeu', '쇼핑', 3],
  ['매장', 'Store', 'maejang', '쇼핑', 2],

  // Level 58 - Market (시장)
  ['시장', 'Market', 'sijang', '장소', 2],
  ['상인', 'Merchant', 'sangin', '장소', 2],
  ['손님', 'Customer', 'sonnim', '장소', 2],
  ['좌판', 'Market stall', 'jwapan', '장소', 2],
  ['흥정', 'Bargaining', 'heungjeong', '장소', 2],
  ['덤', 'Bonus/Extra', 'deom', '장소', 1],
  ['저울', 'Scale', 'jeoul', '장소', 2],
  ['바구니', 'Basket', 'baguni', '장소', 3],
  ['노점', 'Street vendor', 'nojeom', '장소', 2],
  ['떡볶이', 'Tteokbokki', 'tteokbokki', '음식', 3],

  // Level 59 - Food 3 (음식3)
  ['만두', 'Dumpling', 'mandu', '음식', 2],
  ['잡채', 'Glass noodles', 'japchae', '음식', 2],
  ['삼겹살', 'Pork belly', 'samgyeopsal', '음식', 3],
  ['갈비', 'Ribs', 'galbi', '음식', 2],
  ['냉면', 'Cold noodles', 'naengmyeon', '음식', 2],
  ['순두부', 'Soft tofu', 'sundubu', '음식', 3],
  ['김밥', 'Kimbap', 'gimbap', '음식', 2],
  ['치킨', 'Fried chicken', 'chikin', '음식', 2],
  ['피자', 'Pizza', 'pija', '음식', 2],
  ['햄버거', 'Hamburger', 'haembeogeo', '음식', 3],

  // Level 60 - Desserts (디저트)
  ['과자', 'Snack/Cookie', 'gwaja', '음식', 2],
  ['사탕', 'Candy', 'satang', '음식', 2],
  ['초콜릿', 'Chocolate', 'chokollit', '음식', 3],
  ['젤리', 'Jelly', 'jelli', '음식', 2],
  ['아이스크림', 'Ice cream', 'aiseukeurim', '음식', 3],
  ['팥빙수', 'Shaved ice', 'patbingsu', '음식', 3],
  ['호떡', 'Sweet pancake', 'hotteok', '음식', 2],
  ['붕어빵', 'Fish bread', 'bungeoppang', '음식', 3],
  ['떡', 'Rice cake', 'tteok', '음식', 1],
  ['약과', 'Honey cookie', 'yakgwa', '음식', 2],

  // Level 61 - Korean Food (한식)
  ['불고기', 'Bulgogi', 'bulgogi', '한식', 3],
  ['비빔밥', 'Bibimbap', 'bibimbap', '한식', 3],
  ['된장', 'Soybean paste', 'doenjang', '한식', 2],
  ['고추장', 'Red pepper paste', 'gochujang', '한식', 3],
  ['간장', 'Soy sauce', 'ganjang', '한식', 2],
  ['참기름', 'Sesame oil', 'chamgireum', '한식', 3],
  ['깍두기', 'Cubed radish kimchi', 'kkakdugi', '한식', 3],
  ['해물탕', 'Seafood stew', 'haemultang', '한식', 3],
  ['삼계탕', 'Ginseng chicken soup', 'samgyetang', '한식', 3],
  ['잔치국수', 'Banquet noodles', 'janchiguksu', '한식', 3],

  // Level 62 - Restaurant (식당)
  ['식당', 'Restaurant', 'sikdang', '장소', 2],
  ['메뉴', 'Menu', 'menyu', '식당', 2],
  ['주문', 'Order', 'jumun', '식당', 2],
  ['젓가락', 'Chopsticks', 'jeotgarak', '식당', 3],
  ['숟가락', 'Spoon', 'sutgarak', '식당', 3],
  ['접시', 'Plate', 'jeopsi', '식당', 2],
  ['컵', 'Cup', 'keop', '식당', 1],
  ['그릇', 'Bowl', 'geureut', '식당', 2],
  ['냅킨', 'Napkin', 'naepkin', '식당', 2],
  ['계산서', 'Bill/Check', 'gyesanseo', '식당', 3],

  // Level 63 - Kitchen Tools (주방도구)
  ['냄비', 'Pot', 'naembi', '주방', 2],
  ['프라이팬', 'Frying pan', 'peuraipan', '주방', 3],
  ['도마', 'Cutting board', 'doma', '주방', 2],
  ['국자', 'Ladle', 'gukja', '주방', 2],
  ['주걱', 'Spatula', 'jugeok', '주방', 2],
  ['냉장고', 'Refrigerator', 'naengjanggo', '주방', 3],
  ['전자레인지', 'Microwave', 'jeonjareinji', '주방', 3],
  ['오븐', 'Oven', 'obeun', '주방', 2],
  ['믹서기', 'Blender', 'mikseogi', '주방', 3],
  ['식칼', 'Kitchen knife', 'sikkal', '주방', 2],

  // Level 64 - Taste (맛)
  ['맛', 'Taste', 'mat', '맛', 1],
  ['달다', 'Sweet', 'dalda', '맛', 2],
  ['짜다', 'Salty', 'jjada', '맛', 2],
  ['쓰다', 'Bitter', 'sseuda', '맛', 2],
  ['시다', 'Sour', 'sida', '맛', 2],
  ['맵다', 'Spicy', 'maepda', '맛', 2],
  ['싱겁다', 'Bland', 'singeopda', '맛', 3],
  ['고소하다', 'Nutty/Savory', 'gosohada', '맛', 3],
  ['담백하다', 'Light/Plain', 'dambaekada', '맛', 3],
  ['느끼하다', 'Greasy', 'neukkihada', '맛', 3],

  // Level 65 - Smell (향)
  ['향', 'Scent', 'hyang', '감각', 1],
  ['냄새', 'Smell', 'naemsae', '감각', 2],
  ['향기', 'Fragrance', 'hyanggi', '감각', 2],
  ['악취', 'Bad smell', 'akchwi', '감각', 2],
  ['향수', 'Perfume', 'hyangsu', '감각', 2],
  ['연기', 'Smoke', 'yeongi', '감각', 2],
  ['꽃향기', 'Flower scent', 'kkothyanggi', '감각', 3],
  ['소리', 'Sound', 'sori', '감각', 2],
  ['빛', 'Light', 'bit', '감각', 1],
  ['촉감', 'Touch/Texture', 'chokgam', '감각', 2],

  // Level 66 - Family 2 (가족2)
  ['할아버지', 'Grandfather', 'harabeoji', '가족', 3],
  ['삼촌', 'Uncle', 'samchon', '가족', 2],
  ['이모', 'Aunt (mom\'s side)', 'imo', '가족', 2],
  ['고모', 'Aunt (dad\'s side)', 'gomo', '가족', 2],
  ['사촌', 'Cousin', 'sachon', '가족', 2],
  ['조카', 'Niece/Nephew', 'joka', '가족', 2],
  ['며느리', 'Daughter-in-law', 'myeoneuri', '가족', 3],
  ['사위', 'Son-in-law', 'sawi', '가족', 2],
  ['시어머니', 'Mother-in-law', 'sieomeoni', '가족', 3],
  ['장인', 'Father-in-law', 'jangin', '가족', 2],

  // Level 67 - Relationships (관계)
  ['이웃', 'Neighbor', 'iut', '관계', 2],
  ['동료', 'Colleague', 'dongnyo', '관계', 2],
  ['상사', 'Boss', 'sangsa', '관계', 2],
  ['후배', 'Junior', 'hubae', '관계', 2],
  ['선배', 'Senior', 'seonbae', '관계', 2],
  ['연인', 'Lover', 'yeonin', '관계', 2],
  ['부부', 'Married couple', 'bubu', '관계', 2],
  ['신랑', 'Groom', 'sillang', '관계', 2],
  ['신부', 'Bride', 'sinbu', '관계', 2],
  ['손자', 'Grandchild', 'sonja', '관계', 2],

  // Level 68 - Age (나이)
  ['나이', 'Age', 'nai', '나이', 2],
  ['아이', 'Child', 'ai', '나이', 2],
  ['어른', 'Adult', 'eoreun', '나이', 2],
  ['청소년', 'Teenager', 'cheongsonyeon', '나이', 3],
  ['노인', 'Elderly', 'noin', '나이', 2],
  ['젊은이', 'Young person', 'jeolmeuni', '나이', 3],
  ['생일', 'Birthday', 'saengil', '나이', 2],
  ['돌', 'First birthday', 'dol', '나이', 1],
  ['환갑', 'Sixtieth birthday', 'hwangap', '나이', 2],
  ['세대', 'Generation', 'sedae', '나이', 2],

  // Level 69 - Life Events (행사)
  ['결혼', 'Wedding', 'gyeolhon', '행사', 2],
  ['졸업', 'Graduation', 'joreop', '행사', 2],
  ['입학', 'Enrollment', 'iphak', '행사', 2],
  ['취직', 'Getting a job', 'chwijik', '행사', 2],
  ['승진', 'Promotion', 'seungjin', '행사', 2],
  ['은퇴', 'Retirement', 'euntoe', '행사', 2],
  ['이사', 'Moving (house)', 'isa', '행사', 2],
  ['장례', 'Funeral', 'jangnye', '행사', 2],
  ['파티', 'Party', 'pati', '행사', 2],
  ['잔치', 'Feast/Banquet', 'janchi', '행사', 2],

  // Level 70 - Holidays (명절)
  ['설날', 'New Year\'s Day', 'seollal', '명절', 2],
  ['추석', 'Chuseok', 'chuseok', '명절', 2],
  ['크리스마스', 'Christmas', 'keuriseumaseu', '명절', 3],
  ['어린이날', 'Children\'s Day', 'eorininal', '명절', 3],
  ['어버이날', 'Parents\' Day', 'eobeoinal', '명절', 3],
  ['스승의날', 'Teacher\'s Day', 'seungeuinal', '명절', 3],
  ['한글날', 'Hangul Day', 'hangeulnal', '명절', 3],
  ['광복절', 'Liberation Day', 'gwangbokjeol', '명절', 3],
  ['대보름', 'Full moon day', 'daeboreun', '명절', 3],
  ['단오', 'Dano', 'dano', '명절', 2],

  // Level 71 - Technology 1 (기술1)
  ['컴퓨터', 'Computer', 'keompyuteo', '기술', 3],
  ['핸드폰', 'Cell phone', 'haendeupon', '기술', 3],
  ['노트북', 'Laptop', 'noteubuk', '기술', 3],
  ['태블릿', 'Tablet', 'taebeullit', '기술', 3],
  ['마우스', 'Mouse', 'mauseu', '기술', 3],
  ['키보드', 'Keyboard', 'kibodeu', '기술', 3],
  ['화면', 'Screen', 'hwamyeon', '기술', 2],
  ['충전기', 'Charger', 'chungjeongi', '기술', 3],
  ['이어폰', 'Earphone', 'ieopon', '기술', 3],
  ['프린터', 'Printer', 'peurinteo', '기술', 3],

  // Level 72 - Internet (인터넷)
  ['인터넷', 'Internet', 'inteonet', '기술', 3],
  ['검색', 'Search', 'geomsaek', '기술', 2],
  ['사이트', 'Website', 'saiteu', '기술', 3],
  ['이메일', 'Email', 'imeil', '기술', 3],
  ['비밀번호', 'Password', 'bimilbeonho', '기술', 3],
  ['다운로드', 'Download', 'daunrodeu', '기술', 3],
  ['업로드', 'Upload', 'eoplodeu', '기술', 3],
  ['링크', 'Link', 'ringkeu', '기술', 2],
  ['클릭', 'Click', 'keullik', '기술', 2],
  ['와이파이', 'Wi-Fi', 'waipai', '기술', 3],

  // Level 73 - Media (매체)
  ['텔레비전', 'Television', 'tellebijeon', '매체', 3],
  ['라디오', 'Radio', 'radio', '매체', 3],
  ['신문', 'Newspaper', 'sinmun', '매체', 2],
  ['잡지', 'Magazine', 'japji', '매체', 2],
  ['뉴스', 'News', 'nyuseu', '매체', 2],
  ['광고', 'Advertisement', 'gwanggo', '매체', 2],
  ['방송', 'Broadcast', 'bangsong', '매체', 2],
  ['기자', 'Reporter', 'gija', '매체', 2],
  ['채널', 'Channel', 'chaeneol', '매체', 2],
  ['카메라', 'Camera', 'kamera', '매체', 3],

  // Level 74 - Communication (통신)
  ['편지', 'Letter', 'pyeonji', '통신', 2],
  ['소포', 'Package', 'sopo', '통신', 2],
  ['우체국', 'Post office', 'ucheguk', '통신', 3],
  ['우표', 'Stamp', 'upyo', '통신', 2],
  ['택배', 'Delivery', 'taekbae', '통신', 2],
  ['전보', 'Telegram', 'jeonbo', '통신', 2],
  ['팩스', 'Fax', 'paekseu', '통신', 2],
  ['문자', 'Text message', 'munja', '통신', 2],
  ['전화번호', 'Phone number', 'jeonhwabeonho', '통신', 3],
  ['통화', 'Phone call', 'tonghwa', '통신', 2],

  // Level 75 - Apps (앱)
  ['앱', 'App', 'aep', '기술', 1],
  ['게시판', 'Bulletin board', 'gesipan', '기술', 3],
  ['댓글', 'Comment', 'daetgeul', '기술', 2],
  ['좋아요', 'Like', 'joayo', '기술', 3],
  ['공유', 'Share', 'gongyu', '기술', 2],
  ['알림', 'Notification', 'allim', '기술', 2],
  ['설정', 'Settings', 'seoljeong', '기술', 2],
  ['프로필', 'Profile', 'peuropil', '기술', 3],
  ['로그인', 'Login', 'rogein', '기술', 3],
  ['계정', 'Account', 'gyejeong', '기술', 2],

  // Level 76 - Nature 3 (자연3)
  ['무지개', 'Rainbow', 'mujigae', '자연', 3],
  ['폭풍', 'Storm', 'pokpung', '자연', 2],
  ['이슬', 'Dew', 'iseul', '자연', 2],
  ['서리', 'Frost', 'seori', '자연', 2],
  ['안개', 'Fog', 'angae', '자연', 2],
  ['노을', 'Sunset glow', 'noeul', '자연', 2],
  ['새벽', 'Dawn', 'saebyeok', '자연', 2],
  ['황혼', 'Twilight', 'hwanghon', '자연', 2],
  ['여울', 'Shallow rapids', 'yeoul', '자연', 2],
  ['샘', 'Spring (water)', 'saem', '자연', 1],

  // Level 77 - Space (우주)
  ['우주', 'Space/Universe', 'uju', '우주', 2],
  ['지구', 'Earth', 'jigu', '우주', 2],
  ['태양', 'Sun', 'taeyang', '우주', 2],
  ['행성', 'Planet', 'haengseong', '우주', 2],
  ['별자리', 'Constellation', 'byeoljari', '우주', 3],
  ['은하수', 'Milky Way', 'eunhasu', '우주', 3],
  ['혜성', 'Comet', 'hyeseong', '우주', 2],
  ['로켓', 'Rocket', 'roket', '우주', 2],
  ['위성', 'Satellite', 'wiseong', '우주', 2],
  ['우주인', 'Astronaut', 'ujuin', '우주', 3],

  // Level 78 - Earth (지구)
  ['대륙', 'Continent', 'daeryuk', '지리', 2],
  ['바다', 'Ocean', 'bada', '지리', 2],
  ['화산', 'Volcano', 'hwasan', '지리', 2],
  ['지진', 'Earthquake', 'jijin', '지리', 2],
  ['빙하', 'Glacier', 'bingha', '지리', 2],
  ['적도', 'Equator', 'jeokdo', '지리', 2],
  ['남극', 'South Pole', 'namgeuk', '지리', 2],
  ['북극', 'North Pole', 'bukgeuk', '지리', 2],
  ['열대', 'Tropics', 'yeoldae', '지리', 2],
  ['온대', 'Temperate zone', 'ondae', '지리', 2],

  // Level 79 - Environment (환경)
  ['환경', 'Environment', 'hwangyeong', '환경', 2],
  ['오염', 'Pollution', 'oyeom', '환경', 2],
  ['재활용', 'Recycling', 'jaehwaryong', '환경', 3],
  ['쓰레기', 'Trash', 'sseuregi', '환경', 3],
  ['분리수거', 'Waste sorting', 'bunrisugeo', '환경', 3],
  ['공기', 'Air', 'gonggi', '환경', 2],
  ['자연', 'Nature', 'jayeon', '환경', 2],
  ['보호', 'Protection', 'boho', '환경', 2],
  ['절약', 'Conservation', 'jeolyak', '환경', 2],
  ['녹색', 'Green', 'noksaek', '환경', 2],

  // Level 80 - Energy (에너지)
  ['전기', 'Electricity', 'jeongi', '에너지', 2],
  ['가스', 'Gas', 'gaseu', '에너지', 2],
  ['석유', 'Oil/Petroleum', 'seogyu', '에너지', 2],
  ['석탄', 'Coal', 'seoktan', '에너지', 2],
  ['태양열', 'Solar energy', 'taeyangyeol', '에너지', 3],
  ['풍력', 'Wind power', 'pungnyeok', '에너지', 2],
  ['수력', 'Hydropower', 'suryeok', '에너지', 2],
  ['원자력', 'Nuclear power', 'wonjaryeok', '에너지', 3],
  ['배터리', 'Battery', 'baeteori', '에너지', 3],
  ['연료', 'Fuel', 'yeonryo', '에너지', 2],

  // Level 81 - Arts (예술)
  ['예술', 'Art', 'yesul', '예술', 2],
  ['그림', 'Painting', 'geurim', '예술', 2],
  ['조각', 'Sculpture', 'jogak', '예술', 2],
  ['전시', 'Exhibition', 'jeonsi', '예술', 2],
  ['미술관', 'Art museum', 'misulgwan', '예술', 3],
  ['작품', 'Artwork', 'jakpum', '예술', 2],
  ['화가', 'Painter/Artist', 'hwaga', '예술', 2],
  ['붓', 'Brush', 'but', '예술', 1],
  ['물감', 'Paint', 'mulgam', '예술', 2],
  ['캔버스', 'Canvas', 'kaenbeoseu', '예술', 3],

  // Level 82 - Literature (문학)
  ['소설', 'Novel', 'soseol', '문학', 2],
  ['시', 'Poem', 'si', '문학', 1],
  ['수필', 'Essay', 'supil', '문학', 2],
  ['작가', 'Author', 'jakga', '문학', 2],
  ['독자', 'Reader', 'dokja', '문학', 2],
  ['출판', 'Publishing', 'chulpan', '문학', 2],
  ['동화', 'Fairy tale', 'donghwa', '문학', 2],
  ['만화', 'Comics', 'manhwa', '문학', 2],
  ['글', 'Writing', 'geul', '문학', 1],
  ['책방', 'Bookstore', 'chaekbang', '문학', 2],

  // Level 83 - Music 2 (음악2)
  ['멜로디', 'Melody', 'mellodi', '음악', 3],
  ['박자', 'Beat/Rhythm', 'bakja', '음악', 2],
  ['가사', 'Lyrics', 'gasa', '음악', 2],
  ['합창', 'Choir', 'hapchang', '음악', 2],
  ['독주', 'Solo', 'dokju', '음악', 2],
  ['작곡', 'Composition', 'jakgok', '음악', 2],
  ['연주', 'Performance', 'yeonju', '음악', 2],
  ['음표', 'Musical note', 'eumpyo', '음악', 2],
  ['악보', 'Sheet music', 'akbo', '음악', 2],
  ['지휘자', 'Conductor', 'jihwija', '음악', 3],

  // Level 84 - Dance (무용)
  ['무용', 'Dance', 'muyong', '무용', 2],
  ['발레', 'Ballet', 'balle', '무용', 2],
  ['탈춤', 'Mask dance', 'talchum', '무용', 2],
  ['부채춤', 'Fan dance', 'buchaechum', '무용', 3],
  ['민속춤', 'Folk dance', 'minsokchum', '무용', 3],
  ['안무', 'Choreography', 'anmu', '무용', 2],
  ['무대', 'Stage', 'mudae', '무용', 2],
  ['공연', 'Performance', 'gongyeon', '무용', 2],
  ['관객', 'Audience', 'gwangaek', '무용', 2],
  ['박수', 'Applause', 'baksu', '무용', 2],

  // Level 85 - Film (영화)
  ['영화', 'Movie/Film', 'yeonghwa', '영화', 2],
  ['감독', 'Director', 'gamdok', '영화', 2],
  ['배우', 'Actor/Actress', 'baeu', '영화', 2],
  ['대본', 'Script', 'daebon', '영화', 2],
  ['촬영', 'Filming', 'chwaryeong', '영화', 2],
  ['극장', 'Theater', 'geukjang', '영화', 2],
  ['자막', 'Subtitles', 'jamak', '영화', 2],
  ['장면', 'Scene', 'jangmyeon', '영화', 2],
  ['주인공', 'Main character', 'juingong', '영화', 3],
  ['예매', 'Booking', 'yemae', '영화', 2],

  // Level 86 - Daily Routines (일과)
  ['일과', 'Daily routine', 'ilgwa', '생활', 2],
  ['출근', 'Going to work', 'chulgeun', '생활', 2],
  ['퇴근', 'Leaving work', 'toegeun', '생활', 2],
  ['통근', 'Commuting', 'tonggeun', '생활', 2],
  ['식사', 'Meal', 'siksa', '생활', 2],
  ['청소', 'Cleaning', 'cheongso', '생활', 2],
  ['빨래', 'Laundry', 'ppallae', '생활', 2],
  ['설거지', 'Dishwashing', 'seolgeoji', '생활', 3],
  ['장보기', 'Grocery shopping', 'jangbogi', '생활', 3],
  ['산책', 'Walk/Stroll', 'sanchaek', '생활', 2],

  // Level 87 - Morning (아침2)
  ['기상', 'Waking up', 'gisang', '생활', 2],
  ['알람', 'Alarm', 'allam', '생활', 2],
  ['세면', 'Washing face', 'semyeon', '생활', 2],
  ['양치', 'Brushing teeth', 'yangchi', '생활', 2],
  ['옷입기', 'Getting dressed', 'osipgi', '생활', 3],
  ['화장', 'Makeup', 'hwajang', '생활', 2],
  ['면도', 'Shaving', 'myeondo', '생활', 2],
  ['준비', 'Preparation', 'junbi', '생활', 2],
  ['외출', 'Going out', 'oechul', '생활', 2],
  ['등교', 'Going to school', 'deunggyo', '생활', 2],

  // Level 88 - Afternoon (오후)
  ['점심시간', 'Lunch time', 'jeomsim sigan', '생활', 3],
  ['낮잠', 'Nap', 'natjam', '생활', 2],
  ['간식', 'Snack', 'gansik', '생활', 2],
  ['수업', 'Class', 'sueop', '생활', 2],
  ['회의', 'Meeting', 'hoeui', '생활', 2],
  ['숙제', 'Homework', 'sukje', '생활', 2],
  ['방과후', 'After school', 'banggwahu', '생활', 3],
  ['학원', 'Academy', 'hagwon', '생활', 2],
  ['약속', 'Appointment', 'yaksok', '생활', 2],
  ['하교', 'Leaving school', 'hagyo', '생활', 2],

  // Level 89 - Evening (저녁2)
  ['귀가', 'Coming home', 'gwiga', '생활', 2],
  ['저녁식사', 'Dinner', 'jeonyeoksiksa', '생활', 3],
  ['텔레비전', 'TV', 'tellebijeon', '생활', 3],
  ['독서', 'Reading', 'dokseo', '생활', 2],
  ['취침', 'Going to bed', 'chwichim', '생활', 2],
  ['일기', 'Diary', 'ilgi', '생활', 2],
  ['샤워', 'Shower', 'syawo', '생활', 2],
  ['휴식', 'Rest', 'hyusik', '생활', 2],
  ['가족시간', 'Family time', 'gajok sigan', '생활', 3],
  ['대화', 'Conversation', 'daehwa', '생활', 2],

  // Level 90 - Night (밤2)
  ['잠자리', 'Bedtime', 'jamjari', '생활', 3],
  ['불끄기', 'Turning off lights', 'bulkkeugi', '생활', 3],
  ['꿈꾸기', 'Dreaming', 'kkumkkugi', '생활', 3],
  ['야식', 'Late-night snack', 'yasik', '생활', 2],
  ['별보기', 'Stargazing', 'byeolbogi', '생활', 3],
  ['야경', 'Night view', 'yagyeong', '생활', 2],
  ['고요', 'Silence', 'goyo', '생활', 2],
  ['어둠', 'Darkness', 'eodum', '생활', 2],
  ['수면', 'Sleep', 'sumyeon', '생활', 2],
  ['달빛', 'Moonlight', 'dalbit', '생활', 2],

  // Level 91 - Adjectives 1 (형용사1)
  ['좋다', 'Good', 'jota', '형용사', 2],
  ['나쁘다', 'Bad', 'nappeuda', '형용사', 3],
  ['예쁘다', 'Pretty', 'yeppeuda', '형용사', 3],
  ['멋있다', 'Cool/Handsome', 'meositta', '형용사', 3],
  ['귀엽다', 'Cute', 'gwiyeopda', '형용사', 3],
  ['춥다', 'Cold', 'chupda', '형용사', 2],
  ['덥다', 'Hot', 'deopda', '형용사', 2],
  ['따뜻하다', 'Warm', 'ttatteuthada', '형용사', 3],
  ['시원하다', 'Cool/Refreshing', 'siwonhada', '형용사', 3],
  ['밝다', 'Bright', 'bakda', '형용사', 2],

  // Level 92 - Adjectives 2 (형용사2)
  ['어둡다', 'Dark', 'eodupda', '형용사', 3],
  ['넓다', 'Wide', 'neolda', '형용사', 2],
  ['좁다', 'Narrow', 'jopda', '형용사', 2],
  ['새롭다', 'New', 'saeropda', '형용사', 3],
  ['오래되다', 'Old', 'oraedoeda', '형용사', 3],
  ['쉽다', 'Easy', 'swipda', '형용사', 2],
  ['어렵다', 'Difficult', 'eoryeopda', '형용사', 3],
  ['재미있다', 'Fun/Interesting', 'jaemiitda', '형용사', 3],
  ['지루하다', 'Boring', 'jiruhada', '형용사', 3],
  ['깨끗하다', 'Clean', 'kkaekkeuthada', '형용사', 3],

  // Level 93 - Adverbs (부사)
  ['매우', 'Very', 'maeu', '부사', 2],
  ['아주', 'Very much', 'aju', '부사', 2],
  ['조금', 'A little', 'jogeum', '부사', 2],
  ['많이', 'A lot', 'mani', '부사', 2],
  ['빨리', 'Quickly', 'ppalli', '부사', 2],
  ['천천히', 'Slowly', 'cheoncheonhi', '부사', 3],
  ['자주', 'Often', 'jaju', '부사', 2],
  ['가끔', 'Sometimes', 'gakkeum', '부사', 2],
  ['항상', 'Always', 'hangsang', '부사', 2],
  ['절대', 'Never/Absolutely', 'jeoldae', '부사', 2],

  // Level 94 - Counters (단위)
  ['개', 'Counter (general)', 'gae', '단위', 1],
  ['명', 'Counter (people)', 'myeong', '단위', 1],
  ['마리', 'Counter (animals)', 'mari', '단위', 2],
  ['병', 'Counter (bottles)', 'byeong', '단위', 1],
  ['잔', 'Counter (cups)', 'jan', '단위', 1],
  ['장', 'Counter (sheets)', 'jang', '단위', 1],
  ['권', 'Counter (books)', 'gwon', '단위', 1],
  ['대', 'Counter (machines)', 'dae', '단위', 1],
  ['벌', 'Counter (clothing)', 'beol', '단위', 1],
  ['켤레', 'Counter (pairs)', 'kyeolle', '단위', 2],

  // Level 95 - Conjunctions (접속)
  ['그리고', 'And', 'geurigo', '접속사', 3],
  ['그러나', 'But', 'geureona', '접속사', 3],
  ['그래서', 'So/Therefore', 'geuraeseo', '접속사', 3],
  ['그런데', 'By the way', 'geureonde', '접속사', 3],
  ['하지만', 'However', 'hajiman', '접속사', 3],
  ['또는', 'Or', 'ttoneun', '접속사', 2],
  ['그래도', 'Still/Nevertheless', 'geuraedo', '접속사', 3],
  ['그러면', 'Then/If so', 'geureomyeon', '접속사', 3],
  ['왜냐하면', 'Because', 'waenyahamyeon', '접속사', 3],
  ['따라서', 'Therefore', 'ttaraseo', '접속사', 3],

  // Level 96 - Review: People & Body (복습: 사람/신체)
  ['사람', 'Person', 'saram', '복습', 2],
  ['여자', 'Woman', 'yeoja', '복습', 2],
  ['남자', 'Man', 'namja', '복습', 2],
  ['학생', 'Student', 'haksaeng', '복습', 2],
  ['선생', 'Teacher', 'seonsaeng', '복습', 2],
  ['손가락', 'Finger', 'songarak', '복습', 3],
  ['발가락', 'Toe', 'balgarak', '복습', 3],
  ['심장', 'Heart', 'simjang', '복습', 2],
  ['피', 'Blood', 'pi', '복습', 1],
  ['뼈', 'Bone', 'ppyeo', '복습', 1],

  // Level 97 - Review: Nature & Animals (복습: 자연/동물)
  ['나뭇잎', 'Leaf', 'namunnip', '복습', 3],
  ['열매', 'Fruit (on tree)', 'yeolmae', '복습', 2],
  ['뿌리', 'Root', 'ppuri', '복습', 2],
  ['줄기', 'Stem', 'julgi', '복습', 2],
  ['곰', 'Bear', 'gom', '복습', 1],
  ['사자', 'Lion', 'saja', '복습', 2],
  ['원숭이', 'Monkey', 'wonsungi', '복습', 3],
  ['코끼리', 'Elephant', 'kokkiri', '복습', 3],
  ['기린', 'Giraffe', 'girin', '복습', 2],
  ['하마', 'Hippo', 'hama', '복습', 2],

  // Level 98 - Review: Places & Things (복습: 장소/사물)
  ['교실', 'Classroom', 'gyosil', '복습', 2],
  ['도서관', 'Library', 'doseogwan', '복습', 3],
  ['화장실', 'Bathroom', 'hwajangsil', '복습', 3],
  ['운동장', 'Playground', 'undongjang', '복습', 3],
  ['교회', 'Church', 'gyohoe', '복습', 2],
  ['절', 'Temple', 'jeol', '복습', 1],
  ['우산', 'Umbrella', 'usan', '복습', 2],
  ['열쇠', 'Key', 'yeolsoe', '복습', 2],
  ['지갑', 'Wallet', 'jigap', '복습', 2],
  ['안경', 'Glasses', 'angyeong', '복습', 2],

  // Level 99 - Review: Actions & Expressions (복습: 동작/표현)
  ['가다', 'To go', 'gada', '복습', 2],
  ['오다', 'To come', 'oda', '복습', 2],
  ['하다', 'To do', 'hada', '복습', 2],
  ['되다', 'To become', 'doeda', '복습', 2],
  ['있다', 'To exist/have', 'itda', '복습', 2],
  ['없다', 'To not exist', 'eopda', '복습', 2],
  ['알다', 'To know', 'alda', '복습', 2],
  ['모르다', 'To not know', 'moreuda', '복습', 3],
  ['사다', 'To buy', 'sada', '복습', 2],
  ['팔다', 'To sell', 'palda', '복습', 2],

  // Level 100 - Review: Mixed Essential (복습: 필수혼합)
  ['나라', 'Country', 'nara', '복습', 2],
  ['한국', 'Korea', 'hanguk', '복습', 2],
  ['세계', 'World', 'segye', '복습', 2],
  ['평화', 'Peace', 'pyeonghwa', '복습', 2],
  ['자유', 'Freedom', 'jayu', '복습', 2],
  ['희망', 'Hope', 'huimang', '복습', 2],
  ['꿈', 'Dream', 'kkum', '복습', 1],
  ['미래', 'Future', 'mirae', '복습', 2],
  ['행복', 'Happiness', 'haengbok', '복습', 2],
  ['감사', 'Gratitude', 'gamsa', '복습', 2],
];

// Convert to PuzzleWord objects
export const beginnerWords: PuzzleWord[] = rawWords.map((w, i) => ({
  id: `b-${String(i + 1).padStart(3, '0')}`,
  korean: w[0],
  english: w[1],
  romanization: w[2],
  category: w[3],
  difficulty: w[4],
}));

// Level titles
const levelTitles: string[] = [
  'Basic Nature & Daily Life',   // 1
  'Family',                       // 2
  'Body Parts',                   // 3
  'Animals',                      // 4
  'Food 1',                       // 5
  'Colors',                       // 6
  'Nature 2',                     // 7
  'Places 1',                     // 8
  'Time & Days',                  // 9
  'Objects 1',                    // 10
  'Food 2',                       // 11
  'Verbs as Nouns',               // 12
  'Weather & Seasons',            // 13
  'Numbers',                      // 14
  'Transportation',               // 15
  'Clothing',                     // 16
  'Feelings & Emotions',          // 17
  'Greetings & Expressions',      // 18
  'Fruits',                       // 19
  'Vegetables',                   // 20
  'Drinks',                       // 21
  'Cooking',                      // 22
  'Furniture',                    // 23
  'Tools',                        // 24
  'Musical Instruments',          // 25
  'Sports',                       // 26
  'Hobbies',                      // 27
  'Jobs 1',                       // 28
  'Weather 2',                    // 29
  'Geography',                    // 30
  'Insects',                      // 31
  'Sea Creatures',                // 32
  'Farm Animals',                 // 33
  'Birds',                        // 34
  'Plants',                       // 35
  'Shapes',                       // 36
  'Materials',                    // 37
  'Actions 1',                    // 38
  'Actions 2',                    // 39
  'States',                       // 40
  'School Subjects',              // 41
  'Stationery',                   // 42
  'Playground',                   // 43
  'Toys',                         // 44
  'Games',                        // 45
  'Body 2',                       // 46
  'Health',                       // 47
  'Medicine',                     // 48
  'Hygiene',                      // 49
  'Exercise 2',                   // 50
  'City',                         // 51
  'Countryside',                  // 52
  'Mountain',                     // 53
  'Sea',                          // 54
  'Travel',                       // 55
  'Money',                        // 56
  'Shopping',                     // 57
  'Market',                       // 58
  'Food 3',                       // 59
  'Desserts',                     // 60
  'Korean Food',                  // 61
  'Restaurant',                   // 62
  'Kitchen Tools',                // 63
  'Taste',                        // 64
  'Smell & Senses',               // 65
  'Family 2',                     // 66
  'Relationships',                // 67
  'Age',                          // 68
  'Life Events',                  // 69
  'Holidays',                     // 70
  'Technology 1',                 // 71
  'Internet',                     // 72
  'Media',                        // 73
  'Communication',                // 74
  'Apps',                         // 75
  'Nature 3',                     // 76
  'Space',                        // 77
  'Earth',                        // 78
  'Environment',                  // 79
  'Energy',                       // 80
  'Arts',                         // 81
  'Literature',                   // 82
  'Music 2',                      // 83
  'Dance',                        // 84
  'Film',                         // 85
  'Daily Routines',               // 86
  'Morning',                      // 87
  'Afternoon',                    // 88
  'Evening',                      // 89
  'Night',                        // 90
  'Adjectives 1',                 // 91
  'Adjectives 2',                 // 92
  'Adverbs',                      // 93
  'Counters',                     // 94
  'Conjunctions',                 // 95
  'Review: People & Body',        // 96
  'Review: Nature & Animals',     // 97
  'Review: Places & Things',      // 98
  'Review: Actions & Expressions', // 99
  'Review: Mixed Essential',      // 100
];

// Generate levels (100 levels, 10 words each)
export const beginnerLevels: PuzzleLevel[] = Array.from({ length: 100 }, (_, i) => ({
  id: `beg-${String(i + 1).padStart(2, '0')}`,
  levelNumber: i + 1,
  difficultyLevel: 'beginner' as const,
  title: levelTitles[i] || `Level ${i + 1}`,
  titleKey: `puzzle.beginner.level${i + 1}`,
  words: beginnerWords.slice(i * 10, (i + 1) * 10),
  xpReward: 50 + i * 10,
  isPremium: i >= 10, // First 10 levels are free
}));

export const beginnerCategory: PuzzleCategory = {
  id: 'beginner',
  name: 'Beginner',
  nameKey: 'puzzle.category.beginner',
  description: 'Start your Korean journey with essential 1-2 syllable words',
  descriptionKey: 'puzzle.category.beginnerDesc',
  icon: '🌱',
  color: 'from-emerald-400 to-teal-500',
  totalWords: beginnerWords.length,
  totalLevels: beginnerLevels.length,
  levels: beginnerLevels,
  isPremium: false,
  freeLevels: 10,
  syllableRange: '1-2',
};
