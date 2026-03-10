import { MultilingualText } from './index';
import { VocabularyItem } from './story';

// Area types for Korea regions
export type TravelArea = 'seoul' | 'busan' | 'jeju';

// Situation types at each location
export type SituationType = 'cafe' | 'restaurant' | 'shopping' | 'transport' | 'sightseeing' | 'market';

// Travel destination/location
export interface TravelLocation {
  id: string;
  romanization: string;      // "Hong-dae"
  korean: string;            // "홍대"
  name: MultilingualText;    // Full name in all languages
  description: MultilingualText;
  image?: string;            // Background image path
  icon: string;              // Emoji icon
  area: TravelArea;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPremium: boolean;
  order: number;             // Display order within area
}

// Situation quiz at a location
export interface TravelSituation {
  id: string;
  locationId: string;
  type: SituationType;
  scenario: MultilingualText;     // "You're at a cafe..."
  question: MultilingualText;     // "How do you order coffee?"
  choices: SituationChoice[];
  teaching: {
    vocabulary: VocabularyItem[];
    tip?: MultilingualText;
  };
  xpReward: number;
}

// Choice for situation quiz
export interface SituationChoice {
  id: string;
  korean: string;
  romanization: string;
  translation: MultilingualText;
  isCorrect: boolean;
  hint?: MultilingualText;        // Hint shown with option
  feedback: MultilingualText;     // Feedback after selection
}

// Korean match quiz for location names
export interface KoreanMatchOption {
  korean: string;
  romanization: string;
  hint: MultilingualText;         // Meaning/description hint
}

// Game phase states (extended for day trip simulation)
export type TravelGamePhase =
  // Start phases
  | 'airport'                  // Start at airport
  | 'selecting'                // Choose destination
  | 'quiz-intro'               // "깜짝 단어 퀴즈!!" intro before korean-quiz
  | 'korean-quiz'              // Find Korean name

  // Transportation phases
  | 'phrase-learning'           // Learn useful phrases before situation quiz
  | 'transport-selecting'      // Choose transport (subway/bus/taxi)
  | 'transport-station-quiz'   // Find station name
  | 'transport-dialogue'       // "어디로 가세요?" conversation

  // Arrival
  | 'arriving'                 // Arrival celebration

  // Activity phases
  | 'activity-selecting'       // Choose activity (cafe/restaurant/hotel)
  | 'activity-quiz'            // Activity situation quiz

  // Sign reading (category-based)
  | 'sign-reading'             // Legacy: Read Korean signs mission
  | 'signs-transport'          // Transport-related signs (after transport)
  | 'signs-activity'           // Activity-related signs (after activity)
  | 'signs-attraction'         // Attraction-related signs (after attraction)
  | 'signs-restaurant'         // Restaurant-related signs (after dinner)

  // Attraction phases
  | 'attraction-selecting'     // Choose tourist attraction
  | 'attraction-ticket'        // Buy ticket quiz
  | 'attraction-hours'         // Ask hours quiz

  // Dinner phases
  | 'dinner-menu'              // Read menu
  | 'dinner-order'             // Order food

  // Hotel return
  | 'hotel-checkin'            // Hotel check-in

  // Completion
  | 'day-complete'             // Day summary
  | 'learning-review'          // Review learned words with TTS
  | 'situation-quiz'           // Legacy: Situation at location
  | 'situation-result'         // Legacy: Result of situation quiz
  | 'complete';                // All locations visited

// ============================================
// TRANSPORTATION TYPES
// ============================================

export type TransportType = 'subway' | 'bus' | 'taxi';

export interface TransportOption {
  id: string;
  type: TransportType;
  korean: string;           // '지하철'
  romanization: string;     // 'jihacheol'
  icon: string;             // '🚇'
  description: MultilingualText;
}

export interface TransportQuiz {
  id: string;
  transportType: TransportType;
  destinationId: string;    // Which destination this quiz is for
  type: 'station-name' | 'dialogue' | 'fare';
  scenario: MultilingualText;
  question: MultilingualText;
  targetKorean?: string;    // Target station name to find
  choices: SituationChoice[];
  teaching: {
    vocabulary: VocabularyItem[];
    tip?: MultilingualText;
  };
  xpReward: number;
}

