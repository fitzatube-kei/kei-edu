'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';
import { romanize } from '@/lib/koreanRomanize';
import { kpopMeanings, kdramaMeanings } from '@/data/quizMeanings';

export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuizQuestion {
  id: number;
  emoji: string;
  answer: string;
  options: string[];
  syllables: string[];
  artist?: string;
  year?: string;
  cast?: string;
  pronunciation?: string;
  meaning?: string;
}

interface EmojiQuizGameProps {
  questions: QuizQuestion[];
  level: QuizLevel;
  type: 'kpop' | 'kdrama';
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
  currentSetIndex?: number;
  totalSets?: number;
  isNextSetLocked?: boolean;
  onContinueToNextSet?: () => void;
}

export default function EmojiQuizGame({
  questions,
  level,
  type,
  onComplete,
  onBack,
  currentSetIndex,
  totalSets,
  isNextSetLocked,
  onContinueToNextSet,
}: EmojiQuizGameProps) {
  const { t } = useLanguage();
  const { speak } = useTTS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  // 초급: 셔플된 보기
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  // 초급: 힌트로 제거된 보기
  const [eliminatedOption, setEliminatedOption] = useState<string | null>(null);
  const [hintUsed, setHintUsed] = useState(false);

  // 중급: 단어 조합
  const [selectedSyllables, setSelectedSyllables] = useState<string[]>([]);
  const [availableSyllables, setAvailableSyllables] = useState<string[]>([]);

  // 고급: 직접 입력
  const [typedAnswer, setTypedAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // 초급용 보기 셔플
  useEffect(() => {
    if (level === 'beginner' && currentQuestion) {
      const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [currentIndex, level, currentQuestion]);

  // 중급용 음절 섞기
  useEffect(() => {
    if (level === 'intermediate' && currentQuestion) {
      const shuffled = [...currentQuestion.syllables].sort(() => Math.random() - 0.5);
      const extraSyllables = ['아', '이', '우', '에', '오', '가', '나', '다', '라', '마'];
      const randomExtras = extraSyllables
        .filter(s => !currentQuestion.syllables.includes(s))
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      setAvailableSyllables([...shuffled, ...randomExtras].sort(() => Math.random() - 0.5));
      setSelectedSyllables([]);
    }
  }, [currentIndex, level, currentQuestion]);

  // 초급: 보기 선택
  const handleBeginnerSelect = (option: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);
    const correct = option === currentQuestion.answer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
      speak(currentQuestion.answer);
    }

    if (!correct) {
      setTimeout(() => {
        moveToNext();
      }, 1500);
    }
  };

  // 초급: 힌트 사용 - 오답 하나 제거
  const handleBeginnerHint = () => {
    if (hintUsed || selectedAnswer !== null) return;
    const wrongOptions = shuffledOptions.filter(opt => opt !== currentQuestion.answer && opt !== eliminatedOption);
    if (wrongOptions.length > 0) {
      const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      setEliminatedOption(randomWrong);
      setHintUsed(true);
    }
  };

  // 중급: 음절 선택
  const handleSyllableSelect = (syllable: string, index: number) => {
    setSelectedSyllables(prev => [...prev, syllable]);
    setAvailableSyllables(prev => prev.filter((_, i) => i !== index));
  };

  // 중급: 음절 제거
  const handleSyllableRemove = (index: number) => {
    const removed = selectedSyllables[index];
    setSelectedSyllables(prev => prev.filter((_, i) => i !== index));
    setAvailableSyllables(prev => [...prev, removed]);
  };

  // 중급: 정답 확인
  const checkIntermediateAnswer = () => {
    const userAnswer = selectedSyllables.join('');
    const correct = userAnswer === currentQuestion.answer;
    setIsCorrect(correct);
    setSelectedAnswer(userAnswer);
    if (correct) {
      setScore(prev => prev + 1);
      speak(currentQuestion.answer);
    }

    if (!correct) {
      setTimeout(() => {
        moveToNext();
      }, 1500);
    }
  };

  // 고급: 정답 확인
  const checkAdvancedAnswer = () => {
    const correct = typedAnswer.trim() === currentQuestion.answer;
    setIsCorrect(correct);
    setSelectedAnswer(typedAnswer);
    if (correct) {
      setScore(prev => prev + 1);
      speak(currentQuestion.answer);
    }

    if (!correct) {
      setTimeout(() => {
        moveToNext();
      }, 1500);
    }
  };

  // 다음 문제로 이동
  const moveToNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setShowResult(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTypedAnswer('');
      setShowHint(false);
      setEliminatedOption(null);
      setHintUsed(false);
    }
  }, [currentIndex, totalQuestions]);

  // 힌트 보기 (고급)
  const handleShowHint = () => {
    setShowHint(true);
  };

  // 힌트 텍스트 구성
  const getHintText = () => {
    if (type === 'kpop') {
      return currentQuestion.artist || '';
    }
    // kdrama: year + cast
    const parts: string[] = [];
    if (currentQuestion.year) parts.push(currentQuestion.year);
    if (currentQuestion.cast) parts.push(currentQuestion.cast);
    else if (currentQuestion.artist) parts.push(currentQuestion.artist);
    return parts.join(', ');
  };

  // 결과 화면
  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let emoji = '🎉';
    let message = t('quiz.perfect');

    if (percentage < 50) {
      emoji = '💪';
      message = t('quiz.keepTrying');
    } else if (percentage < 80) {
      emoji = '👍';
      message = t('quiz.goodJob');
    } else if (percentage < 100) {
      emoji = '🌟';
      message = t('quiz.excellent');
    }

    const hasNextSet = currentSetIndex !== undefined && totalSets !== undefined && currentSetIndex + 1 < totalSets;

    const handleContinue = () => {
      onComplete(score, totalQuestions);
      if (hasNextSet && onContinueToNextSet) {
        onContinueToNextSet();
      }
    };

    return (
      <div className="fixed inset-0 bg-[#421785] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#8A4AEF] rounded-[20px] p-6 max-w-md w-full text-center"
        >
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-[24px] text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
            {message}
          </h2>
          <p className="text-[20px] text-[#B4D700] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            {score} / {totalQuestions} ({percentage}%)
          </p>

          {currentSetIndex !== undefined && totalSets !== undefined && (
            <p className="text-[12px] text-white/60 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Set #{currentSetIndex + 1} / {totalSets}
            </p>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={onBack}
              className="px-6 py-2.5 bg-white/20 text-white rounded-[10px] font-bold border-[2px] border-[#1B0440]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, boxShadow: '3px 3px 0px #1B0440' }}
            >
              {t('quiz.backToLevels')}
            </button>
            {hasNextSet ? (
              <button
                onClick={handleContinue}
                className="px-6 py-2.5 bg-[#B4D700] text-[#1B0440] rounded-[10px] font-bold flex items-center gap-2 border-[2px] border-[#1B0440]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, boxShadow: '3px 3px 0px #1B0440' }}
              >
                {t('quiz.continue')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => onComplete(score, totalQuestions)}
                className="px-6 py-2.5 bg-[#B4D700] text-[#1B0440] rounded-[10px] font-bold border-[2px] border-[#1B0440]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, boxShadow: '3px 3px 0px #1B0440' }}
              >
                {t('quiz.finish')}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  const typeLabel = type === 'kpop' ? 'K-Pop' : 'Drama';
  const hintText = getHintText();

  return (
    <div className="fixed inset-0 bg-[#421785] pt-3 sm:pt-4 px-3 sm:px-4 md:px-6 pb-2 sm:pb-4 flex flex-col overflow-hidden">
      <div className="max-w-md md:max-w-[540px] lg:max-w-xl mx-auto w-full flex-1 flex flex-col min-h-0">
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-1.5 sm:mb-2 flex-shrink-0">
          <button
            onClick={onBack}
            className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-white flex items-center justify-center"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[12px] sm:text-[13px] font-bold bg-[#B4D700] text-[#1B0440] px-2.5 sm:px-3 py-1 rounded-[8px]">
              {currentIndex + 1}/{totalQuestions}
            </span>
            <span className="text-[12px] sm:text-[13px] font-bold bg-[#AE7DFD] text-[#1B0440] px-2.5 sm:px-3 py-1 rounded-[8px] flex items-center gap-1">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {score}
            </span>
          </div>
        </div>

        {/* ===== PROGRESS BAR ===== */}
        <div className="w-full h-[4px] bg-[#1B0440] rounded-full overflow-hidden mb-2 sm:mb-3 flex-shrink-0">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-[#B4D700] rounded-full"
          />
        </div>

        {/* ===== TYPE BADGE ===== */}
        <div className="flex justify-center mb-0.5 sm:mb-1 flex-shrink-0">
          <span
            className="text-[11px] sm:text-[12px] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-[#AE7DFD] text-white"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {typeLabel}
          </span>
        </div>

        {/* ===== HINT TEXT (year, cast/artist) ===== */}
        {hintText && (
          <p
            className="text-center text-white text-[14px] sm:text-[16px] md:text-[18px] mb-2 sm:mb-3 flex-shrink-0"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {hintText}
          </p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex-1 flex flex-col min-h-0"
          >
            {/* ===== TOP: EMOJI GAME BOARD + FEEDBACK ===== */}
            <div className="flex-1 flex flex-col items-center min-h-0">
              {/* ===== EMOJI GAME BOARD ===== */}
              <div className="bg-[#8A4AEF] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] p-4 sm:p-5 md:p-6 w-full flex-1 flex flex-col items-center justify-center"
                style={{ minHeight: level === 'beginner' ? '160px' : '200px' }}
              >
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">{currentQuestion.emoji}</div>

                {/* ===== CORRECT/INCORRECT FEEDBACK (inside emoji board) ===== */}
                <AnimatePresence>
                  {isCorrect !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center mt-3 sm:mt-4"
                    >
                      {isCorrect ? (
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                          <div className="bg-[#B4D700] text-[#440687] px-4 sm:px-5 py-1.5 sm:py-2 rounded-[10px]">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>✓ {t('quiz.correct')}</p>
                          </div>
                          {/* Pronunciation & Meaning */}
                          {(() => {
                            const pron = currentQuestion.pronunciation || romanize(currentQuestion.answer);
                            const meanings = type === 'kpop' ? kpopMeanings : kdramaMeanings;
                            const mean = currentQuestion.meaning || meanings[currentQuestion.answer] || '';
                            return (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/15 rounded-[12px] px-5 sm:px-6 py-3 sm:py-4 text-center w-full max-w-[320px]"
                              >
                                <p className="text-[20px] sm:text-[22px] md:text-[24px] text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                                  {currentQuestion.answer}
                                </p>
                                <p className="text-[14px] sm:text-[15px] text-[#B4D700] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                                  [ {pron} ]
                                </p>
                                {mean && (
                                  <p className="text-[13px] sm:text-[14px] text-white/70" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                    {mean}
                                  </p>
                                )}
                                <button
                                  onClick={() => speak(currentQuestion.answer)}
                                  className="mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-[12px] flex items-center gap-1 mx-auto"
                                >
                                  <img src="/images/icon/sound001_w.png" alt="sound" className="w-4 h-4" /> {pron}
                                </button>
                              </motion.div>
                            );
                          })()}
                          {/* Next Button */}
                          <motion.button
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={moveToNext}
                            className="bg-[#B4D700] text-[#1B0440] px-8 sm:px-10 py-2.5 sm:py-3 rounded-[12px] text-[15px] sm:text-[16px] border-2 border-[#1B0440]"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, boxShadow: '3px 3px 0px #1B0440' }}
                          >
                            {currentIndex + 1 >= totalQuestions ? 'Complete ✓' : 'Next →'}
                          </motion.button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="bg-red-400 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-[10px] inline-block mb-1">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>✗ {t('quiz.incorrect')}</p>
                          </div>
                          <p className="text-white/80 text-[13px] sm:text-[15px]">
                            {t('quiz.correctAnswer')}: <span className="text-[#B4D700] font-bold">{currentQuestion.answer}</span>
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ===== BOTTOM: OPTIONS + HINT ===== */}
            <div className="pt-[15px] sm:pt-[16px] md:pt-[17px]">
              {/* ===== 초급: 4지선다 ===== */}
              {level === 'beginner' && selectedAnswer === null && (
                <div className="flex flex-col gap-[7px] sm:gap-[10px] md:gap-3">
                  {shuffledOptions.map((option, index) => {
                    const isEliminated = eliminatedOption === option;
                    const labels = ['A', 'B', 'C', 'D'][index];

                    return (
                      <motion.button
                        key={index}
                        whileHover={!isEliminated ? { scale: 1.02 } : {}}
                        whileTap={!isEliminated ? { scale: 0.97 } : {}}
                        onClick={() => !isEliminated && handleBeginnerSelect(option)}
                        disabled={isEliminated}
                        className={`w-full py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 rounded-[10px] sm:rounded-[12px] text-left transition-all border-2 relative overflow-hidden ${
                          isEliminated
                            ? 'bg-[#8755EC]/40 border-[#1B0440]/30 cursor-not-allowed'
                            : 'bg-[#8755EC] text-white border-[#1B0440]'
                        }`}
                        style={{ boxShadow: isEliminated ? 'none' : '4px 4px 0px #1B0440' }}
                      >
                        <span className={`flex items-center gap-2.5 sm:gap-3 ${isEliminated ? 'opacity-30' : ''}`}>
                          <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[12px] sm:text-[13px] md:text-[14px] flex-shrink-0 bg-[#6533C9] text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                            {labels}
                          </span>
                          <span className="text-[14px] sm:text-[15px] md:text-[16px] flex-1 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                            {option}
                          </span>
                        </span>
                        {isEliminated && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-[13px] sm:text-[14px] bg-red-500/80 px-3 py-0.5 rounded-full" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                              ✗ Not this one
                            </span>
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ===== 중급: 음절 조합 ===== */}
              {level === 'intermediate' && selectedAnswer === null && (
                <div className="space-y-3">
                  <p className="text-white/50 text-[13px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {currentQuestion.answer.replace(/ /g, '').length}{t('quiz.characters')}
                    {currentQuestion.answer.includes(' ') && ` (${currentQuestion.answer.split(' ').length}${t('quiz.words')})`}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center items-center min-h-[50px] p-2">
                    {(() => {
                      const answerChars = currentQuestion.answer.split('');
                      const filledChars = selectedSyllables.join('').split('');
                      let charIndex = 0;

                      return answerChars.map((char, idx) => {
                        if (char === ' ') {
                          return <div key={`space-${idx}`} className="w-3" />;
                        }
                        const filled = filledChars[charIndex];
                        charIndex++;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className={`w-10 h-12 sm:w-11 sm:h-13 rounded-[8px] border-2 flex items-center justify-center font-bold text-lg ${
                              filled
                                ? 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]'
                                : 'bg-white/10 border-white/30 text-white/40'
                            }`}
                          >
                            {filled || '_'}
                          </motion.div>
                        );
                      });
                    })()}
                  </div>

                  {selectedSyllables.length > 0 && (
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          const lastSyllable = selectedSyllables[selectedSyllables.length - 1];
                          setSelectedSyllables(prev => prev.slice(0, -1));
                          setAvailableSyllables(prev => [...prev, lastSyllable]);
                        }}
                        className="px-3 py-1.5 bg-white/20 text-white rounded-[8px] font-medium text-[12px] flex items-center gap-1"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                        </svg>
                        {t('quiz.deleteLast')}
                      </button>
                      <button
                        onClick={() => {
                          setAvailableSyllables(prev => [...prev, ...selectedSyllables]);
                          setSelectedSyllables([]);
                        }}
                        className="px-3 py-1.5 bg-red-400/30 text-red-200 rounded-[8px] font-medium text-[12px]"
                      >
                        {t('quiz.clearAll')}
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 justify-center">
                    {availableSyllables.map((syllable, index) => (
                      <motion.button
                        key={index}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSyllableSelect(syllable, index)}
                        className="px-4 py-2 bg-[#AE7DFD] border-[2px] border-[#1B0440] rounded-[10px] font-bold text-lg text-white"
                        style={{ boxShadow: '3px 3px 0px #1B0440' }}
                      >
                        {syllable}
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={checkIntermediateAnswer}
                    disabled={selectedSyllables.join('').length !== currentQuestion.answer.replace(/ /g, '').length}
                    className={`w-full py-2.5 rounded-[10px] font-bold text-[14px] border-[2px] transition-colors ${
                      selectedSyllables.join('').length === currentQuestion.answer.replace(/ /g, '').length
                        ? 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]'
                        : 'bg-white/20 text-white/50 border-white/20 cursor-not-allowed'
                    }`}
                    style={selectedSyllables.join('').length === currentQuestion.answer.replace(/ /g, '').length
                      ? { boxShadow: '3px 3px 0px #1B0440' }
                      : {}}
                  >
                    {t('quiz.checkAnswer')}
                  </button>
                </div>
              )}

              {/* ===== 고급: 직접 입력 ===== */}
              {level === 'advanced' && selectedAnswer === null && (
                <div className="space-y-3">
                  {showHint && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-white text-[14px]"
                    >
                      {t('quiz.hint')}: <span className="text-[#B4D700] font-bold text-[18px]">{currentQuestion.answer.charAt(0)}</span>...
                      ({currentQuestion.answer.length}{t('quiz.characters')})
                    </motion.p>
                  )}

                  <input
                    type="text"
                    value={typedAnswer}
                    onChange={(e) => setTypedAnswer(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && typedAnswer.trim()) {
                        checkAdvancedAnswer();
                      }
                    }}
                    placeholder={t('quiz.typeAnswer')}
                    className="w-full p-3 text-center text-lg font-bold bg-white/10 text-white border-2 border-white/30 rounded-[12px] focus:outline-none focus:border-[#B4D700] placeholder-white/30"
                    autoFocus
                  />

                  <div className="flex gap-2">
                    {!showHint && (
                      <button
                        onClick={handleShowHint}
                        className="flex-1 py-2.5 bg-[#AE7DFD] text-white rounded-[10px] font-bold text-[14px] border-[2px] border-[#1B0440] flex items-center justify-center gap-2"
                        style={{ boxShadow: '3px 3px 0px #1B0440' }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                        </svg>
                        {t('quiz.showHint')}
                      </button>
                    )}
                    <button
                      onClick={checkAdvancedAnswer}
                      disabled={!typedAnswer.trim()}
                      className={`flex-1 py-2.5 rounded-[10px] font-bold text-[14px] border-[2px] transition-colors ${
                        typedAnswer.trim()
                          ? 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]'
                          : 'bg-white/20 text-white/50 border-white/20 cursor-not-allowed'
                      }`}
                      style={typedAnswer.trim() ? { boxShadow: '3px 3px 0px #1B0440' } : {}}
                    >
                      {t('quiz.checkAnswer')}
                    </button>
                  </div>
                </div>
              )}

              {/* ===== HINT BUTTON (beginner only) ===== */}
              {level === 'beginner' && selectedAnswer === null && (
                <div className="flex justify-center mt-[12px] mb-[12px]">
                  <button
                    onClick={handleBeginnerHint}
                    disabled={hintUsed}
                    className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-[8px] text-[12px] sm:text-[13px] flex items-center gap-1.5 transition-all ${
                      hintUsed
                        ? 'bg-[#B4D700]/30 text-[#1F1F39]/30 cursor-not-allowed'
                        : 'bg-[#B4D700] text-[#1F1F39] hover:bg-[#a3c200]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    💡 Hint -50
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
