'use client';

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    city: string;
    bio: string;
    interests: string[];
    avatar: string | null;
  };
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
      {/* Photo */}
      <div className="h-80 bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white/50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 text-[var(--primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Name & basic info */}
        <div className="absolute bottom-4 start-4 end-4 text-white">
          <h2 className="text-2xl font-bold">
            {profile.name}, {profile.age}
          </h2>
          <p className="flex items-center gap-1 text-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {profile.city}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Bio */}
        <p className="text-[var(--text-primary)] mb-4">
          {profile.bio}
        </p>

        {/* Interests */}
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
