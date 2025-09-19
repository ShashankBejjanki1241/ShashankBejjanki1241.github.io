"use client";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion, M, fadeInUp } from "./motion";
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false, loading: () => <div className="h-[340px] sm:h-[420px] rounded-2xl border border-white/10 bg-white/[0.03]" /> });

export default function Hero() {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <M.p className="text-sm uppercase tracking-widest text-white/60" {...fadeInUp(0.02)}>Hello, I&apos;m</M.p>
      <M.h1 className="mt-2 text-4xl sm:text-6xl font-bold leading-tight" {...fadeInUp(0.06)}>
        Shashank <span className="text-indigo-400">Bejjanki</span>
      </M.h1>
      <M.p className="mt-5 max-w-2xl text-white/80" {...fadeInUp(0.1)}>
        Full-stack developer crafting high-performance web apps and clean developer experiences.
      </M.p>
      <M.div className="mt-8 flex gap-4" {...fadeInUp(0.14)}>
        <a href="#projects" className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold hover:bg-indigo-400">View Projects</a>
        <a href="/Shashank-Resume.pdf" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">Download Resume</a>
      </M.div>

      <div className="mt-10">
        {reduce ? (
          <div className="h-[340px] sm:h-[420px] rounded-2xl border border-white/10 grid place-items-center bg-gradient-to-b from-white/5 to-transparent">
            <p className="text-white/60 text-sm">3D disabled for reduced motion</p>
          </div>
        ) : (
          <Hero3D />
        )}
      </div>
    </section>
  );
}
