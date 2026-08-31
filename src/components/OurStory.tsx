import React from 'react';
import { Zap, ShieldCheck, Flame, Award, CheckCircle2, Factory } from 'lucide-react';

export const OurStory: React.FC = () => {
  const achievements = [
    'Sub-Saharan Africa local content compliant',
    'Zero-flare monetisation modular technology',
    'Industrial-grade hybrid power integration',
    'Real-time automated telemetry & monitoring'
  ];

  return (
    <section id="story" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Our Story & Provenance
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center mt-4 mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pioneering Gas Monetisation & <span className="text-emerald-400">Energy Resilience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Founded to bridge the critical gap between stranded natural gas reserves and sub-Saharan Africa’s expanding industrial energy demand.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Narrative & Mission */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-white">Candela Energy Limited (RC 1234650)</strong> was established with a singular objective: to turn environmental liabilities into sustainable power assets. For decades, routine gas flaring and unyielding grid instability have hampered industrial growth across West Africa.
            </p>

            <p>
              By combining modular gas-to-power generation with automated telemetry, we capture flared and stranded gas directly at the source—monetising resources that would otherwise pollute the atmosphere and delivering high-uptime electricity to heavy industries, manufacturing hubs, and off-grid facilities.
            </p>

            <p>
              Today, our operations drive local capacity building, lower carbon intensity, and supply cost-effective energy solutions that shield industrial operations from volatile fuel markets.
            </p>

            {/* Bullet List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Stats & Key Pillars Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Stat Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">0%</p>
              <p className="text-xs text-slate-400">Wasted Gas Goal Across Monetisation Projects</p>
            </div>

            {/* Stat Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-xs text-slate-400">Continuous Industrial Hybrid Uptime Target</p>
            </div>

            {/* Stat Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400">Local Content & NOGICD Regulatory Compliance</p>
            </div>

            {/* Stat Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">&lt;40%</p>
              <p className="text-xs text-slate-400">Reduction in Operational Fuel Expenses</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
