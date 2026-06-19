import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { rochesterPageData } from "@/constants/cityPagesNY";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

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
    // images: [
    //   {
    //     url: "/opengraph/web-developer-rochester-ny.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Rochester NY – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Rochester NY – Manufacturing Tech & Full-Stack Apps | Ahmed Ali",
    description:
      "Looking for a web developer rochester ny? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    // images: ["/opengraph/web-developer-rochester-ny.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-rochester-ny",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(rochesterPageData);

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
