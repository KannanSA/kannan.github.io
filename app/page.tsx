'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cloud,
  Code,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  Github,
  GitBranch,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  School,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

type Accent = 'blue' | 'red' | 'yellow' | 'green' | 'slate';

type Media = {
  src?: string;
  monogram?: string;
  label: string;
  tone: string;
  fit?: 'contain' | 'cover';
};

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  result: string;
  tags: string[];
  accent: Accent;
  media: Media;
};

type Education = {
  school: string;
  degree: string;
  year: string;
  details: string;
  accent: Accent;
  media: Media;
};

type Project = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: string[];
  accent: Accent;
  link: string;
  visual: 'field' | 'stack' | 'device' | 'ar' | 'clinical' | 'chain';
};

const personalInfo = {
  name: 'Kannan Sekar Annu Radha',
  shortName: 'Kannan',
  tagline: 'Software Engineer & Researcher',
  bio: 'I build production-grade AI systems at the intersection of Physics and Computer Science, spanning probabilistic modeling, GPU acceleration, and edge AI.',
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
  website: 'https://sakannan.com',
};

const mediaSources = {
  kings:
    'https://commons.wikimedia.org/wiki/Special:FilePath/King%27s_College_London_logo.svg',
  ucl: 'https://commons.wikimedia.org/wiki/Special:FilePath/UCL_Crest.svg',
  rgs: 'https://commons.wikimedia.org/wiki/Special:FilePath/RGS_Logo.jpg',
  kennedy: 'https://www.kennedy.ox.ac.uk/images/site-logos/kennedy-logo',
  nhs:
    'https://commons.wikimedia.org/wiki/Special:FilePath/NHS-Digital-logo_WEB_LEFT-100x855.png',
};

const experience: Experience[] = [
  {
    role: 'Summer Researcher & KURF Fellow',
    company: "Dept. of Physics, King's College London",
    period: 'Jun 2025 - Present',
    location: 'London, UK',
    description:
      'Applied physics-informed neural networks to carbon nanocluster modeling, then built the GPU pipeline around repeatable experiment runs.',
    result: '+80% prediction accuracy, -60% simulation time',
    tags: ['TensorFlow', 'CUDA', 'PINNs', 'Materials'],
    accent: 'blue',
    media: {
      src: mediaSources.kings,
      label: 'Research lab',
      tone: 'from-[#7f1d1d] to-[#dc2626]',
      fit: 'contain',
    },
  },
  {
    role: 'Software Engineer & CEO',
    company: 'Kannan Industrials',
    period: 'Feb 2021 - Present',
    location: 'London / Chennai',
    description:
      "Architected and shipped iOS applications including 1minute DOEShelp, iPong, and DabCounter, with CoreML inference tuned for Apple Watch constraints.",
    result: '70% faster real-time inference on constrained hardware',
    tags: ['Swift', 'CoreML', 'iOS', 'CI/CD'],
    accent: 'green',
    media: {
      monogram: 'KI',
      label: 'Product studio',
      tone: 'from-[#06281f] via-[#0f766e] to-[#16a34a]',
    },
  },
  {
    role: 'Research Intern',
    company: 'Kennedy Institute of Rheumatology',
    period: 'Nov 2019',
    location: 'Oxford, UK',
    description:
      'Developed CNN workflows for biomedical imaging and experimented with mixed-precision GPU training for research-grade modeling.',
    result: '40% improvement over biomedical imaging baselines',
    tags: ['CNNs', 'PyTorch', 'Biomedical Imaging'],
    accent: 'red',
    media: {
      src: mediaSources.kennedy,
      label: 'Biomedical research',
      tone: 'from-[#3b0764] via-[#7e22ce] to-[#f97316]',
      fit: 'contain',
    },
  },
  {
    role: 'Data Science Intern',
    company: 'NHS Digital',
    period: 'Nov 2019',
    location: 'Leeds, UK',
    description:
      'Built an LSTM + Word2Vec NLP system for clinical note classification and anomaly detection over operational healthcare data.',
    result: 'ICD-9 coding accuracy improved from 42% to 71%',
    tags: ['NLP', 'LSTM', 'Healthcare Data'],
    accent: 'yellow',
    media: {
      src: mediaSources.nhs,
      label: 'Healthcare data',
      tone: 'from-[#003087] to-[#005eb8]',
      fit: 'contain',
    },
  },
];

