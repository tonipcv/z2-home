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
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Pricing
              </a>
              <Button 
                onClick={() => window.location.href = 'https://www.med1.app/auth/signin'}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-6 py-2 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-gray-900 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm"
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
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <a
                    href="/partners"
                    className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </a>
                  <a
                    href="/pricing"
                    className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <Button
                    onClick={() => {
                      handleDemoClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors py-3 text-base font-medium tracking-[-0.03em] rounded-full mt-4"
                  >
                    Sign In
                  </Button>
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
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">BE THE TOP1</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">BE MED1</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-2xl leading-relaxed tracking-[-0.03em] font-medium"
              >
                The first CRM focused on patient acquisition and retention through referrals
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
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-medium tracking-[-0.03em] rounded-full hover:scale-105 active:scale-95"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-[-0.03em] leading-tight">
                  + 52.432 users
                </h2>
                <p className="text-xl font-medium text-gray-600 tracking-[-0.03em] leading-relaxed">
                  The first CRM focused on patient acquisition and retention through referrals.
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100"
              >
                <p className="text-lg text-gray-600 leading-relaxed tracking-[-0.03em]">
                  Created to transform your practice into a predictable appointment machine, 
                  it helps you become a reference in your niche, increase revenue by up to 4x, 
                  and scale without depending on paid traffic.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Benefits */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"
              />
              
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-semibold text-gray-900 mb-8 tracking-[-0.03em]"
                >
                  With MED1, you:
                </motion.h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ChartBarIcon className="w-6 h-6 text-gray-900" />,
                      title: 'Increase lead generation',
                      description: 'Generate more qualified leads through an optimized referral system'
                    },
                    {
                      icon: <ArrowTrendingUpIcon className="w-6 h-6 text-gray-900" />,
                      title: 'Improve appointment conversion',
                      description: 'Track and optimize your conversion rates at every step'
                    },
                    {
                      icon: <MagnifyingGlassIcon className="w-6 h-6 text-gray-900" />,
                      title: 'Discover exactly where your patients come from',
                      description: 'Get detailed insights into your patient acquisition channels'
                    },
                    {
                      icon: <UserGroupIcon className="w-6 h-6 text-gray-900" />,
                      title: 'Transform each patient into a service promoter',
                      description: 'Turn satisfied patients into your best marketing channel'
                    }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className="relative bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-gray-100">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            {benefit.icon}
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-gray-900 font-semibold text-lg mb-1 tracking-[-0.03em]">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 text-sm tracking-[-0.03em]">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="pt-8"
                >
                  <Button 
                    onClick={handleDemoClick}
                    className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-8 py-4 text-sm font-medium tracking-[-0.03em] rounded-full w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
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
              MED1 Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium tracking-[-0.03em]">
              Everything you need to transform your practice into an appointment machine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Smart Scheduling Link',
                description: 'With multiple origins and redirects'
              },
              {
                icon: <ChartPieIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Tracking Technology',
                description: 'For lead origins (Instagram, Google, Referrals, etc.)'
              },
              {
                icon: <ShareIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Personalized Link Generation',
                description: 'For patients, with referral metrics and rewards for the most engaged'
              },
              {
                icon: <QrCodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Trackable QR Code Generator',
                description: 'Perfect for cards, reception, or social media'
              },
              {
                icon: <PresentationChartLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Professional Dashboard',
                description: 'With all data in real-time'
              },
              {
                icon: <FunnelIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Complete Visual Pipeline',
                description: 'Showing where each lead is in the buying journey'
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

      {/* Flywheel Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">How MED1's Flywheel Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              A continuous journey of organic growth, data-driven and powered by those who trust your service the most: your own patients.
            </p>
          </motion.div>

          <div className="relative">
            {/* Flywheel Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: 'Patient schedules and origin is automatically recorded',
                  icon: <UserGroupIcon className="w-6 h-6 text-gray-900" />
                },
                {
                  step: 2,
                  title: 'You track the journey until the appointment',
                  icon: <ChartBarIcon className="w-6 h-6 text-gray-900" />
                },
                {
                  step: 3,
                  title: 'After service, they receive a trackable link to refer friends',
                  icon: <ShareIcon className="w-6 h-6 text-gray-900" />
                },
                {
                  step: 4,
                  title: 'You create incentive campaigns for top referrers',
                  icon: <GiftIcon className="w-6 h-6 text-gray-900" />
                },
                {
                  step: 5,
                  title: 'You see which channels generate more patients',
                  icon: <ChartPieIcon className="w-6 h-6 text-gray-900" />
                },
                {
                  step: 6,
                  title: 'Reinvest in channels with better ROI',
                  icon: <ArrowTrendingUpIcon className="w-6 h-6 text-gray-900" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-gray-900 font-semibold mr-2 tracking-[-0.03em]">Step {item.step}</span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em]">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              What Other Professionals Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              See how MED1 is transforming medical practice management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: "Since I started using MED1, we've tripled appointments and know exactly where each patient comes from. Retention has increased significantly.",
                author: "Dr. John Smith",
                specialty: "Cardiologist",
                location: "New York, NY"
              },
              {
                quote: "The rewarded referral system was a game-changer. Our patients have become true promoters of the practice.",
                author: "Dr. Sarah Johnson",
                specialty: "Dermatologist",
                location: "Los Angeles, CA"
              },
              {
                quote: "The visibility we have today on patient origins has allowed us to optimize our marketing investments.",
                author: "Dr. Michael Brown",
                specialty: "Orthopedist",
                location: "Chicago, IL"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <p className="text-gray-900 italic mb-4 sm:mb-6 flex-grow text-sm sm:text-base tracking-[-0.03em]">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-gray-900 font-semibold text-base sm:text-lg tracking-[-0.03em]">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm tracking-[-0.03em]">{testimonial.specialty}</p>
                    <p className="text-gray-600 text-xs sm:text-sm tracking-[-0.03em]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              Why Choose MED1?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Compare how MED1 transforms your practice management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <XMarkIcon className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-[-0.03em]">
                  Without MED1
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Patient Origin',
                    description: 'Don\'t know where patients come from and miss optimization opportunities'
                  },
                  {
                    title: 'Referrals',
                    description: 'Improvised referral system without patient incentives'
                  },
                  {
                    title: 'Acquisition Costs',
                    description: 'High CAC and no control over marketing investments'
                  },
                  {
                    title: 'Lead Management',
                    description: 'Leads get lost in WhatsApp with no journey tracking'
                  },
                  {
                    title: 'Decision Making',
                    description: 'Decisions based on assumptions, without concrete data'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-400 text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-gray-500 text-sm tracking-[-0.03em]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <CheckIcon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-[-0.03em]">
                  With MED1
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Complete Tracking',
                    description: 'Know exactly the origin of each patient and optimize the most efficient channels'
                  },
                  {
                    title: 'Referral System',
                    description: 'Trackable links and reward system that encourages referrals'
                  },
                  {
                    title: 'Optimized Costs',
                    description: 'Organic and predictable acquisition with significant CAC reduction'
                  },
                  {
                    title: 'Professional Pipeline',
                    description: 'Complete tracking of the lead journey until conversion'
                  },
                  {
                    title: 'Data-Driven Decisions',
                    description: 'Complete dashboard with real-time metrics for decision making'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-gray-500 text-sm tracking-[-0.03em]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 tracking-[-0.03em]">
              Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-[-0.03em]">
              Discover how MED1 can revolutionize your practice management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real increase in appointment rates',
                description: 'Transform each patient into a service promoter and watch your appointments grow organically'
              },
              {
                title: 'Reduced cost per patient',
                description: 'With organic and predictable acquisition, significantly reduce your CAC'
              },
              {
                title: 'More retention and more referrals',
                description: 'Reward system that encourages your patients to refer more'
              },
              {
                title: 'Complete performance view',
                description: 'Professional dashboard with all data in real-time'
              },
              {
                title: 'Team with more control',
                description: 'Complete visual pipeline to track each lead in the journey'
              },
              {
                title: 'Less improvisation',
                description: 'Clear and automated processes for the entire team'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <CheckIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-[-0.03em]">{benefit.title}</h3>
                    <p className="text-gray-500 tracking-[-0.03em]">{benefit.description}</p>
                  </div>
                </div>
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

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0" />
            <p className="text-gray-600 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 MED1. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 