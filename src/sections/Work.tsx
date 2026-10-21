import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Github } from 'lucide-react';
import { CATEGORY_LABEL, PROJECTS } from '../data';
import type { Project, ProjectCategory } from '../types';
import PipelineFigure from '../components/PipelineFigure';
import Reveal, { EASE_OUT } from '../components/Reveal';

type Filter = 'all' | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'Artificial intelligence' },
  { id: 'web', label: 'Web' },
  { id: 'tools', label: 'Accessibility & utilities' },
];

const SHORT_CATEGORY: Record<ProjectCategory, string> = { ai: 'AI / ML', web: 'Web', tools: 'Utility' };

function Ticket({ project }: { project: Project }) {
  return (
    <span className="text-[length:var(--step-small)] font-medium text-muted tabular">
      {SHORT_CATEGORY[project.category]}
      {project.year && ` · ${project.year}`}
    </span>
  );
}

function RepoStatus({ project }: { project: Project }) {
  return project.repoUrl ? (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-[length:var(--step-small)] font-semibold underline"
    >
      <Github className="h-4 w-4" aria-hidden /> Source on GitHub<span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <span className="text-[length:var(--step-small)] text-muted">Repository not public yet</span>
  );
}

interface WorkProps {
  onOpen: (project: Project, list: Project[]) => void;
}

export default function Work({ onOpen }: WorkProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = useMemo(() => PROJECTS.filter((p) => filter === 'all' || p.category === filter), [filter]);
  const featured = visible.filter((p) => p.featured);
  const supporting = visible.filter((p) => !p.featured);
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = visible.find((p) => p.id === activeId) ?? visible[0];

  const choose = (next: Filter) => {
    setFilter(next);
    const first = PROJECTS.find((p) => next === 'all' || p.category === next);
    if (first) setActiveId(first.id);
  };

  const count = (f: Filter) => PROJECTS.filter((p) => f === 'all' || p.category === f).length;

  return (
    <section id="work" aria-labelledby="work-title" className="px-[var(--gutter)] pt-[clamp(72px,9vw,140px)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <h2 id="work-title" className="heading text-[length:var(--step-heading)]">
            Selected work
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            Machine learning, computer vision and web projects. Each figure is the project's actual pipeline.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div role="group" aria-label="Filter projects by area" className="-mx-2 flex flex-wrap gap-x-1 gap-y-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                data-active={filter === f.id}
                onClick={() => choose(f.id)}
                className="mark-swipe press mx-2 py-1 text-[15px] font-semibold"
              >
                {f.label} <span className="font-normal text-muted tabular">{count(f.id)}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-[clamp(40px,6vw,88px)] grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <AnimatePresence mode="popLayout" initial={false}>
            {featured.length > 0 && (
              <motion.ul
                key={`featured-${filter}`}
                aria-label="Featured projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.22 } }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                className="space-y-1"
              >
                {featured.map((project, i) => (
                  <motion.li
                    key={project.id}
                    initial={{ opacity: 0, transform: 'translateY(12px)' }}
                    whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
                    viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: i * 0.06 }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(project.id)}
                      onFocus={() => setActiveId(project.id)}
                      onClick={() => onOpen(project, visible)}
                      data-active={active?.id === project.id}
                      className="mark-host group grid w-full grid-cols-1 gap-x-6 gap-y-2 py-3 text-left sm:grid-cols-[1fr_auto] sm:items-baseline"
                    >
                      <span className="heading text-[length:var(--step-heading)]">
                        <span className="mark-swipe">{project.title}</span>
                      </span>
                      <Ticket project={project} />
                      <span className="max-w-[58ch] text-muted lg:hidden">{project.description}</span>
                      {/* Below lg there is no sticky frame, so each featured project carries its own figure */}
                      <span className="mt-2 block w-full max-w-[340px] bg-surface p-4 lg:hidden">
                        <span className="block aspect-[4/5]">
                          <PipelineFigure figure={project.figure} title={project.title} />
                        </span>
                        <span className="mt-2 block text-[length:var(--step-small)] text-muted">Figure. {project.figure.caption}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[length:var(--step-small)] font-semibold lg:hidden">
                        Read the case study <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {supporting.length > 0 && (
            <div className={featured.length ? 'mt-[clamp(48px,6vw,80px)]' : ''}>
              <h3 className="text-[length:var(--step-body)] font-bold">Also built</h3>
              <ul aria-label="Other projects" className="mt-3">
                {supporting.map((project) => (
                  <li key={project.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(project.id)}
                      onFocus={() => setActiveId(project.id)}
                      onClick={() => onOpen(project, visible)}
                      data-active={active?.id === project.id}
                      className="mark-host grid w-full grid-cols-1 gap-x-6 gap-y-1 py-2.5 text-left sm:grid-cols-[1fr_auto] sm:items-baseline"
                    >
                      <span className="text-[length:var(--step-lead)] font-semibold tracking-[-0.01em]">
                        <span className="mark-swipe">{project.title}</span>
                      </span>
                      <Ticket project={project} />
                      <span className="max-w-[58ch] text-[15px] text-muted lg:hidden">{project.description}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fixed preview: the active project's figure plate */}
        <aside aria-label="Project preview" className="hidden lg:col-span-5 lg:block">
          {active && (
            <div className="sticky top-[calc(64px+6vh)]">
              <div className="relative aspect-[4/5] w-full max-w-[460px] bg-surface p-6">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active.id}
                    className="absolute inset-6"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.22 } }}
                    exit={{ opacity: 0, filter: 'blur(4px)', transition: { duration: 0.16 } }}
                  >
                    <PipelineFigure figure={active.figure} title={active.title} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 max-w-[460px]">
                <p className="text-[length:var(--step-small)] text-muted">
                  Figure. {active.figure.caption}
                </p>
                <p className="mt-4">{active.description}</p>
                <p className="mt-3 text-[length:var(--step-small)] text-muted">
                  {CATEGORY_LABEL[active.category]} · {active.tags.join(', ')}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    type="button"
                    onClick={() => onOpen(active, visible)}
                    className="press inline-flex items-center gap-2 bg-ink px-5 py-3 font-semibold text-paper hover:bg-ink-soft"
                  >
                    Read the case study <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                  <RepoStatus project={active} />
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
