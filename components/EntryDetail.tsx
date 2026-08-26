import Link from "next/link";
import BorderedFrame, { type BorderedFrameVariant } from "./BorderedFrame";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { seededFrameTransform } from "@/lib/seededTransform";

type EntryDetailProps = {
  backHref: string;
  backLabel: string;
  category: string;
  title: string;
  body: string[];
  seed: string;
  border?: BorderedFrameVariant;
  image?: { src: string; alt?: string };
  video?: { youtubeId: string };
};

export default function EntryDetail({
  backHref,
  backLabel,
  category,
  title,
  body,
  seed,
  border,
  image,
  video,
}: EntryDetailProps) {
  const transform = border ? seededFrameTransform(seed) : null;

  return (
    <main>
      <Navigation />
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
        <Link
          href={backHref}
          className="text-sm uppercase tracking-wide text-neutral-500 transition-opacity hover:opacity-60"
        >
          ← {backLabel}
        </Link>

        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{category}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{title}</h1>

        {border && transform && (
          <div className={`mx-auto mt-10 w-full ${video ? "max-w-3xl" : "max-w-md"}`}>
            <BorderedFrame
              variant={border}
              image={
                !video && image
                  ? { src: image.src, alt: image.alt || `${title} — preview image` }
                  : undefined
              }
              placeholderLabel={category}
              rotateDeg={video ? 0 : transform.rotateDeg}
              offsetX={video ? 0 : transform.offsetX}
              offsetY={video ? 0 : transform.offsetY}
              aspectClassName={video ? "aspect-video" : "aspect-[4/3]"}
            >
              {video && (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </BorderedFrame>
          </div>
        )}

        <div className={`space-y-5 text-base leading-relaxed text-neutral-800 ${border ? "mt-12" : "mt-10"}`}>
          {body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
