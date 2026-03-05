'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface PremiumContentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PremiumContentModal({ isOpen, onClose }: PremiumContentModalProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const handleSubscribe = () => {
    router.push('/premium');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white rounded-2xl p-6 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Crown Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF7E00] to-[#FF3D00] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👑</span>
            </div>

            {/* Title */}
            <h2
              className="text-xl font-bold text-[#1F2937] mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('premium.premiumRequired')}
            </h2>

            {/* Message */}
            <p
              className="text-gray-500 text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('premium.premiumMessage')}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t('premium.cancel')}
              </button>
              <button
                onClick={handleSubscribe}
                className="flex-1 py-3 bg-[#440687] text-white rounded-xl font-bold text-sm hover:bg-[#350569] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t('premium.subscribe')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
