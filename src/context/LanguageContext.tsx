'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Language,
  LanguageInfo,
  languages,
  translations,
  getStoredLanguage,
  setStoredLanguage,
  getTranslation,
} from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  languageInfo: LanguageInfo;
  languages: LanguageInfo[];
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  getText: (textObj: Record<string, string>) => string;
  isLanguageSelected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage
  useEffect(() => {
    const stored = getStoredLanguage();
    if (stored) {
      setLanguageState(stored);
      setIsLanguageSelected(true);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
    setIsLanguageSelected(true);
  }, []);

  const t = useCallback((path: string): string => {
    return getTranslation(language, path);
  }, [language]);

  const getText = useCallback((textObj: Record<string, string>): string => {
    return textObj[language] || textObj.en || '';
  }, [language]);

  const languageInfo = languages.find(l => l.code === language) || languages[0];

  // Don't render until initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageInfo,
        languages,
        setLanguage,
        t,
        getText,
        isLanguageSelected,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Hook for getting translations object directly
export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
