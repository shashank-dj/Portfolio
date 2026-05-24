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
