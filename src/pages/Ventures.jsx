import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, FileText, Users, Sparkles, MapPin, BarChart3 } from 'lucide-react';

function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const VENTURES = [
  {
    status:   'Early Validation',
    statusColor: 'text-amber-DEFAULT bg-amber-DEFAULT/10 border-amber-DEFAULT/25',
    icon:     BarChart3,
    iconColor:'text-violet-DEFAULT bg-violet-DEFAULT/10 border-violet-DEFAULT/25',
    grad:     'from-violet-DEFAULT/10 to-indigo-500/5',
    title:    'Board ESG Intelligence',
    role:     'Product Builder',
    tagline:  'Governance-focused ESG decision intelligence for Private Equity & Boards',
    desc:     'Board ESG Intelligence is a governance-focused ESG decision intelligence platform designed for Private Equity firms and Boards of Directors. The product creates a system of record for board-level ESG decisions, enabling defensible evidence for Limited Partner (LP) reviews, regulatory scrutiny, and exit due diligence.',
    capabilities: [
      'Board-level ESG decision tracking and audit trail',
      'LP review readiness scoring and reporting',
      'Regulatory risk assessment dashboard',
      'ESG maturity benchmarking against PE portfolio standards',
    ],
    lookingFor: [
      { title: 'ESG & Sustainability Professionals', desc: 'Experience in ESG strategy or reporting frameworks' },
      { title: 'Private Equity / Governance Professionals', desc: 'Familiar with LP expectations and board processes' },
      { title: 'Product-minded Engineers', desc: 'Interested in governance, sustainability, or enterprise software' },
    ],
    tags:  ['React', 'Tailwind', 'ESG Governance', 'Private Equity', 'Product Strategy'],
    links: [
      { label: 'Live Walkthrough', href: 'https://board-esg-intelligence.netlify.app', primary: true },
      { label: 'GitHub',          href: 'https://github.com/shashank-dj/board-esg-intelligence' },
      { label: 'Documentation',   href: 'https://docs.google.com/document/d/1QJofjPtpwGQ8jSHTaRk7pD1TKxxlYpQIq000gaJg3Qs/edit' },
    ],
  },
  {
    status:   'Live',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/25',
    icon:     MapPin,
    iconColor:'text-cyan-DEFAULT bg-cyan-DEFAULT/10 border-cyan-DEFAULT/25',
    grad:     'from-cyan-DEFAULT/10 to-blue-500/5',
    title:    'Northstar Retail Intelligence',
    role:     'AI Product Builder',
    tagline:  'Geospatial location intelligence for retail expansion decisions',
    desc:     'Northstar Retail Intelligence is a geospatial retail location intelligence platform designed to help businesses identify the best locations to open new stores. The system analyzes geographic and economic signals to estimate the commercial potential of a location using a proprietary scoring model.',
    capabilities: [
      'Geospatial retail site selection analysis',
      'Location scoring based on demand and competition signals',
      'Footfall and population-based demand estimation',
      'Household income and purchasing power analysis',
      'Retail activity and competition density evaluation',
      'Interactive dashboard for comparing potential store locations',
    ],
    lookingFor: [],
    tags:  ['React', 'Tailwind', 'Geospatial Analytics', 'Data Visualization', 'Product Strategy'],
    links: [
      { label: 'Live Dashboard', href: 'https://northstar-retail-intelligence.netlify.app/', primary: true },
      { label: 'GitHub',         href: 'https://github.com/shashank-dj/northstar-retail-intelligence' },
    ],
  },
];

export default function Ventures() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg opacity-60" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-DEFAULT/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">

          <Rev>
            <span className="section-label mb-4 inline-flex">
              <Sparkles size={11} /> Product Ventures
            </span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-4">
              Products I'm <span className="grad-text">building.</span>
            </h1>
            <p className="text-zinc-500 font-jakarta max-w-xl mb-16">
              Beyond employment — products I'm researching, designing, and shipping as an independent product builder.
            </p>
          </Rev>

          <div className="space-y-10">
            {VENTURES.map(({ status, statusColor, icon: Icon, iconColor, grad, title, role, tagline, desc, capabilities, lookingFor, tags, links }, i) => (
              <Rev key={title} delay={i * 120}>
                <div className={`glass grad-border overflow-hidden bg-gradient-to-br ${grad} hover:scale-[1.002] transition-all duration-300`}>
                  <div className="p-8 md:p-10">

                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${iconColor}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h2 className="font-syne text-2xl font-bold text-zinc-100">{title}</h2>
                          <div className="font-mono text-xs text-zinc-600 mt-0.5">{role}</div>
                        </div>
                      </div>
                      <span className={`font-mono text-xs px-3 py-1 rounded-full border ${statusColor}`}>{status}</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-zinc-300 font-jakarta font-medium text-lg mb-4 italic">{tagline}</p>
                    <p className="text-zinc-500 font-jakarta leading-relaxed mb-8">{desc}</p>

                    {/* Capabilities */}
                    <div className="mb-8">
                      <h3 className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-4">Core Capabilities</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-zinc-400 text-sm font-jakarta">
                            <span className="text-cyan-DEFAULT mt-1 flex-shrink-0">›</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Looking For */}
                    {lookingFor.length > 0 && (
                      <div className="mb-8 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-4">
                          <Users size={14} className="text-amber-DEFAULT" />
                          <h3 className="font-mono text-xs text-amber-DEFAULT uppercase tracking-widest">Looking for Collaborators</h3>
                        </div>
                        <div className="space-y-3">
                          {lookingFor.map(({ title: t, desc: d }) => (
                            <div key={t} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-DEFAULT flex-shrink-0 mt-1.5" />
                              <div>
                                <span className="text-zinc-300 text-sm font-jakarta font-medium">{t}</span>
                                <span className="text-zinc-600 text-sm font-jakarta"> — {d}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-zinc-600 text-xs font-mono mt-4">Focus: collaborative validation and refinement</p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.06]">
                      {links.map(({ label, href, primary }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className={primary ? 'btn-primary text-sm py-2.5 px-5' : 'btn-ghost text-sm py-2.5 px-5'}
                        >
                          {label}
                          <ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Rev>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
