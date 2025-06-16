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
    <div className="min-h-screen bg-white text-gray-900 font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Partners
              </a>
              <Button 
                onClick={() => window.location.href = 'https://app.cxlus.com/auth/signin'}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-6 py-2 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>
    
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <Button 
                onClick={handleDemoClick}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-4 py-2 text-xs font-medium tracking-[-0.03em] rounded-full"
              >
                Get a Demo
              </Button>
              <button
                className="p-2.5 text-gray-900 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm"
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
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/partners"
                      className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Partners
                    </a>
                  </div>
                  
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
                      className="flex-1 bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 py-3 text-base font-medium tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl"
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
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-[#f8f9fa] relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-[#ffffff] to-[#f8f9fa]" />
          
          {/* Large circles */}
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border border-gray-200 rounded-full blur-2xl" />
          <div className="absolute -bottom-48 -right-32 w-[800px] h-[800px] border border-gray-200 rounded-full blur-2xl" />
          
          {/* Accent circles */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-gray-200 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-gray-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 border border-gray-200 rounded-full" />
            <div className="absolute inset-8 border border-gray-200 rounded-full" />
            <div className="absolute inset-16 border border-gray-200 rounded-full" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-200 rotate-45 blur-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-200 rotate-12 blur-lg" />

          {/* Additional light elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gray-100 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-2xl" />
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
              className="space-y-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.1]">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">Supercharge Growth by</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">Elevating Every Experience</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-2xl leading-relaxed tracking-[-0.03em] font-medium"
              >
                A complete tech solution to support your patients, personalise care, and turn clients into advocates.
              </motion.p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-start mt-8 sm:mt-12"
            >
              <Button 
                onClick={handleDemoClick}
                className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-medium tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                See demo
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-medium tracking-[-0.03em] rounded-full hover:scale-105 active:scale-95"
              >
                Get started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Carousel Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-gray-500 text-xs sm:text-sm tracking-[-0.03em] uppercase font-medium">
              We integrate with the most trusted tools:
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-6 sm:space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                { src: "/su1.webp", alt: "Integration 1" },
                { src: "/su2.webp", alt: "Integration 2" },
                { src: "/su3.png", alt: "Integration 3" },
                { src: "/su4.png", alt: "Integration 4" },
                { src: "/su5.png", alt: "Integration 5" },
                { src: "/su6.svg.png", alt: "Integration 6" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center bg-white rounded-lg p-3 sm:p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { src: "/su1.webp", alt: "Integration 1" },
                { src: "/su2.webp", alt: "Integration 2" },
                { src: "/su3.png", alt: "Integration 3" },
                { src: "/su4.png", alt: "Integration 4" },
                { src: "/su5.png", alt: "Integration 5" },
                { src: "/su6.svg.png", alt: "Integration 6" },
              ].map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center bg-white rounded-lg p-3 sm:p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-900 tracking-[-0.03em]">
              All the tools to grow a loyal customer base
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium tracking-[-0.03em]">
              Everything you need to transform your practice into an appointment machine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Smart Client Communication',
                description: 'Unify conversations across WhatsApp, email, and SMS with AI that automatically answers common questions from your FAQ, prepares clients for their next steps, and prompts satisfied clients for reviews and referrals—enhancing experience and driving growth.'
              },
              {
                icon: <ArrowTrendingUpIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Lead Growth & Nurturing',
                description: 'Automatically capture and manage new leads while tracking every interaction—turning interest into loyal, long-term clients with intelligent follow-ups and conversion tools.'
              },
              {
                icon: <PresentationChartLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Personalized Membership Area',
                description: 'Deliver an on-demand, branded experience with customized videos, recipes, schedules, and daily checklists—all in one private membership space tailored to each client\'s protocol.'
              },
              {
                icon: <CheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Automated Client Support',
                description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients'
              },
              {
                icon: <GiftIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Loyalty & Referral System',
                description: 'Reward your community with personalized referral links, built-in loyalty perks, and smart tracking that helps you grow your client base while deepening retention.'
              },
              {
                icon: <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Insights & Optimization Dashboard',
                description: 'Track real-time engagement, client progress, and platform usage in one powerful dashboard—so you can continuously improve care and client experience.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
              >
                <div className="mb-3 sm:mb-4 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 tracking-[-0.03em]">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Client Journey Timeline */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-[-0.03em] leading-tight mb-6">
              Create an exclusive experience
            </h2>
            <p className="text-xl font-medium text-gray-600 tracking-[-0.03em] leading-relaxed mb-8 max-w-3xl mx-auto">
              A complete tech solution to support your patients, personalise care, and turn clients into advocates.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 max-w-4xl mx-auto"
            >
              <p className="text-lg text-gray-600 leading-relaxed tracking-[-0.03em]">
                Built to elevate every client experience through intelligent automation, personalized care journeys, and meaningful connections that transform satisfied clients into your most powerful advocates.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline - Mobile First Design */}
          <div className="relative">
            {/* Mobile Timeline (Vertical Stack) */}
            <div className="block lg:hidden space-y-8">
              {[
                {
                  step: "01",
                  icon: <UserGroupIcon className="w-6 h-6 text-white" />,
                  title: 'Create a truly personal Client Area',
                  description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                  color: 'bg-blue-500'
                },
                {
                  step: "02", 
                  icon: <ArrowTrendingUpIcon className="w-6 h-6 text-white" />,
                  title: 'Deliver tailored follow-ups that feel one-on-one',
                  description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                  color: 'bg-green-500'
                },
                {
                  step: "03",
                  icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                  title: 'Turn each journey into a source of insight',
                  description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                  color: 'bg-purple-500'
                },
                {
                  step: "04",
                  icon: <CheckIcon className="w-6 h-6 text-white" />,
                  title: 'Automated Client Support',
                  description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                  color: 'bg-orange-500'
                },
                {
                  step: "05",
                  icon: <GiftIcon className="w-6 h-6 text-white" />,
                  title: 'Grow through love — and track every referral',
                  description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                  color: 'bg-pink-500'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  {/* Mobile Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="mb-2">
                        <span className="text-xs font-bold text-gray-400 tracking-wider">
                          STEP {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-[-0.03em]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed tracking-[-0.03em]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline (Original Design) */}
            <div className="hidden lg:block">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 h-full"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
                    title: 'Create a truly personal Client Area',
                    description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                    side: 'left',
                    color: 'bg-blue-500'
                  },
                  {
                    step: "02", 
                    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />,
                    title: 'Deliver tailored follow-ups that feel one-on-one',
                    description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                    side: 'right',
                    color: 'bg-green-500'
                  },
                  {
                    step: "03",
                    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
                    title: 'Turn each journey into a source of insight',
                    description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                    side: 'left',
                    color: 'bg-purple-500'
                  },
                  {
                    step: "04",
                    icon: <CheckIcon className="w-8 h-8 text-white" />,
                    title: 'Automated Client Support',
                    description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                    side: 'right',
                    color: 'bg-orange-500'
                  },
                  {
                    step: "05",
                    icon: <GiftIcon className="w-8 h-8 text-white" />,
                    title: 'Grow through love — and track every referral',
                    description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                    side: 'left',
                    color: 'bg-pink-500'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Content */}
                    <div className={`w-full max-w-md ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${item.side === 'right' ? 'text-right' : ''}`}>
                        <div className={`flex items-center mb-4 ${item.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm font-bold text-gray-400 tracking-wider">
                            STEP {item.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-[-0.03em]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed tracking-[-0.03em]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                        className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center mt-16"
          >
            <Button 
              onClick={handleDemoClick}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-8 py-4 text-lg font-medium tracking-[-0.03em] rounded-full"
            >
              Start Your Client Journey
            </Button>
          </motion.div>
        </div>
      </section>

      
      {/* Who We Serve Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              Who we serve
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base tracking-[-0.03em] leading-relaxed">
              We support forward-thinking clinics and health practitioners in diverse fields to grow their client base and deliver exceptional experiences through tech solutions that turn patients into loyal advocates.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                title: 'Boutique Clinics',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Solo Practitioners',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Doctors',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Health Specialists',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Aesthetic Health Practitioners',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Wellness Professionals',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 tracking-[-0.03em] leading-tight">
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-[-0.03em]">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base tracking-[-0.03em]">
              Schedule a free demo and discover how we can help your business grow
            </p>
            <Button 
              onClick={handleDemoClick}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto tracking-[-0.03em] rounded-full"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
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
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em] font-medium max-w-2xl">
              We take privacy seriously. CXLUS follows strict data protection standards under UK & EU regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0" />
            <p className="text-gray-600 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 