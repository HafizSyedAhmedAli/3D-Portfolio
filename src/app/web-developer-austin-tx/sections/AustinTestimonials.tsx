// Server component
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import TestimonialCard from "@/components/city/TestimonialCard";
import { austinTestimonials } from "@/constants/austin";

const AustinTestimonials = () => (
  <section
    id="testimonials-austin"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Happy Clients" />
      <SectionHeading>Don&apos;t Take My Word for It</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
        {austinTestimonials.map((t) => (
          <TestimonialCard key={`${t.name}-${t.handle}`} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default AustinTestimonials;
