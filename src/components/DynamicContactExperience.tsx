"use client";

import dynamic from "next/dynamic";

const ContactExperience = dynamic(() => import("@/components/Models/TechLogos/contact/ContactExperience"), { ssr: false });


export default function DynamicContactExperience() {
  return <ContactExperience />;
}
