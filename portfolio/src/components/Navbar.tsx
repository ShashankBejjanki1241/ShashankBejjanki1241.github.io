"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">Shashank.dev</Link>
        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <ul className="hidden sm:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden px-4 pb-3 space-y-2 bg-black/40">
          {links.map(l => (
            <li key={l.href}>
              <a onClick={() => setOpen(false)} href={l.href} className="block py-2">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
