'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';
import { ContentId } from '@/types/iap';
import { CONTENT_COSTS, CONTENT_NAMES } from '@/data/iap/products';
import confetti from 'canvas-confetti';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentId: ContentId | null;
}

const modalTranslations: Record<string, {
  unlock: string;
  yourBalance: string;
  needed: string;
  unlockButton: string;
  topUp: string;
  subscribe: string;
  insufficient: string;
  success: string;
  cancel: string;
  or: string;
}> = {
  en: {
    unlock: 'Unlock Content',
    yourBalance: 'Your Balance',
    needed: 'Required',
    unlockButton: 'Unlock Now',
    topUp: 'Top Up',
    subscribe: 'Premium Subscribe',
    insufficient: 'Not enough Hangul Pieces',
    success: 'Unlocked!',
    cancel: 'Cancel',
    or: 'or',
  },
  ko: {
    unlock: '콘텐츠 잠금해제',
    yourBalance: '보유 한글조각',
    needed: '필요',
    unlockButton: '해금하기',
    topUp: '충전하기',
    subscribe: '프리미엄 구독',
    insufficient: '한글조각이 부족합니다',
    success: '잠금해제 완료!',
    cancel: '취소',
    or: '또는',
  },
  ja: {
    unlock: 'コンテンツ解放',
    yourBalance: '所持ピース',
    needed: '必要',
    unlockButton: '解放する',
    topUp: 'チャージ',
    subscribe: 'プレミアム購読',
    insufficient: 'ハングルピースが足りません',
    success: '解放完了！',
    cancel: 'キャンセル',
    or: 'または',
  },
  es: {
    unlock: 'Desbloquear Contenido',
    yourBalance: 'Tu Saldo',
    needed: 'Necesario',
    unlockButton: 'Desbloquear',
    topUp: 'Recargar',
    subscribe: 'Suscripción Premium',
    insufficient: 'Piezas Hangul insuficientes',
    success: '¡Desbloqueado!',
    cancel: 'Cancelar',
    or: 'o',
  },
  zh: {
    unlock: '解锁内容',
    yourBalance: '你的余额',
    needed: '需要',
    unlockButton: '立即解锁',
    topUp: '充值',
    subscribe: '高级订阅',
    insufficient: '韩文碎片不足',
    success: '已解锁！',
    cancel: '取消',
    or: '或',
  },
  'zh-TW': {
    unlock: '解鎖內容',
    yourBalance: '你的餘額',
    needed: '需要',
    unlockButton: '立即解鎖',
    topUp: '充值',
    subscribe: '高級訂閱',
    insufficient: '韓文碎片不足',
    success: '已解鎖！',
    cancel: '取消',
    or: '或',
  },
  vi: {
    unlock: 'Mở khóa nội dung',
    yourBalance: 'Số dư của bạn',
    needed: 'Cần',
    unlockButton: 'Mở khóa ngay',
    topUp: 'Nạp thêm',
    subscribe: 'Đăng ký Premium',
    insufficient: 'Không đủ Mảnh Hangul',
    success: 'Đã mở khóa!',
    cancel: 'Hủy',
    or: 'hoặc',
  },
  th: {
    unlock: 'ปลดล็อคเนื้อหา',
    yourBalance: 'ยอดคงเหลือ',
    needed: 'ต้องการ',
    unlockButton: 'ปลดล็อคเลย',
    topUp: 'เติมเงิน',
    subscribe: 'สมัครพรีเมียม',
    insufficient: 'ชิ้นฮันกึลไม่เพียงพอ',
    success: 'ปลดล็อคแล้ว!',
    cancel: 'ยกเลิก',
    or: 'หรือ',
  },
};

export default function PaywallModal({ isOpen, onClose, contentId }: PaywallModalProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const { balance, spendCurrency } = useCurrency();
  const [purchasing, setPurchasing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shaking, setShaking] = useState(false);

  if (!contentId) return null;

  const cost = CONTENT_COSTS[contentId];
  const contentName = CONTENT_NAMES[contentId]?.[language] || CONTENT_NAMES[contentId]?.en || contentId;
  const t = modalTranslations[language] || modalTranslations.en;
  const canAfford = balance >= cost;

  const handleUnlock = async () => {
    if (!canAfford) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }

    setPurchasing(true);
    const result = await spendCurrency(contentId, 'content');
    setPurchasing(false);

    if (result) {
      setSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7E00', '#FFB800', '#440687', '#38B6FF', '#B4D700'],
      });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: shaking ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {success ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="text-5xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-xl font-bold text-[#440687]">{t.success}</h3>
                <p className="text-gray-600 mt-2">{contentName}</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #440687, #7B2FBE)' }}>
                    <span className="text-3xl">🔓</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t.unlock}</h3>
                  <p className="text-sm text-gray-600 mt-1">{contentName}</p>
                </div>

                {/* Cost Info */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{t.needed}</span>
                    <span className="font-bold text-lg" style={{ color: '#FF7E00' }}>
                      ✦ {cost.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-gray-200" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{t.yourBalance}</span>
                    <span className={`font-bold text-lg ${canAfford ? 'text-green-600' : 'text-red-500'}`}>
                      ✦ {balance.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={handleUnlock}
                    disabled={purchasing}
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all"
                    style={{
                      background: canAfford
                        ? 'linear-gradient(135deg, #FF7E00, #FFB800)'
                        : '#d1d5db',
                      cursor: canAfford ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {purchasing ? '...' : canAfford ? `${t.unlockButton} (✦ ${cost})` : t.insufficient}
                  </button>

                  {!canAfford && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => { onClose(); router.push('/store'); }}
                        className="flex-1 py-2.5 rounded-xl font-semibold text-white text-sm"
                        style={{ background: 'linear-gradient(135deg, #FF7E00, #FFB800)' }}
                      >
                        {t.topUp}
                      </button>
                      <button
                        onClick={() => { onClose(); router.push('/store?tab=subscription'); }}
                        className="flex-1 py-2.5 rounded-xl font-semibold text-white text-sm"
                        style={{ background: 'linear-gradient(135deg, #440687, #7B2FBE)' }}
                      >
                        {t.subscribe}
                      </button>
                    </div>
                  )}

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl font-medium text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    {t.cancel}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
