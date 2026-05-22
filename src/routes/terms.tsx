import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of service — Megatron Group" },
      { name: "description", content: "Terms governing the use of megatron.group and engagement of Megatron Group's services." },
      { property: "og:title", content: "Terms of service — Megatron Group" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Section className="max-w-3xl">
      <Eyebrow>Last updated · May 2026</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Terms of service</h1>
      <div className="mt-10 space-y-6 text-foreground/85">
        <p>These terms apply to your use of megatron.group. Engagement of Megatron Group for services is governed by a separate Statement of Work signed between Megatron Group Pvt. Ltd. and the client.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Use of the site</h2>
        <p>You may browse, read, and share publicly available pages on this site for personal and professional use. You may not scrape, replicate, or republish substantial portions of the site without written permission.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Content ownership</h2>
        <p>All site content — text, images, code samples, case studies — is the property of Megatron Group or its clients, used with permission. Client logos and project visuals may not be reused without written permission.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">No warranty</h2>
        <p>Site content is provided "as is" for informational purposes. We make no warranty as to accuracy, completeness, or fitness for any particular purpose.</p>
        <h2 className="font-display text-2xl font-semibold pt-4">Contact</h2>
        <p>Questions about these terms? Write to <a href="mailto:hello@megatron.group" className="text-primary underline">hello@megatron.group</a>.</p>
      </div>
    </Section>
  );
}
