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
    } else if (tab === '4') {
      setActiveArticle(4);
    } else {
      setActiveArticle(1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-1 w-12 bg-red-600 rounded"></div>
            <div className="h-1 w-12 bg-orange-500 rounded"></div>
            <div className="h-1 w-12 bg-blue-700 rounded"></div>
            <div className="h-1 w-12 bg-indigo-600 rounded"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
            Thought Leadership & Energy Innovation
          </h1>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl mx-auto">
            Strategic insights, technical whitepapers, and operational frameworks driving the future of sustainable energy infrastructure across West Africa.
          </p>
        </div>

        {/* ARTICLE NAVIGATION TABS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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

          <button
            onClick={() => { setActiveArticle(4); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`p-4 rounded-xl text-left transition-all border ${
              activeArticle === 4
                ? 'bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Whitepaper 04</span>
            <h3 className="text-sm font-bold text-white mt-1">NOGICD Compliance</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Strategic Advantage for Sustainable Energy Development.</p>
          </button>
        </div>

        {/* ARTICLE CONTENT CONTAINER */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/4 bg-red-600"></div>
            <div className="w-1/4 bg-orange-500"></div>
            <div className="w-1/4 bg-blue-700"></div>
            <div className="w-1/4 bg-indigo-600"></div>
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
                <p>
                  Gas flaring represents one of the region's most significant economic and environmental inefficiencies. Every cubic foot of gas flared is a lost opportunity to generate electricity, support industrial development, create jobs, and reduce greenhouse gas emissions. At the same time, businesses continue to rely on expensive diesel generation, undermining competitiveness and slowing economic growth.
                </p>
                <p>
                  Advances in modular gas processing, Industrial Internet of Things (IIoT), and distributed gas-to-power technologies are changing this narrative. Modular gas-to-power infrastructure now enables operators to economically capture stranded flare gas at source, convert it into reliable electricity, and deliver clean, dispatch able power directly to industrial customers, commercial clusters, and underserved communities.
                </p>
                <p>
                  For countries across West Africa, this represents more than an environmental initiative—it is a strategic opportunity to strengthen energy security, improve resource efficiency, accelerate industrialization, and unlock new sources of economic value from existing hydrocarbon assets.
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

                <h3 className="text-lg font-bold text-slate-900 mt-8">The West African Energy Opportunity</h3>
                <p>
                  West Africa possesses abundant natural gas resources capable of supporting decades of economic development. Yet significant volumes of associated gas remain underutilized due to inadequate gas gathering infrastructure, limited processing capacity, and the high cost of transporting gas from remote production sites to demand centers.
                </p>
                <p>The result is a dual challenge:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valuable natural gas is routinely flared, releasing carbon dioxide, methane, and other pollutants into the atmosphere.</li>
                  <li>Industrial consumers face chronic electricity shortages, volatile fuel prices, and rising operating costs driven by dependence on diesel-fired captive generation.</li>
                </ul>
                <p>
                  Closing this gap requires a new generation of decentralized energy solutions that bring power generation closer to the source of fuel rather than relying exclusively on large, centralized infrastructure.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Modular Gas-to-Power: A New Paradigm</h3>
                <p>
                  Modular gas-to-power systems provide a commercially viable and rapidly deployable solution for converting flare gas into productive energy. These systems integrate gas capture, treatment, compression, and high-efficiency power generation within compact, scalable facilities that can be deployed close to oil production sites.
                </p>
                <p>
                  Unlike conventional large-scale infrastructure projects that often require substantial capital investment and lengthy development timelines, modular solutions can be commissioned significantly faster, allowing operators to monetize previously stranded gas while reducing flaring and supplying reliable electricity to nearby industrial consumers.
                </p>
                <p>
                  When combined with advanced telemetry, operational technology (OT), Industrial Internet of Things (IIoT), and cloud-based analytics, these facilities deliver continuous asset monitoring, predictive maintenance, remote operations, and real-time performance optimization. This digital capability improves plant availability, enhances operational safety, and provides investors and operators with full visibility into technical and commercial performance.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Creating Shared Value Across the Energy Ecosystem</h3>
                <p>
                  Monetizing flare gas creates measurable value for every stakeholder in the energy value chain.
                </p>
                <ul className="space-y-3 mt-4">
                  <li><strong>For upstream operators,</strong> it transforms an environmental liability into a revenue-generating asset while supporting compliance with evolving emissions regulations.</li>
                  <li><strong>For industrial customers,</strong> it provides access to reliable, cost-effective electricity that reduces dependence on diesel generation, lowers operating costs, and improves productivity.</li>
                  <li><strong>For governments and regulators,</strong> it contributes to national energy security, supports emissions reduction targets, increases domestic gas utilization, and stimulates investment in energy infrastructure and industrial development.</li>
                  <li><strong>For investors,</strong> modular gas-to-power projects offer attractive opportunities supported by long-term power purchase agreements, diversified revenue streams, and growing demand for resilient, lower-carbon energy solutions.</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mt-8">The Role of Digital Energy Intelligence</h3>
                <p>
                  The long-term success of flare gas monetization extends beyond power generation. It depends on the ability to monitor assets, optimize operations, and make informed decisions using real-time data.
                </p>
                <p>
                  Digital energy platforms powered by IIoT, operational technology, artificial intelligence, and advanced analytics enable operators to monitor gas production, plant efficiency, emissions, power generation, equipment health, and commercial performance through a unified operational dashboard. These capabilities reduce downtime, improve asset utilization, enhance regulatory reporting, and create a single source of truth for operators, investors, financiers, and regulators.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Conclusion</h3>
                <p>
                  West Africa's energy future will not be secured by expanding generation capacity alone. It will be shaped by how effectively the region captures, manages, and monetizes its existing energy resources.
                </p>
                <p>
                  Modular flare gas monetization represents one of the most compelling opportunities to simultaneously reduce emissions, strengthen industrial competitiveness, improve energy resilience, and create sustainable economic value.
                </p>
                <p>
                  Organizations that combine innovative gas-to-power infrastructure with intelligent digital operations will be best positioned to lead the next phase of the region's energy transition.
                </p>

                <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                  <p className="font-semibold text-orange-800 m-0 text-sm leading-relaxed">
                    For Candela Energy Limited, this opportunity aligns directly with our mission to deliver integrated energy infrastructure, Industrial IoT, operational technology, and digital intelligence solutions that enable cleaner, more resilient, and commercially sustainable energy systems across West Africa.
                  </p>
                </div>
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
                  As industries across Africa strive for greater operational resilience, energy security, and sustainability, off-grid hybrid energy systems are rapidly becoming the preferred alternative to conventional diesel-only generation. By integrating natural gas generators, solar photovoltaic (PV) systems, and Battery Energy Storage Systems (BESS), organizations can significantly reduce fuel costs, lower carbon emissions, and improve power reliability.
                </p>
                <p>
                  However, the true value of hybrid energy infrastructure is realized only when these diverse energy assets operate as a single, intelligent ecosystem. This requires continuous monitoring, automated control, and data-driven decision-making.
                </p>
                <p>
                  Automated telemetry, powered by the Industrial Internet of Things (IIoT), Operational Technology (OT), and advanced analytics, provides the digital intelligence needed to orchestrate hybrid energy systems in real time. By continuously balancing gas generation, solar production, battery storage, and load demand, intelligent telemetry platforms enable organizations to achieve up to 99.9% system availability, while maximizing efficiency, minimizing operating costs, and extending asset life.
                </p>
                <p>
                  At Candela Energy Limited, we believe telemetry is no longer simply a monitoring tool—it is the digital foundation of modern distributed energy infrastructure.
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

                <h3 className="text-lg font-bold text-slate-900 mt-8">The Evolution of Off-Grid Energy Systems</h3>
                <p>
                  Across mining operations, industrial facilities, commercial estates, manufacturing plants, hospitals, universities, telecom infrastructure, and remote communities, dependable electricity is essential for business continuity. Yet many facilities continue to rely on diesel generators that are expensive to operate, carbon intensive, and vulnerable to fuel supply disruptions.
                </p>
                <p>
                  Hybrid energy systems have emerged as a superior alternative by combining multiple generation sources into a resilient, flexible energy ecosystem. A typical hybrid configuration includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural gas generators providing stable baseload power.</li>
                  <li>Solar PV supplying clean, low-cost renewable energy during daylight hours.</li>
                  <li>Battery Energy Storage Systems (BESS) storing excess energy and responding instantly to fluctuations in demand.</li>
                  <li>Intelligent Energy Management Systems (EMS) coordinating the operation of all assets.</li>
                </ul>
                <p>
                  This diversified architecture improves energy security while reducing dependence on a single generation source.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Why Telemetry Is Mission Critical</h3>
                <p>
                  Many hybrid energy projects underperform not because of equipment limitations, but because they lack an integrated operational intelligence platform.
                </p>
                <p>Without real-time telemetry:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solar generation cannot be fully optimized.</li>
                  <li>Battery charging and discharge cycles become inefficient.</li>
                  <li>Gas generators operate at suboptimal loading conditions.</li>
                  <li>Faults remain undetected until they affect operations.</li>
                  <li>Maintenance becomes reactive rather than predictive.</li>
                  <li>Energy losses increase.</li>
                  <li>Operators have limited visibility into overall system performance.</li>
                </ul>
                <p>
                  Automated telemetry addresses these challenges by providing continuous, real-time visibility into every component of the hybrid energy ecosystem. Thousands of operational data points are collected from sensors, inverters, generators, battery management systems, smart meters, weather stations, switchgear, and protection devices. This information is securely transmitted to centralized cloud platforms where advanced analytics convert raw operational data into actionable business intelligence.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">The Digital Brain Behind Hybrid Energy</h3>
                <p>
                  Modern telemetry extends well beyond data acquisition. It functions as the digital control layer of the energy system.
                </p>
                <p>
                  By continuously analyzing power demand, weather conditions, battery state of charge, fuel consumption, equipment health, and renewable energy availability, the platform dynamically determines the most efficient operating strategy at any given moment.
                </p>
                <p>For example:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>During periods of high solar irradiance, photovoltaic generation can meet a larger proportion of facility demand while simultaneously charging battery storage.</li>
                  <li>As solar production declines in the evening, stored energy is automatically dispatched before increasing gas generator output.</li>
                  <li>During sudden demand spikes, batteries provide instantaneous response while generators ramp up smoothly, avoiding unnecessary fuel consumption and mechanical stress.</li>
                </ul>
                <p>
                  This intelligent orchestration ensures uninterrupted power supply while minimizing operational costs.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Predictive Intelligence Rather Than Reactive Maintenance</h3>
                <p>
                  Traditional maintenance relies on fixed schedules or equipment failure. Telemetry transforms this approach by continuously monitoring the health of critical assets.
                </p>
                <p>Parameters such as:</p>
                <ul className="grid grid-cols-2 gap-2 pl-6 list-disc mb-4">
                  <li>Engine vibration</li>
                  <li>Lubrication pressure</li>
                  <li>Generator loading</li>
                  <li>Fuel efficiency</li>
                  <li>Battery temperature</li>
                  <li>Cell voltage imbalance</li>
                  <li>Inverter performance</li>
                  <li>Transformer loading</li>
                  <li>Switchgear status</li>
                </ul>
                <p>
                  are analyzed continuously using predictive algorithms. Potential failures are identified long before operational disruption occurs, enabling maintenance teams to intervene proactively.
                </p>
                <p>The result is:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduced unplanned outages</li>
                  <li>Lower maintenance costs</li>
                  <li>Improved equipment lifespan</li>
                  <li>Increased operational safety</li>
                  <li>Higher asset utilization</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Achieving 99.9% Operational Availability</h3>
                <p>
                  For mission-critical facilities, power interruptions are not merely inconvenient—they carry significant financial and operational consequences. Manufacturing downtime, production losses, damaged equipment, compromised healthcare services, and interrupted telecommunications can all result from unreliable power.
                </p>
                <p>Automated telemetry supports exceptionally high system availability by enabling:</p>
                <ul className="grid grid-cols-2 gap-2 pl-6 list-disc mb-4">
                  <li>Automatic fault detection</li>
                  <li>Intelligent load prioritization</li>
                  <li>Generator synchronization</li>
                  <li>Battery optimization</li>
                  <li>Renewable energy forecasting</li>
                  <li>Automatic transfer switching</li>
                  <li>Remote diagnostics</li>
                  <li>Continuous performance optimization</li>
                </ul>
                <p>
                  Instead of reacting to failures, operators maintain continuous situational awareness across the entire energy network.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Remote Operations and Enterprise Visibility</h3>
                <p>
                  Hybrid energy assets are increasingly deployed across geographically dispersed locations. Whether managing multiple industrial plants, telecom towers, gas facilities, or utility-scale distributed generation sites, organizations require centralized operational oversight.
                </p>
                <p>Cloud-enabled telemetry platforms provide secure access to:</p>
                <ul className="grid grid-cols-2 gap-2 pl-6 list-disc mb-4">
                  <li>Real-time operational dashboards</li>
                  <li>Executive KPI reporting</li>
                  <li>Energy accounting</li>
                  <li>Fuel consumption analysis</li>
                  <li>Renewable energy contribution</li>
                  <li>Carbon emissions reporting</li>
                  <li>Alarm management</li>
                  <li>Asset health indicators</li>
                  <li>Historical performance analytics</li>
                </ul>
                <p>
                  This creates a single source of truth for plant operators, executives, investors, financiers, and regulators.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Delivering Business Value</h3>
                <p>
                  The benefits of intelligent telemetry extend beyond operational efficiency. Organizations implementing integrated telemetry and hybrid energy management can realize:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower fuel consumption through optimized generator dispatch.</li>
                  <li>Reduced operating expenditure by minimizing unnecessary maintenance and extending equipment life.</li>
                  <li>Greater renewable energy utilization, reducing exposure to volatile fuel prices.</li>
                  <li>Improved environmental performance through lower greenhouse gas emissions.</li>
                  <li>Enhanced governance with accurate, auditable operational data.</li>
                  <li>Faster decision-making supported by real-time business intelligence.</li>
                  <li>Increased resilience through continuous monitoring and automated control.</li>
                </ul>
                <p>
                  These outcomes strengthen competitiveness while supporting long-term sustainability objectives.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">The Future of Distributed Energy</h3>
                <p>
                  The future of off-grid energy lies not only in combining multiple energy sources but in enabling those sources to operate as an intelligent, self-optimizing ecosystem.
                </p>
                <p>
                  Emerging technologies such as Artificial Intelligence (AI), machine learning, digital twins, edge computing, advanced forecasting, and autonomous control will further enhance the performance of hybrid energy systems. Organizations that invest in digital operational intelligence today will be best positioned to adapt to tomorrow's energy landscape.
                </p>

                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-2">The Candela Energy Advantage</h4>
                  <p className="font-semibold text-blue-800 m-0 text-sm leading-relaxed mb-3">
                    Candela Energy Limited combines expertise in Industrial Internet of Things (IIoT), Operational Technology (OT), telemetry, hybrid energy integration, and advanced analytics to deliver intelligent energy solutions that maximize reliability, efficiency, and commercial performance.
                  </p>
                  <p className="font-semibold text-blue-800 m-0 text-sm leading-relaxed mb-3">
                    Our integrated platforms provide end-to-end visibility across gas generators, solar PV, Battery Energy Storage Systems (BESS), and electrical distribution infrastructure, enabling clients to operate their energy assets with confidence and precision.
                  </p>
                  <p className="font-semibold text-blue-800 m-0 text-sm leading-relaxed">
                    By transforming operational data into actionable intelligence, we help industrial facilities, utilities, commercial enterprises, and critical infrastructure operators achieve up to 99.9% power availability, optimize energy costs, reduce carbon emissions, and build resilient, future-ready energy ecosystems. In an increasingly digital energy landscape, telemetry is more than a monitoring capability—it is the foundation of operational excellence.
                  </p>
                </div>
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
                <p>
                  Our integrated approach combines industry expertise, rigorous project governance, and commercial insight to support clients throughout the entire project lifecycle—from opportunity identification and feasibility studies to engineering coordination, project execution, commissioning, and operational readiness.
                </p>
                <p>
                  We help clients accelerate project delivery, optimize capital investments, manage execution risks, and maximize long-term asset value while ensuring compliance with applicable regulatory and industry standards.
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

                <h3 className="text-lg font-bold text-slate-900 mt-8">Our Capabilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Retail Fuel Station Development</li>
                  <li>Non-Fuel Revenue (NFR) Strategy and Business Development</li>
                  <li>Compressed Natural Gas (CNG) Mother Station Development</li>
                  <li>Natural Gas Pipeline and Distribution Infrastructure</li>
                  <li>Tank Farm Development and Terminal Operations</li>
                  <li>Liquefied Petroleum Gas (LPG) Storage and Distribution</li>
                  <li>Petroleum Products Haulage and Logistics Solutions</li>
                </ul>

                <div className="mt-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                  <p className="font-semibold text-emerald-800 m-0 text-sm leading-relaxed">
                    At Candela Energy Limited, we deliver more than projects—we deliver strategic outcomes. By combining technical excellence with commercial discipline, we enable our clients to strengthen operational performance, unlock new revenue opportunities, and build future-ready downstream energy businesses.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ARTICLE 4: NOGICD COMPLIANCE */}
          {activeArticle === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Candela Energy Limited Research Group</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Navigating NOGICD Compliance in Modern Power Projects
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-2">
                  Turning Local Content Compliance into a Strategic Advantage for Sustainable Energy Development.
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Foreword</h3>
                <p>
                  As investment in Nigeria's power infrastructure continues to accelerate, developers are navigating an increasingly complex landscape of regulatory requirements, stakeholder expectations, and project delivery risks. Among these, compliance with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act has become a critical success factor for power projects utilizing natural gas, associated gas infrastructure, or serving the broader oil and gas value chain.
                </p>
                <p>
                  While many project developers approach local content as a statutory requirement, leading organizations recognize it as a strategic enabler of project success. Effective local content implementation strengthens supply chains, accelerates regulatory approvals, enhances stakeholder confidence, develops indigenous capacity, and creates lasting economic value.
                </p>
                <p>
                  For developers operating across Nigeria and the wider Sub-Saharan African energy market, achieving robust local content compliance is no longer simply about meeting regulatory thresholds—it is about building resilient, sustainable, and commercially successful energy projects.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Local Content in a Changing Energy Landscape</h3>
                <p>
                  Nigeria's energy sector is undergoing a profound transformation. Increased investment in gas-fired generation, distributed energy systems, industrial captive power, hybrid energy infrastructure, and renewable integration is driving demand for engineering expertise, local manufacturing, technical services, and digital innovation.
                </p>
                <p>
                  The NOGICD framework was established to ensure that this investment translates into meaningful economic participation for Nigerian companies, professionals, and communities. The legislation promotes the utilization of local goods, services, human capital, and technology while encouraging knowledge transfer and sustainable industrial development.
                </p>
                <p>
                  For project sponsors, this represents an opportunity to build stronger local partnerships and create long-term operational value alongside regulatory compliance.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Beyond Compliance: Creating Competitive Advantage</h3>
                <p>
                  Organizations that integrate local content into project planning from inception consistently outperform those that treat compliance as an administrative exercise.
                </p>
                <p>
                  Embedding local participation into procurement strategies, engineering design, workforce planning, and supply chain development enables developers to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve project execution through stronger local partnerships.</li>
                  <li>Reduce procurement lead times and logistics risks.</li>
                  <li>Strengthen relationships with regulators and host communities.</li>
                  <li>Enhance operational resilience through indigenous technical capacity.</li>
                  <li>Build long-term supply chain sustainability.</li>
                  <li>Improve Environmental, Social, and Governance (ESG) performance.</li>
                  <li>Increase investor confidence through responsible project development.</li>
                </ul>
                <p>
                  When approached strategically, local content becomes a catalyst for business growth rather than a compliance obligation.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Operational Strategies for Successful NOGICD Compliance</h3>
                <p>
                  Successful compliance begins long before construction activities commence. Leading developers incorporate local content considerations during project conception by conducting comprehensive assessments of procurement requirements, engineering services, manufacturing opportunities, workforce availability, and technology partnerships.
                </p>
                
                <h4 className="font-semibold text-slate-800 mt-6">Early Regulatory Engagement</h4>
                <p>Engaging regulators during the planning phase enables developers to align project execution with statutory expectations, reducing approval timelines and minimizing compliance risks.</p>

                <h4 className="font-semibold text-slate-800 mt-6">Indigenous Supply Chain Development</h4>
                <p>Building relationships with qualified Nigerian manufacturers, engineering firms, technology providers, and service companies strengthens local participation while improving procurement flexibility and reducing dependence on imported goods.</p>

                <h4 className="font-semibold text-slate-800 mt-6">Local Workforce Development</h4>
                <p>Investing in structured training, technical certification, graduate development, and knowledge transfer programs ensures projects create sustainable local capability rather than temporary employment opportunities.</p>

                <h4 className="font-semibold text-slate-800 mt-6">Technology Transfer</h4>
                <p>Modern power projects increasingly rely on digital technologies, automation, advanced controls, and Industrial Internet of Things (IIoT) solutions. Partnering with indigenous technology companies supports compliance while strengthening Nigeria's long-term technological capability.</p>

                <h4 className="font-semibold text-slate-800 mt-6">Transparent Compliance Reporting</h4>
                <p>Digital compliance management systems improve documentation, reporting accuracy, audit readiness, and communication with regulatory agencies throughout the project lifecycle.</p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">The Role of Digital Technology</h3>
                <p>
                  Digital transformation is redefining how compliance is managed across large infrastructure projects. Cloud-based project management platforms, digital procurement systems, workforce management tools, document control systems, and operational analytics provide project owners with complete visibility into local content performance.
                </p>
                <p>
                  By integrating operational data with procurement, contractor management, workforce development, and reporting processes, organizations gain real-time insights into compliance performance and project execution. Advanced dashboards enable executives to monitor key metrics including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 list-disc mb-4 mt-2">
                  <li>Local procurement performance.</li>
                  <li>Indigenous contractor participation.</li>
                  <li>Nigerian workforce utilization.</li>
                  <li>Training and capacity-building outcomes.</li>
                  <li>Technology transfer initiatives.</li>
                  <li>Supplier performance.</li>
                  <li>Compliance milestones and reporting obligations.</li>
                </ul>
                <p>
                  This data-driven approach supports informed decision-making while simplifying regulatory reporting and governance.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">Delivering Value Across the Project Lifecycle</h3>
                <p>
                  Strong local content performance delivers measurable value beyond regulatory compliance. Projects that prioritize indigenous participation often benefit from:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 list-disc mb-4 mt-2">
                  <li>More resilient supply chains.</li>
                  <li>Reduced project execution risk.</li>
                  <li>Faster issue resolution through local technical expertise.</li>
                  <li>Improved stakeholder relationships.</li>
                  <li>Enhanced social licence to operate.</li>
                  <li>Greater operational continuity.</li>
                  <li>Long-term economic value creation for host communities.</li>
                </ul>
                <p>
                  These outcomes contribute directly to improved project performance and sustainable business growth.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-8">A Regional Opportunity</h3>
                <p>
                  Although the NOGICD Act is specific to Nigeria, the principles of local participation, skills development, technology transfer, and industrial capacity building are increasingly reflected in policy frameworks across Sub-Saharan Africa.
                </p>
                <p>
                  As countries continue to expand power generation, gas infrastructure, renewable energy, and industrial development, organizations with proven experience in local content implementation will be well positioned to support regional energy transformation initiatives. Developers that embed local capability into their operating models today are building a competitive advantage that extends well beyond national borders.
                </p>

                <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">The Candela Energy Perspective</h4>
                  <p className="font-semibold text-indigo-800 m-0 text-sm leading-relaxed mb-3">
                    At Candela, we believe successful infrastructure projects are built on more than engineering excellence. They require strategic planning, regulatory alignment, strong local partnerships, and intelligent project execution.
                  </p>
                  <p className="font-semibold text-indigo-800 m-0 text-sm leading-relaxed mb-3">
                    Our multidisciplinary team supports clients throughout the project lifecycle by integrating project management, engineering advisory, digital technologies, Industrial Internet of Things (IIoT), operational analytics, and stakeholder engagement into a cohesive delivery framework.
                  </p>
                  <p className="font-semibold text-indigo-800 m-0 text-sm leading-relaxed mb-3">
                    By combining technical expertise with a deep understanding of Nigeria's regulatory environment, we help project developers navigate local content requirements confidently while delivering infrastructure that is commercially successful, operationally resilient, and aligned with national development objectives.
                  </p>
                  <p className="font-semibold text-indigo-800 m-0 text-sm leading-relaxed">
                    As the energy sector continues to evolve, organizations that view local content as a strategic investment—not simply a statutory obligation—will be best positioned to deliver projects that create lasting value for investors, communities, regulators, and the wider economy.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ThoughtLeadership;
