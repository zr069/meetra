export const locales = ['fa', 'en', 'de', 'tr', 'sv', 'fr', 'nl', 'ar', 'he'] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: Locale[] = ['fa', 'ar', 'he'];

export const localeNames: Record<Locale, string> = {
  fa: 'فارسی',
  en: 'English',
  de: 'Deutsch',
  tr: 'Türkçe',
  sv: 'Svenska',
  fr: 'Français',
  nl: 'Nederlands',
  ar: 'العربية',
  he: 'עברית',
};

export const defaultLocale: Locale = 'en';

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}
