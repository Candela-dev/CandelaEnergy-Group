import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Cpu, ShieldCheck, Network } from 'lucide-react';

const solutions = [
  {
    icon: Flame,
    title: 'Gas Monetisation & Flare Capture',
    desc: 'Transforming associated gas and flared wellhead resources into stable, modular power for industrial clusters across West Africa.',
    link: '/thought-leadership',
    badge: 'Whitepaper 01',
    color: 'text-orange-400',
    borderHover: 'hover:border-orange-500/50',
  },
  {
    icon: Cpu,
    title: 'Automated Telemetry & IIoT',
    desc: 'Real-time operational technology and distributed energy resource management delivering up to 99.9% power availability.',
    link: '/thought-leadership',
    badge: 'Whitepaper 02',
    color: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
  },
  {
    icon: Network,
    title: 'Downstream Petroleum Infrastructure',
    desc: 'Strategic project delivery, pipeline networks, CNG mother stations, and terminal storage development.',
    link: '/thought-leadership',
    badge: 'Whitepaper 03',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
  },
  {
    icon: ShieldCheck,
    title: 'NOGICD Compliance & Advisory',
    desc: 'Full regulatory alignment, Nigerian Content Development compliance, and technical governance for energy investments (RC 1234650).',
    link: '/thought-leadership',
    badge: 'Regulatory Standard',
    color: 'text-red-400',
    borderHover: 'hover:border-red-500/50',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 py-20 md:py-28 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            Core Enterprise Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">
            Engineering Energy Resilience & Industrial Growth
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            From associated gas capture to advanced telemetry and regulatory compliance, Candela Energy delivers integrated infrastructure across West Africa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition-all hover:-translate-y-1 ${s.borderHover} flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 ${s.color}`}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2.5 py-1 rounded">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link 
                  to={s.link} 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-emerald-400 transition-colors uppercase tracking-wider group-hover:translate-x-1 duration-200"
                >
                  Explore Framework <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}