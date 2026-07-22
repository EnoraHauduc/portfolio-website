import type { Metadata } from "next";
import Link from "next/link";
import BorderedFrame from "@/components/BorderedFrame";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getPostBySlug, getPostImage, POSTS } from "@/lib/posts";
import { seededFrameTransform } from "@/lib/seededTransform";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  return { title: post ? `${post.title} — Enora Hauduc` : "Not found — Enora Hauduc" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <main>
        <Navigation />
        <p className="mx-auto max-w-3xl px-6 py-20 sm:px-10">Project not found.</p>
        <Footer />
      </main>
    );
  }

  const { rotateDeg, offsetX, offsetY } = seededFrameTransform(post.slug);

  return (
    <main>
      <Navigation />
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
        <Link
          href="/#projects"
          className="text-sm uppercase tracking-wide text-neutral-500 transition-opacity hover:opacity-60"
        >
          ← Back to projects
        </Link>

        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{post.category}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{post.title}</h1>

        <div className="mx-auto mt-10 w-full max-w-md">
          <BorderedFrame
            variant={post.border}
            image={getPostImage(post)}
            placeholderLabel={post.category}
            rotateDeg={rotateDeg}
            offsetX={offsetX}
            offsetY={offsetY}
          />
        </div>

        <div className="mt-12 space-y-5 text-base leading-relaxed text-neutral-800">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
