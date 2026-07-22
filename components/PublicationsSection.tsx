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
    id: "ai-bias-in-education-book-chapter",
    title: "AI Bias in Education (Book Chapter)",
    venue: "Lorem ipsum dolor sit amet",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
