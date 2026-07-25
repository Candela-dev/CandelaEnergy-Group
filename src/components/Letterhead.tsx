import React from 'react';
import CandelaLogo from './CandelaLogo';
import { downloadLetterheadPDF } from '../utils/pdfGenerator';

export const Letterhead: React.FC = () => {
  const documentId = "candela-letterhead-print-area";

  return (
    <div className="bg-slate-900 min-h-screen p-4 sm:p-8 flex flex-col justify-center items-center">
      
      {/* 📥 Control Toolbar (Hidden in PDF) */}
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
        <span className="text-sm text-slate-300 font-medium">
          Document Status: <span className="text-emerald-400 font-bold ml-1">Locked & Ready</span>
        </span>
        <button
          onClick={() => downloadLetterheadPDF(documentId, 'Candela-Proposal-REF089.pdf')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Official PDF
        </button>
      </div>

      {/* 📄 A4 Printable Sheet Container */}
      <div 
        id={documentId}
        className="w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[20mm] flex flex-col justify-between relative overflow-hidden shadow-2xl select-none"
        style={{ userSelect: 'none' }}
      >
        
        {/* Top Tri-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-orange-500"></div>
          <div className="w-1/3 bg-blue-700"></div>
        </div>

        {/* HEADER SECTION */}
        <div>
          <div className="flex justify-between items-start pb-8 border-b-2 border-slate-900">
            {/* Logo */}
            <CandelaLogo className="h-12" lightText={false} />

            {/* Corporate Metadata */}
            <div className="text-right text-xs text-slate-600 space-y-1 font-sans">
              <p className="font-bold text-slate-900 text-sm">Candela Energy Group</p>
              <p>Plot 3509 Divine Estate,</p>
              <p>Amuwo Odofin, Lagos, Nigeria</p>
              <p className="mt-1 font-semibold">
                +234 (0) 806 780 2410
              </p>
              <p className="text-blue-700 font-medium">info@candelaenergygroup.com | www.candelaenergygroup.com</p>
            </div>
          </div>

          {/* DOCUMENT METADATA */}
          <div className="mt-8 flex justify-between items-end text-xs text-slate-600">
            <div>
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Date</p>
              <p className="font-bold text-slate-900 mt-0.5">
                {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Ref Number</p>
              <p className="font-bold text-slate-900 mt-0.5">CEG/CORP/2026/089</p>
            </div>
          </div>

          {/* RECIPIENT DETAILS */}
          <div className="mt-10 text-xs text-slate-800 space-y-1">
            <p className="font-black text-slate-900 text-sm">The Managing Director</p>
            <p className="font-medium">Federal Ministry of Power & Energy</p>
            <p className="font-medium">Federal Capital Territory, Abuja</p>
          </div>

          {/* SUBJECT LINE */}
          <div className="mt-10">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wide border-l-4 border-orange-500 pl-3">
              Subject: Formal Proposal for Gas Flare Monetisation Infrastructure
            </h2>
          </div>

          {/* LETTER BODY CONTENT */}
          <div className="mt-8 text-sm text-slate-800 font-medium leading-relaxed space-y-5">
            <p>Dear Sir/Madam,</p>

            <p>
              We write on behalf of <strong>Candela Energy Group</strong> to present our operational roadmap for modular flare-gas capture and hybrid power generation across sub-Saharan industrial corridors.
            </p>

            <p>
              Through our core technological capabilities, we monetize stranded natural gas at the wellhead, transforming routine emissions into steady, cost-effective electricity for industrial clusters while maintaining 99.9% uptime compliance.
            </p>

            <p>
              We welcome the opportunity to convene for a technical presentation and discuss strategic integration models with your infrastructure team.
            </p>

            <p>Yours faithfully,</p>

            {/* SIGNATURE AREA (Locked & Secure) */}
            <div className="pt-6 w-64 space-y-1">
              <div className="relative h-16 w-32 border-b-2 border-slate-300 mb-2 flex flex-col justify-end">
                {/* 
                  The signature image layer.
                  Make sure 'signature.png' is in your 'public' folder!
                */}
                <div className="absolute inset-0 z-10 pointer-events-none" />
                <img 
                  src="/signature.png" 
                  alt="Authorized Signature" 
                  className="max-h-14 object-contain pointer-events-none select-none filter contrast-125 mb-1"
                />
              </div>
              <p className="font-black text-slate-900 text-sm">Executive Board of Directors</p>
              <p className="text-xs text-slate-500 font-bold">Candela Energy Group</p>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="pt-6 border-t border-slate-200 mt-12">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
            <p>© {new Date().getFullYear()} Candela Energy Group. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span className="text-blue-700">Gas Monetisation</span>
              <span>•</span>
              <span className="text-orange-500">Power Infrastructure</span>
              <span>•</span>
              <span className="text-red-600">Hybrid Telemetry</span>
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