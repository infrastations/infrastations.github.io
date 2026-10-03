import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from './SectionHeader';
import { logoMark } from '@/lib/brand';
import { cn } from '@/lib/utils';

const CONTACT_EMAIL = 'infrastations@gmail.com';

const contactInfo = [
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: 'Phone', value: '+880 1577-360573', href: 'tel:+8801577360573' },
  { icon: MapPin, label: 'Location', value: 'Mirpur, Dhaka, Bangladesh', href: 'https://maps.app.goo.gl/eoLqUnpGDdhBJYQj6' },
];

const projectTypes = ['Website', 'Web App', 'E-commerce', 'Cloud / DevOps', 'AI Solution', 'Other'];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [projectType, setProjectType] = useState('Website');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email address';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters long';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateForm()) {
      toast({ title: 'Please fix the errors', description: 'Check the form fields and try again.', variant: 'destructive' });
      return;
    }
    const subject = `New ${projectType} enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject type: ${projectType}\n\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({ title: 'Opening your email app…', description: `Your message is ready to send to ${CONTACT_EMAIL}.` });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const fieldClass = (field: string) =>
    cn(
      'h-12 rounded-xl bg-muted/50 border-border focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary',
      errors[field] && 'border-destructive focus-visible:ring-destructive/30'
    );

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Let's connect"
          title={<>Have a project in mind? <span className="text-gradient-brand">Let's build it.</span></>}
          lead="Tell us a little about what you need. We reply within 24 hours with next steps and a free consultation."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Info panel */}
          <div className="relative overflow-hidden bg-gradient-brand p-8 sm:p-10 text-white">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 w-72 opacity-20 mix-blend-screen"
            />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold">Get in touch</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Ready to transform your digital presence? Reach out directly or send us a message.
              </p>

              <ul className="mt-10 space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-indigo">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{info.label}</span>
                        <span className="block truncate font-semibold">{info.value}</span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-3 text-sm text-white/80">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                Available for new projects
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6 p-8 sm:p-10">
            <div>
              <span className="block text-sm font-semibold text-foreground mb-3">What can we help with?</span>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setProjectType(t)}
                    aria-pressed={projectType === t}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                      projectType === t
                        ? 'border-transparent bg-gradient-brand text-white shadow-brand'
                        : 'border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className={fieldClass('name')} placeholder="Your full name" />
                {errors.name && <p className="mt-1.5 flex items-center text-sm text-destructive"><AlertCircle className="mr-1 h-4 w-4" />{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className={fieldClass('email')} placeholder="you@company.com" />
                {errors.email && <p className="mt-1.5 flex items-center text-sm text-destructive"><AlertCircle className="mr-1 h-4 w-4" />{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Project details *</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={cn(fieldClass('message'), 'h-auto min-h-[150px] resize-none py-3')}
                placeholder="Tell us about your goals, timeline and budget…"
              />
              {errors.message && <p className="mt-1.5 flex items-center text-sm text-destructive"><AlertCircle className="mr-1 h-4 w-4" />{errors.message}</p>}
            </div>

            <button type="submit" className="btn-brand w-full h-14 text-base">
              Send Message
              <Send className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We respond within 24 hours. Your information is kept confidential.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
