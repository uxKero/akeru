import type { Metadata, Viewport } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ModalProvider } from '@/context/ModalContext';
import ModalRoot from '@/components/layout/ModalRoot';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const BASE_URL = process.env.APP_URL || 'https://akeru.agency';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Akeru AgentLayer — AI Agents for Business',
    template: '%s | Akeru AgentLayer',
  },
  description:
    'Akeru builds AI agents that automate sales, customer support, and internal operations. We install intelligence into your business — in days, not months.',
  keywords: [
    'AI agents',
    'agentes de IA',
    'automatización de ventas',
    'sales automation',
    'customer support AI',
    'WhatsApp automation',
    'agente inteligente',
    'inteligencia artificial para negocios',
    'AI for business',
    'chatbot empresarial',
    'Akeru',
    'AgentLayer',
  ],
  authors: [{ name: 'Akeru', url: BASE_URL }],
  creator: 'Akeru',
  publisher: 'Akeru AgentLayer',
  category: 'technology',
  applicationName: 'Akeru AgentLayer',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['en_US'],
    url: BASE_URL,
    siteName: 'Akeru AgentLayer',
    title: 'Akeru AgentLayer — AI Agents for Business',
    description:
      'We install AI agents into your business that automate sales, support, and operations — in days, not months.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akeru AgentLayer — AI Agents for Business',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akeru AgentLayer — AI Agents for Business',
    description:
      'We install AI agents into your business that automate sales, support, and operations — in days, not months.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es': `${BASE_URL}`,
      'en': `${BASE_URL}`,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Akeru AgentLayer',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.svg`,
      },
      description:
        'Akeru builds AI agents that automate sales, customer support, and internal operations.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'uxkero@gmail.com',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Akeru AgentLayer',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ModalProvider>
            {children}
            <ModalRoot />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
