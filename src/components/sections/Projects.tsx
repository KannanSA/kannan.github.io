"use client";

import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Github, Smartphone, Brain, Globe, Gamepad2, Shield, Camera, TrendingUp, Heart } from 'lucide-react'

// Define a stable project type
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: JSX.Element;
  github: string | null;
  live: string | null;
  status: 'Featured' | 'Published' | 'Live' | 'Viral' | 'Research' | 'Development';
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  // New: hold pinned/top GitHub repos
  const [pinnedProjects, setPinnedProjects] = useState<Project[]>([])
  // Control how many GitHub repos to display
  const GH_REPO_LIMIT = 6

  // Base curated projects (existing list)
  const baseProjects: Project[] = [
    {
      id: 'tetris-ai',
      title: "TetrisAI - Reinforcement Learning Agent",
      description: "Advanced AI agent using Deep Q-Networks to master Tetris gameplay through reinforcement learning and neural network optimization.",
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Deep Q-Networks"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com/kannansa/TetrisAI",
      live: null,
      status: "Featured"
    },
    {
      id: 'ipong',
      title: "iPong - Apple Watch ML Game",
      description: "Innovative Apple Watch game utilizing CoreML for real-time gesture recognition and motion-based gameplay mechanics.",
      technologies: ["Swift", "WatchOS", "CoreML", "Motion Sensors"],
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      github: "https://github.com/kannansa/iPong",
      live: "https://apps.apple.com/app/ipong",
      status: "Published"
    },
    {
      id: 'doeshelp',
      title: "1minuteDOEShelp - Accessibility App",
      description: "iOS application designed to assist users with accessibility needs through intelligent voice navigation and intuitive interface design.",
      technologies: ["Swift", "iOS", "Accessibility", "Voice Recognition"],
      category: "Mobile",
      icon: <Heart className="w-6 h-6" />,
      github: "https://github.com/kannansa/1minuteDOEShelp",
      live: "https://apps.apple.com/app/1minutedoeshelp",
      status: "Published"
    },
    {
      id: 'dabcounter',
      title: "DabCounter - Motion Sensing Watch App",
      description: "Apple Watch application that uses advanced motion sensing to track and count specific gestures with high precision algorithms.",
      technologies: ["Swift", "WatchOS", "Motion Sensing", "Health Kit"],
      category: "Mobile",
      icon: <Gamepad2 className="w-6 h-6" />,
      github: "https://github.com/kannansa/DabCounter",
      live: "https://apps.apple.com/app/dabcounter",
      status: "Published"
    },
    {
      id: 'yotecoin',
      title: "YoteCoin - Ethereum Smart Contract",
      description: "Comprehensive blockchain project featuring custom smart contracts, token economics, and decentralized application infrastructure.",
      technologies: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
      category: "Blockchain",
      icon: <Shield className="w-6 h-6" />,
      github: "https://github.com/kannansa/YoteCoin",
      live: "https://etherscan.io/token/yotecoin",
      status: "Live"
    },
    {
      id: 'ar-lens',
      title: "AR Lens - Snapchat Viral Filter",
      description: "Viral augmented reality lens for Snapchat that achieved 2.5 million views through innovative AR effects and user engagement.",
      technologies: ["Lens Studio", "AR", "JavaScript", "3D Graphics"],
      category: "AR/VR",
      icon: <Camera className="w-6 h-6" />,
      github: null,
      live: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1acf4ea8a52648b6b3f0a977f3a3ffac&metadata=01",
      status: "Viral"
    },
    {
      id: 'icrypto',
      title: "iCrypto - Bayesian Deep Learning",
      description: "Sophisticated cryptocurrency prediction system using Bayesian deep learning for uncertainty quantification in volatile markets.",
      technologies: ["Python", "Bayesian Networks", "Deep Learning", "Finance"],
      category: "AI/ML",
      icon: <TrendingUp className="w-6 h-6" />,
      github: "https://github.com/kannansa/iCrypto",
      live: null,
      status: "Research"
    },
    {
      id: 'gpcomm',
      title: "GPComm - Healthcare Communication",
      description: "Healthcare communication platform designed to streamline patient-practitioner interactions with intelligent routing and scheduling.",
      technologies: ["Swift", "Healthcare APIs", "Real-time Chat", "iOS"],
      category: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      github: "https://github.com/kannansa/GPComm",
      live: null,
      status: "Development"
    },
    {
      id: 'NLP NHS',
      title: "NLP Pipeline for ICD-9 Code Prediction",
      description: "Natural Language Processing pipeline designed to predict ICD-9 codes from clinical text.",
      technologies: ["Python", "NLP", "Machine Learning", "Healthcare"],
      category: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      github: "https://github.com/KannanSA/NLPK",
      live: null,
      status: "Development"
    }
  ]

  // Fetch pinned/top GitHub repositories and map to Project entries
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/github/pinned', { cache: 'force-cache' })
        if (!res.ok) return
        const data = await res.json()
        const source: string = data?.source || 'repos'
        const repos: any[] = Array.isArray(data?.repos) ? data.repos : []
        const mapped: Project[] = repos.map((r) => ({
          id: String(r.id || `gh-${r.name}`),
          title: r.name,
          description: r.description || 'Open-source project on GitHub',
          technologies: r.language ? [String(r.language)] : [],
          category: 'GitHub',
          icon: <Github className="w-6 h-6" />,
          github: r.link || null,
          live: r.homepage || null,
          status: source === 'pinned' ? 'Featured' : 'Published'
        }))
        if (!cancelled) setPinnedProjects(mapped)
      } catch {}
    })()
    return () => { cancelled = true }
  }, [])

  // Combine pinned first, then base projects, deduplicating by GitHub URL or title
  const combinedProjects = useMemo(() => {
    const existingUrls = new Set(
      baseProjects.map(p => (p.github || '').toLowerCase()).filter(Boolean)
    )
    const dedupPinned = pinnedProjects.filter(p => !existingUrls.has((p.github || '').toLowerCase()))
    const limitedPinned = dedupPinned.slice(0, GH_REPO_LIMIT)
    // Merge with pinned prioritized
    return [...limitedPinned, ...baseProjects]
  }, [baseProjects, pinnedProjects, GH_REPO_LIMIT])

  // Derive categories from combined data to avoid mismatches
  const categories = useMemo(() => {
    const set = new Set<string>(combinedProjects.map(p => p.category.trim()))
    return ['All', ...Array.from(set)]
  }, [combinedProjects])

  // Guard: if current selectedCategory is not present (data changed), reset
  useEffect(() => {
    if (selectedCategory !== 'All' && !categories.includes(selectedCategory)) {
      setSelectedCategory('All')
    }
  }, [categories, selectedCategory])

  // Case-insensitive, trimmed filtering
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return combinedProjects
    const sel = selectedCategory.trim().toLowerCase()
    const list = combinedProjects.filter(p => p.category.trim().toLowerCase() === sel)
    return list.length ? list : combinedProjects // fallback to all if empty
  }, [combinedProjects, selectedCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const getStatusColor = (status: string) => {
    const statusMap = {
      'Featured': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Published': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Live': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Viral': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Research': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Development': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
    }
    return statusMap[status as keyof typeof statusMap] || statusMap.Live
  }

  return (
    <section id="projects" className="apple-section bg-gray-50 dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Apple-style Section Header */}
        <motion.div variants={projectVariants} className="text-center mb-12">
          <h2 className="sf-pro-headline text-black dark:text-white mb-4">Featured Projects</h2>
          <p className="sf-pro-subheading text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative applications spanning AI/ML, mobile development, healthcare technology, and emerging platforms
          </p>
        </motion.div>

        {/* Apple-style Filter Tabs */}
        <motion.div 
          variants={projectVariants} 
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => {
            const active = selectedCategory === category
            return (
              <motion.button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`projects-panel-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full sf-pro-footnote font-medium transition-all duration-300 ${
                  active ? 'apple-button-primary' : 'apple-button-secondary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-magnet
              >
                {category}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Apple-style Projects Grid */}
        <motion.div 
          layout
          className="max-w-6xl mx-auto apple-grid-auto"
          id={`projects-panel-${selectedCategory}`}
          role="tabpanel"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="apple-card group"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="apple-card p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-500 !border-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="sf-pro-title text-black dark:text-white">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="sf-pro-body text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full sf-pro-footnote text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apple-style Links */}
                <div className="flex items-center space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 apple-link"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="sf-pro-footnote">Code</span>
                    </motion.a>
                  )}
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 apple-link"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="sf-pro-footnote">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Apple-style CTA Section */}
        <motion.div variants={projectVariants} className="text-center mt-16">
          <div className="apple-card !bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 max-w-2xl mx-auto">
            <h3 className="sf-pro-title text-black dark:text-white mb-4">Explore More Projects</h3>
            <p className="sf-pro-body text-gray-600 dark:text-gray-300 mb-6">
              Discover additional projects, experiments, and contributions on GitHub
            </p>
            <motion.a
              href="https://github.com/KannanSA"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}