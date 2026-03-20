'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface NavItem {
  href: string;
  labelKey: string;
  icon: string;
  activeIcon: string;
  activeColor: string;
  iconScale?: number;
}

const navItemsConfig: NavItem[] = [
  {
    href: '/hangul',
    labelKey: 'hangul',
    icon: '/images/footer/icon_hangul_1.png',
    activeIcon: '/images/footer/icon_hangul_2.png',
    activeColor: '#FFFFFF',
  },
  {
    href: '/puzzle',
    labelKey: 'words',
    icon: '/images/footer/icon_words_1.png',
    activeIcon: '/images/footer/icon_words_2.png',
    activeColor: '#FFFFFF',
  },
  {
    href: '/sentences',
    labelKey: 'sentences',
    icon: '/images/footer/icon_sen_1.png',
    activeIcon: '/images/footer/icon_sen_2.png',
    activeColor: '#FFFFFF',
  },
  {
    href: '/culture',
    labelKey: 'emoji',
    icon: '/images/footer/icon_quiz_1.png',
    activeIcon: '/images/footer/icon_quiz_2.png',
    activeColor: '#FFFFFF',
  },
  {
    href: '/story',
    labelKey: 'story',
    icon: '/images/footer/icon_story_1.png',
    activeIcon: '/images/footer/icon_story_2.png',
    activeColor: '#FFFFFF',
  },
];

const navLabels: Record<string, Record<string, string>> = {
  en: { hangul: 'HANGUL', words: 'WORDS', sentences: 'SENTENCES', emoji: 'QUIZ', story: 'STORY' },
  es: { hangul: 'HANGUL', words: 'PALABRAS', sentences: 'FRASES', emoji: 'QUIZ', story: 'HISTORIA' },
  th: { hangul: 'ฮันกึล', words: 'คำศัพท์', sentences: 'ประโยค', emoji: 'QUIZ', story: 'เรื่องราว' },
  ja: { hangul: 'ハングル', words: 'ワード', sentences: '文法', emoji: 'QUIZ', story: 'ストーリー' },
  vi: { hangul: 'HANGUL', words: 'TỪ VỰNG', sentences: 'CÂU', emoji: 'QUIZ', story: 'STORY' },
  zh: { hangul: '韩文', words: '单词', sentences: '句子', emoji: 'QUIZ', story: '故事' },
  'zh-TW': { hangul: '韓文', words: '單詞', sentences: '句子', emoji: 'QUIZ', story: '故事' },
};

const ICON_SIZE_MOBILE = 30;
const ICON_SIZE_TABLET = 36;

export default function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const getLabel = (key: string) => navLabels[language]?.[key] || navLabels.en[key];

  const isActiveTab = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 rounded-t-2xl" style={{ backgroundColor: '#B4D700' }}>
      <div className="flex items-center justify-around max-w-4xl mx-auto py-3 md:py-4">
        {navItemsConfig.map((item) => {
          const isActive = isActiveTab(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 gap-0.5"
            >
              {/* Icon - 30px mobile, 36px tablet */}
              <div className="flex items-center justify-center w-[30px] h-[30px] md:w-[36px] md:h-[36px]">
                <Image
                  src={isActive ? item.activeIcon : item.icon}
                  alt={getLabel(item.labelKey)}
                  width={ICON_SIZE_TABLET}
                  height={ICON_SIZE_TABLET}
                  unoptimized
                  className="object-contain w-[30px] h-[30px] md:w-[36px] md:h-[36px]"
                />
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 900,
                  color: isActive ? item.activeColor : 'white',
                }}
              >
                {getLabel(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom,0px)]" style={{ backgroundColor: '#B4D700' }} />
    </nav>
  );
}
