import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { oxfordPageData } from "@/constants/cityPagesUK";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";
import { generateCityMetadata } from "@/lib/seo/generateCityMetadata";

export const metadata: Metadata = generateCityMetadata(oxfordPageData);
const schemas = generateCitySchemas(oxfordPageData);

export default function OxfordPage() {
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
      <CityPageTemplate data={oxfordPageData} />
    </>
  );
}