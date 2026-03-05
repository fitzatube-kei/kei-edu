'use client';

import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

// Tanglad Line 3D Style Guidelines:
// - ViewBox: 48x48
// - Stroke: 3-4px, round linecap
// - Outline: #2d3436
// - Fill: Gradient
// - Highlight: White semi-transparent

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 상태 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function LockIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Lock shackle */}
      <path
        d="M 17 20 L 17 14 A 7 7 0 0 1 31 14 L 31 20"
        fill="none"
        stroke="#2d3436"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 18 20 L 18 15 A 6 6 0 0 1 30 15 L 30 20"
        fill="none"
        stroke="url(#lockGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Lock body */}
      <rect x="10" y="19" width="28" height="22" rx="6" fill="#2d3436" />
      <rect x="11" y="20" width="26" height="20" rx="5" fill="url(#lockGrad)" />
      {/* Keyhole */}
      <circle cx="24" cy="29" r="3" fill="#2d3436" />
      <rect x="22.5" y="29" width="3" height="6" rx="1" fill="#2d3436" />
      {/* Highlight */}
      <ellipse cx="17" cy="25" rx="4" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function UnlockIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="unlockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
      {/* Open shackle */}
      <path
        d="M 17 20 L 17 14 A 7 7 0 0 1 31 14 L 31 8"
        fill="none"
        stroke="#2d3436"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 18 20 L 18 15 A 6 6 0 0 1 30 15 L 30 9"
        fill="none"
        stroke="url(#unlockGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Lock body */}
      <rect x="10" y="19" width="28" height="22" rx="6" fill="#2d3436" />
      <rect x="11" y="20" width="26" height="20" rx="5" fill="url(#unlockGrad)" />
      {/* Keyhole */}
      <circle cx="24" cy="29" r="3" fill="#2d3436" />
      <rect x="22.5" y="29" width="3" height="6" rx="1" fill="#2d3436" />
      {/* Highlight */}
      <ellipse cx="17" cy="25" rx="4" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function CheckIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pop' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="checkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
      {/* Circle background */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#checkGrad)" />
      {/* Checkmark */}
      <path
        d="M 14 24 L 21 31 L 34 18"
        fill="none"
        stroke="#2d3436"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 14 24 L 21 31 L 34 18"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="6" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 보상 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function StarIcon({ size = 48, className = '', animate = false, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pulse-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#fdcb6e" />
        </linearGradient>
        <linearGradient id="starGradEmpty" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
      </defs>
      {/* Star shape */}
      <path
        d="M 24 4 L 29 17 L 44 18 L 33 28 L 36 43 L 24 35 L 12 43 L 15 28 L 4 18 L 19 17 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 24 4 L 29 17 L 44 18 L 33 28 L 36 43 L 24 35 L 12 43 L 15 28 L 4 18 L 19 17 Z"
        fill={filled ? "url(#starGrad)" : "url(#starGradEmpty)"}
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Highlight */}
      {filled && <ellipse cx="20" cy="14" rx="4" ry="2" fill="white" opacity="0.4" />}
    </svg>
  );
}

export function CrownIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crownGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e67e22" />
        </linearGradient>
      </defs>
      {/* Crown shadow */}
      <path
        d="M 6 38 L 6 22 L 14 28 L 24 14 L 34 28 L 42 22 L 42 38 Z"
        fill="#2d3436"
        transform="translate(0, 2)"
      />
      {/* Crown body */}
      <path
        d="M 6 38 L 6 22 L 14 28 L 24 14 L 34 28 L 42 22 L 42 38 Z"
        fill="url(#crownGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Gems */}
      <circle cx="14" cy="32" r="3" fill="#e74c3c" stroke="#2d3436" strokeWidth="1" />
      <circle cx="24" cy="30" r="4" fill="#3498db" stroke="#2d3436" strokeWidth="1" />
      <circle cx="34" cy="32" r="3" fill="#2ecc71" stroke="#2d3436" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="18" cy="24" rx="5" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function TrophyIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#f39c12" />
        </linearGradient>
      </defs>
      {/* Cup body */}
      <path
        d="M 14 8 L 34 8 L 32 26 C 32 30 28 32 24 32 C 20 32 16 30 16 26 Z"
        fill="#2d3436"
        transform="translate(0, 2)"
      />
      <path
        d="M 14 8 L 34 8 L 32 26 C 32 30 28 32 24 32 C 20 32 16 30 16 26 Z"
        fill="url(#trophyGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Handles */}
      <path d="M 14 12 Q 6 12 6 20 Q 6 26 14 26" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      <path d="M 14 12 Q 8 12 8 20 Q 8 24 14 24" fill="none" stroke="url(#trophyGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 34 12 Q 42 12 42 20 Q 42 26 34 26" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      <path d="M 34 12 Q 40 12 40 20 Q 40 24 34 24" fill="none" stroke="url(#trophyGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* Base */}
      <rect x="20" y="32" width="8" height="6" fill="#2d3436" />
      <rect x="16" y="38" width="16" height="4" rx="2" fill="#2d3436" />
      <rect x="17" y="39" width="14" height="2" rx="1" fill="url(#trophyGrad)" />
      {/* Star */}
      <text x="24" y="22" textAnchor="middle" fontSize="10" fill="#2d3436" fontWeight="bold">★</text>
    </svg>
  );
}

