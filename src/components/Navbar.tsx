import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const links = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Savings Calculator', href: '/#calculator' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const onHome = location.pathname === '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !onHome
          ? 'bg-white/85 backdrop-blur-xl border-b border-slatey-100 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-slatey-900">
            Candela<span className="text-brand-600"> Energy</span>
            <span className="ml-1 hidden text-[11px] font-semibold text-slatey-400 sm:inline">
              Nigeria Ltd.
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slatey-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-slatey-700 transition-colors hover:text-brand-700"
          >
            Sign in
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-lg active:scale-95"
          >
            Get a quote
            <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slatey-800 transition-colors hover:bg-slatey-100 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px pb-6 pt-2">
          <div className="rounded-2xl border border-slatey-100 bg-white p-3 shadow-soft">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slatey-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slatey-100 pt-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slatey-200 px-4 py-2.5 text-center text-sm font-semibold text-slatey-700"
              >
                Sign in
              </Link>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
