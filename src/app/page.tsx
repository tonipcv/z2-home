'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PerformanceGraph from './components/PerformanceGraph'
import ProgressCircles from './components/ProgressCircles'
import ActivityTimeline from './components/ActivityTimeline'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001a1a] via-[#002b3d] to-[#001a1a] text-white overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-900 z-50">
        <div 
          className="h-full bg-[#00F5D4] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        {/* Top gradient */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#00F5D4]/5 blur-[120px] rounded-full" />
        
        {/* Center gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-[#006687]/5 blur-[150px] rounded-full" />
        
        {/* Bottom right gradient */}
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#00c2c2]/5 blur-[130px] rounded-full" />
        
        {/* Bottom left gradient */}
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-[#00F5D4]/5 blur-[140px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="fixed w-full top-0 border-b border-[#00F5D4]/10 backdrop-blur-md z-40">
          <div className="max-w-5xl mx-auto px-4 py-3 sm:py-6">
            <div className="flex justify-between items-center">
              <div className="w-16 sm:w-16">
                <Link 
                  href="/blog" 
                  className="text-[10px] sm:text-xs font-thin tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
                >
                  TIPS
                </Link>
              </div>
              <h1 className="text-sm sm:text-base font-thin tracking-[0.8em] text-white/80 hover:text-white transition-colors duration-300">
                BOOP
              </h1>
              <div className="w-16 sm:w-16">
                <a 
                  href="https://app.booplabs.com/auth/signin" 
                  className="text-[10px] sm:text-xs font-thin tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-4 sm:py-8 mt-20 sm:mt-32">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-16 sm:mb-40 relative">
            {/* Hero gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/10 via-[#006666]/5 to-transparent blur-3xl -z-10" />
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin mb-6 sm:mb-12 tracking-wider leading-tight">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">MONITOR YOUR</span><br/>
              <span className="bg-gradient-to-b from-[#00F5D4] to-[#00F5D4]/60 bg-clip-text text-transparent">FUTURE</span>
            </h2>
            <p className="text-[10px] sm:text-xs max-w-2xl mb-8 sm:mb-16 font-thin tracking-[0.2em] uppercase text-zinc-400">
              Technology that transforms data into performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://app.booplabs.com/auth/register"
                className="group relative inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm font-thin overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-full tracking-[0.4em]"
              >
                <span className="relative z-10 text-white/90 group-hover:text-white">START</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4]/0 via-[#00F5D4]/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
              <a 
                href="#how-it-works"
                className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Learn how it works →
              </a>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-40">
            {[
              { value: '300%', label: 'Performance Boost' },
              { value: '92%', label: 'Goal Achievement' },
              { value: '10x', label: 'Focus Increase' },
              { value: '5hrs', label: 'Daily Time Saved' }
            ].map((metric, i) => (
              <div key={i} className="text-center p-6 border border-zinc-900 rounded-lg hover:border-[#00F5D4]/20 transition-all">
                <div className="text-2xl sm:text-3xl font-thin mb-2">
                  <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="mb-16 sm:mb-40">
            <div className="text-center mb-12">
              <h3 className="text-lg sm:text-2xl font-thin mb-4">
                <span className="bg-gradient-to-r from-[#00F5D4] to-[#00F5D4]/60 bg-clip-text text-transparent">
                  How BOOP Labs Works
                </span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
                A systematic approach to achieving peak performance
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Track Your Progress',
                  description: 'Monitor key metrics and habits that drive success',
                  graph: <PerformanceGraph />
                },
                {
                  step: '02',
                  title: 'Analyze Patterns',
                  description: 'Identify what works and optimize your approach',
                  graph: <ProgressCircles />
                },
                {
                  step: '03',
                  title: 'Optimize Your Time',
                  description: 'Structure your day for maximum efficiency',
                  graph: <ActivityTimeline />
                }
              ].map((section, i) => (
                <div key={i} className="border border-zinc-900 rounded-lg p-6 sm:p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <span className="text-[#00F5D4] text-lg font-thin">{section.step}</span>
                    <div>
                      <h4 className="text-lg font-thin mb-2">{section.title}</h4>
                      <p className="text-zinc-400 text-sm">{section.description}</p>
                    </div>
                  </div>
                  {section.graph}
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16 sm:mb-40">
            <div className="text-center mb-12">
              <h3 className="text-lg sm:text-2xl font-thin mb-4">
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Everything You Need
                </span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
                Powerful tools designed for high achievers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="border border-zinc-900 rounded-lg p-6 sm:p-8 hover:border-[#00F5D4]/20 transition-all">
                <h4 className="text-lg font-thin mb-4">Smart Habit Tracking</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Monitor daily actions and routines
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Build consistency with streak tracking
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Get insights on your performance
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-900 rounded-lg p-6 sm:p-8 hover:border-[#00F5D4]/20 transition-all">
                <h4 className="text-lg font-thin mb-4">Performance Analytics</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Visualize your progress over time
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Identify patterns and optimize routines
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Make data-driven improvements
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-900 rounded-lg p-6 sm:p-8 hover:border-[#00F5D4]/20 transition-all">
                <h4 className="text-lg font-thin mb-4">Goal Achievement System</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Set and track meaningful goals
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Break big objectives into actionable steps
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Celebrate milestones and wins
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-900 rounded-lg p-6 sm:p-8 hover:border-[#00F5D4]/20 transition-all">
                <h4 className="text-lg font-thin mb-4">Focus Enhancement</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Eliminate distractions and stay focused
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Optimize your peak performance hours
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="text-[#00F5D4]">→</span>
                    Maintain high energy throughout the day
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center mb-16 sm:mb-40">
            <div className="border border-zinc-900 rounded-lg p-8 sm:p-12 bg-gradient-to-b from-zinc-900/50 to-transparent">
              <h3 className="text-xl sm:text-3xl font-thin mb-4 sm:mb-6">
                Ready to Reach Your Peak?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto mb-8">
                Join the community of high performers who are already achieving extraordinary results with BOOP Labs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://app.booplabs.com/auth/register"
                  className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#00F5D4]/10 hover:bg-[#00F5D4]/20 border border-[#00F5D4]/20 rounded-lg text-[#00F5D4] text-sm transition-all duration-300"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/blog"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  Read success stories →
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-[#00F5D4]/10">
          <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
            <p className="text-center text-gray-500 font-extralight tracking-[0.3em] text-[10px] sm:text-xs">
              © 2024 BOOP
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
