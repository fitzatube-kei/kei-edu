'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useDevMode } from '@/context/DevModeContext';
import {
  TravelLocation,
  TravelSituation,
  TravelGamePhase,
  TravelArea,
  TransportType,
  ActivityType,
  TransportQuiz,
  SignReadingQuiz as SignReadingQuizType,
  ActivitySituation,
  TouristAttraction,
  AttractionSituation,
} from '@/types/travel';
import { getLocationsByArea, getDestinationOptions, getKoreanQuizOptions } from '@/data/travel/locations';
import { getRandomSituation } from '@/data/travel/situations';
import { getTransportOptionsByArea, getStationQuiz, getDynamicDialogueQuiz } from '@/data/travel/transportation';
import { getSignQuizzes, getSignQuizzesByCategory, SignCategory } from '@/data/travel/signs';
import { dayActivities, getRandomActivitySituation } from '@/data/travel/activities';
import { touristAttractions, getSituationsByAttraction } from '@/data/travel/attractions';

// Components
import AirportStart from './AirportStart';
import DestinationSelector from './DestinationSelector';
import KoreanMatchQuiz from './KoreanMatchQuiz';
import LocationArrival from './LocationArrival';
import SituationQuiz from './SituationQuiz';
import TransportSelector from './TransportSelector';
import SignReadingQuiz from './SignReadingQuiz';
import ActivitySelector from './ActivitySelector';
import DayProgress from './DayProgress';
import DayComplete from './DayComplete';
import LearningReview from './LearningReview';

interface TravelDayGameProps {
  initialArea?: TravelArea;
  onComplete?: (xp: number, visitedCount: number) => void;
  onBack?: () => void;
  allowedLocations?: string[]; // empty/undefined = all allowed
}

