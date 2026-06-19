import type { CityPageData } from "@/components/city/CityPageTemplate";

type Schema = {
  id: string;
  data: Record<string, any>;
};

type Options = {
  baseUrl?: string;
};

function cityUrl(baseUrl: string, slug: string) {
  return `${baseUrl}/web-developer-${slug}`;
}

// Simple geo map (extend later if needed)
const CITY_GEO: Record<string, { lat: number; lng: number }> = {
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
};

export function generateCitySchemas(
  data: CityPageData,
  options?: Options,
): Schema[] {
  const baseUrl = options?.baseUrl ?? "https://www.syedahmedali.com";
  const url = cityUrl(baseUrl, data.citySlug);

  const geo = CITY_GEO[data.citySlug];

  const cityEntity = `${data.cityName} ${data.cityState}`;

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
    // 2. LOCAL BUSINESS (LEVEL 2 BOOST)
    // ─────────────────────────────
    {
      id: `${data.citySlug}-local-business`,
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Ahmed Ali – Web Developer ${cityEntity}`,
        url,
        image: `${baseUrl}/opengraph/web-developer-${data.citySlug}.png`,
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
    // 6. INTERNAL SEO GRAPH (LEVEL 2 CORE FEATURE)
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
