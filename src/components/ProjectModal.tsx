import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, X } from 'lucide-react';
import { CATEGORY_LABEL, CONTACT } from '../data';
import { useDialog } from '../hooks/useDialog';
import type { Project } from '../types';
import PipelineFigure from './PipelineFigure';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  prevTitle: string;
  nextTitle: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ProjectModal({ project, onClose, onPrev, onNext, prevTitle, nextTitle }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useDialog(panelRef, onClose);
  const titleId = `${project.id}-title`;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-stretch justify-center bg-ink/60 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.16 } }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex w-full max-w-[1180px] flex-col overflow-hidden bg-paper shadow-[0_24px_60px_-12px_rgba(18,19,22,0.45)] sm:max-h-[90vh]" /* taste-skill-ignore: floating overlay */
        initial={{ opacity: 0, transform: 'translateY(16px) scale(0.98)' }}
        animate={{ opacity: 1, transform: 'translateY(0px) scale(1)', transition: { duration: 0.28, ease: EASE_OUT } }}
        exit={{ opacity: 0, transform: 'translateY(8px) scale(0.99)', transition: { duration: 0.16, ease: EASE_OUT } }}
      >
        <div className="flex items-center justify-between gap-4 bg-paper px-5 py-3 sm:px-7">
          <p className="text-[length:var(--step-small)] text-muted">
            {CATEGORY_LABEL[project.category]}
            {project.year && <span className="tabular"> · {project.year}</span>}
          </p>
          <button
            type="button"
            onClick={onClose}
            data-autofocus
            className="press inline-flex items-center gap-2 px-3 py-2 text-[length:var(--step-small)] font-semibold hover:bg-surface"
          >
            Close <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:overflow-hidden">
          <figure className="flex flex-col bg-surface p-5 sm:p-7 md:overflow-y-auto">
            <div className="mx-auto aspect-[4/5] w-full max-w-[420px] max-md:max-h-[52vh]">
              <PipelineFigure key={project.id} figure={project.figure} title={project.title} trigger="mount" />
            </div>
            <figcaption className="mx-auto mt-4 w-full max-w-[420px] text-[length:var(--step-small)] text-muted">
              Figure. {project.figure.caption}
            </figcaption>
          </figure>

          <div className="px-5 pt-6 pb-8 sm:px-8 md:overflow-y-auto">
            <h2 id={titleId} className="heading text-[length:var(--step-heading)]">
              {project.title}
            </h2>
            <p className="mt-3 text-[length:var(--step-lead)] leading-snug text-muted">{project.subtitle}</p>

            <div className="mt-8 max-w-[68ch] space-y-8">
              <section>
                <h3 className="text-[length:var(--step-body)] font-bold">Overview</h3>
                <p className="mt-2">{project.longDescription}</p>
              </section>

              <section>
                <h3 className="text-[length:var(--step-body)] font-bold">What it does</h3>
                <ul className="mt-2 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="grid grid-cols-[14px_1fr] gap-3">
                      <span aria-hidden className="mt-[0.6em] h-[3px] w-[14px] bg-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-[length:var(--step-body)] font-bold">How it is built</h3>
                <p className="mt-2">{project.implementation}</p>
              </section>

              <section>
                <h3 className="text-[length:var(--step-body)] font-bold">Stack</h3>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="bg-surface px-3 py-1.5 text-[length:var(--step-small)] font-medium">
                      {tag}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-label="Links" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="press inline-flex items-center justify-center gap-2 bg-ink px-5 py-3.5 font-semibold text-paper hover:bg-ink-soft"
                  >
                    <Github className="h-4 w-4" aria-hidden /> View source on GitHub
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="inline-flex items-center gap-2 border-[1.5px] border-dashed border-muted px-5 py-3 text-muted">
                    Repository not public yet.{' '}
                    <a href={CONTACT.github} target="_blank" rel="noreferrer" className="font-semibold text-ink underline">
                      Browse GitHub profile
                    </a>
                  </p>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="press inline-flex items-center justify-center gap-2 bg-mark px-5 py-3.5 font-semibold text-ink hover:bg-mark-2"
                  >
                    Open live demo <ArrowUpRight className="h-4 w-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="inline-flex items-center border-[1.5px] border-dashed border-muted px-5 py-3 text-muted">
                    No live demo yet
                  </p>
                )}
              </section>
            </div>
          </div>
        </div>

        {nextTitle !== project.title && (
        <nav aria-label="Other projects" className="grid grid-cols-2 bg-surface-2 text-[length:var(--step-small)]">
          <button
            type="button"
            onClick={onPrev}
            className="press flex items-center gap-2 px-5 py-4 text-left font-semibold hover:bg-surface sm:px-7"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">
              <span className="sr-only">Previous project: </span>
              {prevTitle}
            </span>
          </button>
          <button
            type="button"
            onClick={onNext}
            className="press flex items-center justify-end gap-2 px-5 py-4 text-right font-semibold hover:bg-surface sm:px-7"
          >
            <span className="truncate">
              <span className="sr-only">Next project: </span>
              {nextTitle}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        </nav>
        )}
      </motion.div>
    </motion.div>
  );
}
