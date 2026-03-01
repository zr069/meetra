import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { EventsContent } from '@/components/events/EventsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <EventsContent />
    </AppLayout>
  );
}
