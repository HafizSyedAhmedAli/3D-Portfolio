import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { losAngelesPageData } from "@/constants/cityPagesCA";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer Los Angeles CA | SaaS, AI & Full-Stack Apps | Ahmed Ali",
  description:
    "Looking for a web developer in Los Angeles CA? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for LA businesses. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer Los Angeles CA | SaaS, AI & Full-Stack Apps | Ahmed Ali",
    description:
      "Ahmed Ali builds production-ready Next.js, Node.js & AI apps for LA businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-los-angeles-ca.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Los Angeles CA – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Los Angeles CA | SaaS, AI & Full-Stack Apps | Ahmed Ali",
    description:
      "Ahmed Ali builds production-ready Next.js, Node.js & AI apps for LA businesses.",
    // images: ["/opengraph/web-developer-los-angeles-ca.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-los-angeles-ca",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(losAngelesPageData);

export default function LosAngelesPage() {
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
      <CityPageTemplate data={losAngelesPageData} />
    </>
  );
}
