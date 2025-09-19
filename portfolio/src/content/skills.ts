export type Skill = {
  name: string;
  level: "Learning" | "Proficient" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "Mobile" | "Cloud" | "AI/ML" | "Tools";
  tags?: string[];
  link?: string;
};

export const skills: Skill[] = [
  { name: "TypeScript", level: "Advanced", category: "Frontend", tags: ["ES2023", "Types"] },
  { name: "React", level: "Advanced", category: "Frontend", tags: ["Hooks", "RSC"] },
  { name: "Next.js", level: "Advanced", category: "Frontend", tags: ["App Router", "SEO"] },
  { name: "Node.js", level: "Advanced", category: "Backend", tags: ["Express", "Fastify"] },
  { name: "Python", level: "Proficient", category: "Backend", tags: ["FastAPI", "Pandas"] },
  { name: "Docker", level: "Proficient", category: "Cloud", tags: ["Multi-stage"] },
  { name: "GitHub Actions", level: "Proficient", category: "Tools", tags: ["CI/CD"] },
  { name: "PostgreSQL", level: "Advanced", category: "Backend", tags: ["Query Optimization"] },
  { name: "MongoDB", level: "Proficient", category: "Backend", tags: ["Aggregation"] },
  { name: "AWS", level: "Proficient", category: "Cloud", tags: ["EC2", "S3", "Lambda"] },
  { name: "Vercel", level: "Advanced", category: "Cloud", tags: ["Deployment"] },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend", tags: ["Responsive Design"] },
  { name: "GraphQL", level: "Proficient", category: "Backend", tags: ["Apollo", "Relay"] },
  { name: "Redis", level: "Proficient", category: "Backend", tags: ["Caching"] },
  { name: "Jest", level: "Advanced", category: "Tools", tags: ["Testing"] },
];
