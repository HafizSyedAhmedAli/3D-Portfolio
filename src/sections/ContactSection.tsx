"use client";

import DynamicContactExperience from "@/components/DynamicContactExperience";
import FloatInput from "@/components/FloatInput";
import LazyCanvas from "@/components/LazyCanvas";
import { availability } from "@/constants";
import emailjs from "@emailjs/browser";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import TitleHeader from "../components/TitleHeader";

/* ─── section ─── */
const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS config");
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", message: "" });
      setFeedback({
        type: "success",
        message: "Message delivered. I'll be in touch soon.",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setFeedback({
        type: "error",
        message: "Delivery failed — try reaching me directly.",
      });
    } finally {
      setLoading(false);
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      feedbackTimer.current = setTimeout(() => {
        setFeedback(null);
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full section-padding md:px-20 px-5 scroll-mt-20"
    >
      <TitleHeader
        title="Let's Build Something Together"
        sub="📬 Open to Opportunities"
      />

      <div className="mt-16 grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-8 items-start">
        {/* ── form ── */}
        <div className="relative rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
          {/* dot-grid texture */}
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
              new_message.tsx
            </span>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative p-8 flex flex-col gap-5"
            noValidate
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FloatInput
                id="name"
                name="name"
                label="Your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <FloatInput
                id="email"
                name="email"
                label="Your email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <FloatInput
              id="message"
              name="message"
              label="Tell me about your project…"
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
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono
    ${
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
                className="group relative flex items-center gap-3 px-8 py-3.5
                  rounded-xl bg-emerald-500 hover:bg-emerald-400
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300 font-semibold text-black text-sm
                  tracking-wide overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">
                  {loading ? "Sending…" : "Send Message"}
                </span>
                {!loading && (
                  <svg
                    className="relative z-10 size-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                )}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </button>
            </div>
          </form>
        </div>

        {/* ── right panel ── */}
        <div className="flex flex-col gap-5">
          {/* 3D orb */}
          <div className="rounded-2xl border border-white/8 bg-white/2 overflow-hidden cursor-grab active:cursor-grabbing h-72">
            <LazyCanvas className="w-full h-full">
              <DynamicContactExperience />
            </LazyCanvas>
          </div>

          {/* availability */}
          <div className="rounded-2xl border border-white/8 bg-white/2 p-7 flex flex-col gap-4">
            <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
              Current Status
            </p>
            {availability.map(({ label, value, dot }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-white/50">{label}</span>
                <span
                  className={`text-sm font-medium flex items-center gap-2
                  ${dot ? "text-emerald-400" : "text-white/75"}`}
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
    </section>
  );
};

export default ContactSection;
