import TarteelAbout from "@/components/tarteel/TarteelAbout";
import TarteelContact from "@/components/tarteel/TarteelContact";
import TarteelCourses from "@/components/tarteel/TarteelCourses";
import TarteelFAQ from "@/components/tarteel/TarteelFAQ";
import TarteelFooter from "@/components/tarteel/TarteelFooter";
import TarteelHero from "@/components/tarteel/TarteelHero";
import TarteelHowItWorks from "@/components/tarteel/TarteelHowItWorks";
import TarteelNavbar from "@/components/tarteel/TarteelNavbar";
import TarteelPricing from "@/components/tarteel/TarteelPricing";
import TarteelTestimonials from "@/components/tarteel/TarteelTestimonials";

export default function TarteelPage() {
  return (
    <>
      <TarteelNavbar />
      <main>
        <TarteelHero />
        <TarteelAbout />
        <TarteelCourses />
        <TarteelHowItWorks />
        <TarteelPricing />
        <TarteelTestimonials />
        <TarteelFAQ />
        <TarteelContact />
      </main>
      <TarteelFooter />
    </>
  );
}
