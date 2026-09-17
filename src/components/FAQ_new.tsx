"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Apa itu TOKOGACOR?",
    a: "Platform situs slot dengan konsep game mabar mantap — akses cepat via tokogacor.run, stabil di HP & desktop.",
    icon: "🎮",
  },
  {
    q: "Cara akses link resmi?",
    a: "Buka tokosoon.site/register?ref=zrg2e2s, lalu login. Simpan di bookmark.",
    icon: "🔗",
  },
  {
    q: "Apakah aman?",
    a: "Ya, keamanan berlapis dan enkripsi. Selalu pakai link resmi.",
    icon: "🔒",
  },
  {
    q: "Minimal deposit?",
    a: "Rp 10.000 deposit, Rp 50.000 withdraw. Bank, E-Wallet & QRIS.",
    icon: "💰",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="container-main py-12 lg:py-16 anim-fade-up" id="faq">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6 anim-slide-up">
            <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan text-xl" aria-hidden="true">
              ❓
            </div>
            <h3 className="heading-lg text-cyan anim-slide-up">FAQ TOKOGACOR</h3>
            <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan text-xl" aria-hidden="true">
              💡
            </div>
          </div>
          <p className="body-md text-foreground/60 anim-slide-up anim-delay-100 max-w-xl mx-auto">
            Pertanyaan yang sering diajukan seputar daftar, login, deposit, dan bonus di TOKOGACOR.
          </p>
        </header>

        <div className="card-elevated overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/30 via-purple/30 to-pink/30" aria-hidden="true" />

          <dl className="divide-y divide-border/50" role="list" aria-label="Pertanyaan yang sering diajukan">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${open === i ? "bg-cyan/5" : ""}`}
                role="listitem"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left text-base font-medium text-foreground hover:text-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:ring-offset-2 focus:ring-offset-background"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">{f.icon}</span>
                    {f.q}
                  </span>
                  <span
                    className={`w-8 h-8 grid place-items-center rounded-full border text-sm shrink-0 transition-all duration-300 ${
                      open === i
                        ? "bg-cyan text-background border-cyan rotate-180"
                        : "bg-card text-foreground/60 border-border/50"
                    }`}
                    aria-hidden="true"
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  role="region"
                  aria-label={`Jawaban: ${f.q}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-base leading-7 text-foreground/80 bg-gradient-to-r from-cyan/5 to-transparent border-t border-cyan/10">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 text-center anim-fade-up anim-delay-200">
          <p className="body-sm text-foreground/50">
            Masih ada pertanyaan?{" "}
            <a href="https://tokosoon.site/register?ref=zrg2e2s" className="text-cyan hover:underline font-medium transition-colors">
              Daftar sekarang
            </a>{" "}
            untuk akses penuh
          </p>
        </div>
      </div>
    </section>
  );
}