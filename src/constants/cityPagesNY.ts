import type { CityPageData } from "@/components/city/CityPageTemplate";
import type { CityPageProject, CityPageTestimonial } from "@/types";

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
      "Testimonial from Rodrigue Tchitaka praising on-time delivery and a reliable subscription system built by Ahmed Ali.",
  },
  {
    name: "Ayza Noor",
    handle: "@fortifytechnologies",
    review:
      "Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    service: "Backend Development",
    imgPath: "/images/client2.png",
    imgAlt:
      "Professional endorsement from Ayza Noor at Fortify Technologies praising Ahmed Ali's contributions.",
  },
];

const COMMON_AVAILABILITY = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Response time", value: "Within 24 hours", dot: false },
  { label: "Consultation", value: "Free 30 min call", dot: false },
  { label: "Availability", value: "Immediate start", dot: false },
] as const;

const COMMON_SERVICES_STRIP = [
  "Full-Stack Development",
  "Web Development",
  "AI-Powered SaaS",
  "API Engineering",
  "Database Architecture",
  "Stripe & Subscriptions",
] as const;

// ─── Rochester NY ──────────────────────────────────────────────────────────

export const rochesterPageData: CityPageData = {
  keyword: "web developer rochester ny",
  cityName: "Rochester",
  cityState: "NY",
  citySlug: "rochester",
  profileImageUrl:
    "/images/web-developer-rochester-ny-manufacturing-tech-full-stack.png",
  profileImageAlt:
    "Web Developer Rochester NY for manufacturing software, inventory systems, and full-stack business apps",

  h1Line1: "Web Developer Rochester NY",
  h1Line2: "– Manufacturing Tech, Inventory Systems & Full-Stack Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in Rochester NY</strong> manufacturers, operations teams, and imaging-tech companies trust for dependable software. I build Next.js, Node.js, PostgreSQL, and Redis applications that prioritize accuracy, traceability, and long-term reliability.`,
  bulletPoints: [
    "Custom dashboards for manufacturing, inventory, and operations",
    "Production-ready Next.js, Node.js, PostgreSQL & Redis systems",
    "AI automation for reporting, workflow, and document processing",
    "Direct communication, fast turnaround, and no agency markup",
  ],

  aboutH2:
    "The Web Developer Rochester NY Businesses Hire for Reliable Operations",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer focused on building software that stays accurate as data grows. Rochester has a strong engineering identity shaped by manufacturing, optics, imaging, and precision workflows, so local businesses often need systems that are stable, structured, and easy to maintain.",
    "That is exactly how I build. I create PostgreSQL schemas that are designed for operational data, backend services that are easy to audit, and frontends that make complex information usable for teams on the floor, in the office, or in the field.",
    "I've already shipped live products with real users, including a sports platform with real-time data and Stripe billing, an AI-powered SaaS platform, and a full-stack e-commerce marketplace. That same production discipline carries over to Rochester web development projects that need to run cleanly every day.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Manufacturing & Operational Software" },
    { label: "Delivery", value: "Accurate, documented, production-ready" },
    { label: "Based in", value: "Pakistan — serving Rochester NY remotely" },
  ],
  abilityCards: [
    {
      icon: "🔬",
      title: "Precision Data Handling",
      desc: "PostgreSQL schemas built for production, inventory, and reporting data that must stay accurate and consistent over time.",
    },
    {
      icon: "📦",
      title: "Inventory & Supply Chain Tools",
      desc: "Real-time stock tracking, reorder triggers, and supplier dashboards designed for dependable operational use.",
    },
    {
      icon: "🤖",
      title: "Workflow Automation",
      desc: "AI-assisted reporting and document processing that reduces manual entry without adding unstable shortcuts.",
    },
    {
      icon: "⚙️",
      title: "Built for Auditability",
      desc: "Clean architecture, clear documentation, and maintainable code so your internal team can verify and extend everything later.",
    },
  ],

  projectsH2: "Operational Software, Shipped and Running",
  projectsSubtitle:
    "These are deployed applications handling real users, real workflows, and real data. That is the standard I bring to Rochester businesses that need dependable software, not demos.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "What Clients Have Said About the Work",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why Hire This Rochester Web Developer",
  whyCards: [
    {
      title: "Industrial-Grade Accuracy",
      desc: "I design data systems the way Rochester businesses expect: structured, indexed, and resilient under everyday operational load.",
    },
    {
      title: "Full-Stack Ownership",
      desc: "Frontend, backend, database, and deployment are handled by one developer, which means fewer handoffs and less lost context.",
    },
    {
      title: "Production-Ready Code",
      desc: "Type-safe configs, error boundaries, and logging are part of the build from day one, not something added after launch.",
    },
    {
      title: "Fast, Predictable Turnaround",
      desc: "You get clear communication, quick responses, and delivery that stays on schedule without agency delays.",
    },
    {
      title: "Live Projects With Real Usage",
      desc: "Flacron, Relay, and GreenCart are live applications serving real users, which proves I ship working software, not just mockups.",
    },
    {
      title: "Transparent Process",
      desc: "Milestones, updates, and documented deliverables keep the project easy to follow from start to finish.",
    },
  ],

  faqTitle: "Frequently Asked Questions — Web Developer Rochester NY",
  faqs: [
    {
      question: "Do you build manufacturing software in Rochester NY?",
      answer:
        "Yes. I build custom manufacturing dashboards, inventory systems, production tracking tools, and operational software for Rochester businesses.",
    },
    {
      question:
        "Can you improve an existing web application for a Rochester company?",
      answer:
        "Yes. I can audit, optimize, and extend existing applications built with React, Next.js, Node.js, PostgreSQL, and other modern technologies.",
    },
    {
      question: "Do you work remotely with Rochester NY companies?",
      answer:
        "Yes. I work remotely with businesses across Rochester and Upstate New York — including Buffalo, Syracuse, and Albany — while maintaining direct communication throughout the project.",
    },
    {
      question:
        "Can you build AI-powered tools for Rochester manufacturing companies?",
      answer:
        "Yes. I integrate AI features including document processing, workflow automation, reporting pipelines, and intelligent data extraction into manufacturing and operational software.",
    },
    {
      question: "How quickly can a Rochester project start?",
      answer:
        "Most projects can begin within a few days after requirements and scope are finalized. I respond to all inquiries within 24 hours.",
    },
    {
      question:
        "How does your pricing compare to Rochester web development agencies?",
      answer:
        "Significantly lower — because you work directly with the developer writing your code, not an agency adding account management layers. Rochester businesses get the same engineering quality without the markup.",
    },
  ],

  localSeoTitle:
    "Web Development Services for Rochester's Manufacturing and Technology Sector",
  localSeoParagraphs: [
    "Rochester has a long history of manufacturing, imaging technology, and precision engineering — shaped by companies like Kodak, Xerox, and Paychex. Businesses operating in these industries often require software that prioritizes reliability, reporting accuracy, and operational visibility.",
    "As a web developer serving Rochester NY, I build custom dashboards, inventory systems, workflow automation tools, and full-stack applications that help teams manage critical business processes more efficiently.",
    "Whether your company operates in manufacturing, logistics, distribution, imaging technology, or professional services, I can develop software tailored to your specific workflow requirements while maintaining scalability and long-term maintainability.",
  ],

  servicesH2: "Web Development Services for Rochester NY Businesses",
  services: [
    {
      title: "Manufacturing & Operations Software",
      desc: "Custom systems for production tracking, quality control, inventory visibility, and supply-chain workflows built around the way your team already works.",
      details: [
        "Inventory and stock-level tracking systems",
        "Production and quality-control dashboards",
        "Supplier and procurement portals",
        "Reporting tools with export and audit trails",
      ],
    },
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end development using Next.js, Node.js, and PostgreSQL. I build the frontend, backend API, database schema, and deployment pipeline needed to launch cleanly.",
      details: [
        "Internal business tools and operations portals",
        "Customer-facing dashboards",
        "Authentication, roles, and permissions",
        "Deployment, monitoring, and maintenance",
      ],
    },
    {
      title: "AI-Powered Workflow Automation",
      desc: "AI integrations that reduce manual work in document-heavy and data-entry-heavy operations while keeping the workflow reliable and traceable.",
      details: [
        "Document parsing and data extraction",
        "AI-assisted report generation",
        "Workflow automation pipelines",
        "Chat assistants for internal support tools",
      ],
    },
    {
      title: "Database Architecture & Optimization",
      desc: "PostgreSQL schema design with strong indexing, Redis caching, and query optimization for fast dashboards and dependable reporting.",
      details: [
        "Database schema design for industrial data",
        "Query optimization",
        "Redis caching",
        "Scalability planning",
      ],
    },
    {
      title: "API Design & Backend Engineering",
      desc: "RESTful APIs built with Express.js and Node.js, following controller-service-repository architecture for maintainable business systems.",
      details: [
        "REST API development",
        "Authentication and authorization",
        "Swagger documentation",
        "Validation and testing pipelines",
      ],
    },
    {
      title: "Performance & Technical Audits",
      desc: "A codebase review that finds bottlenecks, highlights risks, and gives you a practical roadmap for fixes and improvements.",
      details: [
        "Frontend performance reviews",
        "Database bottleneck analysis",
        "API latency investigation",
        "Architecture recommendations",
      ],
    },
  ],

  coverageH2: "Serving Rochester, the Metro, and the Greater Upstate Region",
  coverageParagraphs: [
    `I work remotely with businesses across the Rochester metro — Brighton, Henrietta, Greece, Webster, Pittsford, Victor, Irondequoit, and nearby communities. If you're searching for a <strong class="text-white">web developer rochester ny</strong>, you get the same direct communication and production standard regardless of where your office is located. I also serve businesses searching for a <a href="/web-developer-new-york-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in New York NY</a> across the broader state market.`,
    "Rochester businesses often need software that is practical first: inventory counts that stay correct, dashboards that are easy to read, and workflows that do not break under real-world use. My approach fits that environment because I focus on reliability, maintainability, and clean data structures from the start.",
    `I also support companies across Upstate New York, including Syracuse, Buffalo, and Albany. If you need a web developer rochester ny who can also handle projects further afield — same developer, same standards, no agency overhead. See my work as a <a href="/web-developer-new-york-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in New York NY</a> for context on what I deliver across the state.`,
  ],
  cityLinks: [
    { city: "New York NY", href: "/web-developer-new-york-ny" },
    { city: "Buffalo NY", href: "/web-developer-buffalo-ny" },
    { city: "Syracuse NY", href: "/web-developer-syracuse-ny" },
    { city: "Albany NY", href: "/web-developer-albany-ny" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
    { city: "Dallas TX", href: "/web-developer-dallas-tx" },
    { city: "Houston TX", href: "/web-developer-houston-tx" },
    { city: "Tampa FL", href: "/web-developer-tampa-fl" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer Rochester NY Today",
  contactSubtitle:
    "Have a project in mind? Send the details and I will reply within 24 hours with a free consultation and next-step plan.",

  availability: [...COMMON_AVAILABILITY],
  stats: [
    { label: "Manufacturing Tools", value: "Custom Built" },
    { label: "Response Time", value: "<24hrs" },
    { label: "Project Start", value: "Immediate" },
  ],

  navLinks: [
    { name: "About", href: "#about-rochester" },
    { name: "Projects", href: "#projects-rochester" },
    { name: "Testimonials", href: "#testimonials-rochester" },
    { name: "Why Hire Me", href: "#hire-me-rochester" },
    { name: "Services", href: "#services-rochester" },
    { name: "Book Appointment", href: "#appointment-rochester" },
  ],
  navCTALabel: "Hire Web Developer Rochester NY",
  contactId: "contact-rochester",
  appointmentId: "appointment-rochester",

  industries: [
    {
      name: "Manufacturing & Industrial",
      desc: "Rochester's industrial legacy drives demand for production tracking, quality control dashboards, and operational software built for factory environments.",
    },
    {
      name: "Optics & Imaging Technology",
      desc: "With a heritage from Kodak and Xerox, Rochester's optics sector needs precision data platforms, R&D tools, and imaging software infrastructure.",
    },
    {
      name: "Logistics & Distribution",
      desc: "Rochester's central Upstate New York location makes it a distribution hub. I build inventory systems, fleet tools, and supply chain dashboards.",
    },
    {
      name: "Healthcare & Life Sciences",
      desc: "Rochester's medical sector, anchored by University of Rochester Medical Center, needs secure patient portals and clinical-grade platforms.",
    },
    {
      name: "Education Technology",
      desc: "The University of Rochester and RIT drive EdTech demand. I build LMS platforms, student portals, and research-grade web applications.",
    },
    {
      name: "Professional Services",
      desc: "Rochester's legal, accounting, and consulting firms need secure client portals, document management systems, and practice management tools.",
    },
  ],
};

// ─── New York NY ────────────────────────────────────────────────────────────

export const newYorkPageData: CityPageData = {
  keyword: "web developer new york ny",
  cityName: "New York",
  cityState: "NY",
  citySlug: "new-york",
  profileImageUrl:
    "/images/web-developer-new-york-ny-fintech-media-full-stack.png",
  profileImageAlt:
    "Web Developer New York NY for fintech, media, and full-stack SaaS products",

  h1Line1: "Web Developer New York NY",
  h1Line2: "– Fintech, Media & High-Performance Full-Stack Apps",
  heroSubtitle: `Hi, I'm Ahmed Ali — <strong class="text-white">a web developer in New York NY</strong> fintech startups, media brands, and SaaS teams trust for production-ready Next.js, Node.js, PostgreSQL, and Redis applications. I build software for a market that expects speed, polish, and accuracy.`,
  bulletPoints: [
    "Production-ready Next.js, Node.js, PostgreSQL & Redis applications",
    "Fintech-grade data accuracy and audit-ready architecture",
    "AI-powered SaaS platforms with real, live users",
    "Direct communication, fast delivery, and no agency markup",
  ],

  aboutH2: "The Web Developer New York NY Teams Call When Quality Matters",
  aboutParagraphs: [
    "I'm Ahmed Ali — a full-stack developer who builds software that can keep up with the pace of New York. Whether the project is a fintech dashboard, a media platform handling traffic spikes, or an internal SaaS tool, the businesses here need systems that are fast, stable, and easy to evolve.",
    "I use clean layered architecture, optimized PostgreSQL schemas, Redis caching, and polished Next.js frontends to deliver apps that feel mature from day one. The code is documented, type-safe, and structured so an internal engineering team can take it over without a painful handoff.",
    "I've already shipped live products with real users, including a sports platform with Stripe subscriptions and real-time feeds, a multi-tenant SaaS with AI chat and voice agents, and a full-stack marketplace. That same production mindset is what I bring to New York web development projects.",
  ],
  highlights: [
    { label: "Stack", value: "Next.js · Node.js · PostgreSQL · Redis" },
    { label: "Specialty", value: "Fintech, Media & Full-Stack SaaS" },
    { label: "Delivery", value: "Production-ready, every time" },
    { label: "Based in", value: "Pakistan — serving New York NY remotely" },
  ],
  abilityCards: [
    {
      icon: "💹",
      title: "Fintech-Grade Accuracy",
      desc: "Transaction-safe PostgreSQL schemas and careful error handling for systems where data must be right the first time.",
    },
    {
      icon: "📰",
      title: "Media & Publishing Platforms",
      desc: "Content-heavy web apps built to handle traffic spikes, dynamic content, and fast editorial workflows.",
    },
    {
      icon: "⚡",
      title: "Performance First",
      desc: "Redis caching, indexed queries, and efficient API design keep pages and dashboards responsive under load.",
    },
    {
      icon: "🚀",
      title: "Ship-Ready by Default",
      desc: "Every project is built to launch cleanly with environments, logging, and error boundaries already in place.",
    },
  ],

  projectsH2: "Live in Production, Built for Real Users",
  projectsSubtitle:
    "The projects below are deployed and serving real users. That is the level of execution New York teams expect from a web developer in New York NY.",
  projects: [...COMMON_PROJECTS],

  testimonialsH2: "Feedback From Real Engagements",
  testimonials: [...COMMON_TESTIMONIALS],

  whyH2: "Why New York Companies Work With Me",
  whyCards: [
    {
      title: "Full-Stack Expertise",
      desc: "I handle frontend, backend, database, and deployment, so you do not lose time coordinating multiple contractors.",
    },
    {
      title: "No Manhattan Overhead",
      desc: "You pay for engineering output, not a Midtown office or a layered agency structure.",
    },
    {
      title: "AI-Ready Development",
      desc: "I integrate LLMs, voice agents, and AI chat features in a way that supports real product goals, not just demos.",
    },
    {
      title: "Production-Ready Code",
      desc: "From the first commit, the codebase is built to be reliable, maintainable, and ready for release.",
    },
    {
      title: "Fast Turnaround",
      desc: "Communication stays clear and response times stay fast, which matters in a city where teams move quickly.",
    },
    {
      title: "Proven Live Projects",
      desc: "Flacron, Relay, and GreenCart are live and working right now, which proves I ship functioning software.",
    },
  ],

  faqTitle: "Frequently Asked Questions — Web Developer New York NY",
  faqs: [
    {
      question: "What web development services do you offer in New York NY?",
      answer:
        "I build full-stack web applications using Next.js, Node.js, PostgreSQL, and Redis. Services include SaaS platforms, fintech dashboards, customer portals, internal business tools, API development, and AI-powered applications.",
    },
    {
      question: "Do you work with New York startups and SaaS companies?",
      answer:
        "Yes. I work with startups, SaaS businesses, media companies, and growing technology teams that need scalable, production-ready software without the overhead of a traditional agency.",
    },
    {
      question: "Can you build AI-powered web applications for NYC companies?",
      answer:
        "Yes. I integrate AI features including chat assistants, document processing, workflow automation, voice agents, and custom AI-powered tools directly into web applications.",
    },
    {
      question: "Do you work remotely with businesses in New York?",
      answer:
        "Yes. I work remotely with clients throughout Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Jersey City, and Long Island while maintaining direct communication throughout the project.",
    },
    {
      question: "How does your pricing compare to New York agencies?",
      answer:
        "Because you work directly with the developer building your software, costs are typically much lower than hiring a New York agency while still receiving production-quality engineering and direct communication.",
    },
    {
      question: "How quickly can a New York project start?",
      answer:
        "Most projects can begin within a few days after discussing requirements, scope, and timelines. I typically respond to all inquiries within 24 hours.",
    },
  ],

  localSeoTitle:
    "Web Development for New York Startups, SaaS Companies, and Fintech Teams",
  localSeoParagraphs: [
    "New York is home to some of the world's fastest-growing startups, fintech companies, media organizations, and SaaS businesses. These companies require software that can scale while maintaining performance and reliability.",
    "As a web developer serving New York NY, I build custom SaaS platforms, fintech dashboards, AI-powered applications, customer portals, and internal business systems using modern technologies including Next.js, Node.js, PostgreSQL, and Redis.",
    "Whether you're launching a startup MVP, expanding an existing platform, or modernizing internal tools, I provide direct access to experienced full-stack development without agency overhead.",
  ],

  servicesH2: "Web Development Services for New York NY Companies",
  services: [
    {
      title: "Full-Stack Web Application Development",
      desc: "End-to-end development using Next.js, Node.js, and PostgreSQL. I build the frontend, backend API, database schema, and deployment pipeline needed to launch a real product.",
      details: [
        "Custom SaaS platforms and customer portals",
        "Internal business tools and dashboards",
        "Authentication, payments, and role management",
        "Deployment, monitoring, and maintenance",
      ],
    },
    {
      title: "Fintech & Financial Data Platforms",
      desc: "I build systems that match the precision New York's financial sector expects, with audit-ready logs, accurate database design, and careful data handling.",
      details: [
        "Transaction-safe database design",
        "Audit logging and reporting",
        "Webhook-driven reconciliation flows",
        "Admin dashboards for financial oversight",
      ],
    },
    {
      title: "AI-Powered SaaS Development",
      desc: "I integrate LLMs, voice agents, and AI chat widgets directly into your product so the feature set feels useful, polished, and ready for users.",
      details: [
        "OpenAI and LLM integrations",
        "AI chat assistants and copilots",
        "Document processing and automation",
        "Voice agents and workflow automation",
      ],
    },
    {
      title: "API Design & Backend Engineering",
      desc: "RESTful APIs built with Express.js and Node.js, following controller-service-repository architecture for maintainable business systems.",
      details: [
        "REST API development",
        "Authentication and authorization",
        "Swagger documentation",
        "Validation and testing pipelines",
      ],
    },
    {
      title: "Database Architecture & Optimization",
      desc: "PostgreSQL schema design with strong indexing, Redis caching layers, and query optimization for applications that need to stay fast as traffic grows.",
      details: [
        "Database schema design",
        "Query optimization",
        "Redis caching",
        "Scalability planning",
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

  coverageH2: "Serving All Five Boroughs and the Wider Tri-State Area",
  coverageParagraphs: [
    `Businesses searching for a <strong class="text-white">web developer in New York NY</strong> usually want someone who can match the city's pace without the city's overhead. I work remotely across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, plus Jersey City, Hoboken, and Long Island. I also serve companies searching for a <a href="/web-developer-rochester-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in Rochester NY</a> across Upstate New York.`,
    "New York's tech and finance world moves fast, and the software behind it needs to do the same. I keep projects lean by staying close to the code myself, which removes the delays that often come with agencies and multi-layered account management.",
    `I also support the broader Tri-State and Upstate New York market. If you need a <strong class="text-white">web developer new york ny</strong> companies can trust for long-term work, you get the same standards and the same direct line of communication whether the project is in Manhattan, Rochester, or elsewhere. Check out my work as a <a href="/web-developer-rochester-ny" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">web developer in Rochester NY</a> to see what I deliver across the state.`,
  ],
  cityLinks: [
    { city: "Rochester NY", href: "/web-developer-rochester-ny" },
    { city: "Buffalo NY", href: "/web-developer-buffalo-ny" },
    { city: "Jersey City NJ", href: "/web-developer-jersey-city-nj" },
    { city: "Newark NJ", href: "/web-developer-newark-nj" },
    { city: "San Francisco CA", href: "/web-developer-san-francisco-ca" },
    { city: "Los Angeles CA", href: "/web-developer-los-angeles-ca" },
    { city: "Miami FL", href: "/web-developer-miami-fl" },
    { city: "Austin TX", href: "/web-developer-austin-tx" },
  ],
  servicesStrip: COMMON_SERVICES_STRIP,

  contactH2: "Hire a Web Developer New York NY Today",
  contactSubtitle:
    "Have a project in mind? Send the details and I will get back to you within 24 hours with a free consultation and a clear next step.",

  availability: [...COMMON_AVAILABILITY],
  stats: [
    { label: "SaaS Platforms", value: "Production Ready" },
    { label: "Response Time", value: "<24hrs" },
    { label: "Project Start", value: "Immediate" },
  ],

  navLinks: [
    { name: "About", href: "#about-new-york" },
    { name: "Projects", href: "#projects-new-york" },
    { name: "Testimonials", href: "#testimonials-new-york" },
    { name: "Why Hire Me", href: "#hire-me-new-york" },
    { name: "Services", href: "#services-new-york" },
    { name: "Book Appointment", href: "#appointment-new-york" },
  ],
  navCTALabel: "Hire Web Developer New York NY",
  contactId: "contact-new-york",
  appointmentId: "appointment-new-york",

  industries: [
    {
      name: "Fintech & Financial Services",
      desc: "Wall Street and NYC's massive financial sector needs precision fintech dashboards, trading tools, compliance platforms, and payment infrastructure.",
    },
    {
      name: "Media & Publishing",
      desc: "NYC's media industry — from digital newspapers to streaming platforms — needs content management systems, editorial tools, and high-traffic web infrastructure.",
    },
    {
      name: "Healthcare & Life Sciences",
      desc: "New York's healthcare sector, anchored by NYU Langone and Mount Sinai, needs secure patient platforms, clinical SaaS, and health-tech applications.",
    },
    {
      name: "E-Commerce & Retail",
      desc: "NYC is the fashion and retail capital of the US. I build e-commerce platforms, inventory management tools, and retail SaaS products.",
    },
    {
      name: "Real Estate & PropTech",
      desc: "New York's real estate market is the world's most complex. I build property platforms, listing tools, and real estate SaaS applications.",
    },
    {
      name: "AI & Enterprise SaaS",
      desc: "NYC is the East Coast's AI and enterprise software hub. I build multi-tenant SaaS platforms, AI-powered applications, and enterprise tools.",
    },
  ],
};
