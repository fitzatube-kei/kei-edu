'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TravelLocation, TravelSituation, TravelGamePhase, TravelArea } from '@/types/travel';
import { getLocationsByArea, getDestinationOptions, getKoreanQuizOptions } from '@/data/travel/locations';
import { getRandomSituation } from '@/data/travel/situations';
import AirportStart from './AirportStart';
import DestinationSelector from './DestinationSelector';
import KoreanMatchQuiz from './KoreanMatchQuiz';
import LocationArrival from './LocationArrival';
import SituationQuiz from './SituationQuiz';

interface TravelGameProps {
  initialArea?: TravelArea;
  onComplete?: (xp: number, visitedCount: number) => void;
  onBack?: () => void;
}

export default function TravelGame({ initialArea = 'seoul', onComplete, onBack }: TravelGameProps) {
  const { t } = useLanguage();

  // Game state
  const [phase, setPhase] = useState<TravelGamePhase>('airport');
  const [currentArea] = useState<TravelArea>(initialArea);
  const [selectedDestination, setSelectedDestination] = useState<TravelLocation | null>(null);
  const [currentSituation, setCurrentSituation] = useState<TravelSituation | null>(null);
  const [visitedLocations, setVisitedLocations] = useState<string[]>([]);
  const [completedSituations, setCompletedSituations] = useState<string[]>([]);
  const [totalXp, setTotalXp] = useState(0);
  const [koreanQuizOptions, setKoreanQuizOptions] = useState<TravelLocation[]>([]);
  const [destinationOptions, setDestinationOptions] = useState<TravelLocation[]>([]);

  // Get available locations for current area
  const areaLocations = getLocationsByArea(currentArea);
  const allVisited = visitedLocations.length >= areaLocations.length;

  // Start the game
  const handleStartGame = useCallback(() => {
    const options = getDestinationOptions(currentArea, visitedLocations);
    setDestinationOptions(options);
    setPhase('selecting');
  }, [currentArea, visitedLocations]);

  // Select destination
  const handleSelectDestination = useCallback((location: TravelLocation) => {
    setSelectedDestination(location);
    // Generate quiz options (correct + 2 wrong)
    const options = getKoreanQuizOptions(location, currentArea);
    setKoreanQuizOptions(options);
    setPhase('korean-quiz');
  }, [currentArea]);

  // Korean quiz result
  const handleKoreanQuizComplete = useCallback((correct: boolean) => {
    if (correct && selectedDestination) {
      setTotalXp(prev => prev + 50);
      setPhase('arriving');
    } else {
      // Wrong answer - let them try again or go back
      setPhase('selecting');
    }
  }, [selectedDestination]);

  // After arrival animation, move to situation quiz
  const handleArrivalComplete = useCallback(() => {
    if (selectedDestination) {
      // Mark as visited
      setVisitedLocations(prev => [...prev, selectedDestination.id]);

      // Get a random situation for this location
      const situation = getRandomSituation(selectedDestination.id, completedSituations);
      if (situation) {
        setCurrentSituation(situation);
        setPhase('situation-quiz');
      } else {
        // No more situations, move to next destination
        moveToNextDestination();
      }
    }
  }, [selectedDestination, completedSituations]);

  // Situation quiz complete
  const handleSituationComplete = useCallback((correct: boolean, xpEarned: number) => {
    if (currentSituation) {
      setCompletedSituations(prev => [...prev, currentSituation.id]);
      if (correct) {
        setTotalXp(prev => prev + xpEarned);
      }
    }
    setPhase('situation-result');
  }, [currentSituation]);

  // Move to next destination
  const moveToNextDestination = useCallback(() => {
    const newOptions = getDestinationOptions(currentArea, [...visitedLocations, selectedDestination?.id || '']);

    if (newOptions.length === 0) {
      // All locations visited
      setPhase('complete');
      onComplete?.(totalXp, visitedLocations.length);
    } else {
      setDestinationOptions(newOptions);
      setSelectedDestination(null);
      setCurrentSituation(null);
      setPhase('selecting');
    }
  }, [currentArea, visitedLocations, selectedDestination, totalXp, onComplete]);

  // Handle back button
  const handleBack = useCallback(() => {
    if (phase === 'korean-quiz' || phase === 'selecting') {
      setPhase('airport');
    } else if (onBack) {
      onBack();
    }
  }, [phase, onBack]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#440687] to-[#2a0454] text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#440687]/90 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            {/* XP Display */}
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
              <span className="text-yellow-400">⭐</span>
              <span className="font-bold">{totalXp} XP</span>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
              <span>📍</span>
              <span>{visitedLocations.length}/{areaLocations.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-8">
        <AnimatePresence mode="wait">
          {phase === 'airport' && (
            <AirportStart
              key="airport"
              onStart={handleStartGame}
            />
          )}

          {phase === 'selecting' && (
            <DestinationSelector
              key="selecting"
              destinations={destinationOptions}
              visitedIds={visitedLocations}
              onSelect={handleSelectDestination}
            />
          )}

          {phase === 'korean-quiz' && selectedDestination && (
            <KoreanMatchQuiz
              key="korean-quiz"
              targetLocation={selectedDestination}
              options={koreanQuizOptions}
              onComplete={handleKoreanQuizComplete}
            />
          )}

          {phase === 'arriving' && selectedDestination && (
            <LocationArrival
              key="arriving"
              location={selectedDestination}
              xpEarned={50}
              onContinue={handleArrivalComplete}
            />
          )}

          {phase === 'situation-quiz' && currentSituation && selectedDestination && (
            <SituationQuiz
              key="situation-quiz"
              situation={currentSituation}
              location={selectedDestination}
              onComplete={handleSituationComplete}
            />
          )}

          {phase === 'situation-result' && (
            <motion.div
              key="situation-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">{t('travel.great')}</h2>
              <p className="text-white/80 mb-8 text-center">
                {t('travel.situationComplete')}
              </p>
              <button
                onClick={moveToNextDestination}
                className="px-8 py-4 bg-[#B4D700] text-[#440687] font-bold rounded-full text-lg shadow-lg hover:bg-[#c5e800] transition-colors"
              >
                {allVisited
                  ? t('travel.finishTrip')
                  : t('travel.nextDestination')}
              </button>
            </motion.div>
          )}

          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className="text-8xl mb-6"
              >
                🏆
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">{t('travel.tripComplete')}</h2>
              <p className="text-white/80 text-lg mb-4">
                {t('travel.visitedAll')}
              </p>
              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#B4D700]">{totalXp} XP</div>
                  <div className="text-white/60">{t('travel.totalEarned')}</div>
                </div>
              </div>
              <button
                onClick={onBack}
                className="px-8 py-4 bg-[#B4D700] text-[#440687] font-bold rounded-full text-lg shadow-lg hover:bg-[#c5e800] transition-colors"
              >
                {t('travel.backToMenu')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
