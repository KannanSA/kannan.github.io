'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Cpu, 
  Atom, 
  Terminal, 
  Database,
  Award,
  BookOpen,
  Briefcase,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

// --- Interactive Background Component ---

const ParticleBackground = ({ darkMode }: { darkMode: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Google Brand Colors for particles with Glow
    const colors = [
      { hex: '#4285F4', rgb: '66, 133, 244' }, // Blue
      { hex: '#DB4437', rgb: '219, 68, 55' },  // Red
      { hex: '#F4B400', rgb: '244, 180, 0' },  // Yellow
      { hex: '#0F9D58', rgb: '15, 157, 88' }   // Green
    ];
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    const particleCount = Math.min(Math.floor(width * height / 10000), 120); 
    const particles: Particle[] = [];
    const connectionDistance = 140;
    const mouseDistance = 250;

    let mouse: { x: number | undefined; y: number | undefined } = { x: undefined, y: undefined };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      colorObj: { hex: string; rgb: string };
      color: string;
      angle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // Slightly faster for more energy
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1.5;
        this.baseSize = this.size;
        this.colorObj = colors[Math.floor(Math.random() * colors.length)];
        this.color = this.colorObj.hex;
        this.angle = Math.random() * Math.PI * 2; // For pulsing
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Pulse size
        this.angle += 0.05;
        this.size = this.baseSize + Math.sin(this.angle) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Add Glow Effect
        if (darkMode) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.color;
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Reset shadow for performance or next drawing
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update Particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw Connections
      // We use a lighter composition for cool overlapping colors
      if (darkMode) {
          ctx.globalCompositeOperation = 'screen';
      }

      particles.forEach((p1, index) => {
        // Connect to other particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            
            // Create gradient line between particles
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(${p1.colorObj.rgb}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${p2.colorObj.rgb}, ${opacity})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x && mouse.y) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance;
            ctx.beginPath();
            // Mouse connections are white/bright in dark mode
            ctx.strokeStyle = darkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(66, 133, 244, ${opacity})`; 
            ctx.lineWidth = 1.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-100" />;
};

// --- Data extracted from CV ---

const personalInfo = {
  name: "Kannan",
  fullName: "Kannan Sekar Annu Radha",
  tagline: "Software Engineer & Researcher",
  bio: "Bridging the gap between Physics, CS, and Math. I build production-grade AI systems and optimize algorithms for cloud, mobile, and embedded environments.",
  email: "kannansekara@gmail.com",
  linkedin: "https://linkedin.com/in/kannan-sekar",
  github: "https://github.com/kannansa",
  website: "https://sakannan.com"
};

const experience = [
  {
    role: "Summer Researcher & KURF Fellow",
    company: "Dept. of Physics, King's College London",
    period: "Jun 2025 – Present",
    description: "Applied physics-informed neural networks (PINNs) to model carbon nanoclusters. Boosted prediction accuracy by 80% and cut simulation time by 60%. Designed an end-to-end GPU-accelerated pipeline in TensorFlow + CUDA.",
    tags: ["TensorFlow", "CUDA", "PINNs", "Physics"]
  },
  {
    role: "Software Engineer & CEO",
    company: "Kannan Industrials",
    period: "Feb 2021 – Present",
    description: "Architected and deployed multiple iOS applications including '1minute DOEShelp', 'iPong', and 'DabCounter'. Integrated CoreML for real-time inference, improving speed by 70% on Apple Watch hardware. Managed full product lifecycle.",
    tags: ["iOS", "Swift", "CoreML", "CI/CD"]
  },
  {
    role: "Research Intern",
    company: "Kennedy Institute of Rheumatology",
    period: "Nov 2019",
    description: "Developed CNNs for biomedical imaging achieving 40% improvement over baselines. Implemented RL-based trading bots using LSTMs with mixed-precision GPU training.",
    tags: ["CNN", "RL", "Biomedical Imaging"]
  },
  {
    role: "Data Science Intern",
    company: "NHS Digital",
    period: "Nov 2019",
    description: "Built LSTM + Word2Vec NLP system to auto-assign ICD-9 codes from clinical notes, raising accuracy from 42% to 71%. Developed anomaly detection tools.",
    tags: ["NLP", "LSTM", "Healthcare Data"]
  }
];

const projects = [
  {
    title: "HPC Molecular Simulation",
    description: "Parallelised LAMMPS simulations for material discovery using AIRSS, LMP KOKKOS, OpenMP + CUDA.",
    icon: <Atom className="w-6 h-6" />,
    tech: ["CUDA", "OpenMP", "LAMMPS"],
    color: "text-blue-400",
    link: "https://github.com/KannanSA/New-C240-only-searches-Feb2024"
  },
  {
    title: "TetrisAI",
    description: "Deep Reinforcement Learning agent achieving a 95% win rate vs. heuristic baselines.",
    icon: <Cpu className="w-6 h-6" />,
    tech: ["Deep RL", "Python"],
    color: "text-red-400",
    link: "https://github.com/KannanSA/TetrisAI"
  },
  {
    title: "iPong Watch Agent",
    description: "CoreML pong agent optimised specifically for Apple Watch GPU constraints.",
    icon: <Terminal className="w-6 h-6" />,
    tech: ["CoreML", "Swift", "WatchOS"],
    color: "text-green-400",
    link: "https://github.com/KannanSA/iPong"
  },
  {
    title: "AR Lens",
    description: "Snapchat filter which garnered 2.88M+ views and 150K downloads.",
    icon: <Code className="w-6 h-6" />,
    tech: ["AR", "Snapchat Studio"],
    color: "text-yellow-400",
    link: "https://github.com/KannanSA/Argumented-Reality-SC"
  },
  {
    title: "NLP NHS System",
    description: "Clinical text ICD-9 prediction system; experimented with AWS deployment strategies.",
    icon: <Database className="w-6 h-6" />,
    tech: ["NLP", "AWS", "Python"],
    color: "text-purple-400",
    link: "https://github.com/KannanSA/NLPK"
  },
  {
    title: "YoteCoin Smart Contract",
    description: "Gas-optimised Ethereum smart contract that reduced transaction costs by 35%.",
    icon: <Layers className="w-6 h-6" />,
    tech: ["Solidity", "Blockchain"],
    color: "text-indigo-400",
    link: "https://github.com/KannanSA/YoteCoin"
  }
];

const education = [
  {
    school: "King's College London",
    degree: "BSc Physics",
    year: "2024 – 2027",
    details: "Alessandro de Vita Computational Physics Prize 2024-25. Modules: Comp Physics, Quantum Mechanics, Statistical Mechanics.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/King%27s_College_London_logo.svg/1008px-King%27s_College_London_logo.svg.png"
  },
  {
    school: "University College London",
    degree: "MEng Computer Science",
    year: "2021 – 2023",
    details: "Key Modules: Algorithms, Machine Learning, Theory of Computation, Distributed Systems.",
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/2560px-University_College_London_logo.svg.png"
  },
  {
    school: "Royal Grammar School, Newcastle",
    degree: "A Levels",
    year: "2012 – 2019",
    details: "A*A*A* in Mathematics, Further Mathematics, and Physics. 7 A*s, 4 As at GCSE.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/RGS_Logo.jpg/120px-RGS_Logo.jpg"
  }
];

const skills = {
  languages: ["Python", "C", "C++", "Java", "Swift", "Objective-C", "Haskell", "Bash"],
  ml_ai: ["TensorFlow", "PyTorch", "Scikit-learn", "CoreML", "Keras"],
  cloud_devops: ["GCP", "Docker", "Kubernetes", "CI/CD", "Git"],
  other: ["REST APIs", "GraphQL", "Agile/Scrum", "OpenMP"]
};

// --- Components ---

const GoogleColors = () => (
  <div className="flex gap-2 mb-6">
    <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
    <div className="w-2 h-2 rounded-full bg-[#DB4437]"></div>
    <div className="w-2 h-2 rounded-full bg-[#F4B400]"></div>
    <div className="w-2 h-2 rounded-full bg-[#0F9D58]"></div>
  </div>
);

const SectionTitle = ({ children, id, icon }: { children: React.ReactNode; id: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h2 id={id} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
      {children}
    </h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-[#202124] rounded-3xl p-8 transition-all duration-300 border border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1 group ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "green" | "purple" }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    green: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-800",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  };
  
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium border ${colorClasses[color] || colorClasses.blue}`}>
      {children}
    </span>
  );
};

