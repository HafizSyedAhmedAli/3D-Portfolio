import type { CityPageData } from "@/components/city/CityPageTemplate";
import { CityPageProject, CityPageTestimonial } from "@/types";

const COMMON_PROJECTS: CityPageProject[] = [
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

const COMMON_TESTIMONIALS: CityPageTestimonial[] = [
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
      "Professional endorsement from Ayza Noor at Fortify Technologies praising Ahmed Ali's diligence and contributions.",
  },
] as const;

const COMMON_AVAILABILITY = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Response time", value: "Within 24 hours", dot: false },
  { label: "Consultation", value: "Free 30 min call", dot: false },
  { label: "Availability", value: "Immediate start", dot: false },
] as const;

const COMMON_STATS = [
  { label: "Response Time", value: "< 24hrs" },
  { label: "Projects Live", value: "3+" },
  { label: "On-Time Rate", value: "100%" },
] as const;

const COMMON_SERVICES_STRIP = [
  "Full-Stack Development",
  "Web Development",
  "AI-Powered SaaS",
  "API Engineering",
  "Database Architecture",
  "Stripe & Subscriptions",
] as const;

// ─── Austin ───────────────────────────────────────────────────────────────────

export const austinPageData: CityPageData = {
  keyword: "web developer austin tx",
  cityName: "Austin",
  cityState: "TX",
  citySlug: "austin",
  profileImageUrl:
    "/images/professional-web-developer-austin-tx-full-stack-ai-powered-apps.png",
  profileImageAlt: "Professional Web Developer Austin TX",

  h1Line1: "Professional Web Developer Austin TX",
  h1Line2: "– Full-Stack & AI-Powered Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Austin TX</strong> clients trust for production-ready Next.js, Node.js, PostgreSQL, and Redis applications. From SaaS platforms to AI-powered tools, I ship clean code that works.`,
  bulletPoints: [
    "Production-ready Next.js, Node.js & PostgreSQL apps",
    "AI-powered SaaS platforms with real users",
    "Clean architecture — controller, service, repository layers",
    "On-time delivery with transparent communication",
  ],

  aboutH2: "The Web Developer Austin TX Businesses Actually Call Back",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer with hands-on experience building production-ready applications that handle real users, real data, and real revenue. My work goes beyond writing code; I design systems that scale.",
    "I focus on the complete package: clean architecture, optimized databases, fast APIs, and polished UIs. Every project includes type-safe configurations, automated error handling, and centralized response management from day one — not bolted on after launch.",
    "I've shipped a live football match platform with real-time scores and Stripe subscriptions, a multi-tenant B2B SaaS with AI chat widgets, and a full-stack e-commerce marketplace — all deployed and serving real users right now.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Full-Stack & AI-Powered Apps" },
    { label: "Delivery", value: "Production-ready, every time" },
    { label: "Based in", value: "Pakistan — serving Austin TX remotely" },
  ],
  abilityCards: [
    {
      icon: "🏗️",
      title: "Scalable Architecture",
      desc: "Controller → Service → Repository layers. Clean, testable, maintainable.",
    },
    {
      icon: "⚡",
      title: "Performance First",
      desc: "Redis caching, indexed queries, sub-150ms API responses. Your users won't wait.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Features",
      desc: "Embed AI chat widgets, voice agents, and intelligent automation into your product.",
    },
    {
      icon: "🚀",
      title: "Ship-Ready by Default",
      desc: "Every project ships production-ready with environment configs and error boundaries.",
    },
  ],

  projectsH2: "Real Projects. Deployed. Live.",
  projectsSubtitle:
    "These aren't mockups or side experiments — they're production applications serving real users. This is the standard every Austin TX client gets.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Don't Take My Word for It",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "What Sets This Austin Developer Apart",
  whyCards: [
    {
      title: "Full-Stack Expertise",
      desc: "Frontend to backend to database — one developer who owns the entire stack. No handoffs, no bottlenecks.",
    },
    {
      title: "AI-Ready Development",
      desc: "I integrate LLMs, voice agents, and AI chat widgets natively into your web application.",
    },
    {
      title: "Production-Ready Code",
      desc: "Type-safe configs, error boundaries, and centralized logging shipped from commit one. Not bolted on later.",
    },
    {
      title: "Fast Turnaround",
      desc: "I respond within 24 hours and deliver on schedule. Austin TX clients can expect consistent communication.",
    },
    {
      title: "Proven Live Projects",
      desc: "Flacron, Relay, and GreenCart are all live and serving real users — not just portfolio screenshots.",
    },
    {
      title: "Transparent Process",
      desc: "You get clear milestones, regular updates, and documented code you can maintain after delivery.",
    },
  ],

  servicesH2: "What I Build for Austin Clients",
  services: [
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end development using Next.js, Node.js, and PostgreSQL. I build the frontend, backend API, database schema, and deployment pipeline — everything you need to launch.",
      details: [
        "Custom SaaS platforms and customer portals",
        "Internal business tools and dashboards",
        "Authentication, payments, and role management",
        "Deployment, monitoring, and maintenance",
      ],
    },
    {
      title: "AI-Powered SaaS Development",
      desc: "I integrate LLMs, voice agents, and AI chat widgets natively into your web application. Real AI features that genuinely improve your product.",
      details: [
        "OpenAI and LLM integrations",
        "AI chat assistants and copilots",
        "Document processing and automation",
        "Voice agents and workflow automation",
      ],
    },
    {
      title: "API Design & Backend Engineering",
      desc: "RESTful APIs built with Express.js and Node.js, following controller-service-repository architecture. Swagger-documented, Zod-validated, and tested before delivery.",
      details: [
        "REST API development",
        "Authentication and authorization",
        "Swagger documentation",
        "Validation and testing pipelines",
      ],
    },
    {
      title: "Database Architecture & Optimization",
      desc: "PostgreSQL schema design with proper indexing, Redis caching layers for sub-millisecond reads, and query optimization that keeps your app fast as it scales.",
      details: [
        "Database schema design",
        "Query optimization",
        "Redis caching",
        "Scalability planning",
      ],
    },
    {
      title: "E-Commerce & Subscription Platforms",
      desc: "Stripe integration, subscription management, role-based access control, and admin dashboards. I have shipped this stack in production and know where the edge cases are.",
      details: [
        "Stripe subscriptions",
        "Recurring billing",
        "Customer dashboards",
        "Admin management systems",
      ],
    },
    {
      title: "Performance & Technical Audits",
      desc: "I review your existing codebase, identify bottlenecks, and deliver a prioritized report with actionable fixes.",
      details: [
        "Frontend performance reviews",
        "Database bottleneck analysis",
        "API latency investigation",
        "Architecture recommendations",
      ],
    },
  ],

  coverageH2: "Based in Austin, Available Across All of Texas",
  coverageParagraphs: [
    `I work remotely with businesses across the entire Austin metro — Round Rock, Cedar Park, Pflugerville, Georgetown, Leander, Kyle, Buda, San Marcos, and beyond. If you're searching for a <strong class="text-white">web developer austin tx</strong>, distance is never a barrier. You get the same quality whether you're on South Congress or out in the Hill Country.`,
    "Austin is one of the fastest-growing tech hubs in the US. From the Domain to Downtown, startups and established companies need developers who know modern stacks. My expertise in Next.js, TypeScript, Node.js, PostgreSQL, and Redis puts your project on the same level as what top Austin tech companies ship internally.",
    "I also cover the wider Texas market. Whether you're in Dallas, Houston, San Antonio, Fort Worth, Plano, or Frisco — remote collaboration means you get the same quality, just without the Austin agency price tag.",
  ],
  cityLinks: [
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
    { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
    { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
    { city: "Plano TX", href: "/web-developer-plano-tx" },
    { city: "Frisco TX", href: "/web-developer-frisco-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Austin TX Today",
  contactSubtitle:
    "Have a project in mind? Fill in the details below and I'll get back to you within 24 hours with a free consultation.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-austin" },
    { name: "Projects", href: "#projects-austin" },
    { name: "Testimonials", href: "#testimonials-austin" },
    { name: "Why Hire Me", href: "#hire-me-austin" },
    { name: "Services", href: "#services-austin" },
    { name: "Book Appointment", href: "#appointment-austin" },
  ],
  navCTALabel: "Hire Web Developer Austin TX",
  contactId: "contact-austin",
  appointmentId: "appointment-austin",
};

// ─── Dallas ───────────────────────────────────────────────────────────────────

export const dallasPageData: CityPageData = {
  keyword: "web developer dallas tx",
  cityName: "Dallas",
  cityState: "TX",
  citySlug: "dallas",
  profileImageUrl:
    "/images/web-developer-dallas-tx-saas-ai-full-stack-engineering.png",
  profileImageAlt: "Web Developer Dallas TX",

  h1Line1: "Web Developer Dallas TX",
  h1Line2: "– SaaS, AI & Full-Stack Engineering",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Dallas TX</strong> trusted for complex SaaS products, AI integrations, and enterprise-grade backends built with Next.js, Node.js, and PostgreSQL. I don't just write code — I build systems that last.`,
  bulletPoints: [
    "End-to-end Next.js, Node.js & PostgreSQL development",
    "AI integrations, voice agents, and SaaS platforms",
    "Production-proven architecture with real live users",
    "Direct communication — no agencies, no middlemen",
  ],

  aboutH2: "The Web Developer Dallas TX Clients Keep Coming Back To",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds production-ready software that handles real traffic, real transactions, and real business requirements. I don't build prototypes; I build products.",
    "Dallas businesses need developers who understand scale. My background in layered backend architecture, database optimization, and AI integration means your application is built to grow — not rebuilt every 12 months when requirements change.",
    "I've shipped a live sports platform with Stripe subscriptions and real-time scores, a multi-tenant enterprise SaaS with embedded AI chat, and a full-stack marketplace. Every one of these is live, serving users, and maintained.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "SaaS Platforms & AI Integration" },
    { label: "Delivery", value: "On-time, documented, production-ready" },
    { label: "Based in", value: "Pakistan — serving Dallas TX remotely" },
  ],
  abilityCards: [
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
  ],

  projectsH2: "What a Web Developer Dallas TX Delivers — Not Promises",
  projectsSubtitle:
    "Every project below is live in production with real users, real data, and real business logic. This is the baseline for every Dallas client I work with.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Results That Speak for Themselves",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Dallas TX Businesses Choose Ahmed Ali",
  whyCards: [
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
  ],

  servicesH2: "Web Development Services for Dallas TX Companies",
  services: [
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
  ],

  coverageH2: "Web Developer Dallas TX — Serving All of DFW",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer dallas tx</strong> clients reach out to, I cover the entire Dallas-Fort Worth metroplex remotely — including Plano, Frisco, Irving, Garland, McKinney, Allen, Richardson, Carrollton, Lewisville, and beyond. You get the same quality product whether you're in Uptown Dallas or out in the suburbs.`,
    "Dallas is one of the most competitive tech markets in the United States. From the Telecom Corridor in Richardson to the start-up scene in Deep Ellum, businesses here need developers who can ship fast without cutting corners. My expertise in Next.js, TypeScript, PostgreSQL, Redis, and AI integration means your product is built to compete at that level.",
    `I also cover the broader Texas market. If you need a <strong class="text-white">web developer dallas tx</strong> who can also handle projects in Austin, Houston, or San Antonio — same developer, same standards, same direct communication. No agency markup.`,
  ],
  cityLinks: [
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
    { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
    { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
    { city: "Plano TX", href: "/web-developer-plano-tx" },
    { city: "Frisco TX", href: "/web-developer-frisco-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Dallas TX Today",
  contactSubtitle:
    "Have a project in mind? Tell me what you're building and I'll get back to you within 24 hours. Every engagement starts with a free 30-minute consultation.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-dallas" },
    { name: "Projects", href: "#projects-dallas" },
    { name: "Testimonials", href: "#testimonials-dallas" },
    { name: "Why Hire Me", href: "#hire-me-dallas" },
    { name: "Services", href: "#services-dallas" },
    { name: "Book Appointment", href: "#appointment-dallas" },
  ],
  navCTALabel: "Hire Web Developer Dallas TX",
  contactId: "contact-dallas",
  appointmentId: "appointment-dallas",
};

// ─── Houston ──────────────────────────────────────────────────────────────────

export const houstonPageData: CityPageData = {
  keyword: "web developer houston tx",
  cityName: "Houston",
  cityState: "TX",
  citySlug: "houston",
  profileImageUrl:
    "/images/web-developer-houston-tx-enterprise-backends-ai-apps.png",
  profileImageAlt: "Web Developer Houston TX",

  h1Line1: "Web Developer Houston TX",
  h1Line2: "– Enterprise Backends & AI Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Houston TX</strong> businesses trust for reliable, scalable software. I build enterprise-grade backends, AI-powered SaaS platforms, and full-stack applications with Next.js, Node.js, and PostgreSQL. Systems that hold up when it matters.`,
  bulletPoints: [
    "Production-grade Next.js, Node.js & PostgreSQL systems",
    "AI integrations and enterprise backend architecture",
    "Stripe billing, subscriptions, and admin dashboards",
    "Reliable delivery — on time, every time",
  ],

  aboutH2: "The Web Developer Houston TX Businesses Rely On",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds software that performs under real conditions. Houston businesses deal with high transaction volumes, demanding users, and zero tolerance for downtime. That's the bar I build to.",
    "My work covers the full stack: layered backend architecture, optimized PostgreSQL schemas, Redis-backed caching, and polished Next.js frontends. Every project is type-safe, documented, and shipped with error handling built in from the start.",
    "I've shipped a real-time sports platform with Stripe subscriptions and live data, an enterprise multi-tenant SaaS with AI chat widgets, and a high-throughput e-commerce marketplace. All live, all maintained, all serving real users right now.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Enterprise Backends & AI Integration" },
    { label: "Delivery", value: "Reliable, documented, production-ready" },
    { label: "Based in", value: "Pakistan — serving Houston TX remotely" },
  ],
  abilityCards: [
    {
      icon: "🛢️",
      title: "Industry-Scale Backends",
      desc: "Systems built for high transaction volumes, concurrent users, and the reliability enterprise clients demand.",
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
  ],

  projectsH2: "Live Projects — Not Just Screenshots",
  projectsSubtitle:
    "Each of these is deployed, serving real users, and handling real business logic. Houston clients get the same production standard — no exceptions.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Proof in Their Own Words",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Houston TX Businesses Choose Ahmed Ali",
  whyCards: [
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
  ],

  servicesH2: "Web Development Services for Houston TX Businesses",
  services: [
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end Next.js and Node.js applications built for Houston businesses — from product architecture to live deployment.",
      details: [
        "Custom SaaS and multi-tenant platforms",
        "Business dashboards and portals",
        "Real-time features with WebSockets",
        "Full deployment and post-launch support",
      ],
    },
    {
      title: "Enterprise API & Backend Engineering",
      desc: "Production-grade Express.js APIs with controller-service-repository layering, Swagger documentation, and Zod validation.",
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
      desc: "PostgreSQL schema design built for your product's query patterns, combined with Redis caching for sub-millisecond reads on hot data paths.",
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
      desc: "I review your existing codebase for performance bottlenecks, security gaps, and architectural debt — then deliver a written action plan.",
      details: [
        "Full codebase review",
        "Security and auth audit",
        "API and database performance analysis",
        "Refactor roadmap with effort estimates",
      ],
    },
  ],

  coverageH2: "Web Developer Houston TX — Covering Greater Houston",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer houston tx</strong> businesses hire, I work remotely across the entire Greater Houston area — Sugar Land, The Woodlands, Pearland, Katy, Pasadena, Baytown, League City, and beyond. Whether you're in the Energy Corridor, Downtown, or the Texas Medical Center, remote collaboration means you get the same output without paying Houston agency rates.`,
    "Houston is one of the largest and most economically diverse cities in the country. From energy companies needing operational dashboards to healthcare tech startups building patient portals, the demands here are real and the stakes are high. My expertise in Next.js, Node.js, PostgreSQL, Redis, and AI integration delivers software that holds up in those environments.",
    `I also cover the wider Texas market. If you need a <strong class="text-white">web developer houston tx</strong> who can work across Austin and Dallas projects too — same developer, same standards, no agency overhead.`,
  ],
  cityLinks: [
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
    { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
    { city: "Plano TX", href: "/web-developer-plano-tx" },
    { city: "Frisco TX", href: "/web-developer-frisco-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Houston TX Today",
  contactSubtitle:
    "Have a project in mind? Describe what you need and I'll respond within 24 hours with a free consultation — no commitment required.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-houston" },
    { name: "Projects", href: "#projects-houston" },
    { name: "Testimonials", href: "#testimonials-houston" },
    { name: "Why Hire Me", href: "#hire-me-houston" },
    { name: "Services", href: "#services-houston" },
    { name: "Book Appointment", href: "#appointment-houston" },
  ],
  navCTALabel: "Hire Web Developer Houston TX",
  contactId: "contact-houston",
  appointmentId: "appointment-houston",
};

