import type {
  Ability,
  CounterItem,
  ExpCard,
  ExpLogo,
  LogoIcon,
  NavLink,
  Project,
  SocialImg,
  TechStackIcon,
  TechStackImg,
  Testimonial,
  Word,
} from "../types/index";

const navLinks: NavLink[] = [
  {
    name: "Work",
    link: "#work",
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

const words: Word[] = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems: CounterItem[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    width: 280,
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    width: 336,
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    width: 310,
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    width: 290,
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    width: 320,
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    width: 280,
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    width: 320,
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    width: 320,
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    width: 280,
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    width: 280,
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    width: 244,
  },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/server-solid.png",
    title: "Scalable Architecture",
    desc: "Designing clean, maintainable systems using industry standard design patterns and robust server side logic.",
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

const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
    width: 141,
    height: 129,
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
    width: 111,
    height: 135,
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
    width: 139,
    height: 145,
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
    width: 129,
    height: 129,
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
    width: 155,
    height: 155,
  },
];

const techStackIcons: readonly TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Next.js Developer",
    modelPath: "/models/nextjs-icon-transformed.glb",
    scale: 0.3,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Database Engineer",
    modelPath: "/models/postgresql-transformed.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "NoSQL Developer",
    modelPath: "/models/mongodb-icon-transformed.glb",
    scale: 0.4,
    rotation: [0, 0, 0],
  },
] as const;

const expCards: ExpCard[] = [
  {
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    imgPath: "/images/exp2.png",
    width: 100,
    height: 100,
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
    width: 150,
    height: 56,
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

const expLogos: ExpLogo[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "RODRIGUE TCHITAKA",
    mentions: "@rodrigue-tchitaka",
    review:
      "The platform was delivered on time and worked exactly as we described. Our users can follow live matches smoothly and the subscription system just works. Very professional to work with.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ayza Noor",
    mentions: "@fortifytechnologies",
    review:
      "Syed Ahmed Ali contributed to development tasks and performed his responsibilities diligently and was an active team member throughout the internship.",
    imgPath: "/images/client2.png",
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

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
