type BlogPost = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "placeholder-post-one",
    date: "20XX",
    title: "Lorem Ipsum Dolor Sit Amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "placeholder-post-two",
    date: "20XX",
    title: "Ut Enim Ad Minim Veniam",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <h2 className="font-display text-4xl sm:text-5xl">Blog</h2>
      <div className="mt-10">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="grid grid-cols-1 gap-2 border-b-2 border-black py-8 first:pt-0 last:border-b-0 sm:grid-cols-4 sm:gap-6"
          >
            <p className="text-sm uppercase tracking-wide text-neutral-500 sm:col-span-1">
              {post.date}
            </p>
            <div className="sm:col-span-3">
              <h3 className="font-display text-xl">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
