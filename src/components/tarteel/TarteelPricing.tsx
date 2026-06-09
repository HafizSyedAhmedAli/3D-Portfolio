"use client";

import { tarteelPlans } from "@/constants/tarteel";
import { Check } from "lucide-react";
import { useState } from "react";

export default function TarteelPricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      id="pricing"
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
            Transparent Pricing
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
            Simple, Affordable
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Plans
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
            All plans include a{" "}
            <strong style={{ color: "var(--emerald-mid)" }}>
              free 30-minute trial
            </strong>{" "}
            before you commit.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {tarteelPlans.map((plan) => {
            const isHighlighted = plan.highlight || hoveredPlan === plan.name;

            return (
              <div
                key={plan.name}
                className="card-hover rounded-2xl overflow-hidden"
                style={{
                  background: isHighlighted ? "var(--emerald-deep)" : "white",
                  border: isHighlighted
                    ? "2px solid var(--gold)"
                    : "1px solid rgba(10,61,46,0.1)",
                  boxShadow: isHighlighted
                    ? "0 12px 48px rgba(201,168,76,0.25)"
                    : "0 4px 20px rgba(10,61,46,0.08)",
                  transform: isHighlighted ? "translateY(-8px)" : "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Plan header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className="font-cormorant text-2xl"
                        style={{
                          color: isHighlighted
                            ? "var(--gold-pale)"
                            : "var(--emerald-deep)",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="font-amiri text-base"
                        style={{
                          color: isHighlighted
                            ? "rgba(201,168,76,0.7)"
                            : "var(--text-light)",
                          direction: "rtl",
                          textAlign: "left",
                        }}
                      >
                        {plan.arabic}
                      </p>
                    </div>
                    {plan.highlight && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "var(--gold)",
                          color: "white",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        ★ Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="font-cormorant"
                      style={{
                        fontSize: "52px",
                        lineHeight: 1,
                        color: isHighlighted
                          ? "var(--gold)"
                          : "var(--emerald-deep)",
                        fontWeight: 600,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="mb-2 text-sm"
                      style={{
                        color: isHighlighted
                          ? "rgba(245,233,196,0.5)"
                          : "var(--text-light)",
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <div className="flex gap-3 mb-4" style={{ fontSize: "13px" }}>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: isHighlighted
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(10,61,46,0.07)",
                        color: isHighlighted
                          ? "var(--gold-light)"
                          : "var(--emerald-mid)",
                      }}
                    >
                      {plan.sessions}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: isHighlighted
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(10,61,46,0.07)",
                        color: isHighlighted
                          ? "var(--gold-light)"
                          : "var(--emerald-mid)",
                      }}
                    >
                      {plan.duration}
                    </span>
                  </div>

                  <p
                    className="text-sm"
                    style={{
                      color: isHighlighted
                        ? "rgba(245,233,196,0.6)"
                        : "var(--text-light)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="mx-8"
                  style={{
                    borderTop: `1px solid ${isHighlighted ? "rgba(201,168,76,0.2)" : "rgba(10,61,46,0.1)"}`,
                  }}
                />

                {/* Features */}
                <div className="p-8 pt-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: isHighlighted
                              ? "rgba(201,168,76,0.2)"
                              : "rgba(10,61,46,0.08)",
                          }}
                        >
                          <Check
                            size={11}
                            style={{
                              color: isHighlighted
                                ? "var(--gold)"
                                : "var(--emerald-mid)",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            color: isHighlighted
                              ? "rgba(245,233,196,0.75)"
                              : "var(--text-mid)",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${isHighlighted ? "btn-gold" : "btn-emerald"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-xs mt-8"
          style={{
            color: "var(--text-light)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          * Prices are indicative. Contact us for custom family packages or bulk
          session discounts.
        </p>
      </div>
    </section>
  );
}
