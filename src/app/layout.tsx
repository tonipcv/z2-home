import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cxlus',
  description: 'The all-in-one, AI-powered solution to boost patient loyalty, personalise every step of care, and turn satisfied clients into brand advocates.',
  keywords: ['CXLUS', 'customer experience', 'medical clinics', 'digital platform', 'customer service'],
  authors: [{ name: 'CXLUS' }],
  creator: 'CXLUS',
  publisher: 'CXLUS',
  metadataBase: new URL('https://cxlus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cxlus',
    description: 'The all-in-one, AI-powered solution to boost patient loyalty, personalise every step of care, and turn satisfied clients into brand advocates.',
    url: 'https://cxlus.com',
    siteName: 'CXLUS',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CXLUS Logo',
      },
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'CXLUS Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cxlus',
    description: 'The all-in-one, AI-powered solution to boost patient loyalty, personalise every step of care, and turn satisfied clients into brand advocates.',
    images: ['/logo.png'],
    creator: '@cxlus',
    site: '@cxlus',
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
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="text-size-adjust" content="none" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CXLUS",
              "url": "https://cxlus.com",
              "logo": "https://cxlus.com/logo.png",
              "description": "A complete tech solution to support your patients, personalise care, and turn clients into advocates.",
              "sameAs": [
                "https://www.linkedin.com/company/cxlus",
                "https://twitter.com/cxlus"
              ]
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
