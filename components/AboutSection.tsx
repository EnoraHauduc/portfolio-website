import Link from "next/link";

const linkClass =
  "underline decoration-1 underline-offset-2 transition-opacity hover:opacity-60";

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
            I&apos;m a mathematics student at UCL interested in the intersection
            of <strong className="font-semibold">mathematics, AI and ethics</strong>: how the mathematics underpinning AI
            algorithms works, and how those algorithms can be applied to
            real-world problems responsibly.
          </p>
          <p>
            I co-founded{" "}
            <Link href="/projects/beri-labs" className={linkClass}>
              Beri-Labs
            </Link>
            , which builds retrieval-augmented tools that let school staff and
            students query their school&apos;s own documents in natural
            language, and my team placed <strong className="font-semibold">2nd out of 300</strong> at the AI.WOMEN
            Hackathon in Hamburg with{" "}
            <Link
              href="/projects/safeway-ai-women-hackathon"
              className={linkClass}
            >
              SafeWay
            </Link>
            , a routing app that finds the safest walk home rather than the
            fastest.
          </p>
          <p>
            I also <strong className="font-semibold">speak and write about AI in education</strong>. I{" "}
            <Link
              href="/publications/ai-bias-in-education-book-chapter"
              className={linkClass}
            >
              co-authored a chapter
            </Link>{" "}
            in a published book on generative AI and bias as its{" "}
            <strong className="font-semibold">only student contributor</strong>, spoke on panels at the{" "}
            <Link
              href="/speaking/wellington-festival-panel"
              className={linkClass}
            >
              Wellington Festival of Education
            </Link>{" "}
            and the{" "}
            <Link href="/speaking/gsa-conference-panel" className={linkClass}>
              Girls&apos; School Association Conference
            </Link>
            , and <strong className="font-semibold">placed 2nd out of 275+ students</strong> in the STEM Prize for my{" "}
            <Link
              href="/publications/extended-research-project"
              className={linkClass}
            >
              extended research project
            </Link>{" "}
            on computer vision for food security.
          </p>
          <p>
            Beyond AI, I enjoy pushing myself out of my comfort zone, so I
            recently gave a{" "}
            <Link href="/speaking/tedx-time-perception" className={linkClass}>
              <strong className="font-semibold">TEDx talk</strong>
            </Link>{" "}
            on the philosophy of time perception, exploring how cognitive and
            physical models of time diverge, and what that reveals about the
            limits of human intuition.
          </p>
          <p>
            I&apos;m always keen to learn more from everyone and am <strong className="font-semibold">
              actively seeking work experience and internships in
              mathematical and AI-related fields
            </strong>. Let&apos;s connect! Feel free to drop me an
            email at{" "}
            <a href="mailto:enorahauduc@gmail.com" className={linkClass}>
              enorahauduc@gmail.com
            </a>{" "}
            or view my projects below.
          </p>
        </div>
      </div>
    </section>
  );
}
