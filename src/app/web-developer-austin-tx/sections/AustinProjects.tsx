// Server component
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import ProjectCard from "@/components/city/ProjectCard";
import { austinProjects } from "@/constants/austin";

const AustinProjects = () => (
  <section
    id="projects-austin"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Portfolio" />
      <SectionHeading>Real Projects. Deployed. Live.</SectionHeading>
      <p className="text-white/50 text-sm md:text-base mb-10 md:mb-12 max-w-2xl">
        These aren&apos;t mockups or side experiments — they&apos;re production
        applications serving real users. This is the standard every Austin TX
        client gets.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {austinProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default AustinProjects;
