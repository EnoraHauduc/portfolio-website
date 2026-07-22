import Link from "next/link";

type Publication = {
  id: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  href?: string;
};

const PUBLICATIONS: Publication[] = [
  {
    id: "book-chapter",
    title: "Generative AI, Bias & Policy — Book Chapter",
    venue: "Edited volume on AI in institutional settings",
    year: "20XX",
    description:
      "A practitioner-focused chapter co-authored on generative AI, bias, and policy in institutional settings.",
    href: "/projects/book-chapter-generative-ai-bias",
  },
  {
    id: "cv-occasional-paper",
    title: "Computer Vision Applications in Agriculture",
    venue: "School occasional paper series",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "placeholder-publication",
    title: "Placeholder Publication Title",
    venue: "Placeholder Journal / Conference",
    year: "20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Publications</h2>
      <ol className="mt-10 space-y-6">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.id} className="rounded-lg border-2 border-black bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {pub.venue} · {pub.year}
            </p>
            <h3 className="mt-1 font-display text-xl">
              {pub.href ? (
                <Link
                  href={pub.href}
                  className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-60"
                >
                  {pub.title}
                </Link>
              ) : (
                pub.title
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{pub.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
