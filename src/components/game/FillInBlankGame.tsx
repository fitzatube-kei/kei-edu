'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FillInBlankQuestion, GameState } from '@/types';
import { shuffleArray, cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';
import { getWordTranslation, SupportedLanguage } from '@/data/puzzle/wordTranslations';

// Get first consonant (초성) from Korean character
function getFirstConsonant(char: string): string {
  const code = char.charCodeAt(0);
  // Check if it's a Korean syllable (가-힣)
  if (code >= 0xAC00 && code <= 0xD7A3) {
    const consonants = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const index = Math.floor((code - 0xAC00) / 588);
    return consonants[index] || char;
  }
  return char;
}

interface FillInBlankGameProps {
  questions: FillInBlankQuestion[];
  variant: 'hangul' | 'history';
  onComplete: (score: number, correct: number, total: number) => void;
  onExit?: () => void;
}

export default function FillInBlankGame({ questions, variant, onComplete, onExit }: FillInBlankGameProps) {
  const { t, language } = useLanguage();
  const { speak } = useTTS();

  const [shuffledQuestions, setShuffledQuestions] = useState<FillInBlankQuestion[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: questions.length,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timeSpent: 0,
    isComplete: false,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions]));
  }, [questions]);

  const currentQuestion = shuffledQuestions[gameState.currentQuestion];

  // Blank display - just show empty space
  const blankDisplayText = useMemo(() => {
    return '          '; // Empty space for blank
  }, []);

  // Parse sentence to highlight blank
  const renderSentence = useMemo(() => {
    if (!currentQuestion) return null;

    const sentence = currentQuestion.sentence;
    const parts = sentence.split('___');

    // Determine what to show in the blank
    const getBlankContent = () => {
      if (showResult) {
        return currentQuestion.options[currentQuestion.correctAnswer];
      }
      if (selectedAnswer !== null) {
        return currentQuestion.options[selectedAnswer];
      }
      // Show empty blank
      return blankDisplayText;
    };

    return (
      <div className="text-[20px] sm:text-[24px] text-white text-center leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < parts.length - 1 && (
              <span className={cn(
                'inline-block min-w-[100px] sm:min-w-[120px] mx-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-[10px] border-[2.5px] transition-all',
                showResult && isCorrect
                  ? 'border-[#B4D700] bg-[#B4D700] text-[#1B0440] text-[18px] sm:text-[20px]'
                  : showResult && !isCorrect
                  ? 'border-red-400 bg-red-400 text-white text-[18px] sm:text-[20px]'
                  : selectedAnswer !== null
                  ? 'border-[#B4D700] bg-[#B4D700]/20 text-white text-[18px] sm:text-[20px]'
                  : 'border-[#B4D700] border-dashed bg-[#B4D700]/10 text-[#B4D700]/50 text-[16px] sm:text-[18px]'
              )} style={{ fontWeight: 600 }}>
                {getBlankContent()}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }, [currentQuestion, selectedAnswer, showResult, isCorrect, blankDisplayText]);

  // Get translation for the sentence
  const translationText = useMemo(() => {
    if (!currentQuestion?.translation) return null;
    return currentQuestion.translation[language as keyof typeof currentQuestion.translation] ||
           currentQuestion.translation.en ||
           null;
  }, [currentQuestion, language]);

  // Get hint keyword to highlight
  const hintKeyword = useMemo(() => {
    if (!currentQuestion?.hint) return null;
    return currentQuestion.hint[language as keyof typeof currentQuestion.hint] ||
           currentQuestion.hint.en ||
           null;
  }, [currentQuestion, language]);

  // Render translation with highlighted keyword
  const renderTranslation = useMemo(() => {
    if (!translationText) return null;
    if (!hintKeyword) return <span>{translationText}</span>;

    // Find and highlight the keyword (case-insensitive)
    const regex = new RegExp(`(${hintKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = translationText.split(regex);

    return (
      <>
        {parts.map((part, index) => {
          const isHighlight = part.toLowerCase() === hintKeyword.toLowerCase();
          return isHighlight ? (
            <span key={index} className="text-[#B4D700] font-bold">{part}</span>
          ) : (
            <span key={index}>{part}</span>
          );
        })}
      </>
    );
  }, [translationText, hintKeyword]);

  const handleAnswerSelect = useCallback((index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const correct = index === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    // Play TTS when correct - read the full sentence with the correct answer
    if (correct) {
      const fullSentence = currentQuestion.sentence.replace('___', currentQuestion.options[currentQuestion.correctAnswer]);
      speak(fullSentence);
    }

    setGameState((prev) => ({
      ...prev,
      score: correct ? prev.score + 100 : prev.score,
      correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: correct ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));
  }, [showResult, currentQuestion, speak]);

  const handleNextQuestion = useCallback(() => {
    if (gameState.currentQuestion >= shuffledQuestions.length - 1) {
      setGameState((prev) => ({ ...prev, isComplete: true }));
      onComplete(
        gameState.score + (isCorrect ? 100 : 0),
        gameState.correctAnswers + (isCorrect ? 1 : 0),
        shuffledQuestions.length
      );
    } else {
      setGameState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [gameState, shuffledQuestions.length, isCorrect, onComplete]);

  if (!currentQuestion) {
    return (
      <div className="h-[100dvh] bg-[#421785] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#421785] py-4 px-4 flex flex-col overflow-hidden">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col min-h-0">
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          {/* Back Button */}
          <button
            onClick={onExit}
            className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress & Score */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold bg-[#B4D700] text-[#1B0440] px-3 py-1 rounded-[8px]">
              {gameState.currentQuestion + 1}/{shuffledQuestions.length}
            </span>
            <span className="text-[13px] font-bold bg-[#AE7DFD] text-[#1B0440] px-3 py-1 rounded-[8px] flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {gameState.score}
            </span>
          </div>
        </div>

        {/* ===== PROGRESS BAR ===== */}
        <div className="w-full h-[8px] bg-[#1B0440] rounded-full overflow-hidden mb-4 flex-shrink-0">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((gameState.currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-[#B4D700] rounded-full"
          />
        </div>

        {/* ===== MAIN GAME BOARD ===== */}
        <div className="flex-1 min-h-0 bg-[#8A4AEF] rounded-[20px] p-4 sm:p-5 flex flex-col overflow-y-auto">

          {/* Game mode label - Fixed at top */}
          <div className="flex justify-center mt-5 mb-4 flex-shrink-0">
            <span className="px-5 py-2 rounded-[10px] text-[12px] sm:text-[13px] bg-[#AE7DFD] text-white font-bold uppercase tracking-wider">
              {language === 'ja' ? '空欄を埋めよう' :
               language.startsWith('zh') ? '填空题' :
               language === 'th' ? 'เติมคำในช่องว่าง' :
               language === 'vi' ? 'Điền vào chỗ trống' :
               language === 'es' ? 'Completa el espacio' :
               'Fill in the Blank'}
            </span>
          </div>

          {/* Top spacer - pushes content toward center */}
          <div className="flex-1 min-h-[20px]" />

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col"
            >
              {/* Sentence + Translation - moved up 36px together */}
              <div style={{ marginTop: '-36px' }}>
                {/* Sentence with blank */}
                <div className="py-3 sm:py-4 px-3">
                  {renderSentence}
                </div>

                {/* Translation with highlighted keyword */}
                {translationText && (
                  <div className="text-center mt-4 flex-shrink-0">
                    <p className="text-white/80 text-[15px] sm:text-[16px] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {renderTranslation}
                    </p>
                  </div>
                )}
              </div>

              {/* Spacer between translation and options */}
              <div className="mb-10 sm:mb-12" />

              {/* Success / Error Message - just above options */}
              <AnimatePresence>
                {showResult && isCorrect && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 mb-4 flex-shrink-0"
                  >
                    <div className="relative bg-white text-[#1B0440] px-4 py-1.5 rounded-[10px]">
                      <p className="text-[13px] font-bold">Well done!</p>
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
                    </div>
                    <motion.img
                      src="/images/word/wb_crt002.png"
                      alt="Character"
                      className="w-[50px] sm:w-[60px] h-auto"
                      animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </motion.div>
                )}
                {showResult && !isCorrect && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center mb-4 flex-shrink-0"
                  >
                    <p className="text-white text-[14px] font-bold">Try again next time!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-shrink-0">
                {currentQuestion.options.map((option, index) => {
                  let cardStyle = 'bg-[#AE7DFD] text-white border-[#1B0440]';
                  let shadowStyle = '4px 4px 0px #1B0440';

                  if (showResult) {
                    if (index === currentQuestion.correctAnswer) {
                      cardStyle = 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]';
                    } else if (index === selectedAnswer && !isCorrect) {
                      cardStyle = 'bg-red-400 text-white border-red-600';
                      shadowStyle = '4px 4px 0px #991B1B';
                    } else {
                      cardStyle = 'bg-[#AE7DFD]/50 text-white/60 border-[#1B0440]/50';
                      shadowStyle = 'none';
                    }
                  } else if (selectedAnswer === index) {
                    cardStyle = 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]';
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={cn(
                        'p-4 sm:p-5 rounded-[12px] text-center transition-all border-2',
                        cardStyle,
                        showResult && 'cursor-default'
                      )}
                      style={{ boxShadow: shadowStyle }}
                    >
                      <span className="text-[16px] sm:text-[18px] font-bold">
                        {option}
                      </span>
                      {showResult && index === currentQuestion.correctAnswer && (
                        <svg className="w-5 h-5 inline-block ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Translation when correct */}
              {showResult && isCorrect && currentQuestion.translation && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-5 bg-white/10 rounded-[12px] p-4 flex-shrink-0"
                >
                  <p className="text-white/90 text-[14px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {currentQuestion.translation[language as keyof typeof currentQuestion.translation] ||
                     currentQuestion.translation.en}
                  </p>
                </motion.div>
              )}

              {/* Correct answer when wrong */}
              {showResult && !isCorrect && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-5 text-center flex-shrink-0"
                >
                  <p className="text-white/70 text-[14px]">
                    {language === 'ja' ? '正解: ' :
                     language.startsWith('zh') ? '正确答案: ' :
                     language === 'th' ? 'คำตอบที่ถูกต้อง: ' :
                     language === 'vi' ? 'Đáp án đúng: ' :
                     language === 'es' ? 'Respuesta correcta: ' :
                     'Correct answer: '}
                    <span className="text-[#B4D700] font-bold text-[16px]">
                      {currentQuestion.options[currentQuestion.correctAnswer]}
                    </span>
                  </p>
                </motion.div>
              )}

              {/* Next button */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-5 flex justify-center flex-shrink-0"
                >
                  <button
                    onClick={handleNextQuestion}
                    className="bg-[#B4D700] text-[#1B0440] font-bold px-8 py-3 rounded-[12px] text-[16px] border-2 border-[#1B0440]"
                    style={{ boxShadow: '4px 4px 0px #1B0440' }}
                  >
                    {gameState.currentQuestion >= shuffledQuestions.length - 1 ? 'Complete' : 'Next →'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom spacer - pushes content toward center */}
          <div className="flex-1 min-h-[20px]" />
        </div>
      </div>
    </div>
  );
}
