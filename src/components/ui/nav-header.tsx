"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export type NavItem = {
  label: string;
  link: string;
};

type Props = {
  navItems: NavItem[];
  darkMode?: boolean;
};

export function NavHeader({ navItems, darkMode }: Props) {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navItems.map((item) => (
        <Tab key={item.label} setPosition={setPosition} link={item.link} darkMode={darkMode}>
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} darkMode={darkMode} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  link,
  darkMode,
}: {
  children: React.ReactNode;
  setPosition: any;
  link: string;
  darkMode?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer"
    >
      <Link
        to={link as any}
        className={`block px-3 py-1.5 text-sm font-semibold uppercase transition-colors md:px-5 md:py-2 ${
          darkMode
            ? "text-white/90 hover:text-white"
            : "text-foreground hover:text-primary"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position, darkMode }: { position: any; darkMode?: boolean }) => {
  return (
    <motion.li
      animate={position}
      className={`absolute z-0 h-8 rounded-full md:h-[36px] top-1 ${
        darkMode ? "bg-white/10" : "bg-primary/10"
      }`}
    />
  );
};

export default NavHeader;
