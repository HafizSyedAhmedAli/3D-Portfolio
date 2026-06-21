import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapCA: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-sacramento-ca`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-los-angeles-ca`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-san-francisco-ca`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
