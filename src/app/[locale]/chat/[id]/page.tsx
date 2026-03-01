import { setRequestLocale } from 'next-intl/server';
import { ChatRoom } from '@/components/chat/ChatRoom';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function ChatRoomPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  return <ChatRoom conversationId={id} />;
}
