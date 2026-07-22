import {
  Cpu,
  Zap,
  Gauge,
  BarChart3,
  Network,
  Workflow,
  Flame,
  ShieldCheck,
  Activity,
  BrainCircuit,
} from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'Industrial IoT & OT',
    desc: 'Field devices, industrial control systems, and enterprise applications integrated into a single operational fabric.',
  },
  {
    icon: Zap,
    title: 'NESI & Energy Sector',
    desc: 'Fit-for-purpose digital solutions built for the Nigerian Electricity Supply Industry and the broader energy sector.',
  },
  {
    icon: Gauge,
    title: 'Asset Performance',
    desc: 'Near real-time visibility into operational and asset KPIs to optimize maintenance and reduce downtime.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    desc: 'Analytics that enable operators and management to monitor, analyze, and optimize energy asset performance.',
  },
];

const valueChain = [
  { icon: Flame, label: 'Gas utilities' },
  { icon: Zap, label: 'Power utilities' },
  { icon: Network, label: 'Field devices' },
  { icon: Workflow, label: 'Control systems' },
  { icon: Activity, label: 'Real-time KPIs' },
  { icon: BrainCircuit, label: 'Enterprise apps' },
];

export default function CompanyProfile() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Company Profile
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
            Powering Nigeria's energy sector with IIoT &amp; OT
          </h2>
        </div>

        {/* Profile + visual */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-brand-50 blur-2xl" />
            <div className="rounded-[1.75rem] border border-slatey-100 bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Gas &amp; Power Value Chain
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                  <Activity className="h-3.5 w-3.5" />
                  Live integration
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {valueChain.map((v) => (
                  <div
                    key={v.label}
                    className="group rounded-xl border border-slatey-100 bg-slatey-50/50 p-3.5 text-center transition-all hover:border-brand-200 hover:bg-brand-50/40"
                  >
                    <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <v.icon className="h-4.5 w-4.5" />
                    </span>
                    <p className="mt-2 text-[11px] font-semibold text-slatey-700">
                      {v.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slatey-100 pt-5">
                {[
                  { k: 'IIoT', v: 'Industrial IoT' },
                  { k: 'OT', v: 'Operational Tech' },
                  { k: 'NESI', v: 'Energy sector' },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <p className="font-display text-lg font-bold text-brand-700">
                      {s.k}
                    </p>
                    <p className="text-[11px] text-slatey-500">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-display text-xl font-bold text-slatey-900">
              About Candela Energy Limited
            </h3>
            <p className="mt-4 leading-relaxed text-slatey-600">
              Candela Energy Limited is a Nigerian technology company
              specializing in Industrial Internet of Things (IIoT) and
              Operational Technology (OT) solutions for organizations operating
              across the Nigerian Electricity Supply Industry (NESI) and the
              broader energy sector. We partner with gas and power utilities to
              deliver fit-for-purpose digital solutions that enhance operational
              efficiency, asset performance, and decision-making.
            </p>
            <p className="mt-4 leading-relaxed text-slatey-600">
              Our solutions provide near real-time visibility into critical
              operational and asset Key Performance Indicators (KPIs), enabling
              operators and management teams to monitor, analyze, and optimize
              the performance of their energy assets across the gas and power
              value chain. By integrating field devices, industrial control
              systems, and enterprise applications, we help organizations improve
              operational reliability, reduce downtime, optimize maintenance,
              and make data-driven decisions.
            </p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-4 font-display text-base font-bold text-slatey-900">
                {c.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slatey-600">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
