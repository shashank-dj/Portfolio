import React from "react";

const Fireflies = () => {const executiveSummary = [{severity: "P0 — Critical",title: "Privacy & Consent Crisis",description:"BIPA lawsuit, university bans, and bot auto-joining meetings without participant consent.",status: "Active Litigation",},{severity: "P1 — High",title: "Opaque AI Credit Pricing",description:"Unlimited pricing ambiguity causing surprise billing and churn.",status: "Revenue Risk",},{severity: "P1 — High",title: "Transcription Quality Issues",description:"Accuracy degradation with accents, jargon, and overlapping speakers.",status: "Core Quality Issue",},{severity: "P2 — Medium",title: "Generic AI Summaries",description:"Lack of meeting-type awareness and shallow post-meeting intelligence.",status: "Differentiation Gap",},];

const painPoints = [{id: "P1",title: "Bot joins meetings without consent",frequency: "High",severity: "5/5",persona: "Enterprise Admins, HR, Clients",impact: "Anger, distrust, brand damage",},{id: "P2",title: "Hidden AI credit costs",frequency: "High",severity: "5/5",persona: "SMB Owners, Power Users",impact: "Financial frustration",},{id: "P3",title: "Transcription errors — accents & jargon",frequency: "High",severity: "4/5",persona: "Global Teams",impact: "Lost trust in core feature",},{id: "P4",title: "BIPA lawsuit & data policy concerns",frequency: "High",severity: "5/5",persona: "Enterprise, Legal",impact: "Fear, reputational alarm",},{id: "P5",title: "Generic low-depth AI summaries",frequency: "Medium",severity: "3/5",persona: "Sales Reps, PMs, Recruiters",impact: "Reduced workflow value",},{id: "P6",title: "Shallow CRM integrations",frequency: "Medium",severity: "3/5",persona: "Sales Teams",impact: "Workflow disruption",},{id: "P7",title: "Free plan bait-and-switch",frequency: "Medium",severity: "3/5",persona: "Students, Evaluators",impact: "Early abandonment",},{id: "P8",title: "Stale UI & slow product velocity",frequency: "Medium",severity: "2/5",persona: "Power Users",impact: "Competitive switching",},];

const riceScores = [{feature: "Transparent Pricing & Credit UI",score: 171,priority: "P1 — Now",},{feature: "Privacy & Consent Overhaul",score: 135,priority: "P0 — Immediate",},{feature: "Free Plan Onboarding Fix",score: 81,priority: "P1 — Next",},{feature: "Smart Meeting Summaries",score: 79,priority: "P1 — Next",},{feature: "Transcription Quality Programme",score: 64,priority: "P1 — Next",},];

const roadmap = [{phase: "NOW",title: "Consent-First Bot Controls",timeline: "Weeks 0–4",kpi: "Support tickets -60%",},{phase: "NOW",title: "Transparent Credit Dashboard",timeline: "Weeks 2–6",kpi: "Upgrade conversion +15%",},{phase: "NEXT",title: "Meeting-Type Smart Summaries",timeline: "Weeks 6–14",kpi: "Transcript edit rate -30%",},{phase: "NEXT",title: "Transcription Quality Programme",timeline: "Weeks 8–20",kpi: "Accuracy +10pp",},{phase: "LATER",title: "Deep CRM Intelligence Layer",timeline: "Q3 2026",kpi: "Enterprise ACV +20%",},{phase: "LATER",title: "AskFred Intelligence Hub",timeline: "Q3–Q4 2026",kpi: "AskFred MAU +50%",},];

const competitors = [{capability: "Transcription Accuracy",fireflies: "Strong",tldv: "Strong",gong: "Strong",otter: "Decent",},{capability: "Sales Coaching",fireflies: "None",tldv: "Yes",gong: "Best-in-class",otter: "None",},{capability: "Revenue Intelligence",fireflies: "None",tldv: "Partial",gong: "Best-in-class",otter: "None",},{capability: "Privacy / Bot-Free Mode",fireflies: "Poor",tldv: "Decent",gong: "Decent",otter: "Decent",},];

const getBadgeColor = (value) => {if (value.includes("P0") || value.includes("Critical"))return "bg-red-500/20 text-red-400 border border-red-500/20";

if (value.includes("P1") || value.includes("High"))
  return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20";

return "bg-blue-500/20 text-blue-400 border border-blue-500/20";

};

return (

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
      privacy crisis management, monetization friction, AI quality gaps,
      prioritization frameworks, and strategic roadmap recommendations.
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
            <span className="text-white font-semibold"> 20M+ users</span>,
            and adoption across
            <span className="text-white font-semibold"> 500K+ organisations</span>,
            the platform established itself as a category leader.
          </p>

          <p>
            Its rapid growth was driven by frictionless onboarding,
            automated note-taking, searchable meeting archives, AI-generated
            summaries, and integrations across Zoom, Google Meet, Slack,
            Notion, CRM systems, and productivity workflows.
          </p>

          <p>
            However, despite strong adoption and unicorn-scale valuation,
            multiple systemic UX, monetization, and trust failures began
            emerging at scale — ultimately threatening retention,
            enterprise credibility, and long-term platform trust.
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
            This research synthesised evidence from G2, Capterra, Reddit,
            Product Hunt, competitor analyses, and the December 2025 BIPA
            class-action lawsuit to identify systemic customer pain points,
            conduct root cause analysis, prioritize issues using RICE &
            MoSCoW frameworks, and propose a strategic roadmap.
          </p>
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
        Three systemic issues threaten platform trust, retention, and
        enterprise credibility — with privacy escalating into a P0 crisis.
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

  {/* P0 CRISIS */}

  <section className="max-w-6xl mx-auto mb-24">
    <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-10">
      <div className="text-red-400 font-semibold mb-4">
        P0 — EXISTENTIAL PRODUCT CRISIS
      </div>

      <h2 className="text-4xl font-bold mb-6">
        Privacy & Consent Breakdown
      </h2>

      <p className="text-zinc-300 text-lg leading-relaxed mb-8">
        Fireflies.ai faced a critical privacy crisis after allegations that
        meeting participants were recorded and transcribed without informed
        consent. The issue escalated into a BIPA class-action lawsuit and
        triggered university-wide bans.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/40 rounded-2xl p-6 border border-zinc-800">
          <h3 className="font-semibold text-xl mb-3">
            Root Problem
          </h3>

          <p className="text-zinc-400">
            Product growth optimization prioritized frictionless onboarding
            over informed consent and trust UX.
          </p>
        </div>

        <div className="bg-black/40 rounded-2xl p-6 border border-zinc-800">
          <h3 className="font-semibold text-xl mb-3">
            Recommended Response
          </h3>

          <p className="text-zinc-400">
            Deploy consent banners, granular bot controls, transparent data
            policies, and opt-out mechanisms immediately.
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
          <th className="p-4 border border-zinc-800">Pain Point</th>
          <th className="p-4 border border-zinc-800">Frequency</th>
          <th className="p-4 border border-zinc-800">Severity</th>
          <th className="p-4 border border-zinc-800">Persona</th>
          <th className="p-4 border border-zinc-800">Emotional Impact</th>
        </tr>
      </thead>

      <tbody>
        {painPoints.map((point) => (
          <tr key={point.id} className="hover:bg-zinc-900/40">
            <td className="p-4 border border-zinc-800">{point.title}</td>
            <td className="p-4 border border-zinc-800">{point.frequency}</td>
            <td className="p-4 border border-zinc-800">{point.severity}</td>
            <td className="p-4 border border-zinc-800">{point.persona}</td>
            <td className="p-4 border border-zinc-800">{point.impact}</td>
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
        "Bot auto-joins meetings without participant consent.",
        "Default setting invites Fred to every meeting automatically.",
        "Growth metrics prioritized activation over trust UX.",
        "No granular consent framework existed.",
        "Privacy was treated as compliance instead of product design.",
      ].map((why, index) => (
        <div
          key={index}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >
          <div className="text-red-400 font-semibold mb-2">
            Why {index + 1}
          </div>

          <p className="text-zinc-300">{why}</p>
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
    <h2 className="text-4xl font-bold mb-10">
      Competitor Gap Analysis
    </h2>

    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-zinc-900">
          <th className="p-4 border border-zinc-800">Capability</th>
          <th className="p-4 border border-zinc-800">Fireflies</th>
          <th className="p-4 border border-zinc-800">tl;dv</th>
          <th className="p-4 border border-zinc-800">Gong</th>
          <th className="p-4 border border-zinc-800">Otter.ai</th>
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
            KPI Target: {item.kpi}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* TAKEAWAYS */}

  <section className="max-w-5xl mx-auto text-center pb-20">
    <h2 className="text-5xl font-bold mb-10">
      Strategic Product Takeaways
    </h2>

    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
      <p>
        Privacy became a product problem — not just a legal problem.
      </p>

      <p>
        Transparent monetization directly impacts customer trust and churn.
      </p>

      <p>
        AI meeting tools are evolving from transcription platforms into
        intelligence systems.
      </p>

      <p>
        Post-meeting workflows and contextual AI insights represent the next
        competitive moat.
      </p>
    </div>
  </section>

</div>

);};

export default Fireflies;
