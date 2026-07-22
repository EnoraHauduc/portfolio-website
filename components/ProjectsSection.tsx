import EntryRow from "./EntryRow";
import { POSTS } from "@/lib/posts";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Projects</h2>
      <p className="mt-4 max-w-xl font-serif text-lg italic text-neutral-600">
        A running log of things I&apos;ve built, written, and spoken about.
      </p>
      <div className="mt-10">
        {POSTS.map((post) => (
          <EntryRow
            key={post.slug}
            href={`/projects/${post.slug}`}
            category={post.category}
            title={post.title}
            description={post.description}
            seed={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
