import { techStackIcons } from "@/constants";
export type NavLink = {
  name: string;
  link: string;
};

export type Ability = {
  imgPath: string;
  title: string;
  desc: string;
};

export type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: readonly [number, number, number];
  imgPath: string;
};

export type ExpCard = {
  review: string;
  imgPath: string;
  width: number;
  height: number;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

export type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type SocialImg = {
  name: string;
  url: string;
  imgPath: string;
};

export type Project = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  img: string;
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
};

export type PerformanceMetric = {
  label: string;
  metric: string;
  value: number;
  color: `bg-${string}`;
};

export type TechTag =
  | "Swagger"
  | "Zod schemas"
  | "Git flow"
  | "REST"
  | "Postman";

export type TechName = (typeof techStackIcons)[number]["name"];

export type Availability = {
  label: string;
  value: string;
  dot: boolean;
};

export type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

export type LogoIcon = {
  imgPath: string;
  width: number;
};

export type SiteMetadata = {
  title: string;
  description: string;
  url: string;
  siteName: string;
  ogImage: string;
  ogImageAlt: string;
  twitterCard: "summary" | "summary_large_image" | "app" | "player";
  robots: {
    index: boolean;
    follow: boolean;
    nocache: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-snippet": number;
      "max-image-preview": "none" | "standard" | "large";
      "max-video-preview": number;
    };
  };
  canonical: string;
};

// ── City Landing Page Types ──────────────────────────────────────────────────

export type CityPageProject = {
  title: string;
  tags: string[];
  desc: string;
  live: string;
  gh: string;
  img: string;
};

export type CityPageTestimonial = {
  name: string;
  handle: string;
  review: string;
  service: string;
  imgPath: string;
  imgAlt: string;
};

export type CityPageStat = {
  value: string;
  label: string;
};

export type CityPageSkillTag =
  | "Next.js"
  | "Node.js"
  | "PostgreSQL"
  | "Redis"
  | "TypeScript"
  | "AI/SaaS";

export type CityPageAbilityCard = {
  icon: string;
  title: string;
  desc: string;
};

export type CityPageWhyCard = {
  title: string;
  desc: string;
};

export type CityPageService = {
  title: string;
  desc: string;
  details: string[];
};

export type AustinNavLink = {
  name: string;
  href: string;
};

export type CityPageCityLink = {
  city: string;
  href: string;
};

export type CityPageAvailability = Availability;

export type CityPageHighlight = CityPageStat;
