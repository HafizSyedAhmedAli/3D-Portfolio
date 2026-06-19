import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { tampaPageData } from "@/constants/cityPagesFL";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer Tampa FL | HealthTech, Cybersecurity & Full-Stack | Ahmed Ali",
  description:
    "Looking for a web developer tampa fl? Ahmed Ali builds secure, production-ready Next.js, Node.js & AI-powered apps for Tampa businesses. HealthTech, cybersecurity, real results.",
  openGraph: {
    title:
      "Web Developer Tampa FL | HealthTech, Cybersecurity & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds secure Next.js, Node.js & AI apps for Tampa businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-tampa-fl",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-tampa-fl.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Tampa FL – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Tampa FL | HealthTech, Cybersecurity & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds secure Next.js, Node.js & AI apps for Tampa businesses.",
    // images: ["/opengraph/web-developer-tampa-fl.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-tampa-fl",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(tampaPageData);

export default function TampaPage() {
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
      <CityPageTemplate data={tampaPageData} />
    </>
  );
}
