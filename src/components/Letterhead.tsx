import React from 'react';
import CandelaLogo from './CandelaLogo';

export const Letterhead: React.FC = () => {
  return (
    <div className="bg-slate-100 p-4 sm:p-8 flex justify-center items-center">
      
      {/* A4 Printable Sheet Container */}
      <div className="w-full max-w-[800px] min-h-[1050px] bg-white shadow-2xl rounded-sm p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden print:shadow-none print:p-8">
        
        {/* Top Tri-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-orange-500"></div>
          <div className="w-1/3 bg-blue-700"></div>
        </div>

        {/* HEADER SECTION */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-slate-200">
            {/* Logo */}
            <CandelaLogo className="h-12" lightText={false} />

            {/* Corporate Metadata */}
            <div className="text-right text-xs text-slate-500 space-y-0.5 font-sans">
              <p className="font-semibold text-slate-800">Candela Energy Group Nigeria Ltd.</p>
              <p>RC No: 1849204</p>
              <p>Victoria Island, Lagos, Nigeria</p>
              <p className="text-slate-600">info@candelaenergygroup.com | www.candelaenergygroup.com</p>
            </div>
          </div>

          {/* DOCUMENT METADATA */}
          <div className="mt-10 flex justify-between items-end text-xs text-slate-600">
            <div>
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Date</p>
              <p className="font-medium text-slate-800 mt-0.5">July 23, 2026</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Ref Number</p>
              <p className="font-medium text-slate-800 mt-0.5">CEG/CORP/2026/089</p>
            </div>
          </div>

          {/* RECIPIENT DETAILS */}
          <div className="mt-8 text-xs text-slate-700 space-y-1">
            <p className="font-bold text-slate-900 text-sm">The Managing Director</p>
            <p>Federal Ministry of Power & Energy</p>
            <p>Federal Capital Territory, Abuja</p>
          </div>

          {/* SUBJECT LINE */}
          <div className="mt-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-l-4 border-orange-500 pl-3">
              Subject: Formal Proposal for Gas Flare Monetisation Infrastructure
            </h2>
          </div>

          {/* LETTER BODY CONTENT */}
          <div className="mt-6 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p>Dear Sir/Madam,</p>

            <p>
              We write on behalf of <strong>Candela Energy Group Nigeria Limited</strong> to present our operational roadmap for modular flare-gas capture and hybrid power generation across sub-Saharan industrial corridors.
            </p>

            <p>
              Through our core technological capabilities, we monetize stranded natural gas at the wellhead, transforming routine emissions into steady, cost-effective electricity for industrial clusters while maintaining 99.9% uptime compliance.
            </p>

            <p>
              We welcome the opportunity to convene for a technical presentation and discuss strategic integration models with your infrastructure team.
            </p>

            <p>Yours faithfully,</p>

            {/* SIGNATURE AREA */}
            <div className="pt-8 space-y-1">
              <div className="h-10 w-32 border-b border-slate-300 mb-2 flex items-end text-slate-400 italic text-xs">
                [Authorized Signature]
              </div>
              <p className="font-bold text-slate-900 text-sm">Executive Board of Directors</p>
              <p className="text-xs text-slate-500">Candela Energy Group Nigeria Limited</p>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="pt-8 border-t border-slate-200 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 gap-2">
            <p>© 2026 Candela Energy Group Nigeria Limited. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>Gas Monetisation</span>
              <span>•</span>
              <span>Power Infrastructure</span>
              <span>•</span>
              <span>Hybrid Telemetry</span>
            </div>
          </div>

          {/* Bottom Tri-Color Decorative Stripe */}
          <div className="mt-4 h-1 w-full flex rounded-full overflow-hidden">
            <div className="w-1/3 bg-blue-700"></div>
            <div className="w-1/3 bg-orange-500"></div>
            <div className="w-1/3 bg-red-600"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Letterhead;