"use client";

// Each entry is appended to the previous one, so the numeral grows by a
// fixed suffix at every level instead of the whole string being replaced.
// Cumulative: "2", "2.7", "2.71", "2.718", "2.7182", "2.71828", "2.71828..."
const DIGITS = ["2", ".7", "1", "8", "2", "8", "..."];
const MAX_LEVEL = DIGITS.length;
const SUFFIX = "nora";

// Fractions of the 0-1 progress value (see HeroSection, which computes it)
// given over to each phase of the cycle. The reverse phase finishes at 0.9,
// leaving a margin before the header actually disappears off screen.
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

export default function EulerHeader({ progress }: { progress: number }) {
  const level = levelForProgress(progress);
  const active = level > 0;
  const digits = DIGITS.slice(0, level);

  return (
    <h1 className="select-none whitespace-nowrap font-display text-[15vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl">
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
