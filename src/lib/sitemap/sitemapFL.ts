import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapFL: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-jacksonville-fl`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-tampa-fl`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-miami-fl`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-orlando-fl`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
