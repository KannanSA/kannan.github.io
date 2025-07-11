"use client";

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:kannansekara@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      label: 'kannansekara@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/kannan-sekar/',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/kannanSA',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub Profile'
    }
  ]

  const quickLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' }
  ]

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="apple-section bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Apple-style Footer Grid */}
        <div className="apple-grid-auto mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">KS</span>
              </div>
              <div>
                <h3 className="sf-pro-title text-black dark:text-white">Kannan Sekar</h3>
                <p className="sf-pro-footnote text-gray-500">Physics & AI Researcher</p>
              </div>
            </div>
            
            <p className="sf-pro-body text-gray-600 dark:text-gray-300">
              Bridging physics and computer science to create intelligent systems 
              that solve real-world problems in healthcare and beyond.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="sf-pro-footnote">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="sf-pro-footnote">in London</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="sf-pro-title text-black dark:text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleQuickLinkClick(link.href)}
                  className="block sf-pro-body apple-link"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="sf-pro-title text-black dark:text-white">Get in Touch</h4>
            
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="apple-card p-3 group flex items-center space-x-3"
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div className="text-blue-600 dark:text-blue-400 group-hover:text-purple-500 transition-colors">
                    {social.icon}
                  </div>
                  <span className="sf-pro-body group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-black dark:text-white">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Apple-style Resume Button */}
            <motion.a
              href="mailto:kannansekara@gmail.com?subject=Resume Request"
              className="apple-button-primary w-full text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Resume
            </motion.a>
          </div>
        </div>

        {/* Apple-style Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-4">
            <p className="sf-pro-footnote text-gray-500">
              © {new Date().getFullYear()} Kannan Sekar Annu Radha. All rights reserved.
            </p>
          </div>

          {/* Apple-style Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="apple-card w-10 h-10 rounded-full flex items-center justify-center group"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </motion.button>
        </div>

        {/* Apple-style Additional Info */}
        <div className="mt-8 text-center">
          <p className="sf-pro-footnote text-gray-400">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="sf-pro-footnote text-gray-400 mt-1">
            King's College London • Physics Student • AI Researcher
          </p>
        </div>
      </motion.div>
    </footer>
  )
}