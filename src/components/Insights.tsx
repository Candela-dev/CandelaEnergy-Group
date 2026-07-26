import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import flareImg from '../assets/flare-gas-facility.jpg';
import telemetryImg from '../assets/telemetry-derm.jpg';

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Candela Research & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-4 uppercase tracking-tight">
            Thought Leadership Whitepapers
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Explore our technical frameworks driving energy resilience, telemetry, and downstream infrastructure across West Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Monetizing Flare Gas */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-emerald-500/50 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={flareImg} 
                alt="Flare Gas Facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Whitepaper 01</span>
              <h3 className="text-lg font-bold text-white mt-1">Monetizing Flare Gas</h3>
              <p className="text-xs text-slate-400 mt-2 flex-grow leading-relaxed">
                Transforming wasted associated gas into sustainable power for industrial growth in West Africa.
              </p>
              <Link 
                to="/thought-leadership?tab=1" 
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Automated Telemetry */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={telemetryImg} 
                alt="Automated Telemetry Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Whitepaper 02</span>
              <h3 className="text-lg font-bold text-white mt-1">Automated Telemetry</h3>
              <p className="text-xs text-slate-400 mt-2 flex-grow leading-relaxed">
                Leveraging real-time IIoT and intelligent energy management to deliver 99.9% power availability.
              </p>
              <Link 
                to="/thought-leadership?tab=2" 
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Downstream Petroleum */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-emerald-500/50 transition-all">
            <div className="h-48 overflow-hidden relative bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2 border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">Downstream Infrastructure</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Pipelines, CNG & Terminal Storage</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Whitepaper 03</span>
              <h3 className="text-lg font-bold text-white mt-1">Downstream Petroleum</h3>
              <p className="text-xs text-slate-400 mt-2 flex-grow leading-relaxed">
                Strategic advisory, pipeline infrastructure, and project delivery across the petroleum sector.
              </p>
              <Link 
                to="/thought-leadership?tab=3" 
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Insights;