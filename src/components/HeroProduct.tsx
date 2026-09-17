import Link from "next/link";
import AngkaHoki from "@/components/AngkaHoki";

export default function HeroProduct() {
  return (
    <section className="container-main py-12 lg:py-16 anim-fade-up">
      <nav className="text-xs tracking-wider text-foreground/40 flex gap-2 items-center mb-6 anim-slide-up" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-cyan transition-colors">TOKOGACOR</Link>
        <span className="text-cyan/30" aria-hidden="true">›</span>
        <span className="text-cyan font-medium">Login Resmi</span>
      </nav>

      {/* Product Layout - Image on left, Info on right (desktop) */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Image - Left side on desktop */}
        <div className="relative anim-fade-up lg:sticky lg:top-24">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-purple/20 rounded-2xl blur-2xl opacity-50" aria-hidden="true" />
          <div className="relative card-elevated overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" aria-hidden="true" />
            <img
              src="/tokogacor.gif"
              alt="TOKOGACOR - Platform game mabar mantap"
              className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan/10 backdrop-blur border border-cyan/30 text-cyan text-xs font-bold">
              PREMIUM
            </div>
          </div>
        </div>

        {/* Product Info - Right side on desktop */}
        <div className="anim-fade-up anim-delay-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
            BEST SELLER • RESMI 2026
          </div>

          <h1 className="heading-xl text-cyan">
            TOKOGACOR® — game mabar Mantap Kemenangan Berlimpah
          </h1>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex text-cyan" aria-label="Rating 4.9 out of 5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform hover:scale-110" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">4.9</span>
              <span className="text-xs text-foreground/60">(1,250 ulasan)</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Stok Tersedia
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://tokosoon.site/register?ref=zrg2e2s"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full justify-center text-lg py-5 shadow-glow-cyan hover:shadow-glow-cyan-strong"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-12" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              DAFTAR AKUN
            </a>

            <a
              href="https://tokosoon.site/register?ref=zrg2e2s"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary w-full justify-center text-lg py-5 border-2 hover:bg-cyan/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              LOGIN SEKARANG
            </a>
          </div>

          <p className="mt-8 body-lg text-foreground/80">
            <strong className="text-cyan">TOKOGACOR — game mabar mantap, kemenangan berlimpah.</strong> Link resmi stabil, login cepat, bonus harian transparan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3" role="list" aria-label="Fitur unggulan">
            {[
              { icon: "⚡", text: "Proses < 3 Menit" },
              { icon: "🔒", text: "Aman & Terenkripsi" },
              { icon: "🎁", text: "Bonus Harian" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card px-4 py-2 rounded-full border border-border/50 hover:border-cyan/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan cursor-pointer"
                role="listitem"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan transition-colors">
                  <span className="text-lg transition-transform hover:scale-110" aria-hidden="true">{feature.icon}</span>
                  {feature.text}
                </span>
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