import type { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/constants";
import {
  austinPageData,
  dallasPageData,
  houstonPageData,
} from "@/constants/cityPagesTX";
import {
  sacramentoPageData,
  losAngelesPageData,
  sanFranciscoPageData,
} from "@/constants/cityPagesCA";
import {
  jacksonvillePageData,
  tampaPageData,
  miamiPageData,
  orlandoPageData,
} from "@/constants/cityPagesFL";
import { rochesterPageData, newYorkPageData } from "@/constants/cityPagesNY";
import { philadelphiaPageData } from "@/constants/cityPagesPA";
import {
  newcastlePageData,
  glasgowPageData,
  nottinghamPageData,
  bournemouthPageData,
  manchesterPageData,
  londonPageData,
  birminghamPageData,
  leedsPageData,
  bristolPageData,
  wolverhamptonPageData,
  leicesterPageData,
  miltonKeynesPageData,
  oxfordPageData,
  sheffieldPageData,
  yorkPageData,
  colchesterPageData,
  derbyPageData,
  norwichPageData,
  plymouthPageData,
  southamptonPageData,
} from "@/constants/cityPagesUK";
import type { CityPageData } from "@/components/city/CityPageTemplate";

export const metadata: Metadata = {
  title: "Locations | Web Developer Cities — Ahmed Ali",
  description:
    "Full-stack web development services across the US and UK. Browse cities I serve in Texas, California, Florida, New York, Pennsylvania, and the United Kingdom.",
  alternates: {
    canonical: `${siteMetadata.url}/locations`,
  },
};

function cityHref(data: CityPageData): string {
  return data.cityState === "UK"
    ? `/web-developer-${data.citySlug}`
    : `/web-developer-${data.citySlug}-${data.cityState.toLowerCase()}`;
}

type RegionGroup = {
  label: string;
  blurb: string;
  cities: CityPageData[];
};

const regions: RegionGroup[] = [
  {
    label: "Texas",
    blurb:
      "Austin's Silicon Hills, the DFW enterprise corridor, and Houston's energy and medical sector.",
    cities: [austinPageData, dallasPageData, houstonPageData],
  },
  {
    label: "California",
    blurb:
      "Sacramento's government-adjacent sector, LA's creator economy, and the Bay Area's enterprise AI market.",
    cities: [sacramentoPageData, losAngelesPageData, sanFranciscoPageData],
  },
  {
    label: "Florida",
    blurb:
      "Jacksonville's banking corridor, Tampa's cybersecurity cluster, Miami's LatAm gateway, and Orlando's hospitality tech.",
    cities: [
      jacksonvillePageData,
      tampaPageData,
      miamiPageData,
      orlandoPageData,
    ],
  },
  {
    label: "New York & Pennsylvania",
    blurb:
      "Rochester's manufacturing legacy, NYC's fintech and media market, and Philadelphia's healthcare sector.",
    cities: [rochesterPageData, newYorkPageData, philadelphiaPageData],
  },
  {
    label: "United Kingdom",
    blurb:
      "From London's financial district to Manchester's MediaCityUK, Glasgow's IFSD, and the North East's growing digital scene.",
    cities: [
      londonPageData,
      manchesterPageData,
      glasgowPageData,
      leedsPageData,
      birminghamPageData,
      bristolPageData,
      newcastlePageData,
      nottinghamPageData,
      bournemouthPageData,
      wolverhamptonPageData,
      miltonKeynesPageData,
      yorkPageData,
      oxfordPageData,
      leicesterPageData,
      sheffieldPageData,
      colchesterPageData,
      southamptonPageData,
      plymouthPageData,
      derbyPageData,
      norwichPageData,
    ],
  },
];

export default function LocationsPage() {
  const totalCities = regions.reduce((sum, r) => sum + r.cities.length, 0);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-5 md:px-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-emerald-400 text-sm font-mono mb-8 transition-colors duration-300"
          >
            ← Back home
          </Link>

          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Where I Work
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Locations I Serve
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Remote full-stack development across {totalCities} cities in the US
            and UK. Every engagement gets the same stack, the same standards,
            and the same direct line of communication — no matter the timezone.
          </p>
        </div>
      </section>

      {regions.map((region) => (
        <section
          key={region.label}
          className="px-5 md:px-20 py-12 md:py-16 border-t border-white/5"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {region.label}
              </h2>
              <span className="text-white/20 text-xs font-mono flex-shrink-0">
                {String(region.cities.length).padStart(2, "0")} cities
              </span>
            </div>
            <p className="text-white/50 text-sm md:text-base mb-6 md:mb-7 max-w-2xl">
              {region.blurb}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {region.cities.map((city) => (
                <Link
                  key={city.citySlug}
                  href={cityHref(city)}
                  className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 hover:bg-emerald-500/3 transition-all duration-300"
                >
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors duration-300">
                    {city.cityName}
                    {city.cityState !== "UK" ? ` ${city.cityState}` : ""}
                  </span>
                  <span
                    className="text-emerald-400/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-300 text-sm"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-base md:text-lg mb-6">
            Don't see your city? I work remotely, so location is rarely a
            barrier.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <footer className="px-5 md:px-20 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <Link href="/" className="text-white text-lg font-semibold">
            Ahmed | <span className="text-emerald-400">Ali</span>
          </Link>
          <p className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} Ahmed Ali
          </p>
        </div>
      </footer>
    </main>
  );
}
