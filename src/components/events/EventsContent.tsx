'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { EventCard } from './EventCard';

type ViewMode = 'list' | 'map';
type Filter = 'all' | 'nearby' | 'upcoming';

export function EventsContent() {
  const t = useTranslations('events');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [filter, setFilter] = useState<Filter>('all');

  // Placeholder events
  const events = [
    {
      id: '1',
      title: 'Coffee & Connect',
      description: 'Meet fellow coffee lovers and make new friends',
      category: 'meetup',
      date: '2024-03-15T10:00:00',
      city: 'Tehran',
      participants: 12,
      maxParticipants: 20,
    },
    {
      id: '2',
      title: 'Photography Walk in Darband',
      description: 'Capture the beauty of nature together',
      category: 'outdoor',
      date: '2024-03-18T08:00:00',
      city: 'Tehran',
      participants: 8,
      maxParticipants: 15,
    },
    {
      id: '3',
      title: 'Tech Talks: AI & Future',
      description: 'Discussion about artificial intelligence trends',
      category: 'networking',
      date: '2024-03-20T18:00:00',
      city: 'Tehran',
      participants: 25,
      maxParticipants: 50,
    },
    {
      id: '4',
      title: 'Rooftop Party',
      description: 'Dance the night away with amazing views',
      category: 'party',
      date: '2024-03-22T21:00:00',
      city: 'Tehran',
      participants: 45,
      maxParticipants: 100,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('title')}</h1>
        <Link href="/events/create">
          <Button size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {t('create')}
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
        <div className="flex bg-white rounded-lg border border-[var(--border)] p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer active:scale-95 ${
              viewMode === 'list'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer active:scale-95 ${
              viewMode === 'map'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2">
          {(['all', 'nearby', 'upcoming'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out cursor-pointer active:scale-95 ${
                filter === f
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              {t(f === 'all' ? 'title' : f)}
            </button>
          ))}
        </div>
      </div>

      {/* Events List */}
      {viewMode === 'list' ? (
        <div className="grid gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="aspect-[16/9] rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
          <p className="text-[var(--text-secondary)]">Map View (Coming Soon)</p>
        </div>
      )}

      {/* Empty State */}
      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)] mb-4">{t('noEvents')}</p>
          <Link href="/events/create">
            <Button>{t('create')}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
