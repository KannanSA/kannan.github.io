"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Brain, Globe, Gamepad2, Shield, Camera, TrendingUp, Heart } from 'lucide-react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const projects = [
    {
      title: "TetrisAI - Reinforcement Learning Agent",
      description: "Advanced AI agent using Deep Q-Networks to master Tetris gameplay through reinforcement learning and neural network optimization.",
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Deep Q-Networks"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com/kannansekara/TetrisAI",
      live: null,
      status: "Featured"
    },
    {
      title: "iPong - Apple Watch ML Game",
      description: "Innovative Apple Watch game utilizing CoreML for real-time gesture recognition and motion-based gameplay mechanics.",
      technologies: ["Swift", "WatchOS", "CoreML", "Motion Sensors"],
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      github: "https://github.com/kannansekara/iPong",
      live: "https://apps.apple.com/app/ipong",
      status: "Published"
    },
    {
      title: "1minuteDOEShelp - Accessibility App",
      description: "iOS application designed to assist users with accessibility needs through intelligent voice navigation and intuitive interface design.",
      technologies: ["Swift", "iOS", "Accessibility", "Voice Recognition"],
      category: "Mobile",
      icon: <Heart className="w-6 h-6" />,
      github: "https://github.com/kannansekara/1minuteDOEShelp",
      live: "https://apps.apple.com/app/1minutedoeshelp",
      status: "Published"
    },
    {
      title: "DabCounter - Motion Sensing Watch App",
      description: "Apple Watch application that uses advanced motion sensing to track and count specific gestures with high precision algorithms.",
      technologies: ["Swift", "WatchOS", "Motion Sensing", "Health Kit"],
      category: "Mobile",
      icon: <Gamepad2 className="w-6 h-6" />,
      github: "https://github.com/kannansekara/DabCounter",
      live: "https://apps.apple.com/app/dabcounter",
      status: "Published"
    },
    {
      title: "YoteCoin - Ethereum Smart Contract",
      description: "Comprehensive blockchain project featuring custom smart contracts, token economics, and decentralized application infrastructure.",
      technologies: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
      category: "Blockchain",
      icon: <Shield className="w-6 h-6" />,
      github: "https://github.com/kannansekara/YoteCoin",
      live: "https://etherscan.io/token/yotecoin",
      status: "Live"
    },
    {
      title: "AR Lens - Snapchat Viral Filter",
      description: "Viral augmented reality lens for Snapchat that achieved 2.5 million views through innovative AR effects and user engagement.",
      technologies: ["Lens Studio", "AR", "JavaScript", "3D Graphics"],
      category: "AR/VR",
      icon: <Camera className="w-6 h-6" />,
      github: null,
      live: "https://snapchat.com/lens/ar-lens",
      status: "Viral"
    },
    {
      title: "iCrypto - Bayesian Deep Learning",
      description: "Sophisticated cryptocurrency prediction system using Bayesian deep learning for uncertainty quantification in volatile markets.",
      technologies: ["Python", "Bayesian Networks", "Deep Learning", "Finance"],
      category: "AI/ML",
      icon: <TrendingUp className="w-6 h-6" />,
      github: "https://github.com/kannansekara/iCrypto",
      live: null,
      status: "Research"
    },
    {
      title: "GPComm - Healthcare Communication",
      description: "Healthcare communication platform designed to streamline patient-practitioner interactions with intelligent routing and scheduling.",
      technologies: ["Swift", "Healthcare APIs", "Real-time Chat", "iOS"],
      category: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      github: "https://github.com/kannansekara/GPComm",
      live: null,
      status: "Development"
    }
  ]

  const categories = ['All', 'AI/ML', 'Mobile', 'Healthcare', 'Blockchain', 'AR/VR']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full sf-pro-footnote font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'apple-button-primary'
                  : 'apple-button-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Apple-style Projects Grid */}
        <motion.div 
          layout
          className="max-w-6xl mx-auto apple-grid-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              variants={projectVariants}
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
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
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
        </motion.div>

        {/* Apple-style CTA Section */}
        <motion.div variants={projectVariants} className="text-center mt-16">
          <div className="apple-card !bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 max-w-2xl mx-auto">
            <h3 className="sf-pro-title text-black dark:text-white mb-4">Explore More Projects</h3>
            <p className="sf-pro-body text-gray-600 dark:text-gray-300 mb-6">
              Discover additional projects, experiments, and contributions on GitHub
            </p>
            <motion.a
              href="https://github.com/kannansekara"
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