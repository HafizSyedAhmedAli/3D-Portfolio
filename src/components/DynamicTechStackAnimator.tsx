"use client";

import dynamic from "next/dynamic";

const TechStackAnimator = dynamic(
  () => import("@/components/animators/TechStackAnimator"),
  { ssr: false },
);

export default function DynamicTechStackAnimator() {
  return <TechStackAnimator />;
}
