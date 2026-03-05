'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useContent, Content, ScriptLine } from '@/context/ContentContext';

type FilterType = 'all' | 'kpop' | 'kdrama';
type SortType = 'latest' | 'popular' | 'mine';

export default function ShowcasePage() {
  const { t } = useLanguage();
  const { getPublicContents, currentUserId } = useContent();
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('latest');

  const publicContents = getPublicContents();

  const sortedAndFilteredContents = useMemo(() => {
    // First filter by type
    let contents = filter === 'all'
      ? publicContents
      : publicContents.filter(c => c.type === filter);

    // Then filter/sort based on sort type
    if (sort === 'mine') {
      contents = contents.filter(c => c.authorId === currentUserId);
    } else if (sort === 'popular') {
      contents = [...contents].sort((a, b) => b.likes - a.likes);
    } else {
      // latest - sort by date descending
      contents = [...contents].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return contents;
  }, [publicContents, filter, sort, currentUserId]);

  // Stats
  const totalContents = publicContents.length;
  const myContents = publicContents.filter(c => c.authorId === currentUserId).length;
  const totalLikes = publicContents.reduce((sum, c) => sum + c.likes, 0);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return t('showcase.justNow');
    if (minutes < 60) return `${minutes}${t('showcase.minutesAgo')}`;
    if (hours < 24) return `${hours}${t('showcase.hoursAgo')}`;
    if (days < 7) return `${days}${t('showcase.daysAgo')}`;
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

      <main className="px-4 md:px-8 bg-gradient-to-b from-yellow-50 to-orange-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/culture" className="inline-flex items-center gap-2 text-[#440687] font-medium pt-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('showcase.back')}
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 py-4"
          >
            {/* Icon */}
            <motion.div
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-2xl bg-gradient-to-br from-[#FF7E00] to-[#FFB800] flex items-center justify-center shadow-lg shrink-0"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-5xl sm:text-6xl">🌟</span>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1">
              <p
                className="text-[#FF7E00] text-[11px] sm:text-[12px] uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                VIEW GALLERY
              </p>
              <h1
                className="text-[22px] sm:text-[28px] text-[#1F2937] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {t('showcase.title')}
              </h1>
              <p
                className="text-gray-500 text-[12px] sm:text-[14px]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('showcase.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 mb-6 shadow-lg border-l-4 border-l-[#FF7E00]"
          >
            <p
              className="text-[#FF7E00] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              COMMUNITY STATS
            </p>
            <h2
              className="text-[20px] text-[#1F2937] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {t('showcase.overallStats')}
            </h2>

            <div className="flex items-center justify-around">
              {/* Total Contents */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#FF7E00] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📝</span>
                </div>
                <div>
                  <p
                    className="text-[28px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalContents}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {t('showcase.totalContents')}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-[#FF7E00]/30" />

              {/* My Contents */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#FF7E00] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">👤</span>
                </div>
                <div>
                  <p
                    className="text-[28px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {myContents}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {t('showcase.myContents')}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-[#FF7E00]/30" />

              {/* Total Likes */}
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[#FF7E00] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">❤️</span>
                </div>
                <div>
                  <p
                    className="text-[28px] text-[#1F2937]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {totalLikes}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {t('showcase.totalLikes')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Header */}
          <div className="mb-4">
            <p
              className="text-[#FF7E00] text-[11px] uppercase tracking-wider mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              BROWSE CONTENT
            </p>
            <h2
              className="text-[18px] text-[#1F2937]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {t('showcase.browseContents')}
            </h2>
          </div>

          {/* Sort Tabs */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
            {(['latest', 'popular', 'mine'] as SortType[]).map((type) => (
              <motion.button
                key={type}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSort(type)}
                className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  sort === type
                    ? 'bg-[#440687] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {type === 'latest'
                  ? t('showcase.sortLatest')
                  : type === 'popular'
                  ? t('showcase.sortPopular')
                  : t('showcase.sortMine')}
              </motion.button>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-4">
            {(['all', 'kpop', 'kdrama'] as FilterType[]).map((type) => (
              <motion.button
                key={type}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all ${
                  filter === type
                    ? 'bg-[#FF7E00] text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {type === 'all'
                  ? t('showcase.all')
                  : type === 'kpop'
                  ? '🎤 K-POP'
                  : '🎬 K-Drama'}
              </motion.button>
            ))}
          </div>

          {/* Content List */}
          {sortedAndFilteredContents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <span className="text-5xl mb-4 block">📝</span>
              <p className="text-gray-500 mb-4">
                {sort === 'mine' ? t('showcase.noMyContent') : t('showcase.noContent')}
              </p>
              <div className="flex gap-3 justify-center">
                <Link
                  href="/culture/kpop"
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-medium text-sm shadow-md"
                >
                  {t('showcase.kpopLyrics')}
                </Link>
                <Link
                  href="/culture/kdrama"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium text-sm shadow-md"
                >
                  {t('showcase.kdramaScript')}
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {sortedAndFilteredContents.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={`/culture/showcase/${content.id}`}>
                    <div
                      className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border-l-4"
                      style={{ borderLeftColor: content.type === 'kpop' ? '#FF6B9D' : '#38B6FF' }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Type Icon */}
                        <motion.div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            content.type === 'kpop'
                              ? 'bg-gradient-to-br from-pink-400 to-red-400'
                              : 'bg-gradient-to-br from-blue-400 to-indigo-400'
                          }`}
                          animate={{ rotate: [0, 3, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                        >
                          <span className="text-2xl">{content.type === 'kpop' ? '🎤' : '🎬'}</span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                content.type === 'kpop'
                                  ? 'bg-pink-100 text-pink-600'
                                  : 'bg-blue-100 text-blue-600'
                              }`}
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              {content.type === 'kpop' ? 'K-POP' : 'K-Drama'}
                            </span>
                            {content.authorId === currentUserId && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">
                                {t('showcase.myBadge')}
                              </span>
                            )}
                            <span className="text-xs text-gray-400">
                              {formatDate(content.createdAt)}
                            </span>
                          </div>
                          <h3
                            className="font-bold text-[#1F2937] mb-1 truncate text-[16px]"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {content.title}
                          </h3>
                          <p className="text-gray-500 text-sm truncate">
                            {getPreviewText(content)}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              👤 {content.authorName}
                            </span>
                            <span
                              className={`text-xs flex items-center gap-1 font-bold ${
                                content.likedBy.includes(currentUserId) ? 'text-red-500' : 'text-gray-400'
                              }`}
                            >
                              {content.likedBy.includes(currentUserId) ? '❤️' : '🤍'} {content.likes}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              💬 {content.comments.length}
                            </span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                          style={{ backgroundColor: content.type === 'kpop' ? '#FF6B9D20' : '#38B6FF20' }}
                        >
                          <svg
                            className="w-4 h-4"
                            style={{ color: content.type === 'kpop' ? '#FF6B9D' : '#38B6FF' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
