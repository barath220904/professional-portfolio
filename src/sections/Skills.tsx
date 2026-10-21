import { SKILL_LAYERS } from '../data';
import Reveal from '../components/Reveal';

const BAND = ['bg-surface', 'bg-surface-2', 'bg-surface'];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-[clamp(120px,16vw,240px)]">
      <div className="grid gap-6 px-[var(--gutter)] lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 id="skills-title" className="heading text-[length:var(--step-heading)]">
            Skills, layer by layer
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="max-w-[46ch] text-muted">
            Grouped the way an application is built. The first line of each layer is what the projects lean on most;
            the order is not a rating.
          </p>
        </Reveal>
      </div>

      <ol className="mt-[clamp(32px,5vw,64px)]" aria-label="Skill layers, from interface down to model">
        {[...SKILL_LAYERS].reverse().map((layer, i) => (
          <Reveal as="li" key={layer.id} delay={i * 0.07} className={BAND[i]}>
            <div className="grid gap-x-8 gap-y-5 px-[var(--gutter)] py-[clamp(28px,3.4vw,52px)] lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="heading text-[length:var(--step-heading)]">{layer.name}</h3>
                <p className="mt-2 text-muted">{layer.summary}</p>
              </div>
              <div className="lg:col-span-8 lg:pt-2">
                <ul className="flex flex-wrap gap-x-[1.1em] gap-y-1 text-[length:var(--step-lead)] font-semibold tracking-[-0.01em]">
                  {layer.primary.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="mt-4 max-w-[70ch] text-muted">Also works with {layer.supporting.join(', ')}.</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
