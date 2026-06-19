import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { austinPageData } from "@/constants/cityPages";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title: "Web Developer Austin TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  description:
    "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps. Fast delivery, clean code, real results.",
  // openGraph: {
  //   title: "Web Developer Austin TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  //   description:
  //     "Looking for a web developer austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
  //   url: "https://www.syedahmedali.com/web-developer-austin-tx",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/opengraph/web-developer-austin-tx.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Web Developer Austin TX – Ahmed Ali",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Web Developer Austin TX | Next.js, Node.js & AI Apps | Ahmed Ali",
  //   description:
  //     "Looking for a web developer in austin tx? Ahmed Ali builds production-ready Next.js, Node.js & AI apps. Fast delivery, real results.",
  //   images: ["/opengraph/web-developer-austin-tx.png"],
  // },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-austin-tx",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(austinPageData);

export default function AustinPage() {
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
      <CityPageTemplate data={austinPageData} />
    </>
  );
}
