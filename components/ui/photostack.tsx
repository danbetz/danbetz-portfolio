"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/photo5.webp", alt: "Me with my girls" },
  { src: "/images/photo10.webp", alt: "Ready for the Ghost show" },
  { src: "/images/photo9.webp", alt: "The whole fam" },
  { src: "/images/photo8.webp", alt: "Jiu jitsu fellas" },
];

export default function FanStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    if (!containerRef.current || hasAnimated) return;

    const rect = containerRef.current.getBoundingClientRect();
    const isNearTop = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;

    if (isNearTop) {
      setHasAnimated(true);
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [hasAnimated]);

  return (
    <div
      className={`fan-stack ${hasAnimated ? "spread" : ""}`}
      ref={containerRef}
    >
      {images.map((img, i) => (
  <Image
    key={i}
    src={img.src}
    alt={img.alt}
    width={270}
    height={203}
    className={`fan-image fan-pos-${i}`}
    style={{
      zIndex: images.length - i,
      transitionDelay: `${i * 120}ms`
    }}
  />
))}
    </div>
  );
}
