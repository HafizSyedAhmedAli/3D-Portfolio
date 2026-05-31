import Image from "next/image";
import GlowCard from "../components/GlowCard";
import { testimonials } from "../constants";
import TitleHeader from "@/components/TitleHeader";
import TestimonialAnimator from "@/components/animators/TestimonialAnimator";

const RatingDots = ({ count = 5 }: { count?: number }) => (
  <div
    className="flex gap-2"
    role="img"
    aria-label={`Rating: ${count} out of 5 stars`}
  >
    {[...Array(count)].map((_, i) => (
      <span
        key={i}
        className="size-2 rounded-full bg-emerald-400"
        aria-hidden="true"
      />
    ))}
  </div>
);

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding scroll-mt-20"
      aria-label="Client testimonials"
    >
      <TestimonialAnimator />
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What Clients & Peers Say"
          sub="💬 Honest Feedback"
        />

        <ul className="mt-16 [column-fill:balance] md:columns-2 gap-8 space-y-8 w-full list-none">
          {testimonials[0] && (
            <li className="break-inside-avoid group">
              <GlowCard index={0} className="testimonial-item">
                <figure className="flex flex-col h-full justify-between min-h-100">
                  <div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonials[0].imgPath}
                        alt={`Photo of ${testimonials[0].name}`}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <figcaption>
                        <h3 className="text-2xl font-semibold">
                          {testimonials[0].name}
                        </h3>
                        <p className="text-emerald-300">
                          {testimonials[0].mentions}
                        </p>
                      </figcaption>
                    </div>
                    <div
                      className="w-14 h-px bg-emerald-400/60 my-6"
                      aria-hidden="true"
                    />
                    <blockquote>
                      <p className="text-xl leading-10 text-white/75">
                        "{testimonials[0].review}"
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <RatingDots />
                    {testimonials[0].logo && (
                      <Image
                        src={testimonials[0].logo.src}
                        alt=""
                        aria-hidden="true"
                        width={testimonials[0].logo.width}
                        height={testimonials[0].logo.height}
                      />
                    )}
                  </div>
                </figure>
              </GlowCard>
            </li>
          )}

          {testimonials.slice(1).map((testimonial, index) => (
            <li
              key={`${index}-${testimonial.name}`}
              className="break-inside-avoid group"
            >
              <GlowCard index={index + 1} className="testimonial-item">
                <figure className="flex flex-col h-full justify-between min-h-55">
                  <div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.imgPath}
                        alt={`Photo of ${testimonial.name}`}
                        width={52}
                        height={52}
                        className="rounded-full"
                      />
                      <figcaption>
                        <p className="font-semibold text-xl">
                          {testimonial.name}
                        </p>
                        <p className="text-emerald-300 text-sm">
                          {testimonial.mentions}
                        </p>
                      </figcaption>
                    </div>
                    <div
                      className="w-12 h-px bg-emerald-400/60 my-5"
                      aria-hidden="true"
                    />
                    <blockquote>
                      <p className="text-white/70 leading-8 text-lg">
                        "{testimonial.review}"
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <RatingDots />
                    {testimonial.logo && (
                      <Image
                        src={testimonial.logo.src}
                        alt=""
                        aria-hidden="true"
                        width={testimonial.logo.width}
                        height={testimonial.logo.height}
                      />
                    )}
                  </div>
                </figure>
              </GlowCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialSection;
