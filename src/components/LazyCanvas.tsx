"use client";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const LazyCanvas = ({ children, className }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "150px", // start loading 150px before it enters viewport
  });

  return (
    <div ref={ref} className={className ?? "w-full h-full"}>
      {inView ? children : null}
    </div>
  );
};

export default LazyCanvas;
