import React, { useState } from 'react';
import CandelaLogo from './CandelaLogo';
import AdminLetterhead from './AdminLetterhead';

export const Footer: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-2 space-y-4">
            <CandelaLogo className="h-8" lightText={true} />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Monetising stranded gas flares and delivering scalable, hybrid energy solutions across sub-Saharan Africa.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Gas Monetisation</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Hybrid Power Systems</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Automated Telemetry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#story" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#insights" className="hover:text-emerald-400 transition-colors">Insights Blog</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar with Hidden 'CE' Admin Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2026 Candela Energy Group Nigeria Limited. All Rights Reserved.</span>
            
            {/* Secret CE Admin Portal Trigger Link */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-[10px] text-slate-600 hover:text-emerald-400 transition-colors font-mono px-1.5 py-0.5 rounded select-none border border-slate-800/50"
              title="Portal"
            >
              CE
            </button>
          </div>

          <div className="flex gap-6 text-slate-500 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>

      {/* Admin Passcode Modal Component */}
      <AdminLetterhead isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </footer>
  );
};

export default Footer;