import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';
const display = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});
const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});
const origin = 'https://marcosmieli9658-cell.github.io/zaguobinski-eventos';
export const metadata: Metadata = {
  metadataBase: new URL(origin + '/'),
  title: 'Zaguobinski Eventos | Bom churrasco. Bons momentos.',
  description:
    'Churrasco de verdade, buffet completo e cinco cardápios para o seu evento. Conheça a experiência Zaguobinski e solicite seu orçamento.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Zaguobinski Eventos',
    description: 'Feito na brasa. Servido com paixão.',
    type: 'website',
    locale: 'pt_BR',
    url: origin,
    images: [
      {
        url: origin + '/og.jpg',
        width: 1731,
        height: 909,
        alt: 'Zaguobinski Eventos — Bom churrasco. Bons momentos.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaguobinski Eventos',
    description: 'Bom churrasco. Bons momentos.',
    images: [origin + '/og.jpg'],
  },
  icons: { icon: '/zaguobinski-eventos/images/icon-64.png' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
