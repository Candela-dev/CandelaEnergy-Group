import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ShieldCheck, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThoughtLeadership: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" /> Candela Insights & Publications
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
            Thought Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Energy Innovation</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Exploring strategic pathways for resource monetization, industrial resilience, and digital energy transformation across West Africa.
          </p>
        </div>

        {/* ARTICLES LIST OR DETAIL VIEW */}
        {activeArticle === null ? (
          <div className="grid gap-8 mt-12">
            
            {/* ARTICLE CARD 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Article 01 • Gas Monetisation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-white">
                  Monetizing Flare Gas: A Path to Energy Resilience in West Africa
                </h2>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Transforming wasted associated gas resources into sustainable power for industrial growth, energy security, and reduced carbon emissions across West Africa.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Candela Energy Group Research Team[cite: 1]</span>
                <button
                  onClick={() => setActiveArticle(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all shadow-md"
                >
                  Read Full Article <Zap className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ARTICLE CARD 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Article 02 • Automated Telemetry
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-white">
                  Automated Telemetry in Off-Grid Hybrid Energy Distribution
                </h2>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Leveraging real-time IIoT and intelligent energy management to deliver 99.9% power availability in complex distributed systems.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Candela Energy Group Research Team[cite: 1]</span>
                <button
                  onClick={() => setActiveArticle(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs transition-all shadow-md"
                >
                  Read Full Article <Zap className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ) : activeArticle === 1 ? (
          
          /* FULL VIEW: ARTICLE 1 */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8">
            <button 
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Monetizing Flare Gas</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Monetizing Flare Gas: A Path to Energy Resilience in West Africa
              </h1>
              <p className="text-sm text-slate-400 italic">Transforming Wasted Resources into Sustainable Power for Industrial Growth</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base leading-relaxed border-t border-slate-800 pt-6">
              <h3 className="text-xl font-bold text-white">Foreword</h3>
              <p>
                Despite being home to some of the world's largest natural gas reserves, West Africa continues to face a persistent energy paradox. Millions of cubic feet of associated natural gas are flared daily at oil production facilities, while industries, manufacturers, and communities struggle with unreliable electricity supply, high energy costs, and limited access to cleaner fuels.
              </p>
              <p>
                Gas flaring represents one of the region's most significant economic and environmental inefficiencies. Every cubic foot of gas flared is a lost opportunity to generate electricity, support industrial development, create jobs, and reduce greenhouse gas emissions.
              </p>

              <h3 className="text-xl font-bold text-white pt-4">The West African Energy Opportunity</h3>
              <p>
                West Africa possesses abundant natural gas resources capable of supporting decades of economic development. Yet significant volumes of associated gas remain underutilized due to inadequate gas gathering infrastructure, limited processing capacity, and the high cost of transporting gas from remote production sites to demand centers.
              </p>

              <h3 className="text-xl font-bold text-white pt-4">Modular Gas-to-Power: A New Paradigm</h3>
              <p>
                Modular gas-to-power systems provide a commercially viable and rapidly deployable solution for converting flare gas into productive energy. These systems integrate gas capture, treatment, compression, and high-efficiency power generation within compact, scalable facilities that can be deployed close to oil production sites.
              </p>

              <h3 className="text-xl font-bold text-white pt-4">Conclusion</h3>
              <p>
                For Candela Energy Limited (RC 1234650), this opportunity aligns directly with our mission to deliver integrated energy infrastructure, Industrial IoT, operational technology, and digital intelligence solutions that enable cleaner, more resilient, and commercially sustainable energy systems across West Africa.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-medium">NOGICD Compliant • Candela Energy Group</span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="text-xs text-emerald-400 font-bold hover:underline"
              >
                ↑ Return to Top
              </button>
            </div>
          </div>

        ) : (

          /* FULL VIEW: ARTICLE 2 */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8">
            <button 
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20 hover:bg-orange-500/20 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Automated Telemetry</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Automated Telemetry in Off-Grid Hybrid Energy Distribution
              </h1>
              <p className="text-sm text-slate-400 italic">Leveraging Real-Time IIoT and Intelligent Energy Management to Deliver 99.9% Power Availability</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base leading-relaxed border-t border-slate-800 pt-6">
              <h3 className="text-xl font-bold text-white">Foreword</h3>
              <p>
                As industries across Africa strive for greater operational resilience, energy security, and sustainability, off-grid hybrid energy systems are rapidly becoming the preferred alternative to conventional diesel-only generation. By integrating natural gas generators, solar photovoltaic (PV) systems, and Battery Energy Storage Systems (BESS), organizations can significantly reduce fuel costs, lower carbon emissions, and improve power reliability.
              </p>
              <p>
                Automated telemetry, powered by the Industrial Internet of Things (IIoT), Operational Technology (OT), and advanced analytics, provides the digital intelligence needed to orchestrate hybrid energy systems in real time.
              </p>

              <h3 className="text-xl font-bold text-white pt-4">The Evolution of Off-Grid Energy Systems</h3>
              <p>
                Across mining operations, industrial facilities, commercial estates, manufacturing plants, hospitals, universities, telecom infrastructure, and remote communities, dependable electricity is essential for business continuity.
              </p>

              <h3 className="text-xl font-bold text-white pt-4">Conclusion</h3>
              <p>
                At Candela Energy Limited (RC 1234650), we believe telemetry is no longer simply a monitoring tool—it is the digital foundation of modern distributed energy infrastructure.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-medium">NOGICD Compliant • Candela Energy Group</span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="text-xs text-orange-400 font-bold hover:underline"
              >
                ↑ Return to Top
              </button>
            </div>
          </div>

        )}

      </div>
    </div>
  );
};

export default ThoughtLeadership;