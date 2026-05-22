import ContactSection from "@/sections/ContactSection";
import ExperienceSection from "@/sections/ExperienceSection";
import FeatureCardSection from "@/sections/FeatureCardSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import NavbarSection from "@/sections/NavbarSection";
import ShowcaseSection from "@/sections/ShowcaseSection";
import TechStackSection from "@/sections/TechStackSection";
import TestimonialSection from "@/sections/TestimonialSection";
// import LogoSection from "@/sections/LogoSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCardSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
