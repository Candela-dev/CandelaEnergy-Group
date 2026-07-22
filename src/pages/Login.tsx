import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Zap, Mail, Lock, Loader2, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    try {
      await login(email, password);
      navigate('/dashboard', { replace: true });
    } catch {
      setError('Unable to sign in. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40 px-5 py-28">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold text-slatey-900">
            Candela<span className="text-brand-600"> Energy</span>
            <span className="ml-1 text-[11px] font-semibold text-slatey-400">
              Nigeria Ltd.
            </span>
          </span>
        </Link>

        <div className="rounded-2xl border border-slatey-100 bg-white p-8 shadow-soft">
          <h1 className="font-display text-2xl font-bold tracking-tight text-slatey-900">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-slatey-500">
            Sign in to your Candela client account.
          </p>

          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            <div>
              <label className="text-sm font-semibold text-slatey-800">
                Email address
              </label>
              <div className="relative mt-2">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slatey-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slatey-200 bg-white py-3 pl-11 pr-4 text-sm text-slatey-900 outline-none transition-all placeholder:text-slatey-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-slatey-800">
                Password
              </label>
              <div className="relative mt-2">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slatey-400" />
                <input
                  type={showPw ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slatey-200 bg-white py-3 pl-11 pr-11 text-sm text-slatey-900 outline-none transition-all placeholder:text-slatey-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slatey-400 transition-colors hover:text-slatey-600"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slatey-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slatey-300 text-brand-600 focus:ring-brand-500"
                />
                Remember me
              </label>
              <a href="#" className="font-semibold text-brand-700 hover:text-brand-800">
                Forgot password?
              </a>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-brand-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slatey-500">
            New to Candela?{' '}
            <Link to="/#contact" className="font-semibold text-brand-700 hover:text-brand-800">
              Get a quote
            </Link>
          </p>
          <p className="mt-4 rounded-lg bg-slatey-50 px-3 py-2 text-center text-[11px] text-slatey-500">
            Demo mode — any email and password will sign you in.
          </p>
        </div>
      </div>
    </section>
  );
}
