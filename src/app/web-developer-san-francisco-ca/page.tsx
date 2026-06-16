import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { sanFranciscoPageData } from "@/constants/cityPages";

export const metadata: Metadata = {
  title:
    "Web Developer San Francisco CA – Enterprise SaaS & AI Engineering | Ahmed Ali",
  description:
    "Looking for a web developer in San Francisco CA? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered applications for SF and Bay Area businesses. Clean code, real results.",
  openGraph: {
    title:
      "Web Developer San Francisco CA – Enterprise SaaS & AI Engineering | Ahmed Ali",
    description:
      "Looking for a web developer san francisco ca? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for SF businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer San Francisco CA – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer San Francisco CA – Enterprise SaaS & AI Engineering | Ahmed Ali",
    description:
      "Looking for a web developer in san francisco ca? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for SF and Bay Area businesses. Real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
  },
};

const schemas = [
  {
    id: "schema-sf-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer San Francisco CA – Ahmed Ali",
      description:
        "Full-stack web developer san francisco ca specializing in enterprise SaaS, AI engineering, Next.js, Node.js, and PostgreSQL for Bay Area businesses.",
      url: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
      areaServed: [
        {
          "@type": "City",
          name: "San Francisco",
          sameAs: "https://en.wikipedia.org/wiki/San_Francisco",
        },
        {
          "@type": "City",
          name: "Oakland",
          sameAs: "https://en.wikipedia.org/wiki/Oakland,_California",
        },
        {
          "@type": "City",
          name: "San Jose",
          sameAs: "https://en.wikipedia.org/wiki/San_Jose,_California",
        },
      ],
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer San Francisco CA",
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
          "Enterprise Web Development",
          "Web Development San Francisco CA",
        ],
      },
    },
  },
  {
    id: "schema-sf-breadcrumb",
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
          name: "Web Developer San Francisco CA",
          item: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
        },
      ],
    },
  },
  {
    id: "schema-sf-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer San Francisco CA businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer enterprise-grade full-stack web development for San Francisco CA clients using Next.js, Node.js, and PostgreSQL. Services include multi-tenant SaaS platforms, AI and LLM integrations, Stripe subscription systems, backend API engineering, database architecture, and technical audits — all delivered remotely at the quality level the Bay Area demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build enterprise AI-powered SaaS for San Francisco startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I architect and integrate AI features at the system level — LLMs, retrieval-augmented generation, voice agents, and embedded AI chat widgets. I have shipped a live multi-tenant enterprise SaaS with AI chat and real-time voice automation currently serving real users.",
          },
        },
        {
          "@type": "Question",
          name: "How does your engineering quality compare to San Francisco agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I build to the same standards SF engineering teams expect — TypeScript throughout, clean layered architecture, Swagger documentation, Zod validation, Redis caching, and PostgreSQL optimization. The difference is you work directly with the developer, eliminating agency overhead and communication layers.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with San Francisco and Bay Area clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve San Francisco and the full Bay Area — Oakland, Berkeley, San Jose, Palo Alto, Mountain View, Sunnyvale, Santa Clara, and Fremont. Bay Area companies have always understood the value of remote engineering talent. I respond within 24 hours and offer a free 30-minute consultation.",
          },
        },
        {
          "@type": "Question",
          name: "What makes your architecture suitable for Series A and Series B companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clean separation of concerns in controller-service-repository layers, TypeScript throughout, proper database indexing, Redis caching, and full Swagger documentation mean your engineering team can confidently extend and maintain what I build. No hero code, no tribal knowledge dependencies.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a San Francisco CA web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all San Francisco CA inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements — no six-week agency waitlists.",
          },
        },
      ],
    },
  },
];

export default function SanFranciscoPage() {
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
      <CityPageTemplate data={sanFranciscoPageData} />
    </>
  );
}
