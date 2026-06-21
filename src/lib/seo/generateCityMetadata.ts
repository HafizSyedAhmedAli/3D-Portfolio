import type { Metadata } from "next";
import type { CityPageData } from "@/components/city/CityPageTemplate";
import { siteMetadata } from "@/constants";

/**
 * Builds the canonical URL for a city page.
 *
 * US cities:  /web-developer-{slug}-{state}   e.g. /web-developer-austin-tx
 * UK cities:  /web-developer-{slug}            e.g. /web-developer-manchester
 *
 * UK pages use cityState === "UK" as the sentinel.
 */
function buildCityUrl(data: CityPageData): string {
  const base = siteMetadata.url;
  if (data.cityState === "UK") {
    return `${base}/web-developer-${data.citySlug}`;
  }
  return `${base}/web-developer-${data.citySlug}-${data.cityState.toLowerCase()}`;
}

/**
 * Builds the OG image path for a city page.
 *
 * US: /opengraph/web-developer-{slug}-{state}.png
 * UK: /opengraph/web-developer-{slug}.png
 */
function buildOgImage(data: CityPageData): string {
  if (data.cityState === "UK") {
    return `/opengraph/web-developer-${data.citySlug}.png`;
  }
  return `/opengraph/web-developer-${data.citySlug}-${data.cityState.toLowerCase()}.png`;
}

export function generateCityMetadata(data: CityPageData): Metadata {
  const url = buildCityUrl(data);
  const ogImage = buildOgImage(data);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      siteName: siteMetadata.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Web Developer ${data.cityName}${data.cityState !== "UK" ? ` ${data.cityState}` : ""} – Ahmed Ali`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [ogImage],
    },
  };
}
