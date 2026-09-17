export default function InfoTable(){
  const rows = [
    ["Nama Situs","TOKOGACOR Resmi 2026"],
    ["Minimal Deposit","Rp 10.000"],
    ["Minimal Withdraw","Rp 50.000"],
    ["Metode","Bank • E-Wallet • QRIS"],
    ["Jam Operasional","24 Jam"],
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 mt-8 anim-fade-up">
      <div className="max-w-3xl mx-auto card-pro overflow-hidden !p-0">
        <div className="px-5 py-3.5 border-b border-zinc-100 bg-zinc-50 font-bold text-sm text-zinc-800 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Rincian Layanan</div>
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([k,v])=>(
              <tr key={k} className="border-b last:border-0 border-zinc-100 hover:bg-zinc-50/50 transition">
                <td className="px-5 py-3 font-semibold text-zinc-700 w-[42%] bg-zinc-50/50">{k}</td>
                <td className="px-5 py-3 text-zinc-600">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
