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
  iconActive: string;
  size: number;
}

const navItemsConfig: NavItem[] = [
  {
    href: '/main',
    labelKey: 'home',
    icon: '/images/intro_1/icon2/home1.png',
    iconActive: '/images/intro_1/icon2/home2.png',
    size: 26,
  },
  {
    href: '/hangul',
    labelKey: 'hangul',
    icon: '/images/intro_1/icon2/hangul1.png',
    iconActive: '/images/intro_1/icon2/hangul2.png',
    size: 26,
  },
  {
    href: '/puzzle',
    labelKey: 'puzzle',
    icon: '/images/intro_1/icon2/puzzle1.png',
    iconActive: '/images/intro_1/icon2/puzzle2.png',
    size: 26,
  },
  {
    href: '/story',
    labelKey: 'story',
    icon: '/images/intro_1/icon2/story1.png',
    iconActive: '/images/intro_1/icon2/story2.png',
    size: 26,
  },
  {
    href: '/culture',
    labelKey: 'culture',
    icon: '/images/intro_1/icon2/culture1.png',
    iconActive: '/images/intro_1/icon2/culture2.png',
    size: 26,
  },
];

// Localized labels for navigation
const navLabels: Record<string, Record<string, string>> = {
  en: { home: 'Home', hangul: 'Hangul', story: 'Story', puzzle: 'Puzzle', culture: 'K Quiz' },
  es: { home: 'Inicio', hangul: 'Hangul', story: 'Historia', puzzle: 'Puzzle', culture: 'K Quiz' },
  th: { home: 'หน้าแรก', hangul: 'ฮันกึล', story: 'เรื่องราว', puzzle: 'ปริศนา', culture: 'K Quiz' },
  ja: { home: 'ホーム', hangul: 'ハングル', story: 'ストーリー', puzzle: 'パズル', culture: 'K Quiz' },
  vi: { home: 'Trang chủ', hangul: 'Hangul', story: 'Câu chuyện', puzzle: 'Puzzle', culture: 'K Quiz' },
  zh: { home: '首页', hangul: '韩文', story: '故事', puzzle: '拼图', culture: 'K Quiz' },
};

export default function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const getLabel = (key: string) => {
    return navLabels[language]?.[key] || navLabels.en[key];
  };

  const isActiveTab = (href: string) => {
    if (href === '/main') {
      return pathname === '/' || pathname === '/main' || pathname.startsWith('/main/');
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{ backgroundColor: '#B4D700' }}
    >
      <div className="flex items-center justify-around h-[65px] sm:h-[70px] max-w-4xl mx-auto">
        {navItemsConfig.map((item) => {
          const isActive = isActiveTab(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1"
            >
              <Image
                src={isActive ? item.iconActive : item.icon}
                alt={getLabel(item.labelKey)}
                width={item.size}
                height={item.size}
                unoptimized
              />
              <span
                className={`text-[10px] mt-0.5 ${isActive ? 'font-bold text-[#440687]' : 'font-bold text-white'}`}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {getLabel(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="h-[env(safe-area-inset-bottom,0px)]" />
    </nav>
  );
}
