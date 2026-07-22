const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#speaking", label: "Speaking" },
  { href: "#experience", label: "Experience" },
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
        <ul className="flex gap-4 overflow-x-auto whitespace-nowrap sm:gap-6">
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
