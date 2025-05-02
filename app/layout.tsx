import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hdcs.services'),
  title: "High Desert Chimney Sweep | Professional Chimney Services Since 1981",
  description: "CSIA certified chimney sweeps providing professional chimney cleaning, inspection, and repairs in Apple Valley and the High Desert region since 1981.",
  keywords: [
    "chimney sweep", 
    "chimney cleaning", 
    "chimney repair", 
    "high desert", 
    "apple valley", 
    "victorville", 
    "hesperia", 
    "fireplace maintenance", 
    "dryer vent cleaning",
    "CSIA certified"
  ],
  authors: [{ name: "High Desert Chimney Sweep" }],
  creator: "High Desert Chimney Sweep",
  publisher: "High Desert Chimney Sweep",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hdcs.services',
    siteName: 'High Desert Chimney Sweep',
    title: 'High Desert Chimney Sweep | Professional Chimney Services Since 1981',
    description: 'CSIA certified chimney sweeps providing professional chimney services in the High Desert region since 1981.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'High Desert Chimney Sweep',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Desert Chimney Sweep | Professional Chimney Services Since 1981',
    description: 'CSIA certified chimney sweeps providing professional chimney services in the High Desert region since 1981.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
