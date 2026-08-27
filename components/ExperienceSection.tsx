type ExperienceEntry = {
  id: string;
  dates: string;
  role: string;
  company: string;
  companyUrl?: string;
  companyDescription?: string;
  description?: string;
  highlights?: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "GFO-X",
    dates: "2 Weeks - July 2026",
    role: "AI Intern",
    company: "GFO-X",
    companyUrl: "https://www.gfo-x.com/",
    companyDescription: "Regulated Digital Assets Exchange and Clearing",
    highlights: [
      "Co-directed the development of an internal dashboard, delivering real-time visibility into company-wide AI token usage and spending trends across 6 providers for 30+ users, informing strategic resource allocation",
      "Worked across the full stack: integrated multiple APIs and normalised data across endpoints into a unified pipeline, implemented a lightweight database backend, and built a Python-based frontend using Streamlit",
      "Automated data collection with scheduled cron jobs and applied UX research and data-visualisation best practice to the dashboard design",
      "Presented the final product and technical approach to the entire company, covering design decisions, safeguards and long-term maintainability",
    ],
  },
  {
    id: "Bequant",
    dates: "2 Weeks - August 2026",
    role: "AI Intern",
    company: "Bequant",
    companyUrl: "https://bequant.io/",
    companyDescription: "Crypto Assets Investment and Payment Services",
    highlights: [
      "Led the design and integration of an internal dashboard, consolidating client messages from multiple chats into a single interface, enhancing leadership's real-time visibility into open queries and identifying recurring pain points",
      "Streamlined data operations by engineering robust MCP integrations and architecting a relational Notion schema, automating data collection and normalisation to significantly enhance data quality and accessibility",
      "Developed self-correcting logic using derived formula fields to prevent tracked indicators drifting out of sync with underlying data",
    ],
  },
  {
    id: "UP3",
    dates: "1 Week - October 2025",
    role: "Work Experience",
    company: "UP3",
    companyUrl: "https://up3.co.uk/",
    companyDescription: "Dedicated ServiceNow Elite Partner specialising services for the ServiceNow platform",
    highlights: [
      "Selected from the internship cohort based on performance to complete post-programme analysis of UP3’s website, producing a 5-page accessibility review with actionable recommendations",
      "Presented technical and ethical findings to a non-technical consulting audience; earned a ServiceNow Micro-Certification and AI/Agentic AI badges",
    ],
  },
  {
    id: "Ocado Technology",
    dates: "1 Week - July 2024",
    role: "Work Experience",
    company: "Ocado Technology",
    companyUrl: "https://www.ocadotechnology.com/",
    companyDescription: "Innovative technology solutions for the retail industry",
    highlights: [
      "Designed a spatial optimisation algorithm for van zoning (greedy approach) using H3 indexing, graph-based logistics networks (NetworkX), and quantitative analysis (Pandas), applying computational geometry to a real-world last-mile logistics problem",
    ],
  },
  {
    id: "Code for Life",
    dates: "1 Week - July 2024",
    role: "Work Experience",
    company: "Code for Life",
    companyUrl: "https://www.codeforlife.education/",
    companyDescription: "Educational technology company focused on teaching programming skills to students",
    highlights: [
      "Improved an educational coding game via bug triage and testing on GitHub; implemented Google Tag Manager and Analytics",
      "	Analysed usage data in BigQuery and Looker to evaluate feature effectiveness, presenting design, data, and development insights",
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
                {entry.role} -{" "}
                {entry.companyUrl ? (
                  <a
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-neutral-600"
                  >
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </h3>
              {entry.companyDescription && (
                <p className="font-serif italic text-neutral-600">{entry.companyDescription}</p>
              )}
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
