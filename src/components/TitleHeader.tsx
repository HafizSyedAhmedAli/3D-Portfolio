type Props = {
  title: string;
  sub: string;
};

const TitleHeader = ({ title, sub }: Props) => {
  return (
    <div className="mb-12">
      <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">
        {sub}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
