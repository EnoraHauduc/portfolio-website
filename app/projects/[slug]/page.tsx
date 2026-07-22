import type { Metadata } from "next";
import EntryDetail from "@/components/EntryDetail";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getPostBySlug, POSTS } from "@/lib/posts";

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

  return (
    <EntryDetail
      backHref="/#projects"
      backLabel="Back to projects"
      category={post.category}
      title={post.title}
      body={post.body}
      seed={post.slug}
    />
  );
}
