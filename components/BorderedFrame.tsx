import type { CSSProperties, JSX, ReactNode } from "react";
import { withBasePath } from "@/lib/basePath";

export type BorderedFrameVariant = "window" | "crt" | "browserTab" | "blackTab";

export type BorderedFrameImage = {
  src: string;
  alt: string;
};

type FrameProps = {
  children: ReactNode;
  className?: string;
  style: CSSProperties;
  aspectClassName: string;
};

// The original headshot chrome, unchanged: macOS-style traffic-light dots
// over a doubled border line into the image.
function WindowFrame({ children, className, style, aspectClassName }: FrameProps) {
  return (
    <div
      style={style}
      className={`w-full rounded-lg border-[3px] border-black bg-black shadow-[7px_7px_0_0_rgba(0,0,0,1)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 rounded-t-[5px] border-b-[3px] border-black bg-[#faf3e0] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-black" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-black" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-black" />
      </div>
      <div className="border-b-[3px] border-black" />
      <div className={`${aspectClassName} overflow-hidden bg-white`}>{children}</div>
      <div className="rounded-b-[5px] border-t-[3px] border-black bg-[#faf3e0] py-2.5" />
    </div>
  );
}

// Retro CRT monitor: screen up top, thick bezel below with vent lines, a
// power button, and a cassette-style vent grille.
function CrtFrame({ children, className, style, aspectClassName }: FrameProps) {
  return (
    <div
      style={style}
      className={`w-full rounded-2xl border-[3px] border-black bg-black shadow-[7px_7px_0_0_rgba(0,0,0,1)] ${className ?? ""}`}
    >
      <div className="rounded-t-[13px] border-b-[3px] border-black bg-white p-2">
        <div className={`${aspectClassName} overflow-hidden rounded-[6px] bg-[#faf3e0]`}>
          {children}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b-2xl bg-[#faf3e0] px-5 py-3" aria-hidden>
        <div className="space-y-1">
          <span className="block h-[2px] w-4 bg-black" />
          <span className="block h-[2px] w-4 bg-black" />
          <span className="block h-[2px] w-4 bg-black" />
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-black">
          <span className="h-2 w-2 bg-black" />
        </span>
        <div className="flex gap-[3px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="h-3.5 w-[3px] rounded-[1px] border border-black bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Folder-tab browser bar: a tab poking up from the top-left of an address
// bar with a favorite star and two tab dots.
function BrowserTabFrame({ children, className, style, aspectClassName }: FrameProps) {
  return (
    <div style={style} className={`relative w-full ${className ?? ""}`}>
      <div
        className="absolute -top-3 left-5 h-4 w-10 rounded-t-md border-[3px] border-b-0 border-black bg-[#faf3e0]"
        aria-hidden
      />
      <div className="relative rounded-lg border-[3px] border-black bg-[#faf3e0] shadow-[7px_7px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2 border-b-[3px] border-black px-3 py-2" aria-hidden>
          <span className="text-xs leading-none">★</span>
          <span className="h-3 flex-1 rounded-full border-[1.5px] border-black bg-white" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-black" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-black" />
        </div>
        <div className={`${aspectClassName} overflow-hidden bg-white p-1.5`}>
          <div className="h-full w-full overflow-hidden rounded-sm border-[1.5px] border-black">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// App window with a solid black side-tab protruding from the right edge.
function BlackTabFrame({ children, className, style, aspectClassName }: FrameProps) {
  return (
    <div style={style} className={`relative w-full ${className ?? ""}`}>
      <div className="rounded-lg border-[3px] border-black bg-[#faf3e0] shadow-[7px_7px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3 border-b-[3px] border-black px-3 py-2" aria-hidden>
          <span className="text-xs leading-none">✕</span>
          <span className="h-2.5 w-2.5 border-[1.5px] border-black" />
          <span className="text-sm leading-none">–</span>
        </div>
        <div className={`${aspectClassName} overflow-hidden bg-white`}>{children}</div>
      </div>
      <span className="absolute -right-1 top-1/2 h-8 w-2 -translate-y-1/2 bg-black" aria-hidden />
    </div>
  );
}

const FRAME_BY_VARIANT: Record<BorderedFrameVariant, (props: FrameProps) => JSX.Element> = {
  window: WindowFrame,
  crt: CrtFrame,
  browserTab: BrowserTabFrame,
  blackTab: BlackTabFrame,
};

function FrameImage({
  image,
  placeholderLabel,
}: {
  image?: BorderedFrameImage;
  placeholderLabel?: string;
}) {
  if (!image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#faf3e0] px-4 text-center">
        <span className="font-serif text-xs italic text-neutral-500">
          {placeholderLabel ? `${placeholderLabel} — image coming soon` : "Image coming soon"}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={withBasePath(image.src)} alt={image.alt} className="h-full w-full object-cover" />
  );
}

type BorderedFrameProps = {
  variant: BorderedFrameVariant;
  image?: BorderedFrameImage;
  placeholderLabel?: string;
  rotateDeg?: number;
  offsetX?: number;
  offsetY?: number;
  aspectClassName?: string;
  className?: string;
  children?: ReactNode;
};

export default function BorderedFrame({
  variant,
  image,
  placeholderLabel,
  rotateDeg = 0,
  offsetX = 0,
  offsetY = 0,
  aspectClassName = "aspect-[4/3]",
  className,
  children,
}: BorderedFrameProps) {
  const Frame = FRAME_BY_VARIANT[variant];
  const style: CSSProperties = {
    transform: `rotate(${rotateDeg}deg) translate(${offsetX}px, ${offsetY}px)`,
  };

  return (
    <Frame style={style} className={className} aspectClassName={aspectClassName}>
      {children ?? <FrameImage image={image} placeholderLabel={placeholderLabel} />}
    </Frame>
  );
}