export function FireIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#ffeaa7" />
        </linearGradient>
      </defs>
      {/* Fire shape */}
      <path
        d="M 24 4 C 24 4 32 14 32 24 C 32 28 30 32 30 32 C 32 28 34 26 36 28 C 38 32 38 36 34 42 C 30 46 18 46 14 42 C 10 36 10 32 12 28 C 14 26 16 28 18 32 C 18 32 16 28 16 24 C 16 14 24 4 24 4 Z"
        fill="#2d3436"
        transform="translate(0, 2)"
      />
      <path
        d="M 24 4 C 24 4 32 14 32 24 C 32 28 30 32 30 32 C 32 28 34 26 36 28 C 38 32 38 36 34 42 C 30 46 18 46 14 42 C 10 36 10 32 12 28 C 14 26 16 28 18 32 C 18 32 16 28 16 24 C 16 14 24 4 24 4 Z"
        fill="url(#fireGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Inner flame */}
      <path
        d="M 24 20 C 24 20 28 26 28 32 C 28 38 24 42 24 42 C 24 42 20 38 20 32 C 20 26 24 20 24 20 Z"
        fill="#ffeaa7"
      />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 오디오 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function SpeakerIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pulse-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="speakerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Speaker body */}
      <path
        d="M 8 18 L 16 18 L 28 8 L 28 40 L 16 30 L 8 30 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 8 18 L 16 18 L 28 8 L 28 40 L 16 30 L 8 30 Z"
        fill="url(#speakerGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Sound waves */}
      <path d="M 32 18 Q 38 24 32 30" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      <path d="M 32 18 Q 36 24 32 30" fill="none" stroke="url(#speakerGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 36 12 Q 44 24 36 36" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      <path d="M 36 12 Q 42 24 36 36" fill="none" stroke="url(#speakerGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="14" cy="22" rx="3" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function PlayIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pulse-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="playGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
      {/* Circle */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#playGrad)" />
      {/* Play triangle */}
      <path d="M 20 14 L 20 34 L 36 24 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 20 14 L 20 34 L 36 24 Z" fill="white" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="6" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

export function StopIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="stopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="100%" stopColor="#c44569" />
        </linearGradient>
      </defs>
      {/* Circle */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#stopGrad)" />
      {/* Stop square */}
      <rect x="16" y="16" width="16" height="16" rx="2" fill="#2d3436" transform="translate(0, 1)" />
      <rect x="16" y="16" width="16" height="16" rx="2" fill="white" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="6" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 학습 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function BookIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Book cover */}
      <rect x="8" y="6" width="32" height="38" rx="3" fill="#2d3436" transform="translate(0, 1)" />
      <rect x="8" y="6" width="32" height="38" rx="3" fill="url(#bookGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Pages */}
      <rect x="12" y="10" width="24" height="30" rx="2" fill="white" />
      {/* Text lines */}
      <rect x="16" y="16" width="16" height="2" rx="1" fill="#dfe6e9" />
      <rect x="16" y="22" width="14" height="2" rx="1" fill="#dfe6e9" />
      <rect x="16" y="28" width="16" height="2" rx="1" fill="#dfe6e9" />
      <rect x="16" y="34" width="10" height="2" rx="1" fill="#dfe6e9" />
      {/* Bookmark */}
      <path d="M 32 6 L 32 18 L 28 14 L 24 18 L 24 6 Z" fill="#e74c3c" />
    </svg>
  );
}

