"use client";

import { Clock, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import TarteelAnimateOnScroll from "./TarteelAnimateOnScroll";
import { tarteelCourses } from "@/constants/tarteel";

export default function TarteelCourses() {
  return (
    <section
      id="courses"
      style={{ padding: "96px 0", background: "var(--cream-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <TarteelAnimateOnScroll className="text-center mb-16">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-3"
            style={{
              color: "var(--emerald-mid)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Our Curriculum
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
            Courses Tailored for
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Every Learner
            </span>
          </h2>
          <div className="gold-divider mt-4 mb-6" />
          <p
            className="max-w-xl mx-auto text-base"
            style={{
              color: "var(--text-light)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            From your first Arabic letter to advanced Tajweed — we have a course
            for every stage of your journey.
          </p>
        </TarteelAnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarteelCourses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 48px rgba(10,61,46,0.16)",
              }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "white",
                border: course.highlight
                  ? "2px solid var(--gold)"
                  : "1px solid rgba(10,61,46,0.1)",
                boxShadow: course.highlight
                  ? "0 8px 32px rgba(201,168,76,0.2)"
                  : "0 2px 16px rgba(10,61,46,0.06)",
                position: "relative",
              }}
            >
              {course.highlight && (
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10"
                  style={{
                    background: "var(--gold)",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                className="p-6 pb-4"
                style={{
                  background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}dd 100%)`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span style={{ fontSize: "36px" }}>{course.emoji}</span>
                  <span
                    className="font-amiri text-xl"
                    style={{ color: "var(--gold)", direction: "rtl" }}
                  >
                    {course.arabic}
                  </span>
                </div>
                <h3
                  className="font-cormorant text-2xl"
                  style={{ color: "var(--gold-pale)", lineHeight: 1.1 }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-xs mt-1"
                  style={{
                    color: "rgba(245,233,196,0.6)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {course.subtitle}
                </p>
              </div>

              <div className="p-6">
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "var(--text-mid)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {course.desc}
                </p>
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex items-center gap-1.5"
                    style={{ color: "var(--text-light)", fontSize: "12px" }}
                  >
                    <Clock size={13} /> {course.duration}
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    style={{ color: "var(--text-light)", fontSize: "12px" }}
                  >
                    <Users size={13} /> {course.level}
                  </div>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {course.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--text-mid)" }}
                    >
                      <span style={{ color: "var(--gold)", fontSize: "10px" }}>
                        ✦
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                  style={{
                    color: "var(--emerald-mid)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--emerald-mid)")
                  }
                >
                  Book a Free Trial <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
