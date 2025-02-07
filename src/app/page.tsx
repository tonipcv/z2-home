'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#00F5D4]/10 to-white/10 blur-3xl pointer-events-none transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-800 z-50">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed w-full top-0 border-b border-zinc-900 backdrop-blur-md z-40">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center">
            <div className="w-20">
              <Link 
                href="/blog" 
                className="text-xs sm:text-sm font-thin tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
              >
                TIPS
              </Link>
            </div>
            <h1 className="text-base sm:text-lg font-thin tracking-[0.8em] text-white/80 hover:text-white transition-colors duration-300">
              BOOP
            </h1>
            <div className="w-20">
              <a 
                href="https://app.booplabs.com/auth/signin" 
                className="text-xs sm:text-sm font-thin tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12 mt-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24 sm:mb-40 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/10 via-transparent to-transparent blur-3xl -z-10" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-8 sm:mb-12 tracking-wider leading-tight">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">MONITOR YOUR</span><br/>
            <span className="bg-gradient-to-b from-[#00F5D4] to-[#00F5D4]/60 bg-clip-text text-transparent">FUTURE</span>
          </h2>
          <p className="text-[10px] sm:text-xs max-w-2xl mb-12 sm:mb-16 font-thin tracking-[0.2em] uppercase text-zinc-400">
            Technology that transforms data into performance
          </p>
          <a 
            href="https://app.booplabs.com/auth/register"
            className="group relative inline-flex items-center gap-2 px-12 py-4 text-sm font-thin overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 rounded-full tracking-[0.4em]"
          >
            <span className="relative z-10 text-white/90 group-hover:text-white">START</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4]/0 via-[#00F5D4]/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-6 sm:gap-20 mb-12 sm:mb-20">
          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="relative h-40 sm:h-48 mb-24 sm:mb-40 px-4">
          {/* Graph Lines */}
          <div className="absolute inset-0 flex items-end justify-between">
            <div className="w-[1px] h-[60%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
            <div className="w-[1px] h-[75%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
            <div className="w-[1px] h-[90%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
            <div className="w-[1px] h-[70%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
            <div className="w-[1px] h-[85%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
            <div className="w-[1px] h-[95%] bg-gradient-to-t from-[#00F5D4] to-white/20"></div>
          </div>
          
          {/* Graph Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
        </div>
      </main>

      <footer className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
          <p className="text-center text-gray-500 font-extralight tracking-[0.3em] text-[10px] sm:text-xs">
            © 2024 BOOP
          </p>
        </div>
      </footer>
    </div>
  );
}
