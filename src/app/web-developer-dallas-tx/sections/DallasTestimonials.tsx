import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import TestimonialCard from "@/components/city/TestimonialCard";
import { dallasTestimonials } from "@/constants/dallas";

const DallasTestimonials = () => (
  <section
    id="testimonials-dallas"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Happy Clients" />
      <SectionHeading>Results That Speak for Themselves</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
        {dallasTestimonials.map((t) => (
          <TestimonialCard key={`${t.name}-${t.handle}`} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default DallasTestimonials;