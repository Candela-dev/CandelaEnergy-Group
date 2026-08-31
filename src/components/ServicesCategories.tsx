import React, { useState } from 'react';
import { Flame, Cpu, GraduationCap, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface SubService {
  title: string;
  description: string;
  bullets?: string[];
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  items: SubService[];
}

const categories: Category[] = [
  {
    id: 'project-development',
    title: 'Project Development & Gas Monetisation',
    subtitle: 'Structuring & Maturing Energy Projects Across Africa',
    icon: Flame,
    description:
      'Applying structured project maturation frameworks to assure predictable outcomes across Natural Gas monetisation and hybrid renewable developments.',
    items: [
      {
        title: 'Natural Gas Monetisation',
        description:
          "Capitalising on Africa's 650 Tcf natural gas reserves to drive domestic industrial growth and export capability.",
        bullets: [
          'Domestic LNG, LPG, and CNG last-mile supply chain development',
          'Maturation of Gas-Based Industries (GBIs)',
          'Large-scale LNG infrastructure for export markets',
        ],
      },
      {
        title: 'Renewables & Hybrid Energy',
        description:
          'Delivering reliable, transition-ready energy configurations for commercial and industrial clients.',
        bullets: [
          'Hybrid Gas & Solar IPP project conception',
          'Captive Solar Mini-grids for C&I clients',
          'Clean Hydrogen initiative development',
        ],
      },
    ],
  },
  {
    id: 'technology-application',
    title: 'Technology Application & Automation',
    subtitle: 'Industry 4.0 & Operational Technology Integration',
    icon: Cpu,
    description:
      'Designing, curating, and deploying SCADA, IIoT, and enterprise digital platforms for real-time asset visibility and operational optimization.',
    items: [
      {
        title: 'Infrastructure Automation & SCADA',
        description:
          'Partnering with OEMs and system integrators to deliver robust field control systems.',
        bullets: [
          'Enterprise SCADA design, integration, and deployment',
          'Real-time technical tracking for energy assets',
          'Downtime reduction and predictive maintenance telemetry',
        ],
      },
      {
        title: 'Energy Digital Platforms',
        description:
          'Custom web and cloud platforms built for scalable field operations access.',
        bullets: [
          'Digital access to on-premise and remote systems',
          'Standalone digital tools or integrated automation suites',
        ],
      },
    ],
  },
  {
    id: 'consulting-advisory',
    title: 'Energy Consulting & Capacity Building',
    subtitle: 'Independent Strategic Advisory & Immersive Training',
    icon: GraduationCap,
    description:
      'Equipping public and private sector stakeholders with expert domain insight and commercial toolsets for long-term operational self-sufficiency.',
    items: [
      {
        title: 'B2B & B2G Energy Advisory',
        description:
          'Independent consultancy for commercial and governmental clients to co-create contextual energy strategies.',
      },
      {
        title: 'Capacity Development Programs',
        description:
          'Experiential learning bridging knowledge gaps in Natural Gas and Renewables.',
        bullets: [
          'Commercial toolsets and macro-energy context',
          'Hands-on workforce skill transformation',
        ],
      },
    ],
  },
  {
    id: 'corporate-foundation',
    title: 'Corporate Foundation & Values',
    subtitle: 'Guided by Value Creation, Innovation, & Partnership',
    icon: Award,
    description:
      'Our core VIP framework (Value-Driven, Innovation, Partnership) guides every project execution with certified program management standards.',
    items: [
      {
        title: 'Our VIP Core Values',
        description:
          'Value creation sits at the heart of our bespoke model, bringing diverse practitioner viewpoints together to build custom client solutions.',
      },
      {
        title: 'Certified Execution Guarantee',
        description:
          'Managed by Certified Program Managers to ensure all assignments deliver measurable value on budget, on time, and to global standards.',
      },
    ],
  },
];

export const ServicesCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="py-16 bg-slate-50 text-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Focused Energy Offerings
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Combining traditional energy expertise with cutting-edge digital models to deliver sustainable value across Africa.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-emerald-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight">{cat.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Content Display Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                {currentCategory.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {currentCategory.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-600 mb-8 text-base leading-relaxed">
            {currentCategory.description}
          </p>

          {/* Sub-services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-emerald-600" />
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
