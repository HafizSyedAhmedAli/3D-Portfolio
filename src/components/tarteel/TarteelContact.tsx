"use client";

import { Clock, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { tarteelContactMethods } from "@/constants/tarteel";
import type { TarteelContactMethod } from "@/types/tarteel";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<TarteelContactMethod["icon"], LucideIcon> = {
  MessageCircle,
  Mail,
  Clock,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    platform: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      access_key: process.env.NEXT_PUBLIC_TARTEEL_WEB3_FORM_ACCESS_KEY,
      subject: `New Tarteel Enquiry — ${form.course || "General"}`,
      from_name: form.name,
      ...form,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
      } else {
        toast.error(
          "Something went wrong. Please try again or contact us directly.",
          { duration: 5000 },
        );
      }
    } catch {
      toast.error(
        "Network error. Please check your connection and try again.",
        { duration: 5000 },
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(10,61,46,0.2)",
    background: "white",
    color: "var(--text-dark)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="pattern-light"
      style={{ padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-3"
            style={{
              color: "var(--emerald-mid)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Get in Touch
          </p>
          <h2
            className="font-cormorant mb-4"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "var(--emerald-deep)",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Begin Your
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Quranic Journey
            </span>
          </h2>
          <div className="gold-divider mt-4 mb-6" />
          <p
            className="text-sm"
            style={{
              color: "var(--text-light)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Book a free 30-minute trial class — no payment, no commitment. Just
            you and the Quran.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Start Today */}
            <div>
              <h3
                className="font-cormorant text-2xl mb-4"
                style={{ color: "var(--emerald-deep)" }}
              >
                Why Start Today?
              </h3>
              <div
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-mid)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <p className="mb-3">
                  The Prophet ﷺ said:{" "}
                  <em style={{ color: "var(--emerald-mid)" }}>
                    "The best of you are those who learn the Quran and teach
                    it."
                  </em>
                </p>
                <p>
                  Every day is an opportunity to draw closer to the Quran. Let
                  us help you start or continue that beautiful journey.
                </p>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="space-y-3">
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{
                  color: "var(--text-light)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Reach us directly
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923282488387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  background: "white",
                  border: "1px solid rgba(10,61,46,0.1)",
                  boxShadow: "0 2px 12px rgba(10,61,46,0.04)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#25D366";
                  el.style.boxShadow = "0 4px 20px rgba(37,211,102,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(10,61,46,0.1)";
                  el.style.boxShadow = "0 2px 12px rgba(10,61,46,0.04)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#25D366" }}
                >
                  {/* WhatsApp SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Chat on WhatsApp
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-light)" }}
                  >
                    +92 328-2488-387 · Fast response
                  </div>
                </div>
                <svg
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--text-light)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hafizsyedahmedali12@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  background: "white",
                  border: "1px solid rgba(10,61,46,0.1)",
                  boxShadow: "0 2px 12px rgba(10,61,46,0.04)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--emerald-mid)";
                  el.style.boxShadow = "0 4px 20px rgba(10,61,46,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(10,61,46,0.1)";
                  el.style.boxShadow = "0 2px 12px rgba(10,61,46,0.04)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(10,61,46,0.08)" }}
                >
                  <Mail size={20} style={{ color: "var(--emerald-mid)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Send an Email
                  </div>
                  <div
                    className="text-xs truncate"
                    style={{ color: "var(--text-light)" }}
                  >
                    hafizsyedahmedali12@gmail.com
                  </div>
                </div>
                <svg
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--text-light)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Office Hours — not clickable, just info */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "white",
                  border: "1px solid rgba(10,61,46,0.1)",
                  boxShadow: "0 2px 12px rgba(10,61,46,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(10,61,46,0.08)" }}
                >
                  <Clock size={20} style={{ color: "var(--emerald-mid)" }} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Mon–Fri, 8AM–10PM
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-light)" }}
                  >
                    Pakistan Standard Time (UTC+5)
                  </div>
                </div>
              </div>
            </div>

            {/* Arabic dua */}
            <div
              className="rounded-xl p-5 text-center"
              style={{
                background: "var(--emerald-deep)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div
                className="font-amiri text-2xl mb-2"
                style={{ color: "var(--gold)", direction: "rtl" }}
              >
                وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
              </div>
              <div
                className="text-xs"
                style={{
                  color: "rgba(245,233,196,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                "And recite the Quran with measured recitation." — Al-Muzzammil
                73:4
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{
                  background: "white",
                  border: "1px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 8px 40px rgba(10,61,46,0.1)",
                }}
              >
                <div className="text-6xl mb-4">🌙</div>
                <h3
                  className="font-cormorant text-3xl mb-2"
                  style={{ color: "var(--emerald-deep)" }}
                >
                  JazakAllah Khair!
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-mid)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Your request has been received. We&apos;ll contact you within
                  24 hours to schedule your free trial class. May Allah bless
                  your journey with the Quran. 🤲
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={{
                  background: "white",
                  border: "1px solid rgba(10,61,46,0.1)",
                  boxShadow: "0 8px 40px rgba(10,61,46,0.08)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      WhatsApp / Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    />
                  </div>

                  {/* Course */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Course of Interest *
                    </label>
                    <select
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    >
                      <option value="">Select a course</option>
                      <option value="reading">Nazra / Quran Reading</option>
                      <option value="tajweed">Tajweed Rules</option>
                      <option value="hifz">Hifz Program</option>
                    </select>
                  </div>

                  {/* Platform */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Preferred Platform
                    </label>
                    <select
                      name="platform"
                      value={form.platform}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    >
                      <option value="">Select platform</option>
                      <option value="zoom">Zoom</option>
                      <option value="meet">Google Meet</option>
                      <option value="no-preference">No preference</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{
                        color: "var(--text-mid)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Message / Your Level & Goals
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current level and what you'd like to achieve..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--emerald-mid)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(10,61,46,0.2)")
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full mt-6 py-4 rounded-full text-sm flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Claim My Free Trial Class
                    </>
                  )}
                </button>

                <p
                  className="text-center text-xs mt-4"
                  style={{
                    color: "var(--text-light)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  No payment required. We&apos;ll reach out to confirm timing
                  within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
