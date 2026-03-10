'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  text: string;
  lang?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
  labelText?: string;
}

export default function AudioPlayer({
  text,
  lang = 'ko-KR',
  size = 'md',
  className,
  showLabel = false,
  labelText = 'Listen',
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  const playAudio = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.6; // Slower for learning
    utterance.pitch = 1;

    // Try to find a Korean voice
    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(
      (voice) => voice.lang.startsWith('ko') || voice.lang.includes('Korean')
    );
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsSupported(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [text, lang]);

  // Load voices when component mounts
  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      // Voices might not be loaded immediately
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    } else {
      setIsSupported(false);
    }
  }, []);

  if (!isSupported) {
    return (
      <div className={cn('flex items-center gap-2 text-gray-400', className)}>
        <span className={cn('flex items-center justify-center rounded-full bg-gray-100', sizeClasses[size])}>
          🔇
        </span>
        {showLabel && <span className="text-sm">Audio not supported</span>}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={playAudio}
        disabled={isPlaying}
        className={cn(
          'flex items-center justify-center rounded-full transition-all duration-200',
          'bg-[#4C1D95] text-white hover:bg-[#6B21A8] active:bg-[#7C3AED]',
          'shadow-lg hover:shadow-xl',
          'focus:outline-none focus:ring-2 focus:ring-[#4C1D95] focus:ring-offset-2',
          sizeClasses[size],
          isPlaying && 'animate-pulse bg-[#7C3AED]'
        )}
        aria-label={`Play pronunciation for ${text}`}
      >
        {isPlaying ? (
          <motion.img
            src="/images/icon/sound001_w.png"
            alt="sound"
            className="w-6 h-6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        ) : (
          <img src="/images/icon/sound001_w.png" alt="sound" className="w-6 h-6" />
        )}
      </motion.button>
      {showLabel && (
        <span className="text-sm text-gray-600">{labelText}</span>
      )}
    </div>
  );
}

// Hook for playing audio programmatically
export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback((text: string, lang: string = 'ko-KR') => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.6;

    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(
      (voice) => voice.lang.startsWith('ko') || voice.lang.includes('Korean')
    );
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, []);

  return { play, stop, isPlaying };
}
