import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { DiscoverContent } from '@/components/discover/DiscoverContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DiscoverPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <DiscoverContent />
    </AppLayout>
  );
}
