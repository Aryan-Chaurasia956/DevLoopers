"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import React from "react";

export type MobileMenuItem = {
  id: number;
  label: string;
  icon: React.ReactNode;
  link: string;
  description?: string;
};

type Props = {
  items: MobileMenuItem[];
};

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transformOrigin: "top right",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: 16, transition: { duration: 0.15 } },
};

export function MobileMenu({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          open
            ? "bg-primary text-white shadow-glow"
            : "bg-white/80 text-foreground border border-border/30 backdrop-blur-sm"
        }`}
        aria-label="Toggle navigation"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-2xl border border-border/20 bg-white shadow-2xl"
          >

            {/* Nav Items */}
            <ul className="p-2">
              {items.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <Link
                    to={item.link as any}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-primary/5"
                    activeProps={{ className: "bg-primary/10 text-primary" }}
                  >
                    {/* Icon bubble */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.description && (
                        <p className="truncate text-[11px] text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {/* Arrow indicator */}
                    <motion.span
                      className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100"
                      initial={{ x: -4 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Footer CTA */}
            <div className="border-t border-border/10 p-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-mint py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <span>Get a Free Quote</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
