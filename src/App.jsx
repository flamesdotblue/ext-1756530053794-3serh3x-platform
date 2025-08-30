import Header from './components/Header';
import Hero from './components/Hero';
import DataVisuals from './components/DataVisuals';
import Partners from './components/Partners';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <DataVisuals />
        <Partners />
        <section id="buy" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to remove your emissions?</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Purchase high-integrity direct air capture credits sourced from engineered removal paired with renewable energy. Transparent, measurable, and permanent.</p>
            <a href="#" className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">Buy Carbon Credits</a>
          </div>
        </section>
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sage Carbon. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
