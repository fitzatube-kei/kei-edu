'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { StoryEpisode, StoryScene, StoryChoice } from '@/types/story';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SpeakButton, { SpeedToggle } from '@/components/ui/SpeakButton';

interface StoryPlayerProps {
  episode: StoryEpisode;
  onComplete: (score: number, choices: string[]) => void;
}

export default function StoryPlayer({ episode, onComplete }: StoryPlayerProps) {
  const router = useRouter();
  const { language, t } = useLanguage();
  const { speak, stop, isSpeaking, speakingId, speed, toggleSpeed, isSupported } = useTTS();

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentScene, setCurrentScene] = useState<StoryScene>(episode.scenes[0]);
  const [selectedChoice, setSelectedChoice] = useState<StoryChoice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);
  const [choicesMade, setChoicesMade] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');

  // Get text in current language
  const getText = useCallback((multiText: Record<string, string>) => {
    return multiText[language] || multiText.en;
  }, [language]);

  // Extract Korean text from dialogue (text in quotes)
  const extractKoreanText = useCallback((dialogue: string): string | null => {
    // Match Korean text in quotes: "한글텍스트" or 「한글텍스트」
    const koreanMatch = dialogue.match(/["「]([가-힣\s,!?.]+)["」]/);
    if (koreanMatch) return koreanMatch[1];

    // If dialogue contains Korean and English, try to get just Korean
    const hasKorean = /[가-힣]/.test(dialogue);
    if (hasKorean) {
      // Extract Korean portions
      const koreanParts = dialogue.match(/[가-힣\s,!?.]+/g);
      if (koreanParts) {
        return koreanParts.join(' ').trim();
      }
    }

    return null;
  }, []);

  // Typewriter effect
  useEffect(() => {
    const fullText = getText(currentScene.dialogue);
    setDisplayedText('');
    setIsTyping(true);

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [currentScene, getText]);

  // Stop TTS when scene changes
  useEffect(() => {
    stop();
  }, [currentScene.id, stop]);

  // Skip typewriter
  const handleSkipTyping = () => {
    setDisplayedText(getText(currentScene.dialogue));
    setIsTyping(false);
  };

  // Handle choice selection
  const handleChoiceSelect = (choice: StoryChoice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
    setChoicesMade([...choicesMade, choice.id]);

    // Calculate score
    const choiceScore = choice.correctness === 'perfect' ? 100 : choice.correctness === 'good' ? 70 : 40;
    setScore(prev => prev + choiceScore);
  };

  // Continue to next scene
  const handleContinue = () => {
    setShowFeedback(false);
    setShowTeaching(false);
    stop(); // Stop any TTS

    const nextSceneId = selectedChoice?.nextSceneId || currentScene.nextSceneId;

    if (nextSceneId) {
      const nextScene = episode.scenes.find(s => s.id === nextSceneId);
      if (nextScene) {
        setCurrentScene(nextScene);
        setCurrentSceneIndex(prev => prev + 1);
        setSelectedChoice(null);
      }
    } else {
      // Episode complete
      onComplete(score, choicesMade);
    }
  };

  // Check if this is the last scene
  const isLastScene = !currentScene.choices && !currentScene.nextSceneId;

  // Get Korean text from current dialogue
  const dialogueKorean = extractKoreanText(getText(currentScene.dialogue));

  return (
    <div className="min-h-screen min-h-[100dvh] relative overflow-hidden">
      {/* Background */}
      <motion.div
        key={currentScene.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
        style={{ background: currentScene.background }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col p-3 sm:p-4 md:p-8">
        {/* Progress bar */}
        <div className="mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => {
                stop();
                router.push('/story');
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* TTS Speed Toggle */}
              {isSupported && (
                <SpeedToggle speed={speed} onToggle={toggleSpeed} />
              )}

              <span className="text-white/80 text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {episode.icon} {getText(episode.title)}
              </span>
            </div>
          </div>
          <div className="w-full h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#77B602] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSceneIndex + 1) / episode.scenes.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          {/* Character */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.character.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="mb-2"
                >
                  {currentScene.character.avatar.startsWith('/') ? (
                    <Image
                      src={currentScene.character.avatar}
                      alt={currentScene.character.name}
                      width={200}
                      height={200}
                      className="w-32 h-auto sm:w-40 md:w-48 mx-auto"
                      unoptimized
                    />
                  ) : (
                    <span className="text-5xl sm:text-6xl md:text-7xl">{currentScene.character.avatar}</span>
                  )}
                </motion.div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs sm:text-sm font-medium">
                  {currentScene.character.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dialogue bubble */}
          <motion.div
            key={currentScene.id + '-dialogue'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6 border-3 border-[#2d3436]"
            onClick={isTyping ? handleSkipTyping : undefined}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
              </div>

              {/* TTS button for dialogue */}
              {!isTyping && dialogueKorean && isSupported && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <SpeakButton
                    text={dialogueKorean}
                    id={`dialogue-${currentScene.id}`}
                    size="md"
                    isSpeaking={isSpeaking}
                    speakingId={speakingId}
                    onSpeak={speak}
                  />
                </motion.div>
              )}
            </div>

            {isTyping && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Tap to skip</p>
            )}
          </motion.div>

          {/* Choices or Continue button */}
          {!isTyping && !showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentScene.choices && currentScene.choices.length > 0 ? (
                <div className="space-y-2 sm:space-y-3">
                  {currentScene.choices.map((choice, index) => (
                    <motion.div
                      key={choice.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="relative"
                    >
                      <button
                        onClick={() => handleChoiceSelect(choice)}
                        className="w-full bg-white/90 backdrop-blur rounded-xl p-3 sm:p-4 text-left hover:bg-white hover:shadow-lg transition-all border-3 border-[#2d3436] shadow-[3px_3px_0_#2d3436] hover:shadow-[5px_5px_0_#2d3436] hover:-translate-y-0.5"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-800 text-base sm:text-lg mb-0.5 sm:mb-1">{choice.korean}</p>
                            <p className="text-gray-500 text-xs sm:text-sm">{choice.romanization}</p>
                            <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{getText(choice.translation)}</p>
                          </div>

                          {/* TTS button for choice */}
                          {isSupported && (
                            <div className="flex-shrink-0">
                              <SpeakButton
                                text={choice.korean}
                                id={`choice-${choice.id}`}
                                size="sm"
                                isSpeaking={isSpeaking}
                                speakingId={speakingId}
                                onSpeak={speak}
                              />
                            </div>
                          )}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleContinue}
                >
                  {isLastScene ? 'Complete Episode 🎉' : 'Continue →'}
                </Button>
              )}
            </motion.div>
          )}

          {/* Feedback panel */}
          <AnimatePresence>
            {showFeedback && selectedChoice && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className={cn(
                  'rounded-2xl p-4 sm:p-6 shadow-xl border-3 border-[#2d3436]',
                  selectedChoice.correctness === 'perfect' && 'bg-green-50',
                  selectedChoice.correctness === 'good' && 'bg-blue-50',
                  selectedChoice.correctness === 'awkward' && 'bg-orange-50'
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">
                    {selectedChoice.correctness === 'perfect' && '🌟'}
                    {selectedChoice.correctness === 'good' && '👍'}
                    {selectedChoice.correctness === 'awkward' && '😅'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={cn(
                      'font-bold mb-1 sm:mb-2 text-sm sm:text-base',
                      selectedChoice.correctness === 'perfect' && 'text-green-700',
                      selectedChoice.correctness === 'good' && 'text-blue-700',
                      selectedChoice.correctness === 'awkward' && 'text-orange-700'
                    )}>
                      {selectedChoice.correctness === 'perfect' && 'Perfect!'}
                      {selectedChoice.correctness === 'good' && 'Good!'}
                      {selectedChoice.correctness === 'awkward' && 'Understandable!'}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base">{getText(selectedChoice.feedback)}</p>
                  </div>
                </div>

                {/* Teaching section */}
                {currentScene.teaching && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setShowTeaching(!showTeaching)}
                      className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-700 transition-colors text-sm sm:text-base"
                    >
                      📚 {showTeaching ? 'Hide' : 'Show'} vocabulary & tips
                    </button>

                    {showTeaching && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 sm:mt-3 space-y-2 sm:space-y-3"
                      >
                        {/* Vocabulary */}
                        <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-[#2d3436] shadow-[2px_2px_0_#2d3436]">
                          <h5 className="font-bold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Vocabulary</h5>
                          <div className="space-y-2 sm:space-y-3">
                            {currentScene.teaching.vocabulary.map((vocab, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                              >
                                <div className="flex-1 min-w-0">
                                  <span className="font-bold text-purple-600 text-base sm:text-lg">{vocab.korean}</span>
                                  <span className="text-gray-500 ml-1 sm:ml-2 text-xs sm:text-sm">({vocab.romanization})</span>
                                  <p className="text-gray-600 text-xs sm:text-sm truncate">{getText(vocab.meaning)}</p>
                                </div>

                                {/* TTS button for vocabulary */}
                                {isSupported && (
                                  <div className="flex-shrink-0">
                                    <SpeakButton
                                      text={vocab.korean}
                                      id={`vocab-${i}`}
                                      size="sm"
                                      isSpeaking={isSpeaking}
                                      speakingId={speakingId}
                                      onSpeak={speak}
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Cultural note */}
                        {currentScene.teaching.culturalNote && (
                          <div className="bg-yellow-50 rounded-xl p-3 sm:p-4 border-2 border-[#2d3436] shadow-[2px_2px_0_#2d3436]">
                            <p className="text-yellow-800 text-sm sm:text-base">💡 {getText(currentScene.teaching.culturalNote)}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="mt-3 sm:mt-4"
                  onClick={handleContinue}
                >
                  Continue →
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Score display */}
        <div className="text-center mt-3 sm:mt-4">
          <span className="text-sm font-bold text-[#FFD700] bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {score}
          </span>
        </div>
      </div>
    </div>
  );
}
