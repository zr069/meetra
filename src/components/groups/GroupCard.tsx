'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

interface GroupCardProps {
  group: {
    id: string;
    name: string;
    description: string;
    category: string;
    city: string;
    members: number;
    isPublic: boolean;
    isMember: boolean;
    imageUrl?: string;
  };
}

export function GroupCard({ group }: GroupCardProps) {
  const t = useTranslations('groups');

  return (
    <Link href={`/groups/${group.id}`} className="block cursor-pointer">
      <div className="bg-white rounded-xl overflow-hidden border border-[var(--border)] hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out h-full">
        {/* Image */}
        <div className="h-32 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
          {group.imageUrl ? (
            <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[var(--primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-[var(--text-primary)] line-clamp-1">
              {group.name}
            </h3>
            {group.isMember && (
              <span className="text-xs font-medium text-[var(--success)] bg-[var(--success)]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                Joined
              </span>
            )}
          </div>

          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
            {group.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              {group.members} {t('members')}
            </span>

            {!group.isMember && (
              <Button size="sm" variant="outline">
                {t('join')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
