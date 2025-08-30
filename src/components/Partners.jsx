export default function Partners() {
  const items = [
    { name: 'Northwind', abbr: 'NW' },
    { name: 'VertexLabs', abbr: 'VL' },
    { name: 'Helios Energy', abbr: 'HE' },
    { name: 'Alpine Data', abbr: 'AD' },
    { name: 'BlueSky', abbr: 'BS' },
    { name: 'Greenline', abbr: 'GL' },
  ];

  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium text-slate-500">Trusted by climate leaders</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {items.map((p) => (
            <LogoTile key={p.name} name={p.name} abbr={p.abbr} />
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200 p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold">Bundle Sage Carbon into your checkout</h3>
              <p className="mt-2 text-slate-600">Offer customers the option to remove their purchase emissions in one click using our API or low-code embed.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#buy" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700">Buy Carbon Credits</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoTile({ name, abbr }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-4 h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 40" className="h-10 w-auto text-slate-700">
        <rect x="2" y="2" width="96" height="36" rx="8" fill="#f8fafc" />
        <circle cx="20" cy="20" r="10" fill="#10b981" />
        <text x="20" y="24" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">{abbr}</text>
        <text x="40" y="24" fontSize="10" fill="#0f172a">{name}</text>
      </svg>
    </div>
  );
}
