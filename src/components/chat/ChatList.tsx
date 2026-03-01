'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const mockConversations = [
  {
    id: '1',
    user: { id: '1', name: 'Sara A.', avatar: null, online: true },
    lastMessage: 'Hey! Nice to meet you 😊',
    timestamp: '2 min ago',
    unread: 2,
  },
  {
    id: '2',
    user: { id: '2', name: 'Reza M.', avatar: null, online: false },
    lastMessage: 'Are you going to the event tomorrow?',
    timestamp: '1 hour ago',
    unread: 0,
  },
  {
    id: '3',
    user: { id: '3', name: 'Mina K.', avatar: null, online: true },
    lastMessage: 'Thanks for connecting!',
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: '4',
    user: { id: '4', name: 'Coffee Meetup Group', avatar: null, online: false },
    lastMessage: 'Ali: See you all tomorrow!',
    timestamp: '2 days ago',
    unread: 5,
    isGroup: true,
  },
];

export function ChatList() {
  const t = useTranslations('chat');

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="sticky top-0 bg-[var(--surface)] px-4 py-4 border-b border-[var(--border)]">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('title')}</h1>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-[var(--border)]">
        {mockConversations.length > 0 ? (
          mockConversations.map((conv) => (
            <Link key={conv.id} href={`/chat/${conv.id}`}>
              <div className="flex items-center gap-4 p-4 hover:bg-white transition-colors">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 flex items-center justify-center">
                    {conv.isGroup ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    ) : (
                      <span className="text-xl font-semibold text-[var(--primary)]">
                        {conv.user.name[0]}
                      </span>
                    )}
                  </div>
                  {/* Online indicator */}
                  {conv.user.online && !conv.isGroup && (
                    <div className="absolute bottom-0 end-0 w-4 h-4 rounded-full bg-[var(--success)] border-2 border-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-semibold truncate ${conv.unread > 0 ? 'text-[var(--text-primary)]' : 'text-[var(--text-primary)]'}`}>
                      {conv.user.name}
                    </h3>
                    <span className="text-xs text-[var(--text-secondary)] flex-shrink-0 ms-2">
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className={`text-sm truncate ${conv.unread > 0 ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}`}>
                    {conv.lastMessage}
                  </p>
                </div>

                {/* Unread badge */}
                {conv.unread > 0 && (
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{conv.unread}</span>
                  </div>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--surface)] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[var(--text-secondary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <p className="text-[var(--text-secondary)]">{t('noMessages')}</p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">{t('startConversation')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
