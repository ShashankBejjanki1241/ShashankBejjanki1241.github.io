export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm uppercase tracking-widest text-white/60">Hello, I&apos;m</p>
      <h1 className="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
        Shashank <span className="text-indigo-400">Bejjanki</span>
      </h1>
      <p className="mt-5 max-w-2xl text-white/80">
        Full-stack developer crafting high-performance web apps and clean developer experiences.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold hover:bg-indigo-400">View Projects</a>
        <a href="/Shashank-Resume.pdf" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">Download Resume</a>
      </div>
    </section>
  );
}
