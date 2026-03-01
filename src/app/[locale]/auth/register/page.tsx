import { setRequestLocale } from 'next-intl/server';
import { RegisterForm } from '@/components/auth/RegisterForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RegisterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)] py-12 px-4">
      <RegisterForm />
    </div>
  );
}
