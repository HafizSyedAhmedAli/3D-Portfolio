import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { tarteelMetadata as meta } from "@/constants/tarteel";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: {
    icon: "/images/tarteel/tarteel-favicon.png",
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: "Tarteel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  alternates: {
    canonical: meta.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Tarteel",
  description: meta.description,
  url: meta.url,
  image: `https://www.syedahmedali.com${meta.ogImage}`,
  telephone: "+923282488387",
  email: "hafizsyedahmedali12@gmail.com",
  sameAs: [
    "https://wa.me/923282488387",
    "https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307",
  ],
  founder: {
    "@type": "Person",
    name: "Hafiz Syed Ahmed Ali",
    jobTitle: "Certified Quran Teacher",
    description:
      "Hafiz with 5+ years of experience teaching Quran online to students worldwide.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Quran Courses",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Quran Reading / Nazra Program",
          description:
            "Complete Quran reading from scratch — master Arabic letters, basic pronunciation, and fluent recitation.",
          provider: { "@type": "EducationalOrganization", name: "Tarteel" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Tajweed Rules",
          description:
            "Perfect your Quran recitation with correct pronunciation, elongation rules, Noon & Meem rules, and Waqf.",
          provider: { "@type": "EducationalOrganization", name: "Tarteel" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Hifz Program",
          description:
            "Structured Quran memorization with daily Sabq, Sabqi, and Manzil revision system and progress tracking.",
          provider: { "@type": "EducationalOrganization", name: "Tarteel" },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.syedahmedali.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tarteel – Online Quran Classes",
      item: meta.url,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any prior knowledge of Arabic to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. The Quran Reading / Nazra course is designed for complete beginners. We start from the very basics — recognising Arabic letters — and progress at your own pace.",
      },
    },
    {
      "@type": "Question",
      name: "How does the free trial class work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After you submit the booking form, we will reach out within 24 hours to schedule a free 30-minute session. This lets you meet the teacher, assess your current level, and decide the best course — no payment required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose between Zoom and Google Meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support both platforms. All you need is a stable internet connection and a device with a camera and microphone.",
      },
    },
    {
      "@type": "Question",
      name: "What Quran courses are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer three programs: Quran Reading (Nazra) for beginners, Tajweed Rules for correct recitation, and a full Hifz memorization program. Each is tailored to your level and goals.",
      },
    },
    {
      "@type": "Question",
      name: "How much do online Quran classes cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nazra / Tajweed classes are $50 per month (20 sessions × 30 minutes). The Hifz program is $100 per month (20 sessions × 60 minutes). Middle East pricing in SAR, AED, and QAR. All plans start with a free trial.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reschedule or cancel a class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With at least 12 hours' notice you can reschedule any session free of charge.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach female students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Female students are very welcome in all courses.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I start Quran classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free trial class today. We respond within 24 hours and can schedule your first session within a few days.",
      },
    },
  ],
};

export default function TarteelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-tarteel-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrgSchema),
        }}
      />
      <Script
        id="schema-tarteel-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-tarteel-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
