'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface DevModeContextType {
  isDevMode: boolean;
  unlockPro: boolean;
  unlockAllLevels: boolean;
  setUnlockPro: (value: boolean) => void;
  setUnlockAllLevels: (value: boolean) => void;
  closeDevMode: () => void;
  resetProgress: () => Promise<void>;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [isDevMode, setIsDevMode] = useState(false);
  const [unlockPro, setUnlockPro] = useState(false);
  const [unlockAllLevels, setUnlockAllLevels] = useState(false);

  useEffect(() => {
    // Only enable in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('dev') === 'true') {
      setIsDevMode(true);
      setUnlockPro(true);
      setUnlockAllLevels(true);
    }
  }, []);

  const closeDevMode = useCallback(() => {
    setIsDevMode(false);
    setUnlockPro(false);
    setUnlockAllLevels(false);

    // Remove dev parameter from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('dev');
    window.history.replaceState({}, '', url.toString());
  }, []);

  const resetProgress = useCallback(async () => {
    // Clear localStorage progress data
    const keysToRemove = [
      'hangul-progress',
      'history-progress',
      'story-progress',
      'user-progress',
      'streak-data',
    ];

    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });

    // Reload the page to reflect changes
    window.location.reload();
  }, []);

  return (
    <DevModeContext.Provider
      value={{
        isDevMode,
        unlockPro,
        unlockAllLevels,
        setUnlockPro,
        setUnlockAllLevels,
        closeDevMode,
        resetProgress,
      }}
    >
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  if (context === undefined) {
    // Return default values if not in provider (for SSR or non-dev)
    return {
      isDevMode: false,
      unlockPro: false,
      unlockAllLevels: false,
      setUnlockPro: () => {},
      setUnlockAllLevels: () => {},
      closeDevMode: () => {},
      resetProgress: async () => {},
    };
  }
  return context;
}
