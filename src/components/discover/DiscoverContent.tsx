'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ProfileCard } from './ProfileCard';
import { MatchModal } from './MatchModal';

const mockProfiles = [
  {
    id: '1',
    name: 'Sara A.',
    age: 25,
    city: 'Tehran',
    bio: 'Love photography and exploring hidden cafés',
    interests: ['photography', 'travel', 'art', 'coffee'],
    avatar: null,
  },
  {
    id: '2',
    name: 'Reza M.',
    age: 28,
    city: 'Tehran',
    bio: 'Software engineer by day, musician by night',
    interests: ['tech', 'music', 'gaming', 'hiking'],
    avatar: null,
  },
  {
    id: '3',
    name: 'Mina K.',
    age: 24,
    city: 'Isfahan',
    bio: 'Bookworm and fitness enthusiast',
    interests: ['books', 'fitness', 'yoga', 'cooking'],
    avatar: null,
  },
  {
    id: '4',
    name: 'Ali R.',
    age: 30,
    city: 'Shiraz',
    bio: 'Adventure seeker and food lover',
    interests: ['travel', 'food', 'nature', 'photography'],
    avatar: null,
  },
];

export function DiscoverContent() {
  const t = useTranslations('discover');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState<typeof mockProfiles[0] | null>(null);

  const currentProfile = mockProfiles[currentIndex];

  const handleConnect = () => {
    // Simulate a match (in production, check if both users connected)
    if (Math.random() > 0.5) {
      setMatchedProfile(currentProfile);
      setShowMatch(true);
    }
    goToNext();
  };

  const handlePass = () => {
    goToNext();
  };

  const goToNext = () => {
    if (currentIndex < mockProfiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const closeMatch = () => {
    setShowMatch(false);
    setMatchedProfile(null);
  };

  if (currentIndex >= mockProfiles.length) {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--surface)] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[var(--text-secondary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          No more profiles
        </h2>
        <p className="text-[var(--text-secondary)]">
          Check back later for new people in your area
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('title')}</h1>
        <button className="p-2 rounded-lg hover:bg-[var(--surface)] cursor-pointer transition-all duration-200 ease-in-out hover:text-[var(--primary)] active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--text-secondary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
        </button>
      </div>

      {/* Profile Card */}
      <ProfileCard profile={currentProfile} />

      {/* Actions */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={handlePass}
          className="w-16 h-16 rounded-full bg-white shadow-lg border border-[var(--border)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-[var(--error)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={handleConnect}
          className="w-20 h-20 rounded-full bg-[var(--primary)] shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer hover:bg-[var(--primary-hover)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      {/* Progress */}
      <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
        {currentIndex + 1} / {mockProfiles.length}
      </p>

      {/* Match Modal */}
      {showMatch && matchedProfile && (
        <MatchModal profile={matchedProfile} onClose={closeMatch} />
      )}
    </div>
  );
}
