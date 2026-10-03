const stack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Azure',
  'Docker', 'Kubernetes', 'Terraform', 'Python', 'TensorFlow', 'LangChain', 'OpenAI', 'Vercel',
];

export default function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <section aria-label="Technologies we work with" className="relative border-y border-border/70 bg-white/60 py-7">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Built with a modern, battle-tested stack
      </p>
      <div className="relative overflow-hidden mask-fade-x">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground/80 shadow-[0_1px_2px_hsl(226_45%_12%/0.05)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
