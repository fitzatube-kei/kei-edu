'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getMessage, MessageType } from '@/data/character/messages';
import { cn } from '@/lib/utils';

export type Emotion = 'happy' | 'sad' | 'excited' | 'thinking' | 'celebrating' | 'default';
export type Position = 'top-right' | 'bottom-right' | 'bottom-left' | 'center' | 'inline';
export type Size = 'sm' | 'md' | 'lg' | 'xl';

interface HangeuliProps {
  emotion?: Emotion;
  message?: MessageType | string;
  customMessage?: string;
  position?: Position;
  size?: Size;
  showMessage?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
  onClick?: () => void;
  className?: string;
  animate?: boolean;
}

// Emoji mappings for each emotion
const emotionEmojis: Record<Emotion, string> = {
  default: '😺',
  happy: '😸',
  sad: '😿',
  excited: '😻',
  thinking: '🤔',
  celebrating: '🎉',
};

// Character animation variants
const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.3,
    },
  },
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  shake: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.4,
    },
  },
  celebrate: {
    scale: [1, 1.2, 1],
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.6,
    },
  },
};

// Message bubble animation variants
const bubbleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

// Size configurations
const sizeConfig: Record<Size, { emoji: string; bubble: string; container: string }> = {
  sm: {
    emoji: 'text-3xl',
    bubble: 'text-xs max-w-[150px] p-2',
    container: 'gap-2',
  },
  md: {
    emoji: 'text-5xl',
    bubble: 'text-sm max-w-[200px] p-3',
    container: 'gap-3',
  },
  lg: {
    emoji: 'text-7xl',
    bubble: 'text-base max-w-[250px] p-4',
    container: 'gap-4',
  },
  xl: {
    emoji: 'text-8xl',
    bubble: 'text-lg max-w-[300px] p-5',
    container: 'gap-5',
  },
};

// Position configurations
const positionConfig: Record<Position, string> = {
  'top-right': 'fixed top-24 right-4 z-40 flex-row-reverse',
  'bottom-right': 'fixed bottom-24 right-4 z-40 flex-row-reverse',
  'bottom-left': 'fixed bottom-24 left-4 z-40',
  'center': 'flex justify-center items-center',
  'inline': 'inline-flex',
};

export default function Hangeuli({
  emotion = 'default',
  message,
  customMessage,
  position = 'inline',
  size = 'md',
  showMessage = true,
  autoHide = false,
  autoHideDelay = 3000,
  onClick,
  className,
  animate = true,
}: HangeuliProps) {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState<string>('visible');

  // Get the message text
  const messageText = customMessage || (message ? getMessage(message as MessageType, language) : '');

  // Handle auto-hide
  useEffect(() => {
    if (autoHide && autoHideDelay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  // Set animation based on emotion
  useEffect(() => {
    if (!animate) return;

    switch (emotion) {
      case 'celebrating':
      case 'excited':
        setCurrentAnimation('celebrate');
        break;
      case 'sad':
        setCurrentAnimation('shake');
        break;
      case 'happy':
      case 'default':
        setCurrentAnimation('bounce');
        break;
      default:
        setCurrentAnimation('visible');
    }
  }, [emotion, animate]);

  const emoji = emotionEmojis[emotion];
  const sizeStyles = sizeConfig[size];
  const positionStyles = positionConfig[position];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'flex items-end',
            positionStyles,
            sizeStyles.container,
            className
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={characterVariants}
        >
          {/* Character */}
          <motion.div
            className={cn(
              'relative cursor-pointer select-none',
              onClick && 'hover:scale-110 transition-transform'
            )}
            onClick={onClick}
            animate={currentAnimation}
            variants={characterVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hanbok decoration (purple background) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-hangul to-hangul-dark rounded-full opacity-20 blur-md transform scale-110" />
              <span className={cn(sizeStyles.emoji, 'relative z-10 drop-shadow-lg')}>
                {emoji}
              </span>
            </div>

            {/* Small hanbok ribbon */}
            {size !== 'sm' && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-2 bg-hangul rounded-full shadow-sm" />
              </div>
            )}
          </motion.div>

          {/* Message Bubble */}
          {showMessage && messageText && (
            <motion.div
              className={cn(
                'relative bg-white rounded-2xl shadow-lg border-2 border-hangul/20',
                sizeStyles.bubble
              )}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Bubble pointer */}
              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-hangul/20 rotate-45',
                  position === 'top-right' || position === 'bottom-right'
                    ? 'right-[-7px] border-l-0 border-b-0'
                    : 'left-[-7px] border-r-0 border-t-0'
                )}
              />

              <p className="relative z-10 text-gray-700 font-medium leading-relaxed">
                {messageText}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Pre-configured character variants for common situations
export function HangeuliWelcome({ className }: { className?: string }) {
  return (
    <Hangeuli
      emotion="happy"
      message="welcome"
      size="lg"
      position="inline"
      className={className}
    />
  );
}

export function HangeuliCorrect({ className }: { className?: string }) {
  return (
    <Hangeuli
      emotion="celebrating"
      message="correct"
      size="md"
      position="inline"
      autoHide
      autoHideDelay={2000}
      className={className}
    />
  );
}

export function HangeuliIncorrect({ className }: { className?: string }) {
  return (
    <Hangeuli
      emotion="sad"
      message="incorrect"
      size="md"
      position="inline"
      autoHide
      autoHideDelay={2000}
      className={className}
    />
  );
}

export function HangeuliThinking({ className }: { className?: string }) {
  return (
    <Hangeuli
      emotion="thinking"
      message="thinking"
      size="sm"
      position="inline"
      showMessage={false}
      className={className}
    />
  );
}

export function HangeuliCelebrating({ className }: { className?: string }) {
  return (
    <Hangeuli
      emotion="celebrating"
      message="levelComplete"
      size="xl"
      position="inline"
      className={className}
    />
  );
}
