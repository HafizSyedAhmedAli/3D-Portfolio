import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { jacksonvillePageData } from "@/constants/cityPagesFL";

export const metadata: Metadata = {
  title:
    "Web Developer Jacksonville FL – Fintech, Enterprise & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer jacksonville fl? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered apps for Jacksonville businesses. Fintech, enterprise backends, clean code, real results.",
  openGraph: {
    title:
      "Web Developer Jacksonville FL – Fintech, Enterprise & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer jacksonville fl? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Jacksonville businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Jacksonville FL – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Jacksonville FL – Fintech, Enterprise & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer jacksonville fl? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
  },
};

const schemas = [
  {
    id: "schema-jacksonville-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Jacksonville FL – Ahmed Ali",
      description:
        "Full-stack web developer jacksonville fl specializing in enterprise backends, fintech platforms, Next.js, Node.js, PostgreSQL, and AI-powered web applications.",
      url: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
      areaServed: {
        "@type": "City",
        name: "Jacksonville",
        sameAs: "https://en.wikipedia.org/wiki/Jacksonville,_Florida",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Jacksonville FL",
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
          "Enterprise Backends",
          "Web Development Jacksonville FL",
        ],
      },
    },
  },
  {
    id: "schema-jacksonville-breadcrumb",
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
          name: "Web Developer Jacksonville FL",
          item: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
        },
      ],
    },
  },
  {
    id: "schema-jacksonville-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Jacksonville FL businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Jacksonville FL clients using Next.js, Node.js, and PostgreSQL. Services include enterprise backend systems, fintech platforms, AI integrations, Stripe payment systems, custom SaaS, technical audits, and API engineering — all delivered remotely with the reliability Jacksonville's financial services sector demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build enterprise-grade fintech applications for Jacksonville companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I build to the standard Jacksonville's banking and financial services industry expects — audit-ready code, TypeScript throughout, Swagger documentation, Zod validation, and proper controller-service-repository architecture. My live production projects demonstrate this is the baseline I deliver for every client.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Jacksonville FL clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Jacksonville and the wider Northeast Florida area — Southside, Riverside, San Marco, Ponte Vedra Beach, Orange Park, Fleming Island, and the Beaches. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle database design for Jacksonville web projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I use PostgreSQL with proper schema design, indexing strategy, and Redis caching for high-throughput reads. Every database I design targets sub-150ms API response times and is built to scale without requiring a rewrite as your Jacksonville business grows.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate Stripe payments for a Jacksonville business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I have shipped full Stripe subscription systems in production — including recurring billing, webhook handling, customer dashboards, and admin billing portals. My Flacron Gamezone platform uses this exact stack with real paying users.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Jacksonville FL web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Jacksonville FL inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function JacksonvillePage() {
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
      <CityPageTemplate data={jacksonvillePageData} />
    </>
  );
}
