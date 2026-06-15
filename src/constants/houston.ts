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

export const HOUSTON_KEYWORD = "web developer houston tx" as const;

export const houstonStats: CityPageStat[] = [
  { label: "Response Time", value: "< 24hrs" },
  { label: "Projects Live", value: "3+" },
  { label: "On-Time Rate", value: "100%" },
];

export const houstonAbilityCards: CityPageAbilityCard[] = [
  {
    icon: "🛢️",
    title: "Industry-Scale Backends",
    desc: "Systems built for high transaction volumes, concurrent users, and the reliability that energy and enterprise clients demand.",
  },
  {
    icon: "⚙️",
    title: "Clean System Design",
    desc: "Controller, service, repository — every layer separated, independently testable, and ready for the next developer.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "LLM integrations, voice agents, and intelligent workflows embedded directly into your web product.",
  },
  {
    icon: "🔒",
    title: "Security First",
    desc: "Auth, input validation, rate limiting, and environment hardening baked in from commit one — never an afterthought.",
  },
];

export const houstonProjects: CityPageProject[] = [
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

export const houstonTestimonials: CityPageTestimonial[] = [
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

export const houstonWhyCards: CityPageWhyCard[] = [
  {
    title: "Reliability You Can Ship",
    desc: "Every project I deliver has error boundaries, type-safe configs, and documented APIs — because production failures cost real money.",
  },
  {
    title: "One Developer, Full Ownership",
    desc: "I own the entire stack. Frontend, backend, database, deployment. No agency relay race, no dropped context between handoffs.",
  },
  {
    title: "Built to Scale from Day One",
    desc: "PostgreSQL with proper indexing, Redis caching, and modular architecture means your app handles growth without a painful rewrite.",
  },
  {
    title: "Direct Communication",
    desc: "You talk to the developer doing the work. No account managers, no status calls with people who don't touch the code.",
  },
  {
    title: "Deadline-Driven Delivery",
    desc: "Houston moves fast. I respond within 24 hours, commit to realistic timelines, and ship on schedule — every time.",
  },
  {
    title: "Clean Handover Ready",
    desc: "Swagger docs, README files, and clean TypeScript code mean your internal team or next developer can hit the ground running.",
  },
];

export const houstonServices: CityPageService[] = [
  {
    title: "Full-Stack Web Application Development",
    desc: "End-to-end Next.js and Node.js applications built for Houston businesses — from product architecture to live deployment. I handle everything.",
    details: [
      "Custom SaaS and multi-tenant platforms",
      "Business dashboards and portals",
      "Real-time features with WebSockets",
      "Full deployment and post-launch support",
    ],
  },
  {
    title: "Enterprise API & Backend Engineering",
    desc: "Production-grade Express.js APIs with controller-service-repository layering, Swagger documentation, and Zod validation. Ready for enterprise integration from day one.",
    details: [
      "RESTful API architecture",
      "Authentication and role management",
      "Third-party service integrations",
      "OpenAPI / Swagger documentation",
    ],
  },
  {
    title: "AI Feature Integration",
    desc: "I embed AI capabilities directly into your web product — chat assistants, document automation, voice agents, and intelligent workflow triggers.",
    details: [
      "OpenAI and Claude integrations",
      "Embeddable AI chat widgets",
      "Voice agent pipelines via VAPI",
      "Document summarization and parsing",
    ],
  },
  {
    title: "Database Architecture & Scaling",
    desc: "PostgreSQL schema design built for the query patterns of your product, combined with Redis caching for sub-millisecond reads on hot data paths.",
    details: [
      "Relational schema design",
      "Index and query optimization",
      "Redis caching layer setup",
      "Long-term scalability planning",
    ],
  },
  {
    title: "Stripe Payments & Subscriptions",
    desc: "Complete billing infrastructure — one-time payments, subscriptions, trials, webhooks, and customer management portals, tested in production.",
    details: [
      "Stripe Checkout and Payment Links",
      "Subscription and trial management",
      "Webhook processing with retries",
      "Admin revenue and billing dashboard",
    ],
  },
  {
    title: "Technical Audit & Refactor",
    desc: "I review your existing codebase for performance bottlenecks, security gaps, and architectural debt — then deliver a written action plan with prioritized fixes.",
    details: [
      "Full codebase review",
      "Security and auth audit",
      "API and database performance analysis",
      "Refactor roadmap with effort estimates",
    ],
  },
];

export const houstonCityLinks: CityPageCityLink[] = [
  { city: "Austin TX", href: "/web-developer-austin-tx" },
  { city: "Dallas TX", href: "/web-developer-dallas-tx" },
  { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
  { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
  { city: "Plano TX", href: "/web-developer-plano-tx" },
  { city: "Frisco TX", href: "/web-developer-frisco-tx" },
];

export const houstonAvailability: CityPageAvailability[] = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Response time", value: "Within 24 hours", dot: false },
  { label: "Consultation", value: "Free 30 min call", dot: false },
  { label: "Availability", value: "Immediate start", dot: false },
];

export const houstonBulletPoints: string[] = [
  "Production-grade Next.js, Node.js & PostgreSQL systems",
  "AI integrations and enterprise backend architecture",
  "Stripe billing, subscriptions, and admin dashboards",
  "Reliable delivery — on time, every time",
];

export const houstonHighlights: CityPageHighlight[] = [
  { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
  { label: "Specialty", value: "Enterprise Backends & AI Integration" },
  { label: "Delivery", value: "Reliable, documented, production-ready" },
  { label: "Based in", value: "Pakistan — serving Houston TX remotely" },
];

export const houstonNavLinks: AustinNavLink[] = [
  { name: "About", href: "#about-houston" },
  { name: "Projects", href: "#projects-houston" },
  { name: "Testimonials", href: "#testimonials-houston" },
  { name: "Why Hire Me", href: "#hire-me-houston" },
  { name: "Services", href: "#services-houston" },
  { name: "Book Appointment", href: "#appointment-houston" },
];

export const houstonServices_strip = [
  "Full-Stack Development",
  "Web Development",
  "AI-Powered SaaS",
  "API Engineering",
  "Database Architecture",
  "Stripe & Subscriptions",
] as const;
