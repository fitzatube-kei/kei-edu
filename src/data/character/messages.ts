/**
 * Hangeuli Character Messages
 * Multilingual messages for the cute cat mascot
 */

import { MultilingualText } from '@/types';

export type MessageType =
  | 'welcome'
  | 'correct'
  | 'incorrect'
  | 'levelComplete'
  | 'encouragement'
  | 'streak'
  | 'thinking'
  | 'hint'
  | 'goodbye'
  | 'perfectScore'
  | 'firstTry'
  | 'keepGoing'
  | 'almostThere'
  | 'greatProgress';

export const characterMessages: Record<MessageType, MultilingualText> = {
  welcome: {
    en: "Hi! I'm Hangeuli! Let's learn Korean together!",
    ja: "こんにちは！ハングリです！一緒に韓国語を学びましょう！",
    es: "¡Hola! ¡Soy Hangeuli! ¡Aprendamos coreano juntos!",
    th: "สวัสดี! ฉันชื่อฮันกึลลี! มาเรียนภาษาเกาหลีด้วยกันเถอะ!",
    vi: "Xin chào! Mình là Hangeuli! Hãy cùng học tiếng Hàn nhé!",
    zh: "你好！我是Hangeuli！我们一起学韩语吧！",
  },
  correct: {
    en: "Well done! You got it right!",
    ja: "よくできました！正解です！",
    es: "¡Bien hecho! ¡Lo lograste!",
    th: "เก่งมาก! ถูกต้องแล้ว!",
    vi: "Giỏi lắm! Bạn trả lời đúng rồi!",
    zh: "做得好！答对了！",
  },
  incorrect: {
    en: "Oops! Try again! You can do it!",
    ja: "おっと！もう一度！できるよ！",
    es: "¡Ups! ¡Inténtalo de nuevo! ¡Puedes hacerlo!",
    th: "อ๊ะ! ลองอีกครั้ง! คุณทำได้!",
    vi: "Ối! Thử lại nhé! Bạn làm được mà!",
    zh: "哎呀！再试一次！你可以的！",
  },
  levelComplete: {
    en: "Amazing! You completed the level!",
    ja: "すごい！レベルクリア！",
    es: "¡Increíble! ¡Completaste el nivel!",
    th: "สุดยอด! คุณผ่านด่านแล้ว!",
    vi: "Tuyệt vời! Bạn đã hoàn thành cấp độ!",
    zh: "太棒了！你完成了这个等级！",
  },
  encouragement: {
    en: "Keep going! You're doing great!",
    ja: "続けて！よくやっているよ！",
    es: "¡Sigue así! ¡Lo estás haciendo genial!",
    th: "ไปต่อเลย! คุณทำได้ดีมาก!",
    vi: "Tiếp tục nào! Bạn đang làm rất tốt!",
    zh: "继续加油！你做得很好！",
  },
  streak: {
    en: "Wow! You're on fire! Keep it up!",
    ja: "わぁ！連続正解！この調子！",
    es: "¡Guau! ¡Estás en racha! ¡Sigue así!",
    th: "ว้าว! คุณเก่งมาก! สู้ต่อไป!",
    vi: "Wow! Bạn đang rất xuất sắc! Tiếp tục nhé!",
    zh: "哇！你太厉害了！继续保持！",
  },
  thinking: {
    en: "Hmm, let me think...",
    ja: "うーん、考え中...",
    es: "Hmm, déjame pensar...",
    th: "อืม ให้คิดก่อน...",
    vi: "Hmm, để mình nghĩ...",
    zh: "嗯，让我想想...",
  },
  hint: {
    en: "Need a hint? Look carefully!",
    ja: "ヒントが必要？よく見て！",
    es: "¿Necesitas una pista? ¡Mira con cuidado!",
    th: "ต้องการคำใบ้ไหม? ดูให้ดีนะ!",
    vi: "Cần gợi ý không? Nhìn kỹ nào!",
    zh: "需要提示吗？仔细看看！",
  },
  goodbye: {
    en: "See you next time! Keep practicing!",
    ja: "また次回！練習を続けてね！",
    es: "¡Hasta la próxima! ¡Sigue practicando!",
    th: "ไว้เจอกันใหม่! ฝึกต่อไปนะ!",
    vi: "Hẹn gặp lại! Tiếp tục luyện tập nhé!",
    zh: "下次见！继续练习哦！",
  },
  perfectScore: {
    en: "PERFECT! You're a genius!",
    ja: "パーフェクト！天才だね！",
    es: "¡PERFECTO! ¡Eres un genio!",
    th: "เพอร์เฟค! คุณเป็นอัจฉริยะ!",
    vi: "HOÀN HẢO! Bạn là thiên tài!",
    zh: "满分！你是天才！",
  },
  firstTry: {
    en: "First try! Impressive!",
    ja: "一発正解！すごい！",
    es: "¡A la primera! ¡Impresionante!",
    th: "ถูกตั้งแต่ครั้งแรก! น่าประทับใจ!",
    vi: "Đúng ngay lần đầu! Ấn tượng!",
    zh: "一次就对！太厉害了！",
  },
  keepGoing: {
    en: "Don't give up! Almost there!",
    ja: "諦めないで！もう少し！",
    es: "¡No te rindas! ¡Ya casi!",
    th: "อย่ายอมแพ้! ใกล้แล้ว!",
    vi: "Đừng bỏ cuộc! Sắp được rồi!",
    zh: "不要放弃！快到了！",
  },
  almostThere: {
    en: "So close! Try one more time!",
    ja: "惜しい！もう一回！",
    es: "¡Casi! ¡Una vez más!",
    th: "เกือบแล้ว! ลองอีกครั้ง!",
    vi: "Gần rồi! Thử thêm lần nữa!",
    zh: "差一点！再试一次！",
  },
  greatProgress: {
    en: "You're making great progress!",
    ja: "素晴らしい進歩だね！",
    es: "¡Estás progresando mucho!",
    th: "คุณก้าวหน้าได้ดีมาก!",
    vi: "Bạn đang tiến bộ rất nhiều!",
    zh: "你进步很大！",
  },
};

// Random encouraging messages for different situations
export const randomMessages: Record<string, MessageType[]> = {
  onCorrect: ['correct', 'firstTry', 'streak', 'greatProgress'],
  onIncorrect: ['incorrect', 'keepGoing', 'almostThere', 'hint'],
  onComplete: ['levelComplete', 'perfectScore', 'encouragement'],
  onWelcome: ['welcome', 'encouragement'],
};

/**
 * Get a random message of a specific type
 */
export function getRandomMessage(situation: keyof typeof randomMessages): MessageType {
  const messages = randomMessages[situation];
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Get message text for a specific language
 */
export function getMessage(type: MessageType, language: string): string {
  const message = characterMessages[type];
  return message[language as keyof MultilingualText] || message.en;
}
