'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SpeakButtonProps {
  text: string;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
  isSpeaking?: boolean;
  speakingId?: string | null;
  onSpeak: (text: string, id?: string) => void;
  className?: string;
  showLabel?: boolean;
  labelText?: string;
}

export default function SpeakButton({
  text,
  id,
  size = 'md',
  isSpeaking = false,
  speakingId,
  onSpeak,
  className,
  showLabel = false,
  labelText = 'Listen',
}: SpeakButtonProps) {
  const isActive = isSpeaking && speakingId === id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSpeak(text, id);
  };

  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2',
          sizeClasses[size]
        )}
        aria-label="Listen to pronunciation"
        title="Listen to pronunciation"
      >
        {isActive ? (
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/story/bell02.png"
              alt="Speaking"
              fill
              className="object-contain"
            />
          </motion.div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src="/images/story/bell02.png"
              alt="Listen"
              fill
              className="object-contain"
            />
          </div>
        )}
      </motion.button>
      {showLabel && (
        <span className="text-sm text-gray-600">{labelText}</span>
      )}
    </div>
  );
}

// Speed toggle component for the header
interface SpeedToggleProps {
  speed: 'slow' | 'normal' | 'fast';
  onToggle: () => void;
  className?: string;
}

export function SpeedToggle({ speed, onToggle, className }: SpeedToggleProps) {
  const speedLabels = {
    slow: { icon: '🐢', label: 'Slow' },
    normal: { icon: '🏃', label: 'Normal' },
    fast: { icon: '⚡', label: 'Fast' },
  };

  const current = speedLabels[speed];

  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full',
        'bg-white/20 backdrop-blur text-white text-sm font-medium',
        'border border-white/30 hover:bg-white/30 transition-all',
        className
      )}
      title={`TTS Speed: ${current.label}`}
    >
      <span>{current.icon}</span>
      <span className="hidden sm:inline">{current.label}</span>
    </motion.button>
  );
}
