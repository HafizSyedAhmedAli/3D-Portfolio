import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { houstonPageData } from "@/constants/cityPagesTX";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title: "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
  description:
    "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered applications for Houston businesses. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
    description:
      "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Houston businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-houston-tx",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Houston TX – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Houston TX – Enterprise Backends & AI Apps | Ahmed Ali",
    description:
      "Looking for a web developer houston tx? Ahmed Ali builds production-grade Next.js, Node.js & AI apps. Fast delivery, real results.",
    // images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-houston-tx",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(houstonPageData);

export default function HoustonPage() {
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
      <CityPageTemplate data={houstonPageData} />
    </>
  );
}
