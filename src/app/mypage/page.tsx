'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useLanguage } from '@/context/LanguageContext';
import { useContent, Content, ScriptLine } from '@/context/ContentContext';
import { useProgress } from '@/hooks/useProgress';
import { useAuth } from '@/context/AuthContext';

// Available avatars
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

export default function MyPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { signOut, user } = useAuth();
  const { progress } = useProgress();
  const {
    getMyContents,
    deleteContent,
    updateContentVisibility,
    currentUserSubscription,
    setUserName,
    setUserEmail,
  } = useContent();

  // Use Firebase Auth user data for display (synchronized with header)
  const displayName = user?.displayName || '';
  const displayEmail = user?.email || '';

  // Calculate curriculum progress
  const hangulCompleted = progress.hangulProgress.filter(p => p.completed).length;
  const hangulTotal = 60; // Total Hangul levels
  const puzzleCompleted = progress.puzzleProgress?.filter(p => p.completed).length || 0;
  const puzzleTotal = 30; // Approximate total puzzle levels
  const storyCompleted = progress.storyProgress?.filter(p => p.completed).length || 0;
  const storyTotal = 24; // Approximate total story episodes

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newName, setNewName] = useState(displayName);
  const [newEmail, setNewEmail] = useState(displayEmail);
  const [selectedAvatar, setSelectedAvatar] = useState(femaleAvatars[0]);
  const [avatarGender, setAvatarGender] = useState<'female' | 'male'>('female');
  const [deleteContentId, setDeleteContentId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'public' | 'private'>('all');

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
      // Set gender tab based on saved avatar
      if (savedAvatar.includes('m.png')) {
        setAvatarGender('male');
      } else {
        setAvatarGender('female');
      }
    }
  }, []);

  // Sync form state when user data loads from Firebase
  useEffect(() => {
    setNewName(displayName);
    setNewEmail(displayEmail);
  }, [displayName, displayEmail]);

  const myContents = getMyContents();
  const filteredContents = filter === 'all'
    ? myContents
    : filter === 'public'
    ? myContents.filter(c => c.isPublic)
    : myContents.filter(c => !c.isPublic);

  const publicCount = myContents.filter(c => c.isPublic).length;
  const privateCount = myContents.filter(c => !c.isPublic).length;

  const handleSaveProfile = () => {
    if (newName.trim()) {
      setUserName(newName.trim());
    }
    setUserEmail(newEmail.trim());
    localStorage.setItem('userAvatar', selectedAvatar);
    // Dispatch custom event to update Header avatar
    window.dispatchEvent(new CustomEvent('avatarChanged', { detail: selectedAvatar }));
    setIsEditingProfile(false);
  };

  const handleDeleteContent = (id: string) => {
    deleteContent(id);
    setDeleteContentId(null);
  };

  const handleToggleVisibility = (content: Content) => {
    updateContentVisibility(content.id, !content.isPublic);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getPreviewText = (content: Content) => {
    if (content.type === 'kpop') {
      const lines = content.content as string[];
      return lines.slice(0, 2).join(' / ') + (lines.length > 2 ? '...' : '');
    } else {
      const lines = content.content as ScriptLine[];
      if (lines.length === 0) return '';
      const first = lines[0];
      return `${first.character.emoji} ${first.dialogue}${lines.length > 1 ? '...' : ''}`;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-md mb-4 mt-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#440687] to-[#6B21A8] flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden relative"
                >
                  <Image
                    src={selectedAvatar}
                    alt="Avatar"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-[#1F1F39]" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {displayName || 'Anonymous'}
                    </h1>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        currentUserSubscription === 'premium'
                          ? 'bg-[#FF7E00] text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {currentUserSubscription === 'premium' ? 'Premium' : 'Basic'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {displayEmail || (language === 'en' ? 'No email set' : '이메일 미설정')}
                  </p>
                </div>
              </div>
            </div>

            {/* Curriculum Progress */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-bold text-[#440687]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {language === 'en' ? 'Learning Progress' : '학습 진행률'}
              </h3>

              {/* Hangul Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">Hangul Learning</span>
                  <span className="text-sm text-[#B4D700] font-bold">{hangulCompleted}/{hangulTotal}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B4D700] rounded-full transition-all"
                    style={{ width: `${(hangulCompleted / hangulTotal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Word Builder Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">Word Builder</span>
                  <span className="text-sm text-[#38B6FF] font-bold">{puzzleCompleted}/{puzzleTotal}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#38B6FF] rounded-full transition-all"
                    style={{ width: `${(puzzleCompleted / puzzleTotal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Story Mode Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">Story Mode</span>
                  <span className="text-sm text-[#FF7E00] font-bold">{storyCompleted}/{storyTotal}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF7E00] rounded-full transition-all"
                    style={{ width: `${(storyCompleted / storyTotal) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Edit & Logout Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditingProfile(true)}
                className="flex-[7] py-3 bg-[#440687] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
              <button
                onClick={handleLogout}
                className="flex-[3] py-3 bg-[#B4D700] text-[#440687] rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>

            {/* Edit Profile Modal */}
            {isEditingProfile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={() => setIsEditingProfile(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-2xl p-6 w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-xl font-bold text-[#440687] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {language === 'en' ? 'Edit Profile' : '프로필 수정'}
                  </h2>

                  <div className="space-y-4">
                    {/* Avatar Selection */}
                    <div>
                      <label className="block text-xs text-gray-500 mb-2">
                        {language === 'en' ? 'Choose Avatar' : '아바타 선택'}
                      </label>

                      {/* Gender Tabs */}
                      <div className="flex gap-2 mb-3">
                        <button
                          onClick={() => setAvatarGender('female')}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            avatarGender === 'female'
                              ? 'bg-pink-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          👩 {language === 'en' ? 'Female' : '여성'}
                        </button>
                        <button
                          onClick={() => setAvatarGender('male')}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            avatarGender === 'male'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          👨 {language === 'en' ? 'Male' : '남성'}
                        </button>
                      </div>

                      {/* Avatar Grid */}
                      <div className="grid grid-cols-4 gap-3 justify-items-center max-h-[200px] overflow-y-auto py-2">
                        {(avatarGender === 'female' ? femaleAvatars : maleAvatars).map((avatar, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedAvatar(avatar)}
                            className={`relative w-14 h-14 rounded-full transition-all ${
                              selectedAvatar === avatar
                                ? 'ring-2 ring-[#440687] ring-offset-2'
                                : 'border-2 border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <Image
                              src={avatar}
                              alt={`Avatar ${index + 1}`}
                              fill
                              className="object-contain p-1"
                              unoptimized
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        {language === 'en' ? 'Nickname' : '닉네임'}
                      </label>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        maxLength={12}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                        placeholder={language === 'en' ? 'Enter your nickname' : '닉네임을 입력하세요'}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        {language === 'en' ? 'Email' : '이메일'}
                      </label>
                      <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                        placeholder={language === 'en' ? 'Enter your email' : '이메일을 입력하세요'}
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setIsEditingProfile(false)}
                        className="flex-1 py-2 border border-gray-300 text-gray-600 rounded-xl font-medium text-sm"
                      >
                        {language === 'en' ? 'Cancel' : '취소'}
                      </button>
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 py-2 bg-[#440687] text-white rounded-xl font-medium text-sm"
                      >
                        {language === 'en' ? 'Save' : '저장'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-3 mb-4"
          >
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="text-xl font-bold text-[#1F1F39]">{myContents.length}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Total' : '전체'}</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="text-xl font-bold text-[#77B602]">{publicCount}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Public' : '공개'}</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="text-xl font-bold text-gray-600">{privateCount}</p>
              <p className="text-xs text-gray-500">{language === 'en' ? 'Private' : '비공개'}</p>
            </div>
          </motion.div>

          {/* My Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[#1F1F39]" style={{ fontFamily: 'var(--font-poppins)' }}>
                {language === 'en' ? 'My Contents' : '내 콘텐츠'}
              </h2>
              <Link
                href="/culture"
                className="text-sm text-[#440687] font-medium"
              >
                {language === 'en' ? '+ Create New' : '+ 새로 만들기'}
              </Link>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4">
              {(['all', 'public', 'private'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all ${
                    filter === type
                      ? 'bg-[#440687] text-white'
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {type === 'all'
                    ? (language === 'en' ? 'All' : '전체')
                    : type === 'public'
                    ? (language === 'en' ? 'Public' : '공개')
                    : (language === 'en' ? 'Private' : '비공개')}
                </button>
              ))}
            </div>

            {filteredContents.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <span className="text-5xl mb-4 block">🎨</span>
                <p className="text-gray-500 mb-4">
                  {filter === 'all'
                    ? (language === 'en'
                      ? 'No content yet. Create your first masterpiece!'
                      : '아직 만든 콘텐츠가 없어요. 첫 작품을 만들어보세요!')
                    : filter === 'public'
                    ? (language === 'en' ? 'No public content' : '공개된 콘텐츠가 없습니다')
                    : (language === 'en' ? 'No private content' : '비공개 콘텐츠가 없습니다')}
                </p>
                {filter === 'all' && (
                  <div className="flex gap-3 justify-center">
                    <Link
                      href="/culture/kpop"
                      className="px-4 py-2 bg-[#FF7E00] text-white rounded-xl font-medium text-sm"
                    >
                      K-POP 가사
                    </Link>
                    <Link
                      href="/culture/kdrama"
                      className="px-4 py-2 bg-[#38B6FF] text-white rounded-xl font-medium text-sm"
                    >
                      K-Drama
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredContents.map((content, index) => (
                  <motion.div
                    key={content.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <Link href={`/culture/showcase/${content.id}`}>
                      <div className="flex items-start gap-3">
                        {/* Type Icon */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          content.type === 'kpop'
                            ? 'bg-[#FF7E00]/10'
                            : 'bg-[#38B6FF]/10'
                        }`}>
                          <span className="text-xl">{content.type === 'kpop' ? '🎤' : '🎬'}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              content.type === 'kpop'
                                ? 'bg-[#FF7E00]/10 text-[#FF7E00]'
                                : 'bg-[#38B6FF]/10 text-[#38B6FF]'
                            }`}>
                              {content.type === 'kpop' ? 'K-POP' : 'K-Drama'}
                            </span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              content.isPublic
                                ? 'bg-[#77B602]/10 text-[#77B602]'
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                              {content.isPublic
                                ? (language === 'en' ? '🌍 Public' : '🌍 공개')
                                : (language === 'en' ? '🔒 Private' : '🔒 비공개')}
                            </span>
                            <span className="text-xs text-gray-400">
                              {formatDate(content.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-bold text-[#1F1F39] mb-1 truncate">
                            {content.title}
                          </h3>
                          <p className="text-gray-500 text-sm truncate">
                            {getPreviewText(content)}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                            <span>❤️ {content.likes}</span>
                            <span>💬 {content.comments.length}</span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-3 pt-3 border-t gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleVisibility(content);
                        }}
                        className={`text-xs font-medium ${
                          content.isPublic ? 'text-gray-500' : 'text-green-600'
                        }`}
                      >
                        {content.isPublic
                          ? (language === 'en' ? '🔒 Make Private' : '🔒 비공개로 변경')
                          : (language === 'en' ? '🌍 Make Public' : '🌍 공개로 변경')}
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setDeleteContentId(content.id);
                        }}
                        className="text-xs text-red-500 font-medium"
                      >
                        {language === 'en' ? 'Delete' : '삭제'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Navigation />

      {/* Delete Modal */}
      <ConfirmModal
        isOpen={!!deleteContentId}
        onClose={() => setDeleteContentId(null)}
        onConfirm={() => deleteContentId && handleDeleteContent(deleteContentId)}
        title={language === 'en' ? 'Delete Content' : '콘텐츠 삭제'}
        message={language === 'en'
          ? 'Are you sure you want to delete this content? This action cannot be undone.'
          : '이 콘텐츠를 삭제하시겠습니까? 삭제된 콘텐츠는 복구할 수 없습니다.'}
      />
    </div>
  );
}
