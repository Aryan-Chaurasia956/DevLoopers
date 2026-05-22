import { placeholder } from "@/lib/placeholder";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  cover: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "scalable-android-compose-2026",
    title: "Building Scalable Android Apps with Jetpack Compose in 2026",
    excerpt:
      "Patterns we now consider table stakes when shipping Compose apps to millions of users — state, navigation, modularization.",
    category: "Android",
    author: "Arjun Mehta",
    date: "2026-04-22",
    readingTime: "9 min",
    cover: placeholder.blog("Android · Compose", 0),
    body: [
      "Compose has matured into the default for serious Android work, but scaling it past a single-team app exposes a handful of patterns we now consider non-negotiable.",
      "First: state hoisting is not optional. Every screen-level composable should be a pure function of UiState plus an event sink. Anything else turns into a re-render audit nightmare by version six.",
      "Second: modularize early. A :core, :ui, :data split for each feature pays for itself within three sprints — both in build times and in how cleanly teams can hand off work.",
      "Third: invest in a small set of branded primitives. Re-deriving spacing or surface colors in feature modules is the single biggest source of visual drift across an app.",
      "Finally: instrument navigation. Compose Navigation gives you everything to log entry/exit per screen, and you'll thank yourself the first time a PM asks where a funnel drops.",
    ],
  },
  {
    slug: "nextjs-15-vs-react-performance",
    title: "Next.js 15 vs traditional React: a performance comparison",
    excerpt:
      "We rebuilt the same dashboard in CRA + react-router and Next.js 15 App Router. Numbers, not vibes.",
    category: "Web Dev",
    author: "Sneha Iyer",
    date: "2026-03-14",
    readingTime: "7 min",
    cover: placeholder.blog("Web · Next.js 15", 1),
    body: [
      "We took an internal dashboard with ~40 routes and rebuilt it twice — once on the React + Vite stack we shipped in 2022, once on Next.js 15 App Router.",
      "The headline numbers: TTFB dropped 38%, LCP dropped 51%, and total transferred JS dropped 44%. Most of the win came from server components and per-route code splitting, not from any single Next.js feature.",
      "The unexpected cost: caching mental model. App Router's caching is powerful but it took the team two weeks to internalize the distinction between request-time, render-time, and full-route caches.",
      "If you're on a hot path, Next.js 15 is worth the migration. If you're shipping internal tools where TTFB doesn't matter, your existing Vite + react-router stack is probably fine.",
    ],
  },
  {
    slug: "gemini-ai-android",
    title: "Integrating Gemini into Android apps without ruining latency",
    excerpt:
      "Streaming, caching, fallback — the production patterns we use when shipping LLM-backed features inside Android apps.",
    category: "Android",
    author: "Rohit Kapoor",
    date: "2026-02-09",
    readingTime: "11 min",
    cover: placeholder.blog("AI · Gemini", 2),
    body: [
      "Shipping LLM features inside an Android app is a different problem than shipping them on the web. You have less battery budget, flakier networks, and users who notice a 400ms hitch.",
      "Stream every response. Even when the final answer is a structured object, stream a draft and let the UI render progressively. Users tolerate 4s of streaming far better than 1.5s of spinner.",
      "Cache aggressively at the prompt-fingerprint level. Most user prompts in production cluster around 50–80 templates; a small on-device LRU cuts cost meaningfully.",
      "And always ship a fallback. Networks drop. Quotas hit. The feature should degrade to a useful non-AI state, never a broken state.",
    ],
  },
  {
    slug: "ship-1-retrospective",
    title: "Project retrospective: shipping a SaaS in 11 weeks",
    excerpt:
      "What we got right and what we'd do differently on Lumen Analytics — a candid retrospective.",
    category: "Case Studies",
    author: "Priya Shah",
    date: "2026-01-30",
    readingTime: "6 min",
    cover: placeholder.blog("Case Study", 0),
    body: [
      "Lumen wanted to ship a complete analytics rebuild in 12 weeks. We landed in 11. Here's what worked and what we'd do differently.",
      "What worked: a tight weekly demo loop with two named stakeholders. Every Friday, no exceptions. It killed scope drift before it could compound.",
      "What we'd do differently: invest in a load-test harness in week one, not week eight. We caught a planner regression late that cost us a weekend.",
      "Net: the formula for an 11-week ship is a small senior team, a brutally clear scope, and a non-negotiable demo cadence. Everything else is detail.",
    ],
  },
  {
    slug: "tailwind-architecture",
    title: "Tailwind architecture for design teams that will outlive you",
    excerpt:
      "Tokens, primitives, and the boring discipline that keeps a Tailwind codebase consistent at 200+ components.",
    category: "Best Practices",
    author: "Sneha Iyer",
    date: "2025-12-12",
    readingTime: "8 min",
    cover: placeholder.blog("Tailwind · Tokens", 1),
    body: [
      "Tailwind makes the first 30 components fast. It makes the next 300 a discipline problem. Here's the structure we now use on every multi-team project.",
      "One: tokens are non-negotiable. Every color, radius, shadow, and spacing value gets a semantic name in CSS variables. Hex codes in components fail review.",
      "Two: a small primitives layer (Button, Card, Stack, Field) sits between Tailwind and feature code. Feature components never touch utility classes for color or spacing directly.",
      "Three: a Storybook with visual-regression tests catches drift the moment it lands. Skip this and you'll regret it by quarter three.",
    ],
  },
  {
    slug: "android-automotive-2026",
    title: "Android Automotive in 2026: what's actually ready to ship",
    excerpt:
      "A practical look at building media, parking, and EV apps for cars. What works, what's still rough.",
    category: "Industry Trends",
    author: "Arjun Mehta",
    date: "2025-11-04",
    readingTime: "10 min",
    cover: placeholder.blog("Android Automotive", 2),
    body: [
      "Android Automotive OS has quietly become a real platform. Polestar, GMC, Renault, and Honda all ship it as their native infotainment. If you're a brand with a car app, you should be looking.",
      "The good: Compose for Cars is genuinely usable. CarAppService gives you a clean lifecycle for templated apps, and the simulator now matches real-vehicle behavior pretty closely.",
      "The rough: distribution is still fragmented per OEM. Plan for a per-vehicle QA matrix, not 'works on Android'.",
      "If you're in media, parking, EV charging, or fleet — this is a real distribution channel in 2026, not a 2028 bet.",
    ],
  },
];
