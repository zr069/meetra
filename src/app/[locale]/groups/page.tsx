import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { GroupsContent } from '@/components/groups/GroupsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GroupsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <GroupsContent />
    </AppLayout>
  );
}
