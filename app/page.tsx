'use client';

import { useEffect, useRef, useState } from 'react';
import { Footer, Header } from './chrome';
import { OrgMarks, type OrgLogoName } from './org-logos';
import { personalInfo } from './site';

const DOMAINS = ['clinics', 'clusters', 'watches', 'lenses'] as const;

type WorkCard = {
  title: string;
  context: string;
  href: string;
  span: 'span-4' | 'span-2';
  scene: 'nlp' | 'hpc' | 'health' | 'watch' | 'ar';
  glyph: string;
};

const featured: WorkCard[] = [
  {
    title: 'Clinical NLP',
    context: 'NHS Digital',
    href: '/work/clinical-nlp/',
    span: 'span-4',
    scene: 'nlp',
    glyph: '✚',
  },
  {
    title: 'HPC simulations',
    context: 'Carbon nanocluster research',
    href: '/work/carbon-nanoclusters/',
    span: 'span-2',
    scene: 'hpc',
    glyph: '∇²ψ',
  },
  {
    title: 'Healthcare platforms',
    context: 'Websites & chatbots',
    href: '/work/global-travel-vaccinations/',
    span: 'span-2',
    scene: 'health',
    glyph: '⌁',
  },
  {
    title: 'iPong',
    context: 'Apple Watch app',
    href: '/work/ipong/',
    span: 'span-2',
    scene: 'watch',
    glyph: '│●',
  },
  {
    title: 'AR lenses',
    context: 'Snap AR',
    href: '/work/snap-ar/',
    span: 'span-2',
    scene: 'ar',
    glyph: '◉',
  },
];

const indexItems = [
  {
    title: 'Tetris AI',
    context: 'Machine learning',
    href: 'https://github.com/KannanSA/TetrisAI',
  },
  {
    title: 'Dab Counter',
    context: 'Apple Watch app',
    href: '/work/dab-counter/',
  },
  {
    title: 'SAKannan',
    context: 'Startup studio',
    href: personalInfo.industrials,
  },
];

type EngagementItem = {
  id?: string;
  title: string;
  organisation: string;
  dates?: string;
  detail?: string;
  points?: string[];
  link: string;
  logo: OrgLogoName | OrgLogoName[];
};

const experience: EngagementItem[] = [
  {
    title: 'PCN Tech Lead',
    logo: 'nhs',
    organisation: 'NHS England / Galleries Medical Practice',
    dates: 'Nov 2025 – Present',
    detail:
      'Developing healthcare websites, chatbots, and iOS products, including Global Travel Vaccinations. Responsible for interfaces, backend services, deployment, and reliability.',
    link: 'https://globaltravelvaccinations.com',
  },
  {
    id: 'research',
    title: 'Research Fellow (KURF)',
    logo: 'kcl',
    organisation: "King's College London",
    dates: 'May – Nov 2025',
    detail:
      'Applied physics-informed machine learning to carbon nanoclusters. Ran LAMMPS simulations on HPC clusters and analysed 5,000+ structures using OVITO, TensorFlow, and CUDA, in collaboration with Penn State researchers.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    title: 'iOS Developer & Founder',
    logo: 'kannan',
    organisation: 'Kannan Industrials',
    dates: 'Feb 2021 – Present',
    detail:
      'Developed 1minuteDOEShelp, iPong, DabCounter, and OK Gym. Technical work includes Core ML and Apple Watch motion classification. Other projects include Face Rift AR, IceFiSh Browser, and GrokTube.',
    link: 'https://www.kannanindustrials.com/',
  },
  {
    title: 'Machine Learning Research Intern',
    logo: 'oxford',
    organisation: 'University of Oxford, Kennedy Institute of Rheumatology, Oxford, UK',
    dates: 'Nov 2019',
    points: [
      'Implemented foundational neural networks and deep CNNs in TensorFlow while shadowing the Informatics Manager, benchmarking MNIST digit recognition before scaling to cellular image classification (+40% accuracy vs. linear baselines).',
      'Developed an LSTM time-series forecasting and cryptocurrency trading bot in Python and TensorFlow to evaluate sequential recurrent models on high-volatility market data.',
    ],
    link: 'https://www.kennedy.ox.ac.uk/',
  },
  {
    title: 'Data Science Intern',
    logo: 'nhs',
    organisation: 'NHS Digital',
    dates: 'Nov – Dec 2019',
    detail:
      'Developed LSTM and word2vec models for clinical-note classification. Improved ICD-9 coding accuracy from 42% to 71%, with anomaly detection for rare diagnoses.',
    link: 'https://digital.nhs.uk/',
  },
  {
    title: 'Independent AR Lens Developer',
    logo: 'snap',
    organisation: 'Snap',
    dates: 'Sep 2018 – Aug 2019',
    detail:
      'Created AR lenses reaching 2.5M+ views and 150K downloads, optimised for mobile performance and memory use.',
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
  },
];

