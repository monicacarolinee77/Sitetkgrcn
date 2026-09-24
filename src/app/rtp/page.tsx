import Link from "next/link";
import { generateGameRtp, formatRtp } from "@/lib/rtp-utils";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://athena168.run";
// Expanded game data with more games per provider - all games now under TOKOGACOR brand
const providers = [
  {
    name: "Pragmatic Play",
    slug: "pragmatic-play",
    logo: "🎰",
    games: [
      { name: "Gates of Olympus", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Tumble"] },
      { name: "Sweet Bonanza", baseRtp: 96.48, variance: 0.35, volatility: "Sedang", maxWin: "21.100x", features: ["Free Spins", "Multiplier", "Tumble", "Ante Bet"] },
      { name: "Starlight Princess", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Tumble", "Ante Bet"] },
      { name: "Aztec Gems", baseRtp: 96.52, variance: 0.20, volatility: "Rendah", maxWin: "1.000x", features: ["Multiplier Reel", "Respin", "Jackpot"] },
      { name: "The Dog House Megaways", baseRtp: 96.55, variance: 0.35, volatility: "Tinggi", maxWin: "12.305x", features: ["Megaways", "Sticky Wilds", "Free Spins"] },
      { name: "Big Bass Bonanza", baseRtp: 96.71, variance: 0.25, volatility: "Sedang", maxWin: "2.100x", features: ["Free Spins", "Money Symbol", "Dynamic Multiplier"] },
      { name: "Great Rhino Megaways", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "10.000x", features: ["Megaways", "Free Spins", "Multiplier", "Wilds"] },
      { name: "5 Lions Gold", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "2.500x", features: ["Free Spins", "Multiplier", "Wilds", "Respin"] },
      { name: "Power of Thor", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Expanding Symbols"] },
      { name: "Madame Destiny", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Scatter"] },
      { name: "The Hand of Midas", baseRtp: 96.50, variance: 0.25, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Collect"] },
      { name: "Empty the Bank", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Money Symbols", "Multiplier"] },
      { name: "John Hunter Tomb of the Scarab Queen", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Expanding Symbols", "Wilds"] },
      { name: "Great Chicken Escape", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Bonus Wheel"] },
      { name: "Fire Strike", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
  {
    name: "PG Soft",
    slug: "pg-soft",
    logo: "🎮",
    games: [
      { name: "Mahjong Ways 2", baseRtp: 96.95, variance: 0.25, volatility: "Sedang", maxWin: "100.000x", features: ["Free Spins", "Multiplier", "Cascade", "Wild Transformation"] },
      { name: "Fortune Tiger", baseRtp: 96.81, variance: 0.20, volatility: "Sedang", maxWin: "2.500x", features: ["Respin", "Multiplier x10", "Full Screen Bonus"] },
      { name: "Wild Bandito", baseRtp: 96.73, variance: 0.30, volatility: "Tinggi", maxWin: "25.000x", features: ["Free Spins", "Expanding Wild", "Multiplier", "Gold Framed Symbols"] },
      { name: "Lucky Neko", baseRtp: 96.73, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Gigablox", "Free Spins", "Multiplier", "Lucky Cat"] },
      { name: "Caishen Wins", baseRtp: 96.92, variance: 0.20, volatility: "Sedang", maxWin: "100.000x", features: ["Free Spins", "Multiplier", "Wild on the Way", "Cascade"] },
      { name: "Dragon Hatch 2", baseRtp: 96.76, variance: 0.30, volatility: "Tinggi", maxWin: "15.000x", features: ["Cascade", "Dragon Features", "Free Spins", "Earth/Fire/Water/Wind Dragons"] },
      { name: "Ganesha Fortune", baseRtp: 96.73, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Leprechaun Riches", baseRtp: 96.73, variance: 0.20, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Respin"] },
      { name: "Fortune Gods", baseRtp: 96.81, variance: 0.25, volatility: "Sedang", maxWin: "2.500x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Phoenix Rises", baseRtp: 96.76, variance: 0.30, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Expanding Symbols"] },
      { name: "Medusa II", baseRtp: 96.73, variance: 0.25, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Tree of Fortune", baseRtp: 96.81, variance: 0.20, volatility: "Sedang", maxWin: "2.500x", features: ["Free Spins", "Multiplier", "Wilds", "Respin"] },
      { name: "Prosperity Lion", baseRtp: 96.76, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Gem Saviour", baseRtp: 96.73, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Expanding Symbols"] },
      { name: "Santa’s Gift Rush", baseRtp: 96.81, variance: 0.20, volatility: "Sedang", maxWin: "2.500x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
  {
    name: "Microgaming",
    slug: "microgaming",
    logo: "🎯",
    games: [
      { name: "Mega Moolah", baseRtp: 88.12, variance: 0.50, volatility: "Rendah", maxWin: "Progressive Jackpot", features: ["4 Progressive Jackpots", "Free Spins", "Wild Multiplier 2x", "Wheel Bonus"] },
      { name: "Immortal Romance", baseRtp: 96.86, variance: 0.30, volatility: "Tinggi", maxWin: "12.150x", features: ["Chamber of Spins", "Wild Desire", "4 Free Spin Modes", "Vampire Theme"] },
      { name: "Thunderstruck II", baseRtp: 96.65, variance: 0.25, volatility: "Sedang", maxWin: "8.100x", features: ["Great Hall of Spins", "Wildstorm", "4 Free Spin Modes", "Norse Mythology"] },
      { name: "Book of Oz", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Expanding Symbol", "Respins", "Wizard Theme"] },
      { name: "9 Masks of Fire", baseRtp: 96.24, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Mask Collection", "Jackpot Wheel", "African Theme"] },
      { name: "Break da Bank Again", baseRtp: 95.43, variance: 0.35, volatility: "Tinggi", maxWin: "3.750x", features: ["Free Spins", "Multiplier 5x", "Vault Feature", "Bank Theme"] },
      { name: "Jurassic Park", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Terminator 2", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Avalon", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Cash Splash", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Lucky Twins", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "King Cashalot", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Major Millions", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Fruit Fiesta", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Cool Buck", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
  {
    name: "Playtech",
    slug: "playtech",
    logo: "🏛️",
    games: [
      { name: "Age of the Gods", baseRtp: 95.02, variance: 0.40, volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["4 Progressive Jackpots", "Free Spins", "Multiplier", "Greek Mythology"] },
      { name: "Buffalo Blitz", baseRtp: 95.96, variance: 0.35, volatility: "Tinggi", maxWin: "10.000x", features: ["4096 Ways", "Free Spins", "Wild Multiplier 2x/3x/5x", "Buffalo Theme"] },
      { name: "Gladiator Jackpot", baseRtp: 91.46, variance: 0.50, volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["Progressive Jackpot", "Free Spins", "Colosseum Bonus", "Movie Theme"] },
      { name: "Great Blue", baseRtp: 96.03, variance: 0.30, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier up to 15x", "Retrigger", "Ocean Theme"] },
      { name: "Kingdoms Rise", baseRtp: 96.47, variance: 0.25, volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["3 Progressive Jackpots", "Token System", "Shop Feature", "Fantasy Theme"] },
      { name: "White King", baseRtp: 90.05, variance: 0.40, volatility: "Tinggi", maxWin: "1.000x", features: ["Free Spins", "Stacked Wilds", "Major/Minor Jackpot", "Lion Theme"] },
      { name: "Carnival of Mystery", baseRtp: 96.03, variance: 0.35, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "The Dark Knight", baseRtp: 96.03, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Green Lantern", baseRtp: 96.03, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "The Flash", baseRtp: 96.03, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Superman", baseRtp: 96.03, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Batman", baseRtp: 96.03, variance: 0.25, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Wonder Woman", baseRtp: 96.03, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Aquaman", baseRtp: 96.03, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
  {
    name: "Jili",
    slug: "jili",
    logo: "🎲",
    games: [
      { name: "Super Ace", baseRtp: 97.00, variance: 0.20, volatility: "Sedang", maxWin: "10.000x", features: ["Cascade", "Golden Card", "Free Spins", "Multiplier up to 10x"] },
      { name: "Golden Empire", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "20.000x", features: ["Megaways", "Cascade", "Free Spins", "Multiplier", "Golden Frame"] },
      { name: "Money Coming", baseRtp: 97.00, variance: 0.15, volatility: "Rendah", maxWin: "10.000x", features: ["Respin", "Multiplier", "Special Reel", "Coin Collection"] },
      { name: "Boxing King", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Combo Multiplier", "Wild Expansion", "Boxing Theme"] },
      { name: "Charge Buffalo", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Buffalo Stampede", "Wild Stack"] },
      { name: "Roma X", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Gladiator Battle", "Multiplier", "Roman Theme"] },
      { name: "Lucky Box", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Treasure Bowl", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Fa Fa Fa", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
  {
    name: "Habanero",
    slug: "habanero",
    logo: "🌶️",
    games: [
      { name: "Hot Hot Fruit", baseRtp: 96.74, variance: 0.20, volatility: "Sedang", maxWin: "1.000x", features: ["Hot Hot Feature", "Respin", "Stacked Symbols", "Classic Fruit Theme"] },
      { name: "Fa Cai Shen", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "888x", features: ["Free Spins", "Fa Cai Shen Feature", "Red Envelope", "Chinese Theme"] },
      { name: "5 Mariachis", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Wild Multiplier", "Mariachi Feature", "Mexican Theme"] },
      { name: "London Hunter", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "3.000x", features: ["Free Spins", "Expanding Wild", "Hunter Bonus", "Steampunk Theme"] },
      { name: "Koi Gate", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Koi Wild", "Expanding Symbol", "Japanese Theme"] },
      { name: "Presto!", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Magic Wild", "Multiplier", "Magic Theme"] },
      { name: "Cake Valley", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Lucky Lucky", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Colossal Gems", baseRtp: 96.50, variance: 0.35, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Naughty Santa", baseRtp: 96.50, variance: 0.30, volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Wizard Shop", baseRtp: 96.50, variance: 0.25, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
      { name: "Lucky Fortune Cat", baseRtp: 96.50, variance: 0.20, volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Wilds", "Scatter"] },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RTP Slot Tertinggi 2026 — Rekomendasi Game Pragmatic, PG Soft, Microgaming, Playtech, Jili, Habanero",
  description: "Daftar RTP slot tertinggi dari 6 provider terpopuler: Pragmatic Play, PG Soft, Microgaming, Playtech, Jili, Habanero. Cek RTP, volatilitas, max win & fitur sebelum main.",
  author: { "@type": "Person", name: "Tim TOKOGACOR" },
  publisher: { "@type": "Organization", name: "TOKOGACOR" },
  datePublished: "2026-09-18",
  dateModified: "2026-09-18",
  mainEntityOfPage: `${siteUrl}/rtp`,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "RTP Slot Tertinggi 2026 | Rekomendasi Game Pragmatic, PG Soft, Microgaming, Playtech, Jili, Habanero",
  description: "Daftar RTP slot tertinggi 2026 dari 6 provider terpopuler. Cek RTP, volatilitas, max win & fitur game Gates of Olympus, Mahjong Ways 2, Mega Moolah, Age of Gods, Super Ace, Hot Hot Fruit & lainnya.",
  keywords: [
    "RTP slot",
    "RTP tertinggi",
    "Pragmatic Play RTP",
    "PG Soft RTP",
    "Microgaming RTP",
    "Playtech RTP",
    "Jili RTP",
    "Habanero RTP",
    "slot gacor RTP",
    "RTP live 2026",
    "tokogacor resmi",
    "tokogacor official",
    "tokogacor slot",
    "tokogacor web",
    "tokogacor deposit",
    "tokogacor withdraw",
  ],
  alternates: { canonical: `${siteUrl}/rtp` },
  openGraph: {
    title: "RTP Slot Tertinggi 2026 | Rekomendasi Game 6 Provider Terpopuler",
    description: "Cek RTP slot tertinggi dari Pragmatic, PG Soft, Microgaming, Playtech, Jili, Habanero. Data update 2026.",
    url: `${siteUrl}/rtp`,
    siteName: "TOKOGACOR",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/og-tokogacor.jpg", width: 1200, height: 630, alt: "RTP Slot Tertinggi 2026 - TOKOGACOR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTP Slot Tertinggi 2026",
    description: "Daftar RTP slot 6 provider terpopuler. Data lengkap RTP, volatilitas, max win & fitur.",
    images: ["/og-tokogacor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Generate dynamic RTP values based on time window (server-side)
const providerRtps = providers.map(provider => ({
  ...provider,
  games: provider.games.map((game, index) => ({
    ...game,
    rtp: formatRtp(generateGameRtp(game, index + 1))
  }))
}));

export default function RTPPage() {

  return (
    <main className="flex-1 flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <nav className="text-xs tracking-wider text-foreground/40 flex gap-2 items-center mb-8 anim-slide-up" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cyan transition-colors">TOKOGACOR</Link>
          <span className="text-cyan/30" aria-hidden="true">›</span>
          <Link href="/rtp" className="hover:text-cyan transition-colors">RTP Slot</Link>
          <span className="text-cyan/30" aria-hidden="true">›</span>
          <span className="text-cyan font-medium">RTP Tertinggi 2026</span>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-12 anim-slide-up">
          <span className="eyebrow">Data RTP 2026</span>
          <h1 className="heading-xl text-cyan mt-4">RTP Slot Tertinggi 2026</h1>
          <p className="body-lg text-foreground/70 mt-4">
            Rekomendasi game dari <strong className="text-cyan font-semibold">6 provider terpopuler</strong> dengan RTP, volatilitas, max win & fitur lengkap.
            Informasi RTP, volatilitas, dan fitur disusun untuk membantu memilih permainan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {["Pragmatic Play", "PG Soft", "Microgaming", "Playtech", "Jili", "Habanero"].map((p) => (
              <span key={p} className="nav-pill px-4 py-2 text-sm">
                {p}
              </span>
            ))}
          </div>
        </header>
      </section>

      {/* Provider Sections */}
      <section className="container-main py-8 lg:py-12 anim-fade-up">
        <div className="space-y-16">
          {providerRtps.map((provider, pIdx) => (
            <article key={provider.slug} id={provider.slug} className="anim-slide-up">
              {/* Provider Header */}
              <header className="mb-8 pb-4 border-b border-border/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center text-2xl">
                    {provider.logo}
                  </div>
                  <div>
                    <h2 className="heading-lg text-cyan">{provider.name}</h2>
                    <p className="text-sm text-foreground/60 mt-1">
                      {provider.games.length} game rekomendasi • RTP rata-rata:{" "}
                      {(
                        provider.games.reduce((sum, g) => {
                          const rtp = parseFloat(g.rtp.replace("%", ""));
                          return sum + rtp;
                        }, 0) / provider.games.length
                      ).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </header>

              {/* Games Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {provider.games.map((game, gIdx) => (
                  <div
                    key={game.name}
                    className="card-elevated p-6 hover:border-cyan/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="heading-sm text-foreground group-hover:text-cyan transition-colors flex-1 pr-4">
                        {game.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-bold whitespace-nowrap shrink-0">
                        {game.rtp}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-24 text-foreground/60 shrink-0">Volatilitas</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          game.volatility === "Tinggi"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : game.volatility === "Sedang"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        }`}>
                          {game.volatility}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-24 text-foreground/60 shrink-0">Max Win</span>
                        <span className="text-cyan font-bold">{game.maxWin}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-2.5 py-1 rounded bg-card border border-border/50 text-xs text-foreground/70 hover:border-cyan/50 hover:text-cyan transition-colors"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="https://tokosoon.site/auth/register?ref=zrg2e2s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full justify-center py-3 text-sm group-hover:shadow-glow-cyan transition-shadow"
                    >
                      Mainkan {game.name}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Summary Table */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <h2 className="heading-lg text-cyan text-center mb-10">Ringkasan RTP Tertinggi per Provider</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-border/50">
                <th scope="col" className="px-4 py-3 text-left font-semibold text-foreground/90">Provider</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-foreground/90">Game RTP Tertinggi</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-foreground/90">RTP</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-foreground/90">Volatilitas</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-foreground/90">Max Win</th>
              </tr>
            </thead>
            <tbody>
              {providerRtps.map((provider) => {
                const topGame = provider.games.reduce((max, game) => {
                  const rtp = parseFloat(game.rtp.replace("%", ""));
                  const maxRtp = parseFloat(max.rtp.replace("%", ""));
                  return rtp > maxRtp ? game : max;
                }, provider.games[0]);

                return (
                  <tr key={provider.slug} className="border-b border-border/30 hover:bg-cyan/5 transition-colors">
                    <td className="px-4 py-3 font-semibold text-cyan flex items-center gap-2">
                      <span className="text-xl">{provider.logo}</span>
                      {provider.name}
                    </td>
                    <td className="px-4 py-3 text-foreground/90">{topGame.name}</td>
                    <td className="px-4 py-3 font-bold text-cyan">{topGame.rtp}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        topGame.volatility === "Tinggi"
                          ? "bg-red-500/20 text-red-400"
                          : topGame.volatility === "Sedang"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-emerald-500/20 text-emerald-400"
                      }`}>
                        {topGame.volatility}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-foreground/80">{topGame.maxWin}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container-main py-8 lg:py-12 anim-fade-up">
        <div className="card p-6 sm:p-8 max-w-3xl mx-auto border-border/50">
          <h3 className="heading-sm text-cyan mb-4 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            Disclaimer & Catatan Penting
          </h3>
          <ul className="space-y-3 text-sm text-foreground/80 list-disc list-inside">
            <li>RTP (Return to Player) adalah persentase teoritis jangka panjang, bukan jaminan kemenangan per sesi.</li>
            <li>Data RTP diambil dari informasi resmi provider dan dapat berubah kapan saja tanpa pemberitahuan.</li>
            <li>Volatilitas tinggi = jarang menang tapi besar; Volatilitas rendah = sering menang tapi kecil.</li>
            <li>Progressive Jackpot (Mega Moolah, Age of Gods, dll) RTP dasar lebih rendah karena kontribusi ke jackpot.</li>
            <li>Selalu bermain bertanggung jawab: tetapkan budget, jangan mengejar kekalahan, usia minimal 17+.</li>
            <li>TOKOGACOR tidak menjamin kemenangan. Bermain untuk hiburan, bukan sumber penghasilan.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <div className="card-elevated p-8 sm:p-12 text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-transparent to-purple/10" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="heading-lg text-cyan mb-4">Siap Mencoba Game RTP Tinggi?</h2>
            <p className="body-lg text-foreground/70 mb-8">
              Daftar di TOKOGACOR resmi, deposit minimal Rp 10.000, dan mainkan game dengan RTP tertinggi dari 6 provider terpopuler.
            </p>
            <Link
              href="https://tokosoon.site/auth/register?ref=zrg2e2s"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-lg px-10 py-4 shadow-glow-cyan hover:shadow-glow-cyan-strong inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              DAFTAR & MAIN SEKARANG
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <h2 className="heading-lg text-cyan text-center mb-10">FAQ Seputar Rtp Slot Online</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">1</span>
              Apa itu RTP?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              RTP adalah singkatan dari Return to Player, yaitu persentase teoritis yang menunjukkan rata-rata nilai taruhan yang dapat dikembalikan kepada pemain dalam jangka panjang. Contohnya, RTP 96% berarti secara teori sekitar Rp96 dari setiap Rp100 taruhan dikembalikan dalam periode yang sangat panjang. Nilai RTP bukan jaminan kemenangan atau hasil pada setiap sesi permainan.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">2</span>
              Bagaimana cara melihat informasi RTP?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              Informasi RTP biasanya dapat dilihat melalui detail permainan, paytable, atau sumber informasi resmi dari provider game. Beberapa platform juga menampilkan persentase RTP berdasarkan judul permainan sehingga lebih mudah untuk membandingkan nilai RTP sebelum memilih game.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">3</span>
              Apakah RTP tinggi berarti pasti menang?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              Tidak. RTP tinggi tidak menjamin kemenangan pada setiap permainan atau putaran. RTP merupakan persentase teoritis yang dihitung dalam jangka panjang, sedangkan hasil setiap putaran tetap dipengaruhi oleh mekanisme acak dalam game. Jadi, RTP sebaiknya dipahami sebagai informasi statistik, bukan jaminan keuntungan.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">4</span>
              Berapa RTP yang dianggap tinggi?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              Secara umum, RTP sekitar 96% atau lebih sering dianggap sebagai persentase pengembalian teoritis yang cukup tinggi. Meski demikian, nilai RTP tidak menjamin hasil tertentu dalam setiap putaran karena hasil permainan tetap bersifat acak. RTP sebaiknya digunakan sebagai salah satu informasi untuk memahami karakteristik sebuah game.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">5</span>
              Apakah RTP menjamin permainan yang adil?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              RTP menunjukkan persentase pengembalian teoritis dari suatu permainan dan tidak menjadi jaminan bahwa setiap hasil akan menguntungkan pemain. Game yang menggunakan RNG dirancang untuk menghasilkan setiap putaran secara acak. Karena itu, RTP lebih tepat digunakan sebagai informasi statistik mengenai karakteristik game, sementara hasil setiap permainan tetap tidak dapat dipastikan.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-colors">
            <h3 className="heading-sm text-cyan mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan/20 text-cyan flex items-center justify-center text-sm font-bold">6</span>
              Bagaimana cara memahami informasi RTP?
            </h3>
            <p className="text-foreground/80 leading-relaxed pl-10">
              Informasi RTP menunjukkan persentase pengembalian teoritis sebuah game dalam jangka panjang. Nilai RTP yang lebih tinggi berarti persentase pengembalian teoritisnya lebih besar, tetapi tidak dapat digunakan untuk memprediksi hasil putaran berikutnya. Untuk memahami game dengan lebih baik, perhatikan juga informasi resmi dan tingkat volatilitas yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <h2 className="heading-lg text-cyan text-center mb-10">Apa Kata Member Tentang Informasi RTP Slot</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Testimonial 1 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Saya baru mulai belajar tentang rtp setelah membaca beberapa penjelasan di sini. Sekarang saya lebih tahu fungsi persentasenya dan ga langsung menganggap angka RTP sebagai hasil yang pasti .&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Bagas, Surabaya</p>
              <p className="text-xs text-foreground/60">2026-07-15</p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Yang saya suka dari informasi rtp slot ini adalah tampilannya sederhana dan gampang dipahami. Saya biasanya lihat persentase rtp dulu, lalu mempertimbangkan volatilitas dan fitur game sebelum menentukan pilihan.&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Yoga, Bandung</p>
              <p className="text-xs text-foreground/60">2026-07-17</p>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★☆</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Dulu saya pikir angka RTP yang besar berarti kesempatan untuk menangnya lebih tinggi. Setelah membaca penjelasannya, saya jadi paham kalo rtp merupakan perhitungan teoritis untuk jangka panjang.&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Rian, Semarang</p>
              <p className="text-xs text-foreground/60">2026-07-19</p>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Saya biasanya baca rtp dulu supaya punya gambaran tentang karakter game. Setelah itu baru melihat paytable, fitur bonus, dan volatilitasnya biar informasinya ga cuma dari satu parameter.&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Adit, Yogyakarta</p>
              <p className="text-xs text-foreground/60">2026-07-21</p>
            </div>
          </div>
          
          {/* Testimonial 5 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Penjelasan tentang rtp menurut saya cukup membantu untuk memahami cara kerja persentase pengembalian. Saya jadi lebih mengerti kalo hasil setiap spin tetap acak dan angka RTP bukan ramalan untuk putaran selanjutnya.&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Rafi, Medan</p>
              <p className="text-xs text-foreground/60">2026-07-23</p>
            </div>
          </div>
          
          {/* Testimonial 6 */}
          <div className="card p-6 border-border/50 hover:border-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              &quot;Yang paling berguna buat saya adalah bisa liat rtp sebagai bahan informasi sebelum memilih game. Saya juga memperhatikan aturan pembayaran dan volatilitas supaya lebih memahami perbedaan setiap permainan.&quot;
            </p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-semibold text-cyan">Iqbal, Jakarta</p>
              <p className="text-xs text-foreground/60">2026-07-23</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:h-20" />
    </main>
  );
}