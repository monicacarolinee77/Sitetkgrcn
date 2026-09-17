const data = [
  { n:"Arif • Malang", t:"Login TOKOGACOR stabil, bonus harian konsisten." },
  { n:"Fajar • Jakarta", t:"Deposit QRIS 2 menit, transparan." },
  { n:"Joko • Yogyakarta", t:"Klaim bonus gampang, komunitas suportif." },
];
export default function Testimonials(){
  return (
    <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 anim-fade-up">
      <div className="testi-wrap p-5 sm:p-6">
        <h3 className="font-bold text-[13px] tracking-wide mb-4 flex items-center gap-2 text-zinc-800"><span className="w-1 h-4 rounded-full bg-zinc-900"></span>Testimoni Pengguna <span className="ml-auto text-[11px] font-semibold text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1 rounded-full shadow-sm">★ 4.9/5</span></h3>
        <div className="grid sm:grid-cols-3 gap-3.5">
          {data.map((x,i)=>(
            <div key={i} className="testi-card rounded-xl bg-white border border-zinc-100 p-4 shadow-sm" style={{animationDelay: `${i*80}ms`}}>
              <p className="text-xs font-bold">{x.n}</p>
              <p className="text-xs text-zinc-600 mt-1">“{x.t}”</p>
              <p className="text-[11px] text-amber-600 mt-1">★★★★★ 5.0</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
