type EducationEntry = {
  id: string;
  dates: string;
  school: string;
  program: string;
  description: string;
  highlights: string[];
};

const EDUCATION: EducationEntry[] = [
  {
    id: "habs-girls-school",
    dates: "20XX — 20XX",
    school: "Haberdashers' Girls' School",
    program: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Education</h2>
      <div className="mt-10">
        {EDUCATION.map((entry) => (
          <div
            key={entry.id}
            className="grid grid-cols-1 gap-2 border-b-2 border-black py-8 first:pt-0 last:border-b-0 sm:grid-cols-4 sm:gap-6"
          >
            <p className="text-sm uppercase tracking-wide text-neutral-500 sm:col-span-1">
              {entry.dates}
            </p>
            <div className="sm:col-span-3">
              <h3 className="font-display text-xl">{entry.school}</h3>
              <p className="font-serif italic text-neutral-600">{entry.program}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{entry.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
