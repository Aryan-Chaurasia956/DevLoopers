import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Megatron Group" },
      { name: "description", content: "Writing from the team — Android, web development, AI integration, case studies, and best practices." },
      { property: "og:title", content: "Blog — Megatron Group" },
      { property: "og:description", content: "Writing from the Megatron team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = ["All", "Web Dev", "Android", "AI", "Case Studies", "Best Practices", "Industry Trends"];

function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return posts.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = !q || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <Eyebrow>Blog · {posts.length} articles</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Notes from the <span className="text-gradient-mint">build trenches.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Patterns we use, mistakes we've made, and benchmarks we wish someone had run before us.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                  cat === c
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-surface text-foreground/70 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-border bg-surface pl-9 pr-4 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/40"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                  <span>{p.category}</span><span className="text-muted-foreground">·</span><span className="text-muted-foreground">{p.readingTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.author}</span>
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <div className="mt-16 text-center text-sm text-muted-foreground">No articles match your search.</div>
        )}
      </Section>
    </>
  );
}
