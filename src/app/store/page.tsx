'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import PaywallModal from '@/components/ui/PaywallModal';
import { ContentId } from '@/types/iap';
import {
  CURRENCY_PACKS,
  SUBSCRIPTION_PLANS,
  CONTENT_COSTS,
  CONTENT_NAMES,
} from '@/data/iap/products';
import confetti from 'canvas-confetti';

const storeTranslations: Record<string, {
  title: string;
  currencyTab: string;
  subscriptionTab: string;
  contentTab: string;
  bestValue: string;
  buy: string;
  purchased: string;
  current: string;
  perMonth: string;
  perYear: string;
  save: string;
  features: Record<string, string>;
  unlocked: string;
  locked: string;
  loginRequired: string;
  pieces: string;
}> = {
  en: {
    title: 'Store',
    currencyTab: 'Hangul Pieces',
    subscriptionTab: 'Subscription',
    contentTab: 'Content',
    bestValue: 'BEST VALUE',
    buy: 'Buy',
    purchased: 'Purchased',
    current: 'Current Plan',
    perMonth: '/month',
    perYear: '/year',
    save: 'Save 33%',
    features: {
      beginner_content: 'Beginner Content',
      limited_levels: 'Limited Levels',
      all_content: 'All Content',
      no_ads: 'No Ads',
      priority_support: 'Priority Support',
      bonus_currency: 'Monthly Bonus ✦500',
    },
    unlocked: 'Unlocked',
    locked: 'Locked',
    loginRequired: 'Please login to access the store',
    pieces: 'pieces',
  },
  ko: {
    title: '상점',
    currencyTab: '한글조각',
    subscriptionTab: '구독',
    contentTab: '콘텐츠',
    bestValue: '최고 가성비',
    buy: '구매',
    purchased: '구매완료',
    current: '현재 플랜',
    perMonth: '/월',
    perYear: '/년',
    save: '33% 할인',
    features: {
      beginner_content: '초급 콘텐츠',
      limited_levels: '제한된 레벨',
      all_content: '모든 콘텐츠',
      no_ads: '광고 없음',
      priority_support: '우선 지원',
      bonus_currency: '월간 보너스 ✦500',
    },
    unlocked: '해금됨',
    locked: '잠김',
    loginRequired: '상점 이용은 로그인이 필요합니다',
    pieces: '조각',
  },
  ja: {
    title: 'ストア',
    currencyTab: 'ハングルピース',
    subscriptionTab: 'サブスク',
    contentTab: 'コンテンツ',
    bestValue: 'お得',
    buy: '購入',
    purchased: '購入済み',
    current: '現在のプラン',
    perMonth: '/月',
    perYear: '/年',
    save: '33%割引',
    features: {
      beginner_content: '初級コンテンツ',
      limited_levels: '制限レベル',
      all_content: '全コンテンツ',
      no_ads: '広告なし',
      priority_support: '優先サポート',
      bonus_currency: '月間ボーナス ✦500',
    },
    unlocked: '解放済み',
    locked: 'ロック中',
    loginRequired: 'ストアを利用するにはログインが必要です',
    pieces: 'ピース',
  },
  es: {
    title: 'Tienda',
    currencyTab: 'Piezas Hangul',
    subscriptionTab: 'Suscripción',
    contentTab: 'Contenido',
    bestValue: 'MEJOR VALOR',
    buy: 'Comprar',
    purchased: 'Comprado',
    current: 'Plan Actual',
    perMonth: '/mes',
    perYear: '/año',
    save: 'Ahorra 33%',
    features: {
      beginner_content: 'Contenido Principiante',
      limited_levels: 'Niveles Limitados',
      all_content: 'Todo el Contenido',
      no_ads: 'Sin Anuncios',
      priority_support: 'Soporte Prioritario',
      bonus_currency: 'Bono Mensual ✦500',
    },
    unlocked: 'Desbloqueado',
    locked: 'Bloqueado',
    loginRequired: 'Inicia sesión para acceder a la tienda',
    pieces: 'piezas',
  },
  zh: {
    title: '商店',
    currencyTab: '韩文碎片',
    subscriptionTab: '订阅',
    contentTab: '内容',
    bestValue: '超值',
    buy: '购买',
    purchased: '已购买',
    current: '当前方案',
    perMonth: '/月',
    perYear: '/年',
    save: '省33%',
    features: {
      beginner_content: '初级内容',
      limited_levels: '有限关卡',
      all_content: '全部内容',
      no_ads: '无广告',
      priority_support: '优先支持',
      bonus_currency: '每月奖励 ✦500',
    },
    unlocked: '已解锁',
    locked: '锁定',
    loginRequired: '请登录以访问商店',
    pieces: '碎片',
  },
  'zh-TW': {
    title: '商店',
    currencyTab: '韓文碎片',
    subscriptionTab: '訂閱',
    contentTab: '內容',
    bestValue: '超值',
    buy: '購買',
    purchased: '已購買',
    current: '目前方案',
    perMonth: '/月',
    perYear: '/年',
    save: '省33%',
    features: {
      beginner_content: '初級內容',
      limited_levels: '有限關卡',
      all_content: '全部內容',
      no_ads: '無廣告',
      priority_support: '優先支援',
      bonus_currency: '每月獎勵 ✦500',
    },
    unlocked: '已解鎖',
    locked: '鎖定',
    loginRequired: '請登入以訪問商店',
    pieces: '碎片',
  },
  vi: {
    title: 'Cửa hàng',
    currencyTab: 'Mảnh Hangul',
    subscriptionTab: 'Đăng ký',
    contentTab: 'Nội dung',
    bestValue: 'GIÁ TỐT',
    buy: 'Mua',
    purchased: 'Đã mua',
    current: 'Gói hiện tại',
    perMonth: '/tháng',
    perYear: '/năm',
    save: 'Tiết kiệm 33%',
    features: {
      beginner_content: 'Nội dung cơ bản',
      limited_levels: 'Cấp độ giới hạn',
      all_content: 'Tất cả nội dung',
      no_ads: 'Không quảng cáo',
      priority_support: 'Hỗ trợ ưu tiên',
      bonus_currency: 'Thưởng hàng tháng ✦500',
    },
    unlocked: 'Đã mở khóa',
    locked: 'Đã khóa',
    loginRequired: 'Vui lòng đăng nhập để truy cập cửa hàng',
    pieces: 'mảnh',
  },
  th: {
    title: 'ร้านค้า',
    currencyTab: 'ชิ้นฮันกึล',
    subscriptionTab: 'สมัครสมาชิก',
    contentTab: 'เนื้อหา',
    bestValue: 'คุ้มค่า',
    buy: 'ซื้อ',
    purchased: 'ซื้อแล้ว',
    current: 'แผนปัจจุบัน',
    perMonth: '/เดือน',
    perYear: '/ปี',
    save: 'ประหยัด 33%',
    features: {
      beginner_content: 'เนื้อหาเบื้องต้น',
      limited_levels: 'ด่านจำกัด',
      all_content: 'เนื้อหาทั้งหมด',
      no_ads: 'ไม่มีโฆษณา',
      priority_support: 'การสนับสนุนระดับพิเศษ',
      bonus_currency: 'โบนัสรายเดือน ✦500',
    },
    unlocked: 'ปลดล็อคแล้ว',
    locked: 'ล็อคอยู่',
    loginRequired: 'กรุณาเข้าสู่ระบบเพื่อเข้าถึงร้านค้า',
    pieces: 'ชิ้น',
  },
};

