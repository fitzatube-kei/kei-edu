'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDevMode } from '@/context/DevModeContext';

export default function DevPanel() {
  const {
    isDevMode,
    unlockPro,
    unlockAllLevels,
    setUnlockPro,
    setUnlockAllLevels,
    closeDevMode,
    resetProgress,
  } = useDevMode();

  const [isMinimized, setIsMinimized] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Only show in development and when dev mode is active
  if (process.env.NODE_ENV !== 'development' || !isDevMode) {
    return null;
  }

  const handleResetProgress = async () => {
    if (showResetConfirm) {
      await resetProgress();
      setShowResetConfirm(false);
    } else {
      setShowResetConfirm(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-20 md:bottom-4 right-4 z-[9999]"
      >
        {isMinimized ? (
          <motion.button
            onClick={() => setIsMinimized(false)}
            className="bg-gray-900 text-white px-3 py-2 rounded-full shadow-lg border-2 border-yellow-400 flex items-center gap-2 hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🔧</span>
            <span className="text-sm font-bold">DEV</span>
          </motion.button>
        ) : (
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl border-2 border-yellow-400 overflow-hidden min-w-[240px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>🔧</span>
                <span className="font-black text-sm">DEV MODE</span>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-white/80 hover:text-white text-lg leading-none"
              >
                −
              </button>
            </div>

            {/* Options */}
            <div className="p-3 space-y-2">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={unlockPro}
                  onChange={(e) => setUnlockPro(e.target.checked)}
                  className="w-4 h-4 rounded accent-yellow-500"
                />
                <span className="text-sm font-semibold">Unlock All PRO</span>
                <span className="text-xs text-yellow-400 ml-auto">💎</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={unlockAllLevels}
                  onChange={(e) => setUnlockAllLevels(e.target.checked)}
                  className="w-4 h-4 rounded accent-yellow-500"
                />
                <span className="text-sm font-semibold">Unlock All Levels</span>
                <span className="text-xs text-green-400 ml-auto">🔓</span>
              </label>

              <div className="border-t border-white/20 my-2" />

              <button
                onClick={handleResetProgress}
                className={`w-full p-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                  showResetConfirm
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white/80'
                }`}
              >
                {showResetConfirm ? (
                  <>
                    <span>⚠️</span>
                    <span>Click again to confirm</span>
                  </>
                ) : (
                  <>
                    <span>🗑️</span>
                    <span>Reset Progress</span>
                  </>
                )}
              </button>

              {showResetConfirm && (
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="w-full p-2 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                >
                  Cancel
                </button>
              )}

              <div className="border-t border-white/20 my-2" />

              <button
                onClick={closeDevMode}
                className="w-full p-2 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white/60 transition-colors flex items-center justify-center gap-2"
              >
                <span>✕</span>
                <span>Close Dev Mode</span>
              </button>
            </div>

            {/* Footer hint */}
            <div className="bg-white/5 px-3 py-2 text-[10px] text-white/40 text-center">
              Add ?dev=true to URL to enable
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
