import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapNY: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-rochester-ny`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-new-york-ny`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
