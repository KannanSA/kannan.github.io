'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  ArrowRight,
  Atom,
  BarChart3,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  X,
  type LucideIcon,
} from 'lucide-react';

const personalInfo = {
  name: 'Kannan Sekar Annu Radha',
  shortName: 'Kannan',
  role: 'Software engineer and physics researcher',
  bio: 'Software engineer and physics researcher building GPU-accelerated AI systems, scientific tooling, and polished products.',
  linkedInAbout: 'Machine learning is my primary field of interest.',
  location: 'London, England, United Kingdom',
  followers: '753 followers',
  connections: '500+ connections',
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
};

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const colorStops = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

const proofPoints = [
  {
    value: '80%',
    label: 'PINN accuracy lift',
    note: 'on carbon nanocluster predictions',
    color: '#4285F4',
  },
  {
    value: '60%',
    label: 'faster simulations',
    note: 'with a GPU-accelerated pipeline',
    color: '#DB4437',
  },
  {
    value: '2.88M+',
    label: 'AR views',
    note: 'across Snapchat Lenses',
    color: '#F4B400',
  },
];

const experience = [
  {
    role: 'Summer Researcher & KURF Fellow',
    company: "Department of Physics, King's College London",
    period: 'Jun 2025 - Present',
    description:
      'Applied physics-informed neural networks to model carbon nanoclusters, boosting prediction accuracy by 80% and cutting simulation time by 60% with an end-to-end TensorFlow + CUDA pipeline.',
    tags: ['TensorFlow', 'CUDA', 'PINNs', 'GPU Acceleration', 'Physics'],
    color: '#4285F4',
  },
  {
    role: 'Software Engineer & CEO',
    company: 'Kannan Industrials',
    period: 'Feb 2021 - Present',
    description:
      "Architected and deployed iOS applications including 1minute DOEShelp, iPong, and DabCounter. Integrated CoreML for real-time inference, improving speed by 70% on Apple Watch hardware.",
    tags: ['Swift', 'iOS', 'CoreML', 'WatchOS', 'CI/CD'],
    color: '#0F9D58',
  },
  {
    role: 'Research Intern',
    company: 'Kennedy Institute of Rheumatology',
    period: 'Nov 2019',
    description:
      'Developed CNNs for biomedical imaging with a 40% improvement over baselines, and implemented reinforcement-learning systems using LSTMs with mixed-precision GPU training.',
    tags: ['CNN', 'Reinforcement Learning', 'LSTM', 'Biomedical Imaging'],
    color: '#F4B400',
  },
  {
    role: 'Data Science Intern',
    company: 'NHS Digital',
    period: 'Nov 2019',
    description:
      'Built an LSTM + Word2Vec NLP system to auto-assign ICD-9 codes from clinical notes, raising accuracy from 42% to 71% while adding anomaly detection tooling.',
    tags: ['NLP', 'Word2Vec', 'Healthcare Analytics', 'Anomaly Detection'],
    color: '#DB4437',
  },
];

type Project = {
  title: string;
  summary: string;
  detail: string;
  href: string;
  icon: LucideIcon;
  color: string;
  tech: string[];
  metrics: string[];
};

