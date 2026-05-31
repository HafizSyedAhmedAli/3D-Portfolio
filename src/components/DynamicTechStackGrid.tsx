"use client";

import dynamic from "next/dynamic";

const TechStackGrid = dynamic(
  () => import("@/components/TechStackGrid"),
  {
    ssr: false,
  },
);

export default function DynamicTechStackGrid() {
  return <TechStackGrid />;
}
