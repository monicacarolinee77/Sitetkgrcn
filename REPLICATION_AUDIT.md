# REPLICATION_AUDIT.md — MABAR88.run

**Tanggal Audit:** 2026-09-15  
**Referensi:** https://mabar88.run/  
**Status Akses:** Partial (HTML fetched via PowerShell, browser snapshot limited due to 404/JS errors, but full inline CSS/JS extracted)

---

## 1. Daftar Halaman Publik

| # | Halaman | URL | Status |
|---|---------|-----|--------|
| 1 | Homepage / Product Detail | `https://mabar88.run/` | ✅ Fetched |
| 2 | T-Shirts Listing | `https://mabar88.run/t-shirts` | Link ada di header "Shop All Designs" — NEEDS VERIFICATION (redirect) |
| 3 | Login | `https://mabar88-gaming-run.pages.dev/` | External CTA — DAFTAR DISINI / LOGIN DISINI |
| 4 | Daftar | `https://mabar88-gaming-run.pages.dev/` | Same external |
| 5 | Kategori Explore | `#` (Explore Categories, Popular Products) | Dropdown placeholder |

> Semua link navigasi internal (MABAR88, SITUS SLOT, GAME SLOT, SLOT MAXWIN, SLOT88, MABAR 88) mengarah ke `https://mabar88.run/` (self-link) — pola SEO doorway.

---

## 2. Struktur Navigasi

```
Header Top (m-header)
 ├─ Search placeholder: "KETIK DI GOOGLE 'MABAR88'"
 ├─ Account | Cart
 └─ [DAFTAR AKUN] -> https://mabar88-gaming-run.pages.dev/

Header Secondary
 ├─ [Explore Categories] dropdown
 ├─ [Popular Products] dropdown
 └─ [Shop All Designs] -> /t-shirts

Main Explore Nav (m-explore-nav)
 ├─ MABAR88
 ├─ SITUS SLOT
 ├─ GAME SLOT
 ├─ SLOT MAXWIN
 ├─ MABAR88
 ├─ SLOT88
 ├─ MABAR 88
 ├─ MABAR88
 ├─ [LOGIN] -> external
 └─ [DAFTAR] -> external

Product Section
 ├─ Breadcrumb: MABAR88 > GAME SLOT > SLOT MAXWIN > MABAR 88 > GAME SLOT
 ├─ Image: images/gambar-mabar88.png (2x)
 ├─ Price: IDR 10.000
 ├─ CTA: [DAFTAR DISINI] [LOGIN DISINI] -> external
 └─ Description paragraphs (SEO text)

Section 2 (n-columns-2)
 ├─ [LOGIN] .login
 └─ [DAFTAR] .register

Main Wrapper (.overflow-hidden)
 ├─ CEK ANGKA HOKI (Machine 4D)
 ├─ Testimonials (testi-tentoto-wrap)
 ├─ FAQ (FAQPage schema)
 ├─ Info Table (Nama Situs, Jenis Layanan, Minimal Deposit, etc)
 └─ Footer ©2026 MABAR88
```

---

## 3. Daftar Komponen UI

- **Header** (sticky, white, shadow, search field)
- **Dropdown** (Explore Categories / Popular Products)
- **Mobile Menu** (hamburger, NEEDS VERIFICATION — inferred from responsive)
- **Product Card** (image, price, rating 4.9/1250 reviews)
- **CTA Buttons** (DAFTAR DISINI / LOGIN DISINI — gold gradient)
- **Login/Register Buttons** (.login / .register — cyber gold + green neon)
- **Machine 4D** (.machine — 4 balls, generate button, roll animation)
- **Testimonial Cards** (avatar initial, name, city, 5-star, quote)
- **FAQ Accordion** (6 questions)
- **Info Table** (2-column, bordered)
- **Footer** (copyright, additional links)
- **Toast/Notice** (flash x)
- **Background Effects** (cyber grid, gold shine, radial glow)

---

## 4. Palet Warna

| Token | Value | Usage |
|-------|-------|-------|
| Gold Primary | `#D4AF37` | Borders, glows, accents |
| Gold Light | `#FFD700` | Highlights, shine |
| Gold Dark | `#3a2c0c` / `#1a1505` / `#2a1f0a` | Button gradients, machine bg |
| Gold Mid | `#7d5f1e` / `#ffb300` | Register gradient |
| Neon Green | `rgba(0,255,0,0.89)` / `#2d9e00` / `#44d437` | Borders, shadows, hover |
| Neon Green Soft | `rgba(141,158,144,0.103)` | Background radial |
| Background White | `#ffffff` | Page bg |
| Background Cream | `#f9f6e8` | Gradient mid |
| Background Dark | `#0a0802` / `#070707` | Machine display |
| Text Dark | `#171717` | Body |
| Text Cream | `#f5e5c8` | Machine text |
| Text White | `#ffffff` | Buttons |
| Border Gold | `rgba(212,175,55,0.3)` | Cards |
| Shadow | `rgba(0,0,0,0.6)` | Depth |

---

