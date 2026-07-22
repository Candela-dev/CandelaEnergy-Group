import { Zap, Linkedin, Twitter, Github } from 'lucide-react';

const cols = [
  {
    title: 'Solutions',
    links: ['Residential Solar', 'Battery Storage', 'Commercial Plans', 'Smart Analytics'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Sustainability'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'Outage Map', 'Account Login'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slatey-950 text-slatey-300">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Candela<span className="text-brand-400"> Energy</span>
                <span className="ml-1 text-[11px] font-semibold text-slatey-500">
                  Nigeria Ltd.
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slatey-400">
              Smarter power, bigger savings. Clean energy plans for homes and
              businesses across the country.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slatey-800 text-slatey-300 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-bold text-white">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-slatey-400 transition-colors hover:text-brand-400"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slatey-800 pt-6 sm:flex-row">
          <p className="text-xs text-slatey-500">
            © {new Date().getFullYear()} Candela Energy Group Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slatey-500">
            <a href="#" className="transition-colors hover:text-brand-400">Privacy</a>
            <a href="#" className="transition-colors hover:text-brand-400">Terms</a>
            <a href="#" className="transition-colors hover:text-brand-400">Regulatory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
