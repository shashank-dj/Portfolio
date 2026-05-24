import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Truck,
  AlertTriangle,
  CheckCircle2,
  Database,
  Layers3,
  ShieldCheck,
  Target,
  BarChart3,
  Workflow,
  Bot,
  Zap,
  Globe2,
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
      <section className="mb-16">
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
    value: '30%',
    label: 'Support ticket reduction',
  },
  {
    value: '20%',
    label: 'Faster onboarding',
  },
  {
    value: '15%',
    label: 'Fewer shipment failures',
  },
  {
    value: '€1.2M',
    label: 'Estimated annual savings',
  },
];

const SOLUTIONS = [
  {
    icon: Bot,
    title: 'AI Delivery Copilot',
    desc:
      'Natural-language operational assistant for troubleshooting, onboarding, and incident resolution.',
  },
  {
    icon: Workflow,
    title: 'Exception Resolution Agent',
    desc:
      'Detects shipment anomalies, diagnoses causes, and recommends remediation actions.',
  },
  {
    icon: Truck,
    title: 'Carrier Onboarding AI',
    desc:
      'Accelerates carrier setup workflows using guided operational intelligence.',
  },
  {
    icon: Brain,
    title: 'Operational Intelligence Engine',
    desc:
      'Transforms shipment telemetry into predictive logistics insights.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Escalation Synthesizer',
    desc:
      'Automatically summarizes operational incidents and support escalations.',
  },
];

