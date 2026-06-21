import type { CityPageData } from "@/components/city/CityPageTemplate";
import {
  COMMON_AVAILABILITY,
  COMMON_PROJECTS,
  COMMON_SERVICES_STRIP,
  COMMON_TESTIMONIALS,
} from "./cityPagesCommon";

// ─── Philadelphia PA ──────────────────────────────────────────────────────────

export const philadelphiaPageData: CityPageData = {
  keyword: "web developer philadelphia pa",
  cityName: "Philadelphia",
  cityState: "PA",
  citySlug: "philadelphia",

  metaTitle: "Web Developer Philadelphia PA | Healthcare & AI | Ahmed Ali",
  metaDescription:
    "Need a Philadelphia PA web developer? Ahmed Ali builds scalable Next.js, Node.js & AI apps for healthcare & fintech. Real results.",

  profileImageUrl:
    "/images/web-developer-philadelphia-pa-healthcare-fintech-full-stack.png",
  profileImageAlt: "Web Developer Philadelphia PA – Healthcare & Fintech Apps",

  h1Line1: "Web Developer Philadelphia PA",
  h1Line2: "– Healthcare Tech, Fintech & Full-Stack Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Philadelphia PA</strong> healthcare organizations, fintech companies, and enterprise businesses trust to ship production-ready software. Next.js, Node.js, PostgreSQL, and Redis — built for the reliability and compliance standards Philly's market demands.`,
  bulletPoints: [
    "Production-grade Next.js, Node.js & PostgreSQL systems",
    "Healthcare-aware architecture with proper access control and audit trails",
    "AI-powered SaaS platforms serving real users in production",
    "24-hour response time — no agencies, no middlemen",
  ],

  aboutH2:
    "The Web Developer Philadelphia PA Healthcare & Finance Companies Choose",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds software that holds up in demanding environments. Philadelphia's economy is anchored by world-class healthcare institutions, a growing fintech corridor, and an expanding tech startup scene. The businesses here need software that is reliable, documented, and built to last.",
    "Every application I deliver is type-safe from commit one, structured in controller-service-repository layers, Swagger-documented, and backed by indexed PostgreSQL with Redis caching for sub-150ms API response times. For healthcare clients, that means data sensitivity, access control, and audit logging are architectural decisions — not afterthoughts.",
    "My live portfolio spans a real-time sports platform with Stripe billing, a multi-tenant enterprise SaaS with embedded AI and voice agents, and a full-stack marketplace. These are deployed and serving real users — the same production standard every Philadelphia client receives.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Healthcare Tech & Enterprise Backends" },
    { label: "Delivery", value: "Compliant, documented, on-time" },
    { label: "Based in", value: "Pakistan — serving Philadelphia PA remotely" },
  ],
  abilityCards: [
    {
      icon: "🏥",
      title: "Healthcare-Aware Development",
      desc: "Access control, data separation, and audit logging built into the architecture for Philadelphia's massive healthcare and life sciences sector.",
    },
    {
      icon: "🏦",
      title: "Fintech-Grade Reliability",
      desc: "Transaction-safe PostgreSQL schemas, proper error handling, and audit trails for Philly's growing financial technology companies.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      desc: "LLMs, voice agents, and intelligent automation integrated natively — not bolted on as a demo feature after launch.",
    },
    {
      icon: "📋",
      title: "Documentation First",
      desc: "Swagger docs, TypeScript types, and clean README files shipped with every project — your team can onboard from day one.",
    },
  ],

  projectsH2: "Deployed Applications — Philadelphia-Level Standards",
  projectsSubtitle:
    "Every project below is live in production with real users and real transactions. This is the baseline every Philadelphia PA client receives.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Results That Back the Work",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Philadelphia PA Businesses Choose Ahmed Ali",
  whyCards: [
    {
      title: "Healthcare Sector Aware",
      desc: "Philadelphia is home to Penn Medicine, Jefferson Health, and CHOP. I build with data sensitivity, role-based access, and audit trails as architecture defaults.",
    },
    {
      title: "University & Research Ready",
      desc: "Penn, Drexel, Temple, and Jefferson drive significant demand for research platforms, data tools, and education technology. I build systems that meet those requirements.",
    },
    {
      title: "No Agency Overhead",
      desc: "You work directly with the developer writing your code. No account managers, no relay race communication, no inflated agency rates.",
    },
    {
      title: "Full-Stack Single Owner",
      desc: "Frontend, backend, database, and deployment owned by one developer. Nothing gets lost between team handoffs or dropped at integration time.",
    },
    {
      title: "Enterprise-Scale from Day One",
      desc: "Layered architecture, Redis caching, and proper PostgreSQL indexing mean your system handles growth without a painful rewrite at 10x.",
    },
    {
      title: "Clean Handover Ready",
      desc: "Swagger documentation, TypeScript throughout, and clear README files mean your internal team can take ownership without a steep ramp-up.",
    },
  ],

  servicesH2: "Web Development Services for Philadelphia PA Businesses",
  services: [
    {
      title: "Healthcare & Life Sciences Platform Development",
      desc: "Full-stack web applications for Philadelphia's world-class healthcare institutions — patient portals, clinical dashboards, and health-tech SaaS built with data sensitivity and access control by default.",
      details: [
        "Role-based access control and patient data separation",
        "Audit logging and compliance-aware architecture",
        "Clinical dashboard and reporting systems",
        "Health-tech SaaS and telehealth platform development",
      ],
    },
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end Next.js and Node.js applications for Philadelphia businesses — from architecture to live deployment, covering frontend, backend, database, and everything in between.",
      details: [
        "Custom SaaS platforms and multi-tenant portals",
        "Internal business tools and operations dashboards",
        "Authentication, roles, and permission systems",
        "Full deployment pipeline with post-launch support",
      ],
    },
    {
      title: "AI Feature Integration",
      desc: "I embed AI capabilities into your Philadelphia business application — chat assistants, document automation, voice agents, and intelligent workflow triggers that users actually rely on.",
      details: [
        "OpenAI and Anthropic LLM integrations",
        "Embeddable AI chat widgets for SaaS products",
        "Voice agent pipelines via VAPI",
        "Document summarization and processing pipelines",
      ],
    },
    {
      title: "Backend API & Systems Engineering",
      desc: "Production Express.js APIs built with strict controller-service-repository layering, full Swagger documentation, and Zod validation throughout.",
      details: [
        "RESTful API design with versioning",
        "Auth middleware, roles, and session management",
        "Rate limiting, logging, and observability",
        "OpenAPI / Swagger documentation",
      ],
    },
    {
      title: "Database Architecture & Performance",
      desc: "PostgreSQL schema design with proper indexing strategies, Redis caching for sub-millisecond reads, and migration management built to scale.",
      details: [
        "Relational schema design and normalization",
        "Index strategy and query optimization",
        "Redis caching for high-traffic endpoints",
        "Database migration and version control",
      ],
    },
    {
      title: "Technical Audit & Architecture Review",
      desc: "I review your existing codebase for structural debt, security gaps, and performance bottlenecks — then deliver a written action plan with prioritized fixes.",
      details: [
        "Full codebase and architecture review",
        "Security and authentication audit",
        "API and database performance analysis",
        "Written remediation report with effort estimates",
      ],
    },
  ],

  coverageH2: "Web Developer Philadelphia PA — Serving Greater Philadelphia",
  coverageParagraphs: [
    `As a <strong class="text-white">web developer in Philadelphia PA</strong>, I work fully remote across the entire Greater Philadelphia area — Center City, University City, Fishtown, Northern Liberties, King of Prussia, Wayne, Conshohocken, Cherry Hill NJ, and beyond. Philadelphia is the fifth-largest city in the United States and one of the most economically diverse, anchored by healthcare, education, financial services, and a fast-growing tech startup scene. I also serve businesses searching for a <a href="/web-developer-new-york-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in New York NY</a> along the Northeast corridor.`,
    "Philadelphia's healthcare cluster — Penn Medicine, Jefferson Health, Temple University Hospital, and CHOP — creates one of the most concentrated demands for health-tech software in the country. My approach to these projects defaults to audit-ready architecture, proper data access controls, and documentation that survives staff turnover.",
    `I also serve the broader Mid-Atlantic market. If you need a <strong class="text-white">web developer philadelphia pa</strong> who can also coordinate projects in New York and other Northeast cities — same developer, same direct communication, same production standards. See my work as a <a href="/web-developer-new-york-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in New York NY</a>.`,
  ],
  cityLinks: [
    { city: "New York NY", href: "/web-developer-new-york-ny" },
    { city: "Rochester NY", href: "/web-developer-rochester-ny" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
    { city: "Miami FL", href: "/web-developer-miami-fl" },
    { city: "Los Angeles CA", href: "/web-developer-los-angeles-ca" },
    { city: "San Francisco CA", href: "/web-developer-san-francisco-ca" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Philadelphia PA Today",
  contactSubtitle:
    "Have a project that needs healthcare-grade reliability or enterprise quality? Describe it below and I'll respond within 24 hours with a free consultation.",

  availability: [...COMMON_AVAILABILITY],
  stats: [
    { label: "Healthcare-Aware", value: "Architecture" },
    { label: "Response Time", value: "< 24hrs" },
    { label: "On-Time Rate", value: "100%" },
  ],

  navLinks: [
    { name: "About", href: "#about-philadelphia" },
    { name: "Projects", href: "#projects-philadelphia" },
    { name: "Testimonials", href: "#testimonials-philadelphia" },
    { name: "Why Hire Me", href: "#hire-me-philadelphia" },
    { name: "Services", href: "#services-philadelphia" },
    { name: "Book Appointment", href: "#appointment-philadelphia" },
  ],
  navCTALabel: "Hire Web Developer Philadelphia PA",
  contactId: "contact-philadelphia",
  appointmentId: "appointment-philadelphia",

  faqTitle: "Frequently Asked Questions — Web Developer Philadelphia PA",
  faqs: [
    {
      question:
        "What web development services do you offer Philadelphia PA businesses?",
      answer:
        "I offer full-stack web development for Philadelphia PA clients using Next.js, Node.js, and PostgreSQL. Services include healthcare platform development, fintech applications, AI integrations, Stripe billing systems, backend API engineering, and technical audits — delivered remotely at the quality Philadelphia's demanding market expects.",
    },
    {
      question:
        "Can you build healthcare web applications for Philadelphia organizations?",
      answer:
        "Yes. I build with data sensitivity in mind — role-based access control, data separation, audit logging, and compliance-aware architecture are standards in every project I deliver for Philadelphia's healthcare and life sciences sector.",
    },
    {
      question: "Do you work remotely with Philadelphia PA clients?",
      answer:
        "Yes, fully remote. I serve Philadelphia and the wider Greater Philadelphia area — Center City, University City, Fishtown, King of Prussia, Conshohocken, and Cherry Hill. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
    },
    {
      question:
        "Can you build fintech platforms for Philadelphia financial companies?",
      answer:
        "Yes. I build fintech-grade systems with transaction-safe database design, audit logging, webhook-driven reconciliation flows, and admin billing dashboards. Philadelphia's growing fintech corridor — from Center City to the Navy Yard — has demanding standards and I build to them.",
    },
    {
      question:
        "How do you handle database design for Philadelphia web projects?",
      answer:
        "I use PostgreSQL with proper schema design, indexing strategy, and Redis caching for high-throughput reads. Every database I design targets sub-150ms API response times and is built to scale as your Philadelphia business grows.",
    },
    {
      question: "How quickly can you start a Philadelphia PA web project?",
      answer:
        "I am currently open to work with immediate availability. I respond to all Philadelphia PA inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
    },
  ],

  localSeoTitle:
    "Web Development for Philadelphia's Healthcare, Education & Tech Sectors",
  localSeoParagraphs: [
    "Philadelphia is home to one of the greatest concentrations of healthcare institutions and research universities in the United States — Penn Medicine, Jefferson Health, CHOP, Drexel University, Temple University, and the University of Pennsylvania all operate within the city's boundaries. This creates enormous demand for reliable, compliant, and well-documented web software.",
    "As a web developer serving Philadelphia PA, I build healthcare platforms, life sciences tools, education technology applications, and enterprise SaaS products using Next.js, Node.js, PostgreSQL, and Redis — with the documentation and compliance standards those sectors require.",
    "Philadelphia's Navy Yard innovation district and the growing startup ecosystem along the Market-Frankford corridor are also creating significant demand for modern SaaS platforms and AI-powered applications — exactly what I specialize in.",
  ],

  industries: [
    {
      name: "Healthcare & Life Sciences",
      desc: "Philadelphia is a global healthcare hub. Penn Medicine, CHOP, and Jefferson drive demand for patient portals, clinical platforms, and health-tech SaaS.",
    },
    {
      name: "Higher Education & EdTech",
      desc: "Penn, Drexel, Temple, and Jefferson need research platforms, student portals, and education technology applications built to institutional standards.",
    },
    {
      name: "Fintech & Financial Services",
      desc: "Philadelphia's growing fintech scene — from the Navy Yard to Center City — needs secure payment platforms, compliance tools, and financial dashboards.",
    },
    {
      name: "Insurance Technology",
      desc: "Philadelphia's large insurance sector needs policy management systems, claims processing platforms, and compliance-ready admin tools.",
    },
    {
      name: "Logistics & Supply Chain",
      desc: "Philadelphia's port and proximity to major Northeast markets drives logistics demand. I build inventory systems, fleet tools, and supply chain dashboards.",
    },
    {
      name: "Legal & Professional Services",
      desc: "Philadelphia's significant legal sector needs secure document management, client portals, and practice management platforms.",
    },
  ],
};
