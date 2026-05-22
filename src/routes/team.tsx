import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { ProfileCard } from "@/components/ui/profile-card";
import { team } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Megatron Group" },
      { name: "description", content: "Meet the senior engineers and designers behind Megatron Group. Every project gets a dedicated lead — we don't have a junior tier." },
      { property: "og:title", content: "Team — Megatron Group" },
      { property: "og:description", content: "Senior engineers, no handoffs." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const values = [
  { title: "Senior by default", copy: "Every project gets a senior lead. We don't farm work to juniors and we don't subcontract." },
  { title: "Weekly demos", copy: "Friday demos with named stakeholders. It kills scope drift before it compounds." },
  { title: "Code review culture", copy: "Two-reviewer minimum on shipping code. Architecture decisions are documented." },
  { title: "We say no", copy: "If the brief is wrong, we'll tell you. The point is the outcome, not the contract." },
];

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <Eyebrow>Team · {team.length} engineers and designers</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Senior engineers, <span className="text-gradient-mint">no handoffs.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We're a small, deliberately senior team. The same people who scope the project write the code, run it, and stand behind it after launch.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Krishna Singh", title: "Lead Full-Stack Engineer & Architect", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format&fit=crop" },
            { name: "Akash Yadav", title: "Senior Android Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop" },
            { name: "Vikas Chaurasiya", title: "Backend Systems Engineer", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop" },
            { name: "Ashutosh Kumar", title: "Frontend Lead Developer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" },
            { name: "Harshit Mittal", title: "Product Designer & UI/UX", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" },
            { name: "Harshit Tiwari", title: "Cloud Infrastructure Expert", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop" },
            { name: "Utkarsh Pandey", title: "Data Engineer & Analytics", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop" },
            { name: "Aryan Chaurasiya", title: "Full-Stack Developer", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=500&auto=format&fit=crop" },
            { name: "Mohd. Atif", title: "Mobile App Developer", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&auto=format&fit=crop", bg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop" }
          ].map((m, i) => (
            <ProfileCard
              key={i}
              name={m.name}
              title={m.title}
              avatarUrl={m.avatar}
              backgroundUrl={m.bg}
              likes={Math.floor(Math.random() * 50000) + 10000}
              posts={Math.floor(Math.random() * 500) + 50}
              views={Math.floor(Math.random() * 500000) + 100000}
              instagramUrl="#"
              twitterUrl="#"
              threadsUrl="#"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="How we work" title={<>Values that <span className="text-gradient-mint">show up in code.</span></>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden />
          <div className="relative">
            <Eyebrow>Join us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">We're always reading resumes.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Senior engineers and designers who want to ship serious work — get in touch.
            </p>
            <Link to="/careers" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-mint px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              See careers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
