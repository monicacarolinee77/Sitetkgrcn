"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuIconClass = "transition-all duration-300 " + (open ? "rotate-90 text-cyan" : "");

  const searchSuggestions = [
    "hadiah togel terbesar",
    "situs gacor tokogacor",
    "tokogacor jackpot",
    "bonus deposit tokogacor",
    "claim bonus tokogacor",
    "tokogacor maxwin",
    "tokogacor login resmi",
    "tokogacor daftar akun",
  ];

  return (
    <header className={"sticky top-0 z-50 transition-all duration-300 " + (scrolled ? "bg-dark/95 backdrop-blur-xl border-b border-cyan/10 shadow-lg" : "bg-transparent")}>
      {/* Primary Header */}
      <div className="container-main">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:gap-6">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="TOKOGACOR Home">
            <Image
              src="https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png"
              alt="TOKOGACOR"
              width={40}
              height={40}
              unoptimized
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-[1.05] drop-shadow-[0_0_12px_rgba(0,229,255,0.3)]"
            />
          </Link>

          {/* Search - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-[520px] mx-4 lg:mx-8">
            <div
              ref={searchWrapperRef}
              className="relative w-full group search-wrapper"
              onMouseEnter={() => setShowSuggestions(true)}
              onMouseLeave={() => setShowSuggestions(false)}
            >
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Cari di Google 'TOKOGACOR'"
                className="search-input"
                onFocus={() => { setShowSuggestions(true); }}
                onBlur={() => { setTimeout(() => setShowSuggestions(false), 200); }}
                aria-label="Search"
                aria-autocomplete="list"
                aria-controls="search-suggestions"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Search Suggestions Dropdown */}
              {showSuggestions && (
                <div
                  id="search-suggestions"
                  className="absolute top-full left-0 right-0 mt-2 z-50 card-elevated border-cyan/20 shadow-glow-cyan rounded-2xl overflow-hidden anim-slide-down"
                  role="listbox"
                >
                  <div className="p-2 border-b border-cyan/10">
                    <span className="text-xs text-foreground/50 font-medium tracking-wider uppercase">Pencarian Rekomendasi</span>
                  </div>
                  <ul className="py-1 max-h-60 overflow-y-auto" role="listbox">
                    {searchSuggestions.map((suggestion, idx) => (
                      <li key={idx} role="option" aria-selected={false}>
                        <button
                          type="button"
                          className="w-full px-4 py-2.5 text-left text-sm text-foreground/80 hover:bg-cyan/5 hover:text-cyan transition-colors duration-150 flex items-center gap-3"
                          onClick={() => {
                            window.open(`https://tokosoon.site/search?q=${encodeURIComponent(suggestion)}`, '_blank');
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan/50 flex-shrink-0" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-3.5-3.5" />
                          </svg>
                          <span className="truncate">{suggestion}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 ml-auto flex-shrink-0" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2 border-t border-cyan/10">
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-left text-xs text-foreground/50 hover:text-cyan transition-colors flex items-center gap-2"
                      onClick={() => window.open("https://tokosoon.site/auth/register?ref=zrg2e2s", '_blank')}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan/50" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>Daftar Sekarang di TOKOGACOR</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://tokosoon.site/auth/register?ref=zrg2e2s"
              target="_blank"
              rel="noreferrer"
              className="btn btn-md btn-secondary"
              aria-label="Daftar akun baru"
            >
              DAFTAR
            </a>
            <a
              href="https://tokosoon.site/auth/login?ref=zrg2e2s"
              target="_blank"
              rel="noreferrer"
              className="btn btn-md btn-primary"
              aria-label="Login ke akun"
            >
              LOGIN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-xl border border-cyan/20 bg-card/80 text-cyan hover:bg-cyan/10 hover:border-cyan/40 active:scale-95 transition-all duration-200 flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={menuIconClass} aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t border-cyan/10 bg-dark/80 backdrop-blur-xl">
        <div className="container-main">
          <div className="flex items-center gap-2 h-[48px] overflow-x-auto no-scrollbar pb-px">
            <Link
              href="/t-shirts"
              className="nav-pill nav-pill-active shrink-0 px-4 py-1.5 text-sm"
              aria-current="page"
            >
              Shop All
            </Link>
            <span className="text-cyan/20 shrink-0">•</span>
            {[
              { l: "TOKOGACOR", active: true },
              { l: "SITUS SLOT", active: false },
              { l: "SLOT MAXWIN", active: false },
            ].map(({ l, active }) => (
              <Link
                key={l}
                href="/rtp"
                className={"nav-pill shrink-0 px-4 py-1.5 text-sm " + (active ? "nav-pill-active" : "")}
                aria-current={active ? "page" : undefined}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-cyan/20 bg-dark/95 backdrop-blur-xl p-4 anim-slide-down">
          <div className="space-y-3">
            {/* Mobile Search */}
            <div className="relative w-full">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Cari di Google 'TOKOGACOR'"
                className="search-input h-11 pl-10 text-sm"
                aria-label="Search mobile"
              />
            </div>
            
            {/* Mobile Actions */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              <a
                href="https://tokosoon.site/auth/register?ref=zrg2e2s"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-primary w-full"
              >
                DAFTAR AKUN
              </a>
              <a
                href="https://tokosoon.site/auth/login?ref=zrg2e2s"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-secondary w-full"
              >
                LOGIN
              </a>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Link href="/t-shirts" className="nav-pill text-xs">Shop All</Link>
              <Link href="/rtp" className="nav-pill text-xs">TOKOGACOR</Link>
              <Link href="/t-shirts" className="nav-pill text-xs">SITUS SLOT</Link>
              <Link href="/t-shirts" className="nav-pill text-xs">SLOT MAXWIN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}