export function LightbulbIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pulse-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#fdcb6e" />
        </linearGradient>
      </defs>
      {/* Bulb shape */}
      <path
        d="M 24 4 C 14 4 8 12 8 20 C 8 28 16 32 16 36 L 32 36 C 32 32 40 28 40 20 C 40 12 34 4 24 4 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 24 4 C 14 4 8 12 8 20 C 8 28 16 32 16 36 L 32 36 C 32 32 40 28 40 20 C 40 12 34 4 24 4 Z"
        fill="url(#bulbGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Base */}
      <rect x="17" y="36" width="14" height="3" fill="#b2bec3" stroke="#2d3436" strokeWidth="1" />
      <rect x="18" y="39" width="12" height="2" fill="#b2bec3" stroke="#2d3436" strokeWidth="1" />
      <rect x="19" y="41" width="10" height="2" rx="1" fill="#b2bec3" stroke="#2d3436" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="5" ry="4" fill="white" opacity="0.4" />
      {/* Rays */}
      <line x1="24" y1="0" x2="24" y2="2" stroke="#fdcb6e" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="20" x2="6" y2="20" stroke="#fdcb6e" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="20" x2="44" y2="20" stroke="#fdcb6e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 네비게이션 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function HomeIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="homeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
      </defs>
      {/* House body */}
      <rect x="10" y="24" width="28" height="20" rx="2" fill="#2d3436" transform="translate(0, 1)" />
      <rect x="10" y="24" width="28" height="20" rx="2" fill="url(#homeGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Roof */}
      <path d="M 6 26 L 24 8 L 42 26 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 6 26 L 24 8 L 42 26 Z" fill="url(#roofGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Door */}
      <rect x="20" y="32" width="8" height="12" rx="1" fill="#2d3436" />
      <circle cx="26" cy="38" r="1" fill="#fdcb6e" />
      {/* Window */}
      <rect x="30" y="28" width="6" height="6" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="16" cy="28" rx="4" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function RocketIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
      </defs>
      {/* Rocket body */}
      <path
        d="M 24 4 C 24 4 16 12 16 24 L 16 34 L 24 40 L 32 34 L 32 24 C 32 12 24 4 24 4 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 24 4 C 24 4 16 12 16 24 L 16 34 L 24 40 L 32 34 L 32 24 C 32 12 24 4 24 4 Z"
        fill="url(#rocketGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Window */}
      <circle cx="24" cy="18" r="5" fill="#4facfe" stroke="#2d3436" strokeWidth="2" />
      <ellipse cx="22" cy="16" rx="2" ry="1.5" fill="white" opacity="0.5" />
      {/* Fins */}
      <path d="M 16 28 L 8 36 L 16 36 Z" fill="#e74c3c" stroke="#2d3436" strokeWidth="2" />
      <path d="M 32 28 L 40 36 L 32 36 Z" fill="#e74c3c" stroke="#2d3436" strokeWidth="2" />
      {/* Flame */}
      <path d="M 20 40 L 24 48 L 28 40 Z" fill="url(#flameGrad)" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 캐릭터/마스코트 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function HangeuliIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hangeuliGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Body/Circle */}
      <circle cx="24" cy="26" r="18" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#hangeuliGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="18" cy="22" rx="4" ry="5" fill="white" />
      <ellipse cx="30" cy="22" rx="4" ry="5" fill="white" />
      <circle cx="18" cy="23" r="2" fill="#2d3436" />
      <circle cx="30" cy="23" r="2" fill="#2d3436" />
      <circle cx="17" cy="22" r="1" fill="white" />
      <circle cx="29" cy="22" r="1" fill="white" />
      {/* Blush */}
      <ellipse cx="12" cy="28" rx="3" ry="2" fill="#ff6b9d" opacity="0.5" />
      <ellipse cx="36" cy="28" rx="3" ry="2" fill="#ff6b9d" opacity="0.5" />
      {/* Smile */}
      <path d="M 18 32 Q 24 38 30 32" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
      {/* Hangul ㄱ on forehead */}
      <text x="24" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ㄱ</text>
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 피드백 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function ThumbsUpIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="thumbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
      {/* Thumb */}
      <path
        d="M 18 18 L 18 8 C 18 4 22 4 24 8 L 28 18 L 38 18 C 42 18 42 26 38 26 L 38 28 C 42 28 42 36 38 36 L 36 36 C 38 36 38 42 34 42 L 20 42 C 16 42 14 38 14 34 L 14 26 C 14 22 16 18 18 18 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 18 18 L 18 8 C 18 4 22 4 24 8 L 28 18 L 38 18 C 42 18 42 26 38 26 L 38 28 C 42 28 42 36 38 36 L 36 36 C 38 36 38 42 34 42 L 20 42 C 16 42 14 38 14 34 L 14 26 C 14 22 16 18 18 18 Z"
        fill="url(#thumbGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Sleeve */}
      <rect x="6" y="20" width="10" height="24" rx="3" fill="#2d3436" />
      <rect x="7" y="21" width="8" height="22" rx="2" fill="#667eea" />
    </svg>
  );
}

