import Link from "next/link";

const linkClass =
  "underline decoration-1 underline-offset-2 transition-opacity hover:opacity-60";

const iconButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-black transition-colors hover:bg-black hover:text-paper";

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
          <span className="mt-6 flex gap-3 not-italic">
            <a
              href="https://www.linkedin.com/in/enorahauduc/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={iconButtonClass}
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href="mailto:enorahauduc@gmail.com"
              aria-label="Email"
              className={iconButtonClass}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="m3 7 9 6.5L21 7" />
              </svg>
            </a>
          </span>
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
