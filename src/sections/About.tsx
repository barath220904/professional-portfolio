import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION, INTERESTS, PERSONAL_DETAILS } from '../data';
import Reveal from '../components/Reveal';
import portrait from '../assets/barath-portrait.jpg';

const FACTS = [
  { label: 'Based in', value: PERSONAL_DETAILS.location },
  { label: 'Degree', value: 'B.Tech, Artificial Intelligence & Data Science, PACET, 2022–2026' },
  { label: 'CGPA', value: '7.75' },
  { label: 'Languages', value: PERSONAL_DETAILS.languages.join(', ') },
  { label: 'Nationality', value: PERSONAL_DETAILS.nationality },
];

function Record({ title, items }: { title: string; items: { text: string; note?: string }[] }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item.text} className="flex items-baseline justify-between gap-6 text-[15px] leading-snug">
            <span>{item.text}</span>
            {item.note && <span className="shrink-0 text-muted tabular">{item.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const school = EDUCATION.slice(1).map((e) => ({
    text: `${e.degree.replace(/ \(.*\)/, '')}, ${e.institute}, ${e.stats.replace('Score: ', '')}`,
    note: e.year.replace('Graduated ', ''),
  }));

  return (
    <section id="about" aria-labelledby="about-title" className="px-[var(--gutter)] pt-[clamp(120px,16vw,240px)]">
      <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-4">
          <img
            src={portrait}
            alt="Barathkumar V, studio portrait"
            width={880}
            height={1142}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full max-w-[400px] object-cover object-top"
          />
          <dl className="mt-6 grid max-w-[400px] grid-cols-2 gap-x-6 gap-y-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className={fact.label === 'Degree' || fact.label === 'Based in' ? 'col-span-2' : ''}>
                <dt className="text-[length:var(--step-small)] text-muted">{fact.label}</dt>
                <dd className="font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-8">
          <Reveal>
            <h2 id="about-title" className="heading text-[length:var(--step-heading)]">
              About Barath
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-[40ch] text-[clamp(20px,1.75vw,26px)] leading-[1.38] font-medium">
              I'm a B.Tech graduate in Artificial Intelligence and Data Science who likes the whole path from raw data to
              a screen someone uses: preprocessing and modelling in Python, putting models behind Flask or FastAPI
              services, and building responsive interfaces in React.
            </p>
            <p className="mt-5 max-w-[62ch] text-muted">
              I'm proficient in Python, Java and C, and have trained with TensorFlow, OpenCV and Scikit-Learn. I'm looking
              for an entry-level engineering role where I can apply predictive modelling, natural language processing and
              full-stack work. Areas of interest: {INTERESTS.join(', ')}.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-[clamp(48px,6vw,88px)] grid gap-x-12 gap-y-10 md:grid-cols-2">
            <Record title="Certifications" items={CERTIFICATIONS.map((text) => ({ text }))} />
            <Record title="Achievements" items={ACHIEVEMENTS.map((text) => ({ text }))} />
            <Record title="School" items={school} />
            <Record title="Outside work" items={PERSONAL_DETAILS.hobbies.map((text) => ({ text }))} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
