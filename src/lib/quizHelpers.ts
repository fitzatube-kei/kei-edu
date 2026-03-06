/**
 * Quiz Helper Functions
 * Centralized quiz question and option generation with multilingual support
 */

import { MultilingualText } from '@/types';
import { consonantNameTranslations } from '@/data/hangul/consonants';
import { vowelNameTranslations } from '@/data/hangul/vowels';
import { allHistoryTerms, getHistoryTerm } from '@/data/history/translations';

// ============================================
// Types
// ============================================

export type QuestionType =
  // Sentence questions (Intermediate/Advanced)
  | 'sentence-meaning'    // "저는 학생입니다"의 뜻은? → I am a student
  | 'fill-blank'          // 빈칸 채우기
  // Consonant questions
  | 'consonant-name'      // "ㄱ"의 발음 이름은? → giyeok
  | 'find-consonant'      // "나무"의 첫 자음은? → ㄴ
  | 'consonant-roman'     // "ㅅ"의 로마자는? → s
  | 'silent-consonant'    // "ㅇ"이 앞에 오면? → silent
  | 'not-double'          // 쌍자음이 아닌 것? → ㅎ
  | 'double-in-word'      // "꽃"의 자음은? → ㄲ
  // Vowel questions
  | 'vowel-pronunciation' // "ㅏ"의 발음은? → a
  | 'find-vowel'          // "여름"의 모음은? → ㅕ
  | 'vowel-roman'         // "ㅜ"의 로마자는? → u
  | 'not-complex-vowel'   // 복합 모음이 아닌 것? → ㅏ
  | 'compound-vowel'      // "ㅗ"+"ㅏ"=? → ㅘ
  | 'vowel-common'        // "야"와 "여"의 공통점? → y sound
  | 'word-with-vowel'     // "ㅡ"가 포함된 단어? → 으뜸
  // Syllable questions
  | 'combine-syllable'    // "ㄱ"+"ㅏ"=? → 가
  | 'syllable-components' // "마"의 구성? → ㅁ+ㅏ
  | 'syllable-roman'      // "하"의 로마자? → ha
  // Batchim questions
  | 'find-batchim'        // "산"의 받침? → ㄴ
  | 'has-batchim'         // 받침이 있는 글자? → 감
  | 'syllable-structure'  // "집"의 구성? → ㅈ+ㅣ+ㅂ
  | 'batchim-ng'          // "ㅇ" 받침 글자? → 강
  // Word questions
  | 'word-meaning'        // "사랑"의 뜻은? → love
  | 'word-roman'          // "가족"의 로마자? → gajok
  | 'meaning-to-korean'   // "friend"는 한국어로? → 친구
  | 'sentence-translate'  // "Where are you from?" → 어디에서 왔어요? (질문만 표시)
  | 'number-meaning'      // "하나"는? → one
  | 'when-to-use'         // "안녕하세요" 언제 사용? → greeting
  | 'family-term'         // 남자가 손위 여자 형제? → 누나
  // History questions
  | 'history-founder'     // 고조선 건국자? → 단군왕검
  | 'history-first'       // 가장 먼저 건국된 나라? → 신라
  | 'history-unifier'     // 삼국 통일한 나라? → 신라
  | 'history-battle'      // 살수대첩 장군? → 을지문덕
  | 'history-king'        // 불교 전래시 왕? → 소수림왕
  | 'history-person'      // 황산벌 관련 인물? → 계백
  | 'history-ideology'    // 고조선 건국 이념? → 홍익인간
  | 'history-invention'   // 금속활자 발명국? → 고려
  | 'history-event-year'  // 조선 건국 연도? → 1392
  | 'history-achievement' // 세종대왕 업적? → 훈민정음
  | 'history-war';        // 임진왜란 영웅? → 이순신

export interface WordData {
  korean: string;
  romanization: string;
  translations: MultilingualText;
}

export interface QuestionData {
  char?: string;           // Target character (ㄱ, ㅏ, etc.)
  char2?: string;          // Second character for compound questions
  word?: WordData;         // Word with translations
  syllable?: string;       // Target syllable (가, 나, etc.)
  consonant?: string;      // Consonant in syllable
  vowel?: string;          // Vowel in syllable
  batchim?: string;        // Final consonant
  correctAnswer: string;   // Correct answer
  options: string[];       // All options including correct answer
}

// ============================================
// Question Templates (Multilingual)
// ============================================

