'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReviewQuiz, ReviewQuestion, FillBlankQuestion, MultipleChoiceQuestion, MatchingQuestion } from '@/types/story';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';
import { StarIcon, TrophyIcon } from '@/components/icons/Icon3D';

interface ReviewQuizPlayerProps {
  quiz: ReviewQuiz;
  onComplete: (score: number, passed: boolean) => void;
  onSkip: () => void;
}

export default function ReviewQuizPlayer({ quiz, onComplete, onSkip }: ReviewQuizPlayerProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  // Fill-in-blank / multiple-choice
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  // Matching
  const [selectedKorean, setSelectedKorean] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [wrongMatch, setWrongMatch] = useState<{ korean: number; translation: number } | null>(null);

  const getText = useCallback((multiText: Record<string, string>) => {
    return multiText[language] || multiText.en;
  }, [language]);

  const currentQuestion = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentIndex + (answered ? 1 : 0)) / totalQuestions) * 100;

  // Shuffled translation indices for matching questions
  const shuffledTranslationIndices = useMemo(() => {
    if (currentQuestion?.type !== 'matching') return [];
    const indices = (currentQuestion as MatchingQuestion).pairs.map((_, i) => i);
    // Fisher-Yates shuffle with deterministic seed based on question id
    const arr = [...indices];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor((i * 7 + 3) % (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentQuestion]);

  const handleFillBlankSelect = (optionIndex: number) => {
    if (answered) return;
    const q = currentQuestion as FillBlankQuestion;
    const correct = q.options[optionIndex] === q.correctAnswer;
    setSelectedOption(optionIndex);
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore(prev => prev + 1);
  };

  const handleMultipleChoiceSelect = (optionIndex: number) => {
    if (answered) return;
    const q = currentQuestion as MultipleChoiceQuestion;
    const correct = optionIndex === q.correctIndex;
    setSelectedOption(optionIndex);
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore(prev => prev + 1);
  };

  const handleMatchingSelect = (type: 'korean' | 'translation', index: number) => {
    if (matchedPairs.has(index) && type === 'korean') return;
    const q = currentQuestion as MatchingQuestion;

    if (type === 'korean') {
      setSelectedKorean(index);
      setWrongMatch(null);
    } else if (selectedKorean !== null) {
      // Check if this translation matches the selected Korean
      const translationOriginalIndex = shuffledTranslationIndices[index];
      if (translationOriginalIndex === selectedKorean) {
        // Correct match
        const newMatched = new Set(matchedPairs);
        newMatched.add(selectedKorean);
        setMatchedPairs(newMatched);
        setSelectedKorean(null);
        setWrongMatch(null);

        // Check if all pairs matched
        if (newMatched.size === q.pairs.length) {
          setIsCorrect(true);
          setAnswered(true);
          setScore(prev => prev + 1);
        }
      } else {
        // Wrong match - show feedback briefly
        setWrongMatch({ korean: selectedKorean, translation: index });
        setTimeout(() => {
          setWrongMatch(null);
          setSelectedKorean(null);
        }, 800);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= totalQuestions) {
      setShowResult(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
      setSelectedOption(null);
      setSelectedKorean(null);
      setMatchedPairs(new Set());
      setWrongMatch(null);
    }
  };

  const finalPercentage = Math.round((score / totalQuestions) * 100);
  const passed = finalPercentage >= quiz.passingScore;

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen min-h-[100dvh] flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#440687] to-[#667eea]"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="modal-3d p-4 sm:p-6 md:p-8 max-w-md w-full text-center max-h-[85vh] max-h-[85dvh] overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-4"
          >
            <motion.div
              animate={passed ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: passed ? Infinity : 0, duration: 2 }}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto border-4 border-[#2d3436] shadow-[4px_4px_0_#2d3436] ${
                passed ? 'bg-gradient-to-br from-[#fee140] to-[#fa709a]' : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}
            >
              {passed ? <TrophyIcon size={40} /> : <span className="text-3xl">📝</span>}
            </motion.div>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
            {passed
              ? (language === 'ja' ? 'クイズクリア！' :
                 language.startsWith('zh') ? '测验通过！' :
                 language === 'th' ? 'ผ่านแบบทดสอบ!' :
                 language === 'vi' ? 'Đỗ bài kiểm tra!' :
                 language === 'es' ? '¡Quiz aprobado!' :
                 'Quiz Passed!')
              : (language === 'ja' ? 'もう少し！' :
                 language.startsWith('zh') ? '再努力一点！' :
                 language === 'th' ? 'เกือบแล้ว!' :
                 language === 'vi' ? 'Gần được rồi!' :
                 language === 'es' ? '¡Casi lo logras!' :
                 'Almost there!')}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-3d card-3d-pink p-4 sm:p-6 mb-4 sm:mb-6"
          >
            <div className="text-3xl sm:text-4xl font-black text-[#fa709a] mb-1">
              {score} / {totalQuestions}
            </div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base">
              {finalPercentage}%
              {' - '}
              {passed
                ? (language === 'ja' ? '合格' : language.startsWith('zh') ? '通过' : language === 'th' ? 'ผ่าน' : language === 'vi' ? 'Đỗ' : language === 'es' ? 'Aprobado' : 'Passed')
                : (language === 'ja' ? '不合格' : language.startsWith('zh') ? '未通过' : language === 'th' ? 'ไม่ผ่าน' : language === 'vi' ? 'Chưa đỗ' : language === 'es' ? 'No aprobado' : 'Not passed')}
            </div>
          </motion.div>

          {passed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-3d p-3 sm:p-4 mb-4 sm:mb-6"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#43e97b] font-black">
                <StarIcon size={24} animate />
                <span className="text-base sm:text-lg">+{quiz.rewards.xp} XP</span>
              </div>
              {quiz.rewards.badgeName && (
                <div className="flex items-center justify-center gap-2 text-yellow-500 font-black mt-2 pt-2 border-t-2 border-gray-100">
                  <TrophyIcon size={24} />
                  <span className="text-base sm:text-lg">{getText(quiz.rewards.badgeName)}</span>
                </div>
              )}
            </motion.div>
          )}

          <div className="space-y-2 sm:space-y-3">
            <Button variant="primary" size="lg" fullWidth onClick={() => onComplete(finalPercentage, passed)}>
              {language === 'ja' ? '次のエピソードへ' :
               language.startsWith('zh') ? '下一集' :
               language === 'th' ? 'ตอนถัดไป' :
               language === 'vi' ? 'Tập tiếp theo' :
               language === 'es' ? 'Siguiente episodio' :
               'Next Episode'}
            </Button>
            {!passed && (
              <Button variant="ghost" size="lg" fullWidth onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setAnswered(false);
                setShowResult(false);
                setSelectedOption(null);
                setSelectedKorean(null);
                setMatchedPairs(new Set());
              }}>
                {language === 'ja' ? 'もう一度' :
                 language.startsWith('zh') ? '再试一次' :
                 language === 'th' ? 'ลองอีกครั้ง' :
                 language === 'vi' ? 'Thử lại' :
                 language === 'es' ? 'Intentar de nuevo' :
                 'Try Again'}
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#440687] to-[#667eea] p-3 sm:p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onSkip}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="text-white/80 text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              📝 {getText(quiz.title)}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#77B602] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-white/80 text-xs sm:text-sm font-bold min-w-[3rem] text-right">
              {currentIndex + 1}/{totalQuestions}
            </span>
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {currentQuestion.type === 'fill-in-blank' && (
              <FillBlankCard
                question={currentQuestion as FillBlankQuestion}
                selectedOption={selectedOption}
                answered={answered}
                isCorrect={isCorrect}
                getText={getText}
                onSelect={handleFillBlankSelect}
              />
            )}
            {currentQuestion.type === 'multiple-choice' && (
              <MultipleChoiceCard
                question={currentQuestion as MultipleChoiceQuestion}
                selectedOption={selectedOption}
                answered={answered}
                isCorrect={isCorrect}
                getText={getText}
                onSelect={handleMultipleChoiceSelect}
              />
            )}
            {currentQuestion.type === 'matching' && (
              <MatchingCard
                question={currentQuestion as MatchingQuestion}
                selectedKorean={selectedKorean}
                matchedPairs={matchedPairs}
                wrongMatch={wrongMatch}
                answered={answered}
                shuffledIndices={shuffledTranslationIndices}
                getText={getText}
                onSelect={handleMatchingSelect}
                language={language}
              />
            )}

            {/* Feedback */}
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 sm:mt-4 rounded-2xl p-4 sm:p-5 border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436] ${
                  isCorrect ? 'bg-green-50' : 'bg-orange-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{isCorrect ? '🌟' : '💡'}</span>
                  <div>
                    <h4 className={`font-bold mb-1 text-sm sm:text-base ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                      {isCorrect
                        ? (language === 'ja' ? '正解！' : language.startsWith('zh') ? '正确！' : language === 'th' ? 'ถูกต้อง!' : language === 'vi' ? 'Đúng rồi!' : language === 'es' ? '¡Correcto!' : 'Correct!')
                        : (language === 'ja' ? '惜しい！' : language.startsWith('zh') ? '可惜！' : language === 'th' ? 'เกือบแล้ว!' : language === 'vi' ? 'Gần đúng!' : language === 'es' ? '¡Casi!' : 'Not quite!')}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base">{getText(currentQuestion.explanation)}</p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="mt-3"
                  onClick={handleNext}
                >
                  {currentIndex + 1 >= totalQuestions
                    ? (language === 'ja' ? '結果を見る' : language.startsWith('zh') ? '查看结果' : language === 'th' ? 'ดูผลลัพธ์' : language === 'vi' ? 'Xem kết quả' : language === 'es' ? 'Ver resultados' : 'See Results')
                    : (language === 'ja' ? '次の問題' : language.startsWith('zh') ? '下一题' : language === 'th' ? 'ข้อถัดไป' : language === 'vi' ? 'Câu tiếp' : language === 'es' ? 'Siguiente' : 'Next →')}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Score */}
        <div className="text-center mt-4">
          <span className="text-sm font-bold text-[#FFD700] bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {score}/{totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
}

// Fill-in-blank question component
function FillBlankCard({
  question, selectedOption, answered, isCorrect, getText, onSelect,
}: {
  question: FillBlankQuestion;
  selectedOption: number | null;
  answered: boolean;
  isCorrect: boolean;
  getText: (t: Record<string, string>) => string;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436]">
      <div className="text-xs sm:text-sm text-purple-600 font-bold mb-2 uppercase tracking-wide">
        Fill in the blank
      </div>
      <p className="text-gray-800 text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-relaxed">
        {getText(question.sentence)}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {question.options.map((option, i) => {
          const isSelected = selectedOption === i;
          const isAnswer = option === question.correctAnswer;
          let btnClass = 'bg-purple-50 hover:bg-purple-100 border-2 border-purple-200';
          if (answered) {
            if (isAnswer) btnClass = 'bg-green-100 border-2 border-green-500';
            else if (isSelected && !isCorrect) btnClass = 'bg-red-100 border-2 border-red-400';
            else btnClass = 'bg-gray-50 border-2 border-gray-200 opacity-60';
          }
          return (
            <motion.button
              key={i}
              whileTap={!answered ? { scale: 0.95 } : undefined}
              onClick={() => onSelect(i)}
              disabled={answered}
              className={`rounded-xl p-3 sm:p-4 text-center font-bold text-base sm:text-lg transition-all ${btnClass}`}
            >
              {option}
              {answered && isAnswer && <span className="ml-1">✓</span>}
              {answered && isSelected && !isCorrect && <span className="ml-1">✗</span>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Multiple choice question component
function MultipleChoiceCard({
  question, selectedOption, answered, isCorrect, getText, onSelect,
}: {
  question: MultipleChoiceQuestion;
  selectedOption: number | null;
  answered: boolean;
  isCorrect: boolean;
  getText: (t: Record<string, string>) => string;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436]">
      <div className="text-xs sm:text-sm text-blue-600 font-bold mb-2 uppercase tracking-wide">
        What does this mean?
      </div>
      <div className="text-center mb-4 sm:mb-6">
        <p className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">{question.question}</p>
        <p className="text-gray-500 text-sm">{question.questionRomanization}</p>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedOption === i;
          const isAnswer = i === question.correctIndex;
          let btnClass = 'bg-blue-50 hover:bg-blue-100 border-2 border-blue-200';
          if (answered) {
            if (isAnswer) btnClass = 'bg-green-100 border-2 border-green-500';
            else if (isSelected && !isCorrect) btnClass = 'bg-red-100 border-2 border-red-400';
            else btnClass = 'bg-gray-50 border-2 border-gray-200 opacity-60';
          }
          return (
            <motion.button
              key={i}
              whileTap={!answered ? { scale: 0.98 } : undefined}
              onClick={() => onSelect(i)}
              disabled={answered}
              className={`w-full rounded-xl p-3 sm:p-4 text-left font-semibold text-sm sm:text-base transition-all ${btnClass}`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/60 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {getText(option)}
                {answered && isAnswer && <span className="ml-auto">✓</span>}
                {answered && isSelected && !isCorrect && <span className="ml-auto">✗</span>}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Matching question component
function MatchingCard({
  question, selectedKorean, matchedPairs, wrongMatch, answered, shuffledIndices, getText, onSelect, language,
}: {
  question: MatchingQuestion;
  selectedKorean: number | null;
  matchedPairs: Set<number>;
  wrongMatch: { korean: number; translation: number } | null;
  answered: boolean;
  shuffledIndices: number[];
  getText: (t: Record<string, string>) => string;
  onSelect: (type: 'korean' | 'translation', index: number) => void;
  language: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436]">
      <div className="text-xs sm:text-sm text-green-600 font-bold mb-2 uppercase tracking-wide">
        Match the pairs
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
        {language === 'ja' ? '韓国語と意味をマッチさせよう' :
         language.startsWith('zh') ? '匹配韩语和意思' :
         language === 'th' ? 'จับคู่ภาษาเกาหลีกับความหมาย' :
         language === 'vi' ? 'Nối tiếng Hàn với nghĩa' :
         language === 'es' ? 'Conecta el coreano con su significado' :
         'Tap a Korean word, then tap its meaning'}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Korean column */}
        <div className="space-y-2">
          {question.pairs.map((pair, i) => {
            const isMatched = matchedPairs.has(i);
            const isSelected = selectedKorean === i;
            const isWrong = wrongMatch?.korean === i;
            let cls = 'bg-purple-50 border-2 border-purple-200';
            if (isMatched) cls = 'bg-green-100 border-2 border-green-400 opacity-60';
            else if (isWrong) cls = 'bg-red-100 border-2 border-red-400';
            else if (isSelected) cls = 'bg-purple-200 border-2 border-purple-500 ring-2 ring-purple-400';
            return (
              <motion.button
                key={`k-${i}`}
                whileTap={!isMatched ? { scale: 0.95 } : undefined}
                onClick={() => !isMatched && onSelect('korean', i)}
                disabled={isMatched || answered}
                className={`w-full rounded-xl p-2.5 sm:p-3 text-center font-bold text-sm sm:text-base transition-all ${cls}`}
              >
                {pair.korean}
                {isMatched && ' ✓'}
              </motion.button>
            );
          })}
        </div>
        {/* Translation column */}
        <div className="space-y-2">
          {shuffledIndices.map((originalIndex, displayIndex) => {
            const pair = question.pairs[originalIndex];
            const isMatched = matchedPairs.has(originalIndex);
            const isWrong = wrongMatch?.translation === displayIndex;
            let cls = 'bg-blue-50 border-2 border-blue-200';
            if (isMatched) cls = 'bg-green-100 border-2 border-green-400 opacity-60';
            else if (isWrong) cls = 'bg-red-100 border-2 border-red-400';
            return (
              <motion.button
                key={`t-${displayIndex}`}
                whileTap={!isMatched && selectedKorean !== null ? { scale: 0.95 } : undefined}
                onClick={() => !isMatched && selectedKorean !== null && onSelect('translation', displayIndex)}
                disabled={isMatched || selectedKorean === null || answered}
                className={`w-full rounded-xl p-2.5 sm:p-3 text-center font-semibold text-xs sm:text-sm transition-all ${cls}`}
              >
                {getText(pair.translation)}
                {isMatched && ' ✓'}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
