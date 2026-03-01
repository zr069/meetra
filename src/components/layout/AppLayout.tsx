'use client';

import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Sidebar />
      <main className="md:ms-64 pb-20 md:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
