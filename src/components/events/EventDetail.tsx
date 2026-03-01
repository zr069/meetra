'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

interface EventDetailProps {
  eventId: string;
}

export function EventDetail({ eventId }: EventDetailProps) {
  const t = useTranslations('events');
  const [isGoing, setIsGoing] = useState(false);
  const [isInterested, setIsInterested] = useState(false);

  // Placeholder event data
  const event = {
    id: eventId,
    title: 'Coffee & Connect Meetup',
    description: `Join us for an amazing coffee meetup where you can meet fellow coffee lovers and make new friends!

We'll gather at a cozy café in the heart of Tehran, share stories, and enjoy some great coffee together. Whether you're new to the city or looking to expand your social circle, this is the perfect opportunity.

What to expect:
• Friendly atmosphere
• Great coffee
• Interesting conversations
• New connections

Don't miss out on this chance to be part of our growing community!`,
    category: 'meetup',
    date: '2024-03-15T10:00:00',
    city: 'Tehran',
    address: 'Valiasr Street, Sam Café',
    participants: 12,
    maxParticipants: 20,
    creator: {
      id: '1',
      name: 'Ali M.',
      avatar: null,
    },
    attendees: [
      { id: '1', name: 'Ali', avatar: null },
      { id: '2', name: 'Sara', avatar: null },
      { id: '3', name: 'Reza', avatar: null },
      { id: '4', name: 'Mina', avatar: null },
      { id: '5', name: 'Amir', avatar: null },
    ],
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header Image */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30">
        <Link
          href="/events"
          className="absolute top-4 start-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-[var(--primary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Category & Title */}
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-3">
          {t(`categories.${event.category}`)}
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          {event.title}
        </h1>

        {/* Date & Location */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>{event.address}, {event.city}</span>
          </div>
        </div>

        {/* Creator */}
        <Link href={`/profile/${event.creator.id}`}>
          <div className="flex items-center gap-3 p-4 bg-[var(--surface)] rounded-xl mb-6">
            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Hosted by</p>
              <p className="font-medium text-[var(--text-primary)]">{event.creator.name}</p>
            </div>
          </div>
        </Link>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">About</h2>
          <p className="text-[var(--text-secondary)] whitespace-pre-line">
            {event.description}
          </p>
        </div>

        {/* Attendees */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            {event.participants}
            {event.maxParticipants && `/${event.maxParticipants}`} {t('participants')}
          </h2>
          <div className="flex -space-x-2">
            {event.attendees.slice(0, 8).map((attendee, i) => (
              <div
                key={attendee.id}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                style={{ zIndex: event.attendees.length - i }}
              >
                {attendee.name[0]}
              </div>
            ))}
            {event.participants > 8 && (
              <div className="w-10 h-10 rounded-full bg-[var(--surface)] border-2 border-white flex items-center justify-center text-[var(--text-secondary)] text-sm font-medium">
                +{event.participants - 8}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            fullWidth
            variant={isGoing ? 'primary' : 'outline'}
            onClick={() => {
              setIsGoing(!isGoing);
              setIsInterested(false);
            }}
          >
            {isGoing ? '✓ ' : ''}{t('going')}
          </Button>
          <Button
            fullWidth
            variant={isInterested ? 'secondary' : 'ghost'}
            onClick={() => {
              setIsInterested(!isInterested);
              setIsGoing(false);
            }}
          >
            {isInterested ? '✓ ' : ''}{t('interested')}
          </Button>
          <Button variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