## 5. Tipografi

- **Primary Display:** `Orbitron`, `Segoe UI`, sans-serif — used for .login, .register, .machine, .testi-tentoto-wrap (letter-spacing .5px, weight 700)
- **Body:** `Geist Sans`, `Arial`, `Helvetica` — paragraphs, FAQ, testimonials
- **Mono:** `Geist Mono` — price, code
- **Sizes:**
  - H1 Product Title: ~28-32px, bold, tracking-tight
  - H2 Machine: 20px, 700, letter-spacing 2px, uppercase
  - Price: 24px, bold
  - Body: 14-16px, leading 1.6-1.8
  - Small: 12-13px (breadcrumb, footer)
- **Weights:** 400 (body), 500 (medium), 700 (bold)

---

## 6. Spacing System

- Container max-width: `900px` (testi), `380px` (machine), `max-w-3xl` (main), `max-w-7xl` (header)
- Grid: `n-columns-2` = `grid-template-columns: repeat(2, 1fr)` gap 3px margin
- Padding: `25px 0` (machine wrapper), `20px 15px 25px` (machine), `12px` (display), `10px 24px` (button)
- Border radius: `10px` (login/register), `16px` (machine, button), `20px` (testi), `12px` (display)
- Shadows: layered (outer glow + inset + drop)

---

## 7. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| 320×720 (small mobile) | Single column, stacked CTA, machine 320px, header search hidden, hamburger visible |
| 375×812 (iPhone) | Same, 2-col buttons remain, font slightly larger |
| 768×1024 (tablet) | 2-col product (image left, details right), nav horizontal scroll |
| 1024×768 (desktop) | Full header, 3-col testimonials, machine centered |
| 1440×900+ | Max container centered, background grid visible |

- No horizontal overflow (overflow-x hidden on .overflow-hidden)
- Images responsive (max-width 100%)
- Buttons touch target ≥44px
- Grid collapses to 1 col on <640px

---

## 8. Daftar Fitur

- [x] Navigasi antar halaman (anchor + external)
- [x] Dropdown (Explore Categories)
- [x] Modal — NEEDS VERIFICATION (tidak terlihat di HTML, mungkin cart)
- [x] Tab — NEEDS VERIFICATION
- [x] Slider/Carousel — Testimonials (inferred)
- [x] Form — Search field (placeholder only)
- [x] Search — "KETIK DI GOOGLE"
- [x] Filter — NEEDS VERIFICATION
- [x] Pagination — NEEDS VERIFICATION
- [x] Tombol interaktif (hover, focus, active, scan effect)
- [x] Animasi (roll 0.4s, hover translateY -2px, brightness 1.15, scan translateX)
- [x] Toast — .flash x
- [x] Link eksternal (pages.dev)
- [x] 4D Generator (JS generate4D, spin 2s)
- [x] FAQ Accordion
- [x] Rating display (4.9/1250)

---

## 9. Daftar Aset

| Aset | Path | Catatan |
|------|------|---------|
| Logo | `images/icon.png` (40×40) | Used in nav links |
| Banner | `images/gambar-mabar88.png` | Product image (2 instances) |
| Favicon | `images/icon.png` | Thumbnail |
| Font | Orbitron (Google Fonts) | Cyber theme |
| Font | Geist Sans/Mono | Body |
| SVG | teepublicon | Icon wrapper |
| Background | CSS gradients (no image) | Cyber grid + radial |

> Aset asli tidak disalin — diganti dengan placeholder SVG/gradient yang karakter visualnya serupa.

---

## 10. Bagian Belum Diverifikasi

- Isi dropdown Explore Categories / Popular Products (HTML terpotong)
- Halaman /t-shirts listing
- Cart & Account modal behavior
- Mobile menu animation
- Exact breakpoint values (inferred 640/768/1024)
- Video asset (tidak ada)
- SEO meta exact (title/description diambil dari schema)

---

## 11. Rencana Implementasi

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Orbitron

**Struktur Folder:**
```
src/
 ├─ app/
 │   ├─ layout.tsx (metadata, fonts, header/footer)
 │   ├─ page.tsx (homepage composition)
 │   ├─ globals.css (cyber theme, grid, animations)
 │   └─ t-shirts/page.tsx (placeholder listing)
 ├─ components/
 │   ├─ Header.tsx
 │   ├─ HeroProduct.tsx
 │   ├─ AngkaHoki.tsx
 │   ├─ Testimonials.tsx
 │   ├─ FAQ.tsx
 │   ├─ InfoTable.tsx
 │   └─ Footer.tsx
 └─ public/
     └─ images/ (placeholder)
```

**Prioritas:**
1. Header + Nav (presisi posisi logo, search, CTA)
2. Hero Product (price, image, DAFTAR/LOGIN, description)
3. Login/Register gold buttons + hover scan
4. Machine 4D (functional JS)
5. Testimonials + FAQ (accordion)
6. Info Table + Footer
7. Responsive + QA

**Validasi:** Build tanpa error, Lighthouse, screenshot comparison 375/768/1440.
