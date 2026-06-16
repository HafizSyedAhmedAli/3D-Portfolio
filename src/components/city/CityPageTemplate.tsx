"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AustinHeroActions from "@/components/AustinHeroActions";
import ProfileCard from "@/components/ProfileCard";
import AbilityCard from "@/components/city/AbilityCard";
import ProjectCard from "@/components/city/ProjectCard";
import TestimonialCard from "@/components/city/TestimonialCard";
import WhyCard from "@/components/city/WhyCard";
import AvailabilityPanel from "@/components/city/AvailabilityPanel";
import FloatInput from "@/components/FloatInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { socialImgs } from "@/constants";
import emailjs from "@emailjs/browser";
import type {
  CityPageAbilityCard,
  CityPageAvailability,
  CityPageCityLink,
  CityPageHighlight,
  CityPageProject,
  CityPageService,
  CityPageStat,
  CityPageTestimonial,
  CityPageWhyCard,
  AustinNavLink,
} from "@/types";

export type CityPageData = {
  // SEO / keyword
  keyword: string; // e.g. "web developer austin tx"
  cityName: string; // e.g. "Austin"
  citySlug: string; // e.g. "austin"
  profileImageUrl: string;
  profileImageAlt: string;

  // Hero
  h1Line1: string; // coloured part
  h1Line2: string; // dash + rest
  heroSubtitle: string;
  bulletPoints: string[];

  // About
  aboutH2: string;
  aboutParagraphs: string[];
  highlights: CityPageHighlight[];
  abilityCards: CityPageAbilityCard[];

  // Projects
  projectsH2: string;
  projectsSubtitle: string;
  projects: CityPageProject[];

  // Testimonials
  testimonialsH2: string;
  testimonials: CityPageTestimonial[];

  // Why
  whyH2: string;
  whyCards: CityPageWhyCard[];

  // Services
  servicesH2: string;
  services: CityPageService[];

  // Coverage
  coverageH2: string;
  coverageParagraphs: string[];
  cityLinks: CityPageCityLink[];
  servicesStrip: readonly string[];

  // Contact
  contactH2: string;
  contactSubtitle: string;

  // Availability + stats
  availability: CityPageAvailability[];
  stats: CityPageStat[];

  // Navbar
  navLinks: AustinNavLink[];
  navCTALabel: string;
  contactId: string; // e.g. "contact-austin"
  appointmentId: string; // e.g. "appointment-austin"
};

// ─── Navbar ──────────────────────────────────────────────────────────────────

