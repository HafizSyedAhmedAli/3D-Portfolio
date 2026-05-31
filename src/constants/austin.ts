import type {
  CityPageAbilityCard,
  CityPageAvailability,
  CityPageCityLink,
  CityPageProject,
  CityPageService,
  CityPageStat,
  CityPageTestimonial,
  CityPageWhyCard,
  CityPageSkillTag,
} from "@/types";

export const AUSTIN_KEYWORD = "web developer austin tx" as const;

export const austinStats: CityPageStat[] = [
  { value: "3+", label: "Live Projects" },
  { value: "$38", label: "Avg. CPC Value" },
  { value: "100%", label: "On-Time Delivery" },
];

export const austinSkillTags: CityPageSkillTag[] = [
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "TypeScript",
  "AI/SaaS",
];

export const austinAbilityCards: CityPageAbilityCard[] = [
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
];

export const austinProjects: CityPageProject[] = [
  {
    title: "Flacron Gamezone",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Stripe"],
    desc: "Live football match discovery platform with real-time scores, league standings, Stripe subscriptions, and role-based auth.",
    live: "https://flacrongamezone.com",
    gh: "https://github.com/HafizSyedAhmedAli/Flacron-Gamezone-Local",
  },
  {
    title: "Relay",
    tags: ["Next.js", "Convex", "VAPI"],
    desc: "Multi-tenant B2B SaaS with embeddable AI chat widgets and real-time voice agents to automate enterprise customer service.",
    live: "https://relay-demo-web.vercel.app",
    gh: "https://github.com/HafizSyedAhmedAli/Relay-Demo",
  },
  {
    title: "GreenCart",
    tags: ["React", "Express.js", "MongoDB"],
    desc: "High-performance full-stack marketplace with seamless product discovery, secure checkout, and efficient data sync.",
    live: "https://greencart-frontend-ebon.vercel.app",
    gh: "https://github.com/HafizSyedAhmedAli/Greencart-FULL-STACK",
  },
];

export const austinTestimonials: CityPageTestimonial[] = [
  {
    name: "RODRIGUE TCHITAKA",
    handle: "@rodrigue-tchitaka",
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    service: "Full-Stack Web Development",
  },
  {
    name: "Ayza Noor",
    handle: "@fortifytechnologies",
    review:
      "Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    service: "Backend Development",
  },
];

export const austinWhyCards: CityPageWhyCard[] = [
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
];

export const austinServices: CityPageService[] = [
  {
    title: "Full-Stack Web Application Development",
    desc: "End-to-end development using Next.js, Node.js, and PostgreSQL. I build the frontend, backend API, database schema, and deployment pipeline — everything you need to launch.",
  },
  {
    title: "AI-Powered SaaS Development",
    desc: "I integrate LLMs, voice agents, and AI chat widgets natively into your web application. Real AI features that genuinely improve your product.",
  },
  {
    title: "API Design & Backend Engineering",
    desc: "RESTful APIs built with Express.js and Node.js, following controller-service-repository architecture. Swagger-documented, Zod-validated, and tested before delivery.",
  },
  {
    title: "Database Architecture & Optimization",
    desc: "PostgreSQL schema design with proper indexing, Redis caching layers for sub-millisecond reads, and query optimization that keeps your app fast as it scales.",
  },
  {
    title: "E-Commerce & Subscription Platforms",
    desc: "Stripe integration, subscription management, role-based access control, and admin dashboards. I have shipped this stack in production and know where the edge cases are.",
  },
  {
    title: "Performance & Technical Audits",
    desc: "I review your existing codebase, identify bottlenecks, and deliver a prioritized report with actionable fixes — covering API latency, database queries, and frontend bundle size.",
  },
];

export const austinCityLinks: CityPageCityLink[] = [
  { city: "Dallas TX", href: "/web-developer-dallas-tx" },
  { city: "Houston TX", href: "/web-developer-houston-tx" },
  { city: "San Antonio TX", href: "/web-developer-san-antonio-tx" },
  { city: "Fort Worth TX", href: "/web-developer-fort-worth-tx" },
  { city: "Plano TX", href: "/web-developer-plano-tx" },
  { city: "Frisco TX", href: "/web-developer-frisco-tx" },
];

export const austinAvailability: CityPageAvailability[] = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Response time", value: "Within 24 hours", dot: false },
  { label: "Timezone", value: "PKT — UTC +5", dot: false },
  { label: "Availability", value: "Immediate start", dot: false },
];
