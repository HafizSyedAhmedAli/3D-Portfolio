import type { Metadata } from "next";
import type { CityPageData } from "@/components/city/CityPageTemplate";
import { siteMetadata } from "@/constants";

export function generateCityMetadata(data: CityPageData): Metadata {
  const url = `${siteMetadata.url}/web-developer-${data.citySlug}-${data.cityState.toLowerCase()}`;
  const ogImage = `/opengraph/web-developer-${data.citySlug}-${data.cityState.toLowerCase()}.png`;

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
          alt: `Web Developer ${data.cityName} ${data.cityState} – Ahmed Ali`,
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