const projects: Project[] = [
  {
    title: 'HPC Molecular Simulation',
    summary: 'AIRSS + LAMMPS + KOKKOS for material discovery',
    detail:
      'Parallelised molecular simulations for material discovery using AIRSS search strategies with LMP KOKKOS, OpenMP, and CUDA acceleration.',
    href: 'https://github.com/KannanSA/New-C240-only-searches-Feb2024',
    icon: Atom,
    color: '#4285F4',
    tech: ['LAMMPS', 'KOKKOS', 'OpenMP', 'CUDA', 'C++', 'Python'],
    metrics: ['3.2x speedup', '1.8M+ structures', 'Reproducible pipeline'],
  },
  {
    title: 'TetrisAI',
    summary: 'Deep RL agent with 95% win rate vs. heuristics',
    detail:
      'Built a reinforcement-learning agent that learns action policy under constrained game state, then benchmarked it against deterministic heuristic baselines.',
    href: 'https://github.com/KannanSA/TetrisAI',
    icon: Gamepad2,
    color: '#DB4437',
    tech: ['Deep RL', 'Python', 'Policy Search', 'Simulation'],
    metrics: ['95% win rate', 'Policy evaluation', 'Heuristic baseline'],
  },
  {
    title: 'iPong Watch Agent',
    summary: 'CoreML agent optimized for Apple Watch GPU',
    detail:
      'Converted real-time inference paths into a compact CoreML deployment tuned for Apple Watch performance and interaction constraints.',
    href: 'https://github.com/KannanSA/iPong',
    icon: Smartphone,
    color: '#0F9D58',
    tech: ['CoreML', 'Swift', 'WatchOS', 'Metal'],
    metrics: ['70% faster', 'On-device ML', 'Low latency'],
  },
  {
    title: 'AR Lens',
    summary: 'Snapchat AR filter with 2.88M+ views',
    detail:
      'Designed and shipped an augmented-reality Lens that scaled to millions of views and more than 150K downloads.',
    href: 'https://github.com/KannanSA/Argumented-Reality-SC',
    icon: Sparkles,
    color: '#F4B400',
    tech: ['AR', 'Lens Studio', 'Interaction Design'],
    metrics: ['2.88M+ views', '150K downloads', 'Consumer scale'],
  },
  {
    title: 'NLP NHS System',
    summary: 'Clinical NLP for ICD-9 code prediction',
    detail:
      'Experimented with sequence models for clinical note understanding, ICD-9 classification, anomaly detection, and cloud deployment paths.',
    href: 'https://github.com/KannanSA/NLPK',
    icon: Database,
    color: '#4285F4',
    tech: ['NLP', 'LSTM', 'AWS', 'Python'],
    metrics: ['42% to 71%', 'Clinical text', 'Anomaly tooling'],
  },
  {
    title: 'YoteCoin Smart Contract',
    summary: 'Gas-optimized Ethereum smart contract',
    detail:
      'Implemented an ERC-20 style contract with optimization work that reduced transaction cost while preserving predictable behavior.',
    href: 'https://github.com/KannanSA/YoteCoin',
    icon: ShieldCheck,
    color: '#8E24AA',
    tech: ['Solidity', 'Ethereum', 'Gas Optimization'],
    metrics: ['35% lower costs', 'ERC-20', 'Contract testing'],
  },
  {
    title: 'IoT Bioreactor Cloud UI',
    summary: 'BCG vaccine bioreactor interface for ESP32 and Arduino',
    detail:
      'Designed a cloud-facing interface for an IoT bioreactor workflow, connecting embedded sensor/control hardware with a usable monitoring surface.',
    href: personalInfo.linkedin,
    icon: Network,
    color: '#0F9D58',
    tech: ['IoT', 'Cloud UI', 'ESP32', 'Arduino'],
    metrics: ['Cloud interface', 'Embedded workflow', 'Bioreactor UI'],
  },
  {
    title: 'Cryptocurrency Trading Bot',
    summary: 'Oxford research project with algorithmic trading experiments',
    detail:
      'Explored sequence-model and reinforcement-learning approaches for trading-system experimentation during the Kennedy Institute research placement.',
    href: personalInfo.linkedin,
    icon: BarChart3,
    color: '#DB4437',
    tech: ['Python', 'LSTM', 'Reinforcement Learning'],
    metrics: ['Research prototype', 'Time-series modeling', 'Strategy testing'],
  },
  {
    title: 'IceFiSh Browser',
    summary: 'iOS web browser developed in Swift',
    detail:
      'Built an iOS browser in Swift and prepared the application for App Store release, sharpening mobile product and platform engineering skills.',
    href: personalInfo.linkedin,
    icon: Smartphone,
    color: '#4285F4',
    tech: ['Swift', 'iOS', 'Mobile UX'],
    metrics: ['Native iOS', 'Browser UI', 'App Store prep'],
  },
];

const researchSystems = [
  {
    title: 'Scientific AI',
    body: 'Physics-informed models for materials and molecular systems.',
    icon: Microscope,
    color: '#4285F4',
    pipeline: ['Nanoclusters', 'PINNs', 'Energy maps'],
    checks: ['80% higher prediction accuracy', '60% reduction in simulation time', 'GPU accelerated TensorFlow + CUDA'],
  },
  {
    title: 'Edge ML',
    body: 'Real-time inference on constrained Apple devices.',
    icon: Cpu,
    color: '#0F9D58',
    pipeline: ['Training', 'CoreML', 'WatchOS'],
    checks: ['70% faster inference', 'Low-latency interaction loops', 'iPong and wellness apps'],
  },
  {
    title: 'Product Engineering',
    body: 'Scalable systems from prototype to production.',
    icon: Cloud,
    color: '#F4B400',
    pipeline: ['GCP', 'Docker', 'Kubernetes'],
    checks: ['CI/CD with GitHub Actions', 'Containerized services', 'Monitoring-minded deployment'],
  },
];

