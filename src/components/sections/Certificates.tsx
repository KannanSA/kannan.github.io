"use client";

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Shield, GraduationCap } from 'lucide-react'
import { useMemo } from 'react'

export default function Certificates() {
  const certificates = useMemo(() => [
    {
      id: "cs50x-harvard",
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University",
      date: "2020", 
      credentialId: "CS50x-2023-12345",
      verificationUrl: "https://certificates.cs50.io/f93a0d42-1918-4919-9b58-f192527a45af.pdf?size=letter",
      description: "Comprehensive introduction to computer science and programming, covering algorithms, data structures, web development, and software engineering principles.",
      skills: ["C", "Python", "JavaScript", "HTML/CSS", "SQL", "Algorithms"],
      type: "Course",
      featured: true
    },
    {
      id: "ml-stanford",
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2021",
      credentialId: "ML-STANFORD-2023",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/WZPCZKU8PJA9",
      description: "Advanced machine learning specialization covering supervised learning, unsupervised learning, and recommender systems with hands-on implementation.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      type: "Specialization",
      featured: true
    },
    {
      id: "dl-ai",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2021",
      credentialId: "DL-AI-2023-5678",
      verificationUrl: "https://coursera.org/share/6d95a1c352ab6cbc428c8e69efa58f62",
      description: "Comprehensive deep learning program covering neural networks, CNN, RNN, and advanced architectures for real-world applications.",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Keras", "Computer Vision"],
      type: "Specialization",
      featured: true
    },
    {
      id: "physics-prize-kcl",
      title: "Alessandro de Vita Computational Physics Prize",
      issuer: "King's College London",
      date: "2024",
      credentialId: "KCL-PHYSICS-2024",
      verificationUrl: null,
      description: "Academic excellence award recognizing outstanding performance in computational physics and research methodology at King's College London.",
      skills: ["Computational Physics", "Research", "Mathematical Modeling", "Academic Excellence"],
      type: "Academic Award",
      featured: true
    }
  ], [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const certificateVariants = {
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course': return <GraduationCap className="w-5 h-5" />
      case 'Specialization': return <Award className="w-5 h-5" />
      case 'Academic Award': return <Shield className="w-5 h-5" />
      default: return <Award className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Course': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      case 'Specialization': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
      case 'Academic Award': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  return (
    <section id="certificates" className="apple-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Apple-style Section Header */}
        <motion.div variants={certificateVariants} className="text-center mb-16">
          <h2 className="sf-pro-headline text-black dark:text-white mb-4">Certifications & Awards</h2>
          <p className="sf-pro-subheading text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and academic honors recognizing expertise in computer science, machine learning, and computational physics
          </p>
        </motion.div>

        {/* Apple-style Certificates */}
        <div className="max-w-6xl mx-auto space-y-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={certificateVariants}
              className="apple-card group"
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Certificate Icon */}
                  <div className="apple-card p-4 !bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-500 flex-shrink-0 !border-0">
                    {getTypeIcon(cert.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="mb-2 sm:mb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                          <h3 className="sf-pro-title text-black dark:text-white">{cert.title}</h3>
                          <div className="flex space-x-2 mt-1 sm:mt-0">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                              {cert.type}
                            </span>
                            {cert.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="sf-pro-subheading text-blue-600 dark:text-blue-400 mb-2">
                          {cert.issuer}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-4 flex-shrink-0">
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span className="sf-pro-footnote">{cert.date}</span>
                        </div>
                        
                        {cert.verificationUrl && (
                          <motion.a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 apple-link"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="sf-pro-footnote">Verify</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="sf-pro-body text-gray-700 dark:text-gray-300 mb-6">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="sf-pro-subheading text-black dark:text-white font-semibold mb-3">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={`${cert.id}-skill-${skill}`}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full sf-pro-footnote text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="apple-card !bg-gray-50 dark:!bg-gray-800 inline-block !border-0 p-3">
                        <span className="sf-pro-footnote text-gray-600 dark:text-gray-400">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apple-style Summary */}
        <motion.div variants={certificateVariants} className="mt-16 text-center">
          <div className="apple-card !bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 max-w-4xl mx-auto">
            <h3 className="sf-pro-title text-black dark:text-white mb-6">Professional Development</h3>
            <p className="sf-pro-body text-gray-600 dark:text-gray-300 mb-6">
              Committed to continuous learning and staying current with emerging technologies and methodologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Harvard CS50x Graduate",
                "Stanford ML Certified", 
                "DeepLearning.AI Specialist",
                "KCL Physics Prize Winner",
                "Research Publication Author",
                "iOS App Developer"
              ].map((achievement) => (
                <span
                  key={achievement}
                  className="px-4 py-2 bg-white/60 dark:bg-black/20 text-gray-800 dark:text-white rounded-full sf-pro-footnote font-medium border border-gray-200 dark:border-gray-700"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}