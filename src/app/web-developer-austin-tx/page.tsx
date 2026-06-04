// Server component — no changes to structured data or metadata
import type { Metadata } from "next";
import Script from "next/script";
import AustinAbout from "./sections/AustinAbout";
import AustinCityContent from "./sections/AustinCityContent";
import AustinContact from "./sections/AustinContact";
import AustinFooter from "./sections/AustinFooter";
import AustinHero from "./sections/AustinHero";
import AustinNavbar from "./sections/AustinNavbar";
import AustinProjects from "./sections/AustinProjects";
import AustinServices from "./sections/AustinServices";
import AustinTestimonials from "./sections/AustinTestimonials";
import AustinWhyChoose from "./sections/AustinWhyChoose";

export const metadata: Metadata = {
  title: "Web Developer Austin TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
  description:
    "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps. Fast delivery, clean code, real results.",
  openGraph: {
    title: "Web Developer Austin TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-austin-tx",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Austin TX – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Austin TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer in austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-austin-tx",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Web Developer Austin TX – Ahmed Ali",
  description:
    "Full-stack web developer austin tx specializing in Next.js, Node.js, PostgreSQL and AI-powered web applications.",
  url: "https://www.syedahmedali.com/web-developer-austin-tx",
  areaServed: {
    "@type": "City",
    name: "Austin",
    sameAs: "https://en.wikipedia.org/wiki/Austin,_Texas",
  },
  provider: {
    "@type": "Person",
    name: "Ahmed Ali",
    jobTitle: "Web Developer Austin TX",
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
      "Web Development Austin TX",
    ],
  },
};

const breadcrumbSchema = {
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
      name: "Web Developer Austin TX",
      item: "https://www.syedahmedali.com/web-developer-austin-tx",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What full-stack web development services do you offer in Austin TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I offer end-to-end full-stack development using Next.js, Node.js, and PostgreSQL — covering frontend, backend API, database schema, and deployment pipeline. This includes custom SaaS platforms, customer portals, internal business tools, authentication systems, payment integration, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build AI-powered SaaS applications for Austin businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I integrate LLMs, voice agents, and AI chat widgets natively into web applications — including OpenAI integrations, AI chat assistants, document processing pipelines, and voice automation. I have shipped a live multi-tenant B2B SaaS with embeddable AI chat widgets and real-time voice agents.",
      },
    },
    {
      "@type": "Question",
      name: "How do you design and optimize APIs for Austin TX clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build RESTful APIs using Express.js and Node.js following a controller-service-repository architecture. All APIs are Swagger-documented, Zod-validated, and tested before delivery — ensuring clean, maintainable, and scalable backend systems.",
      },
    },
    {
      "@type": "Question",
      name: "What database technologies do you use and how do you handle performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I use PostgreSQL for relational data with proper indexing and schema design, and Redis as a caching layer for sub-millisecond reads. I optimize queries, plan for scalability, and target sub-150ms API response times — keeping applications fast as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build e-commerce and subscription platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I have shipped production Stripe subscription systems including recurring billing, role-based access control, admin dashboards, and customer management. My live football platform Flacron Gamezone uses this exact stack and serves real paying users.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer performance and technical audits for existing web applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I review existing codebases, identify frontend bottlenecks, database slowdowns, and API latency issues, then deliver a prioritized report with actionable fixes and architecture recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available for remote work with Austin TX clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I work fully remotely with businesses across the Austin metro and wider Texas market — including Dallas, Houston, San Antonio, Fort Worth, Plano, and Frisco. I respond within 24 hours and offer a free 30-minute consultation call.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start a new project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I am currently open to work with immediate availability. I respond to all inquiries within 24 hours and can begin most projects within a few days of alignment on scope and requirements.",
      },
    },
  ],
};

export default function AustinPage() {
  return (
    <>
      <Script
        id="schema-professional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-black text-white min-h-screen font-sans">
        <AustinNavbar />
        <AustinHero />
        <AustinAbout />
        <AustinProjects />
        <AustinTestimonials />
        <AustinWhyChoose />
        <AustinServices />
        <AustinCityContent />
        <AustinContact />
        <AustinFooter />
      </main>
    </>
  );
}
