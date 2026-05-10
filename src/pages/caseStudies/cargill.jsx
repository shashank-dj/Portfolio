import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  CheckCircle2,
  Globe,
  Rocket,
  Database,
} from 'lucide-react';

function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({ number, title, children }) {
  return (
    <Rev>
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-zinc-700 border border-zinc-800 rounded px-2 py-0.5">
            {String(number).padStart(2, '0')}
          </span>

          <h2 className="font-syne text-xl font-bold text-zinc-100">
            {title}
          </h2>

          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {children}
      </section>
    </Rev>
  );
}

const KPI_METRICS = [
  {
    metric: '500+ Student Registrations',
    type: 'Primary',
    why: 'Measures Gen Z talent attraction effectiveness',
    icon: Users,
    color: 'text-green-400',
  },
  {
    metric: '100+ Solution Submissions',
    type: 'Primary',
    why: 'Tracks innovation participation and engagement',
    icon: Rocket,
    color: 'text-cyan-DEFAULT',
  },
  {
    metric: 'Dataset Downloads & API Calls',
    type: 'Secondary',
    why: 'Indicates active product usage and experimentation',
    icon: Database,
    color: 'text-violet-DEFAULT',
  },
  {
    metric: 'University NPS Score',
    type: 'Guardrail',
    why: 'Ensures positive student and faculty experience',
    icon: TrendingUp,
    color: 'text-amber-DEFAULT',
  },
];

