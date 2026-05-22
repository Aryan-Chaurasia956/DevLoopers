import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Web Development" },
      { to: "/services", label: "Android Apps" },
      { to: "/services", label: "API & Integrations" },
      { to: "/services", label: "Maintenance" },
    ],
  },
  {
    title: "Work",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/contact", label: "Start a project" },
      { to: "/payment", label: "Payment info" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt={SITE.name} className="h-8 w-auto object-contain" />
              <span className="font-display text-lg font-semibold">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {SITE.tagline}. Building production-grade software for startups and enterprises since 2019.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Github, href: SITE.socials.github, label: "GitHub" },
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: SITE.socials.twitter, label: "Twitter" },
                { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition hover:text-primary hover:border-primary/40"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-display text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l, i) => (
                  <li key={`${l.to}-${i}`}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <span>{SITE.location}</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
