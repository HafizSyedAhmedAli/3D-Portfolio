import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapUK: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-manchester`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-newcastle`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-glasgow`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-nottingham`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-bournemouth`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
