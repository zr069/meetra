'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface ChatRoomProps {
  conversationId: string;
}

const mockMessages = [
  { id: '1', senderId: 'other', content: 'Hey! Nice to meet you 😊', timestamp: '10:30 AM' },
  { id: '2', senderId: 'me', content: 'Hey Sara! Nice to meet you too!', timestamp: '10:31 AM' },
  { id: '3', senderId: 'other', content: 'I saw you\'re into photography as well', timestamp: '10:32 AM' },
  { id: '4', senderId: 'me', content: 'Yes! I love taking photos around the city', timestamp: '10:33 AM' },
  { id: '5', senderId: 'other', content: 'That\'s awesome! We should do a photo walk sometime', timestamp: '10:34 AM' },
  { id: '6', senderId: 'me', content: 'That sounds great! Are you going to the meetup this weekend?', timestamp: '10:35 AM' },
  { id: '7', senderId: 'other', content: 'Yes! I\'ll be there. See you there?', timestamp: '10:36 AM' },
];

export function ChatRoom({ conversationId }: ChatRoomProps) {
  const t = useTranslations('chat');
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock user data
  const otherUser = {
    id: 'other',
    name: 'Sara A.',
    online: true,
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      senderId: 'me',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[var(--surface)]">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-[var(--border)] px-4 py-3 flex items-center gap-4 z-10">
        <Link href="/chat" className="p-2 -ms-2 rounded-lg hover:bg-[var(--surface)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>

        <Link href={`/profile/${otherUser.id}`} className="flex items-center gap-3 flex-1">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 flex items-center justify-center">
              <span className="font-semibold text-[var(--primary)]">{otherUser.name[0]}</span>
            </div>
            {otherUser.online && (
              <div className="absolute bottom-0 end-0 w-3 h-3 rounded-full bg-[var(--success)] border-2 border-white" />
            )}
          </div>
          <div>
            <h2 className="font-semibold text-[var(--text-primary)]">{otherUser.name}</h2>
            <p className="text-xs text-[var(--text-secondary)]">
              {otherUser.online ? t('online') : t('offline')}
            </p>
          </div>
        </Link>

        <button className="p-2 rounded-lg hover:bg-[var(--surface)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--text-secondary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                message.senderId === 'me'
                  ? 'bg-[var(--primary)] text-white rounded-br-md'
                  : 'bg-white border border-[var(--border)] text-[var(--text-primary)] rounded-bl-md'
              }`}
            >
              <p className="break-words">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.senderId === 'me' ? 'text-white/70' : 'text-[var(--text-secondary)]'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-white border-t border-[var(--border)] p-4 pb-safe">
        <div className="flex items-end gap-3">
          <button className="p-2 rounded-lg hover:bg-[var(--surface)] text-[var(--text-secondary)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t('typePlaceholder')}
              className="w-full px-4 py-2.5 rounded-full border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="p-2.5 rounded-full bg-[var(--primary)] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--primary-hover)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
