const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-black bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#" className="font-serif text-lg italic">
          Enora Hauduc
        </a>
        <ul className="flex gap-6 sm:gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-black transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
