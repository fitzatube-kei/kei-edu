'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import { useAccessControl } from '@/hooks/useAccessControl';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import PremiumContentModal from '@/components/ui/PremiumContentModal';
import { TravelArea } from '@/types/travel';
import { getLocationsByArea } from '@/data/travel/locations';

interface AreaConfig {
  id: TravelArea;
  name: Record<string, string>;
  description: Record<string, string>;
  icon: string;
  color: string;
  difficulty: string;
  isPremium: boolean;
  locationCount: number;
}

const areaConfigs: AreaConfig[] = [
  {
    id: 'seoul',
    name: {
      en: 'Seoul Adventure',
      ja: 'ソウル冒険',
      zh: '首尔探险',
      th: 'ผจญภัยโซล',
      vi: 'Phiêu lưu Seoul',
      es: 'Aventura en Seúl',
    },
    description: {
      en: 'Explore the vibrant capital city! Learn essential Korean phrases for shopping, cafes, and transportation.',
      ja: '活気ある首都を探検！ショッピング、カフェ、交通機関で使える必須韓国語フレーズを学ぼう。',
      zh: '探索充满活力的首都！学习购物、咖啡馆和交通必备韩语短语。',
      th: 'สำรวจเมืองหลวงที่มีชีวิตชีวา! เรียนรู้วลีเกาหลีจำเป็นสำหรับการช้อปปิ้ง คาเฟ่ และการขนส่ง',
      vi: 'Khám phá thủ đô sôi động! Học các cụm từ tiếng Hàn cần thiết cho mua sắm, quán cà phê và giao thông.',
      es: '¡Explora la vibrante capital! Aprende frases coreanas esenciales para compras, cafés y transporte.',
    },
    icon: '🏙️',
    color: '#667eea',
    difficulty: 'Beginner',
    isPremium: false,
    locationCount: 8,
  },
  {
    id: 'busan',
    name: {
      en: 'Busan Beach',
      ja: '釜山ビーチ',
      zh: '釜山海滩',
      th: 'หาดปูซาน',
      vi: 'Bãi biển Busan',
      es: 'Playa de Busan',
    },
    description: {
      en: 'Visit Korea\'s second city! Discover beach culture, fresh seafood, and colorful villages.',
      ja: '韓国第二の都市へ！ビーチ文化、新鮮な海鮮、カラフルな村を発見しよう。',
      zh: '游览韩国第二大城市！发现海滩文化、新鲜海鲜和多彩的村庄。',
      th: 'เยี่ยมชมเมืองที่สองของเกาหลี! ค้นพบวัฒนธรรมชายหาด อาหารทะเลสด และหมู่บ้านสีสัน',
      vi: 'Thăm thành phố lớn thứ hai của Hàn Quốc! Khám phá văn hóa bãi biển, hải sản tươi và làng đầy màu sắc.',
      es: '¡Visita la segunda ciudad de Corea! Descubre la cultura playera, mariscos frescos y pueblos coloridos.',
    },
    icon: '🏖️',
    color: '#38bdf8',
    difficulty: 'Intermediate',
    isPremium: true,
    locationCount: 4,
  },
  {
    id: 'jeju',
    name: {
      en: 'Jeju Island',
      ja: '済州島',
      zh: '济州岛',
      th: 'เกาะเชจู',
      vi: 'Đảo Jeju',
      es: 'Isla Jeju',
    },
    description: {
      en: 'Explore the paradise island! Rent cars, take ferries, and discover volcanic wonders.',
      ja: '楽園の島を探検！レンタカー、フェリー、火山の驚異を発見しよう。',
      zh: '探索天堂之岛！租车、乘渡轮、发现火山奇观。',
      th: 'สำรวจเกาะสวรรค์! เช่ารถ นั่งเรือ และค้นพบปาฏิหาริย์ภูเขาไฟ',
      vi: 'Khám phá đảo thiên đường! Thuê xe, đi phà và khám phá kỳ quan núi lửa.',
      es: '¡Explora la isla paradisíaca! Alquila autos, toma ferries y descubre maravillas volcánicas.',
    },
    icon: '🏝️',
    color: '#22c55e',
    difficulty: 'Advanced',
    isPremium: true,
    locationCount: 3,
  },
];