export function PartyIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="partyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#f39c12" />
        </linearGradient>
      </defs>
      {/* Party hat */}
      <path d="M 24 4 L 10 40 L 38 40 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 24 4 L 10 40 L 38 40 Z" fill="url(#partyGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Stripes */}
      <path d="M 20 16 L 14 36" stroke="#e74c3c" strokeWidth="3" />
      <path d="M 28 16 L 34 36" stroke="#3498db" strokeWidth="3" />
      {/* Pom pom */}
      <circle cx="24" cy="6" r="4" fill="#e74c3c" stroke="#2d3436" strokeWidth="2" />
      {/* Confetti */}
      <rect x="6" y="8" width="3" height="3" rx="0.5" fill="#e74c3c" transform="rotate(20 6 8)" />
      <rect x="40" y="12" width="3" height="3" rx="0.5" fill="#3498db" transform="rotate(-15 40 12)" />
      <rect x="8" y="24" width="2" height="2" rx="0.5" fill="#2ecc71" transform="rotate(45 8 24)" />
      <rect x="38" y="28" width="2" height="2" rx="0.5" fill="#f39c12" transform="rotate(-30 38 28)" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 여행/스토리 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function AirplaneIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="planeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
      </defs>
      {/* Body */}
      <ellipse cx="24" cy="24" rx="20" ry="6" fill="#2d3436" transform="translate(0, 1)" />
      <ellipse cx="24" cy="24" rx="20" ry="6" fill="url(#planeGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Wings */}
      <path d="M 20 24 L 8 34 L 8 38 L 24 28 Z" fill="#667eea" stroke="#2d3436" strokeWidth="2" />
      <path d="M 28 24 L 40 34 L 40 38 L 24 28 Z" fill="#667eea" stroke="#2d3436" strokeWidth="2" />
      {/* Tail */}
      <path d="M 40 24 L 44 16 L 44 24 Z" fill="#667eea" stroke="#2d3436" strokeWidth="2" />
      {/* Windows */}
      <circle cx="14" cy="24" r="2" fill="#4facfe" />
      <circle cx="20" cy="24" r="2" fill="#4facfe" />
      <circle cx="26" cy="24" r="2" fill="#4facfe" />
      <circle cx="32" cy="24" r="2" fill="#4facfe" />
      {/* Highlight */}
      <ellipse cx="18" cy="21" rx="8" ry="2" fill="white" opacity="0.4" />
    </svg>
  );
}

export function CoffeeIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d35400" />
          <stop offset="100%" stopColor="#a04000" />
        </linearGradient>
      </defs>
      {/* Cup body */}
      <path d="M 10 14 L 10 36 C 10 42 16 44 24 44 C 32 44 38 42 38 36 L 38 14 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 10 14 L 10 36 C 10 42 16 44 24 44 C 32 44 38 42 38 36 L 38 14 Z" fill="url(#coffeeGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Coffee liquid */}
      <ellipse cx="24" cy="20" rx="12" ry="4" fill="url(#liquidGrad)" />
      {/* Handle */}
      <path d="M 38 18 Q 46 18 46 28 Q 46 38 38 38" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      <path d="M 38 20 Q 44 20 44 28 Q 44 36 38 36" fill="none" stroke="url(#coffeeGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* Steam */}
      <path d="M 18 8 Q 16 4 18 2" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      <path d="M 24 10 Q 22 6 24 4" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 8 Q 28 4 30 2" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="16" cy="26" rx="3" ry="6" fill="white" opacity="0.3" />
    </svg>
  );
}

export function FoodBowlIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="soupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e67e22" />
        </linearGradient>
      </defs>
      {/* Bowl */}
      <path d="M 6 20 L 6 28 C 6 40 14 44 24 44 C 34 44 42 40 42 28 L 42 20 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 6 20 L 6 28 C 6 40 14 44 24 44 C 34 44 42 40 42 28 L 42 20 Z" fill="url(#bowlGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Soup/content */}
      <ellipse cx="24" cy="22" rx="16" ry="6" fill="url(#soupGrad)" stroke="#2d3436" strokeWidth="1" />
      {/* Noodles/ingredients */}
      <path d="M 16 20 Q 18 24 20 20" fill="none" stroke="#ffeaa7" strokeWidth="2" strokeLinecap="round" />
      <path d="M 24 20 Q 26 24 28 20" fill="none" stroke="#ffeaa7" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 20 Q 34 24 32 22" fill="none" stroke="#ffeaa7" strokeWidth="2" strokeLinecap="round" />
      {/* Steam */}
      <path d="M 18 10 Q 16 6 18 4" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 10 Q 28 6 30 4" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="14" cy="30" rx="4" ry="6" fill="white" opacity="0.3" />
    </svg>
  );
}

