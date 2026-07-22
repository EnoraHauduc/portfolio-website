"use client";

import { useEffect, useRef, useState } from "react";

// Each entry is appended to the previous one, so the numeral grows by a
// fixed suffix at every level instead of the whole string being replaced.
// Cumulative: "2", "2.7", "2.71", "2.718", "2.7182", "2.71828", "2.71828..."
const DIGITS = ["2", ".7", "1", "8", "2", "8", "..."];
const MAX_LEVEL = DIGITS.length;
const SUFFIX = "nora";

// Fractions of the 0-1 progress value given over to each phase of the
// cycle: forward to "e = 2.71828...", a brief hold, then back to "Enora".
const FORWARD_END = 0.35;
const HOLD_END = 0.55;
const REVERSE_END = 0.9;

// How long a full play-through takes, in ms. Slow enough to read as a
// deliberate reveal rather than a glitch.
const CYCLE_DURATION_MS = 3400;

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
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  const playCycle = () => {
    // Ignore re-entrant triggers while a cycle is already running. Chromium
    // resets its hover-tracking whenever the DOM node directly under the
    // pointer is removed (which happens here as the "E" / "e =" span swaps
    // mid-animation), firing a spurious extra mouseenter with no matching
    // mouseleave -- without this guard that spurious event restarts the
    // cycle forever.
    if (frameRef.current !== null) return;

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / CYCLE_DURATION_MS, 1);
      setProgress(t);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        frameRef.current = null;
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  // Auto-play once through the full cycle on first mount, then rest at
  // "Enora" until the user hovers.
  useEffect(() => {
    playCycle();
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, []);

  const level = levelForProgress(progress);
  const active = level > 0;
  const digits = DIGITS.slice(0, level);

  return (
    <h1
      onMouseEnter={playCycle}
      className="select-none whitespace-nowrap font-display text-[15vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl"
    >
      {/* pointer-events-none on every child keeps hit-testing resolved to
          this h1 at all times, even as spans mount/unmount mid-animation --
          see the comment on playCycle for why that matters. */}
      {active ? (
        <span key="eq" className="pointer-events-none inline-block animate-euler-in">
          e =
        </span>
      ) : (
        <span key="rest" className="pointer-events-none inline-block animate-euler-in">
          E
        </span>
      )}
      {/* Kept as a bare text node rather than inside a span: inline-block
          boxes trim their own leading/trailing whitespace, which was
          silently swallowing this gap. */}
      {active && " "}
      {digits.map((digit, i) => (
        <span key={`d-${i}`} className="pointer-events-none inline-block animate-euler-in">
          {digit}
        </span>
      ))}
      {active && " "}
      <span className="pointer-events-none inline-block">{SUFFIX}</span>
    </h1>
  );
}
