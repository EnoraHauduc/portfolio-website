import type { Metadata } from "next";
import EntryDetail from "@/components/EntryDetail";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getSpeakingBySlug, SPEAKING } from "@/lib/speaking";

export function generateStaticParams() {
  return SPEAKING.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getSpeakingBySlug(params.slug);
  return { title: entry ? `${entry.title} — Enora Hauduc` : "Not found — Enora Hauduc" };
}

export default function SpeakingPage({ params }: { params: { slug: string } }) {
  const entry = getSpeakingBySlug(params.slug);

  if (!entry) {
    return (
      <main>
        <Navigation />
        <p className="mx-auto max-w-3xl px-6 py-20 sm:px-10">Not found.</p>
        <Footer />
      </main>
    );
  }

  return (
    <EntryDetail
      backHref="/#speaking"
      backLabel="Back to speaking"
      category="Speaking"
      title={entry.title}
      body={entry.body}
      seed={entry.slug}
      border={entry.border}
      image={entry.image}
    />
  );
}
