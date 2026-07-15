'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const personalInfo = {
  name: 'Kannan Sekar Annu Radha',
  bio: "I'm a software engineer and physics researcher at King's College London. My passion is building AI systems at the intersection of physics and computer science — probabilistic modelling, GPU acceleration, and edge AI.",
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
  website: 'https://sakannan.com',
};

type GridItem = {
  title: string;
  glyph?: string;
  mark?: 'sakannan';
  link: string;
  external?: boolean;
  spanCols?: boolean;
  spanRows?: boolean;
};

const gridItems: GridItem[] = [
  {
    title: 'hpc molecular simulation',
    glyph: '∇²ψ',
    link: 'https://github.com/KannanSA/New-C240-only-searches-Feb2024',
    external: true,
    spanCols: true,
  },
  {
    title: 'tetris ai',
    glyph: '▛▟',
    link: 'https://github.com/KannanSA/TetrisAI',
    external: true,
  },
  {
    title: 'ipong watch agent',
    glyph: '│●',
    link: 'https://github.com/KannanSA/iPong',
    external: true,
  },
  {
    title: 'ar lens · 2.88m views',
    glyph: '◉',
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
    external: true,
    spanRows: true,
  },
  {
    title: 'nlp nhs system',
    glyph: '✚',
    link: 'https://github.com/KannanSA/NLPK',
    external: true,
  },
  {
    title: 'yotecoin smart contract',
    glyph: 'Ξ',
    link: 'https://github.com/KannanSA/YoteCoin',
    external: true,
    spanCols: true,
  },
  {
    title: 'SAKannan · startup studio',
    mark: 'sakannan',
    link: '#top',
    spanCols: true,
  },
  {
    title: 'more on github',
    glyph: '↗',
    link: 'https://github.com/kannansa',
    external: true,
    spanCols: true,
  },
];

const experience = [
  {
    glyph: 'ψ',
    role: "Summer Researcher & KURF Fellow · King's College London",
    detail:
      'Physics-informed neural networks for carbon nanoclusters. +80% prediction accuracy, −60% simulation time. Jun 2025 — present.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    glyph: '⌘',
    role: 'Software Engineer & CEO · Kannan Industrials',
    detail:
      'Shipped iOS apps — 1minute DOEShelp, iPong, DabCounter. CoreML tuned for Apple Watch, 70% faster inference. 2021 — present.',
    link: 'https://github.com/kannansa',
  },
  {
    glyph: '◔',
    role: 'Research Intern · Kennedy Institute, Oxford',
    detail:
      'CNN workflows for biomedical imaging with mixed-precision GPU training. 40% over baselines. Nov 2019.',
    link: 'https://www.kennedy.ox.ac.uk/',
  },
  {
    glyph: '✚',
    role: 'Data Science Intern · NHS Digital',
    detail:
      'LSTM + Word2Vec clinical-note classification. ICD-9 coding accuracy 42% → 71%. Nov 2019.',
    link: 'https://digital.nhs.uk/',
  },
];

const education = [
  {
    glyph: 'φ',
    school: "BSc Physics · King's College London",
    detail:
      'Alessandro de Vita Computational Physics Prize 2024–25. Computational physics, quantum mechanics, statistical mechanics. 2024 — 2027.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    glyph: 'λ',
    school: 'MEng Computer Science · UCL',
    detail:
      'Algorithms, machine learning, theory of computation, distributed systems. 2021 — 2023.',
    link: 'https://www.ucl.ac.uk/',
  },
  {
    glyph: '∑',
    school: 'A Levels · Royal Grammar School, Newcastle',
    detail:
      'A*A*A* in Mathematics, Further Mathematics, and Physics. 2012 — 2019.',
    link: 'https://www.rgs.newcastle.sch.uk/',
  },
];

