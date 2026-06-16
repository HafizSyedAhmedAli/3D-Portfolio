"use client";

import {
  useState,
  useEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import FloatInput from "@/components/FloatInput";
import AvailabilityPanel from "@/components/city/AvailabilityPanel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { socialImgs } from "@/constants";
import type { CityPageAvailability } from "@/types";

type Props = {
  contactId: string;
  appointmentId: string;
  contactH2: string;
  contactSubtitle: string;
  availability: CityPageAvailability[];
  cityName: string;
};

export default function CityContactForm({
  contactId,
  appointmentId,
  contactH2,
  contactSubtitle,
  availability,
  cityName,
}: Props) {
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
              loading="lazy"
            />
          </div>
        </div>

        <div
          id={contactId}
          className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 md:gap-8 items-start scroll-mt-30"
        >
          {/* Form card */}
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono ${
                    feedback.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      : "bg-red-500/10 border border-red-500/30 text-red-300"
                  }`}
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
