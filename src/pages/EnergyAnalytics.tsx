import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3 } from 'lucide-react';

export const EnergyAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Energy Analytics, Visualization & <span className="text-emerald-400">Digital Dashboards</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed">
          <p className="text-lg">
            Candela Energy Limited designs, develops, and manages enterprise-grade energy analytics platforms and digital dashboards that provide comprehensive visibility into the performance of energy assets across the entire value chain. Our solutions transform complex operational data into actionable intelligence, enabling organizations to make faster, more informed decisions.
          </p>
          <p>
            Leveraging Industrial IoT (IIoT), Operational Technology (OT), and advanced data analytics, we deliver intuitive, role-based dashboards that provide near real-time monitoring of operational Key Performance Indicators (KPIs), asset health, energy flows, and business performance.
          </p>
          <p>
            Our integrated digital ecosystem enables organizations to monitor electricity generation, transmission, distribution, metering, vending, and customer consumption through a single, unified platform—creating a trusted source of operational and commercial intelligence for executives, operators, investors, and regulators.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Our Capabilities:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Enterprise Energy Management Dashboards</li>
            <li>Real-Time Asset Performance Monitoring</li>
            <li>Utility Network Visualization and Analytics</li>
            <li>Generation-to-Consumption Energy Flow Tracking</li>
            <li>Operational KPI and Executive Performance Dashboards</li>
            <li>Revenue Assurance and Energy Accounting</li>
            <li>Predictive Analytics and Business Intelligence</li>
            <li>Custom Reporting and Regulatory Compliance Dashboards</li>
          </ul>

          <p className="mt-8">
            Our scalable platforms integrate seamlessly with SCADA, Advanced Metering Infrastructure (AMI), Enterprise Resource Planning (ERP), Geographic Information Systems (GIS), and other enterprise applications to provide a holistic view of energy operations.
          </p>
          <p className="font-semibold text-emerald-400">
            At Candela Energy Limited, we empower energy organizations with the digital intelligence needed to enhance operational performance, strengthen governance, optimize asset utilization and accelerate the transition to data-driven energy management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyAnalytics;