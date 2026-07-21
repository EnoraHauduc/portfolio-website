export default function Footer() {
  return (
    <footer className="border-t-2 border-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-600 sm:flex-row sm:px-10">
        <p className="font-serif italic">
          &copy; {new Date().getFullYear()} Enora Hauduc
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@example.com"
            className="transition-opacity hover:opacity-60"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
