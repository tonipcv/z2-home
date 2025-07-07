import type { Metadata, Viewport } from 'next';

// Constantes para reuso
const title = 'How Premium Clinics Transform Single Visits Into Lifelong Value | CXLUS';
const description = 'Discover how market-leading clinics transform initial consultations into enduring patient relationships through digital innovation, treatment optimization, and continuous engagement.';
const url = 'https://cxlus.com/blog/premium-clinics-loyalty';
const imageUrl = 'https://cxlus.com/blog/premium-clinics-loyalty/cover.jpg';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'CXLUS',
  authors: [{ name: 'CXLUS Team' }],
  generator: 'Next.js',
  keywords: [
    'healthcare innovation',
    'patient retention',
    'clinic management',
    'healthcare technology',
    'patient engagement',
    'medical practice optimization',
    'healthcare automation',
    'patient experience',
    'clinic efficiency',
    'healthcare digital transformation'
  ],
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
  manifest: '/site.webmanifest',
  alternates: {
    canonical: url,
    languages: {
      'pt-BR': `${url}/pt`,
      'en-US': url,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'article',
    title,
    description,
    url,
    siteName: 'CXLUS',
    images: [{
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: 'Premium Clinics Transformation Strategy',
    }],
    locale: 'pt_BR',
    authors: ['CXLUS Team'],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: '2024-01-01T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
    creator: '@cxlus',
    site: '@cxlus',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CXLUS',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  category: 'healthcare technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'light',
};

type Props = {
  children: React.ReactNode;
};

export default function BlogPostLayout({ children }: Props) {
  return (
    <>
      <head>
        {/* Schema.org markup for Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: description,
              image: imageUrl,
              datePublished: '2024-01-01T00:00:00.000Z',
              dateModified: '2024-01-01T00:00:00.000Z',
              author: [{
                '@type': 'Organization',
                name: 'CXLUS',
                url: 'https://cxlus.com'
              }],
              publisher: {
                '@type': 'Organization',
                name: 'CXLUS',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://cxlus.com/logo.png'
                }
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': url
              }
            })
          }}
        />

        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1176772744133800');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1176772744133800&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      {children}
    </>
  );
} 