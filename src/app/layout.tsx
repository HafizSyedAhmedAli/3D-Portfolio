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
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.siteName,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
