import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Download, Briefcase, GraduationCap, Cpu } from 'lucide-react';

function Rev({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const SKILLS = {
  'AI & ML': ['LLM Systems', 'Semantic Search', 'Few-Shot Learning', 'GANs', 'PyTorch', 'TensorFlow'],
  'Product': ['Product Strategy', 'User Research', 'RICE Prioritization', 'Roadmapping', 'A/B Testing'],
  'Engineering': ['AWS', 'C# .NET', 'Docker', 'CI/CD', 'REST APIs', 'Python'],
  'Data & Analytics': ['Pandas', 'Plotly', 'Streamlit', 'ESG Frameworks', 'Geospatial Analytics'],
};

const TIMELINE = [
  {
    icon:   GraduationCap,
    color:  'text-violet-DEFAULT bg-violet-DEFAULT/10 border-violet-DEFAULT/25',
    title:  'MSc Sustainability Management',
    org:    'SDA Bocconi School of Management',
    period: '2024 – Present',
    desc:   'Focusing on AI products for sustainable transformation, industrial intelligence, and data-driven decision making. Part of HelloPM Fellowship, Cohort 50.',
  },
  {
    icon:   Briefcase,
    color:  'text-cyan-DEFAULT bg-cyan-DEFAULT/10 border-cyan-DEFAULT/25',
    title:  'Software Developer',
    org:    'AVEVA',
    period: '2023 – 2026',
    desc:   'Built cloud-native industrial data systems. Led LLM-powered semantic & faceted search for engineering documents. Engineered end-to-end data pipelines at scale.',
  },
  {
    icon:   Cpu,
    color:  'text-amber-DEFAULT bg-amber-DEFAULT/10 border-amber-DEFAULT/25',
    title:  'AI Researcher & Engineer',
    org:    'CellStrat',
    period: '2021 – 2023',
    desc:   'Researched GANs and Few-Shot Learning for medical imaging. Built AI-based bone deformity detection using image classification and segmentation.',
  },
];

export default function About() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-DEFAULT/4 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <Rev>
            <span className="section-label mb-4 inline-flex">About Me</span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-6">
              The person behind<br />
              <span className="grad-text">the products.</span>
            </h1>
          </Rev>

          {/* Bio + Photo */}
          <div className="grid md:grid-cols-2 gap-16 items-start mt-14">
            <div>
              {[
                `I design and aspire to lead AI-driven products that transform complex data into intelligent decision systems. My focus lies in identifying real-world problems, shaping product strategy, and translating advanced AI into scalable solutions.`,
                `With a background in software engineering and cloud platforms, I bring a strong technical foundation to product thinking. I've worked on LLM search pipelines, industrial data platforms, and ML applications in robotics and smart manufacturing.`,
                `Currently transitioning into AI Product Management through the HelloPM Fellowship, building hands-on experience in product strategy, user problem discovery, prioritization, and AI-first product thinking.`,
                `My strength: bridging the gap between engineering, data science, and business strategy to deliver intelligent products that solve real industry problems.`,
              ].map((p, i) => (
                <Rev key={i} delay={i * 80}>
                  <p className="text-zinc-400 font-jakarta leading-relaxed mb-5">{p}</p>
                </Rev>
              ))}

              <Rev delay={200}>
                <div className="flex gap-3 mt-6">
                  <a href="https://linkedin.com/in/shashank-tk" target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
                    LinkedIn <ArrowUpRight size={13} />
                  </a>
                  <a href="#" className="btn-ghost text-sm py-2.5 px-5">
                    <Download size={13} /> Resume
                  </a>
                </div>
              </Rev>
            </div>

            <Rev delay={100}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-conic opacity-30 blur-md" />
                <img
                  src="/_ALE3719.jpg"
                  alt="Shashank T K"
                  className="relative rounded-3xl w-full object-cover object-[center_20%] h-[420px] border border-white/10"
                />
              </div>
            </Rev>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <Rev>
              <span className="section-label mb-3 inline-flex">Skills & Toolkit</span>
              <h2 className="font-syne text-3xl font-bold text-zinc-100 mb-10">What I work with</h2>
            </Rev>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {Object.entries(SKILLS).map(([cat, items], i) => (
                <Rev key={cat} delay={i * 80}>
                  <div className="glass grad-border p-5 h-full">
                    <div className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-4">{cat}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </Rev>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24 mb-10">
            <Rev>
              <span className="section-label mb-3 inline-flex">Journey</span>
              <h2 className="font-syne text-3xl font-bold text-zinc-100 mb-10">Where I've been</h2>
            </Rev>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-DEFAULT/40 via-violet-DEFAULT/20 to-transparent" />
              <div className="space-y-8 pl-16">
                {TIMELINE.map(({ icon: Icon, color, title, org, period, desc }, i) => (
                  <Rev key={title} delay={i * 100}>
                    <div className="relative">
                      {/* Dot */}
                      <div className={`absolute -left-10 w-8 h-8 rounded-full border flex items-center justify-center ${color}`}>
                        <Icon size={14} />
                      </div>
                      <div className="glass grad-border p-6 hover:bg-white/[0.04] transition-all">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="font-syne font-bold text-zinc-100 text-lg">{title}</h3>
                          <span className="font-mono text-xs text-zinc-600">{period}</span>
                        </div>
                        <div className="font-mono text-xs text-cyan-DEFAULT mb-3">{org}</div>
                        <p className="text-zinc-500 text-sm font-jakarta leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </Rev>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
