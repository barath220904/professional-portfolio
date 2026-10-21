import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { CONTACT, PERSONAL_DETAILS } from '../data';
import Reveal from '../components/Reveal';

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = 'Enter your name.';
  if (!f.email.trim()) errors.email = 'Enter your email so Barath can reply.';
  else if (!EMAIL_RE.test(f.email.trim())) errors.email = 'That email address looks incomplete, e.g. name@company.com.';
  if (f.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.';
  return errors;
}

function Row({ label, children, action }: { label: string; children: ReactNode; action?: ReactNode }) {
  return (
    <li>
      <div className="grid min-h-[clamp(88px,9vw,140px)] border-t border-ink grid-cols-[1fr_auto] items-end gap-x-6 gap-y-1.5 pt-5 pb-4 md:grid-cols-[160px_1fr_auto]">
        <span className="col-start-1 row-start-1 text-[length:var(--step-small)] font-semibold md:pb-[0.6em]">{label}</span>
        <span className="col-span-2 row-start-2 min-w-0 text-[clamp(20px,5.2vw,64px)] leading-[1.04] font-semibold tracking-[-0.03em] [overflow-wrap:anywhere] [font-stretch:104%] md:col-span-1 md:col-start-2 md:row-start-1 md:text-[clamp(22px,4.4vw,64px)]">
          {children}
        </span>
        <span className="col-start-2 row-start-1 justify-self-end md:col-start-3 md:pb-[0.3em]">{action}</span>
      </div>
    </li>
  );
}

function CopyEmail() {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setState('copied');
    } catch {
      setState('failed');
    }
    window.setTimeout(() => setState('idle'), 2200);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="press inline-flex items-center gap-2 bg-ink px-3.5 py-2.5 text-[length:var(--step-small)] font-semibold text-paper hover:bg-ink-soft"
    >
      {state === 'copied' ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      <span aria-live="polite">{state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy'}</span>
    </button>
  );
}

const linkAction = (label: string) => (
  <span className="inline-flex items-center gap-1.5 text-[length:var(--step-small)] font-semibold">
    {label} <ArrowUpRight className="h-4 w-4" aria-hidden />
  </span>
);

const INPUT =
  'w-full bg-paper px-4 py-3.5 text-[17px] text-ink placeholder:text-muted border-[1.5px] border-ink focus-visible:outline-offset-2 aria-[invalid=true]:border-[3px]';

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [handedOff, setHandedOff] = useState(false);
  const errors = validate(fields);
  const show = (k: keyof Fields) => (submitted || touched[k]) && errors[k];

  const update = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    setHandedOff(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const current = validate(fields);
    const firstInvalid = (Object.keys(current) as (keyof Fields)[])[0];
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const subject = fields.subject.trim() || `Message from ${fields.name.trim()} via your portfolio`;
    const body = `${fields.message.trim()}\n\n${fields.name.trim()}\n${fields.email.trim()}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  };

  const field = (k: keyof Fields) => ({
    id: `contact-${k}`,
    name: k,
    value: fields[k],
    onChange: update(k),
    onBlur: () => setTouched((t) => ({ ...t, [k]: true })),
    'aria-invalid': Boolean(show(k)) || undefined,
    'aria-describedby': show(k) ? `contact-${k}-error` : undefined,
  });

  const errorText = (k: keyof Fields) =>
    show(k) ? (
      <p id={`contact-${k}-error`} className="mt-1.5 text-[15px] font-semibold">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-[clamp(120px,16vw,240px)] bg-mark">
      <Reveal className="px-[var(--gutter)] pt-[clamp(72px,9vw,140px)] pb-[clamp(32px,4vw,56px)]">
        <h2 id="contact-title" className="heading max-w-[16ch] text-[length:var(--step-heading)]">
          Hiring for a graduate role? Let's talk.
        </h2>
      </Reveal>

      <ul className="mx-[var(--gutter)] border-b border-ink">
        <Row label="Email" action={<CopyEmail />}>
          <a href={`mailto:${CONTACT.email}`} className="no-underline hover:underline">
            {CONTACT.email}
          </a>
        </Row>
        <Row label="Phone" action={
            <a href={`tel:${CONTACT.phone}`} tabIndex={-1} aria-hidden className="no-underline">
              {linkAction('Call')}
            </a>
          }>
          <a href={`tel:${CONTACT.phone}`} className="no-underline hover:underline tabular">
            {CONTACT.phoneDisplay}
          </a>
        </Row>
        <Row
          label="LinkedIn"
          action={
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden className="no-underline">
              {linkAction('Open')}
            </a>
          }
        >
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="no-underline hover:underline">
            {CONTACT.linkedinDisplay}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Row>
        <Row
          label="GitHub"
          action={
            <a href={CONTACT.github} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden className="no-underline">
              {linkAction('Open')}
            </a>
          }
        >
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="no-underline hover:underline">
            {CONTACT.githubDisplay}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Row>
        <Row label="Résumé">
          <a href={CONTACT.resume} download="Barathkumar_V_Resume.pdf" className="no-underline hover:underline">
            Download résumé (PDF)
          </a>
        </Row>
        <Row label="Based in">
          {PERSONAL_DETAILS.location}
        </Row>
      </ul>

      <div className="grid gap-x-8 gap-y-8 px-[var(--gutter)] py-[clamp(64px,8vw,128px)] lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h3 className="heading text-[clamp(28px,2.8vw,40px)]">Or write it here</h3>
          <p className="mt-4 max-w-[38ch]">
            Sending opens your email app with this message filled in, addressed to Barath. Nothing is stored on this
            site.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-7 lg:col-start-6">
          <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-semibold">
                Your name
              </label>
              <input {...field('name')} type="text" autoComplete="name" required className={INPUT} />
              {errorText('name')}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-semibold">
                Your email
              </label>
              <input
                {...field('email')}
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                placeholder="name@company.com"
                className={INPUT}
              />
              {errorText('email')}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-subject" className="mb-2 block font-semibold">
                Subject <span className="font-normal">(optional)</span>
              </label>
              <input {...field('subject')} type="text" placeholder="e.g. Graduate software engineer role" className={INPUT} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block font-semibold">
                Message
              </label>
              <textarea {...field('message')} rows={5} required className={`${INPUT} resize-y`} />
              {errorText('message')}
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="press inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 font-semibold text-paper hover:bg-ink-soft"
              >
                <Mail className="h-4 w-4" aria-hidden /> Open in my email app
              </button>
              <p role="status" className="text-[15px]">
                {handedOff && (
                  <>
                    Your email app should now be open with the message ready to send. Nothing happened? Email{' '}
                    <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
                      {CONTACT.email}
                    </a>{' '}
                    directly.
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
