import React, { useState } from 'react';
import CandelaLogo from './CandelaLogo';
import { downloadLetterheadPDF } from '../utils/pdfGenerator';
import signatureImg from '../assets/signature.jpg';
import { Lock, KeyRound, ShieldAlert, FileText, Download } from 'lucide-react';

export const Letterhead: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [isError, setIsError] = useState(false);

  const documentId = "candela-letterhead-print-area";
  const generateSerial = () => `CEL-${Math.floor(100000 + Math.random() * 900000)}`;
  const [serialNumber, setSerialNumber] = useState(generateSerial());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '*|') {
      setIsAuthenticated(true);
      setIsError(false);
    } else {
      setIsError(true);
      setPasscode('');
    }
  };

  const handlePDFDownload = async () => {
    await downloadLetterheadPDF(documentId, `Candela-Energy-Limited-${serialNumber}.pdf`);
    setSerialNumber(generateSerial());
  };

  // Generate and download a clean HTML-based .doc file that opens natively in MS Word
  const handleWordDownload = () => {
    const headerHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><title>Candela Energy Limited Letterhead</title>
      <style>
        body { font-family: 'Calibri', Arial, sans-serif; color: #1e293b; margin: 20mm; }
        .header { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px; }
        .company-name { font-size: 18pt; font-weight: bold; color: #0f172a; margin: 0; }
        .rc-badge { color: #047857; font-size: 10pt; font-weight: bold; margin: 5px 0; }
        .meta { font-size: 10pt; color: #475569; line-height: 1.4; }
        .footer { margin-top: 50mm; font-size: 9pt; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 15px; }
      </style>
      </head>
      <body>
        <div class="header">
          <p class="company-name">CANDELA ENERGY LIMITED</p>
          <p class="rc-badge">REGISTRATION NO: RC 1234650</p>
          <div class="meta">
            <p>Plot 3509 Divine Estate, Amuwo Odofin, Lagos, Nigeria</p>
            <p>Phone: +234 (0) 806 780 2410 | Email: info@candelaenergygroup.com</p>
            <p>Website: www.candelaenergygroup.com</p>
          </div>
          <div style="margin-top: 20px; display: flex; justify-content: space-between;">
            <span><strong>Date:</strong> ____ / ____ / 20__</span>
            <span style="float: right;"><strong>Ref:</strong> ${serialNumber}</span>
          </div>
        </div>

        <div style="min-height: 120mm; margin: 30px 0;">
          <p>[ Type your executive correspondence or letter content here... ]</p>
        </div>

        <div class="footer">
          <p><strong>Yours faithfully,</strong></p>
          <br/><br/>
          <p><strong>Michael C. Onuorah</strong></p>
          <p>Chief Executive Officer (CEO)</p>
          <p>Candela Energy Limited (RC 1234650)</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + headerHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `Candela-Energy-Limited-${serialNumber}.doc`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setSerialNumber(generateSerial());
  };

  // 🔒 SECURE EXECUTIVE GATEWAY
  if (!isAuthenticated) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-black text-white uppercase tracking-wider">Executive Portal</h1>
            <p className="text-xs text-slate-400 mt-1">Candela Energy Limited • Restricted Administrative Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Enter Executive Passcode
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <KeyRound className="w-4 h-4" />
                </span>
                <input 
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all"
                  autoFocus
                />
              </div>
            </div>

            {isError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-xs text-red-400 font-medium">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Invalid executive passcode. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 uppercase tracking-wider cursor-pointer"
            >
              Unlock Letterhead Generator
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-500 mt-6">
            Authorized Personnel Only • RC 1234650
          </p>
        </div>
      </div>
    );
  }

  // 📄 UNLOCKED LETTERHEAD GENERATOR INTERFACE
  return (
    <div className="bg-slate-900 min-h-screen p-4 sm:p-8 flex flex-col items-center font-sans pt-24">
      
      {/* Control Toolbar with Dual Download Buttons (PDF & Word) */}
      <div className="w-full max-w-[210mm] flex flex-wrap justify-between items-center gap-4 my-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl relative z-30">
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-300 font-medium">
            Status: <span className="text-emerald-400 font-bold ml-1">Secure Session Active</span>
          </span>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer"
          >
            Lock Session
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Word Download Button */}
          <button
            onClick={handleWordDownload}
            className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-xs shrink-0 cursor-pointer"
            title="Download editable Microsoft Word version"
          >
            <FileText className="w-4 h-4 shrink-0" />
            Download MS Word (.doc)
          </button>

          {/* PDF Download Button */}
          <button
            onClick={handlePDFDownload}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-xs shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4 shrink-0" />
            Download PDF
          </button>
        </div>
      </div>

      {/* A4 Printable Sheet Container (Candela Energy Limited branding) */}
      <div 
        id={documentId}
        className="w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[20mm] flex flex-col relative shadow-2xl select-none overflow-hidden font-sans mb-12"
      >
        
        {/* Top Tri-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-orange-500"></div>
          <div className="w-1/3 bg-blue-700"></div>
        </div>

        {/* Faded Center Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04] scale-150">
          <CandelaLogo className="w-96 grayscale" lightText={false} />
        </div>

        {/* HEADER SECTION */}
        <div className="relative z-10">
          <div className="flex justify-between items-start pb-8 border-b-2 border-slate-900">
            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">CANDELA ENERGY LIMITED</h2>
              <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">Registration No: RC 1234650</p>
            </div>

            <div className="text-right text-xs text-slate-600 space-y-1 font-sans">
              <p className="mt-1">Plot 3509 Divine Estate,</p>
              <p>Amuwo Odofin, Lagos, Nigeria</p>
              <p className="font-semibold text-slate-800">+234 (0) 806 780 2410</p>
              <p className="text-blue-700 font-medium">info@candelaenergygroup.com | www.candelaenergygroup.com</p>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-end text-xs text-slate-600">
            <div>
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Date</p>
              <p className="font-bold text-slate-900 mt-0.5 tracking-widest">____ / ____ / 20__</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Ref Number</p>
              <p className="font-bold text-slate-900 mt-0.5">{serialNumber}</p>
            </div>
          </div>
        </div>

        {/* BLANK BODY SECTION */}
        <div className="flex-grow relative z-10 my-8">
          <p className="text-xs text-slate-400 italic">[ Official correspondence body text goes here when printed or edited in Word ]</p>
        </div>

        {/* BOTTOM SECTION: SIGNATURE & FOOTER */}
        <div className="relative z-10">
          <div className="pt-6 w-72 space-y-1 mb-8">
            <p className="text-xs text-slate-600 mb-2 font-medium">Yours faithfully,</p>
            <div className="relative h-20 w-44 border-b border-slate-400 mb-2 flex items-end pb-1">
              <img 
                src={signatureImg} 
                alt="Michael C. Onuorah Signature" 
                className="h-14 max-w-full object-contain pointer-events-none select-none mix-blend-multiply filter contrast-200 brightness-95"
              />
            </div>
            <p className="font-black text-slate-900 text-sm">Michael C. Onuorah</p>
            <p className="text-xs font-bold text-slate-700">Chief Executive Officer (CEO)</p>
            <p className="text-[11px] text-slate-500 font-semibold">Candela Energy Limited (RC 1234650)</p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
              <p>© {new Date().getFullYear()} Candela Energy Limited (RC 1234650). All Rights Reserved.</p>
              <div className="flex gap-3">
                <span className="text-blue-700">Gas Monetisation & Infrastructure</span>
                <span>•</span>
                <span className="text-orange-500">Automated Telemetry</span>
                <span>•</span>
                <span className="text-red-600">Energy Analytics</span>
              </div>
            </div>

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