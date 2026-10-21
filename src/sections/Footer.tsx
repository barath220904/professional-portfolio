import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT } from '../data';
import Reveal from '../components/Reveal';

const LINK = 'inline-flex items-center gap-1.5 py-1 text-[16px] text-paper no-underline hover:underline';

export default function Footer() {
  return (
    <footer className="on-ink relative flex min-h-[86svh] flex-col overflow-hidden bg-ink text-paper">
      <div className="grid gap-x-8 gap-y-10 px-[var(--gutter)] pt-[clamp(72px,9vw,140px)] lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="heading max-w-[14ch] text-[length:var(--step-heading)]">Have a role in mind?</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="press mt-8 inline-flex items-center gap-2.5 bg-mark px-6 py-4 font-semibold text-ink no-underline hover:bg-mark-2"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden /> Email Barath
          </a>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-3 lg:col-start-10">
          <ul className="flex flex-col gap-1">
            <li>
              <a className={LINK} href={CONTACT.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className={LINK} href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className={LINK} href={CONTACT.resume} download="Barathkumar_V_Resume.pdf">
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 px-[var(--gutter)] pt-16 pb-3 text-[length:var(--step-small)] text-paper-dim">
          <p>© {new Date().getFullYear()} Barathkumar V</p>
          <p>Built with React, Tailwind CSS and Motion</p>
        </div>
        <p
          aria-hidden
          className="display translate-y-[18%] px-[var(--gutter)] text-[12.2vw] whitespace-nowrap uppercase select-none [font-stretch:100%]"
        >
          Barathkumar
        </p>
      </div>
    </footer>
  );
}