const education: EngagementItem[] = [
  {
    title: 'BSc Physics',
    logo: 'kcl',
    organisation: "King's College London",
    dates: '2024 – 2027',
    detail:
      'Alessandro de Vita Computational Physics Prize, 2024–25. King’s Research Award, November 2025.',
    link: 'https://www.kcl.ac.uk/physics',
  },
  {
    title: 'MEng Computer Science',
    logo: 'ucl',
    organisation: 'University College London',
    dates: '2021 – 2023',
    detail: 'Studied on the MEng Computer Science programme.',
    link: 'https://www.ucl.ac.uk/',
  },
  {
    title: 'A levels',
    logo: 'rgs',
    organisation: 'Royal Grammar School, Newcastle',
    dates: '2017 – 2020',
    detail: 'A*, A*, A* in Mathematics, Further Mathematics, and Physics.',
    link: 'https://www.rgs.newcastle.sch.uk/',
  },
  {
    title: 'iOS and interface design',
    logo: 'meta',
    organisation: 'Meta',
    dates: 'Sep – Nov 2025',
    detail:
      'Certificates in SwiftUI, iOS development, UX/UI principles, Swift fundamentals, and version control.',
    link: 'https://www.linkedin.com/in/kannan-sekar/',
  },
  {
    title: 'Machine learning and deep learning',
    logo: ['stanford', 'dlai'],
    organisation: 'Stanford University / DeepLearning.AI',
    dates: 'Mar 2021',
    detail: 'Machine Learning from Stanford University and Deep Learning from DeepLearning.AI.',
    link: 'https://www.linkedin.com/in/kannan-sekar/',
  },
  {
    title: 'CS50 certification',
    logo: 'harvard',
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

const figures = [
  { value: '2.5M+', label: 'AR lens views' },
  { value: '71%', label: 'ICD-9 accuracy, from 42%' },
  { value: '5,000+', label: 'Carbon structures analysed' },
  { value: 'A* A* A*', label: 'Maths, Further Maths, Physics' },
];

function linkRel(href: string) {
  const bare = href.replace(/\/$/, '');
  const profiles = [personalInfo.github, personalInfo.linkedin, personalInfo.industrials].map((url) =>
    url.replace(/\/$/, ''),
  );
  return profiles.includes(bare) ? 'me noopener noreferrer' : 'noopener noreferrer';
}

function externalProps(href: string) {
  return href.startsWith('http') ? { target: '_blank' as const, rel: linkRel(href) } : {};
}

function useDomainCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!media || media.matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % DOMAINS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return DOMAINS[index];
}

const GREETINGS = ['Hi.', 'வணக்கம்.', 'Hola.'];

function graphemes(text: string): string[] {
  try {
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), (part) => part.segment);
    }
  } catch {
    /* fall through to code points */
  }
  return Array.from(text);
}

function useGreeting() {
  const [greeting, setGreeting] = useState(GREETINGS[0]);
  const [count, setCount] = useState(GREETINGS[0].length);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (media?.matches) {
      setGreeting(GREETINGS[0]);
      setCount(GREETINGS[0].length);
      setCursorOn(false);
      return;
    }

    let greetIdx = 0;
    let n = graphemes(GREETINGS[0]).length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const chars = graphemes(GREETINGS[greetIdx]);
      if (!deleting) {
        n += 1;
        setGreeting(GREETINGS[greetIdx]);
        setCount(n);
        setCursorOn(true);
        if (n >= chars.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 95);
        return;
      }
      n -= 1;
      setCount(Math.max(0, n));
      if (n > 0) {
        timer = setTimeout(tick, 50);
        return;
      }
      deleting = false;
      greetIdx = (greetIdx + 1) % GREETINGS.length;
      setGreeting(GREETINGS[greetIdx]);
      timer = setTimeout(tick, 350);
    };

    timer = setTimeout(() => {
      deleting = true;
      tick();
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return { text: graphemes(greeting).slice(0, count).join(''), cursorOn };
}

function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor) return;
    if (!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return;

    document.documentElement.classList.add('has-custom-cursor');

    const defaultSize = 36;
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

    const onMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add('is-visible');
      const target = event.target instanceof Element ? event.target : null;
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
        const fontSize = parseFloat(getComputedStyle(text).fontSize) || 16;
        cursor.classList.add('is-text');
        cursor.style.width = '3px';
        cursor.style.height = `${Math.round(fontSize * 1.4)}px`;
      } else {
        cursor.classList.remove('is-text');
        cursor.style.width = `${defaultSize}px`;
        cursor.style.height = `${defaultSize}px`;
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
      <div>
        <span className="boot-intro__word">
          <span>SA</span>Kannan
        </span>
        <span className="boot-intro__rule" />
      </div>
    </div>
  );
}


