import { Zap, Sun, BatteryCharging, LineChart } from 'lucide-react';

const solutions = [
  {
    icon: Sun,
    title: 'Residential Solar',
    desc: 'Rooftop and community solar plans with transparent, fixed-rate billing and zero hidden fees.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Storage',
    desc: 'Store cheap off-peak energy and use it when rates spike — keep the lights on during outages.',
  },
  {
    icon: LineChart,
    title: 'Smart Analytics',
    desc: 'Real-time dashboards that find waste, predict bills, and surface rebates automatically.',
  },
  {
    icon: Zap,
    title: 'Commercial Plans',
    desc: 'Demand-charge management and green procurement tailored to your operations and ESG goals.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Solutions
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
            Everything you need to use less, save more
          </h2>
          <p className="mt-3 text-slatey-600">
            From rooftop to dashboard, Candela handles the full energy journey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-slatey-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
