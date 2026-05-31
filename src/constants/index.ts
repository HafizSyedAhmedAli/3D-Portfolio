import type {
  Ability,
  Availability,
  CounterItem,
  ExpCard,
  LogoIcon,
  NavLink,
  PerformanceMetric,
  Project,
  SiteMetadata,
  SocialImg,
  TechName,
  TechStackIcon,
  TechTag,
  Testimonial,
} from "../types/index";

const navLinks: NavLink[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Approach",
    link: "#approach",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const counterItems: CounterItem[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/server-solid.png",
    title: "Scalable Architecture",
    desc: "Designing clean, maintainable systems using industry-standard design patterns. Decoupling code into distinct controller, service, and repository layers ensures independent testing, easy maintenance, and seamless scaling.",
  },
  {
    imgPath: "/images/code-solid.png",
    title: "Strategic Collaboration",
    desc: "Aligning technical execution with team objectives through clear documentation, precise APIs, and seamless integrations.",
  },
  {
    imgPath: "/images/bolt-lightning-solid.png",
    title: "Performance & Efficiency",
    desc: "Optimizing database queries, caching layers, and asynchronous processes to guarantee fast, reliable delivery.",
  },
];

const techStackIcons: readonly TechStackIcon[] = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    modelPath: "/models/nextjs-icon-transformed.glb",
    scale: 0.3,
    rotation: [0, 0, 0],
    imgPath: "/images/logos/nextjs.png",
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    imgPath: "/images/logos/node.png",
  },
  {
    name: "PostgreSQL",
    modelPath: "/models/postgresql-transformed.glb",
    scale: 3,
    rotation: [0, 0, 0],
    imgPath: "/images/logos/postgresql.svg",
  },
  {
    name: "MongoDB",
    modelPath: "/models/mongodb-icon-transformed.glb",
    scale: 0.4,
    rotation: [0, 0, 0],
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "Redis",
    modelPath: "",
    scale: 0.4,
    rotation: [0, 0, 0],
    imgPath: "/images/logos/redis.svg",
  },
] as const;

const techMeta: Record<TechName, { label: string; color: string }> = {
  React: { label: "UI Layer", color: "text-cyan-400" },
  "Next.js": { label: "Frontend Framework", color: "text-zinc-400" },
  "Node.js": { label: "JavaScript Runtime", color: "text-green-400" },
  PostgreSQL: { label: "Relational DB", color: "text-blue-400" },
  MongoDB: { label: "Document DB", color: "text-emerald-400" },
  Redis: { label: "Cache Layer", color: "text-red-400" },
};

const expCards: ExpCard[] = [
  {
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    imgPath: "/images/exp2.png",
    width: 80,
    height: 80,
    logoPath: "/images/logo2.png",
    title: "Full-Stack Developer",
    date: "Apr 2026 - May 2026",
    responsibilities: [
      "Built a live football match discovery platform with real-time score updates and API integration.",
      "Integrated Stripe subscriptions, admin panel, and role-based authentication from scratch.",
      "Deployed full production app using Next.js, Express.js, PostgreSQL, and Redis.",
    ],
  },
  {
    review:
      "Mr. Syed Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    imgPath: "/images/exp1.png",
    width: 94,
    height: 35,
    logoPath: "/images/logo1.png",
    title: "Backend Intern",
    date: "May 2025 - August 2025",
    responsibilities: [
      "Built and maintained backend modules using ASP.NET Core and C#.",
      "Worked with MS SQL Server for database design and query optimization.",
      "Collaborated with senior engineers in a production development environment",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    name: "RODRIGUE TCHITAKA",
    mentions: "@rodrigue-tchitaka",
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    imgPath: "/images/client1.png",
    logo: {
      src: "/images/exp2.png",
      width: 75,
      height: 28,
      alt: "Flacron Gamezone",
    },
  },
  {
    name: "Ayza Noor",
    mentions: "@fortifytechnologies",
    review:
      "Syed Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    imgPath: "/images/client2.png",
    logo: {
      src: "/images/exp1.png",
      width: 94,
      height: 35,
      alt: "Fortify Technologies",
    },
  },
];

const socialImgs: SocialImg[] = [
  {
    name: "wa",
    url: "https://wa.me/923282488387",
    imgPath: "/images/whatsapp.png",
  },
  {
    name: "email",
    url: "mailto:hafizsyedahmedali12@gmail.com",
    imgPath: "/images/email.png",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/HafizSyedAhmedAli",
    imgPath: "/images/github.svg",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Flacron Gamezone",
    liveLink: "https://flacrongamezone.com",
    githubLink: "https://github.com/HafizSyedAhmedAli/Flacron-Gamezone-Local",
    desc: "Live football match discovery platform with real-time scores, league standings, Stripe subscriptions, and role-based auth.",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Stripe"],
    img: "/images/project1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Relay",
    liveLink: "https://relay-demo-web.vercel.app",
    githubLink: "https://github.com/HafizSyedAhmedAli/Relay-Demo",
    desc: "A multi-tenant B2B customer support SaaS featuring embeddable AI chat widgets and real-time voice agents to automate enterprise customer service.",
    tags: ["Next.js", "Convex", "VAPI"],
    img: "/images/project2.png",
    featured: false,
  },
  {
    id: 3,
    title: "GreenCart",
    liveLink: "https://greencart-frontend-ebon.vercel.app",
    githubLink: "https://github.com/HafizSyedAhmedAli/Greencart-FULL-STACK",
    desc: "A high-performance full-stack marketplace optimized for seamless product discovery, secure checkout, and efficient data synchronization.",
    tags: ["React", "Express.js", "MongoDB"],
    img: "/images/project3.png",
    featured: false,
  },
];

const performanceMetrics: PerformanceMetric[] = [
  {
    label: "Redis",
    metric: "99.4% Hit",
    value: 99,
    color: "bg-emerald-400",
  },
  {
    label: "DB",
    metric: "0.8ms Index",
    value: 85,
    color: "bg-indigo-400",
  },
  {
    label: "API",
    metric: "< 150ms P99",
    value: 95,
    color: "bg-amber-400",
  },
];

const techTags: TechTag[] = [
  "Swagger",
  "Zod schemas",
  "Git flow",
  "REST",
  "Postman",
];

const availability: Availability[] = [
  { label: "Status", value: "Open to work", dot: true },
  { label: "Location", value: "Pakistan", dot: false },
  { label: "Timezone", value: "PKT — UTC +5", dot: false },
  { label: "Response", value: "Within 24 hrs", dot: false },
];

const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    width: 50,
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    width: 50,
  },
];

const siteMetadata: SiteMetadata = {
  title: "Ahmed Ali | Full-Stack Developer — Next.js, Node.js, Pakistan",
  description:
    "Full-Stack Developer shipping AI-powered products from database schema to deployed UI. Based in Karachi, Pakistan.",
  url: "https://syedahmedali.com",
  siteName: "Ahmed Ali",
  ogImage: "/opengraph-image.png",
  ogImageAlt: "Ahmed Ali | Full-Stack Developer",
  twitterCard: "summary_large_image" as const,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
  },
  canonical: "https://syedahmedali.com",
};

const techChips: string[] = [
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "TypeScript",
];

export {
  abilities,
  availability,
  counterItems,
  expCards,
  logoIconsList,
  navLinks,
  performanceMetrics,
  projects,
  siteMetadata,
  socialImgs,
  techMeta,
  techStackIcons,
  techTags,
  testimonials,
  techChips,
};
