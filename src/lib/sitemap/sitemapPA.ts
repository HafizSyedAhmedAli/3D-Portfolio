import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapPA: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-philadelphia-pa`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