const questionTemplates: Record<QuestionType, MultilingualText> = {
  // Sentence templates (Intermediate/Advanced)
  'sentence-meaning': {
    en: 'What does {word} mean?',
    ja: '{word}はどういう意味ですか？',
    es: '¿Qué significa {word}?',
    th: '{word} หมายความว่าอะไร?',
    vi: '{word} có nghĩa là gì?',
    zh: '{word}是什么意思？',
    'zh-TW': '{word}是什麼意思？',
  },
  'fill-blank': {
    en: 'Fill in the blank: {syllable}',
    ja: '空欄を埋めてください: {syllable}',
    es: 'Completa el espacio: {syllable}',
    th: 'เติมคำในช่องว่าง: {syllable}',
    vi: 'Điền vào chỗ trống: {syllable}',
    zh: '填空: {syllable}',
    'zh-TW': '填空：{syllable}',
  },
  // Consonant templates
  'consonant-name': {
    en: 'What is the pronunciation name of "{char}"?',
    ja: '「{char}」の発音名は何ですか？',
    es: '¿Cuál es el nombre de pronunciación de "{char}"?',
    th: 'ชื่อการออกเสียงของ "{char}" คืออะไร?',
    vi: 'Tên phát âm của "{char}" là gì?',
    zh: '"{char}"的发音名称是什么？',
    'zh-TW': '「{char}」的發音名稱是什麼？',
  },
  'find-consonant': {
    en: 'What is the first consonant in {word}?',
    ja: '{word}の最初の子音は何ですか？',
    es: '¿Cuál es la primera consonante en {word}?',
    th: 'พยัญชนะตัวแรกใน {word} คืออะไร?',
    vi: 'Phụ âm đầu tiên trong {word} là gì?',
    zh: '{word}的第一个辅音是什么？',
    'zh-TW': '{word}的第一個子音是什麼？',
  },
  'consonant-roman': {
    en: 'What is the romanization of "{char}"?',
    ja: '「{char}」のローマ字表記は？',
    es: '¿Cuál es la romanización de "{char}"?',
    th: 'การเขียนแบบโรมันของ "{char}" คืออะไร?',
    vi: 'La tinh hóa của "{char}" là gì?',
    zh: '"{char}"的罗马字表记是什么？',
    'zh-TW': '「{char}」的羅馬字表記是什麼？',
  },
  'silent-consonant': {
    en: 'How is "{char}" pronounced when it comes at the beginning?',
    ja: '「{char}」が先頭に来るときの発音は？',
    es: '¿Cómo se pronuncia "{char}" cuando viene al principio?',
    th: '"{char}" ออกเสียงอย่างไรเมื่ออยู่ต้นคำ?',
    vi: '"{char}" được phát âm như thế nào khi ở đầu?',
    zh: '"{char}"在开头时怎么发音？',
    'zh-TW': '「{char}」在開頭時怎麼發音？',
  },
  'not-double': {
    en: 'Which of the following is NOT a double consonant?',
    ja: '次のうち濃音（二重子音）ではないものは？',
    es: '¿Cuál de los siguientes NO es una consonante doble?',
    th: 'ข้อใดต่อไปนี้ไม่ใช่พยัญชนะคู่?',
    vi: 'Đâu KHÔNG phải là phụ âm kép?',
    zh: '以下哪个不是双辅音？',
    'zh-TW': '以下哪個不是雙子音？',
  },
  'double-in-word': {
    en: 'What consonant is used in {word}?',
    ja: '{word}で使われている子音は？',
    es: '¿Qué consonante se usa en {word}?',
    th: 'พยัญชนะใดที่ใช้ใน {word}?',
    vi: 'Phụ âm nào được dùng trong {word}?',
    zh: '{word}中使用的辅音是什么？',
    'zh-TW': '{word}中使用的子音是什麼？',
  },

  // Vowel templates
  'vowel-pronunciation': {
    en: 'What is the pronunciation of the vowel "{char}"?',
    ja: '母音「{char}」の発音は何ですか？',
    es: '¿Cuál es la pronunciación de la vocal "{char}"?',
    th: 'การออกเสียงของสระ "{char}" คืออะไร?',
    vi: 'Phát âm của nguyên âm "{char}" là gì?',
    zh: '元音"{char}"的发音是什么？',
    'zh-TW': '母音「{char}」的發音是什麼？',
  },
  'find-vowel': {
    en: 'What vowel is used in {word}?',
    ja: '{word}で使われている母音は何ですか？',
    es: '¿Qué vocal se usa en {word}?',
    th: 'สระใดที่ใช้ใน {word}?',
    vi: 'Nguyên âm nào được dùng trong {word}?',
    zh: '{word}中使用的元音是什么？',
    'zh-TW': '{word}中使用的母音是什麼？',
  },
  'vowel-roman': {
    en: 'What is the romanization of the vowel "{char}"?',
    ja: '母音「{char}」のローマ字表記は？',
    es: '¿Cuál es la romanización de la vocal "{char}"?',
    th: 'การเขียนแบบโรมันของสระ "{char}" คืออะไร?',
    vi: 'La tinh hóa của nguyên âm "{char}" là gì?',
    zh: '元音"{char}"的罗马字表记是什么？',
    'zh-TW': '母音「{char}」的羅馬字表記是什麼？',
  },
  'not-complex-vowel': {
    en: 'Which of the following is NOT a complex vowel?',
    ja: '次のうち複合母音ではないものは？',
    es: '¿Cuál de los siguientes NO es una vocal compuesta?',
    th: 'ข้อใดต่อไปนี้ไม่ใช่สระประสม?',
    vi: 'Đâu KHÔNG phải là nguyên âm kép?',
    zh: '以下哪个不是复合元音？',
    'zh-TW': '以下哪個不是複合母音？',
  },
  'compound-vowel': {
    en: 'What is the compound vowel of ({char}) + ({char2})?',
    ja: '({char}) + ({char2}) の複合母音は？',
    es: '¿Cuál es la vocal compuesta de ({char}) + ({char2})?',
    th: 'สระประสมของ ({char}) + ({char2}) คืออะไร?',
    vi: 'Nguyên âm kép của ({char}) + ({char2}) là gì?',
    zh: '({char}) + ({char2}) 的复合元音是什么？',
    'zh-TW': '({char}) + ({char2}) 的複合母音是什麼？',
  },
  'vowel-common': {
    en: 'What do "{char}" and "{char2}" have in common?',
    ja: '「{char}」と「{char2}」の共通点は？',
    es: '¿Qué tienen en común "{char}" y "{char2}"?',
    th: '"{char}" และ "{char2}" มีอะไรเหมือนกัน?',
    vi: '"{char}" và "{char2}" có điểm chung gì?',
    zh: '"{char}"和"{char2}"有什么共同点？',
    'zh-TW': '「{char}」和「{char2}」有什麼共同點？',
  },
  'word-with-vowel': {
    en: 'Which word contains the vowel "{char}"?',
    ja: '母音「{char}」が含まれている単語は？',
    es: '¿Qué palabra contiene la vocal "{char}"?',
    th: 'คำใดมีสระ "{char}"?',
    vi: 'Từ nào chứa nguyên âm "{char}"?',
    zh: '哪个词包含元音"{char}"？',
    'zh-TW': '哪個詞包含母音「{char}」？',
  },

  // Syllable templates
  'combine-syllable': {
    en: 'What syllable is formed by combining ({char}) + ({char2})?',
    ja: '({char}) + ({char2}) を合わせると？',
    es: '¿Qué sílaba se forma al combinar ({char}) + ({char2})?',
    th: 'เมื่อรวม ({char}) + ({char2}) จะได้พยางค์อะไร?',
    vi: 'Âm tiết nào được tạo từ ({char}) + ({char2})?',
    zh: '({char}) + ({char2}) 组合成什么音节？',
    'zh-TW': '({char}) + ({char2}) 組合成什麼音節？',
  },
  'syllable-components': {
    en: 'What are the components of "{syllable}"?',
    ja: '「{syllable}」を構成する要素は？',
    es: '¿Cuáles son los componentes de "{syllable}"?',
    th: 'องค์ประกอบของ "{syllable}" คืออะไร?',
    vi: 'Các thành phần của "{syllable}" là gì?',
    zh: '"{syllable}"的组成部分是什么？',
    'zh-TW': '「{syllable}」的組成部分是什麼？',
  },
  'syllable-roman': {
    en: 'What is the romanization of "{syllable}"?',
    ja: '「{syllable}」のローマ字表記は？',
    es: '¿Cuál es la romanización de "{syllable}"?',
    th: 'การเขียนแบบโรมันของ "{syllable}" คืออะไร?',
    vi: 'La tinh hóa của "{syllable}" là gì?',
    zh: '"{syllable}"的罗马字表记是什么？',
    'zh-TW': '「{syllable}」的羅馬字表記是什麼？',
  },

  // Batchim templates
  'find-batchim': {
    en: 'What is the final consonant (batchim) in "{syllable}"?',
    ja: '「{syllable}」の받침（終声）は何ですか？',
    es: '¿Cuál es la consonante final (batchim) en "{syllable}"?',
    th: 'ตัวสะกด (받침) ใน "{syllable}" คืออะไร?',
    vi: 'Phụ âm cuối (받침) trong "{syllable}" là gì?',
    zh: '"{syllable}"的收音(받침)是什么？',
    'zh-TW': '「{syllable}」的收音（받침）是什麼？',
  },
  'has-batchim': {
    en: 'Which syllable has a final consonant (batchim)?',
    ja: '받침（終声）がある音節は？',
    es: '¿Qué sílaba tiene una consonante final (batchim)?',
    th: 'พยางค์ใดมีตัวสะกด (받침)?',
    vi: 'Âm tiết nào có phụ âm cuối (받침)?',
    zh: '哪个音节有收音(받침)？',
    'zh-TW': '哪個音節有收音（받침）？',
  },
  'syllable-structure': {
    en: 'What is the structure of "{syllable}"?',
    ja: '「{syllable}」の構造は？',
    es: '¿Cuál es la estructura de "{syllable}"?',
    th: 'โครงสร้างของ "{syllable}" คืออะไร?',
    vi: 'Cấu trúc của "{syllable}" là gì?',
    zh: '"{syllable}"的结构是什么？',
    'zh-TW': '「{syllable}」的結構是什麼？',
  },
  'batchim-ng': {
    en: 'Which syllable uses "ㅇ" as a final consonant (ng sound)?',
    ja: '「ㅇ」が받침として使われている音節は？',
    es: '¿Qué sílaba usa "ㅇ" como consonante final (sonido ng)?',
    th: 'พยางค์ใดใช้ "ㅇ" เป็นตัวสะกด (เสียง ng)?',
    vi: 'Âm tiết nào dùng "ㅇ" làm phụ âm cuối (âm ng)?',
    zh: '哪个音节用"ㅇ"作为收音（ng音）？',
    'zh-TW': '哪個音節用「ㅇ」作為收音（ng音）？',
  },

  // Word question templates
  'word-meaning': {
    en: 'What does "{word}" mean?',
    ja: '「{word}」の意味は？',
    es: '¿Qué significa "{word}"?',
    th: '"{word}" แปลว่าอะไร?',
    vi: '"{word}" có nghĩa là gì?',
    zh: '"{word}"是什么意思？',
    'zh-TW': '「{word}」是什麼意思？',
  },
  'word-roman': {
    en: 'What is the romanization of "{word}"?',
    ja: '「{word}」のローマ字表記は？',
    es: '¿Cuál es la romanización de "{word}"?',
    th: 'การเขียนแบบโรมันของ "{word}" คืออะไร?',
    vi: 'La tinh hóa của "{word}" là gì?',
    zh: '"{word}"的罗马字表记是什么？',
    'zh-TW': '「{word}」的羅馬字表記是什麼？',
  },
  'meaning-to-korean': {
    en: 'What is "{meaning}" in Korean?',
    ja: '「{meaning}」は韓国語で何ですか？',
    es: '¿Cómo se dice "{meaning}" en coreano?',
    th: '"{meaning}" ในภาษาเกาหลีคืออะไร?',
    vi: '"{meaning}" trong tiếng Hàn là gì?',
    zh: '"{meaning}"用韩语怎么说？',
    'zh-TW': '「{meaning}」用韓語怎麼說？',
  },
  'sentence-translate': {
    en: '{meaning}',
    ja: '{meaning}',
    es: '{meaning}',
    th: '{meaning}',
    vi: '{meaning}',
    zh: '{meaning}',
    'zh-TW': '{meaning}',
  },
  'number-meaning': {
    en: 'What does "{word}" mean?',
    ja: '「{word}」は何を意味しますか？',
    es: '¿Qué significa "{word}"?',
    th: '"{word}" หมายถึงอะไร?',
    vi: '"{word}" nghĩa là gì?',
    zh: '"{word}"是什么意思？',
    'zh-TW': '「{word}」是什麼意思？',
  },
  'when-to-use': {
    en: 'When do you use "{word}"?',
    ja: '「{word}」はいつ使いますか？',
    es: '¿Cuándo se usa "{word}"?',
    th: 'ใช้ "{word}" เมื่อไหร่?',
    vi: 'Khi nào dùng "{word}"?',
    zh: '什么时候使用"{word}"？',
    'zh-TW': '什麼時候使用「{word}」？',
  },
  'family-term': {
    en: 'What does a {gender} call their older {sibling}?',
    ja: '{gender}が年上の{sibling}を何と呼びますか？',
    es: '¿Cómo llama un {gender} a su {sibling} mayor?',
    th: '{gender}เรียก{sibling}ที่แก่กว่าว่าอะไร?',
    vi: '{gender} gọi {sibling} lớn hơn là gì?',
    zh: '{gender}叫年长的{sibling}什么？',
    'zh-TW': '{gender}叫年長的{sibling}什麼？',
  },

  // History question templates
  'history-founder': {
    en: 'Who founded {kingdom}?',
    ja: '{kingdom}を建国したのは誰ですか？',
    es: '¿Quién fundó {kingdom}?',
    th: 'ใครก่อตั้ง{kingdom}?',
    vi: 'Ai đã thành lập {kingdom}?',
    zh: '谁建立了{kingdom}？',
    'zh-TW': '誰建立了{kingdom}？',
  },
  'history-first': {
    en: 'Which of the Three Kingdoms was founded first?',
    ja: '三国の中で最初に建国されたのは？',
    es: '¿Cuál de los Tres Reinos se fundó primero?',
    th: 'อาณาจักรใดในสามอาณาจักรก่อตั้งก่อน?',
    vi: 'Trong Ba Vương Quốc, nước nào được thành lập đầu tiên?',
    zh: '三国中哪个最先建国？',
    'zh-TW': '三國中哪個最先建國？',
  },
  'history-unifier': {
    en: 'Which kingdom unified the Three Kingdoms?',
    ja: '三国を統一した国は？',
    es: '¿Qué reino unificó los Tres Reinos?',
    th: 'อาณาจักรใดรวมสามอาณาจักร?',
    vi: 'Vương quốc nào thống nhất Ba Vương Quốc?',
    zh: '哪个王国统一了三国？',
    'zh-TW': '哪個王國統一了三國？',
  },
  'history-battle': {
    en: 'Which general led the victory at {battle}?',
    ja: '{battle}を勝利に導いた将軍は？',
    es: '¿Qué general lideró la victoria en {battle}?',
    th: 'นายพลคนใดนำชัยชนะใน{battle}?',
    vi: 'Tướng nào đã lãnh đạo chiến thắng tại {battle}?',
    zh: '哪位将军带领了{battle}的胜利？',
    'zh-TW': '哪位將軍帶領了{battle}的勝利？',
  },
  'history-king': {
    en: 'Who was the king when {event} happened?',
    ja: '{event}の時の王は誰でしたか？',
    es: '¿Quién era el rey cuando ocurrió {event}?',
    th: 'ใครเป็นกษัตริย์เมื่อ{event}?',
    vi: 'Ai là vua khi {event}?',
    zh: '{event}时的国王是谁？',
    'zh-TW': '{event}時的國王是誰？',
  },
  'history-person': {
    en: 'Who is associated with {event}?',
    ja: '{event}に関連する人物は？',
    es: '¿Quién está asociado con {event}?',
    th: 'ใครเกี่ยวข้องกับ{event}?',
    vi: 'Ai liên quan đến {event}?',
    zh: '与{event}相关的人物是谁？',
    'zh-TW': '與{event}相關的人物是誰？',
  },
  'history-ideology': {
    en: 'What was the founding ideology of {kingdom}?',
    ja: '{kingdom}の建国理念は何ですか？',
    es: '¿Cuál fue la ideología fundacional de {kingdom}?',
    th: 'อุดมการณ์ก่อตั้งของ{kingdom}คืออะไร?',
    vi: 'Tư tưởng lập quốc của {kingdom} là gì?',
    zh: '{kingdom}的建国理念是什么？',
    'zh-TW': '{kingdom}的建國理念是什麼？',
  },
  'history-invention': {
    en: 'Which dynasty invented {invention}?',
    ja: '{invention}を発明した王朝は？',
    es: '¿Qué dinastía inventó {invention}?',
    th: 'ราชวงศ์ใดประดิษฐ์{invention}?',
    vi: 'Triều đại nào phát minh {invention}?',
    zh: '哪个朝代发明了{invention}？',
    'zh-TW': '哪個朝代發明了{invention}？',
  },
  'history-event-year': {
    en: 'In what year was {kingdom} founded?',
    ja: '{kingdom}が建国されたのは何年ですか？',
    es: '¿En qué año se fundó {kingdom}?',
    th: '{kingdom}ก่อตั้งในปีใด?',
    vi: '{kingdom} được thành lập vào năm nào?',
    zh: '{kingdom}是哪年建立的？',
    'zh-TW': '{kingdom}是哪年建立的？',
  },
  'history-achievement': {
    en: 'What is the achievement of {person}?',
    ja: '{person}の業績は何ですか？',
    es: '¿Cuál es el logro de {person}?',
    th: 'ผลงานของ{person}คืออะไร?',
    vi: 'Thành tựu của {person} là gì?',
    zh: '{person}的功绩是什么？',
    'zh-TW': '{person}的功績是什麼？',
  },
  'history-war': {
    en: 'Who was the hero of {war}?',
    ja: '{war}の英雄は誰ですか？',
    es: '¿Quién fue el héroe de {war}?',
    th: 'ใครเป็นวีรบุรุษของ{war}?',
    vi: 'Ai là anh hùng của {war}?',
    zh: '{war}的英雄是谁？',
    'zh-TW': '{war}的英雄是誰？',
  },
};

