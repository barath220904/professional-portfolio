import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download } from 'lucide-react';
import { CONTACT } from '../data';
import { useDialog } from '../hooks/useDialog';
import { EASE_OUT } from '../components/Reveal';

export const NAV_SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['home', ...NAV_SECTIONS.map((s) => s.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function MobileMenu({ active, onClose }: { active: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useDialog(ref, onClose);
  return (
    <motion.div
      ref={ref}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[65] flex flex-col bg-paper px-[var(--gutter)] pb-8 md:hidden"
      initial={{ transform: 'translateY(-100%)' }}
      animate={{ transform: 'translateY(0%)', transition: { duration: 0.34, ease: [0.32, 0.72, 0, 1] } }}
      exit={{ transform: 'translateY(-100%)', transition: { duration: 0.22, ease: [0.32, 0.72, 0, 1] } }}
    >
      <div className="flex h-16 items-center justify-between">
        <a href="#home" onClick={onClose} className="text-[17px] font-bold no-underline [font-stretch:112%]">
          Barathkumar V
        </a>
        <button type="button" data-autofocus onClick={onClose} className="press -mr-2 px-3 py-2 text-[15px] font-semibold">
          Close
        </button>
      </div>
      <ul className="flex flex-1 flex-col justify-center gap-1">
        {NAV_SECTIONS.map((section, i) => (
          <motion.li
            key={section.id}
            initial={{ opacity: 0, transform: 'translateY(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)', transition: { delay: 0.1 + i * 0.04, duration: 0.3, ease: EASE_OUT } }}
          >
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                // The menu locks page scroll; release it first so the jump can happen
                e.preventDefault();
                document.body.style.overflow = '';
                onClose();
                history.replaceState(null, '', `#${section.id}`);
                const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                requestAnimationFrame(() =>
                  document.getElementById(section.id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }),
                );
              }}
              data-active={active === section.id}
              aria-current={active === section.id ? 'location' : undefined}
              className="mark-swipe heading inline-block py-1 text-[13vw] no-underline"
            >
              {section.label}
            </a>
          </motion.li>
        ))}
      </ul>
      <a
        href={CONTACT.resume}
        download="Barathkumar_V_Resume.pdf"
        className="press flex items-center justify-center gap-2 bg-mark px-5 py-4 font-semibold no-underline"
      >
        <Download className="h-4 w-4" aria-hidden /> Download résumé (PDF)
      </a>
    </motion.div>
  );
}

export default function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed top-2 left-2 z-[80] bg-mark px-4 py-3 font-semibold no-underline"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-[58] bg-paper">
        <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6 px-[var(--gutter)]">
          <a href="#home" className="text-[17px] font-bold tracking-[-0.01em] no-underline [font-stretch:112%]">
            Barathkumar V
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  data-active={active === section.id}
                  aria-current={active === section.id ? 'location' : undefined}
                  className="mark-swipe mx-2 py-1 text-[15px] font-medium no-underline"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href={CONTACT.resume}
                download="Barathkumar_V_Resume.pdf"
                className="press inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[15px] font-semibold text-paper no-underline hover:bg-ink-soft"
              >
                Résumé <Download className="h-4 w-4" aria-hidden />
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="press -mr-2 px-3 py-2 text-[15px] font-semibold md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </nav>
      </header>
      <AnimatePresence>{open && <MobileMenu active={active} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
