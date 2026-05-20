import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Shield,
  Database,
  Workflow,
  Users,
  Target,
  CheckCircle2,
  Layers3,
  BarChart3,
  GitBranch,
  Cpu,
  Lock,
  Zap,
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
    metric: 'Merged Agent PRs / Developer / Week',
    type: 'North Star',
    why: 'Measures adoption, trust, and engineering throughput',
    icon: GitBranch,
    color: 'text-cyan-400',
  },
  {
    metric: 'First-Pass Merge Rate',
    type: 'Trust',
    why: 'Indicates reliability and reviewer confidence',
    icon: Shield,
    color: 'text-green-400',
  },
  {
    metric: 'Backlog Graveyard Tickets Cleared',
    type: 'Impact',
    why: 'Measures net-new engineering throughput',
    icon: Zap,
    color: 'text-violet-400',
  },
  {
    metric: 'Rollback Rate within 7 Days',
    type: 'Guardrail',
    why: 'Tracks production stability and hallucination risk',
    icon: Lock,
    color: 'text-amber-400',
  },
];

export default function JulesPM() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">

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
                  Google Jules · AI Product Strategy
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  2026
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  Senior PM Strategy Teardown
                </span>
              </div>

              <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 leading-tight mb-5">
                Jules — Building the{' '}
                <span className="text-cyan-400">
                  Engineering Operating System
                </span>
              </h1>

              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                A strategic teardown of Google’s autonomous coding agent —
                analyzing async engineering workflows, enterprise AI adoption,
                trust systems, multi-agent orchestration, and the future of
                AI-native software engineering.
              </p>
            </div>
          </Rev>

          {/* Stats */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                {
                  v: '3',
                  l: 'AI coding market waves',
                  color: 'text-cyan-400',
                },
                {
                  v: '10x',
                  l: 'Productivity opportunity',
                  color: 'text-green-400',
                },
                {
                  v: '$5M',
                  l: 'Enterprise contract potential',
                  color: 'text-violet-400',
                },
                {
                  v: '5 yrs',
                  l: 'AI-native engineering shift',
                  color: 'text-amber-400',
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
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] mb-14 h-64 md:h-80 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 flex items-center justify-center">

              <div className="text-center px-6">
                <Cpu
                  size={60}
                  className="mx-auto text-cyan-400 mb-5"
                />

                <h2 className="font-syne text-3xl font-bold text-zinc-100 mb-3">
                  Autonomous Engineering Agents
                </h2>

                <p className="text-zinc-500 font-jakarta max-w-xl">
                  From copilots to delegated engineering systems
                </p>
              </div>

            </div>
          </Rev>

          {/* Executive Thesis */}
          <Section number={1} title="Executive Thesis">

            <div className="glass grad-border p-6 border-l-2 border-l-cyan-400/60">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic mb-5">
                “The model is not the moat. The durable advantage is the trust
                layer — memory, evaluation, governance, and orchestration.”
              </blockquote>

              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Jules represents the transition from AI-assisted coding to
                delegated engineering execution. Unlike inline copilots, Jules
                operates asynchronously — accepting engineering tasks, planning
                solutions, editing repositories, running tests, and returning
                production-ready pull requests. The real strategic opportunity
                is not autocomplete, but removing engineers from low-leverage
                repetitive work.
              </p>
            </div>

          </Section>

          {/* Market Context */}
          <Section number={2} title="AI Coding Market Evolution">

            <div className="grid md:grid-cols-3 gap-4">

              {[
                {
                  title: 'Wave 1 — Inline Copilots',
                  desc:
                    'Autocomplete-first experiences focused on lines and functions.',
                  icon: Brain,
                },
                {
                  title: 'Wave 2 — AI-Native IDEs',
                  desc:
                    'Editors rebuilt around AI-assisted multi-file workflows.',
                  icon: Layers3,
                },
                {
                  title: 'Wave 3 — Autonomous Agents',
                  desc:
                    'Async engineering systems capable of delegated execution.',
                  icon: Workflow,
                },
              ].map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="glass p-6 hover:bg-white/[0.04] transition-all"
                >
                  <div className="mb-4">
                    <Icon size={20} className="text-cyan-400" />
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

          {/* Core Problem */}
          <Section number={3} title="Core Problem Statement">

            <div className="space-y-4">

              {[
                'Context switching destroys engineering focus and productivity.',
                'Low-leverage SDLC tasks consume senior engineering bandwidth.',
                'Backlogs accumulate repetitive tickets that never get prioritized.',
                'Codebase tribal knowledge disappears when teams change.',
                'Enterprise engineering workflows remain operationally fragmented.',
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass p-4 flex gap-3"
                >
                  <span className="font-mono text-xs text-zinc-700 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </Section>

          {/* Personas */}
          <Section number={4} title="Key User Personas">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                {
                  role: 'Senior Engineer',
                  value:
                    'Delegates repetitive tier-2 engineering work and preserves focus for architecture.',
                },
                {
                  role: 'Engineering Manager',
                  value:
                    'Improves predictable velocity, governance, and operational throughput.',
                },
                {
                  role: 'Startup CTO',
                  value:
                    'Ships faster with lean engineering teams and reduced hiring pressure.',
                },
                {
                  role: 'Technical PM',
                  value:
                    'Transforms product requirements into executable engineering workflows.',
                },
              ].map(({ role, value }) => (
                <div
                  key={role}
                  className="glass p-5 border border-white/[0.05]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={15} className="text-cyan-400" />

                    <h4 className="font-syne text-sm font-semibold text-zinc-100">
                      {role}
                    </h4>
                  </div>

                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}

            </div>

          </Section>

          {/* Strategic Improvements */}
          <Section number={5} title="Strategic Product Improvements">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                {
                  title: 'Trust & Explainability',
                  desc:
                    'Intent traces, confidence scoring, reviewer visibility, and auditability.',
                  icon: Shield,
                },
                {
                  title: 'Persistent Memory',
                  desc:
                    'Codebase-grounded memory enabling compounding engineering intelligence.',
                  icon: Database,
                },
                {
                  title: 'Enterprise Governance',
                  desc:
                    'Policy engines, audit logs, BYOK, and enterprise access controls.',
                  icon: Lock,
                },
                {
                  title: 'Multi-Agent Orchestration',
                  desc:
                    'Planner agents coordinating backend, frontend, testing, and documentation.',
                  icon: Workflow,
                },
              ].map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="glass p-5 hover:border-cyan-400/20 border border-white/[0.05] transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} className="text-cyan-400" />

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

          {/* Competitive Analysis */}
          <Section number={6} title="Competitive Landscape">

            <div className="space-y-4">

              {[
                {
                  company: 'GitHub Copilot',
                  insight:
                    'Strong GitHub distribution but architecturally constrained by IDE-first workflows.',
                },
                {
                  company: 'Cursor',
                  insight:
                    'Excellent synchronous AI-native IDE experience but weaker async delegation model.',
                },
                {
                  company: 'Devin',
                  insight:
                    'Strong autonomous narrative but enterprise trust and reliability gaps remain.',
                },
                {
                  company: 'Claude Code',
                  insight:
                    'Best-in-class developer trust but lacks managed enterprise orchestration.',
                },
              ].map(({ company, insight }) => (
                <div
                  key={company}
                  className="glass p-5 border-l-2 border-l-cyan-400/30"
                >
                  <div className="font-syne text-zinc-100 mb-2">
                    {company}
                  </div>

                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                    {insight}
                  </p>
                </div>
              ))}

            </div>

          </Section>

          {/* Risks */}
          <Section number={7} title="Product Risks & Constraints">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Hallucinated correctness despite passing tests.',
                'Prompt injection through repository contents.',
                'Inference economics at enterprise scale.',
                'Over-automation reducing human review rigor.',
                'Enterprise security and compliance blockers.',
                'Trust collapse from high-profile failures.',
              ].map((item) => (
                <div key={item} className="glass p-5 flex gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 mt-1 flex-shrink-0"
                  />

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </Section>

          {/* Roadmap */}
          <Section number={8} title="Strategic Product Roadmap">

            <div className="space-y-4">

              {[
                {
                  phase: '0–6 Months · Trust Foundation',
                  desc:
                    'Intent traces, governance v1, eval systems, security hardening, confidence scoring.',
                },
                {
                  phase: '6–18 Months · Compounding Intelligence',
                  desc:
                    'Persistent memory, reviewer-first UX, multi-agent orchestration, outcome pricing.',
                },
                {
                  phase: '18–36 Months · Engineering Operating System',
                  desc:
                    'Cross-SDLC orchestration, incident response agents, marketplace ecosystem, SDK.',
                },
              ].map(({ phase, desc }) => (
                <div
                  key={phase}
                  className="glass p-5 border-l-2 border-l-cyan-400/40"
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
                        type === 'North Star'
                          ? 'text-cyan-400 border-cyan-400/25 bg-cyan-400/10'
                          : type === 'Trust'
                          ? 'text-green-400 border-green-400/25 bg-green-400/10'
                          : type === 'Impact'
                          ? 'text-violet-400 border-violet-400/25 bg-violet-400/10'
                          : 'text-amber-400 border-amber-400/25 bg-amber-400/10'
                      }`}
                    >
                      {type}
                    </span>
                  </div>
                )
              )}

            </div>

          </Section>

          {/* Conclusion */}
          <Section number={10} title="Strategic Conclusion">

            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-400/5 to-transparent">

              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic mb-5">
                “The future of engineering is not writing code — it is
                specifying, reviewing, and orchestrating autonomous systems that
                write code.”
              </blockquote>

              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Jules has the potential to evolve beyond an AI coding assistant
                into a full engineering operating system. The long-term winner
                in AI-native development will not be determined by model quality
                alone, but by trust infrastructure, governance, orchestration,
                persistent memory, and enterprise workflow integration.
              </p>

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
                href="https://jules.google/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Explore Jules
                <ArrowUpRight size={13} />
              </a>

            </div>
          </Rev>

        </div>
      </div>
    </main>
  );
}
