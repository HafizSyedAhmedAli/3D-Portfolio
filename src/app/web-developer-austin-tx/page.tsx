import type { Metadata } from "next";
import AustinHero from "./sections/AustinHero";
import AustinAbout from "./sections/AustinAbout";
import AustinProjects from "./sections/AustinProjects";
import AustinTestimonials from "./sections/AustinTestimonials";
import AustinWhyChoose from "./sections/AustinWhyChoose";
import AustinServices from "./sections/AustinServices";
import AustinCityContent from "./sections/AustinCityContent";
import AustinContact from "./sections/AustinContact";
import AustinFooter from "./sections/AustinFooter";
import AustinNavbar from "./sections/AustinNavbar";

export const metadata: Metadata = {
  title: "Web Developer Austin TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
  description:
    "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps. Fast delivery, clean code, real results.",
  keywords: [
    "web developer austin tx",
    "web developer in austin tx",
    "web developer austin texas",
    "web developer in austin texas",
    "next.js developer austin tx",
    "full stack developer austin tx",
    "freelance web developer austin tx",
    "hire web developer austin tx",
  ],
  openGraph: {
    title: "Web Developer Austin TX – Full-Stack & AI-Powered Apps | Ahmed Ali",
    description:
      "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
    url: "https://syedahmedali.com/web-developer-austin-tx",
    type: "website",
  },
  alternates: {
    canonical: "https://syedahmedali.com/web-developer-austin-tx",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Web Developer Austin TX – Ahmed Ali",
  description:
    "Full-stack web developer austin tx specializing in Next.js, Node.js, PostgreSQL and AI-powered web applications.",
  url: "https://syedahmedali.com/web-developer-austin-tx",
  areaServed: {
    "@type": "City",
    name: "Austin",
    sameAs: "https://en.wikipedia.org/wiki/Austin,_Texas",
  },
  provider: {
    "@type": "Person",
    name: "Ahmed Ali",
    jobTitle: "Web Developer Austin TX",
    url: "https://syedahmedali.com",
  },
};

export default function WebDeveloperAustinTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
