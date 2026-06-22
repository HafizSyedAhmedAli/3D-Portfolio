import { siteMetadata } from "@/constants";
import { sitemapCA } from "@/lib/sitemap/sitemapCA";
import { sitemapFL } from "@/lib/sitemap/sitemapFL";
import { sitemapNY } from "@/lib/sitemap/sitemapNY";
import { sitemapPA } from "@/lib/sitemap/sitemapPA";
import { sitemapTX } from "@/lib/sitemap/sitemapTX";
import { sitemapUK } from "@/lib/sitemap/sitemapUK";
import type { MetadataRoute } from "next";

// ─── Core routes (home + tarteel) ─────────────────────────────────────────────
const coreRoutes: MetadataRoute.Sitemap = [
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
  {
    url: `${siteMetadata.url}/locations`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

// ─── Composed sitemap ──────────────────────────────────────────────────────────
// To add a new region: create src/lib/sitemap/sitemapXX.ts and spread it below.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...coreRoutes,
    // US
    ...sitemapTX,
    ...sitemapCA,
    ...sitemapFL,
    ...sitemapNY,
    ...sitemapPA,
    // UK
    ...sitemapUK,
  ];
}
