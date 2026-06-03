// Reusable mono label above section headings — server component
const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
    {text}
  </p>
);

export default SectionLabel;
