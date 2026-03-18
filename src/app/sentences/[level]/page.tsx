'use client';

import React, { useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useTTS } from '@/hooks/useTTS';
import { getGrammarLessonById } from '@/data/grammar';
import { GrammarPoint, GrammarExercise } from '@/data/grammar/types';
import { calculateStars } from '@/lib/utils';
import Navigation from '@/components/layout/Navigation';
import Header from '@/components/layout/Header';

type Phase = 'select' | 'learn' | 'practice' | 'complete';

export default function GrammarLessonPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const { updateGrammarProgress } = useProgress();
  const { speakAsync, isSpeaking } = useTTS();

  const lessonId = params.level as string;
  const lesson = getGrammarLessonById(lessonId);

  const [phase, setPhase] = useState<Phase>('select');
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg max-w-sm w-full">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📖</span>
          </div>
          <h1 className="text-xl font-bold text-[#1F2937] mb-2">Lesson not found</h1>
          <p className="text-gray-500 text-sm mb-6">This lesson doesn&apos;t exist or has been removed.</p>
          <button
            onClick={() => router.push('/sentences')}
            className="bg-[#440687] text-white font-semibold px-6 py-2.5 rounded-full"
          >
            Back to Sentences
          </button>
        </div>
      </div>
    );
  }

  // Extract tier and level number from lessonId (e.g., "basic-01" -> tier: "basic", num: 1)
  const tierFromId = lessonId.split('-')[0]; // basic, intermediate, advanced
  const levelNum = parseInt(lessonId.split('-')[1], 10);

  const getTierName = (): string => {
    const names: Record<string, Record<string, string>> = {
      basic: { en: 'Basic', ja: '初級', zh: '初级', 'zh-TW': '初級', th: 'เริ่มต้น', vi: 'Cơ bản', es: 'Básico' },
      intermediate: { en: 'Intermediate', ja: '中級', zh: '中级', 'zh-TW': '中級', th: 'กลาง', vi: 'Trung cấp', es: 'Intermedio' },
      advanced: { en: 'Advanced', ja: '上級', zh: '高级', 'zh-TW': '高級', th: 'ขั้นสูง', vi: 'Nâng cao', es: 'Avanzado' },
    };
    return names[tierFromId]?.[language] || names[tierFromId]?.en || tierFromId;
  };

  const currentPoint = lesson.grammarPoints[currentPointIndex];
  const currentExercise = lesson.exercises[currentExerciseIndex];
  const totalExercises = lesson.exercises.length;

  const handleSpeak = (text: string) => {
    if (!isSpeaking) {
      speakAsync(text, 'ko-KR');
    }
  };

  const handleNextPoint = () => {
    if (currentPointIndex < lesson.grammarPoints.length - 1) {
      setCurrentPointIndex(prev => prev + 1);
    } else {
      setPhase('practice');
    }
  };

  const handlePrevPoint = () => {
    if (currentPointIndex > 0) {
      setCurrentPointIndex(prev => prev - 1);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === currentExercise.correctAnswer) {
      setCorrectCount(prev => prev + 1);
      setScore(prev => prev + Math.round(100 / totalExercises));
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setPhase('complete');
      const finalScore = score;
      const stars = calculateStars(correctCount, totalExercises);
      updateGrammarProgress(lessonId, stars, finalScore);
    }
  };

  const handleReplay = () => {
    setPhase('select');
    setCurrentPointIndex(0);
    setCurrentExerciseIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setScore(0);
  };

  // Select Phase - matches HANGUL detail page design
  if (phase === 'select') {
    return (
      <div className="min-h-screen bg-white pb-24">
        <Header />

        <main className="px-4 md:px-10 lg:px-12 pt-6 md:pt-8">
          <div className="max-w-md md:max-w-[540px] lg:max-w-xl xl:max-w-2xl mx-auto">
            {/* Back button */}
            <button
              onClick={() => router.push(`/sentences?tier=${tierFromId}`)}
              className="flex items-center gap-1 text-[#440687] text-[14px] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            {/* Level info header */}
            <div className="text-center mb-6 md:mb-8">
              {/* Tier badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full text-[12px] md:text-[13px] text-white mb-3"
                style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {getTierName()}
              </motion.div>

              {/* Level number badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-[16px] md:rounded-[20px] flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
                style={{ backgroundColor: '#440687' }}
              >
                <span
                  className="text-[36px] md:text-[42px] lg:text-[48px]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  {levelNum}
                </span>
              </motion.div>

              <h1
                className="text-[24px] md:text-[28px] lg:text-[32px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
              >
                {lesson.title}
              </h1>
              <p
                className="text-[#9038EF] text-[18px] md:text-[20px] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {lesson.titleKo}
              </p>
              <p
                className="text-gray-500 text-[14px] md:text-[15px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {lesson.description}
              </p>
            </div>

            {/* Grammar Points preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[16px] shadow-md p-5 md:p-6 mb-4 md:mb-5"
            >
              <h3
                className="text-[13px] text-[#B4D700] uppercase tracking-wider mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Grammar Points
              </h3>
              <div className="flex flex-wrap gap-2">
                {lesson.grammarPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-[#F3E8FF] rounded-[8px]"
                  >
                    <span
                      className="text-[14px] text-[#440687]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {point.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Game mode selection */}
            <div className="space-y-3 md:space-y-4">
              {/* Learn Grammar */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPhase('learn')}
                className="w-full bg-white rounded-[16px] md:rounded-[20px] shadow-md p-5 md:p-6 lg:p-7 text-left border-2 border-[#3B82F6]"
              >
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#3B82F6] rounded-[12px] md:rounded-[14px] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[16px] md:text-[17px] lg:text-[18px] text-[#1F2937]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      Learn Grammar
                    </h3>
                    <p
                      className="text-[13px] lg:text-[14px] text-gray-500"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      Study grammar points with examples
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>

              {/* Practice */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPhase('practice')}
                className="w-full bg-white rounded-[16px] md:rounded-[20px] shadow-md p-5 md:p-6 lg:p-7 text-left"
              >
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#9038EF] rounded-[12px] md:rounded-[14px] flex items-center justify-center">
                    <span className="text-[31px] text-white" style={{ fontWeight: 900 }}>?</span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[16px] md:text-[17px] lg:text-[18px] text-[#1F2937]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      Practice
                    </h3>
                    <p
                      className="text-[13px] text-gray-500"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      Test your knowledge with exercises
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-[#440687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </div>
          </div>
        </main>

        <Navigation />
      </div>
    );
  }

  // Learn Phase
  if (phase === 'learn') {
    return (
      <div className="min-h-screen bg-[#F8F9FF] pb-24">
        {/* Header - expanded purple area matching HANGUL learn design */}
        <div className="bg-[#440687] text-white pt-[env(safe-area-inset-top,0px)]">
          <div className="max-w-4xl mx-auto px-4">
            {/* Top row: Back + Tier badge + X */}
            <div className="flex items-center justify-between py-3">
              <button onClick={() => setPhase('select')} className="text-white/90 text-[14px] flex items-center gap-1 min-w-[60px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <span
                className="px-4 py-1 rounded-full text-[12px] text-white"
                style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {getTierName()}
              </span>
              <button onClick={() => setPhase('select')} className="text-white/70 w-8 h-8 flex items-center justify-center min-w-[60px] justify-end">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Center content */}
            <div className="text-center pb-5">
              {/* Level title */}
              <h1
                className="text-[22px] sm:text-[26px] text-white mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
              >
                Level {levelNum} - Learn
              </h1>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {lesson.title} {lesson.titleKo}
              </p>

              {/* Grammar points count badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-white/90 text-[13px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  {lesson.grammarPoints.length} grammar points
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar inside purple area */}
          <div className="bg-[#350568] h-1.5 rounded-full mx-4">
            <div
              className="bg-[#B4D700] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentPointIndex + 1) / lesson.grammarPoints.length) * 100}%` }}
            />
          </div>
          {/* Step indicator */}
          <div className="text-center py-2">
            <span className="text-white/50 text-[12px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              {currentPointIndex + 1} / {lesson.grammarPoints.length}
            </span>
          </div>
        </div>

        {/* Grammar Point Content */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPointIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grammar Point Card */}
              <div className="bg-white rounded-[16px] p-5 mb-4 shadow-md">
                {/* Title */}
                <h2
                  className="text-[20px] text-[#1F2937] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                >
                  {currentPoint.title}
                </h2>

                {/* Usage */}
                <div className="bg-[#F3E8FF] rounded-lg p-3 mb-3">
                  <p className="text-[#440687] text-[13px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    Usage: {currentPoint.usage}
                  </p>
                </div>

                {/* Explanation */}
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {currentPoint.explanation}
                </p>

                {/* Note (optional) */}
                {currentPoint.note && (
                  <div className="mt-4 border-t border-b border-[#D8B4FE] py-3">
                    <p className="text-gray-700 text-[13px] leading-relaxed whitespace-pre-line">
                      {currentPoint.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Examples */}
              <div className="space-y-3">
                <p className="text-[#440687] text-[12px] uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                  EXAMPLES
                </p>
                {currentPoint.examples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-[12px] p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-[18px] text-[#1F2937] mb-1" style={{ fontWeight: 700 }}>
                          {example.highlight ? (
                            <>
                              {example.korean.split(example.highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <span className="text-[#9038EF] bg-[#F3E8FF] px-1 rounded">{example.highlight}</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </>
                          ) : (
                            example.korean
                          )}
                        </p>
                        <p className="text-gray-400 text-[13px] italic mb-1">{example.romanization}</p>
                        <p className="text-gray-600 text-[14px]">{example.english}</p>
                      </div>
                      <button
                        onClick={() => handleSpeak(example.korean)}
                        className="ml-3 w-10 h-10 bg-[#F3E8FF] rounded-full flex items-center justify-center shrink-0"
                      >
                        <svg className="w-5 h-5 text-[#9038EF]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            {currentPointIndex > 0 && (
              <button
                onClick={handlePrevPoint}
                className="flex-1 py-3 bg-white text-[#440687] rounded-full text-[15px] shadow-md border border-[#9038EF]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNextPoint}
              className="flex-1 py-3 bg-[#440687] text-white rounded-full text-[15px] shadow-md"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {currentPointIndex < lesson.grammarPoints.length - 1 ? 'Next' : 'Start Practice →'}
            </button>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }

  // Practice Phase
  if (phase === 'practice') {
    const isCorrect = selectedAnswer === currentExercise.correctAnswer;

    return (
      <div className="min-h-screen bg-[#F8F9FF] pb-24">
        {/* Header - matching Learn phase design */}
        <div className="bg-[#440687] text-white pt-[env(safe-area-inset-top,0px)]">
          <div className="max-w-4xl mx-auto px-4">
            {/* Top row: Back + Tier badge + X */}
            <div className="flex items-center justify-between py-3">
              <button onClick={() => setPhase('select')} className="text-white/90 text-[14px] flex items-center gap-1 min-w-[60px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <span
                className="px-4 py-1 rounded-full text-[12px] text-white"
                style={{ backgroundColor: '#B4D700', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {getTierName()}
              </span>
              <button onClick={() => setPhase('select')} className="text-white/70 w-8 h-8 flex items-center justify-center min-w-[60px] justify-end">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Center content */}
            <div className="text-center pb-5">
              {/* Level title */}
              <h1
                className="text-[22px] sm:text-[26px] text-white mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
              >
                Level {levelNum} - Practice
              </h1>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {lesson.title} {lesson.titleKo}
              </p>

              {/* Exercises count badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full">
                <span className="text-[15px]">✏️</span>
                <span className="text-white/90 text-[13px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  {totalExercises} exercises
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar inside purple area */}
          <div className="bg-[#350568] h-1.5 rounded-full mx-4">
            <div
              className="bg-[#B4D700] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentExerciseIndex + 1) / totalExercises) * 100}%` }}
            />
          </div>
          {/* Step indicator */}
          <div className="text-center py-2">
            <span className="text-white/50 text-[12px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              {currentExerciseIndex + 1} / {totalExercises}
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExerciseIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question */}
              <div className="bg-white rounded-[16px] p-5 mb-4 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    currentExercise.type === 'fill-blank'
                      ? 'bg-[#F6FFC7] text-[#440687]'
                      : 'bg-[#F3E8FF] text-[#440687]'
                  }`}>
                    {currentExercise.type === 'fill-blank' ? 'Fill in the blank' : 'Multiple choice'}
                  </span>
                </div>
                <p
                  className="text-[18px] sm:text-[20px] text-[#1F2937] leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {currentExercise.question}
                </p>
                {currentExercise.hint && (
                  <p className="text-gray-400 text-[13px] mt-2 italic">
                    Hint: {currentExercise.hint}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentExercise.options.map((option, idx) => {
                  let optionStyle = 'bg-white border-2 border-gray-200 text-[#1F2937]';
                  if (selectedAnswer !== null) {
                    if (idx === currentExercise.correctAnswer) {
                      optionStyle = 'bg-[#F6FFC7] border-2 border-[#B4D700] text-[#440687]';
                    } else if (idx === selectedAnswer && !isCorrect) {
                      optionStyle = 'bg-[#FFEBEE] border-2 border-[#EF5350] text-[#C62828]';
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleAnswerSelect(idx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-[12px] text-left transition-all shadow-sm ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 ${
                          selectedAnswer !== null && idx === currentExercise.correctAnswer
                            ? 'bg-[#B4D700] text-[#440687]'
                            : selectedAnswer === idx && !isCorrect
                            ? 'bg-[#EF5350] text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {selectedAnswer !== null && idx === currentExercise.correctAnswer ? '✓' :
                           selectedAnswer === idx && !isCorrect ? '✗' :
                           String.fromCharCode(65 + idx)}
                        </div>
                        <p className="text-[15px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                          {option}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-[12px] ${
                    isCorrect ? 'bg-[#F6FFC7]' : 'bg-[#FFF3E0]'
                  }`}
                >
                  <p className={`text-[15px] font-bold mb-1 ${isCorrect ? 'text-[#440687]' : 'text-[#E65100]'}`}>
                    {isCorrect ? 'Correct! ✓' : 'Not quite ✗'}
                  </p>
                  <p className="text-gray-700 text-[14px]">{currentExercise.explanation}</p>
                </motion.div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleNextExercise}
                  className="w-full mt-4 py-3 bg-[#440687] text-white rounded-full text-[15px] shadow-md"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {currentExerciseIndex < totalExercises - 1 ? 'Next Question' : 'See Results'}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <Navigation />
      </div>
    );
  }

  // Complete Phase
  const stars = calculateStars(correctCount, totalExercises);
  const percentage = Math.round((correctCount / totalExercises) * 100);

  return (
    <div className="min-h-screen bg-[#F8F9FF] pb-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto px-4 w-full"
      >
        <div className="bg-white rounded-[20px] p-6 shadow-xl text-center">
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3].map((star) => (
              <motion.svg
                key={star}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: star * 0.2, type: 'spring' }}
                className={`w-12 h-12 ${stars >= star ? 'text-[#B4D700]' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </div>

          <h2 className="text-[24px] text-[#1F2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
            {stars === 3 ? 'Perfect!' : stars >= 2 ? 'Great Job!' : stars >= 1 ? 'Good Try!' : 'Keep Practicing!'}
          </h2>
          <p className="text-gray-500 text-[14px] mb-4">{lesson.title}</p>

          {/* Score */}
          <div className="bg-[#F8F9FF] rounded-[12px] p-4 mb-4">
            <div className="flex justify-around">
              <div>
                <p className="text-[28px] text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                  {correctCount}/{totalExercises}
                </p>
                <p className="text-gray-500 text-[12px]">Correct</p>
              </div>
              <div className="w-px bg-[#D8B4FE]" />
              <div>
                <p className="text-[28px] text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                  {percentage}%
                </p>
                <p className="text-gray-500 text-[12px]">Score</p>
              </div>
              <div className="w-px bg-[#D8B4FE]" />
              <div>
                <p className="text-[28px] text-[#B4D700]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                  +{lesson.xpReward}
                </p>
                <p className="text-gray-500 text-[12px]">XP</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleReplay}
              className="w-full py-3 bg-[#440687] text-white rounded-full text-[15px]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Try Again
            </button>
            <button
              onClick={() => router.push('/sentences')}
              className="w-full py-3 bg-white text-[#440687] border-2 border-[#9038EF] rounded-full text-[15px]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Back to Lessons
            </button>
          </div>
        </div>
      </motion.div>

      <Navigation />
    </div>
  );
}
