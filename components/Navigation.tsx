"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#publications", label: "Publications" },
  { href: "/#speaking", label: "Speaking" },
  { href: "/#experience", label: "Experience" },
  { href: "/#blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const linkClass =
  "text-sm font-medium uppercase tracking-wide text-black transition-opacity hover:opacity-60";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-black bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-serif text-lg italic">
          Enora Hauduc
        </Link>

        <ul className="hidden gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span aria-hidden className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-full bg-black transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-black transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-black transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t-2 border-black bg-paper px-6 pb-4 sm:px-10 lg:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.href} className="border-b border-black/15 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkClass} block py-4 text-base`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
