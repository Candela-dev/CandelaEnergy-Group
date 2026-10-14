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
        { name: "DDSY1088 Single-Phase Smart Meter", specs: "230V AC, 5(80)A, Class 1.0, STS Prepayment, IP54", link: "/services/grid-metering" },
        { name: "DTSY1088 Three-Phase Smart Meter", specs: "3×230/400V, 5(100)A, DLMS/COSEM, Phase/Tamper Events", link: "/services/grid-metering" },
        { name: "DTSD1088 CT-Operated Industrial Meter", specs: "3-phase 4-wire, Class 0.5S, RS485 / 4G / Infrared", link: "/services/grid-metering" },
        { name: "Customer Interface Units (CIU)", specs: "RF, PLC & MBUS variants with 20-digit token entry & backlit LCD", link: "/services/grid-metering" }
      ]
    },
    {
      id: "hes-ami",
      title: "HES & AMI Architecture",
      desc: "Central management systems, head-end telemetry, and automated meter reading infrastructure.",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Head-End System (HES)", specs: "Centralized RF, PLC & cellular link management and remote operations", link: "/services/analytics" },
        { name: "AMI Core Services", specs: "Automated readings, load profiles, anti-tamper events & billing integration", link: "/services/analytics" }
      ]
    },
    {
      id: "iiot",
      title: "Connected Assets & IIoT",
      desc: "Edge monitoring, telemetry controllers, and industrial data acquisition units.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "XB1 Acquisition Controller", specs: "Modbus/RS485, pulse and analog I/O with cellular backhaul", link: "/services/telemetry" },
        { name: "Edge Computing Units", specs: "Local buffering, validation, edge analytics & encrypted transmission", link: "/services/telemetry" }
      ]
    },
    {
      id: "vending",
      title: "Power Share Vending",
      desc: "Prepaid electricity purchasing portals and automated token delivery for estates and multi-tenant facilities.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      items: [
        { name: "Power Share Platform", specs: "STS token generation, multi-building admin, card/USSD/transfer payment options", link: "" }
      ]
    },
    {
      id: "solar",
      title: "Distributed Energy & Solar",
      desc: "Solar home systems, hybrid inverters, energy storage, and digitally managed mini-grids.",
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      items: [
        { name: "Solar Home Packages", specs: "Daytime DC generation, hybrid inverter, and 25.6V/100Ah ESS battery storage", link: "" },
        { name: "Mini-Grid Systems", specs: "Integrated PV, storage, distribution infrastructure and boundary metering", link: "" }
      ]
    },
    {
      id: "transformers",
      title: "Transformer Services",
      desc: "Selection, supply, installation, testing, commissioning, and maintenance coordination for reliable network assets.",
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      items: [
        { name: "S13-M Distribution Transformers", specs: "160-1600KVA oil-immersed fully sealed distribution transformers.", link: "" },
        { name: "Commissioning & Maintenance", specs: "End-to-end testing, safe commissioning, and repair coordination.", link: "" }
      ]
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Products & Services Catalogue
        </h1>
        <p className="text-slate-400 text-lg">
          Smart metering, connected assets, and reliable distributed energy solutions engineered for Nigerian operators and enterprises.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50">
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">{cat.title}</h2>
                <p className="text-sm text-slate-400">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  onClick={() => item.link ? navigate(item.link) : triggerNaya(item.name)}
                  className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between hover:border-slate-600 hover:shadow-lg cursor-pointer transition-all group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="font-semibold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-400 mb-4">{item.specs}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-2 relative z-10">
                    {item.link ? (
                      <span className="text-xs font-semibold text-blue-400 flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 italic">
                        Inquire with Naya
                      </span>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the card's main onClick from firing
                        triggerNaya(item.name);
                      }}
                      className="text-xs font-medium text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center gap-1.5 transition-all bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40 ml-auto"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Talk to Naya
                    </button>
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