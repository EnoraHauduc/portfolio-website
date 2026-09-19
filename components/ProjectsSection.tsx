import EntryRow from "./EntryRow";
import { POSTS, type Post } from "@/lib/posts";

// A project with no body of its own renders its description as the detail
// page, so linking to it would just repeat the card.
function hasDetailPage(post: Post) {
  return Boolean(post.body || post.video || post.links || post.gallery);
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Projects</h2>
      <div className="mt-10">
        {POSTS.map((post) => (
          <EntryRow
            key={post.slug}
            href={hasDetailPage(post) ? `/projects/${post.slug}` : undefined}
            category={post.category}
            title={post.title}
            description={post.description}
            seed={post.slug}
            border={post.border}
            image={post.images?.[0] ?? post.image}
            hasVideo={Boolean(post.video)}
          />
        ))}
      </div>
    </section>
  );
}
