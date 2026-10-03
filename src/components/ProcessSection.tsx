import { motion } from 'framer-motion';
import { Compass, PenTool, Rocket, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    text: 'We dig into your goals, users and constraints, then shape a clear scope, timeline and budget.',
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'Wireframes and polished UI prototypes you can click through — approved before a line of code.',
  },
  {
    icon: Wrench,
    title: 'Build',
    text: 'Agile sprints with weekly demos, clean code, automated testing and transparent progress.',
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    text: 'Deployment, SEO, analytics and ongoing support so your platform keeps getting better.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-white border-y border-border/70 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How we work"
          title={<>A clear path from <span className="text-gradient-brand">idea to impact.</span></>}
          lead="A proven four-step process that keeps you in control and your project on time."
        />

        <ol className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-brand opacity-30 lg:block" />
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative surface surface-hover p-7"
            >
              <div className="flex items-center justify-between">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-soft ring-brand text-brand-indigo">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-extrabold text-foreground/[0.07]">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
