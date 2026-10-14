import React from 'react';
import { ShieldCheck, Zap, Cpu, Sun, Wrench, ArrowRight } from 'lucide-react';

export default function Catalogue() {
  const WHATSAPP_NUMBER = '2348067802410';

  const handleInquiry = (productName: string) => {
    const text = encodeURIComponent(`Hello Candela Team, I would like to request a quote / specification details for: ${productName}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const categories = [
    {
      title: "01 / Metering Portfolio",
      desc: "Smart prepay and postpay meters certified by NEMSA for residential, commercial, and industrial boundaries[cite: 1].",
      icon: <Zap className="w-6 h-6 text-red-500" />,
      items: [
        { name: "DDSY1088 Single-Phase Smart Meter", specs: "230V AC, 5(80)A, Class 1.0, STS Prepayment, IP54[cite: 1]" },
        { name: "DTSY1088 Three-Phase Smart Meter", specs: "3×230/400V, 5(100)A, DLMS/COSEM, Phase/Tamper Events[cite: 1]" },
        { name: "DTSD1088 CT-Operated Industrial Meter", specs: "3-phase 4-wire, Class 0.5S, RS485 / 4G / Infrared[cite: 1]" },
        { name: "Customer Interface Units (CIU)", specs: "RF, PLC & MBUS variants with 20-digit token entry & backlit LCD[cite: 1]" }
      ]
    },
    {
      title: "02 / HES & AMI Architecture",
      desc: "Central management systems, head-end telemetry, and automated meter reading infrastructure[cite: 1].",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Head-End System (HES)", specs: "Centralized RF, PLC & cellular link management and remote operations[cite: 1]" },
        { name: "AMI Core Services", specs: "Automated readings, load profiles, anti-tamper events & billing integration[cite: 1]" }
      ]
    },
    {
      title: "03 / Connected Assets & IIoT",
      desc: "Edge monitoring, telemetry controllers, and industrial data acquisition units[cite: 1].",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "XB1 Acquisition Controller", specs: "Modbus/RS485, pulse and analog I/O with cellular backhaul[cite: 1]" },
        { name: "Edge Computing Units", specs: "Local buffering, validation, edge analytics & encrypted transmission[cite: 1]" }
      ]
    },
    {
      title: "04 / Power Share Vending",
      desc: "Prepaid electricity purchasing portals and automated token delivery for estates and multi-tenant facilities[cite: 1].",
      icon: <Zap className="w-6 h-6 text-red-500" />,
      items: [
        { name: "Power Share Platform", specs: "STS token generation, multi-building admin, card/USSD/transfer payment options[cite: 1]" }
      ]
    },
    {
      title: "05 / Distributed Energy & Solar",
      desc: "Solar home systems, hybrid inverters, energy storage, and digitally managed mini-grids[cite: 1].",
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      items: [
        { name: "Solar Home Packages", specs: "Daytime DC generation, hybrid inverter, and 25.6V/100Ah ESS battery storage[cite: 1]" },
        { name: "Mini-Grid Systems", specs: "Integrated PV, storage, distribution infrastructure and boundary metering[cite: 1]" }
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
          Smart metering, connected assets, and reliable distributed energy solutions engineered for Nigerian operators and enterprises[cite: 1].
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
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
                    onClick={() => handleInquiry(`${cat.title} - ${item.name}`)}
                    className="self-start text-xs font-medium text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
                  >
                    Inquire via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
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