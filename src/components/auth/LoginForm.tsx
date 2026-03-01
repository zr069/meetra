'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SocialButtons } from './SocialButtons';
import { Link } from '@/i18n/routing';

export function LoginForm() {
  const t = useTranslations('auth');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    router.push('/feed');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <Link href="/" className="inline-block mb-6">
          <span className="text-3xl font-bold text-[var(--primary)]">MEETRA</span>
        </Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          {t('login')}
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] p-8">
        <SocialButtons />

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border)]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[var(--text-secondary)]">
              {tCommon('or')}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-[var(--error)]/10 text-[var(--error)] text-sm">
              {error}
            </div>
          )}

          <Input
            type="email"
            label={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            type="password"
            label={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              {t('forgotPassword')}
            </Link>
          </div>

          <Button type="submit" fullWidth isLoading={isLoading}>
            {t('login')}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          {t('noAccount')}{' '}
          <Link href="/auth/register" className="text-[var(--primary)] font-medium hover:underline">
            {t('register')}
          </Link>
        </p>
      </div>
    </div>
  );
}
