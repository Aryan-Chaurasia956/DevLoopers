import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Smartphone, Zap, Quote, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { HoverDetailCard } from "@/components/ui/hover-detail-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Story, StorySlide, StoryOverlay, StoryProgress, StoryControls } from "@/components/ui/story";
import { BlogPostCard } from "@/components/ui/card-18";
import { CallToAction } from "@/components/ui/cta";
import { ProfileCard } from "@/components/ui/profile-card";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { team } from "@/data/team";
import { SITE } from "@/lib/site";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { label: "Projects delivered", value: "50+" },
  { label: "Clients served", value: "32" },
  { label: "Engineers", value: "18" },
  { label: "Years shipping", value: "7" },
];

const testimonials = [
  {
    quote:
      "Megatron rebuilt a system we'd been struggling with for two years in eleven weeks. It just works.",
    author: "Priya Shah",
    role: "VP Engineering, Lumen",
  },
  {
    quote:
      "Best Android team we've ever worked with. They shipped a Wear OS companion no one else even priced.",
    author: "Vikram Joshi",
    role: "CTO, Trailmark Outdoors",
  },
  {
    quote:
      "They sat in our office for a week before writing a line of code. The result spoke for itself.",
    author: "Maya Krishnan",
    role: "Founder, Helix Health",
  },
];

