'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatchingPair, MultilingualMatchingPair, MultilingualText } from '@/types';
import { shuffleArray, cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/i18n';
import { useTTS } from '@/hooks/useTTS';
import { getHistoryTerm } from '@/data/history/translations';

interface MatchingGameProps {
  pairs?: MatchingPair[];
  multilingualPairs?: MultilingualMatchingPair[];
  variant: 'hangul' | 'history';
  onComplete: (score: number, correct: number, total: number) => void;
  onExit?: () => void;
}

interface CardItem {
  id: string;
  content: string;
  pairId: string;
  side: 'left' | 'right';
  isMatched: boolean;
  koreanContent?: string; // For audio playback
}

// Helper to get text from multilingual content
function getLocalizedText(content: MultilingualText | string, language: Language): string {
  if (typeof content === 'string') return content;
  return content[language] || content.en;
}

export default function MatchingGame({ pairs, multilingualPairs, variant, onComplete, onExit }: MatchingGameProps) {
  const { t, language } = useLanguage();
  const { speak } = useTTS();
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardItem[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showMismatch, setShowMismatch] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  // Calculate effective pairs - prefer multilingual if available
  const effectivePairs = useMemo(() => {
    if (multilingualPairs && multilingualPairs.length > 0) {
      return multilingualPairs;
    }
    return pairs || [];
  }, [pairs, multilingualPairs]);

  const pairsCount = effectivePairs.length;

  useEffect(() => {
    if (multilingualPairs && multilingualPairs.length > 0) {
      // Create cards from multilingual pairs
      const leftCards: CardItem[] = multilingualPairs.map((pair) => ({
        id: `${pair.id}-left`,
        content: pair.left,
        pairId: pair.id,
        side: 'left' as const,
        isMatched: false,
        koreanContent: pair.left, // For audio
      }));

      const rightCards: CardItem[] = multilingualPairs.map((pair) => ({
        id: `${pair.id}-right`,
        content: getLocalizedText(pair.right, language as Language),
        pairId: pair.id,
        side: 'right' as const,
        isMatched: false,
      }));

      setCards([...shuffleArray(leftCards), ...shuffleArray(rightCards)]);
    } else if (pairs && pairs.length > 0) {
      // Fallback to regular pairs
      // For history variant, translate Korean terms using getHistoryTerm
      const translateContent = (content: string) => {
        if (variant === 'history') {
          return getHistoryTerm(content, language);
        }
        return content;
      };

      const leftCards: CardItem[] = pairs.map((pair) => ({
        id: `${pair.id}-left`,
        content: translateContent(pair.left),
        pairId: pair.id,
        side: 'left' as const,
        isMatched: false,
        koreanContent: pair.left, // Keep original Korean for audio
      }));

      const rightCards: CardItem[] = pairs.map((pair) => ({
        id: `${pair.id}-right`,
        content: translateContent(pair.right),
        pairId: pair.id,
        side: 'right' as const,
        isMatched: false,
      }));

      setCards([...shuffleArray(leftCards), ...shuffleArray(rightCards)]);
    }
  }, [pairs, multilingualPairs, language, variant]);

  const handleCardClick = useCallback((card: CardItem) => {
    if (card.isMatched || showMismatch) return;
    if (selectedCards.length >= 2) return;
    if (selectedCards.find((c) => c.id === card.id)) return;

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setAttempts((prev) => prev + 1);

      const [first, second] = newSelected;
      const isMatch = first.pairId === second.pairId && first.side !== second.side;

      if (isMatch) {
        // Correct match - play the Korean pronunciation
        const leftCard = first.side === 'left' ? first : second;
        const koreanText = leftCard.koreanContent || leftCard.content;
        speak(koreanText);

        // Show match celebration
        setShowMatch(true);
        setTimeout(() => setShowMatch(false), 1500);

        setCards((prev) =>
          prev.map((c) =>
            c.pairId === first.pairId ? { ...c, isMatched: true } : c
          )
        );
        setMatchedCount((prev) => prev + 1);
        setScore((prev) => prev + 50);
        setSelectedCards([]);

        // Check completion
        if (matchedCount + 1 >= pairsCount) {
          setIsComplete(true);
          const finalScore = score + 50;
          onComplete(finalScore, matchedCount + 1, pairsCount);
        }
      } else {
        // Wrong match
        setShowMismatch(true);
        setTimeout(() => {
          setSelectedCards([]);
          setShowMismatch(false);
        }, 1000);
      }
    }
  }, [selectedCards, showMismatch, matchedCount, pairsCount, score, onComplete, speak]);

  const leftCards = cards.filter((c) => c.side === 'left');
  const rightCards = cards.filter((c) => c.side === 'right');

  const isSelected = (card: CardItem) => selectedCards.some((c) => c.id === card.id);

  const getCardStyle = (card: CardItem) => {
    if (card.isMatched) {
      return {
        className: 'bg-[#B4D700]/40 border-[#B4D700] text-[#B4D700]',
        shadow: 'none',
      };
    }
    if (isSelected(card)) {
      if (showMismatch) {
        return {
          className: 'bg-red-400 border-red-600 text-white animate-shake',
          shadow: '3px 3px 0px #991B1B',
        };
      }
      return {
        className: 'bg-[#B4D700] border-[#1B0440] text-[#1B0440]',
        shadow: '3px 3px 0px #1B0440',
      };
    }
    return {
      className: 'bg-[#AE7DFD] border-[#1B0440] text-white hover:bg-[#9D6AEC]',
      shadow: '3px 3px 0px #1B0440',
    };
  };

  if (isComplete) {
    return null; // LevelComplete component will be shown instead
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
              {matchedCount}/{pairsCount}
            </span>
            <span className="text-[13px] font-bold bg-[#AE7DFD] text-[#1B0440] px-3 py-1 rounded-[8px] flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {score}
            </span>
          </div>
        </div>

        {/* ===== PROGRESS BAR ===== */}
        <div className="w-full h-[8px] bg-[#1B0440] rounded-full overflow-hidden mb-4 flex-shrink-0">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(matchedCount / pairsCount) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-[#B4D700] rounded-full"
          />
        </div>

        {/* ===== MAIN GAME BOARD ===== */}
        <div className="flex-1 min-h-0 bg-[#8A4AEF] rounded-[20px] p-3 flex flex-col relative overflow-hidden">
          {/* Success Message */}
          <AnimatePresence>
            {showMatch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-[12px] left-0 right-0 flex items-center justify-center gap-2 z-10"
              >
                <div className="relative bg-white text-[#1B0440] px-4 py-1.5 rounded-[8px]">
                  <p className="text-[12px] font-bold">Well done!</p>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
                </div>
                <motion.img
                  src="/images/word/wb_crt002.png"
                  alt="Character"
                  className="w-[50px] h-auto"
                  animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          <AnimatePresence>
            {showMismatch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-[12px] left-0 right-0 text-center z-10"
              >
                <p className="text-white text-[13px] font-bold">Try again!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top spacer to push content to center */}
          <div className="flex-1 min-h-[20px]" />

          {/* Instructions */}
          <div className="text-center mb-4 flex-shrink-0">
            <p className="text-white/80 text-[15px] font-medium">
              {t('game.matchingInstruction')}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-3 pb-2">
            {/* Left column */}
            <div className="space-y-2.5">
              <AnimatePresence>
                {leftCards.map((card) => {
                  const style = getCardStyle(card);
                  return (
                    <motion.button
                      key={card.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={!card.isMatched ? { scale: 1.02 } : {}}
                      whileTap={!card.isMatched ? { scale: 0.98 } : {}}
                      onClick={() => handleCardClick(card)}
                      disabled={card.isMatched}
                      className={cn(
                        'w-full p-3 rounded-[12px] border-[2px] text-center transition-all',
                        style.className,
                        card.isMatched && 'cursor-default'
                      )}
                      style={{ boxShadow: style.shadow }}
                    >
                      <span className="text-[15px] font-bold">{card.content}</span>
                      {card.isMatched && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 inline-block"
                        >
                          <svg className="h-4 w-4 inline" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="space-y-2.5">
              <AnimatePresence>
                {rightCards.map((card) => {
                  const style = getCardStyle(card);
                  return (
                    <motion.button
                      key={card.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={!card.isMatched ? { scale: 1.02 } : {}}
                      whileTap={!card.isMatched ? { scale: 0.98 } : {}}
                      onClick={() => handleCardClick(card)}
                      disabled={card.isMatched}
                      className={cn(
                        'w-full p-3 rounded-[12px] border-[2px] text-center transition-all',
                        style.className,
                        card.isMatched && 'cursor-default'
                      )}
                      style={{ boxShadow: style.shadow }}
                    >
                      <span className="text-[15px] font-bold">{card.content}</span>
                      {card.isMatched && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 inline-block"
                        >
                          <svg className="h-4 w-4 inline" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom spacer to center content */}
          <div className="flex-1 min-h-[20px]" />

          {/* Stats */}
          <div className="pt-3 border-t border-white/20 flex-shrink-0">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <span className="text-white/60 text-[11px]">{t('game.attempts')}</span>
                <p className="text-white font-bold text-[16px]">{attempts}</p>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <span className="text-white/60 text-[11px]">{t('game.accuracy')}</span>
                <p className="text-[#B4D700] font-bold text-[16px]">
                  {attempts > 0 ? Math.round((matchedCount / attempts) * 100) : 0}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
