import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Briefcase } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Megatron Group" },
      { name: "description", content: "Senior engineers and designers — join Megatron Group. We're always reading resumes." },
      { property: "og:title", content: "Careers — Megatron Group" },
      { property: "og:description", content: "Senior engineers and designers — join us." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const benefits = [
  ["Senior team", "No standups about standups. The people you work with have shipped serious things before."],
  ["Real autonomy", "You own your work end to end — design choices, code review, on-call. We trust people with full context."],
  ["Learn on the clock", "We pay for conferences, courses, and books. Wednesday afternoons are for learning."],
  ["Remote-first", "Office in Delhi NCR for those who want it. Most of the team works from where they live."],
  ["No subcontracting", "We don't farm work out. Whatever you build, you ship."],
  ["Profit share", "After year one, everyone shares in profit. Aligned incentives, not vague 'culture'."],
];

const openRoles = [
  { title: "Senior Android Engineer", type: "Full-time · Remote / Delhi", desc: "Kotlin, Compose, architecture chops. 5+ years shipping consumer Android." },
  { title: "Senior Full-Stack Engineer", type: "Full-time · Remote / Delhi", desc: "TypeScript, Next.js, Node, Postgres. You've owned production systems end-to-end." },
];

function Careers() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            We're always reading <span className="text-gradient-mint">good resumes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Even when there's no role open, if you're a senior engineer or designer who wants to ship serious work — write to us.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Open application`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-mint px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            <Mail className="h-4 w-4" /> Send your resume
          </a>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Open roles" title="Hiring right now" />
        <div className="mt-10 space-y-4">
          {openRoles.map((r) => (
            <div key={r.title} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-primary/40">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                  <Briefcase className="h-3 w-3" /> {r.type}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{r.desc}</p>
              </div>
              <a href={`mailto:${SITE.email}?subject=Application: ${r.title}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-mint px-5 py-2 text-sm font-semibold text-primary-foreground">
                Apply
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we offer" title={<>Benefits that <span className="text-gradient-mint">aren't snacks.</span></>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([t, c]) => (
            <div key={t} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-primary/30 bg-surface p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Don't see a fit?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Send us a note anyway. We hire when we find the right people, not when we have a posted role.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold">
            Talk to us
          </Link>
        </div>
      </Section>
    </>
  );
}
