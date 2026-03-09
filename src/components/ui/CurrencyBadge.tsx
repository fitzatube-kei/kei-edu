'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCurrency } from '@/context/CurrencyContext';
import { useAuth } from '@/context/AuthContext';

export default function CurrencyBadge() {
  const { balance, loading } = useCurrency();
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return null;

  return (
    <motion.button
      onClick={() => router.push('/store')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
      style={{
        background: 'linear-gradient(135deg, #FF7E00, #FFB800)',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(255, 126, 0, 0.3)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span style={{ fontSize: '14px' }}>✦</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={balance}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {loading ? '...' : balance.toLocaleString()}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
