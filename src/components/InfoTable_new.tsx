const rows = [
  ["Nama Situs", "TOKOGACOR Resmi 2026"],
  ["Minimal Deposit", "Rp 10.000"],
  ["Minimal Withdraw", "Rp 50.000"],
  ["Metode", "Bank • E-Wallet • QRIS"],
  ["Jam Operasional", "24 Jam"],
];

export default function InfoTable() {
  return (
    <section className="container-main py-12 lg:py-16 anim-fade-up">
      <div className="card-elevated overflow-hidden relative max-w-3xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/30 via-purple/30 to-pink/30" aria-hidden="true" />

        <header className="px-6 py-4 border-b border-border/50 bg-gradient-to-r from-card to-card/80 flex items-center gap-3">
          <div className="w-2 h-8 rounded-sm bg-cyan shadow-glow-cyan" aria-hidden="true" />
          <h3 className="heading-sm text-cyan">Rincian Layanan</h3>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs text-foreground/60 font-medium">Live</span>
          </div>
        </header>

        <div className="overflow-hidden">
          <table className="w-full text-sm" role="table">
            <tbody>
              {rows.map(([k, v], idx) => (
                <tr
                  key={k}
                  className={`border-b last:border-0 border-border/50 hover:bg-cyan/5 transition-all duration-200 ${idx % 2 === 0 ? "bg-card/50" : "bg-transparent"}`}
                >
                  <th scope="row" className="px-6 py-4 font-semibold text-foreground/90 w-[42%] border-r border-border/30">
                    {k}
                  </th>
                  <td className="px-6 py-4 text-foreground/80 flex items-center justify-between">
                    <span>{v}</span>
                    <div className="w-1 h-1 rounded-full bg-cyan/30" aria-hidden="true" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="px-6 py-3 bg-gradient-to-r from-cyan/5 to-transparent border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-foreground/50">
            <time dateTime="2026-09-15">Terakhir diperbarui: 15 Sep 2026</time>
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan/50" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 18 12" />
              </svg>
              Real-time data
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}