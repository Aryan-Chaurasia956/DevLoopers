import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const idx = projects.indexOf(project);
    return {
      project,
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
    };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Case study — Megatron" }] };
    return {
      meta: [
        { title: `${p.title} — Case study · Megatron Group` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${p.slug}` },
        { property: "og:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.title,
          description: p.tagline,
          datePublished: String(p.year),
          creator: { "@type": "Organization", name: "Megatron Group" },
        }),
      }],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <Section><p>Case study not found.</p></Section>
  ),
});

function CaseStudy() {
  const { project: p, prev, next } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-24">
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-primary">{p.category}</span>
                <span>{p.year}</span>
                <span>·</span>
                <span>{p.client}</span>
              </div>
              <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">{p.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-mint px-5 py-2 text-sm font-semibold text-primary-foreground">
                    View demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {p.playStoreUrl && (
                  <a href={p.playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2 text-sm font-semibold">
                    View on Play Store <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {p.results.map((r: { label: string; value: string }) => (
                <div key={r.label} className="rounded-2xl border border-border bg-surface p-5 text-center">
                  <div className="font-display text-2xl font-semibold text-gradient-mint md:text-3xl">{r.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="overflow-hidden rounded-3xl border border-border">
          <img src={p.cover} alt={p.title} className="w-full" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="space-y-10">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">{p.problem}</p>
            </div>
            <div>
              <Eyebrow>The solution</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">{p.solution}</p>
            </div>
            <div>
              <Eyebrow>Key features</Eyebrow>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 rounded-xl border border-border bg-surface p-4 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Challenges & engineering</Eyebrow>
              <p className="mt-4 leading-relaxed text-foreground/90">{p.challenges}</p>
            </div>
            {p.testimonial && (
              <figure className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-8">
                <Quote className="h-6 w-6 text-primary/70" />
                <blockquote className="mt-4 text-lg font-display italic">"{p.testimonial.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{p.testimonial.author}</span>{" "}
                  <span className="text-muted-foreground">· {p.testimonial.role}</span>
                </figcaption>
              </figure>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Eyebrow>Tech stack</Eyebrow>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t: string) => (
                  <span key={t} className="rounded-full border border-border/60 bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Eyebrow>Build something similar?</Eyebrow>
              <p className="mt-3 text-sm text-muted-foreground">
                Tell us what you're working on. We'll come back within a day.
              </p>
              <Link to="/contact" className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-mint px-4 py-2 text-sm font-semibold text-primary-foreground">
                Start a project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-20 grid gap-4 border-t border-border pt-10 md:grid-cols-2">
          <Link to="/portfolio/$slug" params={{ slug: prev.slug }} className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/40">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">← Previous</div>
            <div className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{prev.title}</div>
          </Link>
          <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="group rounded-2xl border border-border bg-surface p-6 text-right hover:border-primary/40">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Next →</div>
            <div className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{next.title}</div>
          </Link>
        </div>
      </Section>
    </>
  );
}