// ============================================
// Common answer translations
// ============================================

const commonAnswerTranslations: Record<string, MultilingualText> = {
  'silent': {
    en: 'Silent (no sound)',
    ja: '無音（音なし）',
    es: 'Silencioso (sin sonido)',
    th: 'เงียบ (ไม่มีเสียง)',
    vi: 'Im lặng (không có âm)',
    zh: '静音（无声）',
    'zh-TW': '靜音（無聲）',
  },
  'none': {
    en: 'None',
    ja: 'なし',
    es: 'Ninguno',
    th: 'ไม่มี',
    vi: 'Không có',
    zh: '没有',
    'zh-TW': '沒有',
  },
  'both-basic': {
    en: 'Both are basic vowels',
    ja: '両方とも基本母音',
    es: 'Ambas son vocales básicas',
    th: 'ทั้งคู่เป็นสระพื้นฐาน',
    vi: 'Cả hai đều là nguyên âm cơ bản',
    zh: '都是基本元音',
    'zh-TW': '都是基本母音',
  },
  'both-i-combined': {
    en: 'Both have "ㅣ" combined',
    ja: '両方とも「ㅣ」が結合',
    es: 'Ambas tienen "ㅣ" combinada',
    th: 'ทั้งคู่มี "ㅣ" รวมอยู่',
    vi: 'Cả hai đều có "ㅣ" kết hợp',
    zh: '都有"ㅣ"结合',
    'zh-TW': '都有「ㅣ」結合',
  },
  'both-y-sound': {
    en: 'Both have "y" sound',
    ja: '両方とも「y」の音がある',
    es: 'Ambas tienen sonido "y"',
    th: 'ทั้งคู่มีเสียง "y"',
    vi: 'Cả hai đều có âm "y"',
    zh: '都有"y"音',
    'zh-TW': '都有「y」音',
  },
  'both-complex': {
    en: 'Both are complex vowels',
    ja: '両方とも複合母音',
    es: 'Ambas son vocales compuestas',
    th: 'ทั้งคู่เป็นสระประสม',
    vi: 'Cả hai đều là nguyên âm kép',
    zh: '都是复合元音',
    'zh-TW': '都是複合母音',
  },
  // Word meaning translations
  'love': { en: 'Love', ja: '愛', es: 'Amor', th: 'ความรัก', vi: 'Tình yêu', zh: '爱', 'zh-TW': '愛' },
  'family': { en: 'Family', ja: '家族', es: 'Familia', th: 'ครอบครัว', vi: 'Gia đình', zh: '家庭', 'zh-TW': '家庭' },
  'friend': { en: 'Friend', ja: '友達', es: 'Amigo', th: 'เพื่อน', vi: 'Bạn bè', zh: '朋友', 'zh-TW': '朋友' },
  'school': { en: 'School', ja: '学校', es: 'Escuela', th: 'โรงเรียน', vi: 'Trường học', zh: '学校', 'zh-TW': '學校' },
  'book': { en: 'Book', ja: '本', es: 'Libro', th: 'หนังสือ', vi: 'Sách', zh: '书', 'zh-TW': '書' },
  'water': { en: 'Water', ja: '水', es: 'Agua', th: 'น้ำ', vi: 'Nước', zh: '水', 'zh-TW': '水' },
  'sky': { en: 'Sky', ja: '空', es: 'Cielo', th: 'ท้องฟ้า', vi: 'Bầu trời', zh: '天空', 'zh-TW': '天空' },
  'flower': { en: 'Flower', ja: '花', es: 'Flor', th: 'ดอกไม้', vi: 'Hoa', zh: '花', 'zh-TW': '花' },
  'house': { en: 'House', ja: '家', es: 'Casa', th: 'บ้าน', vi: 'Nhà', zh: '房子', 'zh-TW': '房子' },
  // Family terms
  'father': { en: 'Father', ja: '父', es: 'Padre', th: 'พ่อ', vi: 'Bố', zh: '父亲', 'zh-TW': '父親' },
  'mother': { en: 'Mother', ja: '母', es: 'Madre', th: 'แม่', vi: 'Mẹ', zh: '母亲', 'zh-TW': '母親' },
  'grandfather': { en: 'Grandfather', ja: '祖父', es: 'Abuelo', th: 'ปู่', vi: 'Ông', zh: '爷爷', 'zh-TW': '爺爺' },
  'grandmother': { en: 'Grandmother', ja: '祖母', es: 'Abuela', th: 'ย่า', vi: 'Bà', zh: '奶奶', 'zh-TW': '奶奶' },
  // Numbers
  'one': { en: 'One', ja: '一', es: 'Uno', th: 'หนึ่ง', vi: 'Một', zh: '一', 'zh-TW': '一' },
  'two': { en: 'Two', ja: '二', es: 'Dos', th: 'สอง', vi: 'Hai', zh: '二', 'zh-TW': '二' },
  'three': { en: 'Three', ja: '三', es: 'Tres', th: 'สาม', vi: 'Ba', zh: '三', 'zh-TW': '三' },
  'four': { en: 'Four', ja: '四', es: 'Cuatro', th: 'สี่', vi: 'Bốn', zh: '四', 'zh-TW': '四' },
  'five': { en: 'Five', ja: '五', es: 'Cinco', th: 'ห้า', vi: 'Năm', zh: '五', 'zh-TW': '五' },
  // Greetings
  'hello': { en: 'Hello', ja: 'こんにちは', es: 'Hola', th: 'สวัสดี', vi: 'Xin chào', zh: '你好', 'zh-TW': '你好' },
  'thank you': { en: 'Thank you', ja: 'ありがとう', es: 'Gracias', th: 'ขอบคุณ', vi: 'Cảm ơn', zh: '谢谢', 'zh-TW': '謝謝' },
  'sorry': { en: 'Sorry', ja: 'ごめんなさい', es: 'Lo siento', th: 'ขอโทษ', vi: 'Xin lỗi', zh: '对不起', 'zh-TW': '對不起' },
  'goodbye': { en: 'Goodbye', ja: 'さようなら', es: 'Adiós', th: 'ลาก่อน', vi: 'Tạm biệt', zh: '再见', 'zh-TW': '再見' },
  'yes': { en: 'Yes', ja: 'はい', es: 'Sí', th: 'ใช่', vi: 'Vâng', zh: '是', 'zh-TW': '是' },
  'no': { en: 'No', ja: 'いいえ', es: 'No', th: 'ไม่', vi: 'Không', zh: '不是', 'zh-TW': '不是' },
  // Usage contexts
  'greeting': { en: 'When greeting', ja: '挨拶する時', es: 'Al saludar', th: 'เมื่อทักทาย', vi: 'Khi chào hỏi', zh: '打招呼时', 'zh-TW': '打招呼時' },
  'thanking': { en: 'When thanking', ja: '感謝する時', es: 'Al agradecer', th: 'เมื่อขอบคุณ', vi: 'Khi cảm ơn', zh: '感谢时', 'zh-TW': '感謝時' },
  'apologizing': { en: 'When apologizing', ja: '謝る時', es: 'Al disculparse', th: 'เมื่อขอโทษ', vi: 'Khi xin lỗi', zh: '道歉时', 'zh-TW': '道歉時' },
  'farewell': { en: 'When saying goodbye', ja: '別れる時', es: 'Al despedirse', th: 'เมื่อบอกลา', vi: 'Khi tạm biệt', zh: '告别时', 'zh-TW': '告別時' },

  // History achievements/events
  '영토 확장': { en: 'Territorial expansion', ja: '領土拡張', es: 'Expansión territorial', th: 'ขยายดินแดน', vi: 'Mở rộng lãnh thổ', zh: '领土扩张', 'zh-TW': '領土擴張' },
  '삼국통일': { en: 'Unification of Three Kingdoms', ja: '三国統一', es: 'Unificación de los Tres Reinos', th: 'รวมสามอาณาจักร', vi: 'Thống nhất Tam Quốc', zh: '三国统一', 'zh-TW': '三國統一' },
  '불교 전래': { en: 'Introduction of Buddhism', ja: '仏教伝来', es: 'Introducción del budismo', th: 'พุทธศาสนาเข้ามา', vi: 'Phật giáo truyền vào', zh: '佛教传入', 'zh-TW': '佛教傳入' },
  '훈민정음 창제': { en: 'Creation of Hunminjeongeum', ja: '訓民正音の創製', es: 'Creación del Hunminjeongeum', th: 'สร้างฮุนมินจองอึม', vi: 'Sáng tạo Huấn Dân Chính Âm', zh: '训民正音创制', 'zh-TW': '訓民正音創制' },
  '수원 화성 축조': { en: 'Construction of Hwaseong Fortress', ja: '水原華城築造', es: 'Construcción de la Fortaleza Hwaseong', th: 'สร้างป้อมฮวาซอง', vi: 'Xây dựng pháo đài Hwaseong', zh: '水原华城建造', 'zh-TW': '水原華城建造' },
  '이토 히로부미 처단': { en: 'Assassination of Ito Hirobumi', ja: '伊藤博文処断', es: 'Asesinato de Ito Hirobumi', th: 'สังหารอิโตะ ฮิโรบูมิ', vi: 'Ám sát Ito Hirobumi', zh: '处决伊藤博文', 'zh-TW': '處決伊藤博文' },
  '동학농민운동 주도': { en: 'Led Donghak Peasant Movement', ja: '東学農民運動の指導', es: 'Lideró el Movimiento Campesino Donghak', th: 'นำขบวนการชาวนาดงฮัก', vi: 'Lãnh đạo phong trào nông dân Đông Học', zh: '领导东学农民运动', 'zh-TW': '領導東學農民運動' },
  '대한제국 선포': { en: 'Proclamation of Korean Empire', ja: '大韓帝国宣布', es: 'Proclamación del Imperio Coreano', th: 'ประกาศจักรวรรดิเกาหลี', vi: 'Tuyên bố Đế quốc Đại Hàn', zh: '宣布大韩帝国', 'zh-TW': '宣布大韓帝國' },
  '귀주대첩': { en: 'Victory at Gwiju', ja: '亀州大捷', es: 'Victoria en Gwiju', th: 'ชัยชนะที่กวีจู', vi: 'Đại thắng Quý Châu', zh: '龟州大捷', 'zh-TW': '龜州大捷' },
  '팔만대장경': { en: 'Tripitaka Koreana', ja: '八万大蔵経', es: 'Tripitaka Coreana', th: 'พระไตรปิฎกเกาหลี', vi: 'Bát Vạn Đại Tạng Kinh', zh: '八万大藏经', 'zh-TW': '八萬大藏經' },
  '9재 학당': { en: '9 Jae Academy', ja: '九斎学堂', es: 'Academia 9 Jae', th: 'สถาบัน 9 แจ', vi: 'Học đường 9 Trai', zh: '九斋学堂', 'zh-TW': '九齋學堂' },
  '강동 6주': { en: 'Gangdong 6 provinces', ja: '江東6州', es: '6 provincias de Gangdong', th: '6 จังหวัดคังดง', vi: '6 châu Giang Đông', zh: '江东六州', 'zh-TW': '江東六州' },
  '동학 창시': { en: 'Foundation of Donghak', ja: '東学創始', es: 'Fundación de Donghak', th: 'ก่อตั้งดงฮัก', vi: 'Sáng lập Đông Học', zh: '创立东学', 'zh-TW': '創立東學' },
  '조선 건국': { en: 'Foundation of Joseon', ja: '朝鮮建国', es: 'Fundación de Joseon', th: 'ก่อตั้งโชซ็อน', vi: 'Thành lập Triều Tiên', zh: '建立朝鲜', 'zh-TW': '建立朝鮮' },
  '임진왜란 승리': { en: 'Victory in Imjin War', ja: '壬辰倭乱勝利', es: 'Victoria en la Guerra Imjin', th: 'ชัยชนะสงครามอิมจิน', vi: 'Thắng lợi chiến tranh Nhâm Thìn', zh: '壬辰倭乱胜利', 'zh-TW': '壬辰倭亂勝利' },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Format word display: "한글" (romanization)
 * Note: Translation is NOT included to prevent revealing the answer in word-meaning questions
 * Returns empty string if korean is missing to prevent displaying empty quotes
 */
export function formatWordDisplay(
  korean: string,
  romanization: string,
  _translation?: string
): string {
  // Guard against empty or undefined values
  if (!korean || korean.trim() === '') {
    return romanization ? `(${romanization})` : '';
  }
  if (!romanization || romanization.trim() === '') {
    return `"${korean}"`;
  }
  return `"${korean}" (${romanization})`;
}

/**
 * Get translated text for a language, with fallback to English
 */
function getTranslation(texts: MultilingualText, language: string): string {
  return texts[language as keyof MultilingualText] || texts.en;
}

/**
 * Generate question text based on type and data
 * Returns empty string if critical data is missing
 */
export function generateQuestionText(
  type: QuestionType,
  data: QuestionData,
  language: string
): string {
  const template = getTranslation(questionTemplates[type], language);
  let result = template;

  // Replace {char} placeholder - also check if it's a history term
  if (data.char && data.char.trim() !== '') {
    const translatedChar = getHistoryTerm(data.char, language);
    result = result.replace(/{char}/g, translatedChar);
  } else if (result.includes('{char}')) {
    // If char is required but missing, replace with placeholder text
    result = result.replace(/{char}/g, '?');
  }

  // Replace {char2} placeholder
  if (data.char2 && data.char2.trim() !== '') {
    const translatedChar2 = getHistoryTerm(data.char2, language);
    result = result.replace(/{char2}/g, translatedChar2);
  } else if (result.includes('{char2}')) {
    result = result.replace(/{char2}/g, '?');
  }

  // Replace {syllable} placeholder
  if (data.syllable && data.syllable.trim() !== '') {
    result = result.replace(/{syllable}/g, data.syllable);
  } else if (result.includes('{syllable}')) {
    result = result.replace(/{syllable}/g, '?');
  }

  // Replace {word} placeholder with formatted word
  if (data.word && data.word.korean && data.word.korean.trim() !== '') {
    const translation = getTranslation(data.word.translations, language);
    const formattedWord = formatWordDisplay(
      data.word.korean,
      data.word.romanization,
      translation
    );
    result = result.replace(/{word}/g, formattedWord);
  } else if (result.includes('{word}')) {
    result = result.replace(/{word}/g, '(word)');
  }

  // Replace {meaning} placeholder - should use word translation with romanization
  if (result.includes('{meaning}')) {
    if (data.word && data.word.translations) {
      const meaning = getTranslation(data.word.translations, language);
      if (meaning && meaning.trim() !== '') {
        // Add romanization to help with pronunciation
        const romanization = data.word.romanization;
        const displayMeaning = romanization ? `${meaning.replace(/\s*\(sino\)/gi, '')} (${romanization})` : meaning;
        result = result.replace(/{meaning}/g, displayMeaning);
      } else {
        result = result.replace(/{meaning}/g, '?');
      }
    } else {
      result = result.replace(/{meaning}/g, '?');
    }
  }

  // Replace history-specific placeholders
  // {kingdom}, {achievement}, {event}, {battle}, {war}, {person}, {invention}
  const historyPlaceholders = ['kingdom', 'achievement', 'event', 'battle', 'war', 'person', 'invention'];
  historyPlaceholders.forEach(placeholder => {
    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
    if (result.includes(`{${placeholder}}`)) {
      // Use char as the source for these placeholders
      const term = data.char && data.char.trim() !== '' ? data.char : '';
      if (term) {
        const translatedTerm = getHistoryTerm(term, language);
        result = result.replace(regex, translatedTerm);
      } else {
        result = result.replace(regex, '?');
      }
    }
  });

  // Handle {gender} and {sibling} for family terms
  if (result.includes('{gender}') || result.includes('{sibling}')) {
    // These are handled by specific data if available
    result = result.replace(/{gender}/g, data.char && data.char.trim() !== '' ? data.char : 'male');
    result = result.replace(/{sibling}/g, data.char2 && data.char2.trim() !== '' ? data.char2 : 'sister');
  }

  return result;
}

/**
 * Translate a single option based on its type
 * Handles consonant names, vowel pronunciations, history terms, and special keys
 */
export function translateOption(
  option: string,
  language: string
): string {
  // Check for common answer translations
  if (commonAnswerTranslations[option]) {
    return getTranslation(commonAnswerTranslations[option], language);
  }

  // Check consonant names (기역, 니은, etc.)
  if (consonantNameTranslations[option]) {
    return getTranslation(consonantNameTranslations[option], language);
  }

  // Check vowel pronunciations (아, 어, etc.)
  if (vowelNameTranslations[option]) {
    return getTranslation(vowelNameTranslations[option], language);
  }

  // Check history terms (왕, 인물, 사건 등)
  if (allHistoryTerms[option]) {
    return getTranslation(allHistoryTerms[option], language);
  }

  // Check if it's a year (연도) format like "1392년"
  const yearMatch = option.match(/^(\d+)년$/);
  if (yearMatch) {
    return option; // Keep year format as-is
  }

  // Return as-is for characters (ㄱ, ㅏ) or romanization (a, b, c)
  return option;
}

/**
 * Translate all options for a question
 */
export function translateOptions(
  options: string[],
  language: string
): string[] {
  return options.map(opt => translateOption(opt, language));
}

/**
 * Generate a complete quiz question with translated text and options
 */
export function generateQuizQuestion(
  type: QuestionType,
  data: QuestionData,
  language: string
): {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
} {
  const questionText = generateQuestionText(type, data, language);
  const translatedOptions = translateOptions(data.options, language);
  const correctAnswerIndex = data.options.indexOf(data.correctAnswer);

  return {
    questionText,
    options: translatedOptions,
    correctAnswerIndex,
  };
}

// ============================================
// Consonant/Vowel Data Helpers
// ============================================

/**
 * Map Korean consonant character to its name
 */
export const consonantToName: Record<string, string> = {
  'ㄱ': '기역', 'ㄴ': '니은', 'ㄷ': '디귿', 'ㄹ': '리을',
  'ㅁ': '미음', 'ㅂ': '비읍', 'ㅅ': '시옷', 'ㅇ': '이응',
  'ㅈ': '지읒', 'ㅊ': '치읓', 'ㅋ': '키읔', 'ㅌ': '티읕',
  'ㅍ': '피읖', 'ㅎ': '히읗',
  // Double consonants
  'ㄲ': '쌍기역', 'ㄸ': '쌍디귿', 'ㅃ': '쌍비읍', 'ㅆ': '쌍시옷', 'ㅉ': '쌍지읒',
};

/**
 * Map Korean consonant character to its romanization
 */
export const consonantToRoman: Record<string, string> = {
  'ㄱ': 'g/k', 'ㄴ': 'n', 'ㄷ': 'd/t', 'ㄹ': 'r/l',
  'ㅁ': 'm', 'ㅂ': 'b/p', 'ㅅ': 's', 'ㅇ': 'ng/silent',
  'ㅈ': 'j', 'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't',
  'ㅍ': 'p', 'ㅎ': 'h',
  // Double consonants
  'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅆ': 'ss', 'ㅉ': 'jj',
};

/**
 * Map Korean vowel character to its pronunciation
 */
export const vowelToPronunciation: Record<string, string> = {
  'ㅏ': '아', 'ㅑ': '야', 'ㅓ': '어', 'ㅕ': '여',
  'ㅗ': '오', 'ㅛ': '요', 'ㅜ': '우', 'ㅠ': '유',
  'ㅡ': '으', 'ㅣ': '이',
  // Complex vowels
  'ㅐ': '애', 'ㅒ': '얘', 'ㅔ': '에', 'ㅖ': '예',
  'ㅘ': '와', 'ㅙ': '왜', 'ㅚ': '외', 'ㅝ': '워',
  'ㅞ': '웨', 'ㅟ': '위', 'ㅢ': '의',
};

/**
 * Map Korean vowel character to its romanization
 */
export const vowelToRoman: Record<string, string> = {
  'ㅏ': 'a', 'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo',
  'ㅗ': 'o', 'ㅛ': 'yo', 'ㅜ': 'u', 'ㅠ': 'yu',
  'ㅡ': 'eu', 'ㅣ': 'i',
  // Complex vowels
  'ㅐ': 'ae', 'ㅒ': 'yae', 'ㅔ': 'e', 'ㅖ': 'ye',
  'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe', 'ㅝ': 'wo',
  'ㅞ': 'we', 'ㅟ': 'wi', 'ㅢ': 'ui',
};

/**
 * Compound vowel mappings (vowel1 + vowel2 = result)
 */
export const compoundVowels: { vowel1: string; vowel2: string; result: string }[] = [
  { vowel1: 'ㅗ', vowel2: 'ㅏ', result: 'ㅘ' },
  { vowel1: 'ㅗ', vowel2: 'ㅐ', result: 'ㅙ' },
  { vowel1: 'ㅗ', vowel2: 'ㅣ', result: 'ㅚ' },
  { vowel1: 'ㅜ', vowel2: 'ㅓ', result: 'ㅝ' },
  { vowel1: 'ㅜ', vowel2: 'ㅔ', result: 'ㅞ' },
  { vowel1: 'ㅜ', vowel2: 'ㅣ', result: 'ㅟ' },
  { vowel1: 'ㅡ', vowel2: 'ㅣ', result: 'ㅢ' },
];
