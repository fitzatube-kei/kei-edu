'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTTS } from '@/hooks/useTTS';
import { useLanguage } from '@/context/LanguageContext';
import { getWordTranslation, SupportedLanguage } from '@/data/puzzle/wordTranslations';

interface PuzzleWord {
  id: string;
  korean: string;
  english: string;
  romanization?: string;
  category: string;
  difficulty: number;
}

interface WordPreviewProps {
  words: PuzzleWord[];
  levelNumber: number;
  onStartGame: () => void;
  onSkip: () => void;
  onExit: () => void;
}

export default function WordPreview({ words, levelNumber, onStartGame, onSkip, onExit }: WordPreviewProps) {
  const { language } = useLanguage();
  const { speak, speakAsync, speakingId, stop } = useTTS();
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const playAllCancelRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 20;
      setShowScrollHint(!atBottom && el.scrollHeight > el.clientHeight + 10);
    };
    check();
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const handleSpeak = useCallback((word: string, id: string) => {
    if (isPlayingAll) return;
    speak(word, id);
  }, [speak, isPlayingAll]);

  const handlePlayAll = useCallback(async () => {
    if (isPlayingAll) {
      playAllCancelRef.current = true;
      stop();
      setIsPlayingAll(false);
      return;
    }
    setIsPlayingAll(true);
    playAllCancelRef.current = false;
    for (let i = 0; i < words.length; i++) {
      if (playAllCancelRef.current) break;
      await speakAsync(words[i].korean, words[i].id);
      if (playAllCancelRef.current) break;
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    setIsPlayingAll(false);
  }, [isPlayingAll, words, speakAsync, stop]);

  const getTranslation = (word: PuzzleWord) => {
    return getWordTranslation(word.korean, language as SupportedLanguage) || word.english;
  };

  const WordCard = ({ word, index, stretch }: { word: PuzzleWord; index: number; stretch?: boolean }) => {
    const isActive = speakingId === word.id;
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.035 }}
        onClick={() => handleSpeak(word.korean, word.id)}
        className={`relative rounded-[clamp(10px,1.8vw,16px)] cursor-pointer transition-all flex flex-col items-center justify-center ${
          isActive ? 'bg-white/20 ring-2 ring-[#B4D700]' : 'bg-white/[0.08] active:bg-white/15'
        }`}
        style={{
          padding: 'clamp(8px,1.5vh,16px) clamp(10px,2vw,18px)',
          ...(stretch ? { flex: 1 } : {}),
        }}
      >
        {/* Number - top left */}
        <span
          className="absolute font-extrabold text-white/35"
          style={{
            top: 'clamp(4px,0.8vh,10px)',
            left: 'clamp(6px,1.2vw,14px)',
            fontSize: 'clamp(14px,2.2vh,22px)',
          }}
        >
          {index + 1}
        </span>

        {/* Speaker icon - top right */}
        <div
          className={`absolute transition-all ${
            isActive ? 'text-[#B4D700] scale-125' : 'text-white/30'
          }`}
          style={{
            top: 'clamp(4px,0.8vh,10px)',
            right: 'clamp(6px,1.2vw,14px)',
          }}
        >
          <svg
            className={isActive ? 'animate-pulse' : ''}
            style={{ width: 'clamp(20px,3vh,30px)', height: 'clamp(20px,3vh,30px)' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        </div>

        {/* Korean word - center, large */}
        <span
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(18px,3.5vh,36px)' }}
        >
          {word.korean}
        </span>

        {/* Romanization */}
        {word.romanization && (
          <span
            className="text-white/35 mt-[clamp(1px,0.3vh,4px)]"
            style={{ fontSize: 'clamp(9px,1.2vh,13px)' }}
          >
            {word.romanization}
          </span>
        )}

        {/* Translation */}
        <span
          className="text-[#B4D700] font-semibold mt-[clamp(2px,0.5vh,6px)] truncate max-w-full text-center"
          style={{ fontSize: 'clamp(11px,1.6vh,16px)' }}
        >
          {getTranslation(word)}
        </span>
      </motion.div>
    );
  };

  const half = Math.ceil(words.length / 2);
  const leftCol = words.slice(0, half);
  const rightCol = words.slice(half);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      {/* ===== Header ===== */}
      <div className="flex items-center justify-between mb-1 shrink-0">
        <button
          onClick={onExit}
          className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-white flex items-center justify-center"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[12px] md:text-[13px] font-bold bg-[#B4D700] text-[#1B0440] px-2.5 py-1 rounded-[8px]">
            Level {levelNumber}
          </span>
          <button
            onClick={handlePlayAll}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] text-[12px] md:text-[13px] font-bold transition-all ${
              isPlayingAll
                ? 'bg-[#FF6B6B] text-white'
                : 'bg-[#AE7DFD] text-[#1B0440]'
            }`}
          >
            {isPlayingAll ? (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
                Stop
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play All
              </>
            )}
          </button>
        </div>
      </div>

      {/* ===== Title ===== */}
      <div className="text-center mb-1 md:mb-2 shrink-0">
        <h2
          className="font-black text-white"
          style={{ fontSize: 'clamp(18px, 3vh, 28px)' }}
        >
          Preview Words
        </h2>
        <p className="text-white/45 text-[11px] md:text-[12px]">
          Tap a word to hear pronunciation
        </p>
      </div>

      {/* ===== Word Grid Area ===== */}
      <div
        ref={scrollRef}
        className="hide-scrollbar md:!overflow-hidden"
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',
          borderRadius: 'clamp(12px, 2vw, 18px)',
          background: 'rgba(138, 74, 239, 0.25)',
          padding: 'clamp(6px,0.8vh,10px)',
          position: 'relative',
        }}
      >
        {/* Mobile: 2-column compact grid, scrollable */}
        <div
          className="grid grid-cols-2 md:hidden"
          style={{ gap: 'clamp(4px,0.7vh,8px)' }}
        >
          {words.map((word, index) => (
            <WordCard key={word.id} word={word} index={index} />
          ))}
        </div>

        {/* Tablet: 2-column, cards stretch to fill */}
        <div
          className="hidden md:flex"
          style={{ height: '100%', gap: 'clamp(6px,1vh,10px)' }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(6px,1vh,10px)' }}>
            {leftCol.map((word, i) => (
              <WordCard key={word.id} word={word} index={i} stretch />
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(6px,1vh,10px)' }}>
            {rightCol.map((word, i) => (
              <WordCard key={word.id} word={word} index={half + i} stretch />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom: Scroll Arrow + Start Game ===== */}
      <div
        className="shrink-0"
        style={{
          background: 'linear-gradient(to top, #421785 60%, transparent)',
          marginTop: -40,
          paddingTop: 40,
          position: 'relative',
          zIndex: 10,
        }}
      >
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            transition={{ y: { repeat: Infinity, duration: 1.5 } }}
            className="flex justify-center mb-1"
          >
            <svg
              className="text-white/40"
              style={{ width: 'clamp(20px, 3vh, 32px)', height: 'clamp(20px, 3vh, 32px)' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </motion.div>
        )}

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onStartGame}
          className="w-full flex items-center justify-center gap-2 bg-[#B4D700] text-[#1B0440] rounded-[14px] font-bold transition-all"
          style={{
            padding: 'clamp(10px, 1.8vh, 16px) 0',
            fontSize: 'clamp(14px, 2vh, 17px)',
            marginBottom: 'clamp(4px, 1vh, 10px)',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Start Game
        </motion.button>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
