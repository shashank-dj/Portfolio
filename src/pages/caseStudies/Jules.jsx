<<<<<<< HEAD
import React from "react";
import {
  ArrowUpRight,
  Brain,
  ShieldCheck,
  GitPullRequest,
  Target,
  Layers,
  CheckCircle2,
} from "lucide-react";

const Section = ({ title, children }) => (
  <section className="mb-20">
    <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
    <div className="text-zinc-300 leading-8 text-lg">{children}</div>
  </section>
);

const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-all">
    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-5">
      <Icon className="text-white" size={22} />
    </div>

    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

    <p className="text-zinc-400 leading-7">{description}</p>
  </div>
);

const Metric = ({ value, label }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <h3 className="text-4xl font-bold text-white mb-2">{value}</h3>
    <p className="text-zinc-400">{label}</p>
  </div>
);

export default function JulesCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      {/* HERO */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Product Strategy • AI Engineering • PM Case Study
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Jules — Building the
            <span className="text-zinc-400"> Engineering Operating System</span>
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-4xl leading-9">
            A senior product management teardown on Google’s autonomous coding
            agent — focused on trust, explainability, governance, and the
            future of AI-native software development workflows.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://jules-prototype.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition-all"
            >
              View Prototype <ArrowUpRight size={18} />
            </a>


          </div>
        </div>

        {/* OVERVIEW */}
        <Section title="Overview">
          <p className="mb-6">
            This case study explores how autonomous coding agents are shifting
            software engineering from “writing code” toward “reviewing,
            governing, and orchestrating code.”
          </p>

          <p className="mb-6">
            I analyzed Jules through multiple PM frameworks including JTBD,
            RICE, SWOT, and Kano to evaluate where the next competitive moat in
            AI-assisted development will emerge.
          </p>

          <p>
            The core thesis: model quality will commoditize. The real moat will
            be built through trust infrastructure — explainability, memory,
            evaluation systems, governance, and orchestration.
          </p>
        </Section>

        {/* PROBLEM */}
        <Section title="Problem Statement">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-5">
                Existing Problem
              </h3>

              <p className="text-zinc-400 leading-8">
                AI coding agents generate code quickly, but engineering teams
                struggle to trust the generated pull requests because reasoning,
                assumptions, and confidence signals remain opaque.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-5">Opportunity</h3>

              <p className="text-zinc-400 leading-8">
                Create an explainability and trust layer for AI-generated code
                changes that enables engineering teams to confidently review,
                approve, and scale AI-assisted development workflows.
              </p>
            </div>
          </div>
        </Section>

        {/* KEY INSIGHTS */}
        <Section title="Key Strategic Insights">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card
              icon={Brain}
              title="Trust > Model Quality"
              description="Frontier coding models will converge. Durable advantage comes from explainability, governance, and workflow integration."
            />

            <Card
              icon={GitPullRequest}
              title="Async Engineering"
              description="The future of coding agents is delegated async work — not inline autocomplete."
            />

            <Card
              icon={ShieldCheck}
              title="Enterprise Readiness"
              description="Governance, auditability, and security determine enterprise-scale adoption."
            />

            <Card
              icon={Layers}
              title="Memory as a Moat"
              description="Persistent, codebase-grounded memory compounds agent performance over time."
            />
          </div>
        </Section>

        {/* P0 MVP */}
        <Section title="P0 MVP — Intent Trace & Trust Layer">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                MVP Functionality
              </h3>

              <div className="space-y-5">
                {[
                  "Intent trace panel showing reasoning flow",
                  "Per-hunk confidence scoring",
                  "Assumption tracking and reviewer override",
                  "Test explainability and coverage insights",
                  "Reviewer-friendly PR workflow",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 text-zinc-400" size={20} />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Why This Matters
              </h3>

              <p className="text-zinc-400 leading-8 mb-6">
                AI-generated pull requests currently create reviewer friction
                because engineers must manually validate reasoning across entire
                codebases.
              </p>

              <p className="text-zinc-400 leading-8">
                This MVP transforms opaque AI outputs into transparent,
                auditable engineering workflows optimized for enterprise trust.
              </p>
            </div>
          </div>
        </Section>

        {/* METRICS */}
        <Section title="Success Metrics">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Metric value="60%+" label="First-pass PR merge rate" />

            <Metric value="≤8 min" label="Average PR review time" />

            <Metric value="40%+" label="Intent trace interaction rate" />

            <Metric value="10 pts" label="Reviewer trust gap vs human PRs" />
          </div>
        </Section>

        {/* FRAMEWORKS */}
        <Section title="PM Frameworks Applied">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">JTBD</h3>

              <p className="text-zinc-400 leading-8">
                Evaluated why developers would “hire” Jules versus Copilot,
                Cursor, Devin, and Claude Code.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">RICE</h3>

              <p className="text-zinc-400 leading-8">
                Prioritized roadmap investments across trust, governance,
                evaluation systems, and memory.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">SWOT</h3>

              <p className="text-zinc-400 leading-8">
                Compared Jules against GitHub Copilot, Devin, Cursor, Windsurf,
                and Claude Code.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Kano</h3>

              <p className="text-zinc-400 leading-8">
                Distinguished table-stakes functionality from trust-building
                delighters in agent UX.
              </p>
            </div>
          </div>
        </Section>

        {/* ROADMAP */}
        <Section title="Strategic Roadmap">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={20} />
                <h3 className="text-2xl font-semibold">
                  0–6 Months — Trust Foundation
                </h3>
              </div>

              <p className="text-zinc-400 leading-8">
                Intent traces, evaluation systems, governance primitives,
                confidence scoring, and auditability.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={20} />
                <h3 className="text-2xl font-semibold">
                  6–18 Months — Compounding Intelligence
                </h3>
              </div>

              <p className="text-zinc-400 leading-8">
                Persistent memory systems, multi-agent orchestration, reviewer
                UX improvements, and outcome-based pricing.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={20} />
                <h3 className="text-2xl font-semibold">
                  18–36 Months — Engineering OS
                </h3>
              </div>

              <p className="text-zinc-400 leading-8">
                Expand from coding workflows into incident response,
                postmortems, capacity planning, and organization-wide AI-native
                engineering operations.
              </p>
            </div>
          </div>
        </Section>

        {/* FINAL TAKEAWAY */}
        <Section title="Final Takeaway">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px] p-10">
            <p className="text-2xl leading-[48px] text-zinc-200">
              “The future competitive moat in AI engineering will not be model
              quality — it will be trust, governance, memory, and orchestration.
              The companies that own the issue → PR workflow will define the
              next generation of software development.”
            </p>

            <div className="mt-8 text-zinc-500">
              — Shashank TK • Product Strategy Case Study
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <div className="border-t border-zinc-900 pt-10 mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Jules PM Strategy Teardown
            </h3>

            <p className="text-zinc-500">
              Product Management • AI Systems • Enterprise Trust Infrastructure
            </p>
          </div>

          <a
            href="https://jules-prototype.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-all"
          >
            Open Prototype <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
=======
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
>>>>>>> 6de19c31aec7abb05211f6bba7d163371afc7c36
