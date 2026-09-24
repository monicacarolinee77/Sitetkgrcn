const rows = [
  ["Nama Situs", "athena 168 Resmi 2026"],
  ["Tipe Situs", "athena 168 Official & Resmi"],
  ["Produk", "Slot, Togel, Casino, Sports"],
  ["Minimal Deposit", "Rp 10.000"],
  ["Minimal Withdraw", "Rp 50.000"],
  ["Metode", "Bank • E-Wallet • QRIS"],
  ["Jam Operasional", "24 Jam"],
];

export default function InfoTable() {
  return (
    <section className="container-main py-10 lg:py-14 anim-fade-up">
      <div className="card card-elevated overflow-hidden relative max-w-3xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-emerald to-cyan" aria-hidden="true" />

        <header className="px-5 py-3 border-b border-border-subtle bg-gradient-to-r from-bg-card to-bg-card/80 flex items-center gap-3">
          <div className="w-2 h-8 rounded-sm bg-gradient-to-b from-gold to-gold-dark shadow-[0_0_10px_rgba(240,185,11,0.5)]" aria-hidden="true" />
          <h3 className="heading-sm text-gold">Rincian Layanan VIP</h3>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
            <span className="text-xs text-fg-muted font-medium">Live</span>
          </div>
        </header>

        <div className="overflow-hidden">
          <table className="w-full text-sm" role="table">
            <tbody>
              {rows.map(([k, v], idx) => (
                <tr
                  key={k}
                  className={`border-b last:border-0 border-border-subtle hover:bg-gold/5 transition-all duration-200 ${idx % 2 === 0 ? "bg-bg-card/50" : "bg-transparent"}`}
                >
                  <th scope="row" className="px-5 py-3 font-semibold text-fg-primary w-[42%] border-r border-border-subtle">
                    {k}
                  </th>
                  <td className="px-5 py-3 text-fg-secondary flex items-center justify-between">
                    <span>{v}</span>
                    <div className="w-1 h-1 rounded-full bg-gold/30" aria-hidden="true" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="px-5 py-2.5 bg-gradient-to-r from-gold/5 to-transparent border-t border-border-subtle">
          <div className="flex items-center justify-between text-xs text-fg-muted">
            <time dateTime="2026-09-15">Terakhir diperbarui: 15 Sep 2026</time>
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/50" aria-hidden="true">
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