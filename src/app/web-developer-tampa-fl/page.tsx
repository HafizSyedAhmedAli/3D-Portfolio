import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { tampaPageData } from "@/constants/cityPagesFL";

export const metadata: Metadata = {
  title:
    "Web Developer Tampa FL – HealthTech, Cybersecurity & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer tampa fl? Ahmed Ali builds secure, production-ready Next.js, Node.js & AI-powered apps for Tampa businesses. HealthTech, cybersecurity, real results.",
  openGraph: {
    title:
      "Web Developer Tampa FL – HealthTech, Cybersecurity & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer tampa fl? Ahmed Ali builds secure Next.js, Node.js & AI apps for Tampa businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-tampa-fl",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Tampa FL – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Tampa FL – HealthTech, Cybersecurity & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer tampa fl? Ahmed Ali builds secure Next.js, Node.js & AI apps for Tampa businesses. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-tampa-fl",
  },
};

const schemas = [
  {
    id: "schema-tampa-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Tampa FL – Ahmed Ali",
      description:
        "Full-stack web developer tampa fl specializing in secure application development, healthtech platforms, cybersecurity-aware architecture, Next.js, Node.js, and PostgreSQL.",
      url: "https://www.syedahmedali.com/web-developer-tampa-fl",
      areaServed: {
        "@type": "City",
        name: "Tampa",
        sameAs: "https://en.wikipedia.org/wiki/Tampa,_Florida",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Tampa FL",
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
          "HealthTech Development",
          "Secure Web Applications",
          "Web Development Tampa FL",
        ],
      },
    },
  },
  {
    id: "schema-tampa-breadcrumb",
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
          name: "Web Developer Tampa FL",
          item: "https://www.syedahmedali.com/web-developer-tampa-fl",
        },
      ],
    },
  },
  {
    id: "schema-tampa-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Tampa FL businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer secure full-stack web development for Tampa FL clients using Next.js, Node.js, and PostgreSQL. Services include healthtech platform development, cybersecurity-aware architecture, AI integrations, Stripe billing, backend API engineering, and technical audits — all delivered remotely with security-first standards Tampa's market demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build HIPAA-aware web applications for Tampa healthtech companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I build with data sensitivity in mind — proper access control, encrypted field patterns, audit logging, and role-based permissions are standard in my architecture. Tampa's healthcare and medical technology sector requires this baseline, and I deliver it from commit one.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Tampa FL clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Tampa and the wider Tampa Bay area — Westshore, South Tampa, Brandon, Clearwater, St. Petersburg, Largo, and beyond. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How do you approach security in web applications for Tampa cybersecurity companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Security is an architecture concern, not a feature request. I build with authentication, input validation, rate limiting, CORS configuration, and environment hardening by default — on every project. For cybersecurity clients, I can also conduct a full security audit of existing codebases.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate AI features into Tampa business applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets natively into web applications for Tampa clients. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — production-proven for Tampa's demanding tech market.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Tampa FL web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Tampa FL inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function TampaPage() {
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
      <CityPageTemplate data={tampaPageData} />
    </>
  );
}
