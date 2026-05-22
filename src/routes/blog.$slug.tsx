import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Share2, Twitter, Linkedin } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
    return { post, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article — Megatron" }] };
    return {
      meta: [
        { title: `${p.title} — Megatron Group` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "og:image", content: p.cover },
        { property: "article:published_time", content: p.date },
        { property: "article:author", content: p.author },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          author: { "@type": "Person", name: p.author },
          datePublished: p.date,
          image: p.cover,
          publisher: { "@type": "Organization", name: "Megatron Group" },
        }),
      }],
    };
  },
  component: BlogPost,
  notFoundComponent: () => <Section><p>Article not found.</p></Section>,
});

function BlogPost() {
  const { post: p, related } = Route.useLoaderData();
  return (
    <>
      <Section className="!pt-12 !pb-0 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <div className="mt-8">
          <Eyebrow>{p.category} · {p.readingTime}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">{p.title}</h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{p.author}</span>
            <span>·</span>
            <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <img src={p.cover} alt={p.title} className="w-full" />
        </div>
      </Section>

      <Section className="!pt-12 max-w-4xl">
        <article className="prose-lg space-y-6">
          <p className="text-xl leading-relaxed text-foreground/90">{p.excerpt}</p>
          {p.body.map((para: string, i: number) => (
            <p key={i} className="text-base leading-relaxed text-foreground/85 md:text-lg">
              {para}
            </p>
          ))}
        </article>

        <div className="mt-14 flex items-center justify-between border-y border-border py-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Share2 className="h-4 w-4" /> Share this article
          </div>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <Eyebrow>Related</Eyebrow>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((r: typeof p) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border bg-surface p-5 hover:border-primary/40">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">{r.category}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
