import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://athena168.run";

export const metadata = { 
  title: "Shop All Designs — athena168",
  description: "Koleksi t-shirt premium athena168 dengan desain gaming modern. Kualitas terbaik, nyaman dipakai, dan stylish untuk para gamer.",
  alternates: {
    canonical: `${siteUrl}/t-shirts`,
  },
  openGraph: {
    title: "Shop All Designs — athena168",
    description: "Koleksi t-shirt premium athena168 dengan desain gaming modern.",
    url: `${siteUrl}/t-shirts`,
    siteName: "athena168",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/LOGO.png", width: 1200, height: 630, alt: "T-Shirt athena168 Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Designs — athena168",
    description: "Koleksi t-shirt premium athena168 dengan desain gaming modern.",
    images: ["/LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data for T-Shirts Product List
const tshirtListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Koleksi T-Shirt athena168",
  url: `${siteUrl}/t-shirts`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "athena168® Gaming Collection", url: `${siteUrl}/t-shirts#product-1` },
    { "@type": "ListItem", position: 2, name: "Premium Edition", url: `${siteUrl}/t-shirts#product-2` },
    { "@type": "ListItem", position: 3, name: "Official Collection", url: `${siteUrl}/t-shirts#product-3` },
    { "@type": "ListItem", position: 4, name: "Classic Series", url: `${siteUrl}/t-shirts#product-4` },
    { "@type": "ListItem", position: 5, name: "athena168® Gaming Collection", url: `${siteUrl}/t-shirts#product-5` },
    { "@type": "ListItem", position: 6, name: "Premium Edition", url: `${siteUrl}/t-shirts#product-6` },
    { "@type": "ListItem", position: 7, name: "Official Collection", url: `${siteUrl}/t-shirts#product-7` },
    { "@type": "ListItem", position: 8, name: "Classic Series", url: `${siteUrl}/t-shirts#product-8` },
    { "@type": "ListItem", position: 9, name: "athena168® Gaming Collection", url: `${siteUrl}/t-shirts#product-9` },
    { "@type": "ListItem", position: 10, name: "Premium Edition", url: `${siteUrl}/t-shirts#product-10` },
    { "@type": "ListItem", position: 11, name: "Official Collection", url: `${siteUrl}/t-shirts#product-11` },
    { "@type": "ListItem", position: 12, name: "Classic Series", url: `${siteUrl}/t-shirts#product-12` },
  ],
};

const items = Array.from({length:12},(_,i)=>({
  id:i+1,
  title: ["athena168® Gaming Collection","Premium Edition","Official Collection","Classic Series"][i%4],
  price:"IDR 10.000",
  rating:4.9,
  reviews:1250,
  badge:i<3?"NEW":"",
}));

export default function TShirtsPage(){
  return (
    <main className="flex-1 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tshirtListJsonLd) }} />
      <div className="container-main py-8 lg:py-12">
        <nav className="text-xs text-fg-muted flex gap-1 items-center mb-4 anim-slide-up">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-fg-subtle" aria-hidden="true">›</span>
          <span className="text-gold font-medium">T-Shirts</span>
        </nav>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 anim-slide-up anim-delay-100">
          <h1 className="heading-xl gradient-brand">Shop All Designs</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow text-xs px-4 py-2">★ 4.9 (1,250 reviews)</span>
            <span className="card-vip text-xs px-3 py-1 rounded-md font-bold border border-royal/30">{items.length} designs</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 stagger-children">
          {items.map((it, index) => (
            <Link
              key={it.id}
              id={`product-${it.id}`}
              href={`#product-${it.id}`}
              className="card card-felt overflow-hidden hover:border-emerald/30 hover:shadow-emerald transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-bg-card via-bg-elevated to-bg-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="relative z-10 text-center p-4">
                    <div className="text-6xl sm:text-7xl font-black gradient-brand leading-none group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                      {["🎮","👑","🏆","💎"][index % 4]}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] px-2 py-1 rounded bg-gold/20 text-gold font-bold border border-gold/30">Premium</span>
                    <span className="text-[10px] px-2 py-1 rounded bg-emerald/20 text-emerald font-bold border border-emerald/30">Cotton</span>
                  </div>
                {it.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-crimson to-crimson-dark text-white text-[10px] font-black tracking-wider shadow-glow-crimson">
                      NEW
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="heading-sm text-fg-primary group-hover:text-gold transition-colors line-clamp-1">{it.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black gradient-brand">{it.price}</span>
                  <div className="flex items-center gap-1 text-fg-muted text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-semibold">{it.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 lg:mt-16 pt-8 border-t border-border-subtle anim-fade-up anim-delay-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card card-vip p-6 text-center hover:border-emerald/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-md bg-gradient-to-br from-gold/20 to-emerald/20 flex items-center justify-center text-2xl">🚚</div>
              <h4 className="heading-sm text-gold mb-2">Gratis Ongkir</h4>
              <p className="body-sm text-fg-secondary">Min. belanja Rp 150.000 ke seluruh Indonesia</p>
            </div>
            <div className="card card-vip p-6 text-center hover:border-crimson/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-md bg-gradient-to-br from-crimson/20 to-rose/20 flex items-center justify-center text-2xl">🔄</div>
              <h4 className="heading-sm text-crimson-light mb-2">Retur Mudah</h4>
              <p className="body-sm text-fg-secondary">30 hari garansi kepuasan, proses cepat</p>
            </div>
            <div className="card card-vip p-6 text-center hover:border-royal/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-md bg-gradient-to-br from-royal/20 to-purple/20 flex items-center justify-center text-2xl">💳</div>
              <h4 className="heading-sm text-royal-light mb-2">Bayar Di Tempat</h4>
              <p className="body-sm text-fg-secondary">COD tersedia area Jakarta & sekitarnya</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}