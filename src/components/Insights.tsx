import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import flareImg from '../assets/flare-gas-facility.jpg';
import telemetryImg from '../assets/telemetry-derm.jpg';
import downstreamImg from '../assets/downstream-petroleum.jpg';

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Candela Energy Research & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-4 uppercase tracking-tight">
            Thought Leadership Whitepapers
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Explore our technical frameworks driving energy resilience, telemetry, and regulatory compliance across West Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Monetizing Flare Gas */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-orange-500/50 transition-all">
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
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wider"
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

          {/* Card 3: NOGICD Compliance */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-indigo-500/50 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={downstreamImg} 
                alt="NOGICD Compliance and Regulatory Frameworks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                NOGICD Compliant
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Whitepaper 03</span>
              <h3 className="text-lg font-bold text-white mt-1">NOGICD Compliance</h3>
              <p className="text-xs text-slate-400 mt-2 flex-grow leading-relaxed">
                Turning local content compliance into a strategic advantage for sustainable energy development.
              </p>
              <Link 
                to="/thought-leadership?tab=3" 
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
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