import { useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { ProjectFigure } from '../types';

interface PipelineFigureProps {
  figure: ProjectFigure;
  title: string;
  className?: string;
  /** 'view' draws when scrolled into view; 'mount' draws immediately (inside dialogs). */
  trigger?: 'view' | 'mount';
}

const W = 400;
const H = 500;
const NODE_X = 36;
const NODE_W = 292;
const NODE_H = 60;
const GAP = 30;
const LOOP_X = NODE_X + NODE_W + 34;

/**
 * A project's real pipeline drawn as a textbook figure: one box per step, top to bottom,
 * the core step filled with the highlighter. Steps come straight from the project's data.
 */
export default function PipelineFigure({ figure, title, className = '', trigger = 'view' }: PipelineFigureProps) {
  const { steps, loop } = figure;
  const total = steps.length * NODE_H + (steps.length - 1) * GAP;
  const top = (H - total) / 2;
  const nodeY = (i: number) => top + i * (NODE_H + GAP);
  const cx = NODE_X + NODE_W / 2;
  const arrowId = `arrow${useId().replace(/:/g, '')}`;
  const reduce = useReducedMotion();
  // Drawn like a figure on paper: each box strokes in, then its arrow, top to bottom
  const STEP = 0.14;
  const draw = (delay: number) => ({
    custom: delay,
    variants: {
      hidden: { pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 },
      shown: (d: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { duration: reduce ? 0 : 0.4, ease: [0.65, 0, 0.35, 1] as const, delay: reduce ? 0 : d },
          opacity: { duration: 0.01, delay: reduce ? 0 : d },
        },
      }),
    },
  });
  const appear = (delay: number) => ({
    custom: delay,
    variants: {
      hidden: { opacity: reduce ? 1 : 0 },
      shown: (d: number) => ({ opacity: 1, transition: { duration: reduce ? 0 : 0.3, delay: reduce ? 0 : d } }),
    },
  });

  return (
    <motion.svg
      initial="hidden"
      {...(trigger === 'mount' ? { animate: 'shown' } : { whileInView: 'shown', viewport: { once: true, amount: 0.2 } })}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Pipeline of ${title}: ${steps.map((s) => s.label).join(', then ')}.`}
      className={`block h-full w-full ${className}`}
    >
      <defs>
        <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink)" />
        </marker>
      </defs>

      {steps.slice(0, -1).map((_, i) => (
        <motion.line
          {...draw((i + 1) * STEP + 0.12)}
          key={`edge-${i}`}
          x1={cx}
          y1={nodeY(i) + NODE_H}
          x2={cx}
          y2={nodeY(i + 1) - 2}
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          markerEnd={`url(#${arrowId})`}
        />
      ))}

      {loop && (
        <motion.g {...appear(steps.length * STEP + 0.2)}>
          <path
            d={`M ${NODE_X + NODE_W} ${nodeY(loop.from) + NODE_H / 2} H ${LOOP_X} V ${nodeY(loop.to) + NODE_H / 2} H ${NODE_X + NODE_W + 2}`}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            markerEnd={`url(#${arrowId})`}
          />
          <text
            x={LOOP_X + 16}
            y={(nodeY(loop.from) + nodeY(loop.to) + NODE_H) / 2}
            transform={`rotate(-90 ${LOOP_X + 16} ${(nodeY(loop.from) + nodeY(loop.to) + NODE_H) / 2})`}
            textAnchor="middle"
            fontSize="13"
            fill="var(--color-muted)"
          >
            {loop.label}
          </text>
        </motion.g>
      )}

      {steps.map((step, i) => {
        const y = nodeY(i);
        return (
          <g key={step.label}>
            <motion.rect
              {...appear(i * STEP + 0.3)}
              x={NODE_X}
              y={y}
              width={NODE_W}
              height={NODE_H}
              fill={step.model ? 'var(--color-mark)' : 'var(--color-paper)'}
            />
            <motion.rect
              {...draw(i * STEP)}
              x={NODE_X}
              y={y}
              width={NODE_W}
              height={NODE_H}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="1.5"
            />
            <motion.text
              {...appear(i * STEP + 0.22)}
              x={NODE_X + 16}
              y={step.tool ? y + 26 : y + NODE_H / 2 + 6}
              fontSize="17"
              fontWeight="600"
              fill="var(--color-ink)"
            >
              {step.label}
            </motion.text>
            {step.tool && (
              <motion.text {...appear(i * STEP + 0.28)} x={NODE_X + 16} y={y + 46} fontSize="13" fill="var(--color-muted)">
                {step.tool}
              </motion.text>
            )}
          </g>
        );
      })}
    </motion.svg>
  );
}
