import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Brain, Leaf, Layers, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';

/* Reusable scroll-reveal wrapper */
function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const PILLARS = [
  {
    icon: Brain,
    color: 'text-cyan-DEFAULT',
    bg:    'bg-cyan-DEFAULT/8 border-cyan-DEFAULT/20',
    title: 'AI Product Management',
    desc:  'Translating machine learning capabilities into user-centric product strategies. I define what to build, why it matters, and how to measure success.',
  },
  {
    icon: Layers,
    color: 'text-violet-DEFAULT',
    bg:    'bg-violet-DEFAULT/8 border-violet-DEFAULT/20',
    title: 'Industrial Data Systems',
    desc:  'Architecting cloud-native data pipelines, LLM search, and engineering intelligence platforms at enterprise scale — battle-tested at AVEVA.',
  },
  {
    icon: Leaf,
    color: 'text-amber-DEFAULT',
    bg:    'bg-amber-DEFAULT/8 border-amber-DEFAULT/20',
    title: 'Sustainability Technology',
    desc:  'Building ESG intelligence, carbon analytics, and reporting tools that link sustainability performance to financial outcomes and board-level decisions.',
  },
];

const FEATURED_PROJECTS = [
  {
    title: 'ESG Reporting & Finance Intelligence',
    badge: 'Decision-grade platform',
    tags:  ['Python', 'Streamlit', 'CSRD', 'GRI', 'TCFD'],
    desc:  'Calculates Scope 1–3 emissions, aligns with all major ESG frameworks, and introduces an ESG-to-Finance linkage layer for executives.',
    link:  'https://esg-reporting-ai-shashank-tk.streamlit.app/',
    code:  'https://github.com/shashank-dj/esg-reporting-ai',
    color: 'from-green-500/10 to-cyan-500/5',
    accent:'text-green-400',
  },
  {
    title: 'Board ESG Intelligence',
    badge: 'Product Venture',
    tags:  ['React', 'Tailwind', 'ESG Governance', 'Private Equity'],
    desc:  'Governance-focused ESG decision intelligence for PE firms & Boards of Directors — creating a defensible record for LP reviews and exit due diligence.',
    link:  'https://board-esg-intelligence.netlify.app',
    code:  'https://github.com/shashank-dj/board-esg-intelligence',
    color: 'from-violet-500/10 to-indigo-500/5',
    accent:'text-violet-DEFAULT',
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* ── What I Build ── */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-surface/30" />
        <div className="relative max-w-6xl mx-auto">
          <Rev>
            <span className="section-label mb-4 inline-flex">What I Build</span>
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
              Three Domains. One Vision.
            </h2>
            <p className="text-zinc-500 font-jakarta max-w-xl mb-14">
              I operate at the intersection of AI, industrial data, and sustainability — building products that are technically sound and strategically meaningful.
            </p>
          </Rev>

          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map(({ icon: Icon, color, bg, title, desc }, i) => (
              <Rev key={title} delay={i * 100}>
                <div className="glass grad-border p-7 h-full hover:bg-white/[0.05] transition-all duration-300 group">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${bg} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} className={color} />
                  </div>
                  <h3 className="font-syne font-bold text-zinc-100 text-lg mb-3">{title}</h3>
                  <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">{desc}</p>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Rev className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="section-label mb-3 inline-flex">Case Study</span>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-zinc-100">Featured PM Work</h2>
            </div>
            <Link to="/case-studies" className="btn-ghost text-sm py-2">
              All Case Studies <ArrowUpRight size={14} />
            </Link>
          </Rev>

          <Rev>
            <Link to="/case-studies/zomato">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-red-500/10 via-surface to-orange-500/5 p-8 md:p-12 hover:border-red-400/20 transition-all duration-300 group cursor-pointer">
                {/* Glow orb */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

                <div className="relative">
                  <span className="section-label border-red-400/25 bg-red-400/8 text-red-400 mb-5 inline-flex">Zomato · Product Case Study</span>
                  <h3 className="font-syne text-2xl md:text-3xl font-bold text-zinc-100 mb-4 group-hover:text-red-300 transition-colors">
                    Reducing Cart Abandonment by Improving Price Transparency
                  </h3>
                  <p className="text-zinc-400 font-jakarta leading-relaxed max-w-2xl mb-6">
                    69% of users cite hidden fees as their top frustration on Zomato. I designed a Progressive Price Transparency System — backed by 5 user interviews and 25+ survey responses — eliminating checkout surprises and improving trust.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['User Research', 'RICE Framework', 'Prototyping', 'UX Design', 'Metrics Definition'].map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-red-400 font-jakarta text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Case Study <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Stats row */}
                <div className="relative mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { v: '62%',  l: 'Switch at checkout'  },
                    { v: '69%',  l: 'Cite hidden fees'    },
                    { v: '3 MVPs', l: 'Designed & scoped' },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <div className="font-syne text-xl font-bold text-zinc-100">{v}</div>
                      <div className="font-mono text-[10px] text-zinc-600 mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Rev>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <Rev className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="section-label mb-3 inline-flex">Projects</span>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-zinc-100">Things I've Built</h2>
            </div>
            <Link to="/projects" className="btn-ghost text-sm py-2">
              All Projects <ArrowUpRight size={14} />
            </Link>
          </Rev>

          <div className="grid md:grid-cols-2 gap-5">
            {FEATURED_PROJECTS.map((p, i) => (
              <Rev key={p.title} delay={i * 100}>
                <div className={`glass grad-border rounded-2xl overflow-hidden bg-gradient-to-br ${p.color} hover:scale-[1.01] transition-all duration-300 group h-full`}>
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-4">
                      <span className="tag">{p.badge}</span>
                      <a href={p.code} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <h3 className="font-syne text-xl font-bold text-zinc-100 mb-3">{p.title}</h3>
                    <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-semibold font-jakarta ${p.accent} hover:gap-2.5 transition-all`}
                    >
                      Live Demo <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Teaser ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Rev className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="section-label mb-3 inline-flex">Research</span>
              <h2 className="font-syne text-3xl font-bold text-zinc-100">Published Work</h2>
            </div>
            <Link to="/research" className="btn-ghost text-sm py-2">
              All Publications <ArrowUpRight size={14} />
            </Link>
          </Rev>
          <Rev>
            <div className="glass grad-border p-7 flex items-start gap-5 hover:bg-white/[0.05] transition-all group">
              <div className="w-11 h-11 rounded-xl bg-amber-DEFAULT/10 border border-amber-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                <BookOpen size={18} className="text-amber-DEFAULT" />
              </div>
              <div>
                <div className="font-mono text-xs text-zinc-600 mb-2">IAC 2024 · Milan</div>
                <h3 className="font-syne font-bold text-zinc-100 text-lg mb-2 group-hover:text-amber-DEFAULT transition-colors">
                  Leveraging Space R&D to Drive Societal Benefits through AI & ESG
                </h3>
                <p className="text-zinc-500 text-sm font-jakarta mb-4">
                  Explores how AI, ESG frameworks, and engineering data ecosystems accelerate sustainability,
                  manufacturing transformation, and planetary stewardship using insights from the space sector.
                </p>
                <a
                  href="https://dl.iafastro.directory/event/IAC-2024/paper/89342/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-amber-DEFAULT text-sm font-semibold font-jakarta hover:gap-3 transition-all"
                >
                  View Publication <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Rev>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Rev>
            <div className="relative overflow-hidden rounded-3xl glass grad-border p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-DEFAULT/5 via-transparent to-violet-DEFAULT/5" />
              <div className="relative">
                <span className="section-label mb-6 inline-flex">Open to Opportunities</span>
                <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-zinc-100 mb-5 leading-tight">
                  Let's build something<br />
                  <span className="grad-text">remarkable together.</span>
                </h2>
                <p className="text-zinc-400 font-jakarta max-w-lg mx-auto mb-9">
                  Seeking AI PM roles, product collaborations, and research opportunities
                  across industrial AI, sustainability, and enterprise software.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="https://linkedin.com/in/shashank-tk" target="_blank" rel="noreferrer" className="btn-primary">
                    Connect on LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <Link to="/about" className="btn-ghost">
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </Rev>
        </div>
      </section>
    </main>
  );
}
