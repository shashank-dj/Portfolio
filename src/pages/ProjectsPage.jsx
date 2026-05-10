import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

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

const PROJECTS = [
  {
    title:   'ESG Reporting & Finance Intelligence Platform',
    badge:   'CSRD-Ready',
    category:'Sustainability',
    tags:    ['Python', 'Streamlit', 'Pandas', 'Plotly', 'CSRD', 'GRI', 'SASB', 'TCFD'],
    desc:    'A decision-grade ESG reporting platform that calculates Scope 1–3 emissions, aligns metrics with CSRD, GRI, SASB, and TCFD frameworks, and translates sustainability performance into financial risk signals. Introduces an ESG-to-Finance linkage layer for executives.',
    link:    'https://esg-reporting-ai-shashank-tk.streamlit.app/',
    code:    'https://github.com/shashank-dj/esg-reporting-ai',
    color:   'from-green-500/10 to-emerald-500/5',
    accent:  'text-green-400',
    highlight: true,
  },
  {
    title:   'Sustainable Performance Optimization in Formula 1',
    badge:   'Analytics Dashboard',
    category:'Analytics',
    tags:    ['NumPy', 'Pandas', 'Plotly', 'Streamlit'],
    desc:    'Analyzes F1 race telemetry and lap data to evaluate how tyre management and pit stop strategy affect both race performance and sustainability efficiency. Introduces a custom Sustainability Performance Score.',
    link:    'https://f1-sustainable-performance-dashboard-shashank.streamlit.app/',
    code:    'https://github.com/shashank-dj/f1-sustainable-performance-dashboard',
    color:   'from-red-500/10 to-orange-500/5',
    accent:  'text-red-400',
  },
  {
    title:   'Industrial Carbon & Energy Sustainability Analytics',
    badge:   'Green Asset Monitor',
    category:'Sustainability',
    tags:    ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    desc:    'Analyzes energy generation, demand, storage behavior, and carbon emissions in a low-carbon industrial park. Helps facilities measure, monitor, and optimize carbon footprint through data-driven insights.',
    link:    'https://green-asset-management-shashank-tk.streamlit.app/',
    code:    'https://github.com/shashank-dj/Green-Asset-Management',
    color:   'from-cyan-500/10 to-blue-500/5',
    accent:  'text-cyan-DEFAULT',
  },
  {
    title:   'Building Chisel Ubuntu Image',
    badge:   'DevOps',
    category:'Engineering',
    tags:    ['Docker', 'AWS', 'C#', 'Linux'],
    desc:    'Custom Ubuntu-based Chisel image for secure tunneling and remote access. Focused on lightweight container optimization, Linux system configuration, and secure networking for cloud-based access control.',
    code:    'https://github.com/shashank-dj',
    color:   'from-zinc-500/10 to-zinc-600/5',
    accent:  'text-zinc-400',
  },
];

const CATEGORIES = ['All', 'Sustainability', 'Analytics', 'Engineering'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg opacity-60" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/4 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">

          <Rev>
            <span className="section-label mb-4 inline-flex">Projects</span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-4">
              Things I've <span className="grad-text">built.</span>
            </h1>
            <p className="text-zinc-500 font-jakarta max-w-xl mb-10">
              Data-driven tools, AI dashboards, and infrastructure projects spanning sustainability, analytics, and industrial engineering.
            </p>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap mb-12">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-lg text-sm font-jakarta font-medium transition-all duration-200 ${
                    active === c
                      ? 'bg-cyan-DEFAULT text-void'
                      : 'glass text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Rev>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((p, i) => (
              <Rev key={p.title} delay={i * 80}>
                <div className={`glass grad-border rounded-2xl overflow-hidden bg-gradient-to-br ${p.color} hover:scale-[1.01] transition-all duration-300 group h-full flex flex-col`}>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="tag">{p.badge}</span>
                      {p.highlight && (
                        <span className="font-mono text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">Featured</span>
                      )}
                    </div>

                    <h3 className="font-syne text-xl font-bold text-zinc-100 mb-3">{p.title}</h3>
                    <p className="text-zinc-500 text-sm font-jakarta leading-relaxed mb-5 flex-1">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>

                    <div className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer"
                          className={`flex items-center gap-1.5 text-sm font-semibold font-jakarta ${p.accent} hover:gap-2.5 transition-all`}
                        >
                          Live Demo <ArrowUpRight size={13} />
                        </a>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-300 text-sm font-jakarta transition-colors"
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Rev>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
