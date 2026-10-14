import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Zap, Cpu, Sun, Sparkles } from 'lucide-react'; // Added Sparkles for Naya

export default function Catalogue() {
  const location = useLocation();

  // Smooth scroll to section if a dropdown link was clicked
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // slight delay ensures the page is fully rendered before scrolling
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const triggerNaya = (productName: string) => {
    // Dispatches a global event that AiSalesBot listens to
    window.dispatchEvent(new CustomEvent('open-naya', { detail: { product: productName } }));
  };

  const categories = [
    {
      id: "metering",
      title: "01 / Metering Portfolio",
      desc: "Smart prepay and postpay meters certified by NEMSA for residential, commercial, and industrial boundaries.",
      icon: <Zap className="w-6 h-6 text-red-500" />,
      items: [
        { name: "DDSY1088 Single-Phase Smart Meter", specs: "230V AC, 5(80)A, Class 1.0, STS Prepayment, IP54" },
        { name: "DTSY1088 Three-Phase Smart Meter", specs: "3×230/400V, 5(100)A, DLMS/COSEM, Phase/Tamper Events" },
        { name: "DTSD1088 CT-Operated Industrial Meter", specs: "3-phase 4-wire, Class 0.5S, RS485 / 4G / Infrared" },
        { name: "Customer Interface Units (CIU)", specs: "RF, PLC & MBUS variants with 20-digit token entry & backlit LCD" }
      ]
    },
    {
      id: "hes-ami",
      title: "02 / HES & AMI Architecture",
      desc: "Central management systems, head-end telemetry, and automated meter reading infrastructure.",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Head-End System (HES)", specs: "Centralized RF, PLC & cellular link management and remote operations" },
        { name: "AMI Core Services", specs: "Automated readings, load profiles, anti-tamper events & billing integration" }
      ]
    },
    {
      id: "iiot",
      title: "03 / Connected Assets & IIoT",
      desc: "Edge monitoring, telemetry controllers, and industrial data acquisition units.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "XB1 Acquisition Controller", specs: "Modbus/RS485, pulse and analog I/O with cellular backhaul" },
        { name: "Edge Computing Units", specs: "Local buffering, validation, edge analytics & encrypted transmission" }
      ]
    },
    {
      id: "vending",
      title: "04 / Power Share Vending",
      desc: "Prepaid electricity purchasing portals and automated token delivery for estates and multi-tenant facilities.",
      icon: <Zap className="w-6 h-6 text-red-500" />,
      items: [
        { name: "Power Share Platform", specs: "STS token generation, multi-building admin, card/USSD/transfer payment options" }
      ]
    },
    {
      id: "solar",
      title: "05 / Distributed Energy & Solar",
      desc: "Solar home systems, hybrid inverters, energy storage, and digitally managed mini-grids.",
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      items: [
        { name: "Solar Home Packages", specs: "Daytime DC generation, hybrid inverter, and 25.6V/100Ah ESS battery storage" },
        { name: "Mini-Grid Systems", specs: "Integrated PV, storage, distribution infrastructure and boundary metering" }
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
                <div key={itemIdx} className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between hover:border-slate-700 transition-all">
                  <div>
                    <h3 className="font-semibold text-white text-base mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-400 mb-4">{item.specs}</p>
                  </div>
                  <button
                    onClick={() => triggerNaya(item.name)}
                    className="self-start text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-800/40"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> We are Live, talk to Naya
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}