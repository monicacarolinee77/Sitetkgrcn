import Link from "next/link";
import HeroProduct from "@/components/HeroProduct";
import Testimonials from "@/components/Testimonials_new";
import FAQ from "@/components/FAQ_new";
import InfoTable from "@/components/InfoTable_new";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "athena 168 2026: Panduan Lengkap Platform Game Online",
  description: "Panduan athena168 2026 — daftar, login, deposit, dan informasi permainan menarik.",
  author: { "@type": "Person", name: "Tim athena168" },
  publisher: { "@type": "Organization", name: "athena168" },
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
  mainEntityOfPage: "https://athena168.run/",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroProduct />

      {/* Article Section */}
      <section className="container-main py-10 lg:py-14 anim-fade-up">
        <article className="card card-elevated p-5 sm:p-6 lg:p-8">
          {/* Article Header */}
          <header className="mb-6 lg:mb-8">
            <span className="eyebrow anim-slide-up">Panduan Lengkap 2026</span>
            <h2 className="heading-xl gradient-brand mt-4 anim-slide-up anim-delay-100">
              athena 168 2026: Panduan Platform Game Online yang Andal
            </h2>
            <p className="body-lg text-fg-secondary mt-4 max-w-2xl anim-slide-up anim-delay-200">
              Ingin mengakses <strong className="text-gold font-semibold">platform game online</strong> yang cepat dan aman?
              Ini panduan ringkas — cara mendaftar, login, melakukan deposit, dan menikmati penawaran menarik.
            </p>
          </header>

          {/* Table of Contents - Luxury Gold Style */}
          <nav className="card card-vip mb-8 lg:mb-10 anim-slide-up anim-delay-300 p-5" aria-label="Daftar Isi">
            <div className="flex items-center gap-3 mb-4 border-b border-gold/20 pb-3">
              <span className="w-1.5 h-6 rounded-sm bg-gradient-to-b from-gold to-gold-dark shadow-[0_0_10px_rgba(240,185,11,0.5)]" aria-hidden="true" />
              <h3 className="heading-sm text-gold">Daftar Isi</h3>
            </div>
            <div className="space-y-2">
              <a href="#apa-itu" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">01</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Apa Itu athena 168?</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#cara-daftar" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">02</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Cara Daftar & Login</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#deposit" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">03</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Deposit & Withdraw</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#bonus" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">04</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Bonus & Cara Klaim</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#produk-kami" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">05</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Produk Kami</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#tanggung-jawab" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">06</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">Tanggung Jawab Bermain</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
              <a href="#faq" className="toc-item flex items-center gap-3 group">
                <span className="toc-number w-8 text-center text-gold font-black text-sm">07</span>
                <span className="body-sm text-fg-secondary group-hover:text-gold transition-colors">FAQ</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-gold/30 group-hover:scale-x-200 transition-transform origin-right" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* Article Content - Luxury Prose */}
          <div className="prose-luxury">
            <section id="apa-itu" className="anim-slide-up">
            <p>
              <strong className="text-gold">athena 168</strong> adalah platform gaming
              yang menawarkan berbagai permainan menarik dengan akses cepat dan aman.
              Platform ini dirancang untuk memberikan pengalaman terbaik.
            </p>
            <p>
              Tiga fokus utama: akses stabil di semua perangkat, proses login yang aman,
              dan transparansi dalam setiap transaksi.
              </p>
            <p>
              Sebagai platform yang telah terpercaya, kami menyediakan
              berbagai permainan lengkap, akses yang responsif,
              serta layanan transaksi yang cepat dan aman.
              Informasi RTP kami transparan dan terupdate real-time.
            </p>
          </section>

          <div className="section-divider-luxury" />

          <section id="cara-daftar" className="anim-slide-up">
              <h2 className="heading-lg gradient-brand">Cara Mendaftar & Masuk</h2>
              <p className="body text-fg-secondary">
                Untuk mengakses platform dan semua fiturnya, ikuti langkah-langkah berikut:
              </p>
              <p className="body text-fg-secondary">
                Jika tautan utama sedang tidak dapat diakses, gunakan tautan alternatif
                yang tercantum pada kanal resmi platform agar proses masuk tetap aman.
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="body text-fg-secondary">
                  Buka <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">tokosoon.site</a>
                  atau <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">tokosoon.site</a>
                </li>
                <li className="body text-fg-secondary">Klik <strong className="text-gold">DAFTAR</strong> → isi username & password</li>
                <li className="body text-fg-secondary">Verifikasi → <strong className="text-gold">LOGIN</strong> dan nikmati penawaran new member</li>
              </ol>
            </section>

          <div className="section-divider-luxury" />

          <section id="deposit" className="anim-slide-up">
              <h2 className="heading-lg gradient-brand">Deposit & Penarikan</h2>
              <p className="body text-fg-secondary">
                Mendukung <strong className="text-gold">bank lokal, E-Wallet & QRIS</strong>.
                Minimal deposit <strong className="text-gold">Rp 10.000</strong>,
                penarikan <strong className="text-gold">Rp 50.000</strong>.
                Proses rata-rata kurang dari 3 menit.
              </p>
              <p className="body text-fg-secondary">
                Proses <strong className="text-gold">deposit</strong> dan
                <strong className="text-gold">penarikan</strong> cepat dan aman.
                Kami menyediakan berbagai metode pembayaran untuk kenyamanan Anda.
              </p>
            </section>

          <div className="section-divider-luxury" />

          <section id="bonus" className="anim-slide-up">
              <h2 className="heading-lg gradient-brand">Bonus & Cara Klaim</h2>
              <p className="body text-fg-secondary">
                Diskon harian, bonus topup, dan hadiah loyalitas.
                Cek menu <strong className="text-gold">Promo</strong> setelah login →
                pilih bonus → klik <strong className="text-gold">Klaim</strong>.
              </p>
            </section>

          <div className="section-divider-luxury" />

          <section id="produk-kami" className="anim-slide-up">
              <h2 className="heading-lg gradient-brand">Produk Kami</h2>
              <p className="body text-fg-secondary">
                athena 168 menghadirkan ekosistem permainan lengkap dalam satu akun.
                Semua produk dapat diakses setelah
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">daftar</a>
                dan login — tanpa perlu pindah platform.
              </p>

              <h3 className="heading-md text-emerald-light mt-8 mb-3 flex items-center gap-2">🎯 Permainan Togel</h3>
              <p className="body text-fg-secondary">
                Jelajahi beragam pilihan permainan togel dengan berbagai pasaran menarik.
                Temukan pengalaman bermain yang seru dan kesempatan memenangkan hadiah besar.
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2 font-medium">Daftar sekarang</a>
                untuk mulai menikmati sensasi permainan yang mengasyikkan.
              </p>

              <h3 className="heading-md text-crimson-light mt-8 mb-3 flex items-center gap-2">🎰 Permainan Slot</h3>
              <p className="body text-fg-secondary">
                Nikmati sensasi tak terlupakan permainan slot dengan beragam tema menarik,
                bonus menarik, dan kesempatan memenangkan hadiah besar.
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2 font-medium">Lihat detail</a>
                dan rasakan keseruan tanpa batas!
              </p>

              <h3 className="heading-md text-royal-light mt-8 mb-3 flex items-center gap-2">♠️ Permainan Casino</h3>
              <p className="body text-fg-secondary">
                Jelajahi dunia permainan casino yang mengasyikkan dan menghibur.
                Nikmati beragam permainan menarik seperti baccarat, sweet bonanza, roulette,
                langsung dari kenyamanan rumah Anda.
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2 font-medium">Lihat detail</a>
                dan rasakan keseruan tanpa batas!
              </p>
              <h3 className="heading-md text-emerald-light mt-8 mb-3 flex items-center gap-2">💎 Fitur Unggulan</h3>
              <p className="body text-fg-secondary">
                Sebagai platform terpercaya, kami menyediakan
                berbagai permainan lengkap dengan
                akses yang responsif.
                Layanan transaksi cepat dan aman siap membantu
                kebutuhan Anda.
              </p>
            </section>

          <div className="section-divider-luxury section-divider-strong" />

          <section id="tanggung-jawab" className="anim-slide-up">
              <h2 className="heading-lg gradient-brand">Tanggung Jawab Bermain</h2>
              <p className="body text-fg-secondary">
                athena 168 berkomitmen pada permainan yang aman, adil, dan bertanggung jawab.
                Mengacu pada
                <a href="https://tokosoon.site/help-center/terms-condition" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Syarat & Ketentuan</a>
                dan
                <a href="https://tokosoon.site/about" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Tentang Kami</a>
                di tokosoon.site:
              </p>
              <ul className="space-y-3 list-disc list-inside mt-4">
                <li className="body text-fg-secondary"><strong className="text-gold">Usia minimal 17 tahun</strong> — Pendaftar wajib berusia 17 tahun ke atas dan lolos verifikasi KYC (Know Your Customer).</li>
                <li className="body text-fg-secondary"><strong className="text-gold">Data terjamin & transaksi aman</strong> — Data tersimpan di server dengan security berstandar, transaksi deposit/withdraw terjamin dan dapat dilakukan kapan pun selama bank online.</li>
                <li className="body text-fg-secondary"><strong className="text-gold">Satu data satu akun</strong> — Wajib memberikan data valid sesuai rekening bank. Withdraw hanya ke rekening terdaftar.</li>
                <li className="body text-fg-secondary"><strong className="text-gold">Fair play</strong> — Dilarang keras penggunaan bot, software, atau metode curang. Pelanggaran berakibat penutupan akun dan pembatalan kemenangan.</li>
                <li className="body text-fg-secondary"><strong className="text-gold">KYC & AML</strong> — Mengikuti kebijakan Kenali Pelanggan dan Anti-Pencucian Uang, bekerja sama dengan lembaga keuangan dan regulator.</li>
                <li className="body text-fg-secondary"><strong className="text-gold">Bermain bijak</strong> — Tetapkan batas waktu dan budget, jangan mengejar kekalahan, dan hubungi Livechat/Whatsapp jika butuh dukungan. 18+ • Bermain bertanggung jawab.</li>
              </ul>
              <p className="body-sm text-fg-muted mt-6">
                Info lengkap:
                <a href="https://tokosoon.site/help-center/terms-condition" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Syarat & Ketentuan</a> •
                <a href="https://tokosoon.site/help-center/privacy-policy" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Kebijakan Privasi</a> •
                <a href="https://tokosoon.site/help-center" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Pusat Bantuan</a>
              </p>
            </section>

          <div className="section-divider-luxury section-divider-strong" />

          <section className="anim-slide-up">
              <p className="body-lg text-fg-primary">
                <strong className="text-gold">Kesimpulan:</strong>
                Jika Anda mencari platform gaming dengan akses cepat dan fitur menarik,
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2 font-medium">athena 168</a>
                layak dipertimbangkan.
                <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center gap-2 ml-4">
                  Mulai Sekarang
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                dan jelajahi platform hari ini.
              </p>
            </section>
          </div>
        </article>
      </section>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* RTP Page Link - Prominent placement */}
      <section className="container-main py-8 lg:py-12 anim-fade-up">
        <div className="text-center">
          <Link
            href="/rtp"
            className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-glow-gold hover:shadow-glow-gold-strong transition-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Lihat RTP Slot Tertinggi 2026
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="body-sm text-fg-muted mt-3">Cek RTP 36 game dari 6 provider terpopuler</p>
        </div>
      </section>

      {/* Components */}
      <Testimonials />
      <div id="faq"><FAQ /></div>
      <InfoTable />

      <div className="h-10 lg:h-12" />
    </main>
  );
}