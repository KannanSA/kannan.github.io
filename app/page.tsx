'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Code,
  Cpu,
  Database,
  Gauge,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

type Tone = 'primary' | 'secondary' | 'tertiary' | 'yellow' | 'error' | 'neutral';

const personalInfo = {
  name: 'Kannan Sekar Annu Radha',
  tagline: 'Software Engineer & Researcher',
  bio: 'I build production-grade AI systems at the intersection of Physics and Computer Science — probabilistic modeling, GPU acceleration, and edge AI.',
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
  website: 'https://sakannan.com',
};

const stats = [
  { value: '80%', label: 'prediction accuracy gain', tone: 'primary' as Tone },
  { value: '2.88M', label: 'AR lens views', tone: 'tertiary' as Tone },
  { value: '70%', label: 'faster edge inference', tone: 'yellow' as Tone },
  { value: '6+', label: 'shipped products', tone: 'error' as Tone },
];

const experience = [
  {
    role: 'Summer Researcher & KURF Fellow',
    company: "Dept. of Physics, King's College London",
    period: 'Jun 2025 — Present',
    location: 'London, UK',
    description:
      'Applied physics-informed neural networks to carbon nanocluster modeling, then built the GPU pipeline around repeatable experiment runs.',
    result: '+80% prediction accuracy · −60% simulation time',
    tags: ['TensorFlow', 'CUDA', 'PINNs', 'Materials'],
    tone: 'primary' as Tone,
  },
  {
    role: 'Software Engineer & CEO',
    company: 'Kannan Industrials',
    period: 'Feb 2021 — Present',
    location: 'London / Chennai',
    description:
      'Architected and shipped iOS applications including 1minute DOEShelp, iPong, and DabCounter, with CoreML inference tuned for Apple Watch constraints.',
    result: '70% faster real-time inference on constrained hardware',
    tags: ['Swift', 'CoreML', 'iOS', 'CI/CD'],
    tone: 'tertiary' as Tone,
  },
  {
    role: 'Research Intern',
    company: 'Kennedy Institute of Rheumatology, Oxford',
    period: 'Nov 2019',
    location: 'Oxford, UK',
    description:
      'Developed CNN workflows for biomedical imaging and experimented with mixed-precision GPU training for research-grade modeling.',
    result: '40% improvement over biomedical imaging baselines',
    tags: ['CNNs', 'PyTorch', 'Biomedical Imaging'],
    tone: 'error' as Tone,
  },
  {
    role: 'Data Science Intern',
    company: 'NHS Digital',
    period: 'Nov 2019',
    location: 'Leeds, UK',
    description:
      'Built an LSTM + Word2Vec NLP system for clinical note classification and anomaly detection over operational healthcare data.',
    result: 'ICD-9 coding accuracy improved from 42% → 71%',
    tags: ['NLP', 'LSTM', 'Healthcare Data'],
    tone: 'yellow' as Tone,
  },
];

const education = [
  {
    school: "King's College London",
    degree: 'BSc Physics',
    year: '2024 — 2027',
    details:
      'Alessandro de Vita Computational Physics Prize 2024–25. Computational physics, quantum mechanics, statistical mechanics.',
    tone: 'primary' as Tone,
  },
  {
    school: 'University College London',
    degree: 'MEng Computer Science',
    year: '2021 — 2023',
    details:
      'Algorithms, machine learning, theory of computation, and distributed systems.',
    tone: 'error' as Tone,
  },
  {
    school: 'Royal Grammar School, Newcastle',
    degree: 'A Levels',
    year: '2012 — 2019',
    details: 'A*A*A* in Mathematics, Further Mathematics, and Physics. 7 A*s and 4 As at GCSE.',
    tone: 'tertiary' as Tone,
  },
];

