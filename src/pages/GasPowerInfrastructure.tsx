import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

export const GasPowerInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Gas and Power <span className="text-emerald-400">Infrastructure</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed">
          <p className="text-lg">
            Candela supports the development, project management, and operational delivery of gas and power infrastructure assets. Our capability here is grounded in direct project experience: delivery of the East Horizon gas pipeline system, a 128-kilometer transmission pipeline; the Alausa 7MW and Akute 3.6MW independent power plants; and a Compressed Natural Gas mother station, within a combined asset portfolio exceeding 150 million dollars at Oando Gas & Power. 
          </p>
          <p>
            We are currently in the process of developing a 15MW gas fired powerplant in Rivers State.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Our Capabilities:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Project development and opportunity maturation through to Final Investment Decision</li>
            <li>Gas pipeline and distribution network project management</li>
            <li>Independent power plant development and commissioning support</li>
            <li>Compressed Natural Gas and gas monetization infrastructure</li>
            <li>Mini Grid development and decentralized energy resource Infrastructure</li>
            <li>Operations and maintenance support for gas and power special purpose vehicles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GasPowerInfrastructure;
