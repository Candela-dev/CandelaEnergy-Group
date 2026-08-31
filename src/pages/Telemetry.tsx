import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';

export const Telemetry: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <Activity className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Automated Telemetry & <span className="text-emerald-400">Remote Monitoring</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed">
          <p className="text-lg">
            Candela Energy Limited delivers intelligent telemetry and Industrial Internet of Things (IIoT) solutions that provide secure, real-time visibility into the performance of critical energy infrastructure. Our solutions empower utilities, gas operators, independent power producers (IPPs), and industrial enterprises to monitor, manage, and optimize geographically dispersed assets from a centralized platform.
          </p>
          <p>
            By seamlessly integrating field devices, sensors, industrial control systems, and enterprise applications, we enable continuous data acquisition, remote asset monitoring, automated reporting, and actionable operational insights that improve reliability, efficiency, and decision-making.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Our capabilities include:</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Real-Time IIoT Data Acquisition and Telemetry</li>
            <li>Remote Monitoring and Control of Energy Assets</li>
            <li>Automated Energy Accounting and Reporting</li>
            <li>Asset Performance Monitoring and KPI Dashboards</li>
            <li>Predictive Analytics and Operational Intelligence</li>
            <li>Alarm Management and Event Notifications</li>
            <li>Enterprise Integration with SCADA, ERP, and Business Systems</li>
          </ul>

          <p className="mt-8">
            Our solutions establish a single source of truth for operational and commercial data, enabling business owners, investors, operators, and regulators to access accurate, real-time information for informed decision-making, regulatory compliance, and performance optimization.
          </p>
          <p className="font-semibold text-emerald-400">
            At Candela Energy Limited, we help organizations transform operational data into strategic intelligence—driving greater asset visibility, enhanced operational resilience, improved energy accountability, and sustainable business performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Telemetry;
