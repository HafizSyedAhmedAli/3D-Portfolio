import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import ProjectCard from "@/components/city/ProjectCard";
import { houstonProjects } from "@/constants/houston";

const HoustonProjects = () => (
  <section
    id="projects-houston"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Portfolio" />
      <SectionHeading>
        Live Projects — Not Just Screenshots
      </SectionHeading>
      <p className="text-white/50 text-sm md:text-base mb-10 md:mb-12 max-w-2xl">
        Each of these is deployed, serving real users, and handling real business
        logic. Houston clients get the same production standard — no exceptions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {houstonProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default HoustonProjects;