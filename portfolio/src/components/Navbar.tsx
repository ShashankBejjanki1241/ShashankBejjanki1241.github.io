"use client";

import Link from "next/link";
import { useState } from "react";
import { M, fadeInUp } from "./motion";
import ThemeToggle from "./ThemeToggle";

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
        <M.div {...fadeInUp(0.05)}>
          <Link href="/" className="font-semibold tracking-wide">Shashank.dev</Link>
        </M.div>
        <M.button {...fadeInUp(0.1)} className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</M.button>
        <M.ul {...fadeInUp(0.15)} className="hidden sm:flex items-center gap-6">
          {links.map((l, index) => (
            <M.li key={l.href} {...fadeInUp(0.2 + index * 0.05)}>
              <a href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</a>
            </M.li>
          ))}
          <M.li className="ml-2" {...fadeInUp(0.4)}>
            <ThemeToggle />
          </M.li>
        </M.ul>
      </nav>
      {open && (
        <M.ul 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sm:hidden px-4 pb-3 space-y-2 bg-black/40 overflow-hidden"
        >
          {links.map((l, index) => (
            <M.li 
              key={l.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <a onClick={() => setOpen(false)} href={l.href} className="block py-2">{l.label}</a>
            </M.li>
          ))}
        </M.ul>
      )}
    </header>
  );
}
