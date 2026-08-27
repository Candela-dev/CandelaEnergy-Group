import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu } from 'lucide-react';

export const GridMetering: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <Cpu className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            End-to-End <span className="text-emerald-400">Grid Metering Solutions</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed">
          <p className="text-lg">
            Candela Energy Limited delivers comprehensive grid metering solutions that enable electricity distribution companies, utilities, and energy stakeholders to improve revenue assurance, enhance network visibility, and achieve regulatory compliance across the Nigerian Electricity Supply Industry (NESI).
          </p>
          <p>
            As a trusted metering solutions provider, we partner with globally recognized Original Equipment Manufacturers (OEMs) to deliver advanced, standards-compliant metering technologies supported by robust Advanced Metering Infrastructure (AMI). Our solutions provide accurate energy measurement, secure data acquisition, remote monitoring, and seamless integration with utility billing and operational systems.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Our portfolio includes:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Single-Phase Smart Meters</li>
            <li>Three-Phase Smart Meters</li>
            <li>Maximum Demand Postpaid Meters</li>
            <li>Advanced Metering Infrastructure (AMI)</li>
            <li>Meter Data Management and Analytics</li>
            <li>Meter Asset Financing and Deployment</li>
            <li>End-to-End Metering Project Delivery and Support</li>
          </ul>

          <p className="mt-8">
            Our integrated approach combines technology, project execution, and lifecycle support to help utilities reduce commercial losses, improve billing accuracy, strengthen operational efficiency, and deliver a more reliable customer experience.
          </p>
          <p className="font-semibold text-emerald-400">
            At Candela Energy Limited, we enable the digital transformation of utility metering through intelligent, scalable, and future-ready solutions that support a more efficient, transparent, and resilient electricity network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridMetering;