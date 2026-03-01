'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

interface MatchModalProps {
  profile: {
    id: string;
    name: string;
  };
  onClose: () => void;
}

export function MatchModal({ profile, onClose }: MatchModalProps) {
  const t = useTranslations('discover');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center animate-in zoom-in-95">
        {/* Confetti effect placeholder */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-16 h-16">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-1/4 w-4 h-4 rounded-full bg-[var(--primary)] animate-bounce" />
          <div className="absolute top-4 right-1/4 w-3 h-3 rounded-full bg-[var(--secondary)] animate-bounce delay-100" />
          <div className="absolute bottom-0 left-1/3 w-2 h-2 rounded-full bg-[var(--warning)] animate-bounce delay-200" />
        </div>

        <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">
          {t('match')}
        </h2>
        <p className="text-[var(--text-secondary)] mb-6">
          {t('matchMessage', { name: profile.name })}
        </p>

        <div className="space-y-3">
          <Link href={`/chat`} className="block">
            <Button fullWidth>
              {t('sendMessage')}
            </Button>
          </Link>
          <Button variant="ghost" fullWidth onClick={onClose}>
            {t('keepDiscovering')}
          </Button>
        </div>
      </div>
    </div>
  );
}
