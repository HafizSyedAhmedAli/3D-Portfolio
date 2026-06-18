import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { miamiPageData } from "@/constants/cityPagesFL";

export const metadata: Metadata = {
  title:
    "Web Developer Miami FL – SaaS, Fintech & International Platforms | Ahmed Ali",
  description:
    "Looking for a web developer miami fl? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Miami startups and fintech companies. LatAm-ready, fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer Miami FL – SaaS, Fintech & International Platforms | Ahmed Ali",
    description:
      "Looking for a web developer miami fl? Ahmed Ali builds Next.js, Node.js & AI apps for Miami startups. LatAm-ready, fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-miami-fl",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Miami FL – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Miami FL – SaaS, Fintech & International Platforms | Ahmed Ali",
    description:
      "Looking for a web developer miami fl? Ahmed Ali builds Next.js, Node.js & AI apps for Miami startups and fintech. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-miami-fl",
  },
};

const schemas = [
  {
    id: "schema-miami-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Miami FL – Ahmed Ali",
      description:
        "Full-stack web developer miami fl specializing in international SaaS platforms, fintech applications, LatAm-ready architecture, Next.js, Node.js, and AI-powered web apps.",
      url: "https://www.syedahmedali.com/web-developer-miami-fl",
      areaServed: {
        "@type": "City",
        name: "Miami",
        sameAs: "https://en.wikipedia.org/wiki/Miami",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Miami FL",
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
          "International SaaS Platforms",
          "Fintech Web Development",
          "Web Development Miami FL",
        ],
      },
    },
  },
  {
    id: "schema-miami-breadcrumb",
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
          name: "Web Developer Miami FL",
          item: "https://www.syedahmedali.com/web-developer-miami-fl",
        },
      ],
    },
  },
  {
    id: "schema-miami-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Miami FL businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Miami FL clients using Next.js, Node.js, and PostgreSQL. Services include international SaaS platforms, fintech applications, AI integrations, multilingual-ready architecture, Stripe multi-currency billing, and technical audits — delivered at the speed Miami's startup market demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build LatAm-facing SaaS platforms for Miami companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I build with international deployment in mind — multi-timezone architecture, multilingual-ready UI patterns, multi-currency Stripe billing, and infrastructure that performs for users whether they are in Miami, Bogotá, or Buenos Aires. This is how I approach every Miami client's product by default.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Miami FL clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Miami and the wider South Florida area — Brickell, Wynwood, Coral Gables, Miami Beach, Doral, Aventura, Fort Lauderdale, and Boca Raton. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered SaaS for Miami startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, RAG pipelines, and AI chat widgets into web applications for Miami startups. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — production-proven, not experimental.",
          },
        },
        {
          "@type": "Question",
          name: "How does your pricing compare to Miami web development agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Significantly lower — because you work directly with the developer, not an agency with account managers and project coordinators. Miami founders get the same engineering quality without the overhead markup. Every engagement starts with a free 30-minute consultation.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Miami FL web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Miami FL inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function MiamiPage() {
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
      <CityPageTemplate data={miamiPageData} />
    </>
  );
}