// ─── Sacramento ───────────────────────────────────────────────────────────────

export const sacramentoPageData: CityPageData = {
  keyword: "web developer sacramento ca",
  cityName: "Sacramento",
  cityState: "CA",
  citySlug: "sacramento",
  profileImageUrl:
    "/images/web-developer-sacramento-ca-full-stack-ai-nextjs.png",
  profileImageAlt: "Web Developer Sacramento CA",

  h1Line1: "Web Developer Sacramento CA",
  h1Line2: "– Full-Stack, SaaS & AI Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Sacramento CA</strong> startups and growing businesses trust to ship production-ready applications. Next.js, Node.js, PostgreSQL, and AI integrations — built clean, built to last.`,
  bulletPoints: [
    "Production-ready Next.js, Node.js & PostgreSQL apps",
    "AI-powered SaaS platforms with real users and real revenue",
    "Layered backend architecture — controller, service, repository",
    "24-hour response time with transparent project communication",
  ],

  aboutH2: "The Web Developer Sacramento CA Businesses Actually Keep",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds software that handles real traffic, real users, and real business logic. Sacramento's tech scene is growing fast, and the businesses here need more than a pretty website — they need systems that hold up.",
    "I bring clean architecture, optimized database design, Redis-backed caching, and polished Next.js frontends to every engagement. Type-safe from the start, documented before delivery, and built so your next hire doesn't need three months to understand what I built.",
    "My live portfolio includes a football platform with Stripe subscriptions and real-time scores, a multi-tenant enterprise SaaS with embedded AI chat widgets, and a high-performance e-commerce marketplace. These aren't demos — they're deployed and serving users right now.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Full-Stack Web & AI-Powered SaaS" },
    { label: "Delivery", value: "Production-ready, documented, on-time" },
    { label: "Based in", value: "Pakistan — serving Sacramento CA remotely" },
  ],
  abilityCards: [
    {
      icon: "🏗️",
      title: "Clean System Design",
      desc: "Every backend is structured in controller, service, and repository layers — independently testable and easy to extend.",
    },
    {
      icon: "⚡",
      title: "Performance by Default",
      desc: "Redis caching, indexed PostgreSQL queries, and sub-150ms API response times. Speed isn't an afterthought.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      desc: "LLMs, voice agents, and AI chat widgets built directly into your product — not bolted on after launch.",
    },
    {
      icon: "🔒",
      title: "Secure from Commit One",
      desc: "Auth, input validation, rate limiting, and environment hardening are built in by default — never retrofitted.",
    },
  ],

  projectsH2: "Live Projects — Sacramento-Level Standards",
  projectsSubtitle:
    "Every project below is deployed, serving real users, and running real business logic. This is what Sacramento clients get — no exceptions.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Proven Results, Not Promises",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Sacramento CA Businesses Choose Ahmed Ali",
  whyCards: [
    {
      title: "Full-Stack Ownership",
      desc: "Frontend, backend, database, and deployment — one developer who owns the entire product. No handoffs, no dropped context.",
    },
    {
      title: "Government & Enterprise Aware",
      desc: "Sacramento's economy runs on government tech and healthcare. I build systems that prioritize reliability, auditability, and clean documentation.",
    },
    {
      title: "No Middlemen",
      desc: "You talk directly to the developer writing your code. No agencies, no account managers padding the bill.",
    },
    {
      title: "AI-Ready Development",
      desc: "From LLM integrations to voice automation — I embed AI natively into your product so it actually improves your workflow.",
    },
    {
      title: "Deadline-Driven",
      desc: "I respond within 24 hours and commit to realistic timelines. Sacramento clients get consistent updates and on-time delivery.",
    },
    {
      title: "Maintainable by Design",
      desc: "TypeScript throughout, Swagger docs included, and clean code patterns mean your team can confidently extend what I build.",
    },
  ],

  servicesH2: "Web Development Services for Sacramento CA Businesses",
  services: [
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end Next.js and Node.js development covering frontend, backend API, database schema, and deployment — everything you need to launch a production product.",
      details: [
        "Custom SaaS platforms and multi-tenant apps",
        "Internal business tools and admin dashboards",
        "Authentication, roles, and permissions",
        "Full deployment with post-launch support",
      ],
    },
    {
      title: "AI Feature Integration",
      desc: "I embed AI capabilities directly into your web product — chat assistants, document pipelines, voice agents, and intelligent automation that runs in production.",
      details: [
        "OpenAI and Claude LLM integrations",
        "Embeddable AI chat widgets",
        "Voice agent pipelines via VAPI",
        "Document summarization and processing",
      ],
    },
    {
      title: "Backend API & System Engineering",
      desc: "Clean Express.js APIs following controller-service-repository architecture, Swagger-documented, Zod-validated, and tested before delivery.",
      details: [
        "RESTful API design and versioning",
        "Auth middleware and rate limiting",
        "Third-party API integrations",
        "OpenAPI / Swagger documentation",
      ],
    },
    {
      title: "Database Architecture & Performance",
      desc: "PostgreSQL schema design with proper indexing strategy, combined with Redis caching for sub-millisecond reads on high-traffic data paths.",
      details: [
        "Relational schema design and normalization",
        "Index optimization and query tuning",
        "Redis caching layer configuration",
        "Scalability and migration planning",
      ],
    },
    {
      title: "Stripe Payments & Subscriptions",
      desc: "Full billing infrastructure — one-time payments, subscriptions, trials, webhooks, and customer management portals, all tested in production.",
      details: [
        "Stripe Checkout and Billing Portal",
        "Subscription lifecycle management",
        "Webhook handling and retry logic",
        "Admin revenue and billing dashboard",
      ],
    },
    {
      title: "Technical Audit & Codebase Review",
      desc: "I review your existing application for performance bottlenecks, security gaps, and architectural debt — then deliver a written action plan with prioritized fixes.",
      details: [
        "Full codebase and architecture review",
        "Security and authentication audit",
        "API and database performance analysis",
        "Written report with effort estimates",
      ],
    },
  ],

  coverageH2: "Web Developer Sacramento CA — Serving Greater Sacramento",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer in Sacramento CA</strong>, I work remotely across the entire Greater Sacramento area — Elk Grove, Roseville, Folsom, Rancho Cordova, Davis, Woodland, West Sacramento, and beyond. Whether you're building a civic tech tool near the Capitol or a startup in Midtown, remote collaboration means you get production-grade software without the downtown agency price tag.`,
    "Sacramento is evolving from a government hub into a genuine tech market. From health-tech companies near UC Davis Medical Center to logistics-tech startups in the River District, the demand for reliable, scalable web development has never been higher. My expertise in Next.js, Node.js, PostgreSQL, Redis, and AI integration meets that demand directly.",
    `I also serve the broader California market. If you need a <strong class="text-white">web developer sacramento ca</strong> who can also handle projects in Los Angeles or San Francisco — same developer, same standards, no agency overhead.`,
  ],
  cityLinks: [
    { city: "Los Angeles CA", href: "/web-developer-los-angeles-ca" },
    { city: "San Francisco CA", href: "/web-developer-san-francisco-ca" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Sacramento CA Today",
  contactSubtitle:
    "Describe your project and I'll respond within 24 hours with a free consultation — no commitment required.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-sacramento" },
    { name: "Projects", href: "#projects-sacramento" },
    { name: "Testimonials", href: "#testimonials-sacramento" },
    { name: "Why Hire Me", href: "#hire-me-sacramento" },
    { name: "Services", href: "#services-sacramento" },
    { name: "Book Appointment", href: "#appointment-sacramento" },
  ],
  navCTALabel: "Hire Web Developer Sacramento CA",
  contactId: "contact-sacramento",
  appointmentId: "appointment-sacramento",
};

