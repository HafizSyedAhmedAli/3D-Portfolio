"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { austinAvailability } from "@/constants/austin";
import emailjs from "@emailjs/browser";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import FloatInput from "@/components/FloatInput";
import Script from "next/script";

const AustinContact = () => {
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
      console.error("EmailJS configuration is missing");
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
      id="contact-austin"
      className="px-5 md:px-20 py-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Ready to Build?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hire a Web Developer Austin TX Today
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl">
          Have a project in mind? Fill in the details below and I&apos;ll get
          back to you within 24 hours with a free consultation.
        </p>

        {/* ── Calendly Booking ── */}
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
            Book a Free Call
          </p>
          <h3 className="text-2xl font-bold mb-4">
            Schedule a Free 30-Min Consultation
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-xl">
            Pick a time that works for you and let&apos;s talk about your
            project — no commitment required.
          </p>
          <div className="rounded-2xl border border-white/8 overflow-hidden">
            <iframe
              src="https://calendly.com/hafizsyedahmedali12/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=09090b&text_color=777&primary_color=22c55e"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a free consultation with Ahmed Ali"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">
          {/* ── Form ── */}
          <div className="relative rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
            {/* dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                backgroundSize: "22px 22px",
              }}
            />

            {/* terminal bar */}
            <div className="relative flex items-center gap-2 px-6 py-4 border-b border-white/6">
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
              className="relative p-8 flex flex-col gap-5"
              aria-label="Get a quote form"
            >
              {/* Row 1 — Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatInput
                  id="austin-name"
                  name="name"
                  label="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <FloatInput
                  id="austin-email"
                  name="email"
                  label="Your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              {/* Row 2 — Phone + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatInput
                  id="austin-phone"
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
                    id="austin-budget"
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
                        className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-white/75  focus:text-emerald-400"
                      >
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Row 3 — City */}
              <FloatInput
                id="austin-city"
                name="city"
                label="Your city (e.g. Austin TX)"
                value={form.city}
                onChange={handleChange}
                disabled={loading}
              />

              {/* Row 4 — Project details */}
              <FloatInput
                id="austin-message"
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

              <div className="flex items-center justify-between pt-2 border-t border-white/6 mt-1">
                <span className="font-mono text-[11px] text-white/20 hidden md:block">
                  {`> ready_to_send`}
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex items-center gap-3 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-black text-sm tracking-wide overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">
                    {loading ? "Sending…" : "Get a Free Quote →"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </div>
            </form>
          </div>

          {/* ── Right panel ── */}
          <div className="flex flex-col gap-5">
            {/* Quick contact */}
            <div className="rounded-xl border border-white/8 bg-white/2 p-6 flex flex-col gap-4">
              <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
                Prefer direct contact?
              </p>
              <a
                href="https://wa.me/923282488387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 transition-all duration-300 text-white/70 hover:text-emerald-400 text-sm font-medium"
              >
                WhatsApp Me
              </a>
              <a
                href="https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-sm font-medium"
              >
                LinkedIn
              </a>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-white/8 bg-white/2 p-6 flex flex-col gap-4">
              <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
                Current Status
              </p>
              {austinAvailability.map(({ label, value, dot }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-white/50">{label}</span>
                  <span
                    className={`text-sm font-medium flex items-center gap-2 ${
                      dot ? "text-emerald-400" : "text-white/75"
                    }`}
                  >
                    {dot && (
                      <span className="relative flex size-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400" />
                      </span>
                    )}
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinContact;
