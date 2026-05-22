import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  heading: string;
  subheading: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function CallToAction({
  heading,
  subheading,
  description,
  primaryAction,
  secondaryAction,
}: CTAProps) {
  return (
    <div className="relative overflow-hidden w-full h-full p-8 md:p-12 lg:p-16 rounded-3xl bg-[#09090b] text-white border border-[#27272a] shadow-2xl flex flex-col justify-between">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end w-full">
        <div className="max-w-2xl">
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm border border-white/10">
            {subheading}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {heading.split('?').map((part, i, arr) => 
               i === 0 && arr.length > 1 ? (
                 <span key={i}>
                   {part}? <span className="text-gradient-mint">{arr[1]}</span>
                 </span>
               ) : i === 0 ? part : null
            )}
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/5 border border-zinc-800"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            to={primaryAction.href}
            className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            {primaryAction.label}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
