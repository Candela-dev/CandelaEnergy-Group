import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplets } from 'lucide-react';

export const UpstreamPetroleum: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="mb-10">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
            <Droplets className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Upstream Petroleum <span className="text-emerald-400">Services</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none text-slate-300 space-y-6 leading-relaxed mb-12">
          <p className="text-lg">
            Candela extends into upstream and midstream petroleum through its partnership PMCL Nigeria Limited and Hilong Holding Limited, a listed digital services group specializing in intelligent products and digital solutions for the oil and gas sector. The partnership covers onshore and offshore fields, pipelines, storage depots, and LNG terminals.
          </p>
        </div>

        {/* 2-Column Grid for Extensive Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-slate-700 pb-2">Digital & Intelligent Solutions</h3>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Intelligent monitoring</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Pipeline safety alert and leakage detection systems</li>
              <li>Cathodic protection monitoring</li>
              <li>Industrial instrumentation covering flow, pressure, temperature, and level</li>
              <li>Closed-circuit television, public address and general alarm, and gas detection systems</li>
            </ul>

            <h4 className="font-semibold text-white mt-6 mb-2">Intelligent inspection</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Smart inspection handhelds, tablets, helmets, and recorders</li>
              <li>AI-assisted video inspection and analysis</li>
              <li>Unmanned aerial vehicle and robotic inspection systems</li>
            </ul>

            <h4 className="font-semibold text-white mt-6 mb-2">Digital twin and industrial AI</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Geographic information services and three-dimensional asset modelling</li>
              <li>Data governance and data warehouse architecture</li>
              <li>Simulation optimization and predictive maintenance</li>
              <li>Industrial AI agents and knowledge graph applications</li>
            </ul>

            <h4 className="font-semibold text-white mt-6 mb-2">Integrated digital solutions</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Smart oil and gas field deployments, onshore and offshore</li>
              <li>Smart pipeline systems</li>
              <li>Smart oil storage depot and underground storage monitoring</li>
              <li>Smart LNG terminal instrumentation and control</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-slate-700 pb-2">Engineering & Project Services</h3>
            
            <h4 className="font-semibold text-white mt-4 mb-2">Engineering Services</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Field Development Studies Debottlenecking, Upgrade / Revamp Studies</li>
              <li>Pipeline Hydraulic Studies, Flow Assurance & Riser Analysis</li>
              <li>Complete Basic Engineering / FEED Packages</li>
              <li>Mechanical / Piping Design & Isometrics</li>
              <li>Corrosion Prevention & Cathodic Protection Design</li>
              <li>Design of Electrical Systems & Detailed Instrumentation</li>
              <li>Design Verification, Safety Reviews (HAZOP, HAZID) & Economic Studies</li>
            </ul>

            <h4 className="font-semibold text-white mt-6 mb-2">3D Imagery and Scanning</h4>
            <p className="text-sm text-slate-300 mb-2">
              Deploying laser technology to deliver integrated engineering solutions for existing facility conditions. We provide digitized offshore/onshore 3D As-Built drawings and models from acquired scan data.
            </p>

            <h4 className="font-semibold text-white mt-6 mb-2">Project Management Consultancy</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Contractor and Interphase management</li>
              <li>Project Risk Management, Cost and schedule control</li>
              <li>Construction and Installation Management</li>
              <li>Quality Management</li>
            </ul>

            <h4 className="font-semibold text-white mt-6 mb-2">Operations & Maintenance</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1 marker:text-emerald-500">
              <li>Pipeline leak detection and repairs</li>
              <li>Corrosion Monitoring and Control</li>
              <li>Cathodic Protection System Operations and Maintenance</li>
              <li>Electrical Troubleshooting and repairs</li>
              <li>Fabrication, Welding, and Specialist Steel repairs</li>
              <li>Asset Integrity Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpstreamPetroleum;
