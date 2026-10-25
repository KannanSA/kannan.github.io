'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const personalInfo = {
  name: 'Kannan Sekar Annu Radha',
  bio: "I'm a software engineer and physics student at King's College London. I lead healthcare technology projects and develop independent iOS apps. My research background spans carbon nanoclusters, GPU acceleration, and edge AI.",
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
  website: 'https://sakannan.com',
};

type GridItem = {
  title: string;
  context: string;
  glyph?: string;
  mark?: 'sakannan';
  link: string;
  external?: boolean;
};

const gridItems: GridItem[] = [
  {
    title: 'HPC simulations',
    context: 'Carbon nanocluster research',
    glyph: '∇²ψ',
    link: '#research',
  },
  {
    title: 'Clinical NLP',
    context: 'NHS Digital',
    glyph: '✚',
    link: 'https://github.com/KannanSA/NLPK',
    external: true,
  },
  {
    title: 'Healthcare platforms',
    context: 'Websites & chatbots',
    glyph: '⌁',
    link: 'https://globaltravelvaccinations.com',
    external: true,
  },
  {
    title: 'iPong',
    context: 'Apple Watch app',
    glyph: '│●',
    link: 'https://github.com/KannanSA/iPong',
    external: true,
  },
  {
    title: 'AR lenses',
    context: 'Snap AR · 2.5M+ views',
    glyph: '◉',
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
    external: true,
  },
  {
    title: 'Tetris AI',
    context: 'Machine learning',
    glyph: '▛▟',
    link: 'https://github.com/KannanSA/TetrisAI',
    external: true,
  },
  {
    title: 'YoteCoin',
    context: 'Smart contract',
    glyph: 'Ξ',
    link: 'https://github.com/KannanSA/YoteCoin',
    external: true,
  },
  {
    title: 'SAKannan',
    context: 'Startup studio',
    mark: 'sakannan',
    link: '#top',
  },
];

type EngagementItem = {
  id?: string;
  glyph: string;
  title: string;
  organisation: string;
  dates?: string;
  detail: string;
  link: string;
};

const experience: EngagementItem[] = [
  {
    glyph: '✚',
    title: 'PCN Tech Lead',
    organisation: 'NHS England / Galleries Medical Practice',
    dates: 'Nov 2025 – Present',
    detail: 'Developing healthcare websites, chatbots, and iOS products, including Global Travel Vaccinations. Responsible for interfaces, backend services, deployment, and reliability.',
    link: 'https://globaltravelvaccinations.com',
  },
  {
    id: 'research',
    glyph: 'ψ',
    title: 'Research Fellow (KURF)',
    organisation: "King's College London",
    dates: 'May – Nov 2025',
    detail: 'Applied physics-informed machine learning to carbon nanoclusters. Ran LAMMPS simulations on HPC clusters and analysed 5,000+ structures using OVITO, TensorFlow, and CUDA, in collaboration with Penn State researchers.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    glyph: '⌘',
    title: 'iOS Developer & Founder',
    organisation: 'Kannan Industrials',
    dates: 'Feb 2021 – Present',
    detail: 'Developed 1minuteDOEShelp, iPong, DabCounter, and OK Gym. Technical work includes Core ML and Apple Watch motion classification. Other projects include Face Rift AR, IceFiSh Browser, and GrokTube.',
    link: 'https://github.com/KannanSA',
  },
  {
    glyph: '◔',
    title: 'Research Intern',
    organisation: 'Kennedy Institute of Rheumatology, Oxford',
    dates: 'Nov 2019',
    detail: 'Conducted CNN experiments for biomedical imaging, alongside reinforcement learning and GPU training.',
    link: 'https://www.kennedy.ox.ac.uk/',
  },
  {
    glyph: '✚',
    title: 'Data Science Intern',
    organisation: 'NHS Digital',
    dates: 'Nov – Dec 2019',
    detail: 'Developed LSTM and word2vec models for clinical-note classification. Improved ICD-9 coding accuracy from 42% to 71%, with anomaly detection for rare diagnoses.',
    link: 'https://digital.nhs.uk/',
  },
  {
    glyph: '◉',
    title: 'Independent AR Lens Developer',
    organisation: 'Snap',
    dates: 'Sep 2018 – Aug 2019',
    detail: 'Created AR lenses reaching 2.5M+ views and 150K downloads, optimised for mobile performance and memory use.',
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
  },
];

