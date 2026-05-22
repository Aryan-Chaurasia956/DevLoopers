import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Smartphone, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CallToAction } from "@/components/ui/cta";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Button } from "@/components/ui/button";
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealFooter,
  CardCurtainRevealDescription,
  CardCurtainRevealTitle,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DevLoopers" },
      { name: "description", content: "Full-stack web development, native Android apps, and more. End-to-end delivery from a senior team." },
      { property: "og:title", content: "Services — DevLoopers" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = ["Discovery", "Design", "Build", "Test", "Launch"];

const mainServices = [
  {
    id: "web",
    icon: Code2,
    title: "Full-stack Web Development",
    blurb: "Next.js, TypeScript, Node, Postgres. SaaS platforms, marketplaces, dashboards, PWAs. We ship the whole system, not pieces of it.",
    tech: ["Next.js 15", "React", "TypeScript", "Tailwind", "Node.js", "NestJS", "Django", "Spring Boot", "PostgreSQL", "MongoDB", "Firebase", "Redis", "AWS", "Azure", "Docker", "Kubernetes", "Vercel"],
    features: ["Progressive Web Apps (PWA)", "E-commerce & marketplaces", "SaaS dashboards", "Realtime collaboration", "AI-powered features", "Multi-tenant architectures"],
    priceFrom: "₹4,50,000",
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Native Android App Development",
    blurb: "Kotlin + Jetpack Compose for serious Android. Offline-first, Wear OS, ML Kit, ARCore, Automotive. We build for the long tail of devices, not just flagships.",
    tech: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Hilt", "Retrofit", "Firebase", "Google Maps SDK", "ML Kit", "TensorFlow Lite", "ARCore", "Wear OS", "Android Automotive", "Flutter", "React Native"],
    features: ["Offline-first sync architecture", "Play Store optimization", "Push notifications & FCM", "Wear OS companions", "AI/ML on-device inference", "AR experiences with ARCore"],
    priceFrom: "₹6,00,000",
    imgSrc: "https://images.unsplash.com/photo-1607252656733-fd7458c63d67?q=80&w=800&auto=format&fit=crop",
  },
];

const extras = [
  {
    title: "Basic Website",
    subtitle: "Up to 6 pages",
    price: "₹10,000",
    copy: "A beautiful, fast, responsive static website with up to 6 pages to establish your digital presence.",
    features: ["Responsive design", "Contact form integration", "Basic SEO setup", "Fast page loads"],
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    bg: "bg-sky-950",
    accent: "text-sky-400",
  },
  {
    title: "Bug Fixes",
    subtitle: "Per bug pricing",
    price: "₹1,000 / bug",
    copy: "Quick, reliable bug fixes for your existing React, React Native, or Android codebase.",
    features: ["Root cause analysis", "Clean patch", "Regression testing", "Fast turnaround"],
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?q=80&w=600&auto=format&fit=crop",
    bg: "bg-rose-950",
    accent: "text-rose-400",
  },
  {
    title: "API Design & Integration",
    subtitle: "Custom quote",
    price: "Custom quote",
    copy: "REST, GraphQL, gRPC. Stripe, Twilio, Razorpay, third-party data sources.",
    features: ["Secure endpoints", "Rate limiting", "Third-party SDKs", "Webhook handling"],
    imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    bg: "bg-violet-950",
    accent: "text-violet-400",
  },
  {
    title: "UI/UX Design",
    subtitle: "Custom quote",
    price: "Custom quote",
    copy: "Figma prototypes, design systems, design tokens. Hand-off that engineers actually want to build.",
    features: ["Wireframing", "High-fidelity prototypes", "Design systems", "User testing"],
    imgSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
    bg: "bg-amber-950",
    accent: "text-amber-400",
  },
  {
    title: "Maintenance & Support",
    subtitle: "Monthly retainers",
    price: "Custom retainers",
    copy: "Monthly retainers with on-call, monitoring, dependency upgrades, and feature work.",
    features: ["24/7 uptime monitoring", "Security patches", "Dependency updates", "Priority bug fixes"],
    imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    bg: "bg-emerald-950",
    accent: "text-emerald-400",
  },
  {
    title: "Legacy Migration",
    subtitle: "Custom quote",
    price: "Custom quote",
    copy: "Move from monolith to modular, from jQuery to React, from MySQL to Postgres — without downtime.",
    features: ["Zero-downtime migration", "Data integrity checks", "Modern stack upgrade", "Performance boost"],
    imgSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    bg: "bg-indigo-950",
    accent: "text-indigo-400",
  },
];

// ─── Dialogs ──────────────────────────────────────────────────────────────────

function MainServiceDialog({ s }: { s: typeof mainServices[0] }) {
  return (
    <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background border-border">
      <div className="relative h-44 overflow-hidden">
        <img src={s.imgSrc} alt={s.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center gap-4 p-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-mint text-primary-foreground shadow-glow shrink-0">
            <s.icon className="h-6 w-6" />
          </span>
          <h2 className="font-display text-2xl font-semibold text-white">{s.title}</h2>
        </div>
      </div>
      <div className="p-6 space-y-5">
        <p className="text-muted-foreground text-sm">{s.blurb}</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">What's included</h4>
            <ul className="space-y-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Starting from</span>
            <p className="mt-1 font-display text-3xl font-semibold text-gradient-mint">{s.priceFrom}</p>
            <p className="mt-2 text-xs text-muted-foreground">Fixed-price proposal after a 30-min discovery call.</p>
            <div className="mt-4 border-t border-border/50 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Process</span>
              <ol className="mt-2 space-y-1.5">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2 text-sm">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 font-mono text-[10px] text-primary">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
          {s.tech.slice(0, 12).map((t) => (
            <span key={t} className="rounded-full border border-border/60 bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{t}</span>
          ))}
          {s.tech.length > 12 && <span className="rounded-full border border-border/60 bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground">+{s.tech.length - 12}</span>}
        </div>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-mint px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity">
          Request a custom quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </DialogContent>
  );
}

function ExtraDialog({ e }: { e: typeof extras[0] }) {
  return (
    <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden bg-background border-border">
      <div className={`relative h-32 overflow-hidden ${e.bg}`}>
        <img src={e.imgSrc} alt={e.title} className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-display text-2xl font-semibold text-white text-center px-6">{e.title}</h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Pricing</span>
          <p className={`mt-1 text-3xl font-bold ${e.accent}`}>{e.price}</p>
        </div>
        <p className="text-muted-foreground text-sm">{e.copy}</p>
        <div className="border-t border-border/50 pt-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Includes</h4>
          <ul className="space-y-2">
            {e.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          Get started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </DialogContent>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

function Services() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[620px] flex items-center bg-black overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-5 lg:px-8 flex flex-col md:flex-row items-center gap-8 py-24 md:h-[620px]">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Two practices.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AEEC] to-[#04AEEC]/60">
                One delivery team.
              </span>
            </h1>
            <p className="mt-5 text-neutral-400 max-w-md text-base leading-relaxed">
              Full-stack web and native Android — plus everything around the build: APIs, design, DevOps, audits, and migrations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition-colors">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                View services
              </a>
            </div>
          </div>
          <div className="flex-1 h-full min-h-[400px] hidden md:block">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ─── CORE SERVICES ─── */}
      <Section className="pt-20" id="services">
        <SectionHeader
          eyebrow="Core services"
          title={<>What we <span className="text-gradient-mint">ship best.</span></>}
          intro="Hover to reveal, click to see full details, tech stack & pricing."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {mainServices.map((s) => (
            <Dialog key={s.id}>
              <DialogTrigger className="text-left w-full h-full group">
                <CardCurtainReveal className="h-[480px] w-full border border-border/60 bg-zinc-950 text-zinc-50 shadow-lg rounded-2xl cursor-pointer hover:border-primary/40 transition-colors">
                  <CardCurtainRevealBody className="p-8 flex flex-col gap-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-mint text-primary-foreground shadow-glow mb-6">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <CardCurtainRevealTitle className="text-3xl font-bold tracking-tight text-white">
                      {s.title.split(" ").slice(0, 2).join(" ")}<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AEEC] to-[#04AEEC]/60">
                        {s.title.split(" ").slice(2).join(" ")}
                      </span>
                    </CardCurtainRevealTitle>

                    <CardCurtainRevealDescription className="mt-4 text-zinc-400 text-sm leading-relaxed">
                      <p>{s.blurb}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5 mb-6">
                        {s.features.slice(0, 3).map((f) => (
                          <span key={f} className="rounded-full border border-[#04AEEC]/30 bg-[#04AEEC]/10 px-2.5 py-1 text-xs text-[#04AEEC]">{f}</span>
                        ))}
                      </div>
                      <Button variant="secondary" size="icon" className="aspect-square rounded-full self-start">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </CardCurtainRevealDescription>

                    <CardCurtain className="bg-zinc-50" />
                  </CardCurtainRevealBody>

                  <CardCurtainRevealFooter className="mt-auto">
                    <div className="relative">
                      <img src={s.imgSrc} alt={s.title} className="h-44 w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex items-end px-8 pb-4">
                        <div>
                          <span className="font-mono text-[10px] uppercase text-zinc-400">Starting from</span>
                          <p className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#04AEEC] to-[#04AEEC]/70">{s.priceFrom}</p>
                        </div>
                      </div>
                    </div>
                  </CardCurtainRevealFooter>
                </CardCurtainReveal>
              </DialogTrigger>
              <MainServiceDialog s={s} />
            </Dialog>
          ))}
        </div>
      </Section>

      {/* ─── EXTRAS ─── */}
      <Section>
        <SectionHeader
          eyebrow="Also on the menu"
          title={<>Everything else <span className="text-gradient-mint">around the build.</span></>}
          intro="Click any card for full pricing details."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {extras.map((e) => (
            <Dialog key={e.title}>
              <DialogTrigger className="text-left w-full h-full">
                <div className={`relative h-full min-h-[200px] overflow-hidden rounded-2xl ${e.bg} cursor-pointer group transition-transform hover:-translate-y-1 hover:shadow-lg`}>
                  <img src={e.imgSrc} alt={e.title} className="absolute inset-0 h-full w-full object-cover opacity-15 group-hover:opacity-25 transition-opacity" />
                  <div className="relative z-10 flex flex-col h-full min-h-[200px] p-6 gap-3">
                    <div>
                      <p className={`font-mono text-xs uppercase tracking-wider ${e.accent} mb-1`}>{e.subtitle}</p>
                      <h3 className="text-xl font-bold text-white">{e.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm line-clamp-2 flex-1">{e.copy}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`font-bold text-lg ${e.accent}`}>{e.price}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                        See details <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <ExtraDialog e={e} />
            </Dialog>
          ))}
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section className="pb-24">
        <CallToAction
          subheading="Talk to us"
          heading="Not sure which service you need?"
          description="Tell us the goal and we'll tell you the shortest path. No sales pitch, no decks."
          primaryAction={{ label: "Get free consultation", href: "/contact" }}
        />
      </Section>
    </>
  );
}
