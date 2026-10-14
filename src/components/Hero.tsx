import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, PackageSearch, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import flareImg from '../assets/flare-gas-facility.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 text-white">
      
      {/* Background Wrapper: Contains overflow-hidden to prevent scrollbars without clipping dropdowns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-35 mix-blend-luminosity">
          <img src={flareImg} alt="Candela Gas Processing" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white uppercase">
            Transforming Operational Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Strategic Intelligence</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At Candela Energy Limited, we design and deliver intelligent clean energy solutions, advanced gas monetization, and real-time telemetry systems that help industrial operators reduce overhead and accelerate sustainability targets.
          </p>

          <div className="my-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex flex-wrap justify-around items-center gap-4 text-center">
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

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20">
              Request Site Assessment <ArrowRight className="w-4 h-4" />
            </a>

            {/* Hover Dropdown Group for Catalogue */}
            <div className="relative group w-full sm:w-auto">
              <Link to="/catalogue" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-600/20">
                <PackageSearch className="w-4 h-4" />
                Explore Catalogue
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left overflow-hidden">
                <Link to="/catalogue" className="block px-4 py-3 text-sm text-white hover:bg-slate-800 border-b border-slate-700 font-semibold transition-colors">
                  View Entire Catalogue
                </Link>
                <Link to="/catalogue#metering" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-red-600 hover:text-white transition-colors">
                  Metering Portfolio
                </Link>
                <Link to="/catalogue#hes-ami" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-orange-500 hover:text-white transition-colors">
                  HES & AMI Architecture
                </Link>
                <Link to="/catalogue#iiot" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                  Connected Assets & IIoT
                </Link>
                <Link to="/catalogue#vending" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors">
                  Power Share Vending
                </Link>
                <Link to="/catalogue#solar" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-red-500 hover:text-white transition-colors">
                  Distributed Energy & Solar
                </Link>
                <Link to="/catalogue#transformers" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-purple-600 hover:text-white transition-colors">
                  Transformer Services
                </Link>
              </div>
            </div>
            
            <Link to="/thought-leadership" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all">
              <BarChart3 className="w-4 h-4 text-emerald-400" /> Insights
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