import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, TrendingUp, Lightbulb, Database, Brain, Target, DollarSign } from 'lucide-react';

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
  {
    to: '/case-studies/cursor-pm',
    image: '/cursorpm.png',
    company: 'Cursor PM',
    color: 'border-cyan-400/20 hover:border-cyan-400/40',
    accent: 'text-cyan-DEFAULT',
    pill: 'text-cyan-DEFAULT bg-cyan-DEFAULT/10 border-cyan-DEFAULT/25',
    tag: 'AI Product Infrastructure',
    title: 'Designing an AI Evidence Upload Pipeline for PM Decision-Making',
    summary:
      'Built an AI-native evidence ingestion workflow transforming scattered customer feedback into structured product intelligence for faster roadmap decisions.',
    stats: [
      { icon: Database, v: '4', l: 'Input formats' },
      { icon: Brain, v: 'AI', l: 'Clustering engine' },
      { icon: Target, v: 'P0', l: 'MVP feature' },
    ],
    methods: [
      'AI Workflow Design',
      'Product Strategy',
      'Opportunity Discovery',
      'Information Architecture',
    ],
    year: '2026',
  },
  {
    to: '/case-studies/Jules',
    image: '/jules.png',
    company: 'Google Jules',
    color: 'border-violet-400/20 hover:border-violet-400/40',
    accent: 'text-violet-400',
    pill: 'text-violet-400 bg-violet-400/10 border-violet-400/25',
    tag: 'AI Engineering & Trust Systems',
    title: 'Building the Trust Layer for Autonomous Coding Agents',
    summary:
      'A strategic PM teardown of Google Jules exploring explainability, governance, memory systems, and enterprise trust infrastructure for AI-generated pull requests and autonomous engineering workflows.',
    stats: [
      { icon: Brain, v: 'P0', l: 'Trust-layer MVP' },
      { icon: Target, v: '8 min', l: 'Target PR review time' },
      { icon: Database, v: '3', l: 'Memory layers proposed' },
    ],
    methods: [
      'JTBD',
      'RICE Prioritization',
      'Enterprise Strategy',
      'AI Product Design',
    ],
    year: '2026',
  },
  {
    to: '/case-studies/nShift',
    image: '/nShift.png',
    company: 'nShift',
    color: 'border-cyan-400/20 hover:border-cyan-400/40',
    accent: 'text-cyan-DEFAULT',
    pill: 'text-cyan-DEFAULT bg-cyan-DEFAULT/10 border-cyan-DEFAULT/25',
    tag: 'AI Logistics Intelligence',
    title: 'Building an AI-Native Operational Intelligence Layer for Logistics',
    summary:
      'Designed an AI-powered operational intelligence system for nShift that transforms fragmented logistics workflows into proactive shipment orchestration, exception handling, and AI-assisted operational decision-making.',
    stats: [
      { icon: TrendingUp, v: '30%', l: 'Support reduction' },
      { icon: Brain, v: 'AI', l: 'Operational copilot' },
      { icon: Target, v: '€1.2M', l: 'Projected savings' },
    ],
    methods: [
      'Enterprise Strategy',
      'Operational Intelligence',
      'RICE Prioritization',
      'AI Workflow Design',
    ],
    year: '2026',
  },
  {
    to: '/case-studies/fireflies',
    image: '/fireflies.jfif',
    company: 'Fireflies.ai',
    color: 'border-pink-400/20 hover:border-pink-400/40',
    accent: 'text-pink-400',
    pill: 'text-pink-400 bg-pink-400/10 border-pink-400/25',
    tag: 'AI Meeting Intelligence & Product Strategy',
    title: 'Solving Trust, Privacy & AI Monetization Challenges in Fireflies.ai',
    summary:
      'Conducted an end-to-end product UX research and strategic PM analysis of Fireflies.ai, identifying critical user trust breakdowns, pricing friction, transcription quality gaps, and roadmap opportunities across AI meeting intelligence workflows.',
    stats: [
      { icon: Users, v: '725+', l: 'Reviews analysed' },
      { icon: Brain, v: 'P0', l: 'Privacy crisis response' },
      { icon: TrendingUp, v: '20M+', l: 'Users impacted' },
    ],
    methods: [
      'UX Research',
      'RICE Prioritization',
      '5 Whys Analysis',
      'AI Product Strategy',
    ],
    year: '2026',
  },
  {
    to:      '/case-studies/amazon-seller-dashboard',
    image:   '/amazon.png',
    company: 'Amazon Seller Dashboard',
    color:   'border-amber-400/20 hover:border-amber-400/40',
    accent:  'text-amber-400',
    pill:    'text-amber-400 bg-amber-400/10 border-amber-400/25',
    tag:     'Product Analytics & Dashboard Design',
    title:   'Showing Sellers Why Sales Changed, Not Just That They Did',
    summary: 'Designed a seller dashboard built around one north-star metric — Contribution Margin per Unit — that explains the "why" behind every change instead of just reporting what happened, with an AI Assistant that turns every signal into a ranked, dollar-weighted to-do list.',
    stats: [
      { icon: DollarSign, v: '14',   l: 'Metrics tracked' },
      { icon: Brain,      v: 'AI',   l: 'Daily to-do assistant' },
      { icon: Target,     v: '9',    l: 'Dashboard sections' },
    ],
    methods: [
      'Product Analytics',
      'Metric Design',
      'JTBD',
      'Dashboard UX',
    ],
    year:    '2026',
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
