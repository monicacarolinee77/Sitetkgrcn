const data = [
  { n: "Arif • Malang", t: "Login athena 168 stabil, bonus harian konsisten.", rating: 4.9 },
  { n: "Fajar • Jakarta", t: "Funding QRIS 2 menit, transparan.", rating: 5.0 },
  { n: "Joko • Yogyakarta", t: "Klaim bonus gampang, komunitas suportif.", rating: 4.8 },
];

export default function Testimonials() {
  return (
    <section className="container-main py-10 lg:py-14 anim-fade-up">
      <div className="testi-wrap relative overflow-hidden">
        <header className="mb-8 lg:mb-10">
          <h3 className="heading-lg flex items-center gap-3 text-gold anim-slide-up">
            <span className="w-1.5 h-6 rounded-sm bg-gradient-to-b from-gold to-gold-dark shadow-[0_0_10px_rgba(240,185,11,0.5)]" aria-hidden="true" />
            Testimoni Pengguna VIP
              <span className="ml-auto flex items-center gap-2 text-xs font-semibold card-vip px-3 py-1.5 rounded-md border border-royal/30 shadow-sm anim-slide-up anim-delay-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-royal-light" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.9/5
            </span>
          </h3>
          <p className="body-md text-fg-muted mt-2 anim-slide-up anim-delay-200 max-w-xl">
            Lebih dari 1.250+ pengguna mempercayai athena168 untuk pengalaman gaming yang stabil dan transparan.
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6" role="list" aria-label="Testimoni pengguna">
          {data.map((x, i) => (
            <article
              key={i}
              className="card card-felt p-5 lg:p-6 hover:border-emerald/30 hover:shadow-emerald transition-all duration-300 anim-fade-up flex flex-col min-h-[220px]"
              style={{ animationDelay: `${i * 100}ms` }}
              role="listitem"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-semibold text-fg-primary hover:text-emerald transition-colors">{x.n}</p>
                <div className="flex items-center gap-1" aria-label={`Rating ${x.rating} dari 5`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={starIndex < Math.floor(x.rating) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-colors ${starIndex < Math.floor(x.rating) ? "text-gold" : "text-fg-subtle"}`}
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="body-sm text-fg-secondary leading-relaxed italic relative">
                <span className="text-gold/30 text-2xl font-bold leading-none absolute -top-2 -left-2" aria-hidden="true">&ldquo;</span>
                {x.t}
              </blockquote>

              <footer className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-[10px]">
                <span className="text-emerald/50 font-medium uppercase tracking-wider">Verified VIP</span>
                <span className="text-fg-subtle" aria-hidden="true">•</span>
                <time className="text-fg-subtle">2 minggu lalu</time>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-8 lg:mt-10 pt-6 border-t border-border-subtle">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-fg-muted" role="list" aria-label="Statistik platform">
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
              <span className="font-medium text-fg-primary">1.250+ Pengguna</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: "0.2s" }} aria-hidden="true" />
              <span className="font-medium text-fg-primary">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-royal animate-pulse" style={{ animationDelay: "0.4s" }} aria-hidden="true" />
              <span className="font-medium text-fg-primary">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}