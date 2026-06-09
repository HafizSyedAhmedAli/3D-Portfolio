"use client";

import { tarteelSteps } from "@/constants/tarteel";
import { TarteelStep } from "@/types/tarteel";
import {
  BookOpen,
  CalendarCheck,
  LucideIcon,
  TrendingUp,
  Video,
} from "lucide-react";

const iconMap: Record<TarteelStep["icon"], LucideIcon> = {
  CalendarCheck,
  Video,
  BookOpen,
  TrendingUp,
};

export default function TarteelHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="pattern-bg"
      style={{ padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-3"
            style={{
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            The Process
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
            Simple Steps to
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Begin Learning
            </span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 20%, rgba(201,168,76,0.3) 80%, transparent)",
            }}
          />

          {tarteelSteps.map(({ icon: iconKey, title, desc, num }, i) => {
            const Icon = iconMap[iconKey];
            return (
              <div
                key={num}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6"
                  style={{
                    background: "rgba(21,92,69,0.6)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon size={28} style={{ color: "var(--gold)" }} />
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "var(--gold)",
                      color: "var(--emerald-deep)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="font-cormorant text-xl mb-2"
                  style={{ color: "var(--gold-pale)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(245,233,196,0.55)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Platform section */}
        <div
          className="mt-20 rounded-2xl p-8 md:p-12"
          style={{
            background: "rgba(21,92,69,0.4)",
            border: "1px solid rgba(201,168,76,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3
                className="font-cormorant text-3xl mb-3"
                style={{ color: "var(--gold-pale)" }}
              >
                Classes on Your Favourite Platform
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(245,233,196,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                No need to download unfamiliar apps. Use the video platform you
                already know and trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "Zoom",
                  icon: "🎥",
                  features: [
                    "HD video & audio",
                    "Screen sharing",
                    "Recording option",
                    "Waiting room",
                  ],
                },
                {
                  name: "Google Meet",
                  icon: "📹",
                  features: [
                    "No download needed",
                    "Works in browser",
                    "Calendar integration",
                    "Closed captions",
                  ],
                },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(10,61,46,0.5)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <div style={{ fontSize: "30px", marginBottom: "8px" }}>
                    {platform.icon}
                  </div>
                  <div
                    className="font-cormorant text-xl mb-3"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {platform.name}
                  </div>
                  {platform.features.map((f) => (
                    <div
                      key={f}
                      className="text-xs py-0.5"
                      style={{ color: "rgba(245,233,196,0.5)" }}
                    >
                      ✓ {f}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
