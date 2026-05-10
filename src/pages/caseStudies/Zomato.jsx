import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Users, TrendingUp, AlertTriangle, CheckCircle2, Target } from 'lucide-react';

function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Section({ number, title, children }) {
  return (
    <Rev>
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-zinc-700 border border-zinc-800 rounded px-2 py-0.5">{String(number).padStart(2, '0')}</span>
          <h2 className="font-syne text-xl font-bold text-zinc-100">{title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        {children}
      </section>
    </Rev>
  );
}

const RICE_ROWS = [
  { name: 'Live Price Preview',    r: 3, i: 3, c: 3, e: 2, score: 13.5, highlight: true },
  { name: 'Smart Cart Estimator',  r: 3, i: 3, c: 3, e: 2, score: 13.5, highlight: true },
  { name: 'Fee Alert',             r: 3, i: 2, c: 3, e: 1, score: 18,   highlight: false },
];

const METRICS = [
  { metric: 'Checkout Conversion Rate', type: 'Primary',   why: 'Direct measure of solution success', icon: TrendingUp, color: 'text-green-400' },
  { metric: 'Cart Abandonment Rate',    type: 'Secondary', why: 'Indicates reduced price shock',      icon: TrendingUp, color: 'text-cyan-DEFAULT' },
  { metric: 'Average Order Value',      type: 'Secondary', why: 'Users stop removing items',          icon: TrendingUp, color: 'text-violet-DEFAULT' },
  { metric: 'Order Cancellation Rate',  type: 'Guardrail', why: 'Ensures estimates are reliable',     icon: AlertTriangle, color: 'text-amber-DEFAULT' },
];

export default function ZomatoCaseStudy() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-void grid-bg opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">

          {/* Back */}
          <Rev>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm font-jakarta mb-10 transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Case Studies
            </Link>
          </Rev>

          {/* Hero */}
          <Rev>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="section-label border-red-400/25 bg-red-400/8 text-red-400">Zomato · Product Case Study</span>
                <span className="font-mono text-xs text-zinc-700">2024</span>
                <span className="font-mono text-xs text-zinc-700">HelloPM Fellowship · Cohort 50</span>
              </div>
              <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 leading-tight mb-5">
                Improving Checkout Trust &amp; Conversion on <span className="text-red-400">Zomato</span>
              </h1>
              <p className="text-zinc-400 font-jakarta text-lg leading-relaxed max-w-3xl">
                Users can't predict their final order cost while browsing. Additional fees appear only at checkout — creating price shock, breaking trust, and driving cart abandonment.
              </p>
            </div>
          </Rev>

          {/* Stat cards */}
          <Rev>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { v: '30+',  l: 'Research data points', color: 'text-red-400'   },
                { v: '62%',  l: 'Switch at checkout',   color: 'text-amber-DEFAULT' },
                { v: '69%',  l: 'Cite hidden fees',     color: 'text-cyan-DEFAULT'  },
                { v: '3',    l: 'MVPs scoped',          color: 'text-violet-DEFAULT' },
              ].map(({ v, l, color }) => (
                <div key={l} className="glass grad-border p-5 text-center">
                  <div className={`font-syne text-3xl font-extrabold ${color} mb-1`}>{v}</div>
                  <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </Rev>

          {/* Cover image */}
          <Rev>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] mb-14 h-64 md:h-80">
              <img src="/zomato.png" alt="Zomato" className="w-full h-full object-cover" />
            </div>
          </Rev>

          {/* Sections */}
          <Section number={1} title="Problem Statement">
            <div className="glass grad-border p-6 border-l-2 border-l-red-400/60">
              <p className="text-zinc-400 font-jakarta leading-relaxed">
                Users cannot predict the final order cost while browsing Zomato. Additional fees — delivery charges, platform fees, and packaging costs — appear only at checkout, creating price shock, reducing trust, and leading to cart abandonment at the most critical moment in the purchase funnel.
              </p>
            </div>
          </Section>

          <Section number={2} title="User Research">
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: Users, label: 'Qualitative', items: ['5 user interviews conducted', 'Recurring themes: surprise, frustration, distrust', 'Users develop "mental buffers" when ordering', 'High emotional friction at checkout stage'] },
                { icon: TrendingUp, label: 'Quantitative', items: ['25+ survey responses collected', '62% of users switch restaurants at checkout', '69% cite hidden fees as top frustration', 'Checkout is the highest drop-off point in the funnel'] },
              ].map(({ icon: Icon, label, items }) => (
                <div key={label} className="glass p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={14} className="text-red-400" />
                    <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">{label}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-zinc-400 text-sm font-jakarta">
                        <span className="text-red-400 flex-shrink-0 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section number={3} title="Key Insights">
            <div className="space-y-3">
              {[
                'Checkout is the highest drop-off point — users who reach it are highly intent but abandon due to surprise costs.',
                'Hidden fees break trust at the most critical moment of the transaction funnel.',
                'Users adapt with workarounds (removing items, switching restaurants) instead of trusting the platform.',
                'No major Indian food delivery platform provides full price transparency before checkout — a strong differentiation opportunity.',
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3 glass p-4">
                  <span className="font-mono text-xs text-zinc-700 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                  <p className="text-zinc-400 text-sm font-jakarta">{insight}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number={4} title="Opportunity Statement">
            <div className="glass grad-border p-7 bg-gradient-to-br from-cyan-DEFAULT/5 to-transparent">
              <blockquote className="font-syne text-lg text-zinc-200 leading-relaxed italic">
                "No major Indian food delivery platform provides full price transparency before checkout. Solving this creates a strong competitive differentiation and directly improves checkout conversion and long-term retention."
              </blockquote>
            </div>
          </Section>

          <Section number={5} title="Solutions Designed">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Live Total Price Preview', desc: 'Displays the full estimated order cost (including all fees) dynamically as users browse and add items to cart.' },
                { title: 'Smart Cart Estimator',     desc: 'Real-time cart total with fee breakdown visible before the final checkout screen is reached.' },
                { title: 'Fee Alerts',               desc: 'Proactive in-cart notifications before adding items that will trigger additional charges.' },
                { title: 'Price Range Indicator',    desc: 'Shows ₹250–₹300 range estimate on restaurant cards to set expectations early in the discovery phase.' },
              ].map(({ title, desc }) => (
                <div key={title} className="glass p-5 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-green-400" />
                    <h4 className="font-syne font-semibold text-zinc-200 text-sm">{title}</h4>
                  </div>
                  <p className="text-zinc-500 text-xs font-jakarta leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number={6} title="Prioritization (RICE Framework)">
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    {['Solution', 'Reach', 'Impact', 'Confidence', 'Effort', 'Score'].map((h) => (
                      <th key={h} className="text-left p-4 font-mono text-xs text-zinc-600 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RICE_ROWS.map(({ name, r, i, c, e, score, highlight }) => (
                    <tr key={name} className={`border-b border-white/[0.05] transition-colors hover:bg-white/[0.03] ${highlight ? 'bg-cyan-DEFAULT/[0.03]' : ''}`}>
                      <td className="p-4 font-jakarta text-zinc-300 text-sm">{name}</td>
                      <td className="p-4 font-mono text-zinc-500 text-sm">{r}</td>
                      <td className="p-4 font-mono text-zinc-500 text-sm">{i}</td>
                      <td className="p-4 font-mono text-zinc-500 text-sm">{c}</td>
                      <td className="p-4 font-mono text-zinc-500 text-sm">{e}</td>
                      <td className="p-4">
                        <span className={`font-syne font-bold text-sm ${highlight ? 'text-cyan-DEFAULT' : 'text-amber-DEFAULT'}`}>{score}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section number={7} title="Final Product">
            <div className="glass grad-border p-7">
              <p className="text-zinc-400 font-jakarta leading-relaxed mb-5">
                Introduced a <strong className="text-zinc-200">Progressive Price Transparency System</strong> that gradually reveals the real order cost throughout the user journey — eliminating checkout surprises while maintaining a clean, uncluttered user experience.
              </p>
              <a
                href="https://zomato-prototype-cohort50.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-sm py-2.5 px-5"
              >
                View Interactive Prototype <ArrowUpRight size={13} />
              </a>
            </div>
          </Section>

          <Section number={8} title="Success Metrics">
            <div className="space-y-3">
              {METRICS.map(({ metric, type, why, icon: Icon, color }) => (
                <div key={metric} className="glass p-4 flex items-center gap-4 hover:bg-white/[0.04] transition-all">
                  <Icon size={16} className={`${color} flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="font-jakarta font-medium text-zinc-200 text-sm">{metric}</div>
                    <div className="font-jakarta text-zinc-600 text-xs">{why}</div>
                  </div>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                    type === 'Primary'   ? 'text-green-400 border-green-400/25 bg-green-400/10' :
                    type === 'Secondary' ? 'text-cyan-DEFAULT border-cyan-DEFAULT/25 bg-cyan-DEFAULT/10' :
                    'text-amber-DEFAULT border-amber-DEFAULT/25 bg-amber-DEFAULT/10'
                  }`}>{type}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section number={9} title="Risks & Trade-offs">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { risk: 'Inaccurate estimates can reduce trust more than no transparency', level: 'High' },
                { risk: 'Too much information displayed simultaneously can overwhelm users', level: 'Medium' },
                { risk: 'Higher transparency may increase price sensitivity and reduce AOV', level: 'Medium' },
              ].map(({ risk, level }) => (
                <div key={risk} className="glass p-5 border-l-2 border-l-amber-DEFAULT/40">
                  <div className="font-mono text-[10px] text-amber-DEFAULT uppercase tracking-widest mb-2">{level} Risk</div>
                  <p className="text-zinc-500 text-xs font-jakarta leading-relaxed">{risk}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Back CTA */}
          <Rev>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/case-studies" className="btn-ghost text-sm py-2.5 px-5">
                <ArrowLeft size={13} /> Back to Case Studies
              </Link>
              <a href="https://linkedin.com/in/shashank-tk" target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
                Let's discuss this work <ArrowUpRight size={13} />
              </a>
            </div>
          </Rev>

        </div>
      </div>
    </main>
  );
}
