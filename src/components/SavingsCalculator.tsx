import { useMemo, useState } from 'react';
import { Calculator, Sparkles, RefreshCw } from 'lucide-react';

type PropertyType = 'residential' | 'commercial' | 'industrial';

const propertyRates: Record<PropertyType, { rate: number; savingsPct: number }> = {
  residential: { rate: 0.142, savingsPct: 0.28 },
  commercial: { rate: 0.119, savingsPct: 0.34 },
  industrial: { rate: 0.098, savingsPct: 0.38 },
};

function currency(n: number) {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export default function SavingsCalculator() {
  const [property, setProperty] = useState<PropertyType>('residential');
  const [monthlyBill, setMonthlyBill] = useState(180);
  const [usage, setUsage] = useState(950);

  const result = useMemo(() => {
    const { savingsPct } = propertyRates[property];
    const annualBill = monthlyBill * 12;
    const annualSavings = annualBill * savingsPct;
    const monthlySavings = annualSavings / 12;
    const newBill = monthlyBill - monthlySavings;
    const co2Cut = (usage * 12 * 0.0007).toFixed(2);
    return { annualSavings, monthlySavings, newBill, co2Cut };
  }, [property, monthlyBill, usage]);

  const reset = () => {
    setProperty('residential');
    setMonthlyBill(180);
    setUsage(950);
  };

  return (
    <section id="calculator" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <Calculator className="h-3.5 w-3.5" />
            Utility Savings Calculator
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
            See how much you could save
          </h2>
          <p className="mt-3 text-slatey-600">
            Adjust your usage to get an instant estimate. No email required.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <div className="lg:col-span-3 rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-7">
              <div>
                <label className="text-sm font-semibold text-slatey-800">
                  Property type
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'residential', label: 'Residential' },
                      { id: 'commercial', label: 'Commercial' },
                      { id: 'industrial', label: 'Industrial' },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setProperty(opt.id)}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${
                        property === opt.id
                          ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                          : 'border-slatey-200 bg-white text-slatey-600 hover:border-brand-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <Slider
                label="Monthly bill"
                value={monthlyBill}
                min={50}
                max={2000}
                step={10}
                suffix="$"
                onChange={setMonthlyBill}
              />
              <Slider
                label="Monthly usage"
                value={usage}
                min={100}
                max={15000}
                step={50}
                suffix=" kWh"
                onChange={setUsage}
              />
            </div>

            <button
              onClick={reset}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slatey-500 transition-colors hover:text-brand-700"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white shadow-soft sm:p-8">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Your estimate
              </span>
              <p className="mt-5 text-sm text-brand-100">Estimated annual savings</p>
              <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {currency(result.annualSavings)}
              </p>

              <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
                <Row label="Monthly savings" value={currency(result.monthlySavings)} />
                <Row label="New monthly bill" value={currency(result.newBill)} />
                <Row label="CO₂ reduced / year" value={`${result.co2Cut} tons`} />
              </div>

              <a
                href="#contact"
                className="mt-7 flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-800 transition-all hover:bg-brand-50 active:scale-95"
              >
                Lock in this rate
              </a>
              <p className="mt-3 text-center text-[11px] text-brand-100/80">
                Estimates are indicative. Final pricing depends on a free site assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (n: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-semibold text-slatey-800">{label}</label>
        <span className="font-display text-lg font-bold text-brand-700">
          {suffix === '$' ? '$' : ''}
          {value.toLocaleString('en-US')}
          {suffix === '$' ? '' : suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slatey-100 outline-none
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:shadow-md
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-brand-600"
        style={{
          background: `linear-gradient(to right, #2f8f61 ${pct}%, #eaeef2 ${pct}%)`,
        }}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-slatey-400">
        <span>
          {suffix === '$' ? '$' : ''}
          {min.toLocaleString()}
          {suffix === '$' ? '' : suffix}
        </span>
        <span>
          {suffix === '$' ? '$' : ''}
          {max.toLocaleString()}
          {suffix === '$' ? '' : suffix}
        </span>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-brand-100">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
