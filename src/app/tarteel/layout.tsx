import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Tarteel | Online Quran Classes",
  description:
    "Learn Quran online with certified teachers. One-on-one live classes via Zoom & Google Meet. Tajweed, Hifz, Tafsir & more for all ages.",
  keywords:
    "online quran teacher, learn quran online, quran classes, tajweed, hifz, tarteel",
  alternates: {
    canonical: "https://www.syedahmedali.com/tarteel",
  },
};

export default function TarteelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            borderRadius: "12px",
            padding: "14px 18px",
          },
          error: {
            style: {
              background: "#1a1a1a",
              color: "#faf7f0",
              border: "1px solid rgba(201,68,68,0.4)",
            },
            iconTheme: {
              primary: "#e05c5c",
              secondary: "#1a1a1a",
            },
          },
        }}
      />
      {children}
      <script
        src="https://relay-widget-navy.vercel.app/widget.js"
        data-organization-id="org_3BXJLL5dUWc5VRS6W1UG4LpMdJw"
      />
    </>
  );
}
