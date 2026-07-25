import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            Clean Energy Solutions & Energy Analytics
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white uppercase">
            Transforming Operational Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Strategic Intelligence</span>
          </h1>

          {/* Subtitle / Memo Body Text */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At Candela, we design and deliver intelligent clean energy solutions and advanced energy analytics that help businesses reduce operating costs, improve energy efficiency, and accelerate their sustainability objectives[cite: 1].
          </p>

          {/* Key Metrics Highlight Box */}
          <div className="my-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap justify-around items-center gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">₦17,000,000</p>
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

          {/* Action Buttons */}
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
              Explore Whitepapers
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> NOGICD Compliant
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