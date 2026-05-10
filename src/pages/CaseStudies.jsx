import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, TrendingUp, Lightbulb } from 'lucide-react';

function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const STUDIES = [
  {
    to:      '/case-studies/zomato',
    image:   '/zomato.png',
    company: 'Zomato',
    color:   'border-red-400/20 hover:border-red-400/40',
    accent:  'text-red-400',
    pill:    'text-red-400 bg-red-400/10 border-red-400/25',
    tag:     'Cart & Checkout UX',
    title:   'Reducing Cart Abandonment by Improving Price Transparency',
    summary: 'Improved Zomato\'s checkout conversion by addressing hidden fee friction through a data-driven pricing transparency solution — reducing cart abandonment and increasing average order value.',
    stats: [
      { icon: Users,      v: '30+',    l: 'Research data points' },
      { icon: TrendingUp, v: '62%',    l: 'Switch at checkout'   },
      { icon: Lightbulb,  v: '3 MVPs', l: 'Scoped & prioritized' },
    ],
    methods: ['User Research', 'RICE Framework', 'Prototyping', 'Metrics Definition'],
    year:    '2024',
  },
  {
    to: '/case-studies/cargill',
    image: '/cargill.png',
    company: 'Cargill',
    color: 'border-green-400/20 hover:border-green-400/40',
    accent: 'text-green-400',
    pill: 'text-green-400 bg-green-400/10 border-green-400/25',
    tag: 'AgriTech & Innovation Strategy',
    title: 'Building AgLab — Attracting Gen Z Talent into FarmTech',
    summary:
      'Designed a digital innovation ecosystem helping Cargill attract young AI and agri-tech talent through sustainability datasets, university partnerships, and innovation challenges.',
    stats: [
      { icon: Users, v: '500+', l: 'Student registrations' },
      { icon: TrendingUp, v: '100+', l: 'Innovation submissions' },
      { icon: Lightbulb, v: '10+', l: 'University partnerships' },
    ],
    methods: [
      'Market Research',
      'Strategy Design',
      'Platform Thinking',
      'Innovation Ecosystem',
    ],
    year: '2025',
  },
];

export default function CaseStudies() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">

          <Rev>
            <span className="section-label mb-4 inline-flex">Case Studies</span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-4">
              PM Work, <span className="grad-text">dissected.</span>
            </h1>
            <p className="text-zinc-500 font-jakarta max-w-xl mb-16">
              Deep-dives into real product problems — from user research through to prioritization, solution design, and success metrics.
            </p>
          </Rev>

          {/* Process legend */}
          <Rev delay={100}>
            <div className="flex flex-wrap gap-3 mb-12">
              {['Discovery', 'Research', 'Synthesis', 'Ideation', 'Prioritization', 'Solution', 'Metrics'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="tag">{i + 1}. {step}</span>
                  {i < 6 && <span className="text-zinc-700 text-xs">→</span>}
                </div>
              ))}
            </div>
          </Rev>

          {/* Case study cards */}
          <div className="grid gap-8">
            {STUDIES.map(({ to, image, company, color, accent, pill, tag, title, summary, stats, methods, year }, i) => (
              <Rev key={to} delay={i * 100}>
                <Link to={to}>
                  <div className={`glass grad-border overflow-hidden border ${color} hover:scale-[1.005] transition-all duration-300 group cursor-pointer`}>
                    <div className="grid md:grid-cols-[320px_1fr] gap-0">
                      {/* Image */}
                      <div className="h-52 md:h-auto overflow-hidden">
                        <img
                          src={image}
                          alt={company}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                          <span className={`font-mono text-xs px-3 py-1 rounded-full border ${pill}`}>{tag}</span>
                          <span className="font-mono text-xs text-zinc-700">{year}</span>
                        </div>

                        <h2 className={`font-syne text-xl font-bold text-zinc-100 mb-3 group-hover:${accent} transition-colors`}>
                          {title}
                        </h2>

                        <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">{summary}</p>

                        {/* Mini stats */}
                        <div className="flex gap-6 mb-5">
                          {stats.map(({ icon: Icon, v, l }) => (
                            <div key={l} className="flex items-center gap-2">
                              <Icon size={13} className={accent} />
                              <div>
                                <div className={`font-syne text-base font-bold ${accent}`}>{v}</div>
                                <div className="font-mono text-[9px] text-zinc-700">{l}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Methods */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {methods.map((m) => <span key={m} className="tag">{m}</span>)}
                        </div>

                        <div className={`flex items-center gap-1.5 ${accent} text-sm font-semibold font-jakarta group-hover:gap-3 transition-all`}>
                          Read Full Case Study <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Rev>
            ))}
          </div>

          {/* More coming */}
          <Rev delay={200}>
            <div className="mt-10 glass p-8 text-center border border-dashed border-white/10">
              <p className="font-mono text-xs text-zinc-700 uppercase tracking-widest mb-2">More Coming</p>
              <p className="text-zinc-500 font-jakarta text-sm">Additional case studies in progress — Board ESG Intelligence and Northstar Retail Intelligence.</p>
            </div>
          </Rev>

        </div>
      </div>
    </main>
  );
}
