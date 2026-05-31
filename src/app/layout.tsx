import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { siteMetadata as meta } from "@/constants";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  verification: {
    google: "wdrtvf8KCbZvz9YqzCIzPBnz0zXXH7gw8p8s99u9BBs",
  },
  metadataBase: new URL(meta.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.siteName,
    locale: "en_US",
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.ogImageAlt,
      },
    ],
    type: "website",
  },
  twitter: {
    card: meta.twitterCard,
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  robots: meta.robots,
  alternates: {
    canonical: meta.canonical,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Ali",
    url: meta.url,
    jobTitle: "Full-Stack Developer",
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    sameAs: [
      "https://github.com/HafizSyedAhmedAli",
      "https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307",
    ],
    knowsAbout: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "React",
      "Full-Stack Development",
      "AI-powered SaaS",
    ],
  };

  return (
    <html lang="en" className={`${monaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
