import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { sacramentoPageData } from "@/constants/cityPages";

export const metadata: Metadata = {
  title:
    "Web Developer Sacramento CA – Full-Stack & AI-Powered Apps | Ahmed Ali",
  description:
    "Looking for a web developer in Sacramento CA? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Sacramento businesses. Fast delivery, clean code, real results.",
  openGraph: {
    title:
      "Web Developer Sacramento CA – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer sacramento ca? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-sacramento-ca",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Sacramento CA – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Sacramento CA – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer in sacramento ca? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-sacramento-ca",
  },
};

const schemas = [
  {
    id: "schema-sacramento-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Sacramento CA – Ahmed Ali",
      description:
        "Full-stack web developer sacramento ca specializing in Next.js, Node.js, PostgreSQL and AI-powered web applications for Sacramento businesses.",
      url: "https://www.syedahmedali.com/web-developer-sacramento-ca",
      areaServed: {
        "@type": "City",
        name: "Sacramento",
        sameAs: "https://en.wikipedia.org/wiki/Sacramento,_California",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Sacramento CA",
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
          "Web Development Sacramento CA",
        ],
      },
    },
  },
  {
    id: "schema-sacramento-breadcrumb",
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
          name: "Web Developer Sacramento CA",
          item: "https://www.syedahmedali.com/web-developer-sacramento-ca",
        },
      ],
    },
  },
  {
    id: "schema-sacramento-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Sacramento CA businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Sacramento CA clients using Next.js, Node.js, and PostgreSQL. Services include custom SaaS platforms, AI integrations, Stripe payment systems, backend API engineering, database architecture, and technical audits — all delivered remotely with the reliability of an in-house developer.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered web apps for Sacramento companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets into web applications for Sacramento clients. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — this is production-proven, not experimental.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Sacramento CA clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Sacramento and the wider Greater Sacramento area — including Elk Grove, Roseville, Folsom, Rancho Cordova, Davis, Woodland, and West Sacramento. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle database design for Sacramento web projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I use PostgreSQL with proper schema design, indexing strategy, and Redis caching for high-throughput reads. Every database I design targets sub-150ms API response times and is built to scale without requiring a rewrite.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate Stripe payments for a Sacramento business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I have shipped full Stripe subscription systems in production — including recurring billing, webhook handling, customer dashboards, and admin billing portals. My Flacron Gamezone platform uses this exact stack with real paying users.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Sacramento CA web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Sacramento CA inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function SacramentoPage() {
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
      <CityPageTemplate data={sacramentoPageData} />
    </>
  );
}
