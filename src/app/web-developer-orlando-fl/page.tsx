import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { orlandoPageData } from "@/constants/cityPagesFL";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer Orlando FL | Hospitality Tech, SaaS & Full-Stack | Ahmed Ali",
  description:
    "Looking for a web developer orlando fl? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Orlando businesses. Hospitality tech, SaaS platforms, real results.",
  openGraph: {
    title:
      "Web Developer Orlando FL | Hospitality Tech, SaaS & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds Next.js, Node.js & AI apps for Orlando businesses. Hospitality tech, SaaS platforms, real results.",
    url: "https://www.syedahmedali.com/web-developer-orlando-fl",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-orlando-fl.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Orlando FL – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Orlando FL | Hospitality Tech, SaaS & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds Next.js, Node.js & AI apps for Orlando businesses. Hospitality tech, SaaS platforms, real results.",
    // images: ["/opengraph/web-developer-orlando-fl.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-orlando-fl",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(orlandoPageData);

export default function OrlandoPage() {
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
      <CityPageTemplate data={orlandoPageData} />
    </>
  );
}
