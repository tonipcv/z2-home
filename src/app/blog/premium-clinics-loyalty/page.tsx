'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BlogPost() {
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
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4 rotate-180 mr-2" />
              Return to Insights
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em] leading-tight">
                How Premium Clinics Transform Single Visits Into Lifelong Value
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Strategic Analysis</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-16 font-light">
              Most clinics operate on a traditional model: attract patients, provide treatment, and hope for return visits. 
              However, market leaders have discovered that sustainable growth stems from a more sophisticated approach—one that 
              transforms initial consultations into enduring patient relationships.
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-light text-black mb-8">The Cost of Transactional Healthcare</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Patient acquisition represents a significant investment in both resources and market positioning. 
                    When these relationships remain transactional, clinics not only fail to maximize return on investment—they 
                    actively diminish their market value.
                  </p>
                  <p>
                    A single-visit patient represents a net loss in acquisition costs. Conversely, a long-term relationship 
                    becomes a compounding asset, generating both direct revenue and network effects through referrals.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">Strategic Pillars of High-Value Practice</h2>
                <div className="space-y-12">
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">First Impression Architecture</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Leading clinics have moved beyond traditional reception protocols. They implement sophisticated 
                        digital onboarding systems that establish authority and build trust before the first consultation.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "71% of patients cite digital experience as a primary factor in establishing trust with healthcare providers."
                        </p>
                        <p className="text-sm text-gray-500 mt-2">PatientPop Industry Analysis, 2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">Treatment Journey Optimization</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Market leaders have redefined treatment protocols from discrete services into cohesive narratives, 
                        incorporating visual progress mapping, milestone tracking, interactive dashboards, and outcome visualization.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          One clinic saw a 47% drop in abandoned treatment plans after implementing progress dashboards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">Continuous Engagement Framework</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Excellence in post-treatment engagement distinguishes market leaders. Automated yet personalized 
                        follow-up protocols maintain presence without increasing operational overhead.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "Automated engagement protocols yielded a 23% increase in patient retention over 60 days."
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Case Study: Lisbon Wellness Center, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">Quantified Impact Analysis</h2>
                <div className="overflow-x-auto bg-blue-50 rounded-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Metric</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Traditional</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Optimized</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Patient Lifetime Value</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€250–€400</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">€900–€1,300+</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Annual Referral Rate</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">0.4</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">1.4</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Monthly Reviews (5-star)</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">2–5</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">15+</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Appointment Adherence</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">80%</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">92%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
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
              Discover how CXLUS can elevate your clinic's patient experience and operational efficiency through 
              intelligent automation and personalized care journeys.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => window.location.href = '/demo'}
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3 text-sm tracking-wide rounded-lg"
              >
                Request Strategic Analysis
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
  );
} 