export default function nShift() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-3xl" />

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
            <div className="mb-16">

              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="section-label border-cyan-400/25 bg-cyan-400/8 text-cyan-400">
                  AI Product Strategy · Enterprise SaaS
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  2026
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  Logistics Intelligence Systems
                </span>
              </div>

              <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 leading-tight mb-6">
                nShift Copilot —
                <span className="text-cyan-DEFAULT">
                  {' '}AI-Native Operational Intelligence
                </span>{' '}
                for Logistics
              </h1>

              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                Transforming logistics operations from fragmented support workflows into proactive AI-native operational intelligence systems powered by shipment telemetry, carrier integrations, and decision automation.
              </p>
            </div>
          </Rev>

          {/* Metrics */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {METRICS.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass grad-border p-5 text-center"
                >
                  <div className="font-syne text-3xl font-extrabold text-cyan-DEFAULT mb-1">
                    {value}
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Rev>

          {/* Cover */}
          <Rev>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] mb-16 h-72 md:h-96 bg-gradient-to-br from-cyan-DEFAULT/10 via-transparent to-violet-DEFAULT/10 flex items-center justify-center">
              <div className="text-center px-8">
                <Globe2 size={54} className="mx-auto text-cyan-DEFAULT mb-5" />

                <h3 className="font-syne text-2xl text-zinc-100 font-bold mb-3">
                  Operational Intelligence Layer
                </h3>

                <p className="text-zinc-500 max-w-xl mx-auto">
                  AI-native orchestration across logistics infrastructure, carrier networks, operational telemetry, and support systems.
                </p>
              </div>
            </div>
          </Rev>

          {/* Company Context */}
          <Section number={1} title="Company Context">

            <div className="grid md:grid-cols-2 gap-5">

              {[
                '1000+ carrier integrations across global logistics ecosystems',
                'Delivery management and shipment orchestration platform',
                'Returns management and checkout optimization systems',
                'Enterprise SaaS infrastructure powering billion-scale shipments',
              ].map((item) => (
                <div
                  key={item}
                  className="glass p-5 border border-white/[0.05]"
                >
                  <div className="flex gap-3">
                    <Truck
                      size={16}
                      className="text-cyan-DEFAULT mt-1 flex-shrink-0"
                    />

                    <p className="text-zinc-400 text-sm font-jakarta leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </Section>

          {/* Problem */}
          <Section number={2} title="Problem Statement">

            <div className="glass grad-border p-7 border-l-2 border-l-cyan-DEFAULT/60">

              <p className="text-zinc-400 font-jakarta leading-relaxed text-lg">
                Logistics platforms still rely on fragmented operational workflows, manual support escalation, and configuration-heavy onboarding experiences — creating shipment failures, operational delays, and poor customer trust.
              </p>

            </div>

          </Section>

          {/* Insight */}
          <Section number={3} title="Core Product Insight">

            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-DEFAULT/5 to-transparent">

              <blockquote className="font-syne text-xl text-zinc-200 leading-relaxed italic">
                “The future winner in logistics AI will not be the company with the best model — but the company with the deepest operational feedback loops.”
              </blockquote>

            </div>

          </Section>

          {/* Pain Points */}
          <Section number={4} title="Operational Pain Points">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Support tickets remain slow and operationally expensive',
                'Carrier onboarding workflows are configuration-heavy',
                'Shipment failures require manual diagnosis',
                'Operational visibility is fragmented across systems',
                'Logistics teams rely heavily on reactive workflows',
                'Escalation lifecycles lack operational intelligence',
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

          {/* Review Analysis */}
          <Section number={5} title="Review Analysis">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                {
                  title: 'Support Delays',
                  severity: '5/5',
                },
                {
                  title: 'Setup Complexity',
                  severity: '4/5',
                },
                {
                  title: 'UI Friction',
                  severity: '4/5',
                },
                {
                  title: 'Automation Strength',
                  severity: 'Positive',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass p-5 hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">

                    <h4 className="font-syne text-zinc-100">
                      {item.title}
                    </h4>

                    <span className="font-mono text-xs text-cyan-DEFAULT">
                      {item.severity}
                    </span>

                  </div>

                  <div className="w-full h-2 rounded-full bg-white/[0.04] overflow-hidden">
                    <div className="h-full w-[80%] bg-cyan-DEFAULT rounded-full" />
                  </div>

                </div>
              ))}

            </div>

          </Section>

          {/* SWOT */}
          <Section number={6} title="SWOT Analysis">

            <div className="grid md:grid-cols-2 gap-5">

              {[
                'Strengths — Carrier integrations and operational scale',
                'Weaknesses — Heavy onboarding and support complexity',
                'Opportunities — AI-native operational intelligence',
                'Threats — Platform commoditization and feature parity',
              ].map((item) => (
                <div
                  key={item}
                  className="glass p-6 border border-white/[0.05]"
                >
                  <p className="text-zinc-400 font-jakarta leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </Section>

          {/* AI Opportunity */}
          <Section number={7} title="AI-Native Opportunity">

            <div className="glass grad-border p-7">

              <h3 className="font-syne text-2xl text-zinc-100 font-bold mb-4">
                From Delivery Platform to Operational Intelligence Layer
              </h3>

              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Instead of operating as a reactive shipment management platform, nShift can evolve into a proactive operational intelligence layer that continuously observes shipment telemetry, predicts operational failures, orchestrates remediation workflows, and creates compounding logistics intelligence through AI-native feedback loops.
              </p>

            </div>

          </Section>

          {/* Solutions */}
          <Section number={8} title="Solution Exploration">

            <div className="space-y-4">

              {SOLUTIONS.map(({ icon: Icon, title, desc }) => (

                <div
                  key={title}
                  className="glass p-5 hover:bg-white/[0.03] transition-all"
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

          {/* RICE */}
          <Section number={9} title="RICE Prioritization">

            <div className="glass overflow-hidden">

              <table className="w-full">

                <thead className="border-b border-white/[0.05]">
                  <tr className="text-left">
                    {[
                      'Solution',
                      'Reach',
                      'Impact',
                      'Confidence',
                      'Effort',
                    ].map((h) => (
                      <th
                        key={h}
                        className="p-4 font-mono text-xs uppercase tracking-widest text-zinc-600"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b border-white/[0.03] bg-cyan-DEFAULT/5">

                    <td className="p-4 text-cyan-DEFAULT font-medium">
                      AI Delivery Copilot
                    </td>

                    <td className="p-4 text-zinc-400">High</td>
                    <td className="p-4 text-zinc-400">High</td>
                    <td className="p-4 text-zinc-400">80%</td>
                    <td className="p-4 text-zinc-400">Medium</td>

                  </tr>

                  <tr>
                    <td className="p-4 text-zinc-500">
                      Exception Resolution Agent
                    </td>

                    <td className="p-4 text-zinc-500">Medium</td>
                    <td className="p-4 text-zinc-500">High</td>
                    <td className="p-4 text-zinc-500">70%</td>
                    <td className="p-4 text-zinc-500">High</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </Section>

          {/* Workflow */}
          <Section number={10} title="Workflow Architecture">

            <div className="grid md:grid-cols-6 gap-4">

              {[
                'Shipment Detection',
                'AI Diagnosis',
                'Root Cause',
                'Suggested Fix',
                'Human Approval',
                'Learning Loop',
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

                </div>

              ))}

            </div>

          </Section>

          {/* PRD */}
          <Section number={11} title="PRD Overview">

            <div className="grid md:grid-cols-2 gap-5">

              {[
                'Goals',
                'Users',
                'Features',
                'MVP Scope',
                'Risks',
                'Guardrails',
                'Success Metrics',
                'Launch Plan',
              ].map((item) => (

                <div
                  key={item}
                  className="glass p-6 hover:bg-white/[0.03] transition-all"
                >

                  <h4 className="font-syne text-zinc-100 mb-3">
                    {item}
                  </h4>

                  <p className="text-zinc-500 text-sm font-jakarta">
                    Enterprise-grade AI product specification and operational intelligence planning.
                  </p>

                </div>

              ))}

            </div>

          </Section>

          {/* Business Impact */}
          <Section number={12} title="Business Impact">

            <div className="grid md:grid-cols-2 gap-4">

              {[
                'Reduced operational support costs',
                'Accelerated merchant onboarding',
                'Improved shipment resolution efficiency',
                'Higher customer trust and retention',
              ].map((impact) => (

                <div
                  key={impact}
                  className="glass p-5 flex gap-3"
                >

                  <CheckCircle2
                    size={16}
                    className="text-green-400 mt-1 flex-shrink-0"
                  />

                  <p className="text-zinc-400 text-sm font-jakarta">
                    {impact}
                  </p>

                </div>

              ))}

            </div>

          </Section>

          {/* Competition */}
          <Section number={13} title="Competitive Positioning">

            <div className="glass grad-border p-7">

              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Compared against Shopify Shipping, EasyPost, Sendcloud, Metapack, project44, and Descartes, nShift’s competitive advantage lies in creating an AI-native operational intelligence moat powered by carrier telemetry, shipment workflows, and operational learning loops.
              </p>

            </div>

          </Section>

          {/* Systems Thinking */}
          <Section number={14} title="System Thinking">

            <div className="glass grad-border p-7">

              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                “The product is not just an assistant — it is an operational intelligence layer sitting above logistics infrastructure.”
              </blockquote>

              <div className="grid md:grid-cols-3 gap-4 mt-8">

                {[
                  'AI Reasoning',
                  'Operational Telemetry',
                  'Human Approval Systems',
                ].map((item) => (

                  <div
                    key={item}
                    className="glass p-5 text-center"
                  >

                    <p className="text-zinc-400 text-sm font-jakarta">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Section>

          {/* Takeaway */}
          <Section number={15} title="Final Product Takeaway">

            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-DEFAULT/5 to-transparent">

              <blockquote className="font-syne text-xl text-zinc-200 leading-relaxed italic">
                “AI-native enterprise products will not win by replacing workflows — but by orchestrating operational intelligence across fragmented systems.”
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

