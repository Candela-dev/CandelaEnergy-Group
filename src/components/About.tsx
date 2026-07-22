import { Zap, Leaf, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-brand-50 blur-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-brand-700 p-6 text-white shadow-soft">
                  <Leaf className="h-6 w-6" />
                  <p className="mt-3 font-display text-2xl font-bold">100%</p>
                  <p className="text-xs text-brand-100">Renewable plans</p>
                </div>
                <div className="rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft">
                  <ShieldCheck className="h-6 w-6 text-brand-600" />
                  <p className="mt-3 font-display text-2xl font-bold text-slatey-900">A+</p>
                  <p className="text-xs text-slatey-500">BBB rating</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft">
                  <Award className="h-6 w-6 text-brand-600" />
                  <p className="mt-3 font-display text-2xl font-bold text-slatey-900">14</p>
                  <p className="text-xs text-slatey-500">Years in business</p>
                </div>
                <div className="rounded-2xl bg-slatey-900 p-6 text-white shadow-soft">
                  <Zap className="h-6 w-6 text-brand-400" />
                  <p className="mt-3 font-display text-2xl font-bold">12.4k</p>
                  <p className="text-xs text-slatey-300">Active clients</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              About Candela
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
              A utility company built on transparency
            </h2>
            <p className="mt-5 text-slatey-600">
              Candela Energy Group Nigeria Limited was founded in 2011 to make clean energy the
              easy, default choice. We combine solar generation, battery storage,
              and smart analytics into simple plans that cut bills from day one.
            </p>
            <p className="mt-4 text-slatey-600">
              No teaser rates. No fine print. Just real savings you can see in
              your dashboard, every month.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Fixed-rate plans with no hidden fees',
                'Free site assessment and ROI modeling',
                'Cancel anytime — no long-term lock-in',
                'Carbon impact reporting built in',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-slatey-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.3-6.3a1 1 0 0 1 1.4 0z" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
