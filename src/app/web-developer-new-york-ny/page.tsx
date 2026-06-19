import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { newYorkPageData } from "@/constants/cityPagesNY";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer in New York NY? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered apps for NYC fintech, media, and SaaS companies. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer in new york ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for NYC businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-new-york-ny",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-new-york-ny.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer New York NY – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer New York NY – Fintech, Media & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer in new york ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    // images: ["/opengraph/web-developer-new-york-ny.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-new-york-ny",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(newYorkPageData);

export default function NewYorkPage() {
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
      <CityPageTemplate data={newYorkPageData} />
    </>
  );
}
