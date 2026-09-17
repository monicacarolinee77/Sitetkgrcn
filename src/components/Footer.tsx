export default function Footer(){
  return (
    <footer className="mt-12 border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png" alt="TOKOGACOR" className="h-7 w-auto object-contain hover:scale-[1.02] transition-transform duration-300" />
            <span className="text-xs text-zinc-400">© 2026 TOKOGACOR</span>
          </div>
          <div className="flex gap-5 text-xs font-medium text-zinc-500">
            <a href="https://tokosoon.site/register?ref/=zrg2e2s" className="hover:text-zinc-900 hover:-translate-y-px transition-all duration-200">Link Resmi</a>
            <a href="https://tokosoon.site/register?ref/=zrg2e2s" className="hover:text-zinc-900 hover:-translate-y-px transition-all duration-200">Daftar</a>
            <a href="#faq" className="hover:text-zinc-900 hover:-translate-y-px transition-all duration-200">FAQ</a>
          </div>
        </div>
        <p className="mt-6 pt-6 border-t border-zinc-100 text-[11px] leading-5 text-zinc-400 text-center sm:text-left">
          TOKOGACOR — game mabar mantap, kemenangan berlimpah. 18+ • Bermain bertanggung jawab.
        </p>
      </div>
    </footer>
  );
}
