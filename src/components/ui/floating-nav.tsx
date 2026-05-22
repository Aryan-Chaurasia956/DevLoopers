"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";

export type FloatingNavItem = {
  id: number;
  label: string;
  icon: React.ReactNode;
  link: string;
};

export const FloatingNav = ({ items }: { items: FloatingNavItem[] }) => {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  
  // Find the active index based on the current route
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => currentPath.startsWith(item.link))
  );

  const [active, setActive] = useState(activeIndex);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setActive(activeIndex);
  }, [activeIndex]);

  // Update indicator position when active changes or resize
  useEffect(() => {
    const updateIndicator = () => {
      if (btnRefs.current[active] && containerRef.current) {
        const btn = btnRefs.current[active];
        const container = containerRef.current;
        if (!btn) return;
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicatorStyle({
          width: btnRect.width,
          left: btnRect.left - containerRect.left,
        });
      }
    };

    updateIndicator();
    // small delay to ensure rendering is complete
    setTimeout(updateIndicator, 100);
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg md:hidden">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between bg-background shadow-elevated rounded-full px-1 py-1.5 border border-border"
      >
        {items.map((item, index) => (
          <Link
            key={item.id}
            to={item.link as any}
            ref={(el) => { btnRefs.current[index] = el; }}
            onClick={() => setActive(index)}
            className="relative flex flex-col items-center justify-center flex-1 px-1 py-1.5 text-xs font-medium text-muted-foreground z-10"
            activeProps={{ className: "text-primary" }}
          >
            <div className="z-10">{item.icon}</div>
            {/* show labels only if few items or let them be hidden on very small screens */}
            <span className="text-[9px] mt-1 hidden xs:block">{item.label}</span>
          </Link>
        ))}

        {/* Sliding Active Indicator */}
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-1 bottom-1 rounded-full bg-primary/10"
        />
      </div>
    </div>
  );
};

export default FloatingNav;
