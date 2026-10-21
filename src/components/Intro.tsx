import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function shouldPlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  // Plays on every fresh load and reload; skipped when returning with the back/forward buttons
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  return navigation?.type !== 'back_forward';
}

/** Decided once at load so the hero can hold its entrance until the curtain lifts. */
export const INTRO_PLAYS = shouldPlay();
/** Seconds the hero waits before its own entrance. */
export const INTRO_DELAY = INTRO_PLAYS ? 0.6 : 0;

/**
 * A short opening: the name on an ink field, a highlighter stroke under it, then the field lifts away.
 * Purely decorative, never blocks input, and plays on each load.
 */
export default function Intro() {
  const [visible, setVisible] = useState(INTRO_PLAYS);

  useEffect(() => {
    if (!INTRO_PLAYS) return;
    const t = window.setTimeout(() => setVisible(false), 450);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-ink text-paper"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] } }}
        >
          <span className="relative text-[clamp(28px,4vw,56px)] font-bold tracking-[-0.03em] [font-stretch:112%]">
            <motion.span
              className="absolute inset-x-0 -bottom-[0.22em] h-[0.16em] origin-left bg-mark"
              initial={{ transform: 'scaleX(0)' }}
              animate={{ transform: 'scaleX(1)', transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1], delay: 0.05 } }}
            />
            <span className="relative">Barathkumar V</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
