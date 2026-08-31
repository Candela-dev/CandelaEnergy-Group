import React from 'react';
import { Network } from 'lucide-react';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'Eve Electric', role: 'OEM manufacturing partner for the full meter range: single-phase, three-phase, and maximum demand. All units NEMSA Routine and Type Test compliant and STS certified.' },
    { name: 'Integridex Ltd', role: 'Industrial and building automation partner. Delivers PLC and SCADA systems, process automation, real-time monitoring, data acquisition and analytics, machine integration, and predictive maintenance.' },
    { name: 'Hilong Holding Limited', role: 'Digital oilfield and pipeline intelligence partner (HKEX: 01623). Provides smart pipeline, smart oil and gas field, digital twin, SCADA and AIoT integration, and industrial AI for upstream and midstream assets.' },
    { name: 'Schneider Electric', role: 'Global technology partner for power management, energy distribution equipment, and industrial automation infrastructure.' },
    { name: 'Mezovest', role: 'Technical and investment partner.' },
    { name: 'Power Impressa', role: 'Technical partner, Power Generation.' },
    { name: 'VTT LNG West Africa', role: 'Downstream and LNG logistics partner.' },
    { name: 'Pontesmanies Consult', role: 'Technical Partner, Upstream and Midstream Petroleum Services.' },
    { name: 'Lucatech Power Limited', role: 'Technical partner, Grid Metering Solutions.' },
    { name: 'Arbiter Services Ltd', role: 'Technical partner, Renewable Energy and Decentralized Energy Resource.' }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Network className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white">OEM & <span className="text-emerald-400">Technical Partners</span></h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Strategic alliances driving our integrated energy technology and infrastructure solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/40 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{partner.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
