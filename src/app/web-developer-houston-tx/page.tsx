import type { Metadata } from "next";
import Script from "next/script";
import HoustonNavbar from "./sections/HoustonNavbar";
import HoustonHero from "./sections/HoustonHero";
import HoustonAbout from "./sections/HoustonAbout";
import HoustonProjects from "./sections/HoustonProjects";
import HoustonTestimonials from "./sections/HoustonTestimonials";
import HoustonWhyChoose from "./sections/HoustonWhyChoose";
import HoustonServices from "./sections/HoustonServices";
import HoustonCityContent from "./sections/HoustonCityContent";
import HoustonContact from "./sections/HoustonContact";
import HoustonFooter from "./sections/HoustonFooter";

export const metadata: Metadata = {
  title: "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
  description:
    "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered applications for Houston businesses. Fast delivery, real results.",
  keywords: [
    "web developer houston tx",
    "web developer in houston tx",
    "web developer houston texas",
    "web developer in houston texas",
    "next.js developer houston tx",
    "full stack developer houston tx",
    "freelance web developer houston tx",
    "hire web developer houston tx",
  ],
  openGraph: {
    title:
      "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
    description:
      "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Houston businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-houston-tx",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Houston TX – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
    description:
      "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-houston-tx",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Web Developer Houston TX – Ahmed Ali",
  description:
    "Full-stack web developer houston tx specializing in enterprise backend systems, Next.js, Node.js, PostgreSQL, and AI-powered web applications for Houston businesses.",
  url: "https://www.syedahmedali.com/web-developer-houston-tx",
  areaServed: {
    "@type": "City",
    name: "Houston",
    sameAs: "https://en.wikipedia.org/wiki/Houston",
  },
  provider: {
    "@type": "Person",
    name: "Ahmed Ali",
    jobTitle: "Web Developer Houston TX",
    url: "https://www.syedahmedali.com",
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
      "Web Development Houston TX",
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
      name: "Web Developer Houston TX",
      item: "https://www.syedahmedali.com/web-developer-houston-tx",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What web development services do you offer Houston TX businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I offer full-stack web development for Houston TX clients using Next.js, Node.js, and PostgreSQL. Services include enterprise backend systems, AI integrations, Stripe payment platforms, custom SaaS, technical audits, and API engineering — all delivered remotely with the reliability of an in-house developer.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build enterprise-grade web applications for Houston companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I specialize in production-grade systems built for scale — PostgreSQL with proper indexing, Redis caching, layered backend architecture, and TypeScript throughout. My live projects serve real users and handle real transactions, which is the standard I deliver for every Houston client.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work remotely with Houston TX clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fully remote. I serve Houston and the wider Greater Houston area — including Sugar Land, The Woodlands, Pearland, Katy, Pasadena, and beyond. I respond within 24 hours and offer a free 30-minute consultation before any project begins.",
      },
    },
    {
      "@type": "Question",
      name: "How do you approach API design for Houston web projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build RESTful APIs using Express.js and Node.js following a strict controller-service-repository pattern. All APIs are Swagger-documented, Zod-validated, and tested before delivery. This makes your backend maintainable, auditable, and ready for third-party integration.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate AI features into an existing Houston business application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I integrate LLM-powered chat assistants, voice agents, document processing pipelines, and automation workflows into existing or new applications. My Relay SaaS project — a live multi-tenant platform with embedded AI chat and real-time voice agents — demonstrates exactly this capability.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start a new Houston TX web project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I am currently open to work with immediate availability. I respond to all Houston TX inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
      },
    },
  ],
};

export default function HoustonPage() {
  return (
    <>
      <Script
        id="schema-houston-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="schema-houston-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-houston-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-black text-white min-h-screen font-sans">
        <HoustonNavbar />
        <HoustonHero />
        <HoustonAbout />
        <HoustonProjects />
        <HoustonTestimonials />
        <HoustonWhyChoose />
        <HoustonServices />
        <HoustonCityContent />
        <HoustonContact />
        <HoustonFooter />
      </main>
    </>
  );
}
