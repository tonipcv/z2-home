import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://boop.tech'),
  title: "BOOP | Unlock Your Potential with Real-Time Performance Monitoring",
  description: "Transform your performance with BOOP's advanced monitoring technology. Track sleep, recovery, and real-time metrics to unlock your full potential.",
  keywords: [
    "performance monitoring",
    "unlock potential",
    "athletic performance",
    "sleep tracking",
    "recovery optimization",
    "real-time monitoring",
    "biometric data",
    "performance analytics",
    "fitness technology",
    "athletic development",
    "performance enhancement",
    "elite performance",
    "sports technology",
    "performance metrics",
    "BOOP technology"
  ],
  authors: [{ name: "BOOP Technology" }],
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boop.tech",
    siteName: "BOOP",
    title: "BOOP | Unlock Your Potential",
    description: "Advanced performance monitoring technology to unlock your full potential. Real-time tracking for optimal results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BOOP - Unlock Your Potential",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOP | Unlock Your Potential",
    description: "Transform your performance with advanced monitoring technology",
    creator: "@booptech",
    images: ["/twitter-image.png"],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#003af5"
      }
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": ["your-facebook-verification-code"],
    },
  },
  alternates: {
    canonical: "https://boop.tech",
  },
  other: {
    "msapplication-TileColor": "#003af5",
    "theme-color": "#000000"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="canonical" href="https://boop.tech" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
