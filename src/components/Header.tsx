import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Briefcase, FolderHeart, Users, Newspaper, Info, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { NavHeader } from "@/components/ui/nav-header";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const mobileNavItems = [
  { id: 0, icon: <Briefcase size={18} />, label: "Services", link: "/services", description: "What we build for you" },
  { id: 1, icon: <FolderHeart size={18} />, label: "Portfolio", link: "/portfolio", description: "Our past work & case studies" },
  { id: 2, icon: <Users size={18} />, label: "Team", link: "/team", description: "The people behind the code" },
  { id: 3, icon: <Newspaper size={18} />, label: "Blog", link: "/blog", description: "Insights & updates" },
  { id: 4, icon: <Info size={18} />, label: "About", link: "/about", description: "Our story & mission" },
  { id: 5, icon: <Mail size={18} />, label: "Contact", link: "/contact", description: "Get in touch with us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { location } = useRouterState();
  const darkHeroPages = ["/services"];
  const isDarkHero = !isScrolled && darkHeroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-2 pt-2 transition-all duration-300 pointer-events-none">
      <nav
        className={cn(
          "mx-auto max-w-7xl px-5 transition-all duration-300 pointer-events-auto",
          isScrolled && "bg-slate-50/70 max-w-5xl rounded-full border border-white/50 backdrop-blur-2xl shadow-[0_8px_30px_rgb(4,174,236,0.12)] lg:px-6 mt-2"
        )}
      >
        <div className={cn("relative flex flex-wrap items-center justify-between gap-6 transition-all duration-300 lg:gap-0", isScrolled ? "py-2" : "py-4")}>
          <div className="flex w-full justify-between items-center lg:w-auto">
            {/* Logo */}
            <Link to="/" className="group flex items-center">
              <img src="/logo.png" alt={SITE.name} className={cn("w-auto object-contain transition-all duration-300", isScrolled ? "h-12 md:h-14" : "h-16 md:h-20")} />
            </Link>

            {/* Mobile Dropdown Menu */}
            <div className="block lg:hidden">
              <MobileMenu items={mobileNavItems} />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="absolute inset-0 m-auto hidden size-fit lg:block">
            <NavHeader
              navItems={nav.map((n) => ({ label: n.label, link: n.to }))}
              darkMode={isDarkHero}
            />
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              className="rounded-full bg-gradient-mint text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
