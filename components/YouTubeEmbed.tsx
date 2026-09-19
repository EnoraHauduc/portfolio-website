"use client";

import { useEffect, useState } from "react";

type Mode = "pending" | "iframe" | "facade";

// Below Tailwind's `sm` breakpoint the player is swapped for a thumbnail that
// only loads YouTube's iframe on tap, saving mobile data. Wider screens get
// the iframe straight away, exactly as before.
const MOBILE_QUERY = "(max-width: 639px)";

export default function YouTubeEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [mode, setMode] = useState<Mode>("pending");
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    setMode(window.matchMedia(MOBILE_QUERY).matches ? "facade" : "iframe");
  }, []);

  if (mode === "pending") return null;

  if (mode === "facade") {
    return (
      <button
        type="button"
        aria-label={`Play video: ${title}`}
        onClick={() => {
          setAutoplay(true);
          setMode("iframe");
        }}
        className="relative block h-full w-full bg-black"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-black bg-white/90 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
            <svg viewBox="0 0 24 24" aria-hidden className="ml-0.5 h-6 w-6 fill-black">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }

  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube.com/embed/${youtubeId}${autoplay ? "?autoplay=1" : ""}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