export default function CargillCaseStudy() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">

          {/* Back */}
          <Rev>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm font-jakarta mb-10 transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Case Studies
            </Link>
          </Rev>

          {/* Hero */}
          <Rev>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="section-label border-green-400/25 bg-green-400/8 text-green-400">
                  Cargill · Strategy & Product Innovation
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  2025
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  Business Strategy Group Project
                </span>
              </div>

              <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 leading-tight mb-5">
                Building <span className="text-green-400">AgLab</span> —
                A Gen Z Innovation Platform for FarmTech
              </h1>

              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                Designed a digital innovation ecosystem helping Cargill attract
                young AI and agri-tech talent by turning real sustainability
                datasets into hands-on student innovation challenges.
              </p>
            </div>
          </Rev>

          {/* Stats */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                {
                  v: '500+',
                  l: 'Target student registrations',
                  color: 'text-green-400',
                },
                {
                  v: '100+',
                  l: 'Innovation submissions',
                  color: 'text-cyan-DEFAULT',
                },
                {
                  v: '10+',
                  l: 'University partnerships',
                  color: 'text-violet-DEFAULT',
                },
                {
                  v: '80%',
                  l: 'AI adoption opportunity',
                  color: 'text-amber-DEFAULT',
                },
              ].map(({ v, l, color }) => (
                <div key={l} className="glass grad-border p-5 text-center">
                  <div
                    className={`font-syne text-3xl font-extrabold ${color} mb-1`}
                  >
                    {v}
                  </div>

                  <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Rev>

          {/* Cover */}
          <Rev>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] mb-14 h-64 md:h-80">
              <img
                src="/cargill.png"
                alt="Cargill AgLab"
                className="w-full h-full object-cover"
              />
            </div>
          </Rev>

          {/* Problem */}
          <Section number={1} title="Problem Statement">
            <div className="glass grad-border p-6 border-l-2 border-l-green-400/60">
              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Agriculture is rapidly evolving toward AI-powered and
                data-driven operations, but the industry faces a major talent
                crisis. Younger generations perceive agriculture as outdated,
                while tech companies compete aggressively for the same AI and
                software talent pool. Cargill needed a scalable strategy to
                attract Gen Z innovators into farm-tech and sustainability
                innovation.
              </p>
            </div>
          </Section>

          {/* Research */}
          <Section number={2} title="Market & Industry Research">
            <div className="grid md:grid-cols-2 gap-5">

              <div className="glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={14} className="text-green-400" />

                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                    Industry Signals
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {[
                    'Average farmer age in EU is 57 years',
                    'Only 20% of agribusinesses fully adopted AI',
                    'Massive digital talent gap in agriculture',
                    'Gen Z prefers tech-first mission-driven careers',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-zinc-400 text-sm font-jakarta"
                    >
                      <span className="text-green-400 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={14} className="text-green-400" />

                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                    Strategic Insights
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {[
                    'Cargill already owns valuable sustainability datasets',
                    'Students want real-world portfolio projects',
                    'AI + climate tech creates strong Gen Z appeal',
                    'Innovation competitions create employer branding advantage',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-zinc-400 text-sm font-jakarta"
                    >
                      <span className="text-green-400 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Porters */}
          <Section number={3} title="Porter’s Five Forces Analysis">
            <div className="grid md:grid-cols-2 gap-4">

              {[
                {
                  title: 'Threat of New Entrants',
                  desc:
                    'High infrastructure, operational scale, and data requirements create strong entry barriers. However, emerging agri-tech startups are innovating faster in AI-driven farming solutions.',
                },
                {
                  title: 'Bargaining Power of Suppliers',
                  desc:
                    'Agriculture depends heavily on fragmented farming communities. The shortage of digitally skilled young talent increases supplier-side pressure in innovation capability.',
                },
                {
                  title: 'Bargaining Power of Buyers',
                  desc:
                    'Large enterprise customers demand sustainability transparency, AI-enabled operations, and regulatory compliance — forcing continuous innovation.',
                },
                {
                  title: 'Threat of Substitutes',
                  desc:
                    'Alternative proteins, automation, and AI-based farming optimization tools are changing traditional agriculture value chains.',
                },
                {
                  title: 'Competitive Rivalry',
                  desc:
                    'Cargill competes with global agricultural giants like ADM, Bunge, Wilmar, and Louis Dreyfus Company while also competing with tech firms for digital talent.',
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="glass p-5 border border-white/[0.05] hover:border-green-400/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={14} className="text-green-400" />

                    <h4 className="font-syne text-sm font-semibold text-zinc-100">
                      {title}
                    </h4>
                  </div>

                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Opportunity */}
          <Section number={4} title="Strategic Opportunity">
            <div className="space-y-3">
              {[
                'Transform Cargill from a traditional agriculture company into a tech-first innovation brand.',
                'Use real sustainability datasets to create authentic student innovation experiences.',
                'Build a scalable talent pipeline instead of relying only on traditional recruitment.',
                'Position Cargill as the leading AI + sustainability employer in agri-tech.',
              ].map((insight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 glass p-4"
                >
                  <span className="font-mono text-xs text-zinc-700 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}.
                  </span>

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Solution */}
          <Section number={5} title="Solution — AgLab">
            <div className="grid md:grid-cols-3 gap-4">

              {[
                {
                  icon: Globe,
                  title: 'Explore',
                  desc:
                    'Students interact with real Cargill sustainability and agricultural datasets.',
                },
                {
                  icon: Target,
                  title: 'Simulate',
                  desc:
                    'Users test AI and operational models using real-world farm scenarios.',
                },
                {
                  icon: Lightbulb,
                  title: 'Build',
                  desc:
                    'Students prototype agri-tech innovations with mentorship and feedback.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass p-6 hover:bg-white/[0.04] transition-all"
                >
                  <div className="mb-4">
                    <Icon size={20} className="text-green-400" />
                  </div>

                  <h4 className="font-syne font-semibold text-zinc-200 mb-2">
                    {title}
                  </h4>

                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Implementation */}
          <Section number={6} title="Implementation Strategy">
            <div className="space-y-4">

              {[
                {
                  phase: 'Phase 1 · Strategy & Setup',
                  desc:
                    'Define challenge rules, clean datasets, establish APIs, and complete legal/IP approvals.',
                },
                {
                  phase: 'Phase 2 · University Partnerships',
                  desc:
                    'Partner with top universities, onboard faculty mentors, and launch the innovation platform.',
                },
                {
                  phase: 'Phase 3 · Launch & Scale',
                  desc:
                    'Run public innovation contests, host demo day, track KPIs, and scale winning solutions.',
                },
              ].map(({ phase, desc }) => (
                <div
                  key={phase}
                  className="glass p-5 border-l-2 border-l-green-400/40"
                >
                  <div className="font-syne text-zinc-100 mb-2">
                    {phase}
                  </div>

                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Impact */}
          <Section number={7} title="Expected Impact">
            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Creates a sustainable Gen Z talent pipeline for Cargill.',
                'Strengthens employer branding in AI + sustainability.',
                'Generates innovation prototypes using real-world farm data.',
                'Improves collaboration between academia and industry.',
              ].map((item) => (
                <div key={item} className="glass p-5 flex gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-green-400 mt-1 flex-shrink-0"
                  />

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Prototype */}
          <Section number={8} title="Interactive Prototype">
            <div className="glass grad-border p-7">
              <p className="text-zinc-400 font-jakarta leading-relaxed mb-5">
                Designed and developed an interactive prototype demonstrating
                how students explore agricultural datasets, participate in
                innovation challenges, and build sustainability-driven AI
                solutions within the AgLab ecosystem.
              </p>

              <a
                href="https://cargill-aglab.netlify.app/#/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-sm py-2.5 px-5"
              >
                View Interactive Prototype
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Section>

          {/* Metrics */}
          <Section number={9} title="Success Metrics">
            <div className="space-y-3">
              {KPI_METRICS.map(
                ({ metric, type, why, icon: Icon, color }) => (
                  <div
                    key={metric}
                    className="glass p-4 flex items-center gap-4 hover:bg-white/[0.04] transition-all"
                  >
                    <Icon
                      size={16}
                      className={`${color} flex-shrink-0`}
                    />

                    <div className="flex-1">
                      <div className="font-jakarta font-medium text-zinc-200 text-sm">
                        {metric}
                      </div>

                      <div className="font-jakarta text-zinc-600 text-xs">
                        {why}
                      </div>
                    </div>

                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                        type === 'Primary'
                          ? 'text-green-400 border-green-400/25 bg-green-400/10'
                          : type === 'Secondary'
                          ? 'text-cyan-DEFAULT border-cyan-DEFAULT/25 bg-cyan-DEFAULT/10'
                          : 'text-amber-DEFAULT border-amber-DEFAULT/25 bg-amber-DEFAULT/10'
                      }`}
                    >
                      {type}
                    </span>
                  </div>
                )
              )}
            </div>
          </Section>

          {/* Takeaways */}
          <Section number={10} title="Key Product Takeaways">
            <div className="glass grad-border p-7 bg-gradient-to-br from-green-400/5 to-transparent">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                "AgLab transforms recruitment into an innovation ecosystem —
                allowing Cargill to attract Gen Z talent through meaningful,
                hands-on sustainability and AI problem-solving experiences."
              </blockquote>
            </div>
          </Section>

          {/* CTA */}
          <Rev>
            <div className="mt-10 flex gap-4 flex-wrap">

              <Link
                to="/case-studies"
                className="btn-ghost text-sm py-2.5 px-5"
              >
                <ArrowLeft size={13} />
                Back to Case Studies
              </Link>

              <a
                href="https://linkedin.com/in/shashank-tk"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Let's discuss this work
                <ArrowUpRight size={13} />
              </a>

            </div>
          </Rev>

        </div>
      </div>
    </main>
  );
}