import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { miamiPageData } from "@/constants/cityPagesFL";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer Miami FL | SaaS, Fintech & International Platforms | Ahmed Ali",
  description:
    "Looking for a web developer miami fl? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Miami startups and fintech companies. LatAm-ready, fast delivery.",
  openGraph: {
    title:
      "Web Developer Miami FL | SaaS, Fintech & International Platforms | Ahmed Ali",
    description:
      "Ahmed Ali builds Next.js, Node.js & AI apps for Miami startups. LatAm-ready, fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-miami-fl",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-miami-fl.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Miami FL – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Miami FL | SaaS, Fintech & International Platforms | Ahmed Ali",
    description:
      "Ahmed Ali builds Next.js, Node.js & AI apps for Miami startups and fintech.",
    // images: ["/opengraph/web-developer-miami-fl.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-miami-fl",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(miamiPageData);

export default function MiamiPage() {
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
      <CityPageTemplate data={miamiPageData} />
    </>
  );
}
