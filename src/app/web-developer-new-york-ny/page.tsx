import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { newYorkPageData } from "@/constants/cityPagesNY";

export const metadata: Metadata = {
  title:
    "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer in New York NY? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered apps for NYC fintech, media, and SaaS companies. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer in new york ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for NYC businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-new-york-ny",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer New York NY – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer in new york ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-new-york-ny",
  },
};

const schemas = [
  {
    id: "schema-newyork-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer New York NY – Ahmed Ali",
      description:
        "Full-stack web developer in New York NY specializing in fintech platforms, media/publishing tech, enterprise SaaS, Next.js, Node.js, PostgreSQL, and AI-powered web applications.",
      url: "https://www.syedahmedali.com/web-developer-new-york-ny",
      areaServed: [
        {
          "@type": "City",
          name: "New York",
          sameAs: "https://en.wikipedia.org/wiki/New_York_City",
        },
        {
          "@type": "City",
          name: "Brooklyn",
          sameAs: "https://en.wikipedia.org/wiki/Brooklyn",
        },
        {
          "@type": "City",
          name: "Manhattan",
          sameAs: "https://en.wikipedia.org/wiki/Manhattan",
        },
      ],
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer New York NY",
        url: "https://www.syedahmedali.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        sameAs: [
          "https://github.com/HafizSyedAhmedAli",
          "https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307",
          "https://www.fiverr.com/ahmed_ali_swe",
          "https://www.upwork.com/freelancers/~010e7d0fe9ada9bea1",
        ],
        knowsAbout: [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "TypeScript",
          "React",
          "Full-Stack Development",
          "AI-powered SaaS",
          "Fintech Web Development",
          "Media & Publishing Platforms",
          "Web Development New York NY",
        ],
      },
    },
  },
  {
    id: "schema-newyork-breadcrumb",
    data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.syedahmedali.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Web Developer New York NY",
          item: "https://www.syedahmedali.com/web-developer-new-york-ny",
        },
      ],
    },
  },
  {
    id: "schema-newyork-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer for businesses in New York NY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for companies based in New York NY using Next.js, Node.js, and PostgreSQL. Services include fintech dashboards, media and publishing platforms, multi-tenant SaaS, AI integrations, Stripe billing systems, and backend API engineering — all delivered remotely at the standard NYC's fast-moving market demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build fintech and trading-adjacent applications for a web developer in New York NY engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. New York's financial sector expects precision — accurate transaction handling, audit-ready logging, and systems that don't silently fail. I build with that standard by default: typed configurations, proper error boundaries, and PostgreSQL schemas designed for financial data integrity.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with companies in New York NY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve all five boroughs and the wider metro — Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Jersey City, and Long Island. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How does your pricing compare to a New York NY web development agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Significantly lower — because you work directly with the developer building your product, not an agency with account managers and a Manhattan office to pay for. You get the same engineering output without the overhead markup that comes from hiring an agency physically located in New York NY.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered SaaS for New York startups and media companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets into web applications for New York clients. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — production-proven, not a pitch-deck demo.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a project for a New York NY business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all New York NY inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function NewYorkPage() {
  return (
    <>
      {schemas.map((s) => (
        <Script
          key={s.id}
          id={s.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s.data) }}
        />
      ))}
      <CityPageTemplate data={newYorkPageData} />
    </>
  );
}
