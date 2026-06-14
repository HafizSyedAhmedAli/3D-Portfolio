import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import WhyCard from "@/components/city/WhyCard";
import { dallasWhyCards } from "@/constants/dallas";

const DallasWhyChoose = () => (
  <section
    id="hire-me-dallas"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Why Hire Me" />
      {/* H2 — exact keyword */}
      <SectionHeading className="mb-10 md:mb-12">
        Why Dallas TX Businesses Choose Ahmed Ali
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {dallasWhyCards.map((item) => (
          <WhyCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default DallasWhyChoose;