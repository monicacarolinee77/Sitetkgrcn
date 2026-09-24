"use client";
import { useState, useEffect } from "react";

function gen(): string {
  return String(Math.floor(Math.random() * 10000)).padStart(4, "0");
}

export default function AngkaHoki({ embedded = false }: { embedded?: boolean }) {
  const [d, setD] = useState(["0", "0", "0", "0"]);
  const [spin, setSpin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!embedded) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById("angka-hoki-section");
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [embedded]);

  const go = () => {
    if (spin) return;
    setSpin(true);
    setTimeout(() => {
      setD(gen().split(""));
      setSpin(false);
    }, 1200);
  };

  const inner = (
    <div className={embedded ? "machine-wrap !my-0 !py-0" : "machine-wrap"} id="angka-hoki-section">
      <div className="machine relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-emerald/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
        <h2 className="relative z-10 text-sm font-black tracking-wider text-gold">CEK ANGKA HOKI</h2>
        <div className="display relative">
          {d.map((x, i) => (
            <div key={i} className={`ball ${spin ? "spin" : ""} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald/20" />
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(240,185,11,0.8)]">{x}</span>
            </div>
          ))}
        </div>
        <button
          id="generate-btn"
          onClick={go}
          disabled={spin}
          className="relative z-10 w-full mt-5 btn btn-primary py-3 px-6 shadow-glow-gold hover:shadow-glow-gold-strong transition-all duration-300"
          aria-label="Generate angka hoki"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {spin ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                MEMUTAR...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180" aria-hidden="true">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                GENERATE
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-500" aria-hidden="true" />
        </button>
        <p className="mt-3 text-[11px] text-gold/40">athena168 • 2026</p>
      </div>
    </div>
  );

  if (embedded) return inner;

  return (
    <section className="container-main py-10 lg:py-14 anim-fade-up" id="angka-hoki-section">
      <div className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        {inner}
      </div>
    </section>
  );
}