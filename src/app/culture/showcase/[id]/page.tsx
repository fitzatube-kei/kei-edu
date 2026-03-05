'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useLanguage } from '@/context/LanguageContext';
import { useContent, Content, ScriptLine, Comment } from '@/context/ContentContext';

export default function ContentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { t, language } = useLanguage();
  const {
    getContentById,
    deleteContent,
    toggleContentLike,
    addComment,
    updateComment,
    deleteComment,
    toggleCommentLike,
    currentUserId,
  } = useContent();

  const [content, setContent] = useState<Content | undefined>(undefined);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState<string | null>(null);

  // Translation and TTS states
  const [translations, setTranslations] = useState<{ [key: number]: string }>({});
  const [showTranslation, setShowTranslation] = useState<{ [key: number]: boolean }>({});
  const [translating, setTranslating] = useState<{ [key: number]: boolean }>({});
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [showAllTranslations, setShowAllTranslations] = useState(false);

  // TTS function with gender-based voice
  const speak = (text: string, index: number, gender?: 'male' | 'female' | 'child') => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();

      if (speakingIndex === index) {
        setSpeakingIndex(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';

      // Adjust voice parameters based on gender
      if (gender === 'child') {
        utterance.pitch = 1.5;  // Higher pitch for child
        utterance.rate = 1.0;
      } else if (gender === 'female') {
        utterance.pitch = 1.2;  // Slightly higher pitch for female
        utterance.rate = 0.9;
      } else {
        utterance.pitch = 0.8;  // Lower pitch for male
        utterance.rate = 0.85;
      }

      // Try to find appropriate voice
      const voices = window.speechSynthesis.getVoices();
      const koVoices = voices.filter(v => v.lang.startsWith('ko'));

      if (koVoices.length > 0) {
        // Try to find gender-appropriate voice if available
        if (gender === 'female' || gender === 'child') {
          const femaleVoice = koVoices.find(v => v.name.toLowerCase().includes('female') || v.name.includes('여'));
          if (femaleVoice) utterance.voice = femaleVoice;
          else utterance.voice = koVoices[0];
        } else {
          const maleVoice = koVoices.find(v => v.name.toLowerCase().includes('male') || v.name.includes('남'));
          if (maleVoice) utterance.voice = maleVoice;
          else utterance.voice = koVoices[0];
        }
      }

      utterance.onend = () => setSpeakingIndex(null);
      utterance.onerror = () => setSpeakingIndex(null);

      setSpeakingIndex(index);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Stop TTS
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
    }
  };

  // Simple translation using libre translate or fallback
  const translateText = async (text: string, index: number) => {
    if (translations[index]) {
      setShowTranslation(prev => ({ ...prev, [index]: !prev[index] }));
      return;
    }

    setTranslating(prev => ({ ...prev, [index]: true }));

    try {
      // Target language mapping
      const langMap: { [key: string]: string } = {
        en: 'en', es: 'es', ja: 'ja', zh: 'zh', vi: 'vi', th: 'th'
      };
      const targetLang = langMap[language] || 'en';

      // Try using Google Translate API (free tier)
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
      );

      if (response.ok) {
        const data = await response.json();
        const translatedText = data[0]?.map((item: string[]) => item[0]).join('') || text;
        setTranslations(prev => ({ ...prev, [index]: translatedText }));
        setShowTranslation(prev => ({ ...prev, [index]: true }));
      }
    } catch (error) {
      console.error('Translation error:', error);
      // Fallback: show original text
      setTranslations(prev => ({ ...prev, [index]: '(Translation unavailable)' }));
      setShowTranslation(prev => ({ ...prev, [index]: true }));
    } finally {
      setTranslating(prev => ({ ...prev, [index]: false }));
    }
  };

  // Toggle all translations
  const toggleAllTranslations = async () => {
    if (showAllTranslations) {
      setShowTranslation({});
      setShowAllTranslations(false);
    } else {
      if (content) {
        const lines = content.type === 'kpop'
          ? (content.content as string[])
          : (content.content as ScriptLine[]).map(l => l.dialogue);

        for (let i = 0; i < lines.length; i++) {
          if (!translations[i]) {
            await translateText(lines[i], i);
          } else {
            setShowTranslation(prev => ({ ...prev, [i]: true }));
          }
        }
      }
      setShowAllTranslations(true);
    }
  };

  useEffect(() => {
    const id = params.id as string;
    const found = getContentById(id);
    setContent(found);
  }, [params.id, getContentById]);

  // Cleanup TTS on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen bg-white pb-24 md:pb-8">
        <Header />
        <main className="pt-6 px-4 md:px-8 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-gray-500 mb-4">
              {t('showcase.contentNotFound')}
            </p>
            <Link href="/culture/showcase" className="text-[#440687] font-medium">
              {t('showcase.goBack')}
            </Link>
          </div>
        </main>
        <Navigation />
      </div>
    );
  }

  // Check if content is accessible (public or owned by current user)
  const isOwner = content.authorId === currentUserId;
  if (!content.isPublic && !isOwner) {
    return (
      <div className="min-h-screen bg-white pb-24 md:pb-8">
        <Header />
        <main className="pt-6 px-4 md:px-8 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🔒</span>
            <p className="text-gray-500 mb-4">
              {t('showcase.privateContent')}
            </p>
            <Link href="/culture/showcase" className="text-[#440687] font-medium">
              {t('showcase.goBack')}
            </Link>
          </div>
        </main>
        <Navigation />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleDeleteContent = () => {
    if (deleteContent(content.id)) {
      router.push('/culture/showcase');
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(content.id, newComment.trim());
      setNewComment('');
      // Refresh content
      setContent(getContentById(content.id));
    }
  };

  const handleUpdateComment = (commentId: string) => {
    if (editingCommentText.trim()) {
      updateComment(content.id, commentId, editingCommentText.trim());
      setEditingCommentId(null);
      setEditingCommentText('');
      setContent(getContentById(content.id));
    }
  };

  const handleDeleteComment = (commentId: string) => {
    deleteComment(content.id, commentId);
    setShowDeleteCommentModal(null);
    setContent(getContentById(content.id));
  };

  const handleLikeComment = (commentId: string) => {
    toggleCommentLike(content.id, commentId);
    setContent(getContentById(content.id));
  };

  const handleLikeContent = () => {
    toggleContentLike(content.id);
    setContent(getContentById(content.id));
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/culture/showcase" className="inline-flex items-center gap-2 text-[#440687] font-medium mb-4 pt-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('showcase.back')}
          </Link>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-md mb-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  content.type === 'kpop' ? 'bg-pink-100' : 'bg-blue-100'
                }`}>
                  <span className="text-2xl">{content.type === 'kpop' ? '🎤' : '🎬'}</span>
                </div>
                <div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    content.type === 'kpop'
                      ? 'bg-pink-100 text-pink-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {content.type === 'kpop' ? t('showcase.kpopLyrics') : t('showcase.kdramaScript')}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(content.createdAt)}
                  </p>
                </div>
              </div>
              {isOwner && (
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="text-red-500 text-sm font-medium"
                >
                  {t('showcase.delete')}
                </button>
              )}
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-[#1F1F39] mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              {content.title}
            </h1>

            {/* Content */}
            <div className={`rounded-xl p-4 mb-4 ${
              content.type === 'kpop' ? 'bg-pink-50' : 'bg-blue-50'
            }`}>
              {/* Action buttons for all */}
              <div className="flex gap-2 mb-3 pb-3 border-b border-gray-200/50">
                <button
                  onClick={toggleAllTranslations}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    showAllTranslations
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-purple-600 border border-purple-200'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {showAllTranslations ? t('showcase.hideAll') : t('showcase.showAll')}
                </button>
              </div>

              {content.type === 'kpop' ? (
                <div className="space-y-3">
                  {(content.content as string[]).map((line, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-start gap-2">
                        <p className="text-[#1F1F39] flex-1">{line}</p>
                        <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => translateText(line, idx)}
                            disabled={translating[idx]}
                            className={`p-1.5 rounded-lg transition-all ${
                              showTranslation[idx]
                                ? 'bg-purple-600 text-white'
                                : 'bg-white/80 text-purple-600 hover:bg-purple-100'
                            }`}
                            title={t('showcase.translate')}
                          >
                            {translating[idx] ? (
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      {showTranslation[idx] && translations[idx] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-purple-600 text-sm mt-1 ml-0 italic"
                        >
                          → {translations[idx]}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {(content.content as ScriptLine[]).map((line, idx) => (
                    <div key={idx} className="bg-white/50 rounded-lg p-3 group">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{line.character.emoji}</span>
                        <span className="font-bold text-blue-700 text-sm">
                          {language === 'en' ? line.character.nameEn : line.character.name}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 ml-7">
                        <p className="text-[#1F1F39] flex-1">{line.dialogue}</p>
                        <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => translateText(line.dialogue, idx)}
                            disabled={translating[idx]}
                            className={`p-1.5 rounded-lg transition-all ${
                              showTranslation[idx]
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-purple-600 hover:bg-purple-100'
                            }`}
                            title={t('showcase.translate')}
                          >
                            {translating[idx] ? (
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      {showTranslation[idx] && translations[idx] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-purple-600 text-sm mt-1 ml-7 italic"
                        >
                          → {translations[idx]}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Author & Stats */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#440687] flex items-center justify-center text-white font-bold text-sm">
                  {content.authorName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-600">{content.authorName}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLikeContent}
                  className={`flex items-center gap-1 text-sm ${
                    content.likedBy.includes(currentUserId)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                >
                  {content.likedBy.includes(currentUserId) ? '❤️' : '🤍'}
                  <span>{content.likes}</span>
                </button>
                <span className="flex items-center gap-1 text-sm text-gray-400">
                  💬 {content.comments.length}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <h2 className="font-bold text-[#1F1F39] mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              {t('showcase.comments')} ({content.comments.length})
            </h2>

            {/* Comment Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={t('showcase.writeComment')}
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-[#440687] text-white rounded-xl font-medium text-sm disabled:opacity-50"
              >
                {t('showcase.post')}
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-3">
              <AnimatePresence>
                {content.comments.length === 0 ? (
                  <p className="text-center text-gray-400 py-8 text-sm">
                    {t('showcase.noComments')}
                  </p>
                ) : (
                  content.comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-xs">
                            {comment.authorName.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-medium text-sm text-[#1F1F39]">{comment.authorName}</span>
                          <span className="text-xs text-gray-400">
                            {formatDate(comment.createdAt)}
                            {comment.updatedAt && (
                              <span className="ml-1 text-blue-500">({t('showcase.updated')})</span>
                            )}
                          </span>
                        </div>
                        {comment.authorId === currentUserId && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setEditingCommentId(comment.id);
                                setEditingCommentText(comment.text);
                              }}
                              className="text-xs text-gray-400 hover:text-[#440687]"
                            >
                              {t('showcase.edit')}
                            </button>
                            <button
                              onClick={() => setShowDeleteCommentModal(comment.id)}
                              className="text-xs text-gray-400 hover:text-red-500"
                            >
                              {t('showcase.delete')}
                            </button>
                          </div>
                        )}
                      </div>

                      {editingCommentId === comment.id ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editingCommentText}
                            onChange={(e) => setEditingCommentText(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#440687]"
                            autoFocus
                          />
                          <button
                            onClick={() => handleUpdateComment(comment.id)}
                            className="px-3 py-2 bg-[#440687] text-white rounded-lg text-xs"
                          >
                            {t('showcase.save')}
                          </button>
                          <button
                            onClick={() => {
                              setEditingCommentId(null);
                              setEditingCommentText('');
                            }}
                            className="px-3 py-2 bg-gray-200 text-gray-600 rounded-lg text-xs"
                          >
                            {t('showcase.cancel')}
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm text-gray-700 mb-2">{comment.text}</p>
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className={`flex items-center gap-1 text-xs ${
                              comment.likedBy.includes(currentUserId)
                                ? 'text-red-500'
                                : 'text-gray-400'
                            }`}
                          >
                            {comment.likedBy.includes(currentUserId) ? '❤️' : '🤍'}
                            <span>{comment.likes}</span>
                          </button>
                        </>
                      )}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      <Navigation />

      {/* Delete Content Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteContent}
        title={t('showcase.deleteContent')}
        message={t('showcase.deleteContentConfirm')}
      />

      {/* Delete Comment Modal */}
      <ConfirmModal
        isOpen={!!showDeleteCommentModal}
        onClose={() => setShowDeleteCommentModal(null)}
        onConfirm={() => showDeleteCommentModal && handleDeleteComment(showDeleteCommentModal)}
        title={t('showcase.deleteComment')}
        message={t('showcase.deleteCommentConfirm')}
      />
    </div>
  );
}
