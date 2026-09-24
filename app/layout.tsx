import type { Metadata } from 'next';
import { Cormorant_Garamond, Dancing_Script, Montserrat } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const body = Montserrat({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const script = Dancing_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: 'Amanda Rodrigues | Nail Designer em Mogi das Cruzes',
  description:
    'Especialista em Molde F1 no Jardim Universo, em Mogi das Cruzes. Conheça os trabalhos e agende seu horário pelo WhatsApp.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} ${script.variable}`}>{children}</body>
    </html>
  );
}
