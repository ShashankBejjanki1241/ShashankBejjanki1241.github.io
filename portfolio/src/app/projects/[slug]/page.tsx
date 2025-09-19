import Link from "next/link";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  return {
    title: p ? `${p.title} | Shashank` : "Project | Shashank",
    description: p?.summary ?? "Project details",
    openGraph: { images: p?.cover ? [{ url: p.cover }] : undefined }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug) as Project | undefined;

  if (!p) return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <Link className="underline mt-4 inline-block" href="/#projects">Back to projects</Link>
    </main>
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link className="underline text-sm" href="/#projects">← Back</Link>
      <h1 className="mt-3 text-3xl font-bold">{p.title}</h1>
      <p className="mt-2 text-white/80">{p.summary}</p>

      {p.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.cover} alt={p.title} className="rounded-xl mt-6 aspect-video object-cover" />
      )}

      {p.impact && <p className="mt-4 text-indigo-300 text-sm">{p.impact}</p>}

      {p.highlights?.length ? (
        <ul className="mt-6 list-disc pl-5 space-y-2 text-white/85">
          {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {p.repo && <a className="underline" href={p.repo} target="_blank">Code</a>}
        {p.demo && <a className="underline" href={p.demo} target="_blank">Live</a>}
      </div>
    </main>
  );
}
