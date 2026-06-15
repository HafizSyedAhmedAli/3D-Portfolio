import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import TestimonialCard from "@/components/city/TestimonialCard";
import { houstonTestimonials } from "@/constants/houston";

const HoustonTestimonials = () => (
  <section
    id="testimonials-houston"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Happy Clients" />
      <SectionHeading>Proof in Their Own Words</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
        {houstonTestimonials.map((t) => (
          <TestimonialCard key={`${t.name}-${t.handle}`} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default HoustonTestimonials;
