'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
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
                What Patients Say After Visiting a 5-Star Clinic — And How to Make Them Say It About Yours
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Patient Experience</span>
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
              Most private clinics believe clinical excellence is enough. But today, patients remember the experience 
              more than the procedure. They remember how it made them feel — and whether it felt ordinary… or unforgettable.
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-light text-black mb-8">"It felt different." — The Line That Drives Referrals and Loyalty</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    When a patient walks out of your clinic and says, "That was different." You've already won. 
                    That phrase doesn't come from just being polite. It comes from design.
                  </p>
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl space-y-4">
                    <p className="text-gray-900 font-medium">Premium clinics intentionally craft experiences that:</p>
                    <ul className="list-none space-y-3 pl-0">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>Feel modern</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>Feel branded</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>Feel effortless</span>
                      </li>
                    </ul>
                    <div className="pl-4 border-l-2 border-blue-100 mt-6">
                      <p className="text-gray-900 italic">
                        74% of patients who describe a clinic as "different" leave a positive review or refer someone within 30 days.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">NRC Health</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">What Patients Actually Remember</h2>
                <div className="overflow-x-auto bg-blue-50 rounded-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Experience Point</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Most Clinics</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">5-Star Clinics</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">First Contact</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">WhatsApp message, no context</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600">Branded onboarding with clear next steps</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Follow-Up After Visit</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">Nothing</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600">Personalized check-ins, automated but human</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Treatment Plan</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">Verbal instructions</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600">Visual dashboard with milestones</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Post-Care Support</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">Rare or generic</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600">Smart reminders + referral prompts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">How Premium Clinics Design Memorable Journeys</h2>
                <div className="space-y-12">
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">1. A Beautiful First Impression</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        CXLUS allows your clinic to send personalized, branded onboarding links right after a booking — no WhatsApp 
                        copy-paste, no missed steps. Patients feel like they're entering something exclusive.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          Clinics using CXLUS report a 37% increase in treatment plan acceptance, simply by upgrading their onboarding experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">2. Visual Treatment Journey</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Patients don't remember instructions. They remember what they can see and follow. With CXLUS, clinics give patients 
                        a live dashboard showing their progress, upcoming sessions, and clear goals.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          One London-based clinic saw a 47% reduction in abandoned treatment plans after implementing the visual journey feature.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">3. Stay Present — Even When You're Not</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        After the visit is where most clinics disappear. With CXLUS, that's where you stand out. The platform automatically 
                        sends post-visit check-ins, satisfaction messages, and review prompts that feel human.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "A dermatology clinic in Lisbon using CXLUS increased returning visits by 28% in just 60 days, without hiring anyone new."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">More 5-Star Reviews, Without Asking</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Patients don't leave reviews because you ask. They leave reviews because they felt something worth sharing. 
                    And with the right journey — automated, consistent, emotionally resonant — that happens naturally.
                  </p>
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <div className="space-y-6">
                      <p className="text-gray-900 font-medium">The Impact of a Premium Experience:</p>
                      <ul className="list-none space-y-3 pl-0">
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          <span>Higher lifetime value</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          <span>More referrals</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          <span>More reviews</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          <span>Less churn</span>
                        </li>
                      </ul>
                      <div className="pl-4 border-l-2 border-blue-100 mt-4">
                        <p className="text-gray-900">
                          Clinics using CXLUS report 2x to 4x more Google reviews within the first 90 days.
                        </p>
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-2xl font-light text-black">Evaluate Your Clinic Experience</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Take our free Clinic Experience Scorecard and benchmark your current patient journey against the 5-Star Standard.
              Get immediate insights to increase patient loyalty, reviews, and referrals.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => window.location.href = '/scorecard'}
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3 text-sm tracking-wide rounded-lg"
              >
                Take the Scorecard
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