import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from '@/components/Analytics'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://med1.app'),
  title: "MED1 | Supercharge Growth by Elevating Every Client Experience",
  description: "Transform your healthcare practice with MED1's intelligent client experience platform. Create personalized client journeys, automate support with AI, and turn satisfied clients into powerful advocates. The complete tech solution for sustainable practice growth.",
  keywords: [
    "client experience platform",
    "healthcare client management",
    "personalized client journeys",
    "AI client support",
    "client advocacy system",
    "healthcare automation",
    "client retention platform",
    "medical practice growth",
    "intelligent client engagement",
    "client referral system",
    "healthcare client satisfaction",
    "automated client follow-ups",
    "client membership platform",
    "healthcare client analytics",
    "practice client experience",
    "client journey automation",
    "healthcare client loyalty",
    "smart client communication",
    "client experience optimization",
    "healthcare client transformation"
  ],
  authors: [{ name: "MED1", url: "https://med1.app" }],
  category: "Healthcare Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://med1.app",
    siteName: "MED1",
    title: "MED1 | Supercharge Growth by Elevating Every Client Experience",
    description: "Transform your healthcare practice with personalized client journeys, AI-powered automation, and systematic client advocacy. Turn every client into a powerful advocate for sustainable growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MED1 - Client Experience Platform for Healthcare",
      },
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "MED1 Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MED1 | Supercharge Growth by Elevating Every Client Experience",
    description: "Transform your healthcare practice with personalized client journeys, AI-powered automation, and systematic client advocacy. Turn every client into a powerful advocate for sustainable growth.",
    creator: "@med1app",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": ["your-facebook-verification-code"],
    },
  },
  alternates: {
    canonical: "https://med1.app",
    languages: {
      'en-US': 'https://med1.app',
      'pt-BR': 'https://med1.app/pt'
    }
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WNKND9BM');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2132359817187180');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=2132359817187180&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}

        <link rel="canonical" href="https://med1.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2E8DFF" />
      </head>
      <body className="antialiased font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNKND9BM"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
