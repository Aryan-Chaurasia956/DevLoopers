import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Megatron Group" },
      { name: "description", content: "We started Megatron Group in 2019 to build software the way we always wanted to — small senior teams, weekly demos, no handoffs." },
      { property: "og:title", content: "About — Megatron Group" },
      { property: "og:description", content: "Our story, mission, and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "2019", title: "Founded in Delhi", body: "Arjun and Sneha left their last jobs to start the kind of dev team they always wanted to work at." },
  { year: "2020", title: "First Android ship", body: "Shipped our first consumer Android app — 50k downloads in three months." },
  { year: "2022", title: "Crossed 20 projects", body: "Hired our first full-time designer; codified the design-token discipline that now powers every project." },
  { year: "2024", title: "Enterprise wins", body: "Started running multi-quarter engagements for banks and logistics companies." },
  { year: "2026", title: "18 people, 50+ ships", body: "Still small enough to know everyone's name. Still senior enough to mean it." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            We started Megatron to build software <span className="text-gradient-mint">the way we always wanted to.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Small senior teams. Weekly demos. No handoffs. No subcontracting. Software that still works on day 800.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Help good teams ship great software.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We work with founders, product teams, and enterprises who already know what they want to build — we bring the senior engineering capacity to make it happen on time and at quality.
            </p>
          </div>
          <div>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              The default dev partner for India's next generation of product companies.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We want Megatron to be the team you call when failure isn't an option — the first call, not the rescue call.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Journey" title={<>Where we've been, <span className="text-gradient-mint">where we're going.</span></>} />
        <ol className="mt-14 relative space-y-12 border-l-2 border-primary/40 pl-8 md:pl-12">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[42px] md:-left-[54px] inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <div className="font-mono text-xs uppercase tracking-wider text-primary">{t.year}</div>
              <div className="mt-1 font-display text-2xl font-semibold">{t.title}</div>
              <p className="mt-2 max-w-2xl text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we care about" title="Four values, no posters." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Quality", "If the thing doesn't work on day 800, we don't ship it on day 1."],
            ["Transparency", "Status, blockers, costs — visible to clients every Friday."],
            ["Timely delivery", "We commit to dates. We meet them. When we miss, you hear it early."],
            ["Innovation", "We pay for engineers to learn. New techniques land in our work, not our podcasts."],
          ].map(([t, c]) => (
            <div key={t} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Let's talk about your project.</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-mint px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
