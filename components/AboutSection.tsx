export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10"
    >
      <h2 className="font-display text-4xl sm:text-5xl">About</h2>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <p className="font-serif text-2xl italic leading-snug text-neutral-700 md:col-span-1">
          Mathematics student with a growing focus on AI.
        </p>
        <div className="space-y-4 text-base leading-relaxed text-neutral-800 md:col-span-2">
          <p>
            I&apos;m a mathematics student interested in the theory and
            practice of artificial intelligence — from the underlying
            optimization and probability to building systems that put it to
            use.
          </p>
          <p>
            I like problems that reward careful thinking: proofs, models,
            and the occasional side project that turns an abstract idea into
            something you can actually use.
          </p>
        </div>
      </div>
    </section>
  );
}
