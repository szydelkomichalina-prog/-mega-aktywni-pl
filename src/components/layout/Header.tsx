"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Strona Główna" },
  { href: "/o-nas", label: "O Nas" },
  { href: "/zajecia", label: "Zajęcia" },
  { href: "/plywanie", label: "Pływanie" },
  { href: "/obozy", label: "Obozy" },
  { href: "/klub", label: "Klub" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-brand-blue">
          <span className="text-2xl">🏅</span>
          <span>Mega Aktywni</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-brand-dark/80 hover:text-brand-blue rounded-lg hover:bg-brand-blue-bg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-blue-med transition-colors shadow-sm"
        >
          Zapisz dziecko
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-brand-dark"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-brand-dark/80 hover:text-brand-blue border-b border-gray-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center px-5 py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl"
          >
            Zapisz dziecko
          </Link>
        </nav>
      )}
    </header>
  );
}
