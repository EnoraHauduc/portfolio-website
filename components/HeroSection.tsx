"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";

// How long (in viewport heights) the hero stays pinned on screen while the
// Euler animation plays out. Only applies at the md breakpoint and up (see
// the md:h-[...] / md:sticky classes below) -- on narrow screens the header
// and portrait stack tall enough that pinning them risks clipping content
// below the fold, so mobile falls back to the header's own natural height.
const PIN_VH = 220;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HeroSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      const isPinned = getComputedStyle(inner).position === "sticky";
      let p: number;

      if (isPinned) {
        const rect = outer.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        p = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      } else {
        const rect = inner.getBoundingClientRect();
        const scrollY = window.scrollY;
        const absoluteTop = rect.top + scrollY;
        const total = absoluteTop + rect.height;
        p = total > 0 ? clamp(scrollY / total, 0, 1) : 0;
      }

      setProgress(p);
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative md:h-[var(--pin-vh)]"
      style={{ ["--pin-vh" as string]: `${PIN_VH}vh` }}
    >
      <div ref={innerRef} className="md:sticky md:top-16">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pt-20">
          <Header progress={progress} />
        </section>
      </div>
    </div>
  );
}