const stack = [
  { label: 'languages', items: 'python · c/c++ · swift · java · haskell · bash' },
  { label: 'ai / ml', items: 'tensorflow · pytorch · jax · coreml · scikit-learn' },
  { label: 'systems', items: 'gcp · aws · docker · kubernetes · cuda · ci/cd' },
  { label: 'research', items: 'openmp · lammps · slurm · airss · graphql' },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

const GREETINGS = ['hi.', 'வணக்கம்.', 'hola.'];
const REST_LINES = ["i'm", 'kannan.'];

// Split into grapheme clusters so Tamil combining marks type as whole letters.
function graphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
}

type TypedState = {
  greeting: string;
  rest: string[];
  cursorLine: number;
};

function useTypewriter() {
  const [state, setState] = useState<TypedState>({
    greeting: '',
    rest: REST_LINES.map(() => ''),
    cursorLine: 0,
  });

  useEffect(() => {
    const TYPE = 95;
    const DELETE = 50;
    const LINE_PAUSE = 420;
    const HOLD = 2400;
    const START = 500;

    let timer: ReturnType<typeof setTimeout>;
    let greetIdx = 0;

    const cur: TypedState = { greeting: '', rest: REST_LINES.map(() => ''), cursorLine: 0 };
    const render = () =>
      setState({ greeting: cur.greeting, rest: [...cur.rest], cursorLine: cur.cursorLine });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cur.greeting = GREETINGS[0];
      cur.rest = [...REST_LINES];
      render();
      const swap = () => {
        greetIdx = (greetIdx + 1) % GREETINGS.length;
        cur.greeting = GREETINGS[greetIdx];
        render();
        timer = setTimeout(swap, HOLD);
      };
      timer = setTimeout(swap, HOLD);
      return () => clearTimeout(timer);
    }

    const typeGreeting = (onDone: () => void) => {
      const chars = graphemes(GREETINGS[greetIdx]);
      let n = 0;
      cur.cursorLine = 0;
      const step = () => {
        n += 1;
        cur.greeting = chars.slice(0, n).join('');
        render();
        if (n < chars.length) timer = setTimeout(step, TYPE);
        else onDone();
      };
      timer = setTimeout(step, TYPE);
    };

    const deleteGreeting = (onDone: () => void) => {
      const chars = graphemes(cur.greeting);
      let n = chars.length;
      cur.cursorLine = 0;
      const step = () => {
        n -= 1;
        cur.greeting = chars.slice(0, Math.max(0, n)).join('');
        render();
        if (n > 0) timer = setTimeout(step, DELETE);
        else onDone();
      };
      timer = setTimeout(step, DELETE);
    };

    const typeRest = (lineIdx: number, onDone: () => void) => {
      if (lineIdx >= REST_LINES.length) {
        onDone();
        return;
      }
      const chars = graphemes(REST_LINES[lineIdx]);
      let n = 0;
      cur.cursorLine = lineIdx + 1;
      const step = () => {
        n += 1;
        cur.rest[lineIdx] = chars.slice(0, n).join('');
        render();
        if (n < chars.length) timer = setTimeout(step, TYPE);
        else timer = setTimeout(() => typeRest(lineIdx + 1, onDone), LINE_PAUSE);
      };
      timer = setTimeout(step, TYPE);
    };

    const cycle = () => {
      timer = setTimeout(() => {
        deleteGreeting(() => {
          greetIdx = (greetIdx + 1) % GREETINGS.length;
          timer = setTimeout(() => typeGreeting(cycle), 350);
        });
      }, HOLD);
    };

    timer = setTimeout(() => {
      typeGreeting(() => {
        timer = setTimeout(() => typeRest(0, cycle), LINE_PAUSE);
      });
    }, START);

    return () => clearTimeout(timer);
  }, []);

  return state;
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* Custom cursor                                                       */
/* ------------------------------------------------------------------ */

