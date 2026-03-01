'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SocialButtons } from './SocialButtons';
import { Link } from '@/i18n/routing';

export function RegisterForm() {
  const t = useTranslations('auth');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    // Redirect to onboarding after successful registration
    router.push('/auth/onboarding');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <Link href="/" className="inline-block mb-6">
          <span className="text-3xl font-bold text-[var(--primary)]">MEETRA</span>
        </Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          {t('register')}
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
            autoComplete="new-password"
          />

          <Input
            type="password"
            label={t('confirmPassword')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />

          <p className="text-xs text-[var(--text-secondary)]">
            {t('termsAgreement')}
          </p>

          <Button type="submit" fullWidth isLoading={isLoading}>
            {t('register')}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          {t('hasAccount')}{' '}
          <Link href="/auth/login" className="text-[var(--primary)] font-medium hover:underline">
            {t('login')}
          </Link>
        </p>
      </div>
    </div>
  );
}