export function HotelIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Building */}
      <rect x="8" y="12" width="32" height="34" rx="2" fill="#2d3436" transform="translate(0, 1)" />
      <rect x="8" y="12" width="32" height="34" rx="2" fill="url(#hotelGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Roof decoration */}
      <rect x="18" y="6" width="12" height="8" rx="1" fill="#e74c3c" stroke="#2d3436" strokeWidth="2" />
      <text x="24" y="12" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">H</text>
      {/* Windows - row 1 */}
      <rect x="12" y="18" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      <rect x="21" y="18" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      <rect x="30" y="18" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      {/* Windows - row 2 */}
      <rect x="12" y="26" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      <rect x="21" y="26" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      <rect x="30" y="26" width="6" height="5" rx="1" fill="#ffeaa7" stroke="#2d3436" strokeWidth="1" />
      {/* Door */}
      <rect x="19" y="36" width="10" height="10" rx="1" fill="#2d3436" />
      <circle cx="27" cy="41" r="1" fill="#fdcb6e" />
      {/* Highlight */}
      <ellipse cx="14" cy="20" rx="3" ry="1.5" fill="white" opacity="0.3" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 역사/문화 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function TempleIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="templeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
        <linearGradient id="roofGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
      </defs>
      {/* Base */}
      <rect x="8" y="38" width="32" height="6" rx="2" fill="#2d3436" />
      <rect x="9" y="39" width="30" height="4" rx="1" fill="url(#templeGrad)" />
      {/* Pillars */}
      <rect x="12" y="24" width="4" height="14" fill="#2d3436" />
      <rect x="13" y="25" width="2" height="13" fill="#ffeaa7" />
      <rect x="22" y="24" width="4" height="14" fill="#2d3436" />
      <rect x="23" y="25" width="2" height="13" fill="#ffeaa7" />
      <rect x="32" y="24" width="4" height="14" fill="#2d3436" />
      <rect x="33" y="25" width="2" height="13" fill="#ffeaa7" />
      {/* Main roof */}
      <path d="M 4 26 L 24 14 L 44 26 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 4 26 L 24 14 L 44 26 Z" fill="url(#roofGrad2)" stroke="#2d3436" strokeWidth="2" />
      {/* Top roof */}
      <path d="M 12 16 L 24 8 L 36 16 Z" fill="#2d3436" transform="translate(0, 1)" />
      <path d="M 12 16 L 24 8 L 36 16 Z" fill="url(#roofGrad2)" stroke="#2d3436" strokeWidth="2" />
      {/* Roof ornament */}
      <circle cx="24" cy="8" r="3" fill="#fdcb6e" stroke="#2d3436" strokeWidth="1" />
    </svg>
  );
}

export function ScrollIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#f5d79e" />
        </linearGradient>
      </defs>
      {/* Main scroll body */}
      <rect x="10" y="10" width="28" height="28" fill="url(#scrollGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Top roll */}
      <ellipse cx="24" cy="10" rx="14" ry="4" fill="#2d3436" />
      <ellipse cx="24" cy="10" rx="13" ry="3" fill="#d4a574" />
      {/* Bottom roll */}
      <ellipse cx="24" cy="38" rx="14" ry="4" fill="#2d3436" />
      <ellipse cx="24" cy="38" rx="13" ry="3" fill="#d4a574" />
      {/* Text lines */}
      <rect x="14" y="16" width="20" height="2" rx="1" fill="#2d3436" opacity="0.3" />
      <rect x="14" y="22" width="18" height="2" rx="1" fill="#2d3436" opacity="0.3" />
      <rect x="14" y="28" width="20" height="2" rx="1" fill="#2d3436" opacity="0.3" />
      <rect x="14" y="34" width="14" height="2" rx="1" fill="#2d3436" opacity="0.3" />
    </svg>
  );
}

export function MapPinIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mapPinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Pin body shadow */}
      <path
        d="M 24 4 C 14 4 8 12 8 20 C 8 32 24 46 24 46 C 24 46 40 32 40 20 C 40 12 34 4 24 4 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Pin body */}
      <path
        d="M 24 4 C 14 4 8 12 8 20 C 8 32 24 46 24 46 C 24 46 40 32 40 20 C 40 12 34 4 24 4 Z"
        fill="url(#mapPinGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Inner circle */}
      <circle cx="24" cy="20" r="8" fill="#2d3436" />
      <circle cx="24" cy="20" r="6" fill="white" />
      {/* Highlight */}
      <ellipse cx="18" cy="14" rx="5" ry="3" fill="white" opacity="0.4" />
    </svg>
  );
}

export function PaletteIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paletteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fa709a" />
          <stop offset="100%" stopColor="#fee140" />
        </linearGradient>
      </defs>
      {/* Palette shape shadow */}
      <path
        d="M 24 4 C 12 4 4 14 4 26 C 4 38 12 44 24 44 C 28 44 32 42 32 38 C 32 34 28 32 28 28 C 28 24 32 22 36 22 C 40 22 44 18 44 14 C 44 8 36 4 24 4 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Palette shape */}
      <path
        d="M 24 4 C 12 4 4 14 4 26 C 4 38 12 44 24 44 C 28 44 32 42 32 38 C 32 34 28 32 28 28 C 28 24 32 22 36 22 C 40 22 44 18 44 14 C 44 8 36 4 24 4 Z"
        fill="url(#paletteGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Color spots */}
      <circle cx="14" cy="20" r="4" fill="#e74c3c" stroke="#2d3436" strokeWidth="1" />
      <circle cx="12" cy="32" r="4" fill="#3498db" stroke="#2d3436" strokeWidth="1" />
      <circle cx="22" cy="36" r="3" fill="#2ecc71" stroke="#2d3436" strokeWidth="1" />
      <circle cx="20" cy="12" r="3" fill="#f39c12" stroke="#2d3436" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="4" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function SwordIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="swordBladeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="swordHandleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e67e22" />
        </linearGradient>
      </defs>
      {/* Blade shadow */}
      <path
        d="M 24 4 L 28 8 L 28 28 L 24 32 L 20 28 L 20 8 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Blade */}
      <path
        d="M 24 4 L 28 8 L 28 28 L 24 32 L 20 28 L 20 8 Z"
        fill="url(#swordBladeGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Guard */}
      <rect x="14" y="30" width="20" height="4" rx="2" fill="#2d3436" />
      <rect x="15" y="31" width="18" height="2" rx="1" fill="url(#swordHandleGrad)" />
      {/* Handle */}
      <rect x="21" y="34" width="6" height="10" rx="1" fill="#2d3436" />
      <rect x="22" y="35" width="4" height="8" rx="1" fill="#8B4513" />
      {/* Pommel */}
      <circle cx="24" cy="46" r="3" fill="#2d3436" />
      <circle cx="24" cy="45" r="2" fill="url(#swordHandleGrad)" />
      {/* Blade highlight */}
      <ellipse cx="23" cy="16" rx="2" ry="8" fill="white" opacity="0.4" />
    </svg>
  );
}

