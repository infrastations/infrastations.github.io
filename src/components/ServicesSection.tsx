import { motion } from 'framer-motion';
import {
  ArrowUpRight, Brain, Cloud, Code2, Gauge, LifeBuoy, Palette, Search, ShieldCheck, Workflow,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      "We don't just write code — we build digital experiences. Clean architecture, user-centric design and fast, scalable performance for websites, web apps and e-commerce.",
    features: ['React & Next.js', 'TypeScript', 'Responsive UI', 'E-commerce & CMS'],
    tone: 'blue',
    span: 'lg:col-span-2',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Resilient, secure and cost-efficient cloud — from microservices and Kubernetes to serverless and CI/CD.',
    features: ['AWS & Azure', 'Kubernetes', 'DevOps & CI/CD', 'Serverless'],
    tone: 'indigo',
    span: '',
  },
  {
    icon: Brain,
    title: 'Agentic AI',
    description:
      'Intelligent, self-improving systems that automate complex workflows and surface new business insight.',
    features: ['LLM Agents', 'NLP', 'Automation', 'Predictive Analytics'],
    tone: 'magenta',
    span: '',
  },
] as const;

const extras = [
  { icon: Palette, label: 'UI/UX & Brand Design' },
  { icon: Search, label: 'SEO & Analytics' },
  { icon: Gauge, label: 'Performance Tuning' },
  { icon: ShieldCheck, label: 'Security Hardening' },
  { icon: Workflow, label: 'API & Integrations' },
  { icon: LifeBuoy, label: 'Maintenance & Support' },
];

const toneStyles: Record<string, { icon: string; glow: string; dot: string }> = {
  blue: { icon: 'from-brand-blue to-brand-indigo', glow: 'bg-brand-blue/15', dot: 'bg-brand-blue' },
  indigo: { icon: 'from-brand-indigo to-brand-plum', glow: 'bg-brand-indigo/15', dot: 'bg-brand-indigo' },
  magenta: { icon: 'from-brand-plum to-brand-magenta', glow: 'bg-brand-magenta/15', dot: 'bg-brand-magenta' },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Three pillars. <span className="text-gradient-brand">One partner.</span></>}
          lead="Strategy, design and engineering under one roof — so your website, your infrastructure and your AI all work as one system."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => {
            const tone = toneStyles[s.tone];
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn('group surface surface-hover relative overflow-hidden p-8 lg:p-10', s.span)}
              >
                <div className={cn('pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100', tone.glow)} />

                <div className={cn('relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-brand', tone.icon)}>
                  <s.icon className="h-7 w-7" />
                </div>

                <h3 className="relative mt-7 text-2xl lg:text-[28px] font-bold text-foreground">{s.title}</h3>
                <p className="relative mt-3 max-w-xl leading-relaxed text-muted-foreground">{s.description}</p>

                <ul className="relative mt-7 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground/80">
                      <span className={cn('h-1.5 w-1.5 rounded-full', tone.dot)} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary"
                >
                  Discuss your project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.article>
            );
          })}

          {/* Capabilities strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 lg:col-span-2 lg:p-10 text-white shadow-brand"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">End-to-end delivery</p>
              <h3 className="mt-3 text-2xl lg:text-[28px] font-bold">Everything you need to launch — and keep growing.</h3>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {extras.map((e) => (
                  <li key={e.label} className="flex items-center gap-2.5 rounded-2xl bg-white/10 border border-white/20 px-3.5 py-3 text-sm font-medium backdrop-blur">
                    <e.icon className="h-4 w-4 shrink-0" />
                    {e.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:mt-auto sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-white/85">Not sure where to start? Get a free consultation and a clear, no-obligation project plan.</p>
                <a
                  href="#contact"
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-indigo transition-transform hover:-translate-y-0.5"
                >
                  Get a free consultation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