function Home() {
  const featured = projects.slice(0, 3);
  const recent = posts.slice(0, 4).map((p, i) => {
    const images = [
      "https://images.unsplash.com/photo-1607252656733-fd7458c63d67?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    ];
    return { ...p, cover: images[i % images.length] };
  });

  return (
    <>
      {/* ─── HERO (Animated) ─── */}
      <section className="relative overflow-hidden pt-24 md:pt-36 bg-background pb-16 md:pb-24">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        
        <AnimatedGroup
          variants={{
            container: { visible: { transition: { delayChildren: 1 } } },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 2 } },
            },
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
            alt="background"
            className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
            width="3276"
            height="4095"
          />
        </AnimatedGroup>
        <div aria-hidden className="absolute inset-0 z-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mx-auto lg:max-w-4xl">
            <AnimatedGroup variants={transitionVariants}>
              <h1 className="mt-8 mx-auto text-balance text-5xl md:text-6xl lg:mt-12 xl:text-7xl font-display font-semibold tracking-tight">
                We build the <span className="text-gradient-mint">software</span> your roadmap is counting on.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                DevLoopers is a senior team of full-stack web and native Android engineers. We take a brief and ship a system — design, architecture, code, launch.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div key={1} className="bg-foreground/10 rounded-full border p-1">
                <Button asChild size="lg" className="rounded-full px-6 text-base h-12">
                  <Link to="/contact"><span className="text-nowrap">Start a project</span></Link>
                </Button>
              </div>
              <Button key={2} asChild size="lg" variant="ghost" className="h-12 rounded-full px-6 border border-border">
                <Link to="/portfolio"><span className="text-nowrap">View our work</span></Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
            ...transitionVariants,
          }}
          className="relative z-10"
        >
          <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <div aria-hidden className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%" />
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
              <img
                className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block"
                src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                alt="app screen"
                width="2700"
                height="1440"
              />
              <img
                className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden object-cover"
                src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                alt="app screen"
                width="2700"
                height="1440"
              />
            </div>
          </div>
        </AnimatedGroup>
      </section>

      {/* ─── SEE OUR WORK ─── */}
      <section className="bg-background pb-16 pt-8 md:pb-24">
        <div className="m-auto max-w-5xl px-6 flex justify-center">
          <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:border-primary/40 hover:text-primary">
            <span>See our work</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ─── STORY SCROLL - WHAT WE DO ─── */}
      <FlowArt aria-label="DevLoopers Workflow">
        <FlowSection aria-label="Who we are" style={{ backgroundColor: '#04aeec', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <div>
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Build
              <br />
              Without
              <br />
              Limits
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We believe every ambitious project deserves an engineering team that puts quality first. No bloat, no junior tiers — just pure scalable code and the people who write it.
          </p>
        </FlowSection>

        <FlowSection aria-label="Our Team" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Our Team</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Senior
              <br />
              Tier
              <br />
              Only
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We don't subcontract. Every project ships from a tight-knit senior team that owns the stack end-to-end.
          </p>
        </FlowSection>

        <FlowSection aria-label="What we build" style={{ backgroundColor: '#facc15', color: '#0f172a' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800">03 — What We Build</p>
          <hr className="my-[2vw] border-none border-t border-slate-800/40" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight text-slate-900 drop-shadow-sm">
              Web
              <br />
              And
              <br />
              Native
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-slate-800/40" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-slate-800">
            A specialized approach focused on the stacks that scale.
          </p>
          <hr className="my-[2vw] border-none border-t border-slate-800/40" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[220px] flex-1 bg-white/40 p-6 rounded-2xl border border-white/60 shadow-xl backdrop-blur-md">
              <p className="mb-3 text-xl font-black uppercase tracking-wider flex items-center gap-3 text-slate-900">
                <Code2 className="w-8 h-8"/> FULL-STACK WEB
              </p>
              <p className="text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-slate-800 mb-5 font-semibold">
                Next.js, TypeScript, Node, Postgres. PWAs, SaaS, marketplaces, dashboards.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["NEXT.JS", "NODE", "POSTGRES", "AWS"].map(t => (
                  <span key={t} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-slate-900/20 bg-slate-900 text-white rounded-full shadow-md">{t}</span>
                ))}
              </div>
            </div>
            <div className="min-w-[220px] flex-1 bg-white/40 p-6 rounded-2xl border border-white/60 shadow-xl backdrop-blur-md">
              <p className="mb-3 text-xl font-black uppercase tracking-wider flex items-center gap-3 text-slate-900">
                <Smartphone className="w-8 h-8"/> NATIVE ANDROID
              </p>
              <p className="text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-slate-800 mb-5 font-semibold">
                Kotlin + Jetpack Compose. Offline-first, Wear OS, ML Kit, Automotive.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["KOTLIN", "COMPOSE", "FIREBASE", "ML KIT"].map(t => (
                  <span key={t} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-slate-900/20 bg-slate-900 text-white rounded-full shadow-md">{t}</span>
                ))}
              </div>
            </div>
            <div className="min-w-[220px] flex-1 bg-white/40 p-6 rounded-2xl border border-white/60 shadow-xl backdrop-blur-md">
              <p className="mb-3 text-xl font-black uppercase tracking-wider flex items-center gap-3 text-slate-900">
                <Zap className="w-8 h-8"/> THE BORING STUFF
              </p>
              <p className="text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-slate-800 mb-5 font-semibold">
                APIs, integrations, design systems, perf audits, migrations, on-call.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["APIS", "DEVOPS", "SECURITY", "UI/UX"].map(t => (
                  <span key={t} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-slate-900/20 bg-slate-900 text-white rounded-full shadow-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="How we work" style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4">04 — How it works</p>
          <div className="w-full max-w-6xl mx-auto h-[600px] mt-8">
            <FeatureCarousel
              image={{
                step1light1: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
                step1light2: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
                step2light1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
                step2light2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
                step3light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                alt: "DevLoopers Process",
              }}
              step1img1Class="pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%] md:group-hover:translate-y-2 object-cover aspect-[4/3] shadow-2xl"
              step1img2Class="pointer-events-none w-[60%] border border-stone-100/10 transition-all duration-500 overflow-hidden max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)] md:group-hover:-translate-y-6 object-cover aspect-[4/3] shadow-2xl"
              step2img1Class="pointer-events-none w-[50%] rounded-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%] md:group-hover:translate-y-2 object-cover aspect-video shadow-2xl"
              step2img2Class="pointer-events-none w-[40%] rounded-[24px] border border-stone-100/10 transition-all duration-500 overflow-hidden max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)] md:group-hover:-translate-y-6 object-cover aspect-video shadow-2xl"
              step3imgClass="pointer-events-none w-[90%] border border-stone-100/10 rounded-[24px] transition-all duration-500 overflow-hidden left-[5%] top-[50%] md:top-[30%] md:left-[5%] object-cover aspect-[21/9] shadow-2xl"
              bgClass="bg-gradient-to-tr from-[#0f172a] to-[#1e293b]"
            />
          </div>
        </FlowSection>
      </FlowArt>

      {/* ─── FEATURED PROJECTS (HoverDetailCard) ─── */}
      <Section>
        <SectionHeader
          eyebrow="Selected work"
          title={<>Recent ships, <span className="text-gradient-mint">real metrics.</span></>}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
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

      {/* ─── STATS BAND ─── */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-14 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-primary/70 pl-5">
              <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <Section>
        <SectionHeader
          eyebrow="What clients say"
          title={<>Trusted by founders <span className="text-gradient-mint">who've shipped before.</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-2xl border border-border bg-surface p-7"
            >
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
              <div className="absolute right-6 top-6 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </Section>

      {/* ─── TEAM HIGHLIGHTS ─── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Who builds it"
            title={<>The <span className="text-gradient-mint">DevLoopers</span> Team.</>}
            intro="Meet the brilliant minds building your products. Every project gets a dedicated lead and a small team of senior engineers."
          />
        </div>
        <div className="mt-16 flex flex-wrap gap-6 justify-center">
          {[
            {
              name: "Krishna Singh",
              handle: "@krishna",
              avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Lead Full-Stack Engineer & Architect", caption: "Leads architecture and full-stack development across all projects.", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format&fit=crop" },
                { title: "React & Node Expert", caption: "Scaling apps to millions of users", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop" }
              ]
            },
            {
              name: "Akash Yadav",
              handle: "@akash",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Senior Android Developer", caption: "Expert in Kotlin & Jetpack Compose for production Android apps.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Vikas Chaurasiya",
              handle: "@vikas",
              avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Backend Systems Engineer", caption: "Builds scalable APIs and manages cloud infrastructure.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Ashutosh Kumar",
              handle: "@ashutosh",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Frontend Lead Developer", caption: "Crafts pixel-perfect UIs with React and modern CSS.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Harshit Mittal",
              handle: "@harshit.m",
              avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Product Designer & UI/UX", caption: "Designs intuitive interfaces and sets the visual language.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Harshit Tiwari",
              handle: "@harshit.t",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Cloud Infrastructure Expert", caption: "Manages deployments, CI/CD pipelines, and cloud costs.", image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Utkarsh Pandey",
              handle: "@utkarsh",
              avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Data Engineer & Analytics", caption: "Builds data pipelines and dashboards that drive decisions.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Aryan Chaurasiya",
              handle: "@aryan",
              avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Full-Stack Developer", caption: "Ships features fast across web and mobile platforms.", image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=500&auto=format&fit=crop" },
              ]
            },
            {
              name: "Mohd. Atif",
              handle: "@atif",
              avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&auto=format&fit=crop",
              stories: [
                { title: "Mobile App Developer", caption: "Develops cross-platform and native mobile applications.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop" },
              ]
            }
          ].map((m, i) => (
            <div key={i} className="group relative">
              <Dialog>
                <DialogTrigger>
                  <div className="flex flex-col items-center gap-2 cursor-pointer group hover:-translate-y-1 transition-transform">
                    <div className="rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:from-primary hover:via-primary hover:to-primary transition-all shadow-lg ring-2 ring-transparent group-hover:ring-primary/30">
                      <Avatar className="size-16 border-2 border-background">
                        <AvatarImage src={m.avatar} alt={m.handle} className="object-cover" />
                        <AvatarFallback>{m.name.substring(0,2)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs font-semibold">{m.name.split(' ')[0]}</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="aspect-[9/16] w-full max-w-[400px] h-[85vh] max-h-[800px] overflow-hidden p-0 rounded-xl bg-black border-border shadow-2xl">
                  <DialogTitle className="sr-only">Story for {m.name}</DialogTitle>

                  <Story
                    className="relative size-full "
                    duration={5000}
                    mediaLength={m.stories.length}
                  >
                    <DialogHeader className="px-4 py-6 absolute top-0 inset-x-0 z-20">
                      <div className="relative z-10 flex items-center gap-3">
                        <Avatar className="size-10 border border-white/20">
                          <AvatarImage src={m.avatar} alt={m.handle} className="object-cover" />
                          <AvatarFallback>{m.name.substring(0,2)}</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col flex-1">
                          <StoryProgress
                            className="w-full mb-1"
                            progressWrapClass="h-1 bg-white/30"
                            progressActiveClass="bg-white"
                          />
                          <span className="text-xs text-white/90 font-medium">{m.handle}</span>
                        </div>

                        <StoryControls
                          variant="ghost"
                          className="text-white hover:text-white hover:bg-white/20 rounded-full h-8 w-8"
                        />
                      </div>
                    </DialogHeader>

                    {m.stories.map((story, idx) => (
                      <StorySlide
                        key={idx}
                        index={idx}
                        className="absolute inset-0 size-full flex items-center justify-center bg-black"
                      >
                        <img
                          src={story.image}
                          className="w-full h-full object-cover opacity-90"
                          alt={story.title}
                        />
                        <StoryOverlay />

                        <div className="absolute bottom-10 left-6 right-6 z-20 space-y-2">
                          <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                            {story.title}
                          </h3>
                          <p className="text-sm text-slate-200 drop-shadow-md font-medium leading-relaxed">
                            {story.caption}
                          </p>
                        </div>
                      </StorySlide>
                    ))}
                  </Story>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── LATEST POSTS ─── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeader eyebrow="From the blog" title="Writing from the team" />
          <Link to="/blog" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">All posts →</Link>
        </div>
        
        {/* Featured Post */}
        {recent.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <BlogPostCard
              variant="featured"
              tag={recent[0].category}
              date={recent[0].date}
              title={recent[0].title}
              description={recent[0].excerpt}
              href={`/blog/${recent[0].slug}`}
              slug={recent[0].slug}
              imageUrl={recent[0].cover}
            />
          </motion.div>
        )}

        {/* Grid of Default Posts */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recent.slice(1).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BlogPostCard
                tag={p.category}
                date={p.date}
                title={p.title}
                description={p.excerpt}
                href={`/blog/${p.slug}`}
                slug={p.slug}
                imageUrl={p.cover}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <Section className="pb-24">
        <CallToAction
          subheading="Ready when you are"
          heading="Have an idea? Let's build it."
          description="Tell us about the project — we'll come back inside a working day with a plan and a price."
          primaryAction={{
            label: "Start a project",
            href: "/contact"
          }}
          secondaryAction={{
            label: "See more work",
            href: "/portfolio"
          }}
        />
      </Section>
    </>
  );
}
