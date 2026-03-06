'use client';

import { useState, useCallback, useEffect } from 'react';

export type TTSSpeed = 'slow' | 'normal' | 'fast';

const speedMap: Record<TTSSpeed, number> = {
  slow: 0.5,
  normal: 0.7,
  fast: 0.9,
};

// Helper to extract Korean text
function extractKoreanText(text: string): string {
  return text
    // eslint-disable-next-line no-control-regex
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '') // Remove emojis (surrogate pairs)
    .replace(/[\u2600-\u27BF]/g, '') // Remove misc symbols
    .replace(/\([^)]*\)/g, '') // Remove content in parentheses
    .replace(/\[[^\]]*\]/g, '') // Remove content in brackets
    .replace(/[~～_＿\-－—–]/g, '') // Remove special characters (~, _, -, etc.)
    .replace(/\.{2,}/g, '') // Remove multiple dots (...)
    .trim();
}

export function useTTS() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [speed, setSpeed] = useState<TTSSpeed>('normal');
  const [speedValue, setSpeedValue] = useState(0.7); // Numeric speed for slider
  const [isSupported, setIsSupported] = useState(true);

  // Check if Web Speech API is supported
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSupported('speechSynthesis' in window);
    }
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback((text: string, id?: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const koreanText = extractKoreanText(text);
    if (!koreanText) return;

    const utterance = new SpeechSynthesisUtterance(koreanText);
    utterance.lang = 'ko-KR';
    utterance.rate = speedValue;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to find Korean voice
    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(
      (voice) => voice.lang.includes('ko') || voice.lang.includes('KR')
    );
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingId(id || null);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingId(null);
    };

    utterance.onerror = (event) => {
      console.error('TTS error:', event);
      setIsSpeaking(false);
      setSpeakingId(null);
    };

    window.speechSynthesis.speak(utterance);
  }, [speedValue]);

  // Promise-based speak for sequential playback (e.g., Play All)
  const speakAsync = useCallback((text: string, id?: string): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        resolve();
        return;
      }

      window.speechSynthesis.cancel();

      const koreanText = extractKoreanText(text);
      if (!koreanText) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(koreanText);
      utterance.lang = 'ko-KR';
      utterance.rate = speedValue;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const koreanVoice = voices.find(
        (voice) => voice.lang.includes('ko') || voice.lang.includes('KR')
      );
      if (koreanVoice) {
        utterance.voice = koreanVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setSpeakingId(id || null);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setSpeakingId(null);
        resolve();
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setSpeakingId(null);
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  }, [speedValue]);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSpeakingId(null);
  }, []);

  const toggleSpeed = useCallback(() => {
    setSpeed((prev) => {
      if (prev === 'slow') return 'normal';
      if (prev === 'normal') return 'fast';
      return 'slow';
    });
  }, []);

  // Update speedValue when speed preset changes
  const handleSetSpeed = useCallback((newSpeed: TTSSpeed) => {
    setSpeed(newSpeed);
    setSpeedValue(speedMap[newSpeed]);
  }, []);

  return {
    speak,
    speakAsync,
    stop,
    isSpeaking,
    speakingId,
    speed,
    setSpeed: handleSetSpeed,
    speedValue,
    setSpeedValue,
    toggleSpeed,
    isSupported,
  };
}

// Standalone function for simple usage
export function speakKorean(text: string, rate: number = 0.7) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return;
  }

  window.speechSynthesis.cancel();

  const koreanText = text
    // eslint-disable-next-line no-control-regex
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '') // Remove emojis
    .replace(/[\u2600-\u27BF]/g, '') // Remove misc symbols
    .replace(/\([^)]*\)/g, '') // Remove content in parentheses
    .replace(/\[[^\]]*\]/g, '') // Remove content in brackets
    .replace(/[~～_＿\-－—–]/g, '') // Remove special characters (~, _, -, etc.)
    .replace(/\.{2,}/g, '') // Remove multiple dots (...)
    .trim();

  if (!koreanText) return;

  const utterance = new SpeechSynthesisUtterance(koreanText);
  utterance.lang = 'ko-KR';
  utterance.rate = rate;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}
