import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Megatron Group" },
      { name: "description", content: "How Megatron Group collects, uses, and protects information from visitors and clients." },
      { property: "og:title", content: "Privacy policy — Megatron Group" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Section className="max-w-3xl">
      <Eyebrow>Last updated · May 2026</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Privacy policy</h1>
      <div className="mt-10 space-y-6 text-foreground/85">
        <p>This policy describes how Megatron Group ("we", "us") collects and uses information from visitors to our website and from clients who engage us for services.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Information we collect</h2>
        <p>When you submit our contact form, we collect your name, email, company, project type, budget range, and any message you send. We do not require accounts and we do not run third-party advertising trackers on this site.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">How we use it</h2>
        <p>We use submitted information solely to respond to your inquiry and, if you become a client, to deliver agreed services. We do not sell or rent your data.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Analytics</h2>
        <p>We use first-party analytics to understand aggregate traffic patterns. No personally identifying analytics data is shared with third parties.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Contact</h2>
        <p>Questions about this policy? Write to <a href="mailto:hello@megatron.group" className="text-primary underline">hello@megatron.group</a>.</p>
      </div>
    </Section>
  );
}
