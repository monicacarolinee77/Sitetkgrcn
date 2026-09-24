import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-deepest/90 backdrop-blur-xl">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deepest via-transparent to-transparent opacity-60" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-main py-10 lg:py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/LOGO.png"
                alt="athena168"
                width={140}
                height={46}
                className="drop-shadow-lg"
                priority
              />
              <span className="hidden sm:block font-display font-black text-xl lg:text-2xl gradient-brand tracking-tight">
                athena<span className="text-gold-light">168</span>
              </span>
            </div>
            <p className="body-sm text-fg-muted leading-relaxed max-w-xs">
              Platform gaming premium dengan akses stabil, login cepat, dan transaksi transparan untuk pengalaman terbaik.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Daftar VIP
              </a>
              <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                Masuk
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <nav className="space-y-4" aria-label="Navigasi footer">
            <h4 className="heading-sm text-gold tracking-wider">Navigasi Utama</h4>
            <ul className="space-y-3" role="list">
              <li><Link href="/" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">Beranda</Link></li>
              <li><Link href="/rtp" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">RTP Slot Terkini</Link></li>
              <li><Link href="/t-shirts" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">Merchandise</Link></li>
              <li><Link href="/#produk-kami" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">Produk Gaming</Link></li>
              <li><Link href="/#faq" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">FAQ</Link></li>
              <li><Link href="https://tokosoon.site/help-center" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-secondary hover:text-gold transition-colors flex items-center gap-2">Pusat Bantuan</Link></li>
            </ul>
          </nav>

          {/* Contact & Social Column */}
          <div className="space-y-4">
            <h4 className="heading-sm text-gold tracking-wider">Kontak & Sosial</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm flex-1 justify-center">
                Daftar Sekarang
              </a>
              <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm flex-1 justify-center">
                Login
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm p-2 hover:bg-emerald-muted hover:text-emerald transition-colors" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67-.297-.472-.422-.958-.473-1.217z"/></svg>
              </a>
              <a href="https://t.me/athena168" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm p-2 hover:bg-cyan-muted hover:text-cyan transition-colors" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm4.707 11.793l-4.5 4.5c-.293.293-.768.293-1.061 0l-2.25-2.25c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0L11 14.586l4.293-4.293c.293-.293.768-.293 1.061 0s.293.768 0 1.061z"/></svg>
              </a>
              <a href="https://instagram.com/athena168" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm p-2 hover:bg-rose-muted hover:text-rose transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-fg-muted" aria-label="Legal links">
              <Link href="https://tokosoon.site/help-center/terms-condition" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Syarat & Ketentuan</Link>
              <Link href="https://tokosoon.site/help-center/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Kebijakan Privasi</Link>
              <Link href="https://tokosoon.site/help-center/responsible-gaming" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Bermain Bertanggung Jawab</Link>
              <Link href="https://tokosoon.site/help-center" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Pusat Bantuan</Link>
            </nav>

            <p className="font-medium text-fg-secondary">18+ • Bermain bertanggung jawab</p>
          </div>

          <div className="mt-4 text-center">
            <p className="body-sm text-fg-muted leading-relaxed">
              athena168 — game mabar mantap, kemenangan berlimpah. 18+ • Bermain bertanggung jawab.
            </p>
            <p className="text-xs text-fg-subtle mt-2">
              © 2026 athena168 • All rights reserved • Version 2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}