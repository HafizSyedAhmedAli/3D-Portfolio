// Server component
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import WhyCard from "@/components/city/WhyCard";
import { austinWhyCards } from "@/constants/austin";

const AustinWhyChoose = () => (
  <section
    id="hire-me-austin"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Why Hire Me" />
      <SectionHeading className="mb-10 md:mb-12">
        What Sets This Austin Developer Apart
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {austinWhyCards.map((item) => (
          <WhyCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default AustinWhyChoose;
