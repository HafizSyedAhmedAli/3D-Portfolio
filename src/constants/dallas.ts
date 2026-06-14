import type {
  CityPageAbilityCard,
  CityPageAvailability,
  CityPageCityLink,
  CityPageProject,
  CityPageService,
  CityPageStat,
  CityPageTestimonial,
  CityPageWhyCard,
  CityPageHighlight,
  AustinNavLink,
} from "@/types";

export const DALLAS_KEYWORD = "web developer dallas tx" as const;

export const dallasStats: CityPageStat[] = [
  { label: "Response Time", value: "< 24hrs" },
  { label: "Projects Live", value: "3+" },
  { label: "On-Time Rate", value: "100%" },
];

export const dallasAbilityCards: CityPageAbilityCard[] = [
  {
    icon: "🔌",
    title: "API-First Design",
    desc: "Every backend I build starts with a clean contract. Swagger-documented, Zod-validated, versioned from day one.",
  },
  {
    icon: "📦",
    title: "Monorepo & Modular Code",
    desc: "Reusable modules, shared types, and consistent patterns across your entire codebase — no spaghetti.",
  },
  {
    icon: "💳",
    title: "Payments & Subscriptions",
    desc: "Stripe billing, recurring plans, and admin dashboards — shipped and battle-tested in production.",
  },
  {
    icon: "📊",
    title: "Data-Driven Architecture",
    desc: "PostgreSQL schema design, query optimization, and Redis caching that keeps your app fast as it scales.",
  },
];

export const dallasProjects: CityPageProject[] = [
  {
    title: "Flacron Gamezone",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Stripe"],
    desc: "Live football match discovery platform with real-time scores, league standings, Stripe subscriptions, and role-based auth.",
    live: "https://flacrongamezone.com",
    gh: "https://github.com/HafizSyedAhmedAli/Flacron-Gamezone-Local",
    img: "/images/project1.png",
  },
  {
    title: "Relay",
    tags: ["Next.js", "Convex", "VAPI"],
    desc: "Multi-tenant B2B SaaS with embeddable AI chat widgets and real-time voice agents to automate enterprise customer service.",
    live: "https://relay-demo-web.vercel.app",
    gh: "https://github.com/HafizSyedAhmedAli/Relay-Demo",
    img: "/images/project2.png",
  },
  {
    title: "GreenCart",
    tags: ["React", "Express.js", "MongoDB"],
    desc: "High-performance full-stack marketplace with seamless product discovery, secure checkout, and efficient data sync.",
    live: "https://greencart-frontend-ebon.vercel.app",
    gh: "https://github.com/HafizSyedAhmedAli/Greencart-FULL-STACK",
    img: "/images/project3.png",
  },
];

export const dallasTestimonials: CityPageTestimonial[] = [
  {
    name: "RODRIGUE TCHITAKA",
    handle: "@rodrigue-tchitaka",
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    service: "Full-Stack Web Development",
    imgPath: "/images/client1.png",
    imgAlt:
      "Testimonial from Rodrigue Tchitaka praising on-time delivery, smooth live match streaming, and a reliable subscription system built by Ahmed Ali.",
  },
  {
    name: "Ayza Noor",
    handle: "@fortifytechnologies",
    review:
      "Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    service: "Backend Development",
    imgPath: "/images/client2.png",
    imgAlt:
      "Professional endorsement from Ayza Noor at Fortify Technologies praising Ahmed Ali's diligence, active participation, and development contributions.",
  },
];

export const dallasWhyCards: CityPageWhyCard[] = [
  {
    title: "Enterprise-Grade Quality",
    desc: "I build to the standard of software that handles thousands of concurrent users — not just proof-of-concept demos.",
  },
  {
    title: "No Agency Overhead",
    desc: "You work directly with the developer building your product. No project managers, no miscommunication, no inflated rates.",
  },
  {
    title: "Async-Friendly Workflow",
    desc: "Regular updates, documented decisions, and clear milestones mean you're always in the loop — regardless of timezone.",
  },
  {
    title: "Zero Context-Switching Cost",
    desc: "One developer owns the entire stack. What I build on Monday is what I debug on Friday — nothing gets lost in handoffs.",
  },
  {
    title: "Built for Maintenance",
    desc: "Clean code, TypeScript throughout, and proper documentation mean your team can take over without a steep learning curve.",
  },
  {
    title: "Security by Default",
    desc: "Authentication, authorization, input validation, and rate limiting are built in from commit one — not retrofitted later.",
  },
];