function Scene({ kind }: { kind: WorkCard['scene'] }) {
  if (kind === 'nlp') {
    return (
      <div className="stage stage--nlp">
        <div>
          <p className="stage-kicker">NHS Digital · LSTM and word2vec</p>
          <p className="big-num">
            71<span>%</span>
          </p>
          <p className="delta">ICD-9 coding accuracy, from 42%</p>
        </div>
        <ul className="nlp-steps" aria-hidden="true">
          <li>Clinical note</li>
          <li>word2vec</li>
          <li>LSTM</li>
          <li>ICD-9 label</li>
        </ul>
      </div>
    );
  }

  if (kind === 'hpc') {
    return (
      <div className="stage">
        <p className="stage-kicker">LAMMPS on King’s HPC</p>
        <ul className="plate">
          <li>
            <span>Structures</span>
            <span>5,000+</span>
          </li>
          <li>
            <span>Analysis</span>
            <span>OVITO</span>
          </li>
          <li>
            <span>Train</span>
            <span>TensorFlow</span>
          </li>
          <li>
            <span>Device</span>
            <span>CUDA</span>
          </li>
        </ul>
      </div>
    );
  }

  if (kind === 'health') {
    return (
      <div className="stage">
        <p className="stage-kicker">NHS England</p>
        <p className="plate-title">Global Travel Vaccinations</p>
        <p className="delta">Clinic sites and patient chat</p>
      </div>
    );
  }

  if (kind === 'watch') {
    return (
      <div className="stage">
        <p className="stage-kicker">Apple Watch · Core ML</p>
        <p className="big-num big-num--sm">iPong</p>
        <p className="delta">Motion classification</p>
      </div>
    );
  }

  return (
    <div className="stage">
      <p className="stage-kicker">Snap AR · 2018–2019</p>
      <p className="big-num big-num--sm">2.5M+</p>
      <p className="delta">views, and 150K downloads</p>
    </div>
  );
}

