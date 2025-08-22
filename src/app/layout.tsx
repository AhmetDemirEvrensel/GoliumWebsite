import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golium Cup – Türkiye'nin En Büyük Futbol Turnuvası",
  description: "Golium Cup, amatör futbol heyecanını Türkiye'ye taşıyor. 8 grup, 32 takım ile düzenlenen prestijli turnuvada yer almak için hemen başvurun!",
  keywords: "golium cup, futbol turnuvası, türkiye futbol, amatör futbol, futbol ligi, spor turnuvası, futbol maçları",
  authors: [{ name: "Golium Cup" }],
  creator: "Golium Cup",
  publisher: "Golium Cup",
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
    locale: 'tr_TR',
    url: 'https://www.goliumcup.com.tr',
    siteName: 'Golium Cup',
    title: "Golium Cup – Türkiye'nin En Büyük Futbol Turnuvası",
    description: "Golium Cup, amatör futbol heyecanını Türkiye'ye taşıyor. 8 grup, 32 takım ile düzenlenen prestijli turnuvada yer almak için hemen başvurun!",
    images: [
      {
        url: '/goliumicon.png',
        width: 320,
        height: 160,
        alt: 'Golium Cup Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Golium Cup – Türkiye'nin En Büyük Futbol Turnuvası",
    description: "Golium Cup, amatör futbol heyecanını Türkiye'ye taşıyor. 8 grup, 32 takım ile düzenlenen prestijli turnuvada yer almak için hemen başvurun!",
    images: ['/goliumicon.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://www.goliumcup.com.tr'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Golium Cup",
    "description": "Türkiye'nin en büyük amatör futbol turnuvası",
    "url": "https://www.goliumcup.com.tr",
    "logo": "https://www.goliumcup.com.tr/goliumicon.png",
    "sameAs": [
      "https://instagram.com/goliumtr"
    ],
    "sport": "Football",
    "event": {
      "@type": "SportsEvent",
      "name": "Golium Cup 2025",
      "description": "8 grup, 32 takım ile düzenlenen futbol turnuvası",
      "startDate": "2025-08-01",
      "location": {
        "@type": "Country",
        "name": "Türkiye"
      }
    }
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