export function HanbokIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hanbokTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="hanbokSkirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
      </defs>
      {/* Skirt (치마) shadow */}
      <path
        d="M 8 22 L 12 44 L 36 44 L 40 22 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Skirt (치마) */}
      <path
        d="M 8 22 L 12 44 L 36 44 L 40 22 Z"
        fill="url(#hanbokSkirtGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Top (저고리) shadow */}
      <path
        d="M 16 8 L 14 22 L 24 26 L 34 22 L 32 8 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Top (저고리) */}
      <path
        d="M 16 8 L 14 22 L 24 26 L 34 22 L 32 8 Z"
        fill="url(#hanbokTopGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Collar (깃) */}
      <path d="M 20 8 L 24 16 L 28 8" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Ribbon (고름) */}
      <path d="M 24 18 L 20 28" stroke="#f39c12" strokeWidth="3" strokeLinecap="round" />
      <path d="M 24 18 L 28 28" stroke="#f39c12" strokeWidth="3" strokeLinecap="round" />
      {/* Ribbon knot */}
      <circle cx="24" cy="18" r="2" fill="#f39c12" stroke="#2d3436" strokeWidth="1" />
      {/* Skirt pattern */}
      <path d="M 16 30 L 14 40" stroke="#2980b9" strokeWidth="1" opacity="0.5" />
      <path d="M 24 28 L 24 42" stroke="#2980b9" strokeWidth="1" opacity="0.5" />
      <path d="M 32 30 L 34 40" stroke="#2980b9" strokeWidth="1" opacity="0.5" />
      {/* Highlight */}
      <ellipse cx="20" cy="14" rx="3" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function BowlIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bowlGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="riceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f5f5" />
        </linearGradient>
      </defs>
      {/* Bowl shadow */}
      <path
        d="M 6 22 C 6 22 6 38 24 38 C 42 38 42 22 42 22 L 6 22 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Bowl */}
      <path
        d="M 6 22 C 6 22 6 38 24 38 C 42 38 42 22 42 22 L 6 22 Z"
        fill="url(#bowlGrad2)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Rice mound */}
      <ellipse cx="24" cy="20" rx="16" ry="8" fill="url(#riceGrad)" stroke="#2d3436" strokeWidth="1" />
      {/* Rice texture */}
      <ellipse cx="18" cy="18" rx="2" ry="1" fill="#dfe6e9" />
      <ellipse cx="24" cy="16" rx="2" ry="1" fill="#dfe6e9" />
      <ellipse cx="30" cy="18" rx="2" ry="1" fill="#dfe6e9" />
      {/* Bowl base */}
      <ellipse cx="24" cy="40" rx="8" ry="3" fill="#2d3436" />
      <ellipse cx="24" cy="40" rx="7" ry="2" fill="url(#bowlGrad2)" />
      {/* Steam */}
      <path d="M 18 10 Q 16 6 18 4" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 10 Q 28 6 30 4" fill="none" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="14" cy="28" rx="4" ry="4" fill="white" opacity="0.3" />
    </svg>
  );
}

export function MountainIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#636e72" />
          <stop offset="100%" stopColor="#2d3436" />
        </linearGradient>
        <linearGradient id="snowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe6e9" />
        </linearGradient>
        <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
      </defs>
      {/* Back mountain */}
      <path
        d="M 2 42 L 18 14 L 34 42 Z"
        fill="url(#mountainGrad2)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Front mountain shadow */}
      <path
        d="M 12 42 L 30 8 L 46 42 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      {/* Front mountain */}
      <path
        d="M 12 42 L 30 8 L 46 42 Z"
        fill="url(#mountainGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Snow cap */}
      <path
        d="M 30 8 L 24 20 L 28 18 L 30 22 L 32 18 L 36 20 Z"
        fill="url(#snowGrad)"
        stroke="#2d3436"
        strokeWidth="1"
      />
      {/* Sun */}
      <circle cx="8" cy="10" r="5" fill="#f39c12" stroke="#2d3436" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="26" cy="26" rx="3" ry="4" fill="white" opacity="0.2" />
    </svg>
  );
}

