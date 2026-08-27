import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory } from 'lucide-react';

export const DownstreamPetroleum: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <Factory className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Downstream Petroleum <span className="text-emerald-400">Advisory & Project Delivery</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed">
          <p className="text-lg">
            Candela Energy Limited provides strategic advisory, project management, and technical consulting services across the downstream petroleum sector. We partner with investors, developers, marketers, and energy companies to transform opportunities into commercially successful, operationally resilient, and sustainable assets.
          </p>
          <p>
            Our integrated approach combines industry expertise, rigorous project governance, and commercial insight to support clients throughout the entire project lifecycle—from opportunity identification and feasibility studies to engineering coordination, project execution, commissioning, and operational readiness.
          </p>
          <p>
            We help clients accelerate project delivery, optimize capital investments, manage execution risks, and maximize long-term asset value while ensuring compliance with applicable regulatory and industry standards.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Our Capabilities:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Retail Fuel Station Development</li>
            <li>Non-Fuel Revenue (NFR) Strategy and Business Development</li>
            <li>Compressed Natural Gas (CNG) Mother Station Development</li>
            <li>Natural Gas Pipeline and Distribution Infrastructure</li>
            <li>Tank Farm Development and Terminal Operations</li>
            <li>Liquefied Petroleum Gas (LPG) Storage and Distribution</li>
            <li>Petroleum Products Haulage and Logistics Solutions</li>
          </ul>

          <p className="mt-8 font-semibold text-emerald-400">
            At Candela Energy Limited, we deliver more than projects—we deliver strategic outcomes. By combining technical excellence with commercial discipline, we enable our clients to strengthen operational performance, unlock new revenue opportunities, and build future-ready downstream energy businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownstreamPetroleum;