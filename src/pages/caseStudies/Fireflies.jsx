import React from "react";

const Fireflies = () => {
  const executiveSummary = [
    {
      severity: "P0 — Critical",
      title: "Privacy & Consent Experience",
      description:
        "Customer feedback and public discussions highlighted concerns around meeting consent visibility, onboarding defaults, and enterprise trust expectations.",
      status: "Trust & Compliance Risk",
    },
    {
      severity: "P1 — High",
      title: "Opaque AI Credit Pricing",
      description:
        "AI credit consumption and monetization clarity created friction for power users and SMB teams.",
      status: "Revenue & Retention Risk",
    },
    {
      severity: "P1 — High",
      title: "Transcription Reliability Issues",
      description:
        "Accuracy degradation with accents, jargon, overlapping speakers, and noisy environments.",
      status: "Core Product Reliability Risk",
    },
    {
      severity: "P2 — Medium",
      title: "Limited Workflow Intelligence",
      description:
        "AI summaries lacked contextual understanding and meeting-type awareness across workflows.",
      status: "Differentiation Gap",
    },
  ];

  const painPoints = [
    {
      id: "P1",
      title: "Users unclear about meeting recording behavior",
      frequency: "High",
      severity: "5/5",
      persona: "Enterprise Admins, HR, Clients",
      impact: "Distrust, compliance concerns",
    },
    {
      id: "P2",
      title: "Hidden AI credit costs",
      frequency: "High",
      severity: "5/5",
      persona: "SMB Owners, Power Users",
      impact: "Financial frustration",
    },
    {
      id: "P3",
      title: "Transcription errors — accents & jargon",
      frequency: "High",
      severity: "4/5",
      persona: "Global Teams",
      impact: "Reduced confidence in outputs",
    },
    {
      id: "P4",
      title: "Privacy & consent transparency concerns",
      frequency: "High",
      severity: "5/5",
      persona: "Enterprise, Legal",
      impact: "Enterprise hesitation",
    },
    {
      id: "P5",
      title: "Generic low-depth AI summaries",
      frequency: "Medium",
      severity: "3/5",
      persona: "Sales Reps, PMs, Recruiters",
      impact: "Reduced workflow value",
    },
    {
      id: "P6",
      title: "Shallow CRM integrations",
      frequency: "Medium",
      severity: "3/5",
      persona: "Sales Teams",
      impact: "Workflow fragmentation",
    },
    {
      id: "P7",
      title: "Free plan monetization friction",
      frequency: "Medium",
      severity: "3/5",
      persona: "Students, Evaluators",
      impact: "Early abandonment",
    },
    {
      id: "P8",
      title: "Perceived slow product evolution",
      frequency: "Medium",
      severity: "2/5",
      persona: "Power Users",
      impact: "Competitive switching",
    },
  ];

  const riceScores = [
    {
      feature: "Transparent Pricing & Credit Dashboard",
      score: 171,
      priority: "P1 — Immediate",
    },
    {
      feature: "Consent & Recording Transparency UX",
      score: 135,
      priority: "P0 — Critical",
    },
    {
      feature: "Improved Free Plan Onboarding",
      score: 81,
      priority: "P1 — Next",
    },
    {
      feature: "Workflow-Aware Smart Summaries",
      score: 79,
      priority: "P1 — Next",
    },
    {
      feature: "Transcription Reliability Program",
      score: 64,
      priority: "P1 — Next",
    },
  ];

  const roadmap = [
    {
      phase: "NOW",
      title: "Consent-First Recording Controls",
      timeline: "Weeks 0–4",
      kpi:
        "Expected KPI Impact: Reduction in privacy-related support tickets",
    },
    {
      phase: "NOW",
      title: "Transparent Credit Dashboard",
      timeline: "Weeks 2–6",
      kpi:
        "Expected KPI Impact: Increased pricing transparency and upgrade confidence",
    },
    {
      phase: "NEXT",
      title: "Meeting-Type Smart Summaries",
      timeline: "Weeks 6–14",
      kpi:
        "Expected KPI Impact: Reduced manual transcript corrections",
    },
    {
      phase: "NEXT",
      title: "Transcription Quality Programme",
      timeline: "Weeks 8–20",
      kpi:
        "Expected KPI Impact: Improved transcription accuracy across accents and jargon",
    },
    {
      phase: "LATER",
      title: "Deep CRM Intelligence Layer",
      timeline: "Q3 2026",
      kpi:
        "Expected KPI Impact: Increased enterprise workflow adoption",
    },
    {
      phase: "LATER",
      title: "AskFred Intelligence Hub",
      timeline: "Q3–Q4 2026",
      kpi:
        "Expected KPI Impact: Increased AI workflow engagement",
    },
  ];

  const competitors = [
    {
      capability: "Transcription Accuracy",
      fireflies: "Strong",
      tldv: "Strong",
      gong: "Strong",
      otter: "Decent",
    },
    {
      capability: "Sales Coaching",
      fireflies: "Limited",
      tldv: "Yes",
      gong: "Best-in-class",
      otter: "Limited",
    },
    {
      capability: "Revenue Intelligence",
      fireflies: "Limited",
      tldv: "Partial",
      gong: "Best-in-class",
      otter: "Limited",
    },
    {
      capability: "Bot-Free Recording Options",
      fireflies: "Available",
      tldv: "Partial",
      gong: "Partial",
      otter: "Limited",
    },
  ];

  const getBadgeColor = (value) => {
    if (value.includes("P0") || value.includes("Critical"))
      return "bg-red-500/20 text-red-400 border border-red-500/20";

    if (value.includes("P1") || value.includes("High"))
      return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20";

    return "bg-blue-500/20 text-blue-400 border border-blue-500/20";
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">

      {/* HERO */}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="inline-block px-4 py-2 rounded-full border border-zinc-700 text-sm mb-6">
          AI Product Strategy Case Study
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Fireflies.ai <br />
          Product UX Research & Strategic Roadmap
        </h1>

        <p className="text-zinc-400 text-xl max-w-4xl leading-relaxed mb-10">
          End-to-end product strategy analysis covering customer pain points,
          trust and privacy concerns, monetization friction, workflow
          intelligence gaps, prioritization frameworks, and strategic roadmap
          recommendations for sustainable AI product growth.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          {[
            "AI Product Strategy",
            "Enterprise UX",
            "Workflow Intelligence",
            "Monetization Systems",
            "Platform Thinking",
            "Trust & Safety",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-3xl font-bold">20M+</h3>
            <p className="text-zinc-400 mt-2">Users</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-3xl font-bold">500K+</h3>
            <p className="text-zinc-400 mt-2">Organizations</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-3xl font-bold">725+</h3>
            <p className="text-zinc-400 mt-2">Reviews Analysed</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-3xl font-bold">$1B+</h3>
            <p className="text-zinc-400 mt-2">Unicorn Valuation</p>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-400/20 bg-orange-400/5 text-orange-400 text-sm mb-6">
              AI Meeting Intelligence Platform
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Understanding Fireflies.ai Before Diagnosing the Problems
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Fireflies.ai has achieved strong product-market fit in the SMB
                and mid-market meeting-intelligence space, emerging as one of
                the leading AI-native platforms for automated meeting
                transcription, summaries, collaboration, and conversational
                search.
              </p>

              <p>
                With a <span className="text-white font-semibold">4.8/5 G2 rating</span>
                across <span className="text-white font-semibold">725+ reviews</span>,
                <span className="text-white font-semibold">20M+ users</span>,
                and adoption across
                <span className="text-white font-semibold">500K+ organisations</span>,
                the platform established itself as a category leader.
              </p>

              <p>
                Its rapid growth was driven by frictionless onboarding,
                automated note-taking, searchable meeting archives,
                AI-generated summaries, configurable bot workflows,
                and integrations across Zoom, Google Meet, Slack,
                Notion, CRM systems, and productivity workflows.
              </p>

              <p>
                The platform also supports multiple recording workflows,
                including configurable auto-join controls, participant
                notifications, and bot-free recording experiences across
                desktop, browser, and mobile surfaces.
              </p>

              <p>
                However, customer feedback across review platforms revealed
                recurring concerns around privacy transparency,
                monetization clarity, transcription reliability, and workflow
                depth — signaling potential risks to enterprise trust,
                retention, and long-term platform credibility at scale.
              </p>
            </div>
          </div>

          <div className="space-y-5">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm mb-2">Category</p>
              <h3 className="text-2xl font-bold">
                AI Meeting Intelligence
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm mb-2">Primary Users</p>
              <h3 className="text-xl font-bold leading-snug">
                SMBs, Sales Teams, Recruiters, PMs
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm mb-2">
                Core Value Proposition
              </p>

              <h3 className="text-xl font-bold leading-snug">
                AI transcription, searchable conversations & workflow intelligence
              </h3>
            </div>

            <div className="bg-orange-500/10 border border-orange-400/20 rounded-3xl p-6">
              <p className="text-orange-400 text-sm font-semibold mb-3">
                PM Research Scope
              </p>

              <p className="text-zinc-300 leading-relaxed text-sm">
                This research synthesized insights from G2, Capterra, Reddit,
                Product Hunt, competitor analyses, and public discussions around
                enterprise trust and AI meeting workflows to identify recurring
                customer pain points, conduct root cause analysis, prioritize
                issues using RICE & MoSCoW frameworks, and propose a strategic
                product roadmap.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESEARCH METHODOLOGY */}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <p className="text-orange-400 text-sm font-semibold mb-3 uppercase tracking-widest">
            Research Methodology
          </p>

          <h2 className="text-4xl font-bold mb-8">
            How The Research Was Conducted
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-zinc-400 leading-relaxed">

            <div className="space-y-5">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Research Sources
                </h3>

                <p>
                  Customer feedback was synthesized from G2, Capterra,
                  Reddit discussions, Product Hunt reviews, competitor
                  comparisons, and publicly available discussions around
                  enterprise privacy concerns and AI meeting workflows.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">
                  Review Analysis
                </h3>

                <p>
                  725+ reviews and community discussions were manually
                  categorized into recurring themes including consent,
                  AI quality, pricing transparency, workflow friction,
                  onboarding experience, and enterprise trust.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Frameworks Used
                </h3>

                <p>
                  Root cause analysis was conducted using the 5 Whys
                  framework, while opportunity prioritization leveraged
                  RICE and MoSCoW methodologies to balance impact,
                  urgency, and implementation complexity.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">
                  Strategic Objective
                </h3>

                <p>
                  The objective of this case study was to evaluate how
                  AI-native productivity products can sustain long-term
                  customer trust while scaling monetization, workflow
                  intelligence, and enterprise adoption.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-12">
          <div>
            <p className="text-orange-400 text-sm font-semibold mb-3 uppercase tracking-widest">
              Key Findings
            </p>

            <h2 className="text-4xl font-bold">
              Executive Summary
            </h2>
          </div>

          <div className="text-zinc-500 max-w-md">
            Customer feedback patterns suggest recurring concerns around
            privacy transparency, workflow depth, and monetization clarity.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {executiveSummary.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all"
            >
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm mb-5 ${getBadgeColor(
                  item.severity
                )}`}
              >
                {item.severity}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="text-sm text-zinc-500">
                Status: {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fireflies;
