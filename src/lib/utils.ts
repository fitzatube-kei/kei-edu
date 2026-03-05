import { LevelProgress } from '@/types';

// Calculate stars based on score percentage
// hintsUsed reduces the maximum possible stars (-1 star per 2 hints used)
export function calculateStars(score: number, total: number, hintsUsed: number = 0): number {
  const percentage = (score / total) * 100;
  let stars = 0;

  if (percentage >= 90) stars = 3;
  else if (percentage >= 70) stars = 2;
  else if (percentage >= 50) stars = 1;

  // Reduce stars based on hints used (every 2 hints = -1 star)
  const hintPenalty = Math.floor(hintsUsed / 2);
  stars = Math.max(1, stars - hintPenalty); // Minimum 1 star if passed

  return percentage >= 50 ? stars : 0;
}

// Format time in mm:ss
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Shuffle array using Fisher-Yates algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Check if level is unlocked
export function isLevelUnlocked(level: number, progress: LevelProgress[]): boolean {
  if (level === 1) return true;
  const previousLevel = progress.find(p => p.level === level - 1);
  return previousLevel?.completed || false;
}

// Get total stars from progress
export function getTotalStars(progress: LevelProgress[]): number {
  return progress.reduce((total, p) => total + p.stars, 0);
}

// Calculate streak days
export function calculateStreakDays(lastPlayedAt: Date | null): number {
  if (!lastPlayedAt) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastPlayed = new Date(lastPlayedAt);
  lastPlayed.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - lastPlayed.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays <= 1 ? 1 : 0;
}

// Generate unique ID
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Class name utility
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Delay utility for animations
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Local storage helpers
export function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setToStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}