// ─── Los Angeles ──────────────────────────────────────────────────────────────

export const losAngelesPageData: CityPageData = {
  keyword: "web developer los angeles ca",
  cityName: "Los Angeles",
  cityState: "CA",
  citySlug: "los-angeles",
  profileImageUrl:
    "/images/web-developer-los-angeles-ca-saas-ai-full-stack.png",
  profileImageAlt: "Web Developer Los Angeles CA",

  h1Line1: "Web Developer Los Angeles CA",
  h1Line2: "– SaaS Platforms, AI & Full-Stack",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Los Angeles CA</strong> trusted by founders, startups, and growing companies to ship production-ready software. Next.js, Node.js, PostgreSQL, Redis, and AI — designed to scale from day one.`,
  bulletPoints: [
    "Full-stack Next.js, Node.js & PostgreSQL applications",
    "AI integrations, voice agents, and multi-tenant SaaS",
    "Proven live projects — deployed, not just demonstrated",
    "Direct communication — no agency relay, no wasted time",
  ],

  aboutH2: "The Web Developer Los Angeles CA Startups Actually Ship With",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds software that performs in production. Los Angeles is one of the most competitive tech markets in the world — from entertainment tech in Hollywood to fintech in Century City and health-tech in Koreatown. The bar here is high, and I build to it.",
    "My background covers the entire stack: layered backend architecture in Node.js and Express, optimized PostgreSQL schemas, Redis caching for high-throughput reads, and pixel-sharp Next.js frontends. TypeScript throughout, Swagger-documented, and deployable from day one.",
    "I've shipped a live football platform with real-time Stripe subscriptions, a multi-tenant B2B SaaS with embedded AI chat and voice agents, and a high-performance e-commerce marketplace. All deployed, all maintained, all running for real users right now — not sitting in a GitHub repo marked 'demo'.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "SaaS, AI Features & Full-Stack Apps" },
    { label: "Delivery", value: "On-time, documented, production-grade" },
    { label: "Based in", value: "Pakistan — serving Los Angeles CA remotely" },
  ],
  abilityCards: [
    {
      icon: "🎬",
      title: "Startup-Speed Delivery",
      desc: "LA moves fast. I respond within 24 hours, scope clearly, and ship on schedule — no agency lag.",
    },
    {
      icon: "🔌",
      title: "API-First Architecture",
      desc: "Every backend starts with a clean contract. Swagger-documented, Zod-validated, and versioned from commit one.",
    },
    {
      icon: "🤖",
      title: "Production AI Features",
      desc: "Real LLM integrations, voice automation, and embedded AI widgets — not hallway-demo prototypes.",
    },
    {
      icon: "📊",
      title: "Data Architecture at Scale",
      desc: "PostgreSQL indexing strategy and Redis caching designed for the traffic your LA product will actually see.",
    },
  ],

  projectsH2: "Shipped Projects — Not Portfolio Mockups",
  projectsSubtitle:
    "These are deployed, live applications serving real users with real business logic. This is the standard every Los Angeles client receives.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "What Real Clients Say",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Los Angeles CA Businesses Choose Ahmed Ali",
  whyCards: [
    {
      title: "Entertainment & Creator Tech Ready",
      desc: "LA's digital economy runs on content, streaming, and creator platforms. I build the infrastructure that powers those products.",
    },
    {
      title: "Zero Agency Tax",
      desc: "No middlemen, no account managers, no markup. You pay for a developer — you get a developer who builds your product.",
    },
    {
      title: "Full-Stack in One Person",
      desc: "Frontend, backend, database, and deployment. No handoffs, no dropped context, no surprise gaps at integration time.",
    },
    {
      title: "Startup to Scale",
      desc: "I build with growth in mind — modular architecture, Redis caching, and PostgreSQL indexing that handles the next 10x without a rewrite.",
    },
    {
      title: "Proven in Production",
      desc: "Three live products, real paying users, real transactions. LA clients get the same production standard — not prototypes dressed up as demos.",
    },
    {
      title: "AI as a Feature, Not a Buzzword",
      desc: "I integrate LLMs and voice agents natively into your web product so they actually improve your users' experience.",
    },
  ],

  servicesH2: "Web Development Services for Los Angeles CA Companies",
  services: [
    {
      title: "Full-Stack Web Application Development",
      desc: "Complete Next.js and Node.js product development from architecture to deployment — frontend, backend, database, and everything in between.",
      details: [
        "Custom SaaS and multi-tenant platforms",
        "Creator and content management tools",
        "Customer portals and admin dashboards",
        "Full deployment and post-launch support",
      ],
    },
    {
      title: "AI-Powered Product Development",
      desc: "I embed AI into your web product as a genuine feature — chat assistants, voice agents, content pipelines, and intelligent automation that your users will actually use.",
      details: [
        "OpenAI and Anthropic LLM integrations",
        "Embeddable AI chat widgets for SaaS",
        "Voice agent pipelines via VAPI",
        "Content generation and summarization pipelines",
      ],
    },
    {
      title: "Backend Engineering & API Design",
      desc: "Production Express.js APIs structured in controller-service-repository layers, fully documented with Swagger, validated with Zod, and tested before delivery.",
      details: [
        "RESTful API design and documentation",
        "Authentication, roles, and session management",
        "Third-party service integrations",
        "Rate limiting and security middleware",
      ],
    },
    {
      title: "Database Architecture & Scaling",
      desc: "PostgreSQL schema modeling designed around your query patterns, with Redis caching on top for sub-millisecond reads on high-traffic endpoints.",
      details: [
        "Relational schema design",
        "Index and query optimization",
        "Redis caching layer implementation",
        "Long-term scalability roadmap",
      ],
    },
    {
      title: "Stripe Payments & Subscription Platforms",
      desc: "End-to-end billing infrastructure — one-time charges, recurring subscriptions, trials, webhooks, and customer management — battle-tested in production.",
      details: [
        "Stripe Checkout and Payment Links",
        "Recurring subscription management",
        "Webhook processing and retry handling",
        "Admin billing and revenue dashboard",
      ],
    },
    {
      title: "Performance Audit & Technical Review",
      desc: "I review your existing codebase and infrastructure for bottlenecks, security gaps, and architectural debt, then deliver a clear written action plan.",
      details: [
        "Full codebase and architecture review",
        "Security vulnerability assessment",
        "API latency and database performance audit",
        "Prioritized refactor roadmap",
      ],
    },
  ],

  coverageH2: "Web Developer Los Angeles CA — Covering All of LA County",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer in Los Angeles CA</strong>, I work fully remotely across the entire LA metro — Santa Monica, Culver City, West Hollywood, Burbank, Pasadena, Long Beach, Torrance, El Segundo, Inglewood, and beyond. Whether you're a startup in Silicon Beach or a media company in Burbank, you get the same production-grade output without the Westside agency markup.`,
    "Los Angeles is the second-largest tech market in the United States and the undisputed home of entertainment technology, creator economy infrastructure, and digital media. The demands here — high concurrency, fast iteration, AI integration — are exactly what my stack is built for. Next.js for server-rendered frontends, Node.js and PostgreSQL for reliable backends, Redis for speed, and LLM integrations for intelligent features.",
    `I also serve the broader California market. If you need a <strong class="text-white">web developer los angeles ca</strong> who can also work across San Francisco and Sacramento projects — same developer, same direct communication, no overhead.`,
  ],
  cityLinks: [
    { city: "San Francisco CA", href: "/web-developer-san-francisco-ca" },
    { city: "Sacramento CA", href: "/web-developer-sacramento-ca" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Los Angeles CA Today",
  contactSubtitle:
    "Tell me what you're building and I'll respond within 24 hours with a free consultation — no commitment, no pressure.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-los-angeles" },
    { name: "Projects", href: "#projects-los-angeles" },
    { name: "Testimonials", href: "#testimonials-los-angeles" },
    { name: "Why Hire Me", href: "#hire-me-los-angeles" },
    { name: "Services", href: "#services-los-angeles" },
    { name: "Book Appointment", href: "#appointment-los-angeles" },
  ],
  navCTALabel: "Hire Web Developer Los Angeles CA",
  contactId: "contact-los-angeles",
  appointmentId: "appointment-los-angeles",
};