const projects = [
  {
    title: 'HPC Molecular Simulation',
    description:
      'Parallelised LAMMPS simulations for material discovery using AIRSS, LMP KOKKOS, OpenMP, and CUDA.',
    icon: <Atom className="h-6 w-6" />,
    tech: ['CUDA', 'OpenMP', 'LAMMPS'],
    tone: 'primary' as Tone,
    link: 'https://github.com/KannanSA/New-C240-only-searches-Feb2024',
    big: true,
  },
  {
    title: 'TetrisAI',
    description: 'Deep RL agent achieving a 95% win rate against heuristic baselines.',
    icon: <Cpu className="h-6 w-6" />,
    tech: ['Deep RL', 'Python'],
    tone: 'error' as Tone,
    link: 'https://github.com/KannanSA/TetrisAI',
    big: false,
  },
  {
    title: 'iPong Watch Agent',
    description: 'CoreML pong agent optimized for Apple Watch GPU and thermal constraints.',
    icon: <Smartphone className="h-6 w-6" />,
    tech: ['CoreML', 'Swift', 'watchOS'],
    tone: 'tertiary' as Tone,
    link: 'https://github.com/KannanSA/iPong',
    big: false,
  },
  {
    title: 'AR Lens',
    description: 'Snapchat filter system that reached 2.88M+ views and 150K downloads.',
    icon: <Sparkles className="h-6 w-6" />,
    tech: ['AR', 'Lens Studio'],
    tone: 'yellow' as Tone,
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
    big: false,
  },
  {
    title: 'NLP NHS System',
    description:
      'Clinical text ICD-9 prediction system with AWS deployment experiments and anomaly detection.',
    icon: <Activity className="h-6 w-6" />,
    tech: ['NLP', 'AWS', 'Python'],
    tone: 'secondary' as Tone,
    link: 'https://github.com/KannanSA/NLPK',
    big: true,
  },
  {
    title: 'YoteCoin Smart Contract',
    description: 'Gas-optimized Ethereum smart contract that cut transaction costs by 35%.',
    icon: <Layers className="h-6 w-6" />,
    tech: ['Solidity', 'Blockchain'],
    tone: 'neutral' as Tone,
    link: 'https://github.com/KannanSA/YoteCoin',
    big: false,
  },
];

const skills = [
  {
    title: 'Languages',
    icon: <Code className="h-5 w-5" />,
    tone: 'primary' as Tone,
    items: ['Python', 'C', 'C++', 'Java', 'Swift', 'Objective-C', 'Haskell', 'Bash'],
  },
  {
    title: 'AI / ML',
    icon: <Cpu className="h-5 w-5" />,
    tone: 'error' as Tone,
    items: ['TensorFlow', 'PyTorch', 'JAX', 'Scikit-learn', 'CoreML', 'Keras'],
  },
  {
    title: 'Cloud / Systems',
    icon: <Database className="h-5 w-5" />,
    tone: 'yellow' as Tone,
    items: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    title: 'Research Tooling',
    icon: <Terminal className="h-5 w-5" />,
    tone: 'tertiary' as Tone,
    items: ['REST APIs', 'GraphQL', 'OpenMP', 'LAMMPS', 'SLURM'],
  },
];

const proofPoints = [
  { title: 'Production Systems', icon: <Rocket className="h-4 w-4" /> },
  { title: 'GPU Acceleration', icon: <Gauge className="h-4 w-4" /> },
  { title: 'Probabilistic Modeling', icon: <Activity className="h-4 w-4" /> },
  { title: 'Edge AI', icon: <Smartphone className="h-4 w-4" /> },
  { title: 'Built for Reliability', icon: <ShieldCheck className="h-4 w-4" /> },
  { title: 'Physics × CS', icon: <Atom className="h-4 w-4" /> },
];

