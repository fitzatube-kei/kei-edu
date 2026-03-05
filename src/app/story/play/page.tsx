'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TravelDayGame } from '@/components/travel';
import { TravelArea } from '@/types/travel';

function TravelGameWrapper() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const area = (searchParams.get('area') as TravelArea) || 'seoul';

  const handleComplete = (xp: number, visitedCount: number) => {
    console.log(`Travel complete! XP: ${xp}, Visited: ${visitedCount}`);
    // TODO: Save progress to Firebase/localStorage
  };

  const handleBack = () => {
    router.push('/story');
  };

  return (
    <TravelDayGame
      initialArea={area}
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
}

export default function TravelPlayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-[#440687] to-[#2a0454] flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <TravelGameWrapper />
    </Suspense>
  );
}
