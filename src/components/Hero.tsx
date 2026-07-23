import React from 'react';
import { ArrowRight, TrendingDown, Leaf, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-pulse-soft" />
      <div className="absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />

      {/* 12-Column Grid Wrapper */}
      <div className="container-px grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Copy, CTA Buttons & Key Stats               */}
        {/* ======================================================== */}
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
            <Leaf className="h-3.5 w-3.5" />
            Now serving 12,400+ homes & businesses
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slatey-900 text-balance sm:text-5xl lg:text-6xl">
            Smarter power.
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              Bigger savings.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slatey-600">
            Candela Energy Group Nigeria Limited designs clean energy plans and analytics that
            lower your utility bills — without the jargon, hidden fees, or
            long-term lock-in.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-lg active:scale-95"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slatey-200 bg-white px-6 py-3.5 text-sm font-semibold text-slatey-800 transition-all hover:border-brand-300 hover:text-brand-700"
            >
              Explore solutions
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: '32%', v: 'Avg. bill reduction' },
              { k: '4.9★', v: 'Customer rating' },
              { k: '100%', v: 'Green-certified plans' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-slatey-900">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs font-medium text-slatey-500">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Overview Card Visual Widget                */}
        {/* ======================================================== */}
        <div className="relative lg:col-span-6 animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/40 to-brand-100/10 blur-2xl" />
            
            {/* Card Window Container */}
            <div className="overflow-hidden rounded-[1.75rem] border border-slatey-100 bg-white shadow-soft">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slatey-100 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                </div>
                <span className="text-xs font-medium text-slatey-400">
                  Candela Energy / Overview
                </span>
              </div>

              {/* Card Body & Metrics */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slatey-500">
                      This month's savings
                    </p>
                    <p className="mt-1 font-display text-3xl font-bold text-slatey-900">
                      $284.50
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    <TrendingDown className="h-3.5 w-3.5" />
                    32% vs. last year
                  </span>
                </div>

                {/* Bar Chart Bars */}
                <div className="mt-5 flex h-32 items-end gap-2">
                  {[40, 55, 35, 62, 48, 70, 58, 75, 65, 82, 72, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-brand-200 to-brand-500 transition-all hover:from-brand-300 hover:to-brand-600"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Sub-Metric Badges */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: Leaf, label: 'Clean mix', value: '78%' },
                    { icon: ShieldCheck, label: 'Uptime', value: '99.9%' },
                    { icon: TrendingDown, label: 'CO₂ cut', value: '1.2t' },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="rounded-xl border border-slatey-100 bg-slatey-50/50 p-3"
                    >
                      <c.icon className="h-4 w-4 text-brand-600" />
                      <p className="mt-2 font-display text-sm font-bold text-slatey-900">
                        {c.value}
                      </p>
                      <p className="text-[11px] text-slatey-500">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Floating Live Rate Pill */}
            <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-2xl border border-slatey-100 bg-white p-4 shadow-soft sm:block">
              <p className="text-xs font-medium text-slatey-500">Live rate</p>
              <p className="font-display text-lg font-bold text-brand-700">
                $0.099/kWh
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}