import React, { useEffect, useRef } from 'react';
import { BookOpen, Microscope, ArrowUpRight, Quote } from 'lucide-react';

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

const PUBLICATIONS = [
  {
    icon:    BookOpen,
    color:   'text-amber-DEFAULT',
    bg:      'bg-amber-DEFAULT/10 border-amber-DEFAULT/25',
    grad:    'from-amber-DEFAULT/10 to-orange-500/5',
    venue:   'IAC 2024 — International Astronautical Congress · Milan',
    title:   'Leveraging Space R&D to Drive Societal Benefits through AI & ESG',
    abstract:'Explores how AI, ESG frameworks, and engineering data ecosystems accelerate sustainability, manufacturing transformation, and planetary stewardship by leveraging insights from the space sector. Proposes a cross-domain innovation model connecting space R&D outputs to terrestrial industrial and environmental challenges.',
    tags:    ['AI', 'ESG', 'Space Technology', 'Sustainability', 'Industrial AI'],
    link:    'https://dl.iafastro.directory/event/IAC-2024/paper/89342/',
    year:    '2024',
    type:    'Conference Paper',
  },
  {
    icon:    Microscope,
    color:   'text-cyan-DEFAULT',
    bg:      'bg-cyan-DEFAULT/10 border-cyan-DEFAULT/25',
    grad:    'from-cyan-DEFAULT/10 to-blue-500/5',
    venue:   'Global Transitions Proceedings (Elsevier) · ICIEA 2021',
    title:   'Application of Few-Shot Object Detection in the Field of Robotic Perception',
    abstract:'Explores Few-Shot Learning for warehouse object detection, enabling robotic arms in ROS + Gazebo to detect and interact with objects using minimal training data. Contributed to robotic arm movement planning and OpenCV-based detection pipelines, improving perception accuracy in automated warehouse environments.',
    tags:    ['Few-Shot Learning', 'Robotic Perception', 'Computer Vision', 'ROS', 'OpenCV'],
    link:    'https://www.sciencedirect.com/science/article/pii/S2666285X22000607?via%3Dihub',
    year:    '2021',
    type:    'Journal Article',
  },
];

export default function ResearchPage() {
  return (
    <main className="pt-24 min-h-screen bg-void">
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh grid-bg opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-DEFAULT/4 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">

          <Rev>
            <span className="section-label mb-4 inline-flex">Research</span>
            <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-zinc-100 mb-4">
              Published <span className="grad-text-amber">Work.</span>
            </h1>
            <p className="text-zinc-500 font-jakarta max-w-xl mb-16">
              Peer-reviewed research spanning AI systems, robotic perception, and the intersection of technology with sustainability at a global scale.
            </p>
          </Rev>

          {/* Publications */}
          <div className="space-y-8">
            {PUBLICATIONS.map(({ icon: Icon, color, bg, grad, venue, title, abstract, tags, link, year, type }, i) => (
              <Rev key={title} delay={i * 120}>
                <div className={`glass grad-border overflow-hidden bg-gradient-to-br ${grad} hover:scale-[1.005] transition-all duration-300 group`}>
                  <div className="p-8">
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${bg}`}>
                          <Icon size={18} className={color} />
                        </div>
                        <div>
                          <span className={`font-mono text-xs ${color}`}>{year}</span>
                          <span className="font-mono text-xs text-zinc-700 mx-2">·</span>
                          <span className="font-mono text-xs text-zinc-600">{type}</span>
                        </div>
                      </div>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-semibold font-jakarta ${color} hover:gap-2.5 transition-all`}
                      >
                        View Publication <ArrowUpRight size={13} />
                      </a>
                    </div>

                    {/* Venue */}
                    <div className="font-mono text-xs text-zinc-600 mb-3">{venue}</div>

                    {/* Title */}
                    <h2 className={`font-syne text-xl md:text-2xl font-bold text-zinc-100 mb-4 group-hover:${color.replace('text-', 'text-')} transition-colors`}>
                      {title}
                    </h2>

                    {/* Abstract */}
                    <div className="relative pl-5 mb-6">
                      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${bg.split(' ')[0].replace('bg-', 'bg-').replace('/10', '/40')}`} />
                      <p className="text-zinc-500 font-jakarta text-sm leading-relaxed">{abstract}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Rev>
            ))}
          </div>

          {/* Research interests CTA */}
          <Rev delay={200}>
            <div className="mt-14 glass grad-border p-8 text-center">
              <Quote size={28} className="text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400 font-jakarta italic max-w-2xl mx-auto text-lg leading-relaxed">
                "Research is how I close the gap between what AI can do and what industry actually needs."
              </p>
              <div className="mt-4 font-mono text-xs text-zinc-700">— Shashank T K</div>
            </div>
          </Rev>

        </div>
      </div>
    </main>
  );
}
