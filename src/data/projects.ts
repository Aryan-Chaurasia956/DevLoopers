import { placeholder } from "@/lib/placeholder";

export type ProjectCategory = "Web" | "Android" | "Full-Stack" | "SaaS" | "E-commerce" | "Others";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: number;
  client: string;
  cover: string;
  tech: string[];
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  results: { label: string; value: string }[];
  demoUrl?: string;
  playStoreUrl?: string;
  testimonial?: { quote: string; author: string; role: string };
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "avinyax",
    title: "Avinyax",
    tagline: "Full-featured e-commerce & business platform",
    category: "Full-Stack",
    year: 2025,
    client: "Avinyax",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind", "Vercel"],
    problem: "Avinyax needed a comprehensive platform to handle e-commerce, business operations, and customer management from a single product.",
    solution: "We built a full-stack platform on Next.js with integrated payments, inventory, and analytics — shipped in weeks, not months.",
    features: [
      "Multi-vendor product catalog",
      "Stripe-powered checkout & subscriptions",
      "Real-time inventory management",
      "Customer analytics dashboard",
    ],
    challenges: "Balancing feature completeness with performance at scale required careful API design and aggressive caching strategies.",
    results: [
      { label: "Load time", value: "<0.9s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Conversion lift", value: "+34%" },
    ],
    demoUrl: "https://avinyax.com",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1585399000684-d2f72660f092?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=200&h=200&fit=crop",
    ],
  },
  {
    slug: "hrms-avinyax",
    title: "Avinyax HRMS",
    tagline: "Human resource management system for modern teams",
    category: "SaaS",
    year: 2025,
    client: "Avinyax",
    cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "TypeScript"],
    problem: "Teams needed a unified HR platform covering attendance, payroll, leave, and performance — without cobbling together multiple SaaS tools.",
    solution: "A modular HRMS with role-based dashboards, automated payroll processing, and deep reporting — all hosted at hrms.avinyax.com.",
    features: [
      "Attendance & leave management",
      "Automated payroll with tax rules",
      "Performance review workflows",
      "Role-based access for HR, managers, employees",
    ],
    challenges: "Multi-tenant payroll with country-specific tax logic required a flexible rule engine that could be configured per organisation.",
    results: [
      { label: "Manual HR work", value: "−60%" },
      { label: "Payroll errors", value: "−95%" },
      { label: "Onboarding time", value: "<5 min" },
    ],
    demoUrl: "https://hrms.avinyax.com",
    screenshots: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=200&h=200&fit=crop",
    ],
  },
  {
    slug: "orbitely",
    title: "Orbitely",
    tagline: "Collaborative orbital project management tool",
    category: "SaaS",
    year: 2025,
    client: "Orbitely",
    cover: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "Supabase", "Realtime", "Tailwind", "Vercel"],
    problem: "Remote teams needed a visually compelling, real-time project tracker that felt premium — not another clone of Jira or Trello.",
    solution: "Orbitely is a space-themed project management SaaS with real-time collaboration, custom workflows, and a stunning UI — deployed on Vercel.",
    features: [
      "Real-time board updates via Supabase",
      "Custom workflow builder",
      "Team analytics & velocity charts",
      "Slack & GitHub integrations",
    ],
    challenges: "Achieving sub-100ms real-time collaboration without polling required careful use of Supabase Realtime channels with optimistic UI.",
    results: [
      { label: "Active teams", value: "200+" },
      { label: "Realtime latency", value: "<80ms" },
      { label: "User retention", value: "78%" },
    ],
    demoUrl: "https://orbitely.vercel.app",
    screenshots: [
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=200&h=200&fit=crop",
    ],
  },
  {
    slug: "restsagar",
    title: "RestSagar",
    tagline: "Restaurant discovery & table booking platform",
    category: "Web",
    year: 2024,
    client: "RestSagar",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Node.js", "MongoDB", "Google Maps API", "Razorpay", "Vercel"],
    problem: "Diners and restaurant owners lacked a fast, reliable platform to discover restaurants and manage bookings in real time.",
    solution: "A geo-aware restaurant discovery web app with real-time booking, menu browsing, and Razorpay payments — live at restsagar.vercel.app.",
    features: [
      "Geo-based restaurant discovery",
      "Real-time table availability",
      "Online ordering with Razorpay",
      "Restaurant owner dashboard",
    ],
    challenges: "Syncing real-time seat availability across concurrent booking requests required Redis-backed locking to prevent double-bookings.",
    results: [
      { label: "Restaurants listed", value: "500+" },
      { label: "Bookings/month", value: "12k" },
      { label: "Avg. booking time", value: "45s" },
    ],
    demoUrl: "https://restsagar.vercel.app",
    screenshots: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&h=200&fit=crop",
    ],
  },
];
