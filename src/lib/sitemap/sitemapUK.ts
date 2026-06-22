import { siteMetadata } from "@/constants";
import type { MetadataRoute } from "next";

const base = siteMetadata.url;

export const sitemapUK: MetadataRoute.Sitemap = [
  {
    url: `${base}/web-developer-manchester`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-newcastle`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-glasgow`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-nottingham`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-bournemouth`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-london`, // Index this on Google
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${base}/web-developer-birmingham`, // Index this on Google
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-leeds`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-bristol`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/web-developer-wolverhampton`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
