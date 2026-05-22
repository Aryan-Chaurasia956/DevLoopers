import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { projects, type ProjectCategory } from "@/data/projects";
import { HoverDetailCard } from "@/components/ui/hover-detail-card";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — DevLoopers" },
      { name: "description", content: "Selected case studies of web and Android projects we've shipped — with real metrics, tech stacks, and the problems they solved." },
      { property: "og:title", content: "Portfolio — DevLoopers" },
      { property: "og:description", content: "Web, Android, SaaS, marketplaces — selected case studies with real metrics." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "Android", "Full-Stack", "SaaS", "E-commerce", "Others"];

function Portfolio() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <Eyebrow>Portfolio · {projects.length} projects</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Real ships. <span className="text-gradient-mint">Real metrics.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A selection of projects from the past three years. Each case study has the problem, the architecture, and the numbers.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active === f
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-surface text-foreground/70 hover:text-primary"
              }`}
            >
              {f}
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <HoverDetailCard
              key={p.slug}
              title={p.title}
              subtitle={p.tagline}
              url={p.demoUrl}
              images={(p as any).screenshots ?? [p.cover]}
              pills={{
                left: { text: p.category, color: "bg-blue-100", textColor: "text-blue-800" },
                sparkle: { show: true, color: "bg-purple-100 text-purple-800" },
                right: { text: String(p.year), color: "bg-green-100", textColor: "text-green-800" },
              }}
              primaryButton={{ text: "View Live", color: "bg-white/90", hoverColor: "hover:bg-white", textColor: "text-gray-900" }}
              secondaryButton={{ text: "Details", color: "bg-[#04aeec]", hoverColor: "hover:bg-[#0390c4]", textColor: "text-white" }}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
