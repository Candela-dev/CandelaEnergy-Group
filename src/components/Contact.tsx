import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Hook point: POST to an edge function that calls Resend targeting info@candelaenergygroup.com
    // await fetch('/functions/v1/send-contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('success');
    setForm({ name: '', email: '', company: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-slate-950 text-white">
      <div className="container-px max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Mail className="h-3.5 w-3.5" />
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">
              Let's design your energy plan
            </h2>
            <p className="mt-4 max-w-md text-slate-400">
              Tell us about your property/ecosystem energy goals. A Candela energy advisor
              will respond within one business day with a tailored quote.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Phone, label: 'Call us', value: '+234 (0) 806 780 2410' },
                { icon: Mail, label: 'Email', value: 'info@candelaenergygroup.com' },
                { icon: MapPin, label: 'HQ', value: 'Suite 2, Floor 3, Kings Deck Building By Atlantic Mall, Chevron Drive, Lekki, Lagos' },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{c.label}</p>
                    <p className="font-semibold text-slate-200 text-sm">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <p className="text-sm font-semibold text-emerald-400">
                Prefer a quick call?
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Book a 15-minute consultation and we'll run the numbers live.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  required
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  placeholder="jane@company.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Company"
                  value={form.company}
                  onChange={(v) => update('company', v)}
                  placeholder="Optional"
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => update('phone', v)}
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your energy goals..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer uppercase tracking-wider"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We'll be in touch within one business day.
                </p>
              )}

              <p className="text-center text-[11px] text-slate-500">
                By submitting, you agree to our privacy policy. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-200">
        {label}
        {required && <span className="text-emerald-400"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
      />
    </div>
  );
}