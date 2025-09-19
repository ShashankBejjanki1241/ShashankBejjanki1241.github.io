import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-3xl font-bold">404 — Page not found</h1>
      <p className="mt-3 text-white/70">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block underline">Go home</Link>
    </main>
  );
}
