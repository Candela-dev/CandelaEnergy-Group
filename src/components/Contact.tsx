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
    // Hook point: POST to an edge function that calls Resend.
    // await fetch('/functions/v1/send-contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('success');
    setForm({ name: '', email: '', company: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Mail className="h-3.5 w-3.5" />
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slatey-900 sm:text-4xl">
              Let's design your energy plan
            </h2>
            <p className="mt-4 max-w-md text-slatey-600">
              Tell us about your property and goals. A Candela energy advisor
              will respond within one business day with a tailored quote.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Phone, label: 'Call us', value: '+234 800 555 0142' },
                { icon: Mail, label: 'Email', value: 'hello@candela.energy' },
                { icon: MapPin, label: 'HQ', value: '12 Adeola Odeku St, Victoria Island, Lagos' },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slatey-500">{c.label}</p>
                    <p className="font-semibold text-slatey-900">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
              <p className="text-sm font-semibold text-brand-800">
                Prefer a quick call?
              </p>
              <p className="mt-1 text-sm text-brand-700/80">
                Book a 15-minute consultation and we'll run the numbers live.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-slatey-100 bg-white p-6 shadow-soft sm:p-8">
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
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slatey-800">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your energy goals..."
                  className="mt-2 w-full resize-none rounded-xl border border-slatey-200 bg-white px-4 py-3 text-sm text-slatey-900 outline-none transition-all placeholder:text-slatey-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-brand-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
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
                <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-brand-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We'll be in touch within one business day.
                </p>
              )}

              <p className="text-center text-[11px] text-slatey-400">
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
      <label className="text-sm font-semibold text-slatey-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slatey-200 bg-white px-4 py-3 text-sm text-slatey-900 outline-none transition-all placeholder:text-slatey-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
}
