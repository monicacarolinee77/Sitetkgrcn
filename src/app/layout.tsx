import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer_new";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://athena168.run";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "athena168",
  url: SITE_URL,
  logo: `${SITE_URL}/LOGO.png`,
  sameAs: [
    "https://www.facebook.com/athena168",
    "https://www.instagram.com/athena168",
    "https://twitter.com/athena168",
    "https://www.youtube.com/@athena168",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-800-123-4567",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "athena168",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "athena168",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/LOGO.png`,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "athena168® — Platform Gaming Terpercaya 2026", template: "%s | athena168" },
  description: "athena168 2026 — platform gaming terpercaya dengan akses stabil 24 jam. Daftar, login, dan jelajahi berbagai permainan dengan transaksi aman dan penawaran transparan.",
  keywords: ["athena168", "platform gaming", "permainan", "informasi rtp", "rekomendasi game", "panduan bermain", "akses platform", "transaksi aman", "penawaran harian" ],
  authors: [{ name: "Tim athena168" }],
  creator: "athena168",
  publisher: "athena168",
  alternates: { canonical: SITE_URL },
  verification: { google: ["a8SFZEB231Y1OawnznizukzZFSyP5S_bFnt0i7DD23U"] },
  openGraph: { title: "athena168® — Platform Gaming Terpercaya 2026", description: "Platform gaming dengan akses stabil 24 jam. Transaksi aman, penawaran harian, dan informasi RTP lengkap.", url: SITE_URL, siteName: "athena168", type: "website", locale: "id_ID", images: [{ url: "/LOGO.png", width: 1200, height: 630, alt: "athena168 - Platform Gaming" }] },
  twitter: { card: "summary_large_image", title: "athena168® — Platform Gaming Terpercaya 2026", description: "Akses stabil 24 jam, transaksi aman, penawaran harian. Informasi RTP dan panduan bermain lengkap.", images: ["/LOGO.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "Entertainment",
  icons: { icon: "/LOGO.png", shortcut: "/LOGO.png", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <div className="flex-1 flex flex-col cyber-bg relative">
          <div className="relative z-10 flex-1 flex flex-col">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
