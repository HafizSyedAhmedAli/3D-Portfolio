"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import TarteelAnimateOnScroll from "./TarteelAnimateOnScroll";
import { tarteelTestimonials } from "@/constants/tarteel";

export default function TarteelTestimonials() {
  return (
    <section
      id="testimonials"
      style={{ padding: "96px 0", background: "var(--emerald-deep)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <TarteelAnimateOnScroll className="text-center mb-16">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-3"
            style={{
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Student Stories
          </p>
          <h2
            className="font-cormorant mb-4"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "var(--gold-pale)",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Words from Our
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Students
            </span>
          </h2>
          <div className="gold-divider mt-4 mb-6" />
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  style={{ color: "var(--gold)", fontSize: "20px" }}
                >
                  ★
                </span>
              ))}
            </div>
            <span
              className="font-cormorant text-2xl"
              style={{ color: "var(--gold-pale)" }}
            >
              4.9
            </span>
            <span
              className="text-sm"
              style={{
                color: "rgba(245,233,196,0.5)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              from 200+ students
            </span>
          </div>
        </TarteelAnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarteelTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(21,92,69,0.35)",
                border: "1px solid rgba(201,168,76,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Quote
                size={28}
                style={{ color: "rgba(201,168,76,0.3)", marginBottom: "12px" }}
              />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, i) => (
                  <span
                    key={i}
                    style={{ color: "var(--gold)", fontSize: "13px" }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{
                  color: "rgba(245,233,196,0.75)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="font-cormorant text-lg"
                    style={{ color: "var(--gold-light)", lineHeight: 1.2 }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs mt-1 flex gap-2"
                    style={{
                      color: "rgba(245,233,196,0.4)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/16x12/${t.flag.toLowerCase()}.png`}
                      width="16"
                      height="12"
                      alt={t.location}
                      style={{ objectFit: "contain" }}
                    />
                    {t.location}
                  </div>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    color: "var(--gold)",
                    fontFamily: "'DM Sans', sans-serif",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {t.course}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
