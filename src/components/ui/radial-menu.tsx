"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import React from "react";

export type RadialMenuItem = {
  id: number;
  label: string;
  icon: React.ReactNode;
  link: string;
};

type Props = {
  items: RadialMenuItem[];
};

export function RadialMenu({ items }: Props) {
  const [open, setOpen] = useState(false);

  // Spread items in a semi-circle downward from the button
  const total = items.length;
  const spreadAngle = 160; // total arc in degrees
  const startAngle = 100; // start from lower-left
  const radius = 80; // distance from center button

  return (
    <div className="relative flex items-center justify-center md:hidden">
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Radial Items */}
      <AnimatePresence>
        {open &&
          items.map((item, i) => {
            const angle =
              startAngle + (i / (total - 1)) * spreadAngle;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  delay: i * 0.04,
                }}
                className="absolute z-50"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Link
                  to={item.link as any}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </span>
                  <span className="text-[9px] font-semibold text-foreground bg-white/90 rounded px-1 shadow-sm">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
      </AnimatePresence>

      {/* Hamburger Toggle Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-all"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
