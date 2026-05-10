import React, { useEffect, useRef } from 'react';
import { Briefcase, Brain, Cpu, ChevronRight } from 'lucide-react';

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

const EXPERIENCES = [
  {
    icon:   Briefcase,
    color:  'from-cyan-DEFAULT/20 to-cyan-DEFAULT/5',
    accent: 'text-cyan-DEFAULT border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10',
    role:   'Software Developer',
    org:    'AVEVA',
    period: '2023 – 2026',
    type:   'Full-time',
    bullets: [
      'Built cloud-native industrial data systems for the AIM platform using AWS and C# .NET at enterprise scale.',
      'Led development of LLM-powered semantic & faceted search for engineering documents, reducing search friction for industrial users.',
      'Engineered end-to-end data pipeline workflows for ingestion, validation, and metadata quality across large-scale datasets.',
      'Managed deployment pipelines (CI/CD) and Docker-based releases across multi-region cloud environments.',
      'Improved code quality, system reliability, and API performance through architectural enhancements and testing strategies.',
    ],
    tags: ['AWS', 'C# .NET', 'LLMs', 'Docker', 'CI/CD', 'Data Pipelines'],
  },
  {
    icon:   Brain,
    color:  'from-violet-DEFAULT/15 to-violet-DEFAULT/5',
    accent: 'text-violet-DEFAULT border-violet-DEFAULT/30 bg-violet-DEFAULT/10',
    role:   'AI Researcher & Engineer',
    org:    'CellStrat',
    period: '2021 – 2023',
    type:   'Full-time',
    bullets: [
      'Conducted research in GANs, Few-Shot Learning, and medical imaging for solving real-world deep learning challenges.',
      'Developed an AI-based bone deformity detection system using image classification and segmentation techniques.',
      'Implemented efficient inference pipelines addressing model optimization and data quality issues.',
      'Built reproducible ML workflows using Python, TensorFlow/PyTorch, and automation tooling.',
    ],
    tags: ['GANs', 'Few-Shot Learning', 'PyTorch', 'TensorFlow', 'Medical Imaging', 'Python'],
  },
  {
    icon:   Cpu,
    color:  'from-amber-DEFAULT/15 to-amber-DEFAULT/5',
    accent: 'text-amber-DEFAULT border-amber-DEFAULT/30 bg-amber-DEFAULT/10',
    role:   'ML Engineer',
    org:    'IIT-AIA Foundation for Smart Manufacturing, Delhi',
    period: '2022',
    type:   'Research Internship',
    bullets: [
      'Worked on Power Line Fault Detection using ML models trained on the VSB dataset to support predictive maintenance.',
      'Performed Exploratory Data Analysis (EDA), noise reduction, and feature engineering for improved signal quality.',
      'Optimized time-series feature extraction workflows for anomaly detection in electrical systems.',
      'Applied ML techniques to real industrial datasets, strengthening expertise in smart manufacturing and sensor analytics.',
    ],
    tags: ['Time-Series ML', 'EDA', 'Anomaly Detection', 'Smart Manufacturing', 'Python'],
  },
];

export default function ExperiencePage() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg opacity-50" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-DEFAULT/4 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">

          <Rev>
            <span className="section-label mb-4 inline-flex">Experience</span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-4">
              Where I've <span className="grad-text">shipped.</span>
            </h1>
            <p className="text-zinc-500 font-jakarta max-w-lg mb-16">
              3+ years building at the intersection of AI, cloud infrastructure, and industrial data.
            </p>
          </Rev>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-DEFAULT/50 via-violet-DEFAULT/30 to-transparent hidden md:block" />

            <div className="space-y-10">
              {EXPERIENCES.map(({ icon: Icon, color, accent, role, org, period, type, bullets, tags }, i) => (
                <Rev key={role} delay={i * 120}>
                  <div className="relative md:pl-16">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-6 w-12 h-12 rounded-full border flex items-center justify-center ${accent} hidden md:flex`}>
                      <Icon size={18} />
                    </div>

                    <div className={`glass grad-border overflow-hidden hover:scale-[1.005] transition-all duration-300`}>
                      {/* Color bar top */}
                      <div className={`h-1 bg-gradient-to-r ${color.replace('/15', '/60').replace('/20', '/80').replace('/5', '/30')}`} />

                      <div className="p-7">
                        {/* Header */}
                        <div className="flex items-start justify-between flex-wrap gap-3 mb-1">
                          <div>
                            <h2 className="font-syne text-xl font-bold text-zinc-100">{role}</h2>
                            <div className={`font-mono text-sm mt-1 ${accent.split(' ')[0]}`}>{org}</div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="font-mono text-xs text-zinc-600">{period}</span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${accent}`}>{type}</span>
                          </div>
                        </div>

                        {/* Bullets */}
                        <ul className="mt-5 space-y-3">
                          {bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm font-jakarta leading-relaxed">
                              <ChevronRight size={14} className={`${accent.split(' ')[0]} flex-shrink-0 mt-0.5`} />
                              <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-zinc-200">$1</strong>') }} />
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.05]">
                          {tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Rev>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
