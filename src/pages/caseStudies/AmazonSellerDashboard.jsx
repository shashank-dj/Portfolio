import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  TrendingUp,
  TrendingDown,
  Lightbulb,
  Target,
  CheckCircle2,
  Database,
  Brain,
  DollarSign,
  Package,
  Search,
  ShoppingCart,
  Gauge,
  AlertTriangle,
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

const METRIC_OPTIONS = [
  {
    option: 'Revenue',
    reason:
      'Can rise even while the seller loses money — from cutting prices too far or overspending on ads.',
  },
  {
    option: 'Gross Margin %',
    reason:
      "Ignores ad spend entirely. A seller can look profitable on paper while ads quietly eat the profit.",
  },
  {
    option: 'Buy Box Win Rate',
    reason:
      'Still tracked as a main number, but winning the Buy Box at an unprofitable price is not a real win.',
  },
  {
    option: 'Search Rank',
    reason: 'Same issue as Buy Box — good rank without good margin does not pay the bills.',
  },
  {
    option: 'Conversion Rate',
    reason: 'Useful, but too narrow on its own to represent the health of the whole business.',
  },
  {
    option: 'Inventory Health',
    reason: 'A warning signal and an operational limit, not a measure of how well the business is doing.',
  },
];

const METRICS = [
  { metric: 'Contribution Margin / Unit', type: 'Lagging', cadence: 'Daily', target: '$9.00+' },
  { metric: 'Seller Health Score', type: 'Lagging', cadence: 'Daily', target: '80+' },
  { metric: 'Revenue (7d)', type: 'Lagging', cadence: 'Daily', target: 'Flat or growing WoW' },
  { metric: 'Net Profit', type: 'Lagging', cadence: 'Weekly', target: '22%+ margin' },
  { metric: 'Visitors (Sessions)', type: 'Leading', cadence: 'Daily', target: 'Seasonal' },
  { metric: 'Click-Through Rate', type: 'Leading', cadence: 'Daily', target: '0.40%+' },
  { metric: 'Conversion Rate', type: 'Leading', cadence: 'Daily', target: '11%+' },
  { metric: 'Buy Box Win Rate', type: 'Leading', cadence: 'Daily', target: '95%+' },
  { metric: 'Search Rank (unpaid)', type: 'Leading', cadence: 'Daily', target: 'Top 5' },
  { metric: 'Search Rank (paid)', type: 'Leading', cadence: 'Daily', target: 'Top 3' },
  { metric: 'Competitor Price Gap', type: 'Leading', cadence: 'Daily', target: 'Within $0.50' },
  { metric: 'Sell-Through Rate', type: 'Leading', cadence: 'Daily', target: '70–100%' },
  { metric: 'Days of Cover', type: 'Leading', cadence: 'Daily', target: '21+ days' },
  { metric: 'Ad Spend Efficiency (ACOS / TACOS)', type: 'Lagging', cadence: 'Daily', target: '≤20% / ≤10%' },
];

const DASHBOARD_SECTIONS = [
  { title: 'Business Health', desc: 'Main metric, Health Score, Revenue, Profit', icon: Gauge },
  { title: 'Why This Happened', desc: 'Auto-generated explanation banner', icon: Lightbulb },
  { title: 'Visibility', desc: 'Visitors, Click-Through Rate, Search Rank', icon: Search },
  { title: 'Conversion', desc: 'Conversion Rate and drop-off funnel', icon: TrendingUp },
  { title: 'Buy Box & Competitors', desc: 'Win rate, Competitor Price Gap', icon: ShoppingCart },
  { title: 'Inventory', desc: 'Sell-Through Rate, Days of Cover, stockout risk', icon: Package },
  { title: 'Advertising', desc: 'Ad spend efficiency and spend trend', icon: DollarSign },
  { title: 'Customer Satisfaction', desc: 'Returns, star ratings, review themes', icon: Users },
  { title: 'AI Assistant & Product List', desc: 'Daily summary plus full product-level detail', icon: Brain },
];

