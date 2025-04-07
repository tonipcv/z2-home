'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

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
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <header className="w-full border-b border-white/10 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <rect width="32" height="32" rx="8" fill="#fff" />
                  <path d="M10 16.5C10 13.4624 12.4624 11 15.5 11H22V16.5C22 19.5376 19.5376 22 16.5 22H10V16.5Z" fill="#2E8DFF"/>
                  <path d="M22 11L16.5 16.5L22 22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1 className="text-xl font-light tracking-tight text-white">
                  MED1
                </h1>
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.med1.app/auth/signin" 
                  className="text-sm font-light text-white/80 hover:text-white transition-colors"
                >
                  Entrar
                </a>
                <a 
                  href="https://www.med1.app/auth/register" 
                  className="text-sm font-light bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md transition-colors border border-white/20"
                >
                  Começar agora
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl sm:text-5xl font-light text-white mb-8">
                CRESÇA SEU CONSULTÓRIO EM ATÉ 10X
              </h1>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                CRM com rastreamento para médicos e clínicas privadas.
              </p>
              
              <div className="relative inline-block">
                <span className="absolute -inset-4 rounded-full bg-blue-500/30 blur-xl animate-pulse"></span>
                <a 
                  href="https://www.med1.app/auth/register"
                  className="relative inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 border-none shadow-xl px-12 py-7 text-xl font-bold rounded-lg"
                >
                  <span className="mr-3">Começar agora</span>
                  <span className="bg-white/20 rounded-full p-1.5 -mr-1">
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-white/10 w-full mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="text-center text-sm text-white/50">
              © 2025 Med1. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
