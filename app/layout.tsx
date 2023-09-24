import type { ReactNode } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import { bebas_neue, exo_2 } from './fonts';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: { default: 'Indie Gamer', template: '%s | Indie Gamer' },
  description: 'Only the best indie games, reviewed by you',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={`${bebas_neue.variable} ${exo_2.variable}`}>
      <body className='flex min-h-screen flex-col bg-emerald-100 px-4 py-2 text-lg'>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t-2 border-slate-800 py-2 text-center text-xs'>
          Game data courtesy of:
          <a target='_blank' href='https://rawg.io/'>
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
