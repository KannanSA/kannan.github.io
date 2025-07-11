"use client";

import { motion } from 'framer-motion'
import { Code, Brain, Database, Smartphone, Cpu, Globe } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Swift", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "Haskell", level: 80 },
        { name: "JavaScript/TypeScript", level: 75 },
        { name: "Java/SQL", level: 80 }
      ], 
      color: "blue"
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "CoreML", level: 88 },
        { name: "Scikit-learn", level: 82 },
        { name: "Natural Language Processing", level: 80 },
        { name: "Computer Vision", level: 78 }
      ],
      color: "purple"
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 92 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "Jupyter", level: 90 },
        { name: "Statistical Analysis", level: 83 },
        { name: "Data Visualization", level: 80 }
      ],
      color: "green"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "iOS Development", level: 92 },
        { name: "SwiftUI", level: 88 },
        { name: "UIKit", level: 85 },
        { name: "WatchOS", level: 80 },
        { name: "Xcode", level: 90 },
        { name: "App Store Connect", level: 75 }
      ],
      color: "indigo"
    },
    {
      title: "Physics & Computational Sciences",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Physics-Informed Neural Networks", level: 85 },
        { name: "Computational Physics", level: 88 },
        { name: "Mathematical Modeling", level: 82 },
        { name: "MATLAB", level: 75 },
        { name: "LaTeX", level: 90 },
        { name: "Research Methodology", level: 87 }
      ],
      color: "orange"
    },
    {
      title: "Web & Cloud Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "FireBase", level: 70 },
        { name: "Git/GitHub", level: 88 },
        { name: "Docker", level: 65 },
        { name: "API Development", level: 78 }
      ],
      color: "teal"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
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

  const getColorClass = (color: string) => {
    const colorMap = {
      blue: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
      purple: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
      green: "text-green-500 bg-green-50 dark:bg-green-900/20",
      indigo: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
      orange: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
      teal: "text-teal-500 bg-teal-50 dark:bg-teal-900/20"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500",
      purple: "bg-purple-500", 
      green: "bg-green-500",
      indigo: "bg-indigo-500",
      orange: "bg-orange-500",
      teal: "bg-teal-500"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="skills" className="apple-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Apple-style Section Header */}
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="sf-pro-headline text-black dark:text-white mb-4">Skills & Expertise</h2>
          <p className="sf-pro-subheading text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of technical competencies across physics, computer science, and emerging technologies
          </p>
        </motion.div>

        {/* Apple-style Skills Grid */}
        <div className="max-w-7xl mx-auto apple-grid-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="apple-card group"
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`apple-card p-3 !border-0 ${getColorClass(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="sf-pro-title text-black dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List with Apple-style Progress */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="sf-pro-subheading text-black dark:text-white">
                        {skill.name}
                      </span>
                      <span className="sf-pro-footnote text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full ${getProgressColor(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apple-style Summary Section */}
        <motion.div
          variants={categoryVariants}
          className="mt-16 text-center"
        >
          <div className="apple-card !bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 max-w-4xl mx-auto">
            <h3 className="sf-pro-title text-black dark:text-white mb-6">Core Competencies</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Machine Learning",
                "iOS Development", 
                "Physics Research",
                "Data Science",
                "Healthcare AI",
                "Edge Computing",
                "Academic Excellence"
              ].map((competency, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/60 dark:bg-black/20 text-gray-800 dark:text-white rounded-full sf-pro-footnote font-medium border border-gray-200 dark:border-gray-700"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}