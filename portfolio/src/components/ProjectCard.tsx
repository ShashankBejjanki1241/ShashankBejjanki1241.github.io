import Link from "next/link";
import { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
      {p.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.cover} alt={p.title} className="rounded-xl mb-3 aspect-video object-cover" />
      )}
      <h3 className="text-lg font-semibold">
        <Link href={`/projects/${p.slug}/`} className="hover:underline">{p.title}</Link>
      </h3>
      <p className="mt-1 text-sm text-white/80">{p.summary}</p>
      {p.impact && <p className="mt-2 text-xs text-indigo-300">{p.impact}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.repo && <a className="text-sm underline" href={p.repo} target="_blank">Code</a>}
        {p.demo && <a className="text-sm underline" href={p.demo} target="_blank">Live</a>}
      </div>
    </article>
  );
}
