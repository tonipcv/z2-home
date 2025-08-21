import './globals.css'
import type { Metadata } from 'next'
import { Inter, Alegreya } from 'next/font/google'
import { FacebookPixel } from '@/components/FacebookPixel'

const inter = Inter({ subsets: ['latin'] })
const alegreya = Alegreya({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zuzz',
  description: 'A Zuzz projeta sistemas de fidelidade e indicação orientados por dados para aumentar recompra, attach rate e o valor de vida do cliente (CLV).',
  keywords: ['Zuzz', 'fidelidade', 'indicação', 'recompensas', 'retenção de clientes', 'crescimento', 'CLV', 'valor do tempo de vida', 'recompra'],
  authors: [{ name: 'Zuzz' }],
  creator: 'Zuzz',
  publisher: 'Zuzz',
  metadataBase: new URL('https://zuzz.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zuzz',
    description: 'A Zuzz projeta sistemas de fidelidade e indicação orientados por dados para aumentar recompra, attach rate e CLV.',
    url: 'https://zuzz.org',
    siteName: 'Zuzz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zuzz Logo',
      },
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Zuzz Icon',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuzz',
    description: 'A Zuzz projeta sistemas de fidelidade e indicação orientados por dados para aumentar recompra, attach rate e CLV.',
    images: ['/logo.png'],
  },
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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'CXLUS',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#000000',
  },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="text-size-adjust" content="none" />
        <FacebookPixel />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zuzz",
              "url": "https://zuzz.org",
              "logo": "https://zuzz.org/logo.png",
              "description": "Sistemas de fidelidade e indicação orientados por dados para aumentar recompra, attach rate e CLV.",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased h-full`}>
        {children}
      </body>
    </html>
  )
}
