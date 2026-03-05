'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  type = 'danger',
}: ConfirmModalProps) {
  const { language } = useLanguage();

  const defaultTexts = {
    title: language === 'en' ? 'Confirm' : '확인',
    confirm: language === 'en' ? 'Yes' : '네',
    cancel: language === 'en' ? 'No' : '아니요',
  };

  const typeStyles = {
    danger: {
      icon: '⚠️',
      confirmBg: 'bg-red-500 hover:bg-red-600',
    },
    warning: {
      icon: '⚠️',
      confirmBg: 'bg-yellow-500 hover:bg-yellow-600',
    },
    info: {
      icon: 'ℹ️',
      confirmBg: 'bg-blue-500 hover:bg-blue-600',
    },
  };

  const style = typeStyles[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
              {/* Icon */}
              <div className="text-center mb-4">
                <span className="text-4xl">{style.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-center text-[#1F1F39] mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                {title || defaultTexts.title}
              </h3>

              {/* Message */}
              <p className="text-gray-600 text-center mb-6 text-sm">
                {message}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
                >
                  {cancelText || defaultTexts.cancel}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl text-white font-bold text-sm transition-colors ${style.confirmBg}`}
                >
                  {confirmText || defaultTexts.confirm}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
