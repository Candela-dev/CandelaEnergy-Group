import { useState } from 'react';
import {
  LayoutDashboard,
  Zap,
  TrendingDown,
  DollarSign,
  Leaf,
  Bell,
  Search,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Sun,
  Battery,
  Plug,
} from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const usageData = [620, 580, 540, 480, 520, 610, 720, 780, 690, 560, 540, 600];

export default function Dashboard() {
  const [active, setActive] = useState('overview');

  return (
    <section id="dashboard" className="scroll-mt-24 bg-slatey-50/60 py-20 md:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <LayoutDashboard className="h-3.5 w-3.5" />
            Client Dashboard
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
            Your energy, fully transparent
          </h2>
          <p className="mt-3 text-slatey-600">
            A live mockup of the dashboard every Candela client gets — usage,
            savings, and billing in one place.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-slatey-100 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-slatey-100 bg-slatey-50/40 p-4 lg:block">
              <div className="flex items-center gap-2 px-2 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <Zap className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-display text-sm font-bold text-slatey-900">
                  Candela
                </span>
              </div>
              <nav className="mt-4 space-y-1">
                {[
                  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                  { id: 'usage', label: 'Usage', icon: TrendingDown },
                  { id: 'billing', label: 'Billing', icon: DollarSign },
                  { id: 'devices', label: 'Devices', icon: Plug },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active === item.id
                        ? 'bg-brand-100 text-brand-800'
                        : 'text-slatey-600 hover:bg-slatey-100'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-6 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
                <Leaf className="h-5 w-5" />
                <p className="mt-2 text-xs font-semibold">Green impact</p>
                <p className="text-lg font-bold">1.24t CO₂</p>
                <p className="text-[11px] text-brand-100">saved this year</p>
              </div>
            </aside>

            {/* Main */}
            <div className="p-5 sm:p-7">
              {/* Topbar */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slatey-500">
                    Welcome back,
                  </p>
                  <h3 className="font-display text-lg font-bold text-slatey-900">
                    Jordan Rivera
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-2 rounded-lg border border-slatey-200 bg-white px-3 py-2 sm:flex">
                    <Search className="h-4 w-4 text-slatey-400" />
                    <input
                      placeholder="Search"
                      className="w-28 bg-transparent text-sm outline-none placeholder:text-slatey-400"
                    />
                  </div>
                  <button className="relative rounded-lg border border-slatey-200 bg-white p-2 text-slatey-600 transition-colors hover:text-brand-700">
                    <Bell className="h-4 w-4" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-500" />
                  </button>
                  <button className="rounded-lg border border-slatey-200 bg-white p-2 text-slatey-600 transition-colors hover:text-brand-700">
                    <Settings className="h-4 w-4" />
                  </button>
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center text-sm font-bold">
                    JR
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  label="Current bill"
                  value="$124.30"
                  delta="-32%"
                  trend="down"
                  icon={DollarSign}
                />
                <StatCard
                  label="Usage this month"
                  value="612 kWh"
                  delta="-8%"
                  trend="down"
                  icon={Zap}
                />
                <StatCard
                  label="Solar generated"
                  value="284 kWh"
                  delta="+12%"
                  trend="up"
                  icon={Sun}
                />
                <StatCard
                  label="Battery stored"
                  value="9.4 kWh"
                  delta="+2%"
                  trend="up"
                  icon={Battery}
                />
              </div>

              {/* Chart + breakdown */}
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-xl border border-slatey-100 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-sm font-bold text-slatey-900">
                      Energy usage
                    </h4>
                    <span className="text-xs text-slatey-400">Last 12 months</span>
                  </div>
                  <div className="mt-5 flex h-44 items-end gap-1.5">
                    {usageData.map((h, i) => (
                      <div key={i} className="group flex flex-1 flex-col items-center gap-1.5">
                        <div className="relative w-full">
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-brand-200 to-brand-500 transition-all group-hover:from-brand-300 group-hover:to-brand-600"
                            style={{ height: `${(h / 800) * 140}px` }}
                          />
                          <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slatey-900 px-1.5 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {h} kWh
                          </div>
                        </div>
                        <span className="text-[10px] text-slatey-400">
                          {months[i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slatey-100 bg-white p-5">
                  <h4 className="font-display text-sm font-bold text-slatey-900">
                    Energy mix
                  </h4>
                  <div className="mt-4 flex items-center justify-center">
                    <DonutChart
                      segments={[
                        { value: 48, color: '#2f8f61', label: 'Solar' },
                        { value: 22, color: '#54ad80', label: 'Wind' },
                        { value: 18, color: '#8acba9', label: 'Hydro' },
                        { value: 12, color: '#d2dae2', label: 'Grid' },
                      ]}
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-xs">
                    {[
                      { label: 'Solar', val: 48, color: '#2f8f61' },
                      { label: 'Wind', val: 22, color: '#54ad80' },
                      { label: 'Hydro', val: 18, color: '#8acba9' },
                      { label: 'Grid', val: 12, color: '#d2dae2' },
                    ].map((s) => (
                      <li key={s.label} className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slatey-600">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: s.color }}
                          />
                          {s.label}
                        </span>
                        <span className="font-semibold text-slatey-900">
                          {s.val}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recent activity */}
              <div className="mt-5 rounded-xl border border-slatey-100 bg-white p-5">
                <h4 className="font-display text-sm font-bold text-slatey-900">
                  Recent activity
                </h4>
                <ul className="mt-3 divide-y divide-slatey-100">
                  {[
                    { t: 'Payment processed', d: '$124.30 · Visa •• 4421', time: '2h ago' },
                    { t: 'Solar array reached peak', d: '4.8 kW at 1:14 PM', time: 'Today' },
                    { t: 'New rate plan applied', d: 'Green Flex 12 — fixed', time: 'Yesterday' },
                  ].map((a) => (
                    <li key={a.t} className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-semibold text-slatey-800">{a.t}</p>
                        <p className="text-xs text-slatey-500">{a.d}</p>
                      </div>
                      <span className="text-xs text-slatey-400">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  delta,
  trend,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
}) {
  const positive = trend === 'up';
  return (
    <div className="rounded-xl border border-slatey-100 bg-white p-4 transition-shadow hover:shadow-soft">
      <div className="flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
            positive ? 'text-brand-600' : 'text-brand-600'
          }`}
        >
          {positive ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {delta}
        </span>
      </div>
      <p className="mt-3 font-display text-xl font-bold text-slatey-900">{value}</p>
      <p className="text-xs text-slatey-500">{label}</p>
    </div>
  );
}

function DonutChart({
  segments,
}: {
  segments: { value: number; color: string; label: string }[];
}) {
  const total = segments.reduce((a, b) => a + b.value, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <svg viewBox="0 0 160 160" className="h-36 w-36 -rotate-90">
      {segments.map((s, i) => {
        const len = (s.value / total) * circumference;
        const el = (
          <circle
            key={i}
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth="18"
            strokeDasharray={`${len} ${circumference - len}`}
            strokeDashoffset={-offset}
          />
        );
        offset += len;
        return el;
      })}
      <circle cx="80" cy="80" r="44" fill="white" />
    </svg>
  );
}