function Hero() {
  const word = useDomainCycle();
  const greeting = useGreeting();
  const [composing, setComposing] = useState(false);
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (composing) textareaRef.current?.focus();
  }, [composing]);

  useEffect(() => {
    if (!composing) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setComposing(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [composing]);

  const send = () => {
    const subject = encodeURIComponent('Hello Kannan');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="hero">
      <div className="wrap">
        <h1 className="sr-only">Kannan Sekar, software engineer and physics researcher</h1>
        <p className="hero-title">
          <span className="sr-only">Software for clinics, clusters, watches, and lenses.</span>
          <span className="still" aria-hidden="true">
            Software for clinics, clusters, watches, and lenses.
          </span>
          <span className="motion" aria-hidden="true">
            <span className="hero-line">Software for</span>
            <span className="hero-line">
              <span className="cycle-slot">
                <span className="cycle-sizer">clusters</span>
                <span key={word} className="cycle-word">
                  {word}
                  <span className="cycle-line" />
                </span>
              </span>
              .
            </span>
          </span>
        </p>
        <p className="greet">
          <span className="sr-only">Hi. I&apos;m Kannan.</span>
          <span className="greet-line" aria-hidden="true">
            {greeting.text}
            {greeting.cursorOn ? <span className="type-cursor" /> : null}
          </span>
          <span className="greet-line" aria-hidden="true">
            I&apos;m Kannan.
          </span>
        </p>
        <p className="hero-bio">{personalInfo.bio}</p>
        {composing ? (
          <div className="composer-block">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              ref={textareaRef}
              className="composer liquidglass"
              placeholder="Type your message…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="composer-actions">
              <button type="button" className="pill pill--ghost liquidglass" data-cursor-lock onClick={() => setComposing(false)}>
                Go back
              </button>
              <button type="button" className="pill pill--solid" data-cursor-lock onClick={send} disabled={!message.trim()}>
                Open email draft
              </button>
            </div>
            <p className="composer-note">Opens your email app with your message ready to send.</p>
          </div>
        ) : (
          <div className="hero-actions">
            <button type="button" className="pill pill--solid" data-cursor-lock onClick={() => setComposing(true)}>
              <span aria-hidden="true">→ </span>Get in touch
            </button>
            <a className="pill pill--ghost liquidglass" data-cursor-lock href="https://www.kannanindustrials.com/" rel="me">
              Hire me
            </a>
            <a className="pill pill--ghost liquidglass" data-cursor-lock href={personalInfo.cv} download="kannan-sekar-cv.pdf">
              <span aria-hidden="true">↓ </span>Download CV
            </a>
          </div>
        )}
        <nav className="section-links" aria-label="Portfolio sections">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <h2 id="work-heading" className="sr-only">
          Selected work
        </h2>
        <ul className="work-grid">
          {featured.map((item) => (
            <li key={item.title} className={item.span}>
              <a className="work-card liquidglass" href={item.href} {...externalProps(item.href)}>
                <Scene kind={item.scene} />
                <div className="card-foot">
                  <div>
                    <h3>
                      <span className="card-glyph" aria-hidden="true">
                        {item.glyph}
                      </span>
                      {item.title}
                    </h3>
                    <p>{item.context}</p>
                  </div>
                  <span className="card-go">
                    {item.href.startsWith('http') ? 'Open' : 'View'}
                    <span aria-hidden="true">{item.href.startsWith('http') ? '↗' : '→'}</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <ul className="index-row">
          {indexItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                {...externalProps(item.href)}
              >
                <h3>{item.title}</h3>
                <p>{item.context}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="work-more">
          <a className="pill pill--ghost liquidglass pill--sm" href={personalInfo.github} target="_blank" rel="me noopener noreferrer">
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function FigureRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="figures" aria-hidden={hidden || undefined}>
      {figures.map((item) => (
        <li key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function Figures() {
  return (
    <section className="figures-band liquidglass" aria-label="Selected figures">
      <div className="marquee">
        <div className="marquee-track">
          <FigureRow />
          <FigureRow hidden />
        </div>
      </div>
    </section>
  );
}

function Records({
  id,
  title,
  copy,
  items,
}: {
  id: string;
  title: string;
  copy: string;
  items: EngagementItem[];
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="wrap">
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        <p className="section-copy">{copy}</p>
        <ul className="records">
          {items.map((item) => (
            <li key={`${item.title}-${item.organisation}`}>
              <a
                id={item.id}
                className="record"
                href={item.link}
                target="_blank"
                rel={linkRel(item.link)}
              >
                <p className="record-date">{item.dates ?? ''}</p>
                <div className="record-body">
                  <OrgMarks logo={item.logo} />
                  <div>
                  <h3>
                    {item.title}
                    <span className="record-go" aria-hidden="true">
                      ↗
                    </span>
                  </h3>
                  <p className="record-org">{item.organisation}</p>
                  {item.points ? (
                    <ul className="record-points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="record-detail">{item.detail}</p>
                  )}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="wrap">
        <h2 id="skills-heading" className="section-title">
          Technical skills
        </h2>
        <p className="section-copy">
          Languages, frameworks, and tools I use across research and product development.
        </p>
        <dl className="specs">
          {stack.map((row) => (
            <div className="spec" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-split">
        <div>
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
          <p className="section-copy">
            For opportunities in AI engineering, scientific computing, and software development, please get in touch by email.
          </p>
          <div className="contact-mail">
            <a className="pill pill--solid" data-cursor-lock href={`mailto:${personalInfo.email}`}>
              <span aria-hidden="true">→ </span>Email Kannan
            </a>
            <a className="pill pill--ghost liquidglass" data-cursor-lock href="https://www.kannanindustrials.com/" rel="me">
              Hire me
            </a>
            <p className="contact-address">{personalInfo.email}</p>
          </div>
        </div>
        <nav className="contact-side" aria-label="Other ways to connect">
          <a href={personalInfo.github} target="_blank" rel="me noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="me noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={personalInfo.cv} download="kannan-sekar-cv.pdf">
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </section>
  );
}


export default function Portfolio() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <BootIntro />
      <CustomCursor />
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <Figures />
        <Records
          id="experience"
          title="Experience"
          copy="Software engineering, healthcare technology, and computational research."
          items={experience}
        />
        <Records
          id="education"
          title="Education"
          copy="A background in physics and computer science, supported by continued professional development."
          items={education}
        />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
