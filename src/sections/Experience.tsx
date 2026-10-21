import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { TIMELINE } from '../data';
import Reveal, { EASE_OUT } from '../components/Reveal';

export default function Experience() {
  const [open, setOpen] = useState<string | null>(TIMELINE[0].id);

  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-[clamp(120px,16vw,240px)]">
      <Reveal className="px-[var(--gutter)]">
        <h2 id="experience-title" className="heading text-[length:var(--step-heading)]">
          Experience & education
        </h2>
        <p className="mt-4 max-w-[52ch] text-muted">Three internships across AI, web development and data science, and the degree behind them.</p>
      </Reveal>

      <ul className="mt-[clamp(32px,5vw,72px)]">
        {TIMELINE.map((item, i) => {
          const isOpen = open === item.id;
          const panelId = `${item.id}-details`;
          return (
            <Reveal
              as="li"
              key={item.id}
              delay={i * 0.06}
              rise={24}
              className={isOpen ? 'bg-surface pt-[clamp(16px,2vw,28px)]' : ''}
              style={{ transition: 'background-color 240ms ease, padding-top 240ms ease' }}
            >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    data-active={isOpen}
                    className="mark-host group grid w-full grid-cols-1 items-baseline gap-x-8 gap-y-2 px-[var(--gutter)] py-[clamp(14px,1.6vw,24px)] text-left md:grid-cols-[minmax(0,1fr)_auto]"
                  >
                    <span className="display text-[clamp(64px,8.6vw,150px)] whitespace-nowrap uppercase [font-stretch:100%] max-sm:text-[12.5vw]">
                      <span className="mark-swipe">{item.short}</span>
                    </span>
                    <span className="flex items-baseline justify-between gap-6 text-[length:var(--step-lead)] md:justify-end md:text-right">
                      <span>
                        <span className="block font-semibold leading-tight">{item.title}</span>
                        <span className="block text-[length:var(--step-body)] text-muted tabular">{item.date}</span>
                      </span>
                      <span aria-hidden className="translate-y-1 self-center">
                        {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-label={`${item.subtitle} details`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { duration: 0.34, ease: EASE_OUT } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: EASE_OUT } }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 px-[var(--gutter)] pt-2 pb-[clamp(28px,3vw,44px)] md:grid-cols-12">
                        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 self-start md:col-span-4 md:grid-cols-1 lg:col-span-3">
                          <div>
                            <dt className="text-[length:var(--step-small)] text-muted">{item.type === 'Education' ? 'Institution' : 'Company'}</dt>
                            <dd className="font-semibold">{item.subtitle}</dd>
                          </div>
                          <div>
                            <dt className="text-[length:var(--step-small)] text-muted">Location</dt>
                            <dd className="font-semibold">{item.location}</dd>
                          </div>
                          <div>
                            <dt className="text-[length:var(--step-small)] text-muted">{item.type === 'Education' ? 'Result' : 'Type'}</dt>
                            <dd className="font-semibold">{item.type === 'Education' ? item.stats : item.accentTag}</dd>
                          </div>
                        </dl>
                        <div className="md:col-span-8 lg:col-span-7">
                          <p className="text-[length:var(--step-lead)] leading-snug">{item.description}</p>
                          <ul className="mt-5 space-y-2.5">
                            {item.bulletPoints.map((point) => (
                              <li key={point} className="grid max-w-[70ch] grid-cols-[14px_1fr] gap-3">
                                <span aria-hidden className="mt-[0.7em] h-[3px] w-[14px] bg-ink" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
