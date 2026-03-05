'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import StoryPlayer from '@/components/story/StoryPlayer';
import Button from '@/components/ui/Button';
import SpeakButton from '@/components/ui/SpeakButton';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useTTS } from '@/hooks/useTTS';
import { getEpisodeById, allSeasons } from '@/data/story';
import { VocabularyItem } from '@/types/story';
import {
  QuestionIcon,
  StarIcon,
  TrophyIcon,
  RocketIcon,
  BookIcon,
  ArrowRightIcon
} from '@/components/icons/Icon3D';

export default function StoryEpisodePage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const { updateStoryProgress } = useProgress();
  const { speak, isSpeaking, speakingId, isSupported } = useTTS();
  const episodeId = params.episodeId as string;

  const [showComplete, setShowComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const [showVocabReview, setShowVocabReview] = useState(false);

  // Find episode from all seasons
  const episode = getEpisodeById(episodeId);

  // Collect all vocabulary from episode scenes
  const allVocabulary = useMemo(() => {
    if (!episode) return [];
    const vocabMap = new Map<string, VocabularyItem>();
    episode.scenes.forEach(scene => {
      if (scene.teaching?.vocabulary) {
        scene.teaching.vocabulary.forEach(vocab => {
          if (!vocabMap.has(vocab.korean)) {
            vocabMap.set(vocab.korean, vocab);
          }
        });
      }
    });
    return Array.from(vocabMap.values());
  }, [episode]);

  const getText = (multiText: Record<string, string>) => {
    return multiText[language] || multiText.en;
  };

  // Handle episode completion
  const handleComplete = useCallback(async (score: number, choices: string[]) => {
    setFinalScore(score);
    const badge = episode?.rewards.badge;
    if (badge) {
      setEarnedBadge(badge);
    }
    setShowComplete(true);

    // Save progress to Firestore/localStorage
    await updateStoryProgress(episodeId, score, choices, badge);
  }, [episode, episodeId, updateStoryProgress]);

  // Episode not found
  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="modal-3d p-8 max-w-md w-full text-center"
        >
          <QuestionIcon size={64} className="mx-auto mb-4" />
          <h1 className="text-2xl font-black text-gray-800 mb-4">Episode not found</h1>
          <Button variant="primary" onClick={() => router.push('/story')}>
            Back to Story Mode
          </Button>
        </motion.div>
      </div>
    );
  }

  // Episode has no scenes (placeholder)
  if (episode.scenes.length === 0) {
    return (
      <div className="min-h-screen min-h-[100dvh] flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="modal-3d p-4 sm:p-6 md:p-8 max-w-md w-full text-center max-h-[85vh] max-h-[85dvh] overflow-y-auto"
        >
          {/* Episode icon */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-4 border-[#2d3436] shadow-[4px_4px_0_#2d3436] bg-gradient-to-br from-[#fa709a] to-[#fee140]"
          >
            <BookIcon size={40} className="sm:w-12 sm:h-12" />
          </motion.div>

          <h1 className="text-xl sm:text-2xl font-black text-gray-800 mb-2">
            {getText(episode.title)}
          </h1>

          {/* Coming soon badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black mb-3 sm:mb-4 border-2 border-[#2d3436] shadow-[2px_2px_0_#2d3436] bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white"
          >
            {language === 'ja' ? '近日公開' :
             language === 'zh' ? '即将推出' :
             language === 'th' ? 'เร็วๆ นี้' :
             language === 'vi' ? 'Sắp ra mắt' :
             language === 'es' ? 'Próximamente' :
             'Coming Soon'}
          </motion.div>

          <p className="text-gray-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
            {language === 'ja' ? 'このエピソードは近日公開予定です！' :
             language === 'zh' ? '此集即将推出！' :
             language === 'th' ? 'ตอนนี้เร็วๆ นี้!' :
             language === 'vi' ? 'Tập này sắp ra mắt!' :
             language === 'es' ? '¡Este episodio llegará pronto!' :
             'This episode is coming soon!'}
          </p>

          <div className="mb-4 sm:mb-6">
            <RocketIcon size={48} className="sm:w-16 sm:h-16" animate />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <Image
              src="/images/story/str_crt001.png"
              alt="Story Character"
              width={120}
              height={120}
              className="w-20 h-auto sm:w-24 md:w-32"
            />
          </motion.div>

          <Button variant="primary" fullWidth onClick={() => router.push('/story')}>
            {language === 'ja' ? 'ストーリーに戻る' :
             language === 'zh' ? '返回故事' :
             language === 'th' ? 'กลับไปที่เรื่องราว' :
             language === 'vi' ? 'Quay lại câu chuyện' :
             language === 'es' ? 'Volver a la historia' :
             'Back to Story'}
          </Button>
        </motion.div>
      </div>
    );
  }

  // Show completion screen
  if (showComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen min-h-[100dvh] flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="modal-3d p-4 sm:p-6 md:p-8 max-w-md w-full text-center max-h-[85vh] max-h-[85dvh] overflow-y-auto"
        >
          {/* Celebration icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-3 sm:mb-4 flex justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-4 border-[#2d3436] shadow-[4px_4px_0_#2d3436] bg-gradient-to-br from-[#fee140] to-[#fa709a]"
            >
              <TrophyIcon size={40} className="sm:w-12 sm:h-12" />
            </motion.div>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
            {language === 'ja' ? 'エピソードクリア！' :
             language === 'zh' ? '集完成！' :
             language === 'th' ? 'จบตอน!' :
             language === 'vi' ? 'Hoàn thành tập!' :
             language === 'es' ? '¡Episodio completado!' :
             'Episode Complete!'}
          </h1>

          <p className="text-gray-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
            {getText(episode.title)}
          </p>

          {/* Score card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-3d card-3d-pink p-4 sm:p-6 mb-4 sm:mb-6"
          >
            <div className="text-3xl sm:text-4xl font-black text-[#fa709a] mb-1">
              {finalScore}
            </div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base">
              {language === 'ja' ? 'ポイント獲得' :
               language === 'zh' ? '获得积分' :
               language === 'th' ? 'คะแนนที่ได้' :
               language === 'vi' ? 'điểm đạt được' :
               language === 'es' ? 'puntos obtenidos' :
               'points earned'}
            </div>
          </motion.div>

          {/* Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-3d p-3 sm:p-4 mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#43e97b] font-black">
              <StarIcon size={24} className="sm:w-7 sm:h-7" animate />
              <span className="text-base sm:text-lg">+{episode.rewards.xp} XP</span>
            </div>

            {earnedBadge && episode.rewards.badgeName && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 sm:gap-3 text-yellow-500 font-black mt-2 sm:mt-3 pt-2 sm:pt-3 border-t-2 border-gray-100"
              >
                <TrophyIcon size={24} className="sm:w-7 sm:h-7" />
                <span className="text-base sm:text-lg">{getText(episode.rewards.badgeName)}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Vocabulary Review Section */}
          {allVocabulary.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <button
                onClick={() => setShowVocabReview(!showVocabReview)}
                className="w-full card-3d p-3 sm:p-4 text-left hover:shadow-[5px_5px_0_#2d3436] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">📚</span>
                    <div>
                      <h3 className="font-black text-gray-800 text-sm sm:text-base">
                        {language === 'ja' ? '学んだ単語' :
                         language === 'zh' ? '学习的词汇' :
                         language === 'th' ? 'คำศัพท์ที่เรียน' :
                         language === 'vi' ? 'Từ vựng đã học' :
                         language === 'es' ? 'Vocabulario aprendido' :
                         'Vocabulary Learned'}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {allVocabulary.length} {language === 'ja' ? '単語' : language === 'zh' ? '个词' : 'words'}
                      </p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: showVocabReview ? 180 : 0 }}
                    className="text-gray-400 text-sm"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              {showVocabReview && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 sm:mt-3 space-y-2"
                >
                  {allVocabulary.map((vocab, index) => (
                    <motion.div
                      key={vocab.korean}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="card-3d p-2 sm:p-3 flex items-center gap-2 sm:gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                          <span className="font-bold text-purple-600 text-base sm:text-lg">{vocab.korean}</span>
                          <span className="text-gray-500 text-xs sm:text-sm">({vocab.romanization})</span>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">{getText(vocab.meaning)}</p>
                      </div>

                      {/* TTS button */}
                      {isSupported && (
                        <SpeakButton
                          text={vocab.korean}
                          id={`review-${index}`}
                          size="sm"
                          isSpeaking={isSpeaking}
                          speakingId={speakingId}
                          onSpeak={speak}
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Character */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-4 sm:mb-6 flex justify-center"
          >
            <Image
              src="/images/story/str_crt001.png"
              alt="Story Character"
              width={140}
              height={140}
              className="w-24 h-auto sm:w-28 md:w-36"
            />
          </motion.div>

          {/* Buttons */}
          <div className="space-y-2 sm:space-y-3">
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/story')}
              className="w-full card-3d card-3d-pink p-3 sm:p-4 text-left hover:shadow-[6px_6px_0_#2d3436] transition-all"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#fa709a] to-[#fee140] rounded-xl flex items-center justify-center border-3 border-[#2d3436] shadow-[2px_2px_0_#2d3436] flex-shrink-0">
                  <ArrowRightIcon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-gray-800 text-sm sm:text-base truncate">
                    {language === 'ja' ? '次のエピソードへ' :
                     language === 'zh' ? '下一集' :
                     language === 'th' ? 'ตอนถัดไป' :
                     language === 'vi' ? 'Tập tiếp theo' :
                     language === 'es' ? 'Siguiente episodio' :
                     'Next Episode'}
                  </h3>
                </div>
                <ArrowRightIcon size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
              </div>
            </motion.button>

            <Button
              variant="ghost"
              size="lg"
              fullWidth
              onClick={() => {
                setShowComplete(false);
                setFinalScore(0);
                setShowVocabReview(false);
              }}
            >
              {language === 'ja' ? 'もう一度プレイ' :
               language === 'zh' ? '再玩一次' :
               language === 'th' ? 'เล่นอีกครั้ง' :
               language === 'vi' ? 'Chơi lại' :
               language === 'es' ? 'Jugar de nuevo' :
               'Play Again'}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Main story player
  return <StoryPlayer episode={episode} onComplete={handleComplete} />;
}
