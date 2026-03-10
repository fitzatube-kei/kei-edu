'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizQuestion, MultilingualQuizQuestion, GameState, CultureQuizQuestion } from '@/types';
import { shuffleArray, cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import {
  formatWordDisplay,
  translateOption,
  generateQuestionText,
  QuestionType,
} from '@/lib/quizHelpers';
import { getWordTranslation, SupportedLanguage } from '@/data/puzzle/wordTranslations';
import { useTTS } from '@/hooks/useTTS';

// Get first consonant (초성) from Korean character
function getFirstConsonant(char: string): string {
  const code = char.charCodeAt(0);
  if (code >= 0xAC00 && code <= 0xD7A3) {
    const consonants = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const index = Math.floor((code - 0xAC00) / 588);
    return consonants[index] || char;
  }
  return char;
}

// Question result for review screen
export interface QuestionResult {
  questionText: string;
  options: string[];
  correctIndex: number;
  selectedIndex: number;
  isCorrect: boolean;
  explanation: string;
  hintUsed: boolean;
  hintText: string;
  originalQuestion?: QuizQuestion | MultilingualQuizQuestion | CultureQuizQuestion;
}

interface QuizGameProps {
  questions?: QuizQuestion[];
  multilingualQuestions?: MultilingualQuizQuestion[];
  cultureQuestions?: CultureQuizQuestion[];
  variant: 'hangul' | 'history';
  categoryColor?: string;
  onComplete: (
    score: number,
    correct: number,
    total: number,
    hintsUsed: number,
    questionResults: QuestionResult[]
  ) => void;
  onExit?: () => void;
}

// Map templateKey to QuestionType
const templateKeyToType: Record<string, QuestionType> = {
  'sentenceMeaning': 'sentence-meaning',
  'fillBlank': 'fill-blank',
  'pronunciationName': 'consonant-name',
  'firstConsonant': 'find-consonant',
  'romanization': 'consonant-roman',
  'silentConsonant': 'silent-consonant',
  'notDoubleConsonant': 'not-double',
  'consonantName': 'consonant-name',
  'doubleConsonantInWord': 'double-in-word',
  'vowelPronunciation': 'vowel-pronunciation',
  'vowelInWord': 'find-vowel',
  'vowelRoman': 'vowel-roman',
  'notComplexVowel': 'not-complex-vowel',
  'compoundVowel': 'compound-vowel',
  'vowelCommon': 'vowel-common',
  'wordWithVowel': 'word-with-vowel',
  'combineSyllable': 'combine-syllable',
  'syllableComponents': 'syllable-components',
  'syllableRoman': 'syllable-roman',
  'findBatchim': 'find-batchim',
  'hasBatchim': 'has-batchim',
  'syllableStructure': 'syllable-structure',
  'batchimNg': 'batchim-ng',
  'wordMeaning': 'word-meaning',
  'wordRoman': 'word-roman',
  'meaningToKorean': 'meaning-to-korean',
  'sentenceTranslate': 'sentence-translate',
  'numberMeaning': 'number-meaning',
  'whenToUse': 'when-to-use',
  'familyTerm': 'family-term',
  'historyFounder': 'history-founder',
  'historyFirst': 'history-first',
  'historyUnifier': 'history-unifier',
  'historyBattle': 'history-battle',
  'historyKing': 'history-king',
  'historyPerson': 'history-person',
  'historyIdeology': 'history-ideology',
  'historyInvention': 'history-invention',
  'historyEventYear': 'history-event-year',
  'historyAchievement': 'history-achievement',
  'historyWar': 'history-war',
};

function renderMultilingualQuestion(
  question: MultilingualQuizQuestion,
  language: string,
  t: (key: string) => string
): string {
  // For wordMeaning/numberMeaning: show generic question with Korean word separately
  if ((question.templateKey === 'wordMeaning' || question.templateKey === 'numberMeaning') && question.word?.korean) {
    const wordMeaningQuestions: Record<string, string> = {
      en: 'What does this character mean?',
      ja: 'この文字の意味は？',
      es: '¿Qué significa este carácter?',
      th: 'ตัวอักษรนี้แปลว่าอะไร?',
      vi: 'Ký tự này có nghĩa là gì?',
      zh: '这个字是什么意思？',
      'zh-TW': '這個字是什麼意思？',
    };
    const questionStr = wordMeaningQuestions[language] || wordMeaningQuestions.en;
    return `${questionStr}\n"${question.word.korean}"`;
  }

  // Special handling for fillBlank questions - show translated word in blank
  if (question.templateKey === 'fillBlank' && question.character) {
    const correctAnswer = question.options[question.correctAnswer] || '';
    // Get translated word for the blank
    const translatedWord = getWordTranslation(correctAnswer, language as SupportedLanguage) || correctAnswer;
    // Replace ___ with [TranslatedWord]
    const sentenceWithBlank = question.character.replace(/___/g, `[${translatedWord}]`);
    return sentenceWithBlank;
  }

  const questionType = templateKeyToType[question.templateKey];

  if (questionType) {
    const questionData = {
      char: question.character || '',
      char2: question.character2 || '',
      syllable: question.character || '',
      word: question.word && question.word.korean ? {
        korean: question.word.korean,
        romanization: question.word.romanization || '',
        translations: question.word.translations || { en: '' },
      } : undefined,
      correctAnswer: question.options[question.correctAnswer] || '',
      options: question.options || [],
    };

    return generateQuestionText(questionType, questionData, language);
  }

  const templateKey = `quiz.templates.${question.templateKey}`;
  let template = t(templateKey);

  if (template === templateKey) {
    template = question.templateKey;
  }

  // Handle character placeholder with fallback
  if (question.character && question.character.trim() !== '') {
    template = template.replace(/{char}/g, question.character);
    template = template.replace(/{syllable}/g, question.character);
  } else {
    template = template.replace(/{char}/g, '?');
    template = template.replace(/{syllable}/g, '?');
  }

  // Handle character2 placeholder with fallback
  if (question.character2 && question.character2.trim() !== '') {
    template = template.replace(/{char2}/g, question.character2);
  } else {
    template = template.replace(/{char2}/g, '?');
  }

  // Handle word placeholder with validation
  if (question.word && question.word.korean && question.word.korean.trim() !== '') {
    const wordTranslation = question.word.translations[language as keyof typeof question.word.translations] || question.word.translations.en || '';

    const formattedWord = formatWordDisplay(
      question.word.korean,
      question.word.romanization || '',
      wordTranslation
    );

    template = template.replace(/{word}/g, formattedWord);
    template = template.replace(/{korean}/g, question.word.korean);

    const firstChar = question.word.korean.charAt(0);
    template = template.replace(/{first}/g, firstChar || '?');
  } else {
    template = template.replace(/{word}/g, '(word)');
    template = template.replace(/{korean}/g, '?');
    template = template.replace(/{first}/g, '?');
  }

  return template;
}

type AnyQuestion = QuizQuestion | MultilingualQuizQuestion | CultureQuizQuestion;

function isCultureQuestion(q: AnyQuestion): q is CultureQuizQuestion {
  return 'questionKo' in q && 'optionsKo' in q;
}

function isMultilingualQuestion(q: AnyQuestion): q is MultilingualQuizQuestion {
  return 'templateKey' in q;
}

export default function QuizGame({
  questions = [],
  multilingualQuestions,
  cultureQuestions,
  variant,
  categoryColor,
  onComplete,
  onExit
}: QuizGameProps) {
  const { t, language } = useLanguage();
  const { speak, speakAsync } = useTTS();

  const questionsToUse: AnyQuestion[] = useMemo(() => {
    if (cultureQuestions && cultureQuestions.length > 0) {
      return cultureQuestions;
    }
    if (multilingualQuestions && multilingualQuestions.length > 0) {
      return multilingualQuestions;
    }
    return questions;
  }, [questions, multilingualQuestions, cultureQuestions]);

  const [shuffledQuestions, setShuffledQuestions] = useState<AnyQuestion[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: questionsToUse.length,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timeSpent: 0,
    isComplete: false,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintUsedThisQuestion, setHintUsedThisQuestion] = useState(false);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [showExplanationLayer, setShowExplanationLayer] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questionsToUse]));
    setQuestionResults([]);
  }, [questionsToUse]);

  const currentQuestion = shuffledQuestions[gameState.currentQuestion];

  const questionText = useMemo(() => {
    if (!currentQuestion) return '';

    if (isCultureQuestion(currentQuestion)) {
      return currentQuestion.question;
    }

    if (isMultilingualQuestion(currentQuestion)) {
      return renderMultilingualQuestion(currentQuestion, language, t);
    }

    return (currentQuestion as QuizQuestion).question;
  }, [currentQuestion, language, t]);

  // Extract Korean character from question text for separate display
  const { questionWithoutKorean, koreanChar } = useMemo(() => {
    if (!questionText) return { questionWithoutKorean: '', koreanChar: '' };

    // Handle newline-separated format: "Question text\n"한글""
    const newlineMatch = questionText.match(/^(.+)\n"([^"]*[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]+[^"]*)"$/);
    if (newlineMatch) {
      return { questionWithoutKorean: newlineMatch[1], koreanChar: newlineMatch[2] };
    }

    // Match content inside parentheses or quotes that contains Korean characters
    const matchParen = questionText.match(/\(([^)]*[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]+[^)]*)\)/);
    if (matchParen) {
      const korean = matchParen[1];
      const withoutKorean = questionText.replace(`(${korean})`, '(   )');
      return { questionWithoutKorean: withoutKorean, koreanChar: korean };
    }

    // Fallback: match content inside quotes
    const matchQuote = questionText.match(/"([^"]*[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]+[^"]*)"/);
    if (matchQuote) {
      const korean = matchQuote[1];
      const withoutKorean = questionText.replace(`"${korean}"`, '"   "');
      return { questionWithoutKorean: withoutKorean, koreanChar: korean };
    }
    return { questionWithoutKorean: questionText, koreanChar: '' };
  }, [questionText]);

  const optionTexts = useMemo(() => {
    if (!currentQuestion) return [];

    if (isCultureQuestion(currentQuestion)) {
      return currentQuestion.options;
    }

    // For meaningToKorean, sentenceTranslate, and syllable questions, options are Korean words/syllables - don't translate them
    if (isMultilingualQuestion(currentQuestion) &&
        (currentQuestion.templateKey === 'meaningToKorean' || currentQuestion.templateKey === 'sentenceTranslate' ||
         currentQuestion.templateKey === 'combineSyllable' || currentQuestion.templateKey === 'syllableComponents')) {
      return currentQuestion.options;
    }

    return currentQuestion.options.map(opt => translateOption(opt, language));
  }, [currentQuestion, language]);

  const hintText = useMemo(() => {
    if (!currentQuestion) return '';
    if (isCultureQuestion(currentQuestion)) {
      return currentQuestion.hint;
    }
    // For fillBlank questions, show first consonant as hint
    if (isMultilingualQuestion(currentQuestion) && currentQuestion.templateKey === 'fillBlank') {
      const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer] || '';
      if (correctAnswer) {
        const firstConsonant = getFirstConsonant(correctAnswer.charAt(0));
        return firstConsonant;
      }
    }
    return '';
  }, [currentQuestion]);

  // Check if this is a fillBlank question
  const isFillBlankQuestion = useMemo(() => {
    return currentQuestion && isMultilingualQuestion(currentQuestion) && currentQuestion.templateKey === 'fillBlank';
  }, [currentQuestion]);

  const explanationText = useMemo(() => {
    if (!currentQuestion) return '';

    if (isCultureQuestion(currentQuestion)) {
      return currentQuestion.explanation;
    }

    if ('explanation' in currentQuestion) {
      return currentQuestion.explanation || '';
    }

    return '';
  }, [currentQuestion]);

  const correctAnswerIndex = useMemo(() => {
    if (!currentQuestion) return 0;

    if (isCultureQuestion(currentQuestion)) {
      return currentQuestion.correctIndex;
    }

    return currentQuestion.correctAnswer;
  }, [currentQuestion]);

  const handleHintClick = useCallback(() => {
    if (!hintUsedThisQuestion && !showResult) {
      setShowHint(true);
      setHintUsedThisQuestion(true);
      setHintsUsed(prev => prev + 1);
    }
  }, [hintUsedThisQuestion, showResult]);

  const handleAnswerSelect = useCallback((index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const correct = index === correctAnswerIndex;
    setIsCorrect(correct);

    // Play TTS and show explanation layer on correct answer
    if (correct && currentQuestion) {
      // Only show explanation layer and speak word for word-focused questions
      const wordFocusedTemplates = ['wordMeaning', 'meaningToKorean', 'sentenceMeaning', 'sentenceTranslate', 'fillBlank'];
      // Templates where the correct answer option should be spoken instead of the character
      const speakAnswerTemplates = ['combineSyllable', 'compoundVowel'];

      if (isMultilingualQuestion(currentQuestion) && currentQuestion.word?.korean && wordFocusedTemplates.includes(currentQuestion.templateKey)) {
        // Word-focused question: speak the word and show explanation layer
        speak(currentQuestion.word.korean);
        setShowExplanationLayer(true);
      } else if (isMultilingualQuestion(currentQuestion) && speakAnswerTemplates.includes(currentQuestion.templateKey)) {
        // Combine-type question: speak the correct answer (e.g., "가" instead of "ㄱ")
        const correctAnswerText = currentQuestion.options[currentQuestion.correctAnswer];
        if (correctAnswerText) {
          speak(correctAnswerText);
        }
      } else if (isMultilingualQuestion(currentQuestion) && currentQuestion.character) {
        // Consonant/vowel question: speak the character
        speak(currentQuestion.character);
      }
    }

    const questionScore = correct ? (hintUsedThisQuestion ? 80 : 100) : 0;

    // Record question result with original question for retry
    const result: QuestionResult = {
      questionText,
      options: optionTexts,
      correctIndex: correctAnswerIndex,
      selectedIndex: index,
      isCorrect: correct,
      explanation: explanationText,
      hintUsed: hintUsedThisQuestion,
      hintText: hintText,
      originalQuestion: currentQuestion,
    };
    setQuestionResults(prev => [...prev, result]);

    setGameState((prev) => ({
      ...prev,
      score: prev.score + questionScore,
      correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: correct ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));
  }, [showResult, correctAnswerIndex, hintUsedThisQuestion, questionText, optionTexts, explanationText, hintText, currentQuestion, speak]);

  const handleNextQuestion = useCallback(async () => {
    const isLastQuestion = gameState.currentQuestion >= shuffledQuestions.length - 1;

    if (isLastQuestion) {
      setGameState((prev) => ({ ...prev, isComplete: true }));
      onComplete(
        gameState.score,
        gameState.correctAnswers,
        shuffledQuestions.length,
        hintsUsed,
        questionResults
      );
    } else {
      setGameState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
      setHintUsedThisQuestion(false);
      setShowExplanationLayer(false);
    }
  }, [gameState, shuffledQuestions, onComplete, hintsUsed, questionResults, speakAsync]);

  if (!currentQuestion) {
    return (
      <div className="fixed inset-0 bg-[#421785] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#421785] py-4 px-4 md:px-6 lg:px-8 flex flex-col overflow-hidden">
      <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto w-full flex-1 flex flex-col min-h-0">
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          {/* Back Button - 흰색 배경, 동그란 모양 */}
          <button
            onClick={onExit}
            className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full bg-white flex items-center justify-center"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress & Score */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] md:text-[15px] font-bold bg-[#B4D700] text-[#1B0440] px-3 py-1 md:px-4 md:py-1.5 rounded-[8px]">
              {gameState.currentQuestion + 1}/{shuffledQuestions.length}
            </span>
            <span className="text-[13px] md:text-[15px] font-bold bg-[#AE7DFD] text-[#1B0440] px-3 py-1 md:px-4 md:py-1.5 rounded-[8px] flex items-center gap-1">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
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
        <div className="flex-1 min-h-0 bg-[#8A4AEF] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-2.5 sm:p-3 md:p-5 lg:p-6 flex flex-col relative overflow-y-auto">

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 flex flex-col min-h-0"
            >
              {/* Top section: Title + Question - pushed down for better vertical balance */}
              <div className="flex-shrink-0 mt-[6vh] sm:mt-[8vh] md:mt-[6vh] lg:mt-[4vh]">
                {/* Fill in the blank title label */}
                {isFillBlankQuestion && (
                  <div className="flex justify-center mb-2">
                    <span className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-[10px] text-[12px] sm:text-[14px] bg-[#AE7DFD] text-white font-bold uppercase tracking-wide">
                      Fill in the blank
                    </span>
                  </div>
                )}

                {/* Question text - with Korean character displayed separately */}
                <div className={cn(
                  "text-center px-2",
                  isFillBlankQuestion ? "mt-2 mb-2" : "mt-2 sm:mt-4 mb-3 sm:mb-4"
                )}>
                  <h2
                    className="text-[17px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {isFillBlankQuestion ? `"${questionText}"` : (koreanChar ? questionWithoutKorean : questionText)}
                  </h2>
                </div>

                {/* Large Korean character display */}
                {!isFillBlankQuestion && koreanChar && (
                  <div className="text-center mb-3 sm:mb-4">
                    <span
                      className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[80px] text-white font-bold"
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      {koreanChar}
                    </span>
                  </div>
                )}
              </div>

              {/* Hint button and display for fillBlank */}
              {isFillBlankQuestion && !showResult && (
                <div className="flex justify-center mb-3 sm:mb-4 flex-shrink-0">
                  {!showHint ? (
                    <button
                      onClick={handleHintClick}
                      disabled={hintUsedThisQuestion}
                      className={cn(
                        'flex items-center gap-2 px-5 py-2 rounded-[12px] text-[14px] font-bold transition-all',
                        hintUsedThisQuestion
                          ? 'bg-[#AE7DFD]/50 text-white/50 cursor-not-allowed'
                          : 'bg-[#AE7DFD] hover:bg-[#9D6AEC] text-white'
                      )}
                      style={{ boxShadow: hintUsedThisQuestion ? 'none' : '3px 3px 0px #1B0440' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                      </svg>
                      Hint
                    </button>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white text-[15px] font-medium"
                    >
                      Hint : '<span className="text-[#B4D700] font-bold text-[18px]">{hintText}</span>'
                    </motion.p>
                  )}
                </div>
              )}

              {/* Hint button for culture questions */}
              {isCultureQuestion(currentQuestion) && !isFillBlankQuestion && !showResult && !showHint && (
                <div className="flex justify-center mb-3 flex-shrink-0">
                  <button
                    onClick={handleHintClick}
                    disabled={hintUsedThisQuestion}
                    className={cn(
                      'flex items-center gap-2 px-5 py-2 rounded-[12px] text-[14px] font-bold transition-all',
                      hintUsedThisQuestion
                        ? 'bg-[#AE7DFD]/50 text-white/50 cursor-not-allowed'
                        : 'bg-[#AE7DFD] hover:bg-[#9D6AEC] text-white'
                    )}
                    style={{ boxShadow: hintUsedThisQuestion ? 'none' : '3px 3px 0px #1B0440' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                    </svg>
                    {language === 'ja' ? 'ヒント' :
                     language.startsWith('zh') ? '提示' :
                     language === 'th' ? 'คำใบ้' :
                     language === 'vi' ? 'Gợi ý' :
                     language === 'es' ? 'Pista' :
                     'Hint'}
                  </button>
                </div>
              )}

              {/* Hint display for culture questions */}
              <AnimatePresence>
                {showHint && hintText && isCultureQuestion(currentQuestion) && !isFillBlankQuestion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-3 flex justify-center flex-shrink-0"
                  >
                    <div className="p-2.5 rounded-[12px] bg-[#B4D700]/20 border border-[#B4D700]">
                      <p className="text-white text-[13px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {hintText}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Spacer to distribute space */}
              <div className="flex-1 min-h-[8px] sm:min-h-[16px]" />

              {/* Success / Error Message - compact, just above options */}
              <AnimatePresence>
                {showResult && isCorrect && (
                  <div className="flex items-center justify-center mb-2 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3 scale-150 md:scale-[2] origin-center"
                    >
                      <div className="relative bg-white text-[#1B0440] px-3 py-1 rounded-[8px]">
                        <p className="text-[11px] font-bold">Well done!</p>
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white" />
                      </div>
                      <motion.img
                        src="/images/word/wb_crt002.png"
                        alt="Character"
                        className="w-[40px] sm:w-[50px] h-auto"
                        animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                )}
                {showResult && !isCorrect && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center mb-2 flex-shrink-0"
                  >
                    <p className="text-white text-[12px] font-bold">Try again next time!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              <div className="grid gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 content-start flex-shrink-0">
                {optionTexts.map((option, index) => {
                  let cardStyle = 'bg-[#AE7DFD] text-white border-[#1B0440]';
                  let shadowStyle = '3px 3px 0px #1B0440';

                  if (showResult) {
                    if (index === correctAnswerIndex) {
                      cardStyle = 'bg-[#B4D700] text-[#1B0440] border-[#1B0440]';
                    } else if (index === selectedAnswer && !isCorrect) {
                      cardStyle = 'bg-red-400 text-white border-red-600';
                      shadowStyle = '3px 3px 0px #991B1B';
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
                        'w-full p-2.5 sm:p-3 md:p-4 rounded-[10px] sm:rounded-[12px] md:rounded-[14px] text-left transition-all border-[2px]',
                        cardStyle,
                        showResult && 'cursor-default'
                      )}
                      style={{ boxShadow: shadowStyle }}
                    >
                      <span className="flex items-center gap-2 sm:gap-3">
                        <span
                          className={cn(
                            'w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[12px] sm:text-[14px] md:text-[16px] font-bold flex-shrink-0',
                            showResult && index === correctAnswerIndex
                              ? 'bg-[#1B0440] text-[#B4D700]'
                              : showResult && index === selectedAnswer && !isCorrect
                              ? 'bg-white text-red-500'
                              : 'bg-[#1B0440]/30 text-white'
                          )}
                        >
                          {['A', 'B', 'C', 'D'][index]}
                        </span>
                        <span className="text-[14px] sm:text-[16px] md:text-[17px] font-semibold flex-1">
                          {option}
                        </span>
                        {showResult && index === correctAnswerIndex && (
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B0440] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && explanationText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 sm:mt-3 p-2.5 sm:p-3 bg-white/10 rounded-[10px] sm:rounded-[12px] flex-shrink-0"
                >
                  <p className="text-white/90 text-[12px] sm:text-[13px] text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {explanationText}
                  </p>
                </motion.div>
              )}

              {/* Next button - hidden when explanation layer is shown */}
              {showResult && !showExplanationLayer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 sm:mt-4 flex justify-center flex-shrink-0"
                >
                  <button
                    onClick={handleNextQuestion}
                    className="bg-[#B4D700] text-[#1B0440] font-bold px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-[10px] md:rounded-[12px] text-[14px] sm:text-[16px] md:text-[18px] border border-[#1B0440]"
                    style={{ boxShadow: '3px 3px 0px #1B0440' }}
                  >
                    {gameState.currentQuestion >= shuffledQuestions.length - 1 ? 'Complete' : 'Next →'}
                  </button>
                </motion.div>
              )}

              {/* Bottom spacer for centering */}
              <div className="flex-1 min-h-[8px] sm:min-h-[16px]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Explanation Layer Modal */}
      <AnimatePresence>
        {showExplanationLayer && isCorrect && currentQuestion && isMultilingualQuestion(currentQuestion) && currentQuestion.word && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowExplanationLayer(false);
              handleNextQuestion();
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#8A4AEF] rounded-[20px] p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#B4D700] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Korean Text */}
              <h3 className="text-[24px] text-white font-bold text-center mb-2">
                {currentQuestion.word.korean}
              </h3>

              {/* Romanization */}
              {currentQuestion.word.romanization && (
                <p className="text-[14px] text-white/70 text-center mb-3">
                  [{currentQuestion.word.romanization}]
                </p>
              )}

              {/* Translation */}
              <p className="text-[16px] text-[#B4D700] font-medium text-center mb-6">
                {currentQuestion.word.translations[language as keyof typeof currentQuestion.word.translations] ||
                 currentQuestion.word.translations.en}
              </p>

              {/* Play Again Button */}
              <button
                onClick={() => {
                  if (currentQuestion.word?.korean) {
                    speak(currentQuestion.word.korean);
                  }
                }}
                className="w-full bg-white/20 text-white font-bold py-3 rounded-[12px] mb-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                {language === 'ja' ? 'もう一度聞く' :
                 language.startsWith('zh') ? '再听一次' :
                 language === 'th' ? 'ฟังอีกครั้ง' :
                 language === 'vi' ? 'Nghe lại' :
                 language === 'es' ? 'Escuchar de nuevo' :
                 'Listen Again'}
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  setShowExplanationLayer(false);
                  handleNextQuestion();
                }}
                className="w-full bg-[#B4D700] text-[#1B0440] font-bold py-3 rounded-[12px] text-[16px]"
                style={{ boxShadow: '3px 3px 0px #1B0440' }}
              >
                {gameState.currentQuestion >= shuffledQuestions.length - 1 ? 'Complete' : 'Next →'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
