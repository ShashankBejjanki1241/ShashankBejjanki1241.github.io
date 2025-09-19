"use client";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "neon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }, []);

  function set(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.dataset.theme = t;
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <button onClick={() => set("dark")} className={`px-2 py-1 rounded ${theme === "dark" ? "bg-white/15" : "bg-white/5"}`}>Dark</button>
      <button onClick={() => set("light")} className={`px-2 py-1 rounded ${theme === "light" ? "bg-white/15" : "bg-white/5"}`}>Light</button>
      <button onClick={() => set("neon")} className={`px-2 py-1 rounded ${theme === "neon" ? "bg-white/15" : "bg-white/5"}`}>Neon</button>
    </div>
  );
}
