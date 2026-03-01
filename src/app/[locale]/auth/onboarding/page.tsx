'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link } from '@/i18n/routing';

const interests = [
  'music', 'sports', 'art', 'cooking', 'gaming', 'travel',
  'photography', 'tech', 'fitness', 'movies', 'books', 'fashion',
  'nature', 'nightlife'
] as const;

const iranianCities = [
  'Tehran', 'Mashhad', 'Isfahan', 'Shiraz', 'Tabriz', 'Karaj',
  'Qom', 'Ahvaz', 'Kermanshah', 'Rasht', 'Kerman', 'Urmia',
  'Zahedan', 'Hamadan', 'Yazd', 'Arak', 'Ardabil', 'Bandar Abbas'
];

const internationalCities = [
  'Los Angeles', 'London', 'Toronto', 'Sydney', 'Berlin', 'Paris',
  'Amsterdam', 'Stockholm', 'Dubai', 'Istanbul', 'Vienna', 'Hamburg'
];

const allCities = [...iranianCities, ...internationalCities].sort();

type Step = 'picture' | 'name' | 'location' | 'interests' | 'birthday';

export default function OnboardingPage() {
  const t = useTranslations('onboarding');
  const tInterests = useTranslations('onboarding.interests');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const supabase = createClient();

  const [step, setStep] = useState<Step>('name');
  const [displayName, setDisplayName] = useState('');
  const [city, setCity] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps: Step[] = ['name', 'location', 'interests', 'birthday'];
  const currentStepIndex = steps.indexOf(step);

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex]);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleComplete = async () => {
    setIsLoading(true);
    setError(null);

    // Calculate age
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    if (age < 18) {
      setError('You must be 18 or older to use Meetra');
      setIsLoading(false);
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('Not authenticated');
      setIsLoading(false);
      return;
    }

    const { error: profileError } = await supabase.from('profiles').upsert({
      id: user.id,
      display_name: displayName,
      city: city,
      interests: selectedInterests,
      date_of_birth: birthDate,
      language: locale,
    });

    if (profileError) {
      setError(profileError.message);
      setIsLoading(false);
      return;
    }

    router.push('/feed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)] py-12 px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-3xl font-bold text-[var(--primary)]">MEETRA</span>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            {t('welcome')}
          </h1>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${i <= currentStepIndex
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--border)] text-[var(--text-secondary)]'
                  }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--primary)] transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] p-8">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-[var(--error)]/10 text-[var(--error)] text-sm">
              {error}
            </div>
          )}

          {/* Name Step */}
          {step === 'name' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {t('name.title')}
                </h2>
              </div>
              <Input
                placeholder={t('name.placeholder')}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                autoFocus
              />
              <Button
                fullWidth
                onClick={handleNext}
                disabled={!displayName.trim()}
              >
                {tCommon('next')}
              </Button>
            </div>
          )}

          {/* Location Step */}
          {step === 'location' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {t('location.title')}
                </h2>
                <p className="text-[var(--text-secondary)] mt-1">
                  {t('location.subtitle')}
                </p>
              </div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5"
              >
                <option value="">{t('location.selectCity')}</option>
                <optgroup label="Iran">
                  {iranianCities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </optgroup>
                <optgroup label="International">
                  {internationalCities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </optgroup>
              </select>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={handleBack}>
                  {tCommon('back')}
                </Button>
                <Button fullWidth onClick={handleNext} disabled={!city}>
                  {tCommon('next')}
                </Button>
              </div>
            </div>
          )}

          {/* Interests Step */}
          {step === 'interests' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {t('interests.title')}
                </h2>
                <p className="text-[var(--text-secondary)] mt-1">
                  {t('interests.subtitle')}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedInterests.includes(interest)
                        ? 'bg-[var(--primary)] text-white'
                        : 'bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--border)]'
                      }`}
                  >
                    {tInterests(interest)}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={handleBack}>
                  {tCommon('back')}
                </Button>
                <Button
                  fullWidth
                  onClick={handleNext}
                  disabled={selectedInterests.length === 0}
                >
                  {tCommon('next')}
                </Button>
              </div>
            </div>
          )}

          {/* Birthday Step */}
          {step === 'birthday' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {t('birthday.title')}
                </h2>
                <p className="text-[var(--text-secondary)] mt-1">
                  {t('birthday.subtitle')}
                </p>
              </div>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
              />
              <div className="flex gap-3">
                <Button variant="secondary" onClick={handleBack}>
                  {tCommon('back')}
                </Button>
                <Button
                  fullWidth
                  onClick={handleComplete}
                  isLoading={isLoading}
                  disabled={!birthDate}
                >
                  {tCommon('done')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
