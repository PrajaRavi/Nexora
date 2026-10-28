
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowUpRight,
  ArrowUp,
  
} from "lucide-react";


import {footerLinks} from "../../../Data/Footer"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Nexora home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20">
                <Sparkles size={21} strokeWidth={2.2} />
              </span>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Nexora<span className="text-violet-600">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              We build thoughtful digital experiences, modern web products,
              and AI-powered solutions that help businesses move forward.
            </p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-800"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

           
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Explore</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 transition hover:text-violet-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">What We Do</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 transition hover:text-violet-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            © {currentYear} Nexora. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="text-xs text-slate-500 transition hover:text-violet-700"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-xs text-slate-500 transition hover:text-violet-700"
            >
              Terms of Service
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-700"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
