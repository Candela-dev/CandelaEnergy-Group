import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Cpu, Sun, Sparkles, Wrench, ArrowRight } from 'lucide-react';

export default function Catalogue() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const triggerNaya = (productName: string) => {
    window.dispatchEvent(new CustomEvent('open-naya', { detail: { product: productName } }));
  };

  const categories = [
    {
      id: "metering",
      title: "Metering Portfolio",
      desc: "Smart prepay and postpay meters certified by NEMSA for residential, commercial, and industrial boundaries.",
      icon: <Zap className="w-6 h-6 text-red-500" />,
      items: [
        { name: "DDSY1088 Single-Phase Smart Meter", specs: "230V AC, 5(80)A, Class 1.0, STS Prepayment, IP54", image: "meter-1p.png", link: "/services/grid-metering" },
        { name: "DTSY1088 Three-Phase Smart Meter", specs: "3×230/400V, 5(100)A, DLMS/COSEM, Phase/Tamper Events", image: "meter-3p.png", link: "/services/grid-metering" },
        { name: "DTSD1088 CT-Operated Industrial Meter", specs: "3-phase 4-wire, Class 0.5S, RS485 / 4G / Infrared", image: "meter-ct.png", link: "/services/grid-metering" },
        { name: "Customer Interface Units (CIU)", specs: "RF, PLC & MBUS variants with 20-digit token entry & backlit LCD", image: "ciu.png", link: "/services/grid-metering" }
      ]
    },
    {
      id: "hes-ami",
      title: "HES & AMI Architecture",
      desc: "Central management systems, head-end telemetry, and automated meter reading infrastructure.",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Head-End System (HES)", specs: "Centralized RF, PLC & cellular link management and remote operations", image: "dashboard.png", link: "/services/analytics" },
        { name: "AMI Core Services", specs: "Automated readings, load profiles, anti-tamper events & billing integration", image: "dashboard.png", link: "/services/analytics" }
      ]
    },
    {
      id: "iiot",
      title: "Connected Assets & IIoT",
      desc: "Edge monitoring, telemetry controllers, and industrial data acquisition units.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "XB1 Acquisition Controller", specs: "Modbus/RS485, pulse and analog I/O with cellular backhaul", image: "telemetry.png", link: "/services/telemetry" },
        { name: "Edge Computing Units", specs: "Local buffering, validation, edge analytics & encrypted transmission", image: "telemetry.png", link: "/services/telemetry" }
      ]
    },
    {
      id: "vending",
      title: "Power Share Vending",
      desc: "Prepaid electricity purchasing portals and automated token delivery for estates and multi-tenant facilities.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      items: [
        { name: "Power Share Platform", specs: "STS token generation, multi-building admin, card/USSD/transfer payment options", image: "vending.png", link: "" }
      ]
    },
    {
      id: "solar",
      title: "Distributed Energy & Solar",
      desc: "Solar home systems, hybrid inverters, energy storage, and digitally managed mini-grids.",
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      items: [
        { name: "Solar Home Packages", specs: "Daytime DC generation, hybrid inverter, and 25.6V/100Ah ESS battery storage", image: "solar.png", link: "" },
        { name: "Mini-Grid Systems", specs: "Integrated PV, storage, distribution infrastructure and boundary metering", image: "solar.png", link: "" }
      ]
    },
    {
      id: "transformers",
      title: "Transformer Services",
      desc: "Selection, supply, installation, testing, commissioning, and maintenance coordination for reliable network assets.",
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      items: [
        { name: "S13-M Distribution Transformers", specs: "160-1600KVA oil-immersed fully sealed distribution transformers.", image: "transformer.png", link: "" },
        { name: "Commissioning & Maintenance", specs: "End-to-end testing, safe commissioning, and repair coordination.", image: "transformer.png", link: "" }
      ]
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
          Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Showcase</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Smart metering, connected assets, and reliable distributed energy solutions engineered for Nigerian operators and enterprises.
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 shadow-lg shadow-black/50">
                {cat.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{cat.title}</h2>
                <p className="text-sm md:text-base text-slate-400 mt-1">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  onClick={() => item.link ? navigate(item.link) : triggerNaya(item.name)}
                  className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1 cursor-pointer transition-all duration-300 group"
                >
                  {/* Image Display Case (Top Half) */}
                  <div className="relative h-64 w-full bg-gradient-to-tr from-slate-950 to-slate-800/40 flex items-center justify-center p-8 border-b border-slate-800 overflow-hidden">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <img 
                      src={`/products/${item.image}`} 
                      alt={item.name} 
                      className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out relative z-10"
                      onError={(e) => {
                        // Fallback logic in case image isn't saved yet
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('bg-slate-900');
                      }}
                    />
                  </div>
                  
                  {/* Content & Actions (Bottom Half) */}
                  <div className="p-6 flex flex-col flex-grow relative z-20 bg-slate-950/80 backdrop-blur-sm">
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.specs}</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/50 mt-auto">
                      {item.link ? (
                        <span className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                          Explore Capability <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500 italic">
                          Hardware Inquiry
                        </span>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          triggerNaya(item.name);
                        }}
                        className="text-xs font-bold text-emerald-400 hover:text-slate-950 hover:bg-emerald-400 flex items-center gap-1.5 transition-all bg-emerald-950/30 px-4 py-2 rounded-lg border border-emerald-800/40"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> Talk to Naya
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}