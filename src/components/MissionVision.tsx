import React from 'react';
import { Target, Eye } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              To become a leading African energy technology and infrastructure company, enabling smarter, more reliable, sustainable, and accessible energy systems through the convergence of technology, infrastructure, and innovation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              To deliver integrated energy technology and infrastructure solutions that improve asset performance, strengthen energy reliability, accelerate the transition to cleaner energy, and create sustainable economic value for our clients, partners, and the communities we serve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;