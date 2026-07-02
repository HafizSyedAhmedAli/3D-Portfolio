import type { CityPageData } from "@/components/city/CityPageTemplate";

type Schema = {
  id: string;
  data: Record<string, unknown>;
};

type Options = {
  baseUrl?: string;
};

/**
 * Builds the canonical path segment for a city page.
 * US: web-developer-{slug}-{state}  e.g. web-developer-austin-tx
 * UK: web-developer-{slug}          e.g. web-developer-manchester
 */
function cityPath(data: CityPageData): string {
  if (data.cityState === "UK") {
    return `web-developer-${data.citySlug}`;
  }
  return `web-developer-${data.citySlug}-${data.cityState.toLowerCase()}`;
}

// Geo coordinates — extend this map as new cities are added.
const CITY_GEO: Record<string, { lat: number; lng: number }> = {
  // ── US ────────────────────────────────────────────────────────────
  austin: { lat: 30.2672, lng: -97.7431 },
  dallas: { lat: 32.7767, lng: -96.797 },
  houston: { lat: 29.7604, lng: -95.3698 },
  sacramento: { lat: 38.5816, lng: -121.4944 },
  "los-angeles": { lat: 34.0522, lng: -118.2437 },
  "san-francisco": { lat: 37.7749, lng: -122.4194 },
  jacksonville: { lat: 30.3322, lng: -81.6557 },
  tampa: { lat: 27.9506, lng: -82.4572 },
  miami: { lat: 25.7617, lng: -80.1918 },
  orlando: { lat: 28.5383, lng: -81.3792 },
  rochester: { lat: 43.1566, lng: -77.6088 },
  "new-york": { lat: 40.7128, lng: -74.006 },
  philadelphia: { lat: 39.9526, lng: -75.1652 },
  // ── UK ────────────────────────────────────────────────────────────
  newcastle: { lat: 54.9783, lng: -1.6174 },
  glasgow: { lat: 55.8642, lng: -4.2518 },
  nottingham: { lat: 52.9548, lng: -1.1581 },
  bournemouth: { lat: 50.7192, lng: -1.8808 },
  manchester: { lat: 53.4808, lng: -2.2426 },
  london: { lat: 51.5074, lng: -0.1278 },
  birmingham: { lat: 52.4862, lng: -1.8904 },
  leeds: { lat: 53.8008, lng: -1.5491 },
  bristol: { lat: 51.4545, lng: -2.5879 },
  wolverhampton: { lat: 52.5862, lng: -2.1289 },
  "milton-keynes": { lat: 52.0406, lng: -0.7594 },
  york: { lat: 53.9599, lng: -1.0873 },
  oxford: { lat: 51.752, lng: -1.2577 },
  leicester: { lat: 52.6369, lng: -1.1398 },
  sheffield: { lat: 53.3811, lng: -1.4701 },
  colchester: { lat: 51.8959, lng: 0.8919 },
  southampton: { lat: 50.9097, lng: -1.4044 },
  plymouth: { lat: 50.3755, lng: -4.1427 },
  derby: { lat: 52.9225, lng: -1.4746 },
  norwich: { lat: 52.6309, lng: 1.2974 },
  dundee: { lat: 56.462, lng: -2.9707 },
  brighton: { lat: 50.8225, lng: -0.1372 },
  exeter: { lat: 50.7184, lng: -3.5339 },
  cambridge: { lat: 52.2053, lng: 0.1218 },
  cheltenham: { lat: 51.8994, lng: -2.0783 },
};

export function generateCitySchemas(
  data: CityPageData,
  options?: Options,
): Schema[] {
  const baseUrl = options?.baseUrl ?? "https://www.syedahmedali.com";
  const path = cityPath(data);
  const url = `${baseUrl}/${path}`;

  const geo = CITY_GEO[data.citySlug];

  // Human-readable label: "Austin TX" or just "Manchester" for UK
  const cityEntity =
    data.cityState === "UK"
      ? data.cityName
      : `${data.cityName} ${data.cityState}`;

  return [
    // ─────────────────────────────
    // 1. PROFESSIONAL SERVICE (Core)
    // ─────────────────────────────
    {
      id: `${data.citySlug}-professional-service`,
      data: {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `Web Developer ${cityEntity} – Ahmed Ali`,
        url,
        description: data.heroSubtitle.replace(/<[^>]*>/g, ""),
        areaServed: {
          "@type": "City",
          name: data.cityName,
        },
        provider: {
          "@type": "Person",
          name: "Ahmed Ali",
          jobTitle: `Web Developer ${cityEntity}`,
          url: baseUrl,
          sameAs: [
            "https://github.com/HafizSyedAhmedAli",
            "https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307",
          ],
          knowsAbout: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Full Stack Development",
            "AI SaaS Development",
            `Web Developer ${cityEntity}`,
          ],
        },
      },
    },

    // ─────────────────────────────
    // 2. LOCAL BUSINESS
    // ─────────────────────────────
    {
      id: `${data.citySlug}-local-business`,
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Ahmed Ali – Web Developer ${cityEntity}`,
        url,
        image: `${baseUrl}/opengraph/${path}.png`,
        priceRange: "$$",
        areaServed: cityEntity,
        ...(geo && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.lat,
            longitude: geo.lng,
          },
        }),
        openingHours: "Mo-Fr 09:00-18:00",
      },
    },

    // ─────────────────────────────
    // 3. SERVICE SCHEMA
    // ─────────────────────────────
    {
      id: `${data.citySlug}-service`,
      data: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Web Development Services ${cityEntity}`,
        provider: {
          "@type": "Person",
          name: "Ahmed Ali",
        },
        areaServed: cityEntity,
        serviceType: "Full Stack Web Development",
      },
    },

    // ─────────────────────────────
    // 4. BREADCRUMB
    // ─────────────────────────────
    {
      id: `${data.citySlug}-breadcrumb`,
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `Web Developer ${cityEntity}`,
            item: url,
          },
        ],
      },
    },

    // ─────────────────────────────
    // 5. FAQ (if exists)
    // ─────────────────────────────
    ...(data.faqs?.length
      ? [
          {
            id: `${data.citySlug}-faq`,
            data: {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            },
          },
        ]
      : []),

    // ─────────────────────────────
    // 6. INTERNAL SEO GRAPH
    // ─────────────────────────────
    {
      id: `${data.citySlug}-internal-links`,
      data: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "City Service Network",
        itemListElement: data.cityLinks.map((l, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseUrl}${l.href}`,
          name: l.city,
        })),
      },
    },
  ];
}
