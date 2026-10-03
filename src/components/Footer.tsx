import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Cloud Infrastructure', href: '#services' },
      { label: 'Agentic AI', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Work', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-white">
      <div className="h-1 w-full bg-gradient-brand" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLogo tagline markClassName="h-11 w-11" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Building the future, one platform at a time. Web, cloud and AI engineering from Dhaka, Bangladesh.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[15px] text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-[15px] text-muted-foreground">
              <li>
                <a href="mailto:infrastations@gmail.com" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-brand-blue" /> infrastations@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801577360573" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-brand-plum" /> +880 1577-360573
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-magenta" /> Mirpur, Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Infra Stations. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
