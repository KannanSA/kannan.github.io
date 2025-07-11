"use client";

import { Mail, Linkedin, Github, ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToNextSection = () => {
    const educationSection = document.querySelector('#education')
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="hero" className="apple-hero min-h-screen flex items-center justify-center">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Main Headline - Apple Style */}
        <motion.h1 
          variants={itemVariants}
          className="apple-hero-headline"
        >
          Kannan Sekar Annu Radha
        </motion.h1>
        
        {/* Subheadline */}
        <motion.h2
          variants={itemVariants}
          className="apple-hero-subheadline text-gray-600 dark:text-gray-400"
        >
          Physics Student at King's College London
        </motion.h2>
        
        {/* Hero Copy - Apple Style */}
        <motion.p 
          variants={itemVariants}
          className="apple-hero-copy text-gray-600 dark:text-gray-300"
        >
          Motivated interdisciplinary researcher with a strong foundation in{' '}
          <strong className="text-black dark:text-white">physics and computer science</strong>. 
          Developing intelligent systems using machine learning, probabilistic reasoning, and computational logic.
        </motion.p>
        
        {/* Apple-style CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="mailto:kannansekara@gmail.com"
            className="apple-button-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
          
          <motion.a
            href="https://github.com/kannansekara"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </motion.div>
        
        {/* Social Links - Apple Style */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://linkedin.com/in/kannan-sekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-card w-12 h-12 rounded-full flex items-center justify-center !p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </motion.a>
          
          <motion.a
            href="https://github.com/kannansa"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-card w-12 h-12 rounded-full flex items-center justify-center !p-0 hover:bg-gray-50 dark:hover:bg-gray-800"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.a>
          
          <motion.a
            href="mailto:kannansekara@gmail.com"
            className="apple-card w-12 h-12 rounded-full flex items-center justify-center !p-0 hover:bg-gray-50 dark:hover:bg-gray-800"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.a>
        </motion.div>

        {/* Apple-style Scroll Indicator */}
        <motion.button
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto block apple-link"
          whileHover={{ y: 2 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="sf-pro-footnote text-gray-500">Learn more</span>
            <ChevronDown className="w-4 h-4 text-blue-600" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}