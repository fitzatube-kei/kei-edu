import { en } from '@/data/translations/en';
import { es } from '@/data/translations/es';
import { th } from '@/data/translations/th';
import { ja } from '@/data/translations/ja';
import { vi } from '@/data/translations/vi';
import { zh } from '@/data/translations/zh';
import { zhTW } from '@/data/translations/zh-TW';

export type Language = 'en' | 'es' | 'th' | 'ja' | 'vi' | 'zh' | 'zh-TW';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '中文(简体)', flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '中文(繁體)', flag: '🇹🇼' },
];

export const translations = {
  en,
  es,
  th,
  ja,
  vi,
  zh,
  'zh-TW': zhTW,
} as const;

export type TranslationKeys = typeof en;

// Get nested translation value
export function getTranslation(
  lang: Language,
  path: string
): string {
  const keys = path.split('.');
  let value: unknown = translations[lang];

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return path; // Return path if not found
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : path;
}

// Get language from localStorage or browser
export function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('language');
  if (stored && languages.some(l => l.code === stored)) {
    return stored as Language;
  }
  return null;
}

// Save language to localStorage
export function setStoredLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
}

// Get browser language preference
export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language.split('-')[0];
  const supported = languages.find(l => l.code === browserLang);
  return supported ? supported.code : 'en';
}