function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor) return;
    // Touch / coarse-pointer devices keep the native cursor.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.documentElement.classList.add('has-custom-cursor');

    const DEFAULT_SIZE = 36;
    let lockedTarget: HTMLElement | null = null;
    let pointerX = -999;
    let pointerY = 0;

    const releaseLockedTarget = () => {
      if (lockedTarget) {
        lockedTarget.style.removeProperty('--magnetic-x');
        lockedTarget.style.removeProperty('--magnetic-y');
      }
      lockedTarget = null;
      cursor.classList.remove('is-locked');
      cursor.style.borderRadius = '100%';
      cursor.style.transform = 'translate(-50%, -50%)';
    };

    const lockToTarget = (target: HTMLElement) => {
      const rect = target.getBoundingClientRect();
      const halfWidth = Math.max(rect.width / 2, 1);
      const halfHeight = Math.max(rect.height / 2, 1);
      const xRatio = Math.max(-1, Math.min(1, (pointerX - rect.left - halfWidth) / halfWidth));
      const yRatio = Math.max(-1, Math.min(1, (pointerY - rect.top - halfHeight) / halfHeight));
      const borderRadius = getComputedStyle(target).borderRadius || '0px';

      cursor.classList.add('is-locked');
      cursor.classList.remove('is-text');
      cursor.style.width = `${rect.width}px`;
      cursor.style.height = `${rect.height}px`;
      cursor.style.borderRadius = borderRadius;
      cursor.style.left = `${rect.left + halfWidth}px`;
      cursor.style.top = `${rect.top + halfHeight}px`;
      cursor.style.transform = `translate(calc(-50% + ${xRatio}px), calc(-50% + ${yRatio}px))`;

      target.style.setProperty('--magnetic-x', `${xRatio * 6}px`);
      target.style.setProperty('--magnetic-y', `${yRatio * 6}px`);
    };

    const onMove = (e: MouseEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      cursor.classList.add('is-visible');
      const target = e.target instanceof Element ? e.target : null;
      const nextLockedTarget = target?.closest<HTMLElement>('[data-cursor-lock]') ?? null;

      if (nextLockedTarget) {
        if (lockedTarget && lockedTarget !== nextLockedTarget) releaseLockedTarget();
        lockedTarget = nextLockedTarget;
        lockToTarget(nextLockedTarget);
        return;
      }

      if (lockedTarget) releaseLockedTarget();

      const text = target?.closest<HTMLElement>(
        'h1, h2, h3, h4, h5, h6, p, dd, dt, figcaption, blockquote, label, textarea',
      );

      cursor.style.left = `${pointerX}px`;
      cursor.style.top = `${pointerY}px`;

      if (text) {
        const fontSize = parseFloat(getComputedStyle(text).fontSize) || 17.6;
        cursor.classList.add('is-text');
        cursor.style.width = '3px';
        cursor.style.height = `${Math.round(fontSize * 1.4)}px`;
      } else {
        cursor.classList.remove('is-text');
        cursor.style.width = `${DEFAULT_SIZE}px`;
        cursor.style.height = `${DEFAULT_SIZE}px`;
      }
    };

    const onScroll = () => {
      if (lockedTarget) lockToTarget(lockedTarget);
    };
    const onLeave = () => {
      releaseLockedTarget();
      cursor.classList.remove('is-visible');
    };
    const onEnter = () => cursor.classList.add('is-visible');

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      releaseLockedTarget();
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

