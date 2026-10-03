import { motion } from 'framer-motion';
import { BadgeCheck, Clock3, Headphones, Layers, Lock, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';

const reasons = [
  { icon: Layers, title: 'Full-stack under one roof', text: 'Design, web, cloud and AI teams that already speak the same language.' },
  { icon: Clock3, title: 'On-time delivery', text: 'Sprint-based planning with weekly demos — no surprises at the deadline.' },
  { icon: TrendingUp, title: 'Built to scale', text: 'Architecture that handles growth, traffic spikes and new features gracefully.' },
  { icon: Lock, title: 'Secure by default', text: 'Best-practice security, backups and access control baked in from day one.' },
  { icon: Headphones, title: 'Real, responsive support', text: 'A direct line to the people who built your product, long after launch.' },
  { icon: BadgeCheck, title: 'Fair, transparent pricing', text: 'Clear quotes and milestones, tailored to startups and growing businesses.' },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeader
            align="left"
            eyebrow="Why Infra Stations"
            title={<>A technology partner that <span className="text-gradient-brand">cares how it ends.</span></>}
            lead="We measure success by what your platform achieves — more bookings, more orders, smoother operations — not by lines of code."
          />
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="btn-brand mt-9"
          >
            Book a free consultation
          </motion.a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="surface surface-hover p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
