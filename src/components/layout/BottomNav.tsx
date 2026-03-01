'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

const navItems = [
  {
    key: 'feed',
    href: '/feed',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={active ? 0 : 1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    key: 'discover',
    href: '/discover',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={active ? 0 : 1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    key: 'createEvent',
    href: '/events/create',
    icon: (_active: boolean) => (
      <div className="w-12 h-12 -mt-4 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    ),
    isCenter: true,
  },
  {
    key: 'chat',
    href: '/chat',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={active ? 0 : 1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    key: 'profile',
    href: '/profile',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={active ? 0 : 1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 start-0 end-0 z-50 bg-white border-t border-[var(--border)] pb-safe md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          if (item.isCenter) {
            return (
              <Link
                key={item.key}
                href={item.href}
                className="flex flex-col items-center justify-center"
              >
                {item.icon(false)}
              </Link>
            );
          }

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] py-2
                ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'}
              `}
            >
              {item.icon(isActive)}
              <span className="text-xs font-medium">{t(item.key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
