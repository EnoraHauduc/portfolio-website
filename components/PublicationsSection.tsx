import EntryRow from "./EntryRow";
import { PUBLICATIONS } from "@/lib/publications";

export default function PublicationsSection() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Publications</h2>
      <div className="mt-10">
        {PUBLICATIONS.map((pub) => (
          <EntryRow
            key={pub.slug}
            href={`/publications/${pub.slug}`}
            category="Publication"
            title={pub.title}
            description={pub.description}
            seed={pub.slug}
            border={pub.border}
            image={pub.image}
          />
        ))}
      </div>
    </section>
  );
}
