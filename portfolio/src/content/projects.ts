export type Project = {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
  repo?: string;
  demo?: string;
  impact?: string;   // e.g., "-42% latency, +2k MAU"
  highlights?: string[]; // bullets
  cover?: string;    // /project-images/xyz.png
};

export const projects: Project[] = [
  {
    title: "API Gateway Optimizer",
    slug: "api-gateway-optimizer",
    summary: "Reverse proxy + caching layer that cut tail latency.",
    tech: ["Node.js", "Redis", "Docker", "Nginx"],
    repo: "https://github.com/your/repo",
    demo: "https://demo.example.com",
    impact: "-42% p95 latency, +5k daily requests",
    highlights: [
      "Implemented LRU caching & circuit breakers",
      "Blue/green deploy pipeline on GitHub Actions",
      "Grafana dashboards with custom SLIs",
    ],
    cover: "/project-images/gateway.svg",
  },
  {
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    summary: "Full-stack e-commerce solution with real-time inventory management.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    repo: "https://github.com/your/ecommerce-repo",
    demo: "https://ecommerce-demo.example.com",
    impact: "+300% conversion rate, -60% cart abandonment",
    highlights: [
      "Real-time inventory synchronization",
      "Integrated payment processing with Stripe",
      "Advanced search and filtering capabilities",
    ],
    cover: "/project-images/ecommerce.svg",
  },
  {
    title: "Task Management App",
    slug: "task-management-app",
    summary: "Collaborative task management with team analytics and reporting.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    repo: "https://github.com/your/task-app",
    demo: "https://tasks.example.com",
    impact: "+150% team productivity, -40% missed deadlines",
    highlights: [
      "Real-time collaboration features",
      "Advanced analytics dashboard",
      "Custom workflow automation",
    ],
    cover: "/project-images/tasks.svg",
  },
];
