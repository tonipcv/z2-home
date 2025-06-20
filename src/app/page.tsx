'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRightIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  LinkIcon,
  ChartPieIcon,
  ShareIcon,
  QrCodeIcon,
  PresentationChartLineIcon,
  FunnelIcon,
  ChevronDownIcon,
  GiftIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <Button 
                onClick={() => window.location.href = 'https://app.cxlus.com/auth/signin'}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-2 text-sm font-light tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>
    
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <Button 
                onClick={handleDemoClick}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors px-4 py-2 text-xs font-light tracking-[-0.03em] rounded-full"
              >
                Get a Demo
              </Button>
              <button
                className="p-2.5 text-gray-100 hover:text-gray-300 transition-colors bg-white/5 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col flex-1">
                  {/* Buttons Section - Fixed at bottom */}
                  <div className="mt-auto pt-6 flex space-x-3">
                    <Button
                      onClick={() => {
                        window.location.href = 'https://app.cxlus.com/auth/signin';
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 py-3 text-base font-medium tracking-[-0.03em] rounded-full"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => {
                        handleDemoClick();
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-all duration-300 py-3 text-base font-medium tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl"
                    >
                      Get a Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
          
          {/* Large circles */}
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border border-white/5 rounded-full blur-2xl opacity-30" />
          <div className="absolute -bottom-48 -right-32 w-[800px] h-[800px] border border-white/5 rounded-full blur-2xl opacity-30" />
          
          {/* Accent circles */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-white/5 rounded-full blur-xl animate-pulse opacity-20" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-white/5 rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '1s' }} />
          
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 border border-gray-800 rounded-full opacity-30" />
            <div className="absolute inset-8 border border-gray-800 rounded-full opacity-30" />
            <div className="absolute inset-16 border border-gray-800 rounded-full opacity-30" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800 rotate-45 blur-lg opacity-30" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-800 rotate-12 blur-lg opacity-30" />

          {/* Additional light elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-12 max-w-3xl mx-auto text-center"
            >
              <div className="space-y-3">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-400 uppercase text-sm tracking-widest font-light"
                >
                  Welcome to the future of healthcare
                </motion.span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[-0.02em] leading-[1.3]">
                  <span className="text-white">The new standard for clinics that refuse to be ordinary</span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed tracking-[-0.01em] font-light"
              >
                CXLUS turns the patient journey into a premium, automated, and unforgettable experience — fully branded as your own
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-4"
              >
                <Button 
                  onClick={handleDemoClick}
                  className="bg-[#1a1a1a] text-white hover:bg-[#252525] transition-all duration-300 px-6 sm:px-8 py-2.5 text-sm font-light tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-white/20"
                >
                  Experience the demo
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-6 sm:px-8 py-2.5 text-sm font-light tracking-[-0.03em] rounded-full hover:scale-105 active:scale-95"
                >
                  Learn more
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 sm:px-6 bg-transparent relative">
        {/* Background continuation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black pointer-events-none">
          {/* Subtle accent elements */}
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
          
          {/* Minimal lines */}
          <div className="absolute inset-0 max-w-7xl mx-auto">
            <div className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-white/5 via-white/10 to-transparent" />
            <div className="absolute right-[15%] top-0 w-px h-full bg-gradient-to-b from-white/5 via-white/10 to-transparent" />
          </div>
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-4xl font-light text-white tracking-[-0.02em]">92%</p>
                <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                <p className="text-gray-400 font-light tracking-[-0.02em] text-lg">
                  Adherence to treatment protocols in just 30 days
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-2"
              >
                <p className="text-4xl font-light text-white tracking-[-0.02em]">67%</p>
                <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                <p className="text-gray-400 font-light tracking-[-0.02em] text-lg">
                  Increase in 5-star reviews within 45 days
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-4xl font-light text-white tracking-[-0.02em]">74%</p>
                <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                <p className="text-gray-400 font-light tracking-[-0.02em] text-lg">
                  Patients reported a more premium experience before first appointment
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-2"
              >
                <p className="text-4xl font-light text-white tracking-[-0.02em]">38%</p>
                <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                <p className="text-gray-400 font-light tracking-[-0.02em] text-lg">
                  Increase in average patient lifetime value
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-10 border-t border-white/5"
            >
              <div className="max-w-2xl">
                <p className="text-xl text-white font-light tracking-[-0.02em] leading-relaxed">
                  "Clients see ROI within the first 60 days — often recovering the monthly license with just one retained patient."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 px-4 sm:px-6 bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a] pointer-events-none">
          {/* Subtle accent elements */}
          <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-[-0.02em] mb-3 sm:mb-4">The CXLUS Difference</h2>
            <p className="text-gray-400 font-light text-base sm:text-lg">A transformative approach to patient experience</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 relative">
            {[
              {
                aspect: "First Contact",
                traditional: "Manual WhatsApp or generic call center",
                cxlus: "Personalized portal with guided onboarding"
              },
              {
                aspect: "Follow-up",
                traditional: "Manual and forgotten reminders",
                cxlus: "Intelligent automated check-ins"
              },
              {
                aspect: "Patient Portal",
                traditional: "Non-existent or generic",
                cxlus: "100% branded to your clinic"
              },
              {
                aspect: "Treatment Progress",
                traditional: "Physical files or PDF via email",
                cxlus: "Interactive visual dashboard"
              },
              {
                aspect: "Communication",
                traditional: "Fragmented across email, WhatsApp, spreadsheets",
                cxlus: "Fully integrated and automated"
              },
              {
                aspect: "Patient Referrals",
                traditional: "Informal word of mouth",
                cxlus: "Automated referral system"
              },
              {
                aspect: "Patient Perception",
                traditional: "Common, cold, disorganized",
                cxlus: "Modern, premium, unforgettable"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8"
              >
                <div className="space-y-6">
                  <div>
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                    <h3 className="text-white/80 text-lg sm:text-xl font-light tracking-[-0.02em] mb-6">{item.aspect}</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Traditional Approach</p>
                      <p className="text-gray-400 font-light text-sm sm:text-base">{item.traditional}</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-white/60 text-xs uppercase tracking-wider">CXLUS Experience</p>
                      <p className="text-white font-light text-sm sm:text-base">{item.cxlus}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Client Journey Timeline */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-[-0.03em] leading-tight mb-6">
              Create an exclusive experience
            </h2>
            <p className="text-xl font-light text-gray-400 tracking-[-0.03em] leading-relaxed mb-8 max-w-3xl mx-auto">
              A complete tech solution to support your patients, personalise care, and turn clients into advocates.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto backdrop-blur-sm"
            >
              <p className="text-lg text-gray-300 leading-relaxed tracking-[-0.03em] font-light">
                Built to elevate every client experience through intelligent automation, personalized care journeys, and meaningful connections that transform satisfied clients into your most powerful advocates.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline content */}
          <div className="relative">
            {/* Mobile Timeline (Vertical Stack) */}
            <div className="block lg:hidden space-y-8">
              {[
                {
                  step: "01",
                  icon: <UserGroupIcon className="w-6 h-6 text-white" />,
                  title: 'Create a truly personal Client Area',
                  description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                  color: 'bg-white/10'
                },
                {
                  step: "02", 
                  icon: <ArrowTrendingUpIcon className="w-6 h-6 text-white" />,
                  title: 'Deliver tailored follow-ups that feel one-on-one',
                  description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                  color: 'bg-white/10'
                },
                {
                  step: "03",
                  icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                  title: 'Turn each journey into a source of insight',
                  description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                  color: 'bg-white/10'
                },
                {
                  step: "04",
                  icon: <CheckIcon className="w-6 h-6 text-white" />,
                  title: 'Automated Client Support',
                  description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                  color: 'bg-white/10'
                },
                {
                  step: "05",
                  icon: <GiftIcon className="w-6 h-6 text-white" />,
                  title: 'Grow through love — and track every referral',
                  description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                  color: 'bg-white/10'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg border border-white/10`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-white/5 p-4 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm">
                      <div className="mb-2">
                        <span className="text-xs font-light text-gray-400 tracking-wider">
                          STEP {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-light text-white mb-2 tracking-[-0.03em]">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed tracking-[-0.03em] font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-white/5 via-white/10 to-white/5 h-full"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
                    title: 'Create a truly personal Client Area',
                    description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                    side: 'left',
                    color: 'bg-white/10'
                  },
                  {
                    step: "02", 
                    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />,
                    title: 'Deliver tailored follow-ups that feel one-on-one',
                    description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                    side: 'right',
                    color: 'bg-white/10'
                  },
                  {
                    step: "03",
                    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
                    title: 'Turn each journey into a source of insight',
                    description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                    side: 'left',
                    color: 'bg-white/10'
                  },
                  {
                    step: "04",
                    icon: <CheckIcon className="w-8 h-8 text-white" />,
                    title: 'Automated Client Support',
                    description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                    side: 'right',
                    color: 'bg-white/10'
                  },
                  {
                    step: "05",
                    icon: <GiftIcon className="w-8 h-8 text-white" />,
                    title: 'Grow through love — and track every referral',
                    description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                    side: 'left',
                    color: 'bg-white/10'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full max-w-md ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${item.side === 'right' ? 'text-right' : ''}`}>
                        <div className={`flex items-center mb-4 ${item.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm font-light text-gray-400 tracking-wider">
                            STEP {item.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-light text-white mb-3 tracking-[-0.03em]">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed tracking-[-0.03em] font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                        className={`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shadow-lg border border-white/10`}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black pointer-events-none">
          {/* Subtle accent elements */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl" />
          
          {/* Minimal line */}
          <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container mx-auto max-w-4xl relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-[-0.02em]">
                Experience the future of healthcare
              </h2>
              <p className="text-lg text-white/60 font-light tracking-[-0.02em] max-w-xl mx-auto">
                Book a personalized demo to see how CXLUS can transform your practice
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                onClick={handleDemoClick}
                className="bg-transparent hover:bg-white/5 border border-white/20 text-white transition-all duration-300 px-10 py-5 text-sm font-light tracking-wide rounded-full"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/safe.png"
                alt="Security & Privacy"
                className="max-w-full max-h-full object-contain filter invert opacity-50"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base tracking-[-0.03em] font-light max-w-2xl">
              We take privacy seriously. CXLUS follows strict data protection standards under UK & EU regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0 filter brightness-0 invert opacity-50" />
            <p className="text-gray-500 text-xs sm:text-sm tracking-[-0.03em] font-light">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 