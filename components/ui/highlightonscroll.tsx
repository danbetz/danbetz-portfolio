"use client";

import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";

export default function HighlightOnScroll({
  children,
  type = "highlight", // also try: underline, box, strike-through, circle, bracket
  color = "#fef3b8",
  animationDuration = 800,
}: {
  children: React.ReactNode;
  type?: "highlight" | "underline" | "box" | "strike-through" | "circle" | "bracket";
  color?: string;
  animationDuration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => {
  const el = ref.current;
  if (!el || hasAnimated) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const annotation = annotate(el, {
          type,
          color,
          animationDuration,
          iterations: 1,
          padding: 4,
        });
        annotation.show();
        setHasAnimated(true);
      }
    },
    {
      threshold: 0.95,
      rootMargin: "-20% 0px -60% 0px", // triggers when it's near top 20–40%
    }
  );

  observer.observe(el);

  return () => observer.disconnect();
}, [hasAnimated]);

  return <span ref={ref}>{children}</span>;
}
