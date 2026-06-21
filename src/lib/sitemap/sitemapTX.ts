import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapTX: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-austin-tx`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-dallas-tx`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-houston-tx`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
