"use client";

import { tarteelFAQs } from "@/constants/tarteel";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import TarteelAnimateOnScroll from "./TarteelAnimateOnScroll";

export default function TarteelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "96px 0", background: "var(--cream)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <TarteelAnimateOnScroll className="text-center mb-14">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-3"
            style={{
              color: "var(--emerald-mid)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Common Questions
          </p>
          <h2
            className="font-cormorant mb-4"
            style={{
              fontSize: "clamp(34px, 4vw, 52px)",
              color: "var(--emerald-deep)",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Frequently Asked
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}
              Questions
            </span>
          </h2>
          <div className="gold-divider mt-4" />
        </TarteelAnimateOnScroll>

        <div className="space-y-3">
          {tarteelFAQs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{
                  border: isOpen
                    ? "1px solid rgba(201,168,76,0.4)"
                    : "1px solid rgba(10,61,46,0.1)",
                  background: "white",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(201,168,76,0.1)"
                    : "0 1px 6px rgba(10,61,46,0.04)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <span
                    className="text-sm pr-4"
                    style={{
                      color: isOpen
                        ? "var(--emerald-deep)"
                        : "var(--text-dark)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: isOpen ? 600 : 400,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen
                        ? "var(--emerald-deep)"
                        : "rgba(10,61,46,0.08)",
                      transition: "background 0.3s",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={13} style={{ color: "var(--gold)" }} />
                    ) : (
                      <Plus size={13} style={{ color: "var(--emerald-mid)" }} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5">
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "var(--text-mid)",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <TarteelAnimateOnScroll className="text-center mt-12">
          <p
            className="text-sm mb-4"
            style={{
              color: "var(--text-light)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Still have questions? We&apos;d love to hear from you.
          </p>
          <a
            href="#contact"
            className="btn-emerald inline-block px-8 py-3 rounded-full text-sm"
          >
            Book a Free Trial Class
          </a>
        </TarteelAnimateOnScroll>
      </div>
    </section>
  );
}
