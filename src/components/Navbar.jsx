import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useScrollY } from '../hooks/useReveal';

const links = [
  { to: '/',             label: 'Home'        },
  { to: '/about',        label: 'About'       },
  { to: '/experience',   label: 'Experience'  },
  { to: '/case-studies', label: 'Case Studies'},
  { to: '/ventures',     label: 'Ventures'    },
  { to: '/projects',     label: 'Projects'    },
  { to: '/research',     label: 'Research'    },
];

export default function Navbar() {
  const location = useLocation();
  const scrollY  = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 20;

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-void/80 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-violet-DEFAULT flex items-center justify-center animate-glow">
              <Zap size={14} className="text-void fill-void" />
            </div>
            <span className="font-syne font-bold text-lg tracking-tight text-zinc-100 group-hover:text-cyan-DEFAULT transition-colors">
              STK
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-3.5 py-2 rounded-lg font-jakarta text-sm transition-all duration-200 ${
                    active
                      ? 'text-cyan-DEFAULT'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-lg bg-cyan-DEFAULT/8 border border-cyan-DEFAULT/20" />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/shashank-tk"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-cyan-DEFAULT/10 hover:bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/25 hover:border-cyan-DEFAULT/40 text-cyan-DEFAULT text-sm font-medium rounded-lg transition-all duration-200 font-jakarta"
            >
              Let's talk
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface border-l border-white/[0.07] transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-xl font-jakarta text-base transition-all duration-200 ${
                    active
                      ? 'text-cyan-DEFAULT bg-cyan-DEFAULT/8 border border-cyan-DEFAULT/15'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="mailto:shashank.tk@example.com"
              className="mt-4 px-4 py-3 text-center bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/25 text-cyan-DEFAULT rounded-xl font-jakarta text-sm font-medium"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
