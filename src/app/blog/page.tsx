'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    title: "What Patients Say After Visiting a 5-Star Clinic — And How to Make Them Say It About Yours",
    description: "Discover how premium clinics create unforgettable patient experiences that drive 5-star reviews, referrals, and long-term loyalty — and how CXLUS helps you deliver the same, fully automated and branded.",
    category: "Patient Experience",
    readTime: "8 min read",
    slug: "how-to-create-5-star-clinic-experience",
    date: "Mar 14, 2024"
  },
  {
    title: "How Premium Clinics Transform Single Visits Into Lifelong Value",
    description: "Learn how market-leading clinics turn first-time patients into loyal advocates through sophisticated engagement strategies and automated patient journeys.",
    category: "Strategic Analysis",
    readTime: "8 min read",
    slug: "premium-clinics-loyalty",
    date: "Mar 12, 2024"
  },
  {
    title: "Why Most Private Clinics Lose Money After the First Appointment — And How to Fix It",
    description: "Most clinics lose revenue after the first appointment. Discover how CXLUS helps premium private clinics turn one-time patients into loyal, high-value promoters — using smart automation and branded experiences.",
    category: "Revenue Analysis",
    readTime: "7 min read",
    slug: "patient-retention",
    date: "Mar 10, 2024"
  }
]

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white text-black font-satoshi tracking-[-0.02em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em] leading-tight">
                CXLUS Insights
              </h1>
              <p className="text-lg text-gray-600 font-light">
                Expert analysis and strategies for premium healthcare providers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-4 p-6 sm:p-8 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-light text-black group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-blue-600 text-sm font-medium">
                        Read article →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-blue-50">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-light text-black">Transform Your Practice</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover how CXLUS can help you deliver premium patient experiences that drive growth, 
              loyalty, and referrals — fully automated and branded as your own.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => window.location.href = '/demo'}
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3 text-sm tracking-wide rounded-lg"
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4 sm:mb-0" />
            <p className="text-gray-500 text-sm">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 