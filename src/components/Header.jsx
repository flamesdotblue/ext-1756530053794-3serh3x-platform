import { Leaf, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200' : 'bg-white/60 backdrop-blur'} `}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Sage Carbon</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="text-slate-600 hover:text-slate-900">How it works</a>
            <a href="#impact" className="text-slate-600 hover:text-slate-900">Impact</a>
            <a href="#partners" className="text-slate-600 hover:text-slate-900">Partners</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#buy" className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Buy Carbon Credits</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a onClick={() => setOpen(false)} href="#how" className="px-3 py-2 rounded-lg hover:bg-slate-100">How it works</a>
              <a onClick={() => setOpen(false)} href="#impact" className="px-3 py-2 rounded-lg hover:bg-slate-100">Impact</a>
              <a onClick={() => setOpen(false)} href="#partners" className="px-3 py-2 rounded-lg hover:bg-slate-100">Partners</a>
              <a onClick={() => setOpen(false)} href="#buy" className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium bg-emerald-600 text-white">Buy Carbon Credits</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
