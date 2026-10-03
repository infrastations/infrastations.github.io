import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import SectionHeader from './SectionHeader';

// Website UI snapshots (desktop, 1440x900)
import inshaHajj1 from '@/assets/portfolio/insha-hajj-umrah-1.jpg';
import inshaHajj2 from '@/assets/portfolio/insha-hajj-umrah-2.jpg';
import madchef1 from '@/assets/portfolio/madchef-1.jpg';
import madchef2 from '@/assets/portfolio/madchef-2.jpg';
import northview1 from '@/assets/portfolio/northview-1.jpg';
import northview2 from '@/assets/portfolio/northview-2.jpg';
import rjstyle1 from '@/assets/portfolio/rjstyle-1.jpg';
import rjstyle2 from '@/assets/portfolio/rjstyle-2.jpg';
import houseInterior1 from '@/assets/portfolio/house-interior-1.jpg';
import houseInterior2 from '@/assets/portfolio/house-interior-2.jpg';
import infracare1 from '@/assets/portfolio/infracare-hospital-1.jpg';
import infracare2 from '@/assets/portfolio/infracare-hospital-2.jpg';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  gallery: string[];
  features: string[];
  results: string[];
  problem: string;
  solution: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "InSha Hajj & Umrah Group",
    category: "Travel & Pilgrimage",
    description: "Complete Hajj & Umrah agency website for a Dhaka-based travel group — package comparison, Shariah consultants, service areas and online booking requests.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Pages"],
    image: inshaHajj1,
    gallery: [inshaHajj1, inshaHajj2],
    features: [
      "Umrah & Hajj package cards with price, dates, hotel distance, flights and food details",
      "Super Saver, Economy, Standard, Premium, Luxury and VIP package tiers",
      "Shariah consultant & Umrah guide profiles",
      "Customized Umrah package request and online booking flow",
      "Service-area directory covering all 64 districts of Bangladesh",
      "Video tutorials, client testimonials slider and WhatsApp / phone quick contact",
    ],
    results: ["9 Umrah & Hajj packages", "64 district service areas", "1-click WhatsApp contact"],
    problem: "Pilgrims had no single place to compare Umrah and Hajj packages — prices, hotel distance from Haram, flights and inclusions were scattered across phone calls and Facebook posts.",
    solution: "Built a modern agency website where every package is laid out side-by-side with its price, dates, Makkah/Madinah hotel, flights, food and special services, backed by consultant profiles, a district-wise service area map and direct booking / WhatsApp actions.",
    link: "https://infrastations.github.io/inshahajjumrahagency/",
  },
  {
    id: 2,
    title: "Madchef — Gourmet Burgers",
    category: "Restaurant & Food",
    description: "Bold, appetite-driven website for Madchef, one of Dhaka's best-known burger chains — full digital menu, outlet finder, food gallery and customer reviews.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: madchef1,
    gallery: [madchef1, madchef2],
    features: [
      "Full-screen hero slider showcasing signature dishes",
      "Digital menu with Card View and Table View toggle",
      "Menu grouped by category — teasers, burgers, poutines, rice meals, platters, shakes",
      "Outlet finder for 9 Dhaka branches with Call, Direction and Facebook actions",
      "MAD Gallery of signature dishes, brand story and customer reviews",
    ],
    results: ["39 menu items online", "9 outlets with directions", "2 menu view modes"],
    problem: "The restaurant's menu, prices and branch locations lived only on social media, making it hard for customers to quickly check what to order and which outlet was nearest.",
    solution: "Designed a dark, high-energy brand site with a categorised digital menu (switchable card / table view), a branch directory with one-tap call and Google Maps directions, a food gallery and a reviews section that reinforces the brand story.",
    link: "https://infrastations.github.io/madchef/",
  },
  {
    id: 3,
    title: "Northview International School & College",
    category: "Education",
    description: "Bilingual (Bangla & English) school website with notice board, events, news, faculty directory, photo gallery, results and online admission.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    image: northview1,
    gallery: [northview1, northview2],
    features: [
      "Live Notice Board, Latest Events and Latest News panels",
      "Online admission (Apply Now) flow",
      "Chairman's & Principal's messages, awards and 'Why Study Here' pages",
      "Teacher directory with faculty profiles",
      "Categorised photo gallery — classroom, cultural, science fair, sports",
      "Digital content, facilities and result sections",
    ],
    results: ["3 live info boards", "4 gallery albums", "2 languages supported"],
    problem: "Parents and students depended on printed notices and word of mouth for exams, holidays, events and admission information.",
    solution: "Built a bilingual institutional website where notices, events and news are published in one place, alongside admission, faculty, gallery, facilities and results — giving the school an always-up-to-date public face.",
    link: "https://infrastations.github.io/northviewisc/",
  },
  {
    id: 4,
    title: "RJ Style — Beauty E-Commerce",
    category: "E-Commerce",
    description: "Premium cosmetics & skincare storefront for a Bangladesh beauty brand — product catalogue, cart, combo offers, beauty blog and instant WhatsApp / Imo ordering.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lovable Cloud"],
    image: rjstyle1,
    gallery: [rjstyle1, rjstyle2],
    features: [
      "Shop by category — Face & Base, Eyes & Brows, Lips, Skincare",
      "Best-seller product grid with Add-to-Cart and pagination",
      "Shopping cart with live item counter",
      "Combo / bundle offers page",
      "Bangla beauty journal (blog) and video section",
      "Instant ordering via WhatsApp & Imo with floating order button",
    ],
    results: ["4 shop categories", "2 instant order channels", "7 storefront pages"],
    problem: "The brand sold mostly through social media DMs — customers couldn't browse the full range, compare prices or trust product authenticity.",
    solution: "Created an elegant storefront with categorised products, cart, combo deals, bilingual reviews and a beauty blog, while keeping the familiar WhatsApp / Imo ordering path one tap away.",
    link: "https://rjstyle.lovable.app/",
  },
  {
    id: 5,
    title: "House & Interior Design Ideas",
    category: "Architecture & Interior",
    description: "Editorial-style website for an architecture & interior design studio — project portfolio, services, process, journal, client portal and an interactive style quiz.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lovable Cloud"],
    image: houseInterior1,
    gallery: [houseInterior1, houseInterior2],
    features: [
      "Cinematic hero with studio stats (projects, years, return clientele)",
      "Selected-work portfolio grid with project location & type",
      "Interactive before / after drag slider for transformations",
      "Services: architectural design, interior design, renovation",
      "Signature Style Quiz — six visual questions to a personal style profile",
      "Process, journal, client portal and 'Start a Project' enquiry",
    ],
    results: ["5 featured projects", "6-question style quiz", "3 design disciplines"],
    problem: "The studio needed a premium online presence that communicates design quality visually and converts visitors into qualified project enquiries.",
    solution: "Designed a calm, magazine-like experience with full-bleed project imagery, a before/after transformation slider, an engaging style quiz for lead capture and a client portal for ongoing projects.",
    link: "https://houseandinteriordesignideas.lovable.app/",
  },
  {
    id: 6,
    title: "Infra Care Hospital",
    category: "Healthcare",
    description: "Full hospital website — departments, consultant directory, appointment booking, interactive body-part department finder, services and health check-up packages.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lovable Cloud"],
    image: infracare1,
    gallery: [infracare1, infracare2],
    features: [
      "Interactive body-part selector (male / female) to find the right department",
      "41 specialised departments with dedicated pages",
      "Consultant / doctor directory with 'Book Now' appointment",
      "Services — Emergency, OPD, IPD, ICU, HDU and more",
      "Health check-up packages with discounted pricing",
      "Patient success stories, media and 24/7 emergency contact",
    ],
    results: ["41 departments listed", "15 body-part finder zones", "24/7 emergency access"],
    problem: "Patients often don't know which department or specialist to visit, and hospital information (doctors, services, packages) was hard to find online.",
    solution: "Built a patient-first hospital portal with an interactive body map that routes patients to the right department, a searchable consultant directory with appointment booking, and clear service and check-up package pages.",
    link: "https://infracarehospital.lovable.app/",
  },
];

