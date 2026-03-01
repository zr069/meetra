'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

export function ProfileContent() {
  const t = useTranslations('profile');
  const tSettings = useTranslations('settings');

  // Mock user data
  const user = {
    id: 'me',
    name: 'You',
    avatar: null,
    bio: 'Love exploring the city and meeting new people!',
    city: 'Tehran',
    interests: ['photography', 'travel', 'music', 'coffee'],
    memberSince: 'March 2024',
    eventsCount: 5,
    groupsCount: 3,
    connectionsCount: 24,
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="text-center mb-8">
        {/* Avatar */}
        <div className="relative inline-block mb-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 text-[var(--primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <button className="absolute bottom-0 end-0 p-2 rounded-full bg-[var(--primary)] text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          </button>
        </div>

        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{user.name}</h1>
        <p className="text-[var(--text-secondary)] flex items-center justify-center gap-1 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {user.city}
        </p>

        <Button variant="secondary" size="sm" className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          {t('editProfile')}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Link href="/events">
          <div className="bg-white rounded-xl p-4 text-center border border-[var(--border)] hover:shadow-md transition-shadow">
            <p className="text-2xl font-bold text-[var(--primary)]">{user.eventsCount}</p>
            <p className="text-sm text-[var(--text-secondary)]">{t('myEvents')}</p>
          </div>
        </Link>
        <Link href="/groups">
          <div className="bg-white rounded-xl p-4 text-center border border-[var(--border)] hover:shadow-md transition-shadow">
            <p className="text-2xl font-bold text-[var(--primary)]">{user.groupsCount}</p>
            <p className="text-sm text-[var(--text-secondary)]">{t('myGroups')}</p>
          </div>
        </Link>
        <div className="bg-white rounded-xl p-4 text-center border border-[var(--border)]">
          <p className="text-2xl font-bold text-[var(--primary)]">{user.connectionsCount}</p>
          <p className="text-sm text-[var(--text-secondary)]">{t('connections')}</p>
        </div>
      </div>

      {/* Bio */}
      <section className="bg-white rounded-xl p-4 border border-[var(--border)] mb-4">
        <h2 className="font-semibold text-[var(--text-primary)] mb-2">{t('bio')}</h2>
        <p className="text-[var(--text-secondary)]">{user.bio}</p>
      </section>

      {/* Interests */}
      <section className="bg-white rounded-xl p-4 border border-[var(--border)] mb-4">
        <h2 className="font-semibold text-[var(--text-primary)] mb-3">{t('interests')}</h2>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section className="bg-white rounded-xl border border-[var(--border)] overflow-hidden">
        <h2 className="font-semibold text-[var(--text-primary)] p-4 border-b border-[var(--border)]">
          {t('settings')}
        </h2>

        <div className="divide-y divide-[var(--border)]">
          <Link href="/settings/language">
            <div className="flex items-center justify-between p-4 hover:bg-[var(--surface)] transition-colors">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className="text-[var(--text-primary)]">{tSettings('language')}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>

          <Link href="/settings/notifications">
            <div className="flex items-center justify-between p-4 hover:bg-[var(--surface)] transition-colors">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="text-[var(--text-primary)]">{tSettings('notifications')}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>

          <Link href="/settings/privacy">
            <div className="flex items-center justify-between p-4 hover:bg-[var(--surface)] transition-colors">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[var(--text-primary)]">{tSettings('privacy')}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>

          <button className="w-full flex items-center justify-between p-4 hover:bg-[var(--surface)] transition-colors text-[var(--error)]">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              <span>Logout</span>
            </div>
          </button>
        </div>
      </section>

      {/* Member since */}
      <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
        {t('memberSince', { date: user.memberSince })}
      </p>
    </div>
  );
}
