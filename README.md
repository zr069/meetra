# MEETRA

**Where Iran Comes Alive**

A lifestyle & community platform connecting Iranians within Iran, the diaspora, and beyond. Discover events, meet people, join groups, and build meaningful friendships.

## Features

- **Events**: Discover and create events in your city
- **People Discovery**: Swipe-style matching to find new friends
- **Real-time Chat**: Instant messaging with connections and groups
- **Groups & Communities**: Join interest-based communities
- **Multi-language**: 9 languages with RTL support (Farsi, Arabic, Hebrew, English, German, Turkish, Swedish, French, Dutch)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (Email, Google, Apple)
- **Real-time**: Supabase Realtime
- **i18n**: next-intl

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zr069/meetra.git
cd meetra
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Set up Supabase database:
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Run the migration in `supabase/migrations/001_initial_schema.sql` in the SQL editor
   - Enable Google and Apple OAuth in Authentication settings

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
meetra/
├── src/
│   ├── app/[locale]/          # Next.js App Router pages
│   │   ├── auth/              # Authentication pages
│   │   ├── feed/              # Home feed
│   │   ├── events/            # Events feature
│   │   ├── discover/          # People discovery
│   │   ├── chat/              # Messaging
│   │   ├── groups/            # Groups feature
│   │   └── profile/           # User profile
│   ├── components/            # React components
│   │   ├── ui/                # Base UI components
│   │   ├── layout/            # Layout components
│   │   ├── auth/              # Auth components
│   │   ├── events/            # Event components
│   │   ├── discover/          # Discovery components
│   │   ├── chat/              # Chat components
│   │   ├── groups/            # Group components
│   │   └── common/            # Shared components
│   ├── lib/                   # Utilities
│   │   ├── supabase/          # Supabase client
│   │   └── i18n/              # i18n configuration
│   └── i18n/                  # next-intl setup
├── messages/                  # Translation files
├── supabase/                  # Database migrations
└── public/                    # Static assets
```

## Languages

| Code | Language | RTL |
|------|----------|-----|
| fa | فارسی (Farsi) | ✅ |
| en | English | ❌ |
| de | Deutsch | ❌ |
| tr | Türkçe | ❌ |
| sv | Svenska | ❌ |
| fr | Français | ❌ |
| nl | Nederlands | ❌ |
| ar | العربية | ✅ |
| he | עברית | ✅ |

## Design System

### Colors
- **Primary**: #E94560 (Coral Red)
- **Secondary**: #0F3460 (Deep Blue)
- **Background**: #FFFFFF
- **Surface**: #F8F9FA

### Typography
- **LTR**: Inter
- **RTL**: Vazirmatn

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zr069/meetra)

Remember to set up environment variables in Vercel dashboard.

## License

MIT

---

Built with love for the Iranian community worldwide.
