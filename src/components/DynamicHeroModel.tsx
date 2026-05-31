"use client";

import dynamic from "next/dynamic";

const HeroModel = dynamic(() => import("@/components/HeroModel"), {
  ssr: false,
});

export default function DynamicHeroModel(props: {
  desktop?: boolean;
  mobile?: boolean;
}) {
  return <HeroModel {...props} />;
}