function CityNavbar({
  navLinks,
  navCTALabel,
  contactId,
}: {
  navLinks: AustinNavLink[];
  navCTALabel: string;
  contactId: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 1024) setMenuOpen(false);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const close = () => setMenuOpen(false);
  const mobileNavId = `city-mobile-nav-${contactId}`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-5 md:px-20 py-4 border-b ${
          scrolled
            ? "bg-black border-white/8"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
          <a
            href="/"
            className="text-white text-lg md:text-xl font-semibold shrink-0"
          >
            Ahmed | <span className="text-emerald-400">Ali</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`#${contactId}`}
              className="hidden lg:block px-4 py-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-medium"
            >
              {navCTALabel}
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/5 transition-colors duration-200 flex-shrink-0"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={mobileNavId}
            >
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <nav
        id={mobileNavId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[280px] z-[90] bg-[#06090a] border-l border-white/8 flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1 flex-1 list-none">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium"
              >
                <span
                  className="size-1.5 rounded-full bg-emerald-400/60 flex-shrink-0"
                  aria-hidden="true"
                />
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-white/8">
          <a
            href={`#${contactId}`}
            onClick={close}
            className="flex items-center justify-center w-full py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-semibold"
          >
            {navCTALabel}
          </a>
        </div>
      </nav>
    </>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function CityContactForm({
  contactId,
  appointmentId,
  contactH2,
  contactSubtitle,
  availability,
  cityName,
}: {
  contactId: string;
  appointmentId: string;
  contactH2: string;
  contactSubtitle: string;
  availability: CityPageAvailability[];
  cityName: string;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    city: "",
    message: "",
  });
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message: "Configuration error — please reach me directly.",
      });
      setLoading(false);
      return;
    }
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({
        name: "",
        email: "",
        phone: "",
        budget: "",
        city: "",
        message: "",
      });
      setFeedback({
        type: "success",
        message: "Message delivered. I'll be in touch soon.",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "Delivery failed — try reaching me directly.",
      });
    } finally {
      setLoading(false);
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      feedbackTimer.current = setTimeout(() => setFeedback(null), 6000);
    }
  };

  return (
    <section
      id={appointmentId}
      className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
          Ready to Build?
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          {contactH2}
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl">
          {contactSubtitle}
        </p>

        {/* Calendly */}
        <div className="mb-10 md:mb-12">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Book a Free Call
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Schedule a Free 30-Min Consultation
          </h3>
          <p className="text-white/60 text-sm mb-5 md:mb-6 max-w-xl">
            Pick a time that works for you — no commitment, just a conversation
            about your project.
          </p>
          <div className="rounded-2xl border border-white/8 overflow-hidden w-full">
            <iframe
              src="https://calendly.com/hafizsyedahmedali12/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=09090b&text_color=777&primary_color=22c55e"
              width="100%"
              height="600"
              title={`Schedule a free consultation with Ahmed Ali – Web Developer ${cityName} TX`}
              className="w-full"
            />
          </div>
        </div>

        <div
          id={contactId}
          className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 md:gap-8 items-start scroll-mt-30"
        >
          {/* Form */}
          <div className="relative rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-2 px-5 md:px-6 py-4 border-b border-white/6">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-4 text-[11px] font-mono text-white/25 tracking-widest">
                get_a_quote.tsx
              </span>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-5 md:p-8 flex flex-col gap-4 md:gap-5"
              aria-label="Get a quote form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <FloatInput
                  id={`${contactId}-name`}
                  name="name"
                  label="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <FloatInput
                  id={`${contactId}-email`}
                  name="email"
                  label="Your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <FloatInput
                  id={`${contactId}-phone`}
                  name="phone"
                  label="Phone number"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
                <Select
                  value={form.budget}
                  onValueChange={(val) =>
                    setForm((prev) => ({ ...prev, budget: val }))
                  }
                  disabled={loading}
                  name="budget"
                >
                  <input type="hidden" name="budget" value={form.budget} />
                  <SelectTrigger
                    id={`${contactId}-budget`}
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 py-7 text-sm text-white shadow-none hover:border-white/20 focus:border-emerald-500/60 focus:ring-0 [&>svg]:text-white/30"
                  >
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="min-w-[var(--radix-select-trigger-width)] rounded-xl border border-white/10 bg-[#0b0f0d] p-1 text-white shadow-2xl">
                    {[
                      "Under $500",
                      "$500 – $1,000",
                      "$1,000 – $3,000",
                      "$3,000 – $5,000",
                      "$5,000+",
                    ].map((b) => (
                      <SelectItem
                        key={b}
                        value={b}
                        className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-white/75 focus:text-emerald-400"
                      >
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <FloatInput
                id={`${contactId}-city`}
                name="city"
                label={`Your city (e.g. ${cityName} TX)`}
                value={form.city}
                onChange={handleChange}
                disabled={loading}
              />
              <FloatInput
                id={`${contactId}-message`}
                name="message"
                label="Project details — list all services you need…"
                value={form.message}
                onChange={handleChange}
                multiline
                required
                disabled={loading}
              />

              {feedback && (
                <output
                  role="status"
                  aria-live="polite"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono ${feedback.type === "success" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300" : "bg-red-500/10 border border-red-500/30 text-red-300"}`}
                >
                  <span aria-hidden="true">
                    {feedback.type === "success" ? "✓" : "✗"}
                  </span>
                  <span>{feedback.message}</span>
                </output>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/6 mt-1">
                <span className="font-mono text-[11px] text-white/20 hidden md:block">{`> ready_to_send`}</span>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-black text-sm tracking-wide overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">
                    {loading ? "Sending…" : "Get a Free Quote →"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </div>
            </form>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-xl border border-white/8 bg-white/2 p-5 md:p-6 flex flex-col gap-3 md:gap-4">
              <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
                Prefer direct contact?
              </p>
              <a
                href="https://wa.me/923282488387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 transition-all duration-300 text-white/70 hover:text-emerald-400 text-sm font-medium group"
              >
                <Image
                  src={socialImgs[0]?.imgPath}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                WhatsApp Me
              </a>
              <a
                href="https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-sm font-medium group"
              >
                <Image
                  src="/images/logos/linkedin.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                LinkedIn
              </a>
            </div>
            <AvailabilityPanel items={availability} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────

import { useRef, type ChangeEvent, type FormEvent } from "react";

export default function CityPageTemplate({ data }: { data: CityPageData }) {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <CityNavbar
        navLinks={data.navLinks}
        navCTALabel={data.navCTALabel}
        contactId={data.contactId}
      />

      {/* Hero */}
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

          <ProfileCard url={data.profileImageUrl} alt={data.profileImageAlt} />
        </div>
      </section>

      {/* About */}
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

      {/* Projects */}
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

      {/* Testimonials */}
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

      {/* Why Hire */}
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

      {/* Services */}
      <section
        id={`services-${data.citySlug}`}
        className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">
            {data.servicesH2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {data.services.map((service, index) => {
              const isOpen = openServiceIndex === index;
              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-white/8 bg-white/2 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="p-5 md:p-6">
                    <h3 className="text-white font-semibold text-sm md:text-base mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/55 text-xs md:text-sm leading-relaxed mb-4 md:mb-5">
                      {service.desc}
                    </p>
                    <button
                      onClick={() => setOpenServiceIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${data.citySlug}-${index}`}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                    >
                      {isOpen ? "Show Less" : "Learn More"}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div
                    id={`service-${data.citySlug}-${index}`}
                    aria-hidden={!isOpen}
                    className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/5 pt-4 md:pt-5">
                      <ul className="space-y-2.5 md:space-y-3 list-none">
                        {service.details.map((item) => (
                          <li
                            key={item}
                            className="text-xs md:text-sm text-white/65 flex items-start gap-2"
                          >
                            <span
                              className="text-emerald-400 mt-0.5"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage + Strip */}
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

      {/* Contact */}
      <CityContactForm
        contactId={data.contactId}
        appointmentId={data.appointmentId}
        contactH2={data.contactH2}
        contactSubtitle={data.contactSubtitle}
        availability={data.availability}
        cityName={data.cityName}
      />

      {/* Footer */}
      <footer className="px-5 md:px-20 py-8 md:py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
          <a href="/" className="text-white text-lg md:text-xl font-semibold">
            Ahmed | <span className="text-emerald-400">Ali</span>
          </a>
          <p className="text-white/20 text-xs font-mono">
            Web Developer {data.cityName} TX · Full-Stack Developer · AI-Powered
            Apps
          </p>
          <p className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} Ahmed Ali
          </p>
        </div>
      </footer>
    </main>
  );
}