export function MusicIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="musicGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
      </defs>
      {/* Staff line */}
      <path
        d="M 14 10 L 14 34"
        stroke="#2d3436"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 14 10 L 14 34"
        stroke="url(#musicGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Note head 1 */}
      <ellipse cx="10" cy="36" rx="6" ry="5" fill="#2d3436" transform="rotate(-20 10 36)" />
      <ellipse cx="10" cy="35" rx="5" ry="4" fill="url(#musicGrad)" transform="rotate(-20 10 35)" />
      {/* Second staff */}
      <path
        d="M 34 14 L 34 38"
        stroke="#2d3436"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 34 14 L 34 38"
        stroke="url(#musicGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Note head 2 */}
      <ellipse cx="30" cy="40" rx="6" ry="5" fill="#2d3436" transform="rotate(-20 30 40)" />
      <ellipse cx="30" cy="39" rx="5" ry="4" fill="url(#musicGrad)" transform="rotate(-20 30 39)" />
      {/* Beam connecting notes */}
      <path
        d="M 14 10 L 34 14"
        stroke="#2d3436"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 14 10 L 34 14"
        stroke="url(#musicGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 14 16 L 34 20"
        stroke="#2d3436"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 14 16 L 34 20"
        stroke="url(#musicGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Highlight */}
      <ellipse cx="10" cy="34" rx="2" ry="1.5" fill="white" opacity="0.4" />
    </svg>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 추가 UI 아이콘
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function HangulLetterIcon({ size = 48, className = '', animate = false, letter = 'ㄱ' }: IconProps & { letter?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="letterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Background circle */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" transform="translate(0, 1)" />
      <circle cx="24" cy="24" r="20" fill="url(#letterGrad)" stroke="#2d3436" strokeWidth="2" />
      {/* Letter */}
      <text x="24" y="32" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold" style={{ fontFamily: 'sans-serif' }}>{letter}</text>
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="6" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

export function SettingsIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b2bec3" />
          <stop offset="100%" stopColor="#636e72" />
        </linearGradient>
      </defs>
      {/* Gear teeth */}
      <path
        d="M 24 4 L 27 8 L 33 6 L 34 12 L 40 14 L 38 20 L 44 24 L 38 28 L 40 34 L 34 36 L 33 42 L 27 40 L 24 44 L 21 40 L 15 42 L 14 36 L 8 34 L 10 28 L 4 24 L 10 20 L 8 14 L 14 12 L 15 6 L 21 8 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 24 4 L 27 8 L 33 6 L 34 12 L 40 14 L 38 20 L 44 24 L 38 28 L 40 34 L 34 36 L 33 42 L 27 40 L 24 44 L 21 40 L 15 42 L 14 36 L 8 34 L 10 28 L 4 24 L 10 20 L 8 14 L 14 12 L 15 6 L 21 8 Z"
        fill="url(#gearGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Center hole */}
      <circle cx="24" cy="24" r="8" fill="#2d3436" />
      <circle cx="24" cy="24" r="6" fill="#dfe6e9" />
      {/* Highlight */}
      <ellipse cx="18" cy="14" rx="4" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function HeartIcon({ size = 48, className = '', animate = false, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-pulse-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="100%" stopColor="#c44569" />
        </linearGradient>
        <linearGradient id="heartGradEmpty" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
      </defs>
      {/* Heart shape */}
      <path
        d="M 24 42 C 24 42 6 30 6 18 C 6 10 12 6 18 6 C 22 6 24 10 24 10 C 24 10 26 6 30 6 C 36 6 42 10 42 18 C 42 30 24 42 24 42 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 24 42 C 24 42 6 30 6 18 C 6 10 12 6 18 6 C 22 6 24 10 24 10 C 24 10 26 6 30 6 C 36 6 42 10 42 18 C 42 30 24 42 24 42 Z"
        fill={filled ? "url(#heartGrad)" : "url(#heartGradEmpty)"}
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Highlight */}
      {filled && <ellipse cx="16" cy="16" rx="4" ry="3" fill="white" opacity="0.4" />}
    </svg>
  );
}

export function ArrowRightIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-bounce-3d' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Arrow body */}
      <path
        d="M 8 20 L 30 20 L 30 12 L 44 24 L 30 36 L 30 28 L 8 28 Z"
        fill="#2d3436"
        transform="translate(0, 1)"
      />
      <path
        d="M 8 20 L 30 20 L 30 12 L 44 24 L 30 36 L 30 28 L 8 28 Z"
        fill="url(#arrowGrad)"
        stroke="#2d3436"
        strokeWidth="2"
      />
      {/* Highlight */}
      <ellipse cx="18" cy="22" rx="6" ry="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function CloseIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="closeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="100%" stopColor="#c44569" />
        </linearGradient>
      </defs>
      {/* Circle background */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#closeGrad)" />
      {/* X mark */}
      <path d="M 16 16 L 32 32" stroke="#2d3436" strokeWidth="5" strokeLinecap="round" />
      <path d="M 32 16 L 16 32" stroke="#2d3436" strokeWidth="5" strokeLinecap="round" />
      <path d="M 16 16 L 32 32" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M 32 16 L 16 32" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="5" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

export function QuestionIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="questionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Circle background */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#questionGrad)" />
      {/* Question mark */}
      <path
        d="M 18 18 C 18 12 24 10 28 14 C 32 18 26 22 24 26"
        fill="none"
        stroke="#2d3436"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 18 18 C 18 12 24 10 28 14 C 32 18 26 22 24 26"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="34" r="3" fill="white" />
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="5" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

export function LanguageIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="langGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" />
          <stop offset="100%" stopColor="#38f9d7" />
        </linearGradient>
      </defs>
      {/* Globe */}
      <circle cx="24" cy="24" r="20" fill="#2d3436" />
      <circle cx="24" cy="24" r="18" fill="url(#langGrad)" />
      {/* Latitude lines */}
      <ellipse cx="24" cy="24" rx="18" ry="8" fill="none" stroke="#2d3436" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="#2d3436" strokeWidth="2" />
      {/* Center line */}
      <line x1="6" y1="24" x2="42" y2="24" stroke="#2d3436" strokeWidth="2" />
      {/* Text */}
      <text x="24" y="20" textAnchor="middle" fontSize="8" fill="#2d3436" fontWeight="bold">あ</text>
      <text x="24" y="32" textAnchor="middle" fontSize="8" fill="#2d3436" fontWeight="bold">A</text>
      {/* Highlight */}
      <ellipse cx="18" cy="16" rx="5" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

// Puzzle Icon
export function PuzzleIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-wiggle' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="puzzleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {/* Puzzle piece */}
      <path
        d="M 10 14 L 10 22 Q 6 22 6 26 Q 6 30 10 30 L 10 38 L 18 38 Q 18 42 22 42 Q 26 42 26 38 L 38 38 L 38 30 Q 42 30 42 26 Q 42 22 38 22 L 38 14 L 30 14 Q 30 10 26 10 Q 22 10 22 14 Z"
        fill="#2d3436"
        stroke="#2d3436"
        strokeWidth="2"
      />
      <path
        d="M 11 15 L 11 21 Q 7 21 7 25 Q 7 29 11 29 L 11 37 L 19 37 Q 19 41 23 41 Q 27 41 27 37 L 37 37 L 37 29 Q 41 29 41 25 Q 41 21 37 21 L 37 15 L 29 15 Q 29 11 25 11 Q 21 11 21 15 Z"
        fill="url(#puzzleGrad)"
      />
      {/* Highlight */}
      <ellipse cx="18" cy="22" rx="4" ry="3" fill="white" opacity="0.3" />
    </svg>
  );
}

