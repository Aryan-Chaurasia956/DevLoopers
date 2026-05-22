'use client';

import React from 'react';

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative min-h-[100dvh] w-full overflow-hidden', className)}
  >
    <div
      className={cx(
        'flow-art-container relative flex min-h-[100dvh] w-full flex-col justify-between gap-6 px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw]',
      )}
      style={style}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  return (
    <div
      aria-label={ariaLabel}
      className={cx('w-full overflow-x-hidden', className)}
    >
      {children}
    </div>
  );
};

export default FlowArt;
