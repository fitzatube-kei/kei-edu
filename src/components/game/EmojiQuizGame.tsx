'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuizQuestion {
  id: number;
  emoji: string;
  answer: string;
  options: string[];
  syllables: string[];
  artist?: string;
  year?: string;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  // 초급: 셔플된 보기
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

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
      // 추가 랜덤 음절로 난이도 높이기
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
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      moveToNext();
    }, 1500);
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
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      moveToNext();
    }, 1500);
  };

  // 고급: 정답 확인
  const checkAdvancedAnswer = () => {
    const correct = typedAnswer.trim() === currentQuestion.answer;
    setIsCorrect(correct);
    setSelectedAnswer(typedAnswer);
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      moveToNext();
    }, 1500);
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
    }
  }, [currentIndex, totalQuestions]);

  // 힌트 보기
  const handleShowHint = () => {
    setShowHint(true);
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

    // Check if there's a next set available
    const hasNextSet = currentSetIndex !== undefined && totalSets !== undefined && currentSetIndex + 1 < totalSets;

    const handleContinue = () => {
      // Save the score first
      onComplete(score, totalQuestions);

      // If there's a next set and we have the handler, try to continue
      if (hasNextSet && onContinueToNextSet) {
        onContinueToNextSet();
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-6 shadow-lg text-center"
      >
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{message}</h2>
        <p className="text-xl text-gray-600 mb-4">
          {score} / {totalQuestions} ({percentage}%)
        </p>

        {/* Set progress indicator */}
        {currentSetIndex !== undefined && totalSets !== undefined && (
          <p className="text-sm text-gray-400 mb-4">
            Set #{currentSetIndex + 1} / {totalSets}
          </p>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-colors"
          >
            {t('quiz.backToLevels')}
          </button>
          {hasNextSet ? (
            <button
              onClick={handleContinue}
              className="px-6 py-3 bg-[#440687] text-white rounded-xl font-bold hover:bg-[#350569] transition-colors flex items-center gap-2"
            >
              {t('quiz.continue')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => onComplete(score, totalQuestions)}
              className="px-6 py-3 bg-[#440687] text-white rounded-xl font-bold hover:bg-[#350569] transition-colors"
            >
              {t('quiz.finish')}
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const levelColors = {
    beginner: { bg: 'from-green-400 to-green-600', text: 'text-green-600', border: 'border-green-400' },
    intermediate: { bg: 'from-yellow-400 to-orange-500', text: 'text-orange-600', border: 'border-orange-400' },
    advanced: { bg: 'from-red-400 to-pink-600', text: 'text-red-600', border: 'border-red-400' },
  };

  const colors = levelColors[level];

  return (
    <div className="space-y-4">
      {/* 진행 상황 */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('common.back')}
        </button>
        <div className="text-gray-600 font-medium">
          {currentIndex + 1} / {totalQuestions}
        </div>
      </div>

      {/* 진행 바 */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${colors.bg}`}
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* 점수 */}
      <div className="text-center">
        <span className={`text-lg font-bold ${colors.text}`}>
          {t('quiz.score')}: {score}
        </span>
      </div>

      {/* 이모지 카드 */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-lg text-center"
      >
        <div className="text-6xl sm:text-7xl mb-4">{currentQuestion.emoji}</div>

        {/* 아티스트/연도 힌트 */}
        {(currentQuestion.artist || currentQuestion.year) && (
          <p className="text-gray-400 text-sm mb-4">
            {currentQuestion.artist && <span>{currentQuestion.artist}</span>}
            {currentQuestion.artist && currentQuestion.year && ' • '}
            {currentQuestion.year && <span>{currentQuestion.year}</span>}
          </p>
        )}

        {/* 정답 여부 표시 */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-xl font-bold mb-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
            >
              {isCorrect ? '✓ ' + t('quiz.correct') : '✗ ' + t('quiz.incorrect')}
              {!isCorrect && (
                <p className="text-gray-600 text-base mt-1">
                  {t('quiz.correctAnswer')}: {currentQuestion.answer}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 레벨별 인터페이스 */}
        {level === 'beginner' && selectedAnswer === null && (
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((option, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBeginnerSelect(option)}
                className={`p-4 rounded-xl font-bold text-lg border-2 ${colors.border} hover:bg-gray-50 transition-colors`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        )}

        {level === 'intermediate' && selectedAnswer === null && (
          <div className="space-y-4">
            {/* 글자 수 힌트 */}
            <p className="text-gray-400 text-sm">
              {currentQuestion.answer.replace(/ /g, '').length}{t('quiz.characters')}
              {currentQuestion.answer.includes(' ') && ` (${currentQuestion.answer.split(' ').length}${t('quiz.words')})`}
            </p>

            {/* 빈칸 박스 형식 입력 영역 */}
            <div className="flex flex-wrap gap-1 justify-center items-center min-h-[60px] p-3">
              {(() => {
                const answerChars = currentQuestion.answer.split('');
                const filledChars = selectedSyllables.join('').split('');
                let charIndex = 0;

                return answerChars.map((char, idx) => {
                  if (char === ' ') {
                    // 띄어쓰기는 간격으로 표시
                    return (
                      <div key={`space-${idx}`} className="w-4" />
                    );
                  }

                  const filled = filledChars[charIndex];
                  charIndex++;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className={`w-10 h-12 sm:w-12 sm:h-14 rounded-lg border-2 flex items-center justify-center font-bold text-lg sm:text-xl ${
                        filled
                          ? 'bg-[#440687] text-white border-[#440687]'
                          : `bg-gray-50 ${colors.border} text-gray-400`
                      }`}
                    >
                      {filled || '_'}
                    </motion.div>
                  );
                });
              })()}
            </div>

            {/* 선택된 음절 삭제 버튼 */}
            {selectedSyllables.length > 0 && (
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => {
                    const lastSyllable = selectedSyllables[selectedSyllables.length - 1];
                    setSelectedSyllables(prev => prev.slice(0, -1));
                    setAvailableSyllables(prev => [...prev, lastSyllable]);
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                  </svg>
                  {t('quiz.deleteLast')}
                </button>
                <button
                  onClick={() => {
                    setAvailableSyllables(prev => [...prev, ...selectedSyllables]);
                    setSelectedSyllables([]);
                  }}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-medium text-sm hover:bg-red-200 transition-colors"
                >
                  {t('quiz.clearAll')}
                </button>
              </div>
            )}

            {/* 사용 가능한 음절들 */}
            <div className="flex flex-wrap gap-2 justify-center">
              {availableSyllables.map((syllable, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSyllableSelect(syllable, index)}
                  className={`px-4 py-2 bg-white border-2 ${colors.border} rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-sm`}
                >
                  {syllable}
                </motion.button>
              ))}
            </div>

            {/* 확인 버튼 */}
            <button
              onClick={checkIntermediateAnswer}
              disabled={selectedSyllables.join('').length !== currentQuestion.answer.replace(/ /g, '').length}
              className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${
                selectedSyllables.join('').length === currentQuestion.answer.replace(/ /g, '').length
                  ? 'bg-[#440687] hover:bg-[#350569]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {t('quiz.checkAnswer')}
            </button>
          </div>
        )}

        {level === 'advanced' && selectedAnswer === null && (
          <div className="space-y-4">
            {/* 힌트 */}
            {showHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-sm"
              >
                {t('quiz.hint')}: {currentQuestion.answer.charAt(0)}...
                ({currentQuestion.answer.length}{t('quiz.characters')})
              </motion.div>
            )}

            {/* 입력 필드 */}
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
              className={`w-full p-4 text-center text-xl font-bold border-2 ${colors.border} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#440687]`}
              autoFocus
            />

            <div className="flex gap-3">
              {!showHint && (
                <button
                  onClick={handleShowHint}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-colors"
                >
                  {t('quiz.showHint')}
                </button>
              )}
              <button
                onClick={checkAdvancedAnswer}
                disabled={!typedAnswer.trim()}
                className={`flex-1 py-3 rounded-xl font-bold text-white transition-colors ${
                  typedAnswer.trim()
                    ? 'bg-[#440687] hover:bg-[#350569]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {t('quiz.checkAnswer')}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
