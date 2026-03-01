import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { FeedContent } from '@/components/feed/FeedContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FeedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <FeedContent />
    </AppLayout>
  );
}
