// Reusable section heading — server component
const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${className ?? ""}`}
  >
    {children}
  </h2>
);

export default SectionHeading;
