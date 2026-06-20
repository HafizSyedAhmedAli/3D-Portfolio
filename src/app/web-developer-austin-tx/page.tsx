import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate from "@/components/city/CityPageTemplate";
import { generateCitySchemas } from "@/lib/seo/generateCitySchemas";
import { austinPageData } from "@/constants/cityPagesTX";
import { generateCityMetadata } from "@/lib/seo/generateCityMetadata";

export const metadata: Metadata = generateCityMetadata(austinPageData);

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
