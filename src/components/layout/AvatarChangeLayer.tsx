'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';

const femaleAvatars = [
  '/images/avatar/avt001.png',
  '/images/avatar/avt002.png',
  '/images/avatar/avt003.png',
  '/images/avatar/avt004.png',
  '/images/avatar/avt005.png',
  '/images/avatar/avt006.png',
  '/images/avatar/avt007.png',
  '/images/avatar/avt008.png',
  '/images/avatar/avt009.png',
  '/images/avatar/avt010.png',
  '/images/avatar/avt011.png',
  '/images/avatar/avt012.png',
];

const maleAvatars = [
  '/images/avatar/avt001m.png',
  '/images/avatar/avt002m.png',
  '/images/avatar/avt003m.png',
  '/images/avatar/avt004m.png',
  '/images/avatar/avt005m.png',
  '/images/avatar/avt006m.png',
  '/images/avatar/avt007m.png',
  '/images/avatar/avt008m.png',
  '/images/avatar/avt009m.png',
  '/images/avatar/avt010m.png',
  '/images/avatar/avt011m.png',
  '/images/avatar/avt012m.png',
];

interface AvatarChangeLayerProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onAvatarChange: (avatar: string) => void;
}

export default function AvatarChangeLayer({
  isOpen,
  onClose,
  currentAvatar,
  onAvatarChange,
}: AvatarChangeLayerProps) {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);
  const [avatarGender, setAvatarGender] = useState<'female' | 'male'>('female');

  useEffect(() => {
    if (isOpen) {
      setSelectedAvatar(currentAvatar);
      if (currentAvatar.includes('m.png')) {
        setAvatarGender('male');
      } else {
        setAvatarGender('female');
      }
    }
  }, [isOpen, currentAvatar]);

  const handleSave = () => {
    localStorage.setItem('userAvatar', selectedAvatar);
    window.dispatchEvent(new CustomEvent('avatarChanged', { detail: selectedAvatar }));
    onAvatarChange(selectedAvatar);
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
            className="bg-white rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="text-xl font-bold text-[#440687] mb-1 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('settings.changeAvatar')}
            </h2>

            {/* User Nickname */}
            {user && (
              <p className="text-center text-gray-600 text-sm mb-4">
                {user.displayName || user.email?.split('@')[0] || 'User'}
              </p>
            )}
            {!user && <div className="mb-4" />}

            {/* Gender Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setAvatarGender('female')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                  avatarGender === 'female'
                    ? 'bg-[#440687] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {language === 'en' ? 'Female' : language === 'ja' ? '女性' : language.startsWith('zh') ? '女性' : language === 'es' ? 'Femenino' : language === 'vi' ? 'Nữ' : 'หญิง'}
              </button>
              <button
                onClick={() => setAvatarGender('male')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                  avatarGender === 'male'
                    ? 'bg-[#B4D700] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {language === 'en' ? 'Male' : language === 'ja' ? '男性' : language.startsWith('zh') ? '男性' : language === 'es' ? 'Masculino' : language === 'vi' ? 'Nam' : 'ชาย'}
              </button>
            </div>

            {/* Avatar Grid */}
            <div className="grid grid-cols-4 gap-3 justify-items-center max-h-[250px] overflow-y-auto py-2">
              {(avatarGender === 'female' ? femaleAvatars : maleAvatars).map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`relative w-14 h-14 rounded-full transition-all overflow-hidden ${
                    selectedAvatar === avatar
                      ? 'ring-2 ring-[#440687] ring-offset-2'
                      : ''
                  }`}
                >
                  <Image
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    fill
                    className="object-contain scale-[1.12]"
                    unoptimized
                  />
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl font-medium text-sm hover:bg-gray-50"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-3 bg-[#440687] text-white rounded-xl font-medium text-sm hover:bg-[#350569]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t('common.save')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
