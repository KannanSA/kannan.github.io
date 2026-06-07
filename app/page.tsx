'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Briefcase,
  Code,
  Cpu,
  Database,
  Download,
  FileText,
  Gauge,
  Github,
  GitBranch,
  GraduationCap,
  Home,
  Layers,
  Mail,
  Monitor,
  Menu,
  Rocket,
  School,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

type Accent = 'blue' | 'red' | 'yellow' | 'green' | 'slate';

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  result: string;
  tags: string[];
  accent: Accent;
};

type Education = {
  school: string;
  degree: string;
  year: string;
  details: string;
  accent: Accent;
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
  tagline: 'Software Engineer & Researcher',
  bio: 'I build production-grade AI systems at the intersection of Physics and Computer Science, spanning probabilistic modeling, GPU acceleration, and edge AI.',
  email: 'kannansekara@gmail.com',
  linkedin: 'https://linkedin.com/in/kannan-sekar',
  github: 'https://github.com/kannansa',
  website: 'https://sakannan.com',
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
  },
  {
    role: 'Software Engineer & CEO',
    company: 'Kannan Industrials',
    period: 'Feb 2021 - Present',
    location: 'London / Chennai',
    description:
      'Architected and shipped iOS applications including 1minute DOEShelp, iPong, and DabCounter, with CoreML inference tuned for Apple Watch constraints.',
    result: '70% faster real-time inference on constrained hardware',
    tags: ['Swift', 'CoreML', 'iOS', 'CI/CD'],
    accent: 'green',
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
  },
  {
    school: 'University College London',
    degree: 'MEng Computer Science',
    year: '2021 - 2023',
    details:
      'Coursework across algorithms, machine learning, theory of computation, and distributed systems.',
    accent: 'red',
  },
  {
    school: 'Royal Grammar School, Newcastle',
    degree: 'A Levels',
    year: '2012 - 2019',
    details:
      'A*A*A* in Mathematics, Further Mathematics, and Physics. 7 A*s and 4 As at GCSE.',
    accent: 'green',
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
    icon: <Activity className="h-5 w-5" />,
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
    icon: <Database className="h-5 w-5" />,
    items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    title: 'Research Tooling',
    icon: <Terminal className="h-5 w-5" />,
    items: ['REST APIs', 'GraphQL', 'OpenMP', 'LAMMPS', 'JAX'],
  },
];

