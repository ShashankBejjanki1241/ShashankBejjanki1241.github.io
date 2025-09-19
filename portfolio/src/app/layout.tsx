import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashank | Software Engineer",
  description: "Portfolio of Shashank — projects, skills, and contact.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Shashank | Software Engineer",
    description: "Projects, skills, and contact in one place.",
    url: "https://your-domain-or-github-pages-url",
    siteName: "Shashank Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank | Software Engineer",
    description: "Projects, skills, and contact.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