export default function StoryPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, loading } = useProgress();
  const { unlockPro } = useDevMode();
  const { tier, limits } = useAccessControl();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const getText = (textObj: Record<string, string>) => textObj[language] || textObj.en;

  // Calculate total visited locations (would need to be loaded from progress)
  const totalLocations = areaConfigs.reduce((sum, area) => sum + area.locationCount, 0);
  const totalVisited = 0; // TODO: Load from progress

  const handleStartTravel = (area: TravelArea) => {
    // Guest: entire Story Mode blocked
    if (tier === 'guest') {
      setShowLoginModal(true);
      return;
    }
    // Free: only Seoul allowed, premium areas blocked
    if (tier === 'free' && area !== 'seoul') {
      setShowPremiumModal(true);
      return;
    }
    router.push(`/story/play?area=${area}`);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 pt-6 pb-0"
          >
            {/* Character Image */}
            <div className="relative w-[120px] h-[120px] xs:w-[150px] xs:h-[150px] sm:w-[187px] sm:h-[187px] md:w-[220px] md:h-[220px] shrink-0 ml-[5px]">
              <Image
                src="/images/story/crt_kei01.png"
                alt="Travel Guide KEI"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p
                className="text-[#440687] text-[11px] sm:text-[12px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                INTERACTIVE TRAVEL GAME
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {language === 'ja' ? '韓国旅行' :
                 language.startsWith('zh') ? '韩国旅行' :
                 language === 'th' ? 'ท่องเที่ยวเกาหลี' :
                 language === 'vi' ? 'Du lịch Hàn Quốc' :
                 language === 'es' ? 'Viaje a Corea' :
                 'Korea Travel'}
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {language === 'ja' ? '実際の旅行シーンで韓国語を学ぼう！' :
                 language.startsWith('zh') ? '在真实旅行场景中学习韩语！' :
                 language === 'th' ? 'เรียนภาษาเกาหลีในสถานการณ์ท่องเที่ยวจริง!' :
                 language === 'vi' ? 'Học tiếng Hàn trong các tình huống du lịch thực tế!' :
                 language === 'es' ? '¡Aprende coreano en escenarios de viaje reales!' :
                 'Learn Korean in real travel scenarios!'}
              </p>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[16px] p-5 mb-6 mt-4 shadow-lg border-l-4 border-l-[#B4D700]"
          >
            <p
              className="text-[#B4D700] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              YOUR JOURNEY
            </p>
            <h2
              className="text-[24px] text-[#1F2937] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {language === 'ja' ? '旅の記録' :
               language.startsWith('zh') ? '旅行记录' :
               language === 'th' ? 'บันทึกการเดินทาง' :
               language === 'vi' ? 'Hồ sơ Du lịch' :
               language === 'es' ? 'Tu Progreso' :
               'Travel Progress'}
            </h2>

            <div className="flex items-center justify-around">
              {/* Locations */}
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p
                    className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalVisited}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    / {totalLocations} {language === 'ja' ? '場所' : language.startsWith('zh') ? '地点' : 'Locations'}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-[#B4D700]/30" />

              {/* XP */}
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[48px] sm:h-[48px] bg-[#B4D700] rounded-lg flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p
                    className="text-[24px] xs:text-[28px] sm:text-[32px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    0
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    XP Earned
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Header */}
          <div className="mb-4">
            <p
              className="text-[#B4D700] text-sm mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              SELECT DESTINATION
            </p>
            <h2
              className="text-xl text-[#1F2937]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {language === 'ja' ? '旅先を選ぼう' :
               language.startsWith('zh') ? '选择目的地' :
               language === 'th' ? 'เลือกจุดหมาย' :
               language === 'vi' ? 'Chọn Điểm Đến' :
               language === 'es' ? 'Elige Tu Destino' :
               'Choose Your Destination'}
            </h2>
          </div>

          {/* Area Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {areaConfigs.map((area, index) => {
              // Guest: all areas locked. Free: only seoul. Premium: all.
              const isGuestLocked = !loading && tier === 'guest';
              const isPremiumLocked = !loading && area.isPremium && !progress.isPremium && !unlockPro;
              const isAreaLocked = isGuestLocked || isPremiumLocked;
              const locations = getLocationsByArea(area.id);

              return (
                <motion.button
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={!isAreaLocked ? { scale: 1.02, y: -4 } : {}}
                  whileTap={!isAreaLocked ? { scale: 0.98 } : {}}
                  onClick={() => handleStartTravel(area.id)}
                  className={`bg-white rounded-2xl p-6 shadow-md text-left w-full border-l-4 transition-all relative ${
                    isAreaLocked ? 'opacity-60' : 'hover:shadow-lg'
                  }`}
                  style={{ borderLeftColor: area.color }}
                >
                  {/* Badge */}
                  {area.isPremium ? (
                    <span
                      className="absolute top-4 right-4 bg-[#FF7E00] text-white text-xs px-3 py-1 rounded-full"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      PREMIUM
                    </span>
                  ) : tier === 'free' && area.id === 'seoul' ? (
                    <span
                      className="absolute top-4 right-4 bg-[#38B6FF] text-white text-xs px-3 py-1 rounded-full"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      Myeongdong Only
                    </span>
                  ) : (
                    <span
                      className="absolute top-4 right-4 bg-[#77B602] text-white text-xs px-3 py-1 rounded-full"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      FREE
                    </span>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ backgroundColor: `${area.color}20` }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      {area.icon}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs uppercase tracking-wider mb-1"
                        style={{ color: area.color, fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {area.difficulty}
                      </p>
                      <h3
                        className="text-lg text-[#1F2937] mb-1"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                      >
                        {getText(area.name)}
                      </h3>
                      <p
                        className="text-sm text-gray-600 line-clamp-2"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {getText(area.description)}
                      </p>
                    </div>
                  </div>

                  {/* Locations preview and Start button */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap flex-1">
                      {locations.slice(0, 4).map((loc) => (
                        <span
                          key={loc.id}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                        >
                          {loc.icon} {loc.romanization}
                        </span>
                      ))}
                      {locations.length > 4 && (
                        <span
                          className="text-gray-400 text-xs"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                        >
                          +{locations.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Start button */}
                    {!isAreaLocked && (
                      <span
                        className="px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap flex-shrink-0"
                        style={{ backgroundColor: area.color, fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      >
                        {language === 'ja' ? '旅を始める' :
                         language.startsWith('zh') ? '开始旅行' :
                         language === 'th' ? 'เริ่มเดินทาง' :
                         language === 'vi' ? 'Bắt đầu' :
                         language === 'es' ? 'Comenzar' :
                         'Start'} →
                      </span>
                    )}
                  </div>

                  {/* Lock overlay */}
                  {isAreaLocked && (
                    <div className="absolute inset-0 bg-gray-100/80 rounded-2xl flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        {isGuestLocked ? (
                          <>
                            <div className="w-10 h-10 bg-[#440687] rounded-full flex items-center justify-center">
                              <span className="text-xl">🔐</span>
                            </div>
                            <p className="text-sm text-[#440687] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                              Login Required
                            </p>
                          </>
                        ) : (
                          <>
                            <Image
                              src="/images/story/crown001.png"
                              alt="Premium"
                              width={40}
                              height={40}
                              unoptimized
                            />
                            <p className="text-sm text-[#B4D700] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}>
                              PRO Required
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* How to Play */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-[#440687] to-[#667eea] rounded-2xl p-6"
          >
            <h3
              className="text-white text-lg mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {language === 'ja' ? '遊び方' :
               language.startsWith('zh') ? '如何游玩' :
               language === 'th' ? 'วิธีเล่น' :
               language === 'vi' ? 'Cách Chơi' :
               language === 'es' ? 'Cómo Jugar' :
               'How to Play'}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl">✈️</span>
                <p className="text-white font-medium">
                  {language === 'ja' ? '仁川空港からスタート！' :
                   language.startsWith('zh') ? '从仁川机场出发！' :
                   language === 'th' ? 'เริ่มจากสนามบินอินชอน!' :
                   language === 'vi' ? 'Bắt đầu từ sân bay Incheon!' :
                   language === 'es' ? '¡Comienza desde el aeropuerto de Incheon!' :
                   'Start from Incheon Airport!'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <p className="text-white font-medium">
                  {language === 'ja' ? '行き先を選んで韓国語クイズに挑戦' :
                   language.startsWith('zh') ? '选择目的地并挑战韩语测验' :
                   language === 'th' ? 'เลือกจุดหมายและทำแบบทดสอบภาษาเกาหลี' :
                   language === 'vi' ? 'Chọn điểm đến và làm quiz tiếng Hàn' :
                   language === 'es' ? 'Elige destino y responde el quiz de coreano' :
                   'Choose a destination and take a Korean quiz'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🗣️</span>
                <p className="text-white font-medium">
                  {language === 'ja' ? '実際のシーンで使えるフレーズを学ぼう！' :
                   language.startsWith('zh') ? '学习实际场景中使用的短语！' :
                   language === 'th' ? 'เรียนรู้วลีที่ใช้ในสถานการณ์จริง!' :
                   language === 'vi' ? 'Học các cụm từ sử dụng trong tình huống thực tế!' :
                   language === 'es' ? '¡Aprende frases para usar en escenarios reales!' :
                   'Learn phrases you can use in real situations!'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Premium info - only show after loading completes and user is not premium */}
          {!loading && !progress.isPremium && !unlockPro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 bg-[#440687] rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Image
                    src="/images/story/crown001.png"
                    alt="Premium"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </motion.div>
                <div className="flex-1">
                  <p
                    className="text-white/70 text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    UPGRADE NOW
                  </p>
                  <h3
                    className="text-white text-lg mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {language === 'ja' ? '釜山と済州をアンロック！' :
                     language.startsWith('zh') ? '解锁釜山和济州！' :
                     language === 'th' ? 'ปลดล็อคปูซานและเชจู!' :
                     language === 'vi' ? 'Mở khóa Busan và Jeju!' :
                     language === 'es' ? '¡Desbloquea Busan y Jeju!' :
                     'Unlock Busan & Jeju!'}
                  </h3>
                  <p
                    className="text-sm text-white/80 mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {language === 'ja' ? 'プレミアムで海雲台ビーチ、済州島などを探検しよう！' :
                     language.startsWith('zh') ? '升级高级版，探索海云台海滩、济州岛等地！' :
                     language === 'th' ? 'อัปเกรดพรีเมียมเพื่อสำรวจหาดแฮอุนแด เกาะเชจู และอื่นๆ!' :
                     language === 'vi' ? 'Nâng cấp Premium để khám phá bãi biển Haeundae, đảo Jeju và hơn thế nữa!' :
                     language === 'es' ? '¡Actualiza a Premium para explorar la playa Haeundae, la isla Jeju y más!' :
                     'Upgrade to Premium to explore Haeundae Beach, Jeju Island, and more!'}
                  </p>
                  <button
                    onClick={() => router.push('/premium')}
                    className="inline-block bg-[#77B602] text-white px-4 py-2 rounded-lg text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {language === 'ja' ? '詳しく見る' :
                     language.startsWith('zh') ? '了解更多' :
                     language === 'th' ? 'ดูเพิ่มเติม' :
                     language === 'vi' ? 'Tìm hiểu thêm' :
                     language === 'es' ? 'Más información' :
                     'Learn More'} →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Navigation />

      {/* Modals */}
      <LoginRequiredModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <PremiumContentModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} />
    </div>
  );
}
