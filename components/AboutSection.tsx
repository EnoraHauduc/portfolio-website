export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10"
    >
      <h2 className="font-display text-4xl sm:text-5xl">About</h2>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <p className="font-serif text-2xl italic leading-snug text-neutral-700 md:col-span-1">
          Hi, I&apos;m Enora Hauduc - an incoming mathematics student at UCL with a
          keen interest in all things maths and AI!
        </p>
        <div className="space-y-4 text-base leading-relaxed text-neutral-800 md:col-span-2">
          <p>
            My interests lie at the intersection of mathematics, AI, and ethics. I enjoy exploring how mathematical concepts underpin AI algorithms, and how these algorithms can be applied to solve real-world problems while considering their ethical implications.
          </p>
          <p>
            On the practical side,I&apos;ve co-founded Beri-Labs, an ed-tech startup building
            RAG-powered tools that let students query their school&apos;s
            own documents in natural language, and my research on computer
            vision applications in agriculture was published as an
            occasional paper at my school.
          </p>
          <p>
            Whilst on the ethics side, I co-authored a practitioner-focused
            chapter in a published book on generative AI, bias, and policy
            in institutional settings and spoke in a panel on algorithmic
            bias in education at the Wellington Festival of Education.
          </p>
          <p>
            Beyond AI, I enjoy pushing myself out of my comfort zone and so I recently gave a TEDx talk on the philosophy of time
            perception, exploring how cognitive and physical models of
            time diverge, and what that reveals about the limits of human
            intuition.
          </p>
          <p>
            
            I&apos;m always keen to learn more from everyone and am actively seeking work
            experience and internships in mathematical and AI-related
            fields. Let&apos;s connect! Feel free to drop me an email at{" "}
            <a
              href="mailto:enorahauduc@gmail.com"
              className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-60"
            >
              enorahauduc@gmail.com
            </a>{" "}
            or view my projects below.
          </p>
        </div>
      </div>
    </section>
  );
}
