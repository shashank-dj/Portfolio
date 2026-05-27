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
      title: "Users unclear about recording behavior",
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
                With a{" "}
                <span className="text-white font-semibold">
                  4.8/5 G2 rating
                </span>{" "}
                across{" "}
                <span className="text-white font-semibold">
                  725+ reviews
                </span>
                ,{" "}
                <span className="text-white font-semibold">
                  20M+ users
                </span>
                , and adoption across{" "}
                <span className="text-white font-semibold">
                  500K+ organisations
                </span>
                , the platform established itself as a category leader.
              </p>

              <p>
                Its rapid growth was driven by frictionless onboarding,
                automated note-taking, searchable meeting archives,
                AI-generated summaries, configurable recording workflows,
                and integrations across Zoom, Google Meet, Slack,
                Notion, CRM systems, and productivity workflows.
              </p>

              <p>
                Fireflies.ai also supports multiple recording experiences,
                including configurable auto-join controls, participant
                notifications, manually invited recording bots, and bot-free
                workflows across desktop, browser, and mobile surfaces.
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
              <p className="text-zinc-500 text-sm mb-2">
                Primary Users
              </p>

              <h3 className="text-xl font-bold leading-snug">
                SMBs, Sales Teams, Recruiters, PMs
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm mb-2">
                Core Value Proposition
              </p>

              <h3 className="text-xl font-bold leading-snug">
                AI transcription, searchable conversations &
                workflow intelligence
              </h3>
            </div>

            <div className="bg-orange-500/10 border border-orange-400/20 rounded-3xl p-6">
              <p className="text-orange-400 text-sm font-semibold mb-3">
                PM Research Scope
              </p>

              <p className="text-zinc-300 leading-relaxed text-sm">
                This research synthesized insights from G2, Capterra,
                Reddit, Product Hunt, competitor analyses, and public
                discussions around enterprise trust and AI meeting
                workflows to identify recurring customer pain points,
                conduct root cause analysis, prioritize issues using
                RICE & MoSCoW frameworks, and propose a strategic
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
                  Reddit discussions, Product Hunt reviews,
                  competitor comparisons, and publicly available
                  discussions around enterprise privacy concerns
                  and AI meeting workflows.
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
                  Root cause analysis was conducted using the
                  5 Whys framework, while opportunity prioritization
                  leveraged RICE and MoSCoW methodologies to balance
                  impact, urgency, and implementation complexity.
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

      {/* PRIVACY SECTION */}

      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-10">

          <div className="text-red-400 font-semibold mb-4">
            P0 — TRUST & CONSENT EXPERIENCE
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Privacy & Recording Transparency
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Public discussions and customer feedback highlighted concerns
            around how recording workflows, participant visibility,
            consent awareness, and onboarding defaults were perceived
            during real-world usage. While Fireflies.ai provides
            configurable recording controls and bot-free workflows,
            user understanding and transparency during adoption remained
            an important product experience challenge.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-black/40 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-semibold text-xl mb-3">
                Root Problem
              </h3>

              <p className="text-zinc-400">
                Product onboarding and activation flows appeared optimized
                for frictionless adoption, while consent visibility and
                trust UX received comparatively less emphasis during scaling.
              </p>
            </div>

            <div className="bg-black/40 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-semibold text-xl mb-3">
                Recommended Response
              </h3>

              <p className="text-zinc-400">
                Improve recording transparency, consent visibility,
                onboarding education, participant notifications,
                and configurable workflow guidance to strengthen
                enterprise trust and user clarity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PAIN POINTS */}

      <section className="max-w-6xl mx-auto mb-24 overflow-x-auto">

        <h2 className="text-4xl font-bold mb-10">
          Customer Pain Point Analysis
        </h2>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-zinc-900 text-left">
              <th className="p-4 border border-zinc-800">
                Pain Point
              </th>

              <th className="p-4 border border-zinc-800">
                Frequency
              </th>

              <th className="p-4 border border-zinc-800">
                Severity
              </th>

              <th className="p-4 border border-zinc-800">
                Persona
              </th>

              <th className="p-4 border border-zinc-800">
                Emotional Impact
              </th>
            </tr>
          </thead>

          <tbody>
            {painPoints.map((point) => (
              <tr key={point.id} className="hover:bg-zinc-900/40">

                <td className="p-4 border border-zinc-800">
                  {point.title}
                </td>

                <td className="p-4 border border-zinc-800">
                  {point.frequency}
                </td>

                <td className="p-4 border border-zinc-800">
                  {point.severity}
                </td>

                <td className="p-4 border border-zinc-800">
                  {point.persona}
                </td>

                <td className="p-4 border border-zinc-800">
                  {point.impact}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </section>

      {/* ROOT CAUSE */}

      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-4xl font-bold mb-12">
          Root Cause Analysis — 5 Whys
        </h2>

        <div className="space-y-6">

          {[
            "Users may not fully understand how recording workflows are configured.",
            "Default onboarding prioritizes rapid activation and automation.",
            "Growth metrics emphasized activation and meeting capture.",
            "Consent visibility and onboarding education received less emphasis.",
            "Trust UX was treated more as compliance than core product experience.",
          ].map((why, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <div className="text-red-400 font-semibold mb-2">
                Why {index + 1}
              </div>

              <p className="text-zinc-300">
                {why}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* RICE */}

      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-4xl font-bold mb-10">
          RICE Prioritization Framework
        </h2>

        <div className="space-y-5">

          {riceScores.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            >

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.feature}
                </h3>

                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm ${getBadgeColor(
                    item.priority
                  )}`}
                >
                  {item.priority}
                </div>
              </div>

              <div className="text-4xl font-bold mt-6 md:mt-0">
                {item.score}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* COMPETITOR ANALYSIS */}

      <section className="max-w-6xl mx-auto mb-24 overflow-x-auto">

        <h2 className="text-4xl font-bold mb-6">
          Competitor Gap Analysis
        </h2>

        <p className="text-zinc-400 mb-8 max-w-4xl leading-relaxed">
          Competitors in the AI meeting intelligence category are evolving
          beyond transcription into workflow automation, revenue intelligence,
          and contextual enterprise insights. Fireflies.ai demonstrates
          strong horizontal adoption, while platforms like Gong
          differentiate through deep sales intelligence and workflow
          specialization.
        </p>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-zinc-900">
              <th className="p-4 border border-zinc-800">
                Capability
              </th>

              <th className="p-4 border border-zinc-800">
                Fireflies
              </th>

              <th className="p-4 border border-zinc-800">
                tl;dv
              </th>

              <th className="p-4 border border-zinc-800">
                Gong
              </th>

              <th className="p-4 border border-zinc-800">
                Otter.ai
              </th>
            </tr>
          </thead>

          <tbody>
            {competitors.map((row, index) => (
              <tr key={index}>

                <td className="p-4 border border-zinc-800">
                  {row.capability}
                </td>

                <td className="p-4 border border-zinc-800">
                  {row.fireflies}
                </td>

                <td className="p-4 border border-zinc-800">
                  {row.tldv}
                </td>

                <td className="p-4 border border-zinc-800">
                  {row.gong}
                </td>

                <td className="p-4 border border-zinc-800">
                  {row.otter}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </section>

      {/* ROADMAP */}

      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-4xl font-bold mb-12">
          Strategic Product Roadmap
        </h2>

        <div className="space-y-8">

          {roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">

                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4 md:mb-0 ${
                    item.phase === "NOW"
                      ? "bg-green-500/20 text-green-400"
                      : item.phase === "NEXT"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {item.phase}
                </div>

                <div className="text-zinc-500">
                  {item.timeline}
                </div>

              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <div className="text-zinc-400">
                {item.kpi}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PRODUCT TRADEOFFS */}

      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Product & Business Tradeoffs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-5">
              Trust vs Growth
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Introducing stronger consent flows and recording
              transparency may increase onboarding friction
              and reduce short-term activation rates. However,
              these changes could improve enterprise trust,
              reduce reputational risk, and strengthen long-term
              customer retention.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-5">
              Monetization vs User Experience
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Aggressive AI credit monetization may improve
              short-term revenue efficiency, but unclear pricing
              experiences can erode customer trust and increase
              churn among power users and SMB teams evaluating
              platform value.
            </p>

          </div>

        </div>
      </section>

      {/* TAKEAWAYS */}

      <section className="max-w-5xl mx-auto text-center pb-20">

        <h2 className="text-5xl font-bold mb-10">
          Strategic Product Takeaways
        </h2>

        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">

          <p>
            AI-native products can achieve rapid adoption before
            fully solving for trust, transparency, and workflow maturity.
          </p>

          <p>
            In AI productivity platforms, privacy and consent are
            not only legal considerations — they directly shape
            product experience and enterprise adoption.
          </p>

          <p>
            Long-term differentiation in AI meeting tools may
            increasingly depend on contextual workflow intelligence
            rather than standalone transcription capabilities.
          </p>

          <p>
            Sustainable AI product growth requires balancing
            activation, monetization, reliability, and trust
            simultaneously.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Fireflies;
