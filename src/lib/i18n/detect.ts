import { locales, defaultLocale, type Locale } from './config';

const STORAGE_KEY = 'meetra-locale';

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }

  // Get browser language
  const browserLang = navigator.language.split('-')[0];

  // Check if browser language is supported
  if (locales.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }

  // Default to English
  return defaultLocale;
}

export function saveLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

export function getSavedLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }
  return null;
}
