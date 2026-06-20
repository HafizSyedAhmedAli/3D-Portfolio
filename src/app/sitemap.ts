import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetadata.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteMetadata.url}/tarteel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Texas pages
    {
      url: `${siteMetadata.url}/web-developer-austin-tx`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-dallas-tx`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-houston-tx`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // California pages
    {
      url: `${siteMetadata.url}/web-developer-sacramento-ca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-los-angeles-ca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-san-francisco-ca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Florida pages
    {
      url: `${siteMetadata.url}/web-developer-jacksonville-fl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-tampa-fl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-miami-fl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-orlando-fl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // New York pages
    {
      url: `${siteMetadata.url}/web-developer-rochester-ny`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/web-developer-new-york-ny`, 
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
