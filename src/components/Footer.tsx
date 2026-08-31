import React from 'react';
import { Link } from 'react-router-dom';
import CandelaLogo from './CandelaLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Info */}
          <div className="space-y-4 md:col-span-1">
            <CandelaLogo className="h-8" lightText={true} />
            <p className="text-xs leading-relaxed text-slate-400">
              Candela Energy Limited (RC 1234650) delivers advanced gas monetisation, hybrid telemetry, and downstream energy infrastructure across West Africa.
            </p>
            <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              NOGICD Compliant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/#our-story" className="hover:text-emerald-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-emerald-400 transition-colors">
                  Core Services
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-emerald-400 transition-colors">
                  Site Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Whitepapers */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Research</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/thought-leadership?tab=1" className="hover:text-emerald-400 transition-colors">
                  Monetizing Flare Gas
                </Link>
              </li>
              <li>
                <Link to="/thought-leadership?tab=2" className="hover:text-emerald-400 transition-colors">
                  Automated Telemetry
                </Link>
              </li>
              <li>
                <Link to="/thought-leadership?tab=3" className="hover:text-emerald-400 transition-colors">
                  Downstream Petroleum
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Headquarters</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plot 3509 Divine Estate,<br />
              Amuwo Odofin, Lagos, Nigeria<br />
              <span className="text-white font-semibold mt-1 block">+234 (0) 806 780 2410</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar with CE Executive Gateway */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} Candela Energy Limited (RC 1234650). All Rights Reserved.</p>
            {/* Secure Executive Gateway Trigger */}
            <Link 
              to="/letterhead" 
              className="inline-flex items-center justify-center w-6 h-6 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors shadow-sm"
              title="Executive Portal Access"
            >
              CE
            </Link>
          </div>
          
          <div className="flex gap-4">
            <span className="text-blue-500">Gas Monetisation</span>
            <span>•</span>
            <span className="text-orange-500">Automated Telemetry</span>
            <span>•</span>
            <span className="text-red-500">Energy Analytics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
