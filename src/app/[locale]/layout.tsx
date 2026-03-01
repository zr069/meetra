import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale, getDirection } from '@/lib/i18n/config';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Meetra - Where Iran Comes Alive',
  description: 'Connect with people, discover events, and build meaningful friendships across Iran and the diaspora.',
  keywords: ['Iran', 'community', 'events', 'social', 'meetup', 'friends', 'diaspora'],
  authors: [{ name: 'Meetra' }],
  openGraph: {
    title: 'Meetra - Where Iran Comes Alive',
    description: 'Connect with people, discover events, and build meaningful friendships across Iran and the diaspora.',
    type: 'website',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const direction = getDirection(locale as Locale);

  return (
    <html lang={locale} dir={direction}>
      <body className="antialiased min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
