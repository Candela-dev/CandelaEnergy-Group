import React from 'react';
import { Flame, Zap, Activity, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Gas Monetisation & Flare Elimination',
      description: 'Capturing stranded natural gas at the wellhead to generate low-cost, continuous power while eliminating routine flaring emissions.',
      icon: Flame,
      challenge: 'Routine gas flaring and high fuel overheads.',
      impact: 'Up to 40% reduction in operational fuel expenses.'
    },
    {
      title: 'Industrial Hybrid Energy Systems',
      description: 'Integrating modular gas generators with solar and battery storage for high-uptime power across off-grid industrial facilities.',
      icon: Zap,
      challenge: 'Grid unreliability causing costly factory downtime.',
      impact: '24/7 continuous industrial power supply.'
    },
    {
      title: 'Automated Telemetry & Monitoring',
      description: 'Real-time IoT data collection and remote management for optimized fuel consumption and preventative maintenance.',
      icon: Activity,
      challenge: 'Manual operational tracking and fuel theft risks.',
      impact: '100% automated asset visibility and diagnostics.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Operational Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Our Core <span className="text-emerald-400">Energy Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            End-to-end power infrastructure engineered to monetize stranded gas and secure industrial resilience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Challenge & Impact Details */}
                <div className="space-y-2 pt-4 border-t border-slate-700/60 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-emerald-400">Target:</strong> {service.challenge}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-emerald-400">Impact:</strong> {service.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;