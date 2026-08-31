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
}

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const ceo: Leader = {
    name: 'Michael Onuorah',
    title: 'Chief Executive Officer',
    subtitle: 'Strategy, Corporate Development & Energy Infrastructure',
    image: ceoImg,
    bio: "Michael Onuorah is a senior energy-sector executive with over 19 years of professional experience spanning power infrastructure, electricity metering, digital energy, oil & gas, corporate development, project execution, business strategy and emerging energy markets.",
    expertise: [
      'Energy Strategy & Corporate Development', 
      'Power Infrastructure Development', 
      'Electricity Metering & Revenue Assurance', 
      'Digital Energy & Energy Technology', 
      'IIoT, OT & Energy Data Platforms', 
      'Business & Product Development'
    ]
  };

  const directors: Leader[] = [
    {
      name: 'Nkem N. Ani',
      title: 'Director, Corporate Services',
      image: null,
      bio: 'Nkem Nnenne Ani is a seasoned legal and energy professional with expertise in corporate governance, regulatory compliance, and the power sector. She holds an LL.M. in International Corporate Governance and Financial Regulation from the University of Warwick, bringing extensive experience in structuring energy projects, managing regulatory frameworks, and providing strategic corporate counsel across complex operational environments.'
    },
    {
      name: 'Oluwatosin Fetuga',
      title: 'Chief Technology Officer',
      image: null,
      bio: 'Electrical/electronics engineer turned software and embedded systems engineer with 18 years of experience spanning power systems operations, enterprise banking technology, and independent product development. Tosin specializes in building resilient telemetry architectures, industrial IoT integrations, and mission-critical software solutions.'
    },
    {
      name: 'Patience Ayanyemi',
      title: 'Human Resource Director',
      image: null,
      bio: 'Patience Ayanyemi is a human resources executive, executive search consultant, and business leader with over 17 years of experience in human capital management, executive recruitment, and organisational development. She drives talent strategy, workforce optimization, and corporate culture alignment across technical sectors.'
    },
    {
      name: 'Olatunji Abdulateef',
      title: 'Financial Controller',
      image: null,
      bio: 'Olatunji is the founder of Taxmobile.Online and Managing Partner/CEO of AOA Professional Services. Prior to this, Olatunji worked as Director, Tax & Regulatory Services at Nolands Nigeria Professional Services, bringing elite financial governance, audit rigor, and tax strategy oversight to energy operations.'
    },
    {
      name: 'Engr. Emmanuel Akhigbe',
      title: 'Director, Upstream Petroleum Projects',
      image: null,
      bio: 'Engr. Emmanuel Akhigbe is a seasoned engineering and management professional with over 25 years of diverse experience in the oil and gas industry. He holds a Bachelor\'s degree in Electrical and Electronics Engineering from Ambrose Alli University, leading large-scale upstream infrastructure development and project execution.'
    },
    {
      name: 'Engr. Luca Benson',
      title: 'Director, Metering Services',
      image: null,
      bio: 'Engr. Lucas is a seasoned engineer with extensive experience in the Nigerian power sector, supported by a strong technical background and proven leadership in electricity distribution, metering deployment, and energy consulting.'
    },
    {
      name: 'Engr. Nicholas Abayomi',
      title: 'Director, Metering Development',
      image: null,
      bio: 'Engineer Nicholas Abayomi is a COREN-registered Electrical/Power Systems Engineer with over 20 years of extensive experience across the Nigerian Electricity Supply Industry (NESI), spanning electricity generation, transmission, distribution, and advanced metering infrastructure.'
    }
  ];

  // Helper to truncate text for the card preview
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
                <p className="text-slate-300 leading-relaxed mb-6">{ceo.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ceo.expertise?.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl overflow-hidden"
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
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4 text-slate-300 text-sm leading-relaxed custom-scrollbar">
              <p>{selectedLeader.bio}</p>
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