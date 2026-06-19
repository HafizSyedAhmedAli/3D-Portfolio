import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { jacksonvillePageData } from "@/constants/cityPagesFL";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title:
    "Web Developer Jacksonville FL | Fintech, Enterprise & Full-Stack | Ahmed Ali",
  description:
    "Looking for a web developer jacksonville fl? Ahmed Ali builds production-grade Next.js, Node.js & AI-powered apps for Jacksonville businesses. Fintech, enterprise backends, real results.",
  openGraph: {
    title:
      "Web Developer Jacksonville FL | Fintech, Enterprise & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Jacksonville businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-jacksonville-fl.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Jacksonville FL – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Jacksonville FL | Fintech, Enterprise & Full-Stack | Ahmed Ali",
    description:
      "Ahmed Ali builds production-grade Next.js, Node.js & AI apps for Jacksonville businesses.",
    // images: ["/opengraph/web-developer-jacksonville-fl.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-jacksonville-fl",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(jacksonvillePageData);

export default function JacksonvillePage() {
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
      <CityPageTemplate data={jacksonvillePageData} />
    </>
  );
}
