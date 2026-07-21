"use client";

import { useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import EulerHeader from "./EulerHeader";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
      <rect width="800" height="1000" fill="#f7f5f0" />
      <circle cx="400" cy="380" r="150" fill="none" stroke="#000" stroke-width="4" />
      <path d="M180 900 C180 650 620 650 620 900" fill="none" stroke="#000" stroke-width="4" />
      <text x="400" y="980" font-family="monospace" font-size="20" fill="#000" text-anchor="middle">add public/portrait.jpg</text>
    </svg>
  `);

export default function Header() {
  const [src, setSrc] = useState("/portrait.jpg");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser starts requesting the SSR-rendered <img src> before React
    // hydrates and attaches onError, so a request that already failed by
    // mount time needs to be caught here instead of relying on onError alone.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setSrc(PLACEHOLDER);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
      <div>
        <p className="font-serif text-xl italic text-neutral-600 sm:text-2xl">
          Hi, I&apos;m
        </p>

        <div className="mt-1">
          <EulerHeader />
          <div className="whitespace-nowrap font-display text-[15vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl">
            Hauduc
          </div>
        </div>

        <p className="mt-4 font-serif text-lg italic text-neutral-600 sm:text-xl">
          Student / Mathematics / AI
        </p>
      </div>

      <BrowserFrame>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt="Portrait of Enora Hauduc"
          className="h-full w-full object-cover"
          onError={() => setSrc(PLACEHOLDER)}
        />
      </BrowserFrame>
    </div>
  );
}
