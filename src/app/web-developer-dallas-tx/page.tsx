import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { dallasPageData } from "@/constants/cityPages";

export const metadata: Metadata = {
  title: "Web Developer Dallas TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
  description:
    "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Dallas businesses. Fast delivery, clean code, real results.",
  openGraph: {
    title: "Web Developer Dallas TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-dallas-tx",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Dallas TX – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Dallas TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-dallas-tx",
  },
};

const schemas = [
  {
    id: "schema-dallas-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Dallas TX – Ahmed Ali",
      description:
        "Full-stack web developer dallas tx specializing in Next.js, Node.js, PostgreSQL and AI-powered web applications for Dallas businesses.",
      url: "https://www.syedahmedali.com/web-developer-dallas-tx",
      areaServed: {
        "@type": "City",
        name: "Dallas",
        sameAs: "https://en.wikipedia.org/wiki/Dallas",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Dallas TX",
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
          "Express.js",
          "REST API Design",
          "Stripe Integration",
          "Web Development Dallas TX",
        ],
      },
    },
  },
  {
    id: "schema-dallas-breadcrumb",
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
          name: "Web Developer Dallas TX",
          item: "https://www.syedahmedali.com/web-developer-dallas-tx",
        },
      ],
    },
  },
  {
    id: "schema-dallas-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Dallas TX businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development using Next.js, Node.js, and PostgreSQL for Dallas TX clients. Services include custom SaaS platforms, AI integrations, payment systems, backend APIs, database architecture, and technical audits — all delivered remotely with the same quality as an in-house developer.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered web apps for Dallas companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets into web applications for Dallas clients. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — this is production-proven, not experimental.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Dallas TX clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Dallas and the wider DFW metro — including Plano, Frisco, Irving, Garland, McKinney, Allen, and beyond. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle database design for Dallas web projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I use PostgreSQL with proper schema design, indexing strategy, and Redis caching for high-throughput reads. Every database I design targets sub-150ms API response times and is built to scale without requiring a rewrite.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate Stripe payments for a Dallas business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I have shipped full Stripe subscription systems in production — including recurring billing, webhook handling, customer dashboards, and admin billing portals. My Flacron Gamezone platform uses this exact stack with real paying users.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Dallas TX web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Dallas TX inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function DallasPage() {
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
      <CityPageTemplate data={dallasPageData} />
    </>
  );
}
