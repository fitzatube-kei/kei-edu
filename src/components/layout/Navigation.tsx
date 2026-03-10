'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const DEFAULT_AVATAR = '/images/avatar/avt001.png';

interface NavItem {
  href: string;
  labelKey: string;
  icon: string;
  isAvatar?: boolean;
}

const navItemsConfig: NavItem[] = [
  { href: '/hangul', labelKey: 'hangul', icon: '/images/icon/ft_hangul001.png' },
  { href: '/puzzle', labelKey: 'puzzle', icon: '/images/icon/ft_puzzle001.png' },
  { href: '/mypage', labelKey: 'my', icon: '', isAvatar: true },
  { href: '/culture', labelKey: 'emoji', icon: '/images/icon/ft_emoji001.png' },
  { href: '/story', labelKey: 'story', icon: '/images/icon/ft_story001.png' },
];

const navLabels: Record<string, Record<string, string>> = {
  en: { hangul: 'Hangule', puzzle: 'Puzzle', my: 'My', emoji: 'Emoji', story: 'Story' },
  es: { hangul: 'Hangul', puzzle: 'Puzzle', my: 'Mi', emoji: 'Emoji', story: 'Historia' },
  th: { hangul: 'ฮันกึล', puzzle: 'ปริศนา', my: 'My', emoji: 'Emoji', story: 'เรื่องราว' },
  ja: { hangul: 'ハングル', puzzle: 'パズル', my: 'My', emoji: 'Emoji', story: 'ストーリー' },
  vi: { hangul: 'Hangul', puzzle: 'Puzzle', my: 'My', emoji: 'Emoji', story: 'Câu chuyện' },
  zh: { hangul: '韩文', puzzle: '拼图', my: 'My', emoji: 'Emoji', story: '故事' },
  'zh-TW': { hangul: '韓文', puzzle: '拼圖', my: 'My', emoji: 'Emoji', story: '故事' },
};

// Base sizes (90% of previous)
const INACTIVE_CIRCLE = 38;
const INACTIVE_ICON = 26;
const ACTIVE_CIRCLE = 68;
const ACTIVE_ICON = 46;

export default function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [userAvatar, setUserAvatar] = useState(DEFAULT_AVATAR);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) setUserAvatar(savedAvatar);

    const handleAvatarChange = (e: Event) => {
      setUserAvatar((e as CustomEvent<string>).detail);
    };
    window.addEventListener('avatarChanged', handleAvatarChange);
    return () => window.removeEventListener('avatarChanged', handleAvatarChange);
  }, []);

  // Responsive scaling based on viewport width
  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      if (w >= 768) setScale(1.35);
      else if (w >= 640) setScale(1.2);
      else if (w >= 480) setScale(1.1);
      else setScale(1);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const getLabel = (key: string) => navLabels[language]?.[key] || navLabels.en[key];

  const isActiveTab = (href: string) => {
    if (href === '/mypage') return pathname === '/mypage' || pathname.startsWith('/mypage/');
    return pathname === href || pathname.startsWith(href + '/');
  };

  const s = (v: number) => Math.round(v * scale);
  const barHeight = s(65);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40" style={{ backgroundColor: '#B4D700' }}>
      <div
        className="flex items-end justify-around max-w-4xl mx-auto"
        style={{ height: `${barHeight}px` }}
      >
        {navItemsConfig.map((item) => {
          const isActive = isActiveTab(item.href);
          const isMobile = scale === 1;
          const baseCircle = isActive ? ACTIVE_CIRCLE : INACTIVE_CIRCLE;
          const circleSize = s(isActive && isMobile ? Math.round(baseCircle * 1.1) : baseCircle);
          const isPuzzleOrMy = item.labelKey === 'puzzle' || item.labelKey === 'my';
          const baseIcon = isActive ? ACTIVE_ICON : INACTIVE_ICON;
          const iconScale = isPuzzleOrMy ? (isActive ? 1.14 : 1.1) : 1;
          const iconSize = s(Math.round(baseIcon * iconScale));
          const isHangul = item.labelKey === 'hangul';

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-end flex-1"
              style={{
                paddingBottom: `${s(9)}px`,
                paddingLeft: isHangul ? (isActive && isMobile ? '7px' : '3px') : undefined,
              }}
            >
              {/* Circle with icon */}
              <div
                className="flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  backgroundColor: '#B7D52C',
                  marginTop: isActive ? `${-s(50)}px` : `${-s(14)}px`,
                  transition: 'all 0.2s ease',
                }}
              >
                {item.isAvatar ? (
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      width: `${iconSize}px`,
                      height: `${iconSize}px`,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Image
                      src={userAvatar}
                      alt="My"
                      width={iconSize}
                      height={iconSize}
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={item.icon}
                    alt={getLabel(item.labelKey)}
                    width={iconSize}
                    height={iconSize}
                    unoptimized
                    style={{
                      transition: 'all 0.2s ease',
                      marginTop: !isActive && isHangul ? '3px' : undefined,
                    }}
                  />
                )}
              </div>

              {/* Label: visible only when inactive */}
              {!isActive && (
                <span
                  className="text-white"
                  style={{
                    fontSize: `${s(13)}px`,
                    marginTop: `${s(2)}px`,
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 900,
                  }}
                >
                  {getLabel(item.labelKey)}
                </span>
              )}
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom,0px)]" style={{ backgroundColor: '#B4D700' }} />
    </nav>
  );
}