export default function TravelDayGame({
  initialArea = 'seoul',
  onComplete,
  onBack,
  allowedLocations,
}: TravelDayGameProps) {
  const { t, getText, language } = useLanguage();
  const { progress } = useProgress();
  const { unlockPro } = useDevMode();

  // Check if user has premium access
  const userIsPremium = progress.isPremium || unlockPro;

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

  // New state for enhanced flow
  const [selectedTransport, setSelectedTransport] = useState<TransportType | null>(null);
  const [selectedTransportId, setSelectedTransportId] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(null);
  const [currentTransportQuiz, setCurrentTransportQuiz] = useState<TransportQuiz | null>(null);
  const [currentSignQuizzes, setCurrentSignQuizzes] = useState<SignReadingQuizType[]>([]);
  const [currentSignIndex, setCurrentSignIndex] = useState(0);
  const [currentActivitySituation, setCurrentActivitySituation] = useState<ActivitySituation | null>(null);
  const [selectedAttraction, setSelectedAttraction] = useState<TouristAttraction | null>(null);
  const [currentAttractionSituation, setCurrentAttractionSituation] = useState<AttractionSituation | null>(null);
  const [completedPhases, setCompletedPhases] = useState<TravelGamePhase[]>([]);
  const [signsRead, setSignsRead] = useState<string[]>([]);
  const [phrasesLearned, setPhrasesLearned] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentSignCategory, setCurrentSignCategory] = useState<SignCategory>('transport');
  const [learnedWords, setLearnedWords] = useState<Array<{
    korean: string;
    romanization: string;
    meaning: string;
    category: 'transport' | 'activity' | 'attraction' | 'restaurant' | 'phrase';
  }>>([]);

  // Get available locations for current area
  const areaLocations = getLocationsByArea(currentArea);

  // Scroll to top when phase changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [phase]);

  // Start the game
  const handleStartGame = useCallback(() => {
    let options = getDestinationOptions(currentArea, visitedLocations);
    // Filter by allowed locations if specified
    if (allowedLocations && allowedLocations.length > 0) {
      options = options.filter(loc => allowedLocations.includes(loc.id));
    }
    setDestinationOptions(options);
    setPhase('selecting');
  }, [currentArea, visitedLocations, allowedLocations]);

  // Select destination
  const handleSelectDestination = useCallback((location: TravelLocation) => {
    setSelectedDestination(location);
    const options = getKoreanQuizOptions(location, currentArea);
    setKoreanQuizOptions(options);
    setPhase('korean-quiz');
  }, [currentArea]);

  // Korean quiz result
  const handleKoreanQuizComplete = useCallback((correct: boolean) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + 50);
      // Move to transport selection instead of arriving directly
      setPhase('transport-selecting');
    } else {
      setPhase('selecting');
    }
  }, []);

  // Transport selection
  const handleTransportSelect = useCallback((type: TransportType, id: string) => {
    setSelectedTransport(type);
    setSelectedTransportId(id);
    setTotalXp(prev => prev + 10);

    if (type === 'subway' && selectedDestination) {
      // Get station quiz for this destination
      const stationQuiz = getStationQuiz(selectedDestination.id);
      if (stationQuiz) {
        setCurrentTransportQuiz(stationQuiz);
        setPhase('transport-station-quiz');
      } else {
        // No station quiz, skip to dialogue with dynamic destination
        const dialogueQuiz = getDynamicDialogueQuiz('subway', selectedDestination);
        setCurrentTransportQuiz(dialogueQuiz);
        setPhase('transport-dialogue');
      }
    } else if (selectedDestination) {
      // Use transport ID for specific dialogue (rentcar, tourbus, electric, bus, taxi)
      const dialogueQuiz = getDynamicDialogueQuiz(id, selectedDestination);
      setCurrentTransportQuiz(dialogueQuiz);
      setPhase('transport-dialogue');
    } else {
      setPhase('arriving');
    }
  }, [selectedDestination]);

  // Transport quiz complete
  const handleTransportQuizComplete = useCallback((correct: boolean, xpEarned: number) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
    }
    setCompletedPhases(prev => [...prev, phase]);

    if (phase === 'transport-station-quiz' && selectedDestination) {
      // Move to dialogue with dynamic destination (use ID for specific transport type)
      const dialogueQuiz = getDynamicDialogueQuiz(selectedTransportId || selectedTransport || 'subway', selectedDestination);
      setCurrentTransportQuiz(dialogueQuiz);
      setPhase('transport-dialogue');
    } else if (phase === 'transport-station-quiz') {
      setPhase('arriving');
    } else {
      // Dialogue done, move to arriving
      setPhase('arriving');
    }
  }, [phase, selectedTransport, selectedTransportId, selectedDestination]);

  // Load sign quizzes by category
  const loadSignQuizzesByCategory = useCallback((category: SignCategory) => {
    const quizzes = getSignQuizzesByCategory(category, 2);
    setCurrentSignQuizzes(quizzes);
    setCurrentSignIndex(0);
    setCurrentSignCategory(category);
  }, []);

  // After arrival animation
  const handleArrivalComplete = useCallback(() => {
    if (selectedDestination) {
      setVisitedLocations(prev => [...prev, selectedDestination.id]);
      setCompletedPhases(prev => [...prev, 'arriving']);
      // Move to transport signs (exit, platform, etc.)
      loadSignQuizzesByCategory('transport');
      setPhase('signs-transport');
    }
  }, [selectedDestination, loadSignQuizzesByCategory]);

  // Activity selection
  const handleActivitySelect = useCallback((type: ActivityType) => {
    setSelectedActivity(type);
    setTotalXp(prev => prev + 10);

    // Get a situation for this activity, excluding already completed ones
    const situation = getRandomActivitySituation(type, completedSituations);
    if (situation) {
      setCurrentActivitySituation(situation);
      setPhase('activity-quiz');
    } else {
      // No activity situation, move to attraction
      setPhase('attraction-selecting');
    }
  }, [completedSituations]);

  // Activity quiz complete
  const handleActivityQuizComplete = useCallback((correct: boolean, xpEarned: number) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
      if (currentActivitySituation) {
        setPhrasesLearned(prev => [...prev, currentActivitySituation.id]);
      }
    }
    // Track completed situation to avoid repeats
    if (currentActivitySituation) {
      setCompletedSituations(prev => [...prev, currentActivitySituation.id]);
    }
    setCompletedPhases(prev => [...prev, 'activity-quiz']);

    // Move to activity signs
    loadSignQuizzesByCategory('activity');
    setPhase('signs-activity');
  }, [currentActivitySituation, loadSignQuizzesByCategory]);

  // Sign quiz complete
  const handleSignQuizComplete = useCallback((correct: boolean, xpEarned: number, language: string) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
    }

    const currentQuiz = currentSignQuizzes[currentSignIndex];
    if (currentQuiz) {
      setSignsRead(prev => [...prev, currentQuiz.id]);
      // Add learned word
      setLearnedWords(prev => [...prev, {
        korean: currentQuiz.sign.korean,
        romanization: currentQuiz.sign.romanization,
        meaning: currentQuiz.sign.translation[language as keyof typeof currentQuiz.sign.translation] || currentQuiz.sign.translation.en,
        category: currentSignCategory,
      }]);
    }

    // Check if more signs to read
    if (currentSignIndex < currentSignQuizzes.length - 1) {
      setCurrentSignIndex(prev => prev + 1);
    } else {
      // All signs read, move to next phase based on category
      const phaseMap: Record<SignCategory, { completed: TravelGamePhase; next: TravelGamePhase }> = {
        'transport': { completed: 'signs-transport', next: 'activity-selecting' },
        'activity': { completed: 'signs-activity', next: 'attraction-selecting' },
        'attraction': { completed: 'signs-attraction', next: 'dinner-order' },
        'restaurant': { completed: 'signs-restaurant', next: 'hotel-checkin' },
      };

      const transition = phaseMap[currentSignCategory];
      setCompletedPhases(prev => [...prev, transition.completed]);

      // Handle special cases
      if (currentSignCategory === 'restaurant') {
        // After restaurant signs, go to hotel
        const hotelSituation = getRandomActivitySituation('hotel', completedSituations);
        if (hotelSituation) {
          setCurrentActivitySituation(hotelSituation);
          setPhase('hotel-checkin');
        } else {
          setPhase('learning-review');
        }
      } else if (currentSignCategory === 'attraction') {
        // After attraction signs, go to dinner
        const dinnerSituation = getRandomActivitySituation('restaurant', completedSituations);
        if (dinnerSituation) {
          setCurrentActivitySituation(dinnerSituation);
          setPhase('dinner-order');
        } else {
          // Skip dinner, go to restaurant signs then hotel
          loadSignQuizzesByCategory('restaurant');
          setPhase('signs-restaurant');
        }
      } else {
        setPhase(transition.next);
      }
    }
  }, [currentSignQuizzes, currentSignIndex, currentSignCategory, completedSituations, loadSignQuizzesByCategory]);

  // Attraction selection
  const handleAttractionSelect = useCallback((attraction: TouristAttraction) => {
    setSelectedAttraction(attraction);
    setTotalXp(prev => prev + 10);

    // Get ticket situation
    const situations = getSituationsByAttraction(attraction.id);
    const ticketSituation = situations.find(s => s.type === 'ticket');
    if (ticketSituation) {
      setCurrentAttractionSituation(ticketSituation);
      setPhase('attraction-ticket');
    } else {
      // No ticket situation, check for hours
      const hoursSituation = situations.find(s => s.type === 'hours');
      if (hoursSituation) {
        setCurrentAttractionSituation(hoursSituation);
        setPhase('attraction-hours');
      } else {
        // No situations, move to dinner
        setPhase('dinner-order');
      }
    }
  }, []);

  // Move to hotel check-in phase
  const moveToHotel = useCallback(() => {
    // Skip hotel check-in if user already selected hotel as activity
    if (selectedActivity === 'hotel') {
      // Already did hotel, complete the day
      setTotalXp(prev => prev + 100); // Day completion bonus
      setPhase('day-complete');
      return;
    }

    const hotelSituation = getRandomActivitySituation('hotel', completedSituations);
    if (hotelSituation) {
      setCurrentActivitySituation(hotelSituation);
      setPhase('hotel-checkin');
    } else {
      // No hotel situation available, complete day
      setTotalXp(prev => prev + 100); // Day completion bonus
      setPhase('day-complete');
    }
  }, [selectedActivity, completedSituations]);

  // Move to dinner phase
  const moveToDinner = useCallback(() => {
    // Skip dinner if user already selected restaurant as activity
    if (selectedActivity === 'restaurant') {
      // Already did restaurant, go directly to hotel check-in
      moveToHotel();
      return;
    }

    const dinnerSituation = getRandomActivitySituation('restaurant', completedSituations);
    if (dinnerSituation) {
      setCurrentActivitySituation(dinnerSituation);
      setPhase('dinner-order');
    } else {
      // No dinner situation available, move to hotel
      moveToHotel();
    }
  }, [selectedActivity, completedSituations, moveToHotel]);

  // Attraction quiz complete
  const handleAttractionQuizComplete = useCallback((correct: boolean, xpEarned: number) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
    }
    setCompletedPhases(prev => [...prev, phase]);

    if (phase === 'attraction-ticket' && selectedAttraction) {
      // Move to hours question
      const situations = getSituationsByAttraction(selectedAttraction.id);
      const hoursSituation = situations.find(s => s.type === 'hours');
      if (hoursSituation) {
        setCurrentAttractionSituation(hoursSituation);
        setPhase('attraction-hours');
      } else {
        // No hours situation, move to attraction signs
        loadSignQuizzesByCategory('attraction');
        setPhase('signs-attraction');
      }
    } else {
      // Hours done, move to attraction signs
      loadSignQuizzesByCategory('attraction');
      setPhase('signs-attraction');
    }
  }, [phase, selectedAttraction, loadSignQuizzesByCategory]);

  // Dinner complete
  const handleDinnerComplete = useCallback((correct: boolean, xpEarned: number) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
    }
    // Track completed situation
    if (currentActivitySituation) {
      setCompletedSituations(prev => [...prev, currentActivitySituation.id]);
    }
    setCompletedPhases(prev => [...prev, 'dinner-order']);

    // Move to restaurant signs
    loadSignQuizzesByCategory('restaurant');
    setPhase('signs-restaurant');
  }, [currentActivitySituation, loadSignQuizzesByCategory]);

  // Hotel checkin complete
  const handleHotelComplete = useCallback((correct: boolean, xpEarned: number) => {
    setTotalQuestions(prev => prev + 1);
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xpEarned);
    }
    // Track completed situation
    if (currentActivitySituation) {
      setCompletedSituations(prev => [...prev, currentActivitySituation.id]);
    }
    setCompletedPhases(prev => [...prev, 'hotel-checkin']);

    // Add day completion bonus
    setTotalXp(prev => prev + 100);
    // Go to learning review instead of day-complete
    setPhase('learning-review');
  }, [currentActivitySituation]);

  // Learning review complete
  const handleLearningReviewComplete = useCallback(() => {
    setPhase('day-complete');
  }, []);

  // Day complete - continue or finish
  const handleDayComplete = useCallback(() => {
    onComplete?.(totalXp, visitedLocations.length);
    onBack?.();
  }, [totalXp, visitedLocations.length, onComplete, onBack]);

  // Handle back button
  const handleBack = useCallback(() => {
    if (phase === 'korean-quiz' || phase === 'selecting') {
      setPhase('airport');
    } else if (onBack) {
      onBack();
    }
  }, [phase, onBack]);

  // Render current sign quiz
  const currentSignQuiz = currentSignQuizzes[currentSignIndex];

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
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
              <span className="text-yellow-400">⭐</span>
              <span className="font-bold">{totalXp} XP</span>
            </div>

            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
              <span>📍</span>
              <span>{visitedLocations.length}/{areaLocations.length}</span>
            </div>
          </div>
        </div>

        {/* Day Progress Bar (shown during day) */}
        {phase !== 'airport' && phase !== 'selecting' && phase !== 'korean-quiz' && phase !== 'day-complete' && (
          <div className="px-4 pb-2">
            <DayProgress
              currentPhase={phase}
              completedPhases={completedPhases}
              xpEarned={totalXp}
            />
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`${phase !== 'airport' && phase !== 'selecting' && phase !== 'korean-quiz' && phase !== 'day-complete' ? 'pt-56' : 'pt-16'} pb-8`}>
        <AnimatePresence mode="wait">
          {phase === 'airport' && (
            <AirportStart key="airport" onStart={handleStartGame} />
          )}

          {phase === 'selecting' && (
            <DestinationSelector
              key="selecting"
              destinations={destinationOptions}
              visitedIds={visitedLocations}
              onSelect={handleSelectDestination}
              userIsPremium={userIsPremium}
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

          {phase === 'transport-selecting' && (
            <TransportSelector
              key="transport-selecting"
              options={getTransportOptionsByArea(currentArea)}
              onSelect={handleTransportSelect}
            />
          )}

          {(phase === 'transport-station-quiz' || phase === 'transport-dialogue') && currentTransportQuiz && selectedDestination && (
            <SituationQuiz
              key={phase}
              situation={{
                id: currentTransportQuiz.id,
                locationId: selectedDestination.id,
                type: 'transport',
                scenario: currentTransportQuiz.scenario,
                question: currentTransportQuiz.question,
                choices: currentTransportQuiz.choices,
                teaching: currentTransportQuiz.teaching,
                xpReward: currentTransportQuiz.xpReward,
              }}
              location={selectedDestination}
              onComplete={handleTransportQuizComplete}
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

          {phase === 'activity-selecting' && (
            <ActivitySelector
              key="activity-selecting"
              activities={dayActivities}
              onSelect={handleActivitySelect}
            />
          )}

          {phase === 'activity-quiz' && currentActivitySituation && selectedDestination && (
            <SituationQuiz
              key="activity-quiz"
              situation={{
                id: currentActivitySituation.id,
                locationId: selectedDestination.id,
                type: currentActivitySituation.activityType === 'cafe' ? 'cafe' : 'restaurant',
                scenario: currentActivitySituation.scenario,
                question: currentActivitySituation.question,
                choices: currentActivitySituation.choices,
                teaching: currentActivitySituation.teaching,
                xpReward: currentActivitySituation.xpReward,
              }}
              location={selectedDestination}
              onComplete={handleActivityQuizComplete}
            />
          )}

          {(phase === 'sign-reading' || phase === 'signs-transport' || phase === 'signs-activity' || phase === 'signs-attraction' || phase === 'signs-restaurant') && currentSignQuiz && (
            <SignReadingQuiz
              key={`sign-${currentSignIndex}-${currentSignCategory}`}
              quiz={currentSignQuiz}
              onComplete={(correct, xp) => handleSignQuizComplete(correct, xp, language)}
              signNumber={currentSignIndex + 1}
              totalSigns={currentSignQuizzes.length}
            />
          )}

          {phase === 'attraction-selecting' && (
            <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-8"
              >
                <div className="text-4xl mb-4">🎭</div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {t('travel.selectAttraction')}
                </h2>
              </motion.div>

              <div className="w-full max-w-md space-y-4">
                {touristAttractions.slice(0, 2).map((attraction, index) => (
                  <motion.button
                    key={attraction.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAttractionSelect(attraction)}
                    className="w-full p-5 rounded-2xl text-left bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center text-3xl">
                        {attraction.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-bold text-white">{attraction.korean}</div>
                        <div className="text-sm text-white/60">{attraction.romanization}</div>
                        <div className="text-xs text-white/40 mt-1">
                          {attraction.ticketPrice} • {attraction.hours}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {(phase === 'attraction-ticket' || phase === 'attraction-hours') && currentAttractionSituation && selectedDestination && (
            <SituationQuiz
              key={phase}
              situation={{
                id: currentAttractionSituation.id,
                locationId: selectedDestination.id,
                type: 'sightseeing',
                scenario: currentAttractionSituation.scenario,
                question: currentAttractionSituation.question,
                choices: currentAttractionSituation.choices,
                teaching: currentAttractionSituation.teaching || { vocabulary: [] },
                xpReward: currentAttractionSituation.xpReward,
              }}
              location={selectedDestination}
              onComplete={handleAttractionQuizComplete}
            />
          )}

          {phase === 'dinner-order' && currentActivitySituation && selectedDestination && (
            <SituationQuiz
              key="dinner-order"
              situation={{
                id: currentActivitySituation.id,
                locationId: selectedDestination.id,
                type: 'restaurant',
                scenario: currentActivitySituation.scenario,
                question: currentActivitySituation.question,
                choices: currentActivitySituation.choices,
                teaching: currentActivitySituation.teaching,
                xpReward: currentActivitySituation.xpReward,
              }}
              location={selectedDestination}
              onComplete={handleDinnerComplete}
            />
          )}

          {phase === 'hotel-checkin' && currentActivitySituation && selectedDestination && (
            <SituationQuiz
              key="hotel-checkin"
              situation={{
                id: currentActivitySituation.id,
                locationId: selectedDestination.id,
                type: 'restaurant',
                scenario: currentActivitySituation.scenario,
                question: currentActivitySituation.question,
                choices: currentActivitySituation.choices,
                teaching: currentActivitySituation.teaching,
                xpReward: currentActivitySituation.xpReward,
              }}
              location={selectedDestination}
              onComplete={handleHotelComplete}
            />
          )}

          {phase === 'learning-review' && (
            <LearningReview
              key="learning-review"
              learnedItems={learnedWords}
              xpEarned={totalXp}
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
              onComplete={handleLearningReviewComplete}
            />
          )}

          {phase === 'day-complete' && selectedDestination && (
            <DayComplete
              key="day-complete"
              locationName={selectedDestination.korean}
              xpEarned={totalXp}
              phrasesLearned={phrasesLearned.length}
              signsRead={signsRead.length}
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
              onContinue={handleDayComplete}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
