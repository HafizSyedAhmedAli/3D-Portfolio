import Navbar from "@/components/Navbar";
import ShowcaseSection from "@/sections/ShowcaseSection";
import HeroSection from "@/sections/HeroSection";
import LogoSection from "@/sections/LogoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
}
