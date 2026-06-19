import AustinHeroActions from "@/components/AustinHeroActions";
import ProfileCard from "@/components/ProfileCard";
import AbilityCard from "@/components/city/AbilityCard";
import CityContactForm from "@/components/city/CityContactForm";
import CityNavbar from "@/components/city/CityNavbar";
import CityServices from "@/components/city/CityServices";
import ProjectCard from "@/components/city/ProjectCard";
import TestimonialCard from "@/components/city/TestimonialCard";
import WhyCard from "@/components/city/WhyCard";
import type {
  AustinNavLink,
  CityPageAbilityCard,
  CityPageAvailability,
  CityPageCityLink,
  CityPageHighlight,
  CityPageProject,
  CityPageService,
  CityPageStat,
  CityPageTestimonial,
  CityPageWhyCard,
} from "@/types";
import Link from "next/link";

// Re-export the data shape so city pages can import from one place
export type CityPageData = {
  keyword: string;
  cityName: string;
  citySlug: string;
  cityState: string;
  profileImageUrl: string;
  profileImageAlt: string;
  h1Line1: string;
  h1Line2: string;
  heroSubtitle: string;
  bulletPoints: string[];
  aboutH2: string;
  aboutParagraphs: string[];
  highlights: CityPageHighlight[];
  abilityCards: CityPageAbilityCard[];
  projectsH2: string;
  projectsSubtitle: string;
  projects: CityPageProject[];
  testimonialsH2: string;
  testimonials: CityPageTestimonial[];
  whyH2: string;
  whyCards: CityPageWhyCard[];
  servicesH2: string;
  services: CityPageService[];
  coverageH2: string;
  coverageParagraphs: string[];
  cityLinks: CityPageCityLink[];
  servicesStrip: readonly string[];
  contactH2: string;
  contactSubtitle: string;
  availability: CityPageAvailability[];
  stats: CityPageStat[];
  navLinks: AustinNavLink[];
  navCTALabel: string;
  contactId: string;
  appointmentId: string;
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  localSeoTitle: string;
  localSeoParagraphs: string[];
};

export default function CityPageTemplate({ data }: { data: CityPageData }) {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <CityNavbar
        navLinks={data.navLinks}
        navCTALabel={data.navCTALabel}
        contactId={data.contactId}
      />

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-20 overflow-hidden">
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 items-start relative z-10">
          <div>
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-5 md:mb-6">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs md:text-sm font-medium">
                Available for new projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 md:mb-6">
              <span className="text-emerald-400">{data.h1Line1}</span>{" "}
              {data.h1Line2}
            </h1>

            <p
              className="text-white/60 text-base md:text-lg leading-relaxed mb-5 md:mb-6 max-w-xl"
              dangerouslySetInnerHTML={{ __html: data.heroSubtitle }}
            />

            <ul className="flex flex-col gap-2.5 md:gap-3 mb-7 md:mb-8 list-none">
              {data.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/65 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <AustinHeroActions />
          </div>

          <ProfileCard
            url={data.profileImageUrl}
            alt={data.profileImageAlt}
            stats={data.stats}
            availability={data.availability}
          />
        </div>
      </section>

      {/* ── About ── */}
      <section
        id={`about-${data.citySlug}`}
        className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-16">
            <div>
              <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
                Who Am I?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                {data.aboutH2}
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed text-sm md:text-base">
                {data.aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {data.highlights.map(({ label, value }, i) => (
                <div
                  key={`${label}-${i}`}
                  className="flex items-start justify-between gap-4 p-4 md:p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <span className="text-white/40 text-xs font-mono flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm text-right leading-relaxed">
                    {value}
                  </span>
                </div>
              ))}
              <a
                href={`#${data.contactId}`}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
              >
                Work With Me →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.abilityCards.map((item) => (
              <AbilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id={`projects-${data.citySlug}`}
        className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            {data.projectsH2}
          </h2>
          <p className="text-white/50 text-sm md:text-base mb-10 md:mb-12 max-w-2xl">
            {data.projectsSubtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {data.projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id={`testimonials-${data.citySlug}`}
        className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Happy Clients
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            {data.testimonialsH2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
            {data.testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.handle}`} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Hire ── */}
      <section
        id={`hire-me-${data.citySlug}`}
        className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Why Hire Me
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">
            {data.whyH2}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {data.whyCards.map((item) => (
              <WhyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services (client — has accordion state) ── */}
      <CityServices
        servicesH2={data.servicesH2}
        services={data.services}
        citySlug={data.citySlug}
      />

      {/* ── Coverage ── */}
      <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            {data.coverageH2}
          </h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base mb-8 md:mb-10">
            {data.coverageParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <p className="text-white/40 text-xs font-mono mb-3 md:mb-4">
              Also serving:
            </p>
            <nav aria-label="Other Texas cities served">
              <ul className="flex flex-wrap gap-2 md:gap-3 list-none">
                {data.cityLinks.map((l) => (
                  <li key={l.city}>
                    <Link
                      href={l.href}
                      className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-lg border border-white/10 text-white/50 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                    >
                      Web Developer {l.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
            {data.faqTitle}
          </h2>

          <div className="space-y-5">
            {data.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-xl border border-white/10"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>

                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local SEO Content ── */}
      <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Local Expertise
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            {data.localSeoTitle}
          </h2>

          <div className="space-y-5 text-white/60 leading-relaxed">
            {data.localSeoParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services strip ── */}
      <div className="w-full border-t border-b border-emerald-500/20 bg-emerald-500/5 py-4 px-5 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2">
          <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase flex-shrink-0">
            Trusted for
          </span>
          {data.servicesStrip.map((item, i, arr) => (
            <span key={item} className="flex items-center gap-2 md:gap-3">
              <span className="text-white/60 text-xs md:text-sm font-medium">
                {item}
              </span>
              {i < arr.length - 1 && (
                <span
                  className="size-1 rounded-full bg-emerald-400/40"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Contact (client — has form state) ── */}
      <CityContactForm
        contactId={data.contactId}
        appointmentId={data.appointmentId}
        contactH2={data.contactH2}
        contactSubtitle={data.contactSubtitle}
        availability={data.availability}
        cityName={data.cityName}
        cityState={data.cityState}
      />

      {/* ── Footer ── */}
      <footer className="px-5 md:px-20 py-8 md:py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
          <Link
            href="/"
            className="text-white text-lg md:text-xl font-semibold"
          >
            Ahmed | <span className="text-emerald-400">Ali</span>
          </Link>
          <p className="text-white/20 text-xs font-mono">
            Web Developer {data.cityName} {data.cityState} · Full-Stack
            Developer · AI-Powered Apps
          </p>
          <p className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} Ahmed Ali
          </p>
        </div>
      </footer>
    </main>
  );
}
