'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Button from '@/components/ui/Button';

type InquiryType = 'general' | 'account' | 'payment' | 'bug' | 'feedback';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general' as InquiryType,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inquiryTypes: { value: InquiryType; labelKey: string }[] = [
    { value: 'general', labelKey: 'contact.types.general' },
    { value: 'account', labelKey: 'contact.types.account' },
    { value: 'payment', labelKey: 'contact.types.payment' },
    { value: 'bug', labelKey: 'contact.types.bug' },
    { value: 'feedback', labelKey: 'contact.types.feedback' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError(t('contact.errors.nameRequired'));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError(t('contact.errors.emailInvalid'));
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setError(t('contact.errors.messageShort'));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, you would send to your API:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      setIsSubmitted(true);
    } catch {
      setError(t('contact.errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pb-20 md:pb-8">
        <Header />
        <main className="pt-6 px-4 md:px-8 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-20"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.successTitle')}</h2>
            <p className="text-gray-600 mb-8">{t('contact.successMessage')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/main">
                <Button variant="primary">{t('common.back')}</Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline">{t('faq.title')}</Button>
              </Link>
            </div>
          </motion.div>
        </main>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-8">
      <Header />

      <main className="pt-6 px-4 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('contact.title')}</h1>
            <p className="text-gray-600">{t('contact.subtitle')}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-md transition border border-gray-200">
                <div className="text-2xl mb-2">❓</div>
                <p className="text-sm font-medium text-gray-700">{t('contact.checkFAQ')}</p>
              </div>
            </Link>
            <a href="mailto:support@koreanlearning.game" className="block">
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-md transition border border-gray-200">
                <div className="text-2xl mb-2">📧</div>
                <p className="text-sm font-medium text-gray-700">{t('contact.directEmail')}</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition"
                  placeholder={t('auth.emailPlaceholder')}
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.inquiryType')} <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition bg-white"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {t(type.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent transition resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('contact.form.messageHint')}
                </p>
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isSubmitting}
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>

          {/* Response Time Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-gray-500 mt-6"
          >
            {t('contact.responseTime')}
          </motion.p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