const education: EngagementItem[] = [
  {
    glyph: 'φ',
    title: 'BSc Physics',
    organisation: "King's College London",
    dates: '2024 – 2027',
    detail: 'Alessandro de Vita Computational Physics Prize, 2024–25. King’s Research Award, November 2025.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    glyph: 'λ',
    title: 'MEng Computer Science',
    organisation: 'University College London',
    dates: '2021 – 2023',
    detail: 'Studied on the MEng Computer Science programme.',
    link: 'https://www.ucl.ac.uk/',
  },
  {
    glyph: '∑',
    title: 'A levels',
    organisation: 'Royal Grammar School, Newcastle',
    dates: '2017 – 2020',
    detail: 'A*, A*, A* in Mathematics, Further Mathematics, and Physics.',
    link: 'https://www.rgs.newcastle.sch.uk/',
  },
  {
    glyph: '⌘',
    title: 'iOS and interface design',
    organisation: 'Meta',
    dates: 'Sep – Nov 2025',
    detail: 'Certificates in SwiftUI, iOS development, UX/UI principles, Swift fundamentals, and version control.',
    link: 'https://www.linkedin.com/in/kannan-sekar/',
  },
  {
    glyph: '∇',
    title: 'Machine learning and deep learning',
    organisation: 'Stanford University / DeepLearning.AI',
    dates: 'Mar 2021',
    detail: 'Machine Learning from Stanford University and Deep Learning from DeepLearning.AI.',
    link: 'https://www.linkedin.com/in/kannan-sekar/',
  },
  {
    glyph: '{ }',
    title: 'CS50 certification',
    organisation: 'Harvard University',
    detail: 'Certificate of completion for CS50.',
    link: 'https://www.linkedin.com/in/kannan-sekar/',
  },
];

const stack = [
  { label: 'Languages', items: 'Python · C/C++ · Swift · Java · Haskell · Bash' },
  { label: 'AI / ML', items: 'TensorFlow · PyTorch · Core ML · scikit-learn · Keras' },
  { label: 'Systems', items: 'GCP · Docker · Kubernetes · CUDA · HPC · CI/CD' },
  { label: 'Research', items: 'LAMMPS · OVITO · AIRSS · NumPy · pandas' },
  { label: 'App development', items: 'SwiftUI · UIKit · REST · GraphQL · Git' },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

const GREETINGS = ['Hi.', 'வணக்கம்.', 'Hola.'];
const REST_LINES = ["I'm", 'Kannan.'];

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
      return;
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
    const subject = encodeURIComponent('Hello Kannan');
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
                <span className="btn-label">Go back</span>
              </button>
              <button
                type="button"
                className="btn-ref"
                onClick={send}
                disabled={!message.trim()}
                data-cursor-lock
              >
                <span className="btn-label">Open email draft</span>
              </button>
            </div>
            <p className="composer-note">Opens your email app with your message ready to send.</p>
          </div>
        ) : (
          <div>
            <h1
              className="intro-title"
              aria-label="Hi. I'm Kannan."
            >
              {[typed.greeting, ...typed.rest].map((text, i) => (
                <span key={i} aria-hidden="true" className="typed-line">
                  {text}
                  {i === typed.cursorLine ? <span className="type-cursor" /> : null}
                </span>
              ))}
            </h1>
            <p className="body-copy intro-bio mt-10">{personalInfo.bio}</p>
            <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-6">
              <button
                type="button"
                className="btn-ref"
                onClick={() => setComposing(true)}
                data-cursor-lock
              >
                <span className="btn-icon">→</span>
                <span className="btn-label">Get in touch</span>
              </button>
              <a
                className="btn-ref"
                href="/KSCV7R.pdf"
                download="Kannan-Sekar-CV.pdf"
                data-cursor-lock
              >
                <span className="btn-icon" aria-hidden="true">↓</span>
                <span className="btn-label">Download CV</span>
              </a>
            </div>
            <nav className="section-nav" aria-label="Portfolio sections">
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>
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
    <section id="projects" className="container-ref" aria-labelledby="projects-heading">
      <div className="project-heading"><h2 id="projects-heading" className="section-title">Selected projects</h2></div>
      <ul className="workgrid">
        {gridItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="tile"
            >
              <span className="tile__arrow" aria-hidden="true">{item.external ? '↗' : item.link === '#top' ? '↑' : '↓'}</span>
              <div className="tile__glyph" aria-hidden="true">
                {item.mark === 'sakannan' ? <SAKannanMark /> : item.glyph}
              </div>
              <div className="tile__copy">
                <h3 className="tile__title">{item.title}</h3>
                <p className="tile__context">{item.context}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="project-footer">
        <a className="btn-ref" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <span className="btn-label">More on GitHub</span>
          <span className="btn-icon" aria-hidden="true">↗</span>
        </a>
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
      <h2 className="section-title reveal">{title}</h2>
      <p className="body-copy reveal mt-8">{copy}</p>
    </>
  );
}