function Intro() {
  const typed = useTypewriter();
  const [composing, setComposing] = useState(false);
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (composing) textareaRef.current?.focus();
  }, [composing]);

  const send = () => {
    const subject = encodeURIComponent('hi kannan');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="flex min-h-screen items-center">
      <div className="container-ref py-24">
        {composing ? (
          <div>
            <textarea
              ref={textareaRef}
              className="composer"
              placeholder="Type your message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Your message"
            />
            <div className="mt-10 flex items-baseline gap-10">
              <button
                type="button"
                className="btn-ref"
                onClick={() => setComposing(false)}
                data-cursor-lock
              >
                <span className="btn-icon">←</span>
                <span className="btn-label">go back</span>
              </button>
              <button
                type="button"
                className="btn-ref"
                onClick={send}
                disabled={!message.trim()}
                data-cursor-lock
              >
                <span className="btn-label">send</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1
              className="text-[1.76rem] font-normal leading-[1.35]"
              aria-label={`hi. i'm kannan.`}
            >
              {[typed.greeting, ...typed.rest].map((text, i) => (
                <span key={i} aria-hidden="true" className="block">
                  {text}
                  {i === typed.cursorLine ? <span className="type-cursor" /> : null}
                </span>
              ))}
            </h1>
            <p className="body-copy mt-12">{personalInfo.bio}</p>
            <div className="mt-12">
              <button
                type="button"
                className="btn-ref"
                onClick={() => setComposing(true)}
                data-cursor-lock
              >
                <span className="btn-icon">→</span>
                <span className="btn-label">say hi</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Work grid                                                           */
/* ------------------------------------------------------------------ */

function SAKannanMark() {
  return (
    <div className="startup-mark" aria-label="SAKannan">
      <span className="startup-mark__sigil" aria-hidden="true">
        <span>S</span>
        <span>A</span>
      </span>
      <span className="startup-mark__word" aria-hidden="true">
        <span>SA</span>Kannan
      </span>
    </div>
  );
}

function WorkGrid() {
  return (
    <section aria-label="Selected projects">
      <div className="workgrid">
        {gridItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={`${item.spanCols ? 'span-2' : ''} ${item.spanRows ? 'row-2' : ''}`}
          >
            <div className={`tile ${item.mark ? 'tile--brand' : ''}`} data-cursor-lock>
              <div className="tile__title">{item.title}</div>
              <div className="tile__glyph" aria-hidden="true">
                {item.mark === 'sakannan' ? <SAKannanMark /> : item.glyph}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function SectionIntro({ title, copy }: { title: string; copy: string }) {
  return (
    <>
      <h1 className="section-title reveal">{title}</h1>
      <p className="body-copy reveal mt-8">{copy}</p>
    </>
  );
}

function Work() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-ref">
        <SectionIntro
          title="Work"
          copy="I build production systems where correctness and speed matter — from GPU research pipelines to models running on a watch."
        />
        <dl className="engagement mt-16">
          {experience.map((job, i) => (
            <a
              key={job.role}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="engagement__item reveal link-plain"
              style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
            >
              <span className="engagement__tile" aria-hidden="true" data-cursor-lock>
                {job.glyph}
              </span>
              <div>
                <dt>{job.role}</dt>
                <dd>{job.detail}</dd>
              </div>
            </a>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Study() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-ref">
        <SectionIntro
          title="Study"
          copy="Physics for the models, computer science for the systems. I like working where the two overlap."
        />
        <dl className="engagement mt-16">
          {education.map((edu, i) => (
            <a
              key={edu.school}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="engagement__item reveal link-plain"
              style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
            >
              <span className="engagement__tile" aria-hidden="true" data-cursor-lock>
                {edu.glyph}
              </span>
              <div>
                <dt>{edu.school}</dt>
                <dd>{edu.detail}</dd>
              </div>
            </a>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-ref">
        <SectionIntro
          title="Stack"
          copy="Tools I reach for. The common thread is making things fast and keeping them measurable."
        />
        <dl className="stack-list mt-16 reveal">
          {stack.map((row) => (
            <React.Fragment key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.items}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Reach() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-ref">
        <SectionIntro
          title="Reach"
          copy="Open to AI engineering, high-performance computing, and research roles. The fastest way to reach me is email."
        />
        <div className="mt-12 reveal">
          <a className="btn-ref" href={`mailto:${personalInfo.email}`} data-cursor-lock>
            <span className="btn-icon">→</span>
            <span className="btn-label">{personalInfo.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="py-14">
      <div className="container-ref flex flex-wrap items-baseline justify-between gap-6 small-copy">
        <div className="flex items-baseline gap-6">
          <a className="link-plain" href="#top" aria-label="Back to top" data-cursor-lock>
            ⌂
          </a>
          <a
            className="link-plain"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
          >
            github
          </a>
          <a
            className="link-plain"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
          >
            linkedIn
          </a>
        </div>
        <p style={{ color: 'var(--faint)' }}>made in London</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  useReveal();

  return (
    <main id="top">
      <CustomCursor />
      <Intro />
      <WorkGrid />
      <Work />
      <Study />
      <Stack />
      <Reach />
      <Footer />
    </main>
  );
}
