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
    title: "TEDx Talk: The Philosophy of Time Perception",
    venue: "TEDx",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "wellington-festival-panel",
    title: "Wellington Festival of Education — Panel",
    venue: "Wellington Festival of Education",
    year: "20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "gsa-conference-panel",
    title: "Girls' School Association Conference — Panel",
    venue: "Girls' School Association Conference",
    year: "20XX",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "you-make-your-own-luck",
    title: "You Make Your Own Luck (co-delivered talk)",
    venue: "Lorem ipsum dolor sit amet",
    year: "20XX",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
