import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';

export const Clients: React.FC = () => {
  // Active signed clients list (ready to be expanded in the future)
  const signedClients = [
    {
      name: 'Gremoore Energy',
      category: 'Downstream & Infrastructure Partner',
      status: 'Active',
      description: 'Strategic collaboration on energy infrastructure and clean fuel monetization.'
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-sans pt-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-emerald-400" />
            Strategic Partnerships
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Our <span className="text-emerald-400">Clients</span> & Partners
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Collaborating with industry leaders, independent power producers, and energy innovators to deliver resilient infrastructure across West Africa.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* Logo Placeholder / Icon Box */}
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black text-xl shadow-inner">
                    {client.name.charAt(0)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {client.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-xs font-semibold text-emerald-400 mb-4">{client.category}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{client.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900 text-[11px] text-slate-500 font-medium">
                Verified Candela Energy Partner
              </div>
            </div>
          ))}

          {/* Future Slot Placeholder */}
          <div className="p-8 rounded-2xl bg-slate-950/50 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mb-4">
              +
            </div>
            <h4 className="text-sm font-bold text-slate-400 mb-1">Upcoming Partnerships</h4>
            <p className="text-xs text-slate-600">New client logos and profiles will appear here as agreements are finalized.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clients;