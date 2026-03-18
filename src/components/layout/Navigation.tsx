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
    icon: '/images/icon/ft_hangul001.png',
    activeIcon: '/images/icon/ft_hangul001_active.png',
    activeColor: '#7B2CBF',
    iconScale: 0.946,
  },
  {
    href: '/puzzle',
    labelKey: 'words',
    icon: '/images/icon/ft_puzzle001.png',
    activeIcon: '/images/icon/ft_puzzle001_active.png',
    activeColor: '#E65100',
  },
  {
    href: '/sentences',
    labelKey: 'sentences',
    icon: '/images/icon/ft_sentences001.png',
    activeIcon: '/images/icon/ft_sentences001_active.png',
    activeColor: '#627800',
  },
  {
    href: '/culture',
    labelKey: 'emoji',
    icon: '/images/icon/ft_emoji001.png',
    activeIcon: '/images/icon/ft_emoji001_active.png',
    activeColor: '#1B7D3A',
  },
  {
    href: '/story',
    labelKey: 'story',
    icon: '/images/icon/ft_story001.png',
    activeIcon: '/images/icon/ft_story001_active.png',
    activeColor: '#1565C0',
    iconScale: 0.86,
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

const ICON_SIZE = 36;

export default function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const getLabel = (key: string) => navLabels[language]?.[key] || navLabels.en[key];

  const isActiveTab = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40" style={{ backgroundColor: '#B4D700' }}>
      <div className="flex items-center justify-around max-w-4xl mx-auto py-2">
        {navItemsConfig.map((item) => {
          const isActive = isActiveTab(item.href);
          const itemIconSize = Math.round(ICON_SIZE * (item.iconScale || 1));

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 gap-0.5"
            >
              {/* Icon */}
              <div className="flex items-center justify-center" style={{ width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px` }}>
                <Image
                  src={isActive ? item.activeIcon : item.icon}
                  alt={getLabel(item.labelKey)}
                  width={itemIconSize}
                  height={itemIconSize}
                  unoptimized
                  className="object-contain"
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