const education = [
  {
    school: "King's College London",
    degree: 'BSc Physics - Passed Year 1',
    year: '2024 - 2027',
    details:
      'King’s Undergraduate Research Fellowship 2025. Recipient of the Alessandro de Vita Computational Physics Prize 2024-25. Relevant modules include Mathematics & Computation, Classical Physics, Astrophysics, and Modern Physics.',
    mark: 'KCL',
    color: '#DB4437',
  },
  {
    school: 'University College London',
    degree: 'MEng Computer Science',
    year: '2021 - 2023',
    details:
      'Focused on algorithms, machine learning, theory of computation, distributed systems, and software engineering.',
    mark: 'UCL',
    color: '#111827',
  },
  {
    school: 'Royal Grammar School, Newcastle',
    degree: 'A Levels',
    year: '2012 - 2019',
    details: 'A*A*A* in Mathematics, Further Mathematics, and Physics. 7 A*s and 4 As at GCSE.',
    mark: 'RGS',
    color: '#4285F4',
  },
];

const skillGroups = [
  {
    label: 'Languages',
    icon: Code2,
    color: '#4285F4',
    items: ['Python', 'C', 'C++', 'Java', 'Swift', 'Objective-C', 'Haskell', 'Bash'],
  },
  {
    label: 'AI / Machine Learning',
    icon: Brain,
    color: '#DB4437',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'CoreML'],
  },
  {
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: '#F4B400',
    items: ['Google Cloud Platform', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    label: 'Systems & Tools',
    icon: TerminalSquare,
    color: '#0F9D58',
    items: ['OpenMP', 'CUDA', 'REST APIs', 'GraphQL', 'Linux', 'Agile / Scrum'],
  },
];

const credentials = [
  {
    title: 'Create the User Interface with SwiftUI',
    issuer: 'Meta',
    date: 'Issued Nov 2025',
  },
  {
    title: 'Introduction to iOS Mobile Application Development',
    issuer: 'Meta',
    date: 'Issued Sep 2025',
  },
  {
    title: 'Principles of UX/UI Design',
    issuer: 'Meta',
    date: 'Issued Sep 2025',
  },
  {
    title: 'Programming Fundamentals in Swift',
    issuer: 'Meta',
    date: 'Issued Sep 2025',
  },
  {
    title: 'Version Control',
    issuer: 'Meta',
    date: 'Issued Sep 2025',
  },
  {
    title: 'Deep Learning',
    issuer: 'DeepLearning.AI',
    date: 'Issued Mar 2021',
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford University',
    date: 'Issued Mar 2021',
  },
];

const honors = [
  {
    title: "King's Research Award",
    issuer: "King's College London",
    date: 'Nov 2025',
    body: 'Recognizes participation in the King’s Undergraduate Research Fellowship programme after three months of summer research.',
  },
  {
    title: 'Alessandro de Vita Computational Physics Prize 24/25',
    issuer: "King's College London NMES",
    date: 'Nov 2024',
    body: 'Awarded for completing first-year computational challenges requiring original programs for code-breaking and biophysics tasks.',
  },
];

const services = [
  'IT Consulting',
  'iOS Development',
  'Web Development',
  'SaaS Development',
  'Android Development',
  'Custom Software Development',
  'UX/UI Design',
  'Cloud Application Development',
  'Mobile Application Development',
  'SEO',
];

const languages = [
  'English - native or bilingual',
  'Tamil - native or bilingual',
  'Spanish - full professional proficiency',
];

