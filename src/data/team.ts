import { placeholder } from "@/lib/placeholder";

export interface Member {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  photo: string;
  github?: string;
  linkedin?: string;
}

export const team: Member[] = [
  {
    name: "Arjun Mehta",
    role: "Co-founder · Android Lead",
    bio: "Twelve years building consumer Android. Previously led mobile at a unicorn fintech. Loves Kotlin, hates flaky tests.",
    expertise: ["Kotlin", "Jetpack Compose", "Architecture", "Wear OS"],
    photo: placeholder.team("AM", 0),
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sneha Iyer",
    role: "Co-founder · Web Lead",
    bio: "Builds frontends that survive contact with reality. Next.js, performance, and design systems are her favorite stack.",
    expertise: ["Next.js", "TypeScript", "Design systems", "Web perf"],
    photo: placeholder.team("SI", 1),
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohit Kapoor",
    role: "Principal Engineer · ML",
    bio: "Ships LLM features that don't ruin latency. Spent five years inside model-serving infra before joining us.",
    expertise: ["TensorFlow Lite", "ML Kit", "Gemini", "Edge inference"],
    photo: placeholder.team("RK", 2),
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Shah",
    role: "Engineering Manager",
    bio: "Runs the delivery side. Believes a tight weekly demo cadence beats every project-management framework ever invented.",
    expertise: ["Delivery", "Stakeholder mgmt", "Roadmapping"],
    photo: placeholder.team("PS", 3),
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kabir Singh",
    role: "Senior Backend Engineer",
    bio: "Distributed systems and payments. Has rolled back exactly one production deploy in seven years and still won't talk about it.",
    expertise: ["Node.js", "Postgres", "Kafka", "AWS"],
    photo: placeholder.team("KS", 4),
    github: "https://github.com",
  },
  {
    name: "Ananya Rao",
    role: "Product Designer",
    bio: "Bridges PMs and engineers. Designs in Figma, prototypes in code, doesn't believe in static design files.",
    expertise: ["Product design", "Design tokens", "Prototyping"],
    photo: placeholder.team("AR", 5),
    linkedin: "https://linkedin.com",
  },
];
