"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

interface HoverDetailCardProps {
  title?: string;
  subtitle?: string;
  images?: string[];
  url?: string;
  primaryButton?: { text: string; color?: string; hoverColor?: string; textColor?: string };
  secondaryButton?: { text: string; color?: string; hoverColor?: string; textColor?: string };
  pills?: {
    left: { text: string; color?: string; textColor?: string };
    sparkle?: { show: boolean; color?: string };
    right: { text: string; color?: string; textColor?: string };
  };
  enableAnimations?: boolean;
}

export function HoverDetailCard({
  title = "Project",
  subtitle = "Live",
  images = [],
  url,
  primaryButton = { text: "View Live", color: "bg-white/90", hoverColor: "hover:bg-white", textColor: "text-gray-900" },
  secondaryButton = { text: "Details", color: "bg-[#04aeec]", hoverColor: "hover:bg-[#0390c4]", textColor: "text-white" },
  pills = {
    left: { text: "Web", color: "bg-blue-100", textColor: "text-blue-800" },
    sparkle: { show: true, color: "bg-purple-100 text-purple-800" },
    right: { text: "Live", color: "bg-green-100", textColor: "text-green-800" },
  },
  enableAnimations = true,
}: HoverDetailCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.08 } },
  };
  const contentVariants = {
    hidden: { opacity: 0, x: -25, scale: 0.95, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 400, damping: 28 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
  };
  const pillVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 450, damping: 25 } },
  };

  return (
    <motion.div
      className="w-full"
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      variants={shouldAnimate ? containerVariants : {}}
    >
      <motion.div
        className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        variants={shouldAnimate ? contentVariants : {}}
      >
        {/* Image Grid */}
        <motion.div
          className="bg-muted p-4 border-b border-border/50 relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-5 gap-1.5 relative">
            {images.slice(0, 10).map((src, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
                variants={shouldAnimate ? imageVariants : {}}
                animate={{ scale: isHovered ? 0.85 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <img src={src} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center rounded-t-2xl"
              >
                <div className="flex gap-3">
                  {url && (
                    <motion.a
                      href={url} target="_blank" rel="noreferrer"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
                      className={`${primaryButton.color} ${primaryButton.hoverColor} ${primaryButton.textColor} inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold shadow-lg text-sm`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {primaryButton.text}
                    </motion.a>
                  )}
                  <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.18 }}
                    className={`${secondaryButton.color} ${secondaryButton.hoverColor} ${secondaryButton.textColor} px-4 py-2 rounded-lg font-semibold shadow-lg text-sm`}
                  >
                    {secondaryButton.text}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                className={`${pills.left.color} ${pills.left.textColor} px-3 py-1 rounded-full text-xs font-semibold`}
                variants={shouldAnimate ? pillVariants : {}}
              >
                {pills.left.text}
              </motion.div>
              {pills.sparkle?.show && (
                <motion.div
                  className={`${pills.sparkle.color} p-1.5 rounded-full`}
                  variants={shouldAnimate ? pillVariants : {}}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.div>
              )}
            </div>
            <motion.div
              className={`${pills.right.color} ${pills.right.textColor} px-3 py-1 rounded-full text-xs font-semibold`}
              variants={shouldAnimate ? pillVariants : {}}
            >
              {pills.right.text}
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mt-0.5">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
