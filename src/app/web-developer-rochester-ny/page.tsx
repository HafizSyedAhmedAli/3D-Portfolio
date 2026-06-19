import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { rochesterPageData } from "@/constants/cityPagesNY";

export const metadata: Metadata = {
  title:
    "Web Developer Rochester NY – Manufacturing Tech & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer rochester ny? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered apps for Rochester's manufacturing, optics, and imaging-tech sector. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer Rochester NY – Manufacturing Tech & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer rochester ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Rochester businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-rochester-ny",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Rochester NY – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Rochester NY – Manufacturing Tech & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer rochester ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-rochester-ny",
  },
};

const schemas = [
  {
    id: "schema-rochester-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Rochester NY – Ahmed Ali",
      description:
        "Full-stack web developer rochester ny specializing in manufacturing operations software, imaging/optics-tech platforms, Next.js, Node.js, PostgreSQL, and AI-powered web applications.",
      url: "https://www.syedahmedali.com/web-developer-rochester-ny",
      areaServed: {
        "@type": "City",
        name: "Rochester",
        sameAs: "https://en.wikipedia.org/wiki/Rochester,_New_York",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Rochester NY",
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
          "Manufacturing Operations Software",
          "Imaging & Optics Tech",
          "Web Development Rochester NY",
        ],
      },
    },
  },
  {
    id: "schema-rochester-breadcrumb",
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
          name: "Web Developer Rochester NY",
          item: "https://www.syedahmedali.com/web-developer-rochester-ny",
        },
      ],
    },
  },
  {
    id: "schema-rochester-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Rochester NY businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Rochester NY clients using Next.js, Node.js, and PostgreSQL. Services include manufacturing operations dashboards, inventory and supply-chain tools, AI integrations, Stripe billing systems, backend API engineering, and technical audits — delivered remotely at the reliability standard Rochester's industrial base requires.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build operational software for Rochester's manufacturing and imaging sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Rochester's legacy in precision optics and imaging technology means local manufacturers need software that handles structured production data reliably — inventory tracking, quality control logging, and supply-chain dashboards. I build PostgreSQL-backed systems with proper indexing specifically for that kind of operational data.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Rochester NY clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Rochester and the wider Finger Lakes region — Brighton, Henrietta, Greece, Webster, Pittsford, Victor, and Irondequoit. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered features for Rochester businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, voice agents, and AI chat widgets into web applications for Rochester clients. I have shipped a live multi-tenant SaaS with embeddable AI chat and real-time voice automation — production-proven, not experimental.",
          },
        },
        {
          "@type": "Question",
          name: "How does your pricing compare to Rochester web development agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Significantly lower — because you work directly with the developer, not an agency layering on account management fees. Rochester businesses get the same engineering quality without the markup. Every engagement starts with a free 30-minute consultation.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start a Rochester NY web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Rochester NY inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function RochesterPage() {
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
      <CityPageTemplate data={rochesterPageData} />
    </>
  );
}
