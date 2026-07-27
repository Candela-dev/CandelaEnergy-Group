import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import flareImg from '../assets/flare-gas-facility.jpg';
import telemetryImg from '../assets/telemetry-derm.jpg';
import downstreamImg from '../assets/downstream-petroleum.jpg';

export const ThoughtLeadership: React.FC = () => {
  const location = useLocation();
  const [activeArticle, setActiveArticle] = useState<number>(1);

  // Read query parameters on mount or when location changes, and scroll to top
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === '2') {
      setActiveArticle(2);
    } else if (tab === '3') {
      setActiveArticle(3);
    } else {
      setActiveArticle(1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-1 w-12 bg-red-600 rounded"></div>
            <div className="h-1 w-12 bg-orange-500 rounded"></div>
            <div className="h-1 w-12 bg-blue-700 rounded"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
            Thought Leadership & Energy Innovation
          </h1>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl mx-auto">
            Strategic insights, technical whitepapers, and operational frameworks driving the future of sustainable energy infrastructure across West Africa.
          </p>
        </div>

        {/* ARTICLE NAVIGATION TABS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => { setActiveArticle(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 1
                ? 'bg-slate-800 border-orange-500 shadow-lg shadow-orange-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Whitepaper 01</span>
            <h3 className="text-sm font-bold text-white mt-1">Monetizing Flare Gas</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">A Path to Energy Resilience in West Africa.</p>
          </button>

          <button
            onClick={() => { setActiveArticle(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 2
                ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Whitepaper 02</span>
            <h3 className="text-sm font-bold text-white mt-1">Automated Telemetry</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Off-Grid Hybrid Energy Distribution & 99.9% Availability.</p>
          </button>

          <button
            onClick={() => { setActiveArticle(3); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 3
                ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Whitepaper 03</span>
            <h3 className="text-sm font-bold text-white mt-1">Downstream Petroleum</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Advisory, Pipeline & Infrastructure Project Delivery.</p>
          </button>
        </div>

        {/* ARTICLE CONTENT CONTAINER */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-red-600"></div>
            <div className="w-1/3 bg-orange-500"></div>
            <div className="w-1/3 bg-blue-700"></div>
          </div>

          {/* ARTICLE 1: MONETIZING FLARE GAS */}
          {activeArticle === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Candela Energy Limited Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Monetizing Flare Gas: A Path to Energy Resilience in West Africa
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Transforming Wasted Resources into Sustainable Power for Industrial Growth.
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  Despite being home to some of the world's largest natural gas reserves, West Africa continues to face a persistent energy paradox. Millions of cubic feet of associated natural gas are flared daily at oil production facilities, while industries, manufacturers, and communities struggle with unreliable electricity supply, high energy costs, and limited access to cleaner fuels.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src={flareImg} 
                    alt="Candela Gas Processing Infrastructure" 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                  <p className="text-center text-xs text-slate-500 py-2 bg-slate-50 italic">
                    Figure 1.1: Modular gas processing infrastructure for wellhead capture and monetization.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900">Modular Gas-to-Power: A New Paradigm</h3>
                <p>
                  Modular gas-to-power systems provide a commercially viable and rapidly deployable solution for converting flare gas into productive energy. These systems integrate gas capture, treatment, compression, and high-efficiency power generation within compact, scalable facilities that can be deployed close to oil production sites.
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 2: AUTOMATED TELEMETRY */}
          {activeArticle === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Candela Energy Limited Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Automated Telemetry in Off-Grid Hybrid Energy Distribution
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Leveraging Real-Time IIoT and Intelligent Energy Management to Deliver 99.9% Power Availability.
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  As industries across Africa strive for greater operational resilience, energy security, and sustainability, off-grid hybrid energy systems are rapidly becoming the preferred alternative to conventional diesel-only generation. By integrating natural gas generators, solar photovoltaic (PV) systems, and Battery Energy Storage Systems (BESS), organizations can significantly reduce fuel costs and lower carbon emissions.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src={telemetryImg} 
                    alt="DERM Telemetry Architecture" 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                  <p className="text-center text-xs text-slate-500 py-2 bg-slate-50 italic">
                    Figure 2.1: Distributed Energy Resource Management (DERM) telemetry architecture.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900">The Digital Brain Behind Hybrid Energy</h3>
                <p>
                  Modern telemetry extends well beyond data acquisition. It functions as the digital control layer of the energy system. By continuously analyzing power demand, weather conditions, battery state of charge, fuel consumption, and equipment health, the platform dynamically determines the most efficient operating strategy at any given moment.
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 3: DOWNSTREAM PETROLEUM ADVISORY */}
          {activeArticle === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Candela Energy Limited Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Downstream Petroleum Advisory & Project Delivery
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Transforming Opportunities into Commercially Successful and Operationally Resilient Assets.
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Strategic Overview</h3>
                <p>
                  Candela Energy Limited provides strategic advisory, project management, and technical consulting services across the downstream petroleum sector. We partner with investors, developers, marketers, and energy companies to transform opportunities into commercially successful, operationally resilient, and sustainable assets.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src={downstreamImg} 
                    alt="Downstream Petroleum Infrastructure" 
                    className="w-full h-auto object-cover max-h-[450px]"
                  />
                  <div className="p-4 bg-slate-900 text-white flex flex-wrap justify-between items-center text-[11px] font-semibold border-t border-slate-800">
                    <span className="text-emerald-400">Compliance: NOGICD</span>
                    <span>Standard: ISO 9001</span>
                    <span className="text-slate-400">Governance: RC 1234650</span>
                  </div>
                  <p className="text-center text-xs text-slate-500 py-2 bg-slate-50 italic">
                    Figure 3.1: Downstream petroleum storage tank farms and distribution infrastructure in West Africa.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900">Key Capabilities & Infrastructure Scope</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Retail Fuel Station Development:</strong> End-to-end site design, regulatory compliance, and construction execution.</li>
                  <li><strong>Non-Fuel Revenue (NFR) Strategy:</strong> Business development and retail diversification models for downstream sites.</li>
                  <li><strong>Compressed Natural Gas (CNG) Mother Station Development:</strong> High-capacity compression and dispensing facilities.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ThoughtLeadership;