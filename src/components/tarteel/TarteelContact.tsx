"use client";

import { Clock, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TarteelContact() {
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
          {
            duration: 5000,
          },
        );
      }
    } catch {
      toast.error(
        "Network error. Please check your connection and try again.",
        {
          duration: 5000,
        },
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
            Book Your
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Free Trial Class
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
            Fill in the form and we&apos;ll get back to you within 24 hours to
            confirm your session.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-8">
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

            {/* Contact methods */}
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+92 328-2488-387",
                sub: "Fast response",
              },
              {
                icon: Mail,
                label: "Email",
                value: "hafizsyedahmedali12@gmail.com",
                sub: "Response within 24h",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "Mon–Fri, 8AM–10PM",
                sub: "Pakistan Standard Time",
              },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(10,61,46,0.08)" }}
                >
                  <Icon size={18} style={{ color: "var(--emerald-mid)" }} />
                </div>
                <div>
                  <div
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "var(--text-light)", marginBottom: "2px" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-light)" }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}

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
                      Book My Free Trial Class
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
