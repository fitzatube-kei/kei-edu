'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TravelGamePhase } from '@/types/travel';

interface DayProgressProps {
  currentPhase: TravelGamePhase;
  completedPhases: TravelGamePhase[];
  xpEarned: number;
  onStepClick?: (stepId: string) => void;
}

interface PhaseStep {
  id: string;
  phases: TravelGamePhase[];
  icon: string;
  label: string;
}

// Main steps - Signs quizzes happen between each step
const daySteps: PhaseStep[] = [
  { id: 'transport', phases: ['transport-selecting', 'transport-station-quiz', 'transport-dialogue', 'signs-transport'], icon: '🚇', label: 'Transport' },
  { id: 'activity', phases: ['activity-selecting', 'activity-quiz', 'signs-activity'], icon: '☕', label: 'Activity' },
  { id: 'attraction', phases: ['attraction-selecting', 'attraction-ticket', 'attraction-hours', 'signs-attraction'], icon: '🎭', label: 'Attraction' },
  { id: 'dinner', phases: ['dinner-menu', 'dinner-order', 'signs-restaurant'], icon: '🍽️', label: 'Dinner' },
  { id: 'hotel', phases: ['hotel-checkin'], icon: '🏨', label: 'Hotel' },
];

export default function DayProgress({
  currentPhase,
  completedPhases,
  xpEarned,
  onStepClick,
}: DayProgressProps) {
  const getStepStatus = (step: PhaseStep): 'completed' | 'current' | 'pending' => {
    // Check if any phase in this step is current
    if (step.phases.includes(currentPhase)) {
      return 'current';
    }

    // Check if all phases in this step are completed
    const allCompleted = step.phases.some(phase => completedPhases.includes(phase));
    if (allCompleted) {
      return 'completed';
    }

    return 'pending';
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-4"
    >
      {/* XP Display */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/60 text-sm">Today&apos;s Progress</span>
        <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full">
          <span className="text-lg">⭐</span>
          <span className="text-yellow-400 font-bold">{xpEarned} XP</span>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {daySteps.map((step, index) => {
          const status = getStepStatus(step);
          const isLast = index === daySteps.length - 1;

          return (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {status === 'completed' && onStepClick ? (
                  <button
                    onClick={() => onStepClick(step.id)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all bg-green-500 cursor-pointer hover:ring-2 hover:ring-white/50 hover:scale-110 active:scale-95"
                  >
                    ✓
                  </button>
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
                      status === 'completed'
                        ? 'bg-green-500'
                        : status === 'current'
                          ? 'bg-[#B4D700] animate-pulse'
                          : 'bg-white/10'
                    }`}
                  >
                    {status === 'completed' ? '✓' : step.icon}
                  </div>
                )}
                <span
                  className={`text-xs mt-1 ${
                    status === 'current' ? 'text-[#B4D700]' : 'text-white/40'
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={`flex-1 h-0.5 mx-1 ${
                    status === 'completed' ? 'bg-green-500' : 'bg-white/10'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}
