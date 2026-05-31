import DynamicTechStackAnimator from "@/components/DynamicTechStackAnimator";
import DynamicTechStackGrid from "@/components/DynamicTechStackGrid";
import TitleHeader from "../components/TitleHeader";

const TechStackSection = () => {
  return (
    <section
      id="skills"
      className="w-full section-padding md:px-20 px-5 scroll-mt-28"
    >
      <TitleHeader title="My Core Tech Stack" sub="⚡ What I Build With" />
      <DynamicTechStackAnimator />
      <DynamicTechStackGrid />
    </section>
  );
};

export default TechStackSection;
