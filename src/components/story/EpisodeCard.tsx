'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StoryEpisode } from '@/types/story';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface EpisodeCardProps {
  episode: StoryEpisode;
  status: 'available' | 'completed' | 'locked';
  completedScore?: number;
  index: number;
}

export default function EpisodeCard({ episode, status, completedScore, index }: EpisodeCardProps) {
  const { language } = useLanguage();

  const getText = (multiText: Record<string, string>) => {
    return multiText[language] || multiText.en;
  };

  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {isLocked ? (
        <div className="bg-gray-100 rounded-2xl p-6 opacity-60 cursor-not-allowed">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-3xl">
              🔒
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-400">
                  EP {episode.episode}
                </span>
                {episode.isPremium && (
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    PRO
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-500">{getText(episode.title)}</h3>
              <p className="text-sm text-gray-400 mt-1">
                Complete Level {episode.requiredLevel} to unlock
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Link href={`/story/${episode.id}`}>
          <div className={cn(
            'rounded-2xl p-6 transition-all hover:shadow-xl cursor-pointer border-2',
            isCompleted
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300'
              : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-400'
          )}>
            <div className="flex items-center gap-4">
              <div className={cn(
                'w-16 h-16 rounded-xl flex items-center justify-center text-3xl',
                isCompleted ? 'bg-green-100' : 'bg-purple-100'
              )}>
                {episode.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    'text-xs font-medium',
                    isCompleted ? 'text-green-600' : 'text-purple-600'
                  )}>
                    EP {episode.episode}
                  </span>
                  {isCompleted && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                      ✓ Completed
                    </span>
                  )}
                </div>
                <h3 className={cn(
                  'font-bold',
                  isCompleted ? 'text-green-800' : 'text-purple-800'
                )}>
                  {getText(episode.title)}
                </h3>
                <p className={cn(
                  'text-sm mt-1',
                  isCompleted ? 'text-green-600' : 'text-purple-600'
                )}>
                  {getText(episode.description)}
                </p>
              </div>
              <div className="text-right">
                {isCompleted && completedScore !== undefined && (
                  <div className="text-green-600 font-bold">{completedScore} pts</div>
                )}
                <div className={cn(
                  'text-sm',
                  isCompleted ? 'text-green-500' : 'text-purple-500'
                )}>
                  +{episode.rewards.xp} XP
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