// Refresh Icon
export function RefreshIcon({ size = 48, className = '', animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${className} ${animate ? 'animate-spin' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="refreshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Circular arrow */}
      <path
        d="M 24 8 A 16 16 0 1 1 8 24"
        fill="none"
        stroke="#2d3436"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 24 9 A 15 15 0 1 1 9 24"
        fill="none"
        stroke="url(#refreshGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <polygon points="24,4 32,12 24,12" fill="#2d3436" />
      <polygon points="24,5 30,11 24,11" fill="url(#refreshGrad)" />
    </svg>
  );
}

// Export all icons as a collection
export const Icons = {
  Lock: LockIcon,
  Unlock: UnlockIcon,
  Check: CheckIcon,
  Star: StarIcon,
  Crown: CrownIcon,
  Trophy: TrophyIcon,
  Fire: FireIcon,
  Speaker: SpeakerIcon,
  Play: PlayIcon,
  Stop: StopIcon,
  Book: BookIcon,
  Lightbulb: LightbulbIcon,
  Home: HomeIcon,
  Rocket: RocketIcon,
  Hangeuli: HangeuliIcon,
  ThumbsUp: ThumbsUpIcon,
  Party: PartyIcon,
  Airplane: AirplaneIcon,
  Coffee: CoffeeIcon,
  FoodBowl: FoodBowlIcon,
  Hotel: HotelIcon,
  Temple: TempleIcon,
  Scroll: ScrollIcon,
  HangulLetter: HangulLetterIcon,
  Settings: SettingsIcon,
  Heart: HeartIcon,
  ArrowRight: ArrowRightIcon,
  Close: CloseIcon,
  Question: QuestionIcon,
  Language: LanguageIcon,
  // 문화/역사 카테고리 아이콘
  MapPin: MapPinIcon,
  Palette: PaletteIcon,
  Sword: SwordIcon,
  Hanbok: HanbokIcon,
  Bowl: BowlIcon,
  Mountain: MountainIcon,
  Music: MusicIcon,
  Puzzle: PuzzleIcon,
  Refresh: RefreshIcon,
};

export default Icons;
