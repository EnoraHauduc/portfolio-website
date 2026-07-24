import EntryRow from "./EntryRow";
import { SPEAKING } from "@/lib/speaking";

export default function SpeakingSection() {
  return (
    <section id="speaking" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Speaking</h2>
      <div className="mt-10">
        {SPEAKING.map((entry) => (
          <EntryRow
            key={entry.slug}
            href={`/speaking/${entry.slug}`}
            category="Speaking"
            title={entry.title}
            description={entry.description}
            seed={entry.slug}
            border={entry.border}
            image={entry.image}
          />
        ))}
      </div>
    </section>
  );
}
