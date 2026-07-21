"use client";

import { useEffect, useRef, useState } from "react";

// Each entry is appended to the previous one, so the numeral grows by a
// fixed suffix at every level instead of the whole string being replaced.
// Cumulative: "2", "2.7", "2.71", "2.718", "2.7182", "2.71828", "2.71828..."
const DIGITS = ["2", ".7", "1", "8", "2", "8", "..."];
const MAX_LEVEL = DIGITS.length;
const SUFFIX = "nora";

// Fractions of scroll progress (0 = header at rest position, 1 = header
// has fully scrolled past the top of the viewport) given over to each
// phase of the cycle. The reverse phase finishes at 0.9, leaving a margin
// before the header actually disappears off screen.
const FORWARD_END = 0.35;
const HOLD_END = 0.55;
const REVERSE_END = 0.9;

function levelForProgress(p: number) {
  if (p <= FORWARD_END) {
    return Math.round((p / FORWARD_END) * MAX_LEVEL);
  }
  if (p <= HOLD_END) {
    return MAX_LEVEL;
  }
  if (p <= REVERSE_END) {
    const t = (p - HOLD_END) / (REVERSE_END - HOLD_END);
    return Math.round(MAX_LEVEL * (1 - t));
  }
  return 0;
}

export default function EulerHeader() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;
      // Document-space top of the element stays constant across scroll
      // positions (barring layout shifts), so this can be recomputed
      // every frame instead of cached once on mount.
      const absoluteTop = rect.top + scrollY;
      const total = absoluteTop + rect.height;
      const p = total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0;
      setLevel(levelForProgress(p));
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

  const active = level > 0;
  const digits = DIGITS.slice(0, level);

  return (
    <h1
      ref={ref}
      className="select-none whitespace-nowrap font-display text-[15vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl"
    >
      {active ? (
        <span key="eq" className="inline-block animate-euler-in">
          e =
        </span>
      ) : (
        <span key="rest" className="inline-block animate-euler-in">
          E
        </span>
      )}
      {/* Kept as a bare text node rather than inside a span: inline-block
          boxes trim their own leading/trailing whitespace, which was
          silently swallowing this gap. */}
      {active && " "}
      {digits.map((digit, i) => (
        <span key={`d-${i}`} className="inline-block animate-euler-in">
          {digit}
        </span>
      ))}
      {active && " "}
      <span className="inline-block">{SUFFIX}</span>
    </h1>
  );
}
