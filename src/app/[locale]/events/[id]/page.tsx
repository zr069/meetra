import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { EventDetail } from '@/components/events/EventDetail';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <EventDetail eventId={id} />
    </AppLayout>
  );
}
