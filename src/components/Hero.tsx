import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import flareImg from '../assets/flare-gas-facility.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Local Flare Gas Facility Background Image */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-luminosity">
        <img 
          src={flareImg} 
          alt="Candela Gas Processing Infrastructure" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            Gas Monetisation, Power Infrastructure & Hybrid Telemetry
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white uppercase">
            Transforming Operational Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Strategic Intelligence</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At Candela Energy Group, we design and deliver intelligent clean energy solutions, advanced gas monetization, and real-time telemetry systems that help industrial operators reduce overhead and accelerate sustainability targets.
          </p>

          <div className="my-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex flex-wrap justify-around items-center gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">₦17M+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Projected Baseline Impact</p>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-400">99.9%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">System Availability</p>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-400">IIoT & OT</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Real-Time Telemetry</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              Request Site Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <Link 
              to="/thought-leadership" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Explore Thought Leadership Articles
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> NOGICD Compliant (RC 1234650)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-emerald-400" /> Advanced Metering Infrastructure
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
