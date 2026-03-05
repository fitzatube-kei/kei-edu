// Story mode data exports
import { season1, season1Episodes } from './season1';
import { season2, season2Episodes } from './season2';
import { season3, season3Episodes } from './season3';
import { season4, season4Episodes, season5, season5Episodes, season6, season6Episodes, season7, season7Episodes } from './seasons4to7';
import { season8, season8Episodes, season9, season9Episodes, season10, season10Episodes, season11, season11Episodes } from './seasons8to11';
import { season12, season12Episodes, season13, season13Episodes, season14, season14Episodes, season15, season15Episodes } from './seasons12to15';
import { StorySeason, StoryEpisode } from '@/types/story';

// All seasons (15 total)
export const allSeasons: StorySeason[] = [
  // FREE - Beginner (Seasons 1-3)
  season1,
  season2,
  season3,
  // PRO - Intermediate (Seasons 4-9)
  season4,
  season5,
  season6,
  season7,
  season8,
  season9,
  // PRO - Advanced (Seasons 10-15)
  season10,
  season11,
  season12,
  season13,
  season14,
  season15,
];

// Get seasons by difficulty
export function getSeasonsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): StorySeason[] {
  return allSeasons.filter(s => s.difficulty === difficulty);
}

// Get FREE seasons
export function getFreeSeasons(): StorySeason[] {
  return allSeasons.filter(s => !s.isPremium);
}

// Get PRO seasons
export function getProSeasons(): StorySeason[] {
  return allSeasons.filter(s => s.isPremium);
}

// All episodes (flat array)
export const allEpisodes: StoryEpisode[] = [
  ...season1Episodes,
  ...season2Episodes,
  ...season3Episodes,
  ...season4Episodes,
  ...season5Episodes,
  ...season6Episodes,
  ...season7Episodes,
  ...season8Episodes,
  ...season9Episodes,
  ...season10Episodes,
  ...season11Episodes,
  ...season12Episodes,
  ...season13Episodes,
  ...season14Episodes,
  ...season15Episodes,
];

// Get episode by ID
export function getEpisodeById(episodeId: string): StoryEpisode | undefined {
  return allEpisodes.find(ep => ep.id === episodeId);
}

// Get season by ID
export function getSeasonById(seasonId: number): StorySeason | undefined {
  return allSeasons.find(s => s.id === seasonId);
}

// Get episodes by season
export function getEpisodesBySeason(seasonId: number): StoryEpisode[] {
  const season = getSeasonById(seasonId);
  return season?.episodes || [];
}

// Export individual seasons for backward compatibility
export {
  season1, season2, season3, season4, season5, season6, season7, season8,
  season9, season10, season11, season12, season13, season14, season15
};

export {
  season1Episodes, season2Episodes, season3Episodes, season4Episodes,
  season5Episodes, season6Episodes, season7Episodes, season8Episodes,
  season9Episodes, season10Episodes, season11Episodes, season12Episodes,
  season13Episodes, season14Episodes, season15Episodes
};

// Default export for backward compatibility
export default season1Episodes;
