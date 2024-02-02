import './globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';

export const inter = Inter({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Providers dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Providers>
    </main>
  );
}
