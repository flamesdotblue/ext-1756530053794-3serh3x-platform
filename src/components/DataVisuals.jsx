export default function DataVisuals() {
  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Impact you can measure</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">We publish real-time data on carbon removal deliveries, technology mix, and verification so you can report with confidence.</p>
          </div>
          <a href="#buy" className="hidden md:inline-flex items-center justify-center h-11 px-5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700">Buy Carbon Credits</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card title="Delivered removals (tCO₂)">
            <BigNumber value="24,960" sub="total to date" />
            <Sparkline values={[4,8,6,10,12,16,15,20,22,26,28,32]} color="#10b981" />
          </Card>
          <Card title="Net permanence">
            <BigNumber value=">1000 yrs" sub="modeled storage" />
            <div className="mt-4 text-xs text-slate-500">Via mineralization and saline storage</div>
          </Card>
          <Card title="Verification">
            <ul className="mt-2 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Independent MRV providers</li>
              <li>Project-level disclosures</li>
              <li>On-chain issuance records</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card title="Geography">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Progress label="North America" value={48} color="bg-emerald-500" />
              <Progress label="Europe" value={36} color="bg-teal-500" />
              <Progress label="Middle East" value={9} color="bg-sky-500" />
              <Progress label="Other" value={7} color="bg-emerald-300" />
            </div>
          </Card>
          <Card title="Energy sourcing">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Progress label="Wind" value={41} color="bg-sky-500" />
              <Progress label="Solar" value={39} color="bg-amber-400" />
              <Progress label="Hydro" value={20} color="bg-teal-500" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function BigNumber({ value, sub }) {
  return (
    <div>
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      {sub && <div className="text-sm text-slate-500">{sub}</div>}
    </div>
  );
}

function Sparkline({ values, color = '#0ea5e9' }) {
  const w = 360;
  const h = 80;
  const max = Math.max(...values) + 2;
  const step = w / (values.length - 1);
  const d = values
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${h - (v / max) * h}`)
    .join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 w-full">
      <path d={d} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Progress({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-slate-600">{label}</span>
        <span className="tabular-nums text-slate-900">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
