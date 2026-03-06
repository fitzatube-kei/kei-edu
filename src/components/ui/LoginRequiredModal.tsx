'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const loginTexts: Record<string, { title: string; message: string; cancel: string; login: string }> = {
  en: { title: 'Login Required', message: 'Please log in to access this content. Create a free account to unlock more levels!', cancel: 'Cancel', login: 'Log In' },
  ja: { title: 'ログインが必要です', message: 'このコンテンツにアクセスするにはログインしてください。無料アカウントを作成してレベルをアンロック！', cancel: 'キャンセル', login: 'ログイン' },
  zh: { title: '需要登录', message: '请登录以访问此内容。创建免费账户解锁更多关卡！', cancel: '取消', login: '登录' },
  'zh-TW': { title: '需要登入', message: '請登入以存取此內容。建立免費帳戶解鎖更多關卡！', cancel: '取消', login: '登入' },
  th: { title: 'ต้องเข้าสู่ระบบ', message: 'กรุณาเข้าสู่ระบบเพื่อเข้าถึงเนื้อหานี้ สร้างบัญชีฟรีเพื่อปลดล็อคเลเวลเพิ่มเติม!', cancel: 'ยกเลิก', login: 'เข้าสู่ระบบ' },
  vi: { title: 'Yêu cầu đăng nhập', message: 'Vui lòng đăng nhập để truy cập nội dung này. Tạo tài khoản miễn phí để mở khóa thêm cấp độ!', cancel: 'Hủy', login: 'Đăng nhập' },
  es: { title: 'Inicio de sesión requerido', message: 'Inicia sesión para acceder a este contenido. ¡Crea una cuenta gratis para desbloquear más niveles!', cancel: 'Cancelar', login: 'Iniciar sesión' },
};

export default function LoginRequiredModal({ isOpen, onClose }: LoginRequiredModalProps) {
  const router = useRouter();
  const { language } = useLanguage();

  const texts = loginTexts[language] || loginTexts.en;

  const handleLogin = () => {
    router.push('/login');
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
            {/* Lock Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#440687] to-[#9038EF] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔐</span>
            </div>

            {/* Title */}
            <h2
              className="text-xl font-bold text-[#1F2937] mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {texts.title}
            </h2>

            {/* Message */}
            <p
              className="text-gray-500 text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {texts.message}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {texts.cancel}
              </button>
              <button
                onClick={handleLogin}
                className="flex-1 py-3 bg-[#440687] text-white rounded-xl font-bold text-sm hover:bg-[#350569] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {texts.login}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
