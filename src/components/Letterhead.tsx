import React, { useState } from 'react';
import { downloadLetterheadPDF } from '../utils/pdfGenerator';
import signatureImg from '../assets/signature.jpg';
// IMPORTANT: We are now using your raw .png logo directly to eliminate the "Group Nigeria" text loop
import logoImg from '../assets/candela-logo.png'; 
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
    if (passcode === '*|' || passcode === 'CandelaAdmin2026!') {
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

  // Convert images to Base64 for clean MS Word embedding
  const getBase64ImageFromUrl = async (imageUrl: string): Promise<string> => {
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch {
      return '';
    }
  };

  // Generate MS Word (.doc) with identical layout and beautiful typography
  const handleWordDownload = async () => {
    const base64Signature = await getBase64ImageFromUrl(signatureImg);
    const base64Logo = await getBase64ImageFromUrl(logoImg);
    const currentYear = new Date().getFullYear();

    const headerHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>Candela Energy Limited Letterhead</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Calibri', Arial, sans-serif; color: #0f172a; background-color: #ffffff; margin: 0; padding: 0; }
          .page-container { width: 100%; position: relative; min-height: 250mm; }
          
          /* Watermark */
          .watermark-container {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            text-align: center;
            opacity: 0.04;
            filter: alpha(opacity=4);
            z-index: -1;
            user-select: none;
          }

          .info-table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 30px; font-size: 9.5pt; }
          .body-section { min-height: 130mm; margin: 25px 0; font-size: 11pt; color: #0f172a; line-height: 1.6; }
          .footer-section { margin-top: 30mm; font-size: 9.5pt; color: #1e293b; border-top: 1px solid #cbd5e1; padding-top: 15px; }
          .capabilities-text { font-size: 8pt; font-weight: bold; color: #64748b; text-align: right; }
        </style>
      </head>
      <body>
        <div class="page-container">
          
          <!-- Watermark -->
          <div class="watermark-container">
            ${base64Logo ? `<img src="${base64Logo}" style="height: 150px; margin-bottom: 10px;" alt="Candela Logo" /><br/>` : ''}
            <p style="font-size: 26pt; color: #0f172a; margin: 0; letter-spacing: 2px;">
              <span style="font-weight: 900;">CANDELA</span> <span style="font-weight: 500;">ENERGY</span>
            </p>
            <p style="font-size: 12pt; font-weight: bold; color: #475569; letter-spacing: 4px; margin-top: 5px;">LIMITED</p>
          </div>

          <!-- 1. Top Header Row: Left (Logo+Title), Right (RC+Address) -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px;">
            <tr>
              <td style="vertical-align: middle; text-align: left; width: 50%;">
                <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 12px;">
                      ${base64Logo ? `<img src="${base64Logo}" style="height: 42px; vertical-align: middle;" alt="Candela Logo" />` : ''}
                    </td>
                    <td style="vertical-align: middle;">
                      <p style="font-size: 17pt; color: #0f172a; margin: 0; line-height: 1; letter-spacing: -0.5px;">
                        <span style="font-weight: 900;">CANDELA</span> <span style="font-weight: 500;">ENERGY</span>
                      </p>
                      <p style="font-size: 8pt; font-weight: 700; color: #64748b; margin: 3px 0 0 0; letter-spacing: 2.5px;">LIMITED</p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="vertical-align: top; text-align: right; width: 50%; font-size: 9.5pt; color: #475569; line-height: 1.4;">
                <p style="font-size: 10pt; font-weight: bold; color: #047857; margin: 0 0 6px 0;">RC 1234650</p>
                <p style="margin: 0;">Plot 3509 Divine Estate, Amuwo Odofin, Lagos, Nigeria</p>
                <p style="margin: 2px 0; font-weight: bold; color: #1e293b;">Phone: +234 (0) 806 780 2410</p>
                <p style="margin: 0; color: #1d4ed8; font-weight: bold;">info@candelaenergygroup.com | www.candelaenergygroup.com</p>
              </td>
            </tr>
          </table>

          <!-- 2. Middle: Tri-Color Bar Underneath Header -->
          <table style="width: 100%; height: 6px; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="background-color: #dc2626; width: 33.33%;"></td>
              <td style="background-color: #f97316; width: 33.33%;"></td>
              <td style="background-color: #1d4ed8; width: 33.33%;"></td>
            </tr>
          </table>

          <!-- Date & Ref Table -->
          <table class="info-table" cellpadding="0" cellspacing="0">
            <tr>
              <td style="text-align: left;">
                <span style="font-size: 8pt; color: #94a3b8; font-weight: bold; text-transform: uppercase;">DATE</span><br/>
                <strong>____ / ____ / 20__</strong>
              </td>
              <td style="text-align: right;">
                <span style="font-size: 8pt; color: #94a3b8; font-weight: bold; text-transform: uppercase;">REF NUMBER</span><br/>
                <strong>${serialNumber}</strong>
              </td>
            </tr>
          </table>

          <!-- Blank Body Section -->
          <div class="body-section">
            <p>&nbsp;</p>
          </div>

          <!-- Signature & Footer -->
          <div class="footer-section">
            <p style="margin: 0 0 8px 0;"><strong>Yours faithfully,</strong></p>
            ${
              base64Signature
                ? `<div style="margin: 8px 0;"><img src="${base64Signature}" style="height: 48px; max-width: 180px;" alt="Signature" /></div>`
                : `<div style="height: 40px; border-bottom: 1px solid #94a3b8; width: 160px; margin-bottom: 8px;"></div>`
            }
            <p style="margin: 0; font-weight: bold; font-size: 11pt; color: #0f172a;">Michael C. Onuorah</p>
            <p style="margin: 2px 0; font-weight: bold; color: #475569; font-size: 9.5pt;">Chief Executive Officer (CEO)</p>
            <p style="margin: 0 0 20px 0; color: #64748b; font-size: 9pt;">Candela Energy Limited (RC 1234650)</p>

            <table style="width: 100%; border-top: 1px solid #e2e8f0; padding-top: 10px; margin-top: 15px;" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size: 8pt; color: #64748b; font-weight: bold;">
                  © ${currentYear} Candela Energy Limited (RC 1234650). All Rights Reserved.
                </td>
                <td class="capabilities-text">
                  <span style="color: #1d4ed8;">Gas Monetisation & Infrastructure</span> • 
                  <span style="color: #f97316;">Automated Telemetry</span> • 
                  <span style="color: #dc2626;">Energy Analytics</span>
                </td>
              </tr>
            </table>

            <!-- Bottom Tri-color Accent -->
            <table style="width: 100%; height: 4px; border-collapse: collapse; margin-top: 12px;">
              <tr>
                <td style="background-color: #1d4ed8; width: 33.33%;"></td>
                <td style="background-color: #f97316; width: 33.33%;"></td>
                <td style="background-color: #dc2626; width: 33.33%;"></td>
              </tr>
            </table>
          </div>
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

  return (
    <div className="bg-slate-900 min-h-screen p-4 sm:p-8 flex flex-col items-center font-sans pt-24">
      
      {/* Control Toolbar */}
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
          <button
            onClick={handleWordDownload}
            className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-xs shrink-0 cursor-pointer"
          >
            <FileText className="w-4 h-4 shrink-0" />
            Download MS Word (.doc)
          </button>

          <button
            onClick={handlePDFDownload}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2 text-xs shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4 shrink-0" />
            Download PDF
          </button>
        </div>
      </div>

      {/* A4 Printable Sheet Container */}
      <div 
        id={documentId}
        className="w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[20mm] flex flex-col relative shadow-2xl select-none overflow-hidden font-sans mb-12 border border-slate-200"
      >
        
        {/* Centered Watermark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 opacity-[0.03] select-none">
          <img src={logoImg} alt="Watermark" className="w-48 h-auto grayscale mb-4" />
          <p className="text-3xl tracking-widest text-slate-900 m-0">
            <span className="font-black">CANDELA</span> <span className="font-medium">ENERGY</span>
          </p>
          <p className="text-sm font-bold tracking-[0.3em] text-slate-700 mt-2">LIMITED</p>
        </div>

        {/* HEADER SECTION (Strictly Ordered) */}
        <div className="relative z-10">
          
          {/* 1. TOP HEADER ROW: Left (Logo + Typography), Right (RC + Address) */}
          <div className="flex justify-between items-start mb-4">
            
            {/* LEFT: Logo + Typography (NO tautology, NO middle drift) */}
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Candela Logo" className="h-11 w-auto shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="text-[22px] text-slate-900 tracking-tight leading-none m-0">
                  <span className="font-black">CANDELA</span> <span className="font-medium">ENERGY</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.25em] leading-tight uppercase mt-1">
                  LIMITED
                </span>
              </div>
            </div>

            {/* RIGHT: Registration & Address */}
            <div className="text-right text-xs text-slate-600 space-y-1 font-sans">
              <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest mb-1.5">RC 1234650</p>
              <p>Plot 3509 Divine Estate, Amuwo Odofin, Lagos, Nigeria</p>
              <p className="font-semibold text-slate-800">Phone: +234 (0) 806 780 2410</p>
              <p className="text-blue-700 font-medium">info@candelaenergygroup.com | www.candelaenergygroup.com</p>
            </div>
            
          </div>

          {/* 2. MIDDLE BAR: Tri-color Bar Underneath Header Row */}
          <div className="h-1.5 w-full flex mb-6">
            <div className="w-1/3 bg-red-600"></div>
            <div className="w-1/3 bg-orange-500"></div>
            <div className="w-1/3 bg-blue-700"></div>
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
        <div className="flex-grow relative z-10 my-8"></div>

        {/* BOTTOM SECTION: SIGNATURE & FOOTER */}
        <div className="relative z-10">
          <div className="pt-6 w-72 space-y-1 mb-8">
            <p className="text-xs text-slate-600 mb-2 font-medium">Yours faithfully,</p>
            <div className="relative h-16 w-44 border-b border-slate-300 mb-2 flex items-end pb-1">
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