// K-pop 이모지 퀴즈 데이터
// 영어 제목도 한글로 표기 (예: Hype Boy -> 하입보이)

export interface KpopQuizItem {
  id: number;
  emoji: string;
  answer: string;
  artist: string;
  options: string[]; // 초급용 4지선다 보기
  syllables: string[]; // 중급용 조합할 음절들
  pronunciation?: string; // 발음 (로마자)
  meaning?: string; // 뜻 (영어)
}

export const kpopQuizData: KpopQuizItem[] = [
  // BTS
  { id: 1, emoji: '🔥🔥🔥', answer: '불타오르네', artist: 'BTS', options: ['불타오르네', '봄날', '피땀눈물', '다이너마이트'], syllables: ['불', '타', '오', '르', '네'] },
  { id: 2, emoji: '🌸☀️', answer: '봄날', artist: 'BTS', options: ['봄날', '가을', '여름', '겨울'], syllables: ['봄', '날'] },
  { id: 3, emoji: '💧😓😢', answer: '피땀눈물', artist: 'BTS', options: ['피땀눈물', '눈물', '피눈물', '땀과눈물'], syllables: ['피', '땀', '눈', '물'] },
  { id: 4, emoji: '💣💥', answer: '다이너마이트', artist: 'BTS', options: ['다이너마이트', '폭발', '불꽃', '화약'], syllables: ['다', '이', '너', '마', '이', '트'] },
  { id: 5, emoji: '🧈🧈', answer: '버터', artist: 'BTS', options: ['버터', '잼', '빵', '치즈'], syllables: ['버', '터'] },
  { id: 6, emoji: '🆔🤔', answer: '아이돌', artist: 'BTS', options: ['아이돌', '스타', '아티스트', '가수'], syllables: ['아', '이', '돌'] },
  { id: 7, emoji: '🧬🧬', answer: '디엔에이', artist: 'BTS', options: ['디엔에이', '유전자', '과학', '생명'], syllables: ['디', '엔', '에', '이'] },
  { id: 8, emoji: '🏃💨', answer: '런', artist: 'BTS', options: ['런', '워크', '댄스', '점프'], syllables: ['런'] },
  { id: 9, emoji: '🎤🎶👦', answer: '보이위드러브', artist: 'BTS', options: ['보이위드러브', '러브송', '보이밴드', '러브보이'], syllables: ['보', '이', '위', '드', '러', '브'] },
  { id: 10, emoji: '🌌✨', answer: '마이크로코스모', artist: 'BTS', options: ['마이크로코스모', '우주', '별빛', '은하'], syllables: ['마', '이', '크', '로', '코', '스', '모'] },

  // BLACKPINK
  { id: 11, emoji: '💗🖤', answer: '블랙핑크', artist: 'BLACKPINK', options: ['블랙핑크', '레드벨벳', '아이즈원', '트와이스'], syllables: ['블', '랙', '핑', '크'] },
  { id: 12, emoji: '🔫💥', answer: '뚜두뚜두', artist: 'BLACKPINK', options: ['뚜두뚜두', '붐바야', '킬디스러브', '하우유라잇댓'], syllables: ['뚜', '두', '뚜', '두'] },
  { id: 13, emoji: '🎵👄', answer: '휘파람', artist: 'BLACKPINK', options: ['휘파람', '전화벨', '노래', '멜로디'], syllables: ['휘', '파', '람'] },
  { id: 14, emoji: '💀❤️', answer: '킬디스러브', artist: 'BLACKPINK', options: ['킬디스러브', '사랑해', '러브이즈데드', '킬러'], syllables: ['킬', '디', '스', '러', '브'] },
  { id: 15, emoji: '🔥🔥💃', answer: '붐바야', artist: 'BLACKPINK', options: ['붐바야', '불타오르네', '핫', '파이어'], syllables: ['붐', '바', '야'] },
  { id: 16, emoji: '🤷‍♀️❓', answer: '하우유라잇댓', artist: 'BLACKPINK', options: ['하우유라잇댓', '왓츠업', '웬유리브미', '왓이즈러브'], syllables: ['하', '우', '유', '라', '잇', '댓'] },
  { id: 17, emoji: '👸🏻✨', answer: '프리티새비지', artist: 'BLACKPINK', options: ['프리티새비지', '뷰티풀', '와일드', '엘레강스'], syllables: ['프', '리', '티', '새', '비', '지'] },
  { id: 18, emoji: '💃🔥', answer: '플레잉위드파이어', artist: 'BLACKPINK', options: ['플레잉위드파이어', '불장난', '핫플레이', '파이어댄스'], syllables: ['플', '레', '잉', '위', '드', '파', '이', '어'] },

  // NewJeans
  { id: 19, emoji: '👖✨', answer: '뉴진스', artist: 'NewJeans', options: ['뉴진스', '청바지', '데님', '팬츠'], syllables: ['뉴', '진', '스'] },
  { id: 20, emoji: '👀💕', answer: '어텐션', artist: 'NewJeans', options: ['어텐션', '주목', '집중', '관심'], syllables: ['어', '텐', '션'] },
  { id: 21, emoji: '🔥👦', answer: '하입보이', artist: 'NewJeans', options: ['하입보이', '핫보이', '쿨보이', '파이어보이'], syllables: ['하', '입', '보', '이'] },
  { id: 22, emoji: '🍪🍪', answer: '쿠키', artist: 'NewJeans', options: ['쿠키', '케이크', '빵', '캔디'], syllables: ['쿠', '키'] },
  { id: 23, emoji: '🐰👯‍♀️', answer: '디토', artist: 'NewJeans', options: ['디토', '세임', '라이크', '미투'], syllables: ['디', '토'] },
  { id: 24, emoji: '😊😊', answer: '슈퍼샤이', artist: 'NewJeans', options: ['슈퍼샤이', '슈퍼스타', '샤이니', '수줍음'], syllables: ['슈', '퍼', '샤', '이'] },
  { id: 25, emoji: '🎠🎡', answer: '이엠제이', artist: 'NewJeans', options: ['이엠제이', '놀이공원', '회전목마', '관람차'], syllables: ['이', '엠', '제', '이'] },

  // IVE
  { id: 26, emoji: '👧🔥', answer: '아이브', artist: 'IVE', options: ['아이브', '아이유', '아이돌', '아이즈원'], syllables: ['아', '이', '브'] },
  { id: 27, emoji: '💎👑', answer: '일레븐', artist: 'IVE', options: ['일레븐', '열하나', '텐', '트웰브'], syllables: ['일', '레', '븐'] },
  { id: 28, emoji: '❤️💕', answer: '러브다이브', artist: 'IVE', options: ['러브다이브', '러브샷', '러브레터', '러브스토리'], syllables: ['러', '브', '다', '이', '브'] },
  { id: 29, emoji: '👑💃', answer: '애프터라이크', artist: 'IVE', options: ['애프터라이크', '비포러브', '애프터러브', '라이크잇'], syllables: ['애', '프', '터', '라', '이', '크'] },
  { id: 30, emoji: '🌸🦋', answer: '키치', artist: 'IVE', options: ['키치', '큐티', '프리티', '러블리'], syllables: ['키', '치'] },
  { id: 31, emoji: '👧✨', answer: '아이엠', artist: 'IVE', options: ['아이엠', '유아', '위아', '쉬이즈'], syllables: ['아', '이', '엠'] },

  // aespa
  { id: 32, emoji: '🤖🌐', answer: '에스파', artist: 'aespa', options: ['에스파', '아바타', '가상', '미래'], syllables: ['에', '스', '파'] },
  { id: 33, emoji: '🐍🔥', answer: '넥스트레벨', artist: 'aespa', options: ['넥스트레벨', '다음단계', '레벨업', '업그레이드'], syllables: ['넥', '스', '트', '레', '벨'] },
  { id: 34, emoji: '🖤🃏', answer: '블랙맘바', artist: 'aespa', options: ['블랙맘바', '블랙스네이크', '다크서펜트', '뱀'], syllables: ['블', '랙', '맘', '바'] },
  { id: 35, emoji: '👹👾', answer: '새비지', artist: 'aespa', options: ['새비지', '와일드', '크레이지', '몬스터'], syllables: ['새', '비', '지'] },
  { id: 36, emoji: '💫✨', answer: '슈퍼노바', artist: 'aespa', options: ['슈퍼노바', '스타', '갤럭시', '유니버스'], syllables: ['슈', '퍼', '노', '바'] },
  { id: 37, emoji: '🎬🎭', answer: '드라마', artist: 'aespa', options: ['드라마', '무비', '씬', '액트'], syllables: ['드', '라', '마'] },

  // TWICE
  { id: 38, emoji: '💕💕', answer: '트와이스', artist: 'TWICE', options: ['트와이스', '원스', '쓰라이스', '포타임'], syllables: ['트', '와', '이', '스'] },
  { id: 39, emoji: '📱📞', answer: '티티', artist: 'TWICE', options: ['티티', '콜미', '폰', '텍스트'], syllables: ['티', '티'] },
  { id: 40, emoji: '🍭🍬', answer: '치어업', artist: 'TWICE', options: ['치어업', '캔디팝', '스위트', '럭키'], syllables: ['치', '어', '업'] },
  { id: 41, emoji: '❓💕', answer: '왓이즈러브', artist: 'TWICE', options: ['왓이즈러브', '러브이즈', '웨어이즈러브', '후이즈러브'], syllables: ['왓', '이', '즈', '러', '브'] },
  { id: 42, emoji: '💃🎵', answer: '팬시', artist: 'TWICE', options: ['팬시', '댄시', '로맨틱', '프리티'], syllables: ['팬', '시'] },
  { id: 43, emoji: '😍👀', answer: '필라이크', artist: 'TWICE', options: ['필라이크', '씽크라이크', '룩라이크', '액트라이크'], syllables: ['필', '라', '이', '크'] },
  { id: 44, emoji: '🌈🎉', answer: '라이키', artist: 'TWICE', options: ['라이키', '러비', '해피', '럭키'], syllables: ['라', '이', '키'] },

  // EXO
  { id: 45, emoji: '🙅🙆🏽‍♀️', answer: '엑소', artist: 'EXO', options: ['엑소', '갤럭시', '플래닛', '스페이스'], syllables: ['엑', '소'] },
  { id: 46, emoji: '🐺👸', answer: '늑대와미녀', artist: 'EXO', options: ['늑대와미녀', '미녀와야수', '늑대의노래', '달밤의늑대'], syllables: ['늑', '대', '와', '미', '녀'] },
  { id: 47, emoji: '📞👶🏻', answer: '콜미베이비', artist: 'EXO', options: ['콜미베이비', '베이비콜', '링미', '폰콜'], syllables: ['콜', '미', '베', '이', '비'] },
  { id: 48, emoji: '👾', answer: '몬스터', artist: 'EXO', options: ['몬스터', '뱀파이어', '좀비', '드래곤'], syllables: ['몬', '스', '터'] },
  { id: 49, emoji: '❤️🔫', answer: '러브샷', artist: 'EXO', options: ['러브샷', '샷건', '하트비트', '러브킬'], syllables: ['러', '브', '샷'] },
  { id: 50, emoji: '⚡⚡', answer: '파워', artist: 'EXO', options: ['파워', '에너지', '포스', '스트렝스'], syllables: ['파', '워'] },

  // Red Velvet
  { id: 51, emoji: '🔴🍰', answer: '레드벨벳', artist: 'Red Velvet', options: ['레드벨벳', '블랙케이크', '화이트케이크', '핑크벨벳'], syllables: ['레', '드', '벨', '벳'] },
  { id: 52, emoji: '👀😵', answer: '싸이코', artist: 'Red Velvet', options: ['싸이코', '크레이지', '매드', '인세인'], syllables: ['싸', '이', '코'] },
  { id: 53, emoji: '👯‍♀️👯‍♀️', answer: '파워업', artist: 'Red Velvet', options: ['파워업', '레벨업', '업그레이드', '에너지'], syllables: ['파', '워', '업'] },
  { id: 54, emoji: '🍑🍑', answer: '피카부', artist: 'Red Velvet', options: ['피카부', '하이드', '시크', '플레이'], syllables: ['피', '카', '부'] },
  { id: 55, emoji: '🎂🎉', answer: '레드플레이버', artist: 'Red Velvet', options: ['레드플레이버', '블루테이스트', '그린컬러', '옐로우'], syllables: ['레', '드', '플', '레', '이', '버'] },
  { id: 56, emoji: '🌌✨', answer: '코스믹', artist: 'Red Velvet', options: ['코스믹', '스페이스', '갤럭시', '유니버스'], syllables: ['코', '스', '믹'] },

  // Stray Kids
  { id: 57, emoji: '🦊🏃', answer: '스트레이키즈', artist: 'Stray Kids', options: ['스트레이키즈', '로스트보이즈', '와일드키즈', '런어웨이'], syllables: ['스', '트', '레', '이', '키', '즈'] },
  { id: 58, emoji: '🔥💥', answer: '갓즈메뉴', artist: 'Stray Kids', options: ['갓즈메뉴', '신의요리', '천국의맛', '슈퍼밀'], syllables: ['갓', '즈', '메', '뉴'] },
  { id: 59, emoji: '🚪🔙', answer: '백도어', artist: 'Stray Kids', options: ['백도어', '프론트도어', '사이드도어', '비밀문'], syllables: ['백', '도', '어'] },
  { id: 60, emoji: '👊💪', answer: '챔피언', artist: 'Stray Kids', options: ['챔피언', '위너', '넘버원', '빅토리'], syllables: ['챔', '피', '언'] },
  { id: 61, emoji: '⚡🔥', answer: '소리꾼', artist: 'Stray Kids', options: ['소리꾼', '가수', '보컬', '싱어'], syllables: ['소', '리', '꾼'] },

  // SEVENTEEN
  { id: 62, emoji: '1️⃣7️⃣', answer: '세븐틴', artist: 'SEVENTEEN', options: ['세븐틴', '식스틴', '에잇틴', '트웬티'], syllables: ['세', '븐', '틴'] },
  { id: 63, emoji: '💎💍', answer: '아주나이스', artist: 'SEVENTEEN', options: ['아주나이스', '베리굿', '소굿', '퍼펙트'], syllables: ['아', '주', '나', '이', '스'] },
  { id: 64, emoji: '🌸✨', answer: '예쁘다', artist: 'SEVENTEEN', options: ['예쁘다', '아름답다', '귀엽다', '멋지다'], syllables: ['예', '쁘', '다'] },
  { id: 65, emoji: '👏👏', answer: '박수', artist: 'SEVENTEEN', options: ['박수', '환호', '응원', '축하'], syllables: ['박', '수'] },
  { id: 66, emoji: '🏠❤️', answer: '홈', artist: 'SEVENTEEN', options: ['홈', '하우스', '패밀리', '마이룸'], syllables: ['홈'] },
  { id: 67, emoji: '☀️☀️', answer: '슈퍼', artist: 'SEVENTEEN', options: ['슈퍼', '울트라', '메가', '하이퍼'], syllables: ['슈', '퍼'] },

  // NCT
  { id: 68, emoji: '🌃🏙️', answer: '엔시티', artist: 'NCT', options: ['엔시티', '메가시티', '빅타운', '스카이시티'], syllables: ['엔', '시', '티'] },
  { id: 69, emoji: '🍒🍒', answer: '체리밤', artist: 'NCT 127', options: ['체리밤', '애플밤', '피치밤', '그레이프밤'], syllables: ['체', '리', '밤'] },
  { id: 70, emoji: '🔥⛽', answer: '영웅', artist: 'NCT 127', options: ['영웅', '히어로', '슈퍼맨', '챔피언'], syllables: ['영', '웅'] },
  { id: 71, emoji: '🎵🎤', answer: '스티커', artist: 'NCT 127', options: ['스티커', '포스터', '앨범', '티켓'], syllables: ['스', '티', '커'] },
  { id: 72, emoji: '⚡🔌', answer: '킥잇', artist: 'NCT 127', options: ['킥잇', '펀치잇', '히트잇', '드롭잇'], syllables: ['킥', '잇'] },

  // ITZY
  { id: 73, emoji: '👧✨', answer: '있지', artist: 'ITZY', options: ['있지', '없지', '하지', '되지'], syllables: ['있', '지'] },
  { id: 74, emoji: '💃🎵', answer: '달라달라', artist: 'ITZY', options: ['달라달라', '같아같아', '달라져', '바뀌어'], syllables: ['달', '라', '달', '라'] },
  { id: 75, emoji: '😱😈', answer: '마피아', artist: 'ITZY', options: ['마피아', '갱스터', '보스', '킬러'], syllables: ['마', '피', '아'] },
  { id: 76, emoji: '🏃‍♀️💨', answer: '워너비', artist: 'ITZY', options: ['워너비', '비마이', '빅미', '세임'], syllables: ['워', '너', '비'] },
  { id: 77, emoji: '✨👀', answer: '스닉', artist: 'ITZY', options: ['스닉', '피크', '룩', '워치'], syllables: ['스', '닉'] },

  // LE SSERAFIM
  { id: 78, emoji: '👼✨', answer: '르세라핌', artist: 'LE SSERAFIM', options: ['르세라핌', '엔젤스', '세라핌', '체루빔'], syllables: ['르', '세', '라', '핌'] },
  { id: 79, emoji: '🦋✨', answer: '피어리스', artist: 'LE SSERAFIM', options: ['피어리스', '브레이브', '스트롱', '파워풀'], syllables: ['피', '어', '리', '스'] },
  { id: 80, emoji: '🎰💰', answer: '안티프래자일', artist: 'LE SSERAFIM', options: ['안티프래자일', '언브레이커블', '스트롱', '터프'], syllables: ['안', '티', '프', '래', '자', '일'] },
  { id: 81, emoji: '👸💎', answer: '이즈마이컬', artist: 'LE SSERAFIM', options: ['이즈마이컬', '모먼트', '타임', '나의차례'], syllables: ['이', '즈', '마', '이', '컬'] },
  { id: 82, emoji: '🌟💫', answer: '퍼펙트나잇', artist: 'LE SSERAFIM', options: ['퍼펙트나잇', '굿나잇', '스위트나잇', '롱나잇'], syllables: ['퍼', '펙', '트', '나', '잇'] },

  // (G)I-DLE
  { id: 83, emoji: '👧👧', answer: '여자아이들', artist: '(G)I-DLE', options: ['여자아이들', '소녀들', '걸스', '레이디스'], syllables: ['여', '자', '아', '이', '들'] },
  { id: 84, emoji: '👑✨', answer: '퀸카', artist: '(G)I-DLE', options: ['퀸카', '킹카', '프린세스', '퀸'], syllables: ['퀸', '카'] },
  { id: 85, emoji: '🔥💃', answer: '톰보이', artist: '(G)I-DLE', options: ['톰보이', '걸리쉬', '보이쉬', '쿨걸'], syllables: ['톰', '보', '이'] },
  { id: 86, emoji: '🧚✨', answer: '네버랜드', artist: '(G)I-DLE', options: ['네버랜드', '원더랜드', '드림랜드', '판타지'], syllables: ['네', '버', '랜', '드'] },
  { id: 87, emoji: '🌙✨', answer: '화', artist: '(G)I-DLE', options: ['화', '불', '분노', '열정'], syllables: ['화'] },

  // PSY
  { id: 88, emoji: '🐴💃', answer: '강남스타일', artist: 'PSY', options: ['강남스타일', '서울스타일', '홍대스타일', '이태원스타일'], syllables: ['강', '남', '스', '타', '일'] },
  { id: 89, emoji: '🍾🥂', answer: '젠틀맨', artist: 'PSY', options: ['젠틀맨', '신사', '멋쟁이', '프린스'], syllables: ['젠', '틀', '맨'] },
  { id: 90, emoji: '🦜🐦', answer: '대디', artist: 'PSY', options: ['대디', '파파', '아버지', '아빠'], syllables: ['대', '디'] },

  // 2NE1
  { id: 91, emoji: '2️⃣1️⃣', answer: '투애니원', artist: '2NE1', options: ['투애니원', '원앤원', '투플러스원', '쓰리인원'], syllables: ['투', '애', '니', '원'] },
  { id: 92, emoji: '👊💢', answer: '내가제일잘나가', artist: '2NE1', options: ['내가제일잘나가', '최고', '넘버원', '베스트'], syllables: ['내', '가', '제', '일', '잘', '나', '가'] },
  { id: 93, emoji: '🔥🔥', answer: '파이어', artist: '2NE1', options: ['파이어', '플레임', '블레이즈', '핫'], syllables: ['파', '이', '어'] },

  // BIGBANG
  { id: 94, emoji: '💥💥', answer: '빅뱅', artist: 'BIGBANG', options: ['빅뱅', '익스플로전', '블라스트', '붐'], syllables: ['빅', '뱅'] },
  { id: 95, emoji: '🌼🌸', answer: '꽃길', artist: 'BIGBANG', options: ['꽃길', '화원', '꽃밭', '장미길'], syllables: ['꽃', '길'] },
  { id: 96, emoji: '😢💔', answer: '거짓말', artist: 'BIGBANG', options: ['거짓말', '진실', '비밀', '약속'], syllables: ['거', '짓', '말'] },
  { id: 97, emoji: '🎵🎶', answer: '판타스틱베이비', artist: 'BIGBANG', options: ['판타스틱베이비', '어메이징베이비', '원더풀베이비', '슈퍼베이비'], syllables: ['판', '타', '스', '틱', '베', '이', '비'] },

  // SUPER JUNIOR
  { id: 98, emoji: '😔😔', answer: '쏘리쏘리', artist: 'SUPER JUNIOR', options: ['쏘리쏘리', '미안미안', '용서', '사과'], syllables: ['쏘', '리', '쏘', '리'] },
  { id: 99, emoji: '🦸‍♂️✨', answer: '슈퍼맨', artist: 'SUPER JUNIOR', options: ['슈퍼맨', '배트맨', '스파이더맨', '아이언맨'], syllables: ['슈', '퍼', '맨'] },
  { id: 100, emoji: '💃🌶️', answer: '마마시타', artist: 'SUPER JUNIOR', options: ['마마시타', '파파시토', '베이비', '허니'], syllables: ['마', '마', '시', '타'] },

  // SHINee
  { id: 101, emoji: '✨✨', answer: '샤이니', artist: 'SHINee', options: ['샤이니', '스파클', '글리터', '브라이트'], syllables: ['샤', '이', '니'] },
  { id: 102, emoji: '🌈🎨', answer: '링딩동', artist: 'SHINee', options: ['링딩동', '딩동댕', '빙빙뱅', '킹콩송'], syllables: ['링', '딩', '동'] },
  { id: 103, emoji: '👀💕', answer: '뷰', artist: 'SHINee', options: ['뷰', '씬', '룩', '사이트'], syllables: ['뷰'] },
  { id: 104, emoji: '📞📱', answer: '누난너무예뻐', artist: 'SHINee', options: ['누난너무예뻐', '언니예뻐', '오빠멋있어', '동생귀여워'], syllables: ['누', '난', '너', '무', '예', '뻐'] },

  // Girls' Generation (SNSD)
  { id: 105, emoji: '👧👧👧', answer: '소녀시대', artist: "Girls' Generation", options: ['소녀시대', '소년시대', '청춘시대', '젊은시대'], syllables: ['소', '녀', '시', '대'] },
  { id: 106, emoji: '🦵👠', answer: '지', artist: "Girls' Generation", options: ['지', '레그', '풋', '토'], syllables: ['지'] },
  { id: 107, emoji: '🎉💃', answer: '파티', artist: "Girls' Generation", options: ['파티', '페스타', '축제', '클럽'], syllables: ['파', '티'] },
  { id: 108, emoji: '🦁🦁', answer: '라이언하트', artist: "Girls' Generation", options: ['라이언하트', '타이거하트', '베어하트', '울프하트'], syllables: ['라', '이', '언', '하', '트'] },

  // IU
  { id: 109, emoji: '👧🎤', answer: '아이유', artist: 'IU', options: ['아이유', '아이엠', '유앤미', '미앤유'], syllables: ['아', '이', '유'] },
  { id: 110, emoji: '🌙🌸', answer: '밤편지', artist: 'IU', options: ['밤편지', '아침편지', '낮편지', '저녁편지'], syllables: ['밤', '편', '지'] },
  { id: 111, emoji: '👫💕', answer: '좋은날', artist: 'IU', options: ['좋은날', '나쁜날', '보통날', '특별한날'], syllables: ['좋', '은', '날'] },
  { id: 112, emoji: '🎨🖌️', answer: '팔레트', artist: 'IU', options: ['팔레트', '캔버스', '브러쉬', '물감'], syllables: ['팔', '레', '트'] },
  { id: 113, emoji: '💜✨', answer: '라일락', artist: 'IU', options: ['라일락', '장미', '튤립', '데이지'], syllables: ['라', '일', '락'] },
  { id: 114, emoji: '🎂🎉', answer: '스물셋', artist: 'IU', options: ['스물셋', '스물하나', '서른', '열아홉'], syllables: ['스', '물', '셋'] },

  // MAMAMOO
  { id: 115, emoji: '🐄🌈', answer: '마마무', artist: 'MAMAMOO', options: ['마마무', '파파무', '베베무', '시스무'], syllables: ['마', '마', '무'] },
  { id: 116, emoji: '🚗💨', answer: '고고베베', artist: 'MAMAMOO', options: ['고고베베', '런런베베', '플라이베베', '댄스베베'], syllables: ['고', '고', '베', '베'] },
  { id: 117, emoji: '💛✨', answer: '너나해', artist: 'MAMAMOO', options: ['너나해', '나만해', '우리해', '같이해'], syllables: ['너', '나', '해'] },
  { id: 118, emoji: '🌺🌸', answer: '화사', artist: 'MAMAMOO', options: ['화사', '청순', '고급', '우아'], syllables: ['화', '사'] },

  // WINNER
  { id: 119, emoji: '🏆🥇', answer: '위너', artist: 'WINNER', options: ['위너', '루저', '챔피언', '빅토리'], syllables: ['위', '너'] },
  { id: 120, emoji: '🏝️☀️', answer: '아일랜드', artist: 'WINNER', options: ['아일랜드', '비치', '오션', '서머'], syllables: ['아', '일', '랜', '드'] },
  { id: 121, emoji: '❤️💔', answer: '공허해', artist: 'WINNER', options: ['공허해', '행복해', '슬퍼', '즐거워'], syllables: ['공', '허', '해'] },

  // GOT7
  { id: 122, emoji: '7️⃣💫', answer: '갓세븐', artist: 'GOT7', options: ['갓세븐', '갓식스', '갓에잇', '갓텐'], syllables: ['갓', '세', '븐'] },
  { id: 123, emoji: '🎯✨', answer: '하드캐리', artist: 'GOT7', options: ['하드캐리', '소프트캐리', '이지캐리', '노캐리'], syllables: ['하', '드', '캐', '리'] },
  { id: 124, emoji: '💃🕺', answer: '니가하면', artist: 'GOT7', options: ['니가하면', '내가하면', '우리하면', '같이하면'], syllables: ['니', '가', '하', '면'] },

  // MONSTA X
  { id: 125, emoji: '👹✨', answer: '몬스타엑스', artist: 'MONSTA X', options: ['몬스타엑스', '몬스터제로', '몬스터원', '몬스터킹'], syllables: ['몬', '스', '타', '엑', '스'] },
  { id: 126, emoji: '💪🔥', answer: '히어로', artist: 'MONSTA X', options: ['히어로', '빌런', '사이드킥', '슈퍼'], syllables: ['히', '어', '로'] },
  { id: 127, emoji: '✨💫', answer: '샤인포에버', artist: 'MONSTA X', options: ['샤인포에버', '샤인나우', '샤인투데이', '샤인투나잇'], syllables: ['샤', '인', '포', '에', '버'] },

  // Wanna One
  { id: 128, emoji: '1️⃣✨', answer: '워너원', artist: 'Wanna One', options: ['워너원', '워너투', '원앤온리', '넘버원'], syllables: ['워', '너', '원'] },
  { id: 129, emoji: '🔥💨', answer: '에너제틱', artist: 'Wanna One', options: ['에너제틱', '다이나믹', '액티브', '파워풀'], syllables: ['에', '너', '제', '틱'] },
  { id: 130, emoji: '✨🌟', answer: '뷰티풀', artist: 'Wanna One', options: ['뷰티풀', '원더풀', '그레이트풀', '피스풀'], syllables: ['뷰', '티', '풀'] },

  // KARD
  { id: 131, emoji: '🃏🎴', answer: '카드', artist: 'KARD', options: ['카드', '코인', '다이스', '체스'], syllables: ['카', '드'] },
  { id: 132, emoji: '👹💃', answer: '밤밤', artist: 'KARD', options: ['밤밤', '붐붐', '쾅쾅', '탕탕'], syllables: ['밤', '밤'] },

  // ENHYPEN
  { id: 133, emoji: '🔗✨', answer: '엔하이픈', artist: 'ENHYPEN', options: ['엔하이픈', '하이픈', '대시', '마이너스'], syllables: ['엔', '하', '이', '픈'] },
  { id: 134, emoji: '🧛‍♂️🦇', answer: '기븐테이큰', artist: 'ENHYPEN', options: ['기븐테이큰', '테이크기브', '기브앤테이크', '올테이큰'], syllables: ['기', '븐', '테', '이', '큰'] },
  { id: 135, emoji: '👑💫', answer: '페이크드러브', artist: 'ENHYPEN', options: ['페이크드러브', '리얼러브', '트루러브', '스위트러브'], syllables: ['페', '이', '크', '드', '러', '브'] },

  // TXT
  { id: 136, emoji: '📝✨', answer: '투모로우바이투게더', artist: 'TXT', options: ['투모로우바이투게더', '예스터데이', '투데이', '포에버'], syllables: ['투', '모', '로', '우', '바', '이', '투', '게', '더'] },
  { id: 137, emoji: '🏃‍♂️💨', answer: '런어웨이', artist: 'TXT', options: ['런어웨이', '스테이', '컴백', '고고'], syllables: ['런', '어', '웨', '이'] },
  { id: 138, emoji: '😵😈', answer: '크레이지', artist: 'TXT', options: ['크레이지', '노멀', '칼름', '쿨'], syllables: ['크', '레', '이', '지'] },
  { id: 139, emoji: '🌙💫', answer: '블루아워', artist: 'TXT', options: ['블루아워', '골든아워', '미드나잇', '선셋'], syllables: ['블', '루', '아', '워'] },

  // TREASURE
  { id: 140, emoji: '💎🏴‍☠️', answer: '트레저', artist: 'TREASURE', options: ['트레저', '골드', '다이아', '실버'], syllables: ['트', '레', '저'] },
  { id: 141, emoji: '🎉💃', answer: '지지배', artist: 'TREASURE', options: ['지지배', '고고', '예예', '하하'], syllables: ['지', '지', '배'] },
  { id: 142, emoji: '💕✨', answer: '사랑해', artist: 'TREASURE', options: ['사랑해', '좋아해', '보고싶어', '고마워'], syllables: ['사', '랑', '해'] },

  // ATEEZ
  { id: 143, emoji: '🏴‍☠️⚓', answer: '에이티즈', artist: 'ATEEZ', options: ['에이티즈', '파이럿', '세일러', '캡틴'], syllables: ['에', '이', '티', '즈'] },
  { id: 144, emoji: '🔥🔥', answer: '게릴라', artist: 'ATEEZ', options: ['게릴라', '솔저', '워리어', '파이터'], syllables: ['게', '릴', '라'] },
  { id: 145, emoji: '😵💫', answer: '세이마이네임', artist: 'ATEEZ', options: ['세이마이네임', '콜마이네임', '노마이네임', '유어네임'], syllables: ['세', '이', '마', '이', '네', '임'] },

  // THE BOYZ
  { id: 146, emoji: '👦✨', answer: '더보이즈', artist: 'THE BOYZ', options: ['더보이즈', '더걸스', '더맨', '더키즈'], syllables: ['더', '보', '이', '즈'] },
  { id: 147, emoji: '🌙✨', answer: '더스틸러', artist: 'THE BOYZ', options: ['더스틸러', '더킬러', '더힐러', '더필러'], syllables: ['더', '스', '틸', '러'] },
  { id: 148, emoji: '🤠✈️', answer: '마버릭', artist: 'THE BOYZ', options: ['마버릭', '클래식', '레전드', '아이콘'], syllables: ['마', '버', '릭'] },

  // SF9
  { id: 149, emoji: '💫9️⃣', answer: '에스에프나인', artist: 'SF9', options: ['에스에프나인', '에스에프에잇', '에스에프텐', '에스에프원'], syllables: ['에', '스', '에', '프', '나', '인'] },
  { id: 150, emoji: '☀️🎵', answer: '오솔레미오', artist: 'SF9', options: ['오솔레미오', '벨라노테', '치아오', '그라치에'], syllables: ['오', '솔', '레', '미', '오'] },

  // NCT 127
  { id: 151, emoji: '🏙️🔥', answer: '영웅', artist: 'NCT 127', options: ['영웅', '히어로', '슈퍼맨', '챔피언'], syllables: ['영', '웅'] },
  { id: 152, emoji: '🎯💥', answer: '킥잇', artist: 'NCT 127', options: ['킥잇', '펀치잇', '히트잇', '런잇'], syllables: ['킥', '잇'] },
  { id: 153, emoji: '🍒💕', answer: '체리밤', artist: 'NCT 127', options: ['체리밤', '애플밤', '피치밤', '그레이프밤'], syllables: ['체', '리', '밤'] },
  { id: 154, emoji: '🚗💨', answer: '하이웨이투헤븐', artist: 'NCT 127', options: ['하이웨이투헤븐', '스카이웨이', '로드투헬', '웨이투고'], syllables: ['하', '이', '웨', '이', '투', '헤', '븐'] },
  { id: 155, emoji: '😍💘', answer: '스티커', artist: 'NCT 127', options: ['스티커', '포스터', '배너', '라벨'], syllables: ['스', '티', '커'] },
  { id: 156, emoji: '🌊🔥', answer: '파이어트럭', artist: 'NCT 127', options: ['파이어트럭', '앰뷸런스', '폴리스카', '택시'], syllables: ['파', '이', '어', '트', '럭'] },
  { id: 157, emoji: '⚡💫', answer: '사이먼세즈', artist: 'NCT 127', options: ['사이먼세즈', '피터세즈', '존세즈', '마이클세즈'], syllables: ['사', '이', '먼', '세', '즈'] },

  // NCT Dream
  { id: 158, emoji: '🍬🍭', answer: '츄잉껌', artist: 'NCT Dream', options: ['츄잉껌', '캔디', '롤리팝', '젤리'], syllables: ['츄', '잉', '껌'] },
  { id: 159, emoji: '🎢💫', answer: '붐', artist: 'NCT Dream', options: ['붐', '뱅', '팝', '크래시'], syllables: ['붐'] },
  { id: 160, emoji: '🌈☀️', answer: '헬로퓨처', artist: 'NCT Dream', options: ['헬로퓨처', '굿바이패스트', '헬로프레즌트', '바이바이'], syllables: ['헬', '로', '퓨', '처'] },
  { id: 161, emoji: '🍯💛', answer: '핫소스', artist: 'NCT Dream', options: ['핫소스', '칠리소스', '토마토소스', '머스타드'], syllables: ['핫', '소', '스'] },
  { id: 162, emoji: '🎠✨', answer: '캔디', artist: 'NCT Dream', options: ['캔디', '초콜릿', '쿠키', '케이크'], syllables: ['캔', '디'] },

  // (G)I-DLE
  { id: 163, emoji: '👧👧', answer: '여자아이들', artist: '(G)I-DLE', options: ['여자아이들', '남자아이들', '어린이들', '청소년들'], syllables: ['여', '자', '아', '이', '들'] },
  { id: 164, emoji: '🔥💃', answer: '화', artist: '(G)I-DLE', options: ['화', '수', '목', '금'], syllables: ['화'] },
  { id: 165, emoji: '👑💜', answer: '퀸카', artist: '(G)I-DLE', options: ['퀸카', '킹카', '잭카', '에이스'], syllables: ['퀸', '카'] },
  { id: 166, emoji: '🦁💫', answer: '라이언', artist: '(G)I-DLE', options: ['라이언', '타이거', '베어', '울프'], syllables: ['라', '이', '언'] },
  { id: 167, emoji: '💀🖤', answer: '톰보이', artist: '(G)I-DLE', options: ['톰보이', '컬리', '펨보이', '코이'], syllables: ['톰', '보', '이'] },
  { id: 168, emoji: '🍜🍝', answer: '누들', artist: '(G)I-DLE', options: ['누들', '파스타', '라면', '우동'], syllables: ['누', '들'] },

  // ITZY
  { id: 169, emoji: '💃✨', answer: '있지', artist: 'ITZY', options: ['있지', '없지', '했지', '했어'], syllables: ['있', '지'] },
  { id: 170, emoji: '👯‍♀️🔥', answer: '달라달라', artist: 'ITZY', options: ['달라달라', '같아같아', '높아높아', '멀어멀어'], syllables: ['달', '라', '달', '라'] },
  { id: 171, emoji: '💕🦋', answer: '마피아인더모닝', artist: 'ITZY', options: ['마피아인더모닝', '갱스터인더나잇', '히어로인더이브닝', '빌런인더눈'], syllables: ['마', '피', '아', '인', '더', '모', '닝'] },
  { id: 172, emoji: '👀💘', answer: '워너비', artist: 'ITZY', options: ['워너비', '캔비', '숄비', '머스트비'], syllables: ['워', '너', '비'] },
  { id: 173, emoji: '🎵🔥', answer: '릭스', artist: 'ITZY', options: ['릭스', '픽스', '믹스', '킥스'], syllables: ['릭', '스'] },
  { id: 174, emoji: '😎💪', answer: '낫샤이', artist: 'ITZY', options: ['낫샤이', '소샤이', '베리샤이', '투샤이'], syllables: ['낫', '샤', '이'] },

  // LE SSERAFIM
  { id: 175, emoji: '👼🔥', answer: '르세라핌', artist: 'LE SSERAFIM', options: ['르세라핌', '엔젤', '체루빔', '아크엔젤'], syllables: ['르', '세', '라', '핌'] },
  { id: 176, emoji: '🦋💫', answer: '언타이틀드', artist: 'LE SSERAFIM', options: ['언타이틀드', '타이틀드', '네임드', '언네임드'], syllables: ['언', '타', '이', '틀', '드'] },
  { id: 177, emoji: '🔥👊', answer: '피어리스', artist: 'LE SSERAFIM', options: ['피어리스', '피어풀', '브레이브', '카워드'], syllables: ['피', '어', '리', '스'] },
  { id: 178, emoji: '💃🌟', answer: '이브프시케', artist: 'LE SSERAFIM', options: ['이브프시케', '아담프시케', '이브소울', '아담소울'], syllables: ['이', '브', '프', '시', '케'] },
  { id: 179, emoji: '🏆✨', answer: '퍼펙트나잇', artist: 'LE SSERAFIM', options: ['퍼펙트나잇', '퍼펙트데이', '굿나잇', '배드나잇'], syllables: ['퍼', '펙', '트', '나', '잇'] },

  // NMIXX
  { id: 180, emoji: '🎨✨', answer: '엔믹스', artist: 'NMIXX', options: ['엔믹스', '케이믹스', '제이믹스', '에스믹스'], syllables: ['엔', '믹', '스'] },
  { id: 181, emoji: '🎢💥', answer: '오오오', artist: 'NMIXX', options: ['오오오', '아아아', '에에에', '우우우'], syllables: ['오', '오', '오'] },
  { id: 182, emoji: '💃🔥', answer: '다이스', artist: 'NMIXX', options: ['다이스', '카드', '칩', '코인'], syllables: ['다', '이', '스'] },
  { id: 183, emoji: '🌊💫', answer: '영앤라이치', artist: 'NMIXX', options: ['영앤라이치', '올드앤푸어', '영앤푸어', '올드앤라이치'], syllables: ['영', '앤', '라', '이', '치'] },

  // Girls' Generation (SNSD)
  { id: 184, emoji: '👧👧👧', answer: '소녀시대', artist: "Girls' Generation", options: ['소녀시대', '소년시대', '청춘시대', '황금시대'], syllables: ['소', '녀', '시', '대'] },
  { id: 185, emoji: '🦵🦵', answer: '지', artist: "Girls' Generation", options: ['지', '위', '아이', '유'], syllables: ['지'] },
  { id: 186, emoji: '🎉💃', answer: '파티', artist: "Girls' Generation", options: ['파티', '클럽', '댄스', '페스티벌'], syllables: ['파', '티'] },
  { id: 187, emoji: '👀❓', answer: '다시만난세계', artist: "Girls' Generation", options: ['다시만난세계', '처음만난세계', '새로운세계', '오래된세계'], syllables: ['다', '시', '만', '난', '세', '계'] },
  { id: 188, emoji: '🦁💕', answer: '라이언하트', artist: "Girls' Generation", options: ['라이언하트', '타이거하트', '베어하트', '울프하트'], syllables: ['라', '이', '언', '하', '트'] },

  // 2NE1
  { id: 189, emoji: '2️⃣1️⃣', answer: '투애니원', artist: '2NE1', options: ['투애니원', '쓰리애니원', '원애니원', '포애니원'], syllables: ['투', '애', '니', '원'] },
  { id: 190, emoji: '💣💥', answer: '아이엠더베스트', artist: '2NE1', options: ['아이엠더베스트', '유아더베스트', '위아더베스트', '쉬이즈더베스트'], syllables: ['아', '이', '엠', '더', '베', '스', '트'] },
  { id: 191, emoji: '🔥🔥', answer: '내가제일잘나가', artist: '2NE1', options: ['내가제일잘나가', '니가제일잘나가', '우리가제일잘나가', '걔가제일잘나가'], syllables: ['내', '가', '제', '일', '잘', '나', '가'] },
  { id: 192, emoji: '😢💔', answer: '그리워해요', artist: '2NE1', options: ['그리워해요', '사랑해요', '보고싶어요', '좋아해요'], syllables: ['그', '리', '워', '해', '요'] },

  // Big Bang
  { id: 193, emoji: '💥🌟', answer: '빅뱅', artist: 'Big Bang', options: ['빅뱅', '빅스타', '빅히트', '빅러브'], syllables: ['빅', '뱅'] },
  { id: 194, emoji: '🎉🔥', answer: '뱅뱅뱅', artist: 'Big Bang', options: ['뱅뱅뱅', '붐붐붐', '팡팡팡', '빵빵빵'], syllables: ['뱅', '뱅', '뱅'] },
  { id: 195, emoji: '🌅💔', answer: '하루하루', artist: 'Big Bang', options: ['하루하루', '매일매일', '날마다', '항상'], syllables: ['하', '루', '하', '루'] },
  { id: 196, emoji: '🎉👶', answer: '판타스틱베이비', artist: 'Big Bang', options: ['판타스틱베이비', '원더풀베이비', '어메이징베이비', '뷰티풀베이비'], syllables: ['판', '타', '스', '틱', '베', '이', '비'] },
  { id: 197, emoji: '💔😢', answer: '거짓말', artist: 'Big Bang', options: ['거짓말', '진실', '비밀', '고백'], syllables: ['거', '짓', '말'] },

  // SHINee
  { id: 198, emoji: '✨💎', answer: '샤이니', artist: 'SHINee', options: ['샤이니', '브라이트', '글로우', '스파클'], syllables: ['샤', '이', '니'] },
  { id: 199, emoji: '🔔🔔', answer: '링딩동', artist: 'SHINee', options: ['링딩동', '딩동댕', '띵동', '벨소리'], syllables: ['링', '딩', '동'] },
  { id: 200, emoji: '👀💕', answer: '뷰', artist: 'SHINee', options: ['뷰', '씬', '룩', '사이트'], syllables: ['뷰'] },
  { id: 201, emoji: '😈🔥', answer: '루시퍼', artist: 'SHINee', options: ['루시퍼', '가브리엘', '미카엘', '라파엘'], syllables: ['루', '시', '퍼'] },
  { id: 202, emoji: '🔍🕵️', answer: '셜록', artist: 'SHINee', options: ['셜록', '왓슨', '홈즈', '모리아티'], syllables: ['셜', '록'] },

  // Super Junior
  { id: 203, emoji: '👨‍👨‍👦‍👦✨', answer: '슈퍼주니어', artist: 'Super Junior', options: ['슈퍼주니어', '슈퍼시니어', '슈퍼보이즈', '슈퍼맨'], syllables: ['슈', '퍼', '주', '니', '어'] },
  { id: 204, emoji: '😔😔', answer: '쏘리쏘리', artist: 'Super Junior', options: ['쏘리쏘리', '헬로헬로', '바이바이', '예스예스'], syllables: ['쏘', '리', '쏘', '리'] },
  { id: 205, emoji: '🕴️🖤', answer: '블랙슈트', artist: 'Super Junior', options: ['블랙슈트', '화이트슈트', '레드슈트', '블루슈트'], syllables: ['블', '랙', '슈', '트'] },
  { id: 206, emoji: '💃🎵', answer: '쎄쎄쎄', artist: 'Super Junior', options: ['쎄쎄쎄', '라라라', '나나나', '다다다'], syllables: ['쎄', '쎄', '쎄'] },

  // MAMAMOO
  { id: 207, emoji: '🌙🌙', answer: '마마무', artist: 'MAMAMOO', options: ['마마무', '파파무', '베이비무', '시스터무'], syllables: ['마', '마', '무'] },
  { id: 208, emoji: '🎤🔥', answer: '덩덩덩', artist: 'MAMAMOO', options: ['덩덩덩', '둥둥둥', '딩딩딩', '동동동'], syllables: ['덩', '덩', '덩'] },
  { id: 209, emoji: '💜✨', answer: '힙', artist: 'MAMAMOO', options: ['힙', '핫', '쿨', '팝'], syllables: ['힙'] },
  { id: 210, emoji: '👀🔥', answer: '아야', artist: 'MAMAMOO', options: ['아야', '우와', '에헤', '오호'], syllables: ['아', '야'] },

  // MONSTA X
  { id: 211, emoji: '👹❌', answer: '몬스타엑스', artist: 'MONSTA X', options: ['몬스타엑스', '몬스타와이', '몬스타제트', '몬스타에이'], syllables: ['몬', '스', '타', '엑', '스'] },
  { id: 212, emoji: '🎯💥', answer: '쉐이크잇', artist: 'MONSTA X', options: ['쉐이크잇', '무브잇', '브레이크잇', '메이크잇'], syllables: ['쉐', '이', '크', '잇'] },
  { id: 213, emoji: '🔥💪', answer: '히어로', artist: 'MONSTA X', options: ['히어로', '빌런', '사이드킥', '안티히어로'], syllables: ['히', '어', '로'] },

  // GOT7
  { id: 214, emoji: '7️⃣✨', answer: '갓세븐', artist: 'GOT7', options: ['갓세븐', '갓식스', '갓에잇', '갓파이브'], syllables: ['갓', '세', '븐'] },
  { id: 215, emoji: '🦋💕', answer: '니가하면', artist: 'GOT7', options: ['니가하면', '내가하면', '우리하면', '걔가하면'], syllables: ['니', '가', '하', '면'] },
  { id: 216, emoji: '✈️🌍', answer: '플라이', artist: 'GOT7', options: ['플라이', '런', '점프', '스윔'], syllables: ['플', '라', '이'] },

  // IU
  { id: 217, emoji: '👧🎤', answer: '아이유', artist: 'IU', options: ['아이유', '아이미', '아이위', '아이유즈'], syllables: ['아', '이', '유'] },
  { id: 218, emoji: '🌙✨', answer: '밤편지', artist: 'IU', options: ['밤편지', '낮편지', '아침편지', '저녁편지'], syllables: ['밤', '편', '지'] },
  { id: 219, emoji: '🎈✨', answer: '스물셋', artist: 'IU', options: ['스물셋', '스물넷', '스물둘', '스물하나'], syllables: ['스', '물', '셋'] },
  { id: 220, emoji: '🌸💕', answer: '좋은날', artist: 'IU', options: ['좋은날', '나쁜날', '슬픈날', '기쁜날'], syllables: ['좋', '은', '날'] },
  { id: 221, emoji: '💜🔮', answer: '라일락', artist: 'IU', options: ['라일락', '로즈', '튤립', '데이지'], syllables: ['라', '일', '락'] },
  { id: 222, emoji: '🍷💫', answer: '셀러브리티', artist: 'IU', options: ['셀러브리티', '슈퍼스타', '아이돌', 'VIP'], syllables: ['셀', '러', '브', '리', '티'] },

  // PSY
  { id: 223, emoji: '🐴💃', answer: '강남스타일', artist: 'PSY', options: ['강남스타일', '홍대스타일', '이태원스타일', '서울스타일'], syllables: ['강', '남', '스', '타', '일'] },
  { id: 224, emoji: '👋🎵', answer: '젠틀맨', artist: 'PSY', options: ['젠틀맨', '레이디', '미스터', '미세스'], syllables: ['젠', '틀', '맨'] },
  { id: 225, emoji: '💪🔥', answer: '챔피언', artist: 'PSY', options: ['챔피언', '위너', '루저', '파이터'], syllables: ['챔', '피', '언'] },

  // Sunmi
  { id: 226, emoji: '🌙👧', answer: '선미', artist: 'Sunmi', options: ['선미', '달미', '별미', '해미'], syllables: ['선', '미'] },
  { id: 227, emoji: '🌹💔', answer: '가시나', artist: 'Sunmi', options: ['가시나', '소녀', '아가씨', '여자'], syllables: ['가', '시', '나'] },
  { id: 228, emoji: '🌊✨', answer: '사이렌', artist: 'Sunmi', options: ['사이렌', '머메이드', '셀키', '님프'], syllables: ['사', '이', '렌'] },

  // Chungha
  { id: 229, emoji: '💃✨', answer: '청하', artist: 'Chungha', options: ['청하', '백하', '홍하', '황하'], syllables: ['청', '하'] },
  { id: 230, emoji: '🎢🎡', answer: '롤러코스터', artist: 'Chungha', options: ['롤러코스터', '바이킹', '회전목마', '범퍼카'], syllables: ['롤', '러', '코', '스', '터'] },
  { id: 231, emoji: '💕🔥', answer: '벌써십이시', artist: 'Chungha', options: ['벌써십이시', '아직열한시', '이제한시', '곧두시'], syllables: ['벌', '써', '십', '이', '시'] },

  // AKMU
  { id: 232, emoji: '🎵👫', answer: '악동뮤지션', artist: 'AKMU', options: ['악동뮤지션', '천사뮤지션', '요정뮤지션', '소년뮤지션'], syllables: ['악', '동', '뮤', '지', '션'] },
  { id: 233, emoji: '🍃💚', answer: '어떻게이별까지사랑하겠어', artist: 'AKMU', options: ['어떻게이별까지사랑하겠어', '사랑해', '보고싶어', '잘가'], syllables: ['어', '떻', '게', '이', '별'] },
  { id: 234, emoji: '🎤🎶', answer: '러브리', artist: 'AKMU', options: ['러브리', '러블리', '프리티', '큐티'], syllables: ['러', '브', '리'] },

  // ZICO
  { id: 235, emoji: '👦🔥', answer: '지코', artist: 'ZICO', options: ['지코', '제이코', '케이코', '에이코'], syllables: ['지', '코'] },
  { id: 236, emoji: '🎵🙌', answer: '아무노래', artist: 'ZICO', options: ['아무노래', '이노래', '그노래', '저노래'], syllables: ['아', '무', '노', '래'] },

  // ASTRO
  { id: 237, emoji: '⭐✨', answer: '아스트로', artist: 'ASTRO', options: ['아스트로', '코스모', '갤럭시', '유니버스'], syllables: ['아', '스', '트', '로'] },
  { id: 238, emoji: '😍💕', answer: '숨바꼭질', artist: 'ASTRO', options: ['숨바꼭질', '술래잡기', '달리기', '점프'], syllables: ['숨', '바', '꼭', '질'] },

  // DAY6
  { id: 239, emoji: '📅6️⃣', answer: '데이식스', artist: 'DAY6', options: ['데이식스', '데이파이브', '데이세븐', '데이에잇'], syllables: ['데', '이', '식', '스'] },
  { id: 240, emoji: '🎸🔥', answer: '예뻤어', artist: 'DAY6', options: ['예뻤어', '멋있었어', '잘생겼어', '귀여웠어'], syllables: ['예', '뻤', '어'] },

  // Winner
  { id: 241, emoji: '🏆✨', answer: '위너', artist: 'Winner', options: ['위너', '루저', '챔피언', '러너'], syllables: ['위', '너'] },
  { id: 242, emoji: '🌈💃', answer: '에브리데이', artist: 'Winner', options: ['에브리데이', '에브리나잇', '에브리위크', '에브리먼스'], syllables: ['에', '브', '리', '데', '이'] },

  // iKON
  { id: 243, emoji: '👑✨', answer: '아이콘', artist: 'iKON', options: ['아이콘', '심볼', '로고', '마크'], syllables: ['아', '이', '콘'] },
  { id: 244, emoji: '💕🎵', answer: '사랑을했다', artist: 'iKON', options: ['사랑을했다', '이별을했다', '만남을했다', '추억을했다'], syllables: ['사', '랑', '을', '했', '다'] },
  { id: 245, emoji: '😎🔥', answer: '죽겠다', artist: 'iKON', options: ['죽겠다', '살겠다', '웃겠다', '울겠다'], syllables: ['죽', '겠', '다'] },

  // BTOB
  { id: 246, emoji: '🎤🎵', answer: '비투비', artist: 'BTOB', options: ['비투비', '에이투에이', '씨투씨', '디투디'], syllables: ['비', '투', '비'] },
  { id: 247, emoji: '😭💔', answer: '그리워하다', artist: 'BTOB', options: ['그리워하다', '사랑하다', '보고싶다', '좋아하다'], syllables: ['그', '리', '워', '하', '다'] },

  // Kep1er
  { id: 248, emoji: '🪐✨', answer: '케플러', artist: 'Kep1er', options: ['케플러', '갈릴레오', '코페르니쿠스', '뉴턴'], syllables: ['케', '플', '러'] },
  { id: 249, emoji: '🚀💫', answer: '와다다', artist: 'Kep1er', options: ['와다다', '고고고', '런런런', '플라이'], syllables: ['와', '다', '다'] },
  { id: 250, emoji: '🌟👆', answer: '업', artist: 'Kep1er', options: ['업', '다운', '레프트', '라이트'], syllables: ['업'] },

  // More BTS
  { id: 251, emoji: '🖤🦢', answer: '블랙스완', artist: 'BTS', options: ['블랙스완', '화이트스완', '그레이스완', '골든스완'], syllables: ['블', '랙', '스', '완'] },
  { id: 252, emoji: '🔛🔥', answer: '온', artist: 'BTS', options: ['온', '오프', '업', '다운'], syllables: ['온'] },
  { id: 253, emoji: '💜✨', answer: '퍼미션투댄스', artist: 'BTS', options: ['퍼미션투댄스', '퍼미션투싱', '퍼미션투플레이', '퍼미션투런'], syllables: ['퍼', '미', '션', '투', '댄', '스'] },
  { id: 254, emoji: '🌍💕', answer: '라이프고즈온', artist: 'BTS', options: ['라이프고즈온', '라이프이즈굿', '라이프이즈하드', '라이프이즈펀'], syllables: ['라', '이', '프', '고', '즈', '온'] },
  { id: 255, emoji: '⏳💫', answer: '제트호프월드', artist: 'BTS', options: ['제트호프월드', '유어월드', '마이월드', '아워월드'], syllables: ['제', '트', '호', '프', '월', '드'] },
  { id: 256, emoji: '😊💕', answer: '에포리아', artist: 'BTS', options: ['에포리아', '디스토피아', '유토피아', '판타지아'], syllables: ['에', '포', '리', '아'] },
  { id: 257, emoji: '🌅✨', answer: '에피파니', artist: 'BTS', options: ['에피파니', '오디세이', '심포니', '하모니'], syllables: ['에', '피', '파', '니'] },

  // More BLACKPINK
  { id: 258, emoji: '💀💃', answer: '셧다운', artist: 'BLACKPINK', options: ['셧다운', '스타트업', '부팅', '리부트'], syllables: ['셧', '다', '운'] },
  { id: 259, emoji: '💖🖤', answer: '핑크베놈', artist: 'BLACKPINK', options: ['핑크베놈', '블랙베놈', '레드베놈', '블루베놈'], syllables: ['핑', '크', '베', '놈'] },
  { id: 260, emoji: '💃🔥', answer: '솔로', artist: 'BLACKPINK', options: ['솔로', '듀오', '트리오', '그룹'], syllables: ['솔', '로'] },
  { id: 261, emoji: '🍯💛', answer: '러브식', artist: 'BLACKPINK', options: ['러브식', '러브원', '러브투', '러브쓰리'], syllables: ['러', '브', '식'] },

  // More NewJeans
  { id: 262, emoji: '😲😲', answer: '오엠지', artist: 'NewJeans', options: ['오엠지', '와우', '어머', '헐'], syllables: ['오', '엠', '지'] },
  { id: 263, emoji: '🏃‍♀️💨', answer: '겟업', artist: 'NewJeans', options: ['겟업', '웨이크업', '스탠드업', '점프업'], syllables: ['겟', '업'] },
  { id: 264, emoji: '🌸💫', answer: '버블검', artist: 'NewJeans', options: ['버블검', '캔디', '젤리', '롤리팝'], syllables: ['버', '블', '검'] },
  { id: 265, emoji: '💃🎵', answer: '하우스위트', artist: 'NewJeans', options: ['하우스위트', '하우쿨', '하우핫', '하우나이스'], syllables: ['하', '우', '스', '위', '트'] },

  // More IVE
  { id: 266, emoji: '🦋✨', answer: '오프더레코드', artist: 'IVE', options: ['오프더레코드', '온더레코드', '인더레코드', '아웃더레코드'], syllables: ['오', '프', '더', '레', '코', '드'] },
  { id: 267, emoji: '😎🔥', answer: '배디', artist: 'IVE', options: ['배디', '굿디', '쿨리', '핫티'], syllables: ['배', '디'] },
  { id: 268, emoji: '💃👑', answer: '해야', artist: 'IVE', options: ['해야', '달아', '별아', '꽃아'], syllables: ['해', '야'] },

  // More aespa
  { id: 269, emoji: '🌶️🔥', answer: '스파이시', artist: 'aespa', options: ['스파이시', '스위트', '소어', '솔티'], syllables: ['스', '파', '이', '시'] },
  { id: 270, emoji: '👯‍♀️💫', answer: '걸스', artist: 'aespa', options: ['걸스', '보이즈', '레이디스', '맨'], syllables: ['걸', '스'] },
  { id: 271, emoji: '🌊🔥', answer: '이터널선샤인', artist: 'aespa', options: ['이터널선샤인', '이터널문라이트', '이터널스타라이트', '이터널레인'], syllables: ['이', '터', '널', '선', '샤', '인'] },

  // More TWICE
  { id: 272, emoji: '👍👎', answer: '예스오어노', artist: 'TWICE', options: ['예스오어노', '예스앤노', '예스버노', '노오어예스'], syllables: ['예', '스', '오', '어', '노'] },
  { id: 273, emoji: '🍹🌴', answer: '알콜프리', artist: 'TWICE', options: ['알콜프리', '슈가프리', '글루텐프리', '카페인프리'], syllables: ['알', '콜', '프', '리'] },
  { id: 274, emoji: '💕✨', answer: '필스페셜', artist: 'TWICE', options: ['필스페셜', '필노말', '필레어', '필유니크'], syllables: ['필', '스', '페', '셜'] },
  { id: 275, emoji: '🎀💕', answer: '몰앤몰', artist: 'TWICE', options: ['몰앤몰', '레스앤레스', '비거앤비거', '스몰앤스몰'], syllables: ['몰', '앤', '몰'] },

  // More EXO
  { id: 276, emoji: '🐺🔥', answer: '으르렁', artist: 'EXO', options: ['으르렁', '왈왈', '야옹', '꿱꿱'], syllables: ['으', '르', '렁'] },
  { id: 277, emoji: '💊💫', answer: '오버도스', artist: 'EXO', options: ['오버도스', '언더도스', '노도스', '하프도스'], syllables: ['오', '버', '도', '스'] },
  { id: 278, emoji: '🎵🔥', answer: '템포', artist: 'EXO', options: ['템포', '리듬', '비트', '멜로디'], syllables: ['템', '포'] },
  { id: 279, emoji: '👋💔', answer: '러브미라잇', artist: 'EXO', options: ['러브미라잇', '러브유롱', '러브어스올', '러브뎀투'], syllables: ['러', '브', '미', '라', '잇'] },

  // More Red Velvet
  { id: 280, emoji: '😎🔥', answer: '배드보이', artist: 'Red Velvet', options: ['배드보이', '굿보이', '배드걸', '굿걸'], syllables: ['배', '드', '보', '이'] },
  { id: 281, emoji: '🎵🎤', answer: '덤덤', artist: 'Red Velvet', options: ['덤덤', '스마트', '클레버', '와이즈'], syllables: ['덤', '덤'] },
  { id: 282, emoji: '🪄🔮', answer: '짐살라빔', artist: 'Red Velvet', options: ['짐살라빔', '아브라카다브라', '호쿠스포쿠스', '심심살라빔'], syllables: ['짐', '살', '라', '빔'] },

  // More Stray Kids
  { id: 283, emoji: '🏃💨', answer: '미로', artist: 'Stray Kids', options: ['미로', '미궁', '퍼즐', '게임'], syllables: ['미', '로'] },
  { id: 284, emoji: '😵💫', answer: '매니악', artist: 'Stray Kids', options: ['매니악', '지니어스', '크레이지', '노멀'], syllables: ['매', '니', '악'] },
  { id: 285, emoji: '👑💎', answer: '에스클래스', artist: 'Stray Kids', options: ['에스클래스', '에이클래스', '비클래스', '씨클래스'], syllables: ['에', '스', '클', '래', '스'] },
  { id: 286, emoji: '🔥🔥', answer: '락', artist: 'Stray Kids', options: ['락', '팝', '재즈', '블루스'], syllables: ['락'] },

  // More SEVENTEEN
  { id: 287, emoji: '😢💔', answer: '돈트워너크라이', artist: 'SEVENTEEN', options: ['돈트워너크라이', '워너크라이', '캔트크라이', '윌크라이'], syllables: ['돈', '트', '워', '너', '크', '라', '이'] },
  { id: 288, emoji: '😨💫', answer: '피어', artist: 'SEVENTEEN', options: ['피어', '브레이브', '볼드', '스트롱'], syllables: ['피', '어'] },
  { id: 289, emoji: '🌻☀️', answer: '어쩌나', artist: 'SEVENTEEN', options: ['어쩌나', '어째서', '왜그래', '어떡해'], syllables: ['어', '쩌', '나'] },
  { id: 290, emoji: '🎵💕', answer: '손오공', artist: 'SEVENTEEN', options: ['손오공', '저팔계', '사오정', '삼장법사'], syllables: ['손', '오', '공'] },

  // More TXT
  { id: 291, emoji: '🍀✨', answer: '캣앤독', artist: 'TXT', options: ['캣앤독', '독앤캣', '캣앤마우스', '독앤버드'], syllables: ['캣', '앤', '독'] },
  { id: 292, emoji: '🎠💫', answer: '로저댓', artist: 'TXT', options: ['로저댓', '카피댓', '겟댓', '갓댓'], syllables: ['로', '저', '댓'] },
  { id: 293, emoji: '😵‍💫✨', answer: '설거지', artist: 'TXT', options: ['설거지', '빨래', '청소', '요리'], syllables: ['설', '거', '지'] },

  // More ENHYPEN
  { id: 294, emoji: '🧛💀', answer: '폴린', artist: 'ENHYPEN', options: ['폴린', '라이징', '플라잉', '런닝'], syllables: ['폴', '린'] },
  { id: 295, emoji: '😈🔥', answer: '블레싱드커즈드', artist: 'ENHYPEN', options: ['블레싱드커즈드', '커즈드블레싱드', '온리블레싱드', '온리커즈드'], syllables: ['블', '레', '싱', '드', '커', '즈', '드'] },

  // VIVIZ
  { id: 296, emoji: '💜✨', answer: '범범', artist: 'VIVIZ', options: ['범범', '붐붐', '팝팝', '탑탑'], syllables: ['범', '범'] },
  { id: 297, emoji: '🎵💃', answer: '풀업', artist: 'VIVIZ', options: ['풀업', '풀다운', '푸시업', '풀아웃'], syllables: ['풀', '업'] },

  // fromis_9
  { id: 298, emoji: '9️⃣💕', answer: '필굿', artist: 'fromis_9', options: ['필굿', '필배드', '필쏘쏘', '필파인'], syllables: ['필', '굿'] },
  { id: 299, emoji: '😍✨', answer: '러브밤', artist: 'fromis_9', options: ['러브밤', '러브모닝', '러브나잇', '러브데이'], syllables: ['러', '브', '밤'] },

  // Weeekly
  { id: 300, emoji: '📅💕', answer: '애프터스쿨', artist: 'Weeekly', options: ['애프터스쿨', '비포스쿨', '인스쿨', '아웃스쿨'], syllables: ['애', '프', '터', '스', '쿨'] },

  // Brave Girls
  { id: 301, emoji: '👯‍♀️🔥', answer: '치맛바람', artist: 'Brave Girls', options: ['치맛바람', '바지바람', '원피스바람', '셔츠바람'], syllables: ['치', '맛', '바', '람'] },
  { id: 302, emoji: '🚗💨', answer: '롤린', artist: 'Brave Girls', options: ['롤린', '워킹', '런닝', '플라잉'], syllables: ['롤', '린'] },

  // Dreamcatcher
  { id: 303, emoji: '🌙😈', answer: '본보야지', artist: 'Dreamcatcher', options: ['본보야지', '굿바이', '헬로', '웰컴'], syllables: ['본', '보', '야', '지'] },
  { id: 304, emoji: '🐺🌙', answer: '오드아이', artist: 'Dreamcatcher', options: ['오드아이', '노말아이', '와일드아이', '크레이지아이'], syllables: ['오', '드', '아', '이'] },

  // Loona
  { id: 305, emoji: '🌙💫', answer: '하이하이', artist: 'LOONA', options: ['하이하이', '바이바이', '헬로헬로', '굿굿'], syllables: ['하', '이', '하', '이'] },
  { id: 306, emoji: '🦋✨', answer: '버터플라이', artist: 'LOONA', options: ['버터플라이', '드래곤플라이', '파이어플라이', '메이플라이'], syllables: ['버', '터', '플', '라', '이'] },
  { id: 307, emoji: '🔥💃', answer: '소왓', artist: 'LOONA', options: ['소왓', '소후', '소웨어', '소웬'], syllables: ['소', '왓'] },

  // Everglow
  { id: 308, emoji: '✨🔥', answer: '아디오스', artist: 'EVERGLOW', options: ['아디오스', '봉주르', '할로', '안녕'], syllables: ['아', '디', '오', '스'] },
  { id: 309, emoji: '👑💃', answer: '라라라', artist: 'EVERGLOW', options: ['라라라', '나나나', '다다다', '마마마'], syllables: ['라', '라', '라'] },
  { id: 310, emoji: '🔥💫', answer: '던던', artist: 'EVERGLOW', options: ['던던', '붐붐', '팡팡', '빵빵'], syllables: ['던', '던'] },

  // CLC
  { id: 311, emoji: '👹✨', answer: '도깨비', artist: 'CLC', options: ['도깨비', '귀신', '유령', '요정'], syllables: ['도', '깨', '비'] },
  { id: 312, emoji: '🚁✈️', answer: '헬리콥터', artist: 'CLC', options: ['헬리콥터', '에어플레인', '로켓', '드론'], syllables: ['헬', '리', '콥', '터'] },

  // April
  { id: 313, emoji: '🌸💕', answer: '봄이왔나봐', artist: 'April', options: ['봄이왔나봐', '여름이왔나봐', '가을이왔나봐', '겨울이왔나봐'], syllables: ['봄', '이', '왔', '나', '봐'] },
  { id: 314, emoji: '🧚✨', answer: '팅커벨', artist: 'April', options: ['팅커벨', '신데렐라', '백설공주', '라푼젤'], syllables: ['팅', '커', '벨'] },

  // OH MY GIRL
  { id: 315, emoji: '👧💕', answer: '컬러링북', artist: 'OH MY GIRL', options: ['컬러링북', '드로잉북', '스케치북', '노트북'], syllables: ['컬', '러', '링', '북'] },
  { id: 316, emoji: '🎵✨', answer: '살짝설렜어', artist: 'OH MY GIRL', options: ['살짝설렜어', '많이설렜어', '조금설렜어', '안설렜어'], syllables: ['살', '짝', '설', '렜', '어'] },
  { id: 317, emoji: '🌸🦋', answer: '던던댄스', artist: 'OH MY GIRL', options: ['던던댄스', '텅텅댄스', '뿡뿡댄스', '팡팡댄스'], syllables: ['던', '던', '댄', '스'] },

  // WJSN
  { id: 318, emoji: '🌌✨', answer: '이루리', artist: 'WJSN', options: ['이루리', '하루리', '가루리', '나루리'], syllables: ['이', '루', '리'] },
  { id: 319, emoji: '🎉💫', answer: '시크릿', artist: 'WJSN', options: ['시크릿', '퍼블릭', '오픈', '클로즈드'], syllables: ['시', '크', '릿'] },

  // Momoland
  { id: 320, emoji: '🎵💃', answer: '어마어마해', artist: 'Momoland', options: ['어마어마해', '대단대단해', '굉장굉장해', '놀라놀라해'], syllables: ['어', '마', '어', '마', '해'] },
  { id: 321, emoji: '🔥💃', answer: '뿜뿜', artist: 'Momoland', options: ['뿜뿜', '붐붐', '팡팡', '빵빵'], syllables: ['뿜', '뿜'] },

  // Apink
  { id: 322, emoji: '🅰️💗', answer: '덤더럼', artist: 'Apink', options: ['덤더럼', '담더람', '돔더롬', '둠더룸'], syllables: ['덤', '더', '럼'] },
  { id: 323, emoji: '💕😊', answer: '노노노', artist: 'Apink', options: ['노노노', '예스예스예스', '고고고', '스탑스탑스탑'], syllables: ['노', '노', '노'] },
  { id: 324, emoji: '🌸✨', answer: '미스터츄', artist: 'Apink', options: ['미스터츄', '미스츄', '닥터츄', '프로페서츄'], syllables: ['미', '스', '터', '츄'] },

  // SISTAR
  { id: 325, emoji: '👯‍♀️🔥', answer: '쉐이크잇', artist: 'SISTAR', options: ['쉐이크잇', '무브잇', '댄스잇', '플레이잇'], syllables: ['쉐', '이', '크', '잇'] },
  { id: 326, emoji: '☀️🌴', answer: '터치마이바디', artist: 'SISTAR', options: ['터치마이바디', '터치유어바디', '터치아워바디', '터치더바디'], syllables: ['터', '치', '마', '이', '바', '디'] },
  { id: 327, emoji: '🏃‍♀️💨', answer: '나혼자', artist: 'SISTAR', options: ['나혼자', '너혼자', '우리함께', '모두함께'], syllables: ['나', '혼', '자'] },

  // T-ara
  { id: 328, emoji: '👑💕', answer: '넘버나인', artist: 'T-ara', options: ['넘버나인', '넘버텐', '넘버에잇', '넘버세븐'], syllables: ['넘', '버', '나', '인'] },
  { id: 329, emoji: '🔄🔄', answer: '롤리폴리', artist: 'T-ara', options: ['롤리폴리', '롤리볼리', '졸리폴리', '홀리폴리'], syllables: ['롤', '리', '폴', '리'] },
  { id: 330, emoji: '😵💫', answer: '보핍보핍', artist: 'T-ara', options: ['보핍보핍', '비밥비밥', '붐붐붐붐', '빔빔빔빔'], syllables: ['보', '핍', '보', '핍'] },

  // AOA
  { id: 331, emoji: '😻✨', answer: '사뿐사뿐', artist: 'AOA', options: ['사뿐사뿐', '살랑살랑', '반짝반짝', '빙글빙글'], syllables: ['사', '뿐', '사', '뿐'] },
  { id: 332, emoji: '❤️🔥', answer: '심쿵해', artist: 'AOA', options: ['심쿵해', '심장해', '가슴해', '마음해'], syllables: ['심', '쿵', '해'] },
  { id: 333, emoji: '🎵👯‍♀️', answer: '짧은치마', artist: 'AOA', options: ['짧은치마', '긴치마', '짧은바지', '긴바지'], syllables: ['짧', '은', '치', '마'] },

  // 9Muses
  { id: 334, emoji: '9️⃣🎭', answer: '와일드', artist: '9Muses', options: ['와일드', '마일드', '차일드', '콜드'], syllables: ['와', '일', '드'] },
  { id: 335, emoji: '🎬📺', answer: '드라마', artist: '9Muses', options: ['드라마', '코메디', '액션', '로맨스'], syllables: ['드', '라', '마'] },

  // Laboum
  { id: 336, emoji: '🎵💕', answer: '샬랄라', artist: 'Laboum', options: ['샬랄라', '랄랄라', '달랄라', '팔랄라'], syllables: ['샬', '랄', '라'] },
  { id: 337, emoji: '😊✨', answer: '어떡해요', artist: 'Laboum', options: ['어떡해요', '어쩌죠', '왜그래요', '뭐해요'], syllables: ['어', '떡', '해', '요'] },

  // Gugudan
  { id: 338, emoji: '9️⃣✨', answer: '세미세미', artist: 'gugudan', options: ['세미세미', '풀풀', '하프하프', '콰터콰터'], syllables: ['세', '미', '세', '미'] },
  { id: 339, emoji: '💕🎵', answer: '나같은애', artist: 'gugudan', options: ['나같은애', '너같은애', '우리같은애', '걔같은애'], syllables: ['나', '같', '은', '애'] },

  // DIA
  { id: 340, emoji: '💎✨', answer: '굿나잇', artist: 'DIA', options: ['굿나잇', '굿모닝', '굿애프터눈', '굿이브닝'], syllables: ['굿', '나', '잇'] },
  { id: 341, emoji: '🎵💃', answer: '우와', artist: 'DIA', options: ['우와', '아와', '어와', '이와'], syllables: ['우', '와'] },

  // Pristin
  { id: 342, emoji: '✨💎', answer: '우우', artist: 'Pristin', options: ['우우', '아아', '오오', '에에'], syllables: ['우', '우'] },
  { id: 343, emoji: '😎🔥', answer: '와와', artist: 'Pristin', options: ['와와', '예예', '노노', '고고'], syllables: ['와', '와'] },

  // Weki Meki
  { id: 344, emoji: '✨💕', answer: '크러쉬', artist: 'Weki Meki', options: ['크러쉬', '플래쉬', '스매쉬', '슬래쉬'], syllables: ['크', '러', '쉬'] },
  { id: 345, emoji: '🎵💃', answer: '라라라', artist: 'Weki Meki', options: ['라라라', '나나나', '다다다', '마마마'], syllables: ['라', '라', '라'] },

  // EXID
  { id: 346, emoji: '💃🔥', answer: '아예', artist: 'EXID', options: ['아예', '예예', '노노', '오오'], syllables: ['아', '예'] },
  { id: 347, emoji: '⬆️⬇️', answer: '위아래', artist: 'EXID', options: ['위아래', '좌우', '앞뒤', '동서'], syllables: ['위', '아', '래'] },
  { id: 348, emoji: '🌙🔥', answer: '덜덜덜', artist: 'EXID', options: ['덜덜덜', '벌벌벌', '털털털', '설설설'], syllables: ['덜', '덜', '덜'] },

  // Cosmic Girls/WJSN more
  { id: 349, emoji: '🚀✨', answer: '꿈꾸는마음으로', artist: 'WJSN', options: ['꿈꾸는마음으로', '깨어난마음으로', '잠든마음으로', '설레는마음으로'], syllables: ['꿈', '꾸', '는', '마', '음', '으', '로'] },
  { id: 350, emoji: '🎵💫', answer: '부탁해', artist: 'WJSN', options: ['부탁해', '감사해', '미안해', '사랑해'], syllables: ['부', '탁', '해'] },

  // Secret
  { id: 351, emoji: '🤫✨', answer: '샤이보이', artist: 'Secret', options: ['샤이보이', '샤이걸', '쿨보이', '쿨걸'], syllables: ['샤', '이', '보', '이'] },
  { id: 352, emoji: '💖🎵', answer: '매직', artist: 'Secret', options: ['매직', '트릭', '스펠', '챠밍'], syllables: ['매', '직'] },

  // KARA
  { id: 353, emoji: '📦🔮', answer: '판도라', artist: 'KARA', options: ['판도라', '아테나', '헤라', '아프로디테'], syllables: ['판', '도', '라'] },
  { id: 354, emoji: '🍯💕', answer: '허니', artist: 'KARA', options: ['허니', '슈가', '스위티', '다링'], syllables: ['허', '니'] },
  { id: 355, emoji: '🏃‍♀️💨', answer: '미스터', artist: 'KARA', options: ['미스터', '미스', '미세스', '닥터'], syllables: ['미', '스', '터'] },
  { id: 356, emoji: '🦹🎩', answer: '루팡', artist: 'KARA', options: ['루팡', '홈즈', '왓슨', '포아로'], syllables: ['루', '팡'] },

  // Wonder Girls
  { id: 357, emoji: '👧✨', answer: '아이러너', artist: 'Wonder Girls', options: ['아이러너', '아이워커', '아이점퍼', '아이플라이어'], syllables: ['아', '이', '러', '너'] },
  { id: 358, emoji: '📞💕', answer: '텔미', artist: 'Wonder Girls', options: ['텔미', '쇼미', '기브미', '렛미'], syllables: ['텔', '미'] },
  { id: 359, emoji: '👀👀', answer: '노바디', artist: 'Wonder Girls', options: ['노바디', '썸바디', '에브리바디', '애니바디'], syllables: ['노', '바', '디'] },
  { id: 360, emoji: '🔥💃', answer: '소핫', artist: 'Wonder Girls', options: ['소핫', '소쿨', '소콜드', '소웜'], syllables: ['소', '핫'] },

  // f(x)
  { id: 361, emoji: '🎵✨', answer: '레드라이트', artist: 'f(x)', options: ['레드라이트', '블루라이트', '그린라이트', '옐로우라이트'], syllables: ['레', '드', '라', '이', '트'] },
  { id: 362, emoji: '⚡🔥', answer: '일렉트릭쇼크', artist: 'f(x)', options: ['일렉트릭쇼크', '일렉트릭웨이브', '일렉트릭스톰', '일렉트릭플래시'], syllables: ['일', '렉', '트', '릭', '쇼', '크'] },
  { id: 363, emoji: '💕✨', answer: '라차타', artist: 'f(x)', options: ['라차타', '라파파', '라바바', '라마마'], syllables: ['라', '차', '타'] },
  { id: 364, emoji: '🧱🧱', answer: '포월스', artist: 'f(x)', options: ['포월스', '쓰리월스', '파이브월스', '식스월스'], syllables: ['포', '월', '스'] },

  // miss A
  { id: 365, emoji: '🅰️✨', answer: '허쉬', artist: 'miss A', options: ['허쉬', '샤우트', '위스퍼', '스크림'], syllables: ['허', '쉬'] },
  { id: 366, emoji: '💔😢', answer: '배드걸굿걸', artist: 'miss A', options: ['배드걸굿걸', '굿걸배드걸', '굿보이배드보이', '배드보이굿보이'], syllables: ['배', '드', '걸', '굿', '걸'] },
  { id: 367, emoji: '🌧️💕', answer: '오버유', artist: 'miss A', options: ['오버유', '언더유', '베사이드유', '위드유'], syllables: ['오', '버', '유'] },

  // 4Minute
  { id: 368, emoji: '4️⃣⏱️', answer: '볼륨업', artist: '4Minute', options: ['볼륨업', '볼륨다운', '볼륨맥스', '볼륨민'], syllables: ['볼', '륨', '업'] },
  { id: 369, emoji: '🔥🔥', answer: '핫이슈', artist: '4Minute', options: ['핫이슈', '콜드이슈', '뉴이슈', '올드이슈'], syllables: ['핫', '이', '슈'] },
  { id: 370, emoji: '😵💫', answer: '미쳤어', artist: '4Minute', options: ['미쳤어', '정상이야', '괜찮아', '좋아'], syllables: ['미', '쳤', '어'] },

  // Brown Eyed Girls
  { id: 371, emoji: '👁️🟤', answer: '웜홀', artist: 'Brown Eyed Girls', options: ['웜홀', '블랙홀', '화이트홀', '웹홀'], syllables: ['웜', '홀'] },
  { id: 372, emoji: '🪄✨', answer: '아브라카다브라', artist: 'Brown Eyed Girls', options: ['아브라카다브라', '심심살라빔', '호쿠스포쿠스', '알라카잠'], syllables: ['아', '브', '라', '카', '다', '브', '라'] },
  { id: 373, emoji: '💋🔥', answer: '킬빌', artist: 'Brown Eyed Girls', options: ['킬빌', '배드빌', '굿빌', '빅빌'], syllables: ['킬', '빌'] },

  // After School
  { id: 374, emoji: '🏫✨', answer: '플래시백', artist: 'After School', options: ['플래시백', '플래시포워드', '리플레이', '리와인드'], syllables: ['플', '래', '시', '백'] },
  { id: 375, emoji: '💃🔥', answer: '뱅', artist: 'After School', options: ['뱅', '붐', '팡', '펑'], syllables: ['뱅'] },

  // Rainbow
  { id: 376, emoji: '🌈✨', answer: '어쩜', artist: 'Rainbow', options: ['어쩜', '어때', '어디', '언제'], syllables: ['어', '쩜'] },
  { id: 377, emoji: '🅰️🅰️', answer: '에이', artist: 'Rainbow', options: ['에이', '비', '씨', '디'], syllables: ['에', '이'] },

  // Jewelry
  { id: 378, emoji: '💎✨', answer: '핫앤콜드', artist: 'Jewelry', options: ['핫앤콜드', '웜앤쿨', '파이어앤아이스', '섬머앤윈터'], syllables: ['핫', '앤', '콜', '드'] },
  { id: 379, emoji: '💕🎵', answer: '원모어타임', artist: 'Jewelry', options: ['원모어타임', '투모어타임', '노모어타임', '라스트타임'], syllables: ['원', '모', '어', '타', '임'] },

  // Davichi
  { id: 380, emoji: '🎤💕', answer: '둘이서한잔', artist: 'Davichi', options: ['둘이서한잔', '셋이서한잔', '혼자서한잔', '넷이서한잔'], syllables: ['둘', '이', '서', '한', '잔'] },
  { id: 381, emoji: '💔😢', answer: '팔이월', artist: 'Davichi', options: ['팔이월', '칠이월', '구이월', '육이월'], syllables: ['팔', '이', '월'] },

  // Hyuna
  { id: 382, emoji: '💃🔥', answer: '아이엠더베스트', artist: 'HyunA', options: ['아이엠더베스트', '아이엠더원', '아이엠더퀸', '아이엠더스타'], syllables: ['아', '이', '엠', '더', '베', '스', '트'] },
  { id: 383, emoji: '🍒💋', answer: '빨개요', artist: 'HyunA', options: ['빨개요', '파래요', '노래요', '검어요'], syllables: ['빨', '개', '요'] },
  { id: 384, emoji: '🎵💃', answer: '버블팝', artist: 'HyunA', options: ['버블팝', '버블검', '버블티', '버블배스'], syllables: ['버', '블', '팝'] },

  // Taemin
  { id: 385, emoji: '🕺✨', answer: '워너비', artist: 'Taemin', options: ['워너비', '캔비', '윌비', '머스트비'], syllables: ['워', '너', '비'] },
  { id: 386, emoji: '💃🔥', answer: '무브', artist: 'Taemin', options: ['무브', '스탑', '고', '런'], syllables: ['무', '브'] },
  { id: 387, emoji: '👹💫', answer: '괴도', artist: 'Taemin', options: ['괴도', '탐정', '경찰', '도둑'], syllables: ['괴', '도'] },

  // Baekhyun
  { id: 388, emoji: '🎤✨', answer: '유엔빌리지', artist: 'Baekhyun', options: ['유엔빌리지', '유엔시티', '유엔타운', '유엔파크'], syllables: ['유', '엔', '빌', '리', '지'] },
  { id: 389, emoji: '🍬💕', answer: '캔디', artist: 'Baekhyun', options: ['캔디', '쿠키', '초콜릿', '케이크'], syllables: ['캔', '디'] },
  { id: 390, emoji: '🌙🔥', answer: '밤비', artist: 'Baekhyun', options: ['밤비', '덤보', '심바', '니모'], syllables: ['밤', '비'] },

  // Kai
  { id: 391, emoji: '🕺🔥', answer: '음', artist: 'Kai', options: ['음', '아', '어', '오'], syllables: ['음'] },
  { id: 392, emoji: '😵💫', answer: '페퍼', artist: 'Kai', options: ['페퍼', '솔트', '슈가', '스파이스'], syllables: ['페', '퍼'] },
  { id: 393, emoji: '🌙✨', answer: '페어리', artist: 'Kai', options: ['페어리', '픽시', '엘프', '님프'], syllables: ['페', '어', '리'] },

  // D.O.
  { id: 394, emoji: '🎤💕', answer: '텔포', artist: 'D.O.', options: ['텔포', '콜포', '세이포', '센드포'], syllables: ['텔', '포'] },
  { id: 395, emoji: '🌸✨', answer: '로즈', artist: 'D.O.', options: ['로즈', '릴리', '데이지', '튤립'], syllables: ['로', '즈'] },

  // Chen
  { id: 396, emoji: '🎤🌙', answer: '좋아서이별', artist: 'Chen', options: ['좋아서이별', '싫어서이별', '사랑서이별', '미워서이별'], syllables: ['좋', '아', '서', '이', '별'] },
  { id: 397, emoji: '🌺💕', answer: '사월이지나면', artist: 'Chen', options: ['사월이지나면', '오월이지나면', '유월이지나면', '칠월이지나면'], syllables: ['사', '월', '이', '지', '나', '면'] },

  // Suho
  { id: 398, emoji: '🌊✨', answer: '사랑하자', artist: 'Suho', options: ['사랑하자', '행복하자', '즐기자', '웃자'], syllables: ['사', '랑', '하', '자'] },
  { id: 399, emoji: '🦋💕', answer: '자화상', artist: 'Suho', options: ['자화상', '초상화', '풍경화', '정물화'], syllables: ['자', '화', '상'] },

  // Lay
  { id: 400, emoji: '🐑✨', answer: '쉽', artist: 'Lay', options: ['쉽', '램', '고트', '카우'], syllables: ['쉽'] },

  // Sehun & Chanyeol
  { id: 401, emoji: '👬🔥', answer: '왓어라이프', artist: 'EXO-SC', options: ['왓어라이프', '왓어데이', '왓어월드', '왓어타임'], syllables: ['왓', '어', '라', '이', '프'] },
  { id: 402, emoji: '📱💕', answer: '텔레폰', artist: 'EXO-SC', options: ['텔레폰', '컴퓨터', '태블릿', '워치'], syllables: ['텔', '레', '폰'] },

  // Taeyeon
  { id: 403, emoji: '👩👌', answer: '파인', artist: 'Taeyeon', options: ['파인', '쿨', '나이스', '굿'], syllables: ['파', '인'] },
  { id: 404, emoji: '⭐💡', answer: '스타라이트', artist: 'Taeyeon', options: ['스타라이트', '문라이트', '선라이트', '파이어라이트'], syllables: ['스', '타', '라', '이', '트'] },
  { id: 405, emoji: '👦', answer: '아이', artist: 'Taeyeon', options: ['아이', '유', '위', '히'], syllables: ['아', '이'] },
  { id: 406, emoji: '🌧️', answer: '레인', artist: 'Taeyeon', options: ['레인', '스노우', '윈드', '선샤인'], syllables: ['레', '인'] },

  // Tiffany
  { id: 407, emoji: '💗✨', answer: '아이저스트워너댄스', artist: 'Tiffany', options: ['아이저스트워너댄스', '아이저스트워너싱', '아이저스트워너런', '아이저스트워너플라이'], syllables: ['아', '이', '저', '스', '트', '워', '너', '댄', '스'] },
  { id: 408, emoji: '❤️🔥', answer: '하트브레이크호텔', artist: 'Tiffany', options: ['하트브레이크호텔', '하트풀호텔', '럭키호텔', '해피호텔'], syllables: ['하', '트', '브', '레', '이', '크', '호', '텔'] },

  // Jessica
  { id: 409, emoji: '❄️✨', answer: '썸머스톰', artist: 'Jessica', options: ['썸머스톰', '윈터스톰', '스프링레인', '오텀윈드'], syllables: ['썸', '머', '스', '톰'] },
  { id: 410, emoji: '🌸💕', answer: '플라이', artist: 'Jessica', options: ['플라이', '런', '점프', '워크'], syllables: ['플', '라', '이'] },

  // Yoona
  { id: 411, emoji: '🌙💕', answer: '바람이분다', artist: 'Yoona', options: ['바람이분다', '비가온다', '해가뜬다', '눈이온다'], syllables: ['바', '람', '이', '분', '다'] },
  { id: 412, emoji: '🎵✨', answer: '더파워오브러브', artist: 'Yoona', options: ['더파워오브러브', '더파워오브유', '더파워오브미', '더파워오브어스'], syllables: ['더', '파', '워', '오', '브', '러', '브'] },

  // Seohyun
  { id: 413, emoji: '👸💫', answer: '나비잠', artist: 'Seohyun', options: ['나비잠', '벌꿈', '새잠', '꽃꿈'], syllables: ['나', '비', '잠'] },
  { id: 414, emoji: '🌙🦋', answer: '돈세이노', artist: 'Seohyun', options: ['돈세이노', '세이예스', '세이노', '세이바이'], syllables: ['돈', '세', '이', '노'] },

  // Krystal
  { id: 415, emoji: '💎✨', answer: '아이돈노', artist: 'Krystal', options: ['아이돈노', '아이노', '아이예스', '아이씽크'], syllables: ['아', '이', '돈', '노'] },
  { id: 416, emoji: '💃🔥', answer: '올마인', artist: 'Krystal', options: ['올마인', '올유어스', '올아워스', '올데어스'], syllables: ['올', '마', '인'] },

  // Suzy
  { id: 417, emoji: '👧💕', answer: '오프더레코드', artist: 'Suzy', options: ['오프더레코드', '온더레코드', '인더레코드', '아웃더레코드'], syllables: ['오', '프', '더', '레', '코', '드'] },
  { id: 418, emoji: '😢💔', answer: '예스노메이비', artist: 'Suzy', options: ['예스노메이비', '예스노', '메이비노', '메이비예스'], syllables: ['예', '스', '노', '메', '이', '비'] },
  { id: 419, emoji: '🌙✨', answer: '홀리데이', artist: 'Suzy', options: ['홀리데이', '위켄드', '먼데이', '선데이'], syllables: ['홀', '리', '데', '이'] },

  // Jessi
  { id: 420, emoji: '💪🔥', answer: '셀럽파이브', artist: 'Jessi', options: ['셀럽파이브', '셀럽포', '셀럽쓰리', '셀럽원'], syllables: ['셀', '럽', '파', '이', '브'] },
  { id: 421, emoji: '😎💃', answer: '눈누난나', artist: 'Jessi', options: ['눈누난나', '눈나눈나', '난나난나', '눈눈난난'], syllables: ['눈', '누', '난', '나'] },
  { id: 422, emoji: '🔥🔥', answer: '어떤엑스', artist: 'Jessi', options: ['어떤엑스', '어떤와이', '어떤제트', '어떤에이'], syllables: ['어', '떤', '엑', '스'] },

  // Lee Hi
  { id: 423, emoji: '🎤💕', answer: '원앤온리', artist: 'Lee Hi', options: ['원앤온리', '투앤온리', '원앤투', '원앤올'], syllables: ['원', '앤', '온', '리'] },
  { id: 424, emoji: '🍷😢', answer: '한숨', artist: 'Lee Hi', options: ['한숨', '눈물', '미소', '웃음'], syllables: ['한', '숨'] },
  { id: 425, emoji: '🌹💔', answer: '로즈', artist: 'Lee Hi', options: ['로즈', '릴리', '데이지', '튤립'], syllables: ['로', '즈'] },

  // Heize
  { id: 426, emoji: '🎤✨', answer: '트리플', artist: 'Heize', options: ['트리플', '더블', '싱글', '쿼드'], syllables: ['트', '리', '플'] },
  { id: 427, emoji: '🌧️💕', answer: '비도오고그래서', artist: 'Heize', options: ['비도오고그래서', '눈도오고그래서', '바람도불고그래서', '해도뜨고그래서'], syllables: ['비', '도', '오', '고', '그', '래', '서'] },
  { id: 428, emoji: '💔😢', answer: '떨어지는낙엽까지도', artist: 'Heize', options: ['떨어지는낙엽까지도', '피어나는꽃까지도', '흐르는강까지도', '불타는불까지도'], syllables: ['떨', '어', '지', '는', '낙', '엽'] },

  // BOL4
  { id: 429, emoji: '🎈💕', answer: '나만봄', artist: 'BOL4', options: ['나만봄', '너만봄', '우리봄', '모두봄'], syllables: ['나', '만', '봄'] },
  { id: 430, emoji: '✈️💫', answer: '여행', artist: 'BOL4', options: ['여행', '출장', '휴가', '소풍'], syllables: ['여', '행'] },
  { id: 431, emoji: '⭐✨', answer: '우주를줄게', artist: 'BOL4', options: ['우주를줄게', '별을줄게', '달을줄게', '해를줄게'], syllables: ['우', '주', '를', '줄', '게'] },

  // Dean
  { id: 432, emoji: '🎤🔥', answer: '풀다오버', artist: 'DEAN', options: ['풀다오버', '풀다업', '풀다인', '풀다아웃'], syllables: ['풀', '다', '오', '버'] },
  { id: 433, emoji: '💔💫', answer: '인스타그램', artist: 'DEAN', options: ['인스타그램', '페이스북', '트위터', '유튜브'], syllables: ['인', '스', '타', '그', '램'] },
  { id: 434, emoji: '🌙✨', answer: '하프문', artist: 'DEAN', options: ['하프문', '풀문', '뉴문', '쿼터문'], syllables: ['하', '프', '문'] },

  // Crush
  { id: 435, emoji: '💕🎤', answer: '잊어버리지마', artist: 'Crush', options: ['잊어버리지마', '기억해줘', '생각해줘', '떠올려줘'], syllables: ['잊', '어', '버', '리', '지', '마'] },
  { id: 436, emoji: '🌸✨', answer: '뷰티풀', artist: 'Crush', options: ['뷰티풀', '원더풀', '파워풀', '피스풀'], syllables: ['뷰', '티', '풀'] },
  { id: 437, emoji: '☕💕', answer: '소파', artist: 'Crush', options: ['소파', '의자', '침대', '책상'], syllables: ['소', '파'] },

  // Jay Park
  { id: 438, emoji: '🎤🔥', answer: '본투빗', artist: 'Jay Park', options: ['본투빗', '본투윈', '본투런', '본투플라이'], syllables: ['본', '투', '빗'] },
  { id: 439, emoji: '💃✨', answer: '메트', artist: 'Jay Park', options: ['메트', '멧', '맷', '밋'], syllables: ['메', '트'] },
  { id: 440, emoji: '😎🔥', answer: '모나리자', artist: 'Jay Park', options: ['모나리자', '비너스', '아프로디테', '아테나'], syllables: ['모', '나', '리', '자'] },

  // Gray
  { id: 441, emoji: '🎹✨', answer: '위드아웃유', artist: 'GRAY', options: ['위드아웃유', '위드유', '포유', '투유'], syllables: ['위', '드', '아', '웃', '유'] },
  { id: 442, emoji: '🌙💕', answer: '인소울', artist: 'GRAY', options: ['인소울', '아웃소울', '마이소울', '유어소울'], syllables: ['인', '소', '울'] },

  // Simon Dominic
  { id: 443, emoji: '🎤💪', answer: '사이먼세즈', artist: 'Simon Dominic', options: ['사이먼세즈', '사이먼워즈', '사이먼독스', '사이먼플레이즈'], syllables: ['사', '이', '먼', '세', '즈'] },
  { id: 444, emoji: '🔥💫', answer: '밤이잘', artist: 'Simon Dominic', options: ['밤이잘', '낮이잘', '아침이잘', '저녁이잘'], syllables: ['밤', '이', '잘'] },

  // Loco
  { id: 445, emoji: '🚂🔥', answer: '유투비', artist: 'Loco', options: ['유투비', '위투비', '아이투비', '히투비'], syllables: ['유', '투', '비'] },
  { id: 446, emoji: '💕✨', answer: '홀드미타잇', artist: 'Loco', options: ['홀드미타잇', '레미고', '키스미', '러브미'], syllables: ['홀', '드', '미', '타', '잇'] },

  // Giriboy
  { id: 447, emoji: '👦🎤', answer: '호텔캘리포니아', artist: 'Giriboy', options: ['호텔캘리포니아', '호텔뉴욕', '호텔파리', '호텔런던'], syllables: ['호', '텔', '캘', '리', '포', '니', '아'] },
  { id: 448, emoji: '😢💔', answer: '이별할때', artist: 'Giriboy', options: ['이별할때', '만날때', '사랑할때', '웃을때'], syllables: ['이', '별', '할', '때'] },

  // BewhY
  { id: 449, emoji: '🎤🔥', answer: '포레스트', artist: 'BewhY', options: ['포레스트', '오션', '마운틴', '데저트'], syllables: ['포', '레', '스', '트'] },
  { id: 450, emoji: '👑💫', answer: '킹', artist: 'BewhY', options: ['킹', '퀸', '프린스', '프린세스'], syllables: ['킹'] },

  // pH-1
  { id: 451, emoji: '🎤💫', answer: '좋아해', artist: 'pH-1', options: ['좋아해', '사랑해', '보고싶어', '그리워'], syllables: ['좋', '아', '해'] },
  { id: 452, emoji: '🌙✨', answer: '팬텀', artist: 'pH-1', options: ['팬텀', '고스트', '스피릿', '쉐도우'], syllables: ['팬', '텀'] },

  // Penomeco
  { id: 453, emoji: '🎵🔥', answer: '좋아', artist: 'Penomeco', options: ['좋아', '싫어', '몰라', '알아'], syllables: ['좋', '아'] },
  { id: 454, emoji: '💕✨', answer: '노레디', artist: 'Penomeco', options: ['노레디', '레디', '겟레디', '스테이레디'], syllables: ['노', '레', '디'] },

  // BIBI
  { id: 455, emoji: '👧🔥', answer: '애매해', artist: 'BIBI', options: ['애매해', '확실해', '모르겠어', '알겠어'], syllables: ['애', '매', '해'] },
  { id: 456, emoji: '🎵💃', answer: '나쁜년', artist: 'BIBI', options: ['나쁜년', '착한년', '예쁜년', '멋진년'], syllables: ['나', '쁜', '년'] },
  { id: 457, emoji: '💋🔥', answer: '밀크', artist: 'BIBI', options: ['밀크', '워터', '쥬스', '콜라'], syllables: ['밀', '크'] },

  // Hwasa
  { id: 458, emoji: '👸🔥', answer: '트위트', artist: 'Hwasa', options: ['트위트', '포스트', '샤우트', '콜'], syllables: ['트', '위', '트'] },
  { id: 459, emoji: '🍑✨', answer: '마리아', artist: 'Hwasa', options: ['마리아', '소피아', '올리비아', '빅토리아'], syllables: ['마', '리', '아'] },
  { id: 460, emoji: '💃🔥', answer: '멍청이', artist: 'Hwasa', options: ['멍청이', '바보', '천재', '똑똒이'], syllables: ['멍', '청', '이'] },

  // Solar
  { id: 461, emoji: '☀️✨', answer: '용감하게', artist: 'Solar', options: ['용감하게', '겁없이', '두렵게', '약하게'], syllables: ['용', '감', '하', '게'] },
  { id: 462, emoji: '🌙💕', answer: '꿀', artist: 'Solar', options: ['꿀', '설탕', '소금', '물'], syllables: ['꿀'] },

  // Moonbyul
  { id: 463, emoji: '🌙⭐', answer: '달이태양을가릴때', artist: 'Moonbyul', options: ['달이태양을가릴때', '해가달을가릴때', '별이달을가릴때', '구름이해를가릴때'], syllables: ['달', '이', '태', '양', '을'] },
  { id: 464, emoji: '🎵🔥', answer: '엑클립스', artist: 'Moonbyul', options: ['엑클립스', '선라이즈', '선셋', '문라이즈'], syllables: ['엑', '클', '립', '스'] },

  // Wheein
  { id: 465, emoji: '🌸✨', answer: '가재', artist: 'Wheein', options: ['가재', '새우', '게', '조개'], syllables: ['가', '재'] },
  { id: 466, emoji: '🎵💕', answer: '워터컬러', artist: 'Wheein', options: ['워터컬러', '오일컬러', '파스텔', '아크릴'], syllables: ['워', '터', '컬', '러'] },

  // Jackson Wang
  { id: 467, emoji: '🦁🔥', answer: '파파야', artist: 'Jackson Wang', options: ['파파야', '망고', '바나나', '키위'], syllables: ['파', '파', '야'] },
  { id: 468, emoji: '💪✨', answer: '100웨이즈', artist: 'Jackson Wang', options: ['100웨이즈', '50웨이즈', '200웨이즈', '10웨이즈'], syllables: ['백', '웨', '이', '즈'] },
  { id: 469, emoji: '😎🔥', answer: '블로우', artist: 'Jackson Wang', options: ['블로우', '플로우', '쇼우', '그로우'], syllables: ['블', '로', '우'] },

  // Mark (GOT7)
  { id: 470, emoji: '🎤💫', answer: '라스트피스', artist: 'Mark', options: ['라스트피스', '퍼스트피스', '넥스트피스', '온리피스'], syllables: ['라', '스', '트', '피', '스'] },
  { id: 471, emoji: '🌟✨', answer: '올마이', artist: 'Mark', options: ['올마이', '올유어', '올아워', '올데어'], syllables: ['올', '마', '이'] },

  // JB (GOT7)
  { id: 472, emoji: '🎵🔥', answer: '디스커버리', artist: 'JB', options: ['디스커버리', '리커버리', '언커버', '디스클로저'], syllables: ['디', '스', '커', '버', '리'] },
  { id: 473, emoji: '💔😢', answer: '스위치', artist: 'JB', options: ['스위치', '버튼', '레버', '노브'], syllables: ['스', '위', '치'] },

  // Jinyoung (GOT7)
  { id: 474, emoji: '🎭✨', answer: '하얀', artist: 'Jinyoung', options: ['하얀', '파란', '빨간', '검은'], syllables: ['하', '얀'] },
  { id: 475, emoji: '🌸💕', answer: '드라이브', artist: 'Jinyoung', options: ['드라이브', '워크', '런', '플라이'], syllables: ['드', '라', '이', '브'] },

  // Bambam
  { id: 476, emoji: '🎤🔥', answer: '섹시', artist: 'Bambam', options: ['섹시', '큐티', '쿨리', '프리티'], syllables: ['섹', '시'] },
  { id: 477, emoji: '💃✨', answer: '슬로모션', artist: 'Bambam', options: ['슬로모션', '패스트모션', '노모션', '풀모션'], syllables: ['슬', '로', '모', '션'] },

  // Yugyeom
  { id: 478, emoji: '🕺💫', answer: '네가편해', artist: 'Yugyeom', options: ['네가편해', '내가편해', '우리편해', '모두편해'], syllables: ['네', '가', '편', '해'] },
  { id: 479, emoji: '🎵🔥', answer: '프런트', artist: 'Yugyeom', options: ['프런트', '백', '사이드', '탑'], syllables: ['프', '런', '트'] },

  // Youngjae (GOT7)
  { id: 480, emoji: '🎤💕', answer: '워크잇', artist: 'Youngjae', options: ['워크잇', '런잇', '플레이잇', '무브잇'], syllables: ['워', '크', '잇'] },
  { id: 481, emoji: '☀️✨', answer: '비라이트', artist: 'Youngjae', options: ['비라이트', '비다크', '비샤인', '비글로우'], syllables: ['비', '라', '이', '트'] },

  // Wonho
  { id: 482, emoji: '💪🔥', answer: '러브어', artist: 'Wonho', options: ['러브어', '헤이트어', '라이크어', '원트어'], syllables: ['러', '브', '어'] },
  { id: 483, emoji: '💕✨', answer: '오픈마인드', artist: 'Wonho', options: ['오픈마인드', '클로즈드마인드', '프리마인드', '록마인드'], syllables: ['오', '픈', '마', '인', '드'] },
  { id: 484, emoji: '🎵💫', answer: '아인자이크', artist: 'Wonho', options: ['아인자이크', '츠바이', '드라이', '피어'], syllables: ['아', '인', '자', '이', '크'] },

  // Shownu
  { id: 485, emoji: '🐻🔥', answer: '굿러브', artist: 'Shownu', options: ['굿러브', '배드러브', '트루러브', '퍼스트러브'], syllables: ['굿', '러', '브'] },
  { id: 486, emoji: '🌙✨', answer: '캄앤도운', artist: 'Shownu', options: ['캄앤도운', '런앤고', '스탑앤고', '업앤다운'], syllables: ['캄', '앤', '도', '운'] },

  // Joohoney
  { id: 487, emoji: '🐝🎤', answer: '사이드', artist: 'Joohoney', options: ['사이드', '프런트', '백', '탑'], syllables: ['사', '이', '드'] },
  { id: 488, emoji: '🔥💪', answer: '비스트모드', artist: 'Joohoney', options: ['비스트모드', '이지모드', '하드모드', '노말모드'], syllables: ['비', '스', '트', '모', '드'] },

  // I.M
  { id: 489, emoji: '🎤💫', answer: '라이어', artist: 'I.M', options: ['라이어', '트루어', '페이커', '플레이어'], syllables: ['라', '이', '어'] },
  { id: 490, emoji: '🌙🔥', answer: '섀비', artist: 'I.M', options: ['섀비', '클린', '니트', '메시'], syllables: ['섀', '비'] },

  // Kihyun
  { id: 491, emoji: '🎤✨', answer: '아이러브유', artist: 'Kihyun', options: ['아이러브유', '아이헤이트유', '아이미스유', '아이니드유'], syllables: ['아', '이', '러', '브', '유'] },
  { id: 492, emoji: '💕🎵', answer: '비사이드', artist: 'Kihyun', options: ['비사이드', '인사이드', '아웃사이드', '어사이드'], syllables: ['비', '사', '이', '드'] },

  // Minhyuk (MONSTA X)
  { id: 493, emoji: '☀️💕', answer: '유나이티드', artist: 'Minhyuk', options: ['유나이티드', '디바이디드', '커넥티드', '세퍼레이티드'], syllables: ['유', '나', '이', '티', '드'] },
  { id: 494, emoji: '🎵✨', answer: '옹어에어', artist: 'Minhyuk', options: ['옹어에어', '오프에어', '라이브에어', '데드에어'], syllables: ['옹', '어', '에', '어'] },

  // Hyungwon
  { id: 495, emoji: '🦋✨', answer: '호프', artist: 'Hyungwon', options: ['호프', '페어', '조이', '러브'], syllables: ['호', '프'] },
  { id: 496, emoji: '🌙💫', answer: '나이트뷰', artist: 'Hyungwon', options: ['나이트뷰', '데이뷰', '모닝뷰', '이브닝뷰'], syllables: ['나', '이', '트', '뷰'] },

  // San (ATEEZ)
  { id: 497, emoji: '🔥💪', answer: '파이러츠킹', artist: 'ATEEZ', options: ['파이러츠킹', '파이러츠퀸', '파이러츠프린스', '파이러츠나이트'], syllables: ['파', '이', '러', '츠', '킹'] },
  { id: 498, emoji: '🎵✨', answer: '웨이브', artist: 'ATEEZ', options: ['웨이브', '스톰', '윈드', '파이어'], syllables: ['웨', '이', '브'] },

  // Hongjoong (ATEEZ)
  { id: 499, emoji: '👑🔥', answer: '게릴라', artist: 'ATEEZ', options: ['게릴라', '밀리터리', '아미', '솔저'], syllables: ['게', '릴', '라'] },
  { id: 500, emoji: '🎤💫', answer: '워렌스', artist: 'ATEEZ', options: ['워렌스', '피어', '호프', '조이'], syllables: ['워', '렌', '스'] },

  // ATEEZ songs
  { id: 501, emoji: '🌟✨', answer: '에이티즈', artist: 'ATEEZ', options: ['에이티즈', '에잇티즈', '에이틴', '에잇틴'], syllables: ['에', '이', '티', '즈'] },
  { id: 502, emoji: '🎵💕', answer: '빛', artist: 'ATEEZ', options: ['빛', '어둠', '그림자', '밤'], syllables: ['빛'] },

  // ATEEZ songs
  { id: 503, emoji: '🔥💃', answer: '세이마이네임', artist: 'ATEEZ', options: ['세이마이네임', '세이유어네임', '세이아워네임', '세이더네임'], syllables: ['세', '이', '마', '이', '네', '임'] },
  { id: 504, emoji: '🎵✨', answer: '선라이즈', artist: 'ATEEZ', options: ['선라이즈', '선셋', '문라이즈', '스타라이즈'], syllables: ['선', '라', '이', '즈'] },

  // ATEEZ songs
  { id: 505, emoji: '🦋💫', answer: '원더랜드', artist: 'ATEEZ', options: ['원더랜드', '드림랜드', '페어리랜드', '매직랜드'], syllables: ['원', '더', '랜', '드'] },
  { id: 506, emoji: '🌙✨', answer: '페이드', artist: 'ATEEZ', options: ['페이드', '블룸', '그로우', '샤인'], syllables: ['페', '이', '드'] },

  // ATEEZ songs
  { id: 507, emoji: '💃🔥', answer: '해적왕', artist: 'ATEEZ', options: ['해적왕', '해적단', '해적선', '해적섬'], syllables: ['해', '적', '왕'] },
  { id: 508, emoji: '🎵💕', answer: '커버즈', artist: 'ATEEZ', options: ['커버즈', '언커버즈', '디스커버즈', '리커버즈'], syllables: ['커', '버', '즈'] },

  // ATEEZ songs
  { id: 509, emoji: '🎤💪', answer: '디저트', artist: 'ATEEZ', options: ['디저트', '디너', '런치', '브렉퍼스트'], syllables: ['디', '저', '트'] },
  { id: 510, emoji: '🌟🔥', answer: '파이어', artist: 'ATEEZ', options: ['파이어', '워터', '어스', '에어'], syllables: ['파', '이', '어'] },

  // ATEEZ songs
  { id: 511, emoji: '🎤🔥', answer: '앤서', artist: 'ATEEZ', options: ['앤서', '퀘스천', '리플라이', '아스크'], syllables: ['앤', '서'] },
  { id: 512, emoji: '💫✨', answer: '스트롱', artist: 'ATEEZ', options: ['스트롱', '위크', '소프트', '하드'], syllables: ['스', '트', '롱'] },

  // Stray Kids songs
  { id: 513, emoji: '🦊💫', answer: '바람', artist: 'Stray Kids', options: ['바람', '비', '눈', '해'], syllables: ['바', '람'] },
  { id: 514, emoji: '🎨✨', answer: '아트', artist: 'Stray Kids', options: ['아트', '뮤직', '댄스', '드라마'], syllables: ['아', '트'] },

  // Stray Kids songs
  { id: 515, emoji: '☀️💕', answer: '초콜릿팩토리', artist: 'Stray Kids', options: ['초콜릿팩토리', '캔디팩토리', '쿠키팩토리', '케이크팩토리'], syllables: ['초', '콜', '릿', '팩', '토', '리'] },
  { id: 516, emoji: '🌙✨', answer: '선샤인', artist: 'Stray Kids', options: ['선샤인', '문라이트', '스타라이트', '스카이라이트'], syllables: ['선', '샤', '인'] },

  // Stray Kids songs
  { id: 517, emoji: '🐺🔥', answer: '울프', artist: 'Stray Kids', options: ['울프', '라이언', '타이거', '베어'], syllables: ['울', '프'] },
  { id: 518, emoji: '🎵💪', answer: '리더', artist: 'Stray Kids', options: ['리더', '팔로워', '멤버', '캡틴'], syllables: ['리', '더'] },

  // Stray Kids songs
  { id: 519, emoji: '🐱💫', answer: '마이페이스', artist: 'Stray Kids', options: ['마이페이스', '유어페이스', '아워페이스', '데어페이스'], syllables: ['마', '이', '페', '이', '스'] },
  { id: 520, emoji: '💃✨', answer: '댄서', artist: 'Stray Kids', options: ['댄서', '싱어', '래퍼', '액터'], syllables: ['댄', '서'] },

  // Stray Kids songs
  { id: 521, emoji: '🎤🔥', answer: '토르나도', artist: 'Stray Kids', options: ['토르나도', '허리케인', '싸이클론', '타이푼'], syllables: ['토', '르', '나', '도'] },
  { id: 522, emoji: '🔥💪', answer: '스피트파이어', artist: 'Stray Kids', options: ['스피트파이어', '슬로우파이어', '와일드파이어', '콜드파이어'], syllables: ['스', '피', '트', '파', '이', '어'] },

  // Stray Kids songs
  { id: 523, emoji: '🐿️💫', answer: '코코', artist: 'Stray Kids', options: ['코코', '모모', '보보', '로로'], syllables: ['코', '코'] },
  { id: 524, emoji: '🎵✨', answer: '지니어스', artist: 'Stray Kids', options: ['지니어스', '탤런트', '프로디지', '마에스트로'], syllables: ['지', '니', '어', '스'] },

  // Stray Kids songs
  { id: 525, emoji: '🐶💕', answer: '비터스위트', artist: 'Stray Kids', options: ['비터스위트', '스위트비터', '스위트스위트', '비터비터'], syllables: ['비', '터', '스', '위', '트'] },
  { id: 526, emoji: '🎤✨', answer: '보컬', artist: 'Stray Kids', options: ['보컬', '랩', '댄스', '프로듀스'], syllables: ['보', '컬'] },

  // Stray Kids songs
  { id: 527, emoji: '🦋💫', answer: '레버너번', artist: 'Stray Kids', options: ['레버너번', '네버번', '에버번', '포에버번'], syllables: ['레', '버', '너', '번'] },
  { id: 528, emoji: '🌸✨', answer: '큐티', artist: 'Stray Kids', options: ['큐티', '쿨리', '핫티', '스위티'], syllables: ['큐', '티'] },

  // TXT songs
  { id: 529, emoji: '🐰💕', answer: '블루아워', artist: 'TXT', options: ['블루아워', '레드아워', '그린아워', '옐로아워'], syllables: ['블', '루', '아', '워'] },
  { id: 530, emoji: '🎵✨', answer: '블루', artist: 'TXT', options: ['블루', '레드', '그린', '옐로'], syllables: ['블', '루'] },

  // TXT songs
  { id: 531, emoji: '🦊🔥', answer: '투바투', artist: 'TXT', options: ['투바투', '원바투', '쓰리바투', '포바투'], syllables: ['투', '바', '투'] },
  { id: 532, emoji: '💃✨', answer: '포인트', artist: 'TXT', options: ['포인트', '라인', '서클', '스퀘어'], syllables: ['포', '인', '트'] },

  // TXT songs
  { id: 533, emoji: '🐻💫', answer: '드라마', artist: 'TXT', options: ['드라마', '코미디', '액션', '호러'], syllables: ['드', '라', '마'] },
  { id: 534, emoji: '🎸✨', answer: '기타', artist: 'TXT', options: ['기타', '피아노', '드럼', '베이스'], syllables: ['기', '타'] },

  // TXT songs
  { id: 535, emoji: '🦁💕', answer: '시즌스', artist: 'TXT', options: ['시즌스', '데이즈', '먼스', '이어스'], syllables: ['시', '즌', '스'] },
  { id: 536, emoji: '🎤✨', answer: '하이노트', artist: 'TXT', options: ['하이노트', '로우노트', '미들노트', '샤프노트'], syllables: ['하', '이', '노', '트'] },

  // Huening Kai (TXT)
  { id: 537, emoji: '🐧💫', answer: '휴닝카이', artist: 'Huening Kai', options: ['휴닝카이', '태현', '범규', '수빈'], syllables: ['휴', '닝', '카', '이'] },
  { id: 538, emoji: '🌈✨', answer: '레인보우', artist: 'Huening Kai', options: ['레인보우', '선셋', '선라이즈', '문라이즈'], syllables: ['레', '인', '보', '우'] },

  // Heeseung (ENHYPEN)
  { id: 539, emoji: '🦌💕', answer: '희승', artist: 'Heeseung', options: ['희승', '제이', '제이크', '성훈'], syllables: ['희', '승'] },
  { id: 540, emoji: '🎵✨', answer: '보이스', artist: 'Heeseung', options: ['보이스', '사운드', '뮤직', '송'], syllables: ['보', '이', '스'] },

  // Jay (ENHYPEN)
  { id: 541, emoji: '🦅🔥', answer: '제이', artist: 'Jay', options: ['제이', '희승', '제이크', '성훈'], syllables: ['제', '이'] },
  { id: 542, emoji: '💪✨', answer: '파워풀', artist: 'Jay', options: ['파워풀', '피스풀', '그레이스풀', '뷰티풀'], syllables: ['파', '워', '풀'] },

  // Jake (ENHYPEN)
  { id: 543, emoji: '🐕💫', answer: '제이크', artist: 'Jake', options: ['제이크', '제이', '희승', '성훈'], syllables: ['제', '이', '크'] },
  { id: 544, emoji: '🌟✨', answer: '스마일', artist: 'Jake', options: ['스마일', '프라운', '래프', '크라이'], syllables: ['스', '마', '일'] },

  // Sunghoon (ENHYPEN)
  { id: 545, emoji: '⛸️💕', answer: '성훈', artist: 'Sunghoon', options: ['성훈', '제이크', '제이', '희승'], syllables: ['성', '훈'] },
  { id: 546, emoji: '❄️✨', answer: '아이스', artist: 'Sunghoon', options: ['아이스', '파이어', '워터', '어스'], syllables: ['아', '이', '스'] },

  // Sunoo (ENHYPEN)
  { id: 547, emoji: '🦊💕', answer: '선우', artist: 'Sunoo', options: ['선우', '정원', '니키', '성훈'], syllables: ['선', '우'] },
  { id: 548, emoji: '☀️✨', answer: '써니', artist: 'Sunoo', options: ['써니', '클라우디', '레이니', '스노위'], syllables: ['써', '니'] },

  // Jungwon (ENHYPEN)
  { id: 549, emoji: '🐱💫', answer: '정원', artist: 'Jungwon', options: ['정원', '선우', '니키', '성훈'], syllables: ['정', '원'] },
  { id: 550, emoji: '👑✨', answer: '캡틴', artist: 'Jungwon', options: ['캡틴', '솔저', '파일럿', '세일러'], syllables: ['캡', '틴'] },

  // Ni-ki (ENHYPEN)
  { id: 551, emoji: '🐆🔥', answer: '니키', artist: 'Ni-ki', options: ['니키', '정원', '선우', '성훈'], syllables: ['니', '키'] },
  { id: 552, emoji: '💃✨', answer: '무브먼트', artist: 'Ni-ki', options: ['무브먼트', '스틸니스', '액션', '포즈'], syllables: ['무', '브', '먼', '트'] },

  // Sakura (LE SSERAFIM)
  { id: 553, emoji: '🌸💕', answer: '사쿠라', artist: 'Sakura', options: ['사쿠라', '카즈하', '채원', '윤진'], syllables: ['사', '쿠', '라'] },
  { id: 554, emoji: '🎵✨', answer: '블로썸', artist: 'Sakura', options: ['블로썸', '리프', '브랜치', '루트'], syllables: ['블', '로', '썸'] },

  // Chaewon (LE SSERAFIM)
  { id: 555, emoji: '🦢💫', answer: '채원', artist: 'Chaewon', options: ['채원', '사쿠라', '윤진', '카즈하'], syllables: ['채', '원'] },
  { id: 556, emoji: '👑✨', answer: '퀸덤', artist: 'Chaewon', options: ['퀸덤', '킹덤', '프린세스덤', '엠파이어'], syllables: ['퀸', '덤'] },

  // Yunjin (LE SSERAFIM)
  { id: 557, emoji: '🎤🔥', answer: '윤진', artist: 'Yunjin', options: ['윤진', '채원', '사쿠라', '카즈하'], syllables: ['윤', '진'] },
  { id: 558, emoji: '🔥✨', answer: '핫', artist: 'Yunjin', options: ['핫', '쿨', '웜', '콜드'], syllables: ['핫'] },

  // Kazuha (LE SSERAFIM)
  { id: 559, emoji: '🩰💕', answer: '카즈하', artist: 'Kazuha', options: ['카즈하', '사쿠라', '채원', '윤진'], syllables: ['카', '즈', '하'] },
  { id: 560, emoji: '💃✨', answer: '발레', artist: 'Kazuha', options: ['발레', '재즈', '힙합', '탭'], syllables: ['발', '레'] },

  // Eunchae (LE SSERAFIM)
  { id: 561, emoji: '🐥💫', answer: '은채', artist: 'Eunchae', options: ['은채', '카즈하', '윤진', '채원'], syllables: ['은', '채'] },
  { id: 562, emoji: '🌟✨', answer: '매니저', artist: 'Eunchae', options: ['매니저', '스타', '아이돌', '셀럽'], syllables: ['매', '니', '저'] },

  // Minji (NewJeans)
  { id: 563, emoji: '🐰💕', answer: '민지', artist: 'Minji', options: ['민지', '하니', '다니엘', '해린'], syllables: ['민', '지'] },
  { id: 564, emoji: '👑✨', answer: '에이스', artist: 'Minji', options: ['에이스', '킹', '퀸', '잭'], syllables: ['에', '이', '스'] },

  // Hanni (NewJeans)
  { id: 565, emoji: '🐱💫', answer: '하니', artist: 'Hanni', options: ['하니', '민지', '다니엘', '해린'], syllables: ['하', '니'] },
  { id: 566, emoji: '🍯✨', answer: '스위트', artist: 'Hanni', options: ['스위트', '비터', '사워', '솔티'], syllables: ['스', '위', '트'] },

  // Danielle (NewJeans)
  { id: 567, emoji: '🦋💕', answer: '다니엘', artist: 'Danielle', options: ['다니엘', '하니', '민지', '해린'], syllables: ['다', '니', '엘'] },
  { id: 568, emoji: '🌈✨', answer: '비비드', artist: 'Danielle', options: ['비비드', '덜', '페이드', '뮤트'], syllables: ['비', '비', '드'] },

  // Haerin (NewJeans)
  { id: 569, emoji: '🐱💫', answer: '해린', artist: 'Haerin', options: ['해린', '다니엘', '하니', '민지'], syllables: ['해', '린'] },
  { id: 570, emoji: '🌙✨', answer: '미스터리', artist: 'Haerin', options: ['미스터리', '오픈', '클리어', '심플'], syllables: ['미', '스', '터', '리'] },

  // Hyein (NewJeans)
  { id: 571, emoji: '🐥💕', answer: '혜인', artist: 'Hyein', options: ['혜인', '해린', '다니엘', '하니'], syllables: ['혜', '인'] },
  { id: 572, emoji: '🌟✨', answer: '영', artist: 'Hyein', options: ['영', '올드', '미들', '시니어'], syllables: ['영'] },

  // Wonyoung (IVE)
  { id: 573, emoji: '👸💕', answer: '원영', artist: 'Wonyoung', options: ['원영', '유진', '가을', '레이'], syllables: ['원', '영'] },
  { id: 574, emoji: '👑✨', answer: '프린세스', artist: 'Wonyoung', options: ['프린세스', '퀸', '킹', '프린스'], syllables: ['프', '린', '세', '스'] },

  // Yujin (IVE)
  { id: 575, emoji: '🦊💫', answer: '유진', artist: 'Yujin', options: ['유진', '원영', '가을', '레이'], syllables: ['유', '진'] },
  { id: 576, emoji: '🔥✨', answer: '에너지', artist: 'Yujin', options: ['에너지', '피스', '캄', '슬립'], syllables: ['에', '너', '지'] },

  // Gaeul (IVE)
  { id: 577, emoji: '🍂💕', answer: '가을', artist: 'Gaeul', options: ['가을', '겨울', '봄', '여름'], syllables: ['가', '을'] },
  { id: 578, emoji: '🎵✨', answer: '시즌', artist: 'Gaeul', options: ['시즌', '데이', '위크', '먼스'], syllables: ['시', '즌'] },

  // Rei (IVE)
  { id: 579, emoji: '🌸💫', answer: '레이', artist: 'Rei', options: ['레이', '리즈', '가을', '원영'], syllables: ['레', '이'] },
  { id: 580, emoji: '✨💕', answer: '샤인', artist: 'Rei', options: ['샤인', '글로우', '스파클', '블링'], syllables: ['샤', '인'] },

  // Leeseo (IVE)
  { id: 581, emoji: '🐰💕', answer: '리즈', artist: 'Leeseo', options: ['리즈', '레이', '가을', '유진'], syllables: ['리', '즈'] },
  { id: 582, emoji: '🌟✨', answer: '프레쉬', artist: 'Leeseo', options: ['프레쉬', '스테일', '올드', '앤틱'], syllables: ['프', '레', '쉬'] },

  // Liz (IVE)
  { id: 583, emoji: '🐱💫', answer: '이서', artist: 'Liz', options: ['이서', '리즈', '레이', '가을'], syllables: ['이', '서'] },
  { id: 584, emoji: '🎤✨', answer: '하이', artist: 'Liz', options: ['하이', '로우', '미드', '노'], syllables: ['하', '이'] },

  // Karina (aespa)
  { id: 585, emoji: '🦊💕', answer: '카리나', artist: 'Karina', options: ['카리나', '윈터', '지젤', '닝닝'], syllables: ['카', '리', '나'] },
  { id: 586, emoji: '👑✨', answer: '센터', artist: 'Karina', options: ['센터', '사이드', '백', '프론트'], syllables: ['센', '터'] },

  // Winter (aespa)
  { id: 587, emoji: '❄️💫', answer: '윈터', artist: 'Winter', options: ['윈터', '카리나', '지젤', '닝닝'], syllables: ['윈', '터'] },
  { id: 588, emoji: '🎤✨', answer: '메인보컬', artist: 'Winter', options: ['메인보컬', '서브보컬', '랩', '댄스'], syllables: ['메', '인', '보', '컬'] },

  // Giselle (aespa)
  { id: 589, emoji: '🦋💕', answer: '지젤', artist: 'Giselle', options: ['지젤', '윈터', '카리나', '닝닝'], syllables: ['지', '젤'] },
  { id: 590, emoji: '🎤✨', answer: '래퍼', artist: 'Giselle', options: ['래퍼', '싱어', '댄서', '프로듀서'], syllables: ['래', '퍼'] },

  // Ningning (aespa)
  { id: 591, emoji: '🐰💫', answer: '닝닝', artist: 'Ningning', options: ['닝닝', '지젤', '윈터', '카리나'], syllables: ['닝', '닝'] },
  { id: 592, emoji: '🎵✨', answer: '하이노트', artist: 'Ningning', options: ['하이노트', '로우노트', '플랫노트', '샤프노트'], syllables: ['하', '이', '노', '트'] },

  // Sullyoon (NMIXX)
  { id: 593, emoji: '🦢💕', answer: '설윤', artist: 'Sullyoon', options: ['설윤', '해원', '지니', '릴리'], syllables: ['설', '윤'] },
  { id: 594, emoji: '✨💫', answer: '비주얼', artist: 'Sullyoon', options: ['비주얼', '보컬', '댄스', '랩'], syllables: ['비', '주', '얼'] },

  // Haewon (NMIXX)
  { id: 595, emoji: '🌸💫', answer: '해원', artist: 'Haewon', options: ['해원', '설윤', '지니', '릴리'], syllables: ['해', '원'] },
  { id: 596, emoji: '🎤✨', answer: '파워보컬', artist: 'Haewon', options: ['파워보컬', '소프트보컬', '하모니', '코러스'], syllables: ['파', '워', '보', '컬'] },

  // Jinni (NMIXX)
  { id: 597, emoji: '🔥💕', answer: '지니', artist: 'Jinni', options: ['지니', '해원', '설윤', '릴리'], syllables: ['지', '니'] },
  { id: 598, emoji: '💃✨', answer: '퍼포머', artist: 'Jinni', options: ['퍼포머', '싱어', '래퍼', '프로듀서'], syllables: ['퍼', '포', '머'] },

  // Lily (NMIXX)
  { id: 599, emoji: '🌺💫', answer: '릴리', artist: 'Lily', options: ['릴리', '지니', '해원', '설윤'], syllables: ['릴', '리'] },
  { id: 600, emoji: '🎵✨', answer: '올라운더', artist: 'Lily', options: ['올라운더', '스페셜리스트', '제너럴리스트', '프로'], syllables: ['올', '라', '운', '더'] },

  // ILLIT (아일릿)
  { id: 601, emoji: '🧲💕', answer: '마그네틱', artist: 'ILLIT', options: ['마그네틱', '일렉트릭', '매직', '로맨틱'], syllables: ['마', '그', '네', '틱'] },
  { id: 602, emoji: '🌍✨', answer: '마이월드', artist: 'ILLIT', options: ['마이월드', '유어월드', '아워월드', '뉴월드'], syllables: ['마', '이', '월', '드'] },
  { id: 603, emoji: '⏰💫', answer: '틱택', artist: 'ILLIT', options: ['틱택', '틱톡', '틱틱', '탁탁'], syllables: ['틱', '택'] },
  { id: 604, emoji: '🍀👧', answer: '럭키걸신드롬', artist: 'ILLIT', options: ['럭키걸신드롬', '해피걸신드롬', '러블리걸신드롬', '큐티걸신드롬'], syllables: ['럭', '키', '걸', '신', '드', '롬'] },
  { id: 605, emoji: '👧👧👧', answer: '아일릿', artist: 'ILLIT', options: ['아일릿', '아이돌', '아이유', '아이브'], syllables: ['아', '일', '릿'] },

  // ZEROBASEONE (제로베이스원)
  { id: 606, emoji: '0️⃣1️⃣', answer: '제로베이스원', artist: 'ZEROBASEONE', options: ['제로베이스원', '원베이스제로', '베이스원제로', '제로원베이스'], syllables: ['제', '로', '베', '이', '스', '원'] },
  { id: 607, emoji: '🦋💫', answer: '인블룸', artist: 'ZEROBASEONE', options: ['인블룸', '인블라썸', '인플라워', '인가든'], syllables: ['인', '블', '룸'] },
  { id: 608, emoji: '🔥💪', answer: '크러쉬', artist: 'ZEROBASEONE', options: ['크러쉬', '스매쉬', '브레이크', '히트'], syllables: ['크', '러', '쉬'] },
  { id: 609, emoji: '🌟✨', answer: '굿소파', artist: 'ZEROBASEONE', options: ['굿소파', '굿베드', '굿체어', '굿테이블'], syllables: ['굿', '소', '파'] },
  { id: 610, emoji: '💕🎵', answer: '킬더로미오', artist: 'ZEROBASEONE', options: ['킬더로미오', '킬더줄리엣', '세이브로미오', '러브로미오'], syllables: ['킬', '더', '로', '미', '오'] },

  // RIIZE (라이즈)
  { id: 611, emoji: '📈✨', answer: '라이즈', artist: 'RIIZE', options: ['라이즈', '폴', '스테이', '점프'], syllables: ['라', '이', '즈'] },
  { id: 612, emoji: '🎯💕', answer: '겟어기타', artist: 'RIIZE', options: ['겟어기타', '겟어피아노', '겟어드럼', '겟어베이스'], syllables: ['겟', '어', '기', '타'] },
  { id: 613, emoji: '😵💫', answer: '붐붐베이스', artist: 'RIIZE', options: ['붐붐베이스', '붐붐드럼', '붐붐기타', '붐붐피아노'], syllables: ['붐', '붐', '베', '이', '스'] },
  { id: 614, emoji: '🧲❤️', answer: '러브119', artist: 'RIIZE', options: ['러브119', '러브911', '러브112', '러브120'], syllables: ['러', '브', '일', '일', '구'] },
  { id: 615, emoji: '🎉🔥', answer: '토크샤디', artist: 'RIIZE', options: ['토크샤디', '워크샤디', '댄스샤디', '싱샤디'], syllables: ['토', '크', '샤', '디'] },

  // BOYNEXTDOOR (보이넥스트도어)
  { id: 616, emoji: '🚪👦', answer: '보이넥스트도어', artist: 'BOYNEXTDOOR', options: ['보이넥스트도어', '걸넥스트도어', '맨넥스트도어', '키드넥스트도어'], syllables: ['보', '이', '넥', '스', '트', '도', '어'] },
  { id: 617, emoji: '🏃💨', answer: '원앤온리', artist: 'BOYNEXTDOOR', options: ['원앤온리', '투앤온리', '올앤온리', '썸앤온리'], syllables: ['원', '앤', '온', '리'] },
  { id: 618, emoji: '😭💔', answer: '어스메', artist: 'BOYNEXTDOOR', options: ['어스메', '어스유', '어스뎀', '어스올'], syllables: ['어', '스', '메'] },
  { id: 619, emoji: '🎵💃', answer: '붐밤붐', artist: 'BOYNEXTDOOR', options: ['붐밤붐', '쿵쾅쿵', '탕탕탕', '빵빵빵'], syllables: ['붐', '밤', '붐'] },
  { id: 620, emoji: '🌧️😢', answer: '센티멘털', artist: 'BOYNEXTDOOR', options: ['센티멘털', '이모셔널', '드라마틱', '로맨틱'], syllables: ['센', '티', '멘', '털'] },
];

// 셔플 함수
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 레벨별 문제 가져오기
export function getKpopQuestions(count: number = 10): KpopQuizItem[] {
  return shuffleArray(kpopQuizData).slice(0, count);
}
