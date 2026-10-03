import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeader({ eyebrow, title, lead, align = 'center', className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(align === 'center' ? 'mx-auto text-center max-w-4xl' : 'max-w-2xl', className)}
    >
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2 className="section-title mt-5">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </motion.div>
  );
}
