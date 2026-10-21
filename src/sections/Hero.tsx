import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { CONTACT, PERSONAL_DETAILS } from '../data';
import { EASE_OUT } from '../components/Reveal';
import { INTRO_DELAY } from '../components/Intro';
import portrait from '../assets/barath-portrait.jpg';

const NAME = 'Barathkumar V';

/** One half of the loop: two copies of the name, each followed by a dot. Rendered twice for a seamless -50% loop. */
function TrackHalf({ hidden }: { hidden?: boolean }) {
  return (
    <span className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[0, 1].map((i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap">{i === 0 && !hidden ? NAME : <span aria-hidden>{NAME}</span>}</span>
          <span aria-hidden className="mx-[0.3em] inline-block h-[0.2em] w-[0.2em] bg-current" />
        </span>
      ))}
    </span>
  );
}

function rise(delay: number) {
  return {
    initial: { opacity: 0, transform: 'translateY(16px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: { duration: 0.7, ease: EASE_OUT, delay: delay + INTRO_DELAY },
  };
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16 [--mq:clamp(92px,13vw,214px)] [--sq:clamp(200px,min(25vw,37vh),400px)] max-sm:[--mq:30vw] max-sm:[--sq:62vw] [--fh:calc(var(--sq)*1.3)]"
    >
      <div className="relative flex flex-1 flex-col items-center justify-center py-8">
        {/* The stage: a 4:5 portrait with the name travelling across his jacket */}
        <div className="relative w-full" style={{ height: 'var(--fh)' }}>
          <motion.img
            src={portrait}
            alt="Portrait of Barathkumar V in a black suit against a grey studio background"
            width={880}
            height={1142}
            fetchPriority="high"
            className="absolute top-0 left-1/2 h-[var(--fh)] w-[var(--sq)] -translate-x-1/2 object-cover object-top"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.05 + INTRO_DELAY }}
          />

          {/* The name is painted on the first frame; the portrait reveal and the curtain are its entrance */}
          <div
            className="marquee-pause absolute inset-x-0"
            style={{ top: 'calc(var(--fh) - var(--mq) * 0.92 - var(--sq) * 0.035)' }}
          >
            <h1 className="display relative text-[length:var(--mq)] leading-[0.8]">
              <span className="marquee-track py-[0.06em]">
                <TrackHalf />
                <TrackHalf hidden />
              </span>
            </h1>
            {/* Paper-coloured copy, visible only where it crosses the portrait */}
            <div
              aria-hidden
              className="display pointer-events-none absolute inset-0 text-[length:var(--mq)] leading-[0.8] text-paper"
              style={{ clipPath: 'inset(0 calc(50% - var(--sq) / 2))' }}
            >
              <span className="marquee-track py-[0.06em]">
                <TrackHalf hidden />
                <TrackHalf hidden />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(32px,6vh,72px)] px-[var(--gutter)] text-center">
          <motion.p {...rise(0.45)} className="mx-auto max-w-[44ch] text-[length:var(--step-lead)] leading-[1.3] font-medium text-balance">
            I build machine-learning models, the software around them, and the interfaces people use.
          </motion.p>
          <motion.p {...rise(0.55)} className="mt-4 text-[length:var(--step-body)] text-muted">
            B.Tech in Artificial Intelligence & Data Science, 2022–2026. Open to entry-level roles and freelance work.
          </motion.p>
        </div>
      </div>

      <motion.div
        {...rise(0.65)}
        className="flex flex-col-reverse gap-4 px-[var(--gutter)] pb-[max(20px,3vh)] sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="text-[15px] text-muted max-sm:text-center">{PERSONAL_DETAILS.location}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a href="#work" className="press inline-flex items-center justify-center gap-2 px-2 py-3 font-semibold underline">
            See the work <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={CONTACT.resume}
            download="Barathkumar_V_Resume.pdf"
            className="press inline-flex items-center justify-center gap-2.5 bg-mark px-6 py-4 font-semibold text-ink no-underline hover:bg-mark-2"
          >
            <Download className="h-[18px] w-[18px]" aria-hidden /> Download résumé
          </a>
        </div>
      </motion.div>
    </section>
  );
}
