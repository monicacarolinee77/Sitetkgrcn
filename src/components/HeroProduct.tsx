"use client";
import Link from "next/link";
import Image from "next/image";
import AngkaHoki from "@/components/AngkaHoki";

export default function HeroProduct() {
  return (
    <section className="container-main py-12 lg:py-20 anim-fade-up">
      <nav className="text-xs tracking-wider text-fg-muted flex gap-2 items-center mb-6 anim-slide-up" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gold transition-colors">athena168</Link>
        <span className="text-border-default" aria-hidden="true">›</span>
        <span className="text-gold font-medium">Platform Premium</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Image - Left side on desktop */}
        <div className="relative anim-fade-up lg:sticky lg:top-24">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 via-emerald/5 to-royal/10 rounded-2xl blur-xl opacity-30" aria-hidden="true" />
          <div className="aspect-[2/3] relative overflow-hidden bg-bg-deep">
            <Image
              src="/posterathena168.png"
              alt="Poster Athena168 - Platform Gaming Terpercaya 2026"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Badge overlay */}
          <div className="absolute top-4 right-4 anim-slide-down">
            <span className="eyebrow bg-emerald/10 border-emerald/30 text-emerald">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              LIVE RTP
            </span>
          </div>
          
          {/* Gold accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-emerald to-cyan" aria-hidden="true" />
          
          {/* Floating stats cards */}
          <div className="absolute -bottom-4 left-6 right-6 lg:left-0 lg:right-auto lg:w-1/2 flex flex-col gap-2 anim-slide-up anim-delay-200">
            <div className="card-felt p-2.5 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-emerald-light">96.8%</p>
                <p className="text-xs text-fg-muted">RTP Rata-rata</p>
              </div>
            </div>
            <div className="card-velvet p-2.5 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-crimson/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-crimson-light" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-crimson-light">&lt; 3 Menit</p>
                <p className="text-xs text-fg-muted">Proses Transaksi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info - Right side on desktop */}
        <div className="anim-fade-up anim-delay-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Platform Resmi 2026
          </div>

          <h1 className="heading-xl gradient-brand">
            athena168® — Platform Gaming Terpercaya 2026
          </h1>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
              <span className="body-sm text-emerald-light font-medium">Server Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" style={{ animationDelay: "0.2s" }} aria-hidden="true" />
              <span className="body-sm text-gold-light font-medium">RTP Live</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" style={{ animationDelay: "0.4s" }} aria-hidden="true" />
              <span className="body-sm text-cyan-light font-medium">24/7 Support</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://tokosoon.site/auth/register?ref=zrg2e2s"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-felt p-5 hover:border-emerald/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-emerald-light">Daftar VIP</h4>
                  <p className="body-sm text-fg-muted mt-1">Bonus new member 200% + 50 FS</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://tokosoon.site/auth/login?ref=zrg2e2s"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-vip p-5 hover:border-royal/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-royal-light" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-royal-light">Login Cepat</h4>
                  <p className="body-sm text-fg-muted mt-1">Akses instan ke semua game</p>
                </div>
              </div>
            </a>
          </div>

          <p className="mt-8 body-lg text-fg-secondary">
            <strong className="text-gold">athena168 — platform game online terlengkap.</strong> Akses stabil, transaksi aman, bonus harian transparan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3" role="list" aria-label="Fitur unggulan">
            {[
              { icon: "🎰", label: "Slot Gacor", desc: "RTP 96%+" },
              { icon: "♠️", label: "Live Casino", desc: "Dealer asli" },
              { icon: "⚽", label: "Sportsbook", desc: "Odds terbaik" },
              { icon: "🎲", label: "Togel", desc: "Pasaran lengkap" },
              { icon: "💎", label: "VIP Club", desc: "Hadiah eksklusif" },
              { icon: "🛡️", label: "Keamanan", desc: "Enkripsi 256-bit" },
            ].map((feat, i) => (
              <div key={feat.label} className="card card-glass p-3 min-w-[140px] flex items-center gap-3 group-hover:border-gold/30 transition-all" role="listitem" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="text-2xl" aria-hidden="true">{feat.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-fg-primary">{feat.label}</p>
                  <p className="text-xs text-fg-muted">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 anim-fade-up anim-delay-200">
            <AngkaHoki embedded />
          </div>
        </div>
      </div>
    </section>
  );
}