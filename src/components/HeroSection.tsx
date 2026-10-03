import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Brain, Cloud, Code2, PlayCircle, Sparkles } from 'lucide-react';
import { logoMark } from '@/lib/brand';
import madchefShot from '@/assets/portfolio/madchef-1.jpg';
import hospitalShot from '@/assets/portfolio/infracare-hospital-1.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function HeroSection() {
  const startingYear = 2020;
  const yearsOfExperience = new Date().getFullYear() - startingYear + 1;

  const stats = [
    { value: '20+', label: 'Projects in progress' },
    { value: '3', label: 'Core service pillars' },
    { value: `${yearsOfExperience}+`, label: 'Years of experience' },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background: grid + brand glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full bg-brand-magenta/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
            <span className="eyebrow-dot animate-pulse-neon" />
            Software studio · Dhaka, Bangladesh
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-[44px] leading-[1.02] sm:text-6xl lg:text-[76px] font-extrabold text-foreground"
          >
            We engineer
            <br />
            digital platforms
            <br />
            <span className="text-gradient-brand">that move business.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground"
          >
            From high-converting websites to resilient cloud infrastructure and agentic AI —
            Infra Stations designs, builds and scales the technology behind ambitious brands.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-brand group">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#portfolio" className="btn-ghost-brand">
              <PlayCircle className="h-4 w-4" />
              See Our Work
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-white/70 backdrop-blur"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-4 sm:px-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-extrabold text-gradient-brand">{s.value}</dd>
                <dd className="mt-1 text-xs sm:text-[13px] leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          {/* Orbit rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-indigo/20 animate-spin-slow" />
          <div className="absolute inset-[12%] rounded-full border border-brand-magenta/15" />
          <div className="absolute inset-[24%] rounded-full bg-gradient-soft" />

          {/* Brand mark */}
          <div className="absolute inset-[27%] flex items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              className="relative w-full drop-shadow-[0_24px_40px_rgba(49,99,168,0.35)] animate-float"
            />
          </div>

          {/* Floating project preview */}
          <div className="absolute -left-4 top-[8%] w-[42%] rotate-[-6deg] animate-float-delayed">
            <div className="glass overflow-hidden rounded-2xl p-1.5">
              <div className="flex items-center gap-1 px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </div>
              <img src={madchefShot} alt="" className="rounded-xl aspect-[16/10] w-full object-cover object-top" />
            </div>
          </div>

          <div className="absolute -right-4 bottom-[10%] w-[42%] rotate-[5deg] animate-float">
            <div className="glass overflow-hidden rounded-2xl p-1.5">
              <div className="flex items-center gap-1 px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </div>
              <img src={hospitalShot} alt="" className="rounded-xl aspect-[16/10] w-full object-cover object-top" />
            </div>
          </div>

          {/* Service chips */}
          <div className="absolute right-[4%] top-[12%] glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground">Web</span>
          </div>
          <div className="absolute left-[2%] bottom-[34%] glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float-delayed">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
              <Cloud className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground">Cloud</span>
          </div>
          <div className="absolute left-[16%] bottom-[6%] glass hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float-delayed">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-magenta/10 text-brand-magenta">
              <Brain className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground">Agentic AI</span>
          </div>
          <div className="absolute left-[44%] top-[2%] glass hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 animate-float">
            <Sparkles className="h-3.5 w-3.5 text-brand-plum" />
            <span className="text-xs font-semibold text-foreground">Shipped with care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
