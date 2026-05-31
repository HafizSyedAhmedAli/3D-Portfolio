import TitleHeader from "../components/TitleHeader";
import TechStackAnimator from "@/components/animators/TechStackAnimator";
import TechStackGrid from "@/components/TechStackGrid";

const TechStackSection = () => {
  return (
    <section
      id="skills"
      className="w-full section-padding md:px-20 px-5 scroll-mt-28"
    >
      <TitleHeader title="My Core Tech Stack" sub="⚡ What I Build With" />
      <TechStackAnimator />
      <TechStackGrid />
    </section>
  );
};

export default TechStackSection;
