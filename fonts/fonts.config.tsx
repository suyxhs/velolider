import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const uxum = localFont({
  display: 'swap',
  variable: '--font-uxum',
  src: [
    {
      path: './Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const getFontConfig = () => ({
  accent: uxum,
  sans: inter,
});
