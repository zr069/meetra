import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <CityHubsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('landing');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--surface)] to-[var(--primary)]/5 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -end-40 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -start-40 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
            {t('tagline')}
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-4 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col items-center justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="min-w-[280px] text-lg py-5 px-8">
                {t('ctaButton')}
              </Button>
            </Link>
            <p className="mt-4 text-[var(--text-secondary)]">
              {t('ctaSubtext')}
            </p>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative">
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* City cards preview */}
            {['Tehran', 'Berlin', 'LA'].map((city, index) => (
              <div
                key={city}
                className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${
                  index === 0 ? 'from-[var(--primary)]/30 to-[var(--primary)]/10' :
                  index === 1 ? 'from-[var(--secondary)]/30 to-[var(--secondary)]/10' :
                  'from-[var(--primary)]/20 to-[var(--secondary)]/20'
                } shadow-xl flex flex-col items-center justify-center p-6 ${
                  index === 1 ? 'scale-110 z-10' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-3">
                  <span className="text-2xl">
                    {index === 0 ? '🇮🇷' : index === 1 ? '🇩🇪' : '🇺🇸'}
                  </span>
                </div>
                <p className="text-[var(--text-primary)] font-semibold">{city}</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {index === 0 ? '2.5k members' : index === 1 ? '1.8k members' : '3.2k members'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useTranslations('landing.features');

  const features = [
    {
      key: 'globalCommunity',
      emoji: '🌍',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
    {
      key: 'culturalBridge',
      emoji: '🤝',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      key: 'business',
      emoji: '💼',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      key: 'events',
      emoji: '🎉',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      key: 'connect',
      emoji: '💬',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      key: 'cityHubs',
      emoji: '🗺️',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className="group p-8 rounded-2xl bg-[var(--surface)] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--border)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <span className="text-3xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-[var(--text-secondary)]">
                {t(`${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const t = useTranslations('landing.stats');

  const stats = [
    { key: 'iranPopulation', value: '88M+', emoji: '🇮🇷' },
    { key: 'diaspora', value: '4M+', emoji: '🌍' },
    { key: 'community', value: '1', emoji: '🤝' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.key} className="text-white">
              <span className="text-4xl mb-2 block">{stat.emoji}</span>
              <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg opacity-90">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const t = useTranslations('landing.howItWorks');

  const steps = [
    {
      key: 'step1',
      number: '1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      key: 'step2',
      number: '2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      key: 'step3',
      number: '3',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--text-primary)] mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.key} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 start-[60%] w-full h-0.5 bg-[var(--border)]" />
              )}

              {/* Step content */}
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--primary)] border-4 border-[var(--primary)]/20">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -end-2 w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-[var(--text-secondary)] max-w-sm mx-auto">
                {t(`${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityHubsSection() {
  const t = useTranslations('landing.cityHubs');

  const cities = [
    { name: 'Tehran', country: 'Iran', flag: '🇮🇷', members: '2.5k' },
    { name: 'Los Angeles', country: 'USA', flag: '🇺🇸', members: '3.2k' },
    { name: 'Berlin', country: 'Germany', flag: '🇩🇪', members: '1.8k' },
    { name: 'Dubai', country: 'UAE', flag: '🇦🇪', members: '1.5k' },
    { name: 'Toronto', country: 'Canada', flag: '🇨🇦', members: '2.1k' },
    { name: 'London', country: 'UK', flag: '🇬🇧', members: '1.9k' },
    { name: 'Istanbul', country: 'Turkey', flag: '🇹🇷', members: '1.2k' },
    { name: 'Stockholm', country: 'Sweden', flag: '🇸🇪', members: '0.8k' },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={`/hubs/${city.name.toLowerCase().replace(' ', '-')}`}
              className="group p-4 sm:p-6 rounded-xl bg-[var(--surface)] hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[var(--border)] text-center"
            >
              <span className="text-3xl sm:text-4xl mb-2 block">{city.flag}</span>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                {city.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">{city.members} members</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('landing.cta');

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/register">
            <Button size="lg" className="min-w-[220px] bg-white text-[var(--primary)] hover:bg-white/90">
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
