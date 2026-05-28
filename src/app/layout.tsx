import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "Ahmed Ali | Full-Stack Developer",
  description:
    "Full-Stack Developer shipping AI-powered products — from database schema to deployed UI. Based in Karachi, Pakistan.",
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
