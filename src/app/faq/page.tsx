'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Button from '@/components/ui/Button';

type FAQCategory = 'all' | 'account' | 'payment' | 'gameplay' | 'technical';

interface FAQItem {
  id: string;
  category: FAQCategory;
  questionKey: string;
  answerKey: string;
}

const faqItems: FAQItem[] = [
  // Account
  { id: '1', category: 'account', questionKey: 'faq.questions.signup', answerKey: 'faq.answers.signup' },
  { id: '2', category: 'account', questionKey: 'faq.questions.forgotPassword', answerKey: 'faq.answers.forgotPassword' },
  { id: '3', category: 'account', questionKey: 'faq.questions.emailVerification', answerKey: 'faq.answers.emailVerification' },
  // Payment
  { id: '4', category: 'payment', questionKey: 'faq.questions.freeContent', answerKey: 'faq.answers.freeContent' },
  { id: '5', category: 'payment', questionKey: 'faq.questions.purchasePremium', answerKey: 'faq.answers.purchasePremium' },
  { id: '6', category: 'payment', questionKey: 'faq.questions.refundPolicy', answerKey: 'faq.answers.refundPolicy' },
  // Gameplay
  { id: '7', category: 'gameplay', questionKey: 'faq.questions.startLevel', answerKey: 'faq.answers.startLevel' },
  { id: '8', category: 'gameplay', questionKey: 'faq.questions.earnStars', answerKey: 'faq.answers.earnStars' },
  { id: '9', category: 'gameplay', questionKey: 'faq.questions.saveProgress', answerKey: 'faq.answers.saveProgress' },
  // Technical
  { id: '10', category: 'technical', questionKey: 'faq.questions.appNotWorking', answerKey: 'faq.answers.appNotWorking' },
  { id: '11', category: 'technical', questionKey: 'faq.questions.noSound', answerKey: 'faq.answers.noSound' },
  { id: '12', category: 'technical', questionKey: 'faq.questions.progressLost', answerKey: 'faq.answers.progressLost' },
];

export default function FAQPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories: { key: FAQCategory; labelKey: string }[] = [
    { key: 'all', labelKey: 'faq.categories.all' },
    { key: 'account', labelKey: 'faq.categories.account' },
    { key: 'payment', labelKey: 'faq.categories.payment' },
    { key: 'gameplay', labelKey: 'faq.categories.gameplay' },
    { key: 'technical', labelKey: 'faq.categories.technical' },
  ];

  const filteredFAQs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const question = t(item.questionKey).toLowerCase();
      const answer = t(item.answerKey).toLowerCase();
      const matchesSearch = searchQuery === '' ||
        question.includes(searchQuery.toLowerCase()) ||
        answer.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('faq.title')}</h1>
            <p className="text-gray-600">{t('faq.subtitle')}</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('faq.searchPlaceholder')}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition bg-white"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#4C1D95] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-500">{t('faq.noResults')}</p>
              </div>
            ) : (
              filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-800 pr-4">
                      {t(item.questionKey)}
                    </span>
                    <motion.svg
                      animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openItems.has(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                          {t(item.answerKey)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            )}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-[#4C1D95] to-primary-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-xl font-bold mb-2">{t('faq.stillNeedHelp')}</h3>
            <p className="text-white/80 mb-6">{t('faq.contactUs')}</p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                {t('faq.contactButton')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
