import Link from "next/link";
import BorderedFrame, { type BorderedFrameVariant } from "./BorderedFrame";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { withBasePath } from "@/lib/basePath";
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
  images?: { src: string; alt?: string }[];
  video?: { youtubeId: string };
  gallery?: { src: string; alt: string }[];
  links?: { label: string; href: string }[];
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
  images,
  video,
  gallery,
  links,
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
              images={
                !video && images && images.length > 0
                  ? images.map((img) => ({ src: img.src, alt: img.alt || `${title} — preview image` }))
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
          {body.map((paragraph, i) =>
            /^https?:\/\/\S+$/.test(paragraph) ? (
              <p key={i}>
                <a
                  href={paragraph}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all underline underline-offset-2 hover:text-neutral-600"
                >
                  {paragraph}
                </a>
              </p>
            ) : (
              <p key={i}>{paragraph}</p>
            ),
          )}
        </div>

        {links && links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-black px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-black hover:text-paper"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {gallery.map((photo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo.src}
                src={withBasePath(photo.src)}
                alt={photo.alt}
                className={`aspect-[4/3] w-full rounded-lg border-[3px] border-black object-cover shadow-[7px_7px_0_0_rgba(0,0,0,1)] ${
                  i === 0 && gallery.length % 2 === 1 ? "sm:col-span-2" : ""
                }`}
              />
            ))}
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}
