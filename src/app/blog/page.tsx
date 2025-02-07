'use client'

import Link from 'next/link'

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed w-full top-0 border-b border-zinc-900 backdrop-blur-md z-40">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center">
            <div className="w-20">
              <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300">
                ← Back
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
        {/* Blog Header */}
        <div className="mb-16 text-center">
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Insights, strategies, and practical tips to help you build better habits, 
            maximize productivity, and unlock your full potential.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-20">
          <Link 
            href="/blog/how-boop-labs-helps-you-build-profitable-business"
            className="block group"
          >
            <article className="border border-zinc-900 p-8 rounded-lg hover:bg-zinc-900/30 transition-all duration-300">
              <div className="text-[#00F5D4] text-sm mb-4">Business Growth</div>
              <h2 className="text-2xl font-thin mb-4 group-hover:text-[#00F5D4] transition-colors duration-300">
                How BOOP Labs Helps You Build an Insanely Profitable Business and Design Your Dream Life
              </h2>
              <p className="text-zinc-400 text-sm font-light mb-6">
                Discover how BOOP Labs can skyrocket your business profits and help you create a life you truly love—thanks to powerful habit tracking, cutting-edge productivity tools, and a daily system that keeps you on track.
              </p>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>March 14, 2024</span>
                <span className="text-[#00F5D4] group-hover:translate-x-2 transition-transform duration-300">
                  Read more →
                </span>
              </div>
            </article>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-zinc-900/50 p-8 sm:p-12 rounded-lg border border-zinc-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-thin mb-4">Ready to Transform Your Life?</h3>
            <p className="text-zinc-400 text-sm mb-8">
              Join thousands of successful entrepreneurs who are already using BOOP Labs 
              to build better habits and scale their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.booplabs.com/auth/register"
                className="w-full sm:w-auto px-8 py-4 bg-[#00F5D4]/10 hover:bg-[#00F5D4]/20 border border-[#00F5D4]/20 rounded-lg text-[#00F5D4] text-sm transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Free Trial
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <a 
                href="https://app.booplabs.com/auth/signin"
                className="w-full sm:w-auto px-8 py-4 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white text-sm transition-all duration-300"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
          <p className="text-center text-gray-500 font-extralight tracking-[0.3em] text-[10px] sm:text-xs">
            © 2024 BOOP
          </p>
        </div>
      </footer>
    </div>
  )
} 