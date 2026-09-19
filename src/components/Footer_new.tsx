import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/50 bg-gradient-to-b from-background to-card/50 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" aria-hidden="true" />

      <div className="container-main py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10 lg:mb-14">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Image
                  src="https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png"
                  alt="TOKOGACOR"
                  width={32}
                  height={32}
                  unoptimized
                  className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-[1.05] drop-shadow-glow-cyan"
                />
              <span className="eyebrow text-foreground/40">© 2026 TOKOGACOR</span>
            </div>
            <p className="body-sm text-foreground/60 leading-relaxed max-w-xs">
              Platform game mabar mantap dengan akses stabil, login cepat, dan bonus harian transparan untuk pengalaman bermain terbaik.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs text-emerald-400 font-medium">24/7 Online</span>
            </div>
          </div>

          {/* Navigation Column */}
          <nav className="space-y-4" aria-label="Navigasi footer">
            <h4 className="heading-sm text-cyan tracking-wider">Navigasi</h4>
            <ul className="space-y-3" role="list">
              {[
                { label: "Link Resmi", href: "https://tokosoon.site/auth/register?ref=zrg2e2s", icon: "🔗" },
                { label: "Daftar Sekarang", href: "https://tokosoon.site/auth/register?ref=zrg2e2s", icon: "📝" },
                { label: "FAQ", href: "#faq", icon: "❓" },
                { label: "Tentang Kami", href: "https://tokosoon.site/about", icon: "ℹ️" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-cyan transition-colors duration-200"
                  >
                    <span className="text-base transition-transform group-hover:scale-110" aria-hidden="true">{link.icon}</span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="heading-sm text-cyan tracking-wider">Kontak</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://heylink.me/admintokogacor/"
                className="btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.47-3.893c-.002-.246-.006-.492-.01-.739a9.936 9.936 0 013.881-3.668 9.938 9.938 0 013.74-1.28c.834-.058 1.664-.078 2.494-.078.83 0 1.66.02 2.49.078.93.163 1.77.474 2.49 1.062.72.588 1.266 1.384 1.628 2.318.36.93.486 1.86.51 2.793-.006.36-.023.72-.038 1.079-.014.363-.134.974-.41 1.298a10.001 10.001 0 01-1.378 3.414c-.247.447-.648.78-1.17 1.014-.522.233-1.173.233-1.774.118-.39-.076-.776-.172-1.17-.266-.394-.094-.752-.215-1.092-.357-.34-.142-.673-.31-1.002-.51" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://heylink.me/admintokogacor/"
                className="btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://heylink.me/admintokogacor/"
                className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Livechat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50" aria-label="Legal links">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Security", href: "#" },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-cyan transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 text-sm text-foreground/50">
              <p className="font-medium text-foreground/70">18+ • Bermain bertanggung jawab</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="body-sm text-foreground/50 leading-relaxed">
              TOKOGACOR — game mabar mantap, kemenangan berlimpah. 18+ • Bermain bertanggung jawab.
            </p>
            <p className="text-xs text-foreground/30 mt-2">
              © 2026 TOKOGACOR • All rights reserved • Version 2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}