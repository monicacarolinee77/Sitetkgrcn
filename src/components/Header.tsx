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

  const menuIconClass = "transition-all duration-300 " + (open ? "rotate-90 text-gold" : "");
  const searchSuggestions = [
    "game tips and strategies",
    "best games to play",
    "how to register",
    "platform features",
    "about athena168",
    "payment methods",
    "customer support",
    "faq and help",
  ];

  return (
    <header className={"sticky top-0 z-50 transition-all duration-300 " + (scrolled ? "bg-bg-deep/95 backdrop-blur-xl border-b border-border-subtle shadow-xl" : "bg-transparent")}>
      {/* Mobile Top Bar - Daftar & Login always visible */}
      <div className="lg:hidden border-b border-border-subtle bg-bg-deepest/80 backdrop-blur-xl">
        <div className="container-main py-2 flex items-center justify-end gap-2">
          <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            Login
          </a>
          <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Daftar
          </a>
        </div>
      </div>
      {/* Top Bar - VIP Indicator */}
      <div className="border-b border-border-subtle bg-bg-deepest/80 backdrop-blur-xl hidden lg:block">
        <div className="container-main">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4 text-xs font-medium tracking-wider">
              <span className="flex items-center gap-1.5 text-emerald-light">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Live RTP • 24/7 Support
              </span>
              <span className="text-fg-subtle">|</span>
              <span className="flex items-center gap-1.5 text-gold">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                VIP Lounge Access
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="nav-pill nav-pill-active px-3 py-1.5">
                Login
              </a>
              <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Header */}
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-10" aria-label="athena168 Home">
            <Image
              src="/LOGO.png"
              alt="athena168"
              width={140}
              height={46}
              className="drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-2" aria-label="Primary navigation">
            <Link href="/" className="nav-pill px-4 py-2">Beranda</Link>
            <Link href="/rtp" className="nav-pill px-4 py-2">RTP Slot</Link>
            <Link href="/t-shirts" className="nav-pill px-4 py-2">Merchandise</Link>
            <Link href="#produk" className="nav-pill px-4 py-2">Produk</Link>
            <Link href="#faq" className="nav-pill px-4 py-2">FAQ</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <div className="relative" ref={searchWrapperRef}>
              <button
                className="btn btn-ghost btn-sm p-2"
                onClick={() => setShowSuggestions(!showSuggestions)}
                aria-label="Search"
                aria-expanded={showSuggestions}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
              {showSuggestions && (
                <div className="absolute right-0 top-full mt-2 w-64 card-elevated rounded-xl border-border-hover overflow-hidden shadow-xl anim-scale-in" role="listbox">
                  <div className="p-2 border-b border-border-subtle flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" aria-hidden="true">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">Saran Pencarian</span>
                  </div>
                  <ul className="py-1" role="list">
                    {searchSuggestions.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={`/?q=${encodeURIComponent(s)}`}
                          className="block px-4 py-2.5 text-sm text-fg-secondary hover:text-gold hover:bg-gold-muted transition-colors"
                          role="option"
                          onClick={() => setShowSuggestions(false)}
                        >
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a href="https://tokosoon.site/auth/login?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm hidden sm:inline-flex">
              Login
            </a>
            <a href="https://tokosoon.site/auth/register?ref=zrg2e2s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              Daftar Sekarang
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden btn btn-ghost btn-sm p-2"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={menuIconClass} aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Game Categories */}
      <div className="border-t border-border-subtle bg-bg-deep/80 backdrop-blur-xl hidden lg:block">
        <div className="container-main">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 px-2 -mx-2 scrollbar-hide" role="navigation" aria-label="Game categories">
            {[
              { label: "Semua", href: "#", active: true },
              { label: "Slot Gacor", href: "#slot", active: false },
              { label: "Live Casino", href: "#casino", active: false },
              { label: "Sportsbook", href: "#sports", active: false },
              { label: "Togel", href: "#togel", active: false },
              { label: "Poker", href: "#poker", active: false },
              { label: "Arcade", href: "#arcade", active: false },
              { label: "Virtual", href: "#virtual", active: false },
            ].map((cat, i) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`nav-pill whitespace-nowrap ${cat.active ? "nav-pill-active" : ""}`}
                aria-current={cat.active ? "page" : undefined}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-border-subtle bg-bg-deep/95 backdrop-blur-xl p-4 anim-slide-down">
          <nav className="flex flex-col gap-2 mb-4" aria-label="Mobile navigation">
            <Link href="/" className="nav-pill px-4 py-3 justify-start" onClick={() => setOpen(false)}>Beranda</Link>
            <Link href="/rtp" className="nav-pill px-4 py-3 justify-start" onClick={() => setOpen(false)}>RTP Slot</Link>
            <Link href="/t-shirts" className="nav-pill px-4 py-3 justify-start" onClick={() => setOpen(false)}>Merchandise</Link>
            <Link href="#produk" className="nav-pill px-4 py-3 justify-start" onClick={() => setOpen(false)}>Produk</Link>
            <Link href="#faq" className="nav-pill px-4 py-3 justify-start" onClick={() => setOpen(false)}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
}