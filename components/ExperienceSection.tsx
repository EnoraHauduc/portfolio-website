type ExperienceEntry = {
  id: string;
  dates: string;
  role: string;
  org: string;
  description?: string;
  highlights?: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "GFO-X",
    dates: "2026",
    role: "AI Intern",
    org: "GFO-X - Regulated Digital Assets Exchange and Clearing",
    highlights: [
      "Co-directed the development of an internal dashboard, delivering real-time visibility into company-wide AI token usage and spending trends across 6 providers for 30+ users, informing strategic resource allocation",
      "Worked across the full stack: integrated multiple APIs and normalised data across endpoints into a unified pipeline, implemented a lightweight database backend, and built a Python-based frontend using Streamlit",
      "Automated data collection with scheduled cron jobs and applied UX research and data-visualisation best practice to the dashboard design",
      "Presented the final product and technical approach to the entire company, covering design decisions, safeguards and long-term maintainability",
    ],
  },
  {
    id: "Bequant",
    dates: "2026",
    role: "AI Intern",
    org: "Bequant – Crypto Assets Investment and Payment Services",
    highlights: [
      "Led the design and integration of an internal dashboard, consolidating client messages from multiple chats into a single interface, enhancing leadership's real-time visibility into open queries and identifying recurring pain points",
      "Streamlined data operations by engineering robust MCP integrations and architecting a relational Notion schema, automating data collection and normalisation to significantly enhance data quality and accessibility",
      "Developed self-correcting logic using derived formula fields to prevent tracked indicators drifting out of sync with underlying data",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Experience</h2>
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
              {entry.description && (
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{entry.description}</p>
              )}
              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
