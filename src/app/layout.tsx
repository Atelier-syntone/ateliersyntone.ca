import type { Metadata } from 'next';
import { Lora, Source_Sans_3, DM_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';
import './globals.css';

/* ========================================
   Layout principal — Atelier Syntone
   Chargement des polices, métadonnées, structure HTML.
   ======================================== */

/* Polices Google — chargement optimisé */
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/* Métadonnées SEO */
export const metadata: Metadata = {
  title: {
    default: `${SITE.nom} — ${SITE.slogan}`,
    template: `%s | ${SITE.nom}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.nom,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.nom,
    locale: 'fr_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CA" className={`${lora.variable} ${sourceSans.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-as-creme text-as-gris-fonce">
        <Header />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
