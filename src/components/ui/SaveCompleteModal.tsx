'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';

interface LyricLine {
  korean: string;
  english: string;
}

interface ScriptLine {
  character: { id: string; name: string; nameEn: string; emoji: string; gender?: 'male' | 'female' | 'child' };
  dialogue: string;
  dialogueEn: string;
}

interface SaveCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'kpop' | 'kdrama';
  content: LyricLine[] | ScriptLine[];
  onSaveComplete?: () => void;
}

export default function SaveCompleteModal({ isOpen, onClose, type, content, onSaveComplete }: SaveCompleteModalProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const { addContent, currentUserName, setUserName } = useContent();
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState(currentUserName);
  const [step, setStep] = useState<'input' | 'complete'>('input');
  const [savedContentId, setSavedContentId] = useState<string | null>(null);

  const handleSave = (isPublic: boolean) => {
    if (!title.trim()) return;

    // Update user name if changed
    if (authorName !== currentUserName) {
      setUserName(authorName);
    }

    // Convert content to storage format (korean only for storage)
    const storageContent = type === 'kpop'
      ? (content as LyricLine[]).map(line => line.korean)
      : (content as ScriptLine[]).map(line => ({
          character: line.character,
          dialogue: line.dialogue,
        }));

    // Add content
    const newContent = addContent({
      type,
      title: title.trim(),
      content: storageContent,
      isPublic,
    });

    setSavedContentId(newContent.id);
    setStep('complete');

    if (onSaveComplete) {
      onSaveComplete();
    }
  };

  const handleClose = () => {
    setStep('input');
    setTitle('');
    setSavedContentId(null);
    onClose();
  };

  const handleViewContent = () => {
    handleClose();
    if (savedContentId) {
      router.push(`/culture/showcase/${savedContentId}`);
    }
  };

  const handleGoToMyPage = () => {
    handleClose();
    router.push('/mypage');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
              {step === 'complete' ? (
                /* Completion Screen */
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl">✓</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#1F1F39] mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {language === 'en' ? 'Saved Successfully!' : '저장 완료!'}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {language === 'en'
                      ? 'Your creation has been saved.'
                      : '작품이 저장되었습니다.'}
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={handleViewContent}
                      className="w-full py-3 px-4 bg-[#440687] text-white rounded-xl font-bold text-sm hover:bg-[#5a0aad] transition-colors"
                    >
                      {language === 'en' ? 'View My Content' : '내 콘텐츠 보기'}
                    </button>
                    <button
                      onClick={handleGoToMyPage}
                      className="w-full py-3 px-4 border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      {language === 'en' ? 'Go to My Page' : '마이페이지로 이동'}
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full py-3 px-4 text-gray-400 text-sm hover:text-gray-600 transition-colors"
                    >
                      {language === 'en' ? 'Continue Creating' : '계속 만들기'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Input Screen */
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#1F1F39]" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {type === 'kpop'
                        ? (language === 'en' ? 'Save My Lyrics' : '내 가사 저장하기')
                        : (language === 'en' ? 'Save My Script' : '내 대본 저장하기')}
                    </h3>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div className="flex justify-center mb-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      type === 'kpop'
                        ? 'bg-pink-100 text-pink-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <span>{type === 'kpop' ? '🎤' : '🎬'}</span>
                      <span className="font-medium text-sm">
                        {type === 'kpop' ? 'K-POP Lyrics' : 'K-Drama Script'}
                      </span>
                    </div>
                  </div>

                  {/* Preview with Translation */}
                  <div className={`rounded-xl p-4 mb-4 max-h-[180px] overflow-y-auto ${
                    type === 'kpop' ? 'bg-pink-50' : 'bg-blue-50'
                  }`}>
                    {type === 'kpop' ? (
                      <div className="space-y-3">
                        {(content as LyricLine[]).map((line, idx) => (
                          <div key={idx} className="border-b border-pink-100 pb-2 last:border-0 last:pb-0">
                            <p className="text-[#1F1F39] font-medium">{line.korean}</p>
                            <p className="text-gray-500 text-sm mt-0.5">→ {line.english}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {(content as ScriptLine[]).map((line, idx) => (
                          <div key={idx} className="border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center gap-1 mb-1">
                              <span>{line.character.emoji}</span>
                              <span className="font-bold text-blue-700 text-sm">
                                {language === 'en' ? line.character.nameEn : line.character.name}
                              </span>
                            </div>
                            <p className="text-[#1F1F39] ml-5">{line.dialogue}</p>
                            <p className="text-gray-500 text-sm ml-5 mt-0.5">→ {line.dialogueEn}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Translation Info */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 text-center">
                      {language === 'en'
                        ? '📝 Check the translation above to verify your content'
                        : '📝 위 번역을 확인하여 작성한 내용이 맞는지 확인하세요'}
                    </p>
                  </div>

                  {/* Title Input */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Title' : '제목'} *
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={language === 'en'
                        ? 'Give your creation a title...'
                        : '작품 제목을 입력하세요...'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                      maxLength={50}
                    />
                  </div>

                  {/* Author Name Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Your Name' : '작성자 이름'}
                    </label>
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder={language === 'en' ? 'Anonymous' : '익명'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                      maxLength={20}
                    />
                  </div>

                  {/* Save Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleSave(true)}
                      disabled={!title.trim()}
                      className="w-full py-3 px-4 bg-[#440687] text-white rounded-xl font-bold text-sm hover:bg-[#5a0aad] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span>🌍</span>
                      {language === 'en' ? 'Save & Publish' : '공개하기'}
                    </button>
                    <button
                      onClick={() => handleSave(false)}
                      disabled={!title.trim()}
                      className="w-full py-3 px-4 border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span>🔒</span>
                      {language === 'en' ? 'Save as Private' : '비공개하기'}
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    {language === 'en'
                      ? 'Public: Visible on Showcase board. Private: Only visible on My Page.'
                      : '공개: Showcase 게시판에 표시됩니다. 비공개: 마이페이지에서만 볼 수 있습니다.'}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