const navLinks = [
  { name: 'Work', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* Tonal styles                                                        */
/* ------------------------------------------------------------------ */

const tones: Record<Tone, { bg: string; fg: string; chipBg: string }> = {
  primary: {
    bg: 'bg-[var(--primary-container)]',
    fg: 'text-[var(--on-primary-container)]',
    chipBg: 'bg-[var(--primary-container)] text-[var(--on-primary-container)]',
  },
  secondary: {
    bg: 'bg-[var(--secondary-container)]',
    fg: 'text-[var(--on-secondary-container)]',
    chipBg: 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]',
  },
  tertiary: {
    bg: 'bg-[var(--tertiary-container)]',
    fg: 'text-[var(--on-tertiary-container)]',
    chipBg: 'bg-[var(--tertiary-container)] text-[var(--on-tertiary-container)]',
  },
  yellow: {
    bg: 'bg-[var(--yellow-container)]',
    fg: 'text-[var(--on-yellow-container)]',
    chipBg: 'bg-[var(--yellow-container)] text-[var(--on-yellow-container)]',
  },
  error: {
    bg: 'bg-[var(--error-container)]',
    fg: 'text-[var(--on-error-container)]',
    chipBg: 'bg-[var(--error-container)] text-[var(--on-error-container)]',
  },
  neutral: {
    bg: 'bg-[var(--surface-container-high)]',
    fg: 'text-[var(--on-surface)]',
    chipBg: 'bg-[var(--surface-container-high)] text-[var(--on-surface)]',
  },
};

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return { isDark, toggle };
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* Dynamic background                                                  */
/* ------------------------------------------------------------------ */

function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    if (!canvas || !scene) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cursor spotlight for the grid layer
    const onPointer = (e: PointerEvent) => {
      scene.style.setProperty('--mx', `${e.clientX}px`);
      scene.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    if (reduced) {
      return () => window.removeEventListener('pointermove', onPointer);
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return () => window.removeEventListener('pointermove', onPointer);

    let width = 0;
    let height = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let particles: P[] = [];

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      return ['--g-blue', '--g-red', '--g-yellow', '--g-green'].map((v) =>
        s.getPropertyValue(v).trim(),
      );
    };
    let colors = readColors();
    let linkColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      linkColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      particles.forEach((p, i) => (p.c = colors[i % colors.length]));
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(90, Math.floor((width * height) / 20000));
      particles = Array.from({ length: target }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 2.2,
        c: colors[i % colors.length],
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener('pointermove', onMouse, { passive: true });
    window.addEventListener('pointerout', onLeave);

    const LINK_DIST = 120;
    const MOUSE_DIST = 170;

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // gentle mouse repulsion
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE_DIST && dm > 0.01) {
          const f = ((MOUSE_DIST - dm) / MOUSE_DIST) * 0.06;
          p.vx += (dxm / dm) * f;
          p.vy += (dym / dm) * f;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        // keep a minimum drift
        if (Math.abs(p.vx) < 0.08) p.vx += (Math.random() - 0.5) * 0.04;
        if (Math.abs(p.vy) < 0.08) p.vy += (Math.random() - 0.5) * 0.04;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > LINK_DIST || Math.abs(dy) > LINK_DIST) continue;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.globalAlpha = (1 - d / LINK_DIST) * 0.28;
            ctx.strokeStyle = linkColor;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // link to cursor
        const dmx = a.x - mouse.x;
        const dmy = a.y - mouse.y;
        const dm = Math.hypot(dmx, dmy);
        if (dm < MOUSE_DIST) {
          ctx.globalAlpha = (1 - dm / MOUSE_DIST) * 0.35;
          ctx.strokeStyle = linkColor;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // dots
      for (const p of particles) {
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointermove', onMouse);
      window.removeEventListener('pointerout', onLeave);
    };
  }, []);

  return (
    <div ref={sceneRef} aria-hidden="true" className="bg-scene">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="aurora aurora-4" />
      <div className="bg-grid" />
      <canvas ref={canvasRef} className="bg-particles" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Chip({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex h-8 items-center rounded-full px-3.5 text-[0.8rem] font-medium ${tones[tone].chipBg}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({
  kicker,
  title,
  tone = 'primary',
}: {
  kicker: string;
  title: string;
  tone?: Tone;
}) {
  return (
    <div className="reveal mb-10 md:mb-14">
      <span
        className={`inline-flex h-8 items-center rounded-full px-4 text-[0.78rem] font-semibold uppercase tracking-[0.12em] ${tones[tone].chipBg}`}
      >
        {kicker}
      </span>
      <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.06] text-[var(--on-surface)] sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function BrandMark() {
  return (
    <a href="#home" aria-label="Go to home" className="font-display flex items-center text-2xl font-bold leading-none">
      <span className="text-[var(--g-blue)]">K</span>
      <span className="text-[var(--g-red)]">S</span>
      <span className="text-[var(--g-yellow)]">A</span>
      <span className="text-[var(--g-green)]">R</span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function Nav() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? 'border-[var(--outline-variant)] bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] shadow-[var(--shadow-2)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="pl-3">
          <BrandMark />
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container-high)] hover:text-[var(--on-surface)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="pill-shift flex h-10 w-10 items-center justify-center border border-[var(--outline-variant)] bg-[var(--surface-container)] text-[var(--on-surface)]"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="pill-shift hidden h-10 items-center gap-2 bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--on-primary)] md:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--outline-variant)] bg-[var(--surface-container)] text-[var(--on-surface)] md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="absolute inset-x-4 top-[4.6rem] rounded-[28px] border border-[var(--outline-variant)] bg-[var(--surface)] p-3 shadow-[var(--shadow-3)] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3.5 text-base font-medium text-[var(--on-surface)] transition-colors hover:bg-[var(--surface-container)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-[var(--on-primary)]"
          >
            Get in touch
          </a>
        </div>
      ) : null}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-36 md:pt-44">
      {/* ambient shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob absolute -right-24 -top-24 h-[420px] w-[420px] bg-[var(--primary-container)] opacity-70 md:h-[560px] md:w-[560px]" />
        <div className="blob absolute -left-32 top-[42%] h-[340px] w-[340px] bg-[var(--tertiary-container)] opacity-50 [animation-delay:-6s]" />
        <div className="float-slow absolute right-[16%] top-[58%] hidden h-16 w-16 rounded-[22px] bg-[var(--yellow-container)] md:block" />
        <div className="spin-slow absolute left-[12%] top-[22%] hidden md:block">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
            <path
              d="M36 4 L42 26 L64 22 L48 38 L66 52 L43 50 L44 70 L33 51 L14 62 L24 43 L4 36 L25 31 L16 10 L34 24 Z"
              fill="var(--error-container)"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-[var(--outline-variant)] bg-[var(--surface)] py-1.5 pl-2 pr-4 shadow-[var(--shadow-1)]">
          <span className="flex h-7 items-center rounded-full bg-[var(--tertiary-container)] px-3 text-xs font-semibold text-[var(--on-tertiary-container)]">
            <span className="pulse-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--g-green)]" />
            Available
          </span>
          <span className="text-sm font-medium text-[var(--on-surface-variant)]">
            Physics @ King&apos;s College London · AI Engineering
          </span>
        </div>

        <h1 className="font-display reveal mt-8 max-w-5xl text-[3.4rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--on-surface)] sm:text-7xl md:text-[6.2rem]" style={{ ['--reveal-delay' as string]: '80ms' }}>
          Kannan Sekar
          <br />
          <span className="gradient-text">Annu Radha</span>
        </h1>

        <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-[var(--on-surface-variant)] md:text-xl" style={{ ['--reveal-delay' as string]: '160ms' }}>
          {personalInfo.bio}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ ['--reveal-delay' as string]: '240ms' }}>
          <a
            href="#projects"
            className="pill-shift inline-flex h-14 items-center gap-2.5 bg-[var(--primary)] px-8 text-base font-semibold text-[var(--on-primary)] shadow-[var(--shadow-2)]"
          >
            View my work
            <ArrowRight className="h-5 w-5" />
          </a>
          <div className="ml-1 flex items-center gap-1.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="pill-shift flex h-12 w-12 items-center justify-center border border-[var(--outline-variant)] bg-[var(--surface-container)] text-[var(--on-surface)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="pill-shift flex h-12 w-12 items-center justify-center border border-[var(--outline-variant)] bg-[var(--surface-container)] text-[var(--on-surface)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="reveal mt-16 grid grid-cols-2 gap-3 md:grid-cols-4" style={{ ['--reveal-delay' as string]: '320ms' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`shape-shift p-6 md:p-7 ${tones[stat.tone].bg} ${tones[stat.tone].fg} ${
                i % 2 === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

function Marquee() {
  const row = [...proofPoints, ...proofPoints];
  return (
    <div className="marquee relative mt-8 overflow-hidden border-y border-[var(--outline-variant)] bg-[var(--surface-container-low)] py-5">
      <div className="marquee-track flex w-max items-center gap-3 px-3">
        {row.map((point, i) => (
          <span
            key={`${point.title}-${i}`}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[var(--outline-variant)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--on-surface-variant)]"
          >
            <span className="text-[var(--primary)]">{point.icon}</span>
            {point.title}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Experience" title="Where I've built things" tone="primary" />
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((job, i) => (
            <article
              key={`${job.role}-${job.company}`}
              className="shape-shift reveal flex flex-col border border-[var(--outline-variant)] bg-[var(--surface)] p-7 md:p-8"
              style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tones[job.tone].bg} ${tones[job.tone].fg}`}
                >
                  <Rocket className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-[var(--surface-container)] px-3.5 py-1.5 text-xs font-semibold text-[var(--on-surface-muted)]">
                  {job.period}
                </span>
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold leading-snug text-[var(--on-surface)]">
                {job.role}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[var(--primary)]">
                {job.company} · {job.location}
              </p>
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[var(--on-surface-variant)]">
                {job.description}
              </p>
              <div className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold ${tones[job.tone].chipBg}`}>
                {job.result}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects (bento)                                                    */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader kicker="Projects" title="Selected work" tone="tertiary" />
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-shift reveal mb-14 hidden h-12 items-center gap-2 border border-[var(--outline)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--on-surface)] md:inline-flex"
          >
            All projects on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`shape-shift reveal group flex flex-col p-7 md:p-8 ${tones[project.tone].bg} ${tones[project.tone].fg} ${
                project.big ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--on-surface)] shadow-[var(--shadow-1)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  {project.icon}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--on-surface)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-display mt-8 text-2xl font-semibold leading-snug md:text-[1.7rem]">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed opacity-80">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex h-7 items-center rounded-full bg-[var(--surface)] px-3 text-xs font-semibold text-[var(--on-surface)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-shift mt-6 flex h-12 items-center justify-center gap-2 border border-[var(--outline)] bg-[var(--surface)] text-sm font-semibold text-[var(--on-surface)] md:hidden"
        >
          All projects on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section id="education" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Education" title="Foundations" tone="yellow" />
        <div className="grid gap-4 lg:grid-cols-3">
          {education.map((edu, i) => (
            <article
              key={edu.school}
              className="shape-shift reveal border border-[var(--outline-variant)] bg-[var(--surface)] p-7 md:p-8"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[edu.tone].bg} ${tones[edu.tone].fg}`}
                >
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-[var(--on-surface-muted)]">{edu.year}</span>
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-[var(--on-surface)]">{edu.school}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--primary)]">{edu.degree}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--on-surface-variant)]">{edu.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Skills" title="Tools of the trade" tone="error" />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((group, i) => (
            <article
              key={group.title}
              className="shape-shift reveal border border-[var(--outline-variant)] bg-[var(--surface)] p-7 md:p-8"
              style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[group.tone].bg} ${tones[group.tone].fg}`}
                >
                  {group.icon}
                </span>
                <h3 className="font-display text-xl font-semibold text-[var(--on-surface)]">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex h-9 items-center rounded-full border border-[var(--outline-variant)] bg-[var(--surface-container-low)] px-4 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[var(--primary-container)] px-7 py-16 text-center md:rounded-[48px] md:px-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="blob absolute -left-20 -top-24 h-72 w-72 bg-[var(--tertiary-container)] opacity-60" />
          <div className="blob absolute -bottom-28 -right-16 h-80 w-80 bg-[var(--yellow-container)] opacity-50 [animation-delay:-7s]" />
        </div>
        <div className="relative">
          <div className="mx-auto flex w-fit gap-1.5" aria-hidden="true">
            <span className="h-2 w-10 rounded-full bg-[var(--g-blue)]" />
            <span className="h-2 w-10 rounded-full bg-[var(--g-red)]" />
            <span className="h-2 w-10 rounded-full bg-[var(--g-yellow)]" />
            <span className="h-2 w-10 rounded-full bg-[var(--g-green)]" />
          </div>
          <h2 className="font-display mt-8 text-4xl font-semibold leading-[1.04] text-[var(--on-primary-container)] sm:text-5xl md:text-7xl">
            Let&apos;s build something
            <br />
            precise together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--on-primary-container)] opacity-80 md:text-lg">
            Open to AI engineering, high-performance computing, and research roles where correctness,
            speed, and clarity matter.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="pill-shift inline-flex h-14 items-center gap-2.5 bg-[var(--on-primary-container)] px-8 text-base font-semibold text-[var(--primary-container)]"
            >
              <Mail className="h-5 w-5" />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-shift inline-flex h-14 items-center gap-2.5 border-2 border-[var(--on-primary-container)] px-8 text-base font-semibold text-[var(--on-primary-container)]"
            >
              LinkedIn
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
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
    <footer className="border-t border-[var(--outline-variant)] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--on-surface-muted)] md:flex-row">
        <div className="flex items-center gap-3">
          <BrandMark />
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--on-surface)]">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--on-surface)]">
            LinkedIn
          </a>
          <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--on-surface)]">
            sakannan.com
          </a>
          <a href="#home" className="transition-colors hover:text-[var(--on-surface)]">
            Back to top ↑
          </a>
        </div>
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
    <main className="min-h-screen text-[var(--on-surface)]">
      <DynamicBackground />
      <Nav />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
