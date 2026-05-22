import Navbar from "@/components/Navbar";
import ShowcaseSection from "@/sections/ShowcaseSection";
import HeroSection from "@/sections/HeroSection";
import FeatureCardSection from "@/sections/FeatureCardSection";
import ExperienceSection from "@/sections/ExperienceSection";
import TechStackSection from "@/sections/TechStackSection";
// import LogoSection from "@/sections/LogoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCardSection />
      <ExperienceSection />
      <TechStackSection />
    </>
  );
}
