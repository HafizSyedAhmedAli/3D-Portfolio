import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { orlandoPageData } from "@/constants/cityPagesFL";

export const metadata: Metadata = {
  title:
    "Web Developer Orlando FL – Hospitality Tech, SaaS & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer orlando fl? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Orlando businesses. Hospitality tech, SaaS platforms, real results.",
  openGraph: {
    title:
      "Web Developer Orlando FL – Hospitality Tech, SaaS & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer orlando fl? Ahmed Ali builds Next.js, Node.js & AI apps for Orlando businesses. Hospitality tech, SaaS platforms, real results.",
    url: "https://www.syedahmedali.com/web-developer-orlando-fl",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Web Developer Orlando FL – Ahmed Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Orlando FL – Hospitality Tech, SaaS & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer orlando fl? Ahmed Ali builds Next.js, Node.js & AI apps for Orlando businesses. Hospitality tech, real results.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-orlando-fl",
  },
};

const schemas = [
  {
    id: "schema-orlando-service",
    data: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Web Developer Orlando FL – Ahmed Ali",
      description:
        "Full-stack web developer orlando fl specializing in hospitality tech platforms, SaaS applications, booking systems, Next.js, Node.js, and AI-powered web development.",
      url: "https://www.syedahmedali.com/web-developer-orlando-fl",
      areaServed: {
        "@type": "City",
        name: "Orlando",
        sameAs: "https://en.wikipedia.org/wiki/Orlando,_Florida",
      },
      provider: {
        "@type": "Person",
        name: "Ahmed Ali",
        jobTitle: "Web Developer Orlando FL",
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
          "Hospitality Technology",
          "Booking System Development",
          "Web Development Orlando FL",
        ],
      },
    },
  },
  {
    id: "schema-orlando-breadcrumb",
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
          name: "Web Developer Orlando FL",
          item: "https://www.syedahmedali.com/web-developer-orlando-fl",
        },
      ],
    },
  },
  {
    id: "schema-orlando-faq",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development services do you offer Orlando FL businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer full-stack web development for Orlando FL clients using Next.js, Node.js, and PostgreSQL. Services include hospitality platform development, booking systems, SaaS applications, AI integrations, Stripe payment systems, and technical audits — all delivered remotely at the quality Orlando's experience economy demands.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build booking and reservation systems for Orlando hospitality companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I build real-time booking and reservation systems designed for high-concurrency environments — the kind of traffic Orlando's hospitality and entertainment sector generates. My architecture uses Redis caching and indexed PostgreSQL to handle peaks without degrading user experience.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work remotely with Orlando FL clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully remote. I serve Orlando and the wider Central Florida region — Lake Nona, Celebration, Kissimmee, Sanford, Lake Mary, Winter Park, Altamonte Springs, and the I-Drive corridor. I respond within 24 hours and offer a free 30-minute consultation before any engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered features for Orlando hospitality and SaaS products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I integrate LLMs, recommendation engines, voice agents, and AI chat widgets into web applications for Orlando clients. Whether it is a hospitality chatbot or a SaaS automation pipeline, I build AI as a real product feature — not a demo.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle high-traffic situations for Orlando web applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I design for high-concurrency from the start — Redis caching for sub-millisecond reads, PostgreSQL connection pooling, indexed queries, and layered architecture that distributes load correctly. Orlando's entertainment sector produces real traffic spikes and I build to handle them.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you start an Orlando FL web project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am currently open to work with immediate availability. I respond to all Orlando FL inquiries within 24 hours and can begin most projects within a few days of aligning on scope and requirements.",
          },
        },
      ],
    },
  },
];

export default function OrlandoPage() {
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
      <CityPageTemplate data={orlandoPageData} />
    </>
  );
}
