import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { losAngelesPageData } from "@/constants/cityPages";

export const metadata: Metadata = {
  title:
    "Web Developer Los Angeles CA – SaaS, AI & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer in Los Angeles CA? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for LA businesses. Fast delivery, clean code, real results.",
  openGraph: {
    title:
      "Web Developer Los Angeles CA – SaaS, AI & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer los angeles ca? Ahmed Ali builds production-ready Next.js, Node.js & AI apps for LA businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Los Angeles CA – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Los Angeles CA – SaaS, AI & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer in los angeles ca? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
  },
};

const schemas = [
  {
    id: "schema-la-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Los Angeles CA – Ahmed Ali",
      description:
        "Full-stack web developer los angeles ca specializing in SaaS platforms, AI integrations, Next.js, Node.js, and PostgreSQL for LA businesses.",
      url: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
      areaServed: {
        "@type": "City",
        name: "Los Angeles",
        sameAs: "https://en.wikipedia.org/wiki/Los_Angeles",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Los Angeles CA",
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
          "Web Development Los Angeles CA",
        ],
      },
    },
  },
  {
    id: "schema-la-breadcrumb",
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
          name: "Web Developer Los Angeles CA",
          item: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
        },
      ],
    },
  },
  {
    id: "schema-la-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Los Angeles CA businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Los Angeles CA clients using Next.js, Node.js, and PostgreSQL. Services include custom SaaS platforms, AI integrations, creator tech tools, Stripe billing, backend API engineering, and technical audits — delivered remotely at the quality LA's tech market demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered SaaS for Los Angeles startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets into web applications for LA startups and companies. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — production-proven, not experimental.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with entertainment and creator tech companies in LA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. LA's digital economy is built on content, streaming, and creator platforms. I build the full-stack infrastructure that powers those products — from content management systems and creator dashboards to subscription billing and AI-powered features.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Los Angeles CA clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Los Angeles and the wider LA metro — Santa Monica, Culver City, West Hollywood, Burbank, Pasadena, Long Beach, El Segundo, and beyond. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How does your pricing compare to Los Angeles web development agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Significantly lower — because you work directly with the developer, not an agency with layers of account managers and project managers. You get Bay Area and LA-quality engineering without the overhead markup. Every engagement starts with a free 30-minute consultation.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Los Angeles CA web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Los Angeles CA inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function LosAngelesPage() {
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
      <CityPageTemplate data={losAngelesPageData} />
    </>
  );
}
