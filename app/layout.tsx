/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from 'next';

import PlausibleAnalytics from 'next-plausible';

import './globals.css';

import { getFontConfig } from '@/fonts/fonts.config';
const { accent, sans } = getFontConfig();

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTopButton' 


import { Providers } from './providers';
import Notify from '@/components/Notify/Notify';
import TypeBot from '@/components/Typebot/TypeBot';
import ComponentNavBar from '@/components/Header/BottomNav';
import BackToTop from '@/components/ScrollToTop/BackToTop';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${accent.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics domain="velolider" />
        <meta name="og:image" /> is generated.
        <meta property="og:image:alt" content="Команда ВелоЛидер" />
        {/* <meta name="twitter:image" /> is generated. */}
        {/* <meta property="og:image:alt" content="Konstantin Münster" /> */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="VeloLider – Blog"
          href="/rss.xml"
        />
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(96286272, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
      </head>
      <body>
      <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/96286272" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>
        <Providers>
          <div className="min-h-screen" data-page-root>
          {/* <div className='hidden md:block'>
          <Notify />
          </div> */}
            <Header />
            {/* <ComponentNavBar  />    */}
            {/* <TypeBot /> */}
            <BackToTop />
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
  metadataBase: new URL('https://velolider.vercel.app'),
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
    'Велосипед',
    'Воронеж',
    'Воронежская область',
    'Команда велолидер',
    'Voronezh cycling',
    'Школа',
    'МБУДО СШОР 8',
    'Школа олимпийского резерва',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  alternates: {
    canonical: 'https://velolider.vercel.app',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@velolider',
    creator: '@velolider',
    title: 'ВелоЛидер – Велоспорт',
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
    url: 'https://velolider.vercel.app',
    siteName: 'ВелоЛидер',
    title: 'Команда ВелоЛидер',
    description:
      'Официальный сайт лидирующей команды Воронежской области',
    countryName: 'Воронеж',
    locale: 'en_US',
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
