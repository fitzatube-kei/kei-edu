'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'hangul' | 'history' | 'puzzle' | 'story' | 'culture' | 'locked';
}

const variantClasses = {
  default: 'bg-white border-gray-200',
  hangul: 'bg-gradient-to-br from-hangul-light to-primary-100 border-hangul-dark',
  history: 'bg-gradient-to-br from-history-light to-purple-100 border-history-dark',
  puzzle: 'bg-gradient-to-br from-puzzle-light to-blue-100 border-puzzle-dark',
  story: 'bg-gradient-to-br from-story-light to-yellow-100 border-story-dark',
  culture: 'bg-gradient-to-br from-culture-light to-red-100 border-culture-dark',
  locked: 'bg-gray-100 border-gray-300 opacity-60',
};

export default function Card({
  children,
  className,
  hover = false,
  onClick,
  variant = 'default',
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={cn(
        'rounded-card border-2 shadow-card p-5 transition-all duration-200',
        variantClasses[variant],
        hover && 'cursor-pointer hover:shadow-card-hover hover:border-gray-300',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Level Card Component
interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  stars: number;
  isLocked: boolean;
  isPremium: boolean;
  isCompleted: boolean;
  variant: 'hangul' | 'history' | 'puzzle' | 'story';
  onClick: () => void;
}

export function LevelCard({
  level,
  title,
  description,
  stars,
  isLocked,
  isPremium,
  isCompleted,
  variant,
  onClick,
}: LevelCardProps) {
  const cardVariant = isLocked ? 'locked' : variant;

  const badgeColors = {
    hangul: 'bg-hangul border-hangul-dark',
    history: 'bg-history border-history-dark',
    puzzle: 'bg-puzzle border-puzzle-dark',
    story: 'bg-story border-story-dark',
  };

  return (
    <Card
      variant={cardVariant}
      hover={!isLocked}
      onClick={isLocked ? undefined : onClick}
      className="relative"
    >
      {/* Level number badge */}
      <div
        className={cn(
          'absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-navy font-bold text-lg border-2',
          isLocked ? 'bg-gray-300 border-gray-400' : badgeColors[variant]
        )}
      >
        {level}
      </div>

      {/* Premium badge */}
      {isPremium && (
        <div className="absolute -top-2 -right-2 bg-secondary-500 text-navy px-2 py-1 rounded-btn text-xs font-bold border border-secondary-600">
          PRO
        </div>
      )}

      {/* Lock overlay */}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-card">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      )}

      <div className="mt-4">
        <h3 className={cn('text-lg font-heading font-bold mb-2', isLocked ? 'text-gray-400' : 'text-navy')}>
          {title}
        </h3>
        <p className={cn('text-sm mb-4', isLocked ? 'text-gray-400' : 'text-gray-600')}>
          {description}
        </p>

        {/* Stars */}
        <div className="flex gap-1">
          {[1, 2, 3].map((star) => (
            <svg
              key={star}
              className={cn(
                'w-5 h-5',
                star <= stars ? 'text-secondary-500' : 'text-gray-300'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {isCompleted && (
          <div className="mt-2 text-success text-sm font-medium flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Completed
          </div>
        )}
      </div>
    </Card>
  );
}
