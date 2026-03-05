'use client';

import { useState, useCallback } from 'react';
import { Emotion } from '@/components/character/Hangeuli';
import { MessageType, getRandomMessage } from '@/data/character/messages';

interface HangeuliState {
  isVisible: boolean;
  emotion: Emotion;
  message: MessageType | null;
  customMessage: string | null;
}

interface UseHangeuliReturn {
  state: HangeuliState;
  show: (emotion?: Emotion, message?: MessageType | string) => void;
  hide: () => void;
  celebrate: (message?: MessageType) => void;
  correct: () => void;
  incorrect: () => void;
  think: () => void;
  reset: () => void;
}

export function useHangeuli(initialVisible = false): UseHangeuliReturn {
  const [state, setState] = useState<HangeuliState>({
    isVisible: initialVisible,
    emotion: 'default',
    message: null,
    customMessage: null,
  });

  const show = useCallback((emotion: Emotion = 'default', message?: MessageType | string) => {
    setState({
      isVisible: true,
      emotion,
      message: typeof message === 'string' ? null : message || null,
      customMessage: typeof message === 'string' ? message : null,
    });
  }, []);

  const hide = useCallback(() => {
    setState((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const celebrate = useCallback((message?: MessageType) => {
    setState({
      isVisible: true,
      emotion: 'celebrating',
      message: message || getRandomMessage('onComplete'),
      customMessage: null,
    });
  }, []);

  const correct = useCallback(() => {
    setState({
      isVisible: true,
      emotion: 'celebrating',
      message: getRandomMessage('onCorrect'),
      customMessage: null,
    });

    // Auto-hide after 2 seconds
    setTimeout(() => {
      setState((prev) => ({ ...prev, isVisible: false }));
    }, 2000);
  }, []);

  const incorrect = useCallback(() => {
    setState({
      isVisible: true,
      emotion: 'sad',
      message: getRandomMessage('onIncorrect'),
      customMessage: null,
    });

    // Auto-hide after 2 seconds
    setTimeout(() => {
      setState((prev) => ({ ...prev, isVisible: false }));
    }, 2000);
  }, []);

  const think = useCallback(() => {
    setState({
      isVisible: true,
      emotion: 'thinking',
      message: 'thinking',
      customMessage: null,
    });
  }, []);

  const reset = useCallback(() => {
    setState({
      isVisible: false,
      emotion: 'default',
      message: null,
      customMessage: null,
    });
  }, []);

  return {
    state,
    show,
    hide,
    celebrate,
    correct,
    incorrect,
    think,
    reset,
  };
}
