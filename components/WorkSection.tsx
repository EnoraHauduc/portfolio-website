type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of the project, the problem it solved, and the tools involved.",
    tags: ["Python", "Machine Learning"],
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of the project, the problem it solved, and the tools involved.",
    tags: ["TypeScript", "Research"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of the project, the problem it solved, and the tools involved.",
    tags: ["Mathematics", "Data"],
    href: "#",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Work</h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group block rounded-lg border-2 border-black bg-white p-6 transition-transform hover:-translate-y-1"
          >
            <h3 className="font-display text-2xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-black px-3 py-1 text-xs uppercase tracking-wide"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