const proofPoints = [
  {
    title: 'Production Systems',
    copy: 'Shipped to clinical and research environments',
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: 'GPU Acceleration',
    copy: 'CUDA, PyTorch, JAX for high-performance ML',
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: 'Probabilistic Modeling',
    copy: 'Bayesian methods, UQ, and scientific ML',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'Edge AI',
    copy: 'Optimized inference on resource-constrained devices',
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: 'High Standards',
    copy: 'Tested, monitored, and built for reliability',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const workHighlights = [
  {
    role: 'Software Engineer',
    company: 'Kannan Industrials',
    period: 'May 2022 - Present',
    location: 'Chennai, India',
    description:
      'Engineered data platforms and ML systems for industrial automation and predictive maintenance. Built GPU-accelerated pipelines for real-time anomaly detection and forecasting.',
    tags: ['Python', 'PyTorch', 'CUDA', 'FastAPI', 'PostgreSQL', 'Docker'],
    accent: 'blue' as Accent,
    mark: 'kings',
  },
  {
    role: 'Research Software Engineer',
    company: 'Kennedy Institute of Rheumatology',
    period: 'Oct 2021 - Apr 2022',
    location: 'London, UK',
    description:
      'Developed reproducible AI workflows for biomedical imaging and longitudinal patient modeling. Implemented scalable training pipelines on HPC infrastructure.',
    tags: ['Python', 'MONAI', 'PyTorch', 'SLURM', 'DVC', 'Linux'],
    accent: 'blue' as Accent,
    mark: 'kennedy',
  },
];

const projectHighlights = [
  {
    title: 'Bayesian Neural Operator for PDEs',
    description:
      'Scalable operator learning with uncertainty quantification for parametric PDEs using JAX and Fourier Neural Operators.',
    tech: ['JAX', 'Python', 'NumPy', 'Optax', 'HPC'],
    visual: 'flow',
    link: 'https://github.com/KannanSA/New-C240-only-searches-Feb2024',
  },
  {
    title: 'Edge AI for Respiratory Monitoring',
    description:
      'Efficient on-device inference for respiratory disease screening using quantized CNNs on ARM and Jetson platforms.',
    tech: ['PyTorch', 'ONNX', 'TensorRT', 'OpenCV', 'C++'],
    visual: 'xray',
    link: 'https://github.com/KannanSA/NLPK',
  },
  {
    title: 'Probabilistic Patient Trajectories',
    description:
      'Bayesian state-space models for disease progression modeling with missing data and irregular observations.',
    tech: ['PyMC', 'ArviZ', 'Pandas', 'NumPy', 'Matplotlib'],
    visual: 'scatter',
    link: 'https://github.com/kannansa',
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
    soft: string;
  }
> = {
  blue: {
    text: 'text-[#1a73e8]',
    border: 'border-[#1a73e8]',
    bg: 'bg-[#e8f0fe]',
    dot: 'bg-[#1a73e8]',
    soft: 'from-[#e8f0fe] to-white',
  },
  red: {
    text: 'text-[#d93025]',
    border: 'border-[#d93025]',
    bg: 'bg-[#fce8e6]',
    dot: 'bg-[#d93025]',
    soft: 'from-[#fce8e6] to-white',
  },
  yellow: {
    text: 'text-[#f9ab00]',
    border: 'border-[#f9ab00]',
    bg: 'bg-[#fef7e0]',
    dot: 'bg-[#f9ab00]',
    soft: 'from-[#fef7e0] to-white',
  },
  green: {
    text: 'text-[#188038]',
    border: 'border-[#188038]',
    bg: 'bg-[#e6f4ea]',
    dot: 'bg-[#188038]',
    soft: 'from-[#e6f4ea] to-white',
  },
  slate: {
    text: 'text-[#3c4043]',
    border: 'border-[#3c4043]',
    bg: 'bg-[#f1f3f4]',
    dot: 'bg-[#3c4043]',
    soft: 'from-[#f1f3f4] to-white',
  },
};

const codeRows = [
  ['01', '# physics-informed solver on GPU', 'text-[#81c995]'],
  ['02', 'import jax.numpy as jnp', 'text-[#c58af9]'],
  ['03', 'from models import bayes_pinn', 'text-[#8ab4f8]'],
  ['04', 'from kernels import carbon_cluster', 'text-[#8ab4f8]'],
  ['05', '', 'text-[#5f6368]'],
  ['06', '@jit', 'text-[#fdd663]'],
  ['07', 'def predict(params, x):', 'text-[#e8eaed]'],
  ['08', '    mu, sigma = bayes_pinn(params, x)', 'text-[#bdc1c6]'],
  ['09', '    return calibrate(mu, sigma)', 'text-[#bdc1c6]'],
  ['10', '', 'text-[#5f6368]'],
  ['11', 'metrics = run_pipeline(seed=42)', 'text-[#8ab4f8]'],
  ['12', 'assert metrics.latency_ms < budget', 'text-[#81c995]'],
  ['13', 'export("candidate.onnx")', 'text-[#e8eaed]'],
];

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
      <span className="font-semibold text-[1.45rem] leading-none tracking-normal">
        <span className="text-[#1a73e8]">K</span>
        <span className="text-[#d93025]">S</span>
        <span className="text-[#f9ab00]">A</span>
        <span className="text-[#188038]">R</span>
      </span>
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center rounded-md border border-[#dadce0] bg-[#f8fafd] px-2 text-[0.72rem] font-medium leading-none text-[#5f6368]">
      {children}
    </span>
  );
}

function Panel({
  id,
  title,
  action,
  children,
}: {
  id?: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="rounded-lg border border-[#dadce0] bg-white shadow-[0_1px_2px_rgba(60,64,67,0.08)]"
    >
      <div className="flex min-h-16 items-center justify-between gap-4 border-b border-[#dadce0] px-5 py-4">
        <h2 id={titleId} className="text-xl font-semibold leading-tight text-[#202124]">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[168px] border-r border-[#dadce0] bg-white/95 backdrop-blur-xl lg:block">
      <div className="flex h-full flex-col justify-between px-6 py-8">
        <div>
          <BrandMark />
          <div className="mt-9 h-px bg-[#e8eaed]" />
          <nav className="mt-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex h-10 items-center gap-3 px-0 text-sm font-medium transition-colors ${
                  index === 0
                    ? 'text-[#1a73e8]'
                    : 'text-[#3c4043] hover:bg-[#f1f3f4] hover:text-[#1a73e8]'
                }`}
              >
                {index === 0 ? (
                  <span className="absolute -left-6 h-8 w-1 rounded-r-full bg-[#1a73e8]" />
                ) : null}
                <span className={index === 0 ? 'text-[#1a73e8]' : 'text-[#5f6368]'}>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="space-y-4 text-xs text-[#5f6368]">
          <div className="grid grid-cols-2 divide-x divide-[#dadce0] border-y border-[#e8eaed] py-3">
            <button type="button" aria-label="Light appearance" className="flex h-8 items-center justify-center text-[#202124]">
              <Sun className="h-4 w-4" />
            </button>
            <button type="button" aria-label="System appearance" className="flex h-8 items-center justify-center text-[#202124]">
              <Monitor className="h-4 w-4" />
            </button>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 flex-1 rounded-full bg-[#1a73e8]" />
            <span className="h-1.5 flex-1 rounded-full bg-[#d93025]" />
            <span className="h-1.5 flex-1 rounded-full bg-[#f9ab00]" />
            <span className="h-1.5 flex-1 rounded-full bg-[#188038]" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileHeader({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dadce0] bg-white/95 backdrop-blur-xl lg:hidden">
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
  );
}

function ConsolePanel() {
  return (
    <div className="w-full overflow-hidden rounded-md border border-[#20262a] bg-[#0f1418] shadow-2xl shadow-slate-950/20">
      <div className="flex items-center gap-6 border-b border-white/10 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-normal text-[#9aa0a6]">
        <span className="border-b-2 border-[#1a73e8] pb-3 text-[#8ab4f8]">system console</span>
        <span>research notebook</span>
        <span className="hidden sm:inline">model diagnostics</span>
        <span className="hidden md:inline">system map</span>
      </div>
      <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="space-y-1 font-mono text-[0.68rem] leading-[1.08rem]">
            {codeRows.map(([line, row, color]) => (
              <div key={`${line}-${row}`} className="grid grid-cols-[1.55rem_1fr] gap-3">
                <span className="select-none text-right text-[#5f6368]">{line}</span>
                <span className={color}>{row || '\u00a0'}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-[#34a853]/30 bg-[#102719] px-3 py-2 font-mono text-[0.68rem] text-[#81c995]">
            &gt; system healthy. all services nominal.
          </div>
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-normal text-[#bdc1c6]">
            <span>latent space</span>
            <span>uncertainty</span>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_56px]">
            <div className="relative h-[205px] overflow-hidden rounded-md border border-white/10 bg-[#0b1014]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:22px_22px]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 276" aria-hidden="true">
                <path
                  d="M54 224 L386 204 L386 52 L54 74 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                />
                <path d="M54 224 L92 246 L424 226 L386 204" fill="none" stroke="rgba(255,255,255,0.12)" />
                <path d="M386 52 L424 74 L424 226" fill="none" stroke="rgba(255,255,255,0.12)" />
                {Array.from({ length: 150 }).map((_, index) => {
                  const x = 48 + ((index * 31) % 344);
                  const wave = 141 + Math.sin(index * 0.29) * 47 + ((index * 17) % 34) - 17;
                  const y = Math.max(50, Math.min(226, wave));
                  const palette = ['#1a73e8', '#00acc1', '#34a853', '#fbbc04', '#ea4335'];
                  const fill = palette[Math.floor((x - 48) / 70) % palette.length];

                  return <circle key={index} cx={x} cy={y} r={2.25} fill={fill} opacity="0.9" />;
                })}
                <path
                  d="M42 172 C96 110 139 111 185 144 S266 207 329 132 S397 94 424 104"
                  fill="none"
                  stroke="#8ab4f8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M42 196 C99 139 139 135 184 164 S267 225 329 156 S395 123 424 128"
                  fill="none"
                  stroke="#34a853"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.68"
                />
              </svg>
            </div>
            <div className="hidden h-[205px] rounded-md border border-white/10 bg-[#11171c] p-2 md:block">
              <div className="h-full rounded-sm bg-[linear-gradient(to_top,#1a73e8,#00acc1,#34a853,#fbbc04,#ea4335)]" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.65rem] text-[#bdc1c6]">
            {['GPU 0  A100 80GB', 'GPU 1  A100 80GB', 'CPU 32/64T', 'RAM 128GB'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34a853]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  const accent = accentStyles[project.accent];

  if (project.visual === 'field') {
    return (
      <div className="h-14 w-16 shrink-0 overflow-hidden rounded-md border border-[#dadce0] bg-[#f8fafd]">
        <img src="/research-visual.png" alt="" className="h-full w-full object-cover" />
      </div>
    );
  }

  if (project.visual === 'stack') {
    return (
      <div className="grid h-14 w-16 shrink-0 grid-cols-5 gap-0.5 rounded-md border border-[#dadce0] bg-[#202124] p-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={`rounded-sm ${
              index % 7 === 0
                ? 'bg-[#1a73e8]'
                : index % 5 === 0
                  ? 'bg-[#fbbc04]'
                  : index % 3 === 0
                    ? 'bg-[#34a853]'
                    : 'bg-white/15'
            }`}
          />
        ))}
      </div>
    );
  }

  if (project.visual === 'device') {
    return (
      <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md border border-[#dadce0] bg-gradient-to-br from-[#e6f4ea] to-white">
        <div className="relative h-10 w-8 rounded-[0.72rem] border-[4px] border-[#202124] bg-[#0b1014]">
          <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34a853]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-14 w-16 shrink-0 items-center justify-center rounded-md border border-[#dadce0] bg-gradient-to-br ${accent.soft} ${accent.text}`}
    >
      {project.icon}
    </div>
  );
}

function OrganizationMark({ type }: { type: string }) {
  if (type === 'kennedy') {
    return (
      <div className="flex h-[86px] w-[90px] shrink-0 items-center justify-center rounded-md border border-[#dadce0] bg-white">
        <div className="relative h-14 w-14 rounded-full border-[5px] border-[#0b4ea2]">
          <span className="absolute left-1/2 top-2 h-8 w-[3px] -translate-x-1/2 rounded-full bg-[#0b4ea2]" />
          <span className="absolute left-4 top-6 h-5 w-[3px] rotate-[-28deg] rounded-full bg-[#0b4ea2]" />
          <span className="absolute right-4 top-6 h-5 w-[3px] rotate-[28deg] rounded-full bg-[#0b4ea2]" />
          <span className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#0b4ea2]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[86px] w-[90px] shrink-0 flex-col items-center justify-center rounded-md bg-[#061a3a] text-white shadow-sm">
      <div className="font-serif text-5xl leading-none">K</div>
      <div className="mt-1 font-serif text-sm tracking-[0.28em]">1935</div>
    </div>
  );
}

function ProjectHighlightVisual({ visual }: { visual: string }) {
  if (visual === 'xray') {
    return (
      <div className="relative h-[112px] w-[198px] shrink-0 overflow-hidden rounded-md bg-[#101418]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.95),rgba(255,255,255,0.18)_34%,transparent_59%)] opacity-80" />
        <div className="absolute left-1/2 top-3 h-24 w-10 -translate-x-1/2 rounded-full bg-white/20 blur-[1px]" />
        <div className="absolute left-[28%] top-2 h-28 w-16 rounded-full border border-white/15 bg-white/10 blur-[0.5px]" />
        <div className="absolute right-[28%] top-2 h-28 w-16 rounded-full border border-white/15 bg-white/10 blur-[0.5px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      </div>
    );
  }

  if (visual === 'scatter') {
    return (
      <div className="relative h-[112px] w-[198px] shrink-0 overflow-hidden rounded-md bg-[#11181c]">
        {Array.from({ length: 120 }).map((_, index) => {
          const isLeft = index < 60;
          const cx = isLeft ? 52 : 142;
          const cy = isLeft ? 58 : 56;
          const x = cx + Math.sin(index * 2.17) * (8 + (index % 9) * 2.8);
          const y = cy + Math.cos(index * 1.63) * (7 + (index % 8) * 2.6);
          return (
            <span
              key={index}
              className={`absolute h-1.5 w-1.5 rounded-full ${isLeft ? 'bg-[#27d7e6]' : 'bg-[#f08f86]'}`}
              style={{ left: `${x}px`, top: `${y}px`, opacity: 0.55 + (index % 5) * 0.08 }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="h-[112px] w-[198px] shrink-0 overflow-hidden rounded-md bg-[#101418]">
      <img src="/research-visual.png" alt="" className="h-full w-full object-cover saturate-150" />
    </div>
  );
}

function ExperiencePanel() {
  return (
    <Panel
      id="experience"
      title="Work Experience"
    >
      <div className="relative px-6 pb-7 pt-2">
        <div className="absolute bottom-7 left-[1.62rem] top-[4.6rem] w-px bg-[#dadce0]" />
        {workHighlights.map((job) => {
          const accent = accentStyles[job.accent];

          return (
            <article key={`${job.role}-${job.company}`} className="relative grid min-h-[154px] grid-cols-[92px_1fr] gap-5 py-4">
              <span className={`absolute -left-[0.4rem] top-7 z-10 h-2.5 w-2.5 rounded-full ${accent.dot} ring-4 ring-white`} />
              <OrganizationMark type={job.mark} />
              <div className="min-w-0 pt-1">
                <div className="flex flex-col gap-1">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-6 text-[#202124]">{job.role}</h3>
                    <p className={`text-sm font-semibold ${accent.text}`}>{job.company}</p>
                  </div>
                </div>
                <p className="mt-1 text-xs text-[#5f6368]">
                  {job.period} <span className="px-1">-</span> {job.location}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-[1.45rem] text-[#3c4043]">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Panel>
  );
}

function ProjectsPanel() {
  return (
    <Panel
      id="projects"
      title="Featured Projects"
      action={
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a73e8]"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </a>
      }
    >
      <div className="px-6 pb-5 pt-1">
        {projectHighlights.map((project) => (
          <article
            key={project.title}
            className="grid gap-4 border-b border-[#eceff1] py-3 last:border-0 md:grid-cols-[198px_1fr_32px] md:items-center"
          >
            <ProjectHighlightVisual visual={project.visual} />
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-[#202124]">{project.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-[1.45rem] text-[#3c4043]">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="flex h-9 w-9 items-center justify-center justify-self-start rounded-md text-[#202124] transition-colors hover:bg-[#f1f3f4] md:justify-self-end"
            >
              <Github className="h-5 w-5" />
            </a>
          </article>
        ))}
      </div>
    </Panel>
  );
}

function EducationPanel() {
  return (
    <Panel id="education" title="Education & Awards">
      <div className="grid gap-0 px-5 py-2">
        {education.map((edu) => {
          const accent = accentStyles[edu.accent];

          return (
            <article key={edu.school} className="grid gap-4 border-b border-[#eceff1] py-5 last:border-0 sm:grid-cols-[116px_1fr]">
              <div className="flex items-start gap-3 text-xs text-[#5f6368]">
                <span className={`mt-1 h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                <span className="font-medium">{edu.year}</span>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                    <School className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-[#202124]">{edu.school}</h3>
                    <p className={`text-sm font-semibold ${accent.text}`}>{edu.degree}</p>
                  </div>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5f6368]">{edu.details}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Panel>
  );
}

function SkillsPanel() {
  return (
    <Panel id="skills" title="Technical Skills">
      <div className="px-5 py-3">
        {skills.map((group, index) => {
          const accents: Accent[] = ['blue', 'red', 'yellow', 'green'];
          const accent = accentStyles[accents[index]];

          return (
            <article key={group.title} className="grid gap-3 border-b border-[#eceff1] py-4 last:border-0 sm:grid-cols-[156px_1fr] sm:items-start">
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                  {group.icon}
                </span>
                <h3 className="text-sm font-semibold text-[#202124]">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Panel>
  );
}

function ProofStrip() {
  return (
    <div className="grid border-t border-[#dadce0] sm:grid-cols-2 xl:grid-cols-5">
      {proofPoints.map((point) => (
        <div key={point.title} className="border-b border-[#dadce0] px-6 py-5 xl:border-b-0 xl:border-r last:xl:border-r-0">
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
  );
}

function ContactPanel() {
  return (
    <section id="contact" className="px-5 pb-12 pt-5 md:px-8 lg:px-10 xl:px-14">
      <div className="mx-auto grid max-w-[1500px] gap-6 rounded-lg border border-[#202124] bg-[#202124] p-6 text-white shadow-xl shadow-slate-950/10 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <div className="mb-5 flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-12 rounded-full bg-[#1a73e8]" />
            <span className="h-1.5 w-12 rounded-full bg-[#d93025]" />
            <span className="h-1.5 w-12 rounded-full bg-[#f9ab00]" />
            <span className="h-1.5 w-12 rounded-full bg-[#188038]" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Build something precise.</h2>
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
    </section>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main id="home" className="min-h-screen bg-[#f8fafd] text-[#202124]">
      <Sidebar />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="lg:pl-[168px]">
        <section className="px-5 pt-4 md:px-7">
          <div className="mx-auto overflow-hidden rounded-lg border border-[#dadce0] bg-white shadow-[0_1px_2px_rgba(60,64,67,0.06)] xl:max-w-[1322px]">
            <div className="grid gap-8 px-6 py-7 md:px-10 xl:min-h-[392px] xl:grid-cols-[0.76fr_1.24fr] xl:items-center xl:px-10 xl:py-5">
              <div className="flex flex-col justify-center">
                <h1 className="max-w-[520px] text-[2.75rem] font-semibold leading-[1.05] text-[#202124] sm:text-5xl md:text-6xl xl:text-[3.42rem]">
                  <span className="block whitespace-nowrap">Kannan Sekar</span>
                  <span className="block whitespace-nowrap">Annu Radha</span>
                </h1>
                <p className="mt-4 text-2xl font-medium text-[#5f6368]">
                  {personalInfo.tagline}
                </p>
                <p className="mt-5 max-w-[520px] text-base leading-6 text-[#3c4043]">{personalInfo.bio}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#projects"
                    className="inline-flex h-9 w-fit items-center justify-center gap-2 rounded-md bg-[#1a73e8] px-4 text-sm font-semibold text-white shadow-lg shadow-[#1a73e8]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#1558b0] whitespace-nowrap"
                  >
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-9 w-fit items-center justify-center gap-2 rounded-md px-4 text-sm font-medium text-[#202124] transition-colors hover:bg-[#f1f3f4] whitespace-nowrap"
                  >
                    Download CV
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <ConsolePanel />
              </div>
            </div>
            <ProofStrip />
          </div>
        </section>

        <section className="px-5 py-3 md:px-7">
          <div className="mx-auto grid gap-3 xl:max-w-[1322px] xl:grid-cols-2">
            <ExperiencePanel />
            <ProjectsPanel />
            <EducationPanel />
            <SkillsPanel />
          </div>
        </section>

        <ContactPanel />

        <footer className="border-t border-[#dadce0] px-5 py-6 text-sm text-[#5f6368] md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
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
          </div>
        </footer>
      </div>
    </main>
  );
}
