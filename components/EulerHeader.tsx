"use client";

import { useEffect, useRef, useState } from "react";

// Each entry is the "prefix" shown before the constant "nora" suffix.
// index 0 is the resting state ("E" + "nora" = "Enora").
const PREFIXES = [
  "E",
  "e = 2 ",
  "e = 2.7 ",
  "e = 2.71 ",
  "e = 2.718 ",
  "e = 2.7182 ",
  "e = 2.71828 ",
  "e = 2.71828... ",
];

const SUFFIX = "nora";
const STEP_DELAY = 130;
const HOLD_DELAY = 1000;

export default function EulerHeader() {
  const [step, setStep] = useState(0);
  const [pulse, setPulse] = useState(false);
  const animatingRef = useRef(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => clearTimers, []);

  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 90);
    return () => clearTimeout(t);
  }, [step]);

  const handleEnter = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    clearTimers();

    let delay = 0;
    for (let i = 1; i < PREFIXES.length; i += 1) {
      delay += STEP_DELAY;
      timeouts.current.push(setTimeout(() => setStep(i), delay));
    }

    delay += HOLD_DELAY;

    for (let i = PREFIXES.length - 2; i >= 0; i -= 1) {
      delay += STEP_DELAY;
      timeouts.current.push(setTimeout(() => setStep(i), delay));
    }

    timeouts.current.push(
      setTimeout(() => {
        animatingRef.current = false;
      }, delay + 20)
    );
  };

  return (
    <h1
      onMouseEnter={handleEnter}
      className="cursor-default select-none whitespace-nowrap font-display text-[15vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl"
    >
      <span
        className={`inline-block transition-all duration-150 ease-out ${
          pulse ? "text-neutral-500 opacity-70" : "text-black opacity-100"
        }`}
      >
        {PREFIXES[step]}
      </span>
      <span className="inline-block text-black">{SUFFIX}</span>
    </h1>
  );
}
