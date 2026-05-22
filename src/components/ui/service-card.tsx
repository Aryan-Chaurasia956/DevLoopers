import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg border border-border cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-surface text-foreground",
        red: "bg-red-500/10 text-foreground border-red-500/20",
        blue: "bg-blue-500/10 text-foreground border-blue-500/20",
        gray: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: () => void;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, imgSrc, imgAlt, onClick, ...props }, ref) => {
    
    const cardAnimation = {
      hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation = {
      hover: {
        scale: 1.1,
        rotate: 3,
        x: 10,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };
    
    const arrowAnimation = {
        hover: {
            x: 5,
            transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" as const },
        }
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        onClick={onClick}
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <div
            className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:underline"
          >
            LEARN MORE
            <motion.div variants={arrowAnimation}>
                <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </div>
        </div>
        
        {imgSrc && (
          <motion.img
            src={imgSrc}
            alt={imgAlt || title}
            className="absolute -right-8 -bottom-8 w-32 h-32 object-contain opacity-40 group-hover:opacity-80 transition-opacity"
            variants={imageAnimation}
          />
        )}
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
