'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'navy' | 'hangul' | 'history' | 'outline' | 'ghost' | 'yellow' | 'sky' | 'purple' | 'coral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const variantClasses = {
  primary: 'bg-primary-500 text-navy border-primary-800 hover:bg-primary-400',
  secondary: 'bg-white text-navy border-gray-300 hover:bg-gray-50 hover:border-navy',
  navy: 'bg-navy text-white border-navy-light hover:bg-navy-light',
  hangul: 'bg-hangul text-navy border-hangul-dark hover:brightness-105',
  history: 'bg-history text-navy border-history-dark hover:brightness-105',
  outline: 'bg-transparent text-navy border-gray-300 hover:bg-gray-50',
  ghost: 'bg-transparent text-gray-700 border-transparent hover:bg-gray-100 hover:text-navy',
  yellow: 'bg-secondary-500 text-navy border-secondary-700 hover:bg-secondary-400',
  sky: 'bg-accent-sky text-navy border-puzzle-dark hover:brightness-105',
  purple: 'bg-purple-500 text-white border-purple-700 hover:bg-purple-400',
  coral: 'bg-accent-coral text-navy border-red-500 hover:brightness-105',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  type = 'button',
  onClick,
}: ButtonProps) {
  const isGhost = variant === 'ghost';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={disabled || loading ? {} : { y: -1 }}
      whileTap={disabled || loading ? {} : { y: 0 }}
      className={cn(
        'font-heading font-semibold flex items-center justify-center gap-2 rounded-btn transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        !isGhost && 'border-2 shadow-btn hover:shadow-card',
        isGhost && 'border-2',
        className
      )}
      style={{ fontFamily: 'Poppins, sans-serif' }}
      disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
}