// ─── San Francisco ────────────────────────────────────────────────────────────

export const sanFranciscoPageData: CityPageData = {
  keyword: "web developer san francisco ca",
  cityName: "San Francisco",
  cityState: "CA",
  citySlug: "san-francisco",
  profileImageUrl:
    "/images/web-developer-san-francisco-ca-enterprise-ai-saas.png",
  profileImageAlt: "Web Developer San Francisco CA",

  h1Line1: "Web Developer San Francisco CA",
  h1Line2: "– Enterprise SaaS & AI Engineering",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in San Francisco CA</strong> who builds enterprise-grade SaaS, AI-powered platforms, and full-stack applications at the quality level the Bay Area demands. Next.js, Node.js, PostgreSQL, Redis — shipped clean, documented, and production-ready.`,
  bulletPoints: [
    "Enterprise-grade Next.js, Node.js & PostgreSQL systems",
    "AI-powered SaaS with LLMs, voice agents, and real deployments",
    "TypeScript throughout — clean architecture, zero shortcuts",
    "Immediate availability with 24-hour response time",
  ],

  aboutH2: "The Web Developer San Francisco CA Engineering Teams Respect",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds production-grade software at the standard Silicon Valley companies actually ship. San Francisco is home to the world's most demanding engineering culture. I don't cut corners, I don't ship MVPs and call them done, and I don't write code that only I can maintain.",
    "My work covers the complete stack with proper separation of concerns: controller-service-repository backends in Node.js and Express, optimized PostgreSQL schemas designed for scale, Redis caching layers targeting sub-150ms API responses, and server-rendered Next.js frontends with TypeScript throughout. Swagger-documented, Zod-validated, tested before delivery.",
    "Three live production applications — a real-time football platform with Stripe billing, a multi-tenant enterprise SaaS with embedded AI and voice agents, and a full-stack e-commerce marketplace — demonstrate what I build for every client, not just for my portfolio.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    {
      label: "Specialty",
      value: "Enterprise SaaS & AI-Powered Applications",
    },
    { label: "Delivery", value: "Enterprise-quality, documented, on-time" },
    {
      label: "Based in",
      value: "Pakistan — serving San Francisco CA remotely",
    },
  ],
  abilityCards: [
    {
      icon: "🏢",
      title: "Enterprise Architecture",
      desc: "Layered backend design, TypeScript monorepos, and clean separation of concerns that survives team growth and requirement changes.",
    },
    {
      icon: "🤖",
      title: "Production AI Systems",
      desc: "LLM integrations, voice agents, and AI automation built to the reliability standard SF engineering teams demand.",
    },
    {
      icon: "⚡",
      title: "Performance Engineering",
      desc: "Redis caching, PostgreSQL indexing, and query optimization targeting sub-150ms P99 API response times.",
    },
    {
      icon: "📋",
      title: "Documentation First",
      desc: "Swagger / OpenAPI docs, README files, and inline TypeScript types. Your team can onboard without asking me questions.",
    },
  ],

  projectsH2: "Production Applications — Not Proof of Concepts",
  projectsSubtitle:
    "San Francisco engineering culture demands proof. Here are three deployed applications with real users, real transactions, and real uptime.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Results That Pass the SF Engineering Bar",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why San Francisco CA Companies Choose Ahmed Ali",
  whyCards: [
    {
      title: "Bay Area Quality Without Bay Area Rates",
      desc: "You get the engineering standards Silicon Valley demands — clean architecture, TypeScript, full documentation — without the $200/hr San Francisco agency premium.",
    },
    {
      title: "AI-Native Development",
      desc: "I don't add AI as a feature request — I architect it in from the start. LLMs, voice agents, and embedding pipelines built into your product's core.",
    },
    {
      title: "Scales With Your Team",
      desc: "Clean TypeScript, proper abstractions, and documented APIs mean your next hire can contribute from week one — not month three.",
    },
    {
      title: "Security and Compliance Aware",
      desc: "Input validation, rate limiting, auth best practices, and environment hardening are standard — not billed as extras.",
    },
    {
      title: "Async-First Communication",
      desc: "Detailed updates, documented decisions, and async-friendly project management. No chasing for status — you're always in the loop.",
    },
    {
      title: "Immediate Availability",
      desc: "I respond within 24 hours and can begin most projects within days of scope alignment. No six-week waitlists.",
    },
  ],

  servicesH2: "Web Development Services for San Francisco CA Companies",
  services: [
    {
      title: "Enterprise SaaS Development",
      desc: "End-to-end enterprise SaaS architecture using Next.js, Node.js, and PostgreSQL — multi-tenant, role-based, and built to handle thousands of concurrent users.",
      details: [
        "Multi-tenant SaaS with role-based access control",
        "Admin dashboards and customer portals",
        "Third-party integrations and webhook handling",
        "Full deployment pipeline and infrastructure setup",
      ],
    },
    {
      title: "AI & LLM Integration Engineering",
      desc: "I architect and integrate AI features into your product at the system level — not as a demo, but as a core capability your users depend on.",
      details: [
        "OpenAI, Anthropic, and open-source LLM integrations",
        "Retrieval-augmented generation (RAG) pipelines",
        "Voice agent automation via VAPI",
        "AI-powered document processing and summarization",
      ],
    },
    {
      title: "Backend Systems & API Engineering",
      desc: "Production-grade Express.js and Node.js APIs built with strict architectural layering, full Swagger documentation, and Zod validation throughout.",
      details: [
        "RESTful API design with versioning",
        "Authentication, authorization, and session management",
        "Rate limiting, logging, and observability",
        "OpenAPI / Swagger documentation",
      ],
    },
    {
      title: "Database Engineering & Optimization",
      desc: "PostgreSQL schema design for your exact query patterns, with Redis caching layers and migration management built to scale as your user base grows.",
      details: [
        "Normalized schema design",
        "Index strategy and query optimization",
        "Redis caching for high-traffic endpoints",
        "Database migration and version control",
      ],
    },
    {
      title: "Payments & Revenue Infrastructure",
      desc: "Complete Stripe billing systems — subscriptions, usage-based pricing, trials, metered billing, and admin reporting — all tested and running in production.",
      details: [
        "Stripe subscriptions and metered billing",
        "Customer management and Billing Portal",
        "Webhook reliability and retry handling",
        "Revenue analytics and admin reporting",
      ],
    },
    {
      title: "Architecture Review & Technical Audit",
      desc: "I audit your existing system for architectural debt, security vulnerabilities, and performance issues, then deliver a prioritized written report with concrete fixes.",
      details: [
        "Codebase and system architecture audit",
        "Security, auth, and dependency review",
        "API and database performance profiling",
        "Written remediation plan with timelines",
      ],
    },
  ],

  coverageH2: "Web Developer San Francisco CA — Serving the Full Bay Area",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer in San Francisco CA</strong>, I work fully remote across the entire Bay Area — SoMa, the Mission, Oakland, Berkeley, San Jose, Palo Alto, Mountain View, Sunnyvale, Santa Clara, Fremont, and beyond. Bay Area companies have always understood that the best engineers aren't always local — remote collaboration is the default here, and I operate to that standard.`,
    "San Francisco is the global center of technology innovation. The engineering expectations here — clean architecture, proper TypeScript, AI-native thinking, production-grade reliability — are exactly what I build to by default. From seed-stage startups in SoMa to Series B companies in the Financial District, the stack I bring is the same stack your senior engineers would choose.",
    `I also serve California-wide. If you need a <strong class="text-white">web developer san francisco ca</strong> who can coordinate across Los Angeles and Sacramento engagements too — same developer, same direct communication, same engineering standards. No agency overhead, no confusion.`,
  ],
  cityLinks: [
    { city: "Los Angeles CA", href: "/web-developer-los-angeles-ca" },
    { city: "Sacramento CA", href: "/web-developer-sacramento-ca" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer San Francisco CA Today",
  contactSubtitle:
    "Have a project that needs Bay Area engineering quality? Describe it below and I'll respond within 24 hours with a free consultation.",

  availability: [...COMMON_AVAILABILITY],
  stats: [...COMMON_STATS],

  navLinks: [
    { name: "About", href: "#about-san-francisco" },
    { name: "Projects", href: "#projects-san-francisco" },
    { name: "Testimonials", href: "#testimonials-san-francisco" },
    { name: "Why Hire Me", href: "#hire-me-san-francisco" },
    { name: "Services", href: "#services-san-francisco" },
    { name: "Book Appointment", href: "#appointment-san-francisco" },
  ],
  navCTALabel: "Hire Web Developer San Francisco CA",
  contactId: "contact-san-francisco",
  appointmentId: "appointment-san-francisco",
};
