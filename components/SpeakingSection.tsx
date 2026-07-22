import Link from "next/link";

type SpeakingEngagement = {
  id: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  href?: string;
};

const SPEAKING: SpeakingEngagement[] = [
  {
    id: "tedx-time-perception",
    title: "TEDx Talk — The Philosophy of Time Perception",
    venue: "TEDx",
    year: "20XX",
    description:
      "How cognitive and physical models of time diverge, and what that reveals about the limits of human intuition.",
    href: "/projects/tedx-time-perception",
  },
  {
    id: "wellington-festival-panel",
    title: "Panel — Algorithmic Bias in Education",
    venue: "Wellington Festival of Education",
    year: "20XX",
    description:
      "A panel conversation on algorithmic bias in education, and how AI is reshaping how students are taught.",
  },
  {
    id: "placeholder-speaking",
    title: "Placeholder Speaking Engagement",
    venue: "Placeholder Conference / Event",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function SpeakingSection() {
  return (
    <section id="speaking" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Speaking</h2>
      <ol className="mt-10 space-y-6">
        {SPEAKING.map((engagement) => (
          <li key={engagement.id} className="rounded-lg border-2 border-black bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {engagement.venue} · {engagement.year}
            </p>
            <h3 className="mt-1 font-display text-xl">
              {engagement.href ? (
                <Link
                  href={engagement.href}
                  className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-60"
                >
                  {engagement.title}
                </Link>
              ) : (
                engagement.title
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              {engagement.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
