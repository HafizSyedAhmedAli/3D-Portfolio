import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { dallasPageData } from "@/constants/cityPagesTX";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title: "Web Developer Dallas TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  description:
    "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Dallas businesses. Fast delivery, clean code, real results.",
  // openGraph: {
  //   title: "Web Developer Dallas TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  //   description:
  //     "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
  //   url: "https://www.syedahmedali.com/web-developer-dallas-tx",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/opengraph/web-developer-dallas-tx.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Web Developer Dallas TX – Ahmed Ali",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Web Developer Dallas TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  //   description:
  //     "Looking for a web developer dallas tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
  //   images: ["/opengraph/web-developer-dallas-tx.png"],
  // },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-dallas-tx",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(dallasPageData);

export default function DallasPage() {
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
      <CityPageTemplate data={dallasPageData} />
    </>
  );
}
