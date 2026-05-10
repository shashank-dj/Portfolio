import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Zap, ArrowUpRight } from 'lucide-react';

const NAV = [
  { to: '/about',        label: 'About'        },
  { to: '/experience',   label: 'Experience'   },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/ventures',     label: 'Ventures'     },
  { to: '/projects',     label: 'Projects'     },
  { to: '/research',     label: 'Research'     },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-surface/40">
      {/* Glow top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-violet-DEFAULT flex items-center justify-center">
                <Zap size={14} className="text-void fill-void" />
              </div>
              <span className="font-syne font-bold text-lg text-zinc-100">Shashank T K</span>
            </Link>
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed max-w-xs">
              AI Product Manager & Builder. Turning complex data into intelligent,
              sustainable systems that create real-world impact.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: 'https://linkedin.com/in/shashank-tk', Icon: Linkedin },
                { href: 'https://github.com/shashank-dj',      Icon: Github   },
                { href: 'mailto:shashank.tk@example.com',       Icon: Mail     },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-zinc-500 hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-zinc-500 hover:text-zinc-200 text-sm font-jakarta transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Currently */}
          <div>
            <h4 className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-5">Currently</h4>
            <div className="space-y-3">
              {[
                { label: 'MSc Sustainability Mgmt', sub: 'SDA Bocconi, Milan' },
                { label: 'HelloPM Fellowship',       sub: 'Cohort 50 — AI PM Track' },
                { label: 'Board ESG Intelligence',   sub: 'Building in Public' },
              ].map(({ label, sub }) => (
                <div key={label} className="border-l-2 border-cyan-DEFAULT/20 pl-3">
                  <div className="text-zinc-300 text-sm font-jakarta font-medium">{label}</div>
                  <div className="text-zinc-600 text-xs font-mono mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs font-mono">
            © {new Date().getFullYear()} Shashank T K — Built with React + Tailwind
          </p>
          <p className="text-zinc-700 text-xs font-mono">
            AI Product Builder · Industrial AI · Sustainability Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
