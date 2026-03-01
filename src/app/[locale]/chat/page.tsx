import { setRequestLocale } from 'next-intl/server';
import { AppLayout } from '@/components/layout/AppLayout';
import { ChatList } from '@/components/chat/ChatList';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ChatPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AppLayout>
      <ChatList />
    </AppLayout>
  );
}