// SVG paths for specific tech brands
const BrandIcons = {
  Python: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77V9.69H7.63v5.66H2.67V9.69h2.36V4.76l.02-.21.05-.2.11-.26.16-.33.23-.35.29-.31.32-.26.34-.19.33-.14.31-.09.28-.05.21-.01h4.97l.19.02.16.01M5.96 1.96c-.25 0-.46.09-.64.26-.18.17-.27.38-.27.63 0 .25.09.46.27.64.18.17.39.26.64.26.25 0 .46-.09.64-.26.17-.18.26-.39.26-.64 0-.25-.09-.46-.26-.63-.18-.18-.39-.26-.64-.26zM20.24 8.52h-2.36v5.65h5.09v4.93l-.01.21-.04.2-.1.25-.16.34-.23.35-.3.31-.31.25-.35.19-.33.14-.3.09-.28.05-.21.01h-4.98l-.19-.02-.16-.01-.9-.2-.72-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.65l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.99v2.25h1.13V8.52zm-3.19 12.87c.25 0 .46-.09.64-.26.18-.17.27-.38.27-.63 0-.25-.09-.46-.27-.64-.17-.18-.39-.26-.64-.26-.25 0-.46.09-.64.26-.17.18-.26.39-.26.64 0 .25.09.46.26.63.18.18.39.26.64.26z" />
    </svg>
  ),
  Swift: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.53 5.31c-3.1-1.63-7.58-1.78-10.74.45-.45.3-.43-.07-.36-.33.18-.68.4-1.35.65-2 .1-.26.2-.56-.1-.71-.34-.18-.58.15-.75.39C7.14 4.54 6.36 6.03 5.92 7.72c-.22.84-.36 1.7-.42 2.57-.02.3.18.33.4.2 2.37-1.36 5.27-1.85 7.9-1.07.6.18.66.72.15 1.07-2.34 1.6-5.27 1.87-7.98 1.15-.36-.1-.58.12-.66.45-.25 1.01-.36 2.05-.29 3.09.02.38.1.92.56.96 2.92.27 5.76-.75 8.16-2.5.42-.31.6-.22.61.27.05 3.08-1.55 5.74-3.99 7.42-.51.35-1.05.67-1.61.94-.48.23-1.06.57-.64 1.14.33.45.96.34 1.45.24 5.3-1.04 9.17-5.12 10.37-10.27.16-.7.29-1.42.36-2.14.1-.98.37-2.6-1.03-4.22-.39-.46-.78-.92-1.18-1.37-.16-.18-.31-.48.06-.51.46-.03.95.1 1.41.09.11 0 .22-.05.33-.08-.13-.53-.41-1.11-.97-1.11z" />
    </svg>
  ),
  TensorFlow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.66 11.23l-3.35-1.58.55-4.43 3.42 1.64-2.8 5.79.03-.01.52.27 2.15-4.45-1.07-.51 1.63-3.38 3.51 1.69-4.59 4.97zm2.4 1.63l-2.09 4.31-1.03-.5.53-4.3 3.12 1.49-.53-.99zm-4.32-2.07l-.54 4.39-1.08-.52 2.18-4.5 1.61.77-2.17 4.5.54-1.12-1.63-.78 1.09-2.24-.01-.5zm4.83-8.82l2.36 1.13-1.57 3.25-2.36-1.14 1.57-3.24zm-12.82 2.09l4.57 2.2-2.19 4.52-4.57-2.2 2.19-4.52zm11.39 12.87l-2.3 1.1-1.53-3.17 2.3-1.11 1.53 3.18zm4.49 1.13l-4.56-2.19 2.19-4.52 4.56 2.19-2.19 4.52z" />
    </svg>
  ),
  React: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-1.3 0-2.52.16-3.66.47-.94.25-1.8.63-2.6 1.1-.97.57-1.78 1.33-2.4 2.14A10.6 10.6 0 0 0 1.22 8.3c-.3.9-.47 1.84-.47 2.8s.16 2.07.47 3.03c.3.94.8 1.8 1.4 2.57.57.73 1.25 1.4 2.02 1.93a10.2 10.2 0 0 0 2.8 1.38c1.17.4 2.45.62 3.8.62s2.57-.2 3.73-.6c.96-.33 1.83-.8 2.62-1.37.8-.57 1.5-1.23 2.03-1.95.53-.73.96-1.53 1.23-2.4.28-.88.43-1.8.43-2.75s-.16-2.03-.43-2.9c-.27-.9-.7-1.72-1.23-2.45a9.85 9.85 0 0 0-2.03-1.96 10.6 10.6 0 0 0-2.62-1.34C14.7.2 13.48 0 12 0zm0 2.2c1.24 0 2.3.16 3.16.48.86.3 1.5.8 1.9 1.3.4.52.6 1.1.6 1.76 0 .66-.2 1.23-.6 1.75-.4.52-1.04.93-1.9 1.24-.86.3-1.83.9-2.75 1.8-.4.39-.73.84-1.01 1.33-.29.5-.52 1.05-.69 1.63a9.23 9.23 0 0 1 1.73-.24c.73 0 1.43.1 2.08.3.15-.62.38-1.21.68-1.74.3-.53.66-1 1.06-1.42zM2.2 5.7c.4.43.76.9 1.06 1.43.3.52.52 1.1.68 1.72.65-.2 1.35-.3 2.08-.3.6 0 1.18.06 1.74.19-.18-.58-.4-1.12-.68-1.61-.29-.49-.62-.93-1-1.32-.86-.9-1.83-1.5-2.75-1.8-.53.29-1.03.62-1.48 1.01-.13.1-.25.21-.36.33-.24.24-.46.5-.66.77a10.63 10.63 0 0 0 1.37-.42zM12 4.4c.57 0 1.1.1 1.6.28a9.42 9.42 0 0 0-3.2 0c.5-.18 1.03-.28 1.6-.28zM5.7 6.45c.4.38.74.82 1.03 1.3.29.47.53 1 .71 1.56a9.1 9.1 0 0 1 3.12 0c.18-.56.42-1.09.71-1.56-.29.48-.63.92-1.03 1.3a10.45 10.45 0 0 0-6.6 0zM21.8 5.7a10.63 10.63 0 0 0 1.37-.42c-.2-.27-.42-.53-.66-.77a7.7 7.7 0 0 0-.36-.33c-.45-.39-.95-.72-1.48-1.01-.92.3-1.9.9-2.75 1.8-.38.39-.71.83-1 1.32-.28.49-.5.93-.68 1.51.56-.13 1.14-.19 1.74-.19.73 0 1.43.1 2.08.3.16-.62.38-1.2.68-1.72.3-.53.66-1 1.06-1.43zm-9.8 13.9c-.57 0-1.1-.1-1.6-.28a9.42 9.42 0 0 0 3.2 0c-.5.18-1.03.28-1.6.28zm2.14 2.14c.4-.39.73-.83 1.01-1.32.29-.49.52-1.03.69-1.61-.65.2-1.35.3-2.08.3-.6 0-1.18-.07-1.74-.19.18.57.41 1.11.69 1.6.28.5.61.94 1 1.33.86.9 1.83 1.5 2.75 1.8.53-.29 1.03-.62 1.48-1.01.13-.11.25-.22.36-.34.24-.24.46-.5.66-.77-.42.15-.88.29-1.37.42-.1.03-.2.05-.31.08zM12 19.6c-.57 0-1.1-.1-1.6-.28a9.42 9.42 0 0 0 3.2 0c-.5.18-1.03.28-1.6.28zm-5.7-2.25c-.4-.38-.74-.82-1.03-1.3-.29-.47-.53-1-.71-1.56a9.1 9.1 0 0 1-3.12 0c-.18.56-.42 1.09-.71 1.56-.29.48-.63.92-1.03 1.3a10.45 10.45 0 0 0 6.6 0zM2.2 18.3c-.4-.43-.76-.9-1.06-1.42-.3-.53-.52-1.1-.68-1.72-.65.2-1.35.3-2.08.3-.6 0-1.18-.06-1.74-.19.18.58.4 1.12.68 1.61.29.49.62.93 1 1.32.86.9 1.83 1.5 2.75 1.8.53-.29 1.03-.62 1.48-1.01.13-.1.25-.21.36-.33.24-.24.46-.5.66-.77a10.63 10.63 0 0 0-1.37.42z" />
    </svg>
  ),
  Docker: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.98 9.5h-1.92v1.9h1.92v-1.9zm-2.88 0h-1.92v1.9h1.92v-1.9zm-2.89 0h-1.91v1.9h1.91v-1.9zm-2.89 0H3.41v1.9h1.92v-1.9zM13.98 6.55h-1.92v1.9h1.92v-1.9zm-2.88 0h-1.92v1.9h1.92v-1.9zm-2.89 0h-1.91v1.9h1.91v-1.9zm5.77-2.95h-1.92v1.9h1.92v-1.9zm5.22 8.85H2.46A2.46 2.46 0 0 0 0 14.92v3.7c0 1.36 1.1 2.46 2.46 2.46h.17c.56 1.17 1.76 1.97 3.14 1.97s2.58-.8 3.14-1.97h6.18c.56 1.17 1.76 1.97 3.14 1.97s2.58-.8 3.14-1.97h.17a2.46 2.46 0 0 0 2.46-2.46v-3.7c0-1.36-1.1-2.46-2.46-2.46zm-13.43 6.9c-.73 0-1.33-.6-1.33-1.33s.6-1.33 1.33-1.33 1.33.6 1.33 1.33-.6 1.33-1.33 1.33zm9.32 0c-.73 0-1.33-.6-1.33-1.33s.6-1.33 1.33-1.33 1.33.6 1.33 1.33-.6 1.33-1.33 1.33z" />
    </svg>
  ),
  Kubernetes: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.53 1.12a1.2 1.2 0 0 1 1.06 0l8.7 4.93a1.2 1.2 0 0 1 .6.98v9.94a1.2 1.2 0 0 1-.6.98l-8.7 4.93a1.2 1.2 0 0 1-1.06 0l-8.7-4.93a1.2 1.2 0 0 1-.6-.98V7.03a1.2 1.2 0 0 1 .6-.98l8.7-4.93zM12 2.65L4.55 6.88v8.44L12 19.55l7.45-4.23V6.88L12 2.65zm5.35 6.13a1.5 1.5 0 1 1-1.28 2.59l-2.9 1.12v2.79a1.5 1.5 0 1 1-2.34 0v-2.79l-2.9-1.12a1.5 1.5 0 1 1-1.28-2.59l2.76-1.57-.66-3.03a1.5 1.5 0 1 1 2.38-.8l1.77 2.53 1.77-2.53a1.5 1.5 0 1 1 2.38.8l-.66 3.03 2.76 1.57z" />
    </svg>
  ),
  CUDA: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.02 9.76c-.23-2.18-1.57-3.9-3.47-4.48-2.07-.63-4.14 0-5.63 1.1-.17.13-.2.33-.09.5.11.16.32.18.51.05 1.27-.87 3.03-1.4 4.8-.83 1.5.49 2.5 1.83 2.67 3.59.2 1.95-1.06 3.96-2.97 4.77-1.89.8-4.22.44-5.83-.89-.17-.14-.4-.11-.53.05-.13.16-.1.4.06.54 1.87 1.56 4.6 2 6.8 1.07 2.22-.94 3.73-3.32 3.48-5.72zM12.9 8.27c-.12.16-.09.39.07.52 1.34 1.13 3.32 1.45 4.9.78 1.32-.56 2.22-1.92 2.12-3.35-.1-1.43-1.18-2.6-2.58-2.88-1.54-.31-3.09.28-4.04 1.53-.12.16-.36.19-.51.07-.15-.12-.19-.35-.07-.51 1.16-1.5 3.04-2.2 4.9-1.83 1.7.34 3.03 1.78 3.16 3.53.13 1.76-1.03 3.47-2.65 4.16-1.92.81-4.32.42-5.96-.96l.66.94zm-1.82 2.15c.16-.11.19-.34.08-.5-.95-1.39-2.55-2.07-4.13-1.76-1.44.29-2.55 1.49-2.65 2.96-.11 1.47.8 2.86 2.15 3.44 1.62.69 3.65.36 5.02-.8.16-.14.4-.11.53.05.13.16.1.41-.06.54-1.68 1.42-4.14 1.82-6.12.98-1.66-.7-2.8-2.45-2.67-4.25.13-1.8 1.49-3.27 3.23-3.62 1.91-.38 3.84.44 4.99 2.11l-.37.85zm-2.26 4.92c-.17-.13-.41-.1-.53.07-.84 1.12-2.18 1.56-3.47 1.15-1.08-.34-1.81-1.34-1.81-2.48 0-1.17.76-2.19 1.87-2.52 1.27-.37 2.62.15 3.49 1.35.11.16.34.19.5.08.16-.11.19-.33.08-.49-1.06-1.46-2.69-2.09-4.23-1.63-1.35.4-2.28 1.64-2.28 3.06 0 1.38.89 2.61 2.2 3.03 1.56.5 3.19-.04 4.21-1.4.13-.17.1-.41-.03-.54z" />
    </svg>
  )
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white ${darkMode ? 'dark:bg-[#0a0a0a] dark:text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* --- NEW QUANTUM FIELD BACKGROUND --- */}
      <ParticleBackground darkMode={darkMode} />
      
      {/* Animated Aurora/Nebula Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-30 dark:opacity-40">
         {/* Moving Gradient 1 - Blue/Purple */}
         <div 
           className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px] animate-pulse"
           style={{ top: '-10%', left: '-10%', animationDuration: '10s' }}
         ></div>
         
         {/* Moving Gradient 2 - Green/Teal */}
         <div 
           className="absolute w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-green-500 to-emerald-500 blur-[100px] animate-pulse"
           style={{ bottom: '-10%', right: '-10%', animationDuration: '15s', animationDelay: '2s' }}
         ></div>
         
         {/* Moving Gradient 3 - Google Yellow/Red Accent */}
         <div 
           className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-yellow-500 to-red-500 blur-[140px] animate-pulse"
           style={{ top: '30%', left: '40%', animationDuration: '12s', animationDelay: '5s', opacity: 0.6 }}
         ></div>
      </div>

      {/* Navigation - Pill Style */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-4 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className={`mx-auto max-w-4xl ${scrolled ? 'bg-white/80 dark:bg-[#202124]/80 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/10' : 'bg-transparent'} rounded-full px-6 py-3 transition-all duration-300 flex justify-between items-center`}>
          <a href="#" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-mono text-sm shadow-lg shadow-blue-500/30">KS</span>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-full">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-yellow-400"
            >
              {darkMode ? '☀' : '☾'}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white dark:bg-[#202124] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        <div className="container mx-auto max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <GoogleColors />
            
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-mono text-blue-600 dark:text-blue-400 font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-light">
                Engineer <span className="text-slate-300 dark:text-slate-600">/</span> Researcher <span className="text-slate-300 dark:text-slate-600">/</span> 
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Bridging Physics and Computer Science to build high-performance AI systems. Specialized in GPU acceleration and probabilistic modeling.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:-translate-y-1">
                <Mail className="w-5 h-5" /> Get in Touch
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-full font-bold transition-all flex items-center gap-2">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Terminal/Code Graphic */}
          <div className="relative">
            <div className="bg-[#2d2e32] rounded-xl shadow-2xl border border-slate-700 overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="bg-[#1e1e1e] p-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-500 font-mono">kannan_sekar_annu_radha — -zsh — 80x24</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base space-y-4">
                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">whoami</span>
                </div>
                <div className="text-slate-400 pl-4">
                  "Research Fellow & Software Engineer"
                </div>

                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">cat current_focus.txt</span>
                </div>
                <div className="text-slate-400 pl-4 space-y-1">
                  <div>* PINNs for Material Science</div>
                  <div>* GPU-Accelerated Pipelines</div>
                  <div>* Real-time Edge AI</div>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300 animate-pulse">_</span>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -right-8 -top-8 bg-white dark:bg-[#303134] p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <Cpu className="w-8 h-8 text-blue-500" />
            </div>
            <div className="absolute -left-8 -bottom-8 bg-white dark:bg-[#303134] p-4 rounded-2xl shadow-xl animate-bounce delay-700 duration-[3000ms]">
              <Atom className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="w-full bg-slate-100 dark:bg-[#202124] border-y border-slate-200 dark:border-slate-800 overflow-hidden py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-mono text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">Technologies & Tools</p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 items-center">
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.TensorFlow className="w-8 h-8" /> <span className="text-xl font-bold">TensorFlow</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.Python className="w-8 h-8" /> <span className="text-xl font-bold">Python</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.React className="w-8 h-8" /> <span className="text-xl font-bold">React</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.Swift className="w-8 h-8" /> <span className="text-xl font-bold">Swift</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.Docker className="w-8 h-8" /> <span className="text-xl font-bold">Docker</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
               <BrandIcons.CUDA className="w-8 h-8" /> <span className="text-xl font-bold">CUDA</span>
             </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionTitle id="experience-title" icon={<Briefcase className="w-6 h-6" />}>
            Work Experience
          </SectionTitle>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-10 space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-[#171717] border-4 border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {job.role}
                  </h3>
                  <span className="font-mono text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  {job.company}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <Badge key={tag} color="blue">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Material Grid */}
      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-[#202124]/50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle id="projects-title" icon={<Sparkles className="w-6 h-6" />}>
            Featured Projects
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 ${project.color.replace('text', 'bg').replace('400', '500')}`}></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 ${project.color}`}>
                    {project.icon}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle id="education-title" icon={<BookOpen className="w-6 h-6" />}>
            Education & Awards
          </SectionTitle>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="shrink-0">
                  {edu.logo ? (
                    <div className="w-[60px] h-[60px] rounded-2xl bg-white p-2 flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-[60px] h-[60px] rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Award className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{edu.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid - "Bento" Style */}
      <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-[#202124] relative z-10">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle id="skills-title" icon={<Zap className="w-6 h-6" />}>
            Technical Arsenal
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="md:col-span-2 bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-500" /> Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg shadow-blue-500/20">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-200" /> AI & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml_ai.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-500" /> Cloud & DevOps
              </h3>
              <div className="space-y-3">
                {skills.cloud_devops.map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Tools */}
            <div className="md:col-span-2 bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-500" /> Tools & Frameworks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.other.map(skill => (
                  <div key={skill} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-24 px-6 text-center relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl shadow-blue-500/30">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Open for opportunities in AI Engineering, High-Performance Computing, and Research.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Send an Email
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-colors border border-blue-500"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="mt-16 text-slate-500 dark:text-slate-500 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} Kannan Sekar. Crafted with <span className="text-red-500">♥</span> using React & Tailwind.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