const education: Education[] = [
  {
    school: "King's College London",
    degree: 'BSc Physics',
    year: '2024 - 2027',
    details:
      'Alessandro de Vita Computational Physics Prize 2024-25. Modules include computational physics, quantum mechanics, and statistical mechanics.',
    accent: 'blue',
    media: {
      src: mediaSources.kings,
      label: 'Physics',
      tone: 'from-[#7f1d1d] to-[#dc2626]',
      fit: 'contain',
    },
  },
  {
    school: 'University College London',
    degree: 'MEng Computer Science',
    year: '2021 - 2023',
    details:
      'Coursework across algorithms, machine learning, theory of computation, and distributed systems.',
    accent: 'red',
    media: {
      src: mediaSources.ucl,
      label: 'Computer science',
      tone: 'from-[#2e1065] to-[#7c3aed]',
      fit: 'contain',
    },
  },
  {
    school: 'Royal Grammar School, Newcastle',
    degree: 'A Levels',
    year: '2012 - 2019',
    details:
      'A*A*A* in Mathematics, Further Mathematics, and Physics. 7 A*s and 4 As at GCSE.',
    accent: 'green',
    media: {
      src: mediaSources.rgs,
      label: 'Mathematics',
      tone: 'from-[#14532d] to-[#16a34a]',
      fit: 'contain',
    },
  },
];

const projects: Project[] = [
  {
    title: 'HPC Molecular Simulation',
    description:
      'Parallelised LAMMPS simulations for material discovery using AIRSS, LMP KOKKOS, OpenMP, and CUDA.',
    icon: <Atom className="h-5 w-5" />,
    tech: ['CUDA', 'OpenMP', 'LAMMPS'],
    accent: 'blue',
    visual: 'field',
    link: 'https://github.com/KannanSA/New-C240-only-searches-Feb2024',
  },
  {
    title: 'TetrisAI',
    description:
      'Deep reinforcement learning agent achieving a 95% win rate against heuristic baselines.',
    icon: <Cpu className="h-5 w-5" />,
    tech: ['Deep RL', 'Python'],
    accent: 'red',
    visual: 'stack',
    link: 'https://github.com/KannanSA/TetrisAI',
  },
  {
    title: 'iPong Watch Agent',
    description:
      'CoreML pong agent optimized for Apple Watch GPU and thermal constraints.',
    icon: <Smartphone className="h-5 w-5" />,
    tech: ['CoreML', 'Swift', 'watchOS'],
    accent: 'green',
    visual: 'device',
    link: 'https://github.com/KannanSA/iPong',
  },
  {
    title: 'AR Lens',
    description:
      'Snapchat filter system that reached 2.88M+ views and 150K downloads.',
    icon: <Sparkles className="h-5 w-5" />,
    tech: ['AR', 'Lens Studio'],
    accent: 'yellow',
    visual: 'ar',
    link: 'https://github.com/KannanSA/Argumented-Reality-SC',
  },
  {
    title: 'NLP NHS System',
    description:
      'Clinical text ICD-9 prediction system with AWS deployment experiments and anomaly detection.',
    icon: <Brain className="h-5 w-5" />,
    tech: ['NLP', 'AWS', 'Python'],
    accent: 'blue',
    visual: 'clinical',
    link: 'https://github.com/KannanSA/NLPK',
  },
  {
    title: 'YoteCoin Smart Contract',
    description:
      'Gas-optimized Ethereum smart contract that reduced transaction costs by 35%.',
    icon: <Layers className="h-5 w-5" />,
    tech: ['Solidity', 'Blockchain'],
    accent: 'slate',
    visual: 'chain',
    link: 'https://github.com/KannanSA/YoteCoin',
  },
];

const skills = [
  {
    title: 'Languages',
    icon: <Code className="h-5 w-5" />,
    items: ['Python', 'C', 'C++', 'Java', 'Swift', 'Objective-C', 'Haskell', 'Bash'],
  },
  {
    title: 'AI / ML',
    icon: <Cpu className="h-5 w-5" />,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'CoreML', 'Keras'],
  },
  {
    title: 'Cloud / Systems',
    icon: <Cloud className="h-5 w-5" />,
    items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    title: 'Research Tooling',
    icon: <Database className="h-5 w-5" />,
    items: ['REST APIs', 'GraphQL', 'OpenMP', 'LAMMPS', 'JAX'],
  },
];

