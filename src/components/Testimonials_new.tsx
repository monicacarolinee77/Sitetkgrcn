const data = [
  { n: "Arif • Malang", t: "Login TOKOGACOR stabil, bonus harian konsisten.", rating: 4.9 },
  { n: "Fajar • Jakarta", t: "Deposit QRIS 2 menit, transparan.", rating: 5.0 },
  { n: "Joko • Yogyakarta", t: "Klaim bonus gampang, komunitas suportif.", rating: 4.8 },
];

export default function Testimonials() {
  return (
    <section className="container-main py-12 lg:py-16 anim-fade-up">
      <div className="card-elevated p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/30 via-purple/30 to-pink/30" aria-hidden="true" />

        <header className="mb-8 lg:mb-10">
          <h3 className="heading-lg flex items-center gap-3 text-cyan anim-slide-up">
            <span className="w-1.5 h-6 rounded-sm bg-cyan shadow-glow-cyan" aria-hidden="true" />
            Testimoni Pengguna
            <span className="ml-auto flex items-center gap-2 text-xs font-semibold card px-3 py-1.5 rounded-full border border-cyan/30 shadow-sm anim-slide-up anim-delay-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-cyan" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.9/5
            </span>
          </h3>
          <p className="body-md text-foreground/60 mt-2 anim-slide-up anim-delay-200 max-w-xl">
            Lebih dari 1.250+ pengguna mempercayai TOKOGACOR untuk pengalaman game mabar mantap yang stabil dan transparan.
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6" role="list" aria-label="Testimoni pengguna">
          {data.map((x, i) => (
            <article
              key={i}
              className="card p-5 lg:p-6 hover:-translate-y-2 hover:shadow-glow-cyan transition-all duration-300 anim-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
              role="listitem"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-semibold text-foreground hover:text-cyan transition-colors">{x.n}</p>
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
                      className={`transition-colors ${starIndex < Math.floor(x.rating) ? "text-cyan" : "text-foreground/20"}`}
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="body-sm text-foreground/70 leading-relaxed italic relative">
                <span className="text-cyan/30 text-2xl font-bold leading-none absolute -top-2 -left-2" aria-hidden="true">"</span>
                {x.t}
              </blockquote>

              <footer className="mt-4 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[10px]">
                <span className="text-cyan/50 font-medium uppercase tracking-wider">Verified User</span>
                <span className="text-foreground/40" aria-hidden="true">•</span>
                <time className="text-foreground/40">2 minggu lalu</time>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 lg:mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-foreground/60" role="list" aria-label="Statistik platform">
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="font-medium text-foreground">1.250+ Pengguna</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" style={{ animationDelay: "0.2s" }} aria-hidden="true" />
              <span className="font-medium text-foreground">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 rounded-full bg-purple animate-pulse" style={{ animationDelay: "0.4s" }} aria-hidden="true" />
              <span className="font-medium text-foreground">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}