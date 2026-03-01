'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

export function FeedContent() {
  const t = useTranslations('feed');
  const tEvents = useTranslations('events');

  // Placeholder data - in production this would come from Supabase
  const nearbyEvents = [
    { id: '1', title: 'Coffee Meetup', category: 'meetup', date: '2024-03-15', city: 'Tehran', participants: 12 },
    { id: '2', title: 'Photography Walk', category: 'outdoor', date: '2024-03-18', city: 'Tehran', participants: 8 },
    { id: '3', title: 'Tech Talks', category: 'networking', date: '2024-03-20', city: 'Tehran', participants: 25 },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('title')}</h1>
      </div>

      {/* Nearby Events Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {t('nearbyEvents')}
          </h2>
          <Link href="/events" className="text-[var(--primary)] text-sm font-medium">
            {tEvents('discover')} →
          </Link>
        </div>

        <div className="space-y-4">
          {nearbyEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="bg-white rounded-xl p-4 border border-[var(--border)] hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  {/* Event Image Placeholder */}
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-1">
                      {tEvents(`categories.${event.category}`)}
                    </span>
                    <h3 className="font-semibold text-[var(--text-primary)] truncate">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {new Date(event.date).toLocaleDateString()} • {event.city}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {event.participants} {tEvents('participants')}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New People Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {t('newPeople')}
          </h2>
          <Link href="/discover" className="text-[var(--primary)] text-sm font-medium">
            View All →
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Link key={i} href={`/profile/${i}`}>
              <div className="flex flex-col items-center min-w-[80px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-primary)] text-center">User {i}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Empty State (when no content) */}
      <div className="hidden text-center py-12">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--surface)] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[var(--text-secondary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <p className="text-[var(--text-secondary)] mb-4">{t('empty')}</p>
        <Link href="/discover">
          <Button>Explore</Button>
        </Link>
      </div>
    </div>
  );
}