const AI_TODO = [
  {
    label: "Today's Summary",
    detail:
      'Revenue is down 9.4% this week, mainly because the Stainless Steel Water Bottle lost the Buy Box after a competitor cut price by 7%.',
    impact: null,
  },
  {
    label: 'Inventory Risk',
    detail: 'Glass Meal Prep Containers will run out of stock in 5 days at the current sales speed.',
    impact: '-$1,340/wk',
  },
  {
    label: 'Pricing Suggestion',
    detail: 'Lower the Water Bottle to $19.19 to win back the Buy Box.',
    impact: '+$2,150/wk',
  },
  {
    label: 'Advertising Suggestion',
    detail: 'Ad efficiency held at 18.4% even as spend rose 8% — safe to add 15% more budget on "insulated water bottle."',
    impact: null,
  },
  {
    label: 'Review Analysis',
    detail: 'Three new 2-star reviews on the Bamboo Shelf Organizer mention wobbly assembly — flagged for quality check.',
    impact: null,
  },
];

const HEALTH_SCORE_PARTS = [
  { part: 'Visibility', weight: '20%', score: 74, points: 14.8 },
  { part: 'Conversion', weight: '20%', score: 70, points: 14.0 },
  { part: 'Buy Box & Competitors', weight: '15%', score: 72, points: 10.8 },
  { part: 'Inventory Health', weight: '15%', score: 60, points: 9.0 },
  { part: 'Profitability', weight: '20%', score: 88, points: 17.6 },
  { part: 'Customer Satisfaction', weight: '10%', score: 92, points: 9.2 },
];

const POWER_FRAMEWORK = [
  {
    letter: 'P',
    title: 'Possibility',
    desc: 'Can AI do something a normal report cannot? Yes — connect price, Buy Box, rank, stock, and reviews into one plain sentence a seller can read in seconds.',
  },
  {
    letter: 'O',
    title: 'Opportunity',
    desc: 'Worth solving with AI? Yes — checked daily, costly when caught late (~$2,150/week for one late Buy Box loss), and today needs 4–5 separate reports.',
  },
  {
    letter: 'W',
    title: 'Workflow',
    desc: 'Fits inside the two moments the seller already shows up for: the morning check-in and the moment a KPI looks unusual — not a separate chat window to remember.',
  },
  {
    letter: 'E',
    title: 'Engineering',
    desc: 'Simple rules cover most cases first (Buy Box drop + competitor price drop = likely cause). A learned model comes later, once real outcome history exists.',
  },
  {
    letter: 'R',
    title: 'Reflect & Repeat',
    desc: 'Track how often a suggestion gets applied vs. dismissed, and how often an explanation is correct — then use that to upgrade rules into a learned model.',
  },
];

