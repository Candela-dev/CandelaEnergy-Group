import React from 'react';
import { Newspaper, ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Monetising Flare Gas: A Path to Energy Resilience in West Africa',
    excerpt: 'How modular gas-to-power infrastructure captures stranded flare gas, drastically reducing carbon emissions while delivering reliable power to heavy industry.',
    category: 'Gas Monetisation',
    date: 'Jul 18, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Automated Telemetry in Off-Grid Hybrid Energy Distribution',
    excerpt: 'Leveraging real-time IoT monitoring and telemetry to seamlessly balance gas generator output with solar and battery storage for 99.9% uptime.',
    category: 'Automation & IoT',
    date: 'Jul 10, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Navigating NOGICD Compliance in Modern Power Projects',
    excerpt: 'Key operational strategies for power developers to achieve 100% local content regulatory compliance across Sub-Saharan industrial sectors.',
    category: 'Regulatory & Market',
    date: 'Jun 28, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  }
];

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            <Newspaper className="w-3.5 h-3.5" />
            Industry Insights & News
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center mt-4 mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thought Leadership & <span className="text-emerald-400">Energy Innovation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Analysis, technical updates, and regulatory trends shaping the future of gas monetisation and power infrastructure across Africa.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-950/80 text-emerald-400 backdrop-blur-md border border-slate-700/60">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>

                {/* Read Action Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-slate-200 hover:border-emerald-500 hover:text-white transition-colors"
          >
            <span>Subscribe to Market Reports</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Insights;