const proofPoints = [
  {
    title: 'Production AI',
    copy: 'Shipped clinical, research, and consumer ML systems.',
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: 'GPU Acceleration',
    copy: 'CUDA, PyTorch, TensorFlow, and performance profiling.',
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: 'Scientific Modeling',
    copy: 'PINNs, uncertainty, and computational physics.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'Edge AI',
    copy: 'Optimized inference on mobile and watch hardware.',
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: 'Engineering Taste',
    copy: 'Readable, monitored, repeatable systems.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const navLinks = [
  { name: 'Home', href: '#home', icon: <Home className="h-4 w-4" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
  { name: 'Projects', href: '#projects', icon: <GitBranch className="h-4 w-4" /> },
  { name: 'Education', href: '#education', icon: <GraduationCap className="h-4 w-4" /> },
  { name: 'Skills', href: '#skills', icon: <Terminal className="h-4 w-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> },
];

const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    dot: string;
    shadow: string;
  }
> = {
  blue: {
    text: 'text-[#1a73e8]',
    border: 'border-[#1a73e8]',
    bg: 'bg-[#e8f0fe]',
    dot: 'bg-[#1a73e8]',
    shadow: 'shadow-[#1a73e8]/10',
  },
  red: {
    text: 'text-[#d93025]',
    border: 'border-[#d93025]',
    bg: 'bg-[#fce8e6]',
    dot: 'bg-[#d93025]',
    shadow: 'shadow-[#d93025]/10',
  },
  yellow: {
    text: 'text-[#f9ab00]',
    border: 'border-[#f9ab00]',
    bg: 'bg-[#fef7e0]',
    dot: 'bg-[#f9ab00]',
    shadow: 'shadow-[#f9ab00]/10',
  },
  green: {
    text: 'text-[#188038]',
    border: 'border-[#188038]',
    bg: 'bg-[#e6f4ea]',
    dot: 'bg-[#188038]',
    shadow: 'shadow-[#188038]/10',
  },
  slate: {
    text: 'text-[#3c4043]',
    border: 'border-[#3c4043]',
    bg: 'bg-[#f1f3f4]',
    dot: 'bg-[#3c4043]',
    shadow: 'shadow-slate-900/10',
  },
};

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
      <span className="font-semibold text-[1.35rem] leading-none tracking-normal">
        <span className="text-[#1a73e8]">K</span>
        <span className="text-[#d93025]">S</span>
        <span className="text-[#f9ab00]">A</span>
        <span className="text-[#188038]">R</span>
      </span>
    </a>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  copy,
  icon,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#5f6368]">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#dadce0] bg-white text-[#1a73e8]">
            {icon}
          </span>
          {eyebrow}
        </div>
        <h2 id={id} className="text-3xl font-semibold leading-tight text-[#202124] md:text-4xl">
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-md text-sm leading-6 text-[#5f6368]">{copy}</p> : null}
    </div>
  );
}

function MediaTile({ media, className = '' }: { media: Media; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/40 bg-gradient-to-br ${media.tone} ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="relative flex h-full min-h-[132px] items-center justify-center p-5">
        {media.src ? (
          <div className="flex h-20 w-24 items-center justify-center rounded-md bg-white/95 p-3 shadow-sm">
            <img
              src={media.src}
              alt={`${media.label} visual`}
              className={`h-full w-full ${
                media.fit === 'cover' ? 'object-cover' : 'object-contain'
              }`}
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-md border border-white/30 bg-white/10 font-mono text-2xl font-semibold text-white shadow-sm backdrop-blur">
            {media.monogram}
          </div>
        )}
      </div>
      <div className="absolute bottom-3 left-3 rounded-md border border-white/20 bg-black/25 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur">
        {media.label}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[#dadce0] bg-[#f8fafd] px-2.5 py-1 text-xs font-medium text-[#5f6368]">
      {children}
    </span>
  );
}

function ProjectVisual({
  visual,
  accent,
  icon,
}: {
  visual: Project['visual'];
  accent: Accent;
  icon: React.ReactNode;
}) {
  const style = accentStyles[accent];

  if (visual === 'field') {
    return (
      <div className="relative h-36 overflow-hidden rounded-lg bg-[#101418]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(66,133,244,0.65),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(251,188,4,0.75),transparent_30%),linear-gradient(135deg,rgba(15,157,88,0.25),transparent)]" />
        <div className="absolute inset-5 rounded-md border border-white/10 bg-grid opacity-50" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-xs text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          simulation stable
        </div>
      </div>
    );
  }

  if (visual === 'stack') {
    return (
      <div className="relative h-36 overflow-hidden rounded-lg bg-[#202124] p-4">
        <div className="grid h-full grid-cols-8 gap-1">
          {Array.from({ length: 40 }).map((_, index) => (
            <span
              key={index}
              className={`rounded-sm ${
                index % 7 === 0
                  ? 'bg-[#1a73e8]'
                  : index % 5 === 0
                    ? 'bg-[#fbbc04]'
                    : index % 3 === 0
                      ? 'bg-[#34a853]'
                      : 'bg-white/12'
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 rounded-md bg-white px-2.5 py-1 font-mono text-xs text-[#202124]">
          policy=greedy
        </div>
      </div>
    );
  }

  if (visual === 'device') {
    return (
      <div className="flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-[#e6f4ea] to-white">
        <div className="relative h-28 w-24 rounded-[1.25rem] border-[7px] border-[#202124] bg-[#0b1014] shadow-lg">
          <div className="absolute inset-3 rounded-lg border border-[#34a853]/40">
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34a853]" />
            <div className="absolute inset-x-2 top-4 h-px bg-[#34a853]/60" />
            <div className="absolute inset-y-2 left-1/2 w-px bg-[#34a853]/60" />
          </div>
        </div>
      </div>
    );
  }

  if (visual === 'clinical') {
    return (
      <div className="relative h-36 overflow-hidden rounded-lg bg-[#f8fafd]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,115,232,0.08)_1px,transparent_1px),linear-gradient(rgba(26,115,232,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute left-1/2 top-1/2 h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dadce0] bg-white shadow-sm" />
        <div className="absolute left-1/2 top-[52%] h-px w-28 -translate-x-1/2 bg-[#1a73e8]" />
        <div className="absolute left-[46%] top-8 h-20 w-px bg-[#1a73e8]/60" />
        <div className="absolute bottom-4 left-4 font-mono text-xs text-[#5f6368]">icd9.score=0.71</div>
      </div>
    );
  }

  if (visual === 'chain') {
    return (
      <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-lg bg-[#202124]">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="mx-[-4px] flex h-14 w-14 rotate-45 items-center justify-center rounded-lg border border-white/20 bg-white/5"
          >
            <div className="-rotate-45 font-mono text-xs text-white/80">0x{item + 7}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex h-36 items-center justify-center rounded-lg ${style.bg} ${style.text}`}>
      <div className="rounded-lg border border-current/20 bg-white/70 p-4 shadow-sm">{icon}</div>
    </div>
  );
}

function ConsolePanel() {
  const rows = [
    ['import jax.numpy as jnp', 'text-[#c58af9]'],
    ['from physics import pinn, uncertainty', 'text-[#8ab4f8]'],
    ['@jit', 'text-[#fdd663]'],
    ['def predict(params, carbon_cluster):', 'text-[#e8eaed]'],
    ['    return model.apply(params, carbon_cluster)', 'text-[#bdc1c6]'],
    [''],
    ['metrics = run_gpu_pipeline(seed=42)', 'text-[#8ab4f8]'],
    ['assert metrics.latency_ms < budget', 'text-[#81c995]'],
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-[#2f3437] bg-[#111518] shadow-2xl shadow-slate-950/20">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8ab4f8]">
          <Server className="h-4 w-4" />
          System Console
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#9aa0a6]">
          <span className="h-2 w-2 rounded-full bg-[#34a853]" />
          nominal
        </div>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
        <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <div className="space-y-2 font-mono text-[0.78rem] leading-5">
            {rows.map(([row, color], index) => (
              <div key={`${row}-${index}`} className="grid grid-cols-[1.5rem_1fr] gap-3">
                <span className="select-none text-right text-[#5f6368]">{index + 1}</span>
                <span className={color || 'text-[#5f6368]'}>{row}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-md border border-[#34a853]/30 bg-[#123323]/60 px-3 py-2 font-mono text-xs text-[#81c995]">
            &gt; all tests passed. deployment candidate promoted.
          </div>
        </div>
        <div className="relative min-h-[270px] p-5">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-[#9aa0a6]">
            <span>latent space</span>
            <span>uq: calibrated</span>
          </div>
          <div className="relative h-[205px] overflow-hidden rounded-md border border-white/10 bg-[#0b1014]">
            <div className="absolute inset-0 bg-grid opacity-25" />
            {Array.from({ length: 54 }).map((_, index) => {
              const left = 8 + ((index * 37) % 82);
              const top = 12 + ((index * 53) % 74);
              const colors = ['bg-[#1a73e8]', 'bg-[#34a853]', 'bg-[#fbbc04]', 'bg-[#ea4335]'];
              return (
                <span
                  key={index}
                  className={`absolute h-1.5 w-1.5 rounded-full ${colors[index % colors.length]} opacity-80`}
                  style={{ left: `${left}%`, top: `${top}%` }}
                />
              );
            })}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 220" aria-hidden="true">
              <path
                d="M26 152 C94 58 154 55 211 122 S315 197 394 74"
                fill="none"
                stroke="#8ab4f8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M26 168 C98 92 155 85 211 142 S319 207 394 109"
                fill="none"
                stroke="#34a853"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[0.68rem] text-[#bdc1c6]">
            <span>GPU A100</span>
            <span>CPU 32/64T</span>
            <span>RAM 128GB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main id="home" className="min-h-screen bg-[#f8fafd] text-[#202124]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[168px] border-r border-[#dadce0] bg-white/90 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col justify-between px-5 py-8">
          <div>
            <BrandMark />
            <nav className="mt-10 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-[#3c4043] transition-colors hover:bg-[#e8f0fe] hover:text-[#1a73e8]"
                >
                  <span className="text-[#5f6368] group-hover:text-[#1a73e8]">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-1.5 flex-1 rounded-full bg-[#1a73e8]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#d93025]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#f9ab00]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#188038]" />
            </div>
            <div className="flex items-center justify-between text-[#5f6368]">
              <a href={personalInfo.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 transition-colors hover:text-[#202124]" />
              </a>
              <a href={personalInfo.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 transition-colors hover:text-[#202124]" />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email Kannan">
                <Mail className="h-4 w-4 transition-colors hover:text-[#202124]" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-[#dadce0] bg-white/92 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <BrandMark />
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#dadce0] text-[#3c4043]"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {isMenuOpen ? (
          <nav className="grid border-t border-[#dadce0] bg-white px-3 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-[#3c4043] hover:bg-[#f1f3f4]"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <div className="lg:pl-[168px]">
        <section className="border-b border-[#dadce0] bg-white">
          <div className="mx-auto grid max-w-[1420px] gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-12 xl:px-14">
            <div className="flex min-h-[470px] flex-col justify-center">
              <h1 className="max-w-[760px] text-5xl font-semibold leading-[1.02] text-[#202124] md:text-7xl">
                {personalInfo.name}
              </h1>
              <p className="mt-5 text-2xl font-medium text-[#5f6368] md:text-3xl">
                {personalInfo.tagline}
              </p>
              <p className="mt-6 max-w-[650px] text-lg leading-8 text-[#3c4043]">{personalInfo.bio}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#1a73e8] px-5 text-sm font-semibold text-white shadow-lg shadow-[#1a73e8]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#1558b0]"
                >
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#dadce0] bg-white px-5 text-sm font-semibold text-[#202124] transition-colors hover:bg-[#f1f3f4]"
                >
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm text-[#5f6368] sm:grid-cols-3">
                <div className="rounded-lg border border-[#dadce0] bg-[#f8fafd] p-3">
                  <div className="font-mono text-xl font-semibold text-[#202124]">80%</div>
                  <div>accuracy lift</div>
                </div>
                <div className="rounded-lg border border-[#dadce0] bg-[#f8fafd] p-3">
                  <div className="font-mono text-xl font-semibold text-[#202124]">60%</div>
                  <div>sim time cut</div>
                </div>
                <div className="rounded-lg border border-[#dadce0] bg-[#f8fafd] p-3">
                  <div className="font-mono text-xl font-semibold text-[#202124]">2.88M</div>
                  <div>AR views</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ConsolePanel />
            </div>
          </div>
          <div className="mx-auto grid max-w-[1420px] border-t border-[#dadce0] md:grid-cols-5">
            {proofPoints.map((point) => (
              <div key={point.title} className="border-b border-[#dadce0] p-5 md:border-b-0 md:border-r last:md:border-r-0">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#202124]">{point.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#202124]">{point.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#5f6368]">{point.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="px-5 py-16 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader
              id="experience-title"
              eyebrow="Work Experience"
              title="Research taste, production systems, measurable outcomes."
              copy="Each role is framed around the operating environment, the technical system, and the result. The images make the timeline scannable without turning it into a logo wall."
              icon={<Briefcase className="h-4 w-4" />}
            />
            <div className="grid gap-4">
              {experience.map((job, index) => {
                const accent = accentStyles[job.accent];
                return (
                  <article
                    key={`${job.company}-${job.role}`}
                    className={`grid gap-5 rounded-lg border border-[#dadce0] bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl ${accent.shadow} md:grid-cols-[210px_1fr] md:p-5`}
                  >
                    <MediaTile media={job.media} />
                    <div className="flex flex-col justify-between gap-5">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-[#5f6368]">
                          <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                          <span className="font-mono">0{index + 1}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                          <h3 className="text-2xl font-semibold leading-tight text-[#202124]">{job.role}</h3>
                          <p className={`text-sm font-semibold ${accent.text}`}>{job.company}</p>
                        </div>
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#3c4043]">{job.description}</p>
                      </div>
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-[#dadce0] bg-[#f8fafd] px-3 py-2 text-xs font-semibold text-[#202124]">
                          <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                          {job.result}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-[#dadce0] bg-white px-5 py-16 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader
              id="projects-title"
              eyebrow="Featured Projects"
              title="Systems that make constraints explicit."
              copy="A portfolio section should prove engineering range quickly: simulation, reinforcement learning, mobile inference, AR, NLP, and smart contracts."
              icon={<Sparkles className="h-4 w-4" />}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => {
                const accent = accentStyles[project.accent];
                return (
                  <article
                    key={project.title}
                    className="flex min-h-full flex-col overflow-hidden rounded-lg border border-[#dadce0] bg-[#f8fafd] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
                  >
                    <ProjectVisual visual={project.visual} accent={project.accent} icon={project.icon} />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-md border ${accent.border} ${accent.bg} ${accent.text}`}>
                          {project.icon}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="rounded-md border border-[#dadce0] bg-white p-2 text-[#5f6368] transition-colors hover:text-[#202124]"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <h3 className="text-xl font-semibold text-[#202124]">{project.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-[#5f6368]">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="px-5 py-16 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader
              id="education-title"
              eyebrow="Education & Awards"
              title="Physics depth, computer science foundations, mathematics discipline."
              copy="The education section now carries the same visual weight as work history, with image-backed institute cards and concise academic context."
              icon={<BookOpen className="h-4 w-4" />}
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {education.map((edu) => {
                const accent = accentStyles[edu.accent];
                return (
                  <article
                    key={edu.school}
                    className="overflow-hidden rounded-lg border border-[#dadce0] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <MediaTile media={edu.media} className="rounded-none border-0" />
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                          <School className="h-5 w-5" />
                        </div>
                        <span className="rounded-md border border-[#dadce0] bg-[#f8fafd] px-2.5 py-1 font-mono text-xs text-[#5f6368]">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#202124]">{edu.school}</h3>
                      <p className={`mt-1 text-sm font-semibold ${accent.text}`}>{edu.degree}</p>
                      <p className="mt-4 text-sm leading-6 text-[#5f6368]">{edu.details}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[#dadce0] bg-white px-5 py-16 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader
              id="skills-title"
              eyebrow="Technical Skills"
              title="A compact map of the stack."
              copy="Grouped for how engineering conversations actually happen: language, modeling, cloud systems, and research tooling."
              icon={<Zap className="h-4 w-4" />}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((group, index) => {
                const accents: Accent[] = ['blue', 'red', 'yellow', 'green'];
                const accent = accentStyles[accents[index]];
                return (
                  <article key={group.title} className="rounded-lg border border-[#dadce0] bg-[#f8fafd] p-5">
                    <div className="mb-5 flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                        {group.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-[#202124]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-16 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto grid max-w-[1320px] gap-6 rounded-lg border border-[#dadce0] bg-[#202124] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="mb-4 flex gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-12 rounded-full bg-[#1a73e8]" />
                <span className="h-1.5 w-12 rounded-full bg-[#d93025]" />
                <span className="h-1.5 w-12 rounded-full bg-[#f9ab00]" />
                <span className="h-1.5 w-12 rounded-full bg-[#188038]" />
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">Build something precise.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#bdc1c6]">
                Open to AI engineering, high-performance computing, and research roles where correctness,
                speed, and clarity matter.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#202124] transition-colors hover:bg-[#e8eaed]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 py-8 text-sm text-[#5f6368] md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Tailwind.</p>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#202124]">
                GitHub
              </a>
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#202124]">
                <span className="inline-flex items-center gap-1">
                  Website <FileText className="h-3.5 w-3.5" />
                </span>
              </a>
              <a href="#home" className="hover:text-[#202124]">
                Back to top
              </a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
