import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { updateSession } from './lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip locale processing for auth callback (handled by root-level route)
  if (pathname.startsWith('/auth/callback')) {
    return await updateSession(request);
  }

  // Apply next-intl middleware for locale handling
  const response = intlMiddleware(request);

  // Update Supabase session
  return response;
}

export const config = {
  matcher: [
    '/',
    '/(fa|en|de|tr|sv|fr|nl|ar|he)/:path*',
    '/auth/callback',
  ],
};
