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
                Why Most Private Clinics Lose Money After the First Appointment — And How to Fix It
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Revenue Analysis</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>7 min read</span>
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
              The biggest leak in your clinic's revenue isn't your ads. It's what happens after the first appointment. In most private clinics, 
              the patient comes once, pays, leaves… and disappears. No follow-up. No relationship. No return visit.
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-light text-black mb-8">The Real Problem: Silent Patient Drop-Off</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    You don't see the drop-out. You don't get a complaint. But the patient never returns. Research shows that up to 52% of new 
                    patients never return for a second appointment in private practices.
                  </p>
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl space-y-4">
                    <p className="text-gray-900 font-medium">Why patients don't return:</p>
                    <ul className="list-none space-y-3 pl-0">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>They don't understand the next step</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>They feel like "just another patient"</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>They didn't experience anything worth remembering — or sharing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">The Economics of Patient Retention</h2>
                <div className="overflow-x-auto bg-blue-50 rounded-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Patient Type</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Avg. Revenue</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Marketing Cost</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Net Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">First-time only</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€150</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€90</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">€60</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Returning patient</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€600/year</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€0</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">€600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">The Premium Clinic Approach</h2>
                <div className="space-y-12">
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">1. Remarkable First Impression</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Instead of cold WhatsApp messages, patients receive a branded onboarding experience with personalized welcome messages, 
                        visual treatment plans, and professional digital touchpoints.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          Clinics using CXLUS see up to 37% higher treatment plan acceptance rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">2. Visual Patient Journey</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Replace vague instructions with clear visual roadmaps showing current progress, next steps, and treatment milestones.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          Treatment dashboard implementation leads to 2.3x higher plan adherence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">3. Automated Engagement</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Maintain presence through intelligent automation: scheduled check-ins, appointment reminders, and personalized follow-ups 
                        that feel natural, not robotic.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "One London dermatology clinic increased patient retention by 28% in 60 days using automated communication."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">Measurable Business Impact</h2>
                <div className="overflow-x-auto bg-blue-50 rounded-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">KPI</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Without CXLUS</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">With CXLUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">No-show rate</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">19–24%</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">{"<"} 8%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">5-star reviews/month</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">3–5</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">12–20</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Patient LTV</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">€300–€450</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">€900–€1,500</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Referral rate</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">{"<"} 0.5/year</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">1.3–1.8/year</td>
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
            <h2 className="text-2xl font-light text-black">Evaluate Your Clinic Experience</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Take our free Clinic Experience Scorecard to see how your practice compares to the 5-Star Standard in London.
              Get immediate insights to increase patient lifetime value, loyalty, and referrals.
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