import React from 'react';
import { Activity, Cpu, BarChart3, Factory, Zap, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Gas & Power Infrastructure',
      description: 'Development, project management, and operational delivery of gas and power infrastructure assets from opportunity maturation through to FID.',
      icon: Zap,
      challenge: 'High capital requirements, complex regulatory environments, and execution risks.',
      impact: 'Commercially viable, operationally resilient, and rapidly deployed energy assets.',
      linkText: 'Read Infrastructure Overview',
      link: '/services/gas-power-infrastructure'
    },
    {
      title: 'Upstream Petroleum Services',
      description: 'Digital monitoring, intelligent inspection, digital twin 3D asset modeling, and end-to-end engineering consultancy for onshore/offshore assets.',
      icon: Droplets,
      challenge: 'Harsh operating environments, aging infrastructure, and high maintenance costs.',
      impact: 'Enhanced asset integrity, reduced downtime, and improved operational safety.',
      linkText: 'Read Upstream Solutions',
      link: '/services/upstream-petroleum'
    },
    {
      title: 'Automated Telemetry & Remote Monitoring',
      description: 'Delivering intelligent telemetry and Industrial Internet of Things (IIoT) solutions that provide secure, real-time visibility into critical energy infrastructure.',
      icon: Activity,
      challenge: 'Geographically dispersed assets lacking centralized visibility.',
      impact: 'Continuous data acquisition, remote asset monitoring, and actionable insights.',
      linkText: 'Read Telemetry Whitepaper',
      link: '/services/telemetry'
    },
    {
      title: 'End-to-End Grid Metering Solutions',
      description: 'Comprehensive grid metering solutions enabling utilities and energy stakeholders to improve revenue assurance, network visibility, and NESI compliance.',
      icon: Cpu,
      challenge: 'Commercial losses and manual data collection inefficiencies.',
      impact: 'Advanced Metering Infrastructure (AMI) and secure automated data acquisition.',
      linkText: 'Read Grid Solutions Overview',
      link: '/services/grid-metering'
    },
    {
      title: 'Energy Analytics & Digital Dashboards',
      description: 'Enterprise-grade energy analytics platforms and digital dashboards transforming complex operational data into actionable strategic intelligence.',
      icon: BarChart3,
      challenge: 'Siloed data systems and lack of unified operational visibility.',
      impact: 'Role-based dashboards tracking near real-time operational KPIs and asset health.',
      linkText: 'Read Energy Analytics Insights',
      link: '/services/analytics'
    },
    {
      title: 'Downstream Petroleum Advisory & Project Delivery',
      description: 'Strategic advisory, project management, and technical consulting services across the downstream petroleum sector to transform opportunities into sustainable assets.',
      icon: Factory,
      challenge: 'Investors, developers, marketers, and energy companies.',
      impact: 'Accelerated project delivery, optimized capital investments, and maximized long-term asset value.',
      linkText: 'Read Petroleum Advisory Insights',
      link: '/services/downstream-petroleum'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Operational Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Our Core <span className="text-emerald-400">Energy Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            End-to-end power infrastructure engineered to monetize stranded gas and secure industrial resilience.
          </p>
        </div>

        {/* Services Grid - Now a 3x2 grid on large screens to accommodate 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-all duration-300 justify-between"
              >
                <div>
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Challenge & Impact Details */}
                  <div className="space-y-2 py-4 border-t border-slate-700/60 text-xs mb-6">
                    <p className="text-slate-300">
                      <strong className="text-emerald-400">Target:</strong> {service.challenge}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-emerald-400">Impact:</strong> {service.impact}
                    </p>
                  </div>
                </div>

                {/* Read Article Link - Updated to use dynamic routing */}
                <div className="pt-4 border-t border-slate-700/40">
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    {service.linkText} 
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;