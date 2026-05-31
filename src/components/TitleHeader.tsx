import ScrollAnimator from "./ScrollAnimator";

type Props = {
  title: string;
  sub: string;
};

const TitleHeader = ({ title, sub }: Props) => {
  return (
    <div className="mb-12">
      <ScrollAnimator
        selector=".title-sub"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }}
      />
      <ScrollAnimator
        selector=".title-heading"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }}
      />
      <p className="title-sub text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
        {sub}
      </p>
      <h2 className="title-heading text-3xl md:text-5xl leading-[1.2] md:leading-[1.15] font-bold text-white">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
