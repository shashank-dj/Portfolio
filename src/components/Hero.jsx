import React from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useReveal';

const ROLES = [
  'AI Product Manager',
  'Industrial AI Builder',
  'Sustainability Technology',
  'AI Researcher & Engineer',
];

const STATS = [
  { value: '3+',  label: 'Years Building' },
  { value: '6',   label: 'Papers Published' },
  { value: '6+',  label: 'Products Shipped' },
  { value: '3',   label: 'Industries Served' },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-void grid-bg">
        <div className="absolute inset-0 bg-mesh" />
        {/* Orbs */}
        <div className="absolute top-1/4 -left-32  w-[500px] h-[500px] bg-cyan-DEFAULT/5  rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-violet-DEFAULT/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0  left-1/3  w-[300px] h-[300px] bg-amber-DEFAULT/4  rounded-full blur-[100px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-DEFAULT/8 border border-cyan-DEFAULT/20 rounded-full mb-7 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-cyan-DEFAULT tracking-widest uppercase">
                Software Developer · Sustainability Management· Product Management
              </span>
            </div>

            {/* Name */}
            <h1 className="font-syne text-5xl md:text-7xl font-extrabold leading-[1.06] text-zinc-100 mb-5 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Shashank{' '}
              <span className="grad-text">TK</span>
            </h1>

            {/* Role typewriter */}
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <span className="font-mono text-zinc-600">→</span>
              <span className="font-mono text-lg text-cyan-DEFAULT">
                {role}
                <span className="animate-blink border-r-2 border-cyan-DEFAULT ml-0.5 inline-block">&nbsp;</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 leading-relaxed max-w-xl mb-9 font-jakarta text-base animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              I build AI-powered products that transform complex industrial data
              into intelligent decision systems — bridging ML, cloud platforms,
              and sustainability tech to create scalable, measurable impact.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap mb-12 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <a
                href="https://linkedin.com/in/shashank-tk"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <Link to="/case-studies" className="btn-ghost">
                View Work
                <ExternalLink size={13} />
              </Link>
              <a
                href="https://github.com/shashank-dj"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-4"
              >
                <Github size={16} />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-zinc-600 text-sm justify-center lg:justify-start font-jakarta animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <MapPin size={13} />
              <span>Milan, Italy — Open globally</span>
            </div>
          </div>

          {/* Right — profile */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>

            {/* Avatar with animated ring */}
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-conic opacity-70 blur-[2px] animate-spin-slow scale-[1.03]" />
              <div className="absolute inset-0 rounded-full bg-void scale-[1.01]" />
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-white/10 animate-float">
                <img
                  src="/_ALE3727.jpg"
                  alt="Shashank T K"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 bg-surface/95 backdrop-blur border border-white/10 rounded-full shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-zinc-300">Open to roles</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass grad-border px-4 py-3 text-center hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="font-syne text-2xl font-bold grad-text">{s.value}</div>
                  <div className="font-mono text-[10px] text-zinc-500 mt-0.5 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
