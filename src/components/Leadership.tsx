import React, { useState } from 'react';
import { User, X, ChevronRight } from 'lucide-react';
import ceoImg from '../assets/ceophoto.png';

interface Leader {
  name: string;
  title: string;
  subtitle?: string;
  image: string | null;
  bio: string;
  expertise?: string[];
  qualifications?: string[];
}

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const ceo: Leader = {
    name: 'Michael Onuorah',
    title: 'Chief Executive Officer',
    subtitle: 'Strategy, Corporate Development & Energy Infrastructure',
    image: ceoImg,
    bio: "Michael Onuorah is a senior energy-sector executive with over 19 years of professional experience spanning power infrastructure, electricity metering, digital energy, oil & gas, corporate development, project execution, business strategy and emerging energy markets. His career combines strategic leadership with hands-on experience in transforming complex energy-sector opportunities into commercially viable businesses, infrastructure projects and technology-enabled solutions.\n\nOver the past 14+ years, Michael has focused extensively on corporate development, business development and project execution, leading multidisciplinary teams responsible for opportunity identification, maturation, structuring and delivery of energy projects through to Final Investment Decision (FID). Prior to Candela, Michael served as General Manager and Acting Chief Executive Officer of Powertech Advanced Business Technologies, the energy-sector-focused subsidiary of Venture Garden Group. His extensive metering sector experience includes playing a leading role in the MAP and Phase 0 National Mass Metering $30M program with Mojec International Holdings, deploying over 700,000 meters across Nigeria.",
    expertise: [
      'Energy Strategy & Corporate Development', 
      'Power Infrastructure Development', 
      'Electricity Metering & Revenue Assurance', 
      'Digital Energy & Energy Technology', 
      'IIoT, OT & Energy Data Platforms', 
      'Business & Product Development',
      'Project Development & Execution',
      'Gas Infrastructure & Midstream Development'
    ]
  };

  const directors: Leader[] = [
    {
      name: 'Nkem N. Ani',
      title: 'Director, Corporate Services',
      image: null,
      bio: 'Nkem Nnenne Ani is a seasoned legal and energy professional with expertise in corporate governance, regulatory compliance, and the power sector. She holds an LL.M. in International Corporate Governance and Financial Regulation from the University of Warwick, alongside law degrees from the Nigerian Law School and Enugu State University.\n\nA member of the Nigerian Bar Association and a Chartered Secretary and Administrator, Nkem has advised on energy regulation, electricity policy, corporate governance, and various power projects. As a certified Renewable Energy Expert Consultant, she brings expertise in renewable energy, state electricity markets, and emerging energy solutions, combining legal, regulatory, and commercial insight to support sustainable growth.'
    },
    {
      name: 'Oluwatosin Fetuga',
      title: 'Chief Technology Officer',
      image: null,
      bio: 'Electrical/electronics engineer turned software and embedded systems engineer with 18 years of experience spanning power systems operations, enterprise banking technology, and independent product development. Since 2016, has focused on building embedded firmware, IoT, and full-stack software solutions for the energy sector, including a nationally deployed IoT platform used by the Nigerian Electricity Supply Industry (NESI).\n\nIn 2025, co-founded Integridex Consulting Ltd., delivering energy management, automatic meter reading (AMR), and automation solutions to utilities, IPPs, and industrial clients across Nigeria, Canada, and Europe.',
      expertise: [
        'Embedded systems & firmware development (ESP32 / ESP-IDF, MicroPython, Modbus RTU)',
        'IoT platforms for energy & utilities (AMR systems)',
        'SCADA, power transmission operations, and grid systems',
        'Secure connectivity (MQTT/mTLS, cloud integration with Azure Event Grid)'
      ]
    },
    {
      name: 'Patience Ayanyemi',
      title: 'Human Resource Director',
      image: null,
      bio: 'Patience Ayanyemi is a human resources executive, executive search consultant, and business leader with over 17 years of experience in human capital management, executive recruitment, and organisational development. She is the Founder and Chief Operating Officer of i4WE Human Capital Limited, operating as MRINetwork AfroAnglo Partnership, leading executive search and recruitment services across West Africa and the Middle East.\n\nPatience is the only African office owner within the Management Recruiters International (MRINetwork) network. She previously held senior HR roles at MTN Nigeria, Wapic Insurance Plc, Zone 4 Energy, and CourierPlus Services. She holds a Master\'s Degree in Industrial and Labour Relations from Lagos State University and is a Certified Transformational Coach under ICF standards.'
    },
    {
      name: 'Olatunji Abdulateef',
      title: 'Financial Controller',
      image: null,
      bio: 'Olatunji is the founder of Taxmobile.Online and Managing Partner/CEO of AOA Professional Services. Prior to this, Olatunji worked as Director, Tax & Regulatory Services at Nolands Nigeria Professional Services, Senior Manager at Saffron Professional Services, Tax and Fiscal Reporting Accountant at Schlumberger Nigeria Limited, and as an Audit Trainee at Ernst & Young. His experience covers internal audit, transfer pricing, arbitration, tax advisory, regulatory services, forensic investigation, and due diligence.\n\nOlatunji holds a B.Sc in Accounting from the University of Ado-Ekiti, an Advanced Diploma in Transfer Pricing (Thomas Jefferson School of Law, San Diego USA), and a certificate in International Financial Reporting (ACCA). He is a member of ANAN, CITN, CIPFA (UK), CIArb (UK), and the International Fiscal Association.'
    },
    {
      name: 'Engr. Emmanuel Akhigbe',
      title: 'Director, Upstream Petroleum Projects',
      image: null,
      bio: 'Engr. Emmanuel Akhigbe is a seasoned engineering and management professional with over 25 years of diverse experience in the oil and gas industry. He holds a Bachelor\'s degree in Electrical and Electronics Engineering from Ambrose Alli University, a Master\'s degree in artificial intelligence and decision making from MIT, and an advanced degree in Strategic Business Leadership from the Paris School of Management.\n\nAs the arrowhead of Candela\'s upstream initiatives, he executes corporate strategy, manages stakeholder relationships, and oversees enterprise-wide initiatives. He is a member of SPE, ASME, COREN, and a Distinguished Fellow of the Nigerian Society of Engineers (FNSE).'
    },
    {
      name: 'Engr. Luca Benson',
      title: 'Director, Metering Services',
      image: null,
      bio: 'Engr. Lucas is a seasoned engineer with extensive experience in the Nigerian power sector, supported by a strong technical background and proven leadership in electricity distribution and energy consulting. He holds a Bachelor of Engineering degree in Electrical and Electronics Engineering.\n\nHe previously worked at the Benin Electricity Distribution Company where he rose to Distribution Manager, overseeing operations and optimizing distribution networks. He later transitioned into energy consulting across power infrastructure and sector reforms, driving operational excellence and sustainable growth within the Nigerian Electricity Supply Industry.'
    },
    {
      name: 'Engr. Nicholas Abayomi',
      title: 'Director, Metering Development',
      image: null,
      bio: 'Engineer Nicholas Abayomi is a COREN-registered Electrical/Power Systems Engineer with over 20 years of extensive experience across the Nigerian Electricity Supply Industry (NESI), spanning electricity generation, transmission, and distribution.\n\nWith a career built around the development, deployment, and management of electricity metering infrastructure, Nicholas brings a unique combination of engineering expertise and commercial acumen. As Director, Metering Development at Candela Energy, he leads end-to-end metering business development, revenue assurance, and last-mile customer infrastructure programs across the electricity value chain.'
    }
  ];

  const getExcerpt = (text: string, limit = 130) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit).trim() + '...';
  };

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white">Our <span className="text-emerald-400">Leadership</span></h2>
        </div>

        {/* CEO Spotlight */}
        <div className="mb-16 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="h-64 lg:h-auto bg-slate-800 relative flex items-center justify-center">
              {ceo.image ? (
                <img src={ceo.image} alt={ceo.name} className="absolute inset-0 w-full h-full object-cover object-top" />
              ) : (
                <User className="w-24 h-24 text-slate-600" />
              )}
            </div>
            <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{ceo.name}</h3>
                <p className="text-emerald-400 font-semibold mb-1">{ceo.title}</p>
                <p className="text-sm text-slate-400 mb-6">{ceo.subtitle}</p>
                <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">{getExcerpt(ceo.bio, 300)}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ceo.expertise?.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedLeader(ceo)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors self-start"
              >
                Read Full Bio <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between transition-all hover:border-slate-700">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden flex-shrink-0 flex items-center justify-center border border-slate-700">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-slate-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight">{director.name}</h4>
                    <p className="text-sm text-emerald-400">{director.title}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  {getExcerpt(director.bio)}
                </p>
              </div>
              <button
                onClick={() => setSelectedLeader(director)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-2 self-start"
              >
                Read Full Bio <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Profile Modal Viewer */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedLeader(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden flex-shrink-0 flex items-center justify-center border border-slate-700">
                {selectedLeader.image ? (
                  <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-slate-500" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">{selectedLeader.name}</h3>
                <p className="text-sm text-emerald-400 font-medium">{selectedLeader.title}</p>
                {selectedLeader.subtitle && <p className="text-xs text-slate-400">{selectedLeader.subtitle}</p>}
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4 text-slate-300 text-sm leading-relaxed custom-scrollbar">
              {selectedLeader.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {selectedLeader.expertise && selectedLeader.expertise.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Core Expertise</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map((exp, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-md border border-emerald-500/20">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;