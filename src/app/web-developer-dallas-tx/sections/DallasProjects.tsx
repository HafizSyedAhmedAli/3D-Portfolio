import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import ProjectCard from "@/components/city/ProjectCard";
import { dallasProjects } from "@/constants/dallas";

const DallasProjects = () => (
  <section
    id="projects-dallas"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Portfolio" />
      {/* H2 — keyword variation */}
      <SectionHeading>
        What a Web Developer Dallas TX Delivers — Not Promises
      </SectionHeading>
      <p className="text-white/50 text-sm md:text-base mb-10 md:mb-12 max-w-2xl">
        Every project below is live in production with real users, real data, and
        real business logic. This is the baseline for every Dallas client I work with.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {dallasProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default DallasProjects;