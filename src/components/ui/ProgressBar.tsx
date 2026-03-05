'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  total: number;
  variant?: 'default' | 'hangul' | 'history' | 'puzzle' | 'story';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantColors = {
  default: 'bg-primary-500',
  hangul: 'bg-hangul',
  history: 'bg-history',
  puzzle: 'bg-puzzle',
  story: 'bg-story',
};

const sizeClasses = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

export default function ProgressBar({
  current,
  total,
  variant = 'default',
  showLabel = false,
  size = 'md',
  className,
}: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm text-gray-600">
          <span>Progress</span>
          <span>
            {current} / {total}
          </span>
        </div>
      )}
      <div className={cn('w-full bg-gray-200 rounded-pill overflow-hidden border border-gray-300', sizeClasses[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={cn('h-full rounded-pill', variantColors[variant])}
        />
      </div>
    </div>
  );
}

// Circular Progress Component
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'hangul' | 'history' | 'puzzle' | 'story';
  showPercentage?: boolean;
}

const circularVariantColors = {
  default: '#63E6BE', // mint
  hangul: '#63E6BE', // mint
  history: '#B197FC', // purple
  puzzle: '#74C0FC', // sky
  story: '#FFD43B', // yellow
};

export function CircularProgress({
  percentage,
  size = 100,
  strokeWidth = 8,
  variant = 'default',
  showPercentage = true,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke={circularVariantColors[variant]}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showPercentage && (
        <span className="absolute text-lg font-bold text-navy">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
