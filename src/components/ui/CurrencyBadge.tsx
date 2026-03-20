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
      className="relative flex items-center justify-center gap-1 w-[62px] sm:w-[72px] px-[8px] py-[4px] sm:py-[5px] rounded-[8px] text-[9px] sm:text-[10px] mr-1"
      style={{
        background: '#B4D700',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 900,
        boxShadow: 'none',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span style={{ fontSize: '10px' }}>✦</span>
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
      {/* Speech bubble tail pointing right toward avatar */}
      <div
        className="absolute -right-[6px] top-1/2 -translate-y-1/2 w-0 h-0"
        style={{
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: '6px solid #B4D700',
        }}
      />
    </motion.button>
  );
}
