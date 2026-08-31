import React, { useState } from 'react';
import { Lock, Printer, X, ShieldAlert } from 'lucide-react';
import Letterhead from './Letterhead';

export const AdminLetterhead: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  // Passcode set to: *|
  const ADMIN_PASSCODE = '*|';

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-white">
              Candela Admin Portal — Letterhead Generator
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT VIEW */}
        {!isAuthenticated ? (
          /* PASSCODE PROMPT FORM */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Restricted Portal Access</h3>
            <p className="text-xs text-slate-400 mt-2">
              Enter passcode to unlock official letterhead.
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors text-center font-mono"
                />
                {error && (
                  <p className="flex items-center justify-center gap-1 text-xs text-red-400 mt-2 font-medium">
                    <ShieldAlert className="w-3.5 h-3.5" /> Incorrect passcode. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/10"
              >
                Unlock Letterhead
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED LETTERHEAD VIEW */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">
                🔒 Session active. Click print to generate official A4 document or save as PDF.
              </span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-sm font-bold transition-colors shadow-md shadow-emerald-500/20"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>

            {/* Printable Letterhead Container */}
            <div className="overflow-auto max-h-[70vh] rounded-lg border border-slate-800">
              <Letterhead />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminLetterhead;
