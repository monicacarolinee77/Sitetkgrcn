import HeroProduct from "@/components/HeroProduct";
import Testimonials from "@/components/Testimonials_new";
import FAQ from "@/components/FAQ_new";
import InfoTable from "@/components/InfoTable_new";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TOKOGACOR 2026: Panduan game mabar Mantap & Kemenangan Berlimpah",
    description: "Panduan TOKOGACOR 2026 — daftar, login resmi, deposit, bonus harian, dan tips game mabar mantap.",
    author: { "@type": "Person", name: "Tim TOKOGACOR" },
    publisher: { "@type": "Organization", name: "TOKOGACOR" },
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    mainEntityOfPage: "https://tokogacor.run/",
  };
  return (
    <main className="flex-1 flex flex-col">
      <HeroProduct />

      {/* Article Section */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <article className="card p-6 sm:p-8 lg:p-10">
          {/* Article Header */}
          <header className="mb-8 lg:mb-10">
            <span className="eyebrow anim-slide-up">Panduan Resmi 2026</span>
            <h1 className="heading-xl text-cyan mt-4 anim-slide-up anim-delay-100">
              TOKOGACOR 2026: Panduan game mabar Mantap yang Stabil
            </h1>
            <p className="body-lg text-foreground/70 mt-4 max-w-2xl anim-slide-up anim-delay-200">
              Cari <strong className="text-cyan font-semibold">link resmi TOKOGACOR</strong> yang cepat dan aman? 
              Ini panduan ringkas — cara daftar, login, deposit, dan klaim bonus harian agar ritme 
              <em className="text-foreground/70">game mabar mantap</em> tetap terjaga.
            </p>
          </header>

          {/* Table of Contents - Premium Dark Style */}
          <nav className="toc-premium mb-10 lg:mb-12 anim-slide-up anim-delay-300" aria-label="Daftar Isi">
            <div className="toc-premium-title">Daftar Isi</div>
            <div className="toc-premium-list">
              <a href="#apa-itu" className="toc-premium-item">
                <span className="toc-premium-number">01</span>
                <span>Apa Itu TOKOGACOR?</span>
              </a>
              <a href="#cara-daftar" className="toc-premium-item">
                <span className="toc-premium-number">02</span>
                <span>Cara Daftar & Login</span>
              </a>
              <a href="#deposit" className="toc-premium-item">
                <span className="toc-premium-number">03</span>
                <span>Deposit & Withdraw</span>
              </a>
              <a href="#bonus" className="toc-premium-item">
                <span className="toc-premium-number">04</span>
                <span>Bonus & Cara Klaim</span>
              </a>
              <a href="#produk-kami" className="toc-premium-item">
                <span className="toc-premium-number">05</span>
                <span>Produk Kami</span>
              </a>
              <a href="#tanggung-jawab" className="toc-premium-item">
                <span className="toc-premium-number">06</span>
                <span>Tanggung Jawab Bermain</span>
              </a>
              <a href="#faq" className="toc-premium-item">
                <span className="toc-premium-number">07</span>
                <span>FAQ</span>
              </a>
            </div>
          </nav>

          {/* Article Content - Premium Prose */}
          <div className="prose-premium">
            <section id="apa-itu" className="anim-slide-up">
              <h2>Apa Itu TOKOGACOR?</h2>
              <p>
                <strong className="text-cyan">TOKOGACOR</strong> adalah platform 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">situs slot</a> 
                dengan konsep <em>game mabar mantap</em> — bermain bareng yang cepat dan penuh peluang 
                <strong className="text-cyan">kemenangan berlimpah</strong>. Alurnya ringkas, tanpa langkah berbelit.
              </p>
              <p>
                Tiga fokus utama: akses stabil di semua perangkat, login singkat yang aman, 
                dan reward transparan yang tercatat jelas.
              </p>
            </section>

            <div className="section-divider" />

            <section id="cara-daftar" className="anim-slide-up">
              <h2>Cara Daftar & Login Resmi</h2>
              <ol>
                <li>
                  Buka <a href="https://tokosoon.site/register?ref=zrg2e2s">tokosoon.site</a> 
                  atau <a href="https://tokosoon.site/register?ref=zrg2e2s">tokosoon.site</a>
                </li>
                <li>Klik <strong className="text-cyan">DAFTAR</strong> → isi username & password</li>
                <li>Verifikasi → <strong className="text-cyan">LOGIN</strong> dan klaim bonus new member</li>
              </ol>
            </section>

            <div className="section-divider" />

            <section id="deposit" className="anim-slide-up">
              <h2>Deposit & Withdraw</h2>
              <p>
                Mendukung <strong className="text-cyan">bank lokal, E-Wallet & QRIS</strong>. 
                Minimal deposit <strong className="text-cyan">Rp 10.000</strong>, 
                withdraw <strong className="text-cyan">Rp 50.000</strong>. 
                Proses rata-rata {"<"} 3 menit.
              </p>
            </section>

            <div className="section-divider" />

            <section id="bonus" className="anim-slide-up">
              <h2>Bonus & Cara Klaim</h2>
              <p>
                Diskon harian, bonus topup, dan hadiah loyalitas. 
                Cek menu <strong className="text-cyan">Promo</strong> setelah login → 
                pilih bonus → klik <strong className="text-cyan">Klaim</strong>.
              </p>
            </section>

            <div className="section-divider" />

            <section id="produk-kami" className="anim-slide-up">
              <h2>Produk Kami</h2>
              <p>
                TOKOGACOR menghadirkan ekosistem permainan lengkap dalam satu akun. 
                Semua produk dapat diakses setelah 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">daftar</a> 
                dan login — tanpa perlu pindah platform.
              </p>
              
              <h3>🎯 Permainan Togel</h3>
              <p>
                Coba keberuntungan Anda dalam permainan togel online yang menarik. 
                Temukan pengalaman bermain yang seru dengan berbagai pilihan pasaran 
                dan kesempatan memenangkan hadiah besar. 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">Daftar sekarang</a> 
                untuk mulai menikmati sensasi taruhan togel secara online!
              </p>

              <h3>🎰 Permainan Slot</h3>
              <p>
                Nikmati sensasi tak terlupakan permainan slot online dengan beragam tema menarik, 
                bonus menggiurkan, dan kesempatan memenangkan hadiah besar. 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">Mainkan slot online sekarang</a> 
                dan rasakan keseruan tanpa batas!
              </p>

              <h3>♠️ Permainan Casino</h3>
              <p>
                Jelajahi dunia permainan casino online yang mengasyikkan dan menghibur. 
                Nikmati beragam permainan menarik seperti baccarat, sweet bonanza, roulette, 
                langsung dari kenyamanan rumah Anda. 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">Bergabunglah sekarang</a> 
                dan alami kegembiraan tak terbatas dari permainan casino virtual.
              </p>

              <h3>⚽ Permainan Sports</h3>
              <p>
                Rasakan sensasi permainan SPORTSBOOK online dan nikmati berbagai olahraga favorit 
                seperti sportsbook sepakbola, sportsbook basket, sportsbook tenis, sportsbook e-sports. 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">Bergabunglah sekarang</a> 
                dan nikmati sensasi taruhan olahraga di permainan SPORTSBOOK online yang menegangkan.
              </p>
            </section>

            <div className="section-divider-strong" />

            <section id="tanggung-jawab" className="anim-slide-up">
              <h2>Tanggung Jawab Bermain</h2>
              <p>
                TOKOGACOR berkomitmen pada permainan yang aman, adil, dan bertanggung jawab. 
                Mengacu pada 
                <a href="https://tokosoon.site/help-center/terms-condition">Syarat & Ketentuan</a> 
                dan 
                <a href="https://tokosoon.site/about">Tentang Kami</a> 
                di tokosoon.site:
              </p>
              <ul>
                <li><strong className="text-cyan">Usia minimal 17 tahun</strong> — Pendaftar wajib berusia 17 tahun ke atas dan lolos verifikasi KYC (Know Your Customer).</li>
                <li><strong className="text-cyan">Data terjamin & transaksi aman</strong> — Data tersimpan di server dengan security berstandar, transaksi deposit/withdraw terjamin dan dapat dilakukan kapan pun selama bank online.</li>
                <li><strong className="text-cyan">Satu data satu akun</strong> — Wajib memberikan data valid sesuai rekening bank. Withdraw hanya ke rekening terdaftar.</li>
                <li><strong className="text-cyan">Fair play</strong> — Dilarang keras penggunaan bot, software, atau metode curang. Pelanggaran berakibat penutupan akun dan pembatalan kemenangan.</li>
                <li><strong className="text-cyan">KYC & AML</strong> — Mengikuti kebijakan Kenali Pelanggan dan Anti-Pencucian Uang, bekerja sama dengan lembaga keuangan dan regulator.</li>
                <li><strong className="text-cyan">Bermain bijak</strong> — Tetapkan batas waktu dan budget, jangan mengejar kekalahan, dan hubungi Livechat/Whatsapp jika butuh dukungan. 18+ • Bermain bertanggung jawab.</li>
              </ul>
              <p className="body-sm text-foreground-subtle mt-6">
                Info lengkap: 
                <a href="https://tokosoon.site/help-center/terms-condition">Syarat & Ketentuan</a> • 
                <a href="https://tokosoon.site/help-center/privacy-policy">Kebijakan Privasi</a> • 
                <a href="https://tokosoon.site/help-center">Pusat Bantuan</a>
              </p>
            </section>

            <div className="section-divider-strong" />

            <section className="anim-slide-up">
              <p className="body-lg">
                <strong className="text-cyan">Kesimpulan:</strong> 
                Jika cari <em>situs slot</em> dengan akses cepat dan bonus nyata, 
                <a href="https://tokosoon.site/register?ref=zrg2e2s">TOKOGACOR</a> 
                layak jadi tujuan utama. 
                <a href="https://tokosoon.site/register?ref=zrg2e2s" className="font-semibold">Daftar sekarang</a> 
                dan rasakan game mabar mantap hari ini.
              </p>
            </section>
          </div>
        </article>
      </section>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Components */}
      <Testimonials />
      <div id="faq"><FAQ /></div>
      <InfoTable />

      {/* Keywords Section */}
      <section className="container-main py-12 lg:py-16 anim-fade-up">
        <div className="flex flex-wrap gap-3 justify-center">
          {["TOKOGACOR", "TOKO GACOR", "SLOT MAXWIN", "SITUS SLOT", "SLOT88"].map((t) => (
            <a
              key={t}
              href="https://tokosoon.site/register?ref=zrg2e2s"
              className="nav-pill px-5 py-3 text-sm"
            >
              {t}
            </a>
          ))}
        </div>
      </section>
      
      <div className="h-16 lg:h-20" />
    </main>
  );
}