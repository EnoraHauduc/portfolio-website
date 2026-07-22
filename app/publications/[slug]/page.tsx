import type { Metadata } from "next";
import EntryDetail from "@/components/EntryDetail";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getPublicationBySlug, PUBLICATIONS } from "@/lib/publications";

export function generateStaticParams() {
  return PUBLICATIONS.map((pub) => ({ slug: pub.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pub = getPublicationBySlug(params.slug);
  return { title: pub ? `${pub.title} — Enora Hauduc` : "Not found — Enora Hauduc" };
}

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const pub = getPublicationBySlug(params.slug);

  if (!pub) {
    return (
      <main>
        <Navigation />
        <p className="mx-auto max-w-3xl px-6 py-20 sm:px-10">Publication not found.</p>
        <Footer />
      </main>
    );
  }

  return (
    <EntryDetail
      backHref="/#publications"
      backLabel="Back to publications"
      category="Publication"
      title={pub.title}
      body={pub.body}
      seed={pub.slug}
      border={pub.border}
      image={pub.image}
    />
  );
}