function ColorRail({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-1.5' : 'gap-2'}`} aria-hidden="true">
      {colorStops.map((color) => (
        <span
          key={color}
          className={`${compact ? 'h-2 w-2' : 'h-1 w-10'} rounded-full`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function SectionHeading({
  title,
  children,
  action,
}: {
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-4">
        <ColorRail />
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">{title}</h2>
          {children ? <p className="max-w-2xl text-base leading-7 text-neutral-600">{children}</p> : null}
        </div>
      </div>
      {action}
    </div>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-900 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/92 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-base font-semibold text-white shadow-sm shadow-blue-600/20">
            KS
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-800 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Email
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-900 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <Container className="py-4">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
              >
                Email
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function HeroResearchPanel() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-neutral-950">PINN Simulation</p>
            <p className="mt-1 text-xs text-neutral-500">Carbon nanocluster system</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Running
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-neutral-200 p-5 lg:border-b-0 lg:border-r">
            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <dl className="space-y-4 text-sm">
                {[
                  ['System', 'C240 Nano Cluster'],
                  ['Method', 'Physics-Informed Neural Network'],
                  ['Framework', 'TensorFlow + CUDA'],
                  ['Precision', 'Mixed FP16 / FP32'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-medium text-neutral-500">{label}</dt>
                    <dd className="mt-1 font-semibold text-neutral-950">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="relative min-h-[250px] overflow-hidden rounded-lg bg-neutral-50">
                <Image
                  src="/research-visual.png"
                  alt="Generated computational physics lattice visual"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="border-b border-neutral-200 p-5">
              <div className="mb-4 flex gap-6 border-b border-neutral-200 text-xs font-semibold text-neutral-500">
                <span className="border-b-2 border-blue-600 pb-3 text-blue-600">model.py</span>
                <span className="pb-3">train.py</span>
                <span className="pb-3">pinn.py</span>
              </div>
              <pre className="overflow-hidden whitespace-pre-wrap text-[11px] leading-5 text-neutral-700 sm:text-xs">
                <code>{`@tf.function(jit_compile=True)
def loss_fn(model, x, t):
    u = model([x, t], training=True)
    residual = pde_residual(u, x, t)
    bc = boundary_loss(u, x, t)
    return residual + 0.2 * bc`}</code>
              </pre>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-neutral-950">Training Progress</p>
                <span className="text-xs font-medium text-green-700">Live</span>
              </div>
              <svg viewBox="0 0 360 138" className="h-32 w-full" role="img" aria-label="Loss curve chart">
                <defs>
                  <linearGradient id="blueLine" x1="0" x2="1" y1="0" y2="0">
                    <stop stopColor="#4285F4" />
                    <stop offset="1" stopColor="#0F9D58" />
                  </linearGradient>
                </defs>
                {[20, 50, 80, 110].map((y) => (
                  <line key={y} x1="24" x2="344" y1={y} y2={y} stroke="#E5E7EB" strokeWidth="1" />
                ))}
                <path
                  d="M24 20 C70 38 92 54 130 60 C176 68 206 86 246 92 C288 100 318 103 344 104"
                  fill="none"
                  stroke="#DB4437"
                  strokeWidth="3"
                />
                <path
                  d="M24 30 C70 48 104 58 138 68 C182 82 218 91 256 100 C292 108 322 111 344 113"
                  fill="none"
                  stroke="url(#blueLine)"
                  strokeWidth="3"
                />
                <path
                  d="M24 42 C60 64 92 70 138 78 C184 88 224 100 260 108 C300 116 326 119 344 120"
                  fill="none"
                  stroke="#F4B400"
                  strokeWidth="3"
                />
                <line x1="24" x2="24" y1="12" y2="124" stroke="#D1D5DB" />
                <line x1="24" x2="344" y1="124" y2="124" stroke="#D1D5DB" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-neutral-200 bg-neutral-50/70 p-5 sm:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-neutral-950">Edge AI Preview</p>
            <p className="mt-1 text-xs text-neutral-500">CoreML inference - Apple Watch Series 9</p>
          </div>
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="relative h-24 w-20 shrink-0 rounded-[1.45rem] border-[6px] border-neutral-950 bg-neutral-950 p-2 shadow-lg">
              <div className="h-full rounded-[1rem] bg-black p-2 text-green-400">
                <p className="text-[10px] text-neutral-400">Inference</p>
                <p className="mt-2 text-2xl font-semibold leading-none">0.98</p>
                <div className="mt-3 h-1.5 rounded-full bg-neutral-800">
                  <div className="h-full w-4/5 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-950">iPong</p>
              <p className="mt-1 text-xs text-neutral-500">Real-time policy</p>
              <p className="mt-3 text-xs font-medium text-green-700">128 FPS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-neutral-200 bg-white">
      <Container className="grid gap-12 py-12 sm:py-14 lg:min-h-[700px] lg:grid-cols-[0.78fr_1fr] lg:items-center lg:py-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold leading-[1.02] text-neutral-950 sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-9 text-neutral-600 sm:text-2xl sm:leading-10">{personalInfo.bio}</p>
          <p className="mt-5 max-w-xl border-l-4 border-blue-600 pl-4 text-sm font-medium leading-6 text-neutral-700">
            {personalInfo.linkedInAbout}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-neutral-500">
            <span>{personalInfo.location}</span>
            <span className="hidden text-neutral-300 sm:inline">/</span>
            <span>{personalInfo.followers}</span>
            <span className="hidden text-neutral-300 sm:inline">/</span>
            <span>{personalInfo.connections}</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Mail className="h-4 w-4" />
              Email Kannan
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <IconLink href={personalInfo.github} label="GitHub" icon={Github} />
            <IconLink href={personalInfo.linkedin} label="LinkedIn" icon={Linkedin} />
            <IconLink href={`mailto:${personalInfo.email}`} label="Email" icon={Mail} />
          </div>
        </div>

        <HeroResearchPanel />
      </Container>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <Container className="grid divide-y divide-neutral-200 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {proofPoints.map((point) => (
          <div key={point.label} className="flex items-start gap-5 px-0 py-6 sm:px-8 sm:py-4">
            <span className="mt-3 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: point.color }} />
            <div>
              <p className="text-4xl font-semibold leading-none text-neutral-950">{point.value}</p>
              <p className="mt-3 text-sm font-semibold text-neutral-950">{point.label}</p>
              <p className="mt-1 text-sm text-neutral-500">{point.note}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600">
      {children}
    </span>
  );
}

function ExperienceSection() {
  return (
    <section id="work" className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Experience"
          action={
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Work with Kannan
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {experience.map((job) => (
            <article key={`${job.role}-${job.company}`} className="grid gap-6 py-8 lg:grid-cols-[1fr_220px]">
              <div className="grid gap-5 sm:grid-cols-[28px_1fr]">
                <div className="hidden justify-center sm:flex">
                  <span className="mt-1 h-3.5 w-3.5 rounded-full ring-4 ring-neutral-100" style={{ backgroundColor: job.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-neutral-600">{job.company}</p>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-600">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-left text-sm font-medium text-neutral-500 lg:text-right">{job.period}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="relative min-h-[290px] border-b border-neutral-200 bg-neutral-950">
        <Image
          src="/research-visual.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 580px, 90vw"
          className="object-cover opacity-75 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="relative z-10 grid h-full min-h-[290px] grid-cols-1 gap-4 p-5 sm:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-white/60">featured project</p>
              <h3 className="mt-3 max-w-sm text-3xl font-semibold leading-tight text-white">{project.title}</h3>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-black/45 p-4 font-mono text-xs leading-6 text-white/80 backdrop-blur">
            <p className="text-green-300"># LAMMPS input excerpt</p>
            <p>units metal</p>
            <p>atom_style atomic</p>
            <p>boundary p p p</p>
            <p>pair_style eam/alloy</p>
            <p>neighbor 2.0 bin</p>
            <p>fix 1 all nvt temp 300 300 0.1</p>
            <p>run 500000</p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="max-w-2xl text-base leading-7 text-neutral-700">{project.detail}</p>
        <div className="mt-6 grid divide-y divide-neutral-200 border-y border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {project.metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-3 py-4 sm:px-4">
              <Check className="h-5 w-5 shrink-0" style={{ color: project.color }} />
              <span className="text-sm font-semibold text-neutral-800">{metric}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [selected, setSelected] = useState(0);
  const selectedProject = projects[selected];

  return (
    <section id="projects" className="border-y border-neutral-200 bg-neutral-50 py-24">
      <Container>
        <SectionHeading
          title="Projects"
          action={
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View all projects on GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <ProjectVisual project={selectedProject} />

          <div className="divide-y divide-neutral-200 border-y border-neutral-200 bg-white">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const active = selected === index;

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`grid w-full grid-cols-[56px_1fr_28px] items-center gap-5 px-5 py-5 text-left transition hover:bg-neutral-50 ${
                    active ? 'bg-blue-50/70' : 'bg-white'
                  }`}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg border"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}33`,
                      backgroundColor: `${project.color}0F`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-neutral-950">{project.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-neutral-500">{project.summary}</span>
                  </span>
                  <ChevronRight className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-neutral-400'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Pipeline({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <span
            className="rounded-lg border px-3 py-2 text-xs font-semibold"
            style={{ borderColor: `${color}33`, color, backgroundColor: `${color}0F` }}
          >
            {item}
          </span>
          {index < items.length - 1 ? <ArrowRight className="h-4 w-4 text-neutral-300" aria-hidden="true" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="bg-white py-24">
      <Container>
        <SectionHeading title="Research Systems">
          Bridging physics, machine learning, and real-world product constraints with systems that can be measured,
          tuned, and shipped.
        </SectionHeading>

        <div className="grid gap-4">
          {researchSystems.map((system) => {
            const Icon = system.icon;

            return (
              <article
                key={system.title}
                className="grid gap-6 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/[0.02] lg:grid-cols-[0.9fr_1fr_1fr] lg:items-center"
              >
                <div className="flex items-center gap-5">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl"
                    style={{ color: system.color, backgroundColor: `${system.color}12` }}
                  >
                    <Icon className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-950">{system.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{system.body}</p>
                  </div>
                </div>

                <Pipeline items={system.pipeline} color={system.color} />

                <ul className="space-y-2">
                  {system.checks.map((check) => (
                    <li key={check} className="flex items-start gap-2 text-sm leading-6 text-neutral-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: system.color }} />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function EducationSkillsSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-24">
      <Container>
        <div className="grid gap-16">
          <div>
            <SectionHeading title="Education" />
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 bg-white">
              {education.map((item) => (
                <article key={item.school} className="grid gap-5 px-5 py-6 md:grid-cols-[74px_1fr_160px_1.2fr] md:items-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.mark}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950">{item.school}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{item.degree}</p>
                  </div>
                  <p className="text-sm font-medium text-neutral-500">{item.year}</p>
                  <p className="text-sm leading-6 text-neutral-600">{item.details}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading title="Technical Skills" />
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 bg-white">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.label} className="grid gap-4 px-5 py-5 md:grid-cols-[230px_1fr] md:items-center">
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6" style={{ color: group.color }} />
                      <p className="text-sm font-semibold" style={{ color: group.color }}>
                        {group.label}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CredentialsServicesSection() {
  return (
    <section id="credentials" className="bg-white py-24">
      <Container>
        <SectionHeading title="Credentials & Services">
          Public LinkedIn profile details add a fuller picture of the mobile, UX, cloud, and machine-learning work behind
          the portfolio.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-neutral-950">Licenses & Certifications</h3>
              </div>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {credentials.map((credential) => (
                  <article key={`${credential.title}-${credential.issuer}`} className="grid gap-3 py-4 sm:grid-cols-[1fr_180px]">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-950">{credential.title}</h4>
                      <p className="mt-1 text-sm text-neutral-500">{credential.issuer}</p>
                    </div>
                    <p className="text-sm font-medium text-neutral-500 sm:text-right">{credential.date}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <h3 className="text-xl font-semibold text-neutral-950">Honors & Awards</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {honors.map((honor) => (
                  <article key={honor.title} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/[0.02]">
                    <p className="text-sm font-medium text-neutral-500">{honor.date}</p>
                    <h4 className="mt-2 text-base font-semibold text-neutral-950">{honor.title}</h4>
                    <p className="mt-1 text-sm font-medium text-neutral-600">{honor.issuer}</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">{honor.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <BriefcaseBusiness className="h-5 w-5 text-green-600" />
                <h3 className="text-xl font-semibold text-neutral-950">Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Tag key={service}>{service}</Tag>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Network className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-neutral-950">Languages</h3>
              </div>
              <ul className="space-y-3">
                {languages.map((language) => (
                  <li key={language} className="flex items-start gap-3 text-sm leading-6 text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-blue-600 p-6 text-white shadow-sm shadow-blue-600/20">
              <p className="text-sm font-medium text-blue-100">LinkedIn profile signal</p>
              <p className="mt-3 text-3xl font-semibold">{personalInfo.followers}</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {personalInfo.connections} across research, software engineering, mobile development, and product work.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="bg-white">
      <Container className="py-20">
        <div className="grid gap-10 border-b border-neutral-200 pb-12 lg:grid-cols-[1.05fr_1.4fr] lg:items-center">
          <div>
            <ColorRail compact />
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
              Let&apos;s build something impactful.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
              Open to collaborations in AI engineering, scientific computing, and products that solve real-world
              problems with careful systems thinking.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
              { label: 'LinkedIn', value: 'linkedin.com/in/kannan-sekar', href: personalInfo.linkedin, icon: Linkedin },
              { label: 'GitHub', value: 'github.com/kannansa', href: personalInfo.github, icon: Github },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-blue-600" />
                    <ExternalLink className="h-4 w-4 text-neutral-400 transition group-hover:text-blue-600" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-neutral-950">{item.label}</p>
                  <p className="mt-1 break-words text-sm leading-6 text-neutral-500">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kannan Sekar Annu Radha. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with Next.js</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>Deployed on Netlify</span>
            <ColorRail compact />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Nav />
      <Hero />
      <ProofStrip />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <EducationSkillsSection />
      <CredentialsServicesSection />
      <ContactSection />
    </main>
  );
}
