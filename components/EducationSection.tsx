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
    dates: "2012 – 2026",
    school: "Haberdashers' Girls' School",
    program: "A-Levels: Mathematics, Further Mathematics, Computer Science",
    description:
      "GCSEs: 9s (A**) in all 10 subjects, including Maths, English Language (Distinction), and Triple Science.",
    highlights: [
      "Mathematical Olympiad for Girls - Distinction - 'Best in School'",
      "Co-authored a book on Generative AI in the Classroom",
      "Published in Habs' AI guidance for teachers; AI policy team; HabsLab Steering Group",
      "ERP: 2nd place in STEM across both Haberdashers' schools - 'Harvesting Intelligence: How Computer Vision is Transforming Food Security in Agriculture'",
      "Sixth Form Digital Lead '24-25 – Leading and implementing school-wide digital innovation",
      "TEDxYouth@HabsElstree Speaker",
      "Prefect for Year 10 – Academic and pastoral mentoring for over 100 students",
      "Maths Mentor '24-25 – Supporting Year 11s with GCSE concepts and exam techniques",
      "Leader of Neurodiversity Society '23-25 - Running weekly sessions and organising whole-school diversity weeks for over 1000 students and staff",
      "Maths Society Team - Organising activities to encourage engagement with maths beyond the curriculum",
    ],
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
