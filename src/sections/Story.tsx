import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

const STATEMENT =
  'From raw data to the screen someone uses: a model that learns, the software that serves it, and the interface people touch.';
const MARKED = new Set(['model', 'software', 'interface']);

// Deterministic scatter so every visit (and every render) starts from the same layout
function scatter(i: number) {
  const r = (n: number) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  return { x: (r(1) - 0.5) * 34, y: (r(2) - 0.5) * 60, rotate: (r(3) - 0.5) * 20 };
}

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const s = scatter(index);
  // Each word settles over its own slice of the scroll, left to right
  const start = (index / total) * 0.45;
  const end = start + 0.3;
  // Function-form transforms: one local 0..1 value per word drives every property
  const t = useTransform(progress, (v) => Math.min(1, Math.max(0, (v - start) / (end - start))));
  const eased = useTransform(t, (v) => 1 - Math.pow(1 - v, 3));
  const transform = useTransform(eased, (e) => {
    const k = 1 - e;
    return `translate(${s.x * k}vw, ${s.y * k}vh) rotate(${s.rotate * k}deg)`;
  });
  const opacity = useTransform(eased, (e) => 0.3 + 0.7 * e);
  const filter = useTransform(eased, (e) => `blur(${6 * (1 - e)}px)`);
  const clean = word.replace(/[^a-z]/gi, '').toLowerCase();
  const mark = useTransform(progress, (v) => `${Math.min(100, Math.max(0, ((v - 0.78) / 0.14) * 100))}% 100%`);

  return (
    <motion.span className="inline-block whitespace-pre will-change-transform" style={{ transform, opacity, filter }}>
      {MARKED.has(clean) ? (
        <motion.span className="mark-swipe" style={{ backgroundSize: mark }}>
          {word}
        </motion.span>
      ) : (
        word
      )}{' '}
    </motion.span>
  );
}

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const words = STATEMENT.split(' ');

  const text = 'heading mx-auto max-w-[19ch] text-center text-[clamp(34px,5.4vw,92px)] leading-[1.02]';

  if (reduce) {
    return (
      <section aria-label="What Barath does" className="px-[var(--gutter)] py-[clamp(96px,14vw,200px)]">
        <p className={text}>
          {words.map((w, i) => {
            const clean = w.replace(/[^a-z]/gi, '').toLowerCase();
            return MARKED.has(clean) ? (
              <span key={i}>
                <span className="mark-swipe" data-active="true">{w}</span>{' '}
              </span>
            ) : (
              `${w} `
            );
          })}
        </p>
      </section>
    );
  }

  return (
    <section ref={ref} aria-label="What Barath does" className="relative h-[230vh] max-sm:h-[170vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-[var(--gutter)]">
        <p className={text}>
          <span className="sr-only">{STATEMENT}</span>
          <span aria-hidden>
            {words.map((w, i) => (
              <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
