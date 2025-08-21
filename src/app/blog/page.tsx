'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getDict } from '@/lib/i18n'

const blogPosts = [
  {
    title: "From Expensive Ads to a Growth Ecosystem: A Technical ROI Analysis of Referral Programs in the Aesthetics Industry",
    description: "How a dual-incentive referral program reframes CAC to $0 by classifying rewards as loyalty investment and promotional discount, yielding higher-quality growth.",
    category: "Referral Analysis",
    readTime: "8 min read",
    slug: "referral-program-roi-aesthetics",
    date: "Aug 21, 2025"
  },
  {
    title: "From Transactional Visits to Predictable Revenue: A Technical Analysis of Loyalty Program ROI in the Aesthetics Industry",
    description: "A data-driven breakdown of how a Zuzz-engineered loyalty program increases repeat visit frequency, product attach rate, and CLV for medical aesthetics clinics.",
    category: "Technical Analysis",
    readTime: "9 min read",
    slug: "loyalty-program-roi-aesthetics",
    date: "Aug 21, 2025"
  }
]

export default function BlogIndex() {
  const t = getDict('en')
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href={{ pathname: '/' }}>
              <img src="/logo.png" alt="Logo" className="h-5" />
            </Link>
            <div className="text-sm text-gray-600 flex items-center gap-5">
              <Link href={{ pathname: '/' }} className="hover:underline">{t.nav.home}</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{opacity:1,y:0}} animate={{opacity:1,y:0}}>
            <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em]">{t.blogIndex.header}</h1>
            <p className="mt-2 text-gray-700 max-w-2xl">{t.blogIndex.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <ul className="divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <li key={post.slug} className="py-6">
                <div className="text-sm text-gray-600 mb-1">
                  <span>{post.category}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                  <span className="mx-2">·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-medium">
                  <Link href={{ pathname: `/blog/${post.slug}` as const }} className="text-blue-700 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mt-1">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4 sm:mb-0" />
            <p className="text-gray-500 text-sm">© 2025 Zuzz.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
 