function BrowserFrame({ url, children, className = '' }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-white shadow-elevated ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 flex min-w-0 flex-1 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] text-muted-foreground">
          <Globe className="h-2.5 w-2.5 shrink-0" />
          <span className="truncate">{url}</span>
        </span>
      </div>
      {children}
    </div>
  );
}

const displayUrl = (link: string) => link.replace(/^https?:\/\//, '').replace(/\/$/, '');

function ProjectCard({ project, index, onViewDetails }: {
  project: Project,
  index: number,
  onViewDetails: (project: Project) => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group surface surface-hover flex cursor-pointer flex-col overflow-hidden"
      onClick={() => onViewDetails(project)}
    >
      {/* Snapshot stage */}
      <div className="relative overflow-hidden bg-gradient-soft px-6 pt-6">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-indigo shadow-sm backdrop-blur">
          {project.category}
        </span>
        <BrowserFrame
          url={displayUrl(project.link)}
          className="relative mt-8 translate-y-2 rounded-b-none transition-transform duration-500 ease-out group-hover:translate-y-0"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.gallery[0]}
              alt={`${project.title} website homepage`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={project.gallery[1] ?? project.gallery[0]}
              alt={`${project.title} website section`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </BrowserFrame>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              <span className="line-clamp-1 text-foreground/75">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-7">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
            Case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Visit ${project.title} live website`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Live site
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, isOpen, onClose }: {
  project: Project | null,
  isOpen: boolean,
  onClose: () => void
}) {
  const [activeShot, setActiveShot] = useState(0);
  if (!project) return null;
  const shot = project.gallery[activeShot] ?? project.gallery[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { setActiveShot(0); onClose(); } }}>
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border-border bg-white p-0 sm:rounded-3xl">
        {/* Visual header */}
        <div className="relative bg-gradient-soft px-6 pt-8 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="relative pr-8">
            <span className="rounded-full border border-white bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-indigo">
              {project.category}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">{project.title}</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <BrowserFrame url={displayUrl(project.link)} className="relative mt-8 rounded-b-none">
            <img src={shot} alt={`${project.title} website snapshot ${activeShot + 1}`} className="block h-auto w-full" />
          </BrowserFrame>
        </div>

        <div className="space-y-10 px-6 py-8 sm:px-10">
          {project.gallery.length > 1 && (
            <div className="-mt-2 flex gap-3">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveShot(idx)}
                  className={`aspect-[16/10] w-28 overflow-hidden rounded-lg border-2 transition-all ${
                    idx === activeShot ? 'border-primary shadow-brand' : 'border-border opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Show snapshot ${idx + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((result, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-muted/40 p-5">
                <div className="font-display text-3xl font-extrabold text-gradient-brand">{result.split(' ')[0]}</div>
                <div className="mt-1 text-sm text-muted-foreground">{result.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-magenta">The challenge</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">Our solution</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Core functionalities</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start rounded-xl border border-border p-3.5 text-sm">
                  <CheckCircle2 className="mr-2.5 mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Technologies used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-brand flex-1">
              <ExternalLink className="h-4 w-4" />
              View Live Project
            </a>
            <a href="#contact" onClick={() => { setActiveShot(0); onClose(); }} className="btn-ghost-brand flex-1">
              Start a similar project
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-soft blur-3xl opacity-80" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            className="lg:max-w-3xl"
            eyebrow="Featured work"
            title={<>Real projects. <span className="text-gradient-brand">Real results.</span></>}
            lead="A selection of platforms we've designed and shipped for businesses across travel, food, education, retail, design and healthcare."
          />
          <a href="#contact" className="btn-ghost-brand shrink-0 self-start lg:self-auto">
            Start your project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}
