import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Brain,
  Target,
  Layers3,
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
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

const METRICS = [
  {
    metric: 'Time spent synthesizing feedback',
    type: 'Primary',
    why: 'Measures reduction in manual PM analysis effort',
    icon: TrendingUp,
    color: 'text-green-400',
  },
  {
    metric: 'Opportunity discovery speed',
    type: 'Primary',
    why: 'Tracks faster identification of recurring pain points',
    icon: Brain,
    color: 'text-cyan-DEFAULT',
  },
  {
    metric: 'Evidence coverage accuracy',
    type: 'Secondary',
    why: 'Ensures insights represent actual customer patterns',
    icon: Database,
    color: 'text-violet-DEFAULT',
  },
  {
    metric: 'Recommendation trust score',
    type: 'Guardrail',
    why: 'Measures PM confidence in AI-generated outputs',
    icon: AlertTriangle,
    color: 'text-amber-DEFAULT',
  },
];

export default function CursorPMCaseStudy() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

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
                <span className="section-label border-cyan-400/25 bg-cyan-400/8 text-cyan-400">
                  Cursor PM · AI Product Infrastructure
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  2026
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  HelloPM Fellowship
                </span>
              </div>

              <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 leading-tight mb-5">
                Designing the <span className="text-cyan-DEFAULT">Evidence Upload Pipeline</span> for Cursor PM
              </h1>

              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                Built an AI-native evidence ingestion workflow that transforms scattered customer feedback into structured product intelligence — enabling PMs to discover high-impact opportunities faster.
              </p>
            </div>
          </Rev>

          {/* Stats */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                {
                  v: '4',
                  l: 'Input file formats',
                  color: 'text-cyan-DEFAULT',
                },
                {
                  v: 'AI',
                  l: 'Clustering engine',
                  color: 'text-violet-DEFAULT',
                },
                {
                  v: '01–03',
                  l: 'Decision workflow stages',
                  color: 'text-green-400',
                },
                {
                  v: 'P0',
                  l: 'MVP feature focus',
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
                src="/cursorpm.png"
                alt="Cursor PM"
                className="w-full h-full object-cover"
              />
            </div>
          </Rev>

          {/* Problem */}
          <Section number={1} title="Problem Statement">
            <div className="glass grad-border p-6 border-l-2 border-l-cyan-DEFAULT/60">
              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Product teams collect massive amounts of customer evidence across support tickets, interviews, analytics dashboards, churn feedback, and Slack conversations. However, PMs still manually synthesize this information using spreadsheets, subjective prioritization, and fragmented workflows — slowing down roadmap decisions and increasing bias in what gets built next.
              </p>
            </div>
          </Section>

          {/* Insight */}
          <Section number={2} title="The P0 Insight">
            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-DEFAULT/5 to-transparent">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                "Most PM tools help teams write PRDs faster. None help teams decide better before the PRD exists."
              </blockquote>
            </div>
          </Section>

          {/* User pain */}
          <Section number={3} title="User Pain Points">
            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Customer feedback scattered across disconnected tools',
                'Manual synthesis of recurring pain points',
                'Roadmap prioritization driven by stakeholder opinions',
                'Weak traceability between evidence and decisions',
                'Time-consuming PRD preparation workflows',
                'No unified opportunity discovery layer',
              ].map((pain) => (
                <div
                  key={pain}
                  className="glass p-5 border border-white/[0.05]"
                >
                  <div className="flex gap-3">
                    <AlertTriangle
                      size={16}
                      className="text-amber-DEFAULT mt-1 flex-shrink-0"
                    />

                    <p className="text-zinc-400 text-sm font-jakarta leading-relaxed">
                      {pain}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Solution */}
          <Section number={4} title="Solution — Evidence Upload Pipeline">
            <div className="space-y-4">

              {[
                {
                  icon: Database,
                  title: 'Upload & Connect Sources',
                  desc:
                    'Users upload PDFs, CSVs, JSON files, interview transcripts, analytics summaries, support exports, and churn feedback into a unified evidence layer.',
                },
                {
                  icon: Layers3,
                  title: 'AI Clustering Engine',
                  desc:
                    'The system groups recurring complaints, feature requests, and pain points into structured insight clusters with supporting evidence.',
                },
                {
                  icon: FileSearch,
                  title: 'Opportunity Discovery',
                  desc:
                    'AI surfaces ranked product opportunities with customer impact, frequency scoring, business value, and confidence metrics.',
                },
                {
                  icon: Brain,
                  title: 'Recommendation Generation',
                  desc:
                    'Cursor PM generates defensible feature recommendations and downstream PRD workflows backed by explainable reasoning.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass p-5 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-cyan-DEFAULT" />
                    </div>

                    <div>
                      <h4 className="font-syne text-zinc-100 font-semibold mb-2">
                        {title}
                      </h4>

                      <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Design thinking */}
          <Section number={5} title="Product Thinking Behind the Feature">
            <div className="space-y-3">

              {[
                'The upload flow was intentionally designed to feel lightweight and low-friction for busy PMs.',
                'The system focuses on explainability — every recommendation traces back to evidence.',
                'The workflow goes upstream of PRD writing, solving the decision-making layer first.',
                'The feature was scoped as a P0 MVP focused only on evidence ingestion and opportunity discovery.',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 glass p-4"
                >
                  <span className="font-mono text-xs text-zinc-700 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}.
                  </span>

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Workflow */}
          <Section number={6} title="Workflow Architecture">
            <div className="grid md:grid-cols-4 gap-4">

              {[
                'Evidence Upload',
                'AI Clustering',
                'Opportunity Ranking',
                'Recommendation Output',
              ].map((step, i) => (
                <div
                  key={step}
                  className="glass p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-syne text-cyan-DEFAULT font-bold">
                      {i + 1}
                    </span>
                  </div>

                  <h4 className="font-syne text-zinc-100 text-sm mb-2">
                    {step}
                  </h4>

                  <p className="text-zinc-600 text-xs font-jakarta">
                    AI-powered decision intelligence workflow
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Impact */}
          <Section number={7} title="Expected Product Impact">
            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Reduces manual product analysis effort',
                'Accelerates opportunity discovery workflows',
                'Improves confidence in roadmap prioritization',
                'Creates traceable evidence-backed decisions',
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

          {/* Metrics */}
          <Section number={8} title="Success Metrics">
            <div className="space-y-3">
              {METRICS.map(
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

          {/* Prototype */}
          <Section number={9} title="Interactive Prototype">
            <div className="glass grad-border p-7">
              <p className="text-zinc-400 font-jakarta leading-relaxed mb-5">
                Built a prototype demonstrating how PMs upload scattered customer evidence and transform it into structured opportunity intelligence using AI-driven clustering and recommendation workflows.
              </p>

              <a
                href="https://cursorpm.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-sm py-2.5 px-5"
              >
                View Interactive Prototype
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Section>

          {/* Takeaway */}
          <Section number={10} title="Key Product Takeaway">
            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-DEFAULT/5 to-transparent">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                "The future of PM tooling isn't writing faster — it's helping teams decide what deserves to be built before execution even begins."
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