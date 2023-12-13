import type { Metadata } from 'next';

import PlausibleAnalytics from 'next-plausible';

import './globals.css';

import { getFontConfig } from '@/fonts/fonts.config';
const { accent, sans } = getFontConfig();

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Providers } from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${accent.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics domain="velolider" />
        {/* <meta name="og:image" /> is generated. */}
        <meta property="og:image:alt" content="VeliLider" />
        {/* <meta name="twitter:image" /> is generated. */}
        <meta property="og:image:alt" content="VeloLider" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="VeloLider – Blog"
          href="/rss.xml"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen" data-page-root>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

/**
 * Exports
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://velolider'),
  authors: { name: 'ВелоЛидер' },
  creator: 'ВелоЛидер',
  publisher: 'ВелоЛидер',
  title: {
    template: '%s | ВелоЛидер',
    default: 'ВелоЛидер',
  },
  description:
    'Официальный сайт лидирующей команды Воронежской области',
  keywords: [
    'Лидер',
    'Велоспорт',
    'ВелоЛидер',
    'Спорт',
    'Победа будет за нами',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  alternates: {
    canonical: 'https://velolider',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@velolider',
    creator: '@velolider',
    title: 'ВелооЛидер – Велоспорт',
    description:
      'Официальный сайт лидирующей команды Воронежской области',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Alexander',
    lastName: 'Zyablitsky',
    username: 'suyxhs',
    gender: 'he/him',
    emails: ['velolider@gmail.com'],
    url: 'https://velolider',
    siteName: 'ВелоЛидер',
    title: 'Команда ВелоЛидер',
    description:
      'Официальный сайт лидирующей команды Воронежской области',
    countryName: 'Воронеж',
    locale: 'ru_RU',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ВелоЛидер',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default RootLayout;