export const dallasServices: CityPageService[] = [
  {
    title: "Custom Web Application Development",
    desc: "I build complex web applications from scratch using Next.js, Node.js, and PostgreSQL — covering the full product lifecycle from architecture to deployment.",
    details: [
      "Multi-tenant SaaS platforms",
      "Internal operations tools",
      "Customer-facing portals",
      "Third-party API integrations",
    ],
  },
  {
    title: "AI Integration & Automation",
    desc: "I embed AI into your existing or new product — chat assistants, document processing, voice automation, and intelligent workflows.",
    details: [
      "LLM-powered chat assistants",
      "Document parsing and summarization",
      "Voice agent integrations via VAPI",
      "Custom AI workflow pipelines",
    ],
  },
  {
    title: "Backend Systems & API Engineering",
    desc: "Clean, maintainable Express.js APIs following controller-service-repository architecture. Production-grade from day one.",
    details: [
      "RESTful API design",
      "Middleware and auth layers",
      "Rate limiting and security",
      "Swagger / OpenAPI documentation",
    ],
  },
  {
    title: "Database Design & Performance",
    desc: "I design relational schemas in PostgreSQL with proper indexing, and layer Redis caching on top for high-throughput reads.",
    details: [
      "Schema modeling and normalization",
      "Index strategy and query tuning",
      "Redis caching for hot paths",
      "Migration management",
    ],
  },
  {
    title: "Payments & Subscription Systems",
    desc: "End-to-end Stripe integration including one-time payments, subscriptions, webhooks, and billing portals — all tested in production.",
    details: [
      "Stripe Checkout and Billing Portal",
      "Subscription lifecycle management",
      "Webhook handling and retries",
      "Admin revenue dashboards",
    ],
  },
  {
    title: "Code Reviews & Architecture Audits",
    desc: "I review your existing codebase, identify structural debt and performance bottlenecks, and give you a prioritized action plan.",
    details: [
      "Codebase structure review",
      "Security vulnerability scan",
      "API and DB performance analysis",
      "Written report with prioritized fixes",
    ],
  },
];

export const dallasCityLinks: CityPageCityLink[] = [
  { city: "Austin TX", href: "/web-developer-austin-tx" },
  { city: "Houston TX", href: "/web-developer-houston-tx" },
  { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
  { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
  { city: "Plano TX", href: "/web-developer-plano-tx" },
  { city: "Frisco TX", href: "/web-developer-frisco-tx" },
];

export const dallasAvailability: CityPageAvailability[] = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Response time", value: "Within 24 hours", dot: false },
  { label: "Consultation", value: "Free 30 min call", dot: false },
  { label: "Availability", value: "Immediate start", dot: false },
];

export const dallasBulletPoints: string[] = [
  "End-to-end Next.js, Node.js & PostgreSQL development",
  "AI integrations, voice agents, and SaaS platforms",
  "Production-proven architecture with real live users",
  "Direct communication — no agencies, no middlemen",
];

export const dallasHighlights: CityPageHighlight[] = [
  { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
  { label: "Specialty", value: "SaaS Platforms & AI Integration" },
  { label: "Delivery", value: "On-time, documented, production-ready" },
  { label: "Based in", value: "Pakistan — serving Dallas TX remotely" },
];

export const dallasNavLinks: AustinNavLink[] = [
  { name: "About", href: "#about-dallas" },
  { name: "Projects", href: "#projects-dallas" },
  { name: "Testimonials", href: "#testimonials-dallas" },
  { name: "Why Hire Me", href: "#hire-me-dallas" },
  { name: "Services", href: "#services-dallas" },
  { name: "Book Appointment", href: "#appointment-dallas" },
];

export const dallasServices_strip = [
  "Full-Stack Development",
  "Web Development",
  "AI-Powered SaaS",
  "API Engineering",
  "Database Architecture",
  "Stripe & Subscriptions",
] as const;