import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const cardVariants = cva(
  'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:border-primary/40 hover:shadow-md',
  {
    variants: {
      variant: {
        default: '',
        featured: 'flex-col md:flex-row',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BlogPostCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  readMoreText?: string;
  slug?: string;
}

const BlogPostCard = React.forwardRef<HTMLDivElement, BlogPostCardProps>(
  ({ className, variant, tag, date, title, description, imageUrl, href, slug, readMoreText = 'Read the full article', ...props }, ref) => {
    
    const cardHover = {
      hover: {
        y: -5,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    };
    
    const content = (
      <>
        {imageUrl && (
          <div className={cn("relative overflow-hidden w-full", variant === 'featured' ? "md:w-1/2 lg:w-3/5" : "aspect-[16/9]")}>
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{tag}</span>
              <span>{date}</span>
            </div>

            <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-foreground lg:text-2xl">
              <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>
            
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>

          {variant === 'featured' && (
            <div className="mt-8">
                <Button variant="default" className="group/button rounded-full px-6">
                    {readMoreText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Button>
            </div>
          )}
        </div>
      </>
    );

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        variants={cardHover}
        whileHover="hover"
        {...props}
      >
        {slug ? (
          <Link to="/blog/$slug" params={{ slug }} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
            <span className="sr-only">Read More</span>
          </Link>
        ) : (
          <a href={href} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
            <span className="sr-only">Read More</span>
          </a>
        )}
        <div className="relative z-0 flex h-full w-full flex-col md:flex-row">{content}</div>
      </motion.div>
    );
  }
);

BlogPostCard.displayName = 'BlogPostCard';

export { BlogPostCard };