// ============================================
// SIGN READING TYPES
// ============================================

export type SignType = 'exit' | 'restroom' | 'menu' | 'store' | 'warning' | 'info' | 'direction' | 'transport' | 'activity' | 'attraction' | 'restaurant';

export interface KoreanSign {
  id: string;
  korean: string;           // '출구'
  romanization: string;     // 'chulgu'
  translation: MultilingualText;
  type: SignType;
  category?: string;        // 'subway', 'restaurant', 'street'
  hint?: MultilingualText;  // Character breakdown hint
}

export interface SignChoice {
  id: string;
  text: MultilingualText;
  isCorrect: boolean;
  feedback: MultilingualText;
}

export interface SignReadingQuiz {
  id: string;
  locationId?: string;
  sign: KoreanSign;
  question: MultilingualText;
  choices: SignChoice[];
  xpReward: number;
}

// ============================================
// ACTIVITY TYPES
// ============================================

export type ActivityType = 'cafe' | 'restaurant' | 'hotel';

export interface DayActivity {
  id: string;
  type: ActivityType;
  korean: string;           // '카페'
  romanization: string;     // 'kape'
  icon: string;             // '☕'
  name: MultilingualText;
  description?: MultilingualText;
}

export interface ActivitySituation {
  id: string;
  activityId: string;
  activityType: ActivityType;
  scenario: MultilingualText;
  question: MultilingualText;
  choices: SituationChoice[];
  teaching: {
    vocabulary: VocabularyItem[];
    tip?: MultilingualText;
  };
  xpReward: number;
}

// ============================================
// TOURIST ATTRACTION TYPES
// ============================================

export interface TouristAttraction {
  id: string;
  locationId: string;       // Associated travel location
  korean: string;           // '경복궁'
  romanization: string;     // 'Gyeongbokgung'
  name: MultilingualText;
  description: MultilingualText;
  icon: string;             // '🏯'
  ticketPrice: string;      // '3,000원'
  hours: string;            // '09:00 - 18:00'
}

export interface AttractionSituation {
  id: string;
  attractionId: string;
  type: 'ticket' | 'hours' | 'photo' | 'direction';
  scenario: MultilingualText;
  question: MultilingualText;
  choices: SituationChoice[];
  teaching: {
    vocabulary: VocabularyItem[];
    tip?: MultilingualText;
  };
  xpReward: number;
}

// ============================================
// DAY SCHEDULE TYPES
// ============================================

export interface DaySchedule {
  id: string;
  locationId: string;
  dayNumber: number;
  title: MultilingualText;
  description: MultilingualText;
  totalXpAvailable: number;
}

// ============================================
// DAY PROGRESS TYPES
// ============================================

export interface DayProgress {
  scheduleId: string;
  locationId: string;
  currentPhase: TravelGamePhase;

  // Selections made
  selectedTransport: TransportType | null;
  selectedActivity: ActivityType | null;
  selectedAttraction: string | null;

  // Completion tracking
  completedPhases: TravelGamePhase[];
  signsRead: string[];
  phrasesLearned: string[];

  // Stats
  xpEarned: number;
  correctAnswers: number;
  totalQuestions: number;
}

// Travel progress tracking
export interface TravelProgress {
  currentLocation: string | null;
  visitedLocations: string[];
  completedSituations: string[];
  totalXp: number;
  currentStreak: number;         // Correct answers in a row
  unlockedAreas: TravelArea[];
}

// User's travel progress for persistence
export interface UserTravelProgress {
  progress: TravelProgress;
  lastPlayedAt?: Date;
  bestStreak: number;
  totalGamesPlayed: number;
}

// Props for TravelGame component
export interface TravelGameProps {
  initialArea?: TravelArea;
  onComplete?: (xp: number, visitedCount: number) => void;
}

// Destination selection props
export interface DestinationOption {
  location: TravelLocation;
  isVisited: boolean;
  isLocked: boolean;
}
