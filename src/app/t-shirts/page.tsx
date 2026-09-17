import Link from "next/link";

export const metadata = { 
  title: "Shop All Designs — TOKOGACOR",
  description: "Koleksi t-shirt premium TOKOGACOR dengan desain gaming modern. Kualitas terbaik, nyaman dipakai, dan stylish untuk para gamer."
};

const items = Array.from({length:12},(_,i)=>({
  id:i+1,
  title: ["TOKOGACOR® 八 game mabar Mantap","SLOT MAXWIN Edition","SITUS SLOT Premium","GAME SLOT Classic"][i%4],
  price:"IDR 10.000",
  rating:4.9,
  reviews:1250,
  badge:i<3?"NEW":"",
}));

export default function TShirtsPage(){
  return (
    <main className="flex-1 flex flex-col">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 w-full">
        <nav className="text-xs text-foreground/50 flex gap-1 items-center mb-4">
          <Link href="/" className="hover:text-cyan transition-colors">Home</Link><span>›</span><span className="text-cyan font-medium">T-Shirts</span>
        </nav>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">Shop All Designs</h1>
          <div className="flex items-center gap-3">
            <span className="text-xs px-4 py-2 rounded-full bg-cyan/10 text-cyan font-bold border border-cyan/20">★ 4.9 (1,250 reviews)</span>
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan/20 to-purple/20 text-foreground font-bold border border-cyan/30">{items.length} designs</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(it=>(
            <Link key={it.id} href="/" className="group relative rounded-2xl border border-cyan/20 bg-card overflow-hidden hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:border-cyan/40 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-dark via-card to-dark flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-white font-black border border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  八
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                </div>
                {it.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-white border border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse">
                    {it.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="px-3 py-2 rounded-full bg-cyan/20 backdrop-blur-sm border border-cyan/30 text-xs font-bold text-cyan text-center">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-cyan transition-colors duration-200">{it.title}</p>
                <p className="text-base font-black text-cyan">{it.price}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-foreground/60">★ {it.rating} • {it.reviews} reviews</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-foreground">Quality Materials</h3>
              <p className="text-xs text-foreground/60">Premium cotton blend for ultimate comfort</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-foreground">Exclusive Designs</h3>
              <p className="text-xs text-foreground/60">Limited edition gaming graphics</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-pink/10 flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L20.84 4.61z"></path>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-foreground">Fast Shipping</h3>
              <p className="text-xs text-foreground/60">Worldwide delivery with tracking</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
