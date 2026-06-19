import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { sacramentoPageData } from "@/constants/cityPagesCA";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";

export const metadata: Metadata = {
  title: "Web Developer Sacramento CA | Next.js, Node.js & AI Apps | Ahmed Ali",
  description:
    "Looking for a web developer in Sacramento CA? Ahmed Ali builds production-ready Next.js, Node.js & AI-powered apps for Sacramento businesses. Fast delivery, real results.",
  openGraph: {
    title:
      "Web Developer Sacramento CA | Next.js, Node.js & AI Apps | Ahmed Ali",
    description:
      "Ahmed Ali builds production-ready Next.js, Node.js & AI apps for Sacramento businesses. Fast delivery, real results.",
    url: "https://www.syedahmedali.com/web-developer-sacramento-ca",
    type: "website",
    // images: [
    //   {
    //     url: "/opengraph/web-developer-sacramento-ca.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Web Developer Sacramento CA – Ahmed Ali",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Developer Sacramento CA | Next.js, Node.js & AI Apps | Ahmed Ali",
    description:
      "Ahmed Ali builds production-ready Next.js, Node.js & AI apps for Sacramento businesses.",
    // images: ["/opengraph/web-developer-sacramento-ca.png"],
  },
  alternates: {
    canonical: "https://www.syedahmedali.com/web-developer-sacramento-ca",
  },
};

// Generate schemas programmatically, keeping the component body clean
const schemas = generateCitySchemas(sacramentoPageData);

export default function SacramentoPage() {
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
      <CityPageTemplate data={sacramentoPageData} />
    </>
  );
}
