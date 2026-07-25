import React, { useState } from 'react';

export const ThoughtLeadership: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<number>(1);

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
            Strategic insights, technical whitepapers, and operational frameworks driving the future of sustainable energy infrastructure across West Africa[cite: 1].
          </p>
        </div>

        {/* ARTICLE NAVIGATION TABS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => setActiveArticle(1)}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 1
                ? 'bg-slate-800 border-orange-500 shadow-lg shadow-orange-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Whitepaper 01</span>
            <h3 className="text-sm font-bold text-white mt-1">Monetizing Flare Gas</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">A Path to Energy Resilience in West Africa[cite: 1].</p>
          </button>

          <button
            onClick={() => setActiveArticle(2)}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 2
                ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Whitepaper 02</span>
            <h3 className="text-sm font-bold text-white mt-1">Automated Telemetry</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Off-Grid Hybrid Energy Distribution & 99.9% Availability[cite: 1].</p>
          </button>

          <button
            onClick={() => setActiveArticle(3)}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 3
                ? 'bg-slate-800 border-red-500 shadow-lg shadow-red-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Whitepaper 03</span>
            <h3 className="text-sm font-bold text-white mt-1">NOGICD Compliance</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Turning Local Content Compliance into Strategic Advantage[cite: 1].</p>
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
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Candela Energy Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Monetizing Flare Gas: A Path to Energy Resilience in West Africa
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Transforming Wasted Resources into Sustainable Power for Industrial Growth[cite: 1].
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  Despite being home to some of the world's largest natural gas reserves, West Africa continues to face a persistent energy paradox. Millions of cubic feet of associated natural gas are flared daily at oil production facilities, while industries, manufacturers, and communities struggle with unreliable electricity supply, high energy costs, and limited access to cleaner fuels[cite: 1].
                </p>
                <p>
                  Gas flaring represents one of the region's most significant economic and environmental inefficiencies. Every cubic foot of gas flared is a lost opportunity to generate electricity, support industrial development, create jobs, and reduce greenhouse gas emissions[cite: 1].
                </p>

                {/* Solid Embedded Image */}
                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80" 
                    alt="Industrial Gas Processing Facility" 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                  <p className="text-center text-xs text-slate-500 py-2 bg-slate-50 italic">
                    Figure 1.1: Modular gas processing infrastructure for wellhead capture and monetization[cite: 1].
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900">Modular Gas-to-Power: A New Paradigm</h3>
                <p>
                  Modular gas-to-power systems provide a commercially viable and rapidly deployable solution for converting flare gas into productive energy. These systems integrate gas capture, treatment, compression, and high-efficiency power generation within compact, scalable facilities that can be deployed close to oil production sites[cite: 1].
                </p>
                <p>
                  When combined with advanced telemetry, operational technology (OT), Industrial Internet of Things (IIoT), and cloud-based analytics, these facilities deliver continuous asset monitoring, predictive maintenance, remote operations, and real-time performance optimization[cite: 1].
                </p>

                <h3 className="text-lg font-bold text-slate-900">Conclusion</h3>
                <p>
                  West Africa's energy future will not be secured by expanding generation capacity alone. It will be shaped by how effectively the region captures, manages, and monetizes its existing energy resources[cite: 1]. For Candela Energy Limited, this opportunity aligns directly with our mission to deliver integrated energy infrastructure across the region[cite: 1].
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 2: AUTOMATED TELEMETRY */}
          {activeArticle === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Candela Energy Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Automated Telemetry in Off-Grid Hybrid Energy Distribution
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Leveraging Real-Time IIoT and Intelligent Energy Management to Deliver 99.9% Power Availability[cite: 1].
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  As industries across Africa strive for greater operational resilience, energy security, and sustainability, off-grid hybrid energy systems are rapidly becoming the preferred alternative to conventional diesel-only generation[cite: 1]. By integrating natural gas generators, solar photovoltaic (PV) systems, and Battery Energy Storage Systems (BESS), organizations can significantly reduce fuel costs and lower carbon emissions[cite: 1].
                </p>

                {/* Solid Embedded Image */}
                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80" 
                    alt="Hybrid Distributed Energy Network" 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                  <p className="text-center text-xs text-slate-500 py-2 bg-slate-50 italic">
                    Figure 2.1: Distributed Energy Resource Management (DERM) telemetry architecture[cite: 1].
                  </p>
                </div>

                <h3 className="text-lg font-bold text-slate-900">The Digital Brain Behind Hybrid Energy</h3>
                <p>
                  Modern telemetry extends well beyond data acquisition. It functions as the digital control layer of the energy system. By continuously analyzing power demand, weather conditions, battery state of charge, fuel consumption, and equipment health, the platform dynamically determines the most efficient operating strategy at any given moment[cite: 1].
                </p>
                <p>
                  At Candela Energy Limited, our integrated platforms provide end-to-end visibility across gas generators, solar PV, BESS, and electrical distribution infrastructure, enabling clients to achieve up to 99.9% power availability[cite: 1].
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 3: NOGICD COMPLIANCE */}
          {activeArticle === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Candela Energy Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Navigating NOGICD Compliance in Modern Power Projects
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Turning Local Content Compliance into a Strategic Advantage for Sustainable Energy Development[cite: 1].
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  As investment in Nigeria's power infrastructure continues to accelerate, developers are navigating an increasingly complex landscape of regulatory requirements, stakeholder expectations, and project delivery risks[cite: 1]. Compliance with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act is a critical success factor[cite: 1].
                </p>
                <p>
                  While many project developers approach local content as a statutory requirement, leading organizations recognize it as a strategic enabler of project success[cite: 1]. Effective local content implementation strengthens supply chains, accelerates regulatory approvals, enhances stakeholder confidence, and develops indigenous capacity[cite: 1].
                </p>

                <h3 className="text-lg font-bold text-slate-900">Operational Strategies for Success</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Early Regulatory Engagement:</strong> Aligning project execution with statutory expectations to reduce approval timelines[cite: 1].</li>
                  <li><strong>Indigenous Supply Chain Development:</strong> Building relationships with qualified Nigerian manufacturers and technology providers[cite: 1].</li>
                  <li><strong>Local Workforce Development:</strong> Investing in structured training, technical certification, and knowledge transfer[cite: 1].</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900">The Candela Energy Perspective</h3>
                <p>
                  At Candela, we believe successful infrastructure projects are built on more than engineering excellence. They require strategic planning, regulatory alignment, strong local partnerships, and intelligent project execution[cite: 1].
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ThoughtLeadership;