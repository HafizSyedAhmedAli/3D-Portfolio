"use client";

import dynamic from "next/dynamic";

const HeroAnimator = dynamic(
  () => import("@/components/animators/HeroAnimator"),
  {
    ssr: false,
  },
);

export default function DynamicHeroAnimator() {
  return <HeroAnimator />;
}
