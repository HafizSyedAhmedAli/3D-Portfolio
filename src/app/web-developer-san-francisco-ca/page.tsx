import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { sanFranciscoPageData } from "@/constants/cityPagesCA";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer San Francisco CA | Enterprise SaaS & AI Engineering | Ahmed Ali",
  description:
    "Looking for a web developer in San Francisco CA? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered applications for SF and Bay Area businesses.",
  openGraph: {
    title:
      "Web Developer San Francisco CA | Enterprise SaaS & AI Engineering | Ahmed Ali",
    description:
      "Ahmed Ali builds production-grade Next.js, Node.js & AI apps for SF and Bay Area businesses. Real results.",
    url: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-san-francisco-ca.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer San Francisco CA – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer San Francisco CA | Enterprise SaaS & AI Engineering | Ahmed Ali",
    description:
      "Ahmed Ali builds production-grade Next.js, Node.js & AI apps for SF and Bay Area businesses.",
    // images: ["/opengraph/web-developer-san-francisco-ca.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-san-francisco-ca",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(sanFranciscoPageData);

export default function SanFranciscoPage() {
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
      <CityPageTemplate data={sanFranciscoPageData} />
    </>
  );
}
