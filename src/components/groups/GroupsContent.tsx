'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { GroupCard } from './GroupCard';

type Filter = 'discover' | 'myGroups';

const mockGroups = [
  {
    id: '1',
    name: 'Tehran Photography Club',
    description: 'For all photography enthusiasts in Tehran',
    category: 'photography',
    city: 'Tehran',
    members: 156,
    isPublic: true,
    isMember: true,
  },
  {
    id: '2',
    name: 'Coffee Lovers',
    description: 'Discover the best cafés and meet fellow coffee addicts',
    category: 'food',
    city: 'Tehran',
    members: 89,
    isPublic: true,
    isMember: true,
  },
  {
    id: '3',
    name: 'Tech Talks Tehran',
    description: 'Weekly tech discussions and networking',
    category: 'tech',
    city: 'Tehran',
    members: 234,
    isPublic: true,
    isMember: false,
  },
  {
    id: '4',
    name: 'Hiking Adventures',
    description: 'Weekly hiking trips around Iran',
    category: 'outdoor',
    city: 'Tehran',
    members: 312,
    isPublic: true,
    isMember: false,
  },
  {
    id: '5',
    name: 'Book Club Iran',
    description: 'Monthly book discussions and meetups',
    category: 'books',
    city: 'Tehran',
    members: 78,
    isPublic: true,
    isMember: true,
  },
];

export function GroupsContent() {
  const t = useTranslations('groups');
  const [filter, setFilter] = useState<Filter>('discover');

  const filteredGroups = filter === 'myGroups'
    ? mockGroups.filter(g => g.isMember)
    : mockGroups;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('title')}</h1>
        <Link href="/groups/create">
          <Button size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {t('create')}
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('discover')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'discover'
              ? 'bg-[var(--primary)] text-white'
              : 'bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--primary)]'
          }`}
        >
          {t('discover')}
        </button>
        <button
          onClick={() => setFilter('myGroups')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'myGroups'
              ? 'bg-[var(--primary)] text-white'
              : 'bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--primary)]'
          }`}
        >
          {t('myGroups')}
        </button>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)] mb-4">{t('noGroups')}</p>
          <Link href="/groups/create">
            <Button>{t('create')}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
