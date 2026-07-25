import React, { useState } from 'react';
import CandelaLogo from './CandelaLogo';
import { downloadLetterheadPDF } from '../utils/pdfGenerator';

export const Letterhead: React.FC = () => {
  const documentId = "candela-letterhead-print-area";

  // Generates a random 6-digit serial number (e.g., CEG-839210)
  const generateSerial = () => `CEG-${Math.floor(100000 + Math.random() * 900000)}`;
  const [serialNumber, setSerialNumber] = useState(generateSerial());

  const handleDownload = async () => {
    // 1. Download the PDF with the current serial number
    await downloadLetterheadPDF(documentId, `Candela-Letterhead-${serialNumber}.pdf`);
    
    // 2. Immediately generate a brand new serial number for the next download
    setSerialNumber(generateSerial());
  };

  return (
    <div className="bg-slate-900 min-h-screen p-4 sm:p-8 flex flex-col justify-center items-center">
      
      {/* 📥 Control Toolbar (Hidden in PDF) */}
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
        <span className="text-sm text-slate-300 font-medium">
          Document Status: <span className="text-emerald-400 font-bold ml-1">Template Ready</span>
        </span>
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Document
        </button>
      </div>

      {/* 📄 A4 Printable Sheet Container */}
      <div 
        id={documentId}
        className="w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[20mm] flex flex-col relative shadow-2xl select-none overflow-hidden"
      >
        
        {/* Top Tri-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-orange-500"></div>
          <div className="w-1/3 bg-blue-700"></div>
        </div>

        {/* 💧 FADED CENTER WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04] scale-150">
          <CandelaLogo className="w-96 grayscale" lightText={false} />
        </div>

        {/* HEADER SECTION (Z-10 to stay above watermark) */}
        <div className="relative z-10">
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

          {/* DATE & DYNAMIC SERIAL NUMBER */}
          <div className="mt-8 flex justify-between items-end text-xs text-slate-600">
            <div>
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Date</p>
              <p className="font-bold text-slate-900 mt-0.5 tracking-widest">
                ____ / ____ / 20__
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Ref Number</p>
              <p className="font-bold text-slate-900 mt-0.5">{serialNumber}</p>
            </div>
          </div>
        </div>

        {/* BLANK BODY SECTION (Expands to push footer down) */}
        <div className="flex-grow relative z-10"></div>

        {/* BOTTOM SECTION: SIGNATURE & FOOTER */}
        <div className="relative z-10">
          
          {/* SIGNATURE AREA (Tuned for the tall photographed signature) */}
          <div className="pt-6 w-64 space-y-1 mb-8">
            
            {/* Increased container height (h-24) so the tall signature isn't squished */}
            <div className="relative h-24 w-32 border-b-2 border-slate-300 mb-2 flex flex-col justify-end items-center pb-1">
              <div className="absolute inset-0 z-10 pointer-events-none" />
              <img 
                src="/signature.jpg" /* Make sure this matches your exact file name and extension! */
                alt="Authorized Signature" 
                /* 
                  Magic Filters applied:
                  - h-22: Allows the tall signature to expand
                  - brightness-110 & contrast-200: Bleaches the grey paper background to pure white
                  - mix-blend-multiply: Makes the pure white paper completely invisible
                */
                className="h-22 object-contain pointer-events-none select-none mix-blend-multiply filter contrast-200 brightness-110"
              />
            </div>

            <p className="font-black text-slate-900 text-sm">Executive Board of Directors</p>
            <p className="text-xs text-slate-500 font-bold">Candela Energy Group</p>
          </div>

          {/* FOOTER */}
          <div className="pt-6 border-t border-slate-200">
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
    </div>
  );
};

export default Letterhead;