const CONTENT_IDS: ContentId[] = [
  'hangul_intermediate', 'hangul_advanced',
  'puzzle_intermediate', 'puzzle_advanced',
  'sentences_intermediate', 'sentences_advanced',
  'culture_kpop_hard', 'culture_kdrama_hard',
  'story_busan', 'story_jeju',
];

const CONTENT_ICONS: Record<ContentId, string> = {
  hangul_intermediate: '🔤',
  hangul_advanced: '📝',
  puzzle_intermediate: '🧩',
  puzzle_advanced: '🎯',
  sentences_intermediate: '📖',
  sentences_advanced: '💬',
  culture_kpop_hard: '🎵',
  culture_kdrama_hard: '🎬',
  story_busan: '🏖️',
  story_jeju: '🌴',
};

export default function StorePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const { language } = useLanguage();
  const { balance, addCurrency, isContentUnlocked } = useCurrency();
  const [activeTab, setActiveTab] = useState<'currency' | 'subscription' | 'content'>('currency');
  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [paywallContentId, setPaywallContentId] = useState<ContentId | null>(null);

  const t = storeTranslations[language] || storeTranslations.en;

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'subscription') setActiveTab('subscription');
    else if (tab === 'content') setActiveTab('content');
  }, [searchParams]);

  const handleBuyPack = async (packId: string, amount: number) => {
    if (!user) return;
    setPurchasing(packId);
    // Mock purchase delay
    await new Promise(resolve => setTimeout(resolve, 800));
    await addCurrency(amount);
    setPurchasing(null);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF7E00', '#FFB800', '#440687', '#38B6FF'],
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔒</div>
            <p className="text-gray-600 text-lg">{t.loginRequired}</p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Title + Balance */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #FF7E00, #FFB800)' }}
          >
            <span>✦</span>
            <span>{balance.toLocaleString()}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {(['currency', 'subscription', 'content'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              style={activeTab === tab ? { background: 'linear-gradient(135deg, #440687, #7B2FBE)' } : {}}
            >
              {tab === 'currency' ? t.currencyTab : tab === 'subscription' ? t.subscriptionTab : t.contentTab}
            </button>
          ))}
        </div>

        {/* Currency Packs Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'currency' && (
            <motion.div
              key="currency"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 gap-4"
            >
              {CURRENCY_PACKS.map((pack) => (
                <motion.div
                  key={pack.id}
                  className="relative bg-white rounded-2xl p-4 shadow-sm border-2 transition-all"
                  style={{
                    borderColor: pack.featured ? '#FF7E00' : 'transparent',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pack.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #FF7E00, #FFB800)' }}
                    >
                      {t.bestValue}
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-3xl mb-2" style={{ color: '#FF7E00' }}>✦</div>
                    <div className="text-xl font-bold text-gray-900">
                      {pack.currencyAmount?.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">{t.pieces}</div>
                    <button
                      onClick={() => handleBuyPack(pack.id, pack.currencyAmount || 0)}
                      disabled={purchasing === pack.id}
                      className="w-full py-2 rounded-xl font-semibold text-white text-sm transition-all"
                      style={{ background: 'linear-gradient(135deg, #38B6FF, #0090E0)' }}
                    >
                      {purchasing === pack.id ? '...' : `${t.buy} $${pack.priceUSD}`}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <motion.div
              key="subscription"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {(Object.entries(SUBSCRIPTION_PLANS) as [string, typeof SUBSCRIPTION_PLANS.free][]).map(([key, plan]) => {
                const isCurrent = key === 'free';
                const isAnnual = key === 'annual';
                return (
                  <motion.div
                    key={key}
                    className={`relative bg-white rounded-2xl p-5 shadow-sm border-2 ${
                      isAnnual ? 'border-[#440687]' : isCurrent ? 'border-[#B4D700]' : 'border-transparent'
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    {isAnnual && (
                      <div
                        className="absolute -top-3 right-4 px-3 py-0.5 rounded-full text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #440687, #7B2FBE)' }}
                      >
                        {t.save}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {plan.name[language] || plan.name.en}
                      </h3>
                      <div className="text-right">
                        {plan.priceUSD > 0 ? (
                          <div>
                            <span className="text-2xl font-bold text-[#440687]">${plan.priceUSD}</span>
                            <span className="text-sm text-gray-500">
                              {key === 'monthly' ? t.perMonth : t.perYear}
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-gray-400">$0</span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-[#B4D700]">✓</span>
                          {t.features[feature] || feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                        isCurrent
                          ? 'bg-gray-100 text-gray-500 cursor-default'
                          : 'text-white'
                      }`}
                      style={!isCurrent ? { background: 'linear-gradient(135deg, #440687, #7B2FBE)' } : {}}
                      disabled={isCurrent}
                    >
                      {isCurrent ? t.current : t.buy}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {CONTENT_IDS.map((id) => {
                const unlocked = isContentUnlocked(id);
                const name = CONTENT_NAMES[id]?.[language] || CONTENT_NAMES[id]?.en || id;
                const cost = CONTENT_COSTS[id];
                return (
                  <motion.button
                    key={id}
                    onClick={() => !unlocked && setPaywallContentId(id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm text-left transition-all ${
                      unlocked ? 'opacity-80' : 'hover:shadow-md'
                    }`}
                    whileHover={!unlocked ? { scale: 1.01 } : {}}
                    whileTap={!unlocked ? { scale: 0.99 } : {}}
                  >
                    <div className="text-3xl">{CONTENT_ICONS[id]}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{name}</div>
                      <div className="text-sm" style={{ color: '#FF7E00' }}>
                        ✦ {cost.toLocaleString()}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      unlocked
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {unlocked ? t.unlocked : t.locked}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PaywallModal
        isOpen={!!paywallContentId}
        onClose={() => setPaywallContentId(null)}
        contentId={paywallContentId}
      />

      <Navigation />
    </div>
  );
}
