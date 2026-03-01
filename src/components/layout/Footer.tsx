'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[var(--primary)]">MEETRA</span>
            </Link>
            <p className="mt-4 text-[var(--text-secondary)] max-w-md">
              Where Iran Comes Alive. Connect with people, discover events, and build meaningful friendships.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm text-center sm:text-start">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
