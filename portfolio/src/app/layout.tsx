import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashank | Software Engineer",
  description: "Portfolio of Shashank — projects, skills, and contact.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Shashank | Software Engineer",
    description: "Projects, skills, and contact in one place.",
    url: "https://shashankbejjanki1241.github.io",
    siteName: "Shashank Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank | Software Engineer",
    description: "Projects, skills, and contact.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
