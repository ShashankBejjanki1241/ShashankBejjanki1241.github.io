import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { skills } from "@/content/skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-white/70 mt-2">Problem → Solution → Impact. Click through for code and demos.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{s.name}</h3>
                  <span className="text-xs text-indigo-300">{s.level}</span>
                </div>
                <p className="text-xs text-white/70 mt-1">{s.category}</p>
                {s.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            I build fast, reliable experiences across the stack. I care about developer ergonomics,
            measurable impact, and clean architecture.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-white/80">
            Reach me via <a className="underline" href="mailto:you@example.com">email</a>,{" "}
            <a className="underline" href="https://github.com/your-username" target="_blank">GitHub</a>, or{" "}
            <a className="underline" href="https://linkedin.com/in/your-handle" target="_blank">LinkedIn</a>.
          </p>
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
        © {new Date().getFullYear()} Shashank Bejjanki
      </footer>
    </>
  );
}