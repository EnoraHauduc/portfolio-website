type ExperienceEntry = {
  id: string;
  dates: string;
  role: string;
  org: string;
  description: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "beri-labs",
    dates: "20XX — Present",
    role: "Co-Founder",
    org: "Beri-Labs",
    description:
      "Building RAG-powered tools that let students query their school's own documents in natural language.",
  },
  {
    id: "placeholder-internship",
    dates: "20XX",
    role: "Placeholder Role",
    org: "Placeholder Organization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "placeholder-research",
    dates: "20XX",
    role: "Placeholder Research Assistant",
    org: "Placeholder Department",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Experience Blog</h2>
      <div className="mt-10">
        {EXPERIENCE.map((entry) => (
          <div
            key={entry.id}
            className="grid grid-cols-1 gap-2 border-b-2 border-black py-8 first:pt-0 last:border-b-0 sm:grid-cols-4 sm:gap-6"
          >
            <p className="text-sm uppercase tracking-wide text-neutral-500 sm:col-span-1">
              {entry.dates}
            </p>
            <div className="sm:col-span-3">
              <h3 className="font-display text-xl">
                {entry.role} · {entry.org}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
