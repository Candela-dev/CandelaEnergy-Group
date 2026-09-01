import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CandelaLogo from './CandelaLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Main Logo Link */}
          <Link to="/" className="flex items-center">
            <CandelaLogo className="h-9" lightText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="/#hero" className="hover:text-emerald-400 transition-colors">Overview</a>
            <a href="/#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="/#our-story" className="hover:text-emerald-400 transition-colors">Our Story</a>
            <a href="/#insights" className="hover:text-emerald-400 transition-colors">Insights</a>
            <Link to="/thought-leadership" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">Whitepapers</Link>
            <a 
              href="/#contact" 
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition-colors shadow-lg shadow-emerald-500/10"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a 
            href="/#hero" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            Overview
          </a>
          <a 
            href="/#services" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            Services
          </a>
          <a 
            href="/#our-story" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            Our Story
          </a>
          <a 
            href="/#insights" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            Insights
          </a>
          <Link 
            to="/thought-leadership" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2 text-base font-semibold text-emerald-400 hover:bg-slate-800 rounded-lg"
          >
            Whitepapers & Insights
          </Link>
          <a 
            href="/#contact" 
            onClick={() => setIsOpen(false)} 
            className="block w-full text-center px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;