import Link from "next/link";

const providers = [
  {
    name: "Pragmatic Play",
    slug: "pragmatic-play",
    logo: "🎰",
    games: [
      { name: "Gates of Olympus", rtp: "96.50%", volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Tumble"] },
      { name: "Sweet Bonanza", rtp: "96.48%", volatility: "Sedang", maxWin: "21.100x", features: ["Free Spins", "Multiplier", "Tumble", "Ante Bet"] },
      { name: "Starlight Princess", rtp: "96.50%", volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Multiplier", "Tumble", "Ante Bet"] },
      { name: "Aztec Gems", rtp: "96.52%", volatility: "Rendah", maxWin: "1.000x", features: ["Multiplier Reel", "Respin", "Jackpot"] },
      { name: "The Dog House Megaways", rtp: "96.55%", volatility: "Tinggi", maxWin: "12.305x", features: ["Megaways", "Sticky Wilds", "Free Spins"] },
      { name: "Big Bass Bonanza", rtp: "96.71%", volatility: "Sedang", maxWin: "2.100x", features: ["Free Spins", "Money Symbol", "Dynamic Multiplier"] },
    ],
  },
  {
    name: "PG Soft",
    slug: "pg-soft",
    logo: "🎮",
    games: [
      { name: "Mahjong Ways 2", rtp: "96.95%", volatility: "Sedang", maxWin: "100.000x", features: ["Free Spins", "Multiplier", "Cascade", "Wild Transformation"] },
      { name: "Fortune Tiger", rtp: "96.81%", volatility: "Sedang", maxWin: "2.500x", features: ["Respin", "Multiplier x10", "Full Screen Bonus"] },
      { name: "Wild Bandito", rtp: "96.73%", volatility: "Tinggi", maxWin: "25.000x", features: ["Free Spins", "Expanding Wild", "Multiplier", "Gold Framed Symbols"] },
      { name: "Lucky Neko", rtp: "96.73%", volatility: "Sedang", maxWin: "5.000x", features: ["Gigablox", "Free Spins", "Multiplier", "Lucky Cat"] },
      { name: "Caishen Wins", rtp: "96.92%", volatility: "Sedang", maxWin: "100.000x", features: ["Free Spins", "Multiplier", "Wild on the Way", "Cascade"] },
      { name: "Dragon Hatch 2", rtp: "96.76%", volatility: "Tinggi", maxWin: "15.000x", features: ["Cascade", "Dragon Features", "Free Spins", "Earth/Fire/Water/Wind Dragons"] },
    ],
  },
  {
    name: "Microgaming",
    slug: "microgaming",
    logo: "🎯",
    games: [
      { name: "Mega Moolah", rtp: "88.12%", volatility: "Rendah", maxWin: "Progressive Jackpot", features: ["4 Progressive Jackpots", "Free Spins", "Wild Multiplier 2x", "Wheel Bonus"] },
      { name: "Immortal Romance", rtp: "96.86%", volatility: "Tinggi", maxWin: "12.150x", features: ["Chamber of Spins", "Wild Desire", "4 Free Spin Modes", "Vampire Theme"] },
      { name: "Thunderstruck II", rtp: "96.65%", volatility: "Sedang", maxWin: "8.100x", features: ["Great Hall of Spins", "Wildstorm", "4 Free Spin Modes", "Norse Mythology"] },
      { name: "Book of Oz", rtp: "96.50%", volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Expanding Symbol", "Respins", "Wizard Theme"] },
      { name: "9 Masks of Fire", rtp: "96.24%", volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Mask Collection", "Jackpot Wheel", "African Theme"] },
      { name: "Break da Bank Again", rtp: "95.43%", volatility: "Tinggi", maxWin: "3.750x", features: ["Free Spins", "Multiplier 5x", "Vault Feature", "Bank Theme"] },
    ],
  },
  {
    name: "Playtech",
    slug: "playtech",
    logo: "🏛️",
    games: [
      { name: "Age of the Gods", rtp: "95.02%", volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["4 Progressive Jackpots", "Free Spins", "Multiplier", "Greek Mythology"] },
      { name: "Buffalo Blitz", rtp: "95.96%", volatility: "Tinggi", maxWin: "10.000x", features: ["4096 Ways", "Free Spins", "Wild Multiplier 2x/3x/5x", "Buffalo Theme"] },
      { name: "Gladiator Jackpot", rtp: "91.46%", volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["Progressive Jackpot", "Free Spins", "Colosseum Bonus", "Movie Theme"] },
      { name: "Great Blue", rtp: "96.03%", volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier up to 15x", "Retrigger", "Ocean Theme"] },
      { name: "Kingdoms Rise", rtp: "96.47%", volatility: "Sedang", maxWin: "Progressive Jackpot", features: ["3 Progressive Jackpots", "Token System", "Shop Feature", "Fantasy Theme"] },
      { name: "White King", rtp: "90.05%", volatility: "Tinggi", maxWin: "1.000x", features: ["Free Spins", "Stacked Wilds", "Major/Minor Jackpot", "Lion Theme"] },
    ],
  },
  {
    name: "Jili",
    slug: "jili",
    logo: "🎲",
    games: [
      { name: "Super Ace", rtp: "97.00%", volatility: "Sedang", maxWin: "10.000x", features: ["Cascade", "Golden Card", "Free Spins", "Multiplier up to 10x"] },
      { name: "Golden Empire", rtp: "96.50%", volatility: "Tinggi", maxWin: "20.000x", features: ["Megaways", "Cascade", "Free Spins", "Multiplier", "Golden Frame"] },
      { name: "Money Coming", rtp: "97.00%", volatility: "Rendah", maxWin: "10.000x", features: ["Respin", "Multiplier", "Special Reel", "Coin Collection"] },
      { name: "Boxing King", rtp: "96.50%", volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Combo Multiplier", "Wild Expansion", "Boxing Theme"] },
      { name: "Charge Buffalo", rtp: "96.50%", volatility: "Tinggi", maxWin: "10.000x", features: ["Free Spins", "Multiplier", "Buffalo Stampede", "Wild Stack"] },
      { name: "Roma X", rtp: "96.50%", volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Gladiator Battle", "Multiplier", "Roman Theme"] },
    ],
  },
  {
    name: "Habanero",
    slug: "habanero",
    logo: "🌶️",
    games: [
      { name: "Hot Hot Fruit", rtp: "96.74%", volatility: "Sedang", maxWin: "1.000x", features: ["Hot Hot Feature", "Respin", "Stacked Symbols", "Classic Fruit Theme"] },
      { name: "Fa Cai Shen", rtp: "96.50%", volatility: "Sedang", maxWin: "888x", features: ["Free Spins", "Fa Cai Shen Feature", "Red Envelope", "Chinese Theme"] },
      { name: "5 Mariachis", rtp: "96.50%", volatility: "Tinggi", maxWin: "5.000x", features: ["Free Spins", "Wild Multiplier", "Mariachi Feature", "Mexican Theme"] },
      { name: "London Hunter", rtp: "96.50%", volatility: "Tinggi", maxWin: "3.000x", features: ["Free Spins", "Expanding Wild", "Hunter Bonus", "Steampunk Theme"] },
      { name: "Koi Gate", rtp: "96.50%", volatility: "Sedang", maxWin: "5.000x", features: ["Free Spins", "Koi Wild", "Expanding Symbol", "Japanese Theme"] },
      { name: "Presto!", rtp: "96.50%", volatility: "Sedang", maxWin: "2.000x", features: ["Free Spins", "Magic Wild", "Multiplier", "Magic Theme"] },
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
  mainEntityOfPage: "https://tokogacor.run/rtp",
};

export const metadata = {
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
  ],
  openGraph: {
    title: "RTP Slot Tertinggi 2026 | Rekomendasi Game 6 Provider Terpopuler",
    description: "Cek RTP slot tertinggi dari Pragmatic, PG Soft, Microgaming, Playtech, Jili, Habanero. Data update 2026.",
    url: "https://tokogacor.run/rtp",
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
          <span className="eyebrow">Data Real-Time 2026</span>
          <h1 className="heading-xl text-cyan mt-4">RTP Slot Tertinggi 2026</h1>
          <p className="body-lg text-foreground/70 mt-4">
            Rekomendasi game dari <strong className="text-cyan font-semibold">6 provider terpopuler</strong> dengan RTP, volatilitas, max win & fitur lengkap.
            Data diupdate berkala untuk akurasi maksimal.
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
          {providers.map((provider, pIdx) => (
            <article key={provider.slug} id={provider.slug} className="anim-slide-up" style={{ animationDelay: `${pIdx * 100}ms` }}>
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
                    style={{ animationDelay: `${gIdx * 50}ms` }}
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
                    <Link
                      href="https://tokosoon.site/register?ref=zrg2e2s"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary w-full justify-center py-3 text-sm group-hover:shadow-glow-cyan transition-shadow"
                    >
                      Mainkan {game.name}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
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
              {providers.map((provider) => {
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
              href="https://tokosoon.site/register?ref=zrg2e2s"
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

      <div className="h-16 lg:h-20" />
    </main>
  );
}