export default function AmazonSellerDashboardCaseStudy() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-amber-400/5 rounded-full blur-3xl" />

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
                <span className="section-label border-amber-400/25 bg-amber-400/8 text-amber-400">
                  Amazon · Product Analytics & Dashboard Design
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  2026
                </span>

                <span className="font-mono text-xs text-zinc-700">
                  Product Analytics Assignment
                </span>
              </div>

              <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 leading-tight mb-5">
                Amazon Seller Dashboard — Showing Sellers{' '}
                <span className="text-amber-400">Why</span> Sales Changed,
                Not Just That They Did
              </h1>

              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                Most Seller Central reports answer "what happened last
                month?" This dashboard is designed to answer the question a
                busy seller actually asks every morning: "what should I do
                today to protect or grow my business?"
              </p>
            </div>
          </Rev>

          {/* Stats */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { v: '14', l: 'Metrics tracked', color: 'text-amber-400' },
                { v: '9', l: 'Dashboard sections', color: 'text-cyan-DEFAULT' },
                { v: '1', l: 'North-star metric', color: 'text-violet-DEFAULT' },
                { v: '$8.40', l: 'Margin per unit today', color: 'text-green-400' },
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
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] mb-14 h-64 md:h-80 bg-[#111116]">
              <img
                src="/amazon.png"
                alt="Amazon Seller Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </Rev>

          {/* Problem & User */}
          <Section number={1} title="The Goal, the User, and the Job to Be Done">
            <div className="glass grad-border p-6 border-l-2 border-l-amber-400/60 mb-5">
              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Help a small Amazon seller answer one question every morning:
                "What should I do today to protect or grow my business?"
                Most Seller Central reports only answer a different question:
                "What happened last month?" This dashboard is built to
                answer the first question, not the second.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={14} className="text-amber-400" />
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                    Who Is the User
                  </span>
                </div>

                <p className="text-zinc-400 text-sm font-jakarta leading-relaxed">
                  Priya runs a home goods brand with 15 products, all
                  fulfilled by Amazon. She is the merchandiser, ad buyer, and
                  inventory planner — all in one person. She checks Seller
                  Central for about ten minutes between other jobs. She does
                  not want more charts; she wants fewer alerts, each one
                  already explaining what caused it.
                </p>
              </div>

              <div className="glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={14} className="text-amber-400" />
                  <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                    Jobs to Be Done
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {[
                    'When revenue drops, tell me why in one sentence.',
                    'Warn me before a stockout or lost Buy Box, not after.',
                    "Tell me what's working too, so I can push harder on it.",
                    'Give me one number that tells me if this week was better or worse.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-zinc-400 text-sm font-jakarta"
                    >
                      <span className="text-amber-400 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Main Metric */}
          <Section number={2} title="Choosing the One Main Metric">
            <div className="glass grad-border p-6 mb-5 bg-gradient-to-br from-amber-400/5 to-transparent">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign size={16} className="text-amber-400" />
                <h3 className="font-syne text-lg font-semibold text-zinc-100">
                  Contribution Margin per Unit
                </h3>
              </div>

              <p className="text-zinc-400 text-sm font-jakarta leading-relaxed">
                Price minus product cost, Amazon fees, and ad spend per unit.
                It already includes the two costs sellers most often ignore
                — fees and ad spend — so it cannot be improved just by
                cutting price or spending more on ads. Revenue, Buy Box, and
                Search Rank stay as important numbers underneath it, because
                they are the levers that move it.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3 pr-4">
                      Option Considered
                    </th>
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3">
                      Why It Is Not the Best Single Choice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {METRIC_OPTIONS.map(({ option, reason }) => (
                    <tr key={option} className="border-t border-white/[0.06]">
                      <td className="py-3 pr-4 font-jakarta text-zinc-200 font-medium whitespace-nowrap align-top">
                        {option}
                      </td>
                      <td className="py-3 font-jakarta text-zinc-500 align-top">
                        {reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Metrics Framework */}
          <Section number={3} title="The Full Metrics Framework">
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">
              Fourteen metrics in total, from the main metric down to the
              day-to-day numbers that explain it. Leading metrics warn early;
              lagging metrics show the final result.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3 pr-4">
                      Metric
                    </th>
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3 pr-4">
                      Signal
                    </th>
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3 pr-4">
                      Cadence
                    </th>
                    <th className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pb-3">
                      Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {METRICS.map(({ metric, type, cadence, target }) => (
                    <tr key={metric} className="border-t border-white/[0.06]">
                      <td className="py-2.5 pr-4 font-jakarta text-zinc-200 whitespace-nowrap">
                        {metric}
                      </td>
                      <td className="py-2.5 pr-4">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                            type === 'Leading'
                              ? 'text-cyan-DEFAULT border-cyan-DEFAULT/25 bg-cyan-DEFAULT/10'
                              : 'text-amber-400 border-amber-400/25 bg-amber-400/10'
                          }`}
                        >
                          {type}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 font-jakarta text-zinc-500 whitespace-nowrap">
                        {cadence}
                      </td>
                      <td className="py-2.5 font-jakarta text-zinc-500 whitespace-nowrap">
                        {target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Dashboard Architecture */}
          <Section number={4} title="Dashboard Architecture">
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">
              Nine sections, ordered the way a seller should read them: first
              how the business is doing, then why, then what to do next.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {DASHBOARD_SECTIONS.map(({ title, desc, icon: Icon }, i) => (
                <div
                  key={title}
                  className="glass p-5 border border-white/[0.05] hover:border-amber-400/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] text-zinc-700">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={14} className="text-amber-400" />
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

          {/* AI Assistant */}
          <Section number={5} title="The AI Assistant — Today's To-Do List">
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">
              Not a chat box the seller has to type questions into. A ranked
              list generated every morning, pairing a plain explanation with
              an estimated dollar impact — sorted from biggest impact to
              smallest.
            </p>

            <div className="space-y-3">
              {AI_TODO.map(({ label, detail, impact }) => (
                <div
                  key={label}
                  className="glass p-4 flex items-start gap-4 hover:bg-white/[0.04] transition-all"
                >
                  <Brain size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />

                  <div className="flex-1">
                    <div className="font-jakarta font-medium text-zinc-200 text-sm mb-1">
                      {label}
                    </div>
                    <div className="font-jakarta text-zinc-500 text-xs leading-relaxed">
                      {detail}
                    </div>
                  </div>

                  {impact && (
                    <span
                      className={`font-mono text-xs px-2 py-1 rounded flex-shrink-0 ${
                        impact.startsWith('+')
                          ? 'text-green-400 bg-green-400/10 border border-green-400/25'
                          : 'text-red-400 bg-red-400/10 border border-red-400/25'
                      }`}
                    >
                      {impact}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Health Score */}
          <Section number={6} title="The Seller Health Score">
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">
              One number from 0 to 100, built from six weighted parts, so no
              single part can make the whole score look better or worse than
              it really is.
            </p>

            <div className="space-y-3 mb-5">
              {HEALTH_SCORE_PARTS.map(({ part, weight, score, points }) => (
                <div key={part} className="glass p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="font-jakarta text-sm text-zinc-200">
                      {part}{' '}
                      <span className="text-zinc-600 text-xs">
                        · {weight} weight
                      </span>
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {score}/100 → {points} pts
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full bg-amber-400/80 rounded-full"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass grad-border p-6 flex items-center justify-between flex-wrap gap-4 bg-gradient-to-br from-amber-400/5 to-transparent">
              <span className="font-jakarta text-zinc-300">
                Overall Health Score this week
              </span>
              <span className="font-syne text-3xl font-extrabold text-amber-400">
                78 / 100
              </span>
            </div>
          </Section>

          {/* POWER Framework */}
          <Section number={7} title="The POWER Framework — Is AI the Right Tool?">
            <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">
              Before adding an AI feature, it helps to check whether AI is
              actually the right tool for the problem, rather than adding it
              because it is popular.
            </p>

            <div className="space-y-3">
              {POWER_FRAMEWORK.map(({ letter, title, desc }) => (
                <div
                  key={letter}
                  className="glass p-5 flex gap-4 border-l-2 border-l-amber-400/40"
                >
                  <span className="font-syne text-2xl font-extrabold text-amber-400 flex-shrink-0 w-8">
                    {letter}
                  </span>

                  <div>
                    <div className="font-syne text-zinc-100 font-semibold mb-1">
                      {title}
                    </div>
                    <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Prototype */}
          <Section number={8} title="Interactive Prototype">
            <div className="glass grad-border p-7">
              <p className="text-zinc-400 font-jakarta leading-relaxed mb-5">
                Built a working prototype of the dashboard — the Why This
                Happened banner, the four-part health strip, the AI
                Assistant to-do list, and the full product table — so the
                design could be clicked through rather than just described.
              </p>

              <a
                href="https://amazon-seller-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-sm py-2.5 px-5"
              >
                View Interactive Prototype
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Section>

          {/* Reflection / Takeaways */}
          <Section number={9} title="Trade-offs, What I Learned, and What's Next">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="glass p-5 flex gap-3">
                <AlertTriangle size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm font-jakarta">
                  Automatic explanations trade some precision for speed. A
                  fast, clearly-labeled explanation is more useful to a busy
                  seller than a slower, more rigorous one — as long as it
                  never overrides the seller silently.
                </p>
              </div>

              <div className="glass p-5 flex gap-3">
                <AlertTriangle size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm font-jakarta">
                  A focused set of 14 metrics and 9 sections means advanced
                  sellers may want raw data — solved with an export option on
                  the Product List instead of crowding the main screen.
                </p>
              </div>

              <div className="glass p-5 flex gap-3">
                <CheckCircle2 size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm font-jakarta">
                  Adjust for expected seasonal changes, so a seasonal product
                  isn't flagged as "declining" during its normal off season.
                </p>
              </div>

              <div className="glass p-5 flex gap-3">
                <CheckCircle2 size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm font-jakarta">
                  Let the seller approve or decline a suggested price or
                  budget change directly from the AI Assistant card, with a
                  visible log of what changed.
                </p>
              </div>
            </div>

            <div className="glass grad-border p-7 bg-gradient-to-br from-amber-400/5 to-transparent">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                "A dashboard that shows everything Amazon knows is less
                useful than one that shows a smaller, well-chosen set of
                numbers with a clear point of view on what matters most this
                week — and does the hardest work, figuring out the cause,
                for the seller instead of leaving it to them."
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
