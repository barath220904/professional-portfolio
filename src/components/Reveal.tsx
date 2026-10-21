import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance the element rises, in px. */
  rise?: number;
  as?: 'div' | 'li';
  style?: CSSProperties;
}

/**
 * A section part that rises into place once as it enters the viewport.
 * It also settles if the visitor has already passed it (an anchor jump, a fast scroll),
 * so content can never stay hidden.
 */
export default function Reveal({ children, delay = 0, className, rise = 20, as = 'div', style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (inView || passed) return;
    const check = () => {
      const top = ref.current?.getBoundingClientRect().top;
      if (top !== undefined && top < window.innerHeight) setPassed(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [inView, passed]);

  const shown = inView || passed;
  const Component = as === 'li' ? motion.li : motion.div;
  return (
    <Component
      ref={ref as never}
      className={className}
      style={style}
      initial={{ opacity: 0, transform: `translateY(${rise}px)` }}
      animate={shown ? { opacity: 1, transform: 'translateY(0px)' } : undefined}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}
