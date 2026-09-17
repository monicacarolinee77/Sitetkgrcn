"use client";
import { useState } from "react";
const faqs = [
  { q:"Apa itu TOKOGACOR?", a:"Platform situs slot dengan konsep game mabar mantap — akses cepat via tokogacor.run, stabil di HP & desktop." },
  { q:"Cara akses link resmi?", a:"Buka tokosoon.site/register?ref/=zrg2e2s, lalu login. Simpan di bookmark." },
  { q:"Apakah aman?", a:"Ya, keamanan berlapis dan enkripsi. Selalu pakai link resmi." },
  { q:"Minimal deposit?", a:"Rp 10.000 deposit, Rp 50.000 withdraw. Bank, E-Wallet & QRIS." },
];
export default function FAQ(){
  const [open,setOpen]=useState(0);
  return (
    <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 mt-8 anim-fade-up" id="faq">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-bold text-[13px] tracking-[0.14em] text-foreground/90 mb-4 text-center">FAQ TOKOGACOR</h3>
        <div className="card-pro overflow-hidden !p-0 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/30 via-purple/30 to-pink/30"></div>
          
          {faqs.map((f,i)=>(
            <div key={i} className={`border-b last:border-0 border-cyan/20 hover:bg-cyan/5 transition-all duration-200 ${i===0?'mt-1':''}`}>              
              <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex justify-between items-center gap-3 px-6 py-4 text-left text-sm font-bold text-foreground/90 hover:text-cyan transition-all duration-200">
                <span>{f.q}</span>
                <span className={`w-8 h-8 grid place-items-center rounded-full border text-sm shrink-0 transition-all duration-300 ${open===i?'bg-cyan text-dark border-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]':'bg-card/50 text-foreground/60 border-cyan/30'} ${open===i?'rotate-180':''}`}>{open===i?"−":"+"}</span>
              </button>
              <div className={`grid transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${open===i?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-4 text-sm leading-6 text-foreground/70">{f.a}</div></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-foreground/40">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
