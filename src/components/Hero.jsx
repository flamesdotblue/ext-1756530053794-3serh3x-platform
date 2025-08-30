import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">Engineered Carbon Removal</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Permanent carbon removal for climate-leading companies</h1>
            <p className="mt-4 text-lg text-slate-600">Sage Carbon provides high-quality direct air capture credits with transparent measurement, renewable energy pairing, and rigorous third-party verification.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                Buy Carbon Credits
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium hover:bg-slate-50">Learn more</a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Permanence</dt>
                <dd className="text-xl font-semibold">1000+ yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">MRV</dt>
                <dd className="text-xl font-semibold">3rd-party</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Energy</dt>
                <dd className="text-xl font-semibold">100% RE</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 p-1 shadow-sm">
              <div className="h-full w-full rounded-[14px] bg-white p-6">
                <h3 className="text-sm font-medium text-slate-700">Atmospheric CO₂ removed (t)</h3>
                <MiniLineChart />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <Stat label="Portfolio removal" value="12,480 t" trend="+8%" />
                  <Stat label="Avg. cost" value="$540/t" trend="-3%" />
                  <Stat label="Projects" value="9" trend="" />
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-slate-700">Technology mix</h4>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                    <Bar label="DAC" value={62} color="bg-emerald-500" />
                    <Bar label="Mineralization" value={24} color="bg-teal-500" />
                    <Bar label="Biogenic" value={14} color="bg-sky-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="how" className="mt-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Step number="01" title="Capture" text="We partner with leading direct air capture facilities that remove CO₂ directly from ambient air using renewable energy." />
            <Step number="02" title="Store" text="Captured CO₂ is stored for millennia via secure geological storage or mineralization pathways." />
            <Step number="03" title="Verify" text="Independent MRV providers ensure accuracy and permanence. Credits are issued and transparently tracked." />
          </div>
        </div>
      </section>
    </section>
  );
}

function MiniLineChart() {
  const points = [0, 8, 5, 14, 10, 18, 16, 22, 21, 28, 26, 34];
  const max = Math.max(...points) + 4;
  const width = 520;
  const height = 160;
  const step = width / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${height - (p / max) * height}`)
    .join(' ');
  const area = `${d} L ${width},${height} L 0,${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-4 w-full">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#grad)" />
      <path d={d} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={height - (p / max) * height} r="3" fill="#10b981" />
      ))}
    </svg>
  );
}

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      {trend && <div className={`mt-1 text-xs ${trend.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'}`}>{trend} this quarter</div>}
    </div>
  );
}

function Bar({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between text-slate-600">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="text-xs font-medium text-emerald-700">{number}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}
