import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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

function ProjectCard({ project, index, onViewDetails }: {
  project: Project,
  index: number,
  onViewDetails: (project: Project) => void
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.2, ease: "easeOut" }}
      className="group hover-lift cursor-pointer"
      onClick={() => onViewDetails(project)}
    >
      <div className="card-neon h-full overflow-hidden flex flex-col">
        {/* Website Snapshot */}
        <div className="relative aspect-[16/10] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50">
          {/* Browser bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-card/90 backdrop-blur-sm border-b border-border/50">
            <span className="w-2 h-2 rounded-full bg-red-400/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
            <span className="w-2 h-2 rounded-full bg-green-400/80" />
            <span className="ml-2 text-[10px] text-muted-foreground truncate">
              {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
          </div>
          <img
            src={project.gallery[0]}
            alt={`${project.title} website homepage`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top pt-6 transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={project.gallery[1] ?? project.gallery[0]}
            alt={`${project.title} website section`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top pt-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <div className="absolute bottom-3 left-3 z-20">
            <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/20">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient-primary transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Core Functionalities */}
        <div className="space-y-2 mb-5">
          {project.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
              <span className="text-muted-foreground line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
            View Details
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live website`}>
              Live Site
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => { setActiveShot(0); onClose(); }} className="w-8 h-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Website snapshots */}
          <div>
            <div className="rounded-xl overflow-hidden border border-border/60 bg-muted/30">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/60 bg-card">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 flex items-center text-xs text-muted-foreground truncate">
                  <Globe className="w-3 h-3 mr-1" />
                  {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </span>
              </div>
              <img
                src={shot}
                alt={`${project.title} website snapshot ${activeShot + 1}`}
                className="w-full h-auto block"
              />
            </div>
            {project.gallery.length > 1 && (
              <div className="flex gap-3 mt-3">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveShot(idx)}
                    className={`w-28 aspect-[16/10] rounded-md overflow-hidden border-2 transition-colors ${
                      idx === activeShot ? 'border-primary' : 'border-border/50 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`Show snapshot ${idx + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          {/* Problem */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-3">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Core Functionalities */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Core Functionalities</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted/50 rounded-md text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-neon-cyan mb-3">Project Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.results.map((result, idx) => (
                <div key={idx} className="text-center p-4 card-neon">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex pt-6 border-t border-border/50">
            <Button asChild className="btn-hero flex-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-4 h-4" />
                View Live Project
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-secondary/20 text-sm font-medium text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse-neon"></span>
            Featured Projects
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-primary">Portfolio</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
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
