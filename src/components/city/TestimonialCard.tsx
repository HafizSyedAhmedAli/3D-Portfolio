import Image from "next/image";
import type { CityPageTestimonial } from "@/types";

const TestimonialCard = ({
  name,
  handle,
  review,
  imgPath,
  imgAlt,
}: CityPageTestimonial) => (
  <div className="rounded-2xl border border-white/8 bg-white/2 p-6 md:p-8">
    <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
      ))}
    </div>
    <blockquote className="text-white/70 leading-relaxed mb-6 text-base md:text-lg">
      &ldquo;{review}&rdquo;
    </blockquote>
    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <Image
        src={imgPath}
        alt={imgAlt}
        width={40}
        height={40}
        className="rounded-full flex-shrink-0"
      />
      <div>
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-emerald-300 text-xs">{handle}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;