function EngagementList({ items }: { items: EngagementItem[] }) {
  return (
    <ul className="engagement mt-12">
      {items.map((item, i) => (
        <li
          key={`${item.title}-${item.organisation}`}
          className="reveal"
          style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
        >
          <a
            id={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="engagement__item"
          >
            <span className="engagement__tile" aria-hidden="true" data-cursor-lock>
              {item.glyph}
            </span>
            <div className="engagement__copy">
              <h3>{item.title}</h3>
              <p className="engagement__organisation">{item.organisation}</p>
              {item.dates && <p className="engagement__dates">{item.dates}</p>}
              <p className="engagement__description">{item.detail}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Work() {
  return (
    <section className="section-block" id="experience" aria-label="Experience">
      <div className="container-ref">
        <SectionIntro
          title="Experience"
          copy="Software engineering, healthcare technology, and computational research."
        />
        <EngagementList items={experience} />
      </div>
    </section>
  );
}

function Study() {
  return (
    <section className="section-block" id="education" aria-label="Education and training">
      <div className="container-ref">
        <SectionIntro
          title="Education & training"
          copy="A background in physics and computer science, supported by continued professional development."
        />
        <EngagementList items={education} />
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section-block">
      <div className="container-ref">
        <SectionIntro
          title="Technical skills"
          copy="Languages, frameworks, and tools I use across research and product development."
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
    <section className="section-block" id="contact">
      <div className="container-ref">
        <SectionIntro
          title="Contact"
          copy="For opportunities in AI engineering, scientific computing, and software development, please get in touch by email."
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
            GitHub
          </a>
          <a
            className="link-plain"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
          >
            LinkedIn
          </a>
        </div>
        <p style={{ color: 'var(--faint)' }}>Based in London</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function BootIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismiss = () => setVisible(false);
    const timeout = window.setTimeout(dismiss, 1300);
    window.addEventListener('pointerdown', dismiss, { capture: true, once: true });
    window.addEventListener('keydown', dismiss, { capture: true, once: true });
    window.addEventListener('wheel', dismiss, { passive: true, once: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('pointerdown', dismiss, true);
      window.removeEventListener('keydown', dismiss, true);
      window.removeEventListener('wheel', dismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-intro" aria-hidden="true">
      <div className="boot-intro__brand">
        <span className="boot-intro__word"><span>SA</span>Kannan</span>
        <span className="boot-intro__rule" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  useReveal();

  return (
    <main id="top">
      <BootIntro />
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
