import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://tokogacor.run"),
  title: {
    default: "TOKOGACOR® — game mabar Mantap Kemenangan Berlimpah | Login Resmi 2026",
    template: "%s | TOKOGACOR",
  },
  description:
    "TOKOGACOR 2026 — panduan game mabar mantap & kemenangan berlimpah. Link resmi tokogacor.run stabil 24 jam, login 5 detik, deposit Rp 10.000 via bank/E-Wallet/QRIS, bonus harian transparan. Daftar & login sekarang.",
  keywords: [
    "TOKOGACOR",
    "TOKO GACOR",
    "situs slot gacor",
    "slot maxwin",
    "situs slot terpercaya",
    "game slot",
    "slot88",
    "slot online",
    "slot gacor 2026",
    "link alternatif tokogacor",
    "login tokogacor",
  ],
  authors: [{ name: "Tim TOKOGACOR" }],
  creator: "TOKOGACOR",
  publisher: "TOKOGACOR",
  alternates: {
    canonical: "https://tokogacor.run/",
  },
  openGraph: {
    title: "TOKOGACOR® — game mabar Mantap Kemenangan Berlimpah | Login Resmi 2026",
    description: "Link resmi TOKOGACOR stabil 24 jam. Login 5 detik, deposit Rp 10.000, bonus harian transparan. Panduan lengkap 2026.",
    url: "https://tokogacor.run/",
    siteName: "TOKOGACOR",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/og-tokogacor.jpg", width: 1200, height: 630, alt: "TOKOGACOR - game mabar Mantap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOKOGACOR® — game mabar Mantap Kemenangan Berlimpah",
    description: "Link resmi stabil 24 jam, login cepat, bonus harian. Panduan TOKOGACOR 2026.",
    images: ["/og-tokogacor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "Entertainment",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
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
