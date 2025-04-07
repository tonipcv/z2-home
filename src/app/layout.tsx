import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "MED1 | CRM Inteligente para Médicos",
  description: "CRM inteligente para médicos e clínicas privadas crescerem até 10x mais rápido.",
  keywords: [
    "habit tracking",
    "sales tracking",
    "goal achievement",
    "personal development",
    "performance tracking",
    "potential unlocking",
    "productivity tools",
    "success metrics",
    "personal growth",
    "achievement tracking",
    "BOOP platform",
    "performance analytics",
    "goal setting",
    "habit formation",
    "success tracking"
  ],
  authors: [{ name: "BOOP" }],
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boop.tech",
    siteName: "BOOP",
    title: "BOOP | Unlock Your Potential",
    description: "Track your habits, sales, achieve your goals, and unlock your full potential with BOOP.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "BOOP - Unlock Your Potential",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOP | Unlock Your Potential",
    description: "Track your habits, sales, achieve your goals, and unlock your full potential with BOOP.",
    creator: "@booptech",
    images: ["/icon-512.png"],
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
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#00F5D4"
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
    "msapplication-TileColor": "#00F5D4",
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
        <link rel="canonical" href="https://boop.tech" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00F5D4" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
