import Link from "next/link";
import BorderedFrame, { type BorderedFrameVariant } from "./BorderedFrame";
import { seededFrameTransform } from "@/lib/seededTransform";

type EntryRowProps = {
  href: string;
  category: string;
  title: string;
  description: string;
  seed: string;
  border?: BorderedFrameVariant;
  image?: { src: string; alt?: string };
};

export default function EntryRow({
  href,
  category,
  title,
  description,
  seed,
  border,
  image,
}: EntryRowProps) {
  const transform = border ? seededFrameTransform(seed) : null;

  return (
    <Link
      href={href}
      className="group flex flex-col gap-6 border-b-2 border-black py-10 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
    >
      <div className={border ? "sm:max-w-lg" : undefined}>
        <p className="text-xs uppercase tracking-wide text-neutral-500">{category}</p>
        <h3 className="mt-1 font-display text-2xl transition-opacity group-hover:opacity-60 sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{description}</p>
      </div>

      {border && transform && (
        <div className="w-40 shrink-0 self-center sm:w-48">
          <BorderedFrame
            variant={border}
            image={image ? { src: image.src, alt: image.alt || `${title} — preview image` } : undefined}
            placeholderLabel={category}
            rotateDeg={transform.rotateDeg}
            offsetX={transform.offsetX}
            offsetY={transform.offsetY}
          />
        </div>
      )}
    </Link